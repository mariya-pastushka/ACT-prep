import { sourceRefs } from './english-passage.mjs';

const lessons=[
 {
  title:'Не разрывай цельные конструкции лишними знаками',enTitle:'Both … and; such … as',
  explain:[
   'В №61 friends and peers — два существительных в одной группе. Both their friends and peers не требует запятой или точки с запятой внутри. После peers не появляется вторая самостоятельная часть.',
   'В №66 such concert-hall staples as microphones … — единая конструкция с примерами. As уже вводит перечисление; запятая, двоеточие или точка с запятой перед ним здесь не нужны.',
   'Русский перевод может содержать запятую: «и друзья, и сверстники» или «такие элементы, как…». Английские знаки выбираются по английской конструкции, а не по буквальной копии перевода.',
  ],formula:'Both A and B. Such things as A, B, and C.',
  examples:[['Both teachers and students joined the event.','В событии участвовали и учителя, и ученики. В английском обе группы соединены без запятой.'],['We need such supplies as paper and pens.','Нужны такие принадлежности, как бумага и ручки. Перед as здесь нет запятой.']],
  notebook:'Перепиши исправленные группы из №61 и №66. Подчеркни парные слова both/and и such/as.',
  en:'A simple pair joined by and needs no internal punctuation. Keep the integrated such … as construction connected to its examples.',example:'Both friends and peers; such concert-hall staples as microphones, lights, and applause.',
 },
 {
  title:'Проверь, есть ли нужная форма глагола',enTitle:'Finite verbs, participles, and imperatives',
  explain:[
   'В №62 that has provided — придаточное с личной формой has provided. That having provided — незавершённая конструкция: having provided является оборотом, а после that не появляется нужного сказуемого. Главное karaoke is не завершает отдельное придаточное.',
   'Варианты с запятой и providing устроены по-другому: они присоединяют поясняющий оборот без относительного that. Не объявляй любое -ing ошибкой: проверь, какую работу форма выполняет.',
   'В №64 Look — законченный призыв с подразумеваемым you: Look more closely, and you’ll see …. Looking могло бы начать другое правильное предложение, но напечатанное and остаётся и требует именно этого построения.',
  ],formula:'That + личная форма: that has provided. Призыв: Look …, and you’ll see …. Оборот с -ing сам не заменяет нужное сказуемое.',
  examples:[['The program that has supported many students is growing.','Программа, которая поддержала многих студентов, развивается. Has supported — личная форма внутри придаточного.'],['Read the instructions, and you’ll understand the task.','Прочитай инструкции — и поймёшь задание. Read — повелительная форма, не reading.']],
  notebook:'Сравни has helped и having helped. Затем исправь “Looking at the map, and you’ll find the route”, меняя только Looking.',
  en:'A relative clause introduced by that needs a finite verb. A participial phrase is a different construction. An imperative such as Look can stand as a complete instruction before and.',example:'Entertainment that has provided enjoyment; Look more closely, and you’ll see the pattern.',
 },
 {
  title:'Общий факт обычно описывается в Present Simple',enTitle:'Tense, meaning, and subject agreement',
  explain:[
   'В №67 речь о том, что обычно происходит на караоке, а не о конкретном завершённом вечере. Поэтому audience knows … and responds … использует общий настоящий план.',
   'Audience в этой фразе — одна группа, поэтому knows и responds имеют -s. Форма has known тоже согласована с единственным числом, но меняет временной смысл: здесь такой переход к Present Perfect не нужен.',
   'Know обычно описывает состояние знания. Для обычного «знает» не используем is knowing. Knew — прошедшее время, которое не совпадает с настоящим описанием вокруг.',
  ],formula:'Общий факт + единственное подлежащее → knows / responds. Число и время проверяем отдельно.',
  examples:[['The audience knows the song and claps along.','Публика знает песню и хлопает в такт. Два глагола относятся к одной группе и описывают обычную ситуацию.'],['She has known him for years.','Она знает его много лет. Здесь for years даёт понятную причину выбрать Present Perfect.']],
  notebook:'В №67 найди соседний responds. Объясни, почему has known не ошибка числа, но не лучший временной выбор в этом контексте.',
  en:'Use simple present for a general description. Check tense separately from agreement: has known is singular, but its time frame needs a reason. Know normally describes a state rather than an ongoing progressive action.',example:'The audience knows that the show is for fun and responds anyway.',
 },
 {
  title:'Выбирай связку по смыслу и читай слова после пропуска',enTitle:'Contrast, concession, independence, and timing',
  explain:[
   '№65: Even though уже вводит уступку. Для тех же двух частей выбирают Even though X, Y или X, but Y. Не надо накладывать оба соединения друг на друга.',
   '№69: одиночное пение противопоставляется совместному, поэтому by contrast. Furthermore и moreover добавляют мысль; as a result вводит следствие.',
   '№70: regardless of — «независимо от», in lieu of — «вместо», because of — «из-за». Читай вместе с неизменяемым how: Regardless of how good …. В №73 when отмечает момент выхода, затем другое when — момент аплодисментов. If вводило бы условие, where — место.',
  ],formula:'Even though X, Y. / X, but Y. By contrast — противопоставление. Regardless of — независимо от. When — время.',
  examples:[['Even though the singer was nervous, she continued.','Хотя певица нервничала, она продолжала. Без второго but между этими частями.'],['Regardless of how skilled you are, you can participate.','Можно участвовать независимо от уровня навыка. Независимость, а не причина и не замена.'],['She was nervous when she began, but relaxed when people smiled.','Она нервничала, когда начала, но расслабилась, когда люди улыбнулись. Два временных этапа.']],
  notebook:'Для №69, №70 и №73 назови отношение одним словом: контраст, независимость или время. Потом подставь выбранное выражение в полное предложение.',
  en:'Determine the relation before selecting a connector. Preserve words outside the blank: However does not fit before the already printed how in Question 70.',example:'Private singing; karaoke, by contrast, is shared. Regardless of voice quality, people can enjoy it.',
 },
 {
  title:'Whose не равно who’s',enTitle:'Possessive and contracted relative forms',
  explain:[
   'В №71 после пропуска стоит существительное singing. Надо выразить принадлежность: «чьё пение?». Whose singing означает пение тех других людей, о которых только что говорили.',
   'Who может быть подлежащим: people who sing. Whom — дополнением: people whom we invited. Whose вводит владельца: people whose singing we enjoy. Who’s раскрывается как who is или who has, а не «чей».',
  ],formula:'Whose + существительное = чей предмет или признак. Who’s = who is / who has.',
  examples:[['The singer whose microphone broke kept smiling.','Певец, чей микрофон сломался, продолжал улыбаться. Whose указывает владельца микрофона.'],['Who’s ready? = Who is ready?','Кто готов? Who’s — сокращение, а не принадлежность.']],
  notebook:'Придумай по одному примеру с who, whom и whose. Для who’s выпиши полную форму, чтобы проверить смысл.',
  en:'Whose supplies a possessive relationship before a noun. Who and whom serve different grammatical roles; who’s is a contraction and must expand to who is or who has.',example:'Others, whose singing is usually private, share the experience.',
 },
 {
  title:'Для порядка и вставки проверяй точную задачу',enTitle:'Coherence, paragraph bridges, deletion, and relevance',
  explain:[
   '№63: после понятного частного пения в 4 логично задать вопрос о публичном пении в 2. Затем 5 может обещать ответы на this question. Итоговый порядок исходных номеров: 1–3–4–2–5.',
   '№68 требует двух функций одновременно. Слова fame and stardom подводят итог нынешнему абзацу, а not the only reason готовит следующую причину. Нельзя проверять только связь с будущим абзацем.',
   '№72: удаление who are ordinarily shy убирает конкретную группу людей; психологические эффекты в следующем предложении остаются. №75: список популярных исполнителей относится к караоке вообще, но не развивает цель эссе — объяснение привлекательности занятия.',
  ],formula:'Порядок: что связывает соседей? Переход: что слева и справа? Удаление: что именно исчезло? Вставка: какую цель она развивает?',
  examples:[['We understand private practice. Why perform in public, though? This question has several answers.','Личная практика понятна. Но зачем выступать на публике? У этого вопроса есть несколько ответов. Though связывает контраст, this question отсылает к ближайшему вопросу.'],['The class welcomes people who are usually shy. → The class welcomes people.','Занятие принимает людей, которые обычно застенчивы. → Занятие принимает людей. Пропала характеристика группы, а не сам факт приёма.']],
  notebook:'Напиши одним предложением цель Fun with Karaoke. Объясни, почему истинный факт об исполнителях не обязан попасть в эссе.',
  en:'Use contrast and reference cues to arrange sentences. A transition must conclude the current idea and prepare the next. Deletion removes a specific function; a related fact may still be irrelevant to the essay’s purpose.',example:'Sentence 4 → Sentence 2 → Sentence 5. Stardom → not the only reason → shared enjoyment.',
 },
 {
  title:'Денежная сумма: less than; отдельные предметы: fewer',enTitle:'Less, fewer, than, and then',
  explain:[
   'В №74 $7 billion рассматривается как единая сумма. Поэтому no less than, несмотря на возможное множественное dollars в произношении. Для отдельных билетов или банкнот можно использовать fewer.',
   'Than вводит сравнение: less than, fewer than. Then означает «затем» или «тогда». Lesser — другое прилагательное, а few без -er не заменяет сравнительную форму fewer.',
  ],formula:'Less money / less than $20. Fewer tickets / fewer than five tickets. Than — сравнение; then — последовательность.',
  examples:[['We spent less than twenty dollars and bought fewer tickets than last time.','Мы потратили меньше двадцати долларов и купили меньше билетов, чем в прошлый раз. Сумма денег и число предметов требуют разных слов.'],['We bought tickets; then we entered the hall.','Мы купили билеты; затем вошли в зал. Then отмечает следующий шаг.']],
  notebook:'Составь пару с суммой денег и количеством билетов. В каждом сравнении подчеркни than.',
  en:'A monetary amount is normally compared with less, while separate countable items take fewer. Use than for comparisons and then for time or sequence.',example:'No less than $7 billion; fewer than seven tickets; then the show began.',
 },
];

