const figure = 's10-figure-1';

const refs = {
 neptune: [figure, 'Figure 1 · Neptune profile', 'Рисунок 1 · кривая Нептуна', 'Follow Neptune’s curve between 0 and 100 km.', 'Проследи кривую Нептуна от 0 до 100 км.'],
 jupiter: [figure, 'Figure 1 · Jupiter profile', 'Рисунок 1 · кривая Юпитера', 'Compare the horizontal change across each altitude interval.', 'Сравни, насколько смещается кривая по горизонтали в каждом диапазоне высот.'],
 saturn: [figure, 'Figure 1 · Saturn at 0 km', 'Рисунок 1 · Сатурн на отметке 0 км', 'At cloud-top altitude, Saturn is about 100 K.', 'На высоте верхушек облаков температура Сатурна около 100 K.'],
 composition: ['s10-atmosphere-table', 'Table 1 · relative abundance', 'Таблица 1 · относительное содержание', 'Compare the percentage columns for the three planets.', 'Сравни столбцы с процентами для трёх планет.'],
 ammonia: ['s10-atmosphere-nh3', 'Table 1 · NH₃', 'Таблица 1 · строка NH₃', 'Jupiter 0.0045%, Neptune 0%, Saturn 0.0035%.', 'Юпитер 0,0045%, Нептун 0%, Сатурн 0,0035%.'],
 hydrogen: ['s10-atmosphere-h', 'Table 1 · H', 'Таблица 1 · строка H', 'Neptune 79.0%, Saturn 96.1%.', 'Нептун 79,0%, Сатурн 96,1%.'],
 helium: ['s10-atmosphere-he', 'Table 1 · He', 'Таблица 1 · строка He', 'Neptune 18.0%, Saturn 3.3%.', 'Нептун 18,0%, Сатурн 3,3%.'],
 warming: ['s10-warming-saturn', 'Table 2 · Saturn without warming', 'Таблица 2 · Сатурн без парникового нагрева', 'Without greenhouse warming, Saturn’s cloud tops are at 25 K in the table.', 'Без парникового нагрева в таблице указано 25 K.'],
 controls: ['s10-controls', 'Passage · experimental conditions', 'Текст · условия опытов', 'All trials used 100 mL of water and the same tablet mass and composition.', 'Во всех опытах 100 мл воды, одинаковые масса и состав таблетки.'],
 temp: ['s10-temperature-table', 'Table 3 · temperature trials', 'Таблица 3 · опыты с температурой', 'Higher temperatures correspond to shorter bubbling times in these trials.', 'При большей температуре пузырьки прекращаются раньше в этих опытах.'],
 twenty: ['s10-temperature-20', 'Table 3 · 20°C', 'Таблица 3 · строка 20 °C', 'Visible bubbling lasted 80 s.', 'Время выделения пузырьков — 80 с.'],
 thirty: ['s10-temperature-30', 'Table 3 · 30°C', 'Таблица 3 · строка 30 °C', 'Visible bubbling lasted 50 s.', 'Время выделения пузырьков — 50 с.'],
 form: ['s10-form-table', 'Table 4 · tablet form', 'Таблица 4 · форма таблетки', 'The form changed at 20°C; the final volume was 80 mL for all forms.', 'Форму меняли при 20 °C. Конечный объём для всех форм — 80 мл.'],
 whole: ['s10-form-whole', 'Table 4 · whole tablet', 'Таблица 4 · целая таблетка', '80 s, 36 mL at 30 s, and 80 mL in total.', '80 с, 36 мл за 30 с и 80 мл в конце.'],
 crushed: ['s10-form-crushed', 'Table 4 · crushed tablet', 'Таблица 4 · измельчённая таблетка', '40 s, 66 mL at 30 s, and 80 mL in total.', '40 с, 66 мл за 30 с и 80 мл в конце.'],
};

const questions = [];
function add(id, key, topic, prompt, options, references, en, ru) {
 const labels = id % 2 ? 'FGHJ' : 'ABCD';
 const sources = references.map(name => {
  const [id, en, ru, previewEn, previewRu] = refs[name];
  return {id, en, ru, previewEn, previewRu};
 });
 questions.push({
  id, key, topic, prompt, sources, en, ru,
  choices: options.map((text, index) => ({label: labels[index], text})),
 });
}

