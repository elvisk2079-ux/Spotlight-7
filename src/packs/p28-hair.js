// TITLE: Hair
// EYEBROW: Spotlight 7 · стр. 28 · Appearance · Волосы
// SUB: 15 слов о волосах – long, curly, blond, bald, pigtails… Карточки с картинками и переводом, простые задания.
// BOARD: Твои слова
const META = { ls: "s7-p28-hair" };
const P = [
  { id: "short", phrase: "short", ru: "короткие", av: { hair: "short", hc: "brown" } },
  { id: "spiky", phrase: "spiky", ru: "торчащие, «ёжиком»", av: { hair: "spiky", hc: "dark", shirt: "#2A55C9" } },
  { id: "straight", phrase: "straight", ru: "прямые", av: { hair: "straight", hc: "dark", shirt: "#7FB77E" } },
  { id: "shoulder", phrase: "shoulder-length", ru: "до плеч", av: { hair: "shoulder", hc: "brown", look: "pretty", shirt: "#F29BA6" } },
  { id: "long", phrase: "long", ru: "длинные", av: { hair: "long", hc: "brown", look: "pretty", shirt: "#8E7CC3" } },
  { id: "blond", phrase: "blond(e)", spell: "blond", ans: "blond/blonde", say: "blond", ru: "светлые, белокурые (блондин)", av: { hair: "shoulder", hc: "blond", shirt: "#9ED1E8" } },
  { id: "red", phrase: "red", ru: "рыжие", av: { hair: "shoulder", hc: "red", freckles: true, shirt: "#7FB77E" } },
  { id: "brown", phrase: "brown", ru: "каштановые", av: { hair: "shoulder", hc: "brown", shirt: "#E9A23B" } },
  { id: "fair", phrase: "fair", ru: "светло-русые", av: { hair: "shoulder", hc: "fair", shirt: "#5B8C5A" } },
  { id: "dark", phrase: "dark", ru: "тёмные", av: { hair: "shoulder", hc: "dark", shirt: "#E07A5F" } },
  { id: "grey", phrase: "grey", ru: "седые", av: { hair: "short", hc: "grey", wrinkles: true, glasses: true, shirt: "#9AA7B4" } },
  { id: "curly", phrase: "curly", ru: "кудрявые", av: { hair: "curly", hc: "brown", shirt: "#F3B23C" } },
  { id: "wavy", phrase: "wavy", ru: "волнистые", av: { hair: "wavy", hc: "red", shirt: "#2A55C9" } },
  { id: "bald", phrase: "bald", ru: "лысый", av: { hair: "bald", hc: "brown", shirt: "#5B8C5A" } },
  { id: "pigtails", phrase: "pigtails", ru: "хвостики, косички", av: { hair: "pigtails", hc: "blond", look: "cute", shirt: "#F29BA6" } }
];
const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на его перевод." },
  { type: "pic", title: "Какие волосы? (форма)", short: "Причёска", instr: "Посмотри на причёску и выбери подходящее слово.", ids: ["short", "spiky", "straight", "shoulder", "long", "curly", "wavy", "bald", "pigtails"] },
  { type: "pic", title: "Какого цвета волосы?", short: "Цвет", instr: "Посмотри на цвет волос и выбери подходящее слово.", ids: ["blond", "red", "brown", "fair", "dark", "grey"] },
  { type: "ru2en", title: "Выбери английское слово", short: "Рус → Англ", instr: "Прочитай по-русски и нажми на английское слово." },
  { type: "en2ru", title: "Выбери перевод", short: "Англ → Рус", instr: "Прочитай английское слово и нажми на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод. Если не понял на слух — нажми «показать слово»." },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось английское слово." },
  { type: "order", title: "Собери предложение", short: "Фразы", instr: "Нажимай на слова по порядку, чтобы получилось предложение.",
    items: [
      { id: "long", q: "У неё длинные волосы.", s: "She has got long hair" },
      { id: "curly", q: "У него кудрявые волосы.", s: "He has got curly hair" },
      { id: "blond", q: "У неё светлые волосы.", s: "She has got blond hair" },
      { id: "bald", q: "Он лысый.", s: "He is bald" },
      { id: "pigtails", q: "Она носит хвостики.", s: "She wears pigtails" },
      { id: "red", q: "У него рыжие волосы.", s: "He has got red hair" }
    ] },
  { type: "gaps", title: "Вставь слово", short: "Предложения", instr: "Прочитай перевод и выбери слово для пропуска.",
    items: [
      { id: "short", t: "У него короткие волосы. — He has got {{*short|long|wavy}} hair." },
      { id: "spiky", t: "У него волосы ёжиком. — He has got {{*spiky|long|straight}} hair." },
      { id: "straight", t: "У неё прямые волосы. — She has got {{*straight|curly|wavy}} hair." },
      { id: "shoulder", t: "У неё волосы до плеч. — She has got {{*shoulder-length|bald|short}} hair." },
      { id: "long", t: "У Рапунцель очень длинные волосы. — Rapunzel has got very {{*long|short|spiky}} hair." },
      { id: "blond", t: "У неё светлые волосы. — She has got {{*blond|dark|grey}} hair." },
      { id: "red", t: "У него рыжие волосы. — He has got {{*red|grey|dark}} hair." },
      { id: "brown", t: "У меня каштановые волосы. — I have got {{*brown|red|grey}} hair." },
      { id: "fair", t: "У неё светло-русые волосы. — She has got {{*fair|dark|bald}} hair." },
      { id: "dark", t: "У моего папы тёмные волосы. — My dad has got {{*dark|fair|blond}} hair." },
      { id: "grey", t: "У бабушки седые волосы. — My granny has got {{*grey|red|blond}} hair." },
      { id: "curly", t: "У него кудрявые волосы. — He has got {{*curly|straight|bald}} hair." },
      { id: "wavy", t: "У неё волнистые волосы. — She has got {{*wavy|spiky|bald}} hair." },
      { id: "bald", t: "Мой дедушка лысый. — My grandad is {{*bald|curly|long}}." },
      { id: "pigtails", t: "У девочки хвостики. — The girl has got {{*pigtails|bald|spiky}}." }
    ] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Напиши английское слово. Если забыл — вернись к карточкам." }
];
