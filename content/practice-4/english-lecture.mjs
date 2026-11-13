import { sourceRefs } from './english-passage.mjs';

const lessons = [
  {
    title: 'Сначала найди основу предложения', enTitle: 'Find the subject and verb',
    explain: ['Подлежащее отвечает на вопрос «кто или что?», а сказуемое — «что делает или что произошло?». В №51 стипендию принесли intelligence and talent. Это одно подлежащее из двух слов. Глагол earned относится к ним обоим.', 'В №52 подлежащее длиннее: Moving north in the 1920s. Вся фраза обозначает переезд, который изменил жизнь Хёрстон. Если после оборота есть отдельное подлежащее she, как во втором примере, оборот может служить вводной частью и отделяться запятой.'],
    formula: 'Подлежащее + сказуемое. Для проверки сократи предложение до этой основы.',
    examples: [['“Her talent and discipline earned her a scholarship.”', '«Талант и дисциплина помогли ей получить стипендию». Talent and discipline вместе отвечают на вопрос «что помогло?».'], ['“Moving to the city opened new doors.” / “Moving to the city, she met new people.”', '«Переезд в город открыл новые возможности». / «Переехав в город, она познакомилась с новыми людьми». В первом подлежащее — переезд, во втором — she.']],
    notebook: 'В каждом примере подчеркни подлежащее и обведи глагол. Объясни, что отделяет запятая во второй фразе.',
    en: 'A subject can contain two nouns or a whole -ing phrase. Keep the subject together with its main verb. An introductory -ing phrase may take a comma when a separate subject follows.',
    example: 'Reading widely improved her writing. Reading widely, she discovered new authors.',
  },
  {
    title: 'Соединяй слова и действия через and', enTitle: 'Parallel nouns and verbs',
    explain: ['And соединяет части, которые выполняют одну роль. В №50 это две вещи, полученные Хёрстон: freedom and independence. В №47 это два действия одного человека: overcame … and demonstrated … .', 'В №54 оба действия происходили в прошлом: developed and published. В №60 одно is относится к двум формам пассивного залога. Проверь, что каждая часть работает с общими словами, если прочитать её отдельно.'],
    formula: 'X and Y. Для глаголов восстанови общие слова: she developed / she published, she is applauded / she is ranked.',
    examples: [['“She improved her skills and published her first story.”', '«Она развила навыки и опубликовала свой первый рассказ». Оба действия в прошлом.'], ['“The novel is admired for its language and studied in schools.”', '«Роман ценят за язык и изучают в школах». Одно is относится к admired и studied.']],
    notebook: 'Прочитай каждую часть после and отдельно с её подлежащим. При необходимости восстанови is, was или другой общий глагол.',
    en: 'Use and to connect items with the same role. Check that two actions fit the time frame. A single form of be can serve two parallel passive verbs.',
    example: 'She is praised as a teacher and respected by her colleagues.',
  },
  {
    title: 'Проверяй смысл слова и ясность ссылки', enTitle: 'Word choice and clear references',
    explain: ['В №46 now указывает на момент, а instantly — на скорость. Если вопрос содержит LEAST, ищем худшую подстановку. В №48 deeply показывает степень самостоятельности. В №56 authentic отвечает именно на вопрос о достоверности.', 'В №57 спроси, на что указывает it. Если рядом несколько возможных ответов, точное существительное помогает читателю. Her project возвращает к замыслу Хёрстон, о котором рассказано раньше.'],
    formula: 'Для слова подставь вариант в целую фразу. Для местоимения назови то, на что оно указывает.',
    examples: [['“The exhibit is currently open.” / “The screen turned on instantly.”', '«Выставка сейчас открыта». / «Экран включился мгновенно». Currently указывает на время, instantly — на скорость.'], ['“She stayed true to her original plan.”', '«Она осталась верна своему первоначальному замыслу». План назван прямо.']],
    notebook: 'Подбери английское слово со смыслом «точно передающий реальную речь». Потом замени it точным названием предмета в своей фразе.',
    en: 'Read the replacement in context and check the exact meaning the question asks for. When a pronoun has several possible referents, a specific noun phrase can make the sentence clearer.',
    example: 'The actor used an authentic local accent. The word authentic says the accent was true to local speech.',
  },
  {
    title: 'Оставляй детали, которые работают на тему', enTitle: 'Relevance and concise lists',
    explain: ['В №49 после unique нужна причина, по которой город выделялся. Слово first отвечает на эту задачу. В №55 подробность о музыке Билли Холидей верна по условию, но между фразами о писательской карьере она уводит от темы.', 'В №53 сравни уровень пунктов. Книги, стихи и пьесы входят в литературу. Для списка широких областей достаточно literature, art, and music. После сокращения перечитай всё предложение и проверь знаки.'],
    formula: 'Задача предложения → нужная деталь → проверка соседних слов и знаков.',
    examples: [['“The festival celebrated literature, art, and music.”', '«Фестиваль был посвящён литературе, искусству и музыке». Пункты одного уровня.'], ['“The library was the first in the region to open on Sundays.”', '«Библиотека первой в регионе начала открываться по воскресеньям». Деталь объясняет, чем библиотека выделялась.']],
    notebook: 'Сверни список до трёх общих областей. Для каждой лишней детали объясни, какую работу она выполняет или почему её можно убрать.',
    en: 'Choose details that serve the stated writing goal. Keep list items at a consistent level unless an example is needed for clarity.',
    example: 'A list of “poetry, painting, and music” is clearer than “poetry, sonnets, painting, and music” when you are naming broad fields.',
  },
  {
    title: 'Улови переход между мыслями', enTitle: 'Paragraph breaks and transitions',
    explain: ['В №58 предложения 1–3 посвящены началу карьеры. Номер 4 вводит главное произведение. Номер 5 называет его и начинается с That novel, поэтому он естественно следует за четвёртым.', 'В №59 похвала критиков подтверждает мысль «история показала, что она была права». However обещал бы контраст. Когда связь уже понятна, начни следующее предложение прямо с его подлежащего.'],
    formula: 'Абзац начинается с первого предложения новой темы. Связка должна передавать реальную связь между мыслями.',
    examples: [['“She wrote poems in college. Her first novel came later. That novel won a prize.”', '«В колледже она писала стихи. Её первый роман появился позже. Этот роман получил премию». Новый абзац о романе начинается со второго предложения.'], ['“The bridge repair worked. Cars can now cross safely.”', '«Ремонт моста удался. Теперь машины могут безопасно проезжать». Второе предложение подтверждает первое.']],
    notebook: 'Найди первое предложение о романе Хёрстон. Затем объясни своими словами, как похвала критиков связана с первым предложением последнего абзаца.',
    en: 'Start a new paragraph at the first sentence of a new focus. Choose a transition only if it matches the relationship between the ideas.',
    example: 'The library serves more readers now. Its membership has doubled. The second sentence supports the first.',
  },
];

