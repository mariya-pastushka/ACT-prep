const lessons = [
  {
    title: 'Отмечай, что было известно до события',
    enTitle: 'Time markers and earlier knowledge',
    explain: [
      'В №2 и №6 вопрос ограничивает время, до миссии Pioneer. В тексте Well before the arrival of Pioneer Venus сразу указывает на нужный участок.',
      'Сначала существовал образ близнецов, основанный на размере и расстоянии от Солнца. Затем наблюдения температуры и атмосферных условий показали, насколько разные условия скрывает внешнее сходство.',
    ],
    formula: 'Временная подсказка в вопросе → такой же этап в тексте → факт, относящийся к этому этапу.',
    examples: [['“Before the new survey, the team already knew the river was polluted.”', '«До нового обследования команда уже знала, что река загрязнена». Эта фраза не позволяет приписать открытие новому обследованию.']],
    notebook: 'В строках 28–33 выдели слова о времени и два факта, которые были известны на этом этапе.',
    en: 'Match the time period in the question to a time marker in the passage. Do not assign earlier knowledge to the later mission.',
    example: '“Well before the arrival” places the temperature and pressure evidence before Pioneer Venus.',
  },
  {
    title: 'Разделяй объект, измерение и общий вывод',
    enTitle: 'Matching missions and measured properties',
    explain: [
      'В №10 нужны измерения Pioneer. В строках 17–22 Magellan связан с геологией и внутренним строением, а Pioneer — с атмосферой. Сходство Венеры с Землёй — общий вопрос исследования, а состав атмосферы — конкретный измеренный объект.',
      'В №4 важно слово complements. Разные сведения дают более полное понимание вместе. В №3 проверь каждую часть пары, атмосферу и температуру поверхности.',
    ],
    formula: 'Кто исследовал? → что измерял? → какой общий вывод позволили сделать данные?',
    examples: [['“One team mapped the lake bed. Another tested the water. Together they explained the lake’s changes.”', '«Одна команда составила карту дна озера. Другая исследовала воду. Вместе они объяснили изменения озера». Разные задачи дополняют общую картину.']],
    notebook: 'Напиши две пары. Magellan → его предмет исследования. Pioneer → его предмет исследования.',
    en: 'Keep each research method attached to its subject. A broad scientific question can be explored through several different measurements.',
    example: 'Magellan investigated surface geology and interior structure. Pioneer studied atmospheric composition and dynamics.',
  },
  {
    title: 'Подставляй значение и читай пояснение после термина',
    enTitle: 'Vocabulary in context',
    explain: [
      'В №7 holds подставляется вместо harbors и сохраняет сообщение о содержании кислорода. Другие значения, связанные с кораблями или сокрытием, сюда не подходят.',
      'В №8 слово primordial объясняется следующими фразами. Газы существуют с рождения планет, а Венера сохранила большую часть ранней атмосферы. Это и даёт значение термина.',
    ],
    formula: 'Подставь вариант → проверь смысл всего предложения → сверь соседнее пояснение.',
    examples: [['“The pond harbors several fish species.”', '«В пруду обитает несколько видов рыб». Здесь глагол сообщает о присутствии живых существ в среде.'], ['“The landscape remains primordial, preserving features from its earliest formation.”', '«Ландшафт остаётся первозданным, сохраняя черты раннего формирования». Пояснение раскрывает слово primordial.']],
    notebook: 'Прочитай строку 56 с holds. Затем выпиши два выражения из строк 65–69, которые объясняют primordial.',
    en: 'For a word in context, test the substitution in the full sentence. For a technical term, read the explanation and examples that follow it.',
    example: '“Earliest atmosphere” helps explain “primordial.” “Holds oxygen” fits the content described by “harbors oxygen.”',
  },
  {
    title: 'Прослеживай причину и сохраняй условие',
    enTitle: 'Causal references and hypothetical statements',
    explain: [
      'В №9 activity of living things отсылает к фотосинтезу растений в предыдущей части. Процесс даёт кислород, а кислород влияет на состав атмосферы.',
      'В №5 фраза If all of Venus’s water could somehow be condensed вводит мысленный расчёт. Она не утверждает, что вся вода действительно находится на поверхности. Так же важно помнить, что карбонатные породы в другом абзаце относятся к Земле.',
    ],
    formula: 'Причина → результат. If + условие → что получилось бы при этом условии.',
    examples: [['“If all the ice melted, the water would cover the path.”', '«Если бы весь лёд растаял, вода покрыла бы дорожку». Фраза описывает возможный результат условия.'], ['“Plants release oxygen. Without this activity, the oxygen level would be lower.”', '«Растения выделяют кислород. Без этой деятельности его уровень был бы ниже». This activity отсылает к предыдущему действию.']],
    notebook: 'Выпиши цепочку из строк 57–60. Отдельно подчеркни If и would в расчёте о воде.',
    en: 'Trace a reference to the action just named. Keep the distinction between a hypothetical result and an observed condition.',
    example: 'A statement beginning “If all the water could be condensed” sets a condition for the result that follows.',
  },
  {
    title: 'Проверяй обе характеристики отношения автора',
    enTitle: 'Author’s attitude and two-part answers',
    explain: [
      'В №1 C состоит из двух оценок. Doubtful поддерживает неопределённый срок нового наблюдения. Pragmatic поддерживает конкретная причина, финансовые ограничения.',
      'Вариант может содержать одно подходящее слово и второе без опоры. Так uncertain не делает withdrawn подходящим. Для других вопросов с перечнем также проверь каждый пункт отдельно.',
    ],
    formula: 'Первая характеристика → текстовая опора. Вторая характеристика → своя текстовая опора.',
    examples: [['“I cannot predict the reopening date because repairs exceed the budget.”', '«Я не могу предсказать дату открытия, потому что ремонт выходит за бюджет». Здесь неопределённость связана с практическим препятствием.']],
    notebook: 'Напротив doubtful выпиши слова автора о сроке. Напротив pragmatic выпиши его причину.',
    en: 'A two-part attitude answer needs support for both adjectives. Tie the interpretation to the specific topic named in the question.',
    example: '“There is no telling when” supports uncertainty about timing. “Fiscal austerity” names a practical constraint.',
  },
  {
    title: 'Пойми три различия, на которых построен отрывок',
    enTitle: 'Scientific distinctions in the passage',
    explain: [
      'Состав атмосферы означает, какие газы и в каких долях в ней присутствуют. В тексте цифры 78% азота и 21% кислорода относятся к Земле, а преобладание углекислого газа — к Венере.',
      'Автор различает углекислый газ в атмосфере и углерод, связанный в земных карбонатных породах. Сходное количество вещества в целом ещё не даёт одинаковые атмосферные условия.',
      'Деятельность растений изменяет кислородный состав земной атмосферы. Primordial в последнем абзаце относится к сохранению ранних признаков. Это отдельный критерий, который нельзя заменить словом «непригодный для жизни».',
    ],
    formula: 'У каждого факта подпиши планету, вещество, его местонахождение и процесс.',
    examples: [['“The same element can occur in the air or be bound in rock.”', '«Один и тот же элемент может находиться в воздухе или быть связанным в породе». Местонахождение и форма вещества важны для сравнения.'], ['“An early feature can persist even while other features change.”', '«Ранняя черта может сохраняться, пока другие черты меняются». Сохранение исходного состояния — отдельный признак.']],
    notebook: 'Объясни своими словами разницу между общей сравнительной темой и конкретным фактом. Для кислорода назови процесс, а для primordial — временной признак.',
    en: 'Keep composition, location, biological effects, and retention of early features distinct. These distinctions prevent swapping a fact about one planet or process into another context.',
    example: 'The passage connects oxygen production to photosynthesis on Earth and early atmospheric retention to the term primordial.',
  },
];

