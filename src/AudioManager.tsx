import React, { useEffect, useRef } from 'react';
import { AudioTrack, Scene } from './types';

interface AudioManagerProps {
  currentFrame: string;
  audioTracks: AudioTrack[];
  currentScene?: Scene;
}

const AudioManager: React.FC<AudioManagerProps> = ({ currentFrame, audioTracks, currentScene }) => {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  const activeTracks = useRef<Set<string>>(new Set());

  // Preload audio when tracks change
  useEffect(() => {
    audioTracks.forEach(track => {
      if (!audioRefs.current[track.id]) {
        const audio = new Audio(track.src);
        audio.loop = track.loop || false;
        audio.volume = track.volume;
        audioRefs.current[track.id] = audio;
      }
    });
  }, [audioTracks]);

  // Main audio control logic
  useEffect(() => {
    const sceneAudio = audioTracks.filter(t => 
      t.startFrame === currentScene?.id || 
      t.stopFrame === currentScene?.id
    );

    sceneAudio.forEach(track => {
      const audio = audioRefs.current[track.id];
      if (!audio) return;

      if (currentScene?.id === track.startFrame) {
        audio.play().catch(console.error);
        activeTracks.current.add(track.id);
      } else if (currentScene?.id === track.stopFrame) {
        audio.pause();
        audio.currentTime = 0;
        activeTracks.current.delete(track.id);
      }
    });
  }, [currentScene?.id, audioTracks]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      activeTracks.current.forEach(trackId => {
        const audio = audioRefs.current[trackId];
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    };
  }, []);

  return null;
};

export default AudioManager;