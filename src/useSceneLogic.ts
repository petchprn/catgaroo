// useSceneLogic.ts

import { useState, useEffect, useCallback } from 'react';
import { scenes } from './types';

export const useSceneLogic = () => {
  const [currentSceneId, setCurrentSceneId] = useState<string>(scenes[0].id);
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [showText, setShowText] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [loadedScenes, setLoadedScenes] = useState<Set<string>>(new Set());
  const [currentFrame, setCurrentFrame] = useState<string>('');

  const preloadImages = useCallback((sceneIds: string[]) => {
    sceneIds.forEach(sceneId => {
      const scene = scenes.find(s => s.id === sceneId);
      if (scene && !loadedScenes.has(sceneId)) {
        const imagesToLoad = Array.isArray(scene.frames) ? scene.frames : [scene.frames];
        Promise.all(imagesToLoad.map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src.startsWith('/') ? src : `/${src}`;
            img.onload = resolve;
            img.onerror = reject;
          });
        })).then(() => {
          setLoadedScenes(prev => new Set(prev).add(sceneId));
        });
      }
    });
  }, [loadedScenes]);

  useEffect(() => {
    scenes.forEach(scene => {
      scene.frames.forEach(src => {
        const img = new Image();
        img.src = src.startsWith('/') ? src : `/${src}`;
      });
    });
  }, []);

  useEffect(() => {
    let id: number;
    const currentScene = scenes.find(scene => scene.id === currentSceneId);
    if (!currentScene) return;

    const lastFrameIndex = currentScene.frames.length - 1;

    if (currentFrameIndex < lastFrameIndex) {
      id = window.setTimeout(() => {
        setCurrentFrameIndex(currentFrameIndex + 1);
        setShowText(false);
      }, 400);
    } else {
      id = window.setTimeout(() => {
        setIsTransitioning(false);
        setShowText(true);
      }, 500);
    }

    return () => {
      window.clearTimeout(id);
    };
  }, [currentFrameIndex, currentSceneId]);

  useEffect(() => {
    const currentScene = scenes.find(scene => scene.id === currentSceneId);
    if (currentScene && Array.isArray(currentScene.frames)) {
      setCurrentFrame(currentScene.frames[currentFrameIndex]);
    }
  }, [currentSceneId, currentFrameIndex]);

  useEffect(() => {
    console.log(`Current frame updated: ${currentFrame}`);
  }, [currentFrame]);

  const jumpToScene = useCallback((newSceneId: string) => {
    const newScene = scenes.find(scene => scene.id === newSceneId);
    if (newScene) {
      setIsTransitioning(true);
      setShowText(false);
      setTimeout(() => {
        setCurrentSceneId(newSceneId);
        setCurrentFrameIndex(0);
        setCurrentTextIndex(0);
        setCurrentFrame(newScene.frames[0]);
        setIsTransitioning(false);
        setShowText(true);
        // Preload the next scene if it exists
        if (newScene.nextSceneId) {
          preloadImages([newScene.nextSceneId]);
        }
      }, 300);
    }
  }, [preloadImages, scenes]);

  const handleSceneClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLInputElement || isTransitioning) {
      console.log('Ignoring click: input or transitioning');
      return;
    }

    const currentScene = scenes.find(scene => scene.id === currentSceneId);
    if (!currentScene) {
      console.log('No current scene found');
      return;
    }

    if (currentScene.choices) {
      console.log('Ignoring click: scene has choices');
      return;
    }


    if (showText) {
      if (currentTextIndex < currentScene.texts.length - 1) {
        setShowText(false);
        setTimeout(() => {
          setCurrentTextIndex(prevIndex => {
            return prevIndex + 1;
          });
          setShowText(true);
        }, 300);
      } else if (currentScene.nextSceneId) {
        jumpToScene(currentScene.nextSceneId);
      } else {
      }
    } else {
      setShowText(true);
    }
  }, [currentSceneId, currentTextIndex, showText, isTransitioning, jumpToScene]);

  const handleChoice = useCallback((choiceIndex: number) => {
    const currentScene = scenes.find(scene => scene.id === currentSceneId);
    if (currentScene?.choices && currentScene.choices[choiceIndex]) {
      const nextSceneId = currentScene.choices[choiceIndex].nextSceneId;
      jumpToScene(nextSceneId);
    }
  }, [currentSceneId, jumpToScene]);

  const goToPreviousScene = useCallback(() => {
    if (!isTransitioning) {
      const currentIndex = scenes.findIndex(scene => scene.id === currentSceneId);
      const newIndex = currentIndex > 0 ? currentIndex - 1 : scenes.length - 1;
      jumpToScene(scenes[newIndex].id);
    }
  }, [currentSceneId, isTransitioning, jumpToScene]);

  const goToNextScene = useCallback(() => {
    if (!isTransitioning) {
      const currentScene = scenes.find(scene => scene.id === currentSceneId);
      if (currentScene && currentScene.nextSceneId) {
        jumpToScene(currentScene.nextSceneId);
      }
    }
  }, [currentSceneId, isTransitioning, jumpToScene]);

  const handleNameInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }, []);

  const handleNameSubmit = useCallback((name: string) => {
    if (name.trim() !== '') {
      setUserName(name);
      console.log(`Name submitted: ${name}`);
      setShowText(true);
      jumpToScene('intro2');
      return true;
    }
    return false;
  }, [jumpToScene]);

  useEffect(() => {
    const currentScene = scenes.find(scene => scene.id === currentSceneId);
    if (currentScene) {
      const scenesToPreload = [currentSceneId];
      if (currentScene.nextSceneId) {
        scenesToPreload.push(currentScene.nextSceneId);
      }
      preloadImages(scenesToPreload);
    }
  }, [currentSceneId, preloadImages]);

  const currentScene = scenes.find(scene => scene.id === currentSceneId);

  return {
    currentScene,
    currentSceneId,
    currentFrameIndex,
    currentTextIndex,
    showText,
    userName,
    isTransitioning,
    handleSceneClick,
    handleNameInput,
    jumpToScene,
    goToPreviousScene,
    goToNextScene,
    handleChoice,
    loadedScenes,
    handleNameSubmit,
    currentFrame,
  };
};