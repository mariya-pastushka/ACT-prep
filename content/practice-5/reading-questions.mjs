function question(id, key, prompt, options, topic, evidenceLines, evidence, explanation) {
  const labels = id % 2 ? 'ABCD' : 'FGHJ';
  return {
    id, key, prompt, topic, evidenceLines, evidence, explanation, section: 'reading',
    choices: options.map((text, index) => ({ label: labels[index], text })),
  };
}

export const readingQuestions = [
  question(1, 'C', 'Which of the following statements does NOT describe one of the narrator’s reactions to her Christmas gift?', [
    'She is devastated by the realization that the other children at school will not be impressed by this gift.',
    'She wishes that her parents had bought her a real Barbie Dream House instead of a handmade one.',
    'She despises the house for its old-fashioned appearance and lack of modern conveniences, such as an elevator.',
    'She appreciates all the effort her father went to in order to give her this gift and tries to convey a sense of gratitude.',
  ], 'NOT questions and strength of wording', [[68, 73], [76, 83], [40, 44]],
  '“If Barbie’s Dream House was sleek and modern, this was awkward and old-fashioned.” / “I tried to be as grateful as I could” / “this crude approximation instead of my heart’s desire.”', [
    'The question asks for the reaction the passage does NOT support. The narrator calls the handmade house old-fashioned and feels disappointed. C goes further by saying she despises it and naming the lack of an elevator as a reason. The elevator belongs to her description of the toy she wanted. The text never names its absence as a cause of her reaction.',
    '“Old-fashioned” appears in the passage. Check whether the text also supports the strength of “despises” and the stated reason for that feeling.',
    'The girls at school would be unimpressed (A, lines 76–78). She wanted the real Dream House (B, lines 81–83). She recognized her father’s effort and tried to show gratitude (D, lines 78–80). That leaves C.',
  ]),
  question(2, 'F', 'According to the passage, when the narrator smells coffee on Christmas morning, it means that:', [
    'her parents are ready to proceed with the Christmas festivities.',
    'she and her sister should hurry to the kitchen for breakfast.',
    'her father has finally finished preparing her Christmas gift.',
    'it is time to burst into the living room in front of her parents.',
  ], 'Identifying what a signal means', [[9, 11], [44, 46], [49, 53]],
  '“that signified that our parents were not only awake but caffeinated and ready for gift-giving.”', [
    'The narrator explains the signal in the first paragraph. Coffee means her parents have had time to wake up and are ready to give presents. F restates that meaning as readiness for the Christmas festivities.',
    'Use “signified” as a pointer. Read the words that follow it to learn what the coffee means. Later, “It was time” refers back to the same signal.',
    'G adds breakfast and H adds a just-finished gift. J describes what the excited girl does on this occasion. Lines 49–51 say her parents expected her to wait for them before going into the living room.',
  ]),
  question(3, 'B', 'The narrator would most likely agree with which of the following statements about owning a Barbie Dream House?', [
    'She would become a princess able to bestow largesse on other children.',
    'She would, at least for the moment, be content with her life.',
    'It would allow her to appreciate her parents’ hard work and sacrifices.',
    'She would then be able to pass it on to her own children someday.',
  ], 'Tracking who thinks what', [[13, 20], [83, 88]],
  '“I knew that if I could only have a Dream House of my own, my life would be complete.”', [
    'The narrator imagines that getting the Dream House would make her feel completely satisfied. B expresses that feeling with “be content with her life” and limits it to the moment.',
    'Track the pronouns around the claim. “She was like a princess” describes the girl at school who already owned the toy. “My life would be complete” tells you what the narrator herself imagines.',
    'A transfers an image about the classmate to the narrator. C belongs to the later reflection on her father’s work. D draws on the ending, where she plans to tell her children about the handmade house. The passage gives no such plan for the Barbie toy.',
  ]),
  question(4, 'G', 'What is the main point of the first paragraph?', [
    'The smell of coffee still reminds the narrator of the Christmases of her childhood.',
    'The narrator’s family had a specific ritual that was followed every Christmas morning.',
    'Most years, the narrator and her sister would hurl themselves into their gifts without warning.',
    'The narrator had once desperately wanted a pink and silver bicycle.',
  ], 'Finding a paragraph’s main idea', [[1, 4], [5, 11]],
  '“It was always the same, every Christmas.” / “Once the scent of coffee made it to our rooms, we would hurl ourselves downstairs”', [
    'The paragraph begins by saying the same thing happened every Christmas. The girls wake early, talk about gifts while they wait, and go downstairs when they smell coffee. G covers that whole sequence.',
    'Try giving the paragraph a short title. “The family’s Christmas morning routine” fits its beginning, middle, and end. “The pink bicycle” fits only a few lines.',
    'F treats a childhood signal as a present-day reminder, which the text never states. H misses the warning signal and changes rushing downstairs into rushing into the gifts. J names one example of a present she wanted.',
  ]),
  question(5, 'A', 'Which of the following statements most accurately expresses the narrator’s feelings when she first sees the gift that her father made for her?', [
    'She is disappointed that it is not the exact gift that she had hoped to receive.',
    'She gratefully acknowledges the long hours her father must have put into the gift.',
    'She admires the traditional architecture of the house and its attractive wallpaper.',
    'She looks forward to showing her new house off to all of the other girls at school.',
  ], 'Identifying the dominant reaction at a specific moment', [[64, 73], [76, 83], [43, 44]],
  '“But the size was all wrong, as was the shape.” / “my disappointment was only too evident.” / “this crude approximation instead of my heart’s desire.”', [
    'Her hope briefly returns when she sees the blanket. Then the size and shape look wrong, and the dollhouse under the blanket is different from the one she imagined. She later calls her disappointment obvious, which supports A.',
    'Use “when she first sees” to find the scene. Then use the final paragraph to confirm the strongest feeling in that scene. She can recognize someone’s effort and still show disappointment at the same time.',
    'B emphasizes her attempt at gratitude, which she says her disappointment made difficult to convey. C assigns admiration to details she describes as old-fashioned or familiar. D describes her earlier fantasy about the Barbie house. After the reveal she thinks the other girls will be unimpressed.',
  ]),
  question(6, 'H', 'The narrator’s father can most accurately be characterized as:', [
    'ignorant and cruel.',
    'thoughtful but lazy.',
    'concerned and hard-working.',
    'caring but inaccessible.',
  ], 'Inferring character traits from actions', [[25, 30], [64, 73], [78, 81]],
  '“we’ll figure something out.” / “Still smiling anxiously, my father pulled the blanket away” / “my father had probably spent countless hours working on the house”', [
    'He tells the mother they will find a solution. He makes the gift and looks anxious as he reveals it. The narrator also believes he spent hours making it. His worry about the reveal supports “concerned,” and building the house supports “hard-working.” Choose H.',
    'A two-trait choice needs two checks. A facial expression or action can suggest one trait, and another detail can show the second. Find support for both adjectives.',
    'F assigns cruelty and ignorance where the passage shows deliberate effort. G gets the thoughtfulness but calls him lazy. J gets the care but provides no supported reason to call him inaccessible. He speaks with his wife and personally shows his daughter the gift.',
  ]),
  question(7, 'A', 'It can logically be inferred from the passage that the reason the narrator was not given the official Barbie Dream House for Christmas is because:', [
    'it is too costly a gift for her parents to buy that year.',
    'she had already been given the pink and silver bicycle that she wanted.',
    'her father had always wanted to make his daughter a dollhouse.',
    'her parents do not wish for their daughter to be happy.',
  ], 'Inferring a cause from several clues', [[19, 22], [25, 34], [67, 73], [81, 85]],
  '“It was a bigger gift than I usually requested” / “what are we going to do about Christmas this year?” / “I just can’t help but worry.”', [
    'The Barbie house is a bigger request than usual, the parents are worried about Christmas that year, and the father supplies a handmade alternative. Together these clues make cost the most likely explanation among the choices. The passage gives no exact price or budget.',
    'For an inference question, join small clues and keep the conclusion within their reach. An unusual request, worry about the same occasion, and a homemade substitute can point to a constraint the characters never state directly.',
    'B turns a bicycle wish into evidence of a purchase. C invents a longstanding wish on the father’s part. D conflicts with his effort to make a present and his anxious reaction when he shows it.',
  ]),
  question(8, 'J', 'According to the passage, the reason the narrator hopes to someday tell the children the story of her dollhouse is that she:', [
    'wants them to be able to impress the other children at school as she once did.',
    'knows that, by that time, it is likely to be worth a great deal of money.',
    'remembers how much she appreciated the gift when it was given to her.',
    'hopes that they will be better able to understand the meaning behind the gift than she was.',
  ], 'Reading a stated motive in an ending', [[78, 85], [85, 88]],
  '“when I have children of my own, I will tell them the whole story, and I hope they will understand better than I did.”', [
    'She wants her future children to understand the gift better than she did as a child. Her wish to be more appreciative of her father’s efforts explains what she wants them to understand. Choose J.',
    'Find the words that name the goal. Here “I hope” introduces the reason for telling the story. Then read backward to see what “understand” refers to.',
    'F repeats her childhood wish to impress other girls, which she says did not come true. The passage gives no predicted resale value for G. H overstates her childhood appreciation and misses her adult wish that she had shown more.',
  ]),
  question(9, 'D', 'A reasonable conclusion that the narrator draws regarding her dollhouse is that:', [
    'it is far more beautiful than was the plastic Barbie Dream House that she had initially desired.',
    'without an elevator, it is less valuable than it would otherwise have been.',
    'it was given to her with the intention that she keep it to pass on to her own children someday.',
    'constructing it must have been time-consuming and labor-intensive.',
  ], 'Paraphrasing a supported conclusion', [[67, 73], [78, 81], [83, 88]],
  '“my father had probably spent countless hours working on the house”', [
    '“Countless hours” means the narrator thinks the work took a long time. Her description of what looks like handmade furniture and the fact that her father built the house suggest considerable work. D restates her conclusion about time and effort.',
    'Translate each part of the answer into simpler words. “Time-consuming” means it took a long time. “Labor-intensive” means it took a lot of work. Now match each to a detail in the passage.',
    'A ranks the houses by beauty, which she never does. B gives the elevator a role in setting the house’s value, which she never discusses. C treats her own future plan to tell the story as her parents’ original intention.',
  ]),
  question(10, 'J', 'The main point of the last paragraph is that:', [
    'the narrator would have been much happier if she had been given a Barbie Dream House.',
    'it is not fair to give one child a long-desired gift and not give the same to another child.',
    'the disappointments suffered in childhood affect people well into adulthood.',
    'the passage of time can alter the way events from the past are viewed.',
  ], 'Comparing a childhood reaction with adult reflection', [[74, 83], [83, 88]],
  '“my disappointment was only too evident.” / “As an adult, I wish I could go back in time” / “I hope they will understand better than I did.”', [
    'The last paragraph revisits a single Christmas from two points in time. The child saw a disappointing substitute. The adult still has the house and wishes she could help her younger self appreciate her father’s effort. J accounts for the change in how she views the event.',
    'Follow the time markers “Looking back” and “As an adult.” Check what changes each time the point of view moves. The gift stays the same and her understanding of it changes.',
    'F captures her childhood desire alone. G invents a lesson about fairness between children. H picks up the fact that she still remembers being disappointed, but misses the change in perspective that the final sentences develop.',
  ]),
];
