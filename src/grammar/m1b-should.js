// TITLE: should / shouldn't
// EYEBROW: Spotlight 7 Grammar · Module 1
// SUB: Советуем, что стоит и чего не стоит делать. Безопасность дома, советы другу-растяпе и монстру в гостях — десять заданий с проверкой.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: советы: should + V, shouldn't + V, Should I…? Безопасность дома
const META = { ls: "s7g-m1-should", cards: false, boardLabel: "Правила" };
const P = [
  { id: "pos", phrase: "You should + V", ru: "совет: тебе стоит…" },
  { id: "neg", phrase: "You shouldn't + V", ru: "совет: не стоит…" },
  { id: "q", phrase: "Should I …?", ru: "вопрос: мне стоит…?" },
  { id: "short", phrase: "Yes, you should. / No, you shouldn't.", ru: "краткие ответы" },
  { id: "noto", phrase: "should go (не should to go)", ru: "после should — без to" },
  { id: "nos", phrase: "he should (не shoulds)", ru: "одна форма для всех" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило",
    instr: "Прочитай правило. Should — это совет: «стоит, следует».",
    blocks: [
      { h: "Совет — should / shouldn't", lines: [
        ["You *should* wear a helmet.", "Тебе следует носить шлем."],
        ["You *shouldn't* open the door to strangers.", "Не стоит открывать дверь незнакомцам."] ] },
      { h: "Как образуется", lines: [
        ["+ I / you / he / she / we / they *should* + V", "одна форма для всех"],
        ["– *shouldn't* (should not) + V", ""],
        ["? *Should* I call the police? — Yes, you *should*. / No, you *shouldn't*.", "вопрос и краткие ответы"] ] },
      { h: "Полезные фразы", lines: [
        ["What should I do?", "Что мне делать?"],
        ["I think you should…", "Думаю, тебе стоит…"],
        ["You shouldn't worry.", "Не волнуйся."] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ He shoulds go.  ✗ He should to go.", ""],
        ["✓ He *should go*.", "без -s и без to"] ] }
    ] },

  { type: "sort", title: "Хороший совет или плохой?", short: "Сортировка",
    instr: "Это хороший совет для безопасности дома? Выбери: стоит (should) или не стоит (shouldn't).",
    buckets: ["👍 You should…", "👎 You shouldn't…"],
    items: [
      { id: "pos", t: "…lock the door at night.", b: 0, why: "Да, дверь надо запирать." },
      { id: "neg", t: "…open the door to strangers.", b: 1, why: "Незнакомцам дверь не открываем." },
      { id: "neg", t: "…leave your keys near the window.", b: 1, why: "Ключи у окна могут украсть." },
      { id: "pos", t: "…check the visitor's ID.", b: 0, why: "Проверить документы — хорошая идея." },
      { id: "neg", t: "…play with matches.", b: 1, why: "Спички — опасно!" },
      { id: "pos", t: "…turn off the iron after use.", b: 0, why: "Утюг надо выключать." },
      { id: "neg", t: "…touch electric sockets with wet hands.", b: 1, why: "Мокрые руки и розетка — опасно." },
      { id: "pos", t: "…keep medicines away from small children.", b: 0, why: "Лекарства — подальше от малышей." },
      { id: "neg", t: "…tell strangers online where you live.", b: 1, why: "Свой адрес в интернете не пишем." },
      { id: "pos", t: "…call 112 in an emergency.", b: 0, why: "112 — номер экстренной помощи." }
    ] },

  { type: "gaps", title: "Растяпа Макс", short: "История 1", keepOrder: true, layout: "text", pic: "🤦‍♂️🔑", story: "Clumsy Max",
    instr: "Мой друг Макс всё время попадает в истории. Выбери: should или shouldn't?",
    items: [
      { id: "neg", t: "Max always loses his keys. He {{*shouldn't|should}} put them in his back pocket — there's a hole in it!" },
      { id: "pos", t: "He {{*should|shouldn't}} hang them on a hook near the door." },
      { id: "neg", t: "Yesterday he ate five ice creams and got a sore throat. You {{*shouldn't|should}} eat so much ice cream, Max!" },
      { id: "pos", t: "Now he has got a cold. He {{*should|shouldn't}} stay in bed and drink hot tea with lemon." },
      { id: "neg", t: "He {{*shouldn't|should}} play computer games all night — he needs to sleep!" },
      { id: "q", t: "\"{{*Should|Do|Shoulds}} I call the doctor?\" asks his mum. — \"Yes, you {{*should|shouldn't|do}}.\"" },
      { id: "noto", t: "I think Max should {{*be|to be|being}} more careful!" }
    ] },

  { type: "mcq", title: "Выбери правильный вариант", short: "Форма",
    instr: "Только один вариант правильный. Помни: после should — глагол без to и без -s.",
    items: [
      { id: "noto", q: "Тебе стоит пойти к врачу.", o: ["You should go to the doctor.", "You should to go to the doctor.", "You should going to the doctor."], why: "should + go, без to." },
      { id: "nos", q: "Ему следует больше спать.", o: ["He should sleep more.", "He shoulds sleep more.", "He should sleeps more."], why: "should — одна форма для всех." },
      { id: "neg", q: "Не стоит бегать у бассейна.", o: ["You shouldn't run near the pool.", "You don't should run near the pool.", "You shouldn't to run near the pool."], why: "shouldn't + V" },
      { id: "q", q: "Мне надеть куртку?", o: ["Should I wear a jacket?", "Do I should wear a jacket?", "I should wear a jacket?"], why: "Should ставим в начало вопроса." },
      { id: "short", q: "Should we take an umbrella? — Да.", o: ["Yes, we should.", "Yes, we do.", "Yes, we shoulds."], why: "Краткий ответ — с should." },
      { id: "short", q: "Should I open the window? — Нет.", o: ["No, you shouldn't.", "No, you don't.", "No, you not should."], why: "No, … shouldn't." },
      { id: "nos", q: "Ей стоит выучить эти слова.", o: ["She should learn these words.", "She should learns these words.", "She shoulds learn these words."], why: "she should learn — без -s." },
      { id: "noto", q: "Нам следует помогать родителям.", o: ["We should help our parents.", "We should to help our parents.", "We should helping our parents."], why: "should + help" }
    ] },

  { type: "gaps", title: "Монстр в гостях", short: "История 2", keepOrder: true, layout: "text", pic: "👾🏠", story: "A Monster Visits Earth",
    instr: "Маленький монстр Глюк впервые на Земле. Дай ему советы: впиши should или shouldn't.",
    items: [
      { id: "neg", t: "Glook, you [[shouldn't/should not]] eat the furniture. People sit on chairs, they don't eat them!" },
      { id: "pos", t: "You [[should]] say \"Hello\" when you meet people." },
      { id: "neg", t: "You [[shouldn't/should not]] shout in the library." },
      { id: "pos", t: "When you cross the road, you [[should]] look left and right." },
      { id: "neg", t: "You [[shouldn't/should not]] put the cat in the washing machine!" },
      { id: "pos", t: "You [[should]] wash your hands before dinner — all six of them." },
      { id: "q", t: "\"[[Should]] I wear shoes on all my ten feet?\" — \"Yes, you [[should]].\"" },
      { id: "short", t: "\"Should I bite the postman?\" — \"No, you [[shouldn't/should not]]!\"" }
    ] },

  { type: "tf", title: "Найди ошибку", short: "Ошибки",
    instr: "Верно или неверно? Если неверно — посмотри правильный вариант.",
    items: [
      { id: "noto", t: "You should to drink more water.", ok: false, fix: "You should drink more water.", why: "Без to." },
      { id: "nos", t: "She shoulds see a dentist.", ok: false, fix: "She should see a dentist.", why: "should — без -s." },
      { id: "pos", t: "You should wear a helmet on your bike.", ok: true },
      { id: "q", t: "Do I should call him?", ok: false, fix: "Should I call him?", why: "Should — в начало вопроса." },
      { id: "neg", t: "You shouldn't eat too many sweets.", ok: true },
      { id: "nos", t: "He should goes to bed early.", ok: false, fix: "He should go to bed early.", why: "should + go" },
      { id: "short", t: "Should we wait? — Yes, we should.", ok: true },
      { id: "neg", t: "You don't should touch the oven.", ok: false, fix: "You shouldn't touch the oven.", why: "shouldn't, а не don't should." }
    ] },

  { type: "mcq", title: "Что посоветовать?", short: "Ситуации",
    instr: "Прочитай ситуацию и выбери лучший совет.",
    items: [
      { id: "pos", q: "🥶  I'm cold.", o: ["You should put on a jumper.", "You shouldn't put on a jumper.", "You should open the window."] },
      { id: "neg", q: "🦷😖  I've got toothache.", o: ["You shouldn't eat sweets.", "You should eat more sweets.", "You shouldn't see a dentist."] },
      { id: "pos", q: "📚😰  I've got a test tomorrow.", o: ["You should revise tonight.", "You should play games all night.", "You shouldn't open your book."] },
      { id: "neg", q: "📱🌙  I can't sleep at night.", o: ["You shouldn't use your phone in bed.", "You should drink coffee at night.", "You should watch horror films."] },
      { id: "q", q: "🚪🔔  Someone is ringing the bell. I don't know them.", o: ["Should I open the door? — No, you shouldn't.", "Should I open the door? — Yes, you should.", "Do I should open the door?"] },
      { id: "pos", q: "🤒  I've got a temperature.", o: ["You should stay in bed.", "You should go to school.", "You shouldn't call the doctor."] }
    ] },

  { type: "order", title: "Составь предложение", short: "Порядок слов",
    instr: "Прочитай по-русски. Нажимай на слова в правильном порядке.",
    items: [
      { id: "pos", q: "Тебе следует запирать дверь.", s: "You should lock the door." },
      { id: "neg", q: "Не стоит открывать дверь незнакомцам.", s: "You shouldn't open the door to strangers." },
      { id: "q", q: "Мне позвонить в полицию?", s: "Should I call the police?" },
      { id: "nos", q: "Ему стоит больше читать.", s: "He should read more." },
      { id: "noto", q: "Думаю, тебе стоит отдохнуть.", s: "I think you should have a rest." },
      { id: "short", q: "Нам подождать? — Да.", s: "Should we wait? Yes, we should." }
    ] },

  { type: "translate", title: "Скажи по-английски", short: "Перевод",
    instr: "Скажи вслух, потом напиши. Проверка смотрит на should / shouldn't.",
    items: [
      { id: "pos", ru: "Тебе следует носить шлем.", en: "You should wear a helmet.", key: "should wear", hint: "should wear" },
      { id: "neg", ru: "Не стоит оставлять ключи у окна.", en: "You shouldn't leave your keys near the window.", key: "shouldn't leave|should not leave", hint: "shouldn't leave" },
      { id: "q", ru: "Что мне делать?", en: "What should I do?", key: "what should i do", hint: "What should I do?" },
      { id: "nos", ru: "Ей стоит пойти к врачу.", en: "She should go to the doctor.", key: "she should go", hint: "she should go (без -s)" },
      { id: "noto", ru: "Нам следует беречь воду.", en: "We should save water.", key: "should save", hint: "should save (без to)" },
      { id: "short", ru: "Мне подождать? — Нет, не стоит.", en: "Should I wait? — No, you shouldn't.", key: "no,? you shouldn't|no,? you should not", hint: "No, you shouldn't." }
    ] }
];
