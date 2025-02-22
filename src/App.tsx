// App.tsx

import React from 'react';
import './App.css';
import SceneRenderer from './SceneRenderer';
import DevNav from './DevNav';
import { useSceneLogic } from './useSceneLogic';
import { scenes } from './types';
import AudioManager from './AudioManager';
import { audioTracks } from './AudioTracks';

const App: React.FC = () => {
  const {
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
  } = useSceneLogic();

  // Enable DevNav only in development
  const showDevNav = process.env.NODE_ENV === 'development';

  const {
    gameState,
    handleInteraction,
    updateState
  } = useStoryMachine(initialScenes, initialGameState);

  return (
    <div className="App" onClick={currentScene?.texts[currentTextIndex]?.includes('$input_name$') ? undefined : handleSceneClick}>
      <header className="App-header">
        {currentScene && (
          <SceneRenderer
            scene={currentScene}
            currentFrameIndex={currentFrameIndex}
            showText={showText}
            currentTextIndex={currentTextIndex}
            userName={userName}
            isTransitioning={isTransitioning}
            onNameInput={handleNameInput}
            onChoice={handleChoice}
            isLoaded={loadedScenes.has(currentSceneId)}
            onNameSubmit={handleNameSubmit}
          />
        )}
        {showDevNav && (
          <DevNav
            currentSceneId={currentSceneId}
            scenes={scenes}
            goToPreviousScene={goToPreviousScene}
            goToNextScene={goToNextScene}
            jumpToScene={jumpToScene}
          />
        )}
        <AudioManager currentFrame={currentFrame} currentSceneId={currentSceneId} audioTracks={audioTracks} />
      </header>
    </div>
  );
};

export default App;