const lessons = [
  {
    title: 'Различай главную мысль, пример и функцию абзаца',
    enTitle: 'Main idea, examples, and paragraph function',
    explain: [
      'В №1 нужен смысл всего отрывка. Начало рассказывает о появлении столбов, а несколько следующих абзацев раскрывают их культурное значение. Ответ должен охватывать обе части.',
      'В №7 Ворон и Лягушка — примеры преданий рода. Общий ответ берётся из фразы перед примерами. В №4 вопрос другой, что делает шестой абзац. Он описывает изображения и объясняет их значения.',
    ],
    formula: 'Main idea → что утверждает автор? Example → какой общий пункт он показывает? Function → что этот абзац делает для читателя?',
    examples: [['“The masks preserve village legends. One depicts a hunter, and another depicts a river spirit.”', '«Маски сохраняют легенды деревни. Одна изображает охотника, другая — речного духа». Оба персонажа раскрывают общий пункт о легендах.'], ['“An eye in this symbol represents watchfulness.”', '«Глаз в этом символе означает бдительность». Автор называет изображение и объясняет смысл.']],
    notebook: 'Перескажи весь отрывок одним предложением. Затем назови одним глаголом, что автор делает в строках 49–59.',
    en: 'A main idea states the point of a passage or paragraph. A paragraph function describes what the writing does, such as explaining images through examples.',
    example: 'Raven and Frog illustrate clan lore. A discussion of their carved features explains how images carry meaning.',
  },
  {
    title: 'В NOT и EXCEPT найди три подтверждения',
    enTitle: 'Negative questions and full-claim checks',
    explain: [
      'В №2 три вопроса имеют прямые ответы, а данных о самом высоком столбе нет. Высота одного столба не устанавливает рекорд.',
      'В №6 слова family crest есть в тексте. Но only в ответе J превращает функцию столба в ограничение на тех, кто мог его делать. В №5 все детали упомянуты, однако одна иллюстрирует другую роль предмета.',
    ],
    formula: 'Подчеркни NOT или EXCEPT → найди три опоры → проверь оставшийся вариант целиком.',
    examples: [['“The tree is 40 meters tall.” Does this answer which tree is the tallest in the country?', '«Дерево высотой 40 метров». Чтобы узнать самое высокое дерево страны, нужна информация о сравнении.'], ['“The badge identifies the team.” Does this say that only teams with badges may compete?', '«Значок обозначает команду». Условие допуска к соревнованию здесь не установлено.']],
    notebook: 'В №2 выпиши три найденных ответа. В №6 обведи слово, которое добавляет ограничение.',
    en: 'In a negative question, verify each complete claim. An answer may repeat a real word while adding a record, restriction, or relationship the passage never states.',
    example: 'A pole functioning as a crest does not establish an exclusive rule about who can carve poles.',
  },
  {
    title: 'Привязывай место, функцию и реакцию к нужному участнику',
    enTitle: 'Matching details and identifying attitude',
    explain: [
      'В №8 слова о юго-восточном побережье Аляски стоят рядом с Tlingit. Западная Канада относится к другим народам в том же предложении. Сиэтл появляется позже как место показа столба.',
      'В №10 отношение работодателей раскрывает их собственный глагол complained. Слово civilize рядом относится к описанию чужих целей. Оно само по себе не отвечает на вопрос об эмоции работодателей.',
    ],
    formula: 'Нужная группа → относящиеся к ней место или действие → вывод по этой связи.',
    examples: [['“The potters in Lima and the weavers in Quito joined the exhibition.”', '«Гончары из Лимы и ткачи из Кито участвовали в выставке». Каждое место связано с соседней группой.'], ['“The organizers complained that the work kept stopping.”', '«Организаторы жаловались, что работа постоянно останавливалась». Complained помогает увидеть их недовольство.']],
    notebook: 'Подпиши две пары народ–место из строк 31–32. Затем найди основу предложения, которое показывает отношение работодателей.',
    en: 'Attach each place or action to the right group. For attitude, use the reaction attributed to the person the question names.',
    example: 'The Tlingit are placed in Alaska. The employers are the people who complained.',
  },
  {
    title: 'Раскрывай смысл сравнения по соседним словам',
    enTitle: 'Analogy and supported inference',
    explain: [
      'В №9 автор сравнивает чтение столба с чтением языка. Следующее предложение объясняет общий признак, передача сведений об истории и мифологии.',
      'Сравнение с книгой в строках 39–40 также показывает функцию сохранения рассказов. Вывод об отсутствии языка или замене книг выходит за пределы этого сравнения.',
    ],
    formula: 'Что сравнивают? → какое сходство названо рядом? → какой вывод следует именно из него?',
    examples: [['“The old garden is like a diary. Each tree marks a family event.”', '«Старый сад похож на дневник. Каждое дерево отмечает семейное событие». Общее сходство — сохранение памяти о событиях.']],
    notebook: 'Для образа «читать столб» выпиши два вида информации из строк 60–63. Объясни, как они подтверждают ответ A в №9.',
    en: 'An analogy highlights a particular shared feature. Use the explanation around it to identify that feature and limit the inference.',
    example: 'Calling a pole readable draws attention to the information its images communicate.',
  },
  {
    title: 'Доказывай назначение через слова и примеры автора',
    enTitle: 'Purpose and contextual meaning',
    explain: [
      'В №3 слова important purpose прямо вводят назначение столбов. Recording the lore означает сохранение преданий рода. Затем автор показывает, как истории передаются следующему поколению.',
      'В шестом абзаце значения образов раскрываются через if, might indicate и might mean. Эти слова описывают возможное толкование. Не превращай пример одного изображения в обязательное правило для каждого столба.',
    ],
    formula: 'Найди purpose → назови, что сохраняют или передают → проверь примеры и слова might / some / almost.',
    examples: [['“This design might indicate a family connection.”', '«Этот узор может указывать на родственную связь». Might сохраняет возможность, а не гарантирует одно значение в любом случае.'], ['“The songs record community history.”', '«Песни сохраняют историю сообщества». Record показывает функцию хранения памяти.']],
    notebook: 'Подчеркни might в строках 56 и 58. Переведи обе фразы так, чтобы сохранить возможность толкования.',
    en: 'Find explicit purpose language and check how the examples support it. Preserve qualifiers such as “might” when interpreting symbols.',
    example: 'An eye in an ear might suggest keen hearing. The paragraph presents a possible symbolic meaning.',
  },
];

