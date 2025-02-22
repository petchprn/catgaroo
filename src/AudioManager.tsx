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
      if ((currentFrame === track.startFrame || currentSceneId === track.startFrame) && !playingTracks.current.has(track.id)) {
        console.log(`Starting audio: ${track.id}`);
        audio.play().catch(e => console.error("Error playing audio:", e));
        playingTracks.current.add(track.id);
      } else if ((currentFrame === track.stopFrame || currentSceneId === track.stopFrame) && playingTracks.current.has(track.id)) {
        console.log(`Stopping audio: ${track.id}`);
        audio.pause();
        audio.currentTime = 0;
        playingTracks.current.delete(track.id);
      }
    });
  }, [currentFrame, currentSceneId, audioTracks]);

  useEffect(() => {
    playingTracks.current.forEach(trackId => {
      const audio = audioRefs.current[trackId];
      if (audio && audio.paused) {
        audio.play().catch(e => console.error("Error resuming audio:", e));
      }
    });
  });

  return null;
};

export default AudioManager;