add(1, 'H', 'Read a constant value on a graph',
 'According to Figure 1, the temperature of Neptune remains the same as altitude above the highest cloud tops increases from:',
 ['−250 km to −200 km.', '−150 km to −50 km.', '0 km to 100 km.', '150 km to 200 km.'], ['neptune'],
 {
  evidence: 'Neptune’s curve stays at about 50 K from 0 km through 100 km. Its vertical segment actually continues to about 150 km.',
  reasoning: 'Temperature is on the horizontal axis. The same horizontal coordinate means the same temperature, even when altitude changes. The whole interval in H lies on that vertical segment.',
  alternatives: 'F and G lie on the sloping part below the cloud tops. J reaches above 150 km, where the curve moves toward a higher temperature.',
 },
 {
  ask: 'В каком диапазоне меняется высота, а температура Нептуна остаётся прежней?',
  data: 'По горизонтали на рисунке 1 измеряют температуру. По вертикали измеряют высоту относительно верхушек облаков.',
  steps: ['Найди кривую Neptune. Это самая левая из трёх линий.', 'На высотах от 0 до примерно 150 км кривая идёт вертикально. При движении вдоль неё координата по горизонтали остаётся около 50 K.', 'Из вариантов целиком внутри этого участка находится 0–100 км. Поэтому H.'],
  concept: 'Если измеряемая величина находится на оси X, вертикальная часть кривой показывает постоянное X. Сначала прочитай подписи осей.',
  distractors: 'F и G захватывают наклонную часть ниже отметки 0 км. В J кривая уходит вправо после 150 км, поэтому температура растёт.',
 });

add(2, 'A', 'Compare temperature changes across intervals',
 'According to Figure 1, the temperature of Jupiter changes the most between:',
 ['−150 km and −50 km.', '−50 km and 50 km.', '50 km and 100 km.', '100 km and 200 km.'], ['jupiter'],
 {
  evidence: 'On Jupiter’s curve, −150 km is roughly 330 K and −50 km is roughly 160 K. The endpoints differ by about 170 K.',
  reasoning: 'Compare the horizontal distance between the two temperatures in each choice. The spread from about 330 K to 160 K is much larger than the movements on the other listed intervals.',
  alternatives: 'B spans a bend near the minimum, but even its full temperature spread is much smaller than A’s. C climbs only part of the upper curve. D stays near 200 K.',
 },
 {
  ask: 'Между какими двумя высотами у Юпитера самая большая разница температур?',
  data: 'На кривой Jupiter при −150 км получается примерно 330 K, а при −50 км примерно 160 K.',
  steps: ['Найди −150 км на оси высоты. Мысленно веди линию вправо до кривой Jupiter, затем читай температуру по оси X.', 'Так же прочитай −50 км. Вычти меньшее значение из большего: примерно 330 − 160 = 170 K.', 'У B, C и D точки заметно ближе по горизонтали. Больше всего меняется температура на участке A.'],
  concept: 'Сравнивай абсолютную разность |T₂ − T₁|. Падение на 170 K больше по величине, чем рост на 30 K.',
  distractors: 'В B есть изгиб около минимальной температуры, но он даёт меньший разброс. C охватывает небольшое повышение температуры. В D обе точки находятся около 200 K.',
 });

