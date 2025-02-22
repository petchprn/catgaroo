import React, { useState } from 'react';
import { AudioTrack } from '../../types';

const AudioEditor: React.FC<{
    track: AudioTrack;
    onSave: (track: AudioTrack) => void;
    onCancel: () => void;
  }> = ({ track, onSave, onCancel }) => {
    const [edited, setEdited] = useState<AudioTrack>(track);
    
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setEdited((prev: AudioTrack) => ({
          ...prev,
          src: URL.createObjectURL(file)
        }));
      }
    };

    return (
      <div className="editor-modal">
        <h3>Edit Audio Track</h3>
        <label>
          ID:
          <input 
            value={edited.id}
            onChange={e => setEdited({...edited, id: e.target.value})}
          />
        </label>
        
        <label>
          Audio File:
          <input type="file" accept="audio/*" onChange={handleFileUpload} />
        </label>
        
        <div className="editor-actions">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={() => onSave(edited)}>Save</button>
        </div>
      </div>
    );
  };

export default AudioEditor;