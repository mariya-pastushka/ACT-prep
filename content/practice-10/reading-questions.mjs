const questions = [];
const evidenceRu = {};

function add(id, key, prompt, options, topic, evidenceLines, evidence, explanation, support) {
 const labels = id % 2 ? 'ABCD' : 'FGHJ';
 questions.push({
  id, key, prompt, topic, evidenceLines, evidence, explanation, section: 'reading',
  choices: options.map((text, index) => ({label: labels[index], text})),
 });
 evidenceRu[id] = support;
}

add(1, 'A', 'According to the passage, when did the United States begin to influence the character of coffeehouses?', [
 'After World War II, when the automobile began to change the nature of public spaces',
 'Prior to the rise of anti-royalist political scheming',
 'When the number of coffeehouses began to exceed the number of residential homes',
 'After the introduction of the wi-fi revolution',
], 'Chronology: the postwar American coffee shop', [[46,49], [50,54]],
 '“… they almost immediately began to take on a singularly American character.” / “Soldiers returning from World War II … at the same time, the automobile was beginning to have a stronger influence on how Americans used public spaces.”', [
 'Lines 46–49 introduce the distinctly American version. Lines 50–54 supply its historical setting: returning World War II soldiers wanted the coffeehouse experience they had known in Europe, while cars were changing American public spaces. Those clues place the change after World War II, as A states.',
 'For a timeline question, locate the event first, then find the date or time clue attached to it. Here the event is the emergence of a recognizable American form, illustrated by the drive-in coffee shop.',
 'B borrows a detail from the earlier account of English coffeehouses. C turns a modern prediction about outnumbering houses into something that happened. D takes a later change in how Americans use coffeehouses and places it at their American beginning.',
], {
 quote: 'В США кофейни быстро приобрели собственный характер. В том же абзаце автор рассказывает о солдатах, вернувшихся со Второй мировой войны, и о том, как автомобили меняли привычки американцев.',
 steps: [
  'Ищи момент, когда кофейня начала меняться именно в США. Строки 46–49 вводят эту тему словами a singularly American character — «особый американский характер».',
  'В строках 50–52 стоят слова Soldiers returning from World War II. Солдаты уже возвращаются с войны и хотят снова ходить в кофейни, которые знали в Европе. Это привязывает события к послевоенному времени.',
  'Фраза at the same time связывает тот же период с ростом влияния автомобиля на общественные места. Результатом стала кофейня, рассчитанная на приезжающих на машине. В A совпадают обе улики.',
 ],
 rule: 'В заданиях на время сначала найди нужное событие, затем его временную метку. В одном тексте может быть несколько эпох, каждая со своими деталями.',
 example: ['After the war, the train station became a market.', '«После войны здание вокзала стало рынком». Фраза after the war датирует превращение вокзала в рынок.'],
 wrong: ['B переносит в США эпизод об английской политике.', 'C описывает превышение числа домов как факт. В финале автор только допускает, что это может случиться.', 'D берёт Wi-Fi из современного абзаца. Американский вариант кофейни появился раньше.'],
 remember: 'Возвращение солдат и рост роли автомобиля указывают на один послевоенный период.',
});

