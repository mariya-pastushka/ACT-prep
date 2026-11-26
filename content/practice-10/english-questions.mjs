import { sourceRefs } from './english-passage.mjs';

const records=[];
function add(id,key,topic,refs,evidence,explanation,choices,ru,prompt='Choose the best replacement for the underlined portion.'){
 records.push({id,key,topic,section:'english',prompt,evidence,explanation,evidenceSources:refs.map(ref=>sourceRefs[ref]),choices:choices.map((text,i)=>({label:(id%2?'ABCD':'FGHJ')[i],text})),ru});
}
const r=(quote,steps,rule,example,wrong,remember)=>({quote,steps,rule,example,wrong,remember});

add(61,'B','Punctuation in a two-part noun phrase',['s2'],
 '“… in front of both their friends; and peers.” → “… in front of both their friends and peers.”',[
 '“Friends and peers” names two groups within the same noun phrase. The paired structure is “both … and …,” so B connects them directly without internal punctuation.',
 'A semicolon normally separates complete independent clauses or complicated list items. “And peers” is not a complete clause, and this is a simple pair, not a complicated list. No comma is needed between the two nouns either.',
 'A keeps the inappropriate semicolon. C adds an unnecessary comma before “and.” D separates “and” from the second noun with a comma. B preserves the simple “friends and peers.”'
 ],['NO CHANGE','friends and peers.','friends, and peers.','friends and, peers.'],r(
 'Герои выступают перед двумя группами людей: своими друзьями и сверстниками. Friends и peers соединены обычным and, а перед ними уже стоит both — «и те, и другие».',
 ['Сократи фразу до двух существительных: friends and peers. Здесь нет двух самостоятельных предложений.','Проверь выражение both … and …: «и друзья, и сверстники». В английском между этими двумя членами не нужна запятая только потому, что в русском переводе она может появиться.','После точки с запятой в исходнике остаётся and peers — «и сверстники». У этой части нет собственной основы, поэтому такой знак здесь не подходит.','B убирает лишние знаки и сохраняет нужную пару.'],
 'В простом соединении двух однородных членов через and обычно нет запятой. Не переноси русскую пунктуацию в английское both A and B.',
 ['Both my friends and classmates came to the show.','На представление пришли и мои друзья, и одноклассники. По-английски обе группы соединены без внутренней запятой.'],
 ['A оставляет точку с запятой внутри простой пары.','C добавляет запятую перед and без необходимости.','D разрывает связку and peers запятой после and.'],
 'Both friends and peers — одна цельная пара, без внутренних знаков.'));

add(62,'J','NOT acceptable: a relative clause needs a finite verb',['s3'],
 '“… karaoke is a form of entertainment that provides people with a great time …”',[
 'J would produce “entertainment that having provided people with a great time ….” After the relative pronoun “that,” this clause has no finite verb: “having provided” is a nonfinite participial form. The main sentence’s “is” does not supply the missing verb inside that relative clause.',
 'F has the finite form “has provided,” so its relative clause is grammatical. G replaces the relative clause with a comma and the participial phrase “providing ….” H uses the explanatory parenthetical “that is” before “providing ….” These structures differ, but all can complete the sentence grammatically.',
 'The question asks for the alternative that would NOT be acceptable. Do not reject G or H merely because they change the construction. J alone leaves “that having provided …” without the verb needed to complete its clause.'
 ],['that has provided',', providing',', that is, providing','that having provided'],r(
 'Основная часть — karaoke is a form of entertainment, «караоке — форма развлечения». После that в варианте J начинается отдельное придаточное, но having provided не даёт ему личной формы глагола.',
 ['Сначала отметь NOT: нужно выбрать неприемлемую замену. Исходное that provides грамматически правильно, но среди ответов предложены другие конструкции.','Сравни F и J. Has provided — личная форма Present Perfect: «обеспечило / обеспечивало». Having provided — неличный оборот «обеспечив», который сам по себе не завершает придаточное после that.','В J получится entertainment that having provided people …, и предложение закончится без нужного сказуемого этого придаточного. Главное is относится к karaoke, а не исправляет придаточное после that.','G допустим с оборотом providing после запятой. H вводит пояснение that is — «то есть». Это другие грамматические конструкции, но не такие, как незавершённое that having provided. Поэтому J.'],
 'Различай личную форму глагола и оборот с -ing. Has helped может быть сказуемым; having helped само по себе не является сказуемым придаточного с that.',
 ['A service that has helped many people is closing. Having helped them, she went home.','Служба, которая помогла многим людям, закрывается. После того как она им помогла, она ушла домой. В первом случае has helped завершает придаточное; во втором having helped требует основной части she went home.'],
 ['F: that has provided содержит полноценную личную форму.','G: после запятой providing работает как поясняющий оборот без that.','H: that is — вводное «то есть», после которого providing продолжает пояснение. Не путай эту вставку с относительным that в J.'],
 'That has provided — завершённая грамматика; that having provided — не хватает сказуемого.'),
 'Which of the following alternatives to the underlined portion would NOT be acceptable?');

