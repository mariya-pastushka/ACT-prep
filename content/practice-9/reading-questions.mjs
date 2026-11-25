const records=[];
function add(id,key,prompt,options,topic,evidenceLines,evidence,explanation,ru){
 records.push({id,key,prompt,topic,evidenceLines,evidence,explanation,section:'reading',choices:options.map((text,i)=>({label:(id%2?'ABCD':'FGHJ')[i],text})),ru});
}
const support=(quote,steps,rule,example,wrong,remember)=>({quote,steps,rule,example,wrong,remember});

add(1,'A','The primary purpose of the first paragraph is to:',[
 "describe the narrator's transition from her everyday, working life in the city to the world of her rural childhood.",
 "explain why the narrator becomes so frustrated when she arrives at her mother's house in the countryside.",
 'give the reader enough background about the setting of the story to explain the events of the later parts of the passage.',
 "foreshadow the narrator's feelings of abandonment as described in the last paragraphs of the passage.",
],'Purpose: a transition between two worlds',[[1,8],[11,14]],
 '“My childhood memories are filled with days spent floating in the pond …” / “dressed for an overly air-conditioned office climate, the heat came over me like a blanket.”',[
 'The paragraph moves between memories of an Alabama childhood and an adult traveler dressed for an air-conditioned workplace. Her uncomfortable arrival makes the contrast physical: she is entering the environment she grew up in from a very different daily life. A identifies that specific transition.',
 'For a purpose question, ask what the paragraph does, not merely what it mentions. Childhood memories establish one world; the airport arrival and office clothing establish the returning adult’s changed circumstances. The heat links and contrasts them.',
 'B places the action at the mother’s house, which she has not reached in this paragraph. C is a general statement about setting, but misses the distinctive childhood-versus-working-life contrast. D reads the later emotional conflict into a paragraph focused on the return and its physical discomfort.'
],support(
 'Сначала героиня вспоминает лето своего детства в Алабаме: пруд, качели, попытки охладиться. Затем она выходит из аэропорта взрослой женщиной в одежде для прохладного офиса и остро чувствует местную жару.',
 ['Вопрос не просит пересказать погоду. Он спрашивает, зачем автор начинает историю именно так.','Найди два мира. Детство: childhood memories, pond, porch swing. Взрослая рабочая жизнь: suitcases, office climate, одежда для кондиционированного помещения.','Между ними происходит переход: взрослая дочь возвращается туда, где выросла, и чувствует, насколько привычная офисная среда отличается от старого мира.','Поэтому A точнее всего называет работу абзаца: показать этот переход. Описание жары — способ его сделать ощутимым, а не отдельная главная тема всей истории.'],
 'Primary purpose — главная функция фрагмента. Спроси: «Что этот абзац делает для рассказа?» Вариант должен учитывать его характерные детали, а не подходить почти к любому вступлению.',
 ['“I left the quiet laboratory and stepped into the noisy market where I had grown up.”','«Я вышла из тихой лаборатории и оказалась на шумном рынке, возле которого выросла». Контраст двух мест показывает переход из взрослой жизни в мир детства.'],
 ['B ошибается местом: в первом абзаце ещё аэропорт и прокат автомобиля, не дом матери.','C слишком общее: фон действительно создаётся, но не объясняет, зачем противопоставлены детские воспоминания и офисная одежда. A передаёт этот конкретный приём.','D заранее приписывает вступлению тему покинутости. Здесь в центре возвращение в прежнюю среду и дискомфорт, а не уже развитая история отношений с матерью.'],
 'Собери пару «детство в Алабаме ↔ взрослая офисная жизнь» — она объясняет функцию вступления.'));

