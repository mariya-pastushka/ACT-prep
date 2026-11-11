const lessons = [
  {
    title: 'Проверяй, насколько сильное утверждение делает вариант',
    enTitle: 'Match the strength of the claim',
    explain: ['В №1 most confusing требует выделить один аккорд как самый трудный. В №7 спрашивают только, показался ли этот аккорд трудным. Одна цитата поддерживает второй вывод, а для первого понадобилось бы сравнение со всеми остальными.', 'В №9 масштаб другой: вопрос обо всём рассказе. Деталь про Виктора верна, но в ответе должны поместиться и впечатления от джаза, и попытки играть.'],
    formula: 'Отметь слова most, only, initially или overall. Проверь, подтверждает ли текст именно такой вывод.',
    examples: [['“Each chord was a cryptic message I had to decode and then understand.”', '«Каждый аккорд был зашифрованным сообщением, которое нужно было разгадать и понять». Фраза описывает общую трудность.'], ['“This chord took me longer than any other.”', '«На этот аккорд у меня ушло больше времени, чем на любой другой». Такая формулировка уже сравнивает его с остальными.']],
    notebook: 'К одному доказательству сформулируй два вывода: точный и слишком сильный. Подчеркни слово, из-за которого второй выходит за пределы текста.',
    en: 'Check words like most, only, and overall before choosing. One example of difficulty does not rank it above all others. A whole-passage answer should cover the opening, middle, and ending.',
    example: '“This puzzle was hard” supports difficulty. “This was the hardest puzzle” also needs a comparison.',
  },
  {
    title: 'Расшифровывай образ по соседним фразам',
    enTitle: 'Read figurative language in context',
    explain: ['В №2 прочитай слова перед образом: автор просит объяснений. Затем прочитай, что он узнал после него. Так magician’s secrets превращается в приёмы игры на джазовых инструментах.', 'В №5 сравниваются звук и вкус. Лёгкая горчинка делает вкус интереснее, а неожиданное звучание делает джаз интереснее для слушателя. В №6 смысл игры «минуя мозг» раскрывается в соседнем абзаце.'],
    formula: 'Найди образ → прочитай соседние предложения → замени образ простыми словами.',
    examples: [['“The recipe was a puzzle until I learned what each step did.”', '«Рецепт казался загадкой, пока я не понял, зачем нужен каждый шаг». Puzzle передаёт трудность понимания.'], ['“The rhythm felt like a conversation.”', '«Ритм напоминал разговор». В контексте это может означать, что музыкальные фразы будто отвечали друг другу.']],
    notebook: 'Объясни сравнение с горчинкой одним предложением без слов candy и bitterness.',
    en: 'Use nearby sentences to turn a metaphor into a plain meaning. For an analogy, find the shared quality between the two things being compared.',
    example: 'If a recipe “looks like a puzzle,” the speaker probably finds its instructions hard to understand.',
  },
  {
    title: 'Привязывай сроки и эмоции к нужному моменту',
    enTitle: 'Track actions and changes over time',
    explain: ['Для №4 свяжи годы с хотел купить, а месяцы с разучивал. Срок рядом с ключевым словом может относиться к другому действию.', 'Для №10 нужны два доказательства: сначала аккорды приходилось долго разбирать, затем это занимало лишь несколько секунд. But I made progress прямо отмечает поворот.'],
    formula: 'Момент → действие → короткая цитата. Если вариант описывает два момента, проверь оба.',
    examples: [['“For years, I wanted my own copy”', '«Годами я хотел свою копию». Это срок до покупки.'], ['“Chords that initially took me twenty seconds to figure out started to take only a few.”', '«Аккорды, на которые сперва уходило двадцать секунд, стали занимать всего несколько». Это измеримый признак прогресса.']],
    notebook: 'Запиши в две строки, что было трудно вначале и что получилось позже. Добавь по одному выражению из текста.',
    en: 'Attach each time phrase to its action. For a question about change, look for one detail from the early stage and another from the later stage.',
    example: '“I wanted lessons for years. I practiced for months.” The wish lasted years, and practice lasted months.',
  },
];

export const readingLecture = lessons.map(({ enTitle, en, example }) => ({ title: enTitle, en, example }));
export const readingLectureRu = lessons.map(({ title, explain, formula, examples, notebook }) => ({ title, explain, formula, examples, notebook }));