add(63,'C','Place a contrast and its question together',['s2','s3','s4','s5'],
 'Sentence 4: “It is understandable that people would enjoy singing in the privacy of their homes.” Sentence 2: “What defies understanding, though, is why …” Sentence 5: “There are many different ways to respond to this question.”',[
 'Sentence 2 works best after Sentence 4. The contrast becomes immediate: private singing is understandable; public singing is the puzzling behavior. “Though” connects those opposing ideas, and Sentence 5 can then refer directly to the question just raised.',
 'The revised sequence is 1 → 3 → 4 → 2 → 5. Sentences 1 and 3 establish karaoke’s popularity and enjoyment, Sentence 4 identifies understandable private enjoyment, Sentence 2 raises the public-performance question, and Sentence 5 introduces answers.',
 'A raises the question before the private-versus-public contrast is fully set up. B places it before Sentence 4, leaving the private-singing statement between the question and “this question.” D puts the question after the sentence that promises to answer it. C gives the clearest chain.'
 ],['where it is now.','after Sentence 3.','after Sentence 4.','after Sentence 5.'],r(
 'Предложение 4 говорит: петь дома понятно. Предложение 2 возражает: а вот почему люди выходят на публику, понять трудно. Предложение 5 обещает ответы на «этот вопрос».',
 ['Найди связующее слово though в предложении 2: «однако». Для него особенно удобна мысль, с которой сейчас будут контрастировать.','Эта мысль находится в 4: дома петь понятно. Сразу после неё 2 создаёт ясную пару: понятно дома — непонятно на публике.','Теперь прочитай 5: this question — «этот вопрос». Лучше, чтобы прямо перед ним стоял вопрос из предложения 2, а не другое рассуждение.','Получаем исходные номера 1 → 3 → 4 → 2 → 5. Значит, 2 переносим после 4: C. Номера относятся к исходнику, не пересчитывай их после перестановки.'],
 'В задаче на порядок ищи две связи: смысловую между соседями и отсылку местоимений или указательных выражений. Здесь помогают though и this question.',
 ['Private practice is easy to understand. Why perform publicly, though? There are several answers to this question.','Личная практика понятна. Но зачем выступать публично? У этого вопроса есть несколько ответов. Контраст поставлен рядом, а this question имеет ясную отсылку.'],
 ['A оставляет вопрос слишком рано, до прямого сопоставления с понятным пением дома.','B ставит вопрос перед 4: затем фраза о домашнем пении снова отдаляет его от this question.','D сначала обещает ответить на this question, а уже потом формулирует сам нужный вопрос.'],
 '4 → 2 создаёт контраст; 2 → 5 даёт понятную отсылку. Поэтому весь порядок 1–3–4–2–5.'),
 'For the sake of logic and coherence, Sentence 2 should be placed:');

