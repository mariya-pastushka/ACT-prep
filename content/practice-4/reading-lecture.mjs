const lessons = [
  {
    title: 'От наблюдения к прогнозу', enTitle: 'From a measurement to an inference',
    explain: ['В №1 вопрос спрашивает, каким способом делают прогноз. Начни с результата, который интересует Калвелл, и пройди назад по цепи к тому, за чем можно наблюдать заранее.', 'В №3 спутник даёт показатель фотосинтеза. Исследователи уже связали его с признаком, по которому судят о популяции мух. Когда вопрос спрашивает, о чём удалось узнать, пройди всю цепочку до конца.'],
    formula: 'Что наблюдали → с чем это связано → о чём сделали вывод.',
    examples: [['“The vein size is a good measure of how numerous and robust the tsetse fly population is.”', '«По размеру жилки можно судить, насколько популяция мух цеце многочисленна и жизнеспособна». Размер жилки — показатель. Состояние популяции — вывод.'], ['“The team used river height to estimate flood risk.”', '«Команда использовала уровень реки для оценки риска наводнения». Уровень измерили, риск оценили.']],
    notebook: 'Для вопросов 1–3 запиши, какой факт наблюдают напрямую и что из него выводят.',
    en: 'Separate the measurement from what the researchers infer. For a method question, look for “by” plus the action that makes the prediction possible.',
    example: '“They measured river height to estimate flood risk.” River height is measured. Flood risk is inferred.',
  },
  {
    title: 'Смысл слова и отсылка к предыдущему абзацу', enTitle: 'Use context and follow reference words',
    explain: ['В №6 favor стоит между подлежащим и дополнением. Сначала проверь, нужен ли глагол. Затем подставь promote и перечитай предложение целиком.', 'В №7 слово similar отсылает к прежним условиям. Предыдущий абзац сначала описывает погоду, затем её последствия для комаров. Вопрос про изменения среды требует первого.'],
    formula: 'Слово → часть речи и подстановка. Отсылка → ранее названный факт.',
    examples: [['“These characteristics favor the proliferation of mosquitoes.”', '«Эти условия способствуют размножению комаров». Favor — действие условий.'], ['“The river rose and the roads flooded. A second town experienced similar conditions.”', '«Река поднялась, и дороги затопило. В другом городе были похожие условия». Нужно прочитать предыдущую фразу, чтобы раскрыть similar.']],
    notebook: 'Подставь promote вместо favor. Для similar environmental changes выпиши два конкретных изменения из предыдущего абзаца.',
    en: 'For a word in context, check what grammatical role it plays and substitute the answer. For a phrase like “similar changes,” read backward to the earlier description.',
    example: '“Steady rain favors growth.” Promote fits because rain helps the growth take place.',
  },
  {
    title: 'Проверь масштаб ответа', enTitle: 'Check the scope of the question',
    explain: ['В №8 с EXCEPT найди опору для трёх вариантов. В оставшемся варианте проверяй и предмет, и действие. Вода и температура упомянуты, но спутник помогает измерить изменение, а raise означает его вызвать.', 'В №10 оцени вариант по всему тексту. Три исследования показывают возможную пользу предупреждений, а финал обсуждает, каких данных не хватает. Общая цель должна охватывать обе части.'],
    formula: 'EXCEPT → три подтверждения. Primarily → общая мысль примеров и финала.',
    examples: [['“The sensors recorded an increase in temperature.”', '«Датчики зафиксировали рост температуры». Recorded описывает наблюдение, поэтому вариант raised не подтверждается.'], ['“The article describes several forecasts and then explains their limits.”', '«Статья описывает несколько прогнозов, а затем объясняет их ограничения». Ответ о цели должен учитывать и примеры, и ограничения.']],
    notebook: 'Выпиши по одной фразе о пользе спутниковых прогнозов и об их ограничениях. Затем сформулируй общую цель автора.',
    en: 'For EXCEPT, verify each action against the text. For an overall purpose, choose the answer that covers the main examples and the final discussion.',
    example: '“The sensor recorded warming” supports measurement. It gives no evidence that the sensor warmed anything.',
  },
];