add(2, 'H', 'The main idea of the passage is that:', [
 'coffeehouses originated in the Middle East in the fifteenth century as coffee was increasingly imported by traders, but today, North American coffeehouses are increasingly seen as more authentic.',
 'coffee has been a very popular beverage throughout history, having been consumed by people from many continents over the course of many centuries.',
 'coffeehouses are useful indicators of the shifting nature of social communication and cultural norms.',
 'coffeehouses have always served to preserve traditional values and social and professional hierarchies.',
], 'Main idea: coffeehouses reflect cultural change', [[5,7], [88,90]],
 '“Understanding how coffeehouses developed as social sites can permit a greater appreciation for the diverse ways that social communication occurs.” / “The coffeehouse has proven to be remarkably flexible in adapting to its cultural environs.”', [
 'The introduction frames coffeehouses as social sites, and the conclusion emphasizes their ability to adapt to culture. Across the passage they serve as places for conversation, mixed-class gathering, displays of postwar optimism, and work outside the office. These changing roles make them indicators of changing social habits and norms, as H says.',
 'Test a main idea against the beginning, middle, and end. A strong whole-passage answer explains why the author moves through several places and eras instead of repeating one early fact.',
 'F adds a comparison of authenticity the author never makes. G summarizes the opening fact about coffee consumption and misses the development of the institutions. J claims that they always preserve hierarchies, although the English coffeehouses welcomed men of different social ranks.',
], {
 quote: 'Вступление предлагает изучать кофейни как общественные места. Финал говорит, что кофейня приспосабливается к культурной среде. История между этими фразами показывает сам процесс.',
 steps: [
  'В начале отдели coffee — напиток — от coffeehouse — заведения. Статистика про чашки вводит тему, а строки 5–7 ставят задачу понять, как люди общаются в таких местах.',
  'Проследи, чем кофейня служит в разных частях. На Ближнем Востоке это место встреч и разговоров. В Европе там могли пересекаться люди разных слоёв. В послевоенных США оформление передавало надежду на будущее. В современном примере люди работают за ноутбуком вне офиса.',
  'Одна мысль связывает все примеры. По тому, как люди используют и оформляют кофейни, можно судить, как меняются общение и культурные привычки. Именно это говорит H.',
 ],
 rule: 'Главная мысль должна объяснять, зачем автор собрал вместе разные абзацы. Мысленно назови функцию каждого из них и найди общий смысл.',
 example: ['Libraries have hosted lectures, lent books, and offered internet access as their communities’ needs changed.', 'Библиотеки проводят лекции, выдают книги и дают доступ в интернет. Вместе примеры показывают, как учреждение отвечает на меняющиеся нужды сообщества.'],
 wrong: ['F добавляет мнение о большей подлинности американских кофеен. В тексте их культурные различия не оцениваются по подлинности.', 'G описывает популярность напитка и охватывает только вводную деталь.', 'J утверждает, что кофейни всегда поддерживали иерархии. В абзаце о Европе, напротив, говорится о доступе для разных слоёв.'],
 remember: 'Смена функций кофейни помогает увидеть изменения в обществе.',
});

add(3, 'D', 'Information in the second paragraph (lines 8–21) makes it clear that coffeehouses in sixteenth-century Constantinople:', [
 'began to appear after the fall of the Ottoman Empire.',
 'were not commonly used for activities other than drinking coffee.',
 'were the first places where the local population could purchase coffee.',
 'were viewed by many local men as good places to listen to music or poetry.',
], 'Detail: coffeehouses as gathering places', [[9,14], [15,19]],
 '“… the coffeehouse as a place for social gatherings did not emerge until 1554 …” / “… men in Middle Eastern countries considered the coffeehouse an ideal place to listen to music or poetry …”', [
 'The paragraph dates the emergence of coffeehouses as social meeting places in Constantinople to 1554. It then lists the activities men valued in the region, including listening to music or poetry. D matches this description.',
 'Keep the two milestones apart. The shop documented in 1475 already sold coffee. The passage uses 1554 for the rise of the coffeehouse as a social institution, then lists what people did there.',
 'A adds an unsupported claim about the fall of an empire. B conflicts with the list of activities. C overlooks the earlier shop at which people could already buy coffee.',
], {
 quote: 'В 1475 году в первой описанной кофейне уже продавали кофе. В 1554 году в Константинополе кофейни становятся местами встреч. Дальше автор перечисляет занятия, среди которых музыка и поэзия.',
 steps: [
  'Вопрос направляет в строки 8–21. Найди 1554: это XVI век и момент появления кофеен именно как мест для встреч.',
  'В следующем предложении subsequently означает «впоследствии». Мужчины считали кофейню ideal place to listen to music or poetry — подходящим местом, чтобы слушать музыку или поэзию.',
  'D передаёт эту деталь. Рядом есть ещё шахматы, книги и разговоры, так что посетители приходили за разными занятиями.',
 ],
 rule: 'Если абзац даёт две даты, выпиши, что произошло в каждую. Сравни вариант не только с похожими словами, но и с тем, к какому событию они относятся.',
 example: ['The shop sold books in 1900. It became a meeting place in 1910.', 'Книги там продавали уже в 1900 году. В 1910 году изменилось назначение помещения: оно стало местом встреч.'],
 wrong: ['A делает вывод о падении империи, которого абзац не даёт.', 'B противоречит перечислению музыки, поэзии, шахмат, чтения и разговоров.', 'C переносит начало продажи кофе на XVI век, хотя купить кофе можно было ещё в Kiva Han, открытой в 1475 году.'],
 remember: '1475 — продажа кофе. 1554 — появление места для общения.',
});

