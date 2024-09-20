// DevNav.tsx

import React, { useState } from 'react';

interface DevNavProps {
  currentSceneIndex: number;
  totalScenes: number;
  goToPreviousScene: () => void;
  goToNextScene: () => void;
  jumpToScene: (sceneIndex: number) => void;
}

const DevNav: React.FC<DevNavProps> = ({
  currentSceneIndex,
  totalScenes,
  goToPreviousScene,
  goToNextScene,
  jumpToScene,
}) => {
  const [inputSceneIndex, setInputSceneIndex] = useState('');

  const handleJumpToScene = () => {
    const sceneIndex = parseInt(inputSceneIndex, 10) - 1; 
    if (!isNaN(sceneIndex) && sceneIndex >= 0 && sceneIndex < totalScenes) {
      jumpToScene(sceneIndex);
      setInputSceneIndex('');
    }
  };

  return (
    <div className="dev-nav">
      <button onClick={goToPreviousScene}>&larr;</button>
      <span>{`${currentSceneIndex + 1} / ${totalScenes}`}</span>
      <button onClick={goToNextScene}>&rarr;</button>
      <input
        type="number"
        value={inputSceneIndex}
        onChange={(e) => setInputSceneIndex(e.target.value)}
        placeholder="Jump to scene"
        min="1"
        max={totalScenes}
      />
      <button onClick={handleJumpToScene}>Jump</button>
    </div>
  );
};

export default DevNav;