add(64,'J','An imperative followed by its result',['look'],
 '“Looking more closely, and you’ll see …” → “Look more closely, and you’ll see …”',[
 'The unchanged continuation begins “and you’ll see.” The first part therefore needs a complete instruction: “Look more closely.” J supplies the imperative verb, with an understood subject “you.” The second part states the result of following that instruction.',
 'Do not judge “Looking” alone. “Looking more closely, you’ll notice the pattern” could work without “and,” but this question does not allow deleting that word. The replacement must fit the sentence as printed around the blank.',
 'F and G leave participial openings before “and” instead of the required complete instruction. H supplies an infinitive, “To look,” which also does not complete that first part. J gives “Look …, and you’ll see ….”'
 ],['NO CHANGE','Having looked','To look','Look'],r(
 'Автор приглашает читателя присмотреться: «Посмотри внимательнее — и увидишь…». После подчёркивания остаются more closely, and you’ll see.',
 ['Прочитай слова справа: and you’ll see — «и ты увидишь». Менять and в этом вопросе нельзя.','Перед ним нужна законченная инструкция. Look more closely — повелительное предложение: «Посмотри внимательнее». Подлежащее you в таком приказе подразумевается.','Looking и Having looked дают обороты, а To look — инфинитив. Ни одна из этих форм не создаёт нужную самостоятельную инструкцию перед and.','J даёт правильную связку: Look more closely, and you’ll see …. Это призыв плюс его результат.'],
 'Повелительное предложение может состоять из начальной формы глагола без написанного you: Read, Look, Listen. Но -ing-оборот иногда тоже правилен — только в другой конструкции, например без этого and.',
 ['Read the next sentence, and you’ll find the answer.','Прочитай следующее предложение — и найдёшь ответ. Read выражает полноценный призыв, после and идёт результат.'],
 ['F оставляет Looking перед and и не завершает первую часть.','G, Having looked, также является оборотом, не самостоятельным призывом.','H, To look, — «чтобы посмотреть / посмотреть», а не инструкция Look.'],
 'Подставляй ответ вместе с неизменяемым and: Look …, and you’ll see ….'));

add(65,'C','Do not mark the same contrast twice',['concert'],
 '“Even though … busy restaurants, but karaoke singers are still performing …” → “Even though … busy restaurants, karaoke singers are still performing …”',[
 '“Even though” already introduces the contrast between a modest venue and a concert-like performance. The sentence needs a comma followed by the main clause, not a second connector “but.” C removes the redundant connector.',
 'Two standard patterns are “Even though X, Y” and “X, but Y.” Do not combine them as “Even though X, but Y” for these same two parts. The main clause here begins “karaoke singers are still performing.”',
 'A keeps the double marking. D keeps “but” and also omits the useful comma at the boundary. B introduces “which” instead of making the intended main statement. C supplies the clean subordinate-clause-to-main-clause connection.'
 ],['NO CHANGE','restaurants which','restaurants,','restaurants but'],r(
 'Хотя выступление слышно лишь в небольших барах или ресторанах, певцы всё равно ведут себя как на настоящем концерте. Это одно противопоставление, уже введённое Even though.',
 ['Найди начало предложения: Even though — «хотя». Оно делает первую часть придаточной уступки.','Найди главную часть: karaoke singers are still performing — «исполнители всё равно выступают». Она начинается после restaurants.','Чтобы соединить эти части, достаточно запятой. Дополнительное but повторно вводит ту же связь.','C оставляет restaurants, и сразу за запятой начинается главная часть. Смысл «хотя …, всё равно …» сохраняется.'],
 'Два образца: Even though it was late, we stayed. Или: It was late, but we stayed. Для той же пары частей не смешивай оба начала в Even though …, but …. Это не запрет слов though и but вообще в одном длинном предложении, а правило этой конструкции.',
 ['Even though the room was small, the show felt grand.','Хотя комната была маленькой, представление казалось грандиозным. После придаточной части стоит запятая, затем сразу главная.'],
 ['A сохраняет ненужное but после уже использованного Even though.','B начинает неуместную часть с which вместо нужного главного сообщения о певцах.','D не убирает двойную связь и ещё теряет запятую на границе частей.'],
 'Здесь нужно Even though …, karaoke singers … — без второго but.'));

