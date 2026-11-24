import { sourceRefs } from './english-passage.mjs';
const records=[];
function add(id,key,topic,refs,evidence,explanation,choices,ru,prompt='Choose the best replacement for the underlined portion.'){
 records.push({id,key,topic,section:'english',prompt,evidence,explanation,evidenceSources:refs.map(ref=>sourceRefs[ref]),choices:choices.map((text,i)=>({label:(id%2?'ABCD':'FGHJ')[i],text})),ru});
}
const r=(quote,steps,rule,example,wrong,remember)=>({quote,steps,rule,example,wrong,remember});

add(31,'A','Keep the verb and its object together',['owners'],
 '“cats have developed an intricate language not for each other, but for the human beings …”',[
 'The core is “cats have developed an intricate language.” “An intricate language” is the direct object: it answers “developed what?” A keeps that object attached to its verb.',
 'No punctuation is needed between “developed” and “an intricate language.” The following “not for … but for …” identifies the intended audience and stays attached to the same thought.',
 'B inserts a comma between the verb and its object. D uses a semicolon where the following words do not form an independent clause. C needlessly separates “language” from the contrasting “not for … but for …” explanation.'
 ],['NO CHANGE','developed, an intricate language','developed an intricate language,','developed; an intricate language'],r(
 'Кошки have developed — «разработали» — что? An intricate language, «сложный язык». Затем автор уточняет, для кого он предназначен.',
 ['Сократи предложение до основы: cats have developed a language. Слово language — предмет, на который направлено действие developed.','Поставь вопрос «разработали что?». Ответ должен прямо следовать за глаголом. Запятая или точка с запятой между developed и его дополнением не нужны.','A сохраняет цельную основу и продолжение not for each other, but for humans. Это противопоставление адресатов одного языка; отрезать его лишней запятой после language тоже не требуется.'],
 'Глагол и его прямое дополнение обычно не разделяются знаком. Точка с запятой соединяет самостоятельные части; an intricate language само по себе не предложение.',
 ['She developed a new method for beginners.','Она разработала новый метод для начинающих. Между developed и a new method нет запятой.'],
 ['B разрывает глагол и дополнение. D оставляет после точки с запятой фрагмент без основы. C добавляет ненужный разрыв перед not for.'],
 'Сначала прочитай «кто сделал что», затем оцени знаки.'));

add(32,'F','Express the specific ownership relationship',['owners'],
 '“the human beings who have adopted them as pets.”',[
 'The question asks specifically for the relationship between people and cats as pets. “Have adopted them as pets” identifies the people who have taken those cats into their care. F states that relationship directly.',
 'Liking cats and owning or adopting them are different ideas. A person can enjoy cats without having one as a pet. The sentence needs the narrower ownership relationship.',
 'G and J describe affection or preference, not ownership. H adds information about dogs and does not explain the relationship with the cats.'
 ],['NO CHANGE','like to have cats around.','often have dogs as well.','are naturally inclined to like cats.'],r(
 'В конце первого абзаца указаны люди, которые have adopted them as pets — приняли этих кошек к себе как питомцев.',
 ['Выдели точное требование: нужно показать связь хозяина и питомца, а не просто симпатию к животному.','Слова adopted them as pets сообщают действие: люди взяли кошек к себе. Это прямо объясняет, почему далее они называются owners.','F сохраняет эту конкретную связь. Человек, который любит наблюдать за кошками, ещё не обязательно имеет свою кошку.'],
 'В вопросах с most clearly выбери формулировку, которая прямо выполняет названную цель. Более общая приятная мысль может быть грамматически верной, но не отвечать задаче.',
 ['They adopted the dog as a pet.','Они взяли собаку к себе как питомца. Это конкретнее, чем They like dogs — «они любят собак».'],
 ['G и J говорят о предпочтении. H сообщает о собаках. Ни один из них не устанавливает нужную связь с этими кошками.'],
 'Подставляй вариант под точное требование вопроса.'));

