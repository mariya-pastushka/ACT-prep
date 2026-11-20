const sources = {
  intro: {
    id: 'virus-intro', en: 'Viruses · introduction and shared starting point', ru: 'Вирусы · введение и общее исходное положение',
    previewEn: 'All three hypotheses start from nucleic acid. Viral replication requires infection of a living cell.',
    previewRu: 'Общее для гипотез: происхождение из нуклеиновой кислоты. Для размножения вирусу нужна живая клетка.',
  },
  coevolution: {
    id: 'virus-coevolution', en: 'Coevolution Hypothesis · RNA, copying, and protein packaging', ru: 'Совместная эволюция · РНК, копирование и белковая оболочка',
    previewEn: 'RNA sequences develop enzyme-like abilities, including self-replication. Some enter cells; others are packaged in proteins and replicate after infecting cells.',
    previewRu: 'Последовательности РНК приобретают ферментоподобные свойства и самокопирование. Часть включается в клетки, часть упаковывается в белки и размножается после заражения клеток.',
  },
  figure1: {
    id: 'virus-figure-1', en: 'Figure 1 · ancestral RNA and the coevolved particle', ru: 'Рисунок 1 · предшественник из РНК и первая вирусная частица',
    previewEn: 'The figure labels an RNA sequence, its replicated sequence, and the protein structure surrounding the first coevolved viral particle.',
    previewRu: 'Подписаны исходная и скопированная последовательности РНК, а также белковая структура первой вирусной частицы.',
  },
  cellular: {
    id: 'virus-cellular', en: 'Cellular Origin Hypothesis · escape and independent evolution', ru: 'Клеточное происхождение · выход из клетки и независимая эволюция',
    previewEn: 'DNA or RNA sequences escape from cellular organisms. Viruses then evolve independently of their original hosts and can eventually infect either cell type.',
    previewRu: 'Последовательности ДНК или РНК выходят из клеточных организмов. Затем вирусы эволюционируют независимо от исходного хозяина и могут заражать клетки обоих типов.',
  },
  regressive: {
    id: 'virus-regressive', en: 'Regressive Evolution Hypothesis · intracellular parasites and DNA', ru: 'Регрессивная эволюция · внутриклеточные паразиты и ДНК',
    previewEn: 'Bacterial intracellular parasites lose structures needed for survival outside cells. The resulting particle retains nucleotides and a capsid, sometimes an envelope.',
    previewRu: 'Внутриклеточные бактериальные паразиты теряют структуры для жизни вне клеток. Сохраняются нуклеотиды, капсид и иногда дополнительная оболочка.',
  },
  figure2: {
    id: 'virus-figure-2', en: 'Figure 2 · parasitic bacterium and regressive virus', ru: 'Рисунок 2 · паразитическая бактерия и вирус после регресса',
    previewEn: 'An ancestral intracellular parasitic bacterium with DNA and membranes is shown above a simpler viral particle.',
    previewRu: 'Наверху внутриклеточная паразитическая бактерия с ДНК и мембранами; внизу более простая вирусная частица.',
  },
  soil: {
    id: 'soil-intro', en: 'Soil study · clay percentages, fans, and units', ru: 'Опыт с почвой · доля глины, вентиляторы и единицы',
    previewEn: 'Soil X contains 5% clay and Soil Y 40%. Fans simulate wind. Soil loss is measured in kg/ha after 10 hours of wind.',
    previewRu: 'В X 5% глины, в Y 40%. Ветер заменяют вентиляторами. После 10 часов ветра измеряют потерю почвы в кг/га.',
  },
  experiment1: {
    id: 'soil-experiment-1', en: 'Experiment 1 · compost and straw as cover', ru: 'Эксперимент 1 · покров из компоста и соломы',
    previewEn: 'Different percentages of compost and straw represent different amounts of natural vegetative cover.',
    previewRu: 'Разная площадь покрова из компоста и соломы моделирует разную площадь естественной растительности.',
  },
  cover: {
    id: 'soil-table-1', en: 'Table 1 · organic cover and soil loss', ru: 'Таблица 1 · органический покров и потеря почвы',
    previewEn: 'Increasing cover from 0% to 75% reduces deflation from 105,000 to 20,000 kg/ha in X and from 65,000 to 12,000 kg/ha in Y.',
    previewRu: 'При росте покрова от 0% до 75% потеря X падает со 105 000 до 20 000 кг/га, Y — с 65 000 до 12 000 кг/га.',
  },
  experiment2: {
    id: 'soil-experiment-2', en: 'Experiment 2 · sprinkler times and measurements', ru: 'Эксперимент 2 · продолжительность полива и измерения',
    previewEn: 'Sprinklers simulate rainfall for 0, 4, or 8 hours. Water content is recorded in Table 2 and subsequent wind-driven loss in Table 3.',
    previewRu: 'Полив моделирует дождь: 0, 4 или 8 часов. Влажность записана в таблице 2, последующая потеря от ветра — в таблице 3.',
  },
  water: {
    id: 'soil-table-2', en: 'Table 2 · water content at matching sprinkler times', ru: 'Таблица 2 · влажность при одинаковом времени полива',
    previewEn: 'At 4 hours, X has 13% water and Y 14%. At 8 hours, X has 16% and Y 22%.',
    previewRu: 'Через 4 часа у X 13% воды, у Y 14%. Через 8 часов у X 16%, у Y 22%.',
  },
  deflation: {
    id: 'soil-table-3', en: 'Table 3 · soil loss at matching sprinkler times', ru: 'Таблица 3 · потеря почвы при одинаковом времени полива',
    previewEn: 'At 4 hours, X loses 66,000 kg/ha and Y 40,100. At 8 hours, X loses 14,000 and Y 10,300 kg/ha.',
    previewRu: 'Через 4 часа X теряет 66 000 кг/га, Y — 40 100. Через 8 часов X теряет 14 000, Y — 10 300 кг/га.',
  },
};

