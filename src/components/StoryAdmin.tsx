import React, { useState } from 'react';
import { AudioTrack, Scene } from '../types';
import { updateOrAdd } from '../utils/helpers';
import AudioEditor from './editors/AudioEditor';
import SceneEditor from './editors/SceneEditor';
import { Link } from 'react-router-dom';

interface AdminPanelProps {
    audioTracks: AudioTrack[];
    scenes: Scene[];
    onSave: (newData: { audioTracks: AudioTrack[]; scenes: Scene[] }) => void;
  }
  
  const StoryAdmin: React.FC<AdminPanelProps> = ({ audioTracks, scenes, onSave }) => {
    const [activeTab, setActiveTab] = useState<'audio'|'scenes'|'frames'>('audio');
    const [editingAudio, setEditingAudio] = useState<AudioTrack|null>(null);
    const [editingScene, setEditingScene] = useState<Scene|null>(null);
    
    return (
      <div className="admin-panel">
        <div className="admin-tabs">
          <button onClick={() => setActiveTab('audio')}>Audio Tracks</button>
          <button onClick={() => setActiveTab('scenes')}>Scenes</button>
          <button onClick={() => setActiveTab('frames')}>Frames</button>
        </div>
  
        {activeTab === 'audio' && (
          <div className="audio-admin">
            <button onClick={() => setEditingAudio({} as AudioTrack)}>
              + New Audio Track
            </button>
            
            {audioTracks.map(track => (
              <div key={track.id} className="audio-item">
                <span>{track.id}</span>
                <button onClick={() => setEditingAudio(track)}>Edit</button>
              </div>
            ))}
          </div>
        )}
  
        {activeTab === 'scenes' && (
          <div className="scene-admin">
            <button onClick={() => setEditingScene({} as Scene)}>
              + New Scene
            </button>
            
            {scenes.map(scene => (
              <div key={scene.id} className="scene-item">
                <span>{scene.id}</span>
                <button onClick={() => setEditingScene(scene)}>Edit</button>
              </div>
            ))}
          </div>
        )}
  
        {editingAudio && (
          <AudioEditor 
            track={editingAudio}
            onSave={(updated) => {
              // Handle new tracks without IDs
              const isNewTrack = !audioTracks.some(t => t.id === updated.id);
              const updatedTracks = isNewTrack 
                ? [...audioTracks, updated]
                : audioTracks.map(t => t.id === updated.id ? updated : t);
              
              onSave({
                audioTracks: updatedTracks,
                scenes
              });
              setEditingAudio(null);
            }}
            onCancel={() => setEditingAudio(null)}
          />
        )}
  
        {editingScene && (
          <SceneEditor
            scene={editingScene}
            onSave={(updated) => {
              const isNewScene = !scenes.some(s => s.id === updated.id);
              const updatedScenes = isNewScene
                ? [...scenes, updated]
                : scenes.map(s => s.id === updated.id ? updated : s);
              
              onSave({
                audioTracks,
                scenes: updatedScenes
              });
              setEditingScene(null);
            }}
            onCancel={() => setEditingScene(null)}
          />
        )}
        <Link to="/" className="admin-back-link">&larr; Back to Game</Link>
      </div>
    );
  };

export default StoryAdmin;