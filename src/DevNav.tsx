// DevNav.tsx

import React, { useState, useEffect } from 'react';
import { Scene } from './types';

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
  const [selectedScene, setSelectedScene] = useState(currentSceneId);

  useEffect(() => {
    setSelectedScene(currentSceneId);
  }, [currentSceneId]);

  return (
    <div className="dev-nav">
      <div>
        <button onClick={goToPreviousScene}>&lt; Previous</button>
        <button onClick={goToNextScene}>Next &gt;</button>
      </div>
      
      <select 
        value={selectedScene} 
        onChange={(e) => jumpToScene(e.target.value)}
      >
        {scenes.map(scene => (
          <option key={scene.id} value={scene.id}>
            {formatSceneId(scene.id)} - {scene.texts?.[0]?.substring(0, 20)}...
          </option>
        ))}
      </select>
      
      <div className="scene-title">
        <div className="formatted-id">{formatSceneId(currentSceneId)}</div>
        <div className="original-id">({currentSceneId})</div>
      </div>
    </div>
  );
};

export default DevNav;

export const formatSceneId = (id: string) => {
  // Add space before capital letters and numbers, then capitalize first letter
  return id
    .replace(/([A-Z0-9])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace(/_/g, ' ');
};
