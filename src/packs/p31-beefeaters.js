// TITLE: The Yeoman Warders
// EYEBROW: Spotlight 7 · стр. 31 · Culture Corner · Beefeaters
// SUB: 22 слова из текста про стражей Тауэра – guard, prisoner, raven, uniform, palace… Карточки с переводом (у глаголов — и прошедшее время) и простые задания.
// BOARD: Твои слова
const META = { ls: "s7-p31-beefeaters" };
const P = [
  { id: "visit", phrase: "visit", ru: "посещение; посещать", past: "visited" },
  { id: "guard", phrase: "guard", ru: "охранять; охранник", past: "guarded" },
  { id: "bodyguard", phrase: "bodyguard", ru: "телохранитель" },
  { id: "duty", phrase: "duty", ru: "обязанность" },
  { id: "lookafter", phrase: "look after", ru: "присматривать за", past: "looked after" },
  { id: "prisoner", phrase: "prisoner", ru: "заключённый, узник" },
  { id: "jewels", phrase: "the Crown Jewels", ans: "the Crown Jewels/Crown Jewels", ru: "королевские драгоценности" },
  { id: "main", phrase: "main", ru: "главный, основной" },
  { id: "guide", phrase: "guide", ru: "гид, экскурсовод" },
  { id: "tourist", phrase: "tourist", ru: "турист" },
  { id: "takecare", phrase: "take care of", ru: "заботиться о", past: "took care of" },
  { id: "raven", phrase: "raven", ru: "ворон" },
  { id: "army", phrase: "the armed forces", ans: "the armed forces/armed forces", ru: "вооружённые силы, армия" },
  { id: "female", phrase: "female", ru: "женщина; женский" },
  { id: "famous", phrase: "be famous for", ans: "be famous for/famous for", ru: "быть знаменитым чем-то", past: "was famous for" },
  { id: "uniform", phrase: "uniform", ru: "форма (одежда)" },
  { id: "occasion", phrase: "formal occasion", ru: "торжественный случай" },
  { id: "instead", phrase: "instead of", ru: "вместо" },
  { id: "meat", phrase: "meat", ru: "мясо" },
  { id: "palace", phrase: "palace", ru: "дворец" },
  { id: "protect", phrase: "protect", ru: "защищать", past: "protected" },
  { id: "king", phrase: "king", ru: "король" }
];
const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на его перевод." },
  { type: "ru2en", title: "Выбери английское слово", short: "Рус → Англ", instr: "Прочитай по-русски и нажми на английское слово." },
  { type: "en2ru", title: "Выбери перевод", short: "Англ → Рус", instr: "Прочитай английское слово и нажми на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод. Если не понял на слух — нажми «показать слово»." },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось английское слово.",
    ids: ["visit", "guard", "bodyguard", "duty", "prisoner", "main", "guide", "tourist", "raven", "female", "uniform", "meat", "palace", "protect", "king"] },
  { type: "order", title: "Собери выражение", short: "Выражения", instr: "Нажимай на слова по порядку, чтобы получилось выражение.",
    items: [
      { id: "lookafter", q: "присматривать за заключёнными", s: "look after the prisoners" },
      { id: "jewels", q: "охранять королевские драгоценности", s: "guard the Crown Jewels" },
      { id: "takecare", q: "заботиться о воронах", s: "take care of the ravens" },
      { id: "army", q: "служить в армии", s: "be in the armed forces" },
      { id: "famous", q: "знамениты своей формой", s: "famous for their uniform" },
      { id: "occasion", q: "в торжественных случаях", s: "on formal occasions" },
      { id: "instead", q: "мясо вместо денег", s: "meat instead of money" },
      { id: "visit", q: "посещение Тауэра", s: "a visit to the Tower" }
    ] },
  { type: "gaps", title: "Вставь слово", short: "Предложения", instr: "Прочитай перевод и выбери слово для пропуска.",
    items: [
      { id: "visit", t: "Мы посетили Лондон. — We {{*visited|guarded|protected}} London." },
      { id: "guard", t: "Бифитеры охраняют Тауэр. — Beefeaters {{*guard|visit|eat}} the Tower." },
      { id: "bodyguard", t: "У короля был телохранитель. — The king had a {{*bodyguard|tourist|raven}}." },
      { id: "duty", t: "Это моя обязанность. — It's my {{*duty|uniform|palace}}." },
      { id: "lookafter", t: "Я присматриваю за братом. — I look {{*after|for|at}} my brother." },
      { id: "prisoner", t: "Заключённый был в Тауэре. — The {{*prisoner|guide|king}} was in the Tower." },
      { id: "jewels", t: "Королевские драгоценности очень дорогие. — The Crown {{*Jewels|Ravens|Kings}} are very expensive." },
      { id: "main", t: "Это главная улица. — This is the {{*main|female|formal}} street." },
      { id: "guide", t: "Гид рассказывает туристам о Тауэре. — The {{*guide|prisoner|raven}} tells tourists about the Tower." },
      { id: "tourist", t: "Многие туристы посещают Лондон. — Many {{*tourists|ravens|kings}} visit London." },
      { id: "takecare", t: "Она заботится о своей кошке. — She takes {{*care|after|duty}} of her cat." },
      { id: "raven", t: "В Тауэре живут вороны. — {{*Ravens|Kings|Tourists}} live in the Tower." },
      { id: "army", t: "Мой дедушка служил в армии. — My grandad was in the armed {{*forces|guards|duties}}." },
      { id: "female", t: "Первая женщина-стражник. — The first {{*female|main|formal}} Yeoman Warder." },
      { id: "famous", t: "Лондон знаменит своими музеями. — London is famous {{*for|of|with}} its museums." },
      { id: "uniform", t: "У нас в школе есть форма. — We have got a school {{*uniform|palace|duty}}." },
      { id: "occasion", t: "Торжественный случай. — A formal {{*occasion|uniform|prisoner}}." },
      { id: "instead", t: "Я пью чай вместо кофе. — I drink tea {{*instead|in|of}} of coffee." },
      { id: "meat", t: "Я не ем мясо. — I don't eat {{*meat|money|jewels}}." },
      { id: "palace", t: "Король живёт во дворце. — The king lives in a {{*palace|prison|raven}}." },
      { id: "protect", t: "Стражи защищали короля. — The guards {{*protected|visited|looked}} the king." },
      { id: "king", t: "Генрих VII был королём. — Henry VII was a {{*king|guide|tourist}}." }
    ] },
  { type: "gaps", title: "Вторая форма глагола", short: "Глаголы", instr: "Выбери, как глагол звучит в прошедшем времени (давно, в 1485 году…).",
    items: [
      { id: "visit", t: "visit (посещать) → {{*visited|visitet|visit}} (посетил)" },
      { id: "guard", t: "guard (охранять) → {{*guarded|guardet|guard}} (охранял)" },
      { id: "lookafter", t: "look after (присматривать) → {{*looked after|lookt after|look after}} (присматривал)" },
      { id: "takecare", t: "take care of (заботиться) → {{*took care of|taked care of|take care of}} (заботился)" },
      { id: "protect", t: "protect (защищать) → {{*protected|protectet|protect}} (защищал)" },
      { id: "famous", t: "be famous for (быть знаменитым) → {{*was famous for|be famous for|is famous for}} (был знаменит)" },
      { id: "king", t: "be (быть) → {{*was|were|be}} (он был королём)" },
      { id: "uniform", t: "wear (носить одежду) → {{*wore|weared|wear}} (носил)" }
    ] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Напиши английское слово. Если забыл — вернись к карточкам." }
];
