import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

type Scene = {
  frames: string[];
  texts: string[];
  textPosition?: 'top' | 'middle' | 'bottom';
  textColor?: 'black' | 'red' | 'white';
  textBox?: boolean;
};

const scenes: Scene[] = [
  {
    frames: ['loading0.jpg', 'loading1.jpg', 'loading2.jpg', 'loading3.jpg', 'loading4.jpg', 'loading5.jpg','loading.gif'],
    texts: ["Trigger warning: เกมส์นี้ มีเนื้อหาที่ ... \n<แตะหรือคลิ๊กเพื่อไปต่อ>"],
    textPosition: 'top',
  },
  {
    frames: ['intro0.jpg','intro1.jpg','intro2.jpg','intro3.jpg','intro.gif'],
    texts: ["เธอเป็นแมว", "ตอนนี้เธออยู่ที่ 'กองบัญชาการแมว' ", "ให้เรื่องนี้เป็นความลับระหว่างเรานะ","จริง ๆ แล้ว \nแมวทุกตัวบนโลกกำลังทำภารกิจลับที่ได้รับมอบหมาย...", "ทั้งสอดส่องดูแล สำรวจ สืบสวนสอบสวน \nรวมถึงการฝึกแลดูแลมนุษย์ในรูปแบบต่าง ๆ","เช่น ฝึกการตรงต่อเวลา (ในการให้อาหาร), \nฝึกกล้ามเนื้อมัดเล็ก (ตอนเกาคางและจกพุง), \nหรือแม้แต่การฝึกความแข็งแรงของผิวหนัง (จากเล็บและเขี้ยว) ","ซึ่งเป้าหมายสูงสุดของพวกเรา คือ \nการดูแลความสงบสุขของมนุษยชาติ", "เธอเป็นแมวแล้ว จะตั้งชื่อให้ตัวเองว่าอะไรดี?\n$input_name$"],
    textPosition: 'top',
  },
  {
    frames: ['intro10.jpg', 'intro11.jpg', 'intro12.jpg', 'intro13.jpg', 'intro2.gif'],
    texts: ["เมี้ยว ~ ~ ~ \n  สวัสดี $name$ "],
    textPosition: 'top',
    textColor: 'black',
  },
  {
    frames: ['white.jpg'],
    texts: ["ชื่อ $name$ เพราะจัง\nเธอเหมาะมากที่จะเป็นแมวสังเกตการณ์\n หน้าที่ของเธอคือการเก็บข้อมูลต่าง ๆ\n และช่วยบอกใบ้ทางออกให้กับมนุษย์\n . \nพลังวิเศษของเธอคือ\nเมื่อเธอเข้าไปทักทายมนุษย์ มนุษย์จะบอกเล่าความรู้สึก\nและเรื่องราวของพวกเขาให้เธอฟัง"],
    textPosition: 'middle',
  },
  {
    frames: ['intro0.jpg','intro1.jpg','intro2.jpg','intro3.jpg','intro.gif'],
    texts: ["ภารกิจแรกของ $name$ พร้อมแล้ว\n$name$ ล่ะ พร้อมมั้ย?"],
    textPosition: 'top',
  },
  {
    frames: ['city0.jpg','city1.jpg','city2.jpg','city3.jpg'],
    texts: ["ณ ดินแดนทักษิณ","สถานที่ซึ่งดินแดนทั้งสามถูกผูกรวม\nด้วยเรื่องร้ายในอดีตที่เกิดขึ้นเมื่อ 19 ปีที่แล้ว"],
    textPosition: 'top',
  },
  {
    frames: ['city4.jpg','city5.jpg','city6.jpg','city7.jpg','city8.jpg','city9.jpg','city10.jpg','city11.jpg',],
    texts: ["เหตุการณครั้งนั้นได้เปลี่ยนชีวิตของชาวเมือง\nไปโดยสิ้นเชิง"],
    textPosition: 'middle',
    textColor: 'white',
  },
  {
    frames: ['city12.jpg','city13.jpg','city14.jpg','city15.jpg'],
    texts: ["สิ่งที่ชัดเจนที่สุดที่เหตุการณ์ร้ายได้ฝากไว้\nก็คือสัญลักษณ์สีแดงโลหิตที่อกข้างซ้าย"],
    textPosition: 'middle',
    textColor: 'white',
  },
  {
    frames: ['city16.jpg','city17.jpg','city18.jpg','city19.jpg','city20.jpg','city21.jpg','city22.jpg','city23.jpg','city24.jpg','city25.jpg','city26.jpg','city27.jpg','city28.jpg','city29.jpg','city30.jpg','city31.jpg','city32.jpg','city33.jpg','city34.jpg','city35.jpg','city36.jpg','city.gif'],
    texts: [],
  },
  {
    frames: ['arif1.jpg','arif2.jpg','arif3.jpg','arif4.jpg','arif5.jpg','arif6.jpg','arif.gif'],
    texts: [],
  },
  {
    frames: ['arif22.jpg','arif23.jpg','arif24.jpg'],
    texts: ["หวัดดีเจ้าแมว แกน่ารักจัง ฉันชื่ออาริฟนะ\n หลงมาแถวนี้หรอ","ได้กินอะไรรึยัง เดี๋ยวฉันหาอะไรให้กินนะ"],
    textPosition: 'bottom',
    textBox: true,
  },
  {
    frames: ['arif25.jpg','arif26.jpg','arif27.jpg'],
    texts: ["ฉันอยู่บ้านนี้กับแม่และย่าแหละ\nพ่อฉันเสียตั้งแต่ฉันยังไม่ถึงขวบเลย"],
    textPosition: 'bottom',
    textBox: true,
  },
  {
    frames: ['arif28.jpg','arif29.jpg','arif30.jpg','arif31.jpg'],
    texts: ["ตอนนี้ฉันอายุ 20 แล้ว\nกำลังจะเข้ามหาลัยละ\nแต่ฉันยังไม่รู้เลยจะเรียนอะไรดี"],
    textPosition: 'bottom',
    textBox: true,
  },
  {
    frames: ['arif30.jpg','arif29.jpg','arif28.jpg'],
    texts: ["กินหมดแล้วหรอ","มานี่มา ฉันพาแกไปเจอแม่กับย่า"],
    textPosition: 'bottom',
    textBox: true,
  },
  {
    frames: ['home1.PNG','home2.PNG','home3.PNG','home4.PNG','home5.PNG','home6.PNG','home7.PNG','home8.PNG','home9.PNG'],
    texts: ["กดที่ตัวละครเพื่อเข้าไปทักทาย"],
    textPosition: 'bottom',
  },
  {
    frames: ['mom1.PNG','mom2.PNG'],
    texts: ["นี่เจ้าแมว\nตรงนี้มันอันตรายนะ อาหารร้อน ๆ เลย\nเดี๋ยวทอดปลาทูเสร็จแล้วจะแบ่งให้กินนะ"],
    textPosition: 'top',
    textBox: true,
  },
  {
    frames: ['gmom1.PNG','gmom2.PNG'],
    texts: ["สวัสดีแมวน้อย หลงมาแถวนี้หรอ\nฉันกำลังกินยาโรคไตอยู่\nไว้เดี๋ยวกินเสร็จแล้วมาหาใหม่นะ"],
    textPosition: 'top',
    textBox: true,
  },
  {
    frames: ['arifcf.gif'],
    texts: ["คุณแม่กับคุณย่ายังยุ่ง ๆ อยู่น่ะ\nมานั่งรอที่โต๊ะอาหารกับฉันก่อนละกันนะ"],
    textPosition: 'top',
    textBox: true,
  },
  {
    frames: ['mgm1.PNG','mgm2.PNG','mgm3.PNG','mgm4.PNG',],
    texts: ["เธอเห็นรอยสีแดงโลหิตของแม่กับคุณย่ามั้ย","นั่นแหละคือเรื่องที่ฉันกังวล"],
    textPosition: 'top',
    textBox: true,
  },
  {
    frames: ['mgm5.PNG','mgm6.PNG','mgm7.PNG','mgm8.PNG','mgm9.PNG','mgm10.PNG','mgm11.PNG','mgm12.PNG','mgm13.PNG','mgm14.PNG','mgm15.PNG','mgm16.PNG','mgm18.PNG','mgm18.PNG','heartbeat.gif'],
    texts: ['ฉันพึ่งได้รู้ว่าสัญลักษณ์สีโลหิต','มันเป็นเหมือนระเบิดเวลา...','มันถูกตั้งเวลาไว้ 20 ปี\nซึ่งมันเกิดขึ้นในช่วงที่ฉันเกิดพอดี','พอมันครบ 20 ปี ทุกอย่างจะหายไป ','ทุกคนที่มีสัญลักษณ์นี้จะหายไป\nและจะไม่มีใครจำการมีอยู่ของพวกเขาได้อีกเลย'],
    textPosition: 'top',
  },
  {
    frames: ['gone1.PNG','gone2.PNG','gone3.PNG','gone4.PNG','gone5.PNG','gone6.PNG','gone7.PNG','gone8.PNG','gone9.PNG','arif-sad1.PNG'],
    texts: ["ฉันก็ไม่รู้เหมือนกัน"],
    textPosition: 'top',
  },
  {
    frames: ['arif-sad2.PNG'],
    texts: ["ว่าสัญลักษณ์นั้นมาอยู่บนตัวแม่กับย่าได้ยังไง..."],
    textPosition: 'top',
  },
  {
    frames: ['arif-sad3.PNG','arif-fc1.PNG','arif-fc2.PNG','arif-fc3.PNG','arif-fc4.PNG',],
    texts: ["แต่ฉันจะต้องลบมันก่อนที่แม่กับย่าจะหายไปให้ได้"],
    textPosition: 'top',
  },
];

