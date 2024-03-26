import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

type Scene = {
  frames: string[];
  texts: string[];
  textPosition: 'top' | 'middle' | 'bottom';
  textColor?: 'black' | 'red' | 'white';
};

const scenes: Scene[] = [
  {
    frames: ['loading0.jpg', 'loading1.jpg', 'loading2.jpg', 'loading3.jpg', 'loading4.jpg', 'loading5.jpg','loading.gif'],
    texts: ["Trigger warning: เกมส์นี้ มีเนื้อหาที่ ... \n<แตะหรือคลิ๊กเพื่อไปต่อ>"],
    textPosition: 'top',
  },
  {
    frames: ['intro0.jpg','intro1.jpg','intro2.jpg','intro3.jpg','intro.gif'],
    texts: ["เธอเป็นแมว", "ตอนนี้เธออยู่ที่ 'กองบัญชาการแมว' ", "ให้เรื่องนี้เป็นความลับระหว่างเรานะ","จริง ๆ แล้ว \nแมวทุกตัวบนโลกกำลังทำภารกิจลับที่ได้รับมอบหมาย \nทั้งสอดส่องดูแล สำรวจ สืบสวนสอบสวน \nรวมถึงการฝึกแลดูแลมนุษย์ในรูปแบบต่าง ๆ","เช่น ฝึกการตรงต่อเวลา (ในการให้อาหาร), \nฝึกกล้ามเนื้อมัดเล็ก (ตอนเกาคางและจกพุง), \nหรือแม้แต่การฝึกความแข็งแรงของผิวหนัง (จากเล็บและเขี้ยว) ","ซึ่งเป้าหมายสูงสุดของพวกเรา คือ \nการดูแลความสงบสุขของมนุษยชาติ", "เธอเป็นแมวแล้ว จะตั้งชื่อให้ตัวเองว่าอะไรดี?\n_ _ _ _ _"],
    textPosition: 'top',
  },
  {
    frames: ['intro10.jpg', 'intro11.jpg', 'intro12.jpg', 'intro13.jpg', 'intro2.gif'],
    texts: ["เมี้ยว ~ ~ ~ \n  สวัสดี {name} "],
    textPosition: 'top',
    textColor: 'black',
  },
  {
    frames: ['white.jpg'],
    texts: ["ชื่อ {name} เพราะจัง\nเธอเหมาะมากที่จะเป็นแมวสังเกตการณ์\n หน้าที่ของเธอคือการเก็บข้อมูลต่าง ๆ\n และช่วยบอกใบ้ทางออกให้กับมนุษย์\n . \nพลังวิเศษของเธอคือ\nเมื่อเธอเข้าไปทักทายมนุษย์ มนุษย์จะบอกเล่าความรู้สึก\nและเรื่องราวของพวกเขาให้เธอฟัง"],
    textPosition: 'top',
  },
  {
    frames: ['intro0.jpg','intro1.jpg','intro2.jpg','intro3.jpg','intro.gif'],
    texts: ["ภารกิจแรกของ {name} พร้อมแล้ว\n{name} ล่ะ พร้อมมั้ย?"],
    textPosition: 'top',
  },
  {
    frames: ['city0.jpg','city1.jpg','city2.jpg','city3.jpg'],
    texts: ["ณ ดินแดนทักษิณ","สถานที่ซึ่งดินแดนทั้งสามถูกผูกรวม\nด้วยเรื่องร้ายในอดีตที่เกิดขึ้นเมื่อ 19 ปีที่แล้ว"],
    textPosition: 'top',
  },
  {
    frames: ['city4.jpg','city5.jpg','city6.jpg','city7.jpg','city8.jpg','city9.jpg','city10.jpg','city11.jpg','city12.jpg','city13.jpg','city14.jpg','city15.jpg','city16.jpg','city17.jpg','city18.jpg','city19.jpg','city20.jpg','city21.jpg','city22.jpg','city23.jpg','city24.jpg','city25.jpg','city26.jpg','city27.jpg','city28.jpg','city29.jpg','city30.jpg','city31.jpg','city32.jpg','city33.jpg','city34.jpg','city35.jpg','city36.jpg','city.gif'],
    texts: ["เหตุการณครั้งนั้นได้เปลี่ยนชีวิตของชาวเมือง\nไปโดยสิ้นเชิง"],
    textPosition: 'top',
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
      if (currentTextIndex < scenes[currentSceneIndex].texts.length - 1) {
        setShowText(false);
        setTimeout(() => {
          setCurrentTextIndex(currentTextIndex + 1);
          setShowText(true);
        }, 1000); // Adjust this timeout as needed.
      } else {
        setShowText(false);
        setTimeout(() => {
          const nextSceneIndex = (currentSceneIndex + 1) % scenes.length;
          setCurrentSceneIndex(nextSceneIndex);
          setCurrentFrameIndex(0);
          setCurrentTextIndex(0);
          if (scenes[nextSceneIndex].texts.length > 0) {
            setShowText(true);
          }
        }, 1000); // Adjust this timeout as needed.
      }
    } else {
      if (scenes[currentSceneIndex].texts.length > 0) {
        setShowText(true);
      }
    }
  }, [currentSceneIndex, currentTextIndex, showText, scenes]);

  const currentScene = scenes[currentSceneIndex];
  const currentFrame = currentScene.frames[currentFrameIndex];
  const textLines = currentScene.texts[currentTextIndex]?.split('\n').map((line, index) => (
    <div key={index}>{line}</div>
  ));

  return (
    <div className="App" onClick={handleSceneClick}>
      <header className="App-header">
        <img src={`/${currentFrame}`} alt={`Scene ${currentSceneIndex}`} />
        <div className={`scene-text-container text-${currentScene.textPosition}`}>
          <div className={`scene-text ${showText ? 'show' : ''} text-color-${currentScene.textColor || 'black'}`}>
            {textLines}
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
