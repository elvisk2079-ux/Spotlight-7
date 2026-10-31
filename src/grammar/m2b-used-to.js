// TITLE: used to
// EYEBROW: Spotlight 7 Grammar · Module 2
// SUB: «Раньше бывало, а теперь нет». Как жили люди сто лет назад, каким был папа в детстве и чего боялся дракон — десять заданий с проверкой.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: раньше делал, а теперь нет: used to, didn't use to, Did you use to…?
const META = { ls: "s7g-m2-used-to", cards: false, boardLabel: "Правила" };
const P = [
  { id: "pos", phrase: "I used to + V", ru: "раньше (делал), а теперь нет" },
  { id: "neg", phrase: "didn't use to + V", ru: "раньше не (делал)" },
  { id: "q", phrase: "Did you use to + V?", ru: "вопрос: ты раньше…?" },
  { id: "use", phrase: "did… use to (без -d)", ru: "после did — use, без -d" },
  { id: "now", phrase: "used to ↔ now", ru: "тогда и сейчас" },
  { id: "ps", phrase: "used to или Past Simple?", ru: "один раз → Past Simple" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило",
    instr: "Прочитай правило. used to — привычка или состояние в прошлом, которых теперь нет.",
    blocks: [
      { h: "Раньше было, а теперь нет", lines: [
        ["I *used to* have long hair.", "Раньше у меня были длинные волосы (а теперь нет)."],
        ["My granny *used to* sew.", "Бабушка раньше шила."] ] },
      { h: "Как образуется", lines: [
        ["+ I / you / he / she / we / they *used to* + V", "одна форма для всех"],
        ["– *didn't use to* + V", "He didn't use to like fish."],
        ["? *Did* you *use to* + V? — Yes, I *did*. / No, I *didn't*.", ""] ] },
      { h: "used to или Past Simple?", lines: [
        ["I *used to* go to the park every day.", "много раз, привычка → used to"],
        ["I *went* to the park yesterday.", "один раз → только Past Simple"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ Did you used to…?  ✓ Did you *use to*…?", "после did — use без -d"],
        ["✗ I use to play…  ✓ I *used to* play…", "в утверждении — used с -d"],
        ["✗ I used to go there yesterday.", "с yesterday — Past Simple: I went there yesterday."] ] }
    ] },

  { type: "gaps", title: "Сто лет назад", short: "История 1", keepOrder: true, layout: "text", pic: "🕯️🐎", story: "Life 100 Years Ago",
    instr: "Как жили люди сто лет назад? Выбери правильный вариант.",
    items: [
      { id: "pos", t: "A hundred years ago people {{*used to|use to|are used to}} travel by horse and cart." },
      { id: "neg", t: "They {{*didn't use to|didn't used to|don't use to}} have cars or planes." },
      { id: "pos", t: "Children {{*used to|use to|uses to}} write with pens and ink, and they often got ink on their fingers!" },
      { id: "neg", t: "People {{*didn't use to|didn't used to|not used to}} watch TV. They {{*used to|use to|using to}} read books by candlelight." },
      { id: "q", t: "{{*Did|Were|Do}} people use to wash clothes by hand? — Yes, they {{*did|were|used}}." },
      { id: "now", t: "Now we {{*have|used to have|had}} washing machines, so we don't wash clothes by hand." }
    ] },

  { type: "sort", title: "Тогда или сейчас?", short: "Сортировка",
    instr: "Это было раньше или так сейчас?",
    buckets: ["Раньше (used to)", "Сейчас"],
    items: [
      { id: "pos", t: "Dad used to have a moustache.", b: 0, why: "used to — раньше." },
      { id: "now", t: "Dad has a beard.", b: 1, why: "has — сейчас." },
      { id: "neg", t: "I didn't use to like broccoli.", b: 0, why: "didn't use to — раньше не любил." },
      { id: "now", t: "I love broccoli!", b: 1, why: "love — сейчас." },
      { id: "pos", t: "We used to live in a small flat.", b: 0, why: "used to — раньше." },
      { id: "now", t: "We live in a big house.", b: 1, why: "live — сейчас." },
      { id: "q", t: "Did you use to cry a lot as a baby?", b: 0, why: "Did… use to — о прошлом." },
      { id: "now", t: "My sister plays the violin.", b: 1, why: "plays — сейчас." }
    ] },

  { type: "gaps", title: "Дракон Дэн", short: "История 2", keepOrder: true, layout: "text", pic: "🐉🔥", story: "Dan the Dragon",
    instr: "Дракон Дэн раньше был совсем другим! Впиши used to, didn't use to или use (после did).",
    items: [
      { id: "pos", t: "When Dan was a little dragon, he [[used to]] be afraid of fire!" },
      { id: "neg", t: "He [[didn't use to/did not use to]] fly — he walked everywhere." },
      { id: "pos", t: "He [[used to]] eat carrots and apples." },
      { id: "neg", t: "He [[didn't use to/did not use to]] scare people. He [[used to]] play with the village children." },
      { id: "use", t: "\"Did you [[use]] to sleep in a cave?\" I asked. — \"No, I didn't. I used to sleep in a barn with the cows.\"" },
      { id: "now", t: "Now Dan is big. He breathes fire and flies over the mountains. But he still loves carrots!" }
    ] },

  { type: "mcq", title: "Выбери правильный вариант", short: "Форма",
    instr: "Только один вариант правильный.",
    items: [
      { id: "pos", q: "Раньше я играл в футбол.", o: ["I used to play football.", "I use to play football.", "I used to played football."], why: "used to + play" },
      { id: "use", q: "Ты раньше жил в Москве?", o: ["Did you use to live in Moscow?", "Did you used to live in Moscow?", "Do you used to live in Moscow?"], why: "Did… use to — без -d." },
      { id: "neg", q: "Он раньше не носил очки.", o: ["He didn't use to wear glasses.", "He didn't used to wear glasses.", "He usedn't wear glasses."], why: "didn't use to" },
      { id: "ps", q: "Вчера я ходил в кино.", o: ["I went to the cinema yesterday.", "I used to go to the cinema yesterday.", "I use to go to the cinema yesterday."], why: "Один раз, вчера → Past Simple." },
      { id: "ps", q: "В детстве я каждое лето ездил к бабушке.", o: ["I used to visit my granny every summer.", "I use to visit my granny every summer.", "I used visit my granny every summer."], why: "Привычка в прошлом → used to." },
      { id: "q", q: "— Did she use to have a cat? — Да.", o: ["Yes, she did.", "Yes, she used.", "Yes, she use to."], why: "Краткий ответ — с did." }
    ] },

  { type: "tf", title: "Найди ошибку", short: "Ошибки",
    instr: "Верно или неверно? Если неверно — посмотри правильный вариант.",
    items: [
      { id: "use", t: "Did you used to have a dog?", ok: false, fix: "Did you use to have a dog?", why: "После did — use." },
      { id: "pos", t: "My mum used to be a dancer.", ok: true },
      { id: "pos", t: "I use to collect stickers when I was six.", ok: false, fix: "I used to collect stickers when I was six.", why: "used с -d." },
      { id: "neg", t: "We didn't use to have a computer.", ok: true },
      { id: "ps", t: "I used to break my arm last year.", ok: false, fix: "I broke my arm last year.", why: "Один раз → Past Simple." },
      { id: "neg", t: "He didn't used to like school.", ok: false, fix: "He didn't use to like school.", why: "didn't use to" },
      { id: "q", t: "Did they use to live here?", ok: true }
    ] },

  { type: "order", title: "Составь предложение", short: "Порядок слов",
    instr: "Прочитай по-русски. Нажимай на слова в правильном порядке.",
    items: [
      { id: "pos", q: "Мой дедушка раньше работал на корабле.", s: "My grandad used to work on a ship." },
      { id: "neg", q: "Я раньше не любил читать.", s: "I didn't use to like reading." },
      { id: "q", q: "Ты раньше занимался плаванием?", s: "Did you use to go swimming?" },
      { id: "now", q: "Раньше она жила в деревне, а теперь живёт в городе.", s: "She used to live in a village, but now she lives in a town." },
      { id: "use", q: "Они раньше ходили в эту школу?", s: "Did they use to go to this school?" }
    ] },

  { type: "translate", title: "Скажи по-английски", short: "Перевод",
    instr: "Скажи вслух, потом напиши. Проверка смотрит на used to.",
    items: [
      { id: "pos", ru: "Раньше у меня был хомяк.", en: "I used to have a hamster.", key: "used to have", hint: "used to have" },
      { id: "neg", ru: "Раньше я не любил молоко.", en: "I didn't use to like milk.", key: "didn't use to like|did not use to like", hint: "didn't use to like" },
      { id: "q", ru: "Ты раньше носил очки?", en: "Did you use to wear glasses?", key: "did you use to wear", hint: "Did you use to…?" },
      { id: "now", ru: "Раньше мы жили в Сочи.", en: "We used to live in Sochi.", key: "used to live", hint: "used to live" },
      { id: "ps", ru: "Мой папа раньше играл в хоккей.", en: "My dad used to play hockey.", key: "used to play", hint: "used to play" },
      { id: "use", ru: "Твоя мама раньше пела?", en: "Did your mum use to sing?", key: "did your (mum|mother) use to sing", hint: "Did… use to sing?" }
    ] }
];
