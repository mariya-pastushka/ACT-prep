import {row as m,frac as f,words as w} from '../practice-2/math-notation.mjs';
const make=(id,prompt,options,key,topic,teaching,extra={})=>({id,prompt,key,topic,choices:[...(id%2?'ABCD':'FGHJ')].map((label,i)=>({label,text:options[i]})),...teaching,...extra});
const ref=(id,label)=>({id,label});
export const scienceQuestions=[
 make(1,'Which set of data best supports the claim that Field A has lower soil quality than Field B?',['Figure 1','Figure 2','Table 1','Table 2'],'A','Choosing relevant evidence',{
  sources:[ref('soil-introduction','Soil passage'),ref('soil-figure-1','Soil · Figure 1')],
  evidenceEn:['The passage says that bulk density above 1.33 g/cm³ negatively affects soil quality.','In Figure 1, Field A has a higher bulk density than Field B in all five years: for example, 1.70 versus 1.30 g/cm³ in Year 5. Field A is above 1.33 in four years; Field B is above it in two.'],
  explanationEn:['First identify the claim: we need evidence specifically supporting LOWER quality in A. The passage links high bulk density with a negative effect on soil quality. Figure 1 shows that A consistently has the higher density, so it supports this claim.','This question does not ask whether every measure agrees. Figure 2 generally favors A in yield, and the SOM tables give A the higher rating. Those data do not support the particular claim in the question.'],
  whyEn:'Table 1 only defines the SOM ratings; it does not identify either field. Table 2 and Figure 2 point in the opposite direction from the claim. Choose A, Figure 1.',
  askRu:'Какие данные подтверждают именно утверждение «качество почвы A ниже, чем у B»?',
  evidenceRu:['В тексте есть правило: bulk density выше 1,33 г/см³ отрицательно влияет на качество почвы. Bulk density — сухая масса почвы в единице объёма.','На Figure 1 столбик A выше столбика B во все пять лет. Например, в 5-й год: A — 1,70, B — 1,30 г/см³. У A превышение порога есть в четырёх годах, у B — в двух.'],
  stepsRu:['Сначала выделяем направление утверждения: нужно подтвердить, что A хуже B. Не ищем просто любую таблицу о почве.','По тексту высокая bulk density — неблагоприятный признак. По Figure 1 именно у A этот показатель выше. Значит, Figure 1 даёт нужное доказательство.','Не заставляем все показатели согласоваться. Урожай и SOM в других данных могут говорить в пользу A. Вопрос просит один набор данных, поддерживающий конкретное утверждение. Ответ A.'],
  ruleRu:'Связывай число с правилом из текста. «Больше» само по себе не означает «лучше»: для bulk density в этой задаче высокий показатель неблагоприятен.',
  whyRu:'Figure 2 показывает урожай, в целом более высокий у A. Table 1 даёт шкалу, без сравнения полей. Table 2 даёт A более высокий SOM. Эти варианты не подтверждают нужное направление сравнения.'
 }),
 make(2,'If 8 tons or fewer in crop yields were considered a failed harvest, in which year and in which field would there have been a failed harvest?',['Field A in Year 1','Field A in Year 3','Field B in Year 4','Field B in Year 5'],'J','Thresholds and inclusive boundaries',{
  sources:[ref('soil-figure-2','Soil · Figure 2')],
  evidenceEn:['The four offered cases have yields of 10, 13, 12, and 8 tons, respectively. Field B in Year 5 is the case with 8 tons.'],
  explanationEn:['“8 tons or fewer” means a yield less than OR EQUAL TO 8. A harvest does not need to fall below 8 to meet this definition.','Figure 2 shows exactly 8 tons for Field B in Year 5. The other offered cases all exceed 8 tons. Therefore, choose J.'],
  whyEn:'F is 10 tons, G is 13 tons, and H is 12 tons; none meets the stated cutoff.',
  askRu:'В каком из предложенных случаев урожай не больше 8 тонн?',
  evidenceRu:['Figure 2: A в 1-й год — 10 т; A в 3-й — 13 т; B в 4-й — 12 т; B в 5-й — 8 т.'],
  stepsRu:['Переводим or fewer: «или меньше». Значит, плохим считается урожай 8 тонн и любой урожай ниже 8. Само число 8 тоже подходит.','Находим год и поле каждого варианта на графике. Сравниваем высоту нужного столбика с отметкой 8.','Только B в 5-й год даёт 8 тонн. Поэтому J.'],
  ruleRu:'Слова or fewer, at most и no more than включают границу: ≤. А less than означало бы строго меньше: <.',
  whyRu:'В F, G и H урожай выше 8. Нельзя отбросить J только потому, что там ровно 8, а не меньше.'
 }),
 make(3,'Suppose a new crop rotation for Field B included legumes and other deep-rooted and high-residue crops. The SOM of this field will most likely change in which of the following ways? The SOM will:',['decrease, because soil quality is likely to increase.','decrease, because soil quality is likely to decrease.','increase, because soil quality is likely to increase.','increase, because soil quality is likely to decrease.'],'C','A prediction and its scientific basis',{
  sources:[ref('soil-introduction','Soil passage'),ref('soil-table-1','Soil · Table 1')],
  evidenceEn:['The passage defines SOM as a measure of active organic content. Table 1 associates higher SOM with better soil-quality ratings.','The question adds a new condition: legumes and other deep-rooted, high-residue crops are included in the rotation. Their roots and plant residues can supply organic material to the soil. This is a prediction, not a measured result in the figures.'],
  explanationEn:['More organic material from roots and residues is expected to increase SOM. Under the rating system in Table 1, higher SOM is associated with higher soil quality.','C gives both expected directions correctly: SOM increases and soil quality is likely to increase. The figures do not provide a numerical size for this predicted change.'],
  whyEn:'A and B predict the opposite SOM change. D says SOM rises while quality falls, contrary to the relationship in Table 1.',
  askRu:'Если добавить в севооборот бобовые, растения с глубокими корнями и большим количеством растительных остатков, как, скорее всего, изменится SOM?',
  background:{label:'USDA NRCS · Role of Organic Matter',url:'https://www.nrcs.usda.gov/conservation-basics/soil/soil-health/role-of-organic-matter'},
  evidenceRu:['SOM — soil organic matter: показатель органического вещества в почве. Table 1 связывает более высокий SOM с более высокой оценкой качества.','Новые растения названы в самом вопросе. Их корни и растительные остатки могут пополнять органическое вещество почвы. Именно эта связь нужна для прогноза; график с измерением SOM после такого севооборота нам не дан.'],
  stepsRu:['High-residue crops — культуры, после которых остаётся много растительного материала. Этот материал и корни могут становиться источником органического вещества.','Поэтому ожидаем, что SOM увеличится. Это обоснованный прогноз, а не уже измеренное число.','Теперь проверяем вторую половину варианта: в Table 1 более высокий SOM соответствует лучшему качеству. Получаем «SOM увеличится, качество, вероятно, улучшится» — C.'],
  ruleRu:'В вопросе с прогнозом проверь и направление изменения, и причину. Здесь часть обоснования идёт из определения SOM и шкалы, а часть — из смысла новых условий о растениях.',
  whyRu:'A и B говорят об уменьшении SOM. D правильно выбирает увеличение SOM, но неверно связывает его с ухудшением качества по данной шкале. Точный будущий SOM вычислить нельзя.'
 }),
 make(4,'Based on Figures 1 and 2, consider the average bulk density and the average crop yields for Fields A and B over the study period. Which site had the lower average crop yield, and which site had the higher average bulk density?',['Field A · Field A','Field B · Field B','Field A · Field B','Field B · Field A'],'J','Combining graphs and comparing averages',{
  sources:[ref('soil-figure-1','Soil · Figure 1'),ref('soil-figure-2','Soil · Figure 2')],
  evidenceEn:['Figure 2: A yields 10, 14, 13, 16, 17 tons; B yields 10, 11, 14, 12, 8 tons.','Figure 1: A densities are about 1.30, 1.45, 1.35, 1.50, 1.70; B densities are about 1.20, 1.40, 1.30, 1.40, 1.30 g/cm³.'],
  explanationEn:['Compare the yields first. Over five years, A totals 70 tons and B totals 55 tons. Their average yields are 14 and 11 tons, so B has the lower average yield.','Compare density separately. A has the higher density in every year, so it also has the higher five-year average. The approximate averages are 1.46 for A and 1.32 g/cm³ for B. The requested order is lower yield, THEN higher density: B, A.'],
  calculations:[{en:'Average yield · A and B',ru:'Средний урожай: отдельно A и B',math:[m(w('Field A: '),f(70,5),'=14',w(' tons')),m(w('Field B: '),f(55,5),'=11',w(' tons'))]},{en:'Average bulk density · A and B',ru:'Средняя bulk density: отдельно A и B',math:[m(w('Field A: '),f('7.30',5),'≈1.46',w(' g/cm³')),m(w('Field B: '),f('6.60',5),'≈1.32',w(' g/cm³'))]}],
  whyEn:'F reverses the yield comparison; G reverses the density comparison; H reverses both. J has Field B first and Field A second.',
  askRu:'Нужно дать сразу два ответа: сначала поле с меньшим средним урожаем, затем поле с большей средней bulk density.',
  evidenceRu:['Урожай A по годам: 10, 14, 13, 16, 17 т. Сумма 70 т. Урожай B: 10, 11, 14, 12, 8 т. Сумма 55 т.','Bulk density A: примерно 1,30; 1,45; 1,35; 1,50; 1,70. Сумма 7,30. Для B: 1,20; 1,40; 1,30; 1,40; 1,30. Сумма 6,60.'],
  stepsRu:['Среднее за пять лет — сумма пяти значений, делённая на 5. Для урожая получаем A = 14 т, B = 11 т. Меньший средний урожай у B.','Для плотности делим соответствующие суммы на 5: A ≈ 1,46, B ≈ 1,32 г/см³. Большая средняя плотность у A. Можно было заметить это и без вычислений: столбик A выше во все пять лет.','Соблюдаем порядок столбцов в ответе: Lower crop yield → Field B; Higher bulk density → Field A. Это J.'],
  ruleRu:'Сравнивай каждый показатель отдельно. Нельзя заменить чтение графиков ожиданием «выше плотность — обязательно ниже урожай»: в данных этой задачи показатели не дают такого простого общего вывода.',
  whyRu:'В F неверно выбрано поле с меньшим урожаем. В G неверно выбрано поле с большей плотностью. В H перепутаны обе части.'
 },{pairedChoices:true}),
 make(5,'As soil quality improves, the number of earthworms increases. Students hypothesized that more earthworms would be found in Field B. Are the data presented in Table 2 consistent with this hypothesis?',['Yes; based on SOM, Field B had a soil quality rating of fair and Field A had a soil quality rating of poor.','Yes; based on SOM, Field B had a soil quality rating of excellent and Field A had a soil quality rating of fair.','No; based on SOM, Field B had a soil quality rating of poor and Field A had a soil quality rating of fair.','No; based on SOM, Field B had a soil quality rating of fair and Field A had a soil quality rating of excellent.'],'D','Testing a hypothesis with two tables',{
  sources:[ref('soil-table-1','Soil · Table 1'),ref('soil-table-2','Soil · Table 2')],
  evidenceEn:['Table 2 gives average SOM values of 0.89 for A and 0.28 for B.','In Table 1, a value above 0.75 is excellent; 0.25 to 0.50 is fair. Therefore, A is excellent and B is fair.'],
  explanationEn:['The question supplies a relationship: more earthworms are expected with better soil quality. We must evaluate the hypothesis using the SOM data, not switch to the bulk-density graph.','The SOM ratings favor A, not B. They therefore do not support the hypothesis that B would have more earthworms. D correctly says “No” and gives the correct ratings. The tables do not actually count earthworms.'],
  whyEn:'A–C all give at least one incorrect SOM rating. B also answers Yes when the SOM comparison points toward A.',
  askRu:'Согласуются ли значения SOM с гипотезой, что дождевых червей больше на поле B?',
  evidenceRu:['Сначала берём значения из Table 2: A = 0,89; B = 0,28. Затем используем Table 1 как шкалу.','0,89 больше 0,75 → excellent, «отличное качество». 0,28 попадает в диапазон 0,25–0,50 → fair, «удовлетворительное качество».'],
  stepsRu:['Гипотеза учеников: больше червей будет на B. По условию больше червей ожидается там, где качество почвы лучше.','По SOM лучше выглядит A: excellent против fair у B. Значит, эти данные не поддерживают гипотезу о преимуществе B.','Выбираем вариант, где одновременно правильно стоят «No» и обе оценки: D. Реальное количество червей не измерено, поэтому мы оцениваем согласованность гипотезы с данными, а не доказываем фактическое число червей.'],
  ruleRu:'Когда вопрос требует Table 2, найди там значения. Если их смысл задаётся в Table 1, соедини обе таблицы. Не подменяй выбранный показатель другим.',
  whyRu:'Во всех остальных вариантах хотя бы одна оценка качества не совпадает со шкалой. Ни A, ни B не имеют оценки poor по данным SOM.'
 }),
 make(6,'Based on Table 1, if the amount of Fe₂O₃ produced on Day 9 had been measured for the salt solution, it would most likely have been:',['less than 0.56 g.','between 0.59 g and 0.72 g.','between 1.23 g and 1.84 g.','greater than 1.84 g.'],'J','Extrapolating a trend',{
  sources:[ref('rust-table-1','Rust · Table 1')],
  evidenceEn:['In the salt-solution row, the measured amounts rise over time: 0.56 g on Day 2, 0.81 g on Day 4, 1.23 g on Day 6, and 1.84 g on Day 8.'],
  explanationEn:['Day 9 comes after the last measurement. Continuing the increasing trend suggests an amount above the Day 8 amount of 1.84 g.','This is extrapolation: a prediction beyond the observed interval. The table supports the direction of the next change, but not an exact Day 9 mass. Choose J.'],
  whyEn:'F, G and H would all put the Day 9 amount below the Day 8 amount, contrary to the observed increasing trend.',
  askRu:'Какое количество Fe₂O₃ наиболее вероятно получить в солевом растворе на 9-й день?',
  evidenceRu:['Нужна строка Salt solution, «солевой раствор»: день 2 — 0,56 г; день 4 — 0,81 г; день 6 — 1,23 г; день 8 — 1,84 г.'],
  stepsRu:['Не берём цифры из соседней строки: вопрос именно о солевом растворе. В этой строке количество каждый раз увеличивается.','9-й день позже 8-го. Если наблюдаемый тренд продолжается, новое значение будет больше последнего измеренного 1,84 г.','Такой ответ записан в J: greater than 1.84 g. Точное число вроде 2,10 г из этой таблицы надёжно получить нельзя.'],
  ruleRu:'Extrapolation — прогноз за пределы измеренных точек. Формулировка most likely означает «наиболее вероятно», а не «обязательно при любых условиях».',
  whyRu:'Остальные интервалы ниже 1,84 г. Они потребовали бы снижения, которого в данной строке не наблюдалось.'
 }),
 make(7,'In the experiments shown in Table 1 and Figure 1, by measuring the rate at which Fe₂O₃ was formed every day, the experimenters could also measure the rate at which:',['H₂O was produced.','H₂ was produced.','Fe was produced.','FeO was produced.'],'B','Reading a reaction equation',{
  sources:[ref('rust-reaction','Rust · reaction model')],
  evidenceEn:['The supplied reaction model is 2Fe + 3H₂O → Fe₂O₃ + 3H₂. Both Fe₂O₃ and H₂ appear on the product side, to the right of the arrow.'],
  explanationEn:['The equation links production of Fe₂O₃ to production of H₂. In the given model, forming one mole of Fe₂O₃ corresponds to forming three moles of H₂. Thus, the rate for one product can be used to determine the rate for the other.','The question asks what is PRODUCED. H₂O and Fe are reactants on the left and are consumed. FeO does not occur in this equation. Only H₂ fits, so choose B.'],
  whyEn:'The 1:3 coefficient ratio is a ratio of amounts in moles, not a claim that 1 gram of Fe₂O₃ produces 3 grams of H₂.',
  askRu:'Образование какого вещества можно связать со скоростью образования Fe₂O₃ по данному уравнению?',
  evidenceRu:['В предложенной модели справа от стрелки стоят Fe₂O₃ + 3H₂. Это продукты реакции. Слева стоят 2Fe + 3H₂O — исходные вещества.'],
  stepsRu:['Стрелка разделяет исходные вещества и продукты. Слово produced означает «образовывалось», поэтому прежде всего смотрим вправо.','Справа вместе с Fe₂O₃ находится H₂, водород. Коэффициенты связывают их количества: на 1 моль Fe₂O₃ приходится 3 моля H₂ в данной модели. Поэтому скорость образования одного продукта позволяет определить скорость образования другого.','Выбираем B. Вода H₂O и железо Fe в этом уравнении расходуются, а FeO вообще не указан.'],
  ruleRu:'Большое число перед формулой — коэффициент, а маленькое число внутри формулы — индекс. H₂ и H₂O — разные вещества. Соотношение коэффициентов относится к молям, а не напрямую к граммам.',
  whyRu:'A ошибочно называет воду продуктом. C ошибочно называет железо продуктом. D подставляет другой оксид, FeO, которого нет в модели.'
 }),
 make(8,'Consider the amount of Fe₂O₃ produced by the salt solution on Day 2. Based on Table 1 and Figure 1, the water buffered to pH = 10.0 produced approximately the same amount of Fe₂O₃ on which of the following days?',['Day 1','Day 3','Day 6','Day 10'],'J','Matching a table value to a graph',{
  sources:[ref('rust-table-1','Rust · Table 1'),ref('rust-figure-1','Rust · Figure 1')],
  evidenceEn:['Table 1: salt solution on Day 2 produces 0.56 g Fe₂O₃.','Figure 1: the solid line is pH = 10.0. It reaches roughly 0.56 g near Day 10. On Days 1, 3 and 6, it is well below this target.'],
  explanationEn:['First obtain the target mass from the salt-solution row and Day 2 column: 0.56 g. Then change sources: follow the pH 10.0 line in the graph.','Find where that solid line reaches approximately 0.56 g, slightly above the 0.50-g grid line. This occurs at about Day 10. We match equal amounts, not equal day numbers, so the answer is J.'],
  whyEn:'The graph estimates on Days 1, 3 and 6 are about 0.06, 0.13 and 0.33 g; none is close to 0.56 g.',
  askRu:'На какой день вода с pH 10,0 даст примерно столько же Fe₂O₃, сколько солевой раствор дал на 2-й день?',
  evidenceRu:['Из Table 1: строка Salt solution, столбец Day 2 → 0,56 г. Это число, которое мы ищем на другом графике.','На Figure 1 линия pH = 10.0 — сплошная, самая нижняя. Около 10-го дня она достигает примерно 0,56 г.'],
  stepsRu:['Выписываем цель: 0,56 г. День 2 здесь нужен только для чтения таблицы; он не обязан стать ответом по второму эксперименту.','По легенде выбираем сплошную линию pH 10,0. На вертикальной оси 0,56 находится немного выше 0,50.','Идём от этой высоты к нужной линии, затем вниз к оси day. Получаем приблизительно Day 10 — J.'],
  ruleRu:'В задании «таблица + график» сначала зафиксируй искомое значение, затем найди его во втором источнике. Approximately разрешает разумное считывание между линиями сетки.',
  whyRu:'В дни 1, 3 и 6 сплошная линия ещё значительно ниже 0,56 г. Не перепутай её с пунктирной или штриховой линией другого pH.'
 }),
 make(9,'According to Table 1, what was the amount of Fe₂O₃ produced by the sugar solution from the time the amount was measured on Day 6 until the time the amount was measured on Day 8?',['0.08 g','0.11 g','0.19 g','0.30 g'],'A','Total amount versus interval change',{
  sources:[ref('rust-table-1','Rust · Table 1')],
  evidenceEn:['In the sugar-solution row, the accumulated amount is 0.11 g on Day 6 and 0.19 g on Day 8.'],
  explanationEn:['The question asks how much formed DURING the interval from Day 6 to Day 8. The 0.19-g total includes material that had already formed before Day 6.','Subtract the earlier total from the later total: 0.19 − 0.11 = 0.08 g. This gives the newly produced amount during that interval, so choose A.'],
  calculations:[{en:'Amount formed between the two measurements',ru:'Количество, добавившееся между измерениями',math:[m('0.19−0.11=0.08',w(' g'))]}],
  whyEn:'B is the Day 6 total. C is the Day 8 total. D adds the two totals, counting earlier material twice.',
  askRu:'Сколько нового Fe₂O₃ появилось в сахарном растворе между измерениями на 6-й и 8-й день?',
  evidenceRu:['Sugar solution — сахарный раствор. В его строке: Day 6 → 0,11 г; Day 8 → 0,19 г. Это накопленные количества к каждому дню.'],
  stepsRu:['К 6-му дню уже было 0,11 г. К 8-му дню стало 0,19 г. Вопрос не про всё количество на 8-й день, а только про добавившуюся часть.','Поэтому вычитаем: позднее значение минус раннее. 0,19 − 0,11 = 0,08 г.','Ответ A. Если бы спросили среднюю скорость за эти два дня, дополнительно делили бы 0,08 на 2; здесь скорость не спрашивают.'],
  ruleRu:'Количество за интервал = итоговое накопленное количество − начальное накопленное количество. Средняя скорость — это уже изменение, делённое на длительность.',
  whyRu:'0,11 г — старое количество. 0,19 г — всё количество к 8-му дню. Складывать 0,11 и 0,19 нельзя: это не два независимых образца.'
 }),
 make(10,'Based on Table 1, which graph best shows how the amount of Fe₂O₃ produced by the sugar solution changes over time?',['Graph F','Graph G','Graph H','Graph J'],'F','Graph shape and changing increments',{
  sources:[ref('rust-table-1','Rust · Table 1')],
  evidenceEn:['Sugar solution: Day 2 → 0.00 g; Day 4 → 0.05 g; Day 6 → 0.11 g; Day 8 → 0.19 g.','Over equal two-day intervals, the increases are 0.05, 0.06 and 0.08 g. The amount rises, and the average slope over these intervals increases.'],
  explanationEn:['First reject graphs that decrease: the measured amount always increases. That removes G and J.','Now compare the two increasing graphs. F becomes steeper, consistent with the growing increases over equal time intervals. H flattens, which would mean smaller later increases. F best represents the supplied data.'],
  calculations:[{en:'Changes over equal two-day intervals',ru:'Приросты за одинаковые двухдневные интервалы',math:[m('0.05−0.00=0.05',w(' g')),m('0.11−0.05=0.06',w(' g')),m('0.19−0.11=0.08',w(' g'))]}],
  whyEn:'A graph must match both the direction and the pattern of change. We infer increasing interval slopes from four readings; we do not know the exact continuous curve between measurements.',
  askRu:'Какой из четырёх графиков лучше передаёт изменение количества Fe₂O₃ в сахарном растворе?',
  evidenceRu:['Нужная строка: 0,00 → 0,05 → 0,11 → 0,19 г в дни 2, 4, 6 и 8. Значение постоянно растёт.','Время между соседними измерениями одинаковое: 2 дня. Приросты за эти интервалы: +0,05; +0,06; +0,08 г.'],
  stepsRu:['Сначала проверяем направление: график должен идти вверх. G и J идут вниз — сразу исключаем.','Теперь сравниваем F и H. У F линия становится круче, у H — всё более пологой. Смотрим на приросты в таблице: за одинаковые 2 дня добавляется всё больше.','Значит, нужен возрастающий график с увеличивающимся средним наклоном — F. Четыре точки не задают точную непрерывную форму линии, но среди предложенных рисунков F подходит лучше всего.'],
  ruleRu:'Наклон показывает изменение количества за единицу времени. Более крутой подъём означает более высокую скорость. Для сравнения приростов сначала убедись, что интервалы времени одинаковые.',
  whyRu:'Выбрать H только потому, что он тоже растёт, недостаточно. Его наклон уменьшается, а последовательность приростов в таблице увеличивается.'
 },{graphChoices:true})
];
