import { sourceRefs } from './english-passage.mjs';

const records=[];
function add(id,key,topic,refs,evidence,explanation,choices,ru,prompt='Choose the best replacement for the underlined portion.'){
 records.push({id,key,topic,section:'english',prompt,evidence,explanation,evidenceSources:refs.map(ref=>sourceRefs[ref]),choices:choices.map((text,i)=>({label:(id%2?'ABCD':'FGHJ')[i],text})),ru});
}
const r=(quote,steps,rule,example,wrong,remember)=>({quote,steps,rule,example,wrong,remember});

add(46,'J','Concision: stepping back in time',['time'],
 '“Visiting Mackinac … Island is like taking a step back to the past in time.” → “… is like stepping back in time.”',[
 'The comparison means that visiting the island feels like returning to an earlier period. “Stepping back in time” expresses that idea completely. J fits the unchanged words “is like” before the blank and “in time” after it.',
 'Read the whole revised sentence, not just the option. In “stepping back in time,” “back” already indicates an earlier time. Adding “to the past” repeats the direction rather than supplying a new fact.',
 'F keeps the repeated meaning. G uses the cumbersome and unnatural “past-related direction.” H repeats “the past” and adds an unnecessary contrast with “the future.” J removes the repetition while preserving the image.'
 ],['NO CHANGE','moving in a past-related direction','going back to the past, not the future,','stepping back'],r(
 'Автор сравнивает посещение острова с возвращением в прошлое: вокруг старые дома, форт и конные экипажи. Исходное taking a step back to the past in time передаёт это слишком многословно.',
 ['Сначала сохрани слова вне подчёркивания: is like ___ in time. Их нельзя выбросить при подстановке ответа.','Подставь J: is like stepping back in time — «словно шагнуть назад во времени». Это естественное выражение, и смысл уже полный.','Слова back in time сами указывают на прошлое. Дополнительное to the past не объясняет ничего нового.','Выбираем J за точность и отсутствие повтора, а не просто потому, что он самый короткий.'],
 'В задании на краткость убирай повтор одного и того же смысла, сохраняя нужную информацию и грамматическую связь со словами вокруг.',
 ['Walking into the old school felt like stepping back in time.','Войти в старую школу было словно вернуться в прошлое. Дописывать to the past не нужно.'],
 ['F повторяет «назад» и «в прошлое». G заменяет простое выражение неестественной конструкцией «в направлении, связанном с прошлым». H добавляет очевидное и ненужное «а не в будущее».'],
 'Всегда прочитай предложение целиком после подстановки: здесь остаётся in time.'));

add(47,'C','Plural nouns versus possessives',['houses'],
 '“Victorian houses’ and a fort … surround the historic downtown.” → “Victorian houses and a fort … surround …”',[
 'The sentence names two kinds of things surrounding downtown: Victorian houses and a fort. “Houses” is simply a plural noun, so C gives the required form without an apostrophe.',
 'An apostrophe marks possession or certain contractions; it does not normally make a noun plural. Nothing after “houses” is an object owned by the houses. “And a fort” adds another member of the compound subject.',
 'A, “houses’,” is a plural possessive. B, “house’s,” is a singular possessive. D adds a comma that needlessly interrupts this straightforward pair of subjects. C preserves “houses and a fort.”'
 ],['NO CHANGE',"house's",'houses','houses,'],r(
 'В предложении дома и форт окружают исторический центр. Дома здесь ничего не «имеют»: само слово houses — один из двух участников действия surround.',
 ['Найди основу: houses and a fort surround downtown — «дома и форт окружают центр».','Спроси, нужен ли смысл принадлежности: «чьи окна? чьи крыши?» Нет. После houses стоит and a fort — «и форт», а не предмет, принадлежащий домам.','Нужно обычное множественное число: один house, несколько houses. Апостроф не добавляем.','C даёт Victorian houses and a fort. Запятая перед and для двух таких однородных членов тоже не нужна.'],
 'House — один дом; houses — несколько домов; house’s roof — крыша одного дома; houses’ roofs — крыши нескольких домов. Сначала определи смысл, затем выбирай апостроф.',
 ['Old houses and a church surround the square.','Старые дома и церковь окружают площадь. Houses — просто множественное число, без значения «принадлежит домам».'],
 ['A обозначает принадлежность нескольким домам. B обозначает принадлежность одному дому. D вставляет ненужную запятую между houses и and a fort.'],
 'Окончание -s делает здесь множественное число; апостроф для этого не нужен.'));