add(4, 'G', 'The main idea of the third paragraph (lines 22–45) is that:', [
 'in seventeenth-century England, many servants enjoyed the freedom and opportunity to work with their employers to open their own businesses.',
 'the growing popularity of coffeehouses in Europe by the eighteenth century was due in part to the accessibility the coffeehouses offered to men of different social strata.',
 'because it was extremely inexpensive to enter a coffeehouse and purchase a cup of coffee, the beverage became popular among university students.',
 'Venice’s coffeehouses were more authentic than London’s because Venice used its trade routes to the Middle East to import tea and spices as well as coffee.',
], 'Paragraph main idea: access across social ranks', [[30,33], [34,40]],
 '“… coffeehouses were open to men of various social strata; consequently, these establishments became equated with egalitarianism and reform.” / “… by 1739, the phenomenon had become so popular that London contained no fewer than 551 coffeehouses.”', [
 'The paragraph moves from the arrival of coffeehouses in Europe to their social role and growth. It distinguishes them from many public spaces by their openness to men of different ranks and illustrates their popularity with London’s 551 coffeehouses by 1739. G captures that connection without claiming access was the sole cause.',
 'Look for a claim that joins several details. Venice and London establish the spread, the reference to social strata explains what made these venues distinctive, and the count shows their reach.',
 'F generalizes from the single example of Pasqua Rosee. H mistakes “penny universities” for evidence about actual university students. J invents an authenticity ranking that the account of trade does not offer.',
], {
 quote: 'Европейские кофейни были доступны мужчинам разных общественных слоёв. В 1739 году в одном только Лондоне насчитывалось как минимум 551 такое заведение.',
 steps: [
  'Ограничь поиск третьим абзацем. Венеция и первая лондонская кофейня показывают, как заведения распространялись по Европе.',
  'Дальше автор выделяет их особенность. Unlike many public spaces означает «в отличие от многих общественных мест». В кофейнях могли собираться мужчины разных слоёв. Поэтому с этими местами связывали идеи равенства и реформ.',
  'Цифра 551 показывает масштаб популярности. G объединяет доступность и распространение. Слова due in part говорят об одном из факторов, поэтому ответ не сводит весь рост к одной причине.',
 ],
 rule: 'Для главной мысли абзаца ищи общее утверждение, которое объясняет несколько деталей сразу. Проверяй выражения вроде many, always и due in part: они меняют силу утверждения.',
 example: ['The hall was open to all residents. Many clubs soon gathered there.', 'Зал был доступен всем жителям. Вскоре там стало собираться много клубов. Отдельные встречи показывают, что доступное место получило широкое применение.'],
 wrong: ['F обобщает с одного слуги на многих. Автор приводит конкретную историю Pasqua Rosee.', 'H принимает образное название «университеты за пенни» за указание на студентов. Автор объясняет название ценой и атмосферой учёбы.', 'J придумывает сравнение подлинности кофеен Венеции и Лондона.'],
 remember: 'Доступ для разных слоёв и рост популярности связывают детали третьего абзаца.',
});

