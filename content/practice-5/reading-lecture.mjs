const lessons = [
  {
    title: 'Проверяй каждую часть ответа с NOT',
    enTitle: 'Negative questions and precise wording',
    explain: [
      'В №1 ищем реакцию, которую рассказ не подтверждает. A, B и D можно связать с конкретными строками. В C слово old-fashioned взято из текста, но despises добавляет более сильное чувство, а ссылка на лифт добавляет неподтверждённую причину.',
      'Проверяй глагол, степень и причину по отдельности. В №5 вопрос о самом точном чувстве в момент вручения, поэтому подходят строки о disappointment. В №1 вопрос о реакции, которой текст не описывает, поэтому выбираем C.',
    ],
    formula: 'NOT → найди три подтверждения → проверь оставшийся вариант целиком.',
    examples: [['“I was disappointed with the jacket.” / “I hated the jacket because of its buttons.”', '«Я разочаровался в куртке». / «Я ненавидел куртку из-за пуговиц». Вторая фраза усиливает чувство и добавляет причину.']],
    notebook: 'Найди слово despises в варианте C и disappointment в строке 81. Переведи оба и объясни разницу в силе чувства.',
    en: 'In a NOT question, look for the one claim that lacks support. A familiar word can appear beside an unsupported feeling or cause.',
    example: '“It looked old” supports an observation about appearance. “She despised it because it looked old” adds both a strong reaction and a cause.',
  },
  {
    title: 'Найди слова, которые раскрывают значение и цель',
    enTitle: 'Signal words for meaning and motive',
    explain: [
      'В №2 слово signified ведёт прямо к объяснению запаха кофе. Дочитай до ready for gift-giving. Действие девочки после сигнала само по себе не отвечает на вопрос, что сигнал означал.',
      'В №8 фраза I hope показывает, чего рассказчица хочет добиться, когда расскажет детям о подарке. Соседние строки помогают понять, что именно им предстоит понять лучше.',
    ],
    formula: 'Что это значило? → signified / meant. Зачем она это сделает? → I hope / I want / so that.',
    examples: [['“The lights went out. That meant the show was about to start.”', '«Свет погас. Это означало, что представление вот-вот начнётся». Слова после meant прямо объясняют сигнал.'], ['“I saved the letters. I hope my son will understand why the move mattered.”', '«Я сохранила письма. Надеюсь, сын поймёт, почему переезд был важен». Вторая фраза объясняет цель.']],
    notebook: 'Выпиши слова, которые идут сразу после signified и I hope. Сверь их с ответами на №2 и №8.',
    en: 'Read past the cue word. “Signified” introduces what something meant, and “I hope” introduces the result a character wants.',
    example: '“The bell signified that the doors were open.” The open doors explain the signal.',
  },
  {
    title: 'Следи за героем и моментом повествования',
    enTitle: 'Point of view and shifts in time',
    explain: [
      'В №3 сравнение с принцессой относится к другой девочке. О себе рассказчица говорит my life would be complete. Для каждого I или she проверь, кого слово обозначает.',
      'В №5 важен момент first sees. В №10 важна разница между тем, как один и тот же подарок увидела девочка и как поняла его взрослая рассказчица. Слова As an adult указывают на смену взгляда.',
    ],
    formula: 'Кто оценивает? → когда? → что именно человек думает или чувствует?',
    examples: [['“At twelve, I thought she was lucky. Years later, I understood how much she had practiced.”', '«В двенадцать лет я думала, что ей повезло. Спустя годы поняла, сколько она тренировалась». She — другой человек, а I оценивает её по-разному в разные годы.']],
    notebook: 'Закончи фразы «Тогда она увидела …» и «Теперь она понимает …». Подтверди каждую строками из последнего абзаца.',
    en: 'Track whose view a sentence reports and when that person held it. An adult narrator can describe a childhood feeling and then reevaluate the same event.',
    example: '“I wanted to show off the gift then. Now I remember the work that went into it.”',
  },
  {
    title: 'Собирай вывод из конкретных подсказок',
    enTitle: 'Inference, character traits, and paraphrase',
    explain: [
      'В №6 тревожная улыбка объясняет слово concerned, а работа над домиком указывает на hard-working. В №9 countless hours соответствует time-consuming, а описание сделанного вручную домика подсказывает labor-intensive.',
      'В №7 текст говорит о крупном подарке, тревоге родителей и самодельной замене. Вместе эти детали делают высокую цену вероятной причиной. Точный бюджет семьи остаётся неизвестным.',
    ],
    formula: 'Назови факты → свяжи их → проверь, всё ли в ответе опирается на эти факты.',
    examples: [['“Ravi worried the gift would break. He spent all weekend fixing it.”', '«Рави переживал, что подарок сломается. Он чинил его все выходные». Из первой фразы видно беспокойство, из второй — усилия и время.']],
    notebook: 'Для №7 выпиши три подсказки слева, а вероятную причину справа. Для №9 подпиши, какие слова говорят о времени, а какие о работе.',
    en: 'Draw an inference from the available clues. For a two-part answer, match each part to a detail in the text.',
    example: '“She spent hours building the frame” supports both a long duration and substantial work.',
  },
  {
    title: 'Охвати весь абзац в главной мысли',
    enTitle: 'Main idea and scope',
    explain: [
      'В №4 начало задаёт повторяемость, а конец показывает последний шаг утреннего ритуала. Велосипед и кофе входят в картину утра, которую охватывает G.',
      'В №10 финал соединяет детскую реакцию и взрослую оценку. Вариант J объясняет, зачем автору понадобились обе части. Вариант H передаёт лишь то, что разочарование сохранилось в памяти.',
    ],
    formula: 'Дай абзацу заголовок из нескольких слов и сверь его с началом, серединой и концом.',
    examples: [['“Every Sunday we set the table together. I carried the plates, and my brother poured the drinks.”', '«Каждое воскресенье мы вместе накрывали на стол. Я несла тарелки, а брат разливал напитки». Вариант о воскресной привычке охватывает оба действия.']],
    notebook: 'Подбери короткие заголовки к первому и последнему абзацам. Под каждый выпиши по две детали, которые он объединяет.',
    en: 'Choose a main idea that accounts for the whole paragraph. A single vivid detail may be true and still cover only part of it.',
    example: 'A paragraph that moves from childhood embarrassment to adult gratitude needs a main idea that includes that change.',
  },
];