add(3, 'H', 'Compare the same gas across planets',
 'Considering only the gases listed in Table 1, which gas is more abundant in the atmosphere of Jupiter than in the atmosphere of either Neptune or Saturn?',
 ['H', 'CH₃', 'NH₃', 'He'], ['ammonia', 'composition'],
 {
  evidence: 'For NH₃, Table 1 lists 0.0045% on Jupiter, 0% on Neptune, and 0.0035% on Saturn.',
  reasoning: 'The Jupiter entry must exceed both comparison entries in the same row. For NH₃, 0.0045% is greater than 0% and 0.0035%, so the answer is H.',
  alternatives: 'F (H) is higher on Saturn than on Jupiter. G (CH₃) is higher on both comparison planets. J (He) is higher on Neptune than on Jupiter.',
 },
 {
  ask: 'Какого газа на Юпитере в процентах больше, чем на каждой из двух других планет?',
  data: 'Нужен блок Relative abundance (%). Для NH₃ он показывает 0,0045% на Юпитере, 0% на Нептуне и 0,0035% на Сатурне.',
  steps: ['Выбери одну строку газа. Двигайся вдоль неё по трём столбцам планет.', 'Проверь две пары отдельно. 0,0045 больше нуля. В сравнении 0,0045 и 0,0035 первые разные цифры — 4 и 3 в одной и той же позиции.', 'На Юпитере процент NH₃ больше в обеих парах. Поэтому H. Буква H здесь обозначает вариант ответа, а сам газ — NH₃.'],
  concept: 'Either Neptune or Saturn в таком сравнении означает, что значение Юпитера должно превосходить каждое из двух других значений.',
  distractors: 'В F процент H на Сатурне 96,1%, выше 86,1% на Юпитере. В G значения Нептуна и Сатурна выше 0,2% Юпитера. В J гелия на Нептуне 18,0%, выше 13,6% на Юпитере.',
 });

add(4, 'C', 'Combine a figure and a table',
 'Based on Table 2, the average temperature at Saturn’s cloud tops without greenhouse warming is how many degrees cooler than the temperature given in Figure 1?',
 ['5 K', '25 K', '75 K', '150 K'], ['saturn', 'warming'],
 {
  evidence: 'Figure 1 places Saturn at about 100 K when altitude above the cloud tops is 0 km. Table 2 gives 25 K for Saturn without greenhouse warming.',
  reasoning: 'Both readings refer to the same planet and the same altitude. Subtract the cooler reference value from the figure’s value: about 100 − 25 = 75 K. Choose C.',
  alternatives: 'B is the temperature without warming, not the difference. The two readings give a gap near 75 K, which rules out 5 K and 150 K.',
 },
 {
  ask: 'На сколько кельвинов было бы холоднее у верхушек облаков Сатурна без парникового нагрева?',
  data: 'На рисунке 1 у Сатурна при высоте 0 км около 100 K. В таблице 2 для Сатурна без парникового нагрева — 25 K.',
  steps: ['Высота отсчитывается от верхушек облаков, поэтому нужная отметка — 0 км. На этой высоте найди кривую Saturn и считай температуру около 100 K.', 'В таблице 2 выбери строку Saturn. Получишь 25 K, расчётную температуру без парникового нагрева.', 'How many degrees cooler спрашивает разность. Вычти 25 из примерно 100: получишь около 75 K, вариант C.'],
  concept: 'При сравнении двух источников сначала проверь, что планета, высота и единицы совпадают. Затем вычти значения в правильном порядке.',
  distractors: '25 K — одно из исходных значений. 5 K и 150 K не совпадают с разностью. Точное положение кривой читается приблизительно, поэтому выбираем ближайший вариант.',
 });

add(5, 'J', 'Compare two gases within each planet',
 'Which of the following statements about H and He in the atmospheres of the 3 planets is supported by the data in Table 1?',
 [
  'Both Saturn and Neptune have a higher relative abundance of He than of H.',
  'Both Saturn and Jupiter have a higher relative abundance of He than of H.',
  'Both Jupiter and Neptune have an equivalent relative abundance of He and H.',
  'Both Saturn and Neptune have a lower relative abundance of He than of H.',
 ], ['hydrogen', 'helium'],
 {
  evidence: 'On Saturn, He is 3.3% and H is 96.1%. On Neptune, He is 18.0% and H is 79.0%.',
  reasoning: 'Compare He with H separately for each planet. Saturn has 3.3 < 96.1, and Neptune has 18.0 < 79.0. Both comparisons support J.',
  alternatives: 'F reverses both comparisons. G reverses the Saturn comparison and is also wrong for Jupiter (13.6% He versus 86.1% H). H claims equality although neither Jupiter nor Neptune has equal H and He percentages.',
 },
 {
  ask: 'Какое утверждение правильно сравнивает содержание H и He?',
  data: 'Таблица 1: Сатурн — He 3,3%, H 96,1%. Нептун — He 18,0%, H 79,0%.',
  steps: ['Выбери столбец Saturn и найди две строки, H и He. Доля гелия 3,3% меньше доли водорода 96,1%.', 'Перейди в столбец Neptune. Там 18,0% гелия меньше 79,0% водорода.', 'Только J правильно описывает оба сравнения: He меньше H и на Сатурне, и на Нептуне.'],
  concept: 'Both означает, что нужно проверить обе части ответа. В №3 мы шли по строке одного газа, а здесь сравниваем две строки внутри одного столбца планеты.',
  distractors: 'F и G требуют, чтобы He было больше H, хотя таблица даёт обратное. H утверждает равенство. На Юпитере 13,6% He и 86,1% H, на Нептуне 18,0% He и 79,0% H.',
 });