add(5, 'C', 'The passage states that the original character of British coffeehouses changed in the late eighteenth century insofar as the coffeehouses:', [
 'began as male-only institutions but later admitted women.',
 'started to serve coffees imported from parts of the world other than Turkey.',
 'began to cater to specific occupations and political groups.',
 'started to feature exotic imports such as Naugahyde.',
], 'Detail: coffeehouses acquired distinct clienteles', [[40,45]],
 '“… the clientele who populated these meeting places shaped the character of each coffeehouse. Certain coffeehouses became affiliated with political leanings … or with specific occupations …”', [
 'At the end of the eighteenth century, regular visitors shaped individual coffeehouses. The author’s examples include Tory or Whig political leanings and merchant or lawyer occupations. That is the specialization described in C.',
 'Translate “insofar as” here as “in what respect.” The question asks what changed about the establishments. Read past the abstract word “character” to the specific examples that define the change.',
 'A proposes a change in admission that the paragraph does not report. B substitutes the source of the coffee for the character of the clientele. D moves a postwar American furnishing material into eighteenth-century Britain.',
], {
 quote: 'К концу XVIII века характер каждой британской кофейни определяли её посетители. Некоторые места стали связывать с политическими взглядами, другие — с конкретными профессиями.',
 steps: [
  'Найди временную метку By the end of the eighteenth century в строках 40–41. Она ведёт прямо к изменению, о котором спрашивают.',
  'Слово clientele означает «клиентура, круг посетителей». Следующая фраза показывает, по какому признаку заведения различались.',
  'Tory и Whig — примеры политической принадлежности, merchant и lawyer — профессий. В C есть обе группы, поэтому он точно пересказывает строки 43–45.',
 ],
 rule: 'Для вопроса об изменении найди его дату и фразу с конкретными признаками. Список после such as помогает проверить, какие категории автор имеет в виду.',
 example: ['Some cafés drew students, others attracted artists.', '«Некоторые кафе привлекали студентов, другие — художников». Заведения различаются по кругу посетителей.'],
 wrong: ['A добавляет допуск женщин, которого текст не упоминает.', 'B говорит о поставках кофе, а строки 41–45 описывают посетителей.', 'D берёт Naugahyde из абзаца про американскую архитектуру после Второй мировой.'],
 remember: 'Политика и профессии формировали круг посетителей отдельных кофеен.',
});

add(6, 'J', 'As it is used in lines 68–69 to describe googie architecture, the phrase “brightly lit, almost garishly colored” most nearly means that the décor in American coffeehouses:', [
 'allowed customers to be able to see each other better.',
 'offered a forum for social relationships.',
 'was deemed tacky by the clientele found in European coffeehouses.',
 'was a symbol of America’s belief in a bright and hopeful future.',
], 'Phrase in context: décor as a symbol', [[56,58], [67,73]],
 '“… the postwar feelings of newness and hope …” / “… a visual emblem of a nation’s desire to shake off the past and plunge into the future.”', [
 'The phrase describes striking light and color. The paragraph explains what that look represented: architects wanted to express postwar newness and hope, and the American coffeehouse became a “visual emblem” of the desire to move into the future. J captures that contextual meaning.',
 'When the options explain the effect of a description, read the surrounding sentences for the author’s interpretation. Here “visual emblem” supplies the symbolic meaning of the décor.',
 'F is a possible practical effect of brighter lights, but the passage never gives it as the point. G is the social function that the final comparison makes less central to this American design. H treats “garishly” as a judgment made by European customers, whose reaction is never reported.',
], {
 quote: 'Интерьер был ярко освещён и почти кричаще раскрашен. Автор объясняет, что архитекторы хотели выразить ощущение новизны и надежды после войны. В конце абзаца это оформление названо зримым символом устремлённости в будущее.',
 steps: [
  'Сначала пойми сами слова. Brightly lit — «ярко освещённый». Garishly colored — «раскрашенный в броские, почти кричащие цвета».',
  'Посмотри, что спрашивают варианты. Здесь надо понять, что такой вид означал в контексте. В строках 56–58 архитекторам важно передать postwar feelings of newness and hope.',
  'Строки 69–73 сами объясняют символ. Visual emblem — «зримый знак». Он передаёт желание страны оставить прошлое позади и устремиться в будущее. Поэтому J.',
 ],
 rule: 'Для значения фразы читай и предложение с ней, и ближайшее объяснение автора. Если варианты предлагают смысл образа, ищи в тексте связь между видимой деталью и идеей.',
 example: ['The school hung bright banners as a sign of a fresh start.', 'Школа повесила яркие флаги как знак нового начала. Яркость описывает вид флагов, а остальная часть предложения даёт их смысл.'],
 wrong: ['F объясняет свет удобством для посетителей, которого автор не называет.', 'G возвращается к общению, хотя в финале абзаца главное для описанного оформления — визуальный образ будущего.', 'H приписывает европейским посетителям мнение о безвкусице. Их оценки в тексте нет.'],
 remember: 'Новизна и надежда в строках 56–58 объясняют «зримый символ» в строках 72–73.',
});