const questions = [
  {
    prompt: 'The development of which of the following is addressed in the passage by the Coevolution Hypothesis, but NOT by the Regressive Evolution Hypothesis?',
    options: ['Self-replication', 'Capsid', 'Deoxyribonucleic acid', 'Cell membrane transit'],
    key: 'F', topic: 'Comparing what two hypotheses explain', refs: ['coevolution', 'regressive', 'figure1'],
    en: {
      evidence: 'Coevolution explicitly says the RNA sequences developed enzyme-like abilities, including self-replication. Regressive evolution instead starts with intracellular cellular parasites and describes the loss of structures.',
      reasoning: 'The question asks which development is explained by Coevolution but not by Regressive Evolution. Coevolution describes how copying ability appeared in ancestral RNA. Regressive Evolution assumes a reproducing cellular ancestor and does not describe the origin of self-replication. F matches that difference.',
      alternatives: 'Both accounts mention protein packaging or a capsid. DNA is discussed in Regressive Evolution rather than explained in Coevolution. Cell membrane transit is described as a step in Cellular Origin, not as the specified development in Coevolution.',
    },
    ru: {
      ask: 'Появление какой способности объясняет гипотеза совместной эволюции, но не объясняет гипотеза регрессивной эволюции?',
      data: 'В абзаце Coevolution прямо сказано, что последовательности РНК developed — приобрели — способность self-replicate. В Regressive речь идёт об уже существовавших паразитических клетках, которые теряли структуры.',
      steps: [
        'Раздели вопрос на два условия: нужная способность должна объясняться в Coevolution и не объясняться в Regressive. Одного совпадения с первой гипотезой мало.',
        'Найди self-replicate в Coevolution. Гипотеза описывает появление у последовательностей РНК способности делать собственные копии.',
        'Теперь проверь Regressive. Там исходный организм уже размножается внутри хозяина. Объясняется упрощение организма, а не возникновение самокопирования. Поэтому ответ F.',
      ],
      concept: 'Фраза «не объясняет развитие» не означает «полностью отрицает наличие». Гипотеза может предполагать существование способности, не рассказывая, как она появилась.',
      distractors: 'G: белковая оболочка есть в обоих описаниях. H: ДНК обсуждается в регрессивной гипотезе, что не подходит к условию. J: прохождение через мембрану подробно описано в другой гипотезе — Cellular Origin.',
    },
  },
  {
    prompt: 'Supporters of all of the theories presented in the passage would agree with the conclusion that the first viruses:',
    options: ['evolved from bacteria.', 'could self-replicate outside a cell.', 'were enclosed within a membrane.', 'contained nucleic acid.'],
    key: 'D', topic: 'Finding the overlap among all hypotheses', refs: ['intro', 'coevolution', 'cellular', 'regressive'],
    en: {
      evidence: 'The introduction says biologists agree that viruses originated from nucleic acid. Coevolution uses RNA; Cellular Origin uses DNA or RNA; Regressive Evolution retains nucleotides and discusses DNA.',
      reasoning: 'Nucleic acid is the common category that includes both RNA and DNA. Although the proposed routes differ, all three place genetic material in the first viral particles. Therefore D is supported by every account.',
      alternatives: 'A is specific to the bacterial-ancestor account. B confuses the self-replicating ancestral RNA with the later viral particles that require cells. C confuses a protein capsid with a membrane; the regressive account says an envelope is present only at times.',
    },
    ru: {
      ask: 'С каким утверждением о первых вирусах согласны сторонники всех трёх гипотез?',
      data: 'Во введении названа общая основа: nucleic acid. В Coevolution это РНК, в Cellular Origin — ДНК или РНК, в Regressive сохраняется генетический материал и отдельно обсуждается ДНК.',
      steps: [
        'Слово all требует проверить три гипотезы. Утверждение, верное только для одной из них, сразу не подходит.',
        'Объедини РНК и ДНК в общую категорию: обе являются нуклеиновыми кислотами. Все три объяснения сохраняют такой генетический материал в вирусной частице.',
        'D говорит contained nucleic acid — «содержали нуклеиновую кислоту». Это общее для всех объяснений, поэтому выбираем D.',
      ],
      concept: 'Общий ответ часто сформулирован шире, чем отдельные версии. «Нуклеиновая кислота» охватывает и ДНК, и РНК, а «ДНК» уже не охватывает все варианты.',
      distractors: 'A: происхождение от бактерий не заявлено всеми гипотезами. B: самокопирующаяся древняя РНК и уже сформированный вирус — не одно и то же. C: капсид из белка не равен мембране; дополнительная мембранная оболочка есть не всегда.',
    },
  },
  {
    prompt: 'The Coevolution Hypothesis does NOT provide an explanation for the earliest virus particles possessing:',
    options: ['protein.', 'enzyme-like activity.', 'nucleotides.', 'DNA.'],
    key: 'J', topic: 'NOT questions · identifying an unexplained feature', refs: ['coevolution', 'figure1'],
    en: {
      evidence: 'Coevolution describes RNA sequences, enzyme-like abilities, and packaging inside proteins. Neither that paragraph nor Figure 1 describes the appearance of DNA.',
      reasoning: 'Check each feature against this hypothesis alone. Protein packaging is stated; enzyme-like activity is stated; RNA supplies a nucleotide sequence. DNA is the feature whose origin is not explained. Select J.',
      alternatives: 'F is the protein packaging. G is explicitly named as an acquired ability. H is present in the RNA sequences. The question asks about what the account explains, not whether DNA could ever exist in any virus.',
    },
    ru: {
      ask: 'Какое свойство первых вирусных частиц не объясняется в Coevolution?',
      data: 'В нужном абзаце названы последовательности РНК, enzyme-like abilities и упаковка inside proteins. Появление ДНК там не описано.',
      steps: [
        'Выдели NOT. Здесь выбираем отсутствующее объяснение, а не самое знакомое свойство вируса.',
        'Проверь F, G и H. Белок есть в оболочке. Ферментоподобная активность названа прямо. РНК состоит из нуклеотидных звеньев, поэтому нуклеотиды тоже учтены.',
        'Остаётся J, DNA. Гипотеза начинает с РНК и не рассказывает, как появилась ДНК. Это и есть искомый пробел.',
      ],
      concept: 'Не подменяй вопрос «объяснено ли в этом абзаце?» вопросом «бывает ли такое вообще в биологии?». Ответ ограничен конкретным объяснением в тексте.',
      distractors: 'F, G и H можно сопоставить с конкретными словами абзаца. Они не подходят именно потому, что их наличие объясняется, а вопрос просит то, что НЕ объясняется.',
    },
  },
  {
    prompt: 'If the Cellular Origin Hypothesis is correct, which of the following conclusions can be made about modern T4 DNA viruses, which infect Escherichia coli bacteria, and modern PP7 RNA viruses, which infect Pseudomonas aeruginosa bacteria?',
    options: [
      'T4 and PP7 are more closely related to each other than to bacteria genetically.',
      'T4 and PP7 are only distantly related genetically through a cellular organism.',
      'T4 and PP7 both evolved from prokaryotic organisms.',
      'T4 and PP7 both evolved from eukaryotic organisms.',
    ],
    key: 'B', topic: 'A modern host is not necessarily an ancestral source', refs: ['cellular'],
    en: {
      evidence: 'Cellular Origin allows DNA or RNA sequences to escape from prokaryotic or eukaryotic cells. It then states that viruses evolved independently of their initial hosts and could ultimately infect either cell type.',
      reasoning: 'The account allows separate viral lineages derived from cellular genetic material; it does not require T4 and PP7 to be close relatives of one another. Their modern bacterial hosts do not identify their original cellular sources. B best fits the passage’s cellular-origin framework. The passage supplies no sequence data with which to quantify their genetic distance.',
      alternatives: 'A asserts a closer relationship not established by the text. C and D each force both viruses into one ancestral cell category, even though the hypothesis permits both categories and allows host range to change after the initial escape.',
    },
    ru: {
      ask: 'Что можно заключить о происхождении T4 и PP7 именно в рамках Cellular Origin, если сейчас оба заражают бактерии?',
      data: 'Абзац допускает выход ДНК или РНК как из прокариотических, так и из эукариотических клеток. После выхода вирусы эволюционируют независимо от первого хозяина и могут заражать клетки обоих типов.',
      steps: [
        'Отдели два факта: какой организм вирус заражает сейчас и из какой клетки его предковая последовательность могла выйти когда-то. Это разные вопросы.',
        'По гипотезе современные хозяева могли отличаться от исходных. Поэтому слова «сейчас заражают бактерии» не доказывают, что оба вируса произошли именно от прокариот.',
        'B лучше всего передаёт логику задания: линии вирусов связываются через клеточное происхождение, а не обязательно через близкое родство друг с другом. Текст допускает независимую последующую эволюцию.',
        'Не добавляй лишней точности. В отрывке нет сравнений последовательностей T4 и PP7, поэтому степень их генетической близости в числах здесь не измерена.',
      ],
      concept: 'Современная функция или современный хозяин не определяют автоматически происхождение. Для вывода сохраняй возможности, которые прямо допускает гипотеза.',
      distractors: 'A без данных объявляет вирусы более близкими друг другу, чем бактериям. C — ловушка: оба хозяина бактерии, но это не доказывает исходный тип клетки. D столь же необоснованно ограничивает происхождение эукариотами.',
    },
  },
  {
    prompt: 'The discovery of which of the following living organisms would provide the most support for the Regressive Evolution Hypothesis?',
    options: [
      'Extracellular parasites with DNA resembling a known virus',
      'Extracellular parasites with unique RNA nucleotide sequences',
      'Intracellular parasites with DNA resembling a known virus',
      'Intracellular parasites with unique RNA nucleotide sequences',
    ],
    key: 'H', topic: 'Matching new evidence to a proposed ancestor', refs: ['regressive', 'figure2'],
    en: {
      evidence: 'Regressive Evolution proposes intracellular bacterial parasites as ancestors and highlights viral DNA similar to DNA in cellular organisms.',
      reasoning: 'The strongest offered evidence combines the right way of life with a genetic link: a parasite living inside cells whose DNA resembles that of a known virus. H contains both features. Such a finding would support the proposed connection without proving the entire hypothesis by itself.',
      alternatives: 'F has a DNA resemblance but the wrong extracellular location. G has neither the specified intracellular ancestor nor a matching genetic sequence. J has the intracellular location but offers unique RNA rather than the stated DNA resemblance.',
    },
    ru: {
      ask: 'Какую находку стороннику регрессивной гипотезы было бы особенно полезно предъявить как подтверждение?',
      data: 'Предполагаемый предок — внутриклеточный бактериальный паразит. В конце абзаца подчёркивается сходство ДНК вирусов с ДНК клеточных организмов.',
      steps: [
        'Найди признаки предполагаемого предка. Intracellular означает «внутри клетки». Это совпадает с описанным паразитом, который размножается внутри хозяина.',
        'Теперь нужна связь с вирусом. DNA resembling a known virus означает ДНК, похожую на ДНК уже известного вируса. Это генетическое сходство, а не просто наличие какой-нибудь РНК.',
        'Только H объединяет оба условия: внутриклеточный паразит и похожая на вирусную ДНК. Поэтому он даёт самую сильную поддержку среди вариантов.',
      ],
      concept: 'Most support — «сильнее всего поддерживает». Ищи совпадение сразу с несколькими предсказаниями гипотезы. Поддержка не равна окончательному доказательству.',
      distractors: 'F подходит по ДНК, но extracellular означает «вне клетки». G не даёт ни нужного образа жизни, ни генетического сходства. J подходит по месту жизни, но уникальная РНК не связывает находку с известным вирусом так, как сходная ДНК в H.',
    },
  },
  {
    prompt: 'Supporters of all the theories presented would agree with which of the following conclusions about the origin of viruses?',
    options: [
      'Viral capsids contain a protein structure similar to the cell walls of modern bacteria.',
      'The first viruses did not originate before the first cellular organisms.',
      'RNA viruses are more advanced than DNA viruses.',
      'The first virus contained DNA and was surrounded by an envelope similar to a cell membrane.',
    ],
    key: 'B', topic: 'Shared chronology · precursors versus complete viruses', refs: ['intro', 'coevolution', 'cellular', 'regressive'],
    en: {
      evidence: 'Coevolution’s viral particles replicate by infecting cellular organisms. Cellular Origin requires pre-existing cells from which sequences escape. Regressive Evolution requires cellular parasites as ancestors.',
      reasoning: 'All three accounts require cells by the time the first viruses exist. They differ in how viruses arose, but none places complete viruses before the first cellular organisms. Coevolution’s earlier self-copying RNA is a precursor, not yet the later cell-dependent viral particle. B is the common conclusion.',
      alternatives: 'A’s specific comparison with bacterial cell walls is not made. C introduces a ranking of advancement that the passage does not give. D requires both DNA and an envelope, excluding the RNA route and the fact that an envelope is not always present.',
    },
    ru: {
      ask: 'Какое утверждение о времени появления вирусов подходит всем трём объяснениям?',
      data: 'При Cellular Origin последовательность выходит из уже существующей клетки. При Regressive предок сам является клеточным организмом. При Coevolution сформированная вирусная частица размножается, заражая клетку.',
      steps: [
        'Для каждого варианта происхождения спроси: нужна ли клетка к моменту существования первых вирусов? Во всех трёх описаниях да.',
        'Не перепутай древнюю самокопирующуюся РНК с готовым вирусом. В Coevolution это разные стадии: предшественник из РНК, затем частица в белковой оболочке, связанная с заражением клеток.',
        'Значит, первые вирусы по этим описаниям не возникли раньше первых клеточных организмов. B не требует, чтобы все гипотезы называли один и тот же точный момент; он лишь исключает более ранние готовые вирусы.',
      ],
      concept: 'При сравнении хронологии называй стадию точно. Предшественник вируса и сформированная вирусная частица не обязаны иметь одинаковые свойства.',
      distractors: 'A добавляет неописанное сходство со стенкой бактерии. C придумывает сравнение «более развитый». D требует ДНК и мембранную оболочку у первого вируса, хотя не все версии это утверждают.',
    },
  },
  {
    prompt: 'Which of the following questions is raised by the Coevolution Hypothesis, but is NOT answered in the passage?',
    options: [
      'Why were some RNA sequences packaged into protein structures and others incorporated into cell structures?',
      'Why did obligate intracellular parasites lose their ability to survive outside of cells?',
      'How could two different types of cellular organisms account for the origin of viruses?',
      'How did virions develop the ability to pass through the cell membrane out of the cell?',
    ],
    key: 'F', topic: 'Distinguishing an observed split from its explanation', refs: ['coevolution'],
    en: {
      evidence: 'Coevolution states that some RNA sequences were incorporated into membrane-bound cells while others were packaged inside proteins. It does not say why a given sequence followed one route rather than the other.',
      reasoning: 'F asks for the missing explanation of the split that this hypothesis describes. Reporting that two outcomes occurred does not explain why the outcomes differed. That unanswered question belongs directly to Coevolution.',
      alternatives: 'G concerns the cellular parasites of Regressive Evolution. H concerns prokaryotic and eukaryotic sources in Cellular Origin. J concerns escape through the membrane in Cellular Origin. The question requires a gap raised by Coevolution specifically.',
    },
    ru: {
      ask: 'Какой вопрос возникает именно из Coevolution, но ответа на него текст не даёт?',
      data: 'В абзаце есть развилка: часть РНК попала в мембранные клетки, другая часть оказалась упакована в белки. Причина различия этих путей не названа.',
      steps: [
        'Найди, что утверждает гипотеза. Она описывает два результата для РНК: включение в клетку и белковую упаковку.',
        'Проверь, объясняет ли она, почему одни последовательности пошли первым путём, а другие вторым. Нет: текст сообщает о развилке, но не объясняет её причину.',
        'F спрашивает ровно об этом. Поэтому F — пробел именно в Coevolution. Другие вопросы относятся к механизмам других гипотез.',
      ],
      concept: '«Что произошло» и «почему произошло именно так» — разные уровни объяснения. Наличие описания события ещё не означает наличие объяснения причины.',
      distractors: 'G относится к Regressive Evolution. H и J относятся к Cellular Origin. Даже если какой-то из этих вопросов тоже раскрыт не полностью, он не удовлетворяет условию «возникает из Coevolution».',
    },
  },
  {
    prompt: 'According to the results of Experiments 1 and 2, topsoil deflation will be minimized by:',
    options: [
      'decreased organic cover, increased amount of rainfall, and the use of either Soil X or Y as topsoil.',
      'decreased organic cover, decreased amount of rainfall, and the use of Soil Y as topsoil.',
      'increased organic cover, increased amount of rainfall, and the use of Soil Y as topsoil.',
      'increased organic cover, increased amount of rainfall, and the use of Soil X as topsoil.',
    ],
    key: 'C', topic: 'Combining three observed effects', refs: ['soil', 'cover', 'water', 'deflation'],
    en: {
      evidence: 'Table 1 shows lower deflation with greater cover in both soils. Table 3 shows lower loss after longer sprinkling. At every matching cover or sprinkler time, Soil Y loses less soil than Soil X.',
      reasoning: 'Minimize means choose the conditions associated with the smallest soil loss. The supported directions are more organic cover, more simulated rainfall, and Soil Y, which contains 40% clay. C combines all three. The combination is inferred from the two experiments rather than measured as one new combined treatment.',
      alternatives: 'A and B reduce cover, moving against Table 1. B also reduces rainfall. D gets the first two trends right but selects X, the soil with the greater loss under every matched comparison.',
    },
    ru: {
      ask: 'Какие три условия по данным двух опытов помогут уменьшить выдувание верхнего слоя почвы?',
      data: 'В таблице 1 сравнивается органический покров, в таблицах 2 и 3 — полив и его результаты. Во введении указано: X содержит 5% глины, Y — 40%.',
      steps: [
        'Сначала покров. В X при 0% покрова теряется 105 000 кг/га, а при 75% — 20 000. В Y потеря также падает. Значит, покров надо увеличивать.',
        'Затем полив. По таблице 3 у X потеря падает с 89 250 при 0 часах до 14 000 при 8 часах; у Y — с 53 400 до 10 300. Значит, более длительный полив связан с меньшим выдуванием.',
        'Наконец, тип почвы. При одинаковых условиях во всех столбцах Y теряет меньше, чем X. Собираем три части: больше покрова, больше дождя, почва Y. Это C.',
      ],
      concept: 'В составном ответе проверь каждую часть отдельно. Здесь совмещаем направления эффектов из двух опытов; это не означает, что всю комбинацию условий уже измерили в отдельном поле.',
      distractors: 'A и B уменьшают покров, хотя таблица показывает его защитную связь. B также уменьшает полив. В D верны первые две части, но выбрана более подверженная выдуванию почва X.',
    },
  },
  {
    prompt: 'If Experiment 1 were repeated using a soil containing 10% clay with 0% organic cover, which of the following would be the most likely topsoil deflation amount?',
    options: ['110,200 kg/ha', '99,800 kg/ha', '70,700 kg/ha', '60,200 kg/ha'],
    key: 'G', topic: 'Interpolation · use both range and closeness', refs: ['soil', 'cover'],
    en: {
      evidence: 'At 0% cover in Table 1, the 5%-clay soil X loses 105,000 kg/ha and the 40%-clay soil Y loses 65,000 kg/ha. The requested 10% clay is much closer to 5% than to 40%.',
      reasoning: 'First restrict the prediction to the interval between the measured losses. Both 99,800 and 70,700 lie there, so the interval alone is not enough. Ten percent clay is only one seventh of the way from 5% to 40%. A rough straight-line estimate is 105,000 − 40,000/7 ≈ 99,286 kg/ha, closest to G, 99,800.',
      alternatives: 'F exceeds the 5%-clay loss; J is below the 40%-clay loss. H is inside the interval but lies much nearer the Y result, whereas 10% clay is near X. Linear interpolation is an approximate prediction, not a measured law.',
    },
    ru: {
      ask: 'Какую потерю почвы ожидаем при 10% глины и нулевом органическом покрове?',
      data: 'Во введении X = 5% глины, Y = 40%. В таблице 1 нужен только столбец 0% покрова: X теряет 105 000, Y — 65 000 кг/га.',
      steps: [
        'Не перепутай два процента: 10% относится к составу почвы, а 0% — к площади органического покрова. Поэтому не ищи столбец «10% покрова».',
        'Новая почва по доле глины находится между X и Y. По показанному тренду потеря должна быть между 65 000 и 105 000 кг/га. Но внутри диапазона находятся и G, и H — этого фильтра недостаточно.',
        '10% глины ближе к 5%, чем к 40%: расстояния равны 5 и 30 процентным пунктам. Поэтому ожидаем число ближе к 105 000, а не к 65 000.',
        'Для проверки возьми приближённую линейную оценку. Весь промежуток по глине равен 40 − 5 = 35. Мы прошли 10 − 5 = 5, то есть одну седьмую промежутка. Потеря между концами уменьшается на 40 000; одна седьмая этого уменьшения — около 5 714.',
        '105 000 − 5 714 ≈ 99 286 кг/га. Ближайший вариант — G, 99 800. Это оценка для выбора ответа, а не точное измерение новой почвы.',
      ],
      concept: 'При интерполяции проверяй и границы, и положение внутри промежутка. Значение рядом с одним концом по входной величине обычно оценивают рядом с соответствующим концом результата, если используют плавный примерно линейный тренд.',
      distractors: 'F выше 105 000, J ниже 65 000. H проходит только проверку «между», но слишком близок к результату почвы с 40% глины, хотя нам дана почва лишь с 10%.',
    },
  },
  {
    prompt: 'To further investigate the effect of water content on erosion from topsoil deflation, the scientists should repeat Experiment:',
    options: [
      '1, using a different type of topsoil.',
      '1, using plastic covers over the fields.',
      '2, using no sprinklers.',
      '2, using fields exposed to various amounts of rainfall.',
    ],
    key: 'D', topic: 'Choose a design that varies the factor of interest', refs: ['experiment1', 'experiment2', 'water', 'deflation'],
    en: {
      evidence: 'Experiment 2 varies simulated rainfall, measures the resulting water content, and then records deflation. Experiment 1 varies organic cover instead.',
      reasoning: 'To investigate water content further, extend the experiment that changes water input. Use several rainfall amounts, measure the resulting soil water content, and compare soil loss while keeping other conditions comparable. D supplies that design.',
      alternatives: 'A changes soil type and B changes surface cover without specifically varying water input. C uses only the no-sprinkler condition, which is already included and by itself provides no range of rainfall levels to compare.',
    },
    ru: {
      ask: 'Как продолжить исследование, если нужно лучше проверить влияние воды на выдувание почвы?',
      data: 'В опыте 1 меняют покров из соломы и компоста. В опыте 2 меняют продолжительность полива, затем измеряют влажность и потерю почвы.',
      steps: [
        'Определи проверяемый фактор: количество воды в почве. Для его исследования нужна серия условий, в которой меняется подача воды.',
        'Выбери опыт 2. В нём уже есть связка «полив → измеренная влажность → потеря почвы от ветра». Её можно расширить разными количествами осадков.',
        'D предлагает именно это. При сравнении сохраняют остальные условия сопоставимыми и измеряют обе нужные величины. Один сухой вариант без полива такой серии не заменит.',
      ],
      concept: 'Не путай то, что меняют, с тем, что измеряют. Полив задают как условие, фактическую влажность измеряют, а затем измеряют результат — потерю почвы.',
      distractors: 'A проверяет другой состав почвы. B добавляет другой покров. C оставляет только отсутствие полива, которое и так было в опыте; одного уровня недостаточно для сравнения влияния разных количеств воды.',
    },
  },
  {
    prompt: 'What assumption in experimental design is most important to consider when applying the findings of Experiment 1 to a practical situation?',
    options: [
      'The quantity of topsoil deflation is independent of the percentage of clay present in the soil.',
      'The presence of straw on the soil does not accurately simulate vegetation and organic cover.',
      'Air movement from fans provides an accurate simulation of the wind responsible for topsoil deflation.',
      'Compost is more effective than water content in the prevention of topsoil erosion.',
    ],
    key: 'H', topic: 'Applying a simulated experiment to the real world', refs: ['soil', 'experiment1'],
    en: {
      evidence: 'The passage says large fans were used to simulate wind, while compost and straw were used to approximate vegetation. The question asks about transferring the findings to practical wind erosion.',
      reasoning: 'For the measured effects to be useful outside the experiment, the fan-generated air movement must represent the relevant effects of natural wind reasonably well. H names this necessary link between the simulation and the real situation.',
      alternatives: 'F conflicts with the different losses for soils of different clay content. G states that a cover simulation is inaccurate rather than supplying the assumption supporting transfer. J compares compost with water effectiveness without a controlled comparison establishing that claim.',
    },
    ru: {
      ask: 'Какое допущение нужно проверить, прежде чем переносить результаты опыта 1 на настоящие поля?',
      data: 'Во введении сказано: вместо настоящего ветра применяли большие вентиляторы. Потеря почвы была результатом именно этого искусственного воздушного потока.',
      steps: [
        'Раздели модель и реальность. В модели воздух двигает вентилятор; на поле почву выдувает естественный ветер.',
        'Чтобы применять числа и закономерности модели к полю, нужно, чтобы искусственный поток достаточно хорошо воспроизводил важные для эрозии свойства ветра.',
        'H формулирует это допущение: fan air movement accurately simulates wind. Здесь не доказывают, что вентилятор точно идеален; указывают, на чём держится перенос результата.',
      ],
      concept: 'Допущение при переносе модели — мост между условиями опыта и условиями реальной задачи. Его надо проверять, а не считать автоматически доказанным.',
      distractors: 'F отрицает связь с долей глины вопреки сравнению X и Y. G говорит о неудачной модели покрова; такое утверждение скорее ограничило бы перенос, чем обеспечило его. J не подтверждён отдельным сравнением эффективности компоста и воды.',
    },
  },
  {
    prompt: 'In Experiment 2, the water content in the two soil types was similar after 4 hours of sprinkling, yet the topsoil deflation was significantly different. Which of the following statements provides the best explanation for these findings?',
    options: [
      'Topsoil erosion is independent of the water content found in the soil.',
      'Fields are susceptible to topsoil deflation only when water completely evaporates from the topsoil.',
      'Soil with a lower percentage of clay is more prone to erosion from topsoil deflation than one with a higher percentage of clay.',
      'Water is trapped in the topsoil by wind and this increases the rate of topsoil deflation.',
    ],
    key: 'C', topic: 'Similar water content does not eliminate other influences', refs: ['soil', 'water', 'deflation'],
    en: {
      evidence: 'After 4 hours, Table 2 gives 13% water for X and 14% for Y. Table 3 gives losses of 66,000 and 40,100 kg/ha, respectively. X has 5% clay and Y has 40%.',
      reasoning: 'The water contents are close, but the soils still differ substantially in clay content. The lower-clay soil X loses much more material. C describes the explanation consistent with that comparison: lower clay is associated with greater susceptibility to deflation in these data.',
      alternatives: 'A overgeneralizes from a single comparison and ignores declining loss with longer sprinkling within each soil. B contradicts soil loss at nonzero water contents. D introduces an unsupported mechanism and the wrong overall water trend.',
    },
    ru: {
      ask: 'Почему после 4 часов полива влажность почти одинакова, а потери почвы сильно различаются?',
      data: 'В таблице 2 при 4 часах X имеет 13% воды, Y — 14%. В таблице 3 в том же столбце потери равны 66 000 и 40 100 кг/га. При этом в X 5% глины, в Y 40%.',
      steps: [
        'Совмести один и тот же столбец 4 hours в двух таблицах. Разница влажности всего 1 процентный пункт, а разница потерь 66 000 − 40 100 = 25 900 кг/га.',
        'Найди другую характеристику, которая у почв разная. Это состав: X содержит намного меньше глины, чем Y.',
        'Меньше глины у X сочетается с большей потерей. C говорит именно об этом: почва с меньшей долей глины более подвержена выдуванию. Это лучшее объяснение среди данных вариантов.',
      ],
      concept: 'Похожее значение одного фактора не делает два образца одинаковыми во всём. Учитывай другие различающиеся характеристики и не объявляй воду неважной только по одной паре.',
      distractors: 'A слишком сильный: внутри каждого типа почвы с увеличением полива потери падают. B неверен, потому что потеря происходит даже при 13–14% воды. D описывает неуказанный механизм; таблицы не показывают роста потерь из-за большей влажности.',
    },
  },
  {
    prompt: 'If Experiment 2 were repeated with soil containing 10% clay, which of the following values would be expected for water content and topsoil deflation in a field following 8 hours of water sprinkling?',
    options: [
      'water content of 17%; topsoil deflation of 13,400 kg/ha',
      'water content of 21%; topsoil deflation of 9,700 kg/ha',
      'water content of 15%; topsoil deflation of 10,900 kg/ha',
      'water content of 14%; topsoil deflation of 101,000 kg/ha',
    ],
    key: 'F', topic: 'Checking two predictions against the same conditions', refs: ['soil', 'water', 'deflation'],
    en: {
      evidence: 'At 8 hours, X (5% clay) has 16% water and loses 14,000 kg/ha; Y (40% clay) has 22% water and loses 10,300 kg/ha.',
      reasoning: 'Under an interpolation of the observed trends, the 10%-clay prediction should lie between both pairs of endpoints, near X. F alone places both water content and loss in their corresponding intervals. A rough linear estimate gives 16 + 6/7 ≈ 16.86% water and 14,000 − 3,700/7 ≈ 13,471 kg/ha, close to F.',
      alternatives: 'G’s loss of 9,700 is below the Y endpoint. H’s water content of 15% is below the X endpoint. J puts water below both endpoints and loss far above both. Each choice must fit both measured quantities, not just one.',
    },
    ru: {
      ask: 'Какую пару «влажность + потеря почвы» ожидаем для 10% глины после 8 часов полива?',
      data: 'Возьми столбец 8 hours в обеих таблицах. Для X с 5% глины: вода 16%, потеря 14 000 кг/га. Для Y с 40% глины: вода 22%, потеря 10 300 кг/га.',
      steps: [
        'Оставь время одинаковым: только 8 часов. Если смешать влажность при 4 часах с потерей при 8, получится пара из разных условий.',
        'Доля глины 10% находится между 5% и 40% и близка к 5%. Продолжая тренды между почвами, ожидаем влажность между 16% и 22%, а потерю между 10 300 и 14 000 кг/га, с результатами ближе к X.',
        'Проверь обе части F: 17% лежит между 16% и 22%; 13 400 лежит между 10 300 и 14 000. Обе величины близки к X. Другие ответы нарушают хотя бы одну границу.',
        'Дополнительная проверка: 10% глины — одна седьмая пути от 5% к 40%. Приближённая оценка даёт воду 16 + 6/7 ≈ 16,86% и потерю 14 000 − 3 700/7 ≈ 13 471 кг/га. Это близко к F.',
      ],
      concept: 'В ответе с двумя величинами верными должны быть обе. Для №13 уже проверки двух диапазонов достаточно, а интерполяция дополнительно подтверждает близость к F.',
      distractors: 'G: 9 700 ниже минимальной измеренной потери 10 300. H: 15% воды ниже нижней границы 16%. J: 14% воды слишком мало, а 101 000 кг/га намного выше обеих потерь при 8 часах.',
    },
  },
];

export const scienceQuestions = questions.map(({ options, refs, ...question }, index) => ({
  ...question,
  id: index + 1,
  choices: options.map((text, optionIndex) => ({ label: (index % 2 === 0 ? 'FGHJ' : 'ABCD')[optionIndex], text })),
  sources: refs.map(ref => sources[ref]),
}));
