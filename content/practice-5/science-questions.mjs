const sources = {
  melting: {
    id: 'organic-table-2', en: 'Organic compounds · Table 2, melting points', ru: 'Органические вещества · таблица 2, температуры плавления',
    previewEn: 'The 6-, 7-, and 8-carbon alcohols and aldehydes melt above 215 K. The 8-carbon alkane melts at 216 K.',
    previewRu: 'У спиртов и альдегидов с 6–8 атомами C температура плавления выше 215 K. У алкана с 8 атомами C она равна 216 K.',
  },
  viscosity: {
    id: 'organic-table-3', en: 'Organic compounds · Table 3, viscosity', ru: 'Органические вещества · таблица 3, вязкость',
    previewEn: 'Within each column, viscosity increases as the chain grows from 4 to 8 carbons.',
    previewRu: 'В каждом столбце вязкость возрастает при увеличении цепи от 4 до 8 атомов C.',
  },
  names8: {
    id: 'organic-structure-8', en: 'Organic compounds · Table 1, 8-carbon names and structures', ru: 'Органические вещества · таблица 1, названия и структуры с 8 атомами C',
    previewEn: 'The prefix oct- means 8 carbons. The alcohol suffix gives the name octanol.',
    previewRu: 'Приставка oct- обозначает 8 атомов C. В столбце alcohol получается название octanol.',
  },
  viscosity8: {
    id: 'organic-viscosity-8', en: 'Organic compounds · Table 3, 8-carbon row', ru: 'Органические вещества · таблица 3, строка 8',
    previewEn: 'The 8-carbon values are 0.54 cP for alkane, 8.4 cP for alcohol, and 1.2 cP for aldehyde.',
    previewRu: 'В строке 8 указаны 0,54 cP для алкана, 8,4 cP для спирта и 1,2 cP для альдегида.',
  },
  viscosity5: {
    id: 'organic-viscosity-5', en: 'Organic compounds · Table 3, 5-carbon row', ru: 'Органические вещества · таблица 3, строка 5',
    previewEn: 'At 5 carbons, the values are alkane 0.24, alcohol 5.1, and aldehyde 0.5 cP.',
    previewRu: 'Для 5 атомов C указаны 0,24 cP, 5,1 cP и 0,5 cP для алкана, спирта и альдегида соответственно.',
  },
  gravity: {
    id: 'pendulum-intro', en: 'Pendulums · introductory model and expected acceleration', ru: 'Маятники · вводная модель и ожидаемое ускорение',
    previewEn: 'The passage uses 9.8 m/sec² as the gravity-only reference value and defines one period as one complete back-and-forth cycle.',
    previewRu: 'В условии эталонное значение равно 9,8 м/с². Один период — время полного движения туда и обратно.',
  },
  setup: {
    id: 'pendulum-setup', en: 'Pendulums · shared procedure and timer resolution', ru: 'Маятники · общая процедура и точность отсчёта таймера',
    previewEn: 'Cubes use the same starting angle and are timed to the nearest 0.01 second.',
    previewRu: 'Грузы отпускают с одного начального угла, а время измеряют до ближайшей сотой секунды.',
  },
  experiment1: {
    id: 'pendulum-experiment-1', en: 'Pendulums · Experiment 1, materials and cube dimensions', ru: 'Маятники · эксперимент 1, материалы и размеры кубиков',
    previewEn: 'The lead cube is 11.3 g and the tin cube is 7.4 g. Both have the same edge length and use a 0.5 m thread.',
    previewRu: 'Свинцовый кубик имеет массу 11,3 г, оловянный — 7,4 г. Рёбра одинаковые, длина нити 0,5 м.',
  },
  table1: {
    id: 'pendulum-table-1', en: 'Pendulums · Table 1, short-thread periods', ru: 'Маятники · таблица 1, периоды с короткой нитью',
    previewEn: 'All measured periods lie between 1.39 and 1.53 seconds.',
    previewRu: 'Все измеренные периоды находятся между 1,39 и 1,53 секунды.',
  },
  summary1: {
    id: 'pendulum-experiment-1-summary', en: 'Pendulums · Experiment 1, reported averages', ru: 'Маятники · эксперимент 1, средние из условия',
    previewEn: 'At 0.5 m, the reported mean periods are 1.46 s for lead and 1.48 s for tin. Calculated accelerations are 9.3 and 9.1 m/sec².',
    previewRu: 'При нити 0,5 м в условии указаны средние 1,46 с и 1,48 с. Расчётные ускорения — 9,3 и 9,1 м/с².',
  },
  experiment2: {
    id: 'pendulum-experiment-2', en: 'Pendulums · Experiment 2, changed thread length', ru: 'Маятники · эксперимент 2, новая длина нити',
    previewEn: 'Experiment 1 is repeated with a 1.0 m thread and the same fixed starting angle.',
    previewRu: 'Эксперимент 1 повторяют с нитью 1,0 м и тем же начальным углом.',
  },
  summary2: {
    id: 'pendulum-experiment-2-summary', en: 'Pendulums · Experiment 2, reported averages', ru: 'Маятники · эксперимент 2, средние из условия',
    previewEn: 'At 1.0 m, the reported periods are 2.06 s for lead and 2.09 s for tin. Accelerations are 9.3 and 9.0 m/sec².',
    previewRu: 'При нити 1,0 м указаны периоды 2,06 с для свинца и 2,09 с для олова. Ускорения — 9,3 и 9,0 м/с².',
  },
  table2: {
    id: 'pendulum-table-2', en: 'Pendulums · Table 2, lead-cube trials', ru: 'Маятники · таблица 2, измерения для свинцового кубика',
    previewEn: 'Lead periods are 2.10, 2.04, 2.05, 2.12, and 2.00 s. Their mean is 2.062 s.',
    previewRu: 'Для свинца указаны 2,10; 2,04; 2,05; 2,12 и 2,00 с. Среднее равно 2,062 с.',
  },
};

