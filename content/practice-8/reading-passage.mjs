// Keep the numbered rows aligned with the source screenshots.
const paragraphs = [
  [
    'Venus is sometimes referred to as the Earth’s “twin” because',
    'it resembles the Earth in size and in distance from the sun. Over',
    'its 14 years of operation, the National Aeronautics and Space',
    'Administration’s Pioneer Venus mission revealed that the rela-',
    'tion between the two worlds is more analogous to Dr. Jekyll',
    'and Mr. Hyde. The surface of Venus bakes under a dense carbon',
    'dioxide atmosphere, the overlying clouds consist of noxious',
    'sulfuric acid, and the planet’s lack of a magnetic field exposes',
    'the upper atmosphere to the continuous hail of charged particles',
    'from the sun. Our opportunity to explore the hostile Venusian',
    'environment came to an abrupt close in October 1992, when',
    'the Pioneer Venus Orbiter burned up like a meteor in the thick',
    'Venusian atmosphere. The craft’s demise marked the end of an',
    'era for the U.S. space program; in the present climate of fiscal',
    'austerity, there is no telling when humans will next get a good',
    'look at the earth’s nearest planetary neighbor.',
  ],
  [
    'The information gleaned by Pioneer Venus complements the',
    'well-publicized radar images recently sent back by the Magellan',
    'spacecraft. Magellan concentrated on studies of Venus’s surface',
    'geology and interior structure. Pioneer Venus, in comparison,',
    'gathered data on the composition and dynamics of the planet’s',
    'atmosphere and interplanetary surroundings. These findings',
    'illustrate how seemingly small differences in physical conditions',
    'have sent Venus and the Earth hurtling down very different evo-',
    'lutionary paths. Such knowledge will help scientists intelligently',
    'evaluate how human activity may be changing the environment',
    'on the Earth.',
  ],
  [
    'Well before the arrival of Pioneer Venus, astronomers had',
    'learned that Venus does not live up to its image as Earth’s near-',
    'twin. Whereas Earth maintains conditions ideal for liquid water',
    'and life, Venus’s surface temperature of 450 degrees Celsius is',
    'hotter than the melting point of lead. Atmospheric pressure at',
    'the ground is some 93 times that at sea level on Earth.',
  ],
  [
    'Even aside from the heat and the pressure, the air on Venus',
    'would be utterly unbreathable to humans. The Earth’s atmosphere',
    'is about 78 percent nitrogen and 21 percent oxygen. Venus’s much',
    'thicker atmosphere, in contrast, is composed almost entirely of',
    'carbon dioxide. Nitrogen, the next most abundant gas makes',
    'up only about 3.5 percent of the gas molecules. Both planets',
    'possess about the same amount of gaseous nitrogen, but Venus’s',
    'atmosphere contains some 30,000 times as much carbon dioxide',
    'as does Earth’s. In fact, Earth does hold a quantity of carbon',
    'dioxide comparable to that in the Venusian atmosphere. On',
    'Earth, however, the carbon dioxide is locked away in carbonate',
    'rocks, not in gaseous form in the air. The crucial distinction is',
    'responsible for many of the drastic environmental differences',
    'that exist between the two planets.',
  ],
  [
    'The large Pioneer Venus atmospheric probe carried a mass',
    'spectrometer and gas chromatograph, devices that measured',
    'the exact composition of the atmosphere of Venus. One of the',
    'most stunning aspects of the Venusian atmosphere is that it is',
    'extremely dry. It possesses only a hundred thousandth as much',
    'water as Earth has in its oceans. If all of Venus’s water could',
    'somehow be condensed onto the surface, it would make a global',
    'puddle only a couple of centimeters deep.',
  ],
  [
    'Unlike the Earth, Venus harbors little if any molecular',
    'oxygen in its lower atmosphere. The abundant oxygen in the',
    'earth’s atmosphere is a by-product of photosynthesis by plants;',
    'if not for the activity of living things, Earth’s atmosphere also',
    'would be oxygen poor. The atmosphere of Venus is far richer',
    'than the earth’s in sulfur-containing gases, primarily sulfur',
    'dioxide. On Earth, rain efficiently removes similar sulfur gases',
    'from the atmosphere.',
  ],
  [
    'Pioneer Venus revealed other ways in which Venus is more',
    'primordial than Earth. Venus’s atmosphere contains higher',
    'concentrations of inert, or noble, gases—especially neon and',
    'isotopes of argon—that have been present since the time the',
    'planets were born. This difference suggests that Venus has held',
    'on to a far greater fraction of its earliest atmosphere. Much of',
    'Earth’s primitive atmosphere may have been stripped away and',
    'lost into space when our world was struck by a Mars-size body.',
    'Many planetary scientists now think the moon formed out of',
    'the cloud of debris that resulted from such a gigantic impact.',
  ],
];

let number = 0;
const lineGroups = paragraphs.map(lines => lines.map((raw, index) => {
  const lineNumber = ++number;
  const endsInHyphen = raw.endsWith('-');
  // The hyphen in “near-twin” on line 29 is part of the compound word.
  const splitWord = endsInHyphen && lineNumber !== 29;
  return {
    number: lineNumber,
    printedText: raw,
    text: splitWord ? raw.slice(0, -1) : raw,
    joinAfter: endsInHyphen || index === lines.length - 1 ? '' : ' ',
  };
}));

export const readingPassage = {
  title: 'The Pioneer Mission to Venus',
  attribution: 'NATURAL SCIENCE: This passage is adapted from the article “The Pioneer Mission to Venus” by Janet G. Luhmann, James B. Pollack, and Lawrence Colin (©1994, Scientific American).',
  source: 'The passage, original line breaks, and answer key follow the supplied screenshots.',
  sourceLines: lineGroups.flat(),
  lineRanges: lineGroups.map(lines => ({ from: lines[0].number, to: lines.at(-1).number })),
  paragraphs: lineGroups.map(lines => lines.map(line => line.text + line.joinAfter).join('')),
};
