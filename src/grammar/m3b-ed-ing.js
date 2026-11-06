// TITLE: -ed / -ing: bored или boring?
// EYEBROW: Spotlight 7 Grammar · Module 3
// SUB: Мне скучно — I'm bored. Фильм скучный — the film is boring. Правило, сортировка, смайлики, истории про фокусника и дом с привидениями — десять заданий с проверкой.
// BOARD: Твои пары слов
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — пара усвоена. Красная рамка — повтори эту пару.
// HOME: index.html
// HUB: bored или boring? -ed — что я чувствую, -ing — какой предмет / человек
const META = { ls: "s7g-m3-ed-ing", cards: false, boardLabel: "Пары" };
const P = [
  { id: "bore", phrase: "bored / boring", ru: "мне скучно / скучный" },
  { id: "int", phrase: "interested / interesting", ru: "мне интересно / интересный" },
  { id: "exc", phrase: "excited / exciting", ru: "в восторге / захватывающий" },
  { id: "tire", phrase: "tired / tiring", ru: "устал / утомительный" },
  { id: "fri", phrase: "frightened / frightening", ru: "испуган / страшный" },
  { id: "sur", phrase: "surprised / surprising", ru: "удивлён / удивительный" },
  { id: "ama", phrase: "amazed / amazing", ru: "поражён / потрясающий" },
  { id: "dis", phrase: "disappointed / disappointing", ru: "разочарован / разочаровывающий" },
  { id: "rel", phrase: "relaxed / relaxing", ru: "расслаблен / расслабляющий" },
  { id: "emb", phrase: "embarrassed / embarrassing", ru: "смущён / неловкий" },
  { id: "ann", phrase: "annoyed / annoying", ru: "раздражён / раздражающий" },
  { id: "con", phrase: "confused / confusing", ru: "запутался / запутанный" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило",
    instr: "Прочитай правило. Главный вопрос: это ЧУВСТВО человека или ОПИСАНИЕ того, что это чувство вызывает?",
    blocks: [
      { h: "-ed — что я чувствую? (How do you feel?)", lines: [
        ["I am *bored*.", "Мне скучно."],
        ["We were *amazed* at the costumes.", "Мы были поражены костюмами."],
        ["*excited* students, *interested* tourists", "взволнованные ученики, заинтересованные туристы"] ] },
      { h: "-ing — какой он? (What is it like?)", lines: [
        ["It was a *boring* film.", "Это был скучный фильм."],
        ["an *amazing* story", "потрясающая история"],
        ["Maths is *confusing*.", "Математика — запутанная (вызывает путаницу)."] ] },
      { h: "Одна пара — две стороны", lines: [
        ["The film was *boring*, so I was *bored*.", "Фильм скучный → мне скучно."],
        ["The trip was *tiring*. We were *tired*.", "Поездка утомительная → мы устали."],
        ["It was a *surprising* story. I was *surprised*.", "Удивительная история → я удивился."] ] },
      { h: "Предлоги после -ed", lines: [
        ["*interested in* football", "интересоваться футболом"],
        ["*disappointed in* you", "разочарован в тебе"],
        ["*amazed at*, *surprised at*, *bored with*, *frightened of*, *scared of*", ""] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ I feel boring.  ✓ I feel *bored*.", "Мне скучно. (boring — это «я скучный человек»!)"],
        ["✗ I'm interesting in music.  ✓ I'm *interested in* music.", "Мне интересна музыка."] ] }
    ] },

  { type: "sort", title: "Чувство или описание?", short: "Сортировка",
    instr: "Прочитай по-русски. Это чувство человека (-ed) или описание вещи, события, человека (-ing)?",
    buckets: ["-ed: что я чувствую", "-ing: какой он / оно"],
    items: [
      { id: "bore", t: "Мне скучно.", b: 0, why: "Это моё чувство → bored." },
      { id: "bore", t: "Скучный урок.", b: 1, why: "Какой урок? → boring." },
      { id: "tire", t: "Утомительная дорога.", b: 1, why: "Какая дорога? → tiring." },
      { id: "tire", t: "Я так устал!", b: 0, why: "Моё состояние → tired." },
      { id: "fri", t: "Страшный фильм.", b: 1, why: "Какой фильм? → frightening." },
      { id: "fri", t: "Малыш испугался.", b: 0, why: "Чувство малыша → frightened." },
      { id: "int", t: "Я интересуюсь космосом.", b: 0, why: "Моё чувство → interested in." },
      { id: "int", t: "Интересная книга.", b: 1, why: "Какая книга? → interesting." },
      { id: "exc", t: "Захватывающая игра.", b: 1, why: "Какая игра? → exciting." },
      { id: "emb", t: "Мне было так неловко!", b: 0, why: "Моё чувство → embarrassed." },
      { id: "rel", t: "Расслабляющая музыка.", b: 1, why: "Какая музыка? → relaxing." },
      { id: "dis", t: "Папа разочарован.", b: 0, why: "Чувство папы → disappointed." }
    ] },

  { type: "mcq", title: "Скажи по-английски", short: "Выбор",
    instr: "Прочитай по-русски и выбери правильный английский вариант.",
    items: [
      { id: "bore", q: "Мне скучно.", o: ["I'm bored.", "I'm boring.", "I bored."], why: "Чувство → bored. I'm boring = я скучный человек!" },
      { id: "int", q: "Мне интересна эта книга.", o: ["I'm interested in this book.", "I'm interesting in this book.", "I'm interested on this book."], why: "interested in" },
      { id: "exc", q: "Матч был захватывающим!", o: ["The match was exciting!", "The match was excited!", "The match excited!"], why: "Какой матч? → exciting." },
      { id: "tire", q: "Мы очень устали.", o: ["We are very tired.", "We are very tiring.", "We very tired."], why: "Состояние → tired." },
      { id: "fri", q: "Моя сестра боится пауков.", o: ["My sister is frightened of spiders.", "My sister is frightening of spiders.", "My sister frightened spiders."], why: "Её чувство → frightened of." },
      { id: "ama", q: "Это потрясающий фокус!", o: ["It's an amazing trick!", "It's an amazed trick!", "It's amazing a trick!"], why: "Какой фокус? → amazing." },
      { id: "sur", q: "Я был удивлён.", o: ["I was surprised.", "I was surprising.", "I surprised."], why: "Чувство → surprised." },
      { id: "con", q: "Это правило очень запутанное.", o: ["This rule is very confusing.", "This rule is very confused.", "This rule very confusing."], why: "Какое правило? → confusing." },
      { id: "ann", q: "Мой младший брат такой надоедливый!", o: ["My little brother is so annoying!", "My little brother is so annoyed!", "My little brother so annoying!"], why: "Какой брат? → annoying." },
      { id: "rel", q: "Я чувствую себя расслабленно.", o: ["I feel relaxed.", "I feel relaxing.", "I relaxed feel."], why: "Чувство → relaxed." }
    ] },

  { type: "gaps", title: "Упражнение 4 из учебника", short: "Учебник", keepOrder: true,
    instr: "Это задание из учебника (с. 29, упр. 4). Выбери правильное слово.",
    items: [
      { id: "fri", t: "Jack is {{*scared|scaring}} of spiders." },
      { id: "bore", t: "I find the maths lessons really {{*boring|bored}}." },
      { id: "int", t: "Tonia is {{*interested|interesting}} in football." },
      { id: "tire", t: "The trip was {{*tiring|tired}}." },
      { id: "dis", t: "I'm {{*disappointed|disappointing}} in you." }
    ] },

  { type: "gaps", title: "Великий Мистерио", short: "История 1", keepOrder: true, layout: "text", pic: "🎩🐰", story: "The Great Misterio",
    instr: "Мой брат Миша решил стать фокусником. Читай и выбирай -ed или -ing.",
    items: [
      { id: "exc", t: "Last Saturday my brother Misha gave a magic show for our family. He was very {{*excited|exciting}} — it was his first show!" },
      { id: "bore", t: "The first trick was a bit {{*boring|bored}}. He just made a coin disappear. Granny was {{*bored|boring}} and started knitting." },
      { id: "con", t: "Then he did a card trick, but it was very {{*confusing|confused}}. Even Misha was {{*confused|confusing}}!" },
      { id: "emb", t: "Then he dropped all the cards on the floor. It was so {{*embarrassing|embarrassed}}! His face turned red." },
      { id: "sur", t: "But the last trick was really {{*surprising|surprised}}. He pulled a real rabbit out of Dad's hat!" },
      { id: "ama", t: "We were all {{*amazed|amazing}}. Granny dropped her knitting. \"That's {{*amazing|amazed}}!\" she shouted." },
      { id: "ann", t: "Only Dad was a bit {{*annoyed|annoying}} — the rabbit ate his hat." }
    ] },

  { type: "mcq", title: "Смайлики", short: "Смайлики",
    instr: "Посмотри на смайлики и выбери, как закончить предложение.",
    items: [
      { id: "bore", q: "😴📺  The film was so…", o: ["boring", "bored", "exciting"] },
      { id: "tire", q: "🥵🏃‍♂️  After the race I was really…", o: ["tired", "tiring", "relaxing"] },
      { id: "fri", q: "👻😱  The ghost story was…", o: ["frightening", "frightened", "relaxed"] },
      { id: "exc", q: "🎢🤩  The roller coaster was…", o: ["exciting", "excited", "bored"] },
      { id: "rel", q: "🛀🎶  A hot bath is very…", o: ["relaxing", "relaxed", "annoyed"] },
      { id: "dis", q: "🎁😞  I didn't get a bike for my birthday. I'm…", o: ["disappointed", "disappointing", "amazing"] },
      { id: "emb", q: "🙈🍝  I fell into my spaghetti on a date! I was so…", o: ["embarrassed", "embarrassing", "interesting"] },
      { id: "ann", q: "🦟😤  This mosquito is really…", o: ["annoying", "annoyed", "relaxing"] },
      { id: "int", q: "🔭🪐  My cousin is very … in space.", o: ["interested", "interesting", "exciting"] },
      { id: "sur", q: "🎂😲  A surprise party! Mum was really…", o: ["surprised", "surprising", "boring"] }
    ] },

  { type: "gaps", title: "Ночь в доме с привидениями", short: "История 2", keepOrder: true, layout: "text", pic: "🏚️🕯️", story: "A Night in the Haunted House",
    instr: "Впиши слово с окончанием -ed или -ing. В скобках — начало слова. Нажми «Проверить».",
    items: [
      { id: "exc", t: "On Halloween my friends and I visited an old empty house. We were very [[excited]] (excit…)." },
      { id: "fri", t: "Inside it was dark and [[frightening]] (frighten…). Doors were creaking." },
      { id: "fri", t: "Suddenly we heard a strange noise. Liza was so [[frightened]] (frighten…) that she screamed." },
      { id: "sur", t: "Then we saw two green eyes in the corner. It was very [[surprising]] (surpris…) — it was only a black cat!" },
      { id: "emb", t: "Liza felt [[embarrassed]] (embarrass…) because she screamed so loudly." },
      { id: "tire", t: "We walked home at midnight. It was a long and [[tiring]] (tir…) night, and we were all very [[tired]] (tir…)." },
      { id: "int", t: "But it was the most [[interesting]] (interest…) Halloween ever!" }
    ] },

  { type: "tf", title: "Найди ошибку", short: "Ошибки",
    instr: "Верно или неверно? Если неверно — посмотри правильный вариант.",
    items: [
      { id: "bore", t: "I feel boring at the lesson.", ok: false, fix: "I feel bored at the lesson.", why: "Чувство → bored." },
      { id: "int", t: "I'm interesting in music.", ok: false, fix: "I'm interested in music.", why: "Мне интересна музыка → interested in." },
      { id: "ama", t: "The view from the mountain was amazing.", ok: true },
      { id: "tire", t: "Swimming is very tired.", ok: false, fix: "Swimming is very tiring.", why: "Какое занятие? → tiring." },
      { id: "exc", t: "The children were excited about the trip.", ok: true },
      { id: "con", t: "This map is confused.", ok: false, fix: "This map is confusing.", why: "Какая карта? → confusing." },
      { id: "dis", t: "The end of the film was disappointing.", ok: true },
      { id: "sur", t: "It was a surprised story.", ok: false, fix: "It was a surprising story.", why: "Какая история? → surprising." },
      { id: "ann", t: "Mum was annoyed because I was late.", ok: true },
      { id: "rel", t: "This music is very relaxed.", ok: false, fix: "This music is very relaxing.", why: "Какая музыка? → relaxing." }
    ] },

  { type: "order", title: "Составь предложение", short: "Порядок слов",
    instr: "Прочитай по-русски. Нажимай на слова в правильном порядке.",
    items: [
      { id: "bore", q: "Этот урок такой скучный.", s: "This lesson is so boring." },
      { id: "int", q: "Мне интересна история.", s: "I am interested in history." },
      { id: "exc", q: "Мы в восторге от каникул.", s: "We are excited about the holidays." },
      { id: "fri", q: "Моя кошка боится собак.", s: "My cat is frightened of dogs." },
      { id: "ama", q: "Это был потрясающий концерт!", s: "It was an amazing concert!" },
      { id: "dis", q: "Учитель был разочарован.", s: "The teacher was disappointed." },
      { id: "emb", q: "Это была очень неловкая ситуация.", s: "It was a very embarrassing situation." }
    ] },

  { type: "translate", title: "Скажи по-английски", short: "Перевод",
    instr: "Скажи вслух, потом напиши. Проверка смотрит на слово с -ed или -ing.",
    items: [
      { id: "bore", ru: "Мне скучно.", en: "I'm bored.", key: "bored", hint: "bored" },
      { id: "int", ru: "Это интересный фильм.", en: "It's an interesting film.", key: "interesting", hint: "interesting" },
      { id: "tire", ru: "Я очень устал.", en: "I'm very tired.", key: "tired", hint: "tired" },
      { id: "fri", ru: "Это страшная история.", en: "It's a frightening story.", key: "frightening|scary", hint: "frightening" },
      { id: "exc", ru: "Игра была захватывающей.", en: "The game was exciting.", key: "exciting", hint: "exciting" },
      { id: "sur", ru: "Мама была удивлена.", en: "Mum was surprised.", key: "surprised", hint: "surprised" },
      { id: "con", ru: "Я запутался.", en: "I'm confused.", key: "confused", hint: "confused" },
      { id: "rel", ru: "Это расслабляющая музыка.", en: "It's relaxing music.", key: "relaxing", hint: "relaxing" },
      { id: "ann", ru: "Этот шум раздражает.", en: "This noise is annoying.", key: "annoying", hint: "annoying" }
    ] }
];
