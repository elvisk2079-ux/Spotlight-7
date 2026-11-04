// TITLE: Face & Special Features
// EYEBROW: Spotlight 7 · стр. 28 · Appearance · Лицо и особые приметы
// SUB: 10 слов – cute, pretty, round, freckles, beard, scar… Карточки с картинками и переводом, простые задания.
// BOARD: Твои слова
const META = { ls: "s7-p28-face-features" };
const P = [
  { id: "cute", phrase: "cute", ru: "милый, симпатичный", av: { portrait: true, look: "cute", hair: "curly", hc: "blond" } },
  { id: "pretty", phrase: "pretty", ru: "хорошенькая, красивая", av: { portrait: true, look: "pretty", hair: "long", hc: "brown" } },
  { id: "ugly", phrase: "ugly", ru: "некрасивый, уродливый", av: { portrait: true, look: "ugly", hair: "spiky", hc: "dark" } },
  { id: "round", phrase: "round", ru: "круглое (лицо)", av: { portrait: true, face: "round", hair: "short", hc: "brown" } },
  { id: "thin", phrase: "thin", ru: "худое, узкое (лицо)", av: { portrait: true, face: "thin", hair: "short", hc: "dark" } },
  { id: "tan", phrase: "dark tan", ru: "сильный загар", av: { portrait: true, tan: true, hair: "short", hc: "blond" } },
  { id: "scar", phrase: "scar", ru: "шрам", av: { portrait: true, scar: true, hair: "short", hc: "dark" } },
  { id: "beard", phrase: "beard", ru: "борода", av: { portrait: true, beard: true, hair: "short", hc: "brown" } },
  { id: "moustache", phrase: "moustache", ru: "усы", av: { portrait: true, moustache: true, hair: "short", hc: "dark" } },
  { id: "freckles", phrase: "freckles", ru: "веснушки", av: { portrait: true, freckles: true, hair: "pigtails", hc: "red" } }
];
const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на его перевод." },
  { type: "pic", title: "Посмотри на картинку", short: "Картинки", instr: "Посмотри на лицо и выбери подходящее слово." },
  { type: "ru2en", title: "Выбери английское слово", short: "Рус → Англ", instr: "Прочитай по-русски и нажми на английское слово." },
  { type: "en2ru", title: "Выбери перевод", short: "Англ → Рус", instr: "Прочитай английское слово и нажми на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод. Если не понял на слух — нажми «показать слово»." },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось английское слово." },
  { type: "order", title: "Собери предложение", short: "Фразы", instr: "Нажимай на слова по порядку, чтобы получилось предложение.",
    items: [
      { id: "beard", q: "У него борода.", s: "He has got a beard" },
      { id: "freckles", q: "У неё веснушки.", s: "She has got freckles" },
      { id: "round", q: "У него круглое лицо.", s: "He has got a round face" },
      { id: "scar", q: "У него шрам.", s: "He has got a scar" },
      { id: "tan", q: "У неё сильный загар.", s: "She has got a dark tan" }
    ] },
  { type: "gaps", title: "Вставь слово", short: "Предложения", instr: "Прочитай перевод и выбери слово для пропуска.",
    items: [
      { id: "cute", t: "Котёнок милый. — The kitten is {{*cute|ugly|bald}}." },
      { id: "pretty", t: "Она очень хорошенькая. — She is very {{*pretty|ugly|round}}." },
      { id: "ugly", t: "Чудовище некрасивое. — The monster is {{*ugly|pretty|cute}}." },
      { id: "round", t: "У него круглое лицо. — He has got a {{*round|thin|long}} face." },
      { id: "thin", t: "У неё узкое лицо. — She has got a {{*thin|round|fat}} face." },
      { id: "tan", t: "После моря у меня сильный загар. — After the sea I've got a dark {{*tan|scar|beard}}." },
      { id: "scar", t: "У Гарри Поттера шрам. — Harry Potter has got a {{*scar|beard|moustache}}." },
      { id: "beard", t: "У Деда Мороза длинная борода. — Father Frost has got a long {{*beard|scar|tan}}." },
      { id: "moustache", t: "У моего дедушки усы. — My grandad has got a {{*moustache|freckles|tan}}." },
      { id: "freckles", t: "У Пеппи веснушки. — Pippi has got {{*freckles|beard|scar}}." }
    ] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Напиши английское слово. Если забыл — вернись к карточкам." }
];
