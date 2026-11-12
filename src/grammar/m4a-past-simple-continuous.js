// TITLE: Past Simple vs Past Continuous
// EYEBROW: Spotlight 7 Grammar · Module 4
// SUB: Что случилось — и что в это время происходило. Сначала правило, потом Past Simple, потом Past Continuous, а в конце — вместе с when и while. Листай вниз и делай по порядку.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: что случилось и что происходило: -ed / V2, was / were + -ing, when и while
const META = { ls: "s7g-m4-ps-pc", cards: false, boardLabel: "Правила", flow: true };
const P = [
  { id: "ed", phrase: "play → played, stop → stopped", ru: "правильные глаголы: -ed" },
  { id: "irr", phrase: "go → went, see → saw", ru: "неправильные: 2-я форма" },
  { id: "psn", phrase: "didn't + V / Did … + V?", ru: "Past Simple: отрицание и вопрос" },
  { id: "was", phrase: "was / were + V-ing", ru: "Past Continuous: процесс" },
  { id: "pcn", phrase: "wasn't …ing / Was he …ing?", ru: "Past Continuous: отрицание и вопрос" },
  { id: "time", phrase: "at 6 o'clock yesterday, all day", ru: "процесс в момент прошлого" },
  { id: "when", phrase: "was …ing when … + V2", ru: "длинное действие прервали" },
  { id: "while", phrase: "while … was …ing", ru: "два действия одновременно" },
  { id: "seq", phrase: "opened, saw, ran", ru: "цепочка действий — Past Simple" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило",
    instr: "Прочитай правило. Past Simple — что случилось (точка). Past Continuous — что происходило (процесс, длинная линия).",
    blocks: [
      { h: "Past Simple — что случилось", lines: [
        ["I *visited* my granny last Sunday.", "действие было и закончилось"],
        ["He *opened* the door, *saw* a cat and *laughed*.", "цепочка действий одно за другим"],
        ["правильные: play → play*ed*, like → lik*ed*, study → stud*ied*, stop → stop*ped*", ""],
        ["неправильные: go → *went*, see → *saw*, take → *took*", "2-я колонка таблицы"],
        ["*didn't* + V · *Did* you go? — Yes, I *did*.", "после did — начальная форма"] ] },
      { h: "Past Continuous — что происходило", lines: [
        ["At 6 o'clock yesterday I *was watching* TV.", "процесс в определённый момент"],
        ["I / he / she / it *was* + V-ing · you / we / they *were* + V-ing", ""],
        ["She *wasn't* sleeping. *Were* they playing? — Yes, they *were*.", "отрицание и вопрос"],
        ["at 5 o'clock yesterday, all day, all morning, while, when, as", "слова-подсказки"] ] },
      { h: "when — длинное действие прервали", lines: [
        ["I *was having* a bath *when* the phone *rang*.", "Я принимал ванну (процесс), и тут зазвонил телефон (короткое)."],
        ["длинное → Past Continuous · короткое → Past Simple", ""] ] },
      { h: "while — два процесса одновременно", lines: [
        ["Mum *was cooking while* Dad *was reading*.", "Мама готовила, пока папа читал."],
        ["while + Past Continuous", "while = пока, в то время как"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ I was go.  ✓ I *was going*.", "после was / were — глагол с -ing"],
        ["✗ Did you saw…?  ✓ Did you *see*…?", "после did — начальная форма"],
        ["✗ They was playing.  ✓ They *were* playing.", "they / we / you → were"] ] }
    ] },

  /* ---------- Часть 1. Past Simple ---------- */
  { type: "sort", part: "Часть 1. Past Simple", partSub: "Правильные и неправильные глаголы",
    title: "Правильный или неправильный?", short: "Сортировка",
    instr: "Прочитай глагол. Он правильный (просто + -ed) или неправильный (своя 2-я форма)?",
    buckets: ["Правильный: + -ed", "Неправильный: V2"],
    items: [
      { id: "ed", t: "play", b: 0, why: "play → played" },
      { id: "irr", t: "go", b: 1, why: "go → went" },
      { id: "ed", t: "watch", b: 0, why: "watch → watched" },
      { id: "irr", t: "see", b: 1, why: "see → saw" },
      { id: "irr", t: "buy", b: 1, why: "buy → bought" },
      { id: "ed", t: "stop", b: 0, why: "stop → stopped" },
      { id: "irr", t: "hear", b: 1, why: "hear → heard" },
      { id: "ed", t: "study", b: 0, why: "study → studied" },
      { id: "irr", t: "fall", b: 1, why: "fall → fell" },
      { id: "ed", t: "cry", b: 0, why: "cry → cried" },
      { id: "irr", t: "fly", b: 1, why: "fly → flew" },
      { id: "ed", t: "arrive", b: 0, why: "arrive → arrived" }
    ] },

  { type: "mcq", title: "Вторая форма", short: "Формы",
    instr: "Выбери правильную форму Past Simple.",
    items: [
      { id: "ed", q: "stop →", o: ["stopped", "stoped", "stopt"], why: "Короткое слово: p удваивается." },
      { id: "ed", q: "study →", o: ["studied", "studyed", "studed"], why: "согласная + y → ied" },
      { id: "ed", q: "arrive →", o: ["arrived", "arriveed", "arrivd"], why: "На -e: просто + d." },
      { id: "ed", q: "play →", o: ["played", "plaied", "playd"], why: "гласная + y → просто -ed" },
      { id: "irr", q: "come →", o: ["came", "comed", "come"], why: "come — came — come" },
      { id: "irr", q: "run →", o: ["ran", "runned", "run"], why: "run — ran — run" },
      { id: "irr", q: "catch →", o: ["caught", "catched", "cought"], why: "catch — caught — caught" },
      { id: "irr", q: "break →", o: ["broke", "breaked", "broken"], why: "break — broke — broken" },
      { id: "irr", q: "fall →", o: ["fell", "falled", "fallen"], why: "fall — fell — fallen" },
      { id: "irr", q: "think →", o: ["thought", "thinked", "thinkt"], why: "think — thought — thought" }
    ] },

  { type: "gaps", title: "Торт для бабушки", short: "История 1", keepOrder: true, layout: "text", pic: "🎂🐶", story: "A Cake for Granny",
    instr: "Раскрой скобки в Past Simple. Впиши глагол и нажми «Проверить».",
    items: [
      { id: "ed", t: "Last Saturday was Granny's birthday. My sister and I [[decided]] (decide) to bake a chocolate cake." },
      { id: "irr", t: "We [[went]] (go) to the shop and [[bought]] (buy) eggs, flour and chocolate." },
      { id: "seq", t: "At home we [[mixed]] (mix) everything, [[put]] (put) the cake in the oven and [[waited]] (wait)." },
      { id: "irr", t: "The cake [[smelt/smelled]] (smell) wonderful! We [[left]] (leave) it on the table and [[ran]] (run) to get ready." },
      { id: "psn", t: "We [[didn't see/did not see]] (not / see) our dog Bobik in the kitchen…" },
      { id: "psn", t: "When we came back, Mum asked: \"[[Did]] you [[make]] (make) a cake? Where is it?\"" },
      { id: "seq", t: "Bobik was under the table with chocolate on his nose. He [[ate]] (eat) half the cake! Granny [[laughed]] (laugh) and [[said]] (say): \"Half a cake is enough for me!\"" }
    ] },

  /* ---------- Часть 2. Past Continuous ---------- */
  { type: "mcq", part: "Часть 2. Past Continuous", partSub: "was / were + глагол с -ing",
    title: "Что они делали в 6 часов?", short: "Картинки",
    instr: "Вчера в 6 часов вечера все были заняты. Посмотри на смайлики и выбери правильное предложение.",
    items: [
      { id: "was", q: "👦📱  Tom", o: ["Tom was texting his friend.", "Tom were texting his friend.", "Tom was text his friend."], why: "he → was + texting" },
      { id: "was", q: "👨‍👩‍👧📺  My parents", o: ["My parents were watching TV.", "My parents was watching TV.", "My parents were watch TV."], why: "they → were + watching" },
      { id: "time", q: "🐱😴  At 6 o'clock our cat", o: ["was sleeping on the sofa.", "slept on the sofa at 6 o'clock.", "were sleeping on the sofa."], why: "процесс в момент → was sleeping" },
      { id: "was", q: "👧🎹  Masha", o: ["Masha was playing the piano.", "Masha playing the piano.", "Masha was playd the piano."], why: "was + playing" },
      { id: "time", q: "🧑‍🍳🍝  All evening Dad", o: ["was cooking spaghetti.", "were cooking spaghetti.", "cooking spaghetti."], why: "all evening → процесс" },
      { id: "was", q: "👬⚽  The boys", o: ["The boys were playing football.", "The boys was playing football.", "The boys were played football."], why: "they → were" },
      { id: "pcn", q: "👵❌📺  Granny", o: ["Granny wasn't watching TV. She was knitting.", "Granny didn't watching TV.", "Granny weren't watching TV."], why: "she → wasn't + -ing" },
      { id: "pcn", q: "❓🎮  Ты играл в 6 часов?", o: ["Were you playing computer games at 6?", "Was you playing computer games at 6?", "Did you playing computer games at 6?"], why: "you → Were … -ing?" }
    ] },

  { type: "gaps", title: "Упражнение из учебника", short: "Учебник", keepOrder: true,
    instr: "Поставь глагол в Past Continuous (Progress Check 4, упр. 4). Впиши was / were и глагол с -ing.",
    items: [
      { id: "time", t: "Bob [[was playing]] (play) football in the park at 10 am this morning." },
      { id: "time", t: "Mark [[was sending]] (send) emails until 11 pm last night." },
      { id: "when", t: "Jane [[was reading]] (read) the newspaper when the phone rang." },
      { id: "when", t: "Tom [[was watching]] (watch) TV when Jane arrived." },
      { id: "was", t: "The children [[were swimming]] (swim) in the sea all afternoon." },
      { id: "was", t: "We [[were sitting]] (sit) in the garden at 5 o'clock yesterday." }
    ] },

  { type: "gaps", title: "Шпион в окне", short: "История 2", keepOrder: true, layout: "text", pic: "🕵️‍♀️🔭", story: "The Window Spy",
    instr: "Вчера Лиза весь вечер смотрела в бинокль на соседний дом. Выбери правильную форму.",
    items: [
      { id: "time", t: "At 7 o'clock yesterday evening I {{*was sitting|were sitting|sat sitting}} at my window with Dad's binoculars." },
      { id: "was", t: "In the first flat a man {{*was cooking|were cooking|was cook}} pancakes — and they {{*were flying|was flying|were fly}} up to the ceiling!" },
      { id: "was", t: "In the second flat two girls {{*were dancing|was dancing|dancing}} in funny pyjamas." },
      { id: "pcn", t: "In the third flat a boy {{*wasn't doing|weren't doing|didn't doing}} his homework. He {{*was hiding|were hiding|hid}} it under the bed!" },
      { id: "pcn", t: "\"{{*Were|Was|Did}} the people looking at you?\" asked my brother. — \"No, they {{*weren't|wasn't|didn't}}.\"" },
      { id: "time", t: "But at 8 o'clock somebody in the fourth flat {{*was looking|were looking|looked}} at ME — with binoculars too!" }
    ] },

  { type: "gaps", title: "Ответь коротко", short: "Вопросы", keepOrder: true,
    instr: "Выбери was, were, wasn't или weren't.",
    items: [
      { id: "pcn", t: "{{*Was|Were|Did}} Kate sleeping at 10 pm? — Yes, she {{*was|were|did}}." },
      { id: "pcn", t: "{{*Were|Was|Did}} your friends waiting for you? — No, they {{*weren't|wasn't|didn't}}." },
      { id: "pcn", t: "{{*Was|Were|Did}} it raining in the morning? — Yes, it {{*was|were|did}}." },
      { id: "pcn", t: "What {{*were|was|did}} you doing at 8 o'clock? — I {{*was|were|did}} having breakfast." },
      { id: "was", t: "We {{*weren't|wasn't|didn't}} listening to the teacher. Oops!" }
    ] },

  /* ---------- Часть 3. when / while ---------- */
  { type: "sort", part: "Часть 3. Past Simple + Past Continuous", partSub: "when и while: длинное и короткое действие",
    title: "Длинное или короткое?", short: "Длинное / короткое",
    instr: "В каждом предложении выделено одно действие. Оно длинное (процесс → Past Continuous) или короткое (случилось → Past Simple)?",
    buckets: ["Длинное: was / were + -ing", "Короткое: V2 / -ed"],
    items: [
      { id: "when", t: "I was having a bath when the phone RANG.", b: 1, why: "Телефон зазвонил — короткое." },
      { id: "when", t: "I WAS HAVING A BATH when the phone rang.", b: 0, why: "Принимал ванну — процесс." },
      { id: "when", t: "Kate was cooking breakfast when she HEARD a noise.", b: 1, why: "Услышала — короткое." },
      { id: "when", t: "We WERE WALKING in the park when it started to rain.", b: 0, why: "Гуляли — процесс." },
      { id: "while", t: "My parents were watching TV while I WAS SLEEPING.", b: 0, why: "Спал — процесс (while)." },
      { id: "seq", t: "He opened the door and SAW a ghost.", b: 1, why: "Цепочка коротких действий." },
      { id: "when", t: "Mr Shiao WAS DRIVING home when a turtle fell on his car.", b: 0, why: "Ехал — процесс." },
      { id: "when", t: "Mr Shiao was driving home when a turtle FELL on his car.", b: 1, why: "Упала — короткое." }
    ] },

  { type: "gaps", title: "when или while?", short: "when / while", keepOrder: true,
    instr: "when — «и тут вдруг» (перед коротким действием). while — «пока, в то время как» (перед процессом). Выбери.",
    items: [
      { id: "when", t: "I was reading {{*when|while}} the lights went out." },
      { id: "while", t: "Mum was cooking {{*while|when}} Dad was washing up." },
      { id: "when", t: "We were playing tennis {{*when|while}} it started to rain." },
      { id: "while", t: "{{*While|When}} I was doing my homework, my brother was playing games." },
      { id: "when", t: "Jim was reading a newspaper {{*when|while}} the fire started." },
      { id: "while", t: "Timmy was flying his kite {{*while|when}} Bob was eating a sandwich." },
      { id: "when", t: "She was walking her dog {{*when|while}} she saw a fox." },
      { id: "while", t: "The birds were singing {{*while|when}} the sun was shining." }
    ] },

  { type: "gaps", title: "Летающая черепаха", short: "История 3", keepOrder: true, layout: "text", pic: "🚕🐢", story: "The Flying Turtle",
    instr: "История из учебника (с. 38). Раскрой скобки: Past Simple или Past Continuous?",
    items: [
      { id: "when", t: "It was about 4 o'clock in the afternoon. Mr Shiao [[was driving]] (drive) home when suddenly something [[fell]] (fall) from the sky and [[hit]] (hit) his car." },
      { id: "seq", t: "He [[stopped]] (stop) the car and [[got]] (get) out." },
      { id: "was", t: "A turtle [[was lying]] (lie) on the ground, and two people [[were running]] (run) towards it." },
      { id: "when", t: "The turtle [[was crawling]] (crawl) on the balcony of a tenth-floor flat when it [[fell]] (fall) off." },
      { id: "psn", t: "The turtle was fine, but the car [[didn't look/did not look]] (not / look) good at all!" }
    ] },

  { type: "gaps", title: "Ночь, когда погас свет", short: "История 4", keepOrder: true, layout: "text", pic: "🌩️🕯️", story: "The Night the Lights Went Out",
    instr: "Раскрой скобки: Past Simple или Past Continuous? Впиши и нажми «Проверить».",
    items: [
      { id: "while", t: "It was a stormy night. Dad [[was reading]] (read) a book while Mum [[was making]] (make) tea." },
      { id: "when", t: "I [[was playing]] (play) a computer game when suddenly all the lights [[went]] (go) out!" },
      { id: "seq", t: "My little sister [[screamed]] (scream) and [[hid]] (hide) under the table." },
      { id: "when", t: "Dad [[was looking]] (look) for candles when he [[heard]] (hear) a strange noise in the kitchen." },
      { id: "while", t: "While we [[were standing]] (stand) in the dark, something cold [[touched]] (touch) my hand!" },
      { id: "seq", t: "Mum [[found]] (find) a torch. It was only our cat Murka — she [[wanted]] (want) her dinner!" }
    ] },

  { type: "tf", title: "Найди ошибку", short: "Ошибки",
    instr: "Верно или неверно? Если неверно — посмотри правильный вариант.",
    items: [
      { id: "was", t: "They was playing chess at 5 o'clock.", ok: false, fix: "They were playing chess at 5 o'clock.", why: "they → were" },
      { id: "when", t: "I was having a shower when the doorbell rang.", ok: true },
      { id: "when", t: "I had a shower when the doorbell was ringing.", ok: false, fix: "I was having a shower when the doorbell rang.", why: "Длинное — душ, короткое — звонок." },
      { id: "psn", t: "Did you saw the news yesterday?", ok: false, fix: "Did you see the news yesterday?", why: "После did — see." },
      { id: "while", t: "While I was doing my homework, Mum was cooking.", ok: true },
      { id: "was", t: "At 8 o'clock I was eat breakfast.", ok: false, fix: "At 8 o'clock I was eating breakfast.", why: "was + eating" },
      { id: "irr", t: "The cat catched a mouse.", ok: false, fix: "The cat caught a mouse.", why: "catch → caught" },
      { id: "pcn", t: "Were you sleeping when I phoned?", ok: true },
      { id: "ed", t: "We stoped at a café.", ok: false, fix: "We stopped at a café.", why: "stop → stopped" },
      { id: "time", t: "Yesterday at 7 pm we were having dinner.", ok: true }
    ] },

  { type: "order", title: "Составь предложение", short: "Порядок слов",
    instr: "Прочитай по-русски. Нажимай на слова в правильном порядке.",
    items: [
      { id: "time", q: "Вчера в 5 часов я делал уроки.", s: "I was doing my homework at 5 o'clock yesterday.", alt: ["At 5 o'clock yesterday I was doing my homework.", "Yesterday at 5 o'clock I was doing my homework."] },
      { id: "when", q: "Мы гуляли, когда пошёл дождь.", s: "We were walking when it started to rain." },
      { id: "while", q: "Папа спал, пока мама читала.", s: "Dad was sleeping while Mum was reading.", alt: ["While Mum was reading Dad was sleeping."] },
      { id: "pcn", q: "Что ты делал в 8 часов?", s: "What were you doing at 8 o'clock?" },
      { id: "irr", q: "Я увидел собаку и побежал.", s: "I saw a dog and ran." },
      { id: "when", q: "Она смотрела телевизор, когда пришёл Том.", s: "She was watching TV when Tom came." }
    ] },

  { type: "translate", title: "Скажи по-английски", short: "Перевод",
    instr: "Скажи вслух, потом напиши. Проверка смотрит на форму глагола.",
    items: [
      { id: "irr", ru: "Вчера я купил новые кроссовки.", en: "I bought new trainers yesterday.", key: "bought", hint: "bought" },
      { id: "psn", ru: "Мы не ходили в кино.", en: "We didn't go to the cinema.", key: "didn't go|did not go", hint: "didn't go" },
      { id: "time", ru: "Вчера в 9 часов я спал.", en: "I was sleeping at 9 o'clock yesterday.", key: "was sleeping", hint: "was sleeping" },
      { id: "was", ru: "Дети играли в саду.", en: "The children were playing in the garden.", key: "were playing", hint: "were playing" },
      { id: "pcn", ru: "Ты слушал музыку?", en: "Were you listening to music?", key: "were you listening", hint: "Were you listening…?" },
      { id: "when", ru: "Я ехал на велосипеде, когда увидел лису.", en: "I was riding my bike when I saw a fox.", key: "was (riding|cycling).*when.*saw", hint: "was riding … when … saw" },
      { id: "while", ru: "Пока я мыл посуду, брат смотрел телевизор.", en: "While I was washing up, my brother was watching TV.", key: "while.*was washing.*was watching|was watching.*while.*was washing", hint: "While I was washing…, … was watching" },
      { id: "seq", ru: "Он открыл дверь и увидел кота.", en: "He opened the door and saw a cat.", key: "opened.*saw", hint: "opened … saw" }
    ] }
];