add(33,'C','Give an introductory modifier the correct subject',['nonverbal'],
 '“When communicating with each other, cats’ ‘talk’ is a complex system of nonverbal signals.”',[
 'The introductory phrase describes the animals doing the communicating. The main clause should therefore begin with “cats.” C gives “When communicating with each other, cats ‘talk’ with a complex system of nonverbal signals.”',
 'Ask who is communicating before reading the options. The answer is cats, not their “talk” or a system. C also uses the direct active structure “cats talk.”',
 'A puts the abstract noun “talk” in the subject position. B makes “a complicated system” the subject. D delays the animals behind “talking is done by them,” leaving an awkward and unclear connection.'
 ],['NO CHANGE','a complicated system of nonverbal signals is used by cats to "talk."','cats "talk" with a complex system of nonverbal signals.','talking is done by them with a system of complex nonverbal signals.'],r(
 'Начало When communicating with each other означает «когда общаются друг с другом». Нужно ясно назвать того, кто общается.',
 ['Задай вопрос к вступлению: кто communicating? Кошки. Не система сигналов и не отвлечённое слово talk.','После запятой ищи подлежащее cats. В C сразу стоит cats, а затем действие talk. Получается: «Когда кошки общаются друг с другом, они используют систему невербальных сигналов».','C соединяет вступительный оборот с правильным действующим лицом и даёт простую активную основу cats talk.'],
 'У сокращённого вступительного оборота должен быть ясный исполнитель в главной части. Обычно это её подлежащее. Проверяй: «Кто выполняет действие в начале?»',
 ['While crossing the street, Maya noticed a bicycle.','Переходя улицу, Майя заметила велосипед. Идёт через улицу именно Maya, подлежащее главной части.'],
 ['В A подлежащее cats’ talk, в B — a system. D использует тяжёлое talking is done by them вместо прямого cats talk и не даёт ясного исполнителя после вступления.'],
 'Вступительное действие должно относиться к правильному подлежащему.'));

add(34,'F','Match the verb to the real subject',['tails'],
 '“their tails, rather than any kind of ‘speech,’ provide cats’ chief means of expression.”',[
 'The subject is the plural “their tails.” The phrase “rather than any kind of speech” interrupts that subject–verb connection but does not change the subject. The plural verb “provide” is correct.',
 'Temporarily remove the interrupting phrase: “their tails provide cats’ chief means of expression.” The sentence then reveals the required verb form clearly.',
 'G gives a participle rather than the needed finite verb. H uses singular “has.” J produces “their tails … were provided by cats’ chief means,” reversing the intended relationship and leaving an unsuitable construction.'
 ],['NO CHANGE','having provided','has provided','were provided by'],r(
 'В предложении главным подлежащим является their tails — «их хвосты», во множественном числе. Rather than any kind of speech — вставленное противопоставление.',
 ['Мысленно убери слова между двумя запятыми. Останется their tails provide cats’ chief means of expression.','Задай вопрос: что обеспечивает средство выражения? Хвосты, tails. Для множественного числа в настоящем времени нужна форма provide без окончания -s.','В исходнике уже стоит provide, поэтому F, NO CHANGE. Ближайшее слово speech в единственном числе не управляет этим глаголом.'],
 'Согласуй сказуемое с главным подлежащим, а не с ближайшим существительным внутри вставки. Having provided не заменяет самостоятельное сказуемое такого предложения.',
 ['The windows, rather than the door, provide light.','Окна, а не дверь, дают свет. Подлежащее windows множественное, поэтому provide.'],
 ['G не даёт нужного самостоятельного сказуемого. H согласует has с единственным числом. J переворачивает смысл: получается, будто хвосты были кем-то предоставлены.'],
 'Убери вставку и проверь короткую основу.'));

