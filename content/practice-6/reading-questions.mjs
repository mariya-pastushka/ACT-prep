function question(id, key, prompt, options, topic, evidenceLines, evidence, explanation) {
  const labels = id % 2 ? 'ABCD' : 'FGHJ';
  return {
    id, key, prompt, topic, evidenceLines, evidence, explanation, section: 'reading',
    choices: options.map((text, index) => ({ label: labels[index], text })),
  };
}

export const readingQuestions = [
  question(1, 'D', 'The main idea of the passage is that:', [
    'the CCC forced unemployed young men to work in the national forests, national parks, and on other federal public lands for no payment or bonus.',
    'it was only after President Roosevelt created the CCC that veterans had suitable employment during the Great Depression.',
    'research into the history of the New Deal shows that the idea for the CCC came from Congress.',
    'among the programs of the New Deal, the CCC employed young men to build public works projects on public lands in return for modest wages, food, clothing, and some education.',
  ], 'Finding the main idea across paragraphs', [[1, 3], [8, 11], [19, 25], [54, 67], [68, 77]],
  '“work in the national forests, national parks, and on other federal public lands.” / “The men would be paid $30 a month” / “the program taught more than a hundred thousand to read and write”', [
    'The opening describes a New Deal program that employed young men on public land, the fourth paragraph gives examples of their work, and the ending explains what the men gained. D combines the work with the wages, food, clothing, and learning the program provided.',
    'For the main idea of the whole passage, see whether the choice covers both the opening and the ending. Here one tells what the men did, and the other tells what they received in return.',
    'A claims the men were forced and unpaid, but the passage calls the group a volunteer “army” and gives a monthly wage. B takes one example about veterans and makes a broad claim about their employment. C gives Congress credit for an idea the opening attributes to Roosevelt.',
  ]),
  question(2, 'G', 'The main idea of the third paragraph (lines 37–49) is that:', [
    'President Hoover had dispatched the army to meet with disgruntled veterans, but President Roosevelt sent his wife, Eleanor, to meet with the Bonus Army.',
    'when they realized President Roosevelt would not pay the bonus, many veterans abandoned the Bonus Army and accepted his invitation to join the CCC.',
    'President Roosevelt supplied shelter and food to the veterans before paying the bonus the veterans demanded.',
    'many of the veterans were above the age requirement of the CCC.',
  ], 'Summarizing a paragraph through its outcome', [[37, 43], [44, 49]],
  '“invited the members of this new Bonus Army to join his new agency.” / “When it became clear that no bonus would be forthcoming, about twenty-five hundred of the men took Roosevelt up on his offer and joined the CCC.”', [
    'The veterans came to seek a bonus. Roosevelt opposed paying it and offered them places in the CCC. When the bonus was no longer expected, about 2,500 accepted the offer. G captures the event the paragraph builds toward.',
    'To summarize a paragraph about events, connect what the people wanted, what they were offered, and what they eventually did. Individual parts of that sequence can appear as distractors.',
    'F focuses on the veteran’s remark about Eleanor and Hoover. H claims Roosevelt ultimately paid the bonus, which the ending rules out in this episode. J focuses on age and claims a number or proportion the paragraph does not give.',
  ]),
  question(3, 'D', 'As it is used in line 7 to describe President Roosevelt, the term tree farmer most nearly means that Roosevelt:', [
    'had supported his family by growing trees before he entered politics.',
    'believed in an agrarian economy over urban industrialization.',
    'continued his successful business selling trees while in office.',
    'had a great interest in trees and knew a good deal about them.',
  ], 'Interpreting a phrase in context', [[3, 8]],
  '“practiced the art of silviculture on his Hyde Park estate with such enthusiasm” / “he was fond of listing his occupation”', [
    'The lines before “tree farmer” explain the label. Roosevelt cared about trees and enthusiastically practiced silviculture, the growing and management of trees. That hands-on interest is what D describes.',
    'Read the sentence around the term. “With such enthusiasm that” gives the reason he called himself a tree farmer. Use that clue to interpret the label in this passage.',
    'A and C turn the label into an unsupported claim about earning or selling. B treats the care of trees as a statement about national economic policy. The passage gives no such policy belief here.',
  ]),
  question(4, 'G', 'According to the passage, which of the following was a project the CCC performed for the National Park Service?', [
    'Building fire towers',
    'Building campground facilities',
    'Installing telephone lines',
    'Conducting wildlife surveys',
  ], 'Matching a project to the right agency', [[54, 56], [61, 65]],
  '“For the National Park Service, they built roads, campgrounds, bridges, and recreation and administration facilities”', [
    'Find the name “National Park Service” in line 61. The list that follows includes campgrounds. That directly supports G.',
    'The paragraph changes the organization or location as it changes lists. Start at the named organization and read through the list attached to that name.',
    'F and H come from the earlier list of national forest work. J belongs to the Biological Survey, named after the National Park Service list.',
  ]),
  question(5, 'A', 'According to the passage, which of the following statements is true about the CCC?', [
    'The agency provided enrollees with academic instruction.',
    'The agency provided enrollees with urban job training.',
    'The agency accepted only men with six teeth.',
    'The agency offered courses in nutrition and self-esteem.',
  ], 'Recognizing a paraphrase of a stated fact', [[29, 34], [68, 77]],
  '“the program taught more than a hundred thousand to read and write” / “passed out twenty-five thousand eighth-grade diplomas and five thousand high-school diplomas”', [
    'The last paragraph says the CCC taught reading and writing and handed out diplomas. Those activities support the description “academic instruction” in A.',
    'Unpack general language in an option into examples you might find in the text. Here literacy teaching and diplomas are the specific evidence for a broader description of schooling.',
    'B turns the men’s urban background into a training location or subject. C changes a minimum requirement to an exact limit with “only.” D turns benefits mentioned in the ending into named courses.',
  ]),
  question(6, 'G', 'Information in the fourth paragraph (lines 50–67) makes it clear that the CCC:', [
    'was voluntary and therefore did not pay members anything.',
    'ran for more years and employed more men than was originally intended.',
    'employed 4.1 million men.',
    'battled fires in West Virginia, Vermont, and New York.',
  ], 'Comparing an original plan with later results', [[16, 18], [24, 28], [50, 54], [57, 58], [65, 67]],
  '“it was to last two years.” / “calling for an enrollment of 250,000” / “CCC to 350,000 and would raise it to 500,000 in 1935.” / “the CCC had put more than three million young “soil soldiers” to work.”', [
    'The original plan was for two years and 250,000 initial enrollees. The fourth paragraph shows that the planned size was later raised to 350,000 and then 500,000. The program ran until 1942 and employed more than three million over its lifetime. Both the duration and scale grew, as G says.',
    'Keep each number with its unit and time period. The initial enrollment target and the total number employed over the program’s lifetime describe different things. The increases to 350,000 and 500,000 show the program itself was expanded.',
    'F overlooks the $30 monthly wage. H uses a number measured in man-hours as a number of people. J takes the locations of flood control projects and attaches them to firefighting.',
  ]),
  question(7, 'C', 'The passage most strongly suggests that before the 1930s, the national forests:', [
    'received no federal support or aid for projects to clear diseased trees.',
    'included land reserved for wildlife refuges.',
    'had never undergone a major reforestation campaign.',
    'experienced more floods than forest fires.',
  ], 'Inferring what came before a stated first', [[54, 55], [58, 61], [63, 67]],
  '“planted more than 1.3 billion young trees in the first major reforestation campaign in the country’s history.”', [
    'The passage calls the tree planting the first major reforestation campaign in the country’s history and describes it among the CCC’s national forest work. C expresses what “first major” implies about the earlier period.',
    'Keep the scope of the word “major.” The claim is that no campaign of that scale had taken place before. Individual or smaller planting projects are outside that claim.',
    'A asserts a complete absence of federal support, which the passage does not establish. B borrows later information about wildlife refuges without showing that they were part of the pre-1930s forests. D invents a frequency comparison between floods and fires.',
  ]),
  question(8, 'F', 'According to the passage, when did the CCC change its name?', [
    'After President Roosevelt received authorization from Congress.',
    'After Congress protested that CCRYRM was too difficult to say.',
    'In the same year the size expanded to 500,000 men.',
    'After the Bonus Army disbanded.',
  ], 'Locating an event in a chronology', [[11, 18], [26, 28], [42, 49], [50, 52]],
  '“When he went to Congress for authorization of the program, he called the new agency the Civilian Corps Reforestation Youth Rehabilitation Movement” / “it was soon changed to the Civilian Conservation Corps”', [
    'F is the keyed and closest choice. The passage links the original name to the request for congressional authorization and says the name was changed soon afterward. It places the change during the agency’s initial setup, though it does not say whether the formal authorization came before the change.',
    'Find the sentence with the event and identify the stage it describes. “When he went to Congress” and “soon changed” locate the change near the original proposal. The passage gives no exact date for the change.',
    'G invents a protest by Congress. H uses the 1935 expansion, although the passage already calls the agency the CCC in 1933. D links the change to the veterans, who are described later as joining the CCC.',
  ]),
  question(9, 'C', 'The passage states that the same year the CCC was authorized enrollees had to be:', [
    'over 78 inches in height.',
    'in school.',
    'between the ages of seventeen and twenty-seven.',
    'between the ages of seventeen and twenty-four.',
  ], 'Distinguishing initial rules from later changes', [[16, 18], [26, 33]],
  '“The CCC officially began on April 5, 1933” / “between the ages of seventeen and twenty-seven (later, twenty-four), out of school, out of work”', [
    'The passage first gives the 1933 launch and then lists the original requirements. The age range was seventeen to twenty-seven. “Later” introduces a change to the upper limit, so C gives the range for the time asked about.',
    'Underline the question’s time cue. In the passage, check any words or parentheses that change the date or number. “Later” separates the revised upper limit from the initial rule.',
    'A reverses “under 78 inches.” B reverses “out of school.” D uses the upper limit from the later rule.',
  ]),
  question(10, 'G', 'According to the passage, CCC programs in national parks and forests were:', [
    'conducted far from where the members were fed and housed.',
    'under the control of the Departments of Agriculture and the Interior.',
    'supervised by the Labor Department.',
    'minimum-wage jobs.',
  ], 'Matching an institution to its responsibility', [[18, 25]],
  '“Departments of Agriculture and Interior, which would design and supervise projects in regional and national forests, national parks, and other public lands.”', [
    'The first paragraph lists the duties of different departments. Agriculture and Interior would design and supervise the projects in forests and parks. G restates this role as “under the control of.”',
    'As you read a list of agencies, pair each name with its verb. Labor screens and selects, War houses and feeds, and Agriculture and Interior design and supervise.',
    'F adds a distance the passage does not state. H assigns project supervision to the department that selected enrollees. J calls the wages a legal minimum, while the passage gives only the dollar amount.',
  ]),
];