const App: React.FC = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [showText, setShowText] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

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
    const currentScene = scenes[currentSceneIndex];
    const lastFrameIndex = currentScene.frames.length - 1;

    if (currentFrameIndex < lastFrameIndex) {
      id = window.setTimeout(() => {
        setCurrentFrameIndex(currentFrameIndex + 1);
      }, 400);
    } else {
      window.setTimeout(() => {
        setShowText(true);
      }, 500);
    }

    return () => {
      window.clearTimeout(id);
    };
  }, [currentFrameIndex, currentSceneIndex]);

  const handleSceneClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLInputElement) {
      return;
    }

    if (showText) {
      if (currentTextIndex < scenes[currentSceneIndex].texts.length - 1) {
        setShowText(false);
        setTimeout(() => {
          setCurrentTextIndex(currentTextIndex + 1);
          setShowText(true);
        }, 500);
      } else {
        if (currentScene.texts[currentTextIndex]?.includes('$input_name$') && userName.trim() === '') {
          return;
        }

        setShowText(false);
        setTimeout(() => {
          const nextSceneIndex = (currentSceneIndex + 1) % scenes.length;
          setCurrentSceneIndex(nextSceneIndex);
          setCurrentFrameIndex(0);
          setCurrentTextIndex(0);
        }, 500);
      }
    }
  }, [currentSceneIndex, currentTextIndex, showText, scenes, userName]);

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const currentScene = scenes[currentSceneIndex];
  const currentFrame = currentScene.frames[currentFrameIndex];
  const textLines = currentScene.texts[currentTextIndex]
    ?.replace(/\$input_name\$/g, '')
    .split('\n')
    .map((line, index) => <div key={index}>{line.replace(/\$name\$/g, userName)}</div>);

    return (
      <div className="App" onClick={handleSceneClick}>
        <header className="App-header">
          <img src={`/${currentFrame}`} alt={`Scene ${currentSceneIndex}`} />
          <div className={`scene-text-container text-${currentScene.textPosition}`}>
            <div className={`scene-text text-color-${currentScene.textColor || 'black'} ${showText ? 'show' : ''} ${currentScene.textBox ? 'text-box' : ''}`}>
              {textLines}
              {currentScene.texts[currentTextIndex]?.includes('$input_name$') && (
                <div className="input-name-container">
                  <input
                    type="text"
                    value={userName}
                    onChange={handleNameInput}
                    className="input-name"
                    placeholder="Enter your name"
                    onClick={(event) => event.stopPropagation()}
                  />
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    );
  };
  
  export default App;