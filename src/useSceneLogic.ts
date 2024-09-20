// useSceneLogic.ts

import { useState, useEffect, useCallback } from 'react';
import { type Scene, scenes } from './types';

export const useSceneLogic = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [showText, setShowText] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

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
    const currentScene = scenes[currentSceneIndex];
    const lastFrameIndex = currentScene.frames.length - 1;

    if (currentFrameIndex < lastFrameIndex) {
      id = window.setTimeout(() => {
        setCurrentFrameIndex(currentFrameIndex + 1);
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
  }, [currentFrameIndex, currentSceneIndex]);

  const jumpToScene = useCallback((newSceneIndex: number) => {
    if (newSceneIndex >= 0 && newSceneIndex < scenes.length) {
      (scenes[newSceneIndex] as Scene); 
      setIsTransitioning(true);
      setShowText(false);
      setIsTransitioning(true);
      setShowText(false);
      setTimeout(() => {
        setCurrentSceneIndex(newSceneIndex);
        setCurrentFrameIndex(0);
        setCurrentTextIndex(0);
        setIsTransitioning(false);
      }, 300);
    }
  }, []);
  const handleSceneClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLInputElement || isTransitioning) {
      return;
    }

    const currentScene = scenes[currentSceneIndex];

    if (currentScene.leftClick !== undefined || currentScene.rightClick !== undefined || currentScene.choices) {
      return; // Don't handle general clicks for scenes with left/right clicks or choices
    }

    if (showText) {
      if (currentTextIndex < currentScene.texts.length - 1) {
        setShowText(false);
        setTimeout(() => {
          setCurrentTextIndex(currentTextIndex + 1);
          setShowText(true);
        }, 300);
      } else if (!currentScene.choices) {
        // Only move to the next scene if there are no choices
        jumpToScene((currentSceneIndex + 1) % scenes.length);
      }
    } else {
      setShowText(true);
    }
  }, [currentSceneIndex, currentTextIndex, showText, isTransitioning, jumpToScene]);

  const handleLeftClick = useCallback(() => {
    const currentScene = scenes[currentSceneIndex];
    if (currentScene.leftClick !== undefined && !isTransitioning) {
      jumpToScene(currentScene.leftClick);
    }
  }, [currentSceneIndex, isTransitioning, jumpToScene]);

  const handleRightClick = useCallback(() => {
    const currentScene = scenes[currentSceneIndex];
    if (currentScene.rightClick !== undefined && !isTransitioning) {
      jumpToScene(currentScene.rightClick);
    }
  }, [currentSceneIndex, isTransitioning, jumpToScene]);

  const handleChoice = useCallback((choiceIndex: number) => {
    const currentScene = scenes[currentSceneIndex];
    if (currentScene.choices && currentScene.choices[choiceIndex]) {
      const nextSceneIndex = currentScene.choices[choiceIndex].nextScene;
      jumpToScene(nextSceneIndex);
    }
  }, [currentSceneIndex, jumpToScene]);

  const goToPreviousScene = useCallback(() => {
    if (!isTransitioning) {
      const newIndex = currentSceneIndex > 0 ? currentSceneIndex - 1 : scenes.length - 1;
      jumpToScene(newIndex);
    }
  }, [currentSceneIndex, isTransitioning, jumpToScene]);

  const goToNextScene = useCallback(() => {
    if (!isTransitioning) {
      const newIndex = (currentSceneIndex + 1) % scenes.length;
      jumpToScene(newIndex);
    }
  }, [currentSceneIndex, isTransitioning, jumpToScene]);

  const handleNameInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }, []);

  return {
    currentScene: scenes[currentSceneIndex],
    currentSceneIndex,
    currentFrameIndex,
    currentTextIndex,
    showText,
    userName,
    isTransitioning,
    handleSceneClick,
    handleNameInput,
    handleLeftClick,
    handleRightClick,
    jumpToScene,
    goToPreviousScene,
    goToNextScene,
    handleChoice,
  };
};
