// types.ts

export type Choice = {
    text: string;
    nextScene: number;
  };

export type Scene = {
    frames: string[];
    texts: string[];
    textPosition?: 'top' | 'middle' | 'bottom';
    textColor?: 'black' | 'red' | 'white';
    textBox?: boolean;
    leftClick?: number;
    rightClick?: number;
    choices?: Choice[];
  };
  
  export const scenes: Scene[] = [
      
    {
        frames: ['logo.png'],
        texts: ["<แตะหรือคลิ๊กเพื่อเริ่มเกม>"],
        textPosition: 'bottom',
      },
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
        leftClick: 15,
        rightClick: 16,
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
        texts: ["มานั่งรอที่โต๊ะอาหารกับฉันก่อนละกันนะ"],
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
        frames: ['mgm5.PNG','mgm6.PNG','mgm7.PNG','mgm8.PNG','mgm9.PNG','mgm10.PNG','mgm11.PNG','mgm12.PNG','mgm13.PNG','mgm14.PNG','mgm15.PNG','mgm16.PNG','mgm18.PNG','heartbeat.gif'],
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
      {
        frames: ['white.jpg'],
        texts: ["เอาหล่ะ! เราจะเริ่มจากทำอะไรก่อนดี?"],
        textPosition: 'top',
        choices: [
            { text: "คุยกับคุณแม่และคุณย่า", nextScene: 16 },
            { text: "อ่านบันทึกปริศนา", nextScene: 25 },
          ],
      },
      {
        frames: ['arif-sml1.png','arif-sml2.png','arif-sml2.png'],
        texts: ["อื้ม ฉันก็ว่าดี งั้นเราไปอ่านบันทึกปริศนากัน"],
        textPosition: 'top',
        textBox: true,
      },
      {
        frames: ['book.gif'],
        texts: ["เหตุการณ์ปล้นปืนค่ายปิเหล็งและเหตุการณ์ตากใบ","4 มกราคม 2547\n“เหตุการณ์ปล้นปืนค่ายปิเหล็ง”","เหตุการณ์เริ่มต้นขึ้นจากการเผาโรงเรียน 20 แห่ง\nในเมืองนราธิวาศ เพื่อเบี่ยงเบนความสนใจของเจ้าหน้าที่รัฐ","ตามด้วยการปล้นปืน 413 กระบอก จากค่ายปิเหล็ง\nในเวลาใกล้เคียงกัน พรากชีวิตทหารของภาครัฐไป 4 นาย"],
        textPosition: 'top',
      },
      {
        frames: ['fire1.png','fire2.png','fire3.png','fire4.png','fire5.png','fire.gif'],
        texts: ["เหตุการณ์ปล้นปืนค่ายปิเหล็งและเหตุการณ์ตากใบ","4 มกราคม 2547\n“เหตุการณ์ปล้นปืนค่ายปิเหล็ง”","เหตุการณ์เริ่มต้นขึ้น\nจากการเผาโรงเรียน 20 แห่งในเมืองนราธิวาศ\nเพื่อเบี่ยงเบนความสนใจของเจ้าหน้าที่รัฐ","ตามด้วยการปล้นปืน 413 กระบอก\nจากค่ายปิเหล็งในเวลาใกล้เคียงกัน\nพรากชีวิตทหารของภาครัฐไป 4 นาย"],
        textPosition: 'bottom',
        textColor: 'white',
      },
      {
        frames: ['fire2.gif'],
        texts: ["และการปล้นปืนก็เกิดขึ้นอีกครั้ง...","กับชาวเมืองที่เป็นอาสาสมัคร\nรักษาความปลอดภัย ทั้ง 6 คน","แต่พวกเขากลับถูกตำรวจควบคุมตัว\nเพราะตำรวจเชื่อว่าพวกเขาแจ้งความเท็จ","สร้างความไม่พอใจให้กับชาวเมือง\nเมื่อทหารไม่ถูกเอาผิดจากการปล้นปืนค่ายปิเหล็ง","แต่อาสาสมัคร ทั้ง 6 ","กลับถูกจับกุมและไม่ให้ประกันตัว"],
        textPosition: 'middle',
        textColor: 'white',
      },
      {
        frames: ['red-d1.png','black-d1.png'],
        texts: ['25 ตุลาคม 2547 \n “เหตุการณ์ตากใบ”',"ชาวเมืองค่อย ๆ รวมตัวกันจนมีจำนวนกว่า 2,000 คน \n มาชุมนุมรวมกันหน้าสถานีตำรวจในพื้นที่ตากใบ\n เพื่อเรียกร้องให้ปล่อยตัวอาสาสมัคร ทั้ง 6 คน"],
        textPosition: 'middle',
        textColor: 'white',
      },
      {
        frames: ['dd.gif'],
        texts: ["เมื่อเหตุการณ์เริ่มมีแนวโน้มจะเกิดความรุนแรง...","ภาครัฐก็ออกคำสั่ง...","สลายการชุมนุม!"],
        textPosition: 'middle',
        textColor: 'black',
        textBox: true,
      },
      {
        frames: ['white.jpg','blood_d1.gif'],
        texts: ["ผู้ชุมนุมชายถูกให้นอนคว่ำ","ผู้ชุมนุมชายถูกให้นอนคว่ำ\nถอดเสื้อมาใช้มัดมือไพล่หลัง\nใช้เชือกยาวพันธนาการเป็นชุดละ 10 คน\nบ้างถูกทำร้ายด้วยพานท้ายปืน","ทั้งหมดถูกจับขึ้นรถเพื่อเดินทางไปยังค่ายในอีกเมือง"],
        textPosition: 'middle',
        textColor: 'black',
      },
      {
        frames: ['white.jpg','blood_d2.gif'],
        texts: ["78 ชีวิตเสียไประหว่างการเดินทาง\n 150 กิโลเมตรนั้น จากการขาดอากาศหายใจ.","ส่วนผู้ที่รอดชีวิตจำนวนหนึ่ง\nยังพิการด้วยอาการกล้ามเนื้อเปื่อย\nเพราะถูกกดทับและเป็นโรคไต\nจากการขาดน้ำเป็นเวลานาน.","เหตุการณ์ในครั้งนี้ยังไม่มีผู้รับผิดชอบ\nทางกฎหมายมีเพียงการเยียวยาเล็กน้อย\nให้กับครอบครัวผู้สูญเสียเท่านั้น","สร้างความรู้สึกไม่เป็นธรรมให้กับชาวเมือง\nร่วมกับเหตุการณ์ความรุนแรงอื่น ๆ\nจนก่อตัวเป็นบาดแผลในใจผู้คน"],
        textPosition: 'middle',
        textColor: 'black',
      },
      {
        frames: ['white.jpg'],
        texts: ["เกิดเป็นรอยสัญลักษณ์สีแดงโลหิต\nตำหนิไว้ที่อกซ้ายของประชาชนทุกคนในพื้นที่"],
        textPosition: 'middle',
        textColor: 'black',
      },
      {
        frames: ['arif_g.png'],
        texts: ["บันทึกที่ฉันเจอน่าจะเป็นแค่เรื่องราวส่วนหนึ่งเท่านั้น ...,","ฉันคิดว่ายังมีเหตุการณ์อื่น ๆ อีกมากที่เรายังไม่รู้","แต่อย่างน้อย บันทึกนี่ก็ทำให้ฉันเข้าใจอะไรเพิ่มมากขึ้น","เราไปคุยกับแม่และคุณย่าเพื่อหาข้อมูลเพิ่มกันเถอะ"],
        textPosition: 'top',
        textColor: 'black',
      },
      {
        frames: ['blood_la1.gif'],
        texts: ["เรื่องทั้งหมดเมื่อ 20 ปีที่แล้วมันเป็นแบบนี้นี่เอง...","ฉันว่าเราต้องรีบทำอะไรสักอย่าง\nเพื่อช่วยคุณแม่กับคุณยายลบสัญลักษณ์สีแดงโลหิตนั่น","แต่ว่า...","กฎหมายพิเศษของภาครัฐ\nยังถูกประกาศใช้จนถึงปัจจุบัน"],
        textPosition: 'middle',
        textColor: 'white',
      },
      {
        frames: ['blood_la2.gif'],
        texts: ["มันเป็นกฎหมายที่ทำให้ชาวเมืองต้องอึดอัด\nจากการถูกติดตามโดยภาครัฐทุกฝีก้าว\nหากโดนจับไปสอบสวนไม่ว่าด้วยวิธีอะไร\nชาวเมืองก็ไม่สามารถฟ้องร้องอะไรได้\nเนื่องจากกฎหมายพิเศษนี้ทำให้ทุกอย่าง\nชอบธรรมไปหมด"],
        textPosition: 'middle',
        textColor: 'black',
      },
      {
        frames: ['blood_la3.gif'],
        texts: ["ระหว่างทางที่พวกเราออกนอกบ้าน\nจะมีด่านของกองกำลังภาครัฐกระจายอยู่","ถ้าเราดูมีพิรุธ เราอาจจะโดนเรียกสอบสวน","หรืออาจจะโดนตามเข้ามาบุกตรวจค้นที่บ้าน\nทำให้ทั้งคุณแม่และคุณย่าเดือดร้อนเพิ่มไปอีก","ฉันเคยได้ยินว่าบ้านข้าง ๆ เขาเคยถูกบุกค้น\nแล้วลูกชายเจ้าของบ้านก็ถูกควบคุมตัวไป...","7 วันหลังจากนั้น","ก็ถูกปล่อยตัว พร้อมกับรอยพกช้ำ ซูบผอม\nกับสัญลักษณ์สีแดงที่เข้มชัดจนน่าสยดสยอง"],
        textPosition: 'middle',
        textColor: 'white',
      },
      {
        frames: ['blood_la4.png'],
        texts: ["ถ้าความรุนแรงยิ่งทำให้รอยสีแดงนั่นเข้มขึ้น\nไม่แน่ว่าถ้าเราลดความรุนแรงที่เกิดขึ้นได้\nสัญลักษณ์นั่นอาจจะจางลงก็ได้นะ","ฉันคิดว่าจะต้องมีเหตุผลบางอย่าง\nที่ฉันได้จดหมายนั่นและเป็นเพียงคนเดียว\nในเมืองที่ไม่มีสัญลักษณ์นั้น"],
        textPosition: 'middle',
        textColor: 'black',
      },
      {
        frames: ['arif-sml1.png','arif-sml2.png','arif-sml3.png'],
        texts: ["อื้ม ฉันก็ว่าดี งั้นเราไปคุยกับคุณย่ากันก่อนเถอะ"],
        textPosition: 'top',
        textColor: 'black',
      },
      {
        frames: ['gmg_c1.png','gmg_c2.png','gmg_c3.png','gmg_c4.png','gmg_c5.png','gmg_c6.png'],
        texts: ["อ้าว เจ้าแมว \nมานี่มา มานั่งข้าง ๆ กัน"],
        textPosition: 'top',
        textColor: 'black',
      },
      {
        frames: ['gmg_c7.png','gmg_c8.png','gmg_c9.png'],
        texts: ["ผ่านมาเกือบ 20 ปีแล้วสินะ","ที่บ้านนี้ไม่มีอะไรน่ารักแบบแกเลย","ปี 2547 ฉันจำได้แม่นเลยล่ะ ","ทุก ๆ เรื่องเลวร้ายล้วนมีจุดเริ่มต้น \nและจุดเริ่มต้นของมันคือปีนั้น"],
        textPosition: 'top',
        textColor: 'black',
      },
  ];
  