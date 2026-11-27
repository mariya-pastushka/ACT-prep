// Each row follows the printed source. On phones the same text reflows.
const printedParagraphs = [
 `For some time, coffee has been the world’s most popular
beverage, with an estimated 400 billion cups consumed each
year. The coffeehouse in society, however, has a rich history
that goes beyond supplying you with your daily cup of double-
shot, half-decaf, skinny latte. Understanding how coffeehouses
developed as social sites can permit a greater appreciation for
the diverse ways that social communication occurs.`,
 `The social significance of the coffeehouse was not evident
at first. The first documented coffee shop, Kiva Han, was
opened in 1475 in the Byzantine Empire’s city of Constanti-
nople (today known as Istanbul). Although one could purchase
coffee at this establishment, the coffeehouse as a place for
social gatherings did not emerge until 1554, when Constan-
tinople saw two coffeehouses open almost simultaneously.
Subsequently, men in Middle Eastern countries considered
the coffeehouse an ideal place to listen to music or poetry,
play chess, read books, or hold conversations—with friends
and strangers alike—on subjects ranging from politics to
gossip. Even today, the coffeehouse is firmly entrenched in
many Arab nations as a gathering place for cultural dialogue
and dissemination of ideas.`,
 `As with goods such as tea and tobacco, coffee came to
Europe through trade routes and colonial expeditions, and
the coffeehouse soon followed. In 1645, Europe’s first cof-
feehouse opened in Venice, which through its proximity to
the Middle East had become one of the primary gateways
for goods imported from the Ottoman Empire. In 1652, an
Armenian servant named Pasqua Rosee launched the first
London coffeehouse with the help of his employer, a trader
who imported the coffee and established the business. Unlike
many public spaces, coffeehouses were open to men of vari-
ous social strata; consequently, these establishments became
equated with egalitarianism and reform. Although not every-
one lauded these social traits—Charles II famously deplored
the establishments as hotbeds of scandal-mongering and anti-
royalist political scheming—by 1739, the phenomenon had
become so popular that London contained no fewer than 551
coffeehouses. Coffeehouses were sometimes called “penny
universities,” because admission and a cup cost a penny and
because the atmosphere of learning was so pronounced. By
the end of the eighteenth century, the clientele who populated
these meeting places shaped the character of each coffeehouse.
Certain coffeehouses became affiliated with political leanings,
such as Tory or Whig, or with specific occupations, such as
merchant or lawyer.`,
 `The coffeehouse’s cultural character had taken shape cen-
turies before such establishments appeared in the United States,
but they almost immediately began to take on a singularly
American character. In fact, one of the coffeehouse’s principal
influences was on architecture. Soldiers returning from World
War II sought to replicate the coffeehouse experiences they
had known in Europe; at the same time, the automobile was
beginning to have a stronger influence on how Americans
used public spaces. The result was the drive-in coffee shop,
which not only satisfied the increasingly on-the-go customer
but also provided an outlet for architects who wanted to in-
corporate the postwar feelings of newness and hope that so
many Americans embraced. These coffee shops inaugurated
a new style of architecture, named “googie architecture” for
one prominent coffee haven, Googie’s. Found primarily in
the urban areas of Southern California and in the glittering
new playground of Las Vegas, googie architecture eschewed
many of the elegant trappings of the traditional coffeehouse,
such as mahogany booths and brass railings. Instead, this style
employed many of the “futuristic” artificial surfaces of the
era: Naugahyde seat covers, Formica tabletops, and linoleum
floors. In addition, googie architecture replaced the sedately
darkened rooms of the European coffeehouse with brightly lit,
almost garishly colored décor. In all, the American version of
the coffeehouse concerned itself less with supplying a forum
for communicative, social relationships than with offering a
visual emblem of a nation’s desire to shake off the past and
plunge into the future.`,
 `Even today, when coffeehouses in the United States are so
ubiquitous that one may well expect them to soon outnumber
residential homes, these institutions operate in more arenas
than mere commerce. The now-familiar sight of the business-
person poring over a laptop computer during ordinary office
hours signals the degree to which coffeehouses reflect and
reinforce contemporary attitudes toward the world of work.
For many, the coffeehouse offers an escape from the cubicle,
from the unsatisfying, regimented life of the Big Company;
that is, the coffeehouse can represent an office worker’s quest
for individual freedom, while the wireless service in many
coffee shops prevents a complete abdication of one’s responsi-
bilities. Critics may see the “wi-fi revolution” as another
worrying trend toward the invasion of community space—and
of personal time and space—by corporate concerns. But one
thing is clear: The coffeehouse has proven to be remarkably
flexible in adapting to its cultural environs.`,
];

const lexicalHyphens = new Set(['double-', 'anti-']);
let number = 0;
const lineGroups = printedParagraphs.map(paragraph => {
 const rows = paragraph.split('\n');
 return rows.map((printedText, index) => {
  const splitWord = printedText.endsWith('-');
  const keepHyphen = lexicalHyphens.has(printedText.split(' ').at(-1));
  return {
   number: ++number,
   printedText,
   text: splitWord && !keepHyphen ? printedText.slice(0, -1) : printedText,
   joinAfter: splitWord || index === rows.length - 1 ? '' : ' ',
  };
 });
});

export const readingPassage = {
 title: 'From Kiva Han to Caribou Coffee',
 attribution: 'SOCIAL SCIENCE: This passage is adapted from the article “From Kiva Han to Caribou Coffee” by Alan C. Thorwald in the collection A Social History of Joe (© 2008 by Grantalventi Books).',
 source: 'The printed line numbers follow the supplied passage. On phones, the text reflows and the evidence links retain those line numbers.',
 sourceLines: lineGroups.flat(),
 lineRanges: lineGroups.map(lines => ({from: lines[0].number, to: lines.at(-1).number})),
 paragraphs: lineGroups.map(lines => lines.map(line => line.text + line.joinAfter).join('')),
};