add(35,'C','Identify an exception within a general trend',['nonverbal','contact','pain'],
 '“They also use physical contact … With other cats, cats will use their voices only to express pain.”',[
 'The paragraph presents communication between cats as mainly nonverbal: signals from tails and physical contact. Its last sentence introduces the author’s stated exception, using the voice to express pain.',
 'Deleting that sentence would remove the exception to the paragraph’s general pattern. C describes that loss. The word “only” makes the narrow exception especially clear.',
 'A calls it redundant, but the earlier sentences do not supply this exception. B calls it another nonverbal example even though it concerns voices. D calls it a summary, but the sentence adds a specific qualification instead.'
 ],['a redundant point made elsewhere in the essay.','another description of the ways in which cats communicate nonverbally.','an exception to the general trend described in this paragraph.','a brief summary of the information contained in the essay up to this point.'],r(
 'Абзац описывает невербальное общение. Последнее предложение отдельно утверждает: с другими кошками голос используется only to express pain — только для выражения боли.',
 ['Назови общую линию абзаца: хвосты, сигналы, прикосновения, то есть общение без голоса.','Теперь сравни последнее предложение. Оно говорит именно о голосе и ограничивает случай его использования болью. В логике автора это исключение из общей линии.','Если удалить его, исчезнет оговорка об исключении. Поэтому C. Здесь анализируем функцию утверждения в данном тексте.'],
 'Для удаления предложения сначала определи его роль относительно соседних: пример, причина, исключение, итог или новая тема. Слова only, except, although часто помогают заметить ограничение.',
 ['The rooms are usually quiet. Only the kitchen is noisy.','Комнаты обычно тихие. Только на кухне шумно. Второе предложение задаёт исключение, а не ещё один пример тишины.'],
 ['A: ранее эта оговорка не дана. B: voices — голос, поэтому это не невербальный пример. D: предложение не суммирует всё эссе.'],
 'Сравни частный факт с общей тенденцией.'));

add(36,'J','Start a paragraph at a change in focus',['contact','pain','change','range'],
 '“Next, incredibly, all of that changes when a human walks into the room. Cats use a wide range of vocal expressions …”',[
 'The preceding discussion concerns communication with other cats. This sentence changes the focus to communication with humans, which the following sentence develops. A new paragraph makes that shift clear.',
 'J begins a paragraph with “Incredibly, all of that changes ….” “Incredibly” expresses surprise. “Next” suggests an ordered sequence of steps, but the essay is making a contrast between audiences.',
 'F retains “Next, incredibly.” G removes “Next” but does not begin the new paragraph. H begins a paragraph yet retains the unnecessary sequencing word. J satisfies both organization and wording.'
 ],['NO CHANGE','(Do NOT begin new paragraph) Incredibly,','(Begin new paragraph) Next incredibly,','(Begin new paragraph) Incredibly,'],r(
 'До этого речь об общении кошек между собой. После all of that changes автор переходит к тому, как кошки общаются с человеком.',
 ['Определи старую и новую темы: «другие кошки» сменяются «человек». Это смысловая граница для нового абзаца.','Затем проверь переходное слово. Здесь не следующий шаг инструкции и не следующее действие по порядку, поэтому Next не требуется. Incredibly сохраняет удивление автора.','J выполняет обе задачи: начинает новый абзац и оставляет Incredibly без Next. Проверять только слово или только абзац недостаточно.'],
 'Новый абзац помогает показать смену темы. В вариантах с указанием paragraph оценивай одновременно место границы и формулировку перехода.',
 ['Among friends, he is quiet. / With an audience, however, he becomes lively.','С друзьями он тихий. / Перед публикой, однако, он оживляется. Новый абзац может подчеркнуть смену ситуации, а however — контраст.'],
 ['F сохраняет ненужное Next. G исправляет слово, но не задаёт нужный новый абзац. H задаёт абзац, но оставляет Next.'],
 'В составном варианте должны подходить обе части.'));

