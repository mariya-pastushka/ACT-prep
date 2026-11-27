const lessons = [
 {
  title: 'Главная мысль текста и абзаца',
  explain: [
   'Сначала выясни масштаб вопроса. В №2 нужен весь текст. Кофейня проходит путь от места общения до места, где можно работать вне офиса. Эти перемены помогают понять, как развивается общество.',
   'В №4 нужен только третий абзац. История Венеции и Лондона, доступ для мужчин разных слоёв и рост числа заведений вместе объясняют популярность европейских кофеен.',
  ],
  formula: 'Назови тему, затем скажи, что автор о ней показывает. Проверь, сколько деталей объясняет выбранный ответ.',
  examples: [['The passage follows cafés as their role changes from meeting places to workspaces.', 'Текст прослеживает, как меняется роль кафе. Сначала там встречаются, позже используют и для работы.']],
  notebook: 'Запиши по одной фразе о задаче каждого абзаца. Из этих фраз собери общую мысль в одно предложение.',
  en: ['Main idea and scope', 'A whole-passage answer covers the changing roles of coffeehouses. A paragraph answer explains the details within that paragraph.', 'The passage shows cultural adaptation. Paragraph 3 illustrates access and popularity in Europe.'],
 },
 {
  title: 'Хронология и причинно-следственная связь',
  explain: [
   'Одна эпоха может появляться в нескольких ответах, поэтому привяжи дату к событию. В этом тексте 1475 год относится к первой упомянутой продаже кофе в Kiva Han, 1554 — к появлению кофейни как места встреч, а возвращение солдат после Второй мировой — к американскому формату.',
   'В №8 автор прямо пишет The result was. Прочитай назад до причины. Автомобиль меняет использование общественных мест, затем появляется drive-in.',
  ],
  formula: 'Дата → событие. Событие или изменение → названный результат.',
  examples: [['As more people traveled by car, shops began to offer drive-in service.', 'По мере роста числа поездок на машине магазины начали обслуживать приезжающих на автомобилях.']],
  notebook: 'Нарисуй три метки: 1475 → 1554 → после Второй мировой. Подпиши событие у каждой.',
  en: ['Chronology and cause', 'Tie dates to the events they describe. Look for wording such as “the result was” to verify an explicit link between events.', 'The automobile reshaped public space, helping produce the drive-in coffee shop.'],
 },
 {
  title: 'Значение фразы в контексте',
  explain: [
   'В №6 brightly lit и garishly colored описывают вид интерьера. Фразы newness and hope и visual emblem объясняют, что этот интерьер выражал для послевоенной Америки.',
   'В №7 образное playground относится к Лас-Вегасу как городу развлечений. Слово eschewed помогает понять, что материал или предмет после него перечислен как деталь старого оформления, от которой отказались.',
  ],
  formula: 'Прочитай выражение в предложении, затем проверь его смысл по соседним строкам.',
  examples: [['The town called its stadium a symbol of a fresh start.', 'Город назвал стадион символом нового начала. Конкретное здание выражает более общую идею.']],
  notebook: 'Для №6 выпиши отдельно описание интерьера и фразу, поясняющую его символический смысл.',
  en: ['Meaning and function in context', 'Check how the surrounding sentences interpret a description. A figurative noun can describe a place, and a visual detail can represent an idea.', '“Visual emblem” explains why the bright décor matters to the paragraph.'],
 },
 {
  title: 'Чьё мнение и какой вывод',
  explain: [
   'В №9 Critics may see обозначает голос критиков. Их тревожит вторжение рабочих дел в личную и общественную жизнь. При пересказе должны сохраниться и источник вторжения, и то, чего оно касается.',
   'В №10 вывод опирается на сцену с ноутбуком в рабочее время. Она показывает, что часть работы можно выполнять и вне офиса. Слова unique, always или категорическое if not for требуют дополнительных доказательств.',
  ],
  formula: 'Мнение → найди говорящего. Вывод → назови факт и один шаг от него к ответу.',
  examples: [['Critics say work email has begun to take up family time.', 'Критики говорят, что рабочая почта стала отнимать семейное время. Слова critics say показывают, кому принадлежит оценка.']],
  notebook: 'Напиши два предложения о финале. Первым передай опасение критиков, вторым объясни, как пример с ноутбуком показывает изменение в работе.',
  en: ['Viewpoint and inference', 'Notice who holds the view. For an inference, choose the answer with the shortest defensible path from the evidence.', 'Laptop use in a coffeehouse during office hours supports a more flexible idea of the workplace.'],
 },
];