add(2,'F','The narrator considers the weather in Alabama during the summer time to be:',[
 'humid and extremely hot.','unbearably hot and miserable.','cool and breezy.','pleasantly familiar.',
],'Descriptive detail: heat and humidity',[[8,14]],
 '“the heat came over me like a blanket” / “a trek through the jungle” / “my shirt was soaked through in patches, my hair was limp and sticky.”',[
 'The blanket comparison conveys oppressive heat. The wet shirt, sticky hair, and jungle comparison also emphasize a damp, humid atmosphere. F captures both distinct qualities: humidity and extreme heat.',
 'Combine the sensory details instead of choosing only a general negative judgment. The word “humid” need not appear if the description supplies clear signs of moisture and stickiness.',
 'G captures the discomfort, but is a broader, more intensified judgment and does not identify the moisture emphasized by the description as precisely as F. H contradicts the heat and sticky clothing. J borrows the idea of familiarity from the childhood memories, but “pleasantly” conflicts with her foul mood.'
],support(
 'Жара накрывает её, как тяжёлое одеяло; короткая прогулка похожа на переход через джунгли. Рубашка промокла, волосы липкие. В описании соединены сильная жара и влажность.',
 ['Подтверди первую часть F — humid, «влажный». Подсказки: soaked through — промокшая насквозь, sticky — липкая, сравнение с джунглями.','Подтверди вторую часть — extremely hot. Heat словно накрывает одеялом, даже короткий путь оказывается тяжёлым.','F сохраняет обе особенности описания. Для вывода о влажности не обязательно увидеть ровно слово humid: его значение передано деталями.','G может показаться привлекательным, потому что героине действительно неприятно. Но это более общее и усиленное «невыносимо и мучительно», тогда как F точнее собирает конкретные признаки жары и сырости.'],
 'В описательном вопросе ищи несколько согласованных чувственных признаков: что героиня чувствует телом, что происходит с одеждой и волосами, с чем она сравнивает воздух.',
 ['“The air clung to my skin, and my shirt stayed damp.”','«Воздух словно прилипал к коже, а рубашка оставалась влажной». Это подсказки к влажности даже без самого слова humid.'],
 ['G передаёт неприятность погоды, но менее точно отражает специально подчёркнутую влажность и усиливает оценку словом unbearably.','H «прохладно и ветрено» противоречит всему описанию первого абзаца.','J: знакомое не значит приятное. Детские воспоминания есть, но нынешнее настроение прямо названо foul — скверным.'],
 'Для F найди две опоры: heat — жара; soaked и sticky — влажность.'));

add(3,'D',"It can reasonably be inferred from the second paragraph (lines 15–28) that the narrator's feelings upon seeing her childhood home are feelings of:",[
 'surprise at the dilapidated state of the building.',
 'frustration and anger toward her mother.',
 'joy tinged with fatigue caused by her travels.',
 'familiar recognition combined with nervousness.',
],'Inference within a specified paragraph',[[20,28]],
 '“The clapboard house looked the same as it had when I had left ten years earlier” / “I grabbed my bags anxiously, trying to calm my nerves, and braced myself.”',[
 'The house and its familiar objects look much as she remembers them, establishing recognition. The paragraph ends with explicit anxiety, an attempt to calm her nerves, and mental preparation. D combines those two supported reactions.',
 'Respect the question’s boundary: lines 15–28. Read the description of the home and the final action together. A two-part answer needs evidence for both recognition and nervousness.',
 'A overemphasizes worn objects and adds surprise, although the house looks the same. B imports the anger developed later during the encounter with her mother. C borrows tiredness from the flight but adds joy that this paragraph does not express.'
],support(
 'Дом выглядит так же, как десять лет назад; сохранились качели, кресло-качалка и старая лейка. Но дочь берёт сумки anxiously — тревожно, пытается успокоить нервы и морально готовится войти.',
 ['Ограничь поиск вторым абзацем: строки 15–28. Не переноси сюда более позднюю сцену гнева у кухни.','Первое чувство в D — familiar recognition, знакомое узнавание. Его подтверждает looked the same и перечисление вещей, которые героиня помнит.','Второе — nervousness, нервозность. Оно почти прямо названо: anxiously, calm my nerves, braced myself.','Соединяем обе группы подсказок: место знакомое, а предстоящая встреча тревожит. Это D; одно только узнавание не означает радости или спокойствия.'],
 'Если вариант состоит из двух чувств, проверь каждое отдельно. Для вывода бери признаки из указанного участка, а не из любой части рассказа.',
 ['“The old gate was just as I remembered, but my hands trembled as I opened it.”','«Старая калитка была точь-в-точь как в памяти, но руки дрожали, когда я её открывала». Знакомое место и тревога могут существовать одновременно.'],
 ['A: изношенные предметы есть, но нет неожиданного открытия разрухи; дом прямо назван прежним.','B: раздражение по отношению к матери проявляется дальше, в строках 55–59.','C: усталость после дороги понятна, но радость при виде дома здесь не показана.'],
 'D имеет две прямые опоры: looked the same + calm my nerves.'));