add(37,'C','Plural possessive nouns',['conclusion'],
 '“Since cats verbal expressions are not used to communicate with other cats …”',[
 'The expressions belong to cats in general, so the sentence needs the possessive form of the plural noun “cats.” Add the apostrophe after the plural -s: “cats’ verbal expressions.”',
 'First identify the owner, cats, then what belongs to them, verbal expressions. Because “cats” is already plural, its possessive is “cats’,” not singular “cat’s.”',
 'A omits the possessive apostrophe. B uses a singular owner. D still omits the apostrophe and adds a comma separating the subject phrase from its verb “are.”'
 ],['NO CHANGE','cat\'s verbal expressions','cats\' verbal expressions','cats verbal expressions,'],r(
 'В выражении cats verbal expressions нужно сказать, чьи это голосовые выражения: кошек вообще, во множественном числе.',
 ['Определи владельца: cats, не одна конкретная cat. Множественное число уже имеет окончание -s.','Для притяжательной формы обычного множественного числа на -s добавь апостроф после s: cats’. Получится cats’ verbal expressions.','C даёт эту форму. После expressions сразу идёт are: отделять подлежащее от его сказуемого запятой не нужно.'],
 'Одна кошка: cat’s. Несколько кошек: cats’. Сначала выбери число владельца, затем ставь апостроф. Множественное число предмета expressions само по себе не определяет число владельца.',
 ['One cat’s toy; several cats’ toys.','Игрушка одной кошки; игрушки нескольких кошек. В первом случае апостроф перед s, во втором после s.'],
 ['A не показывает принадлежность. B называет одного владельца. D тоже не даёт апостроф и дополнительно разрывает expressions are запятой.'],
 'Кошки во множественном числе → cats’ + то, что им принадлежит.'));

add(38,'J','Remove repeated meaning',['conclusion'],
 '“it is logical and reasonable to conclude …”',[
 'In this context, “logical” and “reasonable” give the same evaluation of the conclusion. J keeps the needed meaning in one word: “it is logical to conclude.”',
 'A shorter choice is useful here because it preserves the grammatical structure and the whole relevant idea. The essay does not need an extra degree of intensity or a second synonym.',
 'F repeats the evaluation with two similar adjectives. G repeats it with “logical and well-reasoned.” H adds “to a startling degree,” an emphasis that is unnecessary for the argument.'
 ],['NO CHANGE','logical and well-reasoned','logical to a startling degree','logical'],r(
 'В этой фразе logical и reasonable оба характеризуют вывод как обоснованный. Второе слово не добавляет отдельной мысли.',
 ['Спроси, что должно остаться: автор считает вывод логичным. Одного logical для этого достаточно.','Проверь предложение после сокращения: it is logical to conclude. Грамматика полная, нужная оценка сохранена.','Выбираем J. Причина не просто в меньшем числе слов: удаляется повтор без потери важного смысла.'],
 'В ACT краткость полезна, когда сохраняются смысл, грамматика и нужная точность. Не выбирай короткий ответ автоматически, если он что-то существенное удаляет.',
 ['The explanation is clear.','Объяснение ясное. Добавление and easy to understand часто повторяет ту же оценку.'],
 ['F и G повторяют близкие оценки. H добавляет степень удивительности, которая не нужна для логики вывода.'],
 'Убери повтор и проверь, сохранилась ли вся нужная мысль.'));

add(39,'D','Adverb form and a suitable connector',['observe','only','companions'],
 '“This fact is demonstrated more clear since observing households that have only one cat.”',[
 'The sentence tells how clearly the fact is demonstrated, so it needs the adverb “clearly.” It also identifies the observation situation, “when observing households ….” D fixes both parts.',
 'The result is “This fact is demonstrated more clearly when observing households that have only one cat.” Read it as “the fact is demonstrated more clearly when one observes such households.” The next sentences explain the comparison.',
 'B has “when” but leaves the adjective “clear” modifying “demonstrated.” C has “clearly” but leaves the unsuitable “since observing” connection. A leaves both issues.'
 ],['NO CHANGE','clear when','clearly since','clearly when'],r(
 'Фраза описывает, насколько ясно факт демонстрируется при наблюдении за домами с одной кошкой. Следующие предложения поясняют это наблюдение.',
 ['Найди слово, которое уточняется: demonstrated — «продемонстрирован». Для «как продемонстрирован?» нужно наречие clearly, а не прилагательное clear.','Проверь связь со словом observing. Нужен смысл «при наблюдении / когда наблюдают». When даёт этот смысл; since observing здесь не создаёт нужной связи.','D исправляет обе части: more clearly when observing. Можно раскрыть смысл как «когда наблюдают такие дома, этот факт виден яснее».'],
 'Прилагательное описывает признак предмета: a clear example. Наречие описывает, как выполняется или проявляется действие: demonstrated clearly. Затем отдельно проверь союз по смыслу.',
 ['The rule is clear. The teacher explains it clearly.','Правило ясное. Учитель объясняет его ясно. Clear относится к rule, clearly — к explains.'],
 ['B исправляет только союз. C исправляет только форму clear. A сохраняет обе проблемы.'],
 'Если меняются два слова, проверь оба.'));

