import type {
  Activity,
  EnergyLevel,
  Intention,
  Language,
  TimeOption,
} from '../types';

type LocalizedOption<TValue extends string> = {
  value: TValue;
  label: Record<Language, string>;
};

export const timeOptions: Array<LocalizedOption<TimeOption> & { maxMinutes: number }> = [
  { value: "quick", label: { th: "15 นาที", en: "15 min" }, maxMinutes: 15 },
  { value: "standard", label: { th: "30 นาที", en: "30 min" }, maxMinutes: 30 },
  { value: "deep", label: { th: "1 ชั่วโมง", en: "1 hour" }, maxMinutes: 60 },
];

export const energyOptions: Array<LocalizedOption<EnergyLevel>> = [
  { value: "low", label: { th: "ไม่ค่อยมีแรง", en: "Low energy" } },
  { value: "medium", label: { th: "พอไหว", en: "Steady" } },
  { value: "high", label: { th: "พลังมาเต็ม", en: "High energy" } },
];

export const intentionOptions: Array<LocalizedOption<Intention>> = [
  { value: "restore", label: { th: "พัก", en: "Restore" } },
  { value: "focus", label: { th: "โฟกัส", en: "Focus" } },
  { value: "create", label: { th: "สร้างสรรค์", en: "Create" } },
  { value: "move", label: { th: "ขยับตัว", en: "Move" } },
  { value: "connect", label: { th: "ไม่อยากอยู่เงียบๆ", en: "Connect" } },
  { value: "explore", label: { th: "ลองอะไรใหม่ๆ", en: "Explore" } },
];