add(6, 'B', 'Identify a controlled condition',
 'Which condition was kept the same in every trial of both experiments?',
 ['Starting water temperature', 'Volume of water', 'Tablet form', 'Time until bubbling ended'], ['controls'],
 {
  evidence: 'The passage states that each trial used 100 mL of water. Experiment 1 varied temperature, and Experiment 2 varied tablet form.',
  reasoning: 'A condition is controlled across both experiments if its value is held fixed every time. The fixed water volume makes B correct.',
  alternatives: 'A changes in Experiment 1. C changes in Experiment 2. D is a measured outcome and varies across the tables.',
 },
 {
  ask: 'Что оставалось одинаковым во всех опытах, даже когда ученики меняли температуру или форму таблетки?',
  data: 'В условиях прямо записано: each trial used 100 mL of water.',
  steps: ['В первом опыте меняли температуру. Значит, она не постоянна для всех опытов.', 'Во втором опыте меняли форму таблетки. Значит, форма тоже не подходит.', 'Объём воды в любой строке был 100 мл. Время пузырения измеряли уже после начала опыта. Ответ B.'],
  concept: 'Постоянную величину задают до опыта и удерживают. Результат измеряют. Например, объём воды здесь постоянен, а длительность измеряют.',
  distractors: 'A и C — величины, которые исследователи намеренно меняли. D — наблюдаемый результат.',
 });

add(7, 'J', 'Compare the time for two conditions',
 'In Experiment 2, how did the time for the crushed tablet compare with the time for the whole tablet?',
 ['It was twice as long.', 'It was 20 s longer.', 'It was the same.', 'It was half as long.'], ['whole', 'crushed'],
 {
  evidence: 'Table 4 gives 80 s for the whole tablet and 40 s for the crushed tablet.',
  reasoning: 'Read the same time column for both rows. Divide the crushed tablet’s time by the whole tablet’s time: 40 ÷ 80 = 0.5. The crushed tablet took half as long.',
  alternatives: 'F reverses the ratio. G gets the direction wrong. H ignores the difference between 40 s and 80 s.',
 },
 {
  ask: 'Во сколько раз отличается время пузырения измельчённой таблетки от времени целой?',
  data: 'Целая — 80 с. Измельчённая — 40 с. Обе цифры берём из столбца Time until bubbling ended.',
  steps: ['Возьми время измельчённой таблетки, которую сравниваем, и поставь в числитель: 40.', 'Возьми время целой как точку отсчёта и поставь в знаменатель: 80.', '40 ÷ 80 = 0,5. Значит, измельчённая таблетка выделяла пузырьки вдвое меньше по времени. Ответ J.'],
  concept: 'Для сравнения «во сколько раз» дели. Для вопроса «на сколько секунд» вычитай. Здесь разность 40 с, а отношение 0,5.',
  distractors: 'F перепутал, какое время берут за основу. G говорит об увеличении времени, а оно сократилось. H игнорирует разницу между 80 и 40 с.',
 });