add(40,'J','Keep an added detail relevant',['observe','only','companions'],
 'The paragraph compares an only cat with cats that have feline companions. The proposed addition switches to birds and “bird song.”',[
 'This paragraph explains the author’s one-cat versus multiple-cat comparison. A fact about how birds communicate does not develop that comparison or the essay’s focus on cats and human owners.',
 'A true statement is not automatically a useful addition. J rejects it for lack of relevance at this point in the paragraph and in the larger argument.',
 'F overstates uniqueness and adds a claim the bird example cannot establish. G treats a fact about another animal as relevant merely because it is interesting. H says it repeats earlier information, but birds were not discussed.'
 ],['Yes, because it shows that cats are truly unique in communicating nonverbally.','Yes, because it adds a relevant and enlightening detail about another animal.','No, because it basically repeats information given earlier in the essay.','No, because it does not contribute to the development of this paragraph and the essay as a whole.'],r(
 'Добавляемое предложение сообщает о голосовом общении птиц. Текущий абзац сравнивает единственную кошку в доме с кошками, у которых есть сородичи.',
 ['Назови задачу абзаца: пояснить различие в общении кошек в двух домашних ситуациях.','Проверь новую деталь по этой задаче. Bird song не объясняет ни поведение единственной кошки, ни общение с владельцем. Тематика «животные» слишком широкая связь.','J правильно отказывается от вставки: она уводит от развития текущего сравнения и общей темы. Истинность факта не делает его уместным.'],
 'Для вставки проверяй не только правду факта, но и его работу в тексте: что именно он поясняет, подтверждает или связывает?',
 ['A paragraph about learning a violin piece does not need an unrelated fact about trumpet design.','Абзацу о разучивании скрипичной пьесы не нужен посторонний факт об устройстве трубы: общая тема музыки ещё не обеспечивает уместность.'],
 ['F делает недоказанное утверждение об уникальности. G не объясняет, чем факт помогает этому абзацу. H неверно называет его повтором: птицы раньше не обсуждались.'],
 'Интересный и истинный факт всё равно может быть лишним.'),
 'At this point, the writer is considering adding the following true statement: “On the other hand, the natural way for most birds to communicate is vocally, by way of the ‘bird song.’” Should the writer add this sentence here?');

add(41,'A','Use two commas around a parenthetical phrase',['examples'],
 '“If an owner knows, to name just a few examples, which meow means the cat is hungry …”',[
 '“To name just a few examples” is a parenthetical interruption. It begins after “knows” and ends at the comma after “examples.” A preserves the opening comma that pairs with that closing comma.',
 'Remove the interruption to see the core: “If an owner knows which meow means ….” The original does not incorrectly separate “knows” from its object; the paired commas mark an inserted comment.',
 'B adds a comma after “to,” splitting that word from “name.” C removes the needed opening comma and adds the wrong comma after “to.” D removes the opening comma but leaves the later closing comma unpaired.'
 ],['NO CHANGE','knows, to,','knows to,','knows to'],r(
 'Полная вставка — to name just a few examples, «если назвать лишь несколько примеров». Она начинается после knows и заканчивается уже напечатанной запятой после examples.',
 ['Посмотри шире подчёркивания: knows, to name just a few examples, which meow means …. Запятая после examples — вторая граница вставки.','Мысленно убери всю вставку. Останется If an owner knows which meow means …. Основа складывается: хозяин знает, что означает мяуканье.','Чтобы вставку вернуть, нужны обе запятые. A сохраняет первую после knows, а вторая уже есть после examples. Поэтому NO CHANGE.'],
 'У вставного замечания внутри предложения обычно две границы. Нельзя оценивать одну запятую отдельно от второй. Внутри to name запятой нет: to связано с глаголом name.',
 ['She knows, for example, where the key is.','Она знает, например, где ключ. Удаляем for example вместе с двумя запятыми и получаем She knows where the key is.'],
 ['B и C разрывают to name запятой после to. D удаляет первую границу, но оставляет запятую после examples без пары.'],
 'Найди начало и конец всей вставки.'));

