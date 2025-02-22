// SceneRenderer.tsx

import React from 'react';
import { Scene, Choice } from './types';

interface SceneRendererProps {
  scene: Scene;
  currentFrameIndex: number;
  showText: boolean;
  currentTextIndex: number;
  userName: string;
  isTransitioning: boolean;
  onNameInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChoice: (choiceIndex: number) => void;
  isLoaded: boolean;
  onNameSubmit: (name: string) => boolean;
}

const SceneRenderer: React.FC<SceneRendererProps> = ({
  scene,
  currentFrameIndex,
  showText,
  currentTextIndex,
  userName,
  isTransitioning,
  onNameInput,
  onChoice,
  isLoaded,
  onNameSubmit,
}) => {
  if (!isLoaded) {
    return <div className="loading">Loading...</div>;
  }

  const currentFrame = Array.isArray(scene.frames) ? scene.frames[currentFrameIndex] : scene.frames;
  const isLastFrame = Array.isArray(scene.frames) && currentFrameIndex === scene.frames.length - 1;
  const currentText = scene.texts[currentTextIndex];
  const textLines = currentText
    ?.replace(/\$input_name\$/g, '')
    .split('\n')
    .map((line, index) => <div key={index}>{line.replace(/\$name\$/g, userName)}</div>);

  return (
<div 
  className={`scene-container ${isTransitioning ? 'transitioning' : ''} ${
    scene.backgroundColor ? `background-${scene.backgroundColor}` : ''
  }`} 
>
      {currentFrame !== 'black' && <img src={currentFrame} alt="Current Scene" />}
      {isLastFrame && (
        <div className={`scene-text-container text-${scene.textPosition}`}>
          <div className={`scene-text text-color-${scene.textColor || 'black'} ${showText ? '' : 'hide'} ${scene.textBox ? 'text-box' : ''}`}>
            {textLines}
            {scene.texts[currentTextIndex]?.includes('$input_name$') && (
              <div className="input-name-container">
                <input
                  type="text"
                  value={userName}
                  onChange={onNameInput}
                  className="input-name"
                  placeholder="โปรดระบุชื่อ"
                  onClick={(event) => event.stopPropagation()}
                />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNameSubmit(userName)) {
                    }
                  }}
                  className="submit-name-button"
                  disabled={userName.trim() === ''}
                >
                  ไปต่อ
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {scene.choices && showText && isLastFrame && (
        <div className="choices-container">
          {scene.choices.map((choice: Choice, index: number) => (
            <button 
              key={index} 
              onClick={(e) => {
                e.stopPropagation();
                onChoice(index);
              }} 
              className="choice-button"
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SceneRenderer;