const questions = [
  {
    prompt: 'Which organic compounds in Table 2 are solids at 215 K?',
    options: [
      'All alkanes, alcohols, and aldehydes with 5 carbons or fewer.',
      'Alcohols and aldehydes with 6 or more carbons and octane.',
      'The 4- and 5-carbon alcohols and aldehydes, and all alkanes with 7 or fewer carbons.',
      'The 5-carbon pentane and pentanol compounds and the 4-carbon butane, butanol, and butanaldehyde.',
    ],
    key: 'B', topic: 'Melting point · comparing a temperature with a threshold', refs: ['melting'],
    en: {
      evidence: 'Table 2 gives 221, 239, and 257 K for the 6–8 carbon alcohols; 217, 231, and 285 K for the corresponding aldehydes; and 216 K for octane. All seven melting points exceed 215 K.',
      reasoning: 'Below its melting point a substance is solid. Compare 215 K with each entry, keeping entries greater than 215 K. In the alkane column only 216 K qualifies. In the other two columns the 6-, 7-, and 8-carbon rows qualify. Those are exactly the compounds in B.',
      alternatives: 'A, C, and D select compounds whose melting points lie below 215 K. For example, pentanol melts at 194 K, so at 215 K it has already passed its melting threshold. Octane is a useful boundary check because 215 K is just below its 216 K melting point.',
    },
    ru: {
      ask: 'Какие вещества из таблицы 2 ещё находятся в твёрдом состоянии при температуре 215 K?',
      data: 'Смотри таблицу 2. В ячейке записана температура плавления вещества, а 215 K — температура, при которой его проверяют.',
      steps: [
        'Если текущая температура ниже температуры плавления, вещество твёрдое. Поэтому ищем в таблице числа больше 215, а не меньше.',
        'В столбце alkane подходят только 216 K в строке 8. Это octane. У спиртов подходят строки 6, 7, 8 с числами 221, 239, 257 K. У альдегидов те же строки с числами 217, 231, 285 K.',
        'Проверь пограничную пару. У octane температура плавления 216 K, а в вопросе 215 K. До плавления ещё 1 K, поэтому он подходит. Все найденные вещества перечислены в B.',
      ],
      concept: 'Температура плавления — порог. Сравни текущую температуру с порогом конкретного вещества. В этой задаче ни одно значение не равно ровно 215 K.',
      distractors: 'В A, C и D выбраны вещества с температурой плавления ниже 215 K. Например, у pentanol порог 194 K, и к 215 K он уже пройден. Такое вещество не подходит к ответу «твёрдое».',
    },
  },
  {
    prompt: 'According to Tables 1 and 3, which organic compound has the highest viscosity?',
    options: ['Octanol', 'Octanaldehyde', 'Hexanol', 'Butane'],
    key: 'F', topic: 'Names, carbon counts, and maximum values', refs: ['names8', 'viscosity8', 'viscosity'],
    en: {
      evidence: 'Table 1 identifies oct- as the 8-carbon prefix and -anol as the alcohol suffix. In Table 3 the largest value is 8.4 cP, at the 8-carbon alcohol.',
      reasoning: 'First locate the maximum number in Table 3. Then use the row and column to recover its name from Table 1. Eight carbons plus the alcohol suffix gives octanol, F.',
      alternatives: 'Octanaldehyde has viscosity 1.2 cP. Hexanol has 5.4 cP. Butane has 0.01 cP. All are below octanol’s 8.4 cP.',
    },
    ru: {
      ask: 'Какое вещество имеет самую большую вязкость и как прочитать его название?',
      data: 'В таблице 3 вязкость измеряется в cP. Самая большая запись — 8,4. Она стоит в строке 8 и столбце alcohol.',
      steps: [
        'Просмотри все столбцы таблицы 3 и найди максимум. В столбце спиртов есть 8,4, а в других столбцах таких больших значений нет.',
        'Перейди к таблице 1. Для 8 атомов углерода дана приставка oct-. У спирта окончание -anol. Получается octanol.',
        'Проверь остальные названия по их строкам. Octanaldehyde — 1,2, hexanol — 5,4, butane — 0,01 cP. Больше всех 8,4 cP у F.',
      ],
      concept: 'Вязкость описывает сопротивление течению. Чем больше число в столбце viscosity, тем больше это сопротивление. Название можно собрать из длины цепи и типа вещества.',
      distractors: 'G тоже начинается с oct-, но относится к альдегиду, а не к спирту. H — спирт с 6 атомами C и меньшей вязкостью. J — алкан с 4 атомами C и самой маленькой записью в таблице.',
    },
  },
  {
    prompt: 'According to Table 3, how do the different types of 5-carbon molecules differ with respect to their viscosity?',
    options: [
      'The alkane has a higher viscosity than the aldehyde and the aldehyde has a higher viscosity than the alcohol.',
      'The alkane has a higher viscosity than the alcohol and the alcohol has a higher viscosity than the aldehyde.',
      'The alcohol has a higher viscosity than the alkane and the alkane has a higher viscosity than the aldehyde.',
      'The alcohol has a higher viscosity than the aldehyde and the aldehyde has a higher viscosity than the alkane.',
    ],
    key: 'D', topic: 'Comparing values within the same row', refs: ['viscosity5'],
    en: {
      evidence: 'At 5 carbons, Table 3 gives alkane 0.24 cP, alcohol 5.1 cP, and aldehyde 0.5 cP.',
      reasoning: 'Stay in the 5-carbon row and rank the three values from greatest to least. Since 5.1 > 0.5 > 0.24, the order is alcohol, aldehyde, alkane. D states both comparisons correctly.',
      alternatives: 'A and B put alkane above alcohol. C puts alcohol first but reverses the other two. Compare 0.50 with 0.24 to see that aldehyde exceeds alkane.',
    },
    ru: {
      ask: 'Расположи по вязкости три типа молекул, у которых ровно 5 атомов углерода.',
      data: 'Нужна одна строка таблицы 3, строка 5. В ней alkane = 0,24; alcohol = 5,1; aldehyde = 0,5 cP.',
      steps: [
        'Зафиксируй число углеродов, 5. Не переходи к строкам 4, 6, 7 или 8.',
        'Сравни числа. Самое большое 5,1 у спирта. Для десятичных дробей можно дописать нули, 0,50 больше 0,24. Значит, вторым идёт альдегид, третьим алкан.',
        'Прочитай D по частям. Спирт вязче альдегида — верно. Альдегид вязче алкана — тоже верно. Поэтому D.',
      ],
      concept: 'Чтобы проверить влияние типа вещества, сравнивай одинаковую длину цепи. Цепочку из трёх величин удобно записывать от большей к меньшей.',
      distractors: 'A и B начинают с алкана, хотя 0,24 — минимум. C ставит спирт первым правильно, но затем утверждает 0,24 > 0,5. При записи 0,24 и 0,50 ошибка становится заметной.',
    },
  },
  {
    prompt: 'For each type of organic compound, what is the relationship between the length of the carbon chain to the melting point and viscosity? As the number of carbons in the chain increases, the melting point:',
    options: ['decreases and the viscosity decreases.', 'increases and the viscosity increases.', 'increases but the viscosity decreases.', 'decreases but the viscosity increases.'],
    key: 'G', topic: 'Following a trend within a column', refs: ['melting', 'viscosity'],
    en: {
      evidence: 'In Table 2, alkane melting points rise from 135 to 216 K, alcohols from 183 to 257 K, and aldehydes from 174 to 285 K. In Table 3, the corresponding viscosities rise from 0.01 to 0.54, 3.0 to 8.4, and 0.4 to 1.2 cP.',
      reasoning: 'For each family, read downward from 4 to 8 carbons. Every successive melting point increases, and every successive viscosity increases. G states both observed trends.',
      alternatives: 'F and J claim melting point decreases. H claims viscosity decreases. None agrees with the within-column data. Comparing different families across a row would answer a different question.',
    },
    ru: {
      ask: 'Что происходит с температурой плавления и вязкостью внутри каждого типа вещества, когда цепь удлиняется?',
      data: 'Число атомов C увеличивается сверху вниз от 4 до 8. Тип вещества задаёт столбец. Температура плавления находится в таблице 2, вязкость — в таблице 3.',
      steps: [
        'Начни с одного столбца в таблице 2. Например, у алканов 135, 143, 178, 182, 216 K. Каждое следующее число больше предыдущего. Так же растут два других столбца.',
        'В таблице 3 повтори проверку вниз по столбцам. У алканов 0,01 → 0,24 → 0,29 → 0,39 → 0,54 cP. Вязкость тоже увеличивается. У спиртов и альдегидов направление такое же.',
        'Обе величины растут при удлинении цепи в данном наборе. Это increases and increases, вариант G.',
      ],
      concept: 'Для тренда меняй одну характеристику за раз. Здесь следим за числом углеродов, оставаясь внутри одного семейства. Тренд не требует одинаковых прибавок.',
      distractors: 'F и J неверно уменьшают температуру плавления. H правильно повышает её, но неверно уменьшает вязкость. Для ответа нужны две правильные части.',
    },
  },
  {
    prompt: 'According to Table 2, the difference in melting point between an alkane and an alcohol with the same number of carbons is approximately how much?',
    options: ['25 K', '35 K', '45 K', '65 K'],
    key: 'C', topic: 'Approximate differences across matched rows', refs: ['melting'],
    en: {
      evidence: 'Subtract the alkane melting point from the alcohol in each row. The five differences are 48, 51, 43, 57, and 41 K.',
      reasoning: 'The differences vary rather than staying exactly constant. Their mean is 48 K, and four of the five individual differences are closest to 45 K among the options. C is the best overall approximation. The 7-carbon difference is 57 K, so the answer should be understood as approximate.',
      alternatives: '25 and 35 K underestimate the general gap. 65 K is farther from the mean than 45 K. Mixing rows would also introduce an unwanted change in chain length.',
    },
    ru: {
      ask: 'На сколько кельвинов примерно различаются температуры плавления спирта и алкана с одинаковым числом атомов C?',
      data: 'Возьми два значения из одной строки таблицы 2. Вычитай alkane из alcohol. Например, при 4 атомах C получаем 183 − 135 = 48 K.',
      steps: [
        'Проверь остальные строки, сохраняя одинаковую длину цепи. Получаются 194 − 143 = 51; 221 − 178 = 43; 239 − 182 = 57; 257 − 216 = 41 K.',
        'Разницы не одинаковые. Для общей оценки сложи их, получится 240 K, и раздели на 5 строк. Среднее различие равно 48 K.',
        'Из предложенных чисел 45 ближе всего к 48. Значит, C. В строке 7 разница 57 K, поэтому нельзя говорить, что каждая пара отличается ровно на 45 K.',
      ],
      concept: 'Approximately означает приближение. Если вопрос просит общий размер разницы для набора, проверь несколько подходящих пар и выбери ближайшую общую оценку.',
      distractors: 'A и B дают слишком маленькую общую разницу. D находится дальше от среднего 48 K, чем C. Сравнение разных строк смешало бы два изменения, тип вещества и длину цепи.',
    },
  },
  {
    prompt: 'To demonstrate that a pendulum’s acceleration is reduced by drag force from air resistance, which additional experiment can be performed in addition to those in the passage?',
    options: [
      'The cubes are suspended by 0.5 m and 1 m springs and set in motion by extending the spring 9.8 cm and letting go in a vacuum chamber with no air pressure.',
      'The cubes are suspended by 0.5 m and 1 m threads and set in motion from the same starting angle in a vacuum chamber with no air pressure.',
      'The cubes are suspended by 0.5 m and 1 m springs and set in motion by extending the spring 9.8 cm and letting go in a vacuum chamber at 1 atmosphere of pressure.',
      'The cubes are suspended by 0.5 m and 1 m threads and set in motion from the same starting angle in a vacuum chamber at 1 atmosphere of pressure.',
    ],
    key: 'G', topic: 'Experimental design · removing one proposed influence', refs: ['gravity', 'setup', 'experiment1', 'experiment2'],
    en: {
      evidence: 'The original experiments use 0.5 m and 1.0 m threads, released from the same starting angle, with air present. G keeps those conditions while removing air.',
      reasoning: 'A vacuum run can be compared with the original air runs to test an air-resistance explanation. Keep the thread, cube, length, and starting angle the same and change the presence of air. Compare the measured periods and the acceleration estimates derived from them.',
      alternatives: 'F and H replace the threads with springs and introduce a different restoring force. H and J also retain air at 1 atmosphere. The chamber’s name alone does not remove air; the stated pressure is what matters.',
    },
    ru: {
      ask: 'Как проверить, влияет ли сопротивление воздуха на измеренный период и рассчитанное по нему ускорение?',
      data: 'В опытах груз подвешен на нити длиной 0,5 м или 1,0 м. Вопрос предлагает убрать воздух или изменить другие части установки.',
      steps: [
        'Назови проверяемый фактор, воздух. Чтобы выяснить его влияние, нужен повтор того же опыта без воздуха.',
        'Сохрани нити, их длины, кубики и начальный угол. В G всё это совпадает с исходными условиями, а давление воздуха убрано.',
        'Сравнение с первоначальными опытами покажет, изменились ли периоды и расчётные значения при удалении воздуха. Ответ G. Земное g при этом само по себе остаётся тем же.',
      ],
      concept: 'Для проверки причины меняют один фактор и сохраняют остальные. Здесь разница между опытами должна быть в наличии воздуха.',
      distractors: 'F и H используют springs, пружины, вместо нитей и меняют физическую систему. H и J оставляют 1 атмосферу давления, поэтому воздух продолжает действовать на груз.',
    },
  },
  {
    prompt: 'In Experiment 1, could a timer that reads to the nearest second be used to obtain similar results, and why?',
    options: [
      'No, because the period of both pendulums was between 1 and 2 seconds.',
      'No, because the pendulums would have traveled farther in 1 second than they did in 1 period.',
      'Yes, because the period of both pendulums was approximately 1.5 seconds.',
      'Yes, because the pendulums would not have traveled as far in 1 second as they did in 1 period.',
    ],
    key: 'A', topic: 'Measurement resolution and small differences', refs: ['setup', 'table1'],
    en: {
      evidence: 'The timer in the passage resolves 0.01 s, and Table 1 records values from 1.39 to 1.53 s. A timer reading to the nearest second would display whole seconds.',
      reasoning: 'The measurements differ by hundredths of a second and cluster between 1 and 2 seconds. Whole-second rounding would turn, for example, 1.45 into 1 and 1.53 into 2, losing the distinctions needed for similar results. A is the fitting option.',
      alternatives: 'B discusses distance instead of measurement resolution. C treats a rough description near 1.5 s as enough to reproduce the finer values. D also focuses on distance and does not establish suitable timer resolution.',
    },
    ru: {
      ask: 'Можно ли заменить таймер с сотыми долями секунды на таймер, который показывает только целые секунды, и получить похожие подробные результаты?',
      data: 'В таблице 1 есть значения 1,48; 1,45; 1,46 и другие, вплоть до 1,53 с. Различия между некоторыми результатами составляют всего 0,01–0,02 с.',
      steps: [
        'Сравни шаг отсчёта. Исходный таймер различает сотые, например 1,45 и 1,46. Новый показывает ближайшую целую секунду.',
        'При округлении до целого 1,45 с станет 1 с, а 1,53 с станет 2 с. Близкие реальные времена дадут грубые показания и потеряют нужные различия.',
        'A отвечает «нет» и указывает на короткий период между одной и двумя секундами. Для таких измерений целая секунда слишком крупный шаг.',
      ],
      concept: 'Разрешение прибора — минимальный шаг, который он отображает. Чтобы различать времена, отличающиеся на сотые, прибор должен показывать достаточно мелкие доли секунды.',
      distractors: 'B и D обсуждают, какое расстояние прошёл груз. Это не обосновывает точность измерения времени. C верно замечает период около 1,5 с, но из этого не следует, что целых секунд достаточно.',
    },
  },
  {
    prompt: 'The results of the experiments indicate that forces other than gravity are acting on the pendulums because the calculated values of acceleration were:',
    options: [
      'the same for pendulums of different lengths.',
      'the same for cubes of different mass.',
      'lower than the expected 9.8 m/sec² from gravity alone.',
      'greater than the expected 9.8 m/sec² from gravity alone.',
    ],
    key: 'H', topic: 'Comparing measured estimates with a reference value', refs: ['gravity', 'summary1', 'summary2'],
    en: {
      evidence: 'The passage uses 9.8 m/sec² as its ideal reference. The reported calculated values are 9.3 and 9.1 in Experiment 1, and 9.3 and 9.0 in Experiment 2.',
      reasoning: 'Each calculated value is below 9.8, so H identifies the deviation the question asks about. The deviation prompts testing influences outside the simplified model, including drag or measurement error; it does not mean that changing the cube changes Earth’s actual gravitational acceleration.',
      alternatives: 'F and G describe equality instead of the mismatch with the reference, and the two materials do not in fact have identical reported values. J has the wrong direction, since all four values are lower.',
    },
    ru: {
      ask: 'В какую сторону расчётные значения отличаются от принятого в условии эталона 9,8 м/с²?',
      data: 'После опыта 1 указаны 9,3 для свинца и 9,1 для олова. После опыта 2 — 9,3 и 9,0 м/с². Эталон в начале текста равен 9,8 м/с².',
      steps: [
        'Поставь рядом каждое число и 9,8. Во всех четырёх случаях 9,3; 9,1; 9,3; 9,0 меньше эталона.',
        'В H сказано lower than the expected 9.8 — «ниже ожидаемого значения 9,8». Это точно совпадает с направлением различия.',
        'В логике вопроса расхождение показывает необходимость проверить дополнительные влияния. Оно само по себе не доказывает единственную причину. В следующем исследовании можно проверять воздух или измерительную процедуру.',
      ],
      concept: 'Сравнивай расчётную оценку с эталоном, сохраняя единицы. Измерительная ошибка и ограниченность модели могут давать расхождение, даже когда само g остаётся постоянным.',
      distractors: 'F и G не называют нужное отклонение от 9,8. Для разных материалов значения к тому же различаются. J утверждает «выше», тогда как все приведённые значения ниже.',
    },
  },
  {
    prompt: 'Based on the passage, if a tin cube is suspended from a 2.0 m thread and set in motion multiple times from the same starting angle, the average measured period will most likely be:',
    options: ['less than 1.48 sec.', 'approximately 1.48 sec.', 'approximately 2.09 sec.', 'greater than 2.09 sec.'],
    key: 'D', topic: 'Extrapolating a trend beyond the measured lengths', refs: ['summary1', 'summary2', 'experiment2'],
    en: {
      evidence: 'For the same tin cube, the reported mean period rises from 1.48 s with a 0.5 m thread to 2.09 s with a 1.0 m thread.',
      reasoning: 'The thread becomes longer while the cube and starting angle are kept the same. Extending the observed trend to 2.0 m predicts a period greater than the value at 1.0 m, which is 2.09 s. D gives the required direction without claiming an exact value.',
      alternatives: 'A and B refer to a shorter-thread value or below it. C repeats the 1.0 m result even though the thread is now longer. The data support an increase, not a fixed period.',
    },
    ru: {
      ask: 'Как изменится средний период оловянного кубика, если нить удлинить до 2,0 м?',
      data: 'Для олова в опыте 1 длина 0,5 м даёт среднее 1,48 с. В опыте 2 длина 1,0 м даёт 2,09 с. Материал и начальный угол сохраняются.',
      steps: [
        'Сравни одинаковый груз в двух опытах. При увеличении длины нити период вырос, движение туда и обратно занимает больше времени.',
        'Новая длина 2,0 м ещё больше, чем 1,0 м. Продолжение тренда означает период больше 2,09 с.',
        'D говорит greater than 2.09 sec. Для выбора этой буквы достаточно направления изменения. Точное новое время таблица не измеряла.',
      ],
      concept: 'Экстраполяция — прогноз за пределами измеренного диапазона. Сначала установи, какая величина растёт, затем прогнозируй с той точностью, которую требует ответ.',
      distractors: 'A и B возвращаются к периоду короткой нити. C сохраняет период нити 1,0 м, хотя длину изменили. Ни один не продолжает показанный рост.',
    },
  },
  {
    prompt: 'In Experiment 2, if an additional trial were conducted using the lead cube, the cube’s measured period would most likely be nearest:',
    options: ['1.90 sec.', '2.05 sec.', '2.15 sec.', '2.20 sec.'],
    key: 'G', topic: 'Predicting a repeat trial from a cluster of results', refs: ['table2', 'summary2'],
    en: {
      evidence: 'The lead column in Table 2 contains 2.10, 2.04, 2.05, 2.12, and 2.00 s. The mean is 2.062 s, reported as 2.06 s.',
      reasoning: 'Another trial under the same conditions is most reasonably predicted near the center of the existing measurements. Of the four choices, 2.05 s is closest to 2.062 s, so G is the best estimate.',
      alternatives: '1.90 and 2.20 s are outside the observed 2.00–2.12 s range. 2.15 s is also above that range and farther from the average than 2.05 s. The prediction is a likely value, not a guarantee for the next trial.',
    },
    ru: {
      ask: 'Какое время вероятнее всего окажется близким к результату ещё одной попытки со свинцовым кубиком в опыте 2?',
      data: 'В таблице 2 смотри столбец lead cube. Пять времён равны 2,10; 2,04; 2,05; 2,12 и 2,00 с.',
      steps: [
        'Сохрани и номер опыта, и материал. Не бери tin cube и не переходи к таблице 1.',
        'Оцени середину пяти результатов. Их сумма 10,31 с. Делим на 5 и получаем 2,062 с, то есть около 2,06 с.',
        'Из предложенных чисел 2,05 ближе всего к 2,062. Поэтому G. Результат следующего опыта может немного отличаться, но для прогноза центр измерений подходит лучше крайних вариантов.',
      ],
      concept: 'Повторные измерения колеблются. Для most likely nearest используй типичное значение группы, часто среднее, и сравни расстояния от него до вариантов.',
      distractors: '1,90 и 2,20 с лежат за пределами измеренного диапазона 2,00–2,12 с. 2,15 с тоже выше всех измерений и дальше от среднего, чем 2,05 с.',
    },
  },
  {
    prompt: 'Experiments 1 and 2 were conducted using lead and tin cubes most likely to determine whether a pendulum’s period was altered by the material attached to the string and the cube’s:',
    options: ['length.', 'surface area.', 'starting angle.', 'mass.'],
    key: 'D', topic: 'Identifying changed and controlled variables', refs: ['experiment1', 'setup', 'experiment2'],
    en: {
      evidence: 'The cubes have the same edge length but different masses, 11.3 g for lead and 7.4 g for tin. They are released from the same angle, and the thread length is fixed within each experiment.',
      reasoning: 'The paired cubes differ in material and mass while size and release angle are controlled. D names the other property that changes with the material. Because material and mass change together, the setup alone does not isolate their individual effects.',
      alternatives: 'Equal cube edge lengths also mean equal cube surface areas. The starting angle is held fixed. Thread length changes between Experiments 1 and 2, but the question asks about the cube’s property, and its edge length stays the same.',
    },
    ru: {
      ask: 'Какое свойство кубика менялось вместе с материалом, когда сравнивали свинец и олово?',
      data: 'В эксперименте 1 указано 11,3 г для свинца и 7,4 г для олова. Рёбра кубиков одинаковые. Начальный угол один и тот же.',
      steps: [
        'Составь короткий список одинаковых условий. У кубиков одинаковая длина ребра, значит одинаковая форма, объём и площадь поверхности. Угол отпускания тоже одинаковый.',
        'Теперь найди различия. Lead и tin — разные материалы. Их массы также различаются, 11,3 и 7,4 г.',
        'D называет mass, массу. Это правильное свойство. Материал и масса меняются одновременно, поэтому отдельно доказать влияние только одного из них по этому сравнению нельзя.',
      ],
      concept: 'Различай длину нити и длину ребра кубика. При одинаковом ребре площадь поверхности куба одинакова, но масса может отличаться из-за материала.',
      distractors: 'A и B относятся к одинаковым размерам кубиков. C — контролируемый угол. Изменение длины нити между опытами не означает изменения длины самого кубика.',
    },
  },
];

export const scienceQuestions = questions.map(({ options, refs, ...question }, index) => ({
  ...question,
  id: index + 1,
  choices: options.map((text, optionIndex) => ({ label: (index % 2 === 0 ? 'ABCD' : 'FGHJ')[optionIndex], text })),
  sources: refs.map(ref => sources[ref]),
}));