export const lecture=lessons.map(({enTitle,en,example})=>({title:enTitle,en,example}));
export const lectureRu=lessons.map(({title,explain,formula,examples,notebook})=>({title,explain,formula,examples,notebook}));

const word=(word,meaning,id,context,contextRu,example,exampleRu)=>({word,meaning,source:sourceRefs[id],context,contextRu,example,exampleRu});
export const vocabularyNotebook={
 title:'Вокабуляр к Fun with Karaoke',
 intro:'У каждого выражения есть переход к его предложению в исходнике. Прочитай значение и новый пример, затем попробуй составить собственную фразу. Исправленные формулировки отмечены отдельно.',
 vocabulary:[
  word('defy understanding','не поддаваться пониманию, казаться непонятным','s2','What defies understanding','Что не поддаётся пониманию','His decision defies understanding.','Его решение трудно понять.'),
  word('peers','сверстники или люди равного положения','s2','friends and peers (corrected punctuation)','друзья и сверстники — исправленная пунктуация','She shared the project with her peers.','Она показала проект своим сверстникам.'),
  word('glitz and glamour','внешний блеск и привлекательная роскошь','look','its glitz and glamour','его блеск и гламур','The event had plenty of glitz and glamour.','На событии было много блеска и гламура.'),
  word('everyday folks','обычные люди; folks — разговорное «люди»','stars','more than just everyday folks','больше, чем просто обычные люди','Everyday folks joined the celebration.','К празднику присоединились обычные люди.'),
  word('staples','обычные, основные элементы; здесь не канцелярские скобы','concert','concert-hall staples','обычные элементы концертного зала','Rice and beans are staples of the local diet.','Рис и бобы — основные продукты местного питания.'),
  word('applause','аплодисменты','concert','microphones, lights, and applause','микрофоны, свет и аплодисменты','The audience broke into applause.','Публика разразилась аплодисментами.'),
  word('fame / stardom','известность / положение звезды','bridge','fame and stardom','известность и звёздный статус','The role brought her fame.','Эта роль принесла ей известность.'),
  word('enduring','длительный, сохраняющийся','bridge','its enduring popularity','его устойчивая популярность','The song has enduring appeal.','Песня сохраняет привлекательность долгое время.'),
  word('solitary','одиночный, происходящий без компании','contrast','that ordinarily solitary experience','это обычно одиночное переживание','Reading is often a solitary activity.','Чтение часто является занятием в одиночестве.'),
  word('by contrast','напротив, в отличие от этого','contrast','Karaoke, by contrast, allows …','Караоке, напротив, позволяет…','The first room was quiet; the next, by contrast, was noisy.','Первая комната была тихой; следующая, напротив, шумной.'),
  word('in lieu of / regardless of','вместо / независимо от','regardless','Regardless of how good or bad their voices are (corrected wording)','Независимо от того, хороши их голоса или плохи — исправленная фраза','Regardless of the weather, we will meet indoors.','Независимо от погоды мы встретимся в помещении.'),
  word('sheer joy','чистая, ничем не омрачённая радость; sheer усиливает слово','regardless','the sheer joy of music','чистая радость от музыки','They danced for the sheer joy of it.','Они танцевали просто ради самой радости танца.'),
  word('ordinarily shy','обычно застенчивый','shy','people who are ordinarily shy','люди, которые обычно застенчивы','She is ordinarily shy, but enjoys acting.','Обычно она застенчива, но любит играть на сцене.'),
  word('bring someone out of their shell','помочь кому-то раскрепоститься; образное выражение','shy','bring people … out of their shells','помочь людям выйти из замкнутости','The friendly group brought him out of his shell.','Дружелюбная группа помогла ему раскрепоститься.'),
  word('stage fright','страх сцены, волнение перед выступлением','confidence','overcome stage fright','преодолеть страх сцены','Even experienced performers can feel stage fright.','Даже опытные исполнители могут испытывать страх сцены.'),
  word('self-confidence','уверенность в себе','confidence','build their self-confidence','укрепить их уверенность в себе','Practice helped her build self-confidence.','Практика помогла ей укрепить уверенность в себе.'),
  word('feel rewarded','чувствовать, что усилия вознаграждены','timing','the singers are sure to feel rewarded','певцы наверняка почувствуют, что их усилия оценили','The applause made him feel rewarded.','Аплодисменты дали ему почувствовать, что его усилия оценены.'),
  word('fad','мимолётное увлечение, кратковременная мода','fad','Many dismiss it as a fad','Многие считают это лишь мимолётной модой','They thought the game was a fad.','Они считали игру кратковременным увлечением.'),
  word('profit','прибыль; не вся выручка, а финансовый результат после расходов','money','$7 billion in profit','7 миллиардов долларов прибыли в данном тексте','The shop made a small profit.','Магазин получил небольшую прибыль.'),
 ],
 exercises:[
  {title:'Личная форма или оборот?',en:'Choose a complete relative clause: “a program that has helped families” / “a program that having helped families.”',ru:'Какой вариант имеет нужное сказуемое после that?',answerEn:'That has helped families. Has helped is finite; that having helped leaves the relative clause incomplete.',answerRu:'That has helped families. Has helped — личная форма. Having helped является оборотом и само не завершает придаточное после that.'},
  {title:'Призыв перед and',en:'Complete: “Read / Reading carefully, and you’ll notice the difference.”',ru:'Слово and сохраняется. Какая форма создаёт законченную инструкцию?',answerEn:'Read carefully, and you’ll notice the difference.',answerRu:'Read. Это повелительное предложение с подразумеваемым you. Reading carefully было бы оборотом и потребовало бы другого построения без этого and.'},
  {title:'Чей или кто есть?',en:'Complete: “I met a singer ___ song I recognized.” Options: whose / who’s.',ru:'Нужна принадлежность песни певцу или сокращение who is?',answerEn:'Whose. The song belongs to the singer; who’s would mean who is or who has.',answerRu:'Whose: чей-то song, то есть песня этого певца. Who’s — who is или who has — в эту структуру не подходит.'},
  {title:'Переход должен смотреть в обе стороны',en:'A paragraph explains the library’s book collection. The next discusses its workshops. Does “Books are not its only resource” help connect them?',ru:'Что здесь подводит итог предыдущей теме и что открывает следующую?',answerEn:'Yes. Books refers back to the collection, and not its only resource prepares another service.',answerRu:'Да. Books возвращает к коллекции книг, а not its only resource обещает другую полезную возможность, о которой дальше расскажут через занятия.'},
  {title:'Количество денег и количество предметов',en:'Choose: “less / fewer than $30” and “less / fewer than three tickets.”',ru:'Различи единую сумму и отдельные билеты.',answerEn:'Less than $30; fewer than three tickets.',answerRu:'Less than $30 — сумма денег. Fewer than three tickets — число отдельных билетов. В обоих сравнениях пишем than.'},
 ],
};