add(7, 'C', 'According to the passage, googie architecture in the United States:', [
 'is famous for its brass railings and mahogany booths.',
 'was mainly inspired by the architecture of European coffeehouses.',
 'can be found in the urban areas of Southern California.',
 'is a popular architectural style for playgrounds in Las Vegas.',
], 'Detail: locate the style and read the modifier', [[60,64]],
 '“Found primarily in the urban areas of Southern California and in the glittering new playground of Las Vegas, googie architecture eschewed many of the elegant trappings of the traditional coffeehouse …”', [
 'The phrase “Found primarily in” introduces two locations where the style appeared: urban Southern California and Las Vegas. C directly restates the first location.',
 'Read the full phrase around a keyword. “The glittering new playground of Las Vegas” figuratively describes Las Vegas as a place of entertainment. It is not a claim about the design of physical playgrounds.',
 'A lists features the style eschewed, meaning it avoided them. B confuses the soldiers’ wish to replicate a social experience with the style’s artistic inspiration. D takes the reference to Las Vegas literally and invents a building type.',
], {
 quote: 'Стиль встречался прежде всего в городских районах Южной Калифорнии и в Лас-Вегасе. Он отказался от ряда элементов традиционной кофейни, включая кабинки из красного дерева и латунные перила.',
 steps: [
  'После Found primarily in читаем два места. Первое — the urban areas of Southern California. Это почти дословно C.',
  'Второе место — Las Vegas. Слова glittering new playground образно описывают город как центр развлечений. Ловушка D превращает этот образ в буквальные детские площадки.',
  'Сразу после названий мест стоит eschewed — «отказался от, избегал». Поэтому дерево и латунь в следующей строке относятся к старому оформлению и не могут подтвердить A.',
 ],
 rule: 'Проверяй роль слов в предложении. Название места может входить в метафору, а знакомая деталь может стоять после глагола отказа.',
 example: ['Known as a playground for musicians, the city drew jazz bands.', 'Город образно назван площадкой для музыкантов: туда приезжали джазовые группы. Предложение не говорит о детских площадках.'],
 wrong: ['A разворачивает смысл eschewed и приписывает стилю черты, от которых он отказался.', 'B смешивает европейский опыт посещения кофеен с источником нового декора. Сам новый стиль в тексте заменяет старое европейское оформление.', 'D читает playground буквально. Предложение говорит о городе Лас-Вегасе как месте, где встречался стиль.'],
 remember: 'Found primarily in прямо указывает на городские районы Южной Калифорнии.',
});