add(8, 'A', 'Read a trend across a table',
 'As the starting water temperature increased in Experiment 1, what happened to the time until bubbling ended?',
 ['It decreased.', 'It increased.', 'It remained at 80 s.', 'It increased and then decreased.'], ['temp'],
 {
  evidence: 'As the temperature rises from 10°C to 40°C, the times in Table 3 are 120, 80, 50, and 35 s.',
  reasoning: 'Read the results in increasing temperature order. Each time is shorter than the previous one, so the time decreases throughout the measured range.',
  alternatives: 'B gives the opposite direction. C treats one row as the whole table. D requires at least one increase, and none appears.',
 },
 {
  ask: 'Как менялось время пузырения при повышении температуры воды?',
  data: 'При 10, 20, 30 и 40 °C получились соответственно 120, 80, 50 и 35 с.',
  steps: ['Иди по таблице от меньшей температуры к большей, то есть сверху вниз.', 'Смотри на столбец времени: 120 → 80 → 50 → 35 с. Каждое следующее число меньше предыдущего.', 'Поэтому время уменьшалось, ответ A. Данные показывают направление изменения.'],
  concept: 'Уменьшение не означает, что на каждом шаге величина падает одинаково. Здесь изменения составляют −40, −30 и −15 с.',
  distractors: 'B меняет направление. C использует 80 с только из строки 20 °C. Для D время должно было хотя бы раз вырасти, но такого перехода в таблице нет.',
 });

add(9, 'G', 'Estimate between measured values',
 'Assuming a straight-line trend between 20°C and 30°C, how long would visible bubbling most likely last at 25°C in Experiment 1?',
 ['35 s', '65 s', '80 s', '120 s'], ['twenty', 'thirty'],
 {
  evidence: 'The measured times are 80 s at 20°C and 50 s at 30°C. The target, 25°C, is halfway between those temperatures.',
  reasoning: 'With the straight-line assumption stated in the question, take the midpoint of the times: (80 + 50) ÷ 2 = 65 s. G is the estimate.',
  alternatives: 'F and J are the endpoint times for 40°C and 10°C. H is the time at 20°C. All three fail to represent the midpoint.',
 },
 {
  ask: 'Сколько примерно будет длиться пузырение при 25 °C, если между 20 и 30 °C считать тренд прямым?',
  data: '20 °C → 80 с. 30 °C → 50 с. Строки для 25 °C нет.',
  steps: ['25 находится ровно посередине между 20 и 30: до каждой температуры по 5 °C.', 'При допущении о прямой время тоже будет посередине. Среднее двух значений равно (80 + 50) ÷ 2 = 65 с.', 'Проверь, что 65 лежит между 50 и 80. Выбирай G. Это оценка по соседним строкам.'],
  concept: 'Оценка внутри измеренного диапазона называется интерполяцией. Простое среднее подходит здесь потому, что точка находится ровно посередине и вопрос задаёт прямолинейное приближение.',
  distractors: '35 и 120 с относятся к другим измеренным температурам. 80 с — результат при 20 °C, у края нужного интервала.',
 });

add(10, 'D', 'Separate early output from final output',
 'Which statement best compares the crushed and whole tablets in Experiment 2?',
 [
  'The crushed tablet produced less gas at 30 s and more gas by the end.',
  'Both tablets produced the same amount of gas at 30 s.',
  'The whole tablet produced more gas by the end.',
  'The crushed tablet produced more gas at 30 s, but both produced the same final gas volume.',
 ], ['whole', 'crushed'],
 {
  evidence: 'Table 4 gives 66 mL at 30 s for the crushed tablet and 36 mL for the whole tablet. Both finish at 80 mL.',
  reasoning: 'Compare the two rows twice. In the early-volume column, 66 > 36. In the final-volume column, 80 = 80. Only D makes both comparisons correctly.',
  alternatives: 'A reverses the early comparison and invents a larger final volume. B claims equality too early. C invents a difference in the last column.',
 },
 {
  ask: 'Как измельчение повлияло на объём газа, собранного через 30 секунд, и на итоговый объём?',
  data: 'Через 30 с: измельчённая 66 мл, целая 36 мл. В конце у обеих 80 мл.',
  steps: ['Сначала сравни числа за одинаковые первые 30 секунд. У измельчённой к этому моменту уже собрано больше газа: 66 > 36.', 'Затем сравни последний столбец. После окончания пузырения обе таблетки дают 80 мл.', 'D объединяет обе части. Измельчённая раньше выделила большую часть газа, а конечные объёмы в таблице совпали.'],
  concept: 'Скорость процесса и его итог — разные показатели. Два опыта могут дойти до одного результата за разное время.',
  distractors: 'A переворачивает сравнение через 30 с. B ошибочно переносит равенство из конечного столбца на ранний момент. C приписывает целой таблетке больший конечный объём.',
 });

