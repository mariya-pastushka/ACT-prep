export const bloodLecture=[
 {title:'Genotype, blood type, and hidden alleles',titleRu:'Генотип, группа крови и скрытый аллель',questions:[8,10,11],
 en:'The genotype names the pair of alleles; the blood type is the expressed outcome. In this passage’s model, AA and AO both give A, BB and BO both give B, AB gives AB, and OO gives O. A and B each dominate O, but are codominant with each other. A hidden O allele can still be inherited.',
 ru:'Генотип — пара аллелей, например IᴬIᴼ. Фенотип в этом задании — проявившаяся группа крови, здесь A. Аллель — вариант гена. В тексте каждый родитель передаёт по одному такому варианту. Для краткости в разборах AA, AO и BO обозначают пары соответствующих аллелей I. A может быть AA или AO, B — BB или BO. При AO аллель O не исчезает: он просто не определяет видимую группу. AB показывает кодоминирование A и B. Верхний индекс O — буква O, не цифра ноль.',
 exercise:'Does type-B blood prove that the genotype is BB?',exerciseRu:'Доказывает ли видимая группа B, что генотип обязательно BB?',answer:'No. It can be BB or BO. The ancestry or offspring may distinguish them.',answerRu:'Нет. Возможны BB и BO. Чтобы различить их, нужны дополнительные сведения о родителях или потомстве.'},
 {title:'Use a Punnett square to check every outcome',titleRu:'Как построить сетку Пеннета',questions:[9,10,11],
 en:'Write the two alleles from one parent along the top and those from the other along the side. Each cell combines its column allele with its row allele. For AO × BO, the four cells are AB, BO, AO, and OO, each 25% in the model. AA × BB has AB in every cell.',
 ru:'Сетка Пеннета показывает все сочетания. Сверху выпиши два возможных аллеля одного родителя, слева — другого. В каждой клетке соедини один верхний и один левый аллель. Для AO × BO получатся AB, AO, BO и OO, по четверти. Для AA × BB все четыре клетки одинаковы: AB. Повторяющиеся клетки не удаляй — каждая учитывается как отдельный исход. Поэтому AB × AB не гарантирует только AB: крайние сочетания дают также AA и BB.',
 exercise:'What offspring can AO × BB produce?',exerciseRu:'Какие потомки возможны у AO × BB?',answer:'AB and BO, 50% each. The BB parent always contributes B.',answerRu:'AB и BO, по 50%. Родитель BB всегда передаёт B, второй передаёт A или O.'},
 {title:'Ratios, overlapping categories, and expected counts',titleRu:'Отношения, пересечение категорий и проценты',questions:[7,12],
 en:'For “at least one A,” include both A and AB. For “at least one B,” include both B and AB. AB belongs in both totals. In Analysis 3 the ratio is 50:50 = 1:1. To predict a count, multiply the total by the given fraction: 300 × 25/100 = 75.',
 ru:'Категории «есть A» и «есть B» пересекаются: группа AB подходит обеим. Это не ошибка двойного счёта, потому что сравниваются два разных признака, а не части одной разбивки. В анализе 3 каждая категория даёт 50%, отношение 50:50 сокращается до 1:1. Для количества животных нужен другой расчёт: 25% от 300 — это 300 × 25/100 = 75. Процент и число животных нельзя просто подменить друг другом. Полученные 75 — ожидаемое количество при данном распределении.',
 exercise:'If 400 offspring follow the Analysis 3 distribution, how many are expected to be AB?',exerciseRu:'Если у 400 потомков такое же распределение, как в анализе 3, сколько ожидается AB?',answer:'100: one quarter of 400.',answerRu:'100. Группа AB составляет 25%, значит 400 ÷ 4 = 100.'},
];
export const bloodVocabulary=[
 ['Allele','A form of a gene.','Аллель — вариант гена. Здесь рассматриваются Iᴬ, Iᴮ и Iᴼ.'],
 ['Genotype / phenotype','An allele combination / its expressed characteristic.','Генотип / фенотип. Например, AO — сочетание аллелей, A — проявившаяся группа.'],
 ['Dominant / recessive','An expressed allele in the specified pair / an allele whose effect can be masked.','Доминантный / рецессивный. В AO проявляется A, но O остаётся в генотипе.'],
 ['Codominance','Expression of both alleles in the pair.','Кодоминирование. В данном задании A и B проявляются вместе в AB.'],
 ['Offspring / mate','A descendant / a breeding partner.','Потомок / партнёр по скрещиванию. Не перепутай потомство анализа 1 с его исходными родителями.'],
 ['Homozygous / heterozygous','Having two identical / two different alleles.','Гомозиготный / гетерозиготный. AA содержит одинаковые аллели, AO — разные.'],
 ['Punnett square','A table of possible parental allele combinations.','Сетка Пеннета. Сочетает по одному аллелю каждого родителя; повторяющиеся клетки тоже учитываются.'],
 ['At least one','One or more.','Хотя бы один. AB подходит условию «есть A» и условию «есть B» одновременно.'],
];