add(4,'F','The best description of the point of view from which this passage is told is that of a:',[
 'daughter describing her thoughts during an event in her adult life.',
 'daughter reminiscing about her distant childhood in Alabama.',
 "mother remembering her daughter's visit to the family home.",
 'mother who longs to visit her adult daughter but cannot.',
],'Point of view: the adult daughter’s first-person account',[[15,20],[50,55],[68,71]],
 '“the life I had built for myself far away” / “When I had announced my plan to go away for school” / “my fancy city clothes, with my college degree and impressive job.”',[
 'The “I” is the daughter, now an adult with a degree and a job, returning to her mother’s home. We follow her memories, judgments, anger, and revised understanding during that visit. F identifies both the speaker and the main event.',
 'Separate the person telling the story from the time period recalled inside it. Childhood and school memories appear, but the central action is an adult homecoming, narrated through the daughter’s own thoughts.',
 'G mistakes remembered background for the main situation. H makes the mother the narrator, although the passage calls her “my mother.” J also uses the wrong speaker and describes a hoped-for visit rather than the daughter’s actual return.'
],support(
 'Рассказ ведётся через «я» дочери. У неё уже есть высшее образование, работа и самостоятельная городская жизнь. Основное событие — её взрослая поездка домой к матери.',
 ['Найди, кто обозначен I. Героиня говорит my mother, поэтому «я» — дочь, а не мать.','Определи её возраст на основном временном плане: college degree и impressive job уже получены. Это взрослая женщина.','Посмотри, что происходит сейчас в рамках истории: она приезжает, входит в дом, наблюдает мать и переосмысляет её поведение.','Воспоминания о детстве и решении уехать — вставки, помогающие понять взрослую встречу. Поэтому F, а не G.'],
 'Для point of view ответь на три вопроса: кто рассказывает, в каком жизненном положении он находится и чьи мысли нам доступны. Не путай основное событие с воспоминаниями внутри него.',
 ['“I returned to my old school after ten years and remembered my first lesson.”','«Я вернулась в старую школу через десять лет и вспомнила первый урок». Основная ситуация — взрослое возвращение, хотя внутри есть воспоминание о детстве.'],
 ['G слишком сдвигает центр рассказа в далёкое детство: главная сцена происходит во взрослой жизни.','H: рассказчица не мать; мать описана как другой человек, которого дочь видит у раковины.','J добавляет желание матери приехать к дочери — такого события и такой точки зрения в тексте нет.'],
 'Главный план — взрослая дочь приезжает домой; доступ к её мыслям дан от первого лица.'));

