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
    handleLeftClick,
    handleRightClick,
    jumpToScene,
    goToPreviousScene,
    goToNextScene,
    handleChoice,
    loadedScenes,
  } = useSceneLogic();

  // DevNav UI
  const showDevNav = true;

  return (
    <div className="App" onClick={handleSceneClick}>
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
            onLeftClick={handleLeftClick}
            onRightClick={handleRightClick}
            onChoice={handleChoice}
            isLoaded={loadedScenes.has(currentSceneId)}
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