export const readingLecture = lessons.map(({ enTitle, en, example }) => ({ title: enTitle, en, example }));
export const readingLectureRu = lessons.map(({ title, explain, formula, examples, notebook }) => ({ title, explain, formula, examples, notebook }));

function word(name, meaning, from, to, context, contextRu, example, exampleRu) {
  return { word: name, meaning, from, to, context, contextRu, example, exampleRu };
}

export const readingNotebook = {
  title: 'Словарь к The Pioneer Mission to Venus',
  intro: 'Найди выражение в отрывке. Затем попробуй перевести новый пример и сравни с русским переводом.',
  vocabulary: [
    word('analogous to', 'сходный с чем-то в определённом отношении, сопоставимый с', 4, 6, 'more analogous to Dr. Jekyll and Mr. Hyde', 'больше похожи в своих различиях на доктора Джекила и мистера Хайда', 'The model is analogous to a moving belt.', 'Модель в этом отношении подобна движущейся ленте.'),
    word('noxious', 'вредный, ядовитый', 6, 8, 'noxious sulfuric acid', 'вредная серная кислота', 'The workers avoided the noxious fumes.', 'Рабочие избегали ядовитых испарений.'),
    word('fiscal austerity', 'бюджетная экономия, ограничение государственных расходов', 14, 16, 'in the present climate of fiscal austerity', 'в описываемых условиях бюджетной экономии', 'Fiscal austerity limited funding for the program.', 'Бюджетная экономия ограничила финансирование программы.'),
    word('glean', 'получать или собирать сведения', 17, 18, 'The information gleaned by Pioneer Venus', 'Сведения, полученные Pioneer Venus', 'Researchers gleaned useful details from the records.', 'Исследователи извлекли полезные сведения из записей.'),
    word('complement', 'дополнять', 17, 20, 'complements the well-publicized radar images', 'дополняет широко известные радиолокационные снимки', 'The interviews complement the survey results.', 'Интервью дополняют результаты опроса.'),
    word('composition', 'состав', 20, 22, 'the composition and dynamics of the planet’s atmosphere', 'состав и динамика атмосферы планеты', 'The test measured the composition of the gas.', 'Испытание определило состав газа.'),
    word('unbreathable', 'непригодный для дыхания', 34, 36, 'utterly unbreathable to humans', 'совершенно непригодный для дыхания человека', 'Smoke made the air unbreathable.', 'Из-за дыма воздух стал непригодным для дыхания.'),
    word('locked away', 'связанный или удерживаемый в определённом месте', 44, 45, 'locked away in carbonate rocks', 'связанный в карбонатных породах', 'The water remained locked away in the ice.', 'Вода оставалась заключённой во льду.'),
    word('harbor', 'содержать, служить средой присутствия чего-либо', 56, 57, 'Venus harbors little if any molecular oxygen', 'Венера содержит очень мало молекулярного кислорода, если он там вообще есть', 'The wet soil harbors many microorganisms.', 'Во влажной почве содержится много микроорганизмов.'),
    word('by-product', 'побочный продукт процесса', 57, 59, 'a by-product of photosynthesis by plants', 'побочный продукт фотосинтеза растений', 'Heat is a by-product of this process.', 'Тепло является побочным продуктом этого процесса.'),
    word('primordial', 'первичный, сохранивший черты времени формирования', 64, 69, 'Venus is more primordial than Earth', 'Венера сохранила больше первоначальных черт, чем Земля', 'The landscape retained a primordial appearance.', 'Ландшафт сохранил первозданный облик.'),
    word('hold on to', 'сохранять, удерживать', 68, 69, 'Venus has held on to a far greater fraction of its earliest atmosphere', 'Венера сохранила гораздо большую долю своей первоначальной атмосферы', 'The walls held on to heat overnight.', 'Стены сохраняли тепло в течение ночи.'),
    word('debris', 'обломки, осколки', 71, 73, 'the cloud of debris that resulted from such a gigantic impact', 'облако обломков, образовавшееся в результате такого огромного столкновения', 'The impact scattered debris across the ground.', 'Удар разбросал обломки по земле.'),
  ],
  exercises: [
    { title: 'К какому этапу относится знание?', en: '“Before Probe A arrived, scientists already knew the surface was hot. Probe A later measured the gases.” Which finding preceded the probe?', ru: 'Какое знание существовало до прибытия зонда? Назови временную подсказку.', answerEn: 'The surface heat was known before the probe arrived. The cue is “already knew” after “Before.”', answerRu: 'О горячей поверхности знали до зонда. На это указывают Before и already knew. Измерение газов относится к более позднему этапу.' },
    { title: 'Условие и факт', en: '“If all the snow melted, the river would rise.” Does this say the snow has already melted?', ru: 'Можно ли сделать вывод, что весь снег уже растаял?', answerEn: 'No. The sentence states what would happen under a condition.', answerRu: 'Нет. Предложение описывает возможное повышение уровня реки при условии, что снег растает. О выполнении условия ничего не сказано.' },
    { title: 'Подставь слово в предложение', en: '“The cave harbors several species.” Which fits better in place of harbors, “holds” or “sails”?', ru: 'Прочитай обе подстановки и выбери ту, которая сохраняет сообщение о присутствии видов.', answerEn: '“Holds” fits. The cave provides a place where those species are present.', answerRu: 'Подходит holds. Глагол сообщает, что эти виды присутствуют в пещере.' },
  ],
};