add(42,'G','Add examples that satisfy the stated goal',['examples','learn'],
 'The preceding sentence lists hunger, wanting to be petted, and wanting a “conversation.” The question requests additional emotions.',[
 'G lists pain, sadness, irritation, and love. It extends the existing examples with several other feelings that cats can express to owners, directly meeting the writer’s stated goal.',
 'The task is not simply to add a true statement about animals. It specifically asks for a large number of additional emotions, so a useful answer must supply such examples.',
 'F changes to other animals and repeats hunger rather than adding emotions. H compares audiences without naming new emotions. J describes communication across mammals without supplying the requested examples.'
 ],['Many animals communicate hunger similarly to cats.','Cats will tell their owners when they feel pain, sadness, irritation, or love.','Cats communicate these emotions differently to other cats.','Humans have the easiest time communicating with other mammals.'],r(
 'До места вставки названы голод, желание ласки и желание «поговорить». В вопросе специально требуется расширить список другими эмоциями.',
 ['Переведи цель в короткое требование: «назвать ещё несколько чувств, которые кошка выражает хозяину».','G содержит конкретный список: pain, sadness, irritation, love — боль, грусть, раздражение и любовь. Это новые примеры, а не общее сообщение.','Выбираем G, потому что он выполняет именно заданную функцию расширения. Другие варианты могут быть правдивыми, но нужного списка не дают.'],
 'Когда вопрос задаёт цель вставки, оцени каждый ответ по ней. Совпадения с общей темой животных недостаточно.',
 ['To show more emotions, add “fear, joy, and disappointment,” not “many people have emotions.”','Чтобы показать разнообразие чувств, назови страх, радость и разочарование. Фраза «у многих людей есть чувства» список не расширяет.'],
 ['F повторяет голод и меняет объект на других животных. H сравнивает способы общения. J говорит о млекопитающих вообще.'],
 'Нужны новые эмоции — ищи названия новых эмоций.'),
 'If the writer wanted to emphasize that cats communicate vocally with their owners to express a large number of different emotions in addition to those listed in the previous sentence, which of the following true statements should be added at this point?');

add(43,'C','Compare parallel grammatical forms',['parallel'],
 '“communicating with their pets … is every bit as important … as to communicate with other humans.”',[
 'The sentence compares two activities. The first is expressed as “communicating with their pets.” C matches that form with “as communicating with other humans.”',
 'Reduce the sentence to “Communicating with pets is as important as communicating with humans.” Matching -ing forms makes the two sides of the comparison grammatically parallel.',
 'A switches to an infinitive. B compares the activity with “being communicative,” a quality rather than the matching action. D substitutes “through” and no longer completes the “as important as” comparison.'
 ],['NO CHANGE','as being communicative','as communicating','through communicating'],r(
 'Автор сравнивает два занятия: communicating with their pets и общение с людьми. Первое уже выражено формой на -ing.',
 ['Убери уточнения и получи каркас: communicating with pets is as important as …. После второго as нужно сопоставимое занятие.','Сохрани ту же грамматическую форму: communicating with humans. Это не просто одинаковые окончания, а одинаковая роль двух действий в сравнении.','C даёт as communicating. С обеих сторон сравниваются процессы общения, и конструкция as important as остаётся полной.'],
 'Параллелизм: связанные или сравниваемые элементы выражай совместимыми грамматическими формами. Здесь это -ing + as … as + -ing.',
 ['Reading is as useful as listening.','Читать так же полезно, как слушать. В английском обе деятельности названы одинаковой формой на -ing.'],
 ['A меняет вторую форму на to communicate. B подставляет качество being communicative вместо того же действия. D теряет второе as конструкции сравнения.'],
 'Прочитай только две сравниваемые части.'));

