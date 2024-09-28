import { AudioTrack } from './types';

export const audioTracks: AudioTrack[] = [
  {
    id: 'bg1',
    src: '/audio/BG1.wav',
    startFrame: 'white.jpg',
    stopFrame: 'city0.jpg',
    volume: 0.7,
    fadeEffect: true,
    loop: true,
  },
  {
    id: 'fx1',
    src: '/audio/FX1.wav',
    startFrame: 'loading0.jpg',
    stopFrame: 'loading3.jpg',
    volume: 0.7,
    fadeEffect: false,
    loop: false,
  },
  {
    id: 'bg2',
    src: '/audio/BG2.wav',
    startFrame: 'intro.gif',
    stopFrame: 'city0.jpg',
    volume: 0.7,
    fadeEffect: true,
    loop: true,
  },
  
];