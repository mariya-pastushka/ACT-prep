import { sourceRefs } from './english-passage.mjs';

const lessons = [
  {
    title: 'Читай предлог вместе с соседними словами',
    enTitle: 'Prepositions in context',
    explain: [
      'В №1 надо связать две вещи. После associate называем первую, после with — вторую. В №14 предлог относится к cold winter nights. Вся группа обозначает, в какие ночи плед согреет.',
      'Сравни знакомые сочетания at night и on cold nights. Первое обозначает ночное время вообще, второе описывает конкретный вид ночей.',
    ],
    formula: 'associate X with Y · at night · on cold winter nights',
    examples: [['“I associate this scent with autumn.”', '«Этот запах у меня ассоциируется с осенью». With указывает, с чем я его связываю.'], ['“We study at night, and we use blankets on cold nights.”', '«Мы занимаемся по ночам, а в холодные ночи укрываемся пледами». Слова cold nights уточняют, о каких ночах речь.']],
    notebook: 'Допиши собственные примеры к associate … with … и on … nights.',
    en: 'Check the whole expression when choosing a preposition. The verb can set the pattern, as in associate with, and the time phrase can set it, as in on cold nights.',
    example: 'I associate this song with winter. I like to play it on snowy nights.',
  },
  {
    title: 'Проверь форму глагола и предмет, к которому отсылает местоимение',
    enTitle: 'Irregular participles and pronoun agreement',
    explain: [
      'В №4 фраза easily taught описывает навык, которому можно научить. Мысленно восстанови can be taught и проверь третью форму teach.',
      'В №7 вопрос «завершение чего?» ведёт к several projects. Нужна форма their. Сокращение it’s можно развернуть в it is или it has, а its показывает принадлежность одному предмету.',
    ],
    formula: 'teach → taught → taught. One project → its completion. Several projects → their completion.',
    examples: [['“The stitch can be taught in five minutes.”', '«Этой петле можно научить за пять минут». После can be идёт taught.'], ['“The hook lost its handle. The hooks lost their handles.”', '«Крючок потерял свою ручку. Крючки потеряли свои ручки». Количество крючков помогает выбрать its или their.']],
    notebook: 'Выпиши три формы teach. Рядом придумай одну фразу с its и одну с it’s, затем разверни сокращение.',
    en: 'Use the past participle for the passive form. For a possessive, find what owns or has the thing and check whether it is singular or plural.',
    example: 'The students learned two stitches. Their teacher had taught both before.',
  },
  {
    title: 'Проверяй краткость и точное значение',
    enTitle: 'Concision and comparisons',
    explain: [
      'В №2 both genders и all ages дают две разные характеристики. Дополнительное объяснение первой повторяет смысл. В №6 нужно прочитать замену вместе с that tell you. Фраза buy pattern books даёт нужную информацию и соединяется с продолжением.',
      'В №8 наборы можно посчитать по одному, поэтому в этом задании подходит fewer than. Для количества материала можно сказать less yarn. No fewer than three означает «три или больше».',
    ],
    formula: 'Вставь вариант → перечитай соседние слова → проверь повтор. Countable items → fewer than. Amount → less.',
    examples: [['“Buy a pattern book that explains the steps.”', '«Купи книгу со схемами, где объясняются шаги». Каждая часть добавляет своё.'], ['“I have fewer than three hooks and less yarn than you.”', '«У меня меньше трёх крючков и меньше пряжи, чем у тебя». Крючки считаются поштучно.']],
    notebook: 'Скажи по-английски «меньше трёх наборов», «меньше пряжи» и «не меньше трёх наборов».',
    en: 'Read the replacement in the full sentence and remove repeated ideas. Use “fewer than” with countable items in this ACT comparison.',
    example: 'You need fewer than five hooks. The new pattern uses less yarn.',
  },
  {
    title: 'Ставь знаки на границах смысловых частей',
    enTitle: 'Clause boundaries and punctuation',
    explain: [
      'В №5 и №13 once вводит зависимую часть. Она задаёт время, а главная часть говорит, что произойдёт. Если часть с once стоит первой, после неё ставят запятую.',
      'В №9 фраза to vary сразу объясняет цель покупки и читается вместе с ней. В №10 ranging from X to Y целиком добавляет описание к уже законченной мысли. Запятая может стоять перед всей группой, а ranging from остаётся вместе.',
    ],
    formula: 'Once + условие времени, затем главная часть. Действие + to + цель. Законченная мысль, затем ranging from X to Y.',
    examples: [['“Once you learn the basics, weaving feels easier.”', '«Как только освоишь основы, ткать станет легче». После вводной части идёт полный ответ на вопрос «что произойдёт?».'], ['“We bought yarn to make hats. The hats come in several sizes, ranging from small to large.”', '«Мы купили пряжу, чтобы связать шапки. Шапки бывают разных размеров, от маленьких до больших». Цель идёт сразу после yarn, а запятая открывает описание диапазона.']],
    notebook: 'Подчеркни часть с once, оборот цели и группу ranging from X to Y. Проверь знаки на их границах.',
    en: 'Find the main clause before choosing punctuation. Read a purpose phrase with its verb, and keep “ranging from” together inside a descriptive phrase.',
    example: 'Once you finish the scarf, you can use it. I bought the yarn to make it last month.',
  },
  {
    title: 'Проверяй, на что ссылается новое предложение',
    enTitle: 'Sentence placement and transitions',
    explain: [
      'В №11 слова These hooks требуют понятной ссылки. Предложение 3 называет большие крючки, а предложение 6 объясняет их преимущество. Поэтому 6 лучше поставить сразу после 3.',
      'В №12 проверь обе стороны перехода. Предыдущий абзац заканчивается простым набором для новичка, а следующий объясняет, почему вязание удобно как хобби. Фраза про простые и недорогие материалы связывает эти идеи.',
    ],
    formula: 'Предыдущая мысль → ссылка или переход → следующая мысль.',
    examples: [['“The large brushes hold more paint. These brushes cover wide areas quickly.”', '«Большие кисти удерживают больше краски. Эти кисти быстро покрывают широкие участки». Сразу ясно, о каких кистях говорит these.'], ['“A pencil and paper are enough. With these simple materials, you can get started today.”', '«Достаточно карандаша и бумаги. С этими простыми материалами можно начать сегодня». Переход подхватывает материалы и ведёт к теме начала занятий.']],
    notebook: 'Передвинь предложение 6 после 3 на черновике. Прочитай 3, 6, 4 и 5 по порядку и подпиши, о каких крючках говорится в каждом.',
    en: 'Place a sentence near the idea it refers to. A transition should carry an idea from the previous paragraph into the new one.',
    example: 'The last paragraph names basic supplies. The next begins with “With these simple materials,” which refers back to those supplies.',
  },
  {
    title: 'Связывай решение с задачей автора',
    enTitle: 'Relevance and rhetorical purpose',
    explain: [
      'В №3 сам факт уже объявлен верным. Оцени, поможет ли он рассказать о вязании как хобби. История о заработке во время голода отвлекает от этой цели.',
      'В №15 вопрос задаёт новую цель — показать возможность продажи изделий. Цена материалов и примеры готовых вещей отвечают на вопросы начинающего. Для коммерческой цели нужны сведения о том, например, кто купит изделие, где и по какой цене.',
    ],
    formula: 'Назови цель → определи, какие сведения ей нужны → найди эти сведения в тексте.',
    examples: [['“A beginner can start with a pencil. The museum opened in 1910.”', '«Новичок может начать с карандаша. Музей открылся в 1910 году». Второе предложение не помогает объяснить, как начать рисовать.'], ['“Yarn costs $8. At local markets, buyers pay $30 for a finished scarf.”', '«Пряжа стоит 8 долларов. На местных ярмарках покупатели платят 30 за готовый шарф». Вторая фраза даёт сведения о продаже.']],
    notebook: 'Для №15 выпиши, что автор сообщает о расходах. Затем назови один факт о продажах, который мог бы поддержать новую цель.',
    en: 'Ask what the writer is trying to accomplish. For an add-or-delete question, check the proposed detail against that purpose. For a hypothetical goal, look for evidence specific to it.',
    example: 'A tutorial can list materials and steps. To explain commercial potential, it would need information about buyers, demand, or selling prices.',
  },
];