add(8, 'J', 'According to the passage, which development contributed to the creation of the drive-in coffee shop?', [
 'The push to create new work spaces for business people',
 'New laws for operating European-style coffeehouses',
 'A lack of physical space in cities',
 'The rise of the automobile in American life',
], 'Cause and effect: the car and the drive-in', [[52,55]],
 '“… the automobile was beginning to have a stronger influence on how Americans used public spaces. The result was the drive-in coffee shop …”', [
 'The passage puts the automobile’s growing influence immediately before “The result was the drive-in coffee shop.” The format suited customers who were increasingly on the go. J names the development explicitly connected to that result.',
 'Use a result signal to find the cause. Read one sentence back from “The result was” and verify that the candidate appears there. An answer may name one contributing cause even if the author describes several conditions.',
 'F borrows the later laptop-and-work discussion. G introduces laws the passage does not describe. H proposes an urban land shortage, while the stated change is how cars affected the use of public space.',
], {
 quote: 'Автомобиль всё сильнее влиял на то, как американцы пользовались общественными местами. Следующее предложение называет результат: drive-in coffee shop, кофейня с обслуживанием автомобилистов.',
 steps: [
  'Найди результат, указанный в вопросе: drive-in coffee shop. В строке 54 он появляется после прямого указателя The result was.',
  'Прочитай перед этим указателем. Автор говорит об усилении роли автомобиля. Посетитель стал мобильнее, а новый формат кофейни был удобен для человека, который постоянно в пути.',
  'В этом фрагменте также есть возвращавшиеся солдаты. Вопрос просит одно развитие, которое помогло появлению формата. Из вариантов текст прямо связывает с ним J.',
 ],
 rule: 'В заданиях о причине ищи сигналы result, led to и because. Читай вокруг сигнала, чтобы не перепутать то, что изменилось, с тем, к чему это привело.',
 example: ['More commuters began cycling. The result was a bike parking area.', 'Больше людей стали ездить на работу на велосипеде. В результате появилась велопарковка. Изменение привычек объясняет новый формат пространства.'],
 wrong: ['F переносит современную работу в кофейне к послевоенному появлению drive-in.', 'G утверждает, что появились новые законы. В этом фрагменте их нет.', 'H придумывает нехватку места. Автор говорит об изменении способов пользоваться пространством.'],
 remember: 'Рост роли автомобиля ведёт к drive-in. Слова The result was отмечают эту связь.',
});

add(9, 'B', 'According to the passage, what is one criticism of the “wi-fi revolution” as it relates to coffeehouses?', [
 'Unreliable technology makes coffeehouses poor substitutes for conventional offices.',
 'Conducting business in coffeehouses represents a problematic intrusion into other parts of personal life.',
 'Working on computers isolates customers from one another, betraying the original communicative ideals of the coffeehouse.',
 'Office workers stay so long in coffeehouses that getting a seat there is difficult.',
], 'Viewpoint: work intrudes on personal time', [[86,88]],
 '“Critics may see the ‘wi-fi revolution’ as another worrying trend toward the invasion of community space—and of personal time and space—by corporate concerns.”', [
 'Lines 86–88 attribute a specific concern to critics: corporate work can enter community space and people’s private time and space. B paraphrases “invasion … by corporate concerns” as business intruding into personal life.',
 'Identify whose opinion the question asks for. “Critics may see” introduces a criticism immediately after the author describes the practical appeal of working away from the cubicle.',
 'A adds technical unreliability. C is plausible if you think about screens and conversation, but the stated objection concerns boundaries between work and personal or community life. D adds a seating problem the author does not mention.',
], {
 quote: 'Критики считают, что рабочие дела захватывают общественное пространство, а также личное время и пространство людей. Кофейня становится одним из мест, куда проникают обязанности из офиса.',
 steps: [
  'Найди говорящего по Critics may see. Дальше идёт именно взгляд критиков, который просит вопрос.',
  'Разбери оборот invasion … by corporate concerns. Кто вторгается? Дела компаний. Куда? В общественное пространство, личное время и личное пространство.',
  'В B та же связь выражена другими словами. Conducting business — рабочие дела, intrusion — вторжение, personal life — личная жизнь. Так и выглядит точный пересказ без совпадения всех слов.',
 ],
 rule: 'Если спрашивают мнение группы, найди маркер говорящего. Затем сохрани при перефразировании, кто совершает действие и на что оно направлено.',
 example: ['Critics say that work notifications intrude on family evenings.', 'Критики считают, что рабочие уведомления вторгаются в семейные вечера. Их беспокоит граница между работой и личным временем.'],
 wrong: ['A добавляет ненадёжный интернет, о котором автор не говорит.', 'C придумывает другую претензию: будто экраны изолируют клиентов. В цитате речь о переносе работы в личную и общественную жизнь.', 'D добавляет проблему свободных мест, которой в критике нет.'],
 remember: 'Сопоставь corporate concerns с business, а invasion с intrusion.',
});

