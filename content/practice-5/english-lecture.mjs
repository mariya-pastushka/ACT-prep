import { sourceRefs } from './english-passage.mjs';

const lessons = [
  {
    title: 'Найди основу и расставь знаки', enTitle: 'Introductory phrases and paired punctuation',
    explain: ['В №61 сначала найди he oversaw — «он руководил». Фраза As president … только объясняет, в какой роли он это делал. После длинной вводной фразы нужна запятая.', 'В №62 уточнение the Soviet Union вставлено в середину предложения. Два тире показывают, где вставка начинается и заканчивается. Убери вставку на время и перечитай всё предложение: перечисленные трудности по-прежнему относятся к глаголу are.'],
    formula: 'Вводная фраза, + основа предложения. Уточнение внутри предложения: — уточнение —.',
    examples: [['“As a new volunteer, Maya listened carefully.”', '«Будучи новым волонтёром, Майя внимательно слушала». Основа — Maya listened.'], ['“The project’s leader—Maya—opened the meeting.”', '«Руководитель проекта, Майя, открыла встречу». Прочитай фразу без вставки: The project’s leader opened the meeting.']],
    notebook: 'В первом примере обведи запятую и подчеркни основу. Во втором закрой вставку пальцем и прочитай то, что осталось.',
    en: 'Use a comma after a long introductory phrase. When an explanatory phrase interrupts a sentence and starts with a dash, close it with a second dash.',
    example: 'As team captain, she spoke first. Her deputy—Sam—spoke next.',
  },
  {
    title: 'Разбери, какую работу выполняет каждое слово', enTitle: 'Possession, pronouns, and word groups',
    explain: ['В №63 America’s отвечает на вопрос «чей?». Вместе most powerful отвечает на вопрос «какой?». Читай такие группы целиком: America’s most powerful office.', 'В №64 he — тот, кто выполнил работу: the work (that) he has done. В №71 глагол focus сначала получает объект all his efforts, а затем abroad указывает, куда они направлены.'],
    formula: 'Чей? → ’s. Кто делает? → he, she, they. Глагол → объект → место: focus all his efforts abroad.',
    examples: [['“The museum’s most valuable painting is upstairs.”', '«Самая ценная картина музея — наверху». The museum’s = «музея», most valuable = «самая ценная».'], ['“I read the note she wrote. Then I called her.”', '«Я прочитал записку, которую она написала. Затем я ей позвонил». She сама написала, а her получает звонок.']],
    notebook: 'Запиши свою фразу с ’s и most. В следующей фразе найди местоимение, назови его глагол и объясни, выполняет ли оно действие.',
    en: 'Protect word groups that work as units. Use a possessive apostrophe to show whose, a subject pronoun for the doer, and keep a simple direct object together.',
    example: 'He spends most of his time abroad. “Most of his time” is the object; “abroad” gives the place.',
  },
  {
    title: 'Поставь уточнение рядом с нужным словом', enTitle: 'Placement and idiomatic combinations',
    explain: ['В №67 слова on foreign oil отвечают на вопрос «зависимость от чего?», поэтому идут сразу после dependence. Длинная фраза о времени читается отдельно.', 'В №73 полезно учить не один глагол agree, а фразу целиком. Agree with somebody — «быть согласным с кем-то». Agree to the terms — «согласиться на условия». Agree that вводит полную мысль. Ключ выбирает with, но «ценить благотворительную работу» естественнее выразить через appreciate.'],
    formula: 'dependence on something · agree with a person or view · agree to a plan · agree that + законченное сообщение.',
    examples: [['“The new system reduces our dependence on imported fuel.”', '«Новая система уменьшает нашу зависимость от импортного топлива». On imported fuel относится к dependence.'], ['“I agree with her. I agreed to the proposal. We agree that the work matters.”', '«Я согласен с ней. Я согласился на предложение. Мы согласны, что работа важна». Продолжение подсказывает, какую конструкцию выбрать.']],
    notebook: 'Закончи три фразы: I agree with …, I agreed to …, I agree that …. В каждой укажи, что именно ты имеешь в виду.',
    en: 'Place a phrase next to the word it completes. Learn common word combinations with a meaning and example, such as dependence on and agree with.',
    example: 'They agreed to a plan designed to reduce dependence on foreign oil.',
  },
  {
    title: 'Проверяй значение глагола в целом предложении', enTitle: 'Word choice and negative prompts',
    explain: ['В №66 promoted a policy означает «продвигал политику». Сравни, как меняет смысл questioned a policy — «поставил политику под сомнение». Используй соседние предложения, чтобы понять, какое действие описывает автор.', 'В №68 варианты похожи на вид, но find («найти») даёт found, а found («основать») даёт founded. Вопрос содержит NOT, поэтому выбираем форму, которая меняет нужный смысл.'],
    formula: 'Отметь NOT или LEAST → подставь глагол → переведи всю фразу с объектом.',
    examples: [['“She found a charity online.”', '«Она нашла благотворительную организацию в интернете». Организация уже существовала.'], ['“She founded a charity in her hometown.”', '«Она основала благотворительную организацию в родном городе». Она её создала.']],
    notebook: 'Напиши два своих предложения с found и founded. Попроси другого человека объяснить разницу по одному лишь контексту.',
    en: 'Test the complete verb phrase in context. If the prompt says NOT acceptable, select the option that breaks the meaning or grammar.',
    example: 'He found the club online. His sister founded the club years earlier.',
  },
  {
    title: 'Сокращай повторы, сохраняя информацию', enTitle: 'Concision without losing meaning',
    explain: ['В №65 the underprivileged уже называет группу людей с меньшими возможностями. В №69 around the world сообщает о широком охвате. Прочитай предложение без дописанного пояснения и проверь, сохранился ли смысл.', 'В №70 at home противопоставляется описанной раньше работе за границей. As well показывает, что работа в США добавляется к зарубежной. Дописывать название страны для понимания этой фразы не нужно.'],
    formula: 'Вычеркни повтор → перечитай с начала → проверь, кого, что и где по-прежнему описывает предложение.',
    examples: [['“The program supports the unemployed.”', '«Программа поддерживает безработных». Слова people without jobs повторили бы то же значение.'], ['“Volunteers helped abroad and at home as well.”', '«Волонтёры помогали за границей и у себя в стране тоже». После abroad понятно, как читать at home.']],
    notebook: 'Найди во фразе around the world, in many countries два выражения с похожим смыслом. Сохрани то, которое передаёт масштаб лучше.',
    en: 'Remove extra words when the sentence still gives the same useful information. Read the result in context so you do not drop a needed detail.',
    example: 'The message spread around the world. “In many different countries” would repeat the scope.',
  },
  {
    title: 'Свяжи абзацы и подведи итог на нужном уровне', enTitle: 'Transitions, insertions, and conclusions',
    explain: ['Переход However в №72 смотрит назад, к международной работе, и вперёд, к работе в США. Поэтому его место — перед первым предложением абзаца о работе дома.', 'В №75 вставка подводит итог одному примеру с Habitat. В №74 последнее предложение подводит итог всему тексту: оно должно объединить помощь в США и во всём мире.'],
    formula: 'Переход: старая мысль → новая. Вставка: тема абзаца + детали. Заключение: общая идея нескольких абзацев.',
    examples: [['“She volunteers abroad. However, she also serves her own community.”', '«Она волонтёрит за границей. Однако она также помогает своему сообществу». However подводит к новой стороне её работы.'], ['“Neighbors built the garden together. The project brought them closer.”', '«Соседи вместе разбили сад. Проект их сблизил». Второе предложение выводит общий смысл из примера.']],
    notebook: 'Перескажи абзац 4 одним предложением. Затем перескажи весь текст одним предложением. Сравни, какие детали вошли в каждый итог.',
    en: 'Put a transition where the focus changes. Add a sentence after the details that support it. A whole-essay conclusion should cover the main examples.',
    example: 'A line about Habitat bringing people together belongs with the example of volunteers and residents working side by side.',
  },
];