add(66,'H','Keep such … as together',['concert'],
 '“… with such concert-hall staples, as microphones, lights, and applause.” → “… with such concert-hall staples as microphones, lights, and applause.”',[
 'The examples belong to the integrated “such … as …” construction. “Microphones, lights, and applause” identifies examples of concert-hall staples. H keeps the noun directly attached to “as” without inserting a mark.',
 'A colon can introduce a list in a suitable sentence, but it is unnecessary inside this existing “such staples as …” pattern. A semicolon would be especially wrong because “as microphones …” is not an independent clause.',
 'F separates “staples” from its “as” examples with a needless comma. G inserts a colon before “as,” and J inserts a semicolon. H preserves the complete phrase.'
 ],['NO CHANGE','staples:','staples','staples;'],r(
 'Such concert-hall staples as microphones, lights, and applause означает «такие обычные элементы концерта, как микрофоны, свет и аплодисменты».',
 ['Узнай конструкцию such … as …: сначала категория, затем её примеры. Между частями находятся слова concert-hall staples.','As уже вводит примеры, поэтому перед ним не надо вставлять ещё один знак, будто список начинается заново.','В H после staples ничего не добавлено: such concert-hall staples as microphones …. Получается цельная английская конструкция.','Не копируй русскую запятую из перевода «такие …, как …»: английский оборот здесь оформляется иначе.'],
 'В обычном such + существительное + as + примеры не разделяй существительное и as ненужным знаком. Двоеточие возможно в другом построении: The show uses several staples: microphones and lights.',
 ['They brought such supplies as paper, pens, and tape.','Они принесли такие материалы, как бумага, ручки и скотч. В английском перед as здесь нет запятой.'],
 ['F оставляет лишнюю запятую перед as.','G добавляет двоеточие внутрь уже готовой связки such … as.','J ставит точку с запятой, хотя as microphones, lights, and applause не является самостоятельным предложением.'],
 'Ищи пару such … as и сохраняй её цельной.'));

add(67,'D','Use the simple present for a general fact',['audience'],
 '“the audience has known that it’s all for fun and responds anyway” → “the audience knows … and responds anyway.”',[
 'The paragraph describes karaoke in general: performances occur, voices are not spectacular, and the audience responds. “Knows” matches that general present-time description and the paired verb “responds.” D is the best fit.',
 '“Audience” is treated here as a singular group. Its simple-present verb is “knows.” The issue with “has known” is not subject–verb agreement; it is the unnecessary present-perfect time frame in this general description.',
 'A shifts to knowledge held over a period without a contextual reason. B uses the progressive “is knowing,” which is not the normal form for this state of knowledge. C moves to the past, while the surrounding description remains present. D keeps the intended tense.'
 ],['NO CHANGE','is knowing','knew','knows'],r(
 'Автор описывает типичное караоке: голоса неидеальны, но публика понимает, что всё ради развлечения, и всё равно реагирует. Это общий факт, а не рассказ о конкретном прошлом выступлении.',
 ['Посмотри на соседние глаголы: voices are not spectacular и audience responds. Всё описывается в настоящем времени.','Главное слово audience — публика как одна группа. Здесь форма Present Simple для него — knows.','Knows … and responds … даёт два согласованных действия или состояния одной публики в общем описании.','Has known само по себе согласовано с audience, но ненужно добавляет смысл длительного знания до настоящего момента. Поэтому лучше D, а не A.'],
 'Для общего факта обычно нужен Present Simple. Know обычно называет состояние знания, поэтому в таком значении не выбираем is knowing. Следи одновременно за временем, смыслом и числом подлежащего.',
 ['The audience knows the song and sings along.','Публика знает песню и подпевает. Это общее описание: knows и sings в Present Simple.'],
 ['A не ошибается в числе, но без причины меняет временной смысл на Present Perfect.','B использует неестественное для обычного «знает» продолженное is knowing.','C, knew, переносит знание в прошлое и нарушает общий настоящий план абзаца.'],
 'Общее описание: the audience knows … and responds ….'));

