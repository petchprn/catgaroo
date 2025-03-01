import React from 'react';
import { Scene } from '../../types';

interface SceneEditorProps {
  scene: Scene;
  onSave: (scene: Scene) => void;
  onCancel: () => void;
}

const SceneEditor: React.FC<SceneEditorProps> = ({ scene, onSave, onCancel }) => {
  const [editedScene] = React.useState<Scene>(scene);

  return (
    <div className="editor-modal">
      <h3>Edit Scene: {scene.id}</h3>
      <div className="editor-actions">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={() => onSave(editedScene)}>Save</button>
      </div>
    </div>
  );
};

export default SceneEditor;