export const lecture = lessons.map(({ enTitle, en, example }) => ({ title: enTitle, en, example }));
export const lectureRu = lessons.map(({ title, explain, formula, examples, notebook }) => ({ title, explain, formula, examples, notebook }));

function word(word, meaning, id, context, contextRu, example, exampleRu) {
  return { word, meaning, source: sourceRefs[`hurston-${id}`], context, contextRu, example, exampleRu };
}

export const vocabularyNotebook = {
  title: 'Словарь к тексту о Хёрстон',
  intro: 'Прочитай выражение в отрывке, затем проверь его значение в новом примере.',
  vocabulary: [
    word('a study in contrasts', 'яркий пример контрастов, сочетание противоположных черт', 'contrasts', 'proves to be a study in contrasts', 'оказывается ярким примером контрастов', 'The old city is a study in contrasts.', 'Старый город поражает контрастами.'),
    word('perseverance', 'упорство, настойчивость перед трудностями', 'faced', 'perseverance makes anything possible', 'упорство делает возможным всё', 'Learning the instrument took perseverance.', 'Чтобы освоить инструмент, понадобилось упорство.'),
    word('ascribe X to Y', 'объяснять X действием Y, связывать X с причиной Y', 'personality', 'ascribed much of her deeply individualistic personality to the experience of growing up in Eatonville', 'объясняла свою выраженную самостоятельность тем, что выросла в Итонвилле', 'She ascribed her progress to daily practice.', 'Свой прогресс она объясняла ежедневной практикой.'),
    word('in the midst of', 'в самом разгаре, в гуще событий', 'movement', 'into the midst of the Harlem Renaissance', 'в самую гущу Гарлемского ренессанса', 'The letter arrived in the midst of the debate.', 'Письмо пришло в разгар обсуждения.'),
    word('spawn', 'порождать, давать начало', 'movement', 'a black cultural movement that spawned exceptional achievements', 'культурное движение чернокожих американцев, которое привело к выдающимся достижениям', 'The workshop spawned several new projects.', 'На семинаре зародилось несколько новых проектов.'),
    word('belittle', 'принижать, умалять значение', 'dialect', 'caused her Harlem Renaissance contemporaries to belittle the work', 'побудило её современников по Гарлемскому ренессансу принизить значение произведения', 'Good feedback helps students without belittling their efforts.', 'Хороший отзыв помогает ученикам и уважает их усилия.'),
    word('remain true to', 'оставаться верным убеждению, замыслу или обещанию', 'project', 'Hurston, however, remained true to it', 'Хёрстон, однако, осталась верна этому замыслу', 'The designer remained true to her original idea.', 'Дизайнер осталась верна своей первоначальной идее.'),
    word('prevail over', 'брать верх над, преодолевать', 'project', 'the accuracy of her representation would ultimately prevail over the political pressures', 'точность её изображения в итоге возьмёт верх над политическим давлением', 'Calm discussion prevailed over the initial disagreement.', 'Спокойное обсуждение помогло преодолеть первоначальные разногласия.'),
    word('authentic portrayal', 'достоверное изображение, передача, верная оригиналу', 'critics', 'her authentic and skillful representation of the language', 'её достоверная и умелая передача речи', 'The novel offers an authentic portrayal of village life.', 'Роман достоверно изображает жизнь деревни.'),
  ],
  exercises: [
    { title: 'Найди подлежащее', en: 'Choose the correct sentence: “Learning a dialect takes time” or “Learning a dialect, takes time.”', ru: 'Какой вариант верен? Спроси, что занимает время.', answerEn: '“Learning a dialect takes time.” Learning a dialect is the subject of takes.', answerRu: 'Верна первая фраза. Вся фраза Learning a dialect — подлежащее. Takes — сказуемое. Запятая между ними не нужна.' },
    { title: 'Одно is для двух действий', en: 'Combine: “The novel is praised for its dialogue. The novel is studied in schools.”', ru: 'Соедини две мысли через and. Используй is один раз.', answerEn: 'The novel is praised for its dialogue and studied in schools.', answerRu: 'Is относится сразу к praised и studied. Союз and связывает две оценки или действия, направленные на роман.' },
    { title: 'Где начинается новая тема?', en: '“She practiced violin as a child. Her first recording came years later. That album won an award.” Where should the paragraph about the recording start?', ru: 'С какого предложения начать абзац о записи? Проверь, к чему относится That album.', answerEn: 'Start before Sentence 2. It introduces the recording that Sentence 3 refers to.', answerRu: 'Начни с предложения 2. Там впервые появляется запись, к которой потом отсылает That album.' },
  ],
};
