import React, { useEffect, useRef } from 'react';
import { AudioTrack } from './types';

interface AudioManagerProps {
  currentFrame: string;
  currentSceneId: string;
  audioTracks: AudioTrack[];
}

const AudioManager: React.FC<AudioManagerProps> = ({ currentFrame, currentSceneId, audioTracks }) => {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  const playingTracks = useRef<Set<string>>(new Set());

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

  useEffect(() => {
    audioTracks.forEach(track => {
      const audio = audioRefs.current[track.id];
      if (!audio) return;

      const shouldStart = currentFrame === track.startFrame || currentSceneId === track.startFrame;
      const shouldStop = currentFrame === track.stopFrame || currentSceneId === track.stopFrame;

      if (shouldStart && !playingTracks.current.has(track.id)) {
        audio.play().catch(console.error);
        playingTracks.current.add(track.id);
      } else if (shouldStop && playingTracks.current.has(track.id)) {
        audio.pause();
        audio.currentTime = 0;
        playingTracks.current.delete(track.id);
      }
    });
  }, [currentFrame, currentSceneId, audioTracks]);

  return null;
};

export default AudioManager;