add(68,'F','Conclude one reason and prepare the next',['stars','bridge','another','private'],
 'The paragraph describes “glitz and glamour” and feeling like a star. Its ending says “fame and stardom, but this is not the only reason ….” The next paragraph begins “There is another … reason ….”',[
 'F does both requested jobs. It concludes the current reason, the chance to feel famous, and signals that a different reason will follow. The next paragraph then develops the pleasure of sharing an activity usually done alone.',
 'A transition must fit both its left and right neighbors. “Fame and stardom” looks back to the concert atmosphere; “not the only reason” looks forward to “another … reason.” That makes the original ending especially coherent.',
 'G switches to companies and historical equipment. H switches to the word’s Japanese origin. J previews the public-versus-private comparison, but does not summarize the current glamour discussion or bridge the two reasons as effectively as F.'
 ],['NO CHANGE','This is why AudioSynTrac and Numark Electronics were so successful in debuting the first sing-along tapes and equipment back in the 1970s.',"Japan's lasting influence on karaoke is obvious all the way down to its name-the Japanese word karaoke translates roughly to \"empty orchestra.\"",'Singing in front of people is more fun for many people than singing in the shower or in the car.'],r(
 'Текущий абзац объясняет привлекательность караоке через блеск сцены и чувство «я — звезда». Следующий объясняет другую причину: возможность разделить обычно одиночное занятие с людьми.',
 ['Вопрос требует две функции одновременно: завершить этот абзац и подготовить следующий.','В исходной фразе fame and stardom — «слава и звёздность» — подводит итог нынешней теме сцены и концертных ощущений.','Продолжение but this is not the only reason обещает следующую причину. Следующий абзац действительно начинается There is another … reason.','F, NO CHANGE, создаёт обе связи. J выглядит заманчиво, потому что упоминает душ и машину из следующего абзаца, но хуже завершает именно тему славы и не даёт такого ясного перехода от одной причины к другой.'],
 'Для перехода проверяй обе стороны. Полезный намёк на следующий абзац ещё не означает, что вариант также удачно завершает предыдущий.',
 ['The museum preserves local history, but history is not its only attraction. Its gardens also draw visitors.','Музей сохраняет местную историю, но история — не единственная его привлекательная сторона. Его сады тоже привлекают посетителей. Конец первого предложения и завершает тему, и готовит новую.'],
 ['G переводит разговор на фирмы, технику и прошлые десятилетия, а дальше речь о совместном удовольствии.','H готовит тему японского происхождения слова, которой следующий абзац не посвящён.','J связан с последующим сравнением, но упускает важную половину задания: итог нынешнего объяснения через звёздность.'],
 'F смотрит назад через fame and stardom и вперёд через not the only reason.'),
 'Given that all the choices are true, which one would most effectively conclude this paragraph while leading into the main focus of the next paragraph?');

add(69,'A','Choose the contrast relation',['private','contrast'],
 '“singing … only in the shower or in the car” contrasts with “share that ordinarily solitary experience with other people.”',[
 'The previous sentence describes singing privately. The next describes sharing it with other people. “By contrast” marks the change from solitary to social activity, so A correctly preserves the original transition.',
 'Name the relationship before choosing a transition. The second sentence does not simply add another example of private singing; it presents the contrasting opportunity provided by karaoke.',
 'B and C are additive: “furthermore” and “moreover” mean an additional point. D signals a result, but the private-singing habit is not presented as the direct cause of karaoke’s opportunity. A expresses the actual contrast.'
 ],['NO CHANGE','furthermore,','moreover,','as a result,'],r(
 'Сначала человек поёт один — в душе или машине. Караоке, наоборот, позволяет разделить это занятие с другими. Связь между мыслями — противопоставление одиночного и совместного.',
 ['Прочитай предыдущее предложение, а не только строку с пропуском: only in the shower or in the car.','В новой строке найди share … with other people. Меняется способ переживать пение: один → вместе.','By contrast означает «в отличие от этого, напротив». Оно называет именно эту связь.','A оставляет уже подходящий переход. Не заменяй его на «кроме того» только потому, что оба предложения положительно говорят о пении.'],
 'Сначала определи смысл: добавление, противопоставление или результат. Затем выбирай связку. Одинаковая тема двух предложений сама по себе не означает добавления.',
 ['At home she practices alone. In a choir, by contrast, she sings with others.','Дома она занимается одна. В хоре, напротив, поёт с другими. By contrast выделяет различие.'],
 ['B, furthermore, — «кроме того»: добавляет, но не называет контраст.','C, moreover, также означает добавление.','D, as a result, — «в результате»: приписывает прямую причинно-следственную связь, которой здесь не объясняют переход.'],
 'Alone ↔ with other people — ясная подсказка к by contrast.'));

