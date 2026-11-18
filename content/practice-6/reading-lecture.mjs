const lessons = [
  {
    title: 'Проверяй масштаб главной мысли',
    enTitle: 'Main idea and scope',
    explain: [
      'В №1 нужен ответ обо всём отрывке. Начало объясняет, для какой работы создавали CCC. Конец показывает, что получили участники. Вариант D включает обе стороны.',
      'В №2 важен только третий абзац. Сначала ветераны требуют бонус. В конце часть из них принимает работу в CCC. Визит Элеоноры помогает представить события, а их итог объясняет выбор G.',
    ],
    formula: 'Определи границы вопроса → перескажи начало и конец → выбери ответ, который их связывает.',
    examples: [['“The city hired apprentices to repair roads. They earned wages and gained experience.”', '«Город нанял учеников ремонтировать дороги. Они получали зарплату и набирались опыта». Главная мысль охватывает и работу, и её пользу для участников.']],
    notebook: 'Сформулируй главную мысль всего отрывка одной фразой. Отдельно перескажи только абзац о ветеранах.',
    en: 'Check whether the question asks about the whole passage or just one paragraph. A good main idea covers the key parts of the requested section.',
    example: 'A paragraph about a demand, an offer, and a response is best summarized by connecting those events.',
  },
  {
    title: 'Переводи выражение по контексту и узнавай перефразирование',
    enTitle: 'Meaning in context and paraphrase',
    explain: [
      'В №3 объяснение tree farmer находится рядом. Practiced говорит о том, что Рузвельт сам занимался деревьями, а with such enthusiasm показывает его отношение.',
      'В №5 текст говорит о чтении, письме и дипломах. Вариант A описывает эти факты более общим выражением academic instruction. Ищи совпадение смысла, даже если слова разные.',
    ],
    formula: 'Прочитай соседние строки → назови смысл простыми словами → подставь ответ.',
    examples: [['“She called herself a bird watcher. She spent weekends recording which birds came to the park.”', '«Она называла себя наблюдателем за птицами. По выходным она записывала, какие птицы прилетали в парк». Вторая фраза объясняет её занятие.'], ['“Students learned to read and write.”', '«Учащиеся научились читать и писать». Это конкретный пример общеобразовательного обучения.']],
    notebook: 'Выпиши подсказку к tree farmer из строк 4–7 и два факта, которые подтверждают academic instruction в строках 72–74.',
    en: 'Use the surrounding sentence to interpret a phrase. To check a paraphrase, match the general statement to the concrete details in the text.',
    example: '“Taught them to read and write” supports the phrase “provided academic instruction.”',
  },
  {
    title: 'Связывай учреждение с конкретной работой',
    enTitle: 'Matching details to the right group',
    explain: [
      'В №4 все варианты похожи на реальные работы CCC. Название National Park Service ограничивает поиск. Campgrounds стоят в списке этой службы.',
      'В №10 важно, кто руководил проектами. Labor отбирал людей, War обеспечивал жильё и питание, Agriculture и Interior разрабатывали проекты и руководили ими. Выпиши глаголы рядом с названиями.',
    ],
    formula: 'Организация → её глагол → результат или обязанность.',
    examples: [['“The library hired the workers. The parks office supervised the repairs.”', '«Библиотека наняла работников. Управление парков руководило ремонтом». Из первой фразы известно, кто нанял, из второй — кто руководил.']],
    notebook: 'Для строк 54–67 выпиши по одному проекту для национальных лесов, National Park Service, Biological Survey и Army Corps of Engineers.',
    en: 'A detail can be in the passage and still answer a different question. Match each project or duty to the organization or location it actually belongs to.',
    example: 'Fire towers belong to the national forest list. Campgrounds appear in the National Park Service list.',
  },
  {
    title: 'Сверяй годы, числа и единицы измерения',
    enTitle: 'Chronology and quantities',
    explain: [
      'В №6 сравни первоначальный план и фактическую работу. Два года относятся к плану, 1942 — год закрытия. Человеко-часы измеряют объём работы, а число участников показывает, сколько людей трудилось.',
      'В №9 слово later отделяет новое возрастное правило от исходного. В №8 слова went to Congress и soon changed относят переименование к запуску программы, но не дают точного порядка относительно выдачи разрешения.',
    ],
    formula: 'Возле каждого числа или события подпиши единицу, дату и этап программы.',
    examples: [['“The program planned to hire 100 workers. Later it hired 200. Together they logged 4,000 hours.”', '«Программа планировала нанять 100 работников. Позже наняла 200. Всего они отработали 4 000 часов». Число 4 000 измеряет время работы.'], ['“Applicants had to be under 30, later under 25.”', '«Сначала требовалось быть младше 30 лет, позже — младше 25». Later указывает, к какому этапу относится 25.']],
    notebook: 'Подпиши числа 250 000, 500 000 и 4,1 миллиона. Проверь, чем каждое отличается от общего числа участников.',
    en: 'Keep quantities attached to their units and dates. Words like “originally,” “later,” and “by the time” help you track changes in rules or outcomes.',
    example: '“4.1 million man-hours” measures work time. The number of men employed appears in a different sentence.',
  },
  {
    title: 'Делай вывод в границах текста',
    enTitle: 'Inference and limiting words',
    explain: [
      'В №7 сочетание first major позволяет сделать вывод о прошлом. До CCC кампании такого масштаба не было. Текст оставляет открытым вопрос о менее крупных посадках.',
      'В №5 выражение no fewer than задаёт минимум. Вариант C добавляет only и превращает нижнюю границу в точное число. Такие слова могут изменить смысл даже при совпадении цифры.',
    ],
    formula: 'Найди слово-ограничитель → проверь, насколько далеко оно позволяет сделать вывод.',
    examples: [['“It was the region’s first large-scale cleanup.”', '«Это была первая крупная уборка в регионе». Раньше могли проходить небольшие уборки.'], ['“Applicants needed no fewer than three references.”', '«Кандидатам требовалось не меньше трёх рекомендаций». Три подходят, четыре тоже.']],
    notebook: 'Выпиши first major и no fewer than. Для каждого выражения напиши один вывод, который подтверждается, и один, для которого данных мало.',
    en: 'Preserve the limits in the text when drawing an inference. “First major” refers to an event of a specified scale, and “no fewer than” sets a minimum.',
    example: 'The first major campaign can follow smaller efforts. The text supports a conclusion about major campaigns.',
  },
];

