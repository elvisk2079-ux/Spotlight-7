// TITLE: Present Simple vs Present Continuous
// EYEBROW: Spotlight 7 Grammar · Module 1
// SUB: Обычно или прямо сейчас? Правило, весёлые истории, сортировка, поиск ошибок и перевод — десять заданий с проверкой.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: работает каждый день или прямо сейчас? -s, do/does, am/is/are + -ing
const META = { ls: "s7g-m1-ps-pc", cards: false, boardLabel: "Правила" };
const P = [
  { id: "s3", phrase: "he works, she watches", ru: "he / she / it + -s" },
  { id: "neg", phrase: "don't / doesn't + V", ru: "отрицание Present Simple" },
  { id: "q", phrase: "Do / Does … ?", ru: "вопрос Present Simple" },
  { id: "freq", phrase: "always, usually, every day", ru: "маркеры Present Simple" },
  { id: "ing", phrase: "am / is / are + V-ing", ru: "Present Continuous: сейчас" },
  { id: "ingq", phrase: "isn't …ing / Is he …ing?", ru: "отрицание и вопрос Present Continuous" },
  { id: "now", phrase: "now, at the moment, Look!", ru: "маркеры Present Continuous" },
  { id: "spell", phrase: "swim → swimming", ru: "правописание -ing" },
  { id: "state", phrase: "like, know, want", ru: "глаголы состояния: без -ing" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило",
    instr: "Прочитай правило. Жёлтым выделено самое важное. Потом переходи к заданиям.",
    blocks: [
      { h: "Present Simple — обычно, всегда, часто", lines: [
        ["I *play* football every Saturday.", "Я играю в футбол каждую субботу."],
        ["He *plays*, she *watches*, it *flies*.", "he / she / it → прибавь -s / -es / -ies"],
        ["She *doesn't* like milk. *Does* she like tea?", "отрицание и вопрос — с do / does"],
        ["always, usually, often, sometimes, never, every day, on Mondays", "слова-подсказки"] ] },
      { h: "Present Continuous — прямо сейчас", lines: [
        ["Look! The baby *is sleeping*.", "Смотри! Малыш спит (сейчас)."],
        ["I *am* reading. He *is* reading. They *are* reading.", "am / is / are + глагол с -ing"],
        ["He *isn't* sleeping. *Is* he playing?", "отрицание и вопрос — с am / is / are"],
        ["now, right now, at the moment, today, Look! Listen!", "слова-подсказки"] ] },
      { h: "Как прибавить -ing", lines: [
        ["read → reading, play → playing", "обычно просто -ing"],
        ["write → writing, dance → dancing", "немое -e убираем"],
        ["swim → swimming, run → running, sit → sitting", "короткое слово: согласная удваивается"],
        ["lie → lying", "-ie → -y"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ I am liking pizza.  ✓ I *like* pizza.", "like, love, hate, want, know, need, understand — без -ing"],
        ["✗ She play tennis.  ✓ She *plays* tennis.", "не забывай -s у he / she / it"] ] }
    ] },

  { type: "sort", title: "Обычно или сейчас?", short: "Сортировка",
    instr: "Прочитай предложение. Это обычное действие или то, что происходит сейчас?",
    buckets: ["Обычно — Present Simple", "Сейчас — Present Continuous"],
    items: [
      { id: "freq", t: "My dad always cooks pancakes on Sundays.", b: 0, why: "always — значит обычно." },
      { id: "now", t: "Shh! The baby is sleeping.", b: 1, why: "Shh! — это происходит прямо сейчас." },
      { id: "s3", t: "Kate walks to school every day.", b: 0, why: "every day — каждый день." },
      { id: "ing", t: "Look! Our cat is climbing the curtains!", b: 1, why: "Look! — смотри сейчас." },
      { id: "neg", t: "Penguins don't fly.", b: 0, why: "Это факт, так всегда." },
      { id: "ingq", t: "Is Mum talking on the phone?", b: 1, why: "is + talking — Present Continuous." },
      { id: "q", t: "Do you get up early on Saturdays?", b: 0, why: "on Saturdays — по субботам, обычно." },
      { id: "now", t: "We are watching a funny film at the moment.", b: 1, why: "at the moment — в данный момент." },
      { id: "state", t: "My brother loves pizza.", b: 0, why: "love — глагол состояния, только Present Simple." },
      { id: "spell", t: "The kids are swimming in the river right now.", b: 1, why: "right now — прямо сейчас." }
    ] },

  { type: "gaps", title: "Бабушка-геймер", short: "История 1", keepOrder: true, layout: "text", pic: "👵🎮", story: "My Granny the Gamer",
    instr: "Читай историю и выбирай правильную форму глагола.",
    items: [
      { id: "freq", t: "My granny is 75. She {{*usually gets up|is usually getting up}} at six o'clock and {{*works|is working}} in her garden every morning." },
      { id: "s3", t: "She {{*makes|make|is make}} the best apple pies in the world, and she {{*knits|knit}} socks for the whole family." },
      { id: "neg", t: "She {{*doesn't watch|don't watch|isn't watch}} TV, because she thinks it's boring." },
      { id: "now", t: "But look at her now! She {{*is sitting|sits}} in front of my computer, and she {{*is playing|plays}} a game about dragons." },
      { id: "ing", t: "Her friends {{*are cheering|cheer}} behind her, and the dog {{*is barking|barks}} at the screen." },
      { id: "ingq", t: "\"Granny, {{*are you winning|do you win}}?\" I ask. — \"Shh! I {{*am fighting|fight}} the dragon!\"" },
      { id: "state", t: "Granny {{*loves|is loving}} this game. Now she {{*wants|is wanting}} her own computer!" }
    ] },

  { type: "mcq", title: "Прибавь -ing", short: "-ing",
    instr: "Как правильно пишется слово с -ing? Выбери вариант.",
    items: [
      { id: "spell", q: "swim →", o: ["swimming", "swiming", "swimeing"], why: "Короткое слово: m удваивается." },
      { id: "spell", q: "write →", o: ["writing", "writeing", "writting"], why: "Немое -e убираем." },
      { id: "spell", q: "run →", o: ["running", "runing", "runeing"], why: "n удваивается." },
      { id: "spell", q: "dance →", o: ["dancing", "danceing", "dancking"], why: "Немое -e убираем." },
      { id: "spell", q: "lie (лежать) →", o: ["lying", "lieing", "liing"], why: "-ie меняется на -y." },
      { id: "spell", q: "play →", o: ["playing", "plaing", "playying"], why: "Просто прибавляем -ing." },
      { id: "spell", q: "sit →", o: ["sitting", "siting", "sitteing"], why: "t удваивается." },
      { id: "spell", q: "make →", o: ["making", "makeing", "makking"], why: "Немое -e убираем." }
    ] },

  { type: "gaps", title: "Рекс — собака-детектив", short: "История 2", keepOrder: true, layout: "text", pic: "🐶🔍", story: "Rex the Detective Dog",
    instr: "Раскрой скобки: Present Simple или Present Continuous? Впиши глагол и нажми «Проверить». Можно писать коротко: 's, 'm, 're.",
    items: [
      { id: "s3", t: "This is Rex. He [[lives]] (live) with the Brown family. Every morning he [[wakes]] (wake) everybody up at seven." },
      { id: "freq", t: "Rex usually [[sleeps]] (sleep) in the kitchen after breakfast." },
      { id: "now", t: "But today something is wrong! Rex [[is running/'s running]] (run) round the house." },
      { id: "ing", t: "He [[is looking/'s looking]] (look) under the beds. Mrs Brown [[is watching/'s watching]] (watch) him." },
      { id: "ingq", t: "\"What [[is/'s]] Rex [[doing]] (do)?\" she asks." },
      { id: "neg", t: "\"I [[don't know/do not know]] (not / know),\" says Tom. \"He [[doesn't play/does not play]] (not / play) like this.\"" },
      { id: "q", t: "\"[[Does]] he [[want]] (want) a walk?\" — \"No, he doesn't.\"" },
      { id: "state", t: "Look! Rex [[has/has got/'s got]] (have) Dad's lost keys in his mouth. Everybody [[loves]] (love) Rex!" }
    ] },

  { type: "gaps", title: "Интервью с блогером", short: "Вопросы", keepOrder: true,
    instr: "Выбери начало вопроса: Do, Does, Am, Is или Are.",
    items: [
      { id: "q", t: "{{*Do|Does|Are}} you make videos every day?" },
      { id: "ingq", t: "{{*Are|Do|Does}} you filming a new video now?" },
      { id: "q", t: "{{*Does|Do|Is}} your sister help you?" },
      { id: "ingq", t: "{{*Is|Does|Are}} your cat sitting on the camera again?" },
      { id: "q", t: "{{*Do|Does|Is}} your fans write comments?" },
      { id: "ingq", t: "{{*Are|Is|Do}} your friends waiting for you outside?" },
      { id: "q", t: "{{*Does|Do|Is}} your mum watch your videos?" },
      { id: "ingq", t: "{{*Am|Is|Do}} I talking too much?" }
    ] },

  { type: "tf", title: "Найди ошибку", short: "Ошибки",
    instr: "Верно или неверно? Если неверно — посмотри правильный вариант.",
    items: [
      { id: "s3", t: "My sister play the guitar very well.", ok: false, fix: "My sister plays the guitar very well.", why: "she → plays" },
      { id: "state", t: "I am knowing the answer!", ok: false, fix: "I know the answer!", why: "know — без -ing." },
      { id: "now", t: "Look! It's snowing!", ok: true },
      { id: "neg", t: "Tom don't like cabbage.", ok: false, fix: "Tom doesn't like cabbage.", why: "he → doesn't" },
      { id: "freq", t: "We often go to the cinema on Fridays.", ok: true },
      { id: "ing", t: "Listen! Somebody sings in the bathroom.", ok: false, fix: "Listen! Somebody is singing in the bathroom.", why: "Listen! — сейчас." },
      { id: "q", t: "Does your dog like cats?", ok: true },
      { id: "spell", t: "The boys are runing in the park.", ok: false, fix: "The boys are running in the park.", why: "run → running" },
      { id: "ingq", t: "Are you doing your homework now?", ok: true },
      { id: "state", t: "She is wanting a new phone.", ok: false, fix: "She wants a new phone.", why: "want — без -ing." }
    ] },

  { type: "mcq", title: "Что происходит на картинке?", short: "Картинки",
    instr: "Посмотри на картинку-эмодзи и выбери правильное предложение.",
    items: [
      { id: "ing", q: "🐱🎹  Look!", o: ["The cat is playing the piano!", "The cat plays the piano!", "The cat play the piano!"] },
      { id: "freq", q: "🐔🥚  Every day…", o: ["Our hen lays an egg.", "Our hen is laying an egg every day.", "Our hen lay an egg."] },
      { id: "now", q: "🌧️☂️  Take an umbrella!", o: ["It's raining now.", "It rains now.", "It rain now."] },
      { id: "neg", q: "🐧❌✈️  Penguins…", o: ["don't fly.", "doesn't fly.", "isn't fly."] },
      { id: "ingq", q: "👦📱❓  Mum asks:", o: ["Are you texting your friend again?", "Do you texting your friend again?", "Are you text your friend again?"] },
      { id: "s3", q: "🧑‍🍳🍕  My uncle is a cook.", o: ["He makes pizza at work.", "He make pizza at work.", "He is make pizza at work."] },
      { id: "state", q: "😋🍦", o: ["I love ice cream!", "I am loving ice cream!", "I loves ice cream!"] },
      { id: "spell", q: "🏊‍♀️  Right now my sister…", o: ["is swimming.", "is swiming.", "swims now."] }
    ] },

  { type: "order", title: "Составь предложение", short: "Порядок слов",
    instr: "Прочитай по-русски. Нажимай на слова в правильном порядке.",
    items: [
      { id: "freq", q: "Я обычно делаю уроки после обеда.", s: "I usually do my homework after lunch." },
      { id: "now", q: "Сейчас мама готовит ужин.", s: "Mum is cooking dinner now.", alt: ["Now Mum is cooking dinner."] },
      { id: "neg", q: "Мой брат не любит рыбу.", s: "My brother doesn't like fish." },
      { id: "q", q: "Твоя кошка спит на кровати?", s: "Does your cat sleep on the bed?" },
      { id: "ingq", q: "Ты слушаешь меня?", s: "Are you listening to me?" },
      { id: "ing", q: "Смотри! Дети лепят снеговика.", s: "Look! The children are making a snowman." },
      { id: "s3", q: "Она ходит в бассейн по средам.", s: "She goes to the pool on Wednesdays.", alt: ["On Wednesdays she goes to the pool."] },
      { id: "state", q: "Я знаю его телефон.", s: "I know his phone number." }
    ] },

  { type: "translate", title: "Скажи по-английски", short: "Перевод",
    instr: "Скажи вслух, потом напиши. Проверка смотрит на нужную форму глагола.",
    items: [
      { id: "s3", ru: "Мой папа работает в больнице.", en: "My dad works at a hospital.", key: "works", hint: "works" },
      { id: "ing", ru: "Смотри! Кот ест мой бутерброд!", en: "Look! The cat is eating my sandwich!", key: "cat'?s eating|is eating", hint: "is eating" },
      { id: "neg", ru: "Она не пьёт кофе.", en: "She doesn't drink coffee.", key: "doesn't drink|does not drink", hint: "doesn't drink" },
      { id: "q", ru: "Ты играешь в шахматы?", en: "Do you play chess?", key: "do you play", hint: "Do you play…?" },
      { id: "now", ru: "Сейчас идёт дождь.", en: "It's raining now.", key: "it'?s raining|is raining", hint: "is raining" },
      { id: "ingq", ru: "Что ты сейчас делаешь?", en: "What are you doing now?", key: "are you doing", hint: "are you doing" },
      { id: "freq", ru: "Мы всегда завтракаем вместе.", en: "We always have breakfast together.", key: "always have|always eat", hint: "always + have" },
      { id: "state", ru: "Я хочу новый велосипед.", en: "I want a new bike.", key: "want", hint: "want (без -ing!)" },
      { id: "spell", ru: "Девочки танцуют на сцене.", en: "The girls are dancing on the stage.", key: "are dancing|'re dancing", hint: "are dancing" }
    ] }
];