add(5,'C','As it is used in line 28, the word braced most nearly means:',[
 'fastened.','straightened.','prepared.','supported.',
],'Vocabulary in context: braced myself',[[27,28]],
 '“I grabbed my bags anxiously, trying to calm my nerves, and braced myself.”',[
 'She is anxious and trying to calm her nerves before entering the house. In that context, “braced myself” means prepared herself mentally for an emotionally difficult encounter. C fits the whole sentence.',
 'Test the replacement in context: “trying to calm my nerves, and prepared myself.” The nearby emotional clues select this sense of “brace,” rather than a physical fastening or support.',
 'A treats the action as attaching or securing something. B describes physically straightening the body, not the mental readiness signaled here. D uses a physical-support sense without explaining the anxious preparation.'
],support(
 'Она тревожно берёт сумки и пытается успокоить нервы. Поэтому braced myself здесь означает «собралась с духом, подготовила себя к предстоящей встрече».',
 ['Не переводи braced отдельно от предложения: у слова есть разные значения.','Посмотри на соседние подсказки anxiously и trying to calm my nerves. Они описывают внутреннее напряжение, а не крепление предметов.','Героиня ещё не вошла в дом. Она готовит себя к тому, что сейчас произойдёт.','Подставь C: prepared myself — «подготовилась». Смысл и последовательность действий сохраняются.'],
 'В вопросе most nearly means выбирай значение именно в данном контексте. Сделай проверочную подстановку: предложение должно сохранить и смысл, и характер действия.',
 ['“Before opening the difficult letter, I took a breath and braced myself.”','«Перед тем как открыть тяжёлое письмо, я вдохнула и собралась с духом». Это эмоциональная подготовка, не физическая опора.'],
 ['A, fastened — «прикрепила, застегнула»: не подходит к успокоению нервов.','B, straightened — «выпрямилась»: может описывать позу, но здесь акцент на готовности к встрече. Не путай с тем, как позже выпрямляется спина матери.','D, supported — «поддержала»: физическое значение слова brace здесь не соответствует эмоциональным подсказкам.'],
 'Braced myself + тревога перед событием → prepared myself, «собралась с духом».'));

add(6,'J','As revealed in the passage, the mother is best described as:',[
 'harsh and uncompromising.','uneducated yet wise.','altruistic and warm.','distant but caring.',
],'Characterization through restraint and the ending',[[41,49],[64,70]],
 '“she showed no sign that she knew I was standing there” / “she hadn’t called not because she didn’t care, but because she did” / “she didn’t know what to say.”',[
 'The mother is emotionally restrained: she stays at the sink and responds with practical instructions. The ending changes how that distance is understood. The daughter realizes that her mother cared and understood her need for independence. J accounts for both outward distance and underlying care.',
 'Judge the character using the ending as well as the daughter’s initial reaction. The daughter’s earlier interpretation of indifference is revised; it should not become the final description of the mother.',
 'F treats the daughter’s early anger as proof of a harsh, inflexible mother and ignores the revision. G adds claims about education and wisdom that are not established. H’s “warm” suggests an openly affectionate manner not shown in this meeting, while “altruistic” is a stronger general characterization than the passage supports.'
],support(
 'Мать выглядит сдержанной и отстранённой: не поворачивается от раковины, говорит о двери и насекомых. Но в конце дочь понимает, что мать не была безразлична: она заботилась и понимала необходимость дочерней самостоятельности.',
 ['Раздели внешнее поведение и внутреннее отношение. Внешне мало эмоций: короткий бытовой ответ, мать остаётся у раковины. Это distant.','Теперь обязательно прочитай финал. Там прямо противопоставлены didn’t care и did: дочь приходит к выводу, что мать заботилась. Это caring.','J сохраняет обе стороны и не заставляет выбирать между «молчалива» и «любит»: человек может заботиться, но плохо выражать чувства.','Ранний гнев дочери — часть её восприятия, а не окончательное доказательство жестокого характера матери. В конце это восприятие меняется.'],
 'Для характеристики персонажа учитывай весь отрывок, особенно финальное переосмысление. Признак поведения и мотив этого поведения могут различаться.',
 ['“He rarely spoke about affection, but quietly made sure she had everything she needed.”','«Он редко говорил о привязанности, но молча заботился, чтобы у неё было всё нужное». Внешняя сдержанность совместима с заботой.'],
 ['F не учитывает финальное понимание заботы и превращает обиду дочери в окончательный приговор матери.','G приписывает матери определённый уровень образования и мудрость; таких выводов текст не устанавливает.','H «тёплая» плохо передаёт внешнюю сдержанность встречи, а «альтруистичная» — слишком широкая характеристика. J точнее.'],
 'Формула J: мало внешних проявлений, но забота есть.'));

