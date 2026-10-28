// TITLE: Hobbies
// EYEBROW: Spotlight 7 · p. 26 · Exercise 1
// SUB: Twelve hobbies from the exercise – sewing, knitting, fencing, collecting stamps… – with Russian translations. Flashcards and seven drills.
// BOARD: Your words
const META = { ls: "s7-p26-ex1-hobbies" };
const P = [
  { id: "sewing", phrase: "sewing", ru: "шитьё", en: "making clothes with a needle and thread" },
  { id: "stories", phrase: "writing stories", ru: "сочинение рассказов", en: "making up stories and putting them on paper" },
  { id: "skate", phrase: "skateboarding", ru: "катание на скейтборде", en: "riding a board with four small wheels" },
  { id: "ice", phrase: "ice-skating", ru: "катание на коньках", en: "moving on ice in special boots with blades" },
  { id: "knit", phrase: "knitting", ru: "вязание", en: "making a scarf or a jumper from wool with two long needles" },
  { id: "stamps", phrase: "collecting stamps", ru: "коллекционирование марок", en: "keeping lots of small pictures from letters in an album" },
  { id: "chess", phrase: "playing chess", ru: "игра в шахматы", en: "a board game with kings, queens and knights" },
  { id: "boxing", phrase: "boxing", ru: "бокс", en: "a sport where two people fight in big gloves" },
  { id: "fencing", phrase: "fencing", ru: "фехтование", en: "a sport where two people fight with long thin swords" },
  { id: "football", phrase: "football", ru: "футбол", en: "a team game where players kick a ball into a goal" },
  { id: "painting", phrase: "painting", ru: "рисование красками, живопись", en: "making pictures with a brush and colours" },
  { id: "song", phrase: "songwriting", ru: "сочинение песен", en: "making up music and words for songs" },
  { id: "popular", phrase: "be popular with", ru: "быть популярным у…", en: "many people like it" },
  { id: "usedto", phrase: "used to (do)", ru: "раньше (делал), бывало", en: "did it often in the past, but not now" }
];
const DRILLS = [
  { type: "mcq", title: "What's the English word?", short: "Choose", instr: "Read the Russian word and tap the English one. (Выбери английское слово.)",
    items: [
      { id: "sewing", q: "шитьё", o: ["sewing", "knitting", "painting", "fencing"] },
      { id: "stories", q: "сочинение рассказов", o: ["writing stories", "songwriting", "collecting stamps", "painting"] },
      { id: "skate", q: "катание на скейтборде", o: ["skateboarding", "ice-skating", "boxing", "football"] },
      { id: "ice", q: "катание на коньках", o: ["ice-skating", "skateboarding", "fencing", "sewing"] },
      { id: "knit", q: "вязание", o: ["knitting", "sewing", "boxing", "painting"] },
      { id: "stamps", q: "коллекционирование марок", o: ["collecting stamps", "writing stories", "playing chess", "songwriting"] },
      { id: "chess", q: "игра в шахматы", o: ["playing chess", "collecting stamps", "football", "fencing"] },
      { id: "boxing", q: "бокс", o: ["boxing", "fencing", "knitting", "football"] },
      { id: "fencing", q: "фехтование", o: ["fencing", "boxing", "sewing", "ice-skating"] },
      { id: "football", q: "футбол", o: ["football", "boxing", "playing chess", "skateboarding"] },
      { id: "painting", q: "рисование красками", o: ["painting", "writing stories", "knitting", "songwriting"] },
      { id: "song", q: "сочинение песен", o: ["songwriting", "writing stories", "painting", "sewing"] },
      { id: "popular", q: "быть популярным у подростков", o: ["be popular with teenagers", "be popular for teenagers", "be popular to teenagers"] },
      { id: "usedto", q: "Бабушка раньше шила.", o: ["My granny used to sew.", "My granny uses to sew.", "My granny use sew."] }
    ] },
  { type: "meaning", title: "What is it?", short: "Meaning", instr: "Read the description and tap the hobby. (Прочитай описание и выбери хобби.)",
    ids: ["sewing", "stories", "skate", "ice", "knit", "stamps", "chess", "boxing", "fencing", "football", "painting", "song"] },
  { type: "gaps", title: "Choose the hobby", short: "Sentences", instr: "Tap the word that fits the sentence. (Выбери слово, подходящее по смыслу.)",
    items: [
      { id: "sewing", t: "My mum made this dress herself. She loves {{*sewing|boxing|football}}." },
      { id: "knit", t: "Granny is {{*knitting|fencing|skateboarding}} a warm scarf for me." },
      { id: "fencing", t: "In {{*fencing|chess|painting}} you need a mask and a long thin sword." },
      { id: "boxing", t: "He wears big red gloves for {{*boxing|knitting|songwriting}}." },
      { id: "chess", t: "My dad and I often play {{*chess|stamps|stories}} after dinner." },
      { id: "stamps", t: "Tom has got 500 stamps. He collects {{*stamps|chess|paintings}}." },
      { id: "ice", t: "In winter we go {{*ice-skating|skateboarding|sewing}} in the park." },
      { id: "skate", t: "Be careful! You need a helmet for {{*skateboarding|knitting|chess}}." },
      { id: "painting", t: "Anna needs new brushes and paints for her {{*painting|boxing|football}} class." },
      { id: "song", t: "He plays the guitar and loves {{*songwriting|fencing|sewing}}." },
      { id: "stories", t: "She writes {{*stories|stamps|chess}} about dragons and princesses." },
      { id: "football", t: "Our school {{*football|knitting|fencing}} team won the match 3:1!" },
      { id: "popular", t: "Skateboarding is very popular {{*with|for|to}} teenagers." },
      { id: "usedto", t: "My grandad {{*used to|uses to|use}} collect stamps when he was young." }
    ] },
  { type: "gaps", title: "Type the word", short: "Type it", instr: "Write the missing word. The Russian hint is in brackets. (Впиши слово.)",
    items: [
      { id: "sewing", t: "[[Sewing]] (шитьё) is not popular with teenagers nowadays." },
      { id: "knit", t: "I'm learning [[knitting]] (вязание) – it's slow but fun." },
      { id: "fencing", t: "[[Fencing]] (фехтование) is a very old sport." },
      { id: "boxing", t: "My cousin goes to [[boxing]] (бокс) twice a week." },
      { id: "chess", t: "Can you play [[chess]] (шахматы)?" },
      { id: "stamps", t: "Collecting [[stamps]] (марки) was my dad's hobby." },
      { id: "ice", t: "I fell three times when I went ice-[[skating]] (катание на коньках)." },
      { id: "skate", t: "[[Skateboarding]] (скейтборд) is cool, but you need a helmet." },
      { id: "painting", t: "I like [[painting]] (рисование красками) pictures of the sea." },
      { id: "song", t: "Song[[writing]] (сочинение песен) is my sister's hobby." },
      { id: "stories", t: "In my free time I like writing [[stories]] (рассказы)." },
      { id: "football", t: "Boys and girls play [[football]] (футбол) at our school." },
      { id: "popular", t: "Chess is still popular [[with]] (у) young people." },
      { id: "usedto", t: "My granny [[used]] to sew when she was my age." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the sentence right? (Верно или неверно?)",
    items: [
      { id: "knit", t: "You need a ball for knitting.", ok: false, fix: "You need wool and needles for knitting." },
      { id: "fencing", t: "In fencing people fight with swords.", ok: true },
      { id: "boxing", t: "In boxing people wear big gloves.", ok: true },
      { id: "ice", t: "You go ice-skating in summer on the beach.", ok: false, fix: "You go ice-skating in winter on the ice." },
      { id: "stamps", t: "People keep stamps in an album.", ok: true },
      { id: "chess", t: "Chess is a game with a king and a queen.", ok: true },
      { id: "sewing", t: "Sewing is a team sport.", ok: false, fix: "Football is a team sport." },
      { id: "skate", t: "A skateboard has got four wheels.", ok: true },
      { id: "song", t: "Songwriting is making up songs.", ok: true },
      { id: "painting", t: "For painting you need a ball and a goal.", ok: false, fix: "For painting you need a brush and paints." },
      { id: "popular", t: "Skateboarding is popular for teenagers.", ok: false, fix: "Skateboarding is popular with teenagers." },
      { id: "usedto", t: "My granny used to knit when she was young.", ok: true }
    ] },
  { type: "order", title: "Make a sentence", short: "Word order", instr: "Tap the words in the right order. (Составь предложение.)",
    items: [
      { id: "sewing", q: "Шитьё не популярно у подростков.", s: "Sewing is not popular with teenagers." },
      { id: "knit", q: "Моя бабушка раньше вязала.", s: "My granny used to knit." },
      { id: "fencing", q: "Фехтование – интересный вид спорта.", s: "Fencing is an interesting sport." },
      { id: "chess", q: "Я играю в шахматы с папой.", s: "I play chess with my dad." },
      { id: "stamps", q: "Мой дедушка раньше коллекционировал марки.", s: "My grandad used to collect stamps." },
      { id: "skate", q: "Скейтбординг очень популярен у подростков.", s: "Skateboarding is very popular with teenagers." },
      { id: "song", q: "Сочинение песен – моё хобби.", s: "Songwriting is my hobby." },
      { id: "ice", q: "Зимой мы катаемся на коньках.", s: "We go ice-skating in winter.", alt: ["In winter we go ice-skating."] }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the hobby word. (Скажи и напиши по-английски.)",
    items: [
      { id: "sewing", ru: "Шитьё – моё хобби.", en: "Sewing is my hobby.", key: "sewing" },
      { id: "knit", ru: "Моя мама любит вязание.", en: "My mum loves knitting.", key: "knitting" },
      { id: "boxing", ru: "Мой брат занимается боксом.", en: "My brother does boxing.", key: "boxing" },
      { id: "fencing", ru: "Фехтование не популярно в нашем городе.", en: "Fencing is not popular in our town.", key: "fencing" },
      { id: "chess", ru: "Ты умеешь играть в шахматы?", en: "Can you play chess?", key: "chess" },
      { id: "stamps", ru: "Я коллекционирую марки.", en: "I collect stamps.", key: "collect(ing)? stamps" },
      { id: "ice", ru: "Я люблю кататься на коньках.", en: "I love ice-skating.", key: "ice[- ]?skating|skate on (the )?ice" },
      { id: "skate", ru: "Скейтбординг очень популярен.", en: "Skateboarding is very popular.", key: "skateboarding" },
      { id: "painting", ru: "Живопись – это интересно.", en: "Painting is interesting.", key: "painting" },
      { id: "song", ru: "Он любит сочинять песни.", en: "He loves songwriting.", key: "songwriting|writing songs|write songs" },
      { id: "stories", ru: "Она любит сочинять рассказы.", en: "She loves writing stories.", key: "writ(e|ing) stories" },
      { id: "football", ru: "Футбол популярен у подростков.", en: "Football is popular with teenagers.", key: "football" },
      { id: "popular", ru: "Шахматы популярны у моих друзей.", en: "Chess is popular with my friends.", key: "popular with" },
      { id: "usedto", ru: "Мой дедушка раньше играл в футбол.", en: "My grandad used to play football.", key: "used to" }
    ] }
];
