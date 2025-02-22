// types.ts

export type Choice = {
  text: string;
  nextSceneId: string;
};

export interface AudioTrack {
  id: string;
  src: string;
  startFrame: string;
  stopFrame: string;
  volume: number;
  fadeEffect: boolean;
  loop?: boolean;
}

export interface Dialogue {
  text: string;
  position?: 'top'|'bottom'|'center';
  character?: string;
  delay?: number;
}

export interface Scene {
  id: string;
  frames: string | string[];
  texts?: Dialogue[];
  transitions: Transition[];
  conditions?: Record<string, unknown>;
  textPosition?: 'top'|'bottom'|'center';
}

export interface Transition {
  targetSceneId: string;
  condition?: (state: GameState) => boolean;
  trigger: 'auto' | 'click' | 'choice';
  preload?: boolean;
}

export interface GameState {
  inventory: string[];
  flags: Record<string, boolean>;
  relationships: Record<string, number>;
  currentSceneId: string;
  previousScenes: string[];
}

export const scenes: Scene[] = [

  //Linear intro scenes
    
  {
      id: 'logo',
      frames: ['logo.gif'],
      texts: ["แตะหรือคลิ๊กเพื่อเริ่มเกม"],
      textPosition: 'bottom',
      nextSceneId: 'gameintro',
    },
    {
      id: 'gameintro',
      frames: ['white(intro).jpg'],
      texts: ["ชื่อเกม\n \nคำอธิบาย\n \n \n \n \n \n \n \n \n \n \n กดเพื่อเริ่มเกม"],
      textPosition: 'bottom',
      nextSceneId: 'trigger',
    },
    {
      id: 'trigger',
      frames: ['white(intro).jpg'],
      texts: ["Trigger warning: เกมส์นี้ มีเนื้อหาที่ ... \n \n \n \n \n \n \n \n \n \n \n <แตะหรือคลิ๊กเพื่อไปต่อ>"],
      textPosition: 'bottom',
      nextSceneId: 'intro',
    },
    {
      id: 'intro',
      frames: ['loading0.jpg', 'loading1.jpg', 'loading2.jpg', 'loading3.jpg', 'loading4.jpg', 'loading5.jpg','intro0.jpg','intro1.jpg','intro2.jpg','intro3.jpg','intro.gif'],
      texts: ["เธอเป็นแมว", "ตอนนี้เธออยู่ที่ 'กองบัญชาการแมว' ", "ให้เรื่องนี้เป็นความลับระหว่างเรานะ","จริง ๆ แล้ว \nแมวทุกตัวบนโลกกำลังทำภารกิจลับที่ได้รับมอบหมาย..."],
      textPosition: 'top',
      nextSceneId: 'intro2',
    },
    {
      id: 'intro2',
      frames: ['intro10.jpg', 'intro11.jpg', 'intro12.jpg', 'intro13.jpg', 'intro2.gif'],
      texts: ["เมี้ยว ~ ~ ~ \n  สวัสดี $name$ "],
      textPosition: 'top',
      textColor: 'black',
      nextSceneId: 'intro3',
    },
    {
      id: 'intro3',
      frames: ['white.jpg'],
      texts: ["ชื่อ $name$ เพราะจัง\nเธอเหมาะมากที่จะเป็นแมวสังเกตการณ์\n หน้าที่ของเธอคือการเก็บข้อมูลต่าง ๆ\n และช่วยบอกใบ้ทางออกให้กับมนุษย์\n . \nพลังวิเศษของเธอคือ\nเมื่อเธอเข้าไปทักทายมนุษย์ มนุษย์จะบอกเล่าความรู้สึก\nและเรื่องราวของพวกเขาให้เธอฟัง"],
      textPosition: 'middle',
      nextSceneId: 'intro4',
    },
    {
      id: 'intro4',
      frames: ['intro0.jpg','intro1.jpg','intro2.jpg','intro3.jpg','intro.gif'],
      texts: ["ภารกิจแรกของ $name$ พร้อมแล้ว\n$name$ ล่ะ พร้อมมั้ย?"],
      textPosition: 'top',
      choices: [
        { text: "กดเพื่อดูภารภิจ", nextSceneId: "city" },
      ],
    },
    {
      id: 'city',
      frames: ['city0.jpg','city1.jpg','city2.jpg','city3.jpg'],
      texts: ["ณ ดินแดนทางใต้", "สถานที่ซึ่งดินแดนผูกรวมกัน\nด้วยเรื่องร้ายในอดีตที่เกิดขึ้นเมื่อเกือบ 20 ปีที่แล้ว"],
      textPosition: 'top',
      nextSceneId: 'city2',
    },
    {
      id: 'city2',
      frames: ['city4.jpg','city5.jpg','city6.jpg','city7.jpg','city8.jpg','city9.jpg','city10.jpg','city11.jpg',],
      texts: ["เหตุการณครั้งนั้นได้เปลี่ยนชีวิตของชาวเมือง\nไปโดยสิ้นเชิง"],
      textPosition: 'middle',
      textColor: 'white',
      nextSceneId: 'city3',
    },
    {
      id: 'city3',
      frames: ['city12.jpg','city13.jpg','city14.jpg','city15.jpg'],
      texts: ["สิ่งที่ชัดเจนที่สุดที่เหตุการณ์ร้ายได้ฝากไว้\nก็คือ สัญลักษณ์สีแดงโลหิต ที่อกข้างซ้าย"],
      textPosition: 'middle',
      textColor: 'white',
      nextSceneId: 'city4',
    },
    {
      id: 'city4',
      frames: ['city16.jpg','city17.jpg','city18.jpg','city19.jpg','city20.jpg','city21.jpg','city22.jpg','city23.jpg','city24.jpg','city25.jpg','city26.jpg','city27.jpg','city28.jpg','city29.jpg','city30.jpg','city31.jpg','city32.jpg','city33.jpg','city34.jpg','city35.jpg','city36.jpg','city.gif'],
      texts: [],
      nextSceneId: 'arif1',
    },
    {
      id: 'arif1',
      frames: ['arif1.jpg','arif2.jpg','arif3.jpg','arif4.jpg','arif5.jpg','arif6.jpg','arif.gif'],
      texts: [],
      nextSceneId: 'arif2',
    },
    {
      id: 'arif2',
      frames: ['arif22.jpg','arif23.jpg','arif24.jpg'],
      texts: ["หวัดดีเจ้าแมว แกน่ารักจัง ฉันชื่ออาริฟนะ\n หลงมาแถวนี้หรอ","ได้กินอะไรรึยัง เดี๋ยวฉันหาอะไรให้กินนะ"],
      textPosition: 'bottom',
      textBox: true,
      nextSceneId: 'arif3',
    },
    {
      id: 'arif3',
      frames: ['arif25.jpg','arif26.jpg','arif27.jpg'],
      texts: ["ฉันอยู่บ้านนี้กับแม่และคุณย่า\nฉันกำลังจะอายุ 20 แล้ว"],
      textPosition: 'bottom',
      textBox: true,
      nextSceneId: 'arif4',
    },
    {
      id: 'arif4',
      frames: ['arif28.jpg','arif29.jpg','arif30.jpg','arif31.jpg'],
      texts: ["พอจะอายุ 20 ฉันก็กังวลมากเลย"],
      textPosition: 'bottom',
      textBox: true,
      nextSceneId: 'arif5',
    },
    {
      id: 'arif5',
      frames: ['arif-fc1.PNG'],
      texts: ["ฉันกลัวว่าข้อความในจดหมายที่ฉันได้จะเป็นจริง","เมื่อไม่กี่วันก่อนฉันเจอบันทึกปริศนาเข้าโดยบังเอิญ\nแล้วในคืนนั้นก็มีจดหมายลอยเข้ามาทางหน้าต่าง"],
      textPosition: 'top',
      textBox: false,
      nextSceneId: 'arif6',
    },
    {
      id: 'arif6',
      frames: ['arif-fc1-fx4.PNG'],
      texts: ['"20 ปีบริบูรณ์\nเหตุชุลมุนฝากแผลไว้\nหากปล่อยปะละเลยไป\nสิ่งสำคัญจะสูญหาย\nหมดอายุขัยไปพร้อมทรงจำ"","ข้างนอกแดดเริ่มแรงแล้ว\nเข้ามาในบ้านก่อนเถอะเจ้าแมว","เดี๋ยวฉันพาแกไปเจอแม่กับย่าด้วย"'],
      textPosition: 'top',
      textBox: false,
      nextSceneId: 'arif7',
    },
    {
      id: 'arif7',
      frames: ['arif-fc1-stopfx.PNG'],
      texts: ["ข้างนอกแดดเริ่มแรงแล้ว\nเข้ามาในบ้านก่อนเถอะเจ้าแมว","เดี๋ยวฉันพาแกไปเจอแม่กับย่าด้วย"],
      textPosition: 'top',
      textBox: false,
      nextSceneId: 'home1',
    },
    {
      id: 'home1',
      frames: ['home1.PNG','home2.PNG','home3.PNG','home4.PNG','home5.PNG','home6.PNG','home7.PNG','home8.PNG','home9.PNG'],
      texts: [],
      textPosition: 'bottom',
      choices: [
        { text: "คุยกับคุณแม่", nextSceneId: "home2" },
        { text: "คุยกับคุณย่า", nextSceneId: "home3" },
      ],
    },
    {
      id: 'home2',
      frames: ['white.jpg','mom1.PNG','mom2.PNG'],
      texts: ["นี่เจ้าแมว\nตรงนี้มันอันตรายนะ อาหารร้อน ๆ เลย\nเดี๋ยวทอดปลาทูเสร็จแล้วจะแบ่งให้กินนะ"],
      textPosition: 'top',
      textBox: true,
      nextSceneId: 'home4',
    },
    {
      id: 'home3',
      frames: ['white.jpg','gmom1.PNG','gmom2.PNG'],
      texts: ["สวัสดีแมวน้อย หลงมาแถวนี้หรอ\nฉันกำลังกินยาโรคไตอยู่\nไว้เดี๋ยวกินเสร็จแล้วมาหาใหม่นะ"],
      textPosition: 'top',
      textBox: true,
      nextSceneId: 'home4',
    },
    {
      id: 'home4',
      frames: ['arifcf.gif'],
      texts: ["มานั่งรอที่โต๊ะอาหารกับฉันก่อนละกันนะ"],
      textPosition: 'top',
      textBox: true,
      nextSceneId: 'home5',
    },
    {
      id: 'home5',
      frames: ['mgm1.PNG','mgm2.PNG','mgm3.PNG','mgm4.PNG',],
      texts: ["เธอเห็นรอยสีแดงโลหิตของแม่กับคุณย่ามั้ย","นั่นแหละคือเรื่องที่ฉันกังวล"],
      textPosition: 'top',
      textBox: true,
      nextSceneId: 'home6',
    },
    {
      id: 'home6',
      frames: ['mgm5.PNG','mgm6.PNG','mgm7.PNG','mgm8.PNG','mgm9.PNG','mgm10.PNG','mgm11.PNG','mgm12.PNG','mgm13.PNG','mgm14.PNG','mgm15.PNG','mgm16.PNG','mgm18.PNG','heartbeat.gif'],
      texts: ['ฉันคิดว่ารอยสีแดงนั่นคือแผลที่จดหมายนั่นหมายถึง\n"20 ปีบริบูรณ์\nเหตุชุลมุนฝากแผลไว้\nหากปล่อยปะละเลยไป\nสิ่งสำคัญจะสูญหาย\nหมดอายุขัยไปพร้อมทรงจำ"','เหมือนมันจะปรากฏขึ้นมาเมื่อ 20 ปีที่แล้ว\nซึ่งเป็นช่วงที่ฉันเกิดพอดี','สำหรับฉันแล้ว\nสิ่งสำคัญที่สุดก็คือแม่กับคุณย่า','ไม่แน่นะ... \nจดหมายอาจจะพยายามบอกฉันว่า\nเมื่อครบ 20 ปี ทุกคนที่มีรอยแดงนั่น\nอาจจะหายสาบสูญ'],
      textPosition: 'top',
      nextSceneId: 'home7',
    },
    {
      id: 'home7',
      frames: ['gone1.PNG','gone2.PNG','gone3.PNG','gone4.PNG','gone5.PNG','gone6.PNG','gone7.PNG','gone8.PNG','gone9.PNG','arif-sad1.PNG'],
      texts: ["ฉันก็ไม่รู้เหมือนกัน"],
      textPosition: 'top',
      nextSceneId: 'home8',
    },
    {
      id: 'home8',
      frames: ['arif-sad2.PNG'],
      texts: ["ว่าสัญลักษณ์นั้นมาอยู่บนตัวแม่กับย่าได้ยังไง..."],
      textPosition: 'top',
      nextSceneId: 'home9',
    },
    {
      id: 'home9',
      frames: ['arif-sad3.PNG','arif-fc1.PNG','arif-fc2.PNG','arif-fc3.PNG','arif-fc4.PNG',],
      texts: ["แต่ฉันจะต้องลบมันก่อนที่แม่กับย่าจะหายไปให้ได้"],
      textPosition: 'top',
      nextSceneId: 'home10',
    },


    //First Decision
    {
      id: 'home10',
      frames: ['white.jpg'],
      texts: ["เอาหล่ะ! เราจะเริ่มจากทำอะไรก่อนดี?"],
      textPosition: 'top',
      choices: [
          { text: "คุยกับคุณแม่และคุณย่า", nextSceneId: "talktogmom0" },
          { text: "อ่านบันทึกปริศนา", nextSceneId: "ReadBook1st" },
        ],
    },

    //When user read the book first
    {
      id: 'ReadBook1st',
      frames: ['arif-sml1.png','arif-sml2.png','arif-sml2.png'],
      texts: ["อื้ม ฉันก็ว่าดี งั้นเราไปอ่านบันทึกปริศนากัน"],
      textPosition: 'top',
      textBox: true,
      nextSceneId: 'book1',
    },
    {
      id: 'book1',
      frames: ['book.gif'],
      texts: ['เหตุการณ์ปล้นปืนค่ายปิเหล็งและเหตุการณ์ตากใบ","4 มกราคม 2547\n"เหตุการณ์ปล้นปืนค่ายปิเหล็ง"","เหตุการณ์เริ่มต้นขึ้นจากการเผาโรงเรียน 20 แห่ง\nในเมืองนราธิวาศ เพื่อเบี่ยงเบนความสนใจของเจ้าหน้าที่รัฐ","ตามด้วยการปล้นปืน 413 กระบอก จากค่ายปิเหล็ง\nในเวลาใกล้เคียงกัน พรากชีวิตทหารของภาครัฐไป 4 นาย'],
      textPosition: 'top',
      nextSceneId: 'book2',
    },
    {
      id: 'book2',
      frames: ['fire1.png','fire2.png','fire3.png','fire4.png','fire5.png','fire.gif'],
      texts: ['เหตุการณ์ปล้นปืนค่ายปิเหล็งและเหตุการณ์ตากใบ","4 มกราคม 2547\n"เหตุการณ์ปล้นปืนค่ายปิเหล็ง"","เหตุการณ์เริ่มต้นขึ้น\nจากการเผาโรงเรียน 20 แห่งในเมืองนราธิวาศ\nเพื่อเบี่ยงเบนความสนใจของเจ้าหน้าที่รัฐ","ตามด้วยการปล้นปืน 413 กระบอก\nจากค่ายปิเหล็งในเวลาใกล้เคียงกัน\nพรากชีวิตทหารของภาครัฐไป 4 นาย'],
      textPosition: 'bottom',
      textColor: 'white',
      nextSceneId: 'book3',
    },
    {
      id: 'book3',
      frames: ['fire2.gif'],
      texts: ["และการปล้นปืนก็เกิดขึ้นอีกครั้ง...","กับชาวเมืองที่เป็นอาสาสมัคร\nรักษาความปลอดภัย ทั้ง 6 คน","แต่พวกเขากลับถูกตำรวจควบคุมตัว\nเพราะตำรวจเชื่อว่าพวกเขาแจ้งความเท็จ","สร้างความไม่พอใจให้กับชาวเมือง\nเมื่อทหารไม่ถูกเอาผิดจากการปล้นปืนค่ายปิเหล็ง","แต่อาสาสมัคร ทั้ง 6 ","กลับถูกจับกุมและไม่ให้ประกันตัว"],
      textPosition: 'middle',
      textColor: 'white',
      nextSceneId: 'book4',
    },
    {
      id: 'book4',
      frames: ['red-d1.png','black-d1.png'],
      texts: ['25 ตุลาคม 2547 \n "เหตุการณ์ตากใบ"','ชาวเมืองค่อย ๆ รวมตัวกันจนมีจำนวนกว่า 2,000 คน \n มาชุมนุมรวมกันหน้าสถานีตำรวจในพื้นที่ตากใบ\n เพื่อเรียกร้องให้ปล่อยตัวอาสาสมัคร ทั้ง 6 คน'],
      textPosition: 'middle',
      textColor: 'white',
      nextSceneId: 'book5',
    },
    {
      id: 'book5',
      frames: ['dd.gif'],
      texts: ["เมื่อเหตุการณ์เริ่มมีแนวโน้มจะเกิดความรุนแรง...","ภาครัฐก็ออกคำสั่ง...","สลายการชุมนุม!"],
      textPosition: 'middle',
      textColor: 'black',
      textBox: true,
      nextSceneId: 'book6',
    },
    {
      id: 'book6',
      frames: ['white.jpg','blood_d1.gif'],
      texts: ["ผู้ชุมนุมชายถูกให้นอนคว่ำ","ผู้ชุมนุมชายถูกให้นอนคว่ำ\nถอดเสื้อมาใช้มัดมือไพล่หลัง\nใช้เชือกยาวพันธนาการเป็นชุดละ 10 คน\nบ้างถูกทำร้ายด้วยพานท้ายปืน","ทั้งหมดถูกจับขึ้นรถเพื่อเดินทางไปยังค่ายในอีกเมือง"],
      textPosition: 'middle',
      textColor: 'black',
      nextSceneId: 'book7',
    },
    {
      id: 'book7',
      frames: ['white.jpg','blood_d2.gif'],
      texts: ["78 ชีวิตเสียไประหว่างการเดินทาง\n 150 กิโลเมตรนั้น จากการขาดอากาศหายใจ.","ส่วนผู้ที่รอดชีวิตจำนวนหนึ่ง\nยังพิการด้วยอาการกล้ามเนื้อเปื่อย\nเพราะถูกกดทับและเป็นโรคไต\nจากการขาดน้ำเป็นเวลานาน.","เหตุการณ์ในครั้งนี้ยังไม่มีผู้รับผิดชอบ\nทางกฎหมายมีเพียงการเยียวยาเล็กน้อย\nให้กับครอบครัวผู้สูญเสียเท่านั้น","สร้างความรู้สึกไม่เป็นธรรมให้กับชาวเมือง\nร่วมกับเหตุการณ์ความรุนแรงอื่น ๆ\nจนก่อตัวเป็นบาดแผลในใจผู้คน"],
      textPosition: 'middle',
      textColor: 'black',
      nextSceneId: 'book8',
    },
    {
      id: 'book8',
      frames: ['white.jpg'],
      texts: ["เกิดเป็นรอยสัญลักษณ์สีแดงโลหิต\nตำหนิไว้ที่อกซ้ายของประชาชนทุกคนในพื้นที่"],
      textPosition: 'middle',
      textColor: 'black',
      nextSceneId: 'book9',
    },
    {
      id: 'book9',
      frames: ['arif_g.png'],
      texts: ["บันทึกที่ฉันเจอน่าจะเป็นแค่เรื่องราวส่วนหนึ่งเท่านั้น ...","ฉันคิดว่ายังมีเหตุการณ์อื่น ๆ อีกมากที่เรายังไม่รู้","แต่อย่างน้อย บันทึกนี่ก็ทำให้ฉันเข้าใจอะไรเพิ่มมากขึ้น","เราไปคุยกับแม่และคุณย่าเพื่อหาข้อมูลเพิ่มกันเถอะ"],
      textPosition: 'top',
      textColor: 'black',
      nextSceneId: 'booktogmom1',
    },
    {
      id: 'booktogmom1',
      frames: ['gmg_c1.png','gmg_c2.png','gmg_c3.png','gmg_c4.png','gmg_c5.png','gmg_c6.png'],
      texts: ["อ้าว เจ้าแมว \nมานี่มา มานั่งข้าง ๆ กัน"],
      textPosition: 'top',
      textColor: 'black',
      nextSceneId: 'booktogmom2',
    },
    {
      id: 'booktogmom2',
      frames: ['gmg_c7.png','gmg_c8.png','gmg_c9.png'],
      texts: ["ผ่านมาเกือบ 20 ปีแล้วสินะ","ที่บ้านนี้ไม่มีอะไรน่ารักแบบแกเลย","ปี 2547 ฉันจำได้แม่นเลยล่ะ ","ทุก ๆ เรื่องเลวร้ายล้วนมีจุดเริ่มต้น \nและจุดเริ่มต้นของมันคือปีนั้น"],
      textPosition: 'top',
      textColor: 'black',
      nextSceneId: 'booktogmom3',
    },
    {
      id: 'booktogmom3',
      frames: ['black-d1.png'],
      texts: ["หลังจากผ่านวันขึ้นปีใหม่ได้แค่ 4 วัน ","ก็เกิดเหตุการณ์ที่พวกเราไม่คาดคิดขึ้น","ในวันที่ 4 มกราคม","กลุ่มกองกำลังติดอาวุธกว่าร้อยคนเข้าปล้นปืน",'ทุกคนเรียกเหตุการณ์นั้นว่า\n"เหตุการณ์ปล้นปืนค่ายปิเหล็ง"'],
      textPosition: 'middle',
      textColor: 'white',
      nextSceneId: 'booktogmom4',
    },
    {
      id: 'booktogmom4',
      frames: ['school.gif'],
      texts: ["แต่ก่อนจะปล้นปืน","ก็มีการวางเพลิงที่โรงเรียนทั้ง 20 โรงเรียน\nเพื่อเบี่ยงเบนความสนใจของภาครัฐ"],
      textPosition: 'top',
      textColor: 'white',
      nextSceneId: 'booktogmom5',
    },
    {
      id: 'booktogmom5',
      frames: ['school2.gif'],
      texts: ["ก็มีการวางเพลิงที่โรงเรียนทั้ง 20 โรงเรียน\nเพื่อเบี่ยงเบนความสนใจของภาครัฐ"],
      textPosition: 'middle',
      textColor: 'white',
      nextSceneId: 'booktogmom6',
    },
    {
      id: 'booktogmom6',
      frames: ['black-d1.png','fire-ex.gif'],
      texts: ["และเช้าวันนั้นก็เป็นเช้าวันสุดท้ายที่ฉันได้เจอกับสามี","เขาพยายามพานักเรียนทุกคนหนีออกมา"],
      textPosition: 'middle',
      textColor: 'white',
      nextSceneId: 'booktogmom7',
    },
    {
      id: 'booktogmom7',
      frames: ['red2.png'],
      texts: ["แต่ตัวเขาเองกลับสำลักควันติดอยู่ในนั้น ไม่ได้ออกมา"],
      textPosition: 'middle',
      textColor: 'white',
      nextSceneId: 'booktogmom8',
    },
    {
      id: 'booktogmom8',
      frames: ['red3.png'],
      texts: ["ในเพียงความทรงจำของลูกศิษย์\nชาวเมือง และครอบครัวเรา"],
      textPosition: 'middle',
      textColor: 'white',
      nextSceneId: 'booktogmom9',
    },
    {
      id: 'booktogmom9',
      frames: ['red3.png'],
      texts: ["ตลอดไป","ตั้งแต่นั้น ความเศร้าในใจพวกเราก็ค่อย ๆ เกิดขึ้น"],
      textPosition: 'middle',
      textColor: 'white',
      nextSceneId: 'booktogmom10',
    },
    {
      id: 'booktogmom10',
      frames: ['gmom-cry1.gif'],
      texts: ["เกิดขึ้นพร้อม ๆ กับความไม่สงบความรุนแรง \nและกฎหมายพิเศษที่รัฐประกาศใช้"],
      textPosition: 'middle',
      textColor: 'black',
      nextSceneId: 'booktogmom11',
    },
    {
      id: 'booktogmom11',
      frames: ['white.jpg'],
      texts: ["จากที่เราเคยอยู่กันอย่างสงบสุข","บ้านเมืองก็เต็มไปด้วยการเฝ้าระวัง\nจากกองกำลังของภาครัฐ","ความกลัว ความหวาดระแวง"," ก็แวะเวียนมาเยี่ยมเยียนพวกเรา\nทักทายกับความเศร้าโศก\nที่อยู่กับเรามาสักพักแล้ว..."],
      textPosition: 'middle',
      textColor: 'black',
      nextSceneId: 'booktogmom12',
    },
    {
      id: 'booktogmom12',
      frames: ['gmom-cry2.gif'],
      texts: ["ฉันคิดถึงช่วงที่พวกเราเคยมีความสุขกันมาก ๆ"],
      textPosition: 'top',
      textColor: 'black',
      nextSceneId: 'booktogmom13',
    },
    {
      id: 'booktogmom13',
      frames: ['white.jpg','arifcf.gif'],
      texts: ["นี่เจ้าแมว คุณย่าน่าจะเหนื่อยแล้ว\n เราไปหาฟาเดีย แม่ของฉันกันเถอะ"],
      textPosition: 'bottom',
      textColor: 'black',
      textBox: true,
      nextSceneId: 'booktogmom14',
    },
    {
      id: 'booktogmom14',
      frames: ['momstry1.png','momstry2.png'],
      texts: ["อ้าวเจ้าแมว ปลาทูเสร็จพอดีเลย\nมานี่สิ ฉันคลุกข้าวให้กิน"],
      textPosition: 'bottom',
      textColor: 'black',
      textBox: true,
      nextSceneId: 'booktogmom15',
    },
    {
      id: 'booktogmom15',
      frames: ['momstry4.png'],
      texts: ["ฉันฟาเดียนะ","ฉันเคยรู้สึกว่าฉันเป็นผู้หญิงที่โชคดีที่สุดเลย"],
      textPosition: 'bottom',
      textColor: 'black',
      textBox: true,
      nextSceneId: 'booktogmom16',
    },
    {
      id: 'booktogmom16',
      frames: ['momstry6.png'],
      texts: ["ตั้งแต่แต่งงานมาอยู่บ้านนี้เมื่อ 20 ปีที่แล้ว\n บ้านนี้เคยอบอุ่นมากเลยล่ะ"],
      textPosition: 'bottom',
      textColor: 'black',
      textBox: true,
      nextSceneId: 'booktogmom18',
    },
    {
      id: 'booktogmom18',
      frames: ['white.jpg'],
      texts: ["แต่แปปเดียวคุณพ่อสามีฉันก็เสีย","ในวันที่มีการปล้นปืนที่ค่ายปิเหล็ง"],
      textPosition: 'middle',
      textColor: 'black',
      textBox: true,
      nextSceneId: 'booktogmom19',
    },
    {
      id: 'booktogmom19',
      frames: ['wbw.gif'],
      texts: ["หลังจากวันนั้น","พวกเราก็อยู่กันด้วยความโศกเศร้า"],
      textPosition: 'middle',
      textColor: 'black',
      textBox: true,
      nextSceneId: 'booktogmom20',
    },
    {
      id: 'booktogmom20',
      frames: ['white.jpg'],
      texts: ["สามีของฉันเป็นเสาหลักให้กับบ้านหลังนี้"],
      textPosition: 'top',
      textColor: 'black',
      textBox: true,
      nextSceneId: 'booktogmom21',
    },
    {
      id: 'booktogmom21',
      frames: ['dad.png'],
      texts: ["[คลิ๊กเพื่ิอไปต่อ]"],
      textPosition: 'top',
      textColor: 'black',
      textBox: true,
      nextSceneId: '',
    },
    {
      id: 'booktogmom22',
      frames: ['white.jpg'],
      texts: ["แม้ว่าเขาจะเสียใจ\nจากการสูญเสียพ่อของเขาไปแค่ไหน\nเขาก็พยายามเต็มที่เพื่อให้\nฉันกับแม่ของเขามีชีวิตที่ดี","เขาเก็บความเสียใจไว้ข้างใน\nแล้วยิ้มออกมาเป็นกำลังใจ\nให้พวกเราใช้ชีวิตต่อไป","ถึงแม้สถานการณ์จะไม่ปกติเอาเสียเลยก็ตาม"],
      textPosition: 'top',
      textColor: 'black',
      textBox: true,
      nextSceneId: 'booktogmom21',
    },
    {
      id: 'booktogmom23',
      frames: ['white.jpg','d1-1-5.jpg','d1-1-4.jpg','d1-1-2.jpg','d1-1-1.jpg'],
      texts: ["จนถึงวันที่ 25 ตุลาคม ปีเดียวกัน\nก็มีการชุมนุมใหญ่เกิดขึ้นในพื้นที่ตากใบ"],
      textPosition: 'top',
      textColor: 'white',
      textBox: true,
      nextSceneId: 'booktogmom24',
    },
    {
      id: 'booktogmom24',
      frames: ['d1-1-12.jpg','d1-1-11.jpg','d1-1-10.jpg','d1-1-9.jpg'],
      texts: ["สามีของฉันเสียชีวิต\nพร้อม ๆ กับเพื่อนร่วมเดินทาง\nอีก 77 ชีวิต"],
      textPosition: 'top',
      textColor: 'white',
      textBox: true,
      nextSceneId: '',
    },
    {
      id: 'booktogmom26',
      frames: ['d1-1-12.jpg','d1-1-11.jpg','d1-1-10.jpg','d1-1-9.jpg'],
      texts: ["สามีของฉันเสียชีวิต\nพร้อม ๆ กับเพื่อนร่วมเดินทาง\nอีก 77 ชีวิต"],
      textPosition: 'top',
      textColor: 'white',
      textBox: true,
      nextSceneId: '',
    },



    //When user talk to gmom first
    {
      id: 'talktogmom0',
      frames: ['arif-sml1.png','arif-sml2.png','arif-sml3.png'],
      texts: ["อื้ม ฉันก็ว่าดี งั้นเราไปคุยกับคุณย่ากันก่อนเถอะ"],
      textPosition: 'top',
      textColor: 'black',
    },
    {
      id: 'talktogmom1',
      frames: ['gmg_c1.png','gmg_c2.png','gmg_c3.png','gmg_c4.png','gmg_c5.png','gmg_c6.png'],
      texts: ["อ้าว เจ้าแมว \nมานี่มา มานั่งข้าง ๆ กัน"],
      textPosition: 'top',
      textColor: 'black',
    },
    {
      id: 'talktogmom2',
      frames: ['gmg_c7.png','gmg_c8.png','gmg_c9.png'],
      texts: ["ผ่านมาเกือบ 20 ปีแล้วสินะ","ที่บ้านนี้ไม่มีอะไรน่ารักแบบแกเลย","ปี 2547 ฉันจำได้แม่นเลยล่ะ ","ทุก ๆ เรื่องเลวร้ายล้วนมีจุดเริ่มต้น \nและจุดเริ่มต้นของมันคือปีนั้น"],
      textPosition: 'top',
      textColor: 'black',
    },


    //TBC
    {
      id: 'fire9',
      frames: ['blood_la1.gif'],
      texts: ["เรื่องทั้งหมดเมื่อ 20 ปีที่แล้วมันเป็นแบบนี้นี่เอง...","ฉันว่าเราต้องรีบทำอะไรสักอย่าง\nเพื่อช่วยคุณแม่กับคุณยายลบสัญลักษณ์สีแดงโลหิตนั่น","แต่ว่า...","กฎหมายพิเศษของภาครัฐ\nยังถูกประกาศใช้จนถึงปัจจุบัน"],
      textPosition: 'middle',
      textColor: 'white',
    },
    {
      id: 'fire10',
      frames: ['blood_la2.gif'],
      texts: ["มันเป็นกฎหมายที่ทำให้ชาวเมืองต้องอึดอัด\nจากการถูกติดตามโดยภาครัฐทุกฝีก้าว\nหากโดนจับไปสอบสวนไม่ว่าด้วยวิธีอะไร\nชาวเมืองก็ไม่สามารถฟ้องร้องอะไรได้\nเนื่องจากกฎหมายพิเศษนี้ทำให้ทุกอย่าง\nชอบธรรมไปหมด"],
      textPosition: 'middle',
      textColor: 'black',
    },
    {
      id: 'fire11',
      frames: ['blood_la3.gif'],
      texts: ["ระหว่างทางที่พวกเราออกนอกบ้าน\nจะมีด่านของกองกำลังภาครัฐกระจายอยู่","ถ้าเราดูมีพิรุธ เราอาจจะโดนเรียกสอบสวน","หรืออาจจะโดนตามเข้ามาบุกตรวจค้นที่บ้าน\nทำให้ทั้งคุณแม่และคุณย่าเดือดร้อนเพิ่มไปอีก","ฉันเคยได้ยินว่าบ้านข้าง ๆ เขาเคยถูกบุกค้น\nแล้วลูกชายเจ้าของบ้านก็ถูกควบคุมตัวไป...","7 วันหลังจากนั้น","ก็ถูกปล่อยตัว พร้อมกับรอยพกช้ำ ซูบผอม\nกับสัญลักษณ์สีแดงที่เข้มชัดจนน่าสยดสยอง"],
      textPosition: 'middle',
      textColor: 'white',
    },
    {
      id: 'fire12',
      frames: ['blood_la4.png'],
      texts: ["ถ้าความรุนแรงยิ่งทำให้รอยสีแดงนั่นเข้มขึ้น\nไม่แน่ว่าถ้าเราลดความรุนแรงที่เกิดขึ้นได้\nสัญลักษณ์นั่นอาจจะจางลงก็ได้นะ","ฉันคิดว่าจะต้องมีเหตุผลบางอย่าง\nที่ฉันได้จดหมายนั่นและเป็นเพียงคนเดียว\nในเมืองที่ไม่มีสัญลักษณ์นั้น"],
      textPosition: 'middle',
      textColor: 'black',
    },

];