add(7,'B','The central concern presented in the passage is:',[
 'the anger that a daughter feels toward her distant mother and her struggles to overcome this anger.',
 'the conflicting emotions experienced by the narrator upon her homecoming from her life in the city to the rural childhood of her youth.',
 'the narrator\'s realization that her mother has aged terribly during the four years the narrator spent in college.',
 "an older woman's cautious but willful acceptance of her daughter's foreign lifestyle as the older woman is forced to stay in her hometown.",
],'Central concern: the whole emotional arc',[[15,18],[27,28],[55,71]],
 '“the life I had built for myself far away” / “trying to calm my nerves” / “I could feel the anger rising” / “It suddenly hit me …” / “I … started to help with the peas.”',[
 'The homecoming brings together the daughter’s changed adult life and her rural past. Her reactions include discomfort, recognition, anxiety, anger, and finally a more compassionate understanding. B covers that larger conflict and development.',
 'A central-concern answer must account for the whole passage, not only its most dramatic feeling. Trace the movement from arriving in Alabama to seeing familiar objects, confronting memories, and interpreting the mother differently.',
 'A identifies an important strand, anger, but is narrower than the homecoming’s conflicting emotions. C reduces the story to the mother’s age and invents a four-year interval; the text says ten years. D shifts the center to the older woman’s experience, which is not the viewpoint through which the story unfolds.'
],support(
 'Это история возвращения взрослой дочери в мир своего детства. Её чувства не сводятся к одному гневу: есть неприятие старой среды, узнавание, тревога, обида и новое понимание матери.',
 ['Составь краткую цепочку всего отрывка. Сначала физический дискомфорт после возвращения в Алабаму; затем знакомый дом и нервозность; потом болезненные воспоминания и гнев.','В финале дочь замечает состояние матери и меняет своё объяснение её молчания. Она начинает помогать с горохом вместо того, чтобы требовать объяснений.','B связывает эти этапы одной ситуацией — homecoming, возвращением из городской самостоятельной жизни в прежний сельский мир.','A верно замечает обиду, но охватывает только часть этой эмоциональной истории. Для central concern выбираем более полное B.'],
 'Главная проблема рассказа должна охватывать начало, развитие и финал. Сильная сцена или чувство могут быть важны, но всё же оставаться частью более широкой темы.',
 ['“A traveler returns home, first feels out of place, then recognizes both old wounds and lasting affection.”','«Путешественник возвращается домой, сначала чувствует себя чужим, затем замечает и старые обиды, и сохранившуюся привязанность». Центральная тема шире одного раздражения.'],
 ['A слишком сужает историю до борьбы с гневом и не учитывает весь контраст двух миров и смешанные реакции.','C: возраст матери важен в финале, но не составляет весь сюжет. Интервал четыре года тоже неверен: дочь не была дома десять лет.','D переносит центр на мать и её образ жизни, хотя основная история дана через переживания дочери.'],
 'Для B проверь всю цепочку чувств, а не одну эмоцию в середине рассказа.'));

