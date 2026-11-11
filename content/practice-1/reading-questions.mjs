const make=(id,prompt,choices,key,topic,lines,evidence,explanation)=>({id,section:'reading',prompt,choices:choices.map((text,i)=>({label:(id%2?'ABCD':'FGHJ')[i],text})),key,topic,evidenceLines:lines,evidence,explanation});
export const readingQuestions=[
 make(1,'It can reasonably be inferred from the passage that Monique believed the song she chose for her audition:',[
  'would be the most inspiring Rodgers & Hammerstein number she could choose.',
  "was the most sophisticated song in Billie Holiday's repertoire.",
  "would likely be more recognizable to Monique's parents than to her friends.",
  'would allow Monique to more effectively showcase her enthusiasm.'
 ],'C','Inference without exaggeration',[[12,20]],
 '“Billie Holiday’s version of it was familiar mostly to adults, and even then, mostly to adults of the previous generation.” / “it required a reserved performance”',[
  'The narrator says that this version was known mainly to adults, especially an older generation. That makes it reasonable to infer that Monique expected her parents to recognize it more readily than her friends. C is a likely comparison, not a claim that the passage directly reports what her parents knew.',
  'For an inference, start with a stated fact and take one small, supported step. Here: familiar mainly to older adults → probably more familiar to the parents’ generation than to school friends. Keep words such as likely; do not turn a probability into a certainty.',
  'A names the Rodgers & Hammerstein material associated with other auditions. B changes “quite sophisticated” into “the most sophisticated” in an entire repertoire, which the passage never ranks. D reverses the contrast: Monique wanted a reserved performance showing maturity, while others showed enthusiasm.'
 ]),
 make(2,'The passage initially portrays Monique and her friends as:',[
  'concerned and nervous.','confused and surprised.','friendly and inclusive.','aloof and disparaging.'
 ],'J','Characterization through behavior',[[8,11],[39,48]],
 '“Monique felt like a monarch” / “her royal court of friends and admirers” / “belittling the other students’ auditions.”',[
  'Monique imagines herself above the other students, with her friends as a royal court. They sit far enough from the teacher to make belittling comments without being caught. This supports J: aloof means keeping a superior distance; disparaging means putting others down.',
  'Characterization comes from actions and descriptions, not just a label. Feeling like royalty and treating other performers as entertainment show superiority. Compare: a group that invites a newcomer to sit with them acts inclusively; a group that privately mocks others does the opposite.',
  'F does not match the group’s initial confidence and superiority. G fits their later surprise at Esperanza, not their initial attitude. H conflicts with their mockery. The passage’s references to nervous newcomers should not be transferred to Monique’s group.'
 ]),
 make(3,'According to the narrator, what did Esperanza do prior to singing "The Star Spangled Banner"?',[
  'Looked only at Mrs. Dominguez','Walked confidently up to the stage','Watched the other auditions carefully','Finished her geometry homework'
 ],'A','An explicit action, not an added result',[[59,63]],
 '“paying little attention to the other auditions, working on geometry homework until her name was called” / “even then looked only at Mrs. Dominguez.”',[
  'The text directly states that, once she reached the stage, Esperanza looked only at Mrs. Dominguez. That happens before the singing begins. A reports exactly the action described.',
  'Check the precise verb. Working on homework does not mean finishing it. Likewise, shuffling toward the stage and keeping her eyes down is different from walking confidently. An answer must preserve what happened, not add a completion or a new attitude.',
  'B adds confidence that the description does not show. C contradicts “paying little attention.” D changes working on homework into finishing it; the narrator never says that she completed the assignment.'
 ]),
 make(4,'The main purpose of the statement in line 29 is to:',[
  "inform the reader that students' fears of going first were largely a thing of the past.",
  "present reasons for why this year's audition was the strangest yet.",
  "suggest that Monique's imagination no longer involved the same imagery.",
  "offer a contrast created by Monique's choice of audition slot."
 ],'J','The function of a contrast sentence',[[21,28],[29,30]],
 '“Normally, the first audition slot was dreaded by most.” / “But not this year. Monique had decided to make a show of her own self-confidence by volunteering to go first.”',[
  '“But not this year” turns from the usual fear of the first audition to Monique’s deliberate decision to volunteer for it. The statement introduces a specific contrast in her choice of slot, so J fits.',
  'To explain a sentence’s purpose, read before and after it. Before: students usually dread going first. After: Monique chooses to go first to display confidence. The short sentence connects the two situations by showing how this year differs.',
  'F wrongly claims that students in general have overcome their fear; the next lines say Monique hoped to increase her competitors’ fear. G invents a ranking of the strangest auditions. H focuses on the earlier imagined scene rather than the actual change in who volunteers.'
 ]),
 make(5,'It can be reasonably inferred from the passage that Esperanza Solito:',[
  'was teased more than anyone else at her school.',
  'was not sitting near Monique and her friends during the auditions.',
  "had her audition immediately after Monique's audition.",
  'had previously explained her stage fright to Mrs. Dominguez.'
 ],'B','Combining two location details',[[39,43],[59,63]],
 'Monique: “sitting in the back of the auditorium with her royal court of friends and admirers.” / Esperanza: “sitting alone in the front row”',[
  'Monique and her friends sit at the back of the auditorium. Esperanza sits alone in the front row. Combining those two stated locations supports B: she was not sitting near their group.',
  'An inference may require evidence from different paragraphs. Put the facts together without adding a new event: back of the room versus front row → separate locations. The text need not contain the exact sentence “they were not sitting near each other.”',
  'A adds “more than anyone else,” a comparison the narrator does not establish. C conflicts with the timing: Monique performed about an hour earlier. D invents a previous conversation with Mrs. Dominguez; the teacher’s concern does not prove that such a conversation occurred.'
 ]),
 make(6,'According to the passage, Monique figured that volunteering to perform "God Bless the Child" as the first audition of the day would:',[
  'bolster her confidence in her performance.',
  'make the other auditioners feel they could not compete with her.',
  'guarantee her a part in the play.',
  'impress and charm Mrs. Dominguez.'
 ],'G','A character’s stated motive',[[29,38]],
 '“would probably instill even more fear in her competition because they would realize that Monique had something they clearly lacked.”',[
  'Monique expected the fearless act of going first to intimidate the other auditioners. She wanted them to see her as possessing something they lacked. G describes that intended effect on her competitors.',
  'Distinguish displaying confidence from trying to gain confidence. She volunteers to “make a show” of confidence and expects a reaction from other students. A motive question asks what outcome she intended, not every fact mentioned in the same paragraph.',
  'F shifts the goal to improving her own confidence. H treats her belief that she was a shoo-in as a guarantee caused by volunteering. J is unsupported as the stated motive, and the teacher actually seemed neither surprised nor charmed.'
 ]),
 make(7,'According to the passage, when Esperanza Solito got to the climax of "The Star Spangled Banner," she:',[
  'raised her voice to emphasize the lines.','demonstrated her patriotism.','had a sudden bout of nerves.','could be heard throughout the auditorium.'
 ],'D','Sound, effect, and whose feeling it is',[[78,84]],
 '“Esperanza’s voice filled the room with a calm resonance that forced one’s heart to lift within one’s chest as though some reluctant patriotism was determined to find its way out.”',[
  'The phrase “her voice filled the room” supports D: her singing could be heard throughout the auditorium. The description emphasizes a full, calm sound rather than a sudden change of volume.',
  'Separate the singer’s action from the listeners’ response. The lifting heart and suggested patriotism describe an effect on a listener; they do not directly establish Esperanza’s own patriotic feeling. A statement about a voice reaching the room is also not the same as a statement that the singer raised it.',
  'A adds a deliberate increase in volume that is not stated. B transfers the imagined feeling in listeners to Esperanza. C invents sudden nerves, whereas the passage describes calm resonance and control.'
 ]),
 make(8,"The passage states that Mrs. Dominguez suspected Esperanza's audition could be:",[
  'vulnerable to ridicule.','one of the most awkward.','a special treat.','neither surprising nor charming.'
 ],'F','Matching a thought to the correct person',[[44,48],[64,66]],
 'Mrs. Dominguez: “sensing the potential for this audition to devolve into a painful target of ridicule.” / Monique and her entourage: “prepared themselves for a special treat.”',[
  'The narrator directly connects Mrs. Dominguez with concern that the audition could become a target of ridicule. “Vulnerable to ridicule” expresses that same risk of being mocked, so F is correct.',
  'Label the owner of each thought. Mrs. Dominguez anticipates a risk; Monique’s group anticipates a “special treat” in a mocking sense. A phrase can be copied from the passage and still be wrong if the answer assigns it to the wrong person.',
  'G borrows the description of Esperanza as awkward and adds “one of the most” about an audition. H gives Monique’s group’s expectation to Mrs. Dominguez. J borrows the teacher’s earlier reaction to Monique’s choice to go first, not her concern about Esperanza.'
 ]),
 make(9,"Which of the following details is used in the passage to describe how Monique and her friends responded to hearing Esperanza's audition?",[
  'Their decision to sit comfortably behind Mrs. Dominguez',
  "Their preconceived notions about Esperanza's voice",
  'Their fading facial expressions of mockery',
  'Their fondness for patriotic songs'
 ],'C','A response shown by a visible detail',[[67,77]],
 '“However, the expectant smiles of mockery were quickly vanishing from the faces of all who listened.”',[
  'The vanishing smiles are a visible reaction while people listen to Esperanza. Monique and her friends are among those listeners. Their expected amusement gives way as the performance undermines their mockery, which matches C.',
  'Notice the time in the question: responding to HEARING the audition. A prior seating choice or an expectation held before singing is not the same as a response during it. A changing facial expression is concrete evidence of a reaction.',
  'A concerns where they chose to sit earlier. B concerns a preconceived expectation, not the visible reaction asked for. D invents a fondness for patriotic songs that the passage does not state.'
 ]),
 make(10,"The passage most strongly suggests that Esperanza's choice of audition material was:",[
  'good for a mousy voice.','often partly sung with vibrato.','an impressive, original choice.',"something Monique's friends had anticipated."
 ],'G','Material versus the way it is performed',[[67,78],[82,84]],
 '“The final phrase of the song, so often soaked in vibrato by melodramatic singers, was gently performed”',[
  'The narrator says that other singers often perform the final phrase with much vibrato. That supports G: part of this song is often sung with vibrato. It describes a common way of performing the material, not how Esperanza herself sang that ending.',
  'Keep the song choice separate from the performance. Esperanza’s voice impresses the listeners, but that does not make the chosen song an original selection. Her gentle delivery also does not cancel the narrator’s statement about what other singers often do.',
  'F relies on the audience’s mistaken expectation of a mousy voice; the song is described as requiring multiple registers. H confuses an impressive performance with an original song choice. J conflicts with the group’s disbelief when she begins the song. G is the option with specific textual support.'
 ])
];