add(10, 'G', 'The passage most strongly suggests that today:', [
 'the coffeehouse is a unique institution in the way that it combines commerce and culture.',
 'contemporary coffeehouses reflect Americans’ changing ideas of the workplace.',
 'coffee has become more influential across the world than has tea or tobacco.',
 'if not for coffeehouses, architects would not have been able to develop novel designs for public buildings.',
], 'Inference: the workplace extends beyond the office', [[77,80], [81,86]],
 '“… the businessperson poring over a laptop computer during ordinary office hours …” / “… coffeehouses reflect and reinforce contemporary attitudes toward the world of work.”', [
 'The last paragraph uses a businessperson working on a laptop in a coffeehouse during office hours as evidence of changing attitudes toward work. The coffeehouse offers freedom from the cubicle while wireless access keeps work possible. G captures the resulting shift in where work can happen.',
 'For “most strongly suggests,” choose the inference that needs the fewest new assumptions. The author expressly connects the coffeehouse scene to contemporary attitudes toward work, making the shift in workplace expectations well grounded.',
 'F adds the unsupported claim of uniqueness. H turns a comparison of trade routes into a global ranking of influence. J claims coffeehouses were necessary for architectural innovation, whereas the passage presents them as one outlet for architects.',
], {
 quote: 'Автор показывает человека, который в обычные рабочие часы сидит с ноутбуком в кофейне. Это наблюдение он прямо связывает с современным отношением к работе.',
 steps: [
  'Слово today направляет к последнему абзацу. В строках 77–80 офисная работа происходит в кофейне, и автор сам пишет reflect and reinforce contemporary attitudes toward the world of work.',
  'Следующие строки объясняют обе стороны. Можно уйти из офисной кабинки и получить больше свободы. Беспроводной интернет позволяет оставаться на связи и выполнять обязанности.',
  'Отсюда следует G. Американцы могут воспринимать рабочее место как более гибкое: часть работы можно перенести за пределы обычного офиса. Текст даёт пример и объясняет его связь с этим выводом.',
 ],
 rule: 'Хороший вывод добавляет один логический шаг к фактам. Проверяй слова unique и условные конструкции if not for: им нужны более сильные доказательства, чем одному примеру.',
 example: ['Employees join office meetings from trains and cafés.', 'Сотрудники подключаются к рабочим встречам из поездов и кафе. Можно вывести, что работа выходит за пределы офиса. Для утверждения о полном исчезновении офисов этих данных мало.'],
 wrong: ['F говорит об уникальности кофейни. Чтобы это доказать, нужно сравнить её с другими заведениями, а автор такого сравнения не делает.', 'H придумывает рейтинг влияния кофе, чая и табака. Эти товары вместе упомянуты в рассказе о торговых путях.', 'J превращает роль кофеен в обязательное условие развития архитектуры. Текст называет их одной площадкой для работы архитекторов.'],
 remember: 'Ноутбук в кофейне в рабочее время показывает, как меняется представление о рабочем месте.',
});

export { questions as readingQuestions, evidenceRu as readingEvidenceRu };