export const readingLecture = lessons.map(({ enTitle, en, example }) => ({ title: enTitle, en, example }));
export const readingLectureRu = lessons.map(({ title, explain, formula, examples, notebook }) => ({ title, explain, formula, examples, notebook }));

const word = (name, meaning, from, to, context, contextRu, example, exampleRu) => ({
  word: name, meaning, from, to, context, contextRu, example, exampleRu,
});

export const readingNotebook = {
  title: 'Словарь к Fair-Weather Warning',
  intro: 'Найди каждое выражение в тексте и проверь, сохраняется ли его смысл в новом примере.',
  vocabulary: [
    word('outbreak', 'вспышка болезни, резкий рост числа случаев', 3, 5, 'massive outbreaks of cholera', 'масштабные вспышки холеры', 'The report traces the start of the outbreak.', 'В отчёте прослеживается начало вспышки.'),
    word('depend on', 'зависеть от, нуждаться в', 8, 9, 'depend on phytoplankton for their nourishment', 'зависят от фитопланктона как источника пищи', 'Young trees depend on regular rainfall.', 'Молодые деревья зависят от регулярных дождей.'),
    word('in advance', 'заранее, до события', 26, 28, '4 to 6 weeks in advance', 'за 4–6 недель', 'We booked the tickets a week in advance.', 'Мы забронировали билеты за неделю.'),
    word('forecast', 'прогнозировать или прогноз, в зависимости от части речи', 30, 31, 'on these satellite-based forecasts', 'на этих прогнозах по спутниковым данным', 'The new forecast predicts heavy rain.', 'По новому прогнозу ожидается сильный дождь.'),
    word('correspond with', 'соответствовать, наблюдаться вместе с', 42, 44, 'corresponds with strong and prolonged rains', 'наблюдается вместе с сильными и длительными дождями', 'The largest increase corresponds with the wettest month.', 'Самый большой рост приходится на самый дождливый месяц.'),
    word('favor', 'способствовать, создавать благоприятные условия', 44, 46, 'favor the proliferation of mosquitoes', 'способствуют размножению комаров', 'These conditions favor the growth of moss.', 'Эти условия способствуют росту мха.'),
    word('robust', 'крепкий, жизнеспособный, хорошо развивающийся', 60, 62, 'how numerous and robust the tsetse fly population is', 'насколько многочисленна и жизнеспособна популяция цеце', 'The healthy soil supports a robust plant population.', 'Здоровая почва поддерживает жизнеспособную популяцию растений.'),
    word('cull data', 'отбирать данные из большого объёма', 67, 69, 'cull massive amounts of meteorological data', 'отбирать большие объёмы метеорологических данных', 'The team culled relevant measurements from the archive.', 'Команда отобрала нужные измерения из архива.'),
    word('incorporate', 'включать, добавлять как часть целого', 86, 89, 'these non-climatic factors can similarly be incorporated', 'эти неклиматические факторы тоже можно включить', 'We incorporated new observations into the model.', 'Мы включили новые наблюдения в модель.'),
  ],
  exercises: [
    { title: 'Что измерили и о чём сделали вывод?', en: '“Researchers count tracks in snow to estimate the size of a deer population.” What is measured directly?', ru: 'Что исследователи измеряют напрямую, а что оценивают по этому показателю?', answerEn: 'They count tracks. They use the count to estimate the deer population.', answerRu: 'Напрямую считают следы. Численность оленей оценивают по этому числу.' },
    { title: 'Значение favor', en: '“Warm days favor the growth of seedlings.” Which fits in place of favor: “promote” or “request”?', ru: 'Подставь оба варианта. Какой передаёт смысл исходного предложения?', answerEn: 'Promote. Warm days help the seedlings grow.', answerRu: 'Promote — «способствовать». Тёплые дни создают условия для роста всходов.' },
    { title: 'Данные и действие', en: '“The satellite recorded the rise in sea level.” Does this support “the satellite raised sea level”?', ru: 'Можно ли по первой фразе подтвердить вторую? Сравни глаголы.', answerEn: 'No. Recorded means observed or measured. Raised would mean caused the rise.', answerRu: 'Нет. Recorded означает «зафиксировал». Raised означает «вызвал повышение». Текст подтверждает только измерение.' },
  ],
};
