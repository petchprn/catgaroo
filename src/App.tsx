// App.tsx

import React, { useState } from 'react';
import './App.css';
import SceneRenderer from './SceneRenderer';
import DevNav from './DevNav';
import { useSceneLogic } from './useSceneLogic';
import { Scene, AudioTrack } from './types';
import AudioManager from './AudioManager';
import { audioTracks as initialAudioTracks } from './AudioTracks';
import { scenes as initialScenes } from './types';

const App: React.FC = () => {
  const [audioTracks] = useState<AudioTrack[]>(initialAudioTracks);
  const [scenes] = useState<Scene[]>(initialScenes);
  const showDevNav = true;

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
  } = useSceneLogic(); // Remove scenes parameter

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

        <AudioManager currentFrame={currentFrame} audioTracks={audioTracks} />
        
        {showDevNav && (
          <DevNav
            currentSceneId={currentSceneId}
            scenes={scenes}
            audioTracks={audioTracks}
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