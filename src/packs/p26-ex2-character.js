// TITLE: Character
// EYEBROW: Spotlight 7 · p. 26 · Exercise 2
// SUB: Ten adjectives from the exercise – artistic, daring, patient, determined… – with Russian translations, and the qualities you need for each hobby. Flashcards and seven drills.
// BOARD: Your words
const META = { ls: "s7-p26-ex2-character" };
const P = [
  { id: "artistic", phrase: "artistic", ru: "художественно одарённый, артистичный", en: "good at drawing, painting or music" },
  { id: "creative", phrase: "creative", ru: "творческий", en: "good at making new things and having new ideas" },
  { id: "daring", phrase: "daring", ru: "смелый, отважный", en: "not afraid to do dangerous things" },
  { id: "fit", phrase: "fit", ru: "в хорошей физической форме", en: "healthy and strong because you do sport" },
  { id: "patient", phrase: "patient", ru: "терпеливый", en: "can wait or do slow work calmly, without getting angry" },
  { id: "athletic", phrase: "athletic", ru: "спортивный, атлетичный", en: "strong and good at sports" },
  { id: "sociable", phrase: "sociable", ru: "общительный", en: "likes meeting and talking to people" },
  { id: "curious", phrase: "curious", ru: "любознательный, любопытный", en: "wants to know and learn about everything" },
  { id: "determined", phrase: "determined", ru: "целеустремлённый, решительный", en: "never gives up until he or she gets what they want" },
  { id: "imaginative", phrase: "imaginative", ru: "с богатым воображением", en: "can easily think of new and unusual stories and pictures" },
  { id: "needbe", phrase: "you need to be …", ru: "нужно быть …", en: "it is important to be like this" }
];
const DRILLS = [
  { type: "mcq", title: "What's the English word?", short: "Choose", instr: "Read the Russian word and tap the English one. (Выбери английское слово.)",
    items: [
      { id: "artistic", q: "художественно одарённый", o: ["artistic", "athletic", "curious", "patient"] },
      { id: "creative", q: "творческий", o: ["creative", "curious", "daring", "fit"] },
      { id: "daring", q: "смелый, отважный", o: ["daring", "determined", "sociable", "patient"] },
      { id: "fit", q: "в хорошей физической форме", o: ["fit", "athletic", "artistic", "curious"] },
      { id: "patient", q: "терпеливый", o: ["patient", "daring", "creative", "sociable"] },
      { id: "athletic", q: "спортивный", o: ["athletic", "artistic", "imaginative", "determined"] },
      { id: "sociable", q: "общительный", o: ["sociable", "curious", "patient", "fit"] },
      { id: "curious", q: "любознательный", o: ["curious", "creative", "daring", "sociable"] },
      { id: "determined", q: "целеустремлённый", o: ["determined", "daring", "imaginative", "athletic"] },
      { id: "imaginative", q: "с богатым воображением", o: ["imaginative", "creative", "artistic", "curious"] },
      { id: "needbe", q: "Нужно быть терпеливым.", o: ["You need to be patient.", "You need be patient.", "You need patient."] }
    ] },
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the adjective. (Прочитай значение и выбери прилагательное.)",
    ids: ["artistic", "creative", "daring", "fit", "patient", "athletic", "sociable", "curious", "determined", "imaginative"] },
  { type: "gaps", title: "What kind of person?", short: "Sentences", instr: "Tap the adjective that fits the sentence. (Выбери подходящее прилагательное.)",
    items: [
      { id: "patient", t: "Knitting is slow. You need to be very {{*patient|daring|sociable}}." },
      { id: "daring", t: "Skateboarding tricks are dangerous. You need to be {{*daring|patient|curious}}." },
      { id: "sociable", t: "Kate has lots of friends and loves parties. She's very {{*sociable|patient|artistic}}." },
      { id: "curious", t: "My little brother asks “Why?” all the time. He's {{*curious|fit|daring}}." },
      { id: "determined", t: "She failed three times, but she didn't give up. She's {{*determined|sociable|imaginative}}." },
      { id: "imaginative", t: "To write stories about dragons and magic, you need to be {{*imaginative|athletic|fit}}." },
      { id: "fit", t: "He runs every morning, so he's very {{*fit|patient|curious}}." },
      { id: "athletic", t: "Max is good at football, boxing and running. He's {{*athletic|artistic|sociable}}." },
      { id: "artistic", t: "Liza draws beautiful pictures. She's very {{*artistic|athletic|daring}}." },
      { id: "creative", t: "Tom always has new ideas for school projects. He's {{*creative|fit|patient}}." },
      { id: "needbe", t: "For fencing you need {{*to be|be|being}} fit and daring." }
    ] },
  { type: "gaps", title: "Type the adjective", short: "Type it", instr: "Write the missing adjective. The Russian hint is in brackets. (Впиши прилагательное.)",
    items: [
      { id: "patient", t: "For sewing you need to be [[patient]] (терпеливый)." },
      { id: "daring", t: "Boxers are strong and [[daring]] (смелый)." },
      { id: "fit", t: "Football players must be [[fit]] (в хорошей форме)." },
      { id: "athletic", t: "My sister is tall and [[athletic]] (спортивная)." },
      { id: "artistic", t: "For painting you need to be [[artistic]] (художественно одарённый)." },
      { id: "creative", t: "Songwriters are very [[creative]] (творческий) people." },
      { id: "sociable", t: "He talks to everyone – he's so [[sociable]] (общительный)!" },
      { id: "curious", t: "Cats are [[curious]] (любопытный) animals." },
      { id: "determined", t: "To win at chess you need to be [[determined]] (целеустремлённый)." },
      { id: "imaginative", t: "Writers are [[imaginative]] (с богатым воображением) people." },
      { id: "needbe", t: "For ice-skating you [[need]] to be fit." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Does the sentence make sense? (Верно или неверно?)",
    items: [
      { id: "patient", t: "A patient person gets angry very quickly.", ok: false, fix: "A patient person can wait calmly." },
      { id: "daring", t: "A daring person is not afraid of dangerous things.", ok: true },
      { id: "sociable", t: "A sociable person doesn't like talking to people.", ok: false, fix: "A sociable person likes talking to people." },
      { id: "curious", t: "A curious person wants to know everything.", ok: true },
      { id: "fit", t: "You need to be fit for boxing.", ok: true },
      { id: "determined", t: "A determined person gives up easily.", ok: false, fix: "A determined person never gives up." },
      { id: "imaginative", t: "An imaginative person has lots of new ideas.", ok: true },
      { id: "artistic", t: "You need to be artistic for painting.", ok: true },
      { id: "athletic", t: "An athletic person is bad at sports.", ok: false, fix: "An athletic person is good at sports." },
      { id: "creative", t: "You need to be creative for songwriting.", ok: true },
      { id: "needbe", t: "For knitting you need be patient.", ok: false, fix: "For knitting you need to be patient." }
    ] },
  { type: "order", title: "Make a sentence", short: "Word order", instr: "Tap the words in the right order. (Составь предложение.)",
    items: [
      { id: "patient", q: "Для вязания нужно быть терпеливым.", s: "You need to be patient for knitting.", alt: ["For knitting you need to be patient."] },
      { id: "daring", q: "Для фехтования нужно быть смелым.", s: "You need to be daring for fencing.", alt: ["For fencing you need to be daring."] },
      { id: "fit", q: "Футболисты должны быть в хорошей форме.", s: "Football players must be fit." },
      { id: "sociable", q: "Моя лучшая подруга очень общительная.", s: "My best friend is very sociable." },
      { id: "imaginative", q: "Писатели – люди с богатым воображением.", s: "Writers are imaginative people." },
      { id: "determined", q: "Чтобы выиграть, нужно быть целеустремлённым.", s: "You need to be determined to win." },
      { id: "curious", q: "Мой младший брат очень любопытный.", s: "My little brother is very curious." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the adjective. (Скажи и напиши по-английски.)",
    items: [
      { id: "patient", ru: "Моя бабушка очень терпеливая.", en: "My granny is very patient.", key: "patient" },
      { id: "daring", ru: "Скейтбордисты – смелые люди.", en: "Skateboarders are daring people.", key: "daring" },
      { id: "fit", ru: "Я хочу быть в хорошей форме.", en: "I want to be fit.", key: "fit" },
      { id: "athletic", ru: "Мой брат очень спортивный.", en: "My brother is very athletic.", key: "athletic" },
      { id: "artistic", ru: "Моя сестра художественно одарённая.", en: "My sister is artistic.", key: "artistic" },
      { id: "creative", ru: "Он творческий человек.", en: "He is a creative person.", key: "creative" },
      { id: "sociable", ru: "Ты общительный?", en: "Are you sociable?", key: "sociable" },
      { id: "curious", ru: "Дети любознательные.", en: "Children are curious.", key: "curious" },
      { id: "determined", ru: "Она очень целеустремлённая.", en: "She is very determined.", key: "determined" },
      { id: "imaginative", ru: "Для сочинения рассказов нужно богатое воображение.", en: "You need to be imaginative to write stories.", key: "imaginative" },
      { id: "needbe", ru: "Для бокса нужно быть смелым.", en: "You need to be daring for boxing.", key: "need to be" }
    ] }
];