export const lecture = lessons.map(({ enTitle, en, example }) => ({ title: enTitle, en, example }));
export const lectureRu = lessons.map(({ title, explain, formula, examples, notebook }) => ({ title, explain, formula, examples, notebook }));

function word(word, meaning, id, context, contextRu, example, exampleRu) {
  return { word, meaning, source: sourceRefs[id], context, contextRu, example, exampleRu };
}

export const vocabularyNotebook = {
  title: 'Словарь к тексту о вязании крючком',
  intro: 'Перейди к фразе в тексте. Затем попробуй перевести новый пример и сверь свой перевод.',
  vocabulary: [
    word('crochet with a hook', 'вязать крючком', 'definition', 'by twisting yarn or thread with a hook', 'переплетая пряжу или нить крючком', 'She crochets blankets with a large hook.', 'Она вяжет пледы большим крючком.'),
    word('yarn', 'пряжа для вязания', 'definition', 'yarn or thread', 'пряжа или нить', 'This scarf needs two balls of yarn.', 'Для этого шарфа нужны два мотка пряжи.'),
    word('associate with', 'ассоциировать с кем-либо или чем-либо', 'audience', 'associate it by older women (with in the corrected sentence)', 'ассоциируют это с пожилыми женщинами (в №1 выбираем with)', 'People associate wool with warmth.', 'У людей шерсть ассоциируется с теплом.'),
    word('time-honored', 'проверенный временем, давний и уважаемый', 'learn', 'Time-honored and easily taught to all', 'проверенное временем и доступное для обучения', 'We learned a time-honored method of breadmaking.', 'Мы освоили традиционный способ выпечки хлеба.'),
    word('pick up a skill', 'освоить навык, научиться чему-то', 'learn', 'an easy hobby to pick up', 'увлечение, которое легко освоить', 'He picked up the basics during one lesson.', 'Он освоил основы за один урок.'),
    word('be a snap', 'быть очень лёгким (разговорное выражение)', 'stitches', 'Picking up the more advanced ones is a snap.', 'Освоить более сложные элементы очень легко.', 'Assembling the kit was a snap.', 'Собрать набор оказалось очень просто.'),
    word('pattern book', 'книга со схемами или инструкциями по вязанию', 'patterns', 'buy pattern books (the answer to Question 6)', 'купить книги со схемами (ответ на №6)', 'The pattern book includes a simple scarf.', 'В книге есть схема простого шарфа.'),
    word('starter kit', 'набор для начинающих', 'cost', 'no fewer than three starter kits', 'как минимум три набора для начинающих', 'The starter kit comes with scissors.', 'В набор для начинающих входят ножницы.'),
    word('proficient', 'умелый, хорошо владеющий навыком', 'types', 'As you grow more proficient', 'по мере того как ты становишься умелее', 'She became proficient at reading patterns.', 'Она научилась хорошо читать схемы.'),
    word('range from … to …', 'варьироваться от … до …', 'sizes', 'ranging from very small to very large (after correcting Question 10)', 'от очень маленьких до очень больших (после правки в №10)', 'The lessons range from easy to challenging.', 'Уроки варьируются от простых до сложных.'),
    word('strand', 'одна нить или прядь', 'large', 'two strands of yarn', 'две нити пряжи', 'Hold two strands together as you work.', 'Во время работы держи две нити вместе.'),
    word('cherished keepsake', 'дорогая сердцу памятная вещь', 'keepsake', 'you have a cherished keepsake', 'у тебя остаётся дорогая сердцу памятная вещь', 'The handmade scarf became a cherished keepsake.', 'Шарф ручной работы стал дорогой сердцу памятной вещью.'),
    word('afghan', 'вязаное одеяло или плед', 'winter', 'an afghan to keep you warm', 'плед, который тебя согреет', 'We folded the afghan over the back of the sofa.', 'Мы сложили плед и положили его на спинку дивана.'),
  ],
  exercises: [
    { title: 'Соедини две части с once', en: 'Complete the sentence by choosing a period or a comma after pattern. “Once you understand the pattern __ making the scarf is easy.”', ru: 'Какой знак соединит указание времени с главной мыслью?', answerEn: 'Use a comma. “Once you understand the pattern, making the scarf is easy.”', answerRu: 'После pattern нужна запятая. Часть с once отвечает на вопрос «когда станет легко?», а making the scarf is easy завершает мысль.' },
    { title: 'К чему относится these?', en: 'Put “These needles are best for delicate work” after the sentence it refers to. 1. Large needles make wide stitches. 2. Fine needles make tighter stitches.', ru: 'Выбери место для предложения. Какое слово помогает найти его соседа?', answerEn: 'After Sentence 2. “These needles” refers to fine needles.', answerRu: 'После предложения 2. Там описаны тонкие спицы, подходящие для тонкой работы. These needles отсылает именно к ним.' },
    { title: 'Что нужно для коммерческой цели?', en: 'Which fact better supports selling scarves? “The scarf uses one ball of yarn.” / “Customers paid $20 for each scarf at the craft fair.”', ru: 'Какая фраза сообщает о продаже? Объясни, что даёт другая фраза.', answerEn: 'The second fact gives both a price and a place where customers bought the scarves.', answerRu: 'Вторая фраза сообщает цену и место продажи. Первая помогает понять, сколько материала нужно для одного шарфа.' },
  ],
};