export const readingLecture = lessons.map(({en: [title, en, example]}) => ({title, en, example}));
export const readingLectureRu = lessons.map(({en, ...lesson}) => lesson);

function word(word, meaning, from, to, context, contextRu, example, exampleRu) {
 const reference = from === to ? `строка ${from}` : `строки ${from}–${to}`;
 const source = {id: `source-line-${from}`, ru: `В тексте: ${reference}`};
 return {word, meaning, source, context, contextRu, example, exampleRu};
}

export const readingNotebook = {
 title: 'Вокабуляр к From Kiva Han to Caribou Coffee',
 intro: 'Для каждого выражения есть перевод, фраза из текста и новый пример. Нажми на номер строки, чтобы найти выражение в отрывке.',
 vocabulary: [
  word('social sites', 'места, где люди встречаются и общаются', 5, 7, 'developed as social sites', 'стали развиваться как места общения', 'Markets can become important social sites.', 'Рынки могут становиться важными местами общения.'),
  word('firmly entrenched', 'прочно укоренившийся, ставший частью привычной жизни', 19, 21, 'the coffeehouse is firmly entrenched', 'кофейни прочно укоренились', 'The custom is firmly entrenched in the town.', 'Этот обычай прочно укоренился в городе.'),
  word('dissemination of ideas', 'распространение идей', 21, 21, 'and dissemination of ideas', 'и распространения идей', 'Public lectures help with the dissemination of ideas.', 'Открытые лекции помогают распространять идеи.'),
  word('social strata', 'общественные слои', 31, 33, 'open to men of various social strata', 'открыты для мужчин разных общественных слоёв', 'The festival drew people from many social strata.', 'Фестиваль привлёк людей из многих общественных слоёв.'),
  word('egalitarianism', 'принцип равенства людей', 33, 33, 'equated with egalitarianism and reform', 'отождествлялись с идеями равенства и реформ', 'Egalitarianism shaped the club’s open membership policy.', 'Идея равенства определила правила клуба, открытого для всех.'),
  word('deplore', 'резко осуждать, считать прискорбным', 34, 35, 'Charles II famously deplored the establishments', 'Карл II, как известно, резко осуждал эти заведения', 'Residents deplored the loss of their local library.', 'Жители резко осудили закрытие местной библиотеки.'),
  word('clientele', 'клиентура, круг посетителей', 41, 42, 'the clientele who populated these meeting places', 'посетители, наполнявшие эти места встреч', 'The café has built up a loyal clientele.', 'У кафе сформировался круг преданных посетителей.'),
  word('affiliated with', 'связанный с группой, организацией или взглядами', 43, 45, 'became affiliated with political leanings', 'стали ассоциироваться с политическими взглядами', 'The research team is affiliated with a university.', 'Исследовательская команда связана с университетом.'),
  word('replicate', 'воссоздать, повторить', 51, 52, 'sought to replicate the coffeehouse experiences', 'старались воссоздать знакомый опыт посещения кофеен', 'The team tried to replicate the earlier results.', 'Команда попыталась воспроизвести предыдущие результаты.'),
  word('on the go', 'в движении, на бегу', 55, 55, 'the increasingly on-the-go customer', 'клиент, который всё чаще находится в пути', 'She eats a quick breakfast when she is on the go.', 'Когда она в пути, она быстро завтракает.'),
  word('eschew', 'сознательно избегать, отказаться от', 62, 64, 'googie architecture eschewed many of the elegant trappings', 'архитектура гуги отказалась от многих изящных деталей оформления', 'The designer eschewed heavy ornament.', 'Дизайнер отказался от тяжеловесного декора.'),
  word('garishly colored', 'окрашенный в чрезмерно яркие, броские цвета', 68, 69, 'brightly lit, almost garishly colored décor', 'ярко освещённый интерьер почти кричащих цветов', 'The room had a garishly colored carpet.', 'В комнате лежал ковёр кричащей расцветки.'),
  word('visual emblem', 'зримый символ, наглядное воплощение идеи', 72, 73, 'a visual emblem of a nation’s desire', 'зримый символ стремления страны', 'The new bridge became a visual emblem of the city.', 'Новый мост стал зримым символом города.'),
  word('ubiquitous', 'повсеместный, встречающийся повсюду', 75, 76, 'so ubiquitous that one may well expect them to soon outnumber residential homes', 'так распространены, что можно ожидать, что их вскоре станет больше, чем жилых домов', 'Smartphones are ubiquitous on the subway.', 'В метро смартфоны встречаются повсюду.'),
  word('pore over', 'внимательно изучать, подолгу разглядывать', 78, 80, 'poring over a laptop computer', 'сосредоточенно изучает что-то на экране ноутбука', 'They pored over the maps before setting out.', 'Перед выходом они внимательно изучали карты.'),
  word('regimented', 'строго регламентированный, подчинённый распорядку', 82, 83, 'the unsatisfying, regimented life of the Big Company', 'не приносящая удовлетворения жизнь по правилам большой компании', 'The training program followed a regimented schedule.', 'У программы обучения был жёсткий распорядок.'),
  word('abdication', 'отказ от роли, полномочий или обязанностей', 85, 86, 'a complete abdication of one’s responsibilities', 'полный отказ от своих обязанностей', 'Leaving without a handover would be an abdication of responsibility.', 'Уйти, не передав дела, означало бы отказаться от ответственности.'),
  word('corporate concerns', 'дела или интересы компаний', 88, 88, 'by corporate concerns', 'со стороны корпоративных интересов', 'Corporate concerns began to shape the project.', 'На проект начали влиять интересы компаний.'),
  word('cultural environs', 'окружающая культурная среда', 90, 90, 'adapting to its cultural environs', 'приспосабливаясь к окружающей культурной среде', 'The theatre adapts to its cultural environs.', 'Театр приспосабливается к своей культурной среде.'),
 ],
 exercises: [
  {
   title: 'Факт или прогноз?',
   en: '“The shops are so common that they may soon outnumber houses.” Do shops already outnumber houses?',
   ru: 'Сравни may soon и already. Что утверждает фраза?',
   answerEn: 'The sentence predicts a possibility. It gives no current comparison of the two totals.',
   answerRu: 'May soon означает «возможно, скоро». Это прогноз. Текущего соотношения магазинов и домов фраза не сообщает.',
  },
  {
   title: 'Кто это сказал?',
   en: '“A café offers freedom from the office. Critics worry that it brings work into leisure time.” What concern belongs to critics?',
   ru: 'Найди слова, которые показывают смену говорящего.',
   answerEn: 'Critics are concerned about work intruding on leisure time.',
   answerRu: 'Слова Critics worry вводят вторую мысль. Критики переживают, что работа занимает время отдыха.',
  },
  {
   title: 'Проверь смысл глагола',
   en: '“The new café eschewed brass rails and used steel instead.” Which material did it choose?',
   ru: 'Как глагол eschew меняет смысл списка материалов?',
   answerEn: 'It chose steel. It deliberately avoided brass rails.',
   answerRu: 'Выбрали сталь. Eschewed означает «отказалось от», поэтому латунные перила относятся к отвергнутому варианту.',
  },
 ],
};