add(44,'G','Remove a redundant description',['noises'],
 '“not just making senseless noises without any rhyme or reason but … making an attempt to communicate”',[
 '“Senseless” already expresses the lack of sense or purpose conveyed here by “without any rhyme or reason.” G keeps the contrast with meaningful communication while removing the repeated idea.',
 'The sentence remains complete: “the cat is not just making senseless noises but is making an attempt to communicate.” Both sides of “not just … but …” are preserved.',
 'F repeats the idea. H repeats lack of thought after “senselessly.” J repeats the lack of meaning and adds an unnecessary interruption. G is the concise version that keeps the intended point.'
 ],['NO CHANGE','making senseless noises','senselessly making noises with no thought involved','making senseless noises, having no idea what they mean,'],r(
 'Senseless noises уже означает бессмысленные звуки. Without any rhyme or reason здесь повторяет отсутствие смысла или причины.',
 ['Найди смысл, который нужен в первой части: кошка не просто издаёт бессмысленный шум.','Удали повтор и перечитай связь с but: not just making senseless noises but is making an attempt to communicate. Противопоставление «шум — попытка общения» сохранено.','G оставляет нужное содержание без лишнего объяснения того же самого. Это сокращение с сохранением смысла.'],
 'Повтор может прятаться в идиоме. Without rhyme or reason — «без видимой логики или причины». Если этот смысл уже выражен рядом, проверь, нужен ли повтор.',
 ['The instructions were confusing.','Инструкции были непонятными. Дополнение and difficult to understand может повторить ту же мысль.'],
 ['F сохраняет повтор. H ещё раз объясняет отсутствие мысли. J ещё раз сообщает отсутствие смысла и утяжеляет фразу вставкой.'],
 'Проверь, не объясняют ли соседние слова один и тот же признак.'));

add(45,'B','End with the essay’s central claim',['owners','conclusion','learn','noises','ending'],
 '“owners should … learn what their different meows mean” and “your cat isn’t meowing just for the sake of making noise; however, cats are less communicative …”',[
 'The essay argues that a cat’s sounds can carry a message for its human owner, who should learn to understand them. B concludes with exactly that point: “rather, there’s a good chance your cat is trying to tell you something.”',
 '“Rather” replaces the rejected explanation, meaningless noise, with the author’s preferred explanation, an attempt to communicate. It makes the final sentence consistent with the advice immediately before it.',
 'A introduces an unsupported comparison with other animals. C switches the intended audience to other cats, contrary to the essay’s argument. D introduces advice about owning several cats that the essay has not developed.'
 ],['NO CHANGE','rather, there\'s a good chance your cat is trying to tell you something.','instead, your cat is probably trying to communicate with other cats by meowing.','on the other hand, it is better to have more than one cat so they can undergo a natural development.'],r(
 'Эссе предлагает хозяевам учиться понимать разные мяуканья. Перед заключением автор противопоставляет бессмысленный шум попытке общения.',
 ['Сформулируй главную мысль: по версии автора, кошка может передавать хозяину сообщение голосом, и стоит попытаться её понять.','Первая часть последнего предложения уже отвергает объяснение «это просто шум». Теперь нужна положительная замена: «скорее, она пытается что-то тебе сказать».','B даёт эту замену через rather. Он завершает ту же мысль, которую развивают предыдущие абзацы, и не добавляет нового совета.'],
 'Для заключения проверь связь с центральным тезисом всего эссе и с предыдущим предложением. Слова rather и instead требуют подходящей смысловой замены, а не просто любого контраста.',
 ['This is not a random mark; rather, it is a signal.','Это не случайная отметка; скорее, это сигнал. Rather вводит объяснение взамен отвергнутого.'],
 ['A меняет тему на сравнение с другими животными. C называет других кошек адресатами, что противоречит основной линии автора. D добавляет неразвитый совет завести больше кошек.'],
 'Финал возвращает к главной мысли, а не начинает новую.'),
 'Which choice would best summarize the main point the essay makes about cats’ communication with their human owners?');

const prompts={32:'Which choice would most clearly and effectively express the ownership relationship between humans and cats?',35:'If the preceding sentence were deleted, the essay would primarily lose:'};
export const questions=records.map(({ru,...question})=>({...question,prompt:prompts[question.id]??question.prompt}));
export const evidenceRu=Object.fromEntries(records.map(({id,ru})=>[id,ru]));