add(70,'G','Regardless of means independent of a condition',['audience','regardless'],
 '“… how good or bad their voices are, people can experience the sheer joy of music …”',[
 'The point is that people can enjoy singing together whether their voices are good or bad. “Regardless of” expresses that independence from vocal quality, so G fits.',
 'Test the replacement with the unchanged “how”: “Regardless of how good or bad their voices are ….” The construction means that the quality of the voice does not prevent the shared enjoyment.',
 'F, “In lieu of,” means “instead of,” not “regardless of.” H creates “However how good or bad …,” which does not fit the printed continuation. J, “Because of,” makes vocal quality the reason for enjoyment rather than something enjoyment does not depend on.'
 ],['NO CHANGE','Regardless of','However','Because of'],r(
 'Люди могут получать удовольствие от совместного пения независимо от того, хороши их голоса или плохи. Качество голоса не является обязательным условием радости.',
 ['Сформулируй смысл без вариантов: «Неважно, хорошо или плохо они поют — удовольствие доступно».','G даёт Regardless of how good or bad their voices are — «независимо от того, насколько хороши или плохи их голоса».','Слова how good or bad после пропуска сохраняются. Поэтому проверяй не только перевод варианта, но и полную получившуюся конструкцию.','Выбираем G. Предыдущее наблюдение о неидеальных голосах и понимающей публике тоже согласуется с этим смыслом.'],
 'Regardless of — независимо от. In lieu of — вместо. Because of — из-за, по причине. Это разные смысловые связи, а не взаимозаменяемые вводные слова.',
 ['Regardless of how experienced you are, you can join the group.','Независимо от того, насколько ты опытен, можно присоединиться к группе. Опыт не является условием допуска.'],
 ['F, In lieu of, подставляет значение «вместо» и не выражает независимость от качества голоса.','H создаёт However how good … с лишним how. В другой конструкции However good … могло бы работать, но удалять уже напечатанное how здесь нельзя.','J, Because of, превращает качество голоса в причину удовольствия, тогда как автор подчёркивает независимость от него.'],
 'Нужна цельная фраза Regardless of how …, а не просто знакомое вводное слово.'));

add(71,'A','Whose introduces possession',['regardless'],
 '“… with others, whose singing is mostly a private affair as well, through karaoke.”',[
 'The relative clause describes the other people’s singing. “Whose” supplies that possessive relationship: their singing is usually private too. A is correct.',
 'Ask what follows the blank: the noun “singing,” which needs a possessor. “Whose singing” is the subject of “is mostly a private affair.” It means “the singing of those other people.”',
 'B, “who,” and C, “whom,” do not express possession before this noun. D, “who’s,” means “who is” or “who has”; neither expansion fits “singing is mostly ….” A retains the required possessive form.'
 ],['NO CHANGE','who','whom',"who's"],r(
 'Слова others, whose singing … означают «другие люди, чьё пение тоже обычно остаётся личным делом». Речь о пении, принадлежащем этим людям.',
 ['Посмотри на слово после пропуска: singing — «пение». Нужно указать, чьё оно.','Whose отвечает на вопрос «чей?». Whose singing — «чьё пение» — становится подлежащим к is.','Подставь мысленно their singing: их пение обычно является частным занятием. Это подтверждает значение принадлежности.','A сохраняет whose. Апостроф не нужен: whose уже является притяжательной формой.'],
 'Who — кто, который как подлежащее. Whom — кого, которому как дополнение. Whose — чей. Who’s — сокращение who is или who has, не значение «чей».',
 ['I met a singer whose voice I recognized.','Я встретила певца, чей голос узнала. Whose voice = его голос. Сравни Who’s there? — Who is there? — «Кто там?»'],
 ['B не показывает принадлежность слова singing.','C тоже не притяжательная форма; дополнения whom в этом месте не требуется.','D раскрывается как who is или who has и даёт неправильную структуру перед singing is mostly ….'],
 'После пропуска существительное singing; вопрос к связи — «чьё?» → whose.'));