add(11, 'H', 'Check which combination was actually measured',
 'Can the exact time for a crushed tablet at 30°C be read directly from the two tables?',
 [
  'Yes. Table 3 gives 50 s for a crushed tablet at 30°C.',
  'Yes. Table 4 gives 40 s for a crushed tablet at 30°C.',
  'No. Table 3 varies temperature for whole tablets, and Table 4 compares tablet forms only at 20°C.',
  'No. Neither table gives any values at 30°C.',
 ], ['controls', 'thirty', 'crushed'],
 {
  evidence: 'Table 3 uses whole tablets, including the 30°C trial. Table 4 uses 20°C for all three forms, including the crushed trial.',
  reasoning: 'The requested observation needs both conditions in a single trial. Each condition appears separately, but the crushed-at-30°C combination is absent. H correctly explains why no exact time can be read.',
  alternatives: 'F assigns the wrong tablet form to 50 s. G assigns the wrong temperature to 40 s. J overlooks the 30°C whole-tablet row.',
 },
 {
  ask: 'Есть ли в данных точное время для измельчённой таблетки именно при 30 °C?',
  data: '50 с при 30 °C получено для целой таблетки. 40 с для измельчённой получено при 20 °C.',
  steps: ['Выпиши два условия нужного опыта: форма Crushed и температура 30 °C.', 'В таблице 3 есть нужная температура, но там все таблетки целые. В таблице 4 есть нужная форма, но там везде 20 °C.', 'Ни одна строка не удовлетворяет обоим условиям одновременно. H верно описывает, чего именно не хватает.'],
  concept: 'Число из таблицы относится ко всем условиям своего опыта. Чтобы знать точный результат нового сочетания, нужны измерения при этом сочетании.',
  distractors: 'В F к 50 с приписана чужая форма. В G к 40 с приписана чужая температура. В J верное No сопровождается неверным объяснением: 30 °C есть в таблице 3.',
 });

add(12, 'C', 'Calculate an average rate',
 'What was the average rate of gas collection during the first 30 s for the crushed tablet in Experiment 2?',
 ['0.45 mL/s', '2.0 mL/s', '2.2 mL/s', '66 mL/s'], ['crushed'],
 {
  evidence: 'Starting from zero collected gas, the crushed tablet reaches 66 mL of collected gas after 30 s.',
  reasoning: 'Average collection rate is change in volume divided by elapsed time. For the first 30 s, (66 − 0) ÷ 30 = 2.2 mL/s. Choose C.',
  alternatives: 'A reverses the division. B divides the final 80 mL by the full 40 s, answering a different time window. D reports a volume with rate units.',
 },
 {
  ask: 'Какой объём газа в среднем собирали за секунду в течение первых 30 секунд?',
  data: 'Берём строку Crushed: сначала 0 мл, через 30 с — 66 мл.',
  steps: ['Определи окно времени: вопрос ограничен 30 секундами. Значит, объём нужен за первые 30 с, а не в конце опыта.', 'Средняя скорость равна изменению объёма, делённому на время. Подставь: (66 − 0) ÷ 30 = 2,2.', 'Проверь единицы: мл ÷ с = мл/с. Поэтому C. Это среднее за весь интервал, а скорость в отдельную секунду могла отличаться.'],
  concept: 'Для скорости считай «сколько за одну единицу времени». Слово average означает, что общий прирост распределяют по всему указанному интервалу.',
  distractors: 'A получается при делении времени на объём. B использует весь опыт вместо первых 30 секунд. D берёт 66 мл и подписывает его как скорость без деления.',
 });

export { questions as scienceQuestions };
