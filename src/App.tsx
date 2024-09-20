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
  } = useSceneLogic();

  // DevNav UI
  const showDevNav = true;

  return (
    <div className="App" onClick={handleSceneClick}>
      <header className="App-header">
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
        />
        {showDevNav && (
          <DevNav
            currentSceneIndex={currentSceneIndex}
            totalScenes={scenes.length}
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