export const activities: Activity[] = [
  {
    id: "reset-room",
    title: { th: "เก็บมุมรกๆ สักมุม", en: "Reset one messy corner" },
    minutes: 15,
    energy: ["low", "medium"],
    intentions: ["restore", "focus"],
    summary: {
      th: "เลือกแค่โต๊ะ ชั้นวางของ หรือลิ้นชักหนึ่งจุดพอ ทำให้มันดูสบายตาขึ้น",
      en: "Pick one desk, shelf, or drawer and make it feel easier to look at.",
    },
    steps: {
      th: ["เลือกมุมที่รกแต่ใช้เวลาเก็บไม่นาน", "ทิ้งขยะหรือของที่ไม่ใช้แล้ว", "เหลือไว้แค่ของที่ควรอยู่ตรงนั้นจริง ๆ"],
      en: ["Choose a messy spot that will not take long.", "Throw away trash or things you no longer use.", "Keep only what truly belongs there."],
    },
  },
  {
    id: "walk-loop",
    title: { th: "เดินเล่นแบบไม่ต้องรีบ", en: "Go for a relaxed walk" },
    minutes: 30,
    energy: ["medium", "high"],
    intentions: ["move", "restore", "explore"],
    summary: {
      th: "ออกไปเดินสักพัก ไม่ต้องทำอะไรเป็นพิเศษ แค่ให้หัวได้เปลี่ยนบรรยากาศ",
      en: "Go out for a short walk with no mission beyond giving your head a change of scene.",
    },
    steps: {
      th: ["เลือกเส้นทางที่เดินง่ายและปลอดภัย", "เก็บมือถือไว้ หรืออย่างน้อยก็ปิดแจ้งเตือน", "กลับมาแล้วเช็กว่าหัวเบาขึ้นไหม"],
      en: ["Choose an easy, safe route.", "Put your phone away, or at least silence notifications.", "When you get back, notice whether your head feels lighter."],
    },
  },
  {
    id: "color-hunt",
    title: { th: "ออกล่าหาสีหนึ่งสี", en: "Hunt for one color" },
    minutes: 30,
    energy: ["medium", "high"],
    intentions: ["create", "move", "explore"],
    summary: {
      th: "เลือกสีหนึ่งสี แล้วลองหาสิ่งรอบตัวที่มีสีนั้นให้ได้ 5 อย่าง",
      en: "Choose one color, then find five things around you that carry it.",
    },
    steps: {
      th: ["เลือกสี เช่น เขียว ฟ้า แดง เหลือง หรือม่วง", "เดินดูรอบห้อง บ้าน หรือข้างนอก", "ถ่ายรูปหรือจดไว้ แล้วเลือกอันที่ชอบที่สุด"],
      en: ["Pick a color, such as green, blue, red, yellow, or purple.", "Look around your room, home, or outside.", "Take photos or notes, then choose your favorite find."],
    },
  },
  {
    id: "three-idea-versions",
    title: { th: "ลองทำไอเดียเดียว 3 เวอร์ชั่น", en: "Try one idea three ways" },
    minutes: 30,
    energy: ["medium", "high"],
    intentions: ["create", "focus"],
    summary: {
      th: "หยิบไอเดียที่มีอยู่มาลองทำหลายแบบ ยังไม่ต้องสนว่ามันดีพอหรือยัง",
      en: "Take an existing idea and try it a few ways before judging whether it is good enough.",
    },
    steps: {
      th: ["เลือกไอเดียหรือหัวข้อเดียว", "ทำออกมาแบบเล็กๆ 3 แบบ", "เลือกจุดที่ชอบที่สุดไว้ต่อยอด"],
      en: ["Choose one idea or topic.", "Make three small versions of it.", "Pick the part you like most to develop later."],
    },
  },
  {
    id: "read-one-section",
    title: { th: "อ่านอะไรให้จบสักช่วง", en: "Finish one section of reading" },
    minutes: 30,
    energy: ["low", "medium"],
    intentions: ["focus", "restore"],
    summary: {
      th: "อ่านบทความ หนังสือ หรือโน้ตที่ค้างไว้ แค่หนึ่งช่วงพอ ไม่ต้องลากยาว",
      en: "Read one section of an article, book, or note you have been meaning to finish.",
    },
    steps: {
      th: ["เลือกอย่างเดียวที่จะอ่าน", "อ่านจนจบช่วงที่ตั้งไว้", "จดสั้น ๆ ว่าได้อะไรจากมัน"],
      en: ["Choose one thing to read.", "Read until the section you set is done.", "Write a short note on what you got from it."],
    },
  },
  {
    id: "cook-random-meal",
    title: { th: "ทำของกินจากของที่มี", en: "Cook from what you already have" },
    minutes: 60,
    energy: ["medium", "high"],
    intentions: ["restore", "create", "explore"],
    summary: {
      th: "เปิดตู้เย็นดูว่ามีอะไร แล้วลองทำเป็นมื้อง่าย ๆ ที่กินแล้วรู้สึกดี",
      en: "Check what you already have and turn it into a simple meal that feels good to eat.",
    },
    steps: {
      th: ["ดูว่ามีวัตถุดิบอะไรต้องใช้ก่อน", "เลือกเมนูที่ไม่ยุ่งยากเกินไป", "ลองปรับอะไรเล็ก ๆ ให้ไม่เหมือนเดิม"],
      en: ["See which ingredients should be used first.", "Pick a meal that is not too complicated.", "Change one small thing so it feels fresh."],
    },
  },
  {
    id: "message-someone",
    title: { th: "ทักหาใครสักคนแบบไม่กดดัน", en: "Message someone without pressure" },
    minutes: 15,
    energy: ["low", "medium"],
    intentions: ["connect", "restore"],
    summary: {
      th: "ส่งข้อความสั้น ๆ ให้คนที่นึกถึง ไม่ต้องเปิดบทสนทนายาวก็ได้",
      en: "Send a short message to someone on your mind, without needing to start a long conversation.",
    },
    steps: {
      th: ["เลือกคนที่อยากทักจริง ๆ หนึ่งคน", "พิมพ์อะไรที่เฉพาะกับเขา ไม่ใช่แค่ hi", "ส่งแล้วถือว่าจบ ไม่ต้องนั่งรอคำตอบ"],
      en: ["Choose one person you actually want to message.", "Write something specific to them, not just hi.", "Send it and let that be enough. No waiting required."],
    },
  },
  {
    id: "tiny-body-reset",
    title: { th: "ขยับตัวให้เลือดเดิน", en: "Wake your body up" },
    minutes: 15,
    energy: ["low", "medium", "high"],
    intentions: ["move", "restore"],
    summary: {
      th: "ไม่ต้องออกกำลังจริงจัง แค่ลุกมายืดตัวหรือขยับให้ร่างกายตื่นขึ้น",
      en: "No serious workout needed. Just stretch or move enough to wake your body up.",
    },
    steps: {
      th: ["ยืดคอ ไหล่ หลัง และขาเบา ๆ", "เดินในห้องหรือเดินขึ้นลงบันไดสั้น ๆ", "หยุดตอนรู้สึกว่าตัวโล่งขึ้นนิดนึง"],
      en: ["Gently stretch your neck, shoulders, back, and legs.", "Walk around the room or take a short stair loop.", "Stop once your body feels a little clearer."],
    },
  },
  {
    id: "bodyweight-circuit",
    title: { th: "ออกกำลังสั้น ๆ ให้เหงื่อออก", en: "Do a short bodyweight circuit" },
    minutes: 15,
    energy: ["high"],
    intentions: ["move", "focus"],
    summary: {
      th: "ใช้ท่าง่าย ๆ ไม่ต้องใช้อุปกรณ์ แค่ให้ร่างกายได้ปล่อยพลังออกมาหน่อย",
      en: "Use simple no-equipment moves to let your body burn off some energy.",
    },
    steps: {
      th: ["ทำทั้งหมด 3 รอบ", "ใช้ squat, push-up, plank หรือท่าที่ทำไหว", "ถ้าฟอร์มเริ่มเสียให้หยุด ไม่ต้องฝืน"],
      en: ["Do three rounds.", "Use squats, push-ups, planks, or moves you can handle.", "Stop if your form breaks. Do not force it."],
    },
  },
  {
    id: "project-next-step",
    title: { th: "ดันโปรเจกต์ส่วนตัวต่ออีกนิด", en: "Move a personal project forward" },
    minutes: 60,
    energy: ["medium", "high"],
    intentions: ["focus", "create"],
    summary: {
      th: "เลือกงานค้างหนึ่งอย่าง แล้วทำให้มันขยับไปข้างหน้าจริง ๆ",
      en: "Pick one unfinished thing and make real progress on it.",
    },
    steps: {
      th: ["เขียนก่อนว่ารอบนี้อยากให้จบตรงไหน", "โฟกัสทำประมาณ 50 นาที", "จดต่อท้ายไว้ว่าเปิดมาครั้งหน้าต้องทำอะไรต่อ"],
      en: ["Write down what you want to finish this round.", "Focus for about 50 minutes.", "Leave a note for the next step when you return."],
    },
  },
  {
    id: "playlist-scene",
    title: { th: "ทำเพลย์ลิสต์ให้ฉากในหนังที่ไม่มีอยู่จริง", en: "Make a playlist for an imaginary movie scene" },
    minutes: 30,
    energy: ["low", "medium"],
    intentions: ["create", "restore", "explore"],
    summary: {
      th: "คิดฉากหนังขึ้นมาเอง แล้วเลือกเพลงที่เข้ากับบรรยากาศนั้น",
      en: "Invent a movie scene, then pick songs that fit its atmosphere.",
    },
    steps: {
      th: ["คิดฉาก เช่น เดินกลับบ้านตอนฝนตก หรือขับรถกลางคืน", "เลือกเพลง 5 เพลงที่เข้ากับฉากนั้น", "ตั้งชื่อเพลย์ลิสต์ให้เหมือนชื่อหนัง"],
      en: ["Imagine a scene, like walking home in the rain or driving at night.", "Pick five songs that fit it.", "Name the playlist like it belongs to a film."],
    },
  },
  {
    id: "music-reset",
    title: { th: "นั่งฟังเพลงแบบไม่ทำอย่างอื่น", en: "Listen to music without multitasking" },
    minutes: 30,
    energy: ["low"],
    intentions: ["restore", "create"],
    summary: {
      th: "เปิดเพลงหรือเพลย์ลิสต์ที่อยากฟัง แล้วอยู่กับมันจริง ๆ สักพัก",
      en: "Play music you want to hear and actually stay with it for a while.",
    },
    steps: {
      th: ["เลือกเพลง อัลบั้ม หรือเพลย์ลิสต์หนึ่งชุด", "วางงานกับหน้าจออื่นไว้ก่อน", "สังเกตว่ามีท่อนไหนหรือเสียงไหนที่ชอบเป็นพิเศษ"],
      en: ["Choose one song, album, or playlist.", "Put work and other screens away.", "Notice any part or sound you especially like."],
    },
  },
  {
    id: "plan-tomorrow",
    title: { th: "เตรียมก้าวแรกของพรุ่งนี้", en: "Prepare tomorrow's first step" },
    minutes: 15,
    energy: ["low", "medium"],
    intentions: ["focus", "restore"],
    summary: {
      th: "คิดแค่ว่าพรุ่งนี้จะเริ่มจากอะไร จะได้ไม่ต้องตื่นมาแล้วงง",
      en: "Decide what tomorrow starts with so you do not wake up confused.",
    },
    steps: {
      th: ["เลือกงานแรกของวันพรุ่งนี้", "เตรียมของ ไฟล์ หรือลิงก์ที่ต้องใช้ไว้ก่อน", "เขียน next step แบบเล็กที่สุดไว้หนึ่งข้อ"],
      en: ["Choose tomorrow's first task.", "Prepare the things, files, or links you need.", "Write the smallest possible next step."],
    },
  },
  {
    id: "call-checkin",
    title: { th: "โทรหาคนในครอบครัวหรือเพื่อน", en: "Call someone you miss" },
    minutes: 30,
    energy: ["medium", "high"],
    intentions: ["connect"],
    summary: {
      th: "โทรหาใครสักคนที่ไม่ได้คุยกันมาสักพัก ไม่ต้องมีเรื่องสำคัญ แค่ถามว่าเป็นยังไงบ้าง",
      en: "Call a family member or friend you have not spoken to in a while, just to see how they are doing.",
    },
    steps: {
      th: ["เลือกคนที่อยากโทรหาหนึ่งคน", "ถามก่อนว่าเขาสะดวกคุยไหม", "คุยกันสั้นๆ แล้วจบเมื่อรู้สึกว่ากำลังพอดี ไม่จำเป็นต้องคุยยาว",],
      en: ["Choose one person you would like to call.", "Ask if it is a good time to talk.", "Keep the conversation brief and wrap up when it feels natural.",],
    },
  },
  {
    id: "soft-connect",
    title: { th: "เชื่อมต่อแบบ introvert-friendly", en: "Connect in an introvert-friendly way" },
    minutes: 15,
    energy: ["low", "medium"],
    intentions: ["connect", "restore"],
    summary: {
      th: "ไม่ต้องคุยยาว แค่ทำอะไรเล็กๆ ที่ทำให้ยังรู้สึกไม่ตัดขาดจากคนอื่น",
      en: "No long conversation needed. Do one small thing that keeps you connected.",
    },
    steps: {
      th: ["ตอบแชทที่ค้างไว้หนึ่งข้อความ", "ส่งรูป เพลง หรือโพสต์ให้คนที่นึกถึง", "ไม่จำเป็นต้องลากบทสนทนาต่อ ถ้าวันนี้ยังไม่มีเอนเนอร์จี้ขนาดนั้น"],
      en: ["Reply to one pending message.", "Send a photo, song, or post to someone on your mind.", "You do not have to keep talking if you are low on energy."],
    },
  },
  {
    id: "learn-one-technique",
    title: { th: "ฝึกสกิลเล็กๆ หนึ่งอย่าง", en: "Practice one small skill" },
    minutes: 60,
    energy: ["medium", "high"],
    intentions: ["focus", "create", "explore"],
    summary: {
      th: "เลือกเรื่องที่อยากเก่งขึ้นนิดนึง แล้วลองทำตามจริง ไม่ใช่แค่ดูผ่านๆ",
      en: "Choose one thing you want to get better at and actually try it, not just skim it.",
    },
    steps: {
      th: ["เลือกคลิป บทความ หรือ reference แค่อย่างเดียว", "ลองทำตามด้วยตัวอย่างเล็ก ๆ", "จดไว้ว่าอะไรยังไง ฝึกถึงไหน จะได้กลับมาดูต่อ"],
      en: ["Choose just one video, article, or reference.", "Follow along with a small example.", "Note what you tried and where to continue later."],
    },
  },
  {
    id: "random-room-story",
    title: { th: "แต่งเรื่องจากของ 3 ชิ้นในห้อง", en: "Write a story from three objects" },
    minutes: 15,
    energy: ["low", "medium"],
    intentions: ["create", "explore"],
    summary: {
      th: "สุ่มเลือกของใกล้ตัว 3 ชิ้น แล้วแต่งเรื่องสั้นๆ ให้มันเกี่ยวกัน",
      en: "Pick three nearby objects and write a short story that connects them.",
    },
    steps: {
      th: ["หยิบหรือมองหาของ 3 ชิ้นรอบตัว", "ตั้งคำถามว่าของพวกนี้มาเจอกันได้ยังไง", "เขียนเรื่องสั้น 5–8 บรรทัด"],
      en: ["Find three objects around you.", "Ask how these things could have met.", "Write a five-to-eight-line story."],
    },
  },
  {
    id: "fake-menu",
    title: { th: "ออกแบบเมนูร้านในจินตนาการ", en: "Design a menu for an imaginary shop" },
    minutes: 30,
    energy: ["medium"],
    intentions: ["create", "explore"],
    summary: {
      th: "ลองคิดว่าถ้าเปิดร้านเล็กๆ ของตัวเอง จะขายอะไร และเมนูจะหน้าตาเป็นแบบไหน",
      en: "Imagine opening a tiny shop of your own. What would it sell, and what would the menu look like?",
    },
    steps: {
      th: ["ตั้งชื่อร้านแบบเล่นๆ", "คิดเมนู 3–5 อย่าง", "เขียนคำอธิบายเมนูให้ดูน่ากินหรือน่าสนใจ"],
      en: ["Give the shop a playful name.", "Create three to five menu items.", "Write descriptions that make them sound tasty or interesting."],
    },
  },
  {
    id: "one-object-redesign",
    title: { th: "รีดีไซน์ของธรรมดาหนึ่งอย่าง", en: "Redesign one ordinary object" },
    minutes: 30,
    energy: ["medium", "high"],
    intentions: ["create", "focus", "explore"],
    summary: {
      th: "เลือกของใช้ใกล้ตัว แล้วลองคิดว่าถ้าทำให้มันดีขึ้น จะเปลี่ยนอะไร",
      en: "Choose a nearby everyday object and imagine what you would change to improve it.",
    },
    steps: {
      th: ["เลือกของหนึ่งอย่าง เช่น แก้วน้ำ เก้าอี้ กระเป๋า หรือแอปที่ใช้บ่อย", "จด 3 จุดที่ยังไม่ค่อยชอบ", "วาดหรือเขียนเวอร์ชั่นใหม่แบบคร่าว ๆ"],
      en: ["Choose one object, such as a cup, chair, bag, or app you often use.", "List three things you do not love about it.", "Sketch or describe a rough new version."],
    },
  },
  {
    id: "future-self-note",
    title: { th: "เขียนโน้ตจากตัวเองในอนาคต", en: "Write a note from your future self" },
    minutes: 15,
    energy: ["low"],
    intentions: ["restore", "focus", "create"],
    summary: {
      th: "ลองเขียนข้อความสั้นๆ เหมือนตัวเองในอนาคตกำลังส่งกลับมาหาเรา",
      en: "Write a short note as if your future self is sending it back to you.",
    },
    steps: {
      th: ["เลือกช่วงเวลา เช่น ตัวเองอีก 1 ปี หรืออีก 5 ปี", "เขียนว่าเขาอยากบอกอะไรกับเราตอนนี้", "เก็บประโยคที่ชอบไว้หนึ่งประโยค"],
      en: ["Pick a time, such as yourself in one year or five years.", "Write what they want to tell you now.", "Save one sentence you like."],
    },
  },
  {
    id: "tiny-world-building",
    title: { th: "สร้างโลกเล็ก ๆ ขึ้นมาหนึ่งโลก", en: "Build one tiny world" },
    minutes: 60,
    energy: ["medium", "high"],
    intentions: ["create", "focus", "explore"],
    summary: {
      th: "สร้าง setting แปลกๆ สักโลกหนึ่ง เผื่อเอาไปต่อยอดเป็นเกม เรื่องสั้น หรือคอนเทนต์",
      en: "Create a strange little setting you could later turn into a game, story, or piece of content.",
    },
    steps: {
      th: ["ตั้งกฎของโลกนั้น 3 ข้อ", "คิดว่าคนในโลกนั้นใช้ชีวิตยังไง", "ตั้งชื่อเมือง อาชีพ หรือปัญหาหลักของโลกนั้น"],
      en: ["Set three rules for the world.", "Imagine how people there live.", "Name a city, job, or main problem in that world."],
    },
  },
  {
    id: "mini-zine",
    title: { th: "ทำมินิซีนหนึ่งหน้า", en: "Make a creative one-page journal" },
    minutes: 60,
    energy: ["medium", "high"],
    intentions: ["create", "explore"],
    summary: {
      th: "ทำหน้าเล็กๆ ที่รวมรูป ข้อความ ความคิด หรือ mood ตอนนี้ไว้ในหน้าเดียว",
      en: "Make a small page that gathers images, text, thoughts, or your current mood in one place.",
    },
    steps: {
      th: [
        "เลือกธีมหนึ่งอย่าง เช่น วันนี้ เงิน ความฝัน เมือง ความเงียบ หรือเรื่องที่กำลังคิดอยู่",
        "ใส่ข้อความสั้นๆ 3–5 จุด เช่น คำที่ชอบ ความรู้สึกตอนนี้ หรือประโยคที่อยากเก็บไว้",
        "เติมรูป วาดมือ สี เส้น หรือจัดวาง layout ง่าย ๆ ให้หน้านี้ดูเป็นตัวเอง",
      ],
      en: [
        "Choose one theme, like today, money, dreams, the city, silence, or something on your mind.",
        "Add three to five short bits of text, such as favorite words, current feelings, or a sentence to keep.",
        "Add images, doodles, color, lines, or a simple layout that feels like you.",
      ],
    },
  },
  {
    id: "alternate-life",
    title: { th: "ลองเป็นตัวเองอีกเวอร์ชั่น", en: "Try on an alternate version of yourself" },
    minutes: 30,
    energy: ["low", "medium"],
    intentions: ["create", "restore", "explore"],
    summary: {
      th: "ลองคิดเล่นๆ ว่าถ้าเราใช้ชีวิตอีกเส้นทางหนึ่ง วันนี้เราจะเป็นใคร",
      en: "Play with the idea of who you might be today if life had taken another path.",
    },
    steps: {
      th: ["เลือกอาชีพหรือไลฟ์สไตล์อีกแบบที่น่าสนใจ", "เขียนว่าหนึ่งวันของเราจะเป็นยังไง", "เลือกหนึ่งอย่างจากชีวิตเวอร์ชั่นนั้นที่อยากเอามาใช้จริง"],
      en: ["Choose another career or lifestyle that interests you.", "Write what one day in that life would look like.", "Pick one thing from that version you might want to use for real."],
    },
  },
  {
    id: "night-photo-diary",
    title: { th: "ทำไดอารี่ด้วยรูป 3 รูป", en: "Make a three-photo diary" },
    minutes: 15,
    energy: ["low", "medium"],
    intentions: ["create", "restore"],
    summary: {
      th: "ไม่ต้องเขียนยาว แค่ใช้รูป 3 รูปแทนอารมณ์ของวันนี้",
      en: "No long writing needed. Use three photos to stand in for today's mood.",
    },
    steps: {
      th: ["ถ่ายหรือเลือกรูป 3 รูปจากวันนี้", "ตั้งชื่อให้แต่ละรูปสั้นๆ", "เก็บไว้เป็น mini diary ของวันนั้น"],
      en: ["Take or choose three photos from today.", "Give each one a short title.", "Save them as a mini diary for the day."],
    },
  },
  {
    id: "random-map-point",
    title: { th: "สุ่มดูสถานที่แปลกๆ บนแผนที่", en: "Explore a random place on the map" },
    minutes: 15,
    energy: ["low"],
    intentions: ["explore", "restore"],
    summary: {
      th: "เปิดแผนที่แล้วสุ่มดูเมือง ถนน หรือสถานที่ที่ไม่เคยรู้จักมาก่อน",
      en: "Open a map and wander through a city, street, or place you have never known before.",
    },
    steps: {
      th: ["เปิดแผนที่แล้วซูมไปประเทศหรือเมืองที่ไม่คุ้น", "กดดูรูปหรือถนนแถวนั้น", "จดหนึ่งอย่างที่รู้สึกว่าน่าสนใจหรือแปลกดี"],
      en: ["Open a map and zoom into an unfamiliar country or city.", "Look at photos or street views nearby.", "Note one thing that feels interesting or strange."],
    },
  },
  {
    id: "five-senses-check",
    title: { th: "เช็กอินกับประสาทสัมผัส 5 อย่าง", en: "Do a five-senses check-in" },
    minutes: 15,
    energy: ["low"],
    intentions: ["restore", "focus"],
    summary: {
      th: "ดึงตัวเองกลับมาที่ปัจจุบันด้วยการสังเกตสิ่งรอบตัวแบบง่ายๆ",
      en: "Bring yourself back to the present by noticing simple things around you.",
    },
    steps: {
      th: ["มองหาสิ่งที่เห็น 5 อย่าง", "สังเกตเสียง กลิ่น หรือสัมผัสรอบตัว", "หายใจช้าๆ แล้วเลือกสิ่งที่ทำให้รู้สึกโอเคที่สุด"],
      en: ["Look for five things you can see.", "Notice sounds, smells, or physical sensations around you.", "Breathe slowly and choose the thing that feels most okay."],
    },
  },
  {
    id: "make-a-character",
    title: { th: "สร้างตัวละครจากของรอบตัว", en: "Create a character from a nearby object" },
    minutes: 30,
    energy: ["medium"],
    intentions: ["create", "explore"],
    summary: {
      th: "เลือกของหนึ่งอย่างใกล้ตัว แล้วลองจินตนาการว่าถ้ามันเป็นตัวละคร มันจะเป็นใคร",
      en: "Pick one nearby object and imagine who it would be if it were a character.",
    },
    steps: {
      th: ["เลือกของหนึ่งอย่าง เช่น แก้วน้ำ กระเป๋า ต้นไม้ รถเมล์ หรือโคมไฟ", "ตั้งชื่อ อายุ อาชีพ หรือนิสัยให้ตัวละครนี้", "เขียนปัญหาหนึ่งอย่างที่ตัวละครนี้กำลังเจอ"],
      en: ["Choose one object, such as a cup, bag, plant, bus, or lamp.", "Give the character a name, age, job, or personality.", "Write one problem this character is facing."],
    },
  },
  {
    id: "micro-adventure",
    title: { th: "ออกไปผจญภัยเล็กๆ", en: "Go on a micro-adventure" },
    minutes: 60,
    energy: ["medium", "high"],
    intentions: ["move", "explore", "restore"],
    summary: {
      th: "ออกไปที่ใกล้ ๆ แต่ทำเหมือนกำลังไปสำรวจที่ใหม่",
      en: "Go somewhere nearby, but treat it like you are exploring a new place.",
    },
    steps: {
      th: ["เลือกที่ใกล้บ้าน เช่น คาเฟ่ ร้านสะดวกซื้อ สวน หรือซอยที่ไม่ค่อยเดิน", "ตั้งภารกิจเล็กๆ เช่น หาของสีเขียว หรือถ่ายรูปป้ายแปลกๆ", "กลับมาแล้วจดว่าค้นพบอะไรใหม่"],
      en: ["Choose somewhere close, like a cafe, convenience store, park, or street you rarely take.", "Set a tiny mission, like finding something green or photographing a strange sign.", "When you return, write down what you discovered."],
    },
  },
  {
    id: "weird-recipe-note",
    title: { th: "คิดสูตรอาหารแปลกๆ ที่อาจกินได้จริง", en: "Invent a weird recipe that might work" },
    minutes: 15,
    energy: ["low", "medium"],
    intentions: ["create", "explore"],
    summary: {
      th: "ลองจับคู่ของกินที่ไม่น่าคู่กัน แล้วคิดว่าถ้าจะทำให้อร่อยต้องปรับยังไง",
      en: "Pair two foods that should not work together, then figure out how they might become tasty.",
    },
    steps: {
      th: ["เลือกวัตถุดิบ 2 อย่างที่ดูไม่เข้ากัน", "คิดวิธีทำให้มันพอไปด้วยกันได้", "ตั้งชื่อเมนูให้เหมือนอยู่ในร้านจริง"],
      en: ["Choose two ingredients that seem mismatched.", "Think of a way to make them work together.", "Name the dish like it belongs on a real menu."],
    },
  },
  {
    id: "one-page-dev-idea",
    title: { th: "คิดไอเดียเว็บเล็กๆ หนึ่งหน้า", en: "Sketch a one-page web app idea" },
    minutes: 30,
    energy: ["medium", "high"],
    intentions: ["create", "focus", "explore"],
    summary: {
      th: "ลองคิดเว็บหรือแอปเล็กๆ ที่ทำได้ในหนึ่งหน้า ไม่ต้องใหญ่ ไม่ต้องจริงจังมาก",
      en: "Think up a tiny website or app that could fit on one page. It does not need to be serious.",
    },
    steps: {
      th: ["เลือกปัญหาเล็กๆ ในชีวิตประจำวัน", "คิดว่าหน้านั้นต้องมีปุ่มหรือข้อมูลอะไรบ้าง", "วาด layout คร่าวๆ หรือจด component ที่ต้องใช้"],
      en: ["Choose a small everyday problem.", "Decide which buttons or information the page needs.", "Roughly sketch the layout or list the components."],
    },
  },
  {
    id: "random-wiki-rabbit-hole",
    title: { th: "สุ่มอ่านเรื่องแปลกๆ", en: "Read about something random and strange" },
    minutes: 30,
    energy: ["low", "medium"],
    intentions: ["explore", "focus"],
    summary: {
      th: "สุ่มอ่านเรื่องที่ไม่เคยสนใจมาก่อน แล้วดูว่ามันพาไปเจออะไร",
      en: "Read about something you have never cared about before and see where it leads.",
    },
    steps: {
      th: ["เลือกหัวข้อสุ่มจากเว็บ บทความ หรือวิดีโอ", "อ่านหรือดูแค่ 20 นาทีพอ", "จด fact แปลก ๆ ที่ไม่เคยรู้มาก่อน 1 ข้อ"],
      en: ["Pick a random topic from a website, article, or video.", "Read or watch for just 20 minutes.", "Write down one strange fact you did not know before."],
    },
  },
  {
    id: "play-something-together",
    title: {
      th: "ชวนกันเล่นอะไรสักอย่าง",
      en: "Play something together",
    },
    minutes: 60,
    energy: ["medium", "high"],
    intentions: ["connect", "restore"],
    summary: {
      th: "ชวนเพื่อนเล่นเกม ดูคลิปตลก หรือทำกิจกรรมที่ไม่ต้องคุยกันตลอดเวลา",
      en: "Invite someone to play a game, watch something, or share an activity that does not require constant conversation.",
    },
    steps: {
      th: [
        "เลือกกิจกรรมที่ทั้งคู่เข้าร่วมได้ง่าย",
        "ชวนแบบกำหนดเวลาคร่าวๆ",
        "เน้นใช้เวลาร่วมกันมากกว่าต้องสร้างบทสนทนา",
      ],
      en: [
        "Choose something that is easy for both of you to join.",
        "Suggest a rough time to do it.",
        "Focus on spending time together rather than filling every silence.",
      ],
    },
  },
  {
    id: "plan-a-small-hangout",
    title: {
      th: "ชวนใครสักคนไปทำอะไรเล็ก ๆ",
      en: "Plan a simple hangout",
    },
    minutes: 30,
    energy: ["medium", "high"],
    intentions: ["connect", "explore"],
    summary: {
      th: "ชวนเพื่อนหรือคนในครอบครัวไปกินข้าว เดินเล่น หรือทำกิจกรรมง่าย ๆ ด้วยกัน",
      en: "Invite a friend or family member to eat, take a walk, or do something simple together.",
    },
    steps: {
      th: [
        "เลือกกิจกรรมที่ไม่ต้องเตรียมตัวเยอะ",
        "เลือกวันหรือช่วงเวลาคร่าว ๆ",
        "ส่งคำชวนที่ตอบตกลงหรือปฏิเสธได้ง่าย",
      ],
      en: [
        "Choose an activity that requires little preparation.",
        "Pick a possible day or time.",
        "Send a low-pressure invitation that is easy to accept or decline.",
      ],
    },
  },
];
