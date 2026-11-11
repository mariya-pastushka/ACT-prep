import {row as m,frac as f,words as w} from './math-notation.mjs';
import {deicerQuestions} from './deicer-questions.mjs';
const ref=(id,label)=>({id,label});
const make=(id,prompt,options,key,topic,support,extra={})=>({id,prompt,key,topic,choices:[...(id%2?'ABCD':'FGHJ')].map((label,i)=>({label,text:options[i]})),...support,...extra});
export const springQuestions=[
 make(1,'In a new study, suppose the students had placed a 10.0 N weight on Spring A only. Which of the following drawings most likely represents the results of this experiment?',[
  '0.15 m','0.30 m','0.40 m','0.50 m'
 ],'D','One spring versus two sharing a load',{
  sources:[ref('springs-principle','Passage · unloaded length and identical springs'),ref('springs-figure-2','Figure 2 · Trial 3')],
  evidenceEn:['The unloaded length of every spring is 0.30 m. The springs are identical, and greater force produces greater extension.','In Trial 3, two identical springs share a 20.0 N weight symmetrically. Each spring is labeled 0.50 m. In the question’s equal-load-sharing model, each takes the share associated with 10.0 N.'],
  explanationEn:['A single spring holding 10.0 N must carry the whole load. Compare it with one of the two springs sharing 20.0 N in Trial 3, not with the pair sharing just 10.0 N in Trial 1. This gives the labeled length 0.50 m, option D.','The answer drawings are schematic: select the printed length, not the apparent height of the coil. The extension is 0.50 − 0.30 = 0.20 m; the requested spring length is 0.50 m.'],
  calculations:[{en:'The equal share in Trial 3',ru:'Равная доля нагрузки в Trial 3',math:[m(f('20.0',2),'=10.0',w(' N'))]},{en:'Extension is not the total length',ru:'Удлинение не равно полной длине',math:[m('0.50−0.30=0.20',w(' m'))]}],
  whyEn:'A would be shorter than the unloaded spring, even though the weight stretches it. B shows no extension. C is the 0.40 m length when two springs share a total of 10.0 N; it is not the result for one spring carrying all 10.0 N.',
  askRu:'Какой станет полная длина Spring A, если груз 10,0 N будет висеть только на ней?',
  evidenceRu:['Без груза длина каждой пружины — 0,30 м. Пружины одинаковые; большая сила вызывает большее удлинение.','В Figure 2, Trial 3 груз 20,0 N симметрично держат две одинаковые пружины. Длина каждой — 0,50 м. В принятой в вопросе модели равного распределения на одну приходится доля 10,0 N.'],
  stepsRu:['Ключевое слово only: в новом опыте весь груз держит одна пружина. Нельзя просто скопировать длину из Trial 1, где такой же общий груз делят две пружины.','Ищем подходящую нагрузку на одну пружину: в Trial 3 общий груз 20,0 N делится поровну. На одну приходится 10,0 N, и её длина равна 0,50 м.','Поэтому выбираем D, 0,50 м. Удлинение при этом 0,20 м, но в вариантах указана полная длина, а не только добавившаяся часть.'],
  ruleRu:'Различай общую нагрузку и долю одной пружины. Для симметричного распределения в модели этого задания общий груз делится поровну. А полная длина L и удлинение x связаны так: x = L − L₀.',
  whyRu:'A, 0,15 м, короче исходных 0,30 м, хотя груз растягивает пружину. B, 0,30 м, означал бы отсутствие удлинения. C, 0,40 м, относится к двум пружинам, которые вместе держат 10,0 N. Нужен D.'
 },{drawingChoices:true}),
 make(2,'In Experiment 2, as the distance between the 5.0 N weight and the attachment of the board to Spring B increased, the force exerted on Spring B:',[
  'increased only.','decreased only.','increased, then decreased.','decreased, then increased.'
 ],'G','Inferring force from spring extension',{
  sources:[ref('springs-principle','Passage · extension and force'),ref('springs-figure-4','Figure 4 · Trials 4–6')],
  evidenceEn:['The distance from the Spring B attachment increases from 0.075 to 0.125 to 0.200 m.','In the same order, Spring B’s labeled lengths decrease: 0.45 → 0.40 → 0.32 m. Relative to 0.30 m unloaded, its extensions are 0.15 → 0.10 → 0.02 m.'],
  explanationEn:['Follow Spring B, not Spring C. The same spring becomes shorter at every step while the weight moves farther from its attachment. The passage relates a smaller extension to a smaller force. Therefore, the force on B decreases throughout: G.','The placed weight stays 5.0 N. Moving it changes how the load is shared; it does not change the weight itself. We can infer the direction of force change without inventing numerical forces for Trials 4 and 6.'],
  whyEn:'F reverses the trend. H and J both include a reversal, but B’s lengths decrease in both successive steps. No increase is shown.',
  askRu:'Что происходит с силой на Spring B, когда груз 5,0 N отодвигают от её точки крепления?',
  evidenceRu:['Trial 4: расстояние 0,075 м, длина B — 0,45 м. Trial 5: 0,125 м и 0,40 м. Trial 6: 0,200 м и 0,32 м.','Исходная длина B — 0,30 м. Значит, удлинения по порядку: 0,15; 0,10; 0,02 м.'],
  stepsRu:['Проверяем нужную пружину: вопрос о B. По Figure 4 она каждый раз становится короче: 0,45 → 0,40 → 0,32 м.','Из условия: чем больше сила, тем больше растяжение. Здесь растяжение одной и той же пружины уменьшается, значит уменьшается и сила на неё.','Падение идёт на обоих шагах, без разворота вверх. Decreased only — «только уменьшалась» — ответ G. Сам груз по-прежнему 5,0 N; меняется распределение нагрузки.'],
  ruleRu:'При неизменной жёсткости сравнивать силы можно по удлинениям. Если сравниваешь одну пружину с одной исходной длиной, последовательное уменьшение её полной длины также показывает уменьшение удлинения.',
  whyRu:'F означал бы только рост. H и J требуют смены направления. Но у B оба изменения — уменьшение. Не подставляй растущую длину C вместо данных B.'
 }),
 make(3,'Which of the following statements is most likely the reason that the students used identical springs in Trials 1–3?',[
  'To ensure that the springs stretch similarly when a weight was attached.',
  'To ensure that the springs did not share the weight evenly.',
  'To compensate for the effects of oscillation on the results of the experiment.',
  'To compensate for the weight of the board exerted on each of the springs.'
 ],'A','Identical equipment as a controlled variable',{
  sources:[ref('springs-principle','Passage · identical spring constants'),ref('springs-experiment-1','Experiment 1')],
  evidenceEn:['The passage explicitly states that the springs had identical spring constants.','In Experiment 1, the students changed the attached weight and waited until the springs stopped oscillating before measuring.'],
  explanationEn:['Identical spring constants make the springs respond in the same way to the same applied spring force. This lets the students compare stretching while changing the load, rather than mixing load changes with differences in the springs. A expresses that purpose.','This is control of a variable: keep the equipment comparable while investigating the effect of the changed load. The reason is not to make the springs share the load unevenly.'],
  whyEn:'B states the opposite of comparable response. C confuses identical equipment with waiting for oscillation to stop. D concerns the suspended board introduced in Experiment 2, not the purpose of identical springs in Trials 1–3.',
  askRu:'Зачем в Trials 1–3 нужны именно одинаковые пружины?',
  evidenceRu:['В тексте прямо сказано: identical spring constants — одинаковые коэффициенты жёсткости.','В первом эксперименте меняют величину груза, а длину измеряют после прекращения колебаний.'],
  stepsRu:['Чтобы проверить влияние груза, нужно убрать лишнее различие между пружинами. Иначе одна могла бы растягиваться сильнее просто потому, что она мягче.','Одинаковая жёсткость означает одинаковое удлинение при одинаковой приложенной силе. Поэтому реакцию пружин можно корректно сравнивать.','Ответ A: обеспечить похожее растяжение. Ожидание остановки колебаний — другой приём, он обеспечивает устойчивое измерение, а не делает пружины одинаковыми.'],
  ruleRu:'Controlled variable — величина, которую сохраняют неизменной ради честного сравнения. В Trials 1–3 изменяют груз; одинаковые пружины помогают связать изменение длины именно с нагрузкой.',
  whyRu:'B говорит о неравномерном распределении, а не об одинаковом отклике. C путает выбор пружин с ожиданием покоя. D относится к подвижной доске второго эксперимента; в первом такого груза-доски ещё нет.'
 }),
 make(4,'Based on the results of Trials 1 and 5, the weight of the board used in Experiment 2 was:',[
  '0 N.','2.5 N.','5.0 N.','10.0 N.'
 ],'H','Accounting for the board’s own weight',{
  sources:[ref('springs-figure-2','Figure 2 · Trial 1'),ref('springs-figure-4','Figure 4 · Trial 5')],
  evidenceEn:['Trial 1: a 10.0 N weight is shared by A and B, with each spring 0.40 m long.','Trial 5: B and C are each 0.40 m long while holding the board and a centered 5.0 N weight.'],
  explanationEn:['Use the passage’s comparison of identical springs and equal shared stretching. In both symmetric trials, each spring reaches the same length, 0.40 m. In the load-sharing model of the question, the shared total load is therefore the same: 10.0 N.','Trial 5’s total includes BOTH the placed 5.0 N weight and the board’s own weight. Subtract the placed weight from the total: 10.0 − 5.0 = 5.0 N. Choose H.'],
  calculations:[{en:'Total load = placed weight + board weight',ru:'Общая нагрузка = груз + вес доски',math:[m('10.0=5.0+',w('board weight')),m(w('board weight'),'=10.0−5.0=5.0',w(' N'))]}],
  whyEn:'F ignores the board’s contribution. G would give only 7.5 N in total. J would give 15.0 N in total. Only H completes the 10.0 N comparison.',
  askRu:'Сколько весит сама подвешенная доска, если сравнить Trials 1 и 5?',
  evidenceRu:['В Trial 1 общий груз — 10,0 N; обе пружины имеют длину 0,40 м.','В Trial 5 обе пружины снова имеют длину 0,40 м. Но теперь они держат не только груз 5,0 N, а ещё и саму доску. Груз расположен в центре.'],
  stepsRu:['Сравниваем одинаковые пружины при симметричной общей нагрузке. Одинаковая длина 0,40 м означает одинаковое растяжение. По принятой в задании модели общая поддерживаемая нагрузка совпадает с 10,0 N из Trial 1.','В Trial 5 эти 10,0 N состоят из двух частей: 5,0 N отдельного груза и неизвестного веса доски. Доска тоже нагружает пружины, её нельзя пропустить.','Вычитаем известную часть: 10,0 − 5,0 = 5,0 N. Ответ H. Это вес — сила в ньютонах, не масса в килограммах.'],
  ruleRu:'Сначала перечисли всё, что поддерживают пружины. Затем составь равенство полной нагрузки. Для этой задачи сравниваем две симметричные ситуации с одинаковыми пружинами и одинаковыми подписанными длинами.',
  whyRu:'F, 0 N, означал бы отсутствие собственного веса у доски. G даёт сумму 7,5 N, а J — 15,0 N. Ни одна не совпадает с нагрузкой 10,0 N, которую требует сравнение. Только H даёт нужную сумму.'
 }),
 make(5,'In which of the following trials in Experiment 2, if any, was the force exerted by the weight and the board equally distributed between Springs B and C?',[
  'Trial 4','Trial 5','Trial 6','None of the trials'
 ],'B','Equal extension and centered loading',{
  sources:[ref('springs-principle','Passage · identical springs'),ref('springs-figure-4','Figure 4 · Trials 4–6')],
  evidenceEn:['Trial 4: B = 0.45 m and C = 0.34 m. Trial 5: B = C = 0.40 m. Trial 6: B = 0.32 m and C = 0.50 m.','In Trial 5, the weight is 0.125 m from B, halfway along the 0.25 m board, and the board is level.'],
  explanationEn:['Identical springs with the same unloaded length have equal extensions when their lengths match. Trial 5 is the only trial with matching B and C lengths, 0.40 m each. It gives equal stretching and equal sharing, so choose B.','The position provides a useful check: 0.125 m is half the board’s 0.25 m length. Do not use the 0.50 m separation of the TOP attachments as the board length.'],
  calculations:[{en:'Halfway along the suspended board',ru:'Середина подвешенной доски',math:[m(f('0.25',2),'=0.125',w(' m'))]}],
  whyEn:'A and C show unequal spring lengths. D is false because Trial 5 explicitly provides equal lengths and centered loading.',
  askRu:'В каком trial сила от доски и груза делится поровну между B и C?',
  evidenceRu:['Figure 4: в Trial 4 длины 0,45 и 0,34 м; в Trial 5 — 0,40 и 0,40 м; в Trial 6 — 0,32 и 0,50 м.','В Trial 5 груз находится на 0,125 м от B вдоль доски. Сама нижняя доска имеет длину 0,25 м.'],
  stepsRu:['У одинаковых пружин исходная длина одинакова — 0,30 м. Если полные длины равны, то и удлинения равны.','Только в Trial 5 обе длины 0,40 м. Каждая удлинилась на 0,10 м, поэтому в этой симметричной ситуации силы равны.','Дополнительно проверяем положение груза: 0,125 м — половина 0,25 м. Груз в середине, доска горизонтальна. Это Trial 5, вариант B.'],
  ruleRu:'Равенство сил проверяем по одинаковым пружинам и равным удлинениям. А середину ищем по длине нижней доски, не по расстоянию между верхними креплениями.',
  whyRu:'В Trial 4 и Trial 6 длины B и C различны: нагрузка не делится поровну. None of the trials неверно, потому что Trial 5 как раз показывает равенство.'
 }),
 make(6,'Assume that when a spring is stretched from its normal length, it stores the energy to return to its normal state as potential energy. Assume also that the greater the force of the weight stretching the spring, the more the spring will stretch. Was the potential energy stored by Spring C higher in Trial 5 or Trial 6?',[
  'In Trial 5, because the force of the weight on Spring C was greater in Trial 5.',
  'In Trial 5, because the force of the weight on Spring C was less in Trial 5.',
  'In Trial 6, because the force of the weight on Spring C was greater in Trial 6.',
  'In Trial 6, because the force of the weight on Spring C was less in Trial 6.'
 ],'H','Stored energy and extension of the same spring',{
  sources:[ref('springs-principle','Passage · unloaded length'),ref('springs-figure-4','Figure 4 · Trials 5 and 6')],
  evidenceEn:['Spring C is 0.40 m long in Trial 5 and 0.50 m long in Trial 6. Its unloaded length is 0.30 m.','Therefore, the extensions are 0.10 m and 0.20 m, respectively. Trial 6 stretches the same spring more.'],
  explanationEn:['A greater extension of the same spring corresponds to a greater stretching force and more stored elastic potential energy. Trial 6 therefore has the higher stored energy.','Check BOTH halves of the choice. H names Trial 6 and correctly says that the force on C is greater there. J picks the right trial but gives the opposite explanation, so it is not correct.'],
  calculations:[{en:'Use extension from the unloaded length',ru:'Вычисляем удлинение от исходной длины',math:[m(w('Trial 5: '),'0.40−0.30=0.10',w(' m')),m(w('Trial 6: '),'0.50−0.30=0.20',w(' m'))]}],
  whyEn:'F and G select Trial 5 despite its smaller extension. J incorrectly claims that Trial 6 has a smaller force. H matches both the comparison and its cause.',
  askRu:'В каком из Trials 5 и 6 Spring C запасла больше потенциальной энергии и почему?',
  evidenceRu:['У C в Trial 5 длина 0,40 м, в Trial 6 — 0,50 м. До нагрузки длина была 0,30 м.','Удлинения: Trial 5 → 0,10 м; Trial 6 → 0,20 м. Сравниваем одну и ту же пружину с одной жёсткостью.'],
  stepsRu:['Пружина запасает энергию из-за деформации. Сначала отделяем деформацию от полной длины: из каждой длины вычитаем 0,30 м.','В Trial 6 удлинение больше. Для той же пружины это соответствует большей растягивающей силе и большему запасу упругой потенциальной энергии.','Проверяем весь вариант: нужен Trial 6 и причина «сила больше». Это H. В J trial указан верно, но причина перевёрнута — «сила меньше».'],
  ruleRu:'Для одинаковой жёсткости большее растяжение означает больший запас упругой энергии. Сравнивай удлинение от нормальной длины, а не только общую длину. И проверяй отдельно ответ и обоснование после because.',
  whyRu:'F и G выбирают Trial 5, где растяжение меньше. J выбирает Trial 6, но неправильно объясняет его меньшей силой. Только H верен целиком.'
 })
];
export const scienceQuestions=[...springQuestions,...deicerQuestions];