add(8,'G','The relationship between the narrator and her mother, as described in the last paragraph (lines 60–71) of the passage, could best be described as:',[
 "extremely close, built on frank emotional openness and mutual respect of one another's independent decisions.",
 'based on unspoken thoughts, leading to occasional misunderstandings, but ultimately supportive and caring.',
 "antagonistic, largely due to the mother's unwillingness to support her daughter's independent decision to move away.",
 'a very distant relationship, largely nonexistent outside of rare visits on the part of the daughter.',
],'Relationship: unspoken care and misunderstanding',[[64,71]],
 '“she hadn’t called not because she didn’t care, but because she did” / “she understood that I needed to strike out on my own” / “she didn’t know what to say” / “I … started to help with the peas.”',[
 'The daughter comes to see care and support behind behavior she had interpreted as indifference. The mother understands her need to leave, but does not know how to express herself. The daughter responds through helping rather than an emotional speech. G captures both imperfect communication and underlying affection.',
 'Look for an answer that preserves the tension: the bond is neither openly expressive nor empty. “Unspoken thoughts” explains the misunderstanding, while the revised interpretation and shared task support the caring side.',
 'F overstates frank emotional openness, contradicted by “she didn’t know what to say.” H contradicts the mother’s understanding of the daughter’s independence. J treats infrequent contact as proof of an almost nonexistent relationship, ignoring the emotional connection revealed in the ending.'
],support(
 'В финале дочь понимает: отсутствие звонков не означало отсутствие любви. Мать понимала, что дочери нужна самостоятельная жизнь, но не знала, что сказать при встрече. Дочь тоже отвечает не большой речью, а совместным делом.',
 ['Найди, где видна забота: because she did — потому что ей было не всё равно. Где поддержка? She understood that I needed to strike out on my own — она понимала необходимость самостоятельности.','Теперь найди проблему общения: she didn’t know what to say. Чувства есть, но выразить их словами трудно.','Прежнее молчание дочь понимала как безразличие, а теперь переосмысляет. Значит, отношения допускают недопонимание, потому что многое остаётся невысказанным.','G сочетает обе стороны: невысказанное и ошибки понимания, но в основе забота и поддержка. Помощь с горохом становится маленьким действием навстречу.'],
 'В вопросе об отношениях проверь каждую часть характеристики. Редкие звонки не обязательно означают отсутствие привязанности; открытые разговоры и внутренняя близость — разные признаки.',
 ['“They seldom discussed their feelings, yet she understood why he had left and kept his room ready.”','«Они редко обсуждали чувства, но она понимала, почему он уехал, и сохраняла его комнату готовой». Невысказанная поддержка не равна откровенным разговорам, но и не означает отсутствия связи.'],
 ['F: frank emotional openness означает откровенную эмоциональную открытость, а мать прямо не знает, что сказать.','H утверждает отказ поддержать самостоятельность, хотя финал говорит противоположное.','J слишком категорично объявляет отношения почти отсутствующими: финальная сцена показывает сохранившуюся значимость друг друга.'],
 'G подходит обеим сторонам финала: трудно говорить, но есть забота.'));

add(9,'C',"The emotional states of the characters are primarily conveyed by the author's use of:",[
 'metaphorical descriptions of the setting.',
 'subtle but emotionally charged dialogue.',
 'visual descriptions and narrative reflections.',
 'detailed psychological portraits by an objective narrator.',
],'Author’s craft: what we see and what the narrator thinks',[[39,44],[55,67],[70,71]],
 '“I could feel the anger rising” / “her hands were shaking, the peas falling into the sink” / “It suddenly hit me …” / “I rolled up my sleeves ….”',[
 'The author combines visible behavior with the daughter’s inward reflection. Shaking hands, posture, falling peas, and rolled sleeves are things we can picture; the daughter’s anger and sudden reinterpretation are narrated thoughts. C names those two main methods.',
 'Distinguish what the story means from how the writer conveys it. For this craft question, identify concrete examples of the technique, then match the answer’s description to those examples.',
 'A points to a real metaphor in the opening heat description, but does not explain the main presentation of both characters’ emotions. B gives too much weight to the brief dialogue. D calls the narrator objective, although we experience the scene through the daughter’s subjective reactions and revised judgments.'
],support(
 'Автор показывает внешние детали — согнутую спину, дрожащие руки, падающий горох, закатанные рукава — и даёт внутренние размышления дочери: нарастающий гнев и внезапное понимание.',
 ['Вопрос спрашивает о приёме: не «какие чувства?», а «как читатель о них узнаёт?».','Выпиши то, что можно увидеть: руки матери дрожат, горох падает мимо миски. Это visual descriptions, зрительные описания.','Выпиши то, что доступно через рассказчицу: I could feel the anger rising; It suddenly hit me. Это narrative reflections — внутренние размышления и осмысление.','C объединяет оба главных способа. Особенно важно, что о матери мы судим через наблюдения дочери, а не получаем прямой доступ к её мыслям от всезнающего автора.'],
 'В вопросе о писательском приёме подбери примеры самой формы подачи: описание, диалог, размышление, сравнение. Потом проверь слово primarily — «главным образом», а не «хотя бы один раз».',
 ['“His fingers shook around the cup. I realized he was not as calm as I had assumed.”','«Пальцы дрожали вокруг чашки. Я поняла, что он не так спокоен, как мне казалось». Первая часть показывает видимую деталь, вторая — размышление рассказчицы.'],
 ['A: сравнение жары с одеялом действительно есть. Но главным средством передачи эмоций обеих героинь оно не становится.','B: краткие реплики важны, однако основная эмоциональная работа лежит на наблюдениях и мыслях дочери.','D: рассказчик не объективный наблюдатель со стороны. Это участница событий, которая сначала ошибается в объяснении и затем меняет взгляд.'],
 'C = наблюдаемые жесты и детали + внутреннее переосмысление.'));

