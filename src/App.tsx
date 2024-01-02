import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

type Scene = {
  frames: string[];
  texts: string[];
};

const scenes: Scene[] = [
  {
    frames: ['Trigger warning-1.jpg', 'Trigger warning-2.jpg', 'Trigger warning-3.jpg', 'Trigger warning.gif'],
    texts: ["Trigger warning: เกมส์นี้ มีเนื้อหาที่ ... \n<แตะหรือคลิ๊กเพื่อไปต่อ>"]
  },
  {
    frames: ['cut-1.jpg', 'cut-2.jpg', 'cut-3.jpg', 'cut-4.jpg', 'cut-5.jpg', 'cut-6.jpg', 'cut-7.jpg', 'cut-8.jpg', 'cut-9.jpg', 'cut-1.jpg', 's3-1.jpg', 's3-2.jpg', 's4-1.gif'],
    texts: ["สิ่งที่ชัดเจนที่สุดที่เหตุการณ์ร้ายได้ฝากไว้ "]
  },
  {
    frames: ['heart1.jpg', 'heart2.jpg', 'heart3.jpg', 'heart4.jpg', 'heart5.jpg', 'heart.gif'],
    texts: ["ก็คือสัญลักษณ์สีแดงโลหิตที่อกข้างซ้าย "]
  },
  // ... and so on for each scene
];

const App: React.FC = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    scenes.forEach(scene => {
      scene.frames.forEach(src => {
        const img = new Image();
        img.src = src.startsWith('/') ? src : `/${src}`;
      });
    });
  }, []);

  useEffect(() => {
    let id: number;
    if (currentFrameIndex < scenes[currentSceneIndex].frames.length - 1) {
      id = window.setInterval(() => {
        setCurrentFrameIndex(currentFrameIndex + 1);
      }, 400);
    } else {
      setShowText(true);
    }
    return () => clearInterval(id);
  }, [currentFrameIndex, currentSceneIndex]);

  const handleSceneClick = useCallback(() => {
    if (showText) {
      if (currentSceneIndex === 1 && currentTextIndex < scenes[currentSceneIndex].texts.length - 1) {
        setShowText(false); 
        setTimeout(() => {
          setCurrentTextIndex(currentTextIndex + 1);
          setShowText(true);
        }, 2000); 
      } else {
        setShowText(false);
        setTimeout(() => {
          setCurrentSceneIndex((prevIndex) => (prevIndex + 1) % scenes.length);
          setCurrentFrameIndex(0);
          setCurrentTextIndex(0);
        }, 2000);
      }
    }
  }, [currentSceneIndex, currentTextIndex, showText, currentFrameIndex]);

  const currentScene = scenes[currentSceneIndex];
  const currentFrame = currentScene.frames[currentFrameIndex];
  const textLines = currentScene.texts[currentTextIndex].split('\n').map((line, index) => (
    <div key={index}>{line}</div>
  ));

  return (
    <div className="App" onClick={handleSceneClick}>
      <header className="App-header">
        <img src={`/${currentFrame}`} alt={`Scene ${currentSceneIndex}`} />
        <div className={`scene-text ${showText ? 'show' : ''}`}>
          {textLines}
        </div>
      </header>
    </div>
  );
};

export default App;
