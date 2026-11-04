// TITLE: Age
// EYEBROW: Spotlight 7 · стр. 28 · Appearance · Возраст
// SUB: 9 слов о возрасте – baby, teenager, in his twenties, elderly… Карточки с картинками и переводом, простые задания.
// BOARD: Твои слова
const META = { ls: "s7-p28-age" };
const P = [
  { id: "baby", phrase: "baby", ru: "младенец, малыш", av: { age: "baby" } },
  { id: "child", phrase: "child", ru: "ребёнок", av: { age: "child", hair: "short", hc: "blond", look: "cute", shirt: "#F3B23C" } },
  { id: "teen", phrase: "teenager", ru: "подросток", av: { age: "teen", hair: "spiky", hc: "brown", badge: "13–19", shirt: "#2A55C9" } },
  { id: "young", phrase: "young", ru: "молодой", av: { hair: "shoulder", hc: "blond", look: "pretty", shirt: "#7FB77E", build: "slim" } },
  { id: "twenties", phrase: "in his/her twenties", ans: "in his twenties/in her twenties", say: "in his twenties", ru: "ему (ей) от 20 до 29 лет", av: { hair: "short", hc: "brown", badge: "20–29", shirt: "#E07A5F" } },
  { id: "thirties", phrase: "in his/her thirties", ans: "in his thirties/in her thirties", say: "in her thirties", ru: "ему (ей) от 30 до 39 лет", av: { hair: "long", hc: "dark", look: "pretty", badge: "30–39", shirt: "#8E7CC3" } },
  { id: "middle", phrase: "middle-aged", ru: "средних лет", av: { build: "plump", hair: "short", hc: "#7D7064", glasses: true, moustache: true, badge: "45–60", shirt: "#5B8C5A" } },
  { id: "old", phrase: "old", ru: "старый", av: { hair: "bald", fringe: true, hc: "grey", wrinkles: true, glasses: true, badge: "70+", shirt: "#9AA7B4" } },
  { id: "elderly", phrase: "elderly", ru: "пожилой (вежливое слово)", av: { hair: "curly", hc: "white", wrinkles: true, cane: true, height: 0.95, badge: "80+", shirt: "#C9A0DC" } }
];
const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на его перевод." },
  { type: "pic", title: "Посмотри на картинку", short: "Картинки", instr: "Посмотри на человечка и выбери подходящее слово. Цифры — это возраст.", ids: ["baby", "child", "teen", "twenties", "thirties", "middle", "old", "elderly"] },
  { type: "ru2en", title: "Выбери английское слово", short: "Рус → Англ", instr: "Прочитай по-русски и нажми на английское слово." },
  { type: "en2ru", title: "Выбери перевод", short: "Англ → Рус", instr: "Прочитай английское слово и нажми на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод. Если не понял на слух — нажми «показать слово»." },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось английское слово." },
  { type: "order", title: "Собери выражение", short: "Выражения", instr: "Нажимай на слова по порядку, чтобы получилось выражение.",
    items: [
      { id: "twenties", q: "ему от 20 до 29 лет", s: "he is in his twenties" },
      { id: "thirties", q: "ей от 30 до 39 лет", s: "she is in her thirties" },
      { id: "middle", q: "мужчина средних лет", s: "a middle-aged man" },
      { id: "elderly", q: "пожилая женщина", s: "an elderly woman" },
      { id: "teen", q: "Я подросток.", s: "I am a teenager" }
    ] },
  { type: "gaps", title: "Вставь слово", short: "Предложения", instr: "Прочитай перевод и выбери слово для пропуска.",
    items: [
      { id: "baby", t: "У моей тёти есть малыш. — My aunt has got a {{*baby|teenager|child}}." },
      { id: "child", t: "Я был тогда ребёнком. — I was a {{*child|baby|teenager}} then." },
      { id: "teen", t: "Мне 14 лет. Я подросток. — I'm 14. I'm a {{*teenager|baby|child}}." },
      { id: "young", t: "Моя мама молодая. — My mum is {{*young|old|elderly}}." },
      { id: "twenties", t: "Ему 25 лет. — He is in his {{*twenties|thirties|teenager}}." },
      { id: "thirties", t: "Ей 35 лет. — She is in her {{*thirties|twenties|old}}." },
      { id: "middle", t: "Мой учитель средних лет. — My teacher is {{*middle-aged|baby|young}}." },
      { id: "old", t: "Это старый дом. — It's an {{*old|young|elderly}} house." },
      { id: "elderly", t: "Пожилая дама сидит в парке. — An {{*elderly|young|baby}} lady is sitting in the park." }
    ] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Напиши английское слово. Если забыл — вернись к карточкам." }
];