add(10,'J','As revealed in the final paragraph, upon seeing her mother at the sink, the narrator, for the first time, realizes which of the following?',[
 'She wants desperately for her mother to be more expressive of her emotions.',
 'Her mother has aged to such an extent that the daughter has trouble recognizing her and the house in which she lives.',
 'It is difficult to leave someone and not be able to visit them every year during the holidays.',
 "Her mother has been supportive of the narrator's decision to leave but has not expressed it in a way the narrator expects.",
],'A turning point: a new interpretation of silence',[[60,70]],
 '“It suddenly hit me … she hadn’t called not because she didn’t care, but because she did. … she understood that I needed to strike out on my own … she didn’t know what to say.”',[
 'The new realization concerns the meaning of the mother’s apparent distance. The daughter now interprets it as care and an understanding of her need for independence, expressed without the words or contact she had expected. J directly restates that reversal.',
 'The cue “It suddenly hit me” identifies the turning point. Read what follows it: “not because … but because …” explicitly replaces the daughter’s earlier explanation with a different one.',
 'F resembles the frustration she already felt before the final realization. G exaggerates the aging into a failure of recognition, although she recognizes both mother and home. H gives a general difficulty of separation instead of the specific insight into her mother’s support.'
],support(
 'It suddenly hit me — «до меня вдруг дошло» — вводит главное открытие: мать не звонила не потому, что ей было всё равно, а потому, что она заботилась и понимала необходимость дочерней самостоятельности.',
 ['Найди точку поворота: It suddenly hit me. Вопрос for the first time требует именно нового понимания, а не чувства, которое уже было раньше.','Прочитай противопоставление: not because she didn’t care, but because she did. Старое объяснение «не любит, не интересуется» заменяется новым.','Дальше новое объяснение уточняется: she understood that I needed to strike out on my own. Мать понимала, что дочери надо строить отдельную жизнь.','При этом she didn’t know what to say: поддержка не была выражена словами, которых ожидала дочь. J соединяет поддержку и непривычный способ её проявления.'],
 'Для вопроса о внезапном осознании найди сигнал изменения взгляда — suddenly, realized, understood — и назови старое объяснение и новое. Не подменяй открытие внешней деталью, которая только его вызвала.',
 ['“I had thought his silence meant rejection. Suddenly I understood that he was giving me room to choose.”','«Я думала, что его молчание означает отказ. Вдруг поняла, что он оставляет мне свободу выбора». Новое понимание касается смысла молчания, а не самого факта отсутствия слов.'],
 ['F описывает желание более явных чувств, близкое к прежней обиде, а не к новому пониманию.','G добавляет невозможность узнать мать и дом. Дом выглядит знакомым, мать дочь тоже узнаёт; такого вывода нет.','H — общая мысль о сложности разлуки и праздников. В финале открытие точнее: мать поддерживала её уход, хотя дочь не умела прочитать эту поддержку.'],
 'Старое: «не звонит — не заботится». Новое: «заботится и даёт мне отдельную жизнь». Это J.'));

export const readingQuestions=records.map(({ru,...question})=>question);
export const readingEvidenceRu=Object.fromEntries(records.map(({id,ru})=>[id,ru]));