export const readingLecture = lessons.map(({ enTitle, en, example }) => ({ title: enTitle, en, example }));
export const readingLectureRu = lessons.map(({ title, explain, formula, examples, notebook }) => ({ title, explain, formula, examples, notebook }));

function word(name, meaning, from, to, context, contextRu, example, exampleRu) {
  return { word: name, meaning, from, to, context, contextRu, example, exampleRu };
}

export const readingNotebook = {
  title: 'Словарь к тексту о тотемных столбах',
  intro: 'Перейди к строкам и прочитай выражение в отрывке. Затем переведи новый пример и сверься с переводом.',
  vocabulary: [
    word('carve', 'вырезать из материала, создавать резьбой', 1, 3, 'who first carved totem poles', 'которые первыми начали вырезать тотемные столбы', 'She carved a bird from a block of wood.', 'Она вырезала птицу из деревянного бруска.'),
    word('fell a tree', 'срубить дерево', 7, 9, 'necessary to fell a massive tree in one piece', 'необходимые, чтобы срубить огромное дерево целиком', 'The crew used an axe to fell the damaged tree.', 'Бригада срубила повреждённое дерево топором.'),
    word('family crest', 'родовой герб, знак рода', 15, 17, 'the totem pole functioned as a family crest', 'тотемный столб выполнял функцию родового герба', 'The family crest appeared above the doorway.', 'Над входом был изображён родовой герб.'),
    word('genealogy', 'родословная, сведения о происхождении рода', 16, 17, 'recounting genealogies, stories, or legends', 'передавая родословные, истории или легенды', 'She researched her family’s genealogy.', 'Она исследовала родословную своей семьи.'),
    word('potlatch', 'потлач, церемониальное собрание с угощением и раздачей даров, описанное в тексте', 21, 23, 'gave a potlatch with feasting, games, and much gift-giving', 'устраивала потлач с пиршеством, играми и раздачей подарков', 'The passage describes guests helping raise a pole during a potlatch.', 'В отрывке описано, как гости помогали поднимать столб во время потлача.'),
    word('lift a ban', 'отменить запрет', 29, 30, 'The ban was lifted in the 1950s.', 'Запрет отменили в 1950-х годах.', 'The city lifted the ban after the repairs.', 'Город отменил запрет после ремонта.'),
    word('lore', 'традиционные знания, предания', 39, 40, 'recording the lore of a clan', 'сохранение преданий рода', 'The festival celebrates local lore.', 'На празднике отмечают местные предания и традиции.'),
    word('trickster', 'хитрец, персонаж, действующий с помощью уловок', 42, 44, 'Raven, the trickster', 'Ворон-хитрец', 'The trickster escaped by fooling the guards.', 'Хитрец сбежал, обманув стражников.'),
    word('woo', 'ухаживать, добиваться любви', 43, 44, 'how he wooed a human woman', 'как он добивался любви женщины-человека', 'In the story, he wooed her with songs.', 'В этой истории он добивался её любви песнями.'),
    word('portray', 'изображать', 50, 53, 'the carver would portray it in all its forms', 'резчик изобразил бы его во всех его обликах', 'The mural portrays a village celebration.', 'Роспись изображает деревенский праздник.'),
    word('acuteness', 'острота чувств, тонкость восприятия', 55, 57, 'suggest acuteness or skill', 'передавать остроту восприятия или умение', 'The animal is known for the acuteness of its hearing.', 'Животное известно остротой слуха.'),
    word('descendants', 'потомки', 62, 63, 'by the descendants of the original carvers', 'потомками первых резчиков', 'Their descendants preserved the family stories.', 'Их потомки сохранили семейные истории.'),
    word('predominantly', 'преимущественно, главным образом', 64, 66, 'predominantly for the tourist trade', 'преимущественно для туристической торговли', 'The shop serves predominantly local customers.', 'Магазин обслуживает преимущественно местных покупателей.'),
  ],
  exercises: [
    { title: 'Есть ли ответ о рекорде?', en: '“One bridge is 200 meters long.” Does this identify the longest bridge in the country?', ru: 'Можно ли из этой фразы узнать самый длинный мост страны? Какого факта не хватает?', answerEn: 'No. The sentence gives the length of one bridge without comparing it with the others.', answerRu: 'Нет. Указана длина одного моста. Для рекорда нужно сравнение с другими или прямое утверждение, что он самый длинный.' },
    { title: 'Общая категория или пример?', en: '“The carvings tell clan legends. One shows a hunter; another shows a spirit.” What do the figures represent as a group?', ru: 'Выбери общую категорию, которая охватывает обе фигуры.', answerEn: 'They represent the clan’s legends. The hunter and spirit are individual examples.', answerRu: 'Они представляют предания рода. Охотник и дух — отдельные примеры внутри этой категории.' },
    { title: 'Сохрани значение might', en: '“The blue mark might indicate a river.” Does this say every blue mark always means a river?', ru: 'Что случилось со смыслом, когда в выводе появились every и always?', answerEn: 'No. “Might” presents a possible interpretation. “Every” and “always” make a stronger claim.', answerRu: 'Нет. Might обозначает возможное толкование. Every и always превращают его в обязательное правило, которого исходная фраза не утверждает.' },
  ],
};
