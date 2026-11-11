import {row as m,frac as f,words as w} from './math-notation.mjs';
const ref=(id,label)=>({id,label});
const make=(id,prompt,options,key,topic,support,extra={})=>({id,prompt,key,topic,choices:[...(id%2?'ABCD':'FGHJ')].map((label,i)=>({label,text:options[i]})),...support,...extra});
const sodium=w('volume of sodium chloride'),water=w('volume of water');
export const proofExpressions={
 F:m(f(sodium,water),'×100'),
 G:m(f(water,sodium),'×100'),
 H:m(f(sodium,m('(',water,'+',sodium,')')),'×100'),
 J:m(f(water,m('(',water,'+',sodium,')')),'×100')
};
export const deicerQuestions=[
 make(7,'Suppose a trial had been performed in Experiment 3 with a freezer temperature of −30°C. At this temperature, which of the following sets of proofs would most likely have been determined for De-icer A and De-icer B?',[
  '68.8 · 59.7','70.1 · 70.5','75.5 · 61.8','78.9 · 64.9'
 ],'C','Estimating between two measured temperatures',{
  sources:[ref('deicer-table-2','De-icing · Table 2')],
  evidenceEn:['−30°C lies between −25°C and −50°C. At those measured temperatures, A has proofs 78.9 and 68.8; B has proofs 64.9 and 59.7.','As temperature falls between those rows, both proofs decrease. A plausible intermediate pair should put A between 68.8 and 78.9 and B between 59.7 and 64.9.'],
  explanationEn:['C gives 75.5 for A and 61.8 for B. Both values fall inside their own neighboring ranges. The estimate is between measured conditions, so this is interpolation.','Do not assume that A and B change at the same rate, or that the response is exactly linear. The question asks for the most plausible offered pair, not a uniquely calculated exact proof. C is the only offered pair with both values strictly between the neighboring measurements.'],
  calculations:[{en:'Check each de-icer against its own bounds',ru:'Проверяем границы отдельно для каждого реагента',math:[m('68.8<75.5<78.9'),m('59.7<61.8<64.9')]}],
  whyEn:'A simply repeats the −50°C row. D repeats the −25°C row. B gives B a proof of 70.5, above its warmer −25°C value of 64.9, contrary to the shown decreasing trend.',
  askRu:'Какая пара значений A и B наиболее правдоподобна при −30°C?',
  evidenceRu:['−30°C холоднее −25°C, но теплее −50°C. В этих соседних строках A меняется с 78,9 до 68,8, B — с 64,9 до 59,7.','Значит, для промежуточной температуры ожидаем промежуточное значение каждого реагента: у A между 68,8 и 78,9; у B между 59,7 и 64,9.'],
  stepsRu:['Сначала правильно расставляем отрицательные температуры. −30 находится между −25 и −50, поэтому не берём крайние строки −10 или −75.','Смотрим на A и B отдельно. В C стоят 75,5 и 61,8: каждое число лежит внутри своего нужного диапазона.','Выбираем C. Это оценка между измерениями. Точная прямая зависимость от температуры не дана, поэтому не нужно выдавать линейный расчёт за единственно возможные реальные значения.'],
  ruleRu:'Interpolation — интерполяция: оценка внутри промежутка измеренных условий. Для выбора варианта достаточно проверить диапазон и направление изменения; точная формула требует отдельного обоснования.',
  whyRu:'A копирует строку −50°C, D — строку −25°C. В B значение 70,5 для De-icer B выше 64,9 при −25°C, хотя с дальнейшим охлаждением его proof в таблице уменьшается.'
 },{pairedChoices:true}),
 make(8,'Based on Table 1, if 1 mL distilled water were added to 4 mL sodium chloride, the proof of this mixture would be:',[
  '4','8','40','80'
 ],'J','Mixture ratio and scale',{
  sources:[ref('deicer-table-1','De-icing · Table 1')],
  evidenceEn:['Table 1 gives proof 80 for 10 mL water and 40 mL sodium chloride. That is the ratio 1:4.','The proposed recipe, 1 mL water and 4 mL sodium chloride, has exactly the same proportions, just one tenth of those volumes.'],
  explanationEn:['Scaling both ingredients by the same factor keeps the mixture’s composition unchanged. The 1:4 recipe therefore matches the proof-80 row, giving J.','Alternatively, sodium chloride is 4 out of the total 5 mL. Its fraction is 4/5 = 0.80, matching proof 80 on the Table 1 scale.'],
  calculations:[{en:'Sodium chloride as a fraction of the whole mixture',ru:'Доля sodium chloride во всей смеси',math:[m(f(4,m('1+4')),'×100=80')]}],
  whyEn:'4 is only the sodium chloride volume. 8 has no matching mixture ratio. 40 is the proof for 30 mL water and 20 mL sodium chloride, a different composition.',
  askRu:'Какой proof у смеси 1 мл воды и 4 мл sodium chloride?',
  evidenceRu:['В Table 1 строка с 10 мл воды и 40 мл sodium chloride имеет proof 80.','Отношение воды к sodium chloride — 10:40 = 1:4. У новой маленькой смеси отношение такое же.'],
  stepsRu:['Сравниваем пропорции, а не только абсолютный объём. Если обе части уменьшить в 10 раз, состав не изменится.','Поэтому смесь 1 + 4 мл соответствует строке 10 + 40 мл с proof 80. Можно проверить дробью: 4 мл из общего объёма 5 мл — это 80%.','Ответ J, 80. Число 4 в условии — объём одного компонента, а не готовый proof.'],
  ruleRu:'При одинаковом отношении компонентов одинаков состав смеси. В Table 1 proof совпадает с долей sodium chloride в общем объёме, умноженной на 100. Эта формула относится к смесям именно из данной таблицы.',
  whyRu:'F и G не соответствуют нужной доле. H, 40, относится к другой строке таблицы. Нельзя считать долю как 4 ÷ 1: знаменатель должен включать всю смесь.'
 }),
 make(9,'Based on Experiment 3, as temperature decreases, the minimum proof for a de-icer to be effective:',[
  'increases only.','decreases only.','increases, then decreases.','decreases, then increases.'
 ],'A','Minimum threshold versus measured performance',{
  sources:[ref('deicer-experiment-3','De-icing · Experiment 3 definition of TR'),ref('deicer-table-2','De-icing · Table 2')],
  evidenceEn:['Experiment 3 defines TR as the minimum proof required for a de-icer to have an effect.','As temperatures fall through −10, −25, −50 and −75°C, TR rises through 24.1, 36.9, 49.7 and 52.3.'],
  explanationEn:['The question asks for the MINIMUM required proof, so read the TR column. Every step toward a colder temperature increases that threshold. Choose A, increases only.','The measured A and B proofs decrease, but those are different columns and answer a different question. Lower measured performance and a higher required threshold can occur together.'],
  calculations:[{en:'TR rises at every colder test temperature',ru:'TR растёт при каждом дальнейшем охлаждении',math:[m('24.1<36.9<49.7<52.3')]}],
  whyEn:'Choice B describes the falling measured proofs of De-icers A and B, but the question asks about TR. C and D require a reversal, while the TR sequence has none.',
  askRu:'Как меняется минимально необходимый proof при понижении температуры?',
  evidenceRu:['По определению Experiment 3 минимально необходимый proof называется TR, temperature rating.','В Table 2 при переходе от −10 к −75°C TR идёт так: 24,1 → 36,9 → 49,7 → 52,3.'],
  stepsRu:['Выделяем слово minimum: спрашивают не фактическое значение A или B, а необходимый порог. Значит, нужен столбец TR.','Каждое следующее значение TR больше предыдущего. Ни на одном шаге порог не снижается.','Получаем A, increases only — «только растёт». При этом proof самих A и B падает: требование и фактический результат — разные величины.'],
  ruleRu:'Threshold — порог, который нужно достичь. Не подменяй минимальное требование измеренным результатом конкретного образца. Перед сравнением прочитай заголовок столбца.',
  whyRu:'B получается, если смотреть на убывающие A или B вместо TR. C и D требуют смены направления, но в столбце TR все изменения — увеличение.'
 }),
 make(10,'Which of the following expressions is equal to the proof for each de-icer mixture listed in Table 1?',[
  'Volume of sodium chloride divided by volume of water, times 100.',
  'Volume of water divided by volume of sodium chloride, times 100.',
  'Volume of sodium chloride divided by total volume of water and sodium chloride, times 100.',
  'Volume of water divided by total volume of water and sodium chloride, times 100.'
 ],'H','A part divided by the whole',{
  sources:[ref('deicer-introduction','De-icing · reference proofs'),ref('deicer-table-1','De-icing · Table 1')],
  evidenceEn:['The proof-80 row contains 40 mL sodium chloride and 10 mL water, for a total of 50 mL.','The table gives proof 100 when all 50 mL is sodium chloride, and proof 0 when all 50 mL is water.'],
  explanationEn:['For these Table 1 mixtures, take the sodium chloride volume as the part and the combined volume as the whole. Multiply that fraction by 100. This is H.','Check a middle row and both endpoints: 40/(10+40) × 100 = 80, 50/(0+50) × 100 = 100, and 0/(50+0) × 100 = 0. The same expression fits the entire table.'],
  calculations:[{en:'Check the 80-proof row',ru:'Проверяем строку с proof 80',math:[m(f(40,m('10+40')),'×100=80')]}],
  whyEn:'F and G divide one component by the other instead of by the whole. F would give 400 for the 10:40 recipe. J calculates the water fraction and would give 20 rather than 80 for that row.',
  askRu:'Какая формула воспроизводит proof всех смесей из Table 1?',
  evidenceRu:['Для proof 80 в таблице даны 40 мл sodium chloride и 10 мл воды. Весь объём — 50 мл.','Крайние строки: только sodium chloride → 100; только вода → 0. Формула должна правильно описывать и их.'],
  stepsRu:['В числителе нужна активная часть смеси — объём sodium chloride. В знаменателе нужен весь объём: вода плюс sodium chloride.','Для строки 80 считаем 40 ÷ (10 + 40) × 100 = 80. Формула H даёт именно это.','Проверяем края: 50 из 50 даёт 100, 0 из 50 даёт 0. Значит, H подходит всем строкам. Не дели активную часть только на объём воды.'],
  ruleRu:'Доля = часть ÷ целое. Процент = эта доля × 100. Здесь это правило описывает данные Table 1. После добавления magnesium chloride показатель эффективности нельзя без проверки заменять одной долей sodium chloride.',
  whyRu:'F даёт 40 ÷ 10 × 100 = 400 вместо 80. G тоже сравнивает компоненты между собой. J считает долю воды: для той же строки получится 20, то есть противоположная доля.'
 },{formulaChoices:true}),
 make(11,'Based on Table 1 and Experiment 2, if 6 mL magnesium chloride were added to a mixture of 10 mL distilled water and 40 mL sodium chloride, the proof of the resulting de-icer would most likely be:',[
  'less than 60.','between 60 and 80.','between 80 and 112.','greater than 112.'
 ],'C','A bounded prediction rather than an invented exact value',{
  sources:[ref('deicer-table-1','De-icing · Table 1'),ref('deicer-experiment-2','De-icing · Experiment 2'),ref('deicer-figure-1','De-icing · Figure 1')],
  evidenceEn:['The starting recipe, 10 mL water and 40 mL sodium chloride, has proof 80 in Table 1.','Figure 1 shows that magnesium chloride raises the reference solution’s proof above 100, with a plateau between 111 and 112; at 6 mL, the curve is on that plateau.'],
  explanationEn:['Start with the recipe’s proof of 80. The observed effect of adding magnesium chloride is an increase. Among the offered ranges, C—between 80 and 112—is the most plausible prediction consistent with that improving effect and the range shown in Figure 1.','This exact starting mixture was not the one directly tested in Figure 1. Use the figure for a qualitative prediction; do not report an exact new proof or assume that adding 6 mL always adds a fixed number of proof points to every recipe.'],
  whyEn:'A and B predict a value below the starting 80, opposite to the observed improving effect. D predicts a value beyond the shown plateau without evidence. The figure is not proof of a universal 112 ceiling for every possible mixture.',
  askRu:'В какой диапазон, скорее всего, попадёт proof смеси с исходным составом 10 мл воды и 40 мл sodium chloride после добавления 6 мл magnesium chloride?',
  evidenceRu:['Table 1: исходная смесь 10 + 40 мл имеет proof 80.','Figure 1: добавление magnesium chloride повышает показатель испытанного раствора; затем кривая выходит на плато между 111 и 112. При 6 мл она уже на этом плато.'],
  stepsRu:['Сначала находим исходный показатель именно нашей смеси: 80. Не подменяем его числом 100 с начала другого графика.','Во втором эксперименте добавка повышает эффективность. Поэтому из предложенных вариантов выбираем диапазон выше исходных 80, согласующийся с показанными значениями: 80–112. Это C.','Точное новое число не вычисляем: график построен не для этой конкретной исходной смеси. Он поддерживает направление прогноза, но не правило «прибавлять одно и то же число к любому proof».'],
  ruleRu:'Most likely — наиболее вероятно, а не точное измерение. Сначала установи исходный показатель, затем используй наблюдаемый эффект добавки. Не превращай диапазон вариантов или плато одного опыта в универсальный физический предел.',
  whyRu:'A и B требуют снижения относительно исходных 80, тогда как наблюдаемый эффект добавки — рост. D требует неподтверждённого выхода выше показанного плато. Для C достаточно осторожного прогноза; заявлять точный proof или общий предел 112 по этим данным нельзя.'
 }),
 make(12,'Which of the 2 de-icers from Experiment 3 would be better to use to melt ice if the temperature were between −10°C and −75°C?',[
  'De-icer A, because its proof was lower than the TR at each temperature tested.',
  'De-icer A, because its proof was higher than the TR at each temperature tested.',
  'De-icer B, because its proof was lower than the TR at each temperature tested.',
  'De-icer B, because its proof was higher than the TR at each temperature tested.'
 ],'G','Compare each measured proof with its required threshold',{
  sources:[ref('deicer-experiment-3','De-icing · definition of TR'),ref('deicer-table-2','De-icing · Table 2')],
  evidenceEn:['A exceeds TR in every tested row: 90.3 > 24.1; 78.9 > 36.9; 68.8 > 49.7; 56.6 > 52.3.','At −75°C, B has proof 51.7, below TR 52.3. B therefore fails the stated minimum in that tested condition.'],
  explanationEn:['The de-icer must meet the minimum proof required at the temperature. A remains above the requirement in all four tested conditions, while B falls below it at the coldest tested temperature. That makes A the better-supported choice for the range: G.','Compare a result with the threshold in the SAME row. A larger proof is useful here because it clears a minimum requirement. The table supports this comparison at the tested temperatures; it does not locate the exact temperature where B would stop working between rows.'],
  calculations:[{en:'The coldest tested row distinguishes A from B',ru:'Самая холодная проверенная строка разделяет A и B',math:[m(w('De-icer A: '),'56.6>52.3'),m(w('De-icer B: '),'51.7<52.3')]}],
  whyEn:'F and H treat being below the minimum as an advantage, which reverses the definition of TR. J incorrectly says B stays above TR in every row. G names both the right de-icer and the right reason.',
  askRu:'Какой реагент лучше подтверждён данными для диапазона от −10 до −75°C и почему?',
  evidenceRu:['У A показатель выше TR во всех строках: 90,3 > 24,1; 78,9 > 36,9; 68,8 > 49,7; 56,6 > 52,3.','У B при −75°C показатель 51,7, а требуется минимум 52,3. В этой строке B уже не достигает порога.'],
  stepsRu:['TR — минимально необходимый показатель. Поэтому нужно не упасть ниже порога: proof должен быть не меньше TR.','Построчно проверяем A и B. A во всех четырёх измеренных условиях выше порога. B проходит первые три, но при −75°C оказывается ниже.','Выбираем A с правильной причиной — higher than the TR at each temperature tested. Это вариант G. Не перепутай название De-icer A с буквой варианта ответа.'],
  ruleRu:'Сравнивай результат и требование в одной строке. Minimum означает включённую границу: при точном равенстве порог достигнут. В этих данных A везде строго выше, а B в последней строке ниже.',
  whyRu:'F и H ошибочно называют нахождение ниже минимума преимуществом. J не замечает последнюю строку B. Только G правильно называет и реагент, и обоснование.'
 })
].map(q=>q.formulaChoices?{...q,choices:q.choices.map(c=>({...c,math:proofExpressions[c.label]}))}:q);
