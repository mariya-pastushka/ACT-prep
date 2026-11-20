function question(id, key, prompt, options, topic, evidenceLines, evidence, explanation) {
  const labels = id % 2 ? 'ABCD' : 'FGHJ';
  return {
    id, key, prompt, topic, evidenceLines, evidence, explanation, section: 'reading',
    choices: options.map((text, index) => ({ label: labels[index], text })),
  };
}

export const readingQuestions = [
  question(1, 'C', 'With regard to the possibility of returning to the planet Venus, information presented in the passage makes it clear that the author is:', [
    'cheerful and optimistic.',
    'sarcastic and contentious.',
    'doubtful and pragmatic.',
    'uncertain and withdrawn.',
  ], 'Inferring the author’s attitude from a specific concern', [[10, 16]],
  '“in the present climate of fiscal austerity, there is no telling when humans will next get a good look at the earth’s nearest planetary neighbor.”', [
    'The author ties uncertainty about another close look at Venus to fiscal austerity, a practical limit on spending. “There is no telling when” conveys doubt about the timing, and the funding concern grounds the assessment in practical conditions. C fits both parts.',
    'The question limits the attitude to the possibility of returning. Read the lines about future exploration and find a separate clue for each adjective in the answer.',
    'A has no support in the uncertainty about funding. B would require mocking or argumentative language. D captures uncertainty, but “withdrawn” describes an emotional retreat the author does not express.',
  ]),
  question(2, 'H', 'Which of the following statements most accurately summarizes how the passage characterizes the state of scientific knowledge about Venus before the Pioneer mission?', [
    'The scientific community was hesitant to return to Venus after an earlier mission had ended in disaster.',
    'Scientists saw Earth and Venus as near polar opposites in atmospheric conditions.',
    'The common belief that Earth and Venus were “twins” had been eroding under the weight of scientific evidence.',
    'Scientists knew little about the planet Venus because they were more interested in other planets.',
  ], 'Tracking what was known before a mission', [[1, 2], [28, 33]],
  '“Well before the arrival of Pioneer Venus, astronomers had learned that Venus does not live up to its image as Earth’s near-twin.”', [
    'The passage says astronomers had already learned that Venus did not match its near-twin image. It then gives high temperature and pressure as evidence. H summarizes an appealing comparison being weakened by observations.',
    'Mark the time phrase “Well before.” It tells you these discoveries preceded Pioneer Venus. The opening tells you what the twin image was based on, while the later paragraph explains why it was being questioned.',
    'F turns the later end of the orbiter into an earlier disaster that discouraged scientists. G states a sweeping opposite characterization instead of describing how evidence challenged the twin idea. J invents a reason for limited interest that the passage never gives.',
  ]),
  question(3, 'D', 'Based on the passage, discoveries made in which two areas of study have caused scientists to re-evaluate their theories about Earth and Venus?', [
    'Water content and bedrock composition',
    'Sulfuric gases and photosynthesis',
    'Carbon dioxide and climate change',
    'Atmosphere and surface temperature',
  ], 'Matching two findings to the revised comparison', [[6, 9], [28, 39], [44, 47]],
  '“Venus’s surface temperature of 450 degrees Celsius is hotter than the melting point of lead.” / “Venus’s much thicker atmosphere, in contrast, is composed almost entirely of carbon dioxide.”', [
    'The text contrasts the planets through Venus’s extreme surface temperature and its very different atmosphere. These are the two areas in D. Both undermine the idea that similar size and solar distance make the planets close equivalents.',
    'For a paired answer, check each half. Find one detail about surface temperature and another about atmospheric conditions or contents, then connect them to the passage’s discussion of differences.',
    'A adds a study of bedrock composition that is not the paired basis of this comparison. B combines Venusian gases with the explanation of Earth’s oxygen. C picks one atmospheric gas and a broad environmental topic, leaving out the explicit temperature evidence.',
  ]),
  question(4, 'G', 'The main point of the second paragraph (lines 17–27) is to:', [
    'account for the failure of the Magellan mission and to show the superiority of the Pioneer mission.',
    'suggest that information from both the Magellan and Pioneer missions can bring the scientific community to a deeper understanding of Venus.',
    'show that the Magellan had sent back information regarding the physical characteristics while the Pioneer had not.',
    'hypothesize that the findings of the Pioneer mission will help scientists to approach problems more intelligently.',
  ], 'Summarizing complementary research', [[17, 27]],
  '“The information gleaned by Pioneer Venus complements the well-publicized radar images recently sent back by the Magellan spacecraft.” / “These findings illustrate how seemingly small differences in physical conditions have sent Venus and the Earth hurtling down very different evolutionary paths.”', [
    'The opening says the two missions’ information complements each other. The paragraph explains their different subjects and then describes what the findings reveal together. G captures this combined contribution to understanding Venus.',
    'Use the first sentence to identify the relationship between the examples. “Complements” means that the information from one adds to the information from the other.',
    'F invents a Magellan failure and a claim of superiority. H overlooks Pioneer’s measurements of atmospheric physical conditions. J picks up the final benefit of the knowledge, but leaves out the main comparison and combination of the two missions.',
  ]),
  question(5, 'C', 'The passage indicates that if humans were to attempt to live on the planet Venus, survival would not be possible because:', [
    'of the mistaken belief that Venus and Earth are “twin” planets.',
    'carbon dioxide is locked away in bicarbonate rocks, not in gaseous form.',
    'the atmospheric pressure, heat, and air are not suitable for human life.',
    'all of the water on Venus is condensed onto the surface.',
  ], 'Combining stated environmental conditions', [[30, 39], [44, 45], [52, 55]],
  '“Venus’s surface temperature of 450 degrees Celsius” / “Atmospheric pressure at the ground is some 93 times that at sea level on Earth.” / “the air on Venus would be utterly unbreathable to humans.”', [
    'The passage gives three conditions that make Venus inhospitable to humans. The surface is extremely hot, the pressure is much higher than Earth’s, and the air is unbreathable. C collects those conditions.',
    'Check all three nouns in the answer against the text. Temperature is in lines 31–32, pressure in lines 32–33, and breathing conditions in lines 34–39.',
    'A substitutes a mistaken belief for the physical conditions. B moves the description of Earth’s stored carbon dioxide to Venus and changes “carbonate” to “bicarbonate.” D turns an “If” scenario about condensing the water into an actual condition.',
  ]),
  question(6, 'J', 'According to the passage, some evidence gained before the Pioneer Venus mission suggesting that Earth and Venus are not near-twins stated that:', [
    'Venus produces no lead on or underneath its surface.',
    'Earth was found to be much farther from the sun than was previously thought.',
    'the atmosphere of Venus contains 78 percent nitrogen and 21 percent oxygen.',
    'the surface temperature of Venus is 450 degrees Celsius and thus unlivable for humans.',
  ], 'Locating an earlier finding and keeping planet labels straight', [[28, 36]],
  '“Well before the arrival of Pioneer Venus, astronomers had learned that Venus does not live up to its image as Earth’s near-twin.” / “Venus’s surface temperature of 450 degrees Celsius is hotter than the melting point of lead.”', [
    'The paragraph explicitly introduces knowledge from before the mission and names the 450°C surface temperature. J gives that evidence and its consequence for human habitability.',
    'Read past the time cue to the example it introduces. Then check the subject of any measurement in the options, especially whether it describes Earth or Venus.',
    'F mistakes a comparison with lead’s melting point for a claim about whether Venus has lead. G invents a revised Earth–Sun distance. H transfers the percentages for Earth’s atmosphere in lines 35–36 to Venus.',
  ]),
  question(7, 'C', 'As it is used in line 56, the word harbors most nearly means:', [
    'sails.',
    'hides.',
    'holds.',
    'soaks.',
  ], 'Choosing a meaning by substitution', [[56, 60]],
  '“Venus harbors little if any molecular oxygen in its lower atmosphere.”', [
    'The sentence describes how much oxygen Venus contains in its lower atmosphere. Replacing “harbors” with “holds” preserves that meaning, so C is the closest choice.',
    'Substitute the answer into the whole sentence. “Venus holds little if any molecular oxygen” means that the lower atmosphere contains very little oxygen, perhaps none.',
    'A uses an association with ships but makes no sense for the oxygen content. B suggests concealment, which the sentence does not describe. D suggests absorbing liquid and does not fit the statement about gas content.',
  ]),
  question(8, 'H', 'According to the passage, “primordial” describes planets that:', [
    'are oxygen-poor due to a lack of activity by living things.',
    'are not hospitable to humans because they have thick atmospheres and high surface temperatures.',
    'have preserved many of the characteristics present when the planets were formed.',
    'have been struck by large bodies which have altered the planets’ atmospheres.',
  ], 'Using examples to define a scientific term', [[64, 73]],
  '“gases—especially neon and isotopes of argon—that have been present since the time the planets were born.” / “Venus has held on to a far greater fraction of its earliest atmosphere.”', [
    'After calling Venus more primordial, the author explains that it retains more of its earliest atmosphere and gases present since formation. H gives that idea of preserving early characteristics.',
    'For an unfamiliar term, read the explanation immediately after it. “Since the time the planets were born” and “earliest atmosphere” both point back to original conditions.',
    'F and G borrow real Venusian conditions from other paragraphs without defining primordial here. J describes an event proposed for Earth that removed some early atmosphere, the opposite of the retention the author is emphasizing.',
  ]),
  question(9, 'A', 'It can reasonably be inferred that the “activity of living things” described in line 59 directly refers to organisms on Earth that:', [
    'produce oxygen by their own natural processes and influence the contents of Earth’s atmosphere.',
    'remove sulfur gases from the atmosphere during heavy rainfall.',
    'lock away carbon dioxide in carbonate rocks and maintain a reserve of the gas.',
    'could easily live in oppressive atmospheres similar to the atmosphere of Venus.',
  ], 'Tracing a reference to its immediate explanation', [[56, 63]],
  '“The abundant oxygen in the earth’s atmosphere is a by-product of photosynthesis by plants; if not for the activity of living things, Earth’s atmosphere also would be oxygen poor.”', [
    'The previous clause names photosynthesis by plants as the source of abundant atmospheric oxygen. “The activity of living things” refers directly to that oxygen-producing process. A keeps the process and its atmospheric effect together.',
    'Read backward from the phrase being asked about. Here the relevant action is named immediately before the semicolon, and the following clause explains what would happen without it.',
    'B shifts to sulfur gases, which the passage says rain removes. C shifts to stored carbon dioxide from an earlier paragraph. D claims those organisms could easily live under Venus-like conditions, which these lines do not suggest.',
  ]),
  question(10, 'J', 'According to the passage, the Pioneer Venus mission to Venus involved investigating details relating to the planet’s:', [
    'surface geology and interior structure.',
    'atmosphere as it has been changed by the influence of photosynthesis.',
    'similarities to the planet Earth.',
    'atmospheric contents.',
  ], 'Matching a mission with what it measured', [[17, 22], [48, 50]],
  '“Pioneer Venus, in comparison, gathered data on the composition and dynamics of the planet’s atmosphere” / “devices that measured the exact composition of the atmosphere of Venus.”', [
    'The second paragraph says Pioneer studied atmospheric composition and dynamics. Lines 48–50 give instruments that measured the composition. J restates composition as atmospheric contents.',
    'Pair the mission’s name with its action and subject. “Pioneer Venus gathered data” leads to atmosphere, and the probe’s instruments provide a second check.',
    'F gives Magellan’s subject. G transfers the explanation of Earth’s photosynthetic oxygen to Venus. H names a broad comparison between planets rather than the specific properties the mission measured.',
  ]),
];