add(48,'F','Idiomatic prepositions and appropriate tone',['arrival'],
 '“The only way to get to Mackinac Island is by boat or private plane …”',[
 'The sentence explains how visitors reach the island. The ordinary expression is “get to + destination.” F keeps “get to Mackinac Island,” which is clear, direct, and consistent with this informative travel description.',
 'A familiar verb–preposition combination should be judged in its actual sentence. Here “get” means “arrive,” and “to” introduces the destination. No extra phrase is needed to identify who is traveling.',
 'G adds the chatty “your sweet self.” H adds “yourself on down,” which is wordy and introduces an unnecessary directional tone. J, “over to,” can occur in ordinary speech, but adds nothing necessary here. F is the most economical neutral phrasing.'
 ],['NO CHANGE','your sweet self over to','yourself on down to','over to'],r(
 'The only way to get to Mackinac Island означает «единственный способ добраться до острова Макино». Уже имеющееся to правильно вводит место назначения.',
 ['Переведи get в этом контексте: это «добраться», а не «получить».','Для значения «добраться до места» используется get to + место: get to school, get to the island. В исходнике именно эта конструкция.','Статья спокойно объясняет транспортные возможности. Добавления вроде your sweet self меняют тон на нарочито разговорный и не дают полезной информации.','Поэтому F, NO CHANGE: короткая правильная фраза уже есть.'],
 'Устойчивое сочетание проверяй целиком: get to a place — добраться до места. Выбирай нейтральный и точный вариант, если контекст не требует особого разговорного тона.',
 ['We can get to the village by boat.','Мы можем добраться до деревни на лодке. После get стоит to, а способ поездки вводится by.'],
 ['G — длинное разговорное обращение «свою милую персону». H — разговорное yourself on down с лишними словами. J грамматически возможно в другой манере речи, но over здесь не нужно для смысла.'],
 'Не меняй правильную простую конструкцию только ради более длинного варианта.'));

add(49,'C','Adjective punctuation and a clause boundary',['transport'],
 '“Automobiles are outlawed on the little, isolated, Michigan, island, so visitors …” → “… on the little, isolated Michigan island, so visitors …”',[
 '“Michigan island” identifies an island by location and belongs together. “Isolated” describes that unit; commas after “isolated” and “Michigan” needlessly separate the cumulative description. C removes those internal commas.',
 'The comma after “island” does a different job: it precedes “so” joining two complete clauses, “Automobiles are outlawed …” and “visitors can see ….” Keep that boundary. The comma after “little” is outside the tested portion.',
 'A keeps the intrusive commas inside the noun phrase. D also inserts those commas and loses the needed clause-boundary comma. B fixes the noun phrase but omits the comma before “so.” C handles both jobs.'
 ],['NO CHANGE','isolated Michigan island','isolated Michigan island,','isolated, Michigan, island'],r(
 'Речь об isolated Michigan island — «изолированном острове в Мичигане». После описания острова начинается новая часть: so visitors can see … — «поэтому посетители могут увидеть…».',
 ['Отдели две задачи: запятые внутри описания острова и запятая перед следующей самостоятельной частью предложения.','Michigan island — единое сочетание «остров в Мичигане». Michigan уточняет, какой это остров, поэтому запятой от island его не отделяем.','Isolated добавляет характеристику всему сочетанию Michigan island. В варианте C лишние внутренние запятые убраны.','После island запятую сохраняем: далее союз so связывает две основы — automobiles are outlawed и visitors can see. Запятая после little уже стоит вне подчёркивания.'],
 'Не все соседние запятые выполняют одну функцию. Описание существительного проверяется отдельно от границы между двумя самостоятельными частями: полная часть, so полная часть.',
 ['It is a remote Canadian village, so visitors usually stay overnight.','Это удалённая канадская деревня, поэтому посетители обычно остаются на ночь. Внутри remote Canadian village запятых нет; перед so есть граница частей.'],
 ['A сохраняет лишние запятые в isolated, Michigan, island. B убирает нужную запятую перед so. D одновременно разрывает описание запятыми и не ставит знак на границе частей.'],
 'Проверь и середину фразы, и её правый край: C исправляет описание и сохраняет запятую перед so.'));

