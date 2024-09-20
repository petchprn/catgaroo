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
  onLeftClick: () => void;
  onRightClick: () => void;
  onChoice: (choiceIndex: number) => void;
}

const SceneRenderer: React.FC<SceneRendererProps> = ({
  scene,
  currentFrameIndex,
  showText,
  currentTextIndex,
  userName,
  isTransitioning,
  onNameInput,
  onLeftClick,
  onRightClick,
  onChoice,
}) => {
  const currentFrame = Array.isArray(scene.frames) ? scene.frames[currentFrameIndex] : scene.frames;
  const textLines = scene.texts[currentTextIndex]
    ?.replace(/\$input_name\$/g, '')
    .split('\n')
    .map((line, index) => <div key={index}>{line.replace(/\$name\$/g, userName)}</div>);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (scene.choices) return; // Don't handle clicks if there are choices

    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    const clickPosition = (clientX - left) / width;

    if (clickPosition < 0.5) {
      onLeftClick();
    } else {
      onRightClick();
    }
  };

  return (
    <div 
      className={`scene-container ${isTransitioning ? 'transitioning' : ''} ${currentFrame === 'black' ? 'black-background' : ''}`} 
      onClick={handleClick}
    >
      {currentFrame !== 'black' && <img src={`/${currentFrame}`} alt={`Current Scene`} />}
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
                placeholder="Enter your name"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          )}
        </div>
      </div>
      {scene.choices && showText && (
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
      {(scene.leftClick !== undefined || scene.rightClick !== undefined) && !scene.choices && (
        <>
          <div className="click-area left" onClick={(e) => { e.stopPropagation(); onLeftClick(); }}></div>
          <div className="click-area right" onClick={(e) => { e.stopPropagation(); onRightClick(); }}></div>
        </>
      )}
    </div>
  );
};

export default SceneRenderer;
