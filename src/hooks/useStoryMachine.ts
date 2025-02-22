import { useState, useEffect, useCallback } from 'react';
import { Scene, GameState, Transition } from '../types';

interface StoryMachine {
  currentScene: Scene | null;
  gameState: GameState;
  handleInteraction: (choice?: string) => void;
  jumpToScene: (sceneId: string) => void;
  updateState: (update: Partial<GameState>) => void;
}

export const useStoryMachine = (initialScenes: Scene[], initialGameState: GameState): StoryMachine => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [currentScene, setCurrentScene] = useState<Scene | null>(
    initialScenes.find(s => s.id === initialGameState.currentSceneId) || null
  );

  const evaluateTransitions = useCallback(() => {
    if (!currentScene) return null;
    
    return currentScene.transitions.filter(transition => {
      if (!transition.condition) return true;
      return transition.condition(gameState);
    });
  }, [currentScene, gameState]);

  const handleInteraction = useCallback((choice?: string) => {
    const validTransitions = evaluateTransitions()?.filter(t => {
      if (t.trigger === 'choice') return choice === t.targetSceneId;
      return true;
    });

    if (!validTransitions?.length) return;

    const nextTransition = validTransitions[0];
    const nextScene = initialScenes.find(s => s.id === nextTransition.targetSceneId);

    if (nextScene) {
      setGameState(prev => ({
        ...prev,
        currentSceneId: nextScene.id,
        previousScenes: [...prev.previousScenes, prev.currentSceneId]
      }));
      setCurrentScene(nextScene);
    }
  }, [evaluateTransitions, initialScenes]);

  const jumpToScene = useCallback((sceneId: string) => {
    const scene = initialScenes.find(s => s.id === sceneId);
    if (scene) {
      setCurrentScene(scene);
      setGameState(prev => ({
        ...prev,
        currentSceneId: sceneId,
        previousScenes: [...prev.previousScenes, prev.currentSceneId]
      }));
    }
  }, [initialScenes]);

  const updateState = useCallback((update: Partial<GameState>) => {
    setGameState(prev => ({ ...prev, ...update }));
  }, []);

  return {
    currentScene,
    gameState,
    handleInteraction,
    jumpToScene,
    updateState
  };
};