add(50,'J','Concision in a list of transportation methods',['transport'],
 '“… only by horse carriage, or by riding a bicycle, or on foot.” → “… only by horse carriage, or bicycle, or on foot.”',[
 'The list names ways of seeing the sights. With J, “by” can serve both “horse carriage” and “bicycle”: visitors travel by horse carriage or bicycle, or on foot. “Riding a” is unnecessary because “by bicycle” already names the method.',
 'This is a concision choice, not a claim that every longer alternative is ungrammatical. G, “by bicycle,” is also grammatical. The supplied key selects J as the more economical wording because the earlier “by” can be shared.',
 'F keeps the unnecessary “by riding a.” H changes it to the still wordy “riding on a.” G removes part of the wordiness but repeats “by.” J gives the shortest clear noun naming this transport method without changing the intended meaning.'
 ],['NO CHANGE','by bicycle,','riding on a bicycle,','bicycle,'],r(
 'Перечень сообщает, как осматривать остров: на конном экипаже, на велосипеде или пешком. В ключе выбран J: bicycle,.',
 ['Посмотри на начало списка: only by horse carriage, or ___. Предлог by уже есть перед первым способом передвижения.','Он может относиться и ко второму существительному: by horse carriage or bicycle — «на конном экипаже или на велосипеде». Повторять by для понимания не обязательно.','Вставляем J и читаем всё: only by horse carriage, or bicycle, or on foot. Способ передвижения назван ясно; riding a не добавляет нового смысла.','Важная тонкость: G, by bicycle, тоже грамматически возможно. Здесь J выбран по краткости в присланном ключе. Не делай ложного вывода, будто повтор предлога by всегда запрещён.'],
 'В перечислении один предлог может управлять несколькими однородными существительными: by bus or train. Повтор предлога также бывает правильным; в вопросе на лучшее редактирование учитываем лишние слова и контекст.',
 ['You can travel by bus or train, or on foot.','Можно добраться на автобусе или поезде либо пешком. By относится и к bus, и к train; пешком — устойчивое on foot.'],
 ['F громоздко называет езду на велосипеде вместо самого способа by bicycle. H оставляет riding on a — тоже лишнее в этом списке. G грамматически допустим, но чуть длиннее J из-за повторённого by.'],
 'Краткость — не то же самое, что запрет любой более длинной грамматической формы.'));

add(51,'C','Two complete thoughts: avoid a comma splice',['size'],
 '“… cars are not necessary, Mackinac measures only a mile and a half in diameter.” → “… necessary. Mackinac measures …”',[
 'The first complete thought ends at “necessary”: the island is small enough that cars are not necessary. The next thought has its own subject and verb, “Mackinac measures ….” C separates the two with a period.',
 'A comma alone cannot normally join two independent clauses. A period is a safe boundary; a semicolon or a comma plus an appropriate coordinating conjunction could also work in a differently written option.',
 'A leaves a comma splice. B inserts “furthermore” between commas, but that transition word is not a coordinating conjunction and does not repair the boundary. D uses no boundary at all. C gives two complete sentences.'
 ],['NO CHANGE','necessary, furthermore, Mackinac','necessary. Mackinac','necessary Mackinac'],r(
 'Первая мысль: остров настолько мал, что машины не нужны. Вторая: Макино имеет всего полторы мили в диаметре. Каждую мысль можно прочитать как отдельное предложение.',
 ['Найди основу первой части: the island is small enough. Внутри неё есть уточнение that cars are not necessary. К слову necessary эта мысль закончена.','Справа начинается новая основа: Mackinac measures — «Макино имеет размер». Здесь уже другая самостоятельная часть.','Одна запятая между такими частями создаёт comma splice — ошибочное склеивание двух предложений.','C заменяет эту запятую точкой: necessary. Mackinac measures …. Обе мысли теперь имеют правильную границу.'],
 'Две самостоятельные части можно разделить точкой или точкой с запятой. Можно также связать их подходящим сочинительным союзом с запятой. Furthermore — вводное связующее наречие, а не такой союз.',
 ['The town is small. Most places are within walking distance.','Город маленький. До большинства мест можно дойти пешком. Каждое предложение имеет собственную основу.'],
 ['A оставляет одну запятую вместо границы двух предложений. B добавляет furthermore, но запятые не становятся от этого достаточными. D совсем убирает границу: получается run-on sentence.'],
 'Проверяй основы по обе стороны знака: слово furthermore само не «склеивает» предложения.'));

add(52,'F','The function of a descriptive detail',['arch'],
 '“Arch Rock, a towering limestone arch formed naturally by water erosion.”',[
 'The deleted phrase explains how this particular arch was formed: natural water erosion shaped it. Without the phrase, the reader would still know that Arch Rock is a tall limestone arch, but would no longer learn the process behind its formation. F describes that precise loss.',
 'A deletion question asks what information or function disappears, not whether the remaining sentence is grammatical. Here “formed naturally by water erosion” adds the mechanism of formation.',
 'G is broader and refers to geological formations of tourist attractions in general rather than this one feature. H invents an intended contrast with the governor’s mansion that the sentence does not develop. J is false: the erosion explanation is not repeated elsewhere in the paragraph.'
 ],['a detail describing the unique formation of the Arch Rock.','factual information concerning the geological formations of the tourist attractions on Mackinac Island.',"a contrast to the governor's mansion, which was constructed by human hands.",'nothing; this information is detailed elsewhere in this paragraph.'],r(
 'Arch Rock назван высокой известняковой аркой. Слова formed naturally by water erosion добавляют: арка образовалась естественным путём из-за водной эрозии — постепенного разрушения и изменения породы водой.',
 ['Прочитай предложение без удаляемой части: Arch Rock, a towering limestone arch. Что мы ещё знаем? Название, материал и общий вид — высокая арка.','Теперь верни formed naturally by water erosion. Появился ответ на вопрос «как эта арка возникла?».','Значит, удалится конкретная подробность о происхождении именно Arch Rock. Этому точно соответствует F.','Не нужно доказывать, что фраза необходима для грамматики. Вопрос спрашивает о потере содержания, даже если без неё предложение остаётся правильным.'],
 'Для вопроса If deleted сравни «что было известно до удаления» и «что останется после». Выбирай наиболее точное описание исчезнувшей информации.',
 ['The cave, formed by an underground river, attracts visitors.','Пещера, образованная подземной рекой, привлекает посетителей. Удалив formed by an underground river, мы потеряем способ её образования, но не сам факт существования пещеры.'],
 ['G слишком широко говорит о геологических образованиях достопримечательностей: фраза объясняет происхождение одной арки. H приписывает предложению противопоставление природного и рукотворного, хотя автор просто перечисляет места. J неверен: про водную эрозию больше нигде в абзаце не сказано.'],
 'Называй конкретную потерю: здесь исчезает объяснение, как вода сформировала Arch Rock.'),
 'If the writer were to delete the phrase "formed naturally by water erosion" (placing a period after the word arch), this sentence would primarily lose:');

add(53,'A','A transition from tourism to shops and fudge',['tourism','sale','shops'],
 '“The island’s biggest industry is tourism, [53] For the island’s many tourists, the most popular item … is fudge. The downtown streets are lined with fudge shops …”',[
 'The next sentence introduces a product tourists buy, fudge, and the following sentence describes fudge shops. A connects the general fact about tourism to retail shops and sweets, preparing the reader for those specific examples.',
 'An effective transition looks in both directions: tourism explains the presence of stores and candy shops; those shops lead naturally into the discussion of fudge. A supplies that bridge without changing the paragraph’s topic.',
 'B shifts to outsourcing, which the next sentence does not discuss. C shifts to historical fur trading. D introduces theme parks and chain restaurants and a contrast that the fudge discussion does not develop.'
 ],['so there are many souvenir stores, T-shirt shops, and candy and ice cream parlors.','so Mackinac Island has not been negatively affected by outsourcing.',"which is a big change from the island's eighteenth-century use in the fur trade.","but it's not a tourist attraction like many others with theme parks and chain restaurants."],r(
 'Слева от вставки сказано: главная отрасль острова — туризм. Сразу справа: самый популярный товар для туристов — fudge, а улицы заполнены магазинами этой сладости.',
 ['Не выбирай вставку, прочитав только предыдущее предложение. Здесь вопрос прямо требует связать его с темой следующего.','Сформулируй два конца перехода: «туризм» → «товары и магазины, особенно сладости».','A называет сувенирные магазины, футболки, конфеты и мороженое. Теперь от общей туристической экономики легко перейти к конкретному популярному лакомству — fudge.','Получается цепочка: много туристов → много торговых точек → самый популярный товар → магазины fudge. Поэтому A.'],
 'Хороший переход должен опираться на мысль слева и готовить мысль справа. Правдивость вставки сама по себе не делает её подходящим переходом.',
 ['The town attracts many visitors, so cafés line the streets. One especially popular café serves local pastries.','Город привлекает много гостей, поэтому улицы заполнены кафе. Одно особенно популярное кафе подаёт местную выпечку. Переход ведёт от посетителей к торговле, затем к конкретному примеру.'],
 ['B обсуждает аутсорсинг, которого дальше нет. C уводит в историю пушной торговли. D готовит разговор о парках развлечений и сетевых ресторанах, а дальше говорится о fudge. Все варианты могут быть правдивы по условию, но нужную связку создаёт A.'],
 'Для перехода прочитай предложение до вставки и предложение после неё.'),
 'Given that all the following are true, which one, if added here at the end of this sentence, would provide the most effective transition to the topic discussed in the sentence that follows?');

add(54,'H','The fixed expression for sale',['sale'],
 '“the most popular item of sale on Mackinac Island is fudge” → “the most popular item for sale …”',[
 '“For sale” means offered to buyers. The sentence identifies the most popular product being sold on the island, so H gives the established expression “item for sale.”',
 'Treat the words as a phrase, not as isolated prepositions. An item “for sale” is available to buy; “selling” names an activity and does not express this relationship as naturally.',
 'F keeps the nonidiomatic “item of sale.” G, “for selling,” awkwardly describes a purpose rather than using the normal sale-status phrase. J, “of selling,” does not form the required expression.'
 ],['NO CHANGE','for selling','for sale','of selling'],r(
 'Автор называет товар, который предлагается туристам на продажу. Английское выражение «на продажу, продаётся» — for sale.',
 ['Найди существительное: item — «товар, предмет». Что нужно о нём сказать? Что его можно купить.','Для предмета, выставленного на продажу, используется for sale: a house for sale, items for sale.','Подставляем H: the most popular item for sale … is fudge — «самый популярный товар в продаже — fudge».','Не выводи предлог из русского буквального перевода: здесь нужно запомнить английское сочетание целиком.'],
 'For sale — предлагается к покупке. On sale в американском английском часто значит «по сниженной цене». В этом вопросе речь не о скидке, а о товаре в продаже.',
 ['The shop has handmade bowls for sale.','В магазине продаются миски ручной работы. For sale относится к предметам, которые покупатель может приобрести.'],
 ['F, of sale, не образует нужного устойчивого сочетания. G заменяет нормальное for sale громоздким for selling. J, of selling, тоже не передаёт здесь естественное «в продаже».'],
 'Запиши связку: an item for sale — товар, который продаётся.'));

add(55,'A','NOT acceptable: where versus which',['shops'],
 '“fudge shops, where tourists can watch fudge … being made …”',[
 'The following clause explains what visitors can do in those shops. “Where” means “in which,” so D preserves the location relationship. Plain “which” cannot supply that missing “in” here. A is the unacceptable alternative.',
 'In “tourists can watch fudge being made,” “tourists” is already the subject and “fudge” is already the object of “watch.” There is no subject or object gap for “which” to fill. The clause needs a location link, “where” or “in which.”',
 'B, “so,” can connect the availability of shops with the resulting opportunity to watch fudge being made. C, “and,” can coordinate the two complete clauses. D is the direct relative-clause equivalent of “where.” Because the question asks for NOT acceptable, choose A.'
 ],['which','so','and','in which'],r(
 'В исходнике: магазины, where tourists can watch fudge … — «магазины, где туристы могут наблюдать, как делают fudge». Вопрос просит найти НЕподходящую замену.',
 ['Сначала отметь NOT: выбрать надо ошибочный вариант, а не самый привычный правильный.','В придаточной части уже есть «кто?» — tourists и «что наблюдают?» — fudge being made. Не хватает связи с местом: «в этих магазинах».','Where выражает эту связь. In which означает «в которых» и выполняет ту же работу. Просто which означает «который/которые» без предлога «в» и здесь эту связь не создаёт.','Союзы so и and могут связать два полных сообщения иначе, без относительного придаточного. Они допустимы. Единственная неприемлемая замена в данных вариантах — A.'],
 'После названия места where можно заменить на in which, если подразумевается «в котором». Само which подходит, когда оно является подлежащим или дополнением придаточного: shops which sell fudge. В нашем предложении эти роли уже заняты.',
 ['This is the room where we work. = This is the room in which we work.','Это комната, где мы работаем, то есть в которой мы работаем. Сравни: the room which we painted — «комната, которую мы покрасили»: здесь which — дополнение к painted.'],
 ['B допустим как связь причины и результата: есть магазины, поэтому туристы могут наблюдать изготовление. C допустим как присоединение второго сообщения. D сохраняет значение «в которых». Нельзя отвергать эти варианты лишь потому, что они устроены не одинаково.'],
 'В вопросе NOT проверяй все варианты и ищи реальную ошибку, а не просто менее привычную формулировку.'),
 'Which of the following alternatives to the underlined portion would NOT be acceptable?');

add(56,'H','Remove repeated meaning: numerous',['nickname'],
 '“These fudge shops are so numerous and abundant that …” → “… so numerous that …”',[
 'The sentence needs to say that there are many fudge shops. “Numerous” already expresses that quantity, so H preserves the complete thought in “so numerous that ….”',
 'In this context “abundant” repeats the idea conveyed by “numerous.” Removing the second description does not remove a separate fact about the shops. The result remains grammatical and precise.',
 'F keeps the repetition. G, “abundantly numerous,” expresses the same quantity twice. J piles up “abundance,” “truly,” and “numerous” in an awkward construction. H states the idea once.'
 ],['NO CHANGE','abundantly numerous','numerous','of an abundance truly numerous'],r(
 'Numerous означает «многочисленные». Abundant означает «имеющиеся в изобилии». В этом месте оба слова сообщают одно: магазинов fudge очень много.',
 ['Спроси, какие разные сведения дают два определения. Здесь нет двух признаков вроде «маленькие и дешёвые»; оба слова описывают большое количество.','Оставь numerous и подставь: These fudge shops are so numerous that … — «эти магазины настолько многочисленны, что…».','Конструкция so … that сохраняется, нужный смысл тоже. Значит, H убирает повтор без потери информации.'],
 'Сокращать можно смысловое дублирование. Но не удаляй второе слово автоматически: если прилагательные называют разные свойства, оба могут быть нужны.',
 ['The town has numerous cafés.','В городе много кафе. Numerous уже достаточно; добавление and abundant в таком контексте повторит количество.'],
 ['F оставляет numerous and abundant. G превращает повтор в abundantly numerous, но не убирает его. J добавляет ещё больше слов с тем же значением и делает фразу неестественной.'],
 'Проверь, даёт ли каждое слово отдельный факт. Здесь достаточно numerous.'));

add(57,'D','Keep the pronoun tied to its antecedent',['nickname'],
 '“… the local residents have even developed a special nickname for these tourists: I call the tourists ‘fudgies.’” → “… they call …”',[
 'The people who developed the nickname are “the local residents.” D, “they call,” continues referring to that same plural group and explains the nickname those residents use.',
 'Identify the antecedent, the noun a pronoun refers back to. “Residents” is plural, so “they” fits both number and meaning. The colon introduces an explanation of their nickname, not a new narrator’s personal habit.',
 'A unexpectedly switches to “I,” the writer. B uses the general “one,” losing the specific residents. C, “it,” is singular and does not refer appropriately to the group of people. D keeps the reference consistent.'
 ],['NO CHANGE','one calls','it calls','they call'],r(
 'Перед двоеточием сказано: the local residents have … developed a special nickname — «местные жители придумали особое прозвище». После двоеточия объясняется, как именно ОНИ называют туристов.',
 ['Найди тех, кто совершает действие: local residents — местные жители.','Это несколько людей, поэтому для замены подходит they — «они».','Подставляем D: they call the tourists “fudgies” — «они называют туристов “фаджи”». Теперь действие после двоеточия логично продолжает действие жителей перед ним.','I call означало бы «я называю» и без причины переключило бы речь с жителей на автора.'],
 'Местоимение должно ясно отсылать к нужному существительному и соответствовать его числу. Жители, tourists и shops могут быть рядом, поэтому выбираем отсылку ещё и по смыслу: кто дал прозвище?',
 ['The guides created a nickname: they call the route “the loop.”','Гиды придумали прозвище: они называют маршрут «кольцом». They относится к guides, а не к маршруту.'],
 ['A переключает лицо на автора — I. B, one, заменяет конкретных жителей неопределённым «кто-то/человек вообще». C, it, не подходит ни по числу, ни как местоимение для этих людей.'],
 'Верни местоимение к существительному: they = the local residents.'));

add(58,'G','An -ing phrase expressing a result',['breeze'],
 '“a gentle lake breeze floats through the air, when it creates a beautiful, temperate climate.” → “… air, creating a beautiful, temperate climate.”',[
 'The sentence describes the breeze and its effect: it helps create the pleasant climate. G attaches “creating …” as a result phrase to the main statement about the breeze.',
 'The main clause already has a finite verb, “floats.” The added -ing phrase does not need a second independent subject and tense: “a breeze floats …, creating ….” Read the relation as “and, as a result, creates ….”',
 'F introduces “when,” a timing relation that does not express the intended effect well. H, “once it creates,” makes that timing problem more explicit. J, “as if it had created,” suggests a hypothetical earlier event, which the factual description does not need.'
 ],['NO CHANGE','creating','once it creates','as if it had created'],r(
 'В предложении говорится: по воздуху проходит мягкий озёрный бриз, создавая приятный умеренный климат. Вторая часть описывает результат, а не условие, когда бриз начинает двигаться.',
 ['Найди главную основу: a breeze floats — «бриз движется». Полноценный глагол уже есть, предложение не обрывается.','Следующая мысль отвечает на вопрос «с каким результатом?»: creating a … climate — «создавая такой климат».','G присоединяет эту мысль через форму -ing после запятой. По смыслу: бриз движется и тем самым создаёт приятные условия.','When и once означают «когда» и «как только». Они сделали бы создание климата временным условием для движения бриза, хотя автор описывает его действие и эффект.'],
 'После полного предложения оборот с -ing может выражать сопутствующее действие или результат: The rain continued, flooding the road. Но одна форма -ing сама по себе не заменяет главный глагол полного предложения.',
 ['A cool wind blew through the room, lowering the temperature.','По комнате прошёл прохладный ветер, понизив температуру. Lowering показывает результат действия ветра.'],
 ['F и H задают неудачную для этого смысла временную связь. J означает «как будто он уже создал» и вносит ненужное предположение о прошлом. G прямо выражает результат.'],
 'Сначала найди главный глагол floats; затем определи роль creating — результат уже названного действия.'));

add(59,'D','Find the singular subject: privacy doesn’t give',['privacy'],
 '“The privacy of the island’s environs certainly don’t give it the hustle-bustle quality of a city …” → “… doesn’t give …”',[
 'The grammatical subject is the singular noun “privacy.” “Of the island’s environs” modifies that noun; its plural word “environs” does not control the main verb. D gives the singular simple-present form “doesn’t give.”',
 'The sentence describes a general quality of the island, so simple present fits. With he, she, it, or a singular noun, the negative pattern is “does not + base verb”: “privacy does not give,” not “does not gives.”',
 'A, “don’t give,” disagrees with singular “privacy.” B, “isn’t giving,” agrees in number but suggests an ongoing temporary situation rather than the general property described here. C, “hasn’t given,” shifts to a present-perfect time frame without a contextual reason. D matches both subject and meaning.'
 ],['NO CHANGE',"isn't giving","hasn't given","doesn't give"],r(
 'Подлежащее всего предложения — The privacy, «уединённость». Слова of the island’s environs уточняют, уединённость какого места имеется в виду. Они не становятся подлежащим.',
 ['Убери уточнение of the island’s environs. Останется The privacy certainly ___ it the … quality of a city. Так видно главное слово privacy.','Privacy — неисчисляемое существительное в единственном числе. Для отрицания в Present Simple нужно does not, сокращённо doesn’t.','После does/doesn’t основной глагол имеет начальную форму без -s: doesn’t give. Поэтому D.','По смыслу описывается обычное свойство места: его уединённость не придаёт ему городской суеты. Здесь не требуется ни «прямо сейчас не придаёт», ни «до настоящего момента не придала».'],
 'Согласуй глагол с главным словом подлежащего, а не с ближайшим существительным. Единственное число: does not + начальная форма. Множественное: do not + начальная форма.',
 ['The quietness of these streets doesn’t attract crowds.','Тишина этих улиц не привлекает толпы. Главное слово quietness — единственное число; plural streets внутри of-фразы не меняет форму глагола.'],
 ['A использует don’t для единственного privacy. B грамматически согласован по числу, но ненужно делает описание временным процессом. C тоже возможная грамматическая форма сама по себе, однако без причины меняет временной смысл на результат к настоящему моменту.'],
 'Не выбирай don’t из-за соседнего environs: основа — privacy doesn’t give.'));

add(60,'H','Match an essay’s actual focus to a proposed purpose',['time','transport','attractions','shopping','relax'],
 'The passage describes a step back in time, transportation, sights, shopping, and relaxation. The automobile ban appears in the transportation paragraph, but no struggle to establish it is narrated.',[
 'The proposed goal is specific: explain residents’ difficulty in prohibiting automobile traffic. The actual essay is a travel overview covering the island’s atmosphere, sights, shopping, and relaxation. It mentions the ban but does not explain a campaign, resistance, or difficulty in achieving it. H correctly says that the goal is not fulfilled.',
 'Mentioning a subject is not the same as developing the proposed purpose. To fulfill this goal, the essay would need details about obstacles to the ban and how residents dealt with them, not just a statement that cars are outlawed.',
 'F invents a threat felt by residents. G claims the essay details reasons the ban was possible, but those reasons and the residents’ struggle are not developed. J reverses the topic by claiming residents are trying to bring cars back; the passage says no such thing.'
 ],['Yes, because the automobile has become such an essential part of American tourist travel that the residents are clearly threatened.','Yes, because this essay discusses the fact that automobiles are outlawed and goes on to detail many of the reasons this was possible.','No, because the essay focuses instead on other aspects of Mackinac Island, mentioning automobiles in only one part of the passage.','No, because this essay describes the ways the residents of Mackinac Island have sought to bring automobiles back to the island, not to outlaw them.'],r(
 'Предлагаемая цель — рассказать о трудностях, с которыми жители столкнулись, добиваясь запрета автомобилей. Настоящее эссе в основном приглашает познакомиться с островом: старинная атмосфера, достопримечательности, магазины и спокойный отдых.',
 ['Разбей цель на смысловые части: кто? жители; что делают? запрещают автомобили; о чём надо рассказать? о трудностях этого запрета.','Теперь проверь абзацы. Первый создаёт старинный образ; второй сообщает, как добраться и передвигаться; третий перечисляет достопримечательности; четвёртый посвящён покупкам; пятый — отдыху.','Во втором абзаце действительно есть automobiles are outlawed. Но не говорится, кто сопротивлялся, какие были препятствия, как жители боролись за запрет и почему это было трудно.','Значит, совпало только отдельное слово-тема «автомобили», а заявленная задача не выполнена. H правильно отвечает No и объясняет, что эссе сосредоточено на других сторонах острова.'],
 'В вопросе о цели всего эссе сравни цель с тем, что автор реально развивает. Одного упоминания темы недостаточно. Проверяй не только Yes/No, но и всю причину после because.',
 ['An essay listing cafés does not explain the difficulties of opening a café, even if it mentions one new café.','Перечень кафе не рассказывает о трудностях открытия кафе, даже если новое кафе один раз упомянуто. Нужны препятствия и объяснение, как их преодолевали.'],
 ['F приписывает жителям чувство угрозы, которого в тексте нет. G утверждает, что изложены причины возможности запрета, хотя автор их не развивает. J придумывает противоположную историю — попытку вернуть машины. H соответствует фактическому содержанию.'],
 'Упоминание запрета ≠ рассказ о трудностях его введения. Сверяй цель со всем эссе.'),
 'This question asks about the preceding passage as a whole. Suppose the writer had intended to write an essay on the difficulty the residents of Mackinac Island have had prohibiting automobile traffic from the historic island. Would this essay have successfully fulfilled that goal?');

export const questions=records.map(({ru,...question})=>question);
export const evidenceRu=Object.fromEntries(records.map(({id,ru})=>[id,ru]));
