// TITLE: Build & Height
// EYEBROW: Spotlight 7 · стр. 28 · Appearance · Телосложение и рост
// SUB: 11 слов о фигуре и росте – slim, plump, well-built, tall… Карточки с картинками и переводом, простые задания.
// BOARD: Твои слова
const META = { ls: "s7-p28-build-height" };
const P = [
  { id: "slim", phrase: "slim", ru: "стройный", av: { build: "slim", hair: "shoulder", hc: "brown", look: "pretty", shirt: "#7FB77E" } },
  { id: "thin", phrase: "thin", ru: "худой", av: { build: "thin", face: "thin", hair: "short", hc: "dark" } },
  { id: "skinny", phrase: "skinny", ru: "тощий, очень худой", av: { build: "skinny", face: "thin", hair: "spiky", hc: "fair", shirt: "#9ED1E8" } },
  { id: "wellbuilt", phrase: "well-built", ru: "крепкий, хорошо сложенный", av: { build: "wellbuilt", hair: "short", hc: "brown", shirt: "#E9A23B" } },
  { id: "plump", phrase: "plump", ru: "полненький, пухлый", av: { build: "plump", face: "round", hair: "curly", hc: "red", look: "cute", shirt: "#F29BA6" } },
  { id: "fat", phrase: "fat", ru: "толстый", av: { build: "fat", face: "round", hair: "short", hc: "dark", shirt: "#8E7CC3" } },
  { id: "heavy", phrase: "heavily built", ru: "крупного телосложения", av: { build: "heavy", face: "round", hair: "bald", beard: true, hc: "brown", shirt: "#5B8C5A" } },
  { id: "broad", phrase: "broad-shouldered", ru: "широкоплечий", av: { build: "broad", hair: "short", hc: "blond", shirt: "#2A55C9" } },
  { id: "short", phrase: "short", ru: "невысокий, низкого роста", av: { height: 0.66, ruler: true, hair: "pigtails", hc: "brown", shirt: "#F3B23C" } },
  { id: "medium", phrase: "of medium height", ru: "среднего роста", av: { height: 0.84, ruler: true, hair: "short", hc: "brown" } },
  { id: "tall", phrase: "tall", ru: "высокий", av: { height: 1.06, ruler: true, build: "slim", hair: "short", hc: "dark", shirt: "#5B8C5A" } }
];
const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на его перевод." },
  { type: "pic", title: "Посмотри на картинку: фигура", short: "Фигура", instr: "Посмотри на человечка и выбери, какая у него фигура.", ids: ["slim", "thin", "skinny", "wellbuilt", "plump", "fat", "heavy", "broad"] },
  { type: "pic", title: "Посмотри на картинку: рост", short: "Рост", instr: "Сравни человечка с линейкой и выбери, какой у него рост.", ids: ["short", "medium", "tall"] },
  { type: "ru2en", title: "Выбери английское слово", short: "Рус → Англ", instr: "Прочитай по-русски и нажми на английское слово." },
  { type: "en2ru", title: "Выбери перевод", short: "Англ → Рус", instr: "Прочитай английское слово и нажми на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод. Если не понял на слух — нажми «показать слово»." },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось английское слово." },
  { type: "gaps", title: "Вставь слово", short: "Предложения", instr: "Прочитай перевод и выбери слово для пропуска.",
    items: [
      { id: "slim", t: "Она стройная. — She is {{*slim|fat|plump}}." },
      { id: "thin", t: "Он очень худой. — He is very {{*thin|fat|tall}}." },
      { id: "skinny", t: "Мой брат тощий. — My brother is {{*skinny|plump|heavily built}}." },
      { id: "wellbuilt", t: "Спортсмен хорошо сложен. — The sportsman is {{*well-built|skinny|short}}." },
      { id: "plump", t: "Малыш пухленький. — The baby is {{*plump|tall|broad-shouldered}}." },
      { id: "fat", t: "Мой кот толстый. — My cat is {{*fat|tall|slim}}." },
      { id: "heavy", t: "Охранник крупного телосложения. — The guard is {{*heavily built|skinny|slim}}." },
      { id: "broad", t: "Пловец широкоплечий. — The swimmer is {{*broad-shouldered|plump|short}}." },
      { id: "short", t: "Моя сестра невысокая. — My sister is {{*short|tall|fat}}." },
      { id: "medium", t: "Он среднего роста. — He is of {{*medium|short|tall}} height." },
      { id: "tall", t: "Мой папа высокий. — My dad is {{*tall|short|thin}}." }
    ] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Напиши английское слово. Если забыл — вернись к карточкам." }
];
