// DevNav.tsx

import React, { useState } from 'react';
import { Scene } from './types'; // Adjust the import path as needed

interface DevNavProps {
  currentSceneId: string;
  scenes: Scene[];
  goToPreviousScene: () => void;
  goToNextScene: () => void;
  jumpToScene: (sceneId: string) => void;
}

const DevNav: React.FC<DevNavProps> = ({
  currentSceneId,
  scenes,
  goToPreviousScene,
  goToNextScene,
  jumpToScene,
}) => {
  const [inputSceneId, setInputSceneId] = useState('');

  const handleJumpToScene = () => {
    if (inputSceneId && scenes.some(scene => scene.id === inputSceneId)) {
      jumpToScene(inputSceneId);
      setInputSceneId('');
    }
  };

  return (
    <div className="dev-nav">
      <button onClick={goToPreviousScene}>&larr;</button>
      <span>{`${currentSceneId}`}</span>
      <button onClick={goToNextScene}>&rarr;</button>
      <input
        type="text"
        value={inputSceneId}
        onChange={(e) => setInputSceneId(e.target.value)}
        placeholder="Jump to scene"
      />
      <button onClick={handleJumpToScene}>Jump</button>
    </div>
  );
};

export default DevNav;