export const readingLecture = lessons.map(({ enTitle, en, example }) => ({ title: enTitle, en, example }));
export const readingLectureRu = lessons.map(({ title, explain, formula, examples, notebook }) => ({ title, explain, formula, examples, notebook }));

function word(name, meaning, from, to, context, contextRu, example, exampleRu) {
  return { word: name, meaning, from, to, context, contextRu, example, exampleRu };
}

export const readingNotebook = {
  title: 'Словарь к The Year of the Unicorn',
  intro: 'Прочитай выражение в отрывке. Потом закрой перевод нового примера и попробуй перевести его сам.',
  vocabulary: [
    word('huddle', 'сесть или собраться тесно вместе', 2, 4, 'huddle in my room', 'сидеть, прижавшись друг к другу, у меня в комнате', 'The children huddled under a blanket.', 'Дети тесно прижались друг к другу под одеялом.'),
    word('signify', 'означать, служить знаком', 9, 11, 'that signified that our parents were … ready for gift-giving', 'это означало, что родители были готовы дарить подарки', 'The green light signified that the room was free.', 'Зелёный свет означал, что комната свободна.'),
    word('crave', 'сильно хотеть, страстно желать', 12, 13, 'the gift that I had been craving', 'подарок, о котором я так мечтала', 'After months away, he craved a meal from home.', 'После нескольких месяцев в отъезде ему очень хотелось домашней еды.'),
    word('bestow largesse', 'щедро одаривать (книжное выражение)', 15, 17, 'She was like a princess bestowing largesse', 'Она была как принцесса, щедро раздающая дары', 'The crowd watched the queen bestow gifts on the children.', 'Толпа смотрела, как королева одаривает детей.'),
    word('contentedly', 'довольно, с удовлетворением', 17, 19, 'sitting quietly, contentedly', 'сидя тихо и с довольным видом', 'After lunch, he sat contentedly by the window.', 'После обеда он с довольным видом сидел у окна.'),
    word('overhear', 'случайно услышать чужой разговор', 23, 24, 'One night I overheard my parents', 'Однажды вечером я случайно услышала разговор родителей', 'I overheard them discussing the trip.', 'Я случайно услышала, как они обсуждали поездку.'),
    word('show off', 'демонстрировать с гордостью, хвастаться', 43, 44, 'showing my gift off to friends and foes alike', 'хвастаться подарком и перед друзьями, и перед недругами', 'She showed off her new skates to her friends.', 'Она похвасталась новыми коньками перед друзьями.'),
    word('concede', 'признать, что что-то верно, часто неохотно', 58, 61, 'I was forced to concede that …', 'Мне пришлось признать, что …', 'I had to concede that my first plan would not work.', 'Мне пришлось признать, что мой первый план не сработает.'),
    word('dawn on someone', 'постепенно становиться кому-то ясно', 72, 73, 'Slowly, realization dawned', 'Постепенно до меня дошло', 'It dawned on me that we were on the wrong bus.', 'До меня дошло, что мы сели не в тот автобус.'),
    word('devastation', 'сильнейшее потрясение или горе в этом контексте', 76, 78, 'the feeling of devastation that I felt', 'то сильное потрясение, которое я испытала', 'She felt devastated when the final performance was canceled.', 'Она была потрясена, когда финальное выступление отменили.'),
    word('be blown away by', 'быть поражённым или очень впечатлённым', 76, 78, 'be blown away by my Christmas gift', 'быть поражёнными моим рождественским подарком', 'The audience was blown away by the final song.', 'Зрители были поражены последней песней.'),
    word('crude approximation', 'грубое подобие, неточная копия', 81, 83, 'this crude approximation instead of my heart’s desire', 'это грубое подобие вместо того, о чём я мечтала', 'The sketch is a crude approximation of the finished design.', 'Набросок лишь приблизительно передаёт готовый дизайн.'),
    word('appreciative of', 'благодарный за что-то, умеющий это ценить', 83, 85, 'more appreciative of my father’s efforts', 'лучше ценить усилия отца', 'I was appreciative of the time you spent helping me.', 'Я был благодарен за время, которое ты потратил, помогая мне.'),
  ],
  exercises: [
    { title: 'Эмоция и причина', en: '“I thought the box was too large, and I felt uneasy.” Does this support “I hated the box because it was too large”?', ru: 'Подтверждает ли первое предложение и силу чувства, и указанную причину?', answerEn: 'No. “Uneasy” means worried or uncomfortable. The sentence mentions size and a feeling without clearly naming size as the cause.', answerRu: 'Нет. Uneasy передаёт тревогу или неудобство. О размере и чувстве сказано рядом, но из этого нельзя вывести ненависть или её причину.' },
    { title: 'Вывод из трёх подсказок', en: '“The new uniform was expensive. Dad looked at the price twice. He took my cousin’s old uniform home to mend.” What likely shaped his decision?', ru: 'Что, скорее всего, повлияло на решение отца? Назови три опоры для вывода.', answerEn: 'The cost likely shaped the decision. The narrator mentions the price, the father checks it twice, and he chooses to repair an old uniform.', answerRu: 'Вероятно, дело в цене. Новая форма дорогая, отец дважды смотрит на цену и берёт старую форму, чтобы починить её.' },
    { title: 'Какая мысль объединяет финал?', en: '“At nine, I was embarrassed by the old coat. Years later, I learned my aunt had stayed up late repairing it. Now I wear it gladly.” What is the main idea?', ru: 'Сформулируй мысль, которая охватывает начало и конец.', answerEn: 'Learning what her aunt had done changed the narrator’s view of the same coat.', answerRu: 'Когда рассказчица узнала, сколько усилий вложила тётя, её отношение к тому же пальто изменилось.' },
  ],
};
