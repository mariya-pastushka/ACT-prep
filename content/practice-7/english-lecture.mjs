import { sourceRefs } from './english-passage.mjs';

const lessons = [
  {
    title: 'Расположи действия во времени',
    enTitle: 'Future in the past and parallel verbs',
    explain: [
      'В №16 рассказчица вспоминает прежнюю мысль о будущем визите. Она не думала, что когда-нибудь увидит картину. Would see передаёт событие, которое тогда было впереди.',
      'В №19 перечислены действия одной поездки. Packed, jumped и headed идут в простом прошедшем времени. Had jumped или had headed потребовали бы смысла «это уже произошло к какому-то другому прошлому моменту».',
    ],
    formula: 'A past expectation → thought + would + verb. A sequence of past actions → packed, jumped, and headed.',
    examples: [['“I knew I would return one day.”', '«Я знал, что однажды вернусь». Knew называет прошлую мысль, would return — ожидаемое после неё событие.'], ['“We checked the map, started the car, and drove north.”', '«Мы сверились с картой, завели машину и поехали на север». Глаголы стоят в одной форме и перечисляют этапы пути.']],
    notebook: 'Начни одно предложение с I never thought I would …. В другом перечисли три действия своей вчерашней поездки.',
    en: 'Use “would” to describe a later possibility as viewed from a past moment. For a list of actions in the same past sequence, keep the verbs in parallel forms.',
    example: 'I thought I would visit the gallery. When the day came, we packed, drove, and arrived early.',
  },
  {
    title: 'Назови, к кому относится местоимение',
    enTitle: 'Possessive and subject pronouns',
    explain: [
      'В №18 grandeur принадлежит картине. Для этого нужен its. Если раскрыть it’s как it is или it has, предложение перестаёт складываться.',
      'В №27 у картины сидят рассказчица и её подруга. Полная группа My friend and I заменяется на we. Для he в этой сцене нет названного человека.',
    ],
    formula: 'The painting’s grandeur → its grandeur. My friend and I → we. It’s → it is / it has.',
    examples: [['“Its frame is wooden. It’s an old painting.”', '«Её рама деревянная. Это старая картина». Its связывает раму с картиной, it’s сокращает it is.'], ['“Maya and I waited outside. We entered together.”', '«Мы с Майей ждали снаружи. Мы вошли вместе». We включает того, кто рассказывает.']],
    notebook: 'Для каждого местоимения в примерах подпиши предмет или людей. Раскрой сокращение it’s.',
    en: 'Find what the pronoun refers to before choosing its form. “Its” is possessive, and “we” includes the speaker in the subject group.',
    example: 'My friend and I admired the painting and its colors. We stayed for an hour.',
  },
  {
    title: 'Найди основу перед выбором знака',
    enTitle: 'Subjects, clauses, and comma splices',
    explain: [
      'В №21 главное was относится к The first thing. Длинное описание между ними не повод ставить запятую или точку с запятой перед глаголом.',
      'В №25 слова as и when делают часть о приближении зависимой. Вариант C их убирает и оставляет две самостоятельные части с запятой. Вставное though эту связь не исправляет.',
      'В №29 оборот on our trip завершает описание того, когда они видели достопримечательности. Запятая нужна дальше, перед but, которое соединяет две полные мысли.',
    ],
    formula: 'Подлежащее + главный глагол. When/as + зависимая часть, затем главная. Две самостоятельные части требуют подходящего соединения.',
    examples: [['“The detail that caught my attention was the frame.”', '«Деталью, которая привлекла моё внимание, была рама». Главная основа The detail was the frame.'], ['“When we stepped closer, we saw the dots.” / “We stepped closer, and we saw the dots.”', '«Когда мы подошли ближе, мы увидели точки». / «Мы подошли ближе и увидели точки». В первом примере when создаёт зависимую часть. Во втором and связывает две самостоятельные.']],
    notebook: 'Подчеркни основы в обоих примерах. Затем объясни, что изменится, если убрать When из первого и оставить одну запятую.',
    en: 'Locate the main subject and verb. Keep them connected. A clause introduced by “when” or “as” can lead into a main clause, while two independent clauses need a valid connection.',
    example: 'The first thing I noticed was the size. When I moved closer, the colors changed.',
  },
  {
    title: 'Убирай слова и факты, которые не продвигают мысль',
    enTitle: 'Concision and relevance',
    explain: [
      'В №17 удаление to даёт законченный стык my chance when. В №22 almost impossible уже описывает трудность, поэтому повтор о сложности не добавляет смысла.',
      'В №23 общий размер холста не используется для конкретного сравнения с картиной. В №28 список других работ переводит внимание с личного впечатления от картины Сёра на музейную коллекцию. Оценивай, как деталь развивает текущую тему.',
    ],
    formula: 'Удали фразу → перечитай соседние слова или предложения → проверь смысл и связь.',
    examples: [['“I got my chance when a ticket became available.”', '«У меня появился шанс, когда освободился билет». Часть с when прямо присоединяется к my chance.'], ['“The climb was almost impossible.”', '«Подъём был почти невозможным». Дополнение «и трудным для выполнения» повторило бы ту же оценку.']],
    notebook: 'Удаляй по одной фразе на черновике. Для каждой назови, потерялся ли факт, нарушилась ли грамматика или исчез только повтор.',
    en: 'A deletion should leave a complete sentence and preserve the needed information. Check whether an extra detail develops the paragraph’s actual focus.',
    example: '“An almost impossible task” already expresses great difficulty. A second phrase about difficulty repeats that idea.',
  },
  {
    title: 'Проверяй связь предложения с обеих сторон',
    enTitle: 'Insertion and paragraph transitions',
    explain: [
      'В №20 someone else вводит человека. Вставка Her name was Lisa сообщает, кто это. Затем We both подхватывает пару и вводит планы.',
      'В №24 even more сравнивает красоту картины с её размером и техникой из предыдущего абзаца. Переход работает, потому что у читателя уже есть первое впечатляющее качество для сравнения.',
    ],
    formula: 'Ранее названная мысль или человек → новая деталь → понятное продолжение.',
    examples: [['“I met a new classmate. Her name was Lina. We began working together.”', '«Я познакомилась с новой одноклассницей. Её звали Лина. Мы начали работать вместе». Каждое местоимение подхватывает уже названного человека.'], ['“The hall was grand. Even more impressive was the view from its windows.”', '«Зал был величественным. Ещё сильнее впечатлял вид из его окон». More опирается на первую оценку.']],
    notebook: 'Прочитай предложения вокруг вставки из №20 и укажи, к кому относятся Her и We. Для №24 назови две сравниваемые черты.',
    en: 'Read both neighbors of an insertion. A person should be introduced before “her,” and a comparative transition needs an earlier quality to compare with the new one.',
    example: 'The paragraph about size creates the reference point for “Even more impressive … was the beauty.”',
  },
  {
    title: 'Задавай вопрос от слова к его уточнению',
    enTitle: 'Modifier placement and contrast',
    explain: [
      'В №30 вопрос bought where ведёт к at the museum gift shop. Рядом с bought этот оборот ясно объясняет место покупки.',
      'В №26 from a distance противопоставлено up close. Эта пара показывает, как меняются цвета одной картины в зависимости от позиции зрителя.',
    ],
    formula: 'Действие → где, когда или как? Две точки наблюдения → что отличается между ними?',
    examples: [['“The book I bought at the station is in my bag.”', '«Книга, которую я купила на вокзале, лежит в сумке». Место относится к покупке.'], ['“From far away, the mosaic looked blue. Up close, I could see green and white pieces.”', '«Издалека мозаика выглядела синей. Вблизи я увидела зелёные и белые кусочки». Сравнение объясняет, почему впечатления разные.']],
    notebook: 'Переставь at the museum gift shop после bought. Затем выдели два выражения расстояния в предложении из №26.',
    en: 'Place a phrase close to the action it describes. To explain the function of a phrase, look for the relationship it creates with another part of the sentence.',
    example: '“From a distance” pairs with “up close.” “At the gift shop” answers “bought where?”',
  },
];