export const lecture = lessons.map(({ enTitle, en, example }) => ({ title: enTitle, en, example }));
export const lectureRu = lessons.map(({ title, explain, formula, examples, notebook }) => ({ title, explain, formula, examples, notebook }));

function word(word, meaning, id, context, contextRu, example, exampleRu) {
  return { word, meaning, source: sourceRefs[`carter-${id}`], context, contextRu, example, exampleRu };
}

export const vocabularyNotebook = {
  title: 'Словарь к тексту о Джимми Картере',
  intro: 'Прочитай фразу в отрывке, потом переведи новый пример. Запоминай выражения вместе с соседними словами и предлогами.',
  vocabulary: [
    word('oversee', 'руководить, следить за ходом дела; прошедшая форма oversaw', 'presidency', 'He oversaw a particularly turbulent time', 'он руководил страной в особенно неспокойный период', 'She oversaw the construction project.', 'Она руководила строительным проектом.'),
    word('tenuous relationship', 'непрочные отношения', 'enemy', 'a tenuous relationship with a potential enemy', 'непрочные отношения с потенциальным противником', 'The two groups had a tenuous partnership.', 'У этих двух групп было непрочное партнёрство.'),
    word('the underprivileged', 'люди с ограниченными ресурсами или возможностями', 'underprivileged', 'wants to see the underprivileged … benefit', 'хочет, чтобы люди с меньшими возможностями получили пользу', 'The program expands access to education for the underprivileged.', 'Программа расширяет доступ к образованию для людей с меньшими возможностями.'),
    word('dependence on', 'зависимость от чего-либо', 'energy', 'reduce American dependence … on foreign oil', 'сократить зависимость Америки от иностранной нефти', 'The town reduced its dependence on imported fuel.', 'Город снизил зависимость от импортного топлива.'),
    word('broker a peace treaty', 'выступить посредником при заключении мирного договора', 'energy', 'brokered a peace treaty between Israel and Egypt', 'помог заключить мирный договор между Израилем и Египтом', 'The diplomat helped broker an agreement.', 'Дипломат помог сторонам заключить соглашение.'),
    word('found a nonprofit', 'основать некоммерческую организацию', 'center', 'founding a non-profit organization', 'основав некоммерческую организацию', 'They founded a nonprofit to support local schools.', 'Они основали некоммерческую организацию для поддержки местных школ.'),
    word('work toward that end', 'работать ради этой цели', 'center', 'to work toward that end', 'чтобы работать ради этой цели', 'The team set a goal and worked toward that end.', 'Команда поставила цель и работала над её достижением.'),
    word('contain disease', 'сдерживать распространение болезни', 'health', 'in order to contain disease', 'чтобы сдерживать распространение болезней', 'Early action helped contain the outbreak.', 'Быстрые меры помогли сдержать вспышку болезни.'),
    word('standard of living', 'уровень жизни', 'domestic', 'improve the standard of living at home', 'повысить уровень жизни у себя в стране', 'The program aims to improve the local standard of living.', 'Программа нацелена на повышение уровня жизни местных жителей.'),
    word('affordable housing', 'жильё, доступное по цене', 'housing', 'building affordable but quality housing', 'строить доступное и при этом качественное жильё', 'The city needs more affordable housing.', 'Городу нужно больше жилья по доступной цене.'),
    word('side by side', 'бок о бок, вместе', 'community', 'working side-by-side with the families', 'работая бок о бок с семьями', 'Students and teachers worked side by side.', 'Ученики и учителя работали бок о бок.'),
    word('philanthropy', 'благотворительность, помощь обществу', 'philanthropy', 'his impressive philanthropy', 'его впечатляющая благотворительная работа', 'Many people appreciate her philanthropy.', 'Многие ценят её благотворительную работу.'),
    word('acknowledge', 'признавать, отмечать', 'philanthropy', 'acknowledge his obvious devotion', 'признать его явную преданность делу', 'The report acknowledged the volunteers’ contribution.', 'В отчёте отметили вклад волонтёров.'),
  ],
  exercises: [
    { title: 'Запятая после вступления', en: 'Add one punctuation mark: “As the group’s leader Maya gave the first speech.”', ru: 'Найди главную часть и поставь один знак.', answerEn: '“As the group’s leader, Maya gave the first speech.” Maya gave is the main subject and verb.', answerRu: 'Запятая после leader. Фраза As the group’s leader сообщает роль Майи. Основа — Maya gave.' },
    { title: 'Нашёл или основал?', en: 'Fill the blank: “The club did not exist before 2010. They ___ it that year.” Use found or founded.', ru: 'До 2010 года клуба не было. Какой глагол скажет, что его создали?', answerEn: '“They founded it that year.” The sentence means they established the club.', answerRu: 'Founded означает «основали». Found означало бы «нашли» уже существующий клуб.' },
    { title: 'Выбери место для вывода', en: 'Where would “The project brought the neighbors closer” fit: after a sentence naming the neighborhood or after a description of the neighbors building a garden together?', ru: 'После чего поставить вывод о сплочении соседей: названия района или примера совместной работы?', answerEn: 'After the description of the shared work. That detail shows how the project brought people together.', answerRu: 'После примера совместного труда. Он объясняет, благодаря чему соседи сблизились.' },
  ],
};