export const readingLecture = lessons.map(({ enTitle, en, example }) => ({ title: enTitle, en, example }));
export const readingLectureRu = lessons.map(({ title, explain, formula, examples, notebook }) => ({ title, explain, formula, examples, notebook }));

function word(name, meaning, from, to, context, contextRu, example, exampleRu) {
  return { word: name, meaning, from, to, context, contextRu, example, exampleRu };
}

export const readingNotebook = {
  title: 'Словарь к тексту о CCC',
  intro: 'Открой строки из текста, прочитай выражение в контексте и попробуй перевести новый пример самостоятельно.',
  vocabulary: [
    word('durable', 'долговечный, способный сохраняться долгое время', 1, 2, 'One of the most durable and well regarded of all the New Deal’s programs', 'Одна из самых долговечных и уважаемых программ «Нового курса»', 'The agreement proved durable.', 'Соглашение оказалось долговечным.'),
    word('silviculture', 'выращивание леса и уход за ним', 4, 7, 'practiced the art of silviculture on his Hyde Park estate', 'занимался выращиванием деревьев и уходом за ними в имении в Гайд-Парке', 'The course introduces the basics of silviculture.', 'Курс знакомит с основами выращивания леса.'),
    word('enlist', 'набирать в ряды или записываться в них', 8, 11, 'enlisting young unemployed men', 'набирая безработных молодых мужчин', 'The project enlisted local volunteers.', 'В проект набрали местных волонтёров.'),
    word('authorization', 'официальное разрешение', 11, 15, 'went to Congress for authorization of the program', 'обратился к Конгрессу за разрешением на программу', 'The crew obtained authorization to begin work.', 'Бригада получила официальное разрешение начать работу.'),
    word('screen and select', 'проверять на соответствие требованиям и отбирать', 19, 21, 'to screen and select the enrollees', 'проверять и отбирать участников', 'The office screens and selects applicants.', 'Управление проверяет и отбирает кандидатов.'),
    word('enrollee', 'зачисленный участник программы', 19, 20, 'to screen and select the enrollees', 'проверять и отбирать участников', 'Each enrollee receives a schedule.', 'Каждый зачисленный участник получает расписание.'),
    word('waive a restriction', 'снять или не применять ограничение', 40, 43, 'waiving the age restriction for them', 'сняв для них возрастное ограничение', 'The organizer waived the entry fee for students.', 'Организатор освободил студентов от вступительного взноса.'),
    word('forthcoming', 'ожидаемый, предстоящий, в данном контексте «который будет выплачен»', 47, 49, 'no bonus would be forthcoming', 'бонуса не ожидалось', 'No additional funding was forthcoming.', 'Дополнительного финансирования не предвиделось.'),
    word('take someone up on an offer', 'принять чьё-то предложение', 47, 49, 'took Roosevelt up on his offer', 'приняли предложение Рузвельта', 'I took her up on her offer of a ride.', 'Я принял её предложение подвезти меня.'),
    word('man-hour', 'человеко-час, один час труда одного человека', 57, 58, 'spent 4.1 million man-hours fighting fires', 'затратили 4,1 миллиона человеко-часов на борьбу с пожарами', 'Two people working for three hours put in six person-hours.', 'Два человека, работавшие по три часа, отработали шесть человеко-часов.'),
    word('reforestation', 'восстановление леса', 58, 61, 'the first major reforestation campaign', 'первая крупная кампания по восстановлению лесов', 'The reforestation effort began with planting native trees.', 'Восстановление леса начали с посадки местных пород деревьев.'),
    word('wildlife survey', 'обследование или учёт диких животных', 63, 65, 'they conducted wildlife surveys', 'они проводили учёт диких животных', 'The team conducted a wildlife survey near the lake.', 'Команда провела учёт диких животных у озера.'),
    word('in return', 'взамен, в ответ на вклад или действие', 68, 71, 'In return, the CCC', 'Взамен CCC', 'They helped restore the archive and received training in return.', 'Они помогли восстановить архив и взамен получили обучение.'),
  ],
  exercises: [
    { title: 'Кто за что отвечает?', en: '“The county recruited the workers. The forest office supervised the trail repairs.” Which organization oversaw the repairs?', ru: 'Кто руководил ремонтом троп? Найди глагол, который отвечает на вопрос.', answerEn: 'The forest office. The relevant verb is “supervised.”', answerRu: 'Управление лесного хозяйства. Именно с ним связан глагол supervised — «руководило».' },
    { title: 'Человеко-часы и число людей', en: '“The crew logged 600 person-hours.” Does the sentence tell you that 600 people worked?', ru: 'Можно ли заключить, что работало 600 человек? Что измеряет число 600?', answerEn: 'No. It measures combined work time. It does not state the number of workers.', answerRu: 'Нет. Число 600 показывает общее время работы всех участников. Сколько человек работало, не сказано.' },
    { title: 'Проверь слово major', en: '“It was the first major restoration in the park’s history.” What can you infer about earlier projects?', ru: 'Какой вывод можно сделать о прошлых проектах? Как слово major его ограничивает?', answerEn: 'Earlier restoration projects, if any, did not qualify as major.', answerRu: 'Раньше не было крупных работ по восстановлению. О небольших работах предложение ничего не утверждает.' },
  ],
};