export const lecture = lessons.map(({ enTitle, en, example }) => ({ title: enTitle, en, example }));
export const lectureRu = lessons.map(({ title, explain, formula, examples, notebook }) => ({ title, explain, formula, examples, notebook }));

function word(word, meaning, id, context, contextRu, example, exampleRu) {
  return { word, meaning, source: sourceRefs[id], context, contextRu, example, exampleRu };
}

export const vocabularyNotebook = {
  title: 'Словарь к Seurat’s Masterpiece',
  intro: 'Найди фразу в тексте, затем прочитай новый пример и попробуй перевести его самостоятельно.',
  vocabulary: [
    word('masterpiece', 'шедевр, выдающееся произведение', 'wonder', 'my favorite painting', 'моя любимая картина (в заголовке она названа masterpiece)', 'The exhibition features the artist’s early masterpiece.', 'На выставке представлен ранний шедевр художника.'),
    word('admire', 'восхищаться, любоваться', 'expectation', 'I had admired the work for years in art books', 'Я годами любовалась этой работой в книгах об искусстве', 'We stopped to admire the carved doors.', 'Мы остановились полюбоваться резными дверями.'),
    word('grandeur', 'величие, великолепие', 'trip', 'in all its grandeur (after correcting Question 18)', 'во всём её великолепии (после правки в №18)', 'The mountains appeared in all their grandeur.', 'Горы предстали во всём своём величии.'),
    word('strike someone', 'поразить, произвести впечатление; прошедшая форма struck', 'size-subject', 'The first thing that struck me', 'Первое, что меня поразило', 'What struck me most was the silence.', 'Больше всего меня поразила тишина.'),
    word('canvas', 'холст для живописи', 'canvas', 'A common size for canvases', 'Распространённый размер холстов', 'The artist stretched the canvas over a wooden frame.', 'Художник натянул холст на деревянную раму.'),
    word('pointillism', 'пуантилизм, техника создания изображения отдельными точками цвета', 'dots', 'a technique called pointillism', 'техника под названием пуантилизм', 'In pointillism, separate dots form an image when viewed together.', 'В пуантилизме отдельные точки образуют изображение, когда их воспринимают вместе.'),
    word('magnitude', 'величина, масштаб', 'task', 'a painting of such magnitude', 'картина такого масштаба', 'The magnitude of the project surprised the visitors.', 'Масштаб проекта удивил посетителей.'),
    word('muted colors', 'приглушённые цвета', 'distance', 'the colors looked muted', 'цвета казались приглушёнными', 'The room was decorated in muted colors.', 'Комната была оформлена в приглушённых тонах.'),
    word('idyllic', 'идиллический, мирный и безмятежный', 'distance', 'the idyllic mood of a summer day in the park', 'безмятежное настроение летнего дня в парке', 'The story opens in an idyllic village.', 'Рассказ начинается в безмятежной деревне.'),
    word('myriad hues', 'множество оттенков', 'approach', 'its colors exploded into myriad hues', 'её цвета раскрылись множеством оттенков', 'At sunrise, the sky filled with myriad hues.', 'На рассвете небо наполнилось множеством оттенков.'),
    word('up close', 'вблизи, с близкого расстояния', 'white', 'when viewed up close', 'при рассматривании вблизи', 'Up close, the surface looked rough.', 'Вблизи поверхность выглядела шероховатой.'),
    word('imprint in someone’s mind', 'глубоко запечатлеть в чьей-то памяти', 'print', 'The image is forever imprinted in my mind', 'Этот образ навсегда запечатлелся в моей памяти', 'That final scene is imprinted in my mind.', 'Эта последняя сцена запечатлелась в моей памяти.'),
    word('souvenir print', 'репродукция, купленная на память', 'print', 'the souvenir print I bought', 'репродукция, которую я купила на память', 'She framed the souvenir print from the exhibition.', 'Она вставила в рамку репродукцию, купленную на выставке.'),
  ],
  exercises: [
    { title: 'Найди главный глагол', en: 'Choose the correct sentence. “The feature that interested me was the color.” / “The feature that interested me, was the color.”', ru: 'Какой вариант сохраняет подлежащее вместе с его главным глаголом?', answerEn: 'The first sentence. The main subject is “The feature,” and its main verb is “was.”', answerRu: 'Первый вариант. The feature — главное подлежащее, was — его глагол. Часть that interested me уточняет feature, и запятая после me не нужна.' },
    { title: 'Проверь две основы', en: 'Is this sentence correct? “I moved closer, however, the details were still hard to see.” How could you fix it?', ru: 'Найди две основы. Как можно соединить эти мысли?', answerEn: 'The sentence has a comma splice. One repair is “I moved closer, but the details were still hard to see.”', answerRu: 'Основы I moved и the details were самостоятельные. Однако however между запятыми не соединяет их. Один вариант правки — заменить его на but, получив I moved closer, but the details were still hard to see.' },
    { title: 'Куда поставить указание места?', en: 'Place “at the station” to show where the purchase happened. “The postcard reminds me of our trip whenever I look at the copy I bought.”', ru: 'К какому глаголу относится место покупки? Вставь фразу сразу рядом с ним.', answerEn: '“… the copy I bought at the station.” The phrase answers “bought where?”', answerRu: 'Поставь at the station после bought. Вопрос «купил где?» напрямую связывает эти слова.' },
  ],
};