const word = (name, meaning, from, to, context, contextRu, example, exampleRu) => ({
  word: name, meaning, from, to, context, contextRu, example, exampleRu,
});

export const readingNotebook = {
  title: 'Словарь к Conquering Jazz',
  intro: 'Прочитай сочетание целиком, затем найди его в тексте и попробуй восстановить значение без перевода.',
  vocabulary: [
    word('intrigued and mystified', 'заинтригованный и озадаченный', 1, 2, 'intrigued and slightly mystified by the world of jazz', 'увлечённый и слегка озадаченный миром джаза', 'I was intrigued and mystified by the strange map.', 'Странная карта меня заинтриговала и озадачила.'),
    word('show off', 'демонстрировать что-то, чтобы произвести впечатление', 24, 25, 'show off a new chord I had just “invented”', 'похвастаться новым аккордом, который я только что «изобрёл»', 'She showed off the model she built.', 'Она с гордостью показала модель, которую собрала.'),
    word('divulge', 'раскрыть, выдать информацию или секрет', 45, 47, 'asked him to divulge the “magician’s secrets” of jazz', 'попросил его раскрыть «секреты фокусника» в джазе', 'He refused to divulge the ending.', 'Он отказался раскрыть концовку.'),
    word('embellishment', 'украшение, выразительная добавленная деталь', 48, 50, 'just the specific details and embellishments', 'только конкретные детали и украшения', 'The pianist added a few embellishments to the tune.', 'Пианист добавил к мелодии несколько украшений.'),
    word('go separate ways', 'разойтись, пойти каждый своим путём', 59, 61, 'Victor and I had gone our separate ways', 'мы с Виктором разошлись и пошли каждый своим путём', 'After graduation, we went our separate ways.', 'После выпуска наши пути разошлись.'),
    word('pluck away at', 'долго и упорно щипать струны, разучивая что-либо', 62, 64, 'plucked away at these strange, new combinations', 'снова и снова перебирал струны, разучивая эти новые непривычные сочетания', 'He plucked away at the tune until he knew it by heart.', 'Он разучивал мелодию, перебирая струны, пока не выучил её наизусть.'),
    word('cryptic message', 'загадочное или зашифрованное сообщение', 63, 65, 'Each chord was a cryptic message I had to decode', 'каждый аккорд был зашифрованным сообщением, которое нужно было разгадать', 'The note contained a cryptic message.', 'В записке было загадочное сообщение.'),
    word('figure out', 'понять, разобраться, найти решение', 67, 68, 'Chords that initially took me twenty seconds to figure out', 'аккорды, на разбор которых у меня поначалу уходило двадцать секунд', 'We figured out how to open the lock.', 'Мы разобрались, как открыть замок.'),
    word('bypass', 'обойти, миновать', 72, 75, 'bypassing my brain entirely', 'словно совсем минуя мозг', 'The path bypasses the busy road.', 'Тропа обходит оживлённую дорогу.'),
  ],
  exercises: [
    { title: 'Какой вывод подтверждается?', en: '“This passage was challenging. Every passage in the book took time.” Can you conclude that this passage was the hardest?', ru: 'Можно ли заключить, что этот текст был самым сложным? Назови слова, на которые опираешься.', answerEn: 'No. “Challenging” says the passage was difficult. There is no comparison that ranks it above the others.', answerRu: 'Нет. Challenging означает «трудный». Для вывода «самый трудный» нужно сравнение с остальными текстами.' },
    { title: 'Что означает образ?', en: '“The instructions were a maze. I kept losing my place and rereading the steps.” What does maze suggest?', ru: 'Объясни maze по второй фразе. Что происходило с читателем?', answerEn: 'The instructions were hard to follow. The reader kept losing their place and rereading.', answerRu: 'В инструкции было трудно ориентироваться. Читатель постоянно терял нужное место и перечитывал шаги. Это объясняет образ лабиринта.' },
    { title: 'Как долго он работал?', en: '“I wanted a guitar for two years. After buying it, I practiced for six months.” How long did he practice?', ru: 'Назови срок практики и глагол, который это подтверждает.', answerEn: 'Six months. The phrase “for six months” belongs to “I practiced.”', answerRu: 'Шесть месяцев. Этот срок связан с practiced. Два года он хотел купить гитару.' },
  ],
};