add(72,'G','Deletion: identify the lost qualifier',['shy','confidence'],
 '“it helps bring people who are ordinarily shy out of their shells.” The next sentence still states “overcome stage fright, build their self-confidence, and conquer their fears.”',[
 'The clause “who are ordinarily shy” identifies a specific group: people who would not normally be inclined to perform publicly. Deleting it makes the statement about people more general. G names the precise lost detail.',
 'Separate the target group from the claimed benefits. The following sentence already explains confidence and overcoming fear; those benefits remain even if the identifying clause is removed. What disappears is the emphasis that karaoke attracts ordinarily shy participants.',
 'F introduces international popularity, which the clause does not discuss. H shifts to broader psychological benefits and “chronically” shy people instead of the exact qualifier being deleted. J introduces a future use, while the paragraph describes a present effect.'
 ],['a detail that explains why karaoke is so popular in the international community.','a detail meant to indicate that karaoke is popular among those not normally inclined to sing in public.','information that emphasizes the possible psychological benefits of karaoke for the chronically shy.','an indication that karaoke may be used at some future time to help singers overcome stage fright.'],r(
 'Who are ordinarily shy уточняет людей: «которые обычно застенчивы». Без этой части останется более общее helps bring people out of their shells — «помогает людям раскрепоститься».',
 ['Сравни до и после удаления. Было: помогает именно тем, кто обычно застенчив. Стало: помогает людям вообще.','Значит, потеряли указание на особую группу — людей, которые обычно не стремятся петь на публике. Это G.','Прочитай следующее предложение: уверенность, преодоление страха сцены и других страхов всё ещё прямо названы. Эти сведения удаление who are ordinarily shy не стирает.','Поэтому выбери точную потерю, а не общий пересказ всей темы психологической пользы.'],
 'В вопросе об удалении определи работу именно удаляемых слов. Уточнение «какие люди?» может исчезнуть, хотя описание пользы для них в остальных предложениях сохранится.',
 ['The club welcomes people who usually avoid competitions. → The club welcomes people.','Клуб принимает людей, которые обычно избегают соревнований. → Клуб принимает людей. После удаления потеряна характеристика группы, а не сам факт приёма в клуб.'],
 ['F приписывает уточнению международную тему; в нём нет ничего о странах.','H похож на тему следующего предложения, но именно это предложение о пользе остаётся. Кроме того, chronically сильнее исходного ordinarily.','J добавляет «в будущем», хотя абзац описывает уже существующий эффект.'],
 'Удалили who are ordinarily shy → потеряли «какая именно группа людей».'),
 'If the writer were to delete the clause "who are ordinarily shy" from the preceding sentence, the essay would primarily lose:');

add(73,'B','Use when for the stage in an experience',['timing'],
 '“The singers may feel nervous or silly if they first take the stage, but when the audience breaks out into applause …” → “… when they first take the stage …”',[
 'The sentence follows two moments in a performance: first taking the stage and later hearing applause. “When” identifies the first moment, making B the clearest temporal connection.',
 '“May feel” already leaves room for different reactions. The sentence does not need to make taking the stage a new hypothetical condition; it describes how performers may feel at the beginning of an experience.',
 'A, “if,” gives a conditional relation rather than the intended timing. C, “unless,” reverses the condition. D, “where,” introduces location rather than the moment of first appearing onstage. B matches the later “when” clause and the sequence of feelings.'
 ],['NO CHANGE','when','unless','where'],r(
 'Сначала певцы могут нервничать, когда впервые выходят на сцену. Затем, когда зал аплодирует, они чувствуют вознаграждение. Предложение показывает два момента опыта.',
 ['Найди временную подсказку first take the stage — «впервые выходят на сцену / поначалу выходят».','Справа есть but when the audience breaks out into applause — «но когда публика начинает аплодировать». Это следующий момент той же ситуации.','B, when, связывает первое чувство с моментом выхода, а второе when — с аплодисментами.','Слова may feel уже означают «могут чувствовать», а не обещают одинаковую нервозность всем. Нам нужно время возникновения возможного чувства, а не новое условие if.'],
 'When — когда, момент события. If — если, условие. Unless — если не. Where — где, место. Грамматически возможный союз всё равно может менять смысл хуже, чем другой вариант.',
 ['I felt nervous when the interview began, but relaxed when the conversation became friendly.','Я нервничал, когда интервью началось, но расслабился, когда беседа стала дружелюбной. Две части отмечают последовательные моменты.'],
 ['A задаёт условие вместо более точного времени начала выступления. Это выбор лучшей смысловой связи, не запрет if во всех похожих предложениях.','C, unless, означает «если не» и переворачивает нужное условие.','D указывает на место, хотя здесь описывают момент изменения чувства.'],
 'Первый выход и последующие аплодисменты — два «когда», поэтому B.'));

