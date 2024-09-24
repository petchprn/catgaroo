// App.tsx

import React from 'react';
import './App.css';
import SceneRenderer from './SceneRenderer';
import DevNav from './DevNav';
import { useSceneLogic } from './useSceneLogic';
import { scenes } from './types';

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
  } = useSceneLogic();

  // DevNav UI
  const showDevNav = true;

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
      </header>
    </div>
  );
};

export default App;