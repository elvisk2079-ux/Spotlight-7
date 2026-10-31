// TITLE: Past Simple
// EYEBROW: Spotlight 7 Grammar · Module 2
// SUB: Что случилось вчера, на прошлой неделе, давным-давно. Правильные и неправильные глаголы, did и was / were — десять заданий с историями и проверкой.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: -ed и 2-я форма, didn't, Did…?, was / were, yesterday, ago, last
const META = { ls: "s7g-m2-past-simple", cards: false, boardLabel: "Правила" };
const P = [
  { id: "ed", phrase: "play → played, study → studied", ru: "правильные глаголы: -ed" },
  { id: "irr", phrase: "go → went, see → saw", ru: "неправильные: 2-я форма" },
  { id: "neg", phrase: "didn't + V", ru: "отрицание" },
  { id: "q", phrase: "Did … + V?", ru: "вопрос" },
  { id: "base", phrase: "Did you go? (не went)", ru: "после did — начальная форма" },
  { id: "was", phrase: "was / were", ru: "be в прошлом" },
  { id: "mark", phrase: "yesterday, ago, last…", ru: "маркеры Past Simple" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило",
    instr: "Прочитай правило. Past Simple — действие было и закончилось в прошлом.",
    blocks: [
      { h: "Когда употребляется", lines: [
        ["I *visited* Rome last summer.", "Я был в Риме прошлым летом."],
        ["He *opened* the door, *saw* a ghost and *ran* away.", "цепочка действий в рассказе"],
        ["Jules Verne *wrote* many books.", "факты из прошлого"] ] },
      { h: "Правильные глаголы: V + -ed", lines: [
        ["work → work*ed*, play → play*ed*", ""],
        ["like → lik*ed*", "+ -d"],
        ["study → stud*ied*", "согласная + y → ied"],
        ["stop → stop*ped*", "удвоение"] ] },
      { h: "Неправильные глаголы: 2-я форма", lines: [
        ["go → *went*, see → *saw*, have → *had*", ""],
        ["make → *made*, take → *took*, write → *wrote*", "список — в конце учебника, учим наизусть!"] ] },
      { h: "Отрицание и вопрос", lines: [
        ["I *didn't* see it.", "– didn't + V"],
        ["*Did* you go? — Yes, I *did*. / No, I *didn't*.", "? Did + подлежащее + V"],
        ["I / he / she / it *was* — you / we / they *were*", "be: wasn't / weren't, Was he…? Were they…?"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ Did you went?  ✓ Did you *go*?", "после did — начальная форма"],
        ["✗ I didn't saw it.  ✓ I didn't *see* it.", ""] ] },
      { h: "Слова-подсказки", lines: [
        ["yesterday, last week / month / year, two days ago, in 2010, when I was five", "вчера, на прошлой неделе, два дня назад…"] ] }
    ] },

  { type: "mcq", title: "Вторая форма", short: "Формы",
    instr: "Выбери форму Past Simple.",
    items: [
      { id: "ed", q: "study →", o: ["studied", "studyed", "studed"], why: "согласная + y → ied" },
      { id: "ed", q: "stop →", o: ["stopped", "stoped", "stopt"], why: "p удваивается" },
      { id: "ed", q: "like →", o: ["liked", "likeed", "likd"], why: "просто + d" },
      { id: "ed", q: "play →", o: ["played", "plaied", "playd"], why: "гласная + y → просто -ed" },
      { id: "irr", q: "go →", o: ["went", "goed", "gone"], why: "go — went — gone" },
      { id: "irr", q: "see →", o: ["saw", "seed", "seen"], why: "see — saw — seen" },
      { id: "irr", q: "write →", o: ["wrote", "writed", "written"], why: "write — wrote — written" },
      { id: "irr", q: "take →", o: ["took", "taked", "taken"], why: "take — took — taken" },
      { id: "irr", q: "have →", o: ["had", "haved", "has"], why: "have — had — had" },
      { id: "irr", q: "eat →", o: ["ate", "eated", "eaten"], why: "eat — ate — eaten" },
      { id: "irr", q: "buy →", o: ["bought", "buyed", "brought"], why: "buy — bought — bought" },
      { id: "irr", q: "find →", o: ["found", "finded", "fond"], why: "find — found — found" }
    ] },

  { type: "gaps", title: "Ночь в замке", short: "История 1", keepOrder: true, layout: "text", pic: "🏰👻", story: "A Night in the Castle",
    instr: "Читай историю и выбирай правильную форму глагола.",
    items: [
      { id: "mark", t: "Last summer my class {{*went|goes|go}} on a trip to an old castle in Scotland." },
      { id: "was", t: "The castle {{*was|were|is}} very old and dark, and the rooms {{*were|was|are}} cold." },
      { id: "irr", t: "At midnight I {{*heard|heared|hear}} a strange noise. Then I {{*saw|seed|see}} a white shape in the corridor!" },
      { id: "ed", t: "I {{*screamed|screamd|scream}} and {{*jumped|jumpped|jump}} under my blanket." },
      { id: "neg", t: "My friend Lena {{*didn't believe|didn't believed|not believed}} me." },
      { id: "q", t: "\"{{*Did|Was|Do}} you really see a ghost?\" she asked." },
      { id: "base", t: "In the morning we {{*found|finded|find}} the 'ghost'. It was our teacher in a white bathrobe! He didn't {{*sleep|slept|sleeps}} well, so he walked around the castle at night." }
    ] },

  { type: "gaps", title: "Ответь коротко", short: "Did / was", keepOrder: true,
    instr: "Выбери правильное слово: did, didn't, was, were, wasn't, weren't.",
    items: [
      { id: "q", t: "{{*Did|Was|Were}} you watch the match yesterday? — Yes, I {{*did|was|do}}." },
      { id: "was", t: "{{*Were|Was|Did}} your friends at the party? — No, they {{*weren't|wasn't|didn't}}." },
      { id: "was", t: "{{*Was|Were|Did}} the film funny? — Yes, it {{*was|did|were}}." },
      { id: "neg", t: "{{*Did|Was|Were}} Tom phone you? — No, he {{*didn't|wasn't|don't}}." },
      { id: "q", t: "{{*Did|Were|Was}} they go to the seaside? — Yes, they {{*did|were|was}}." },
      { id: "was", t: "I {{*wasn't|weren't|didn't}} at school yesterday — I was ill." }
    ] },

  { type: "gaps", title: "Неудачный день Кати", short: "История 2", keepOrder: true, layout: "text", pic: "🙈☔", story: "Katya's Terrible Day",
    instr: "Раскрой скобки в Past Simple. Впиши глагол и нажми «Проверить».",
    items: [
      { id: "ed", t: "Yesterday was a terrible day! My alarm clock [[stopped]] (stop) in the night, so I [[woke]] (wake) up late." },
      { id: "irr", t: "I [[had]] (have) no time for breakfast. I [[ran]] (run) to the bus stop, but the bus [[left]] (leave) without me." },
      { id: "ed", t: "It [[started]] (start) to rain, and I [[dropped]] (drop) my bag in a puddle." },
      { id: "neg", t: "At school I [[didn't have/did not have]] (not / have) my homework — it was in the wet bag!" },
      { id: "was", t: "The teacher [[was]] (be) angry, and my friends [[were]] (be) at a football match, so I [[was]] (be) alone at lunch." },
      { id: "q", t: "In the evening Mum asked: \"[[Did]] you [[have]] (have) a good day?\"" },
      { id: "mark", t: "I [[cried]] (cry) a little. Then Mum [[made]] (make) my favourite pancakes, and I [[felt]] (feel) much better." }
    ] },

  { type: "tf", title: "Найди ошибку", short: "Ошибки",
    instr: "Верно или неверно? Если неверно — посмотри правильный вариант.",
    items: [
      { id: "base", t: "Did you went to the cinema?", ok: false, fix: "Did you go to the cinema?", why: "После did — go." },
      { id: "base", t: "I didn't saw the film.", ok: false, fix: "I didn't see the film.", why: "После didn't — see." },
      { id: "ed", t: "She studyed French last year.", ok: false, fix: "She studied French last year.", why: "study → studied" },
      { id: "was", t: "We was very tired after the trip.", ok: false, fix: "We were very tired after the trip.", why: "we → were" },
      { id: "irr", t: "My dad buyed a new car.", ok: false, fix: "My dad bought a new car.", why: "buy → bought" },
      { id: "mark", t: "I visited my granny two days ago.", ok: true },
      { id: "q", t: "Did your brother win the game?", ok: true },
      { id: "neg", t: "They didn't come to school yesterday.", ok: true },
      { id: "mark", t: "I see a fox in the forest last week.", ok: false, fix: "I saw a fox in the forest last week.", why: "last week → Past Simple." },
      { id: "was", t: "Was it cold yesterday?", ok: true }
    ] },

  { type: "sort", title: "Сейчас или в прошлом?", short: "Сортировка",
    instr: "Это предложение о настоящем или о прошлом?",
    buckets: ["Обычно / сейчас", "В прошлом — Past Simple"],
    items: [
      { id: "mark", t: "I went to the zoo last Sunday.", b: 1, why: "last Sunday — прошлое." },
      { id: "irr", t: "She goes to the gym on Mondays.", b: 0, why: "on Mondays — обычно." },
      { id: "ed", t: "We watched a cartoon yesterday.", b: 1, why: "yesterday — вчера." },
      { id: "neg", t: "He doesn't eat meat.", b: 0, why: "doesn't — Present Simple." },
      { id: "neg", t: "He didn't eat his soup.", b: 1, why: "didn't — Past Simple." },
      { id: "was", t: "The dinosaurs were huge.", b: 1, why: "were — прошлое." },
      { id: "q", t: "Did you sleep well?", b: 1, why: "Did — Past Simple." },
      { id: "mark", t: "My parents met twenty years ago.", b: 1, why: "ago — назад." }
    ] },

  { type: "order", title: "Составь предложение", short: "Порядок слов",
    instr: "Прочитай по-русски. Нажимай на слова в правильном порядке.",
    items: [
      { id: "irr", q: "Вчера я видел смешную собаку.", s: "I saw a funny dog yesterday.", alt: ["Yesterday I saw a funny dog."] },
      { id: "neg", q: "Мы не ходили в парк.", s: "We didn't go to the park." },
      { id: "q", q: "Ты сделал домашнее задание?", s: "Did you do your homework?" },
      { id: "was", q: "Погода была ужасной.", s: "The weather was terrible." },
      { id: "ed", q: "Она позвонила мне два дня назад.", s: "She phoned me two days ago." },
      { id: "mark", q: "Прошлым летом мы ездили на море.", s: "Last summer we went to the seaside.", alt: ["We went to the seaside last summer."] }
    ] },

  { type: "translate", title: "Скажи по-английски", short: "Перевод",
    instr: "Скажи вслух, потом напиши. Проверка смотрит на форму глагола.",
    items: [
      { id: "irr", ru: "Я купил новую книгу.", en: "I bought a new book.", key: "bought", hint: "bought" },
      { id: "ed", ru: "Мы смотрели фильм вчера.", en: "We watched a film yesterday.", key: "watched", hint: "watched" },
      { id: "neg", ru: "Он не позвонил мне.", en: "He didn't phone me.", key: "didn't (phone|call)|did not (phone|call)", hint: "didn't phone / call" },
      { id: "q", ru: "Ты видел этот фильм вчера?", en: "Did you see this film yesterday?", key: "did you see", hint: "Did you see…?" },
      { id: "was", ru: "Они были в Лондоне в прошлом году.", en: "They were in London last year.", key: "were in london", hint: "were" },
      { id: "base", ru: "Ты ходил в школу вчера?", en: "Did you go to school yesterday?", key: "did you go", hint: "Did you go…? (не went)" },
      { id: "mark", ru: "Я встал в семь часов.", en: "I got up at seven o'clock.", key: "got up", hint: "got up" }
    ] }
];