add(74,'F','Use less than for a monetary amount',['money'],
 '“karaoke made no less than $7 billion in profit in Japan.”',[
 'The sentence treats $7 billion as an amount of money. “No less than” is the appropriate expression for that amount and emphasizes its size. F preserves the original wording.',
 'Use “fewer” for countable individual items and “less” for an amount measured as a whole. A plural currency word does not automatically require “fewer”: “less money” and “less than seven billion dollars” refer to the total amount.',
 'G, “lesser than,” is not the normal amount comparison here. H uses both the wrong quantifier for this amount and “then” instead of comparative “than.” J, “few than,” does not provide the required comparative form. F is correct.'
 ],['NO CHANGE','lesser than','fewer then','few than'],r(
 'Речь о сумме прибыли: 7 миллиардов долларов как единое количество денег. Выражение no less than подчёркивает: «не менее чем», «целых».',
 ['Определи, что сравнивают: не количество отдельных банкнот, а общий денежный объём.','Для суммы используется less: less money, less than seven billion dollars. То, что dollars — слово во множественном числе, не превращает сумму в перечень отдельных предметов для fewer.','В исходнике no less than $7 billion — нормальная конструкция. Поэтому F, NO CHANGE.','Заодно проверь than: это слово для сравнения. Then означает «тогда, затем» и здесь не подходит.'],
 'Less — меньший объём или количество, рассматриваемое как величина. Fewer — меньше отдельных исчисляемых предметов. Суммы денег, как и меры времени или расстояния, часто рассматриваются как целая величина.',
 ['The trip cost less than fifty dollars. We bought fewer tickets.','Поездка стоила меньше пятидесяти долларов. Мы купили меньше билетов. В первом случае сумма денег, во втором — отдельные билеты.'],
 ['G, lesser than, не является обычной конструкцией для такой денежной суммы.','H содержит fewer для суммы и ошибочное then вместо than.','J, few than, не образует сравнительную форму.'],
 'Сумма денег → less than. Сравнение → than, не then.'));

add(75,'D','Keep a whole-essay addition relevant',['bridge','contrast','shy','lasting'],
 'The essay explains karaoke’s appeal through stardom, sharing a normally solitary activity, and confidence. The proposed sentence lists regional preferences and requested country artists.',[
 'The proposed information concerns which performers people request, not the essay’s main question of why karaoke is appealing. It would start a separate discussion of musical preferences. D keeps the essay focused.',
 'Check the purpose of each candidate paragraph. Paragraph 3 develops social enjoyment, Paragraph 4 develops confidence and overcoming shyness, and Paragraph 5 concludes that enjoyment helps karaoke endure. None develops regional preferences or country artists.',
 'A would interrupt the private-versus-shared-experience explanation. B would interrupt the psychological-effect discussion. C would add a new undeveloped topic at the conclusion. Being related to karaoke is not enough to make the sentence serve this essay’s argument.'
 ],['placed at the end of Paragraph 3.','placed at the end of Paragraph 4.','placed at the end of Paragraph 5.','NOT added to the essay at all.'],r(
 'Добавляемая фраза рассказывает, каких исполнителей и жанр заказывают в разных регионах США. А эссе объясняет, почему людям нравится караоке: звёздность, совместное пение и уверенность.',
 ['Сформулируй основную задачу текста: объяснить привлекательность и устойчивую популярность караоке.','Теперь задачу новой фразы: назвать региональные вкусы и популярных кантри-исполнителей. Это другая линия — что выбирают, а не почему само занятие привлекательно.','Проверь предложенные места. В 3 обсуждают личное и совместное переживание, в 4 — застенчивость и уверенность, в 5 подводят итог. Ни один абзац не развивает музыкальные предпочтения регионов.','Значит, не надо насильно находить место любому факту о караоке. D сохраняет фокус эссе и не открывает новую тему без развития.'],
 'Для вставки во всё эссе проверь не только общую тему, но и цель. Факт может быть связан с караоке и всё же не помогать объяснению его привлекательности.',
 ['An essay about why people enjoy hiking does not automatically need a list of the most popular shoe brands.','Эссе о том, почему людям нравится ходить в походы, не обязано включать список популярных марок обуви. Общая связь с занятием ещё не делает факт полезным для рассуждения.'],
 ['A: новая фраза прерывает тему совместного пения и переводит её на жанровые предпочтения.','B: список исполнителей не завершает мысль о преодолении застенчивости.','C: в заключении появился бы новый, неразвитый разговор о региональных вкусах вместо итога причин популярности.'],
 'Why people enjoy karaoke ≠ which artists they request. Поэтому D.'),
 'This question asks about the preceding passage as a whole. Upon reviewing notes for this essay, the writer comes across some information and composes the following sentence incorporating that information: “While different regions of the United States prefer different artists, the most popular karaoke requests are invariably for country artists, varying from the modern Carrie Underwood to the classic Johnny Cash.” For the sake of the logic and coherence of this essay, this sentence should be:');

export const questions=records.map(({ru,...question})=>question);
export const evidenceRu=Object.fromEntries(records.map(({id,ru})=>[id,ru]));
