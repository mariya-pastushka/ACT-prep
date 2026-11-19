function question(id, key, prompt, options, topic, evidenceLines, evidence, explanation) {
  const labels = id % 2 ? 'ABCD' : 'FGHJ';
  return {
    id, key, prompt, topic, evidenceLines, evidence, explanation, section: 'reading',
    choices: options.map((text, index) => ({ label: labels[index], text })),
  };
}

export const readingQuestions = [
  question(1, 'C', 'Which of the following statements best expresses the main idea of the passage?', [
    'Many Native American tribes created totem poles with meaningful symbols, but these poles were less important than the canoes carved before the mid-18th century.',
    'Although the Tlingit village was deserted, the Seattle businessmen who took the totem pole were not right to take it without permission.',
    'The history of totem pole carving dates back to only the mid-18th-century, but these poles have played an important role in Native American culture since that time.',
    'The ban issued by the Canadian and United States governments against potlatches was lifted in the 1950s, but interest in totem-pole carving had diminished by that time.',
  ], 'Finding the main idea across the passage', [[1, 9], [15, 17], [39, 48], [60, 66]],
  '“The history of these fascinating works is surprisingly brief” / “Poles serve the important purpose of recording the lore of a clan” / “They speak of history, mythology, social structure, and spirituality.”', [
    'The opening presents the author’s account of when pole carving began. The rest explains the poles’ uses, stories, symbolic images, and continuing place in the communities. C combines that history with their cultural importance.',
    'For a whole-passage main idea, check the answer against both the opening and the later explanations. Here the explanation of what poles communicate takes up several paragraphs and belongs in the summary.',
    'A adds a ranking that puts canoes above poles, which the text never makes. B focuses on one episode and adds a judgment the author does not state. D covers the ban, one event within the broader history.',
  ]),
  question(2, 'G', 'Which of the following questions is NOT answered in the passage?', [
    'In terms of geographical region, which were the first groups to carve totem poles?',
    'What is the tallest totem pole in North America?',
    'What is the predominant use of the small totem poles carved today?',
    'What prevented Native American tribes from carving totem poles before the 18th century?',
  ], 'Checking whether a question is answered', [[1, 9], [35, 38], [64, 66]],
  '“in what is now British Columbia and Alaska, who first carved totem poles.” / “they lacked the iron tools necessary to fell a massive tree in one piece and carve its entire length.” / “predominantly for the tourist trade”', [
    'The text identifies an early carving region, a lack of iron tools, and the present tourist use of small poles. It gives no North American height record, so G is the unanswered question.',
    'To test whether a question is answered, write down the fact you would need. A height record requires a comparison with other poles. The Seattle example gives a height of 50 feet without saying it is the tallest.',
    'F is answered in lines 1–3. J is answered in lines 7–9. H is answered in lines 64–66. The 50-foot detail in lines 35–36 does not establish the record asked for in G.',
  ]),
  question(3, 'C', 'The passage suggests that one of the main purposes of totem poles is the way in which they:', [
    'demonstrate the artistic skill of the carvers.',
    'function as landmarks in major North American cities.',
    'document the history and mythology of various clans.',
    'complement the festivities of the potlatch.',
  ], 'Identifying a stated cultural purpose', [[15, 17], [39, 48], [60, 63]],
  '“Poles serve the important purpose of recording the lore of a clan, much as a book would.” / “And so the legends were preserved from one generation to the next.”', [
    'The author directly calls recording a clan’s lore an important purpose. The figures tell stories, and the legends pass from one generation to the next. C restates this as documenting history and mythology.',
    'Find the sentence that names the purpose, then check how the examples develop it. Raven, Frog, and the performances at the raising help explain how the stories are preserved.',
    'A concerns the carvers’ skill but misses the stated storytelling function. B generalizes from a single city monument. D focuses on the ceremony, while the text describes the stories as lasting across generations.',
  ]),
  question(4, 'G', 'The main function of the sixth paragraph (lines 49–59) is to:', [
    'identify the origins of the stories behind every image on a totem pole.',
    'describe and explain some of the images that might appear on a totem pole.',
    'contrast the images on the totem poles of the Northwest natives with those of British Columbia and Alaska.',
    'explain the role of the Raven in Native American mythology.',
  ], 'Explaining a paragraph’s function', [[49, 59]],
  '“the carver would portray it in all its forms.” / “Eyes are frequently used to suggest acuteness or skill.” / “human figures in unexpected places, like an ear or nose, might mean that the animal has great powers.”', [
    'The paragraph describes possible images and explains their meanings. Mixed bird and human features show different forms, an eye in an ear can indicate hearing, and human figures can suggest powers. G covers these examples.',
    'For a paragraph-function question, choose a verb that describes what the writing does. Here it repeatedly describes an image and interprets what that image could communicate.',
    'F promises origins for every story, but the paragraph gives examples of meanings. H proposes a regional comparison the paragraph does not make. J covers Raven alone and leaves out the other examples.',
  ]),
  question(5, 'D', 'All of the following are used in the passage as illustrations of the role totem poles play in Native American culture EXCEPT the:', [
    'function of the top figure on the pole.',
    'descriptions of the Raven and Frog as characters on the pole.',
    'reference to the popularity of totem poles in the tourist industries of many tribes.',
    'placement of the Tlingit totem pole in Seattle’s Pioneer Square.',
  ], 'Distinguishing a mentioned fact from the role asked about', [[31, 38], [39, 48], [64, 66]],
  '“They erected it in Seattle” / “it remains in Pioneer Square today.” / “The top figure on the pole identifies the owner’s clan” / “predominantly for the tourist trade”', [
    'D describes where Seattle businessmen put a pole they took and where the replacement remains. That episode presents its role as a city monument. The other choices illustrate clan identity, storytelling, or a continuing tourist trade within the carving communities.',
    'The question asks how a detail functions as evidence of a particular cultural role. A fact can appear in the passage while serving a different point. Check both the detail and the relationship the question names.',
    'A shows how the pole identifies a clan. B shows the stories its characters communicate. C shows an economic use of the continuing craft. D is the example whose described role is in the Seattle city setting.',
  ]),
  question(6, 'J', 'The second paragraph (lines 10–20) establishes all of the following about the totem poles carved by the coastal tribes of the far north EXCEPT that they were:', [
    'initially used as the entryways of houses.',
    'fashioned from tall, straight trees.',
    'used to identify the owners of the poles.',
    'produced only by clans with family crests.',
  ], 'Recognizing an unsupported restriction', [[10, 20]],
  '“the trees that grew so tall and straight” / “all would enter the house through the pole.” / “the totem pole functioned as a family crest” / “identified the owner.”', [
    'The paragraph says a pole could function as a family crest. It does not say that only clans already possessing crests could produce one. J turns the pole’s function into an exclusive condition on who could carve it.',
    'Pay attention to “only.” It requires evidence that a group is excluded. A description of what an object does cannot by itself establish who was allowed to make it.',
    'F is supported by the door cut through the pole in lines 13–15. G is supported by the tall, straight trees in lines 10–12. H is supported by the owner identification in lines 16–17.',
  ]),
  question(7, 'B', 'One of the main points of the fifth paragraph (lines 39–48) is that the various characters on a totem pole are meant to represent:', [
    'the owner of the totem pole.',
    'the lore of the owner’s clan.',
    'Raven, the trickster, fooling the Creator.',
    'Frog wooing a human woman.',
  ], 'Connecting examples to the general idea', [[39, 48]],
  '“The top figure on the pole identifies the owner’s clan, and succeeding characters (read from top to bottom) tell their stories.”', [
    'The opening names the general purpose as recording a clan’s lore. It then explains that the figures tell stories and gives Raven and Frog as examples. B names the category those examples belong to.',
    'Start with the general statement before the examples. Ask what Raven’s and Frog’s stories show together. Both are parts of the owner’s clan traditions.',
    'A shifts from clan stories to the individual owner. C and D each choose a single example. Neither covers the various characters and stories the question asks about.',
  ]),
  question(8, 'J', 'According to the passage, which of the following places is home to the Tlingit?', [
    'Seattle',
    'Western Canada',
    'Pioneer Square',
    'Alaska',
  ], 'Matching a people with its stated location', [[31, 38]],
  '“The Tlingit, on the southeastern coast of Alaska”', [
    'The paragraph directly places the Tlingit on the southeastern coast of Alaska. Alaska is J.',
    'When a sentence lists several groups and places, attach each location to the group beside it. The Alaska phrase follows “The Tlingit,” while western Canada belongs to the Haidas and Tsimshian.',
    'F and H are the city and square where the pole is later displayed. G belongs to the other groups named in the same sentence.',
  ]),
  question(9, 'A', 'The author most likely includes the information in lines 60–63 to suggest that:', [
    'totem poles are notable for reasons beyond physical beauty.',
    'totem poles have replaced books for Native American tribes.',
    'Native American tribes have no spoken or written language.',
    'the descendants of the original carvers of totem poles carve copies of older poles.',
  ], 'Interpreting an analogy and its purpose', [[60, 63]],
  '“Learning to read totem poles is like learning to read a language. They speak of history, mythology, social structure, and spirituality.”', [
    'The comparison to reading a language draws attention to the meanings encoded in the images. History, mythology, social structure, and spirituality explain why the poles matter beyond their appearance. A captures this point.',
    'An analogy highlights a shared feature. Here “reading” is about interpreting information and stories. Keep the conclusion tied to the feature the author explains.',
    'B turns a comparison with books into a claim that poles replaced them. C invents the absence of other forms of language. D changes continued carving by descendants into a specific practice of copying older poles, which these lines do not state.',
  ]),
  question(10, 'H', 'Which of the following words best describes the attitude of the employers referred to in the third paragraph (lines 21–30) in reaction to potlatches?', [
    'Patient',
    'Accepting',
    'Irritated',
    'Civilized',
  ], 'Inferring an attitude from the right speaker’s words', [[24, 28]],
  '“Employers, too, complained that their Indian workers were unreliable when a pole was being carved or a potlatch planned.”', [
    'The employers complained about workers being unreliable during carving or potlatch preparations. That complaint supports irritation, which is H.',
    'Find the subject and the verb that reveals the reaction. Here “Employers … complained” identifies both who is reacting and the negative nature of the reaction.',
    'F and G suggest calm tolerance or acceptance, which do not fit the complaint. J echoes the earlier word “civilize,” but that word belongs to the description of outsiders’ aims and does not describe the employers’ emotional reaction.',
  ]),
];
