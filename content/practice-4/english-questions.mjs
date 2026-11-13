import { sourceRefs } from './english-passage.mjs';

const edit = 'Choose the best replacement for the underlined portion.';
const least = 'Which of the following alternatives to the underlined portion would be LEAST acceptable?';

function question(id, key, topic, sources, evidence, explanation, choices, prompt = edit) {
  const labels = id % 2 ? 'ABCD' : 'FGHJ';
  return {
    id, key, topic, section: 'english', prompt, evidence, explanation,
    evidenceSources: sources.map(source => sourceRefs[`hurston-${source}`]),
    choices: choices.map((text, index) => ({ label: labels[index], text })),
  };
}

export const questions = [
  question(46, 'H', 'Time expressions and LEAST questions', ['now'],
    'Now, almost 50 years since her death, her hard work and fabulous novels still have much to teach the modern audience.',
    [
      'H is the least acceptable. “Now” means at the time the writer is speaking, about fifty years after Hurston’s death. “Instantly” means immediately or without a delay. The sentence is about the continuing value of her work, so that meaning does not fit.',
      'LEAST means you are looking for the weakest replacement. Try each word in the same sentence. Compare “The book is currently available” with “The file opened instantly.” One gives the time when something is true. The other tells how quickly something happened.',
      'F, G, and J can all mean “at the present time” here. Presently can also mean “soon” in some contexts, but the reference to the modern audience makes its present-time sense clear in this sentence.',
    ], ['Presently,', 'Currently,', 'Instantly,', 'At the present,'], least),
  question(47, 'C', 'Keeping the subject of both actions clear', ['faced'],
    'She overcame the challenges she faced and demonstrated that perseverance makes anything possible.',
    [
      'C is the least acceptable. In the original, Hurston does two things: she overcomes challenges and demonstrates what perseverance can achieve. With “faced that,” the sentence becomes “the challenges she faced that demonstrated …,” which makes the challenges appear to do the demonstrating.',
      'Take out the detail “she faced” for a moment. The core is “She overcame the challenges and demonstrated ….” A replacement can also say that the act of overcoming the challenges demonstrated the lesson, as long as that link is clear.',
      'A uses “in so doing” to refer to what Hurston did. B uses “thus” to show the result. D explicitly names “an action” that demonstrated the lesson. C attaches the result to the challenges instead of to her achievement.',
    ], ['faced, and in so doing,', 'faced and, thus,', 'faced that', 'faced, an action that'], least),
  question(48, 'F', 'Precise modifiers and tone', ['personality', 'contrasts'],
    'Hurston ascribed much of her deeply individualistic personality to the experience of growing up in Eatonville, Florida.',
    [
      'F keeps “deeply individualistic,” which means that thinking and acting for herself was a strong part of Hurston’s personality. The opening also calls her “an independent thinker.” The wording fits that description.',
      'Ask what the modifier contributes. In “deeply individualistic,” deeply tells how strong the quality is. Compare “deeply curious,” where deeply adds intensity to curious.',
      'G repeats the personal idea without adding a clear degree. H is an awkward pairing here and weakens the specific emphasis on individuality. J shifts from independence to an unfavorable judgment about self-importance.',
    ], ['NO CHANGE', 'personally individualistic', 'freely independent', 'truly egotistical']),
  question(49, 'C', 'Choosing the fact that answers the writing goal', ['town', 'community'],
    'The town was unique in that it was particularly hot in the summer, but mild at other times of the year. / Hurston always said growing up in a community totally separate from the larger white society allowed her a freedom that independence not available to everyone in the south.',
    [
      'The sentence promises a reason Eatonville was unique. C supplies a specific historical first: it was the first all-black town incorporated in the country. This also prepares the reader for the next sentence about the community in which Hurston grew up.',
      'The question says to treat all the choices as true. The task is to choose the one that proves the specific point the sentence is making. “First … in the country” directly shows a distinctive place in national history.',
      'A describes weather. B actually calls the town representative, or typical. D gives a date comparison that could also be true of many other towns.',
    ], ['NO CHANGE', 'a fairly representative small town, founded in the mid-nineteenth century.', 'the first all-black town to be incorporated in the country.', 'not yet in existence at the start of the Civil War.'],
    'Given that all the choices are true, which one most effectively identifies why Eatonville has a history unlike any other city in the United States?'),
  question(50, 'J', 'Joining nouns with and', ['community'],
    '…allowed her a freedom that independence not available to everyone in the south.',
    [
      'J joins the two nouns with “and”: “a freedom and independence not available to everyone in the south.” Freedom and independence are the two related things that her upbringing gave her.',
      'Find the two items on either side of the gap. They are both nouns. “And” can connect nouns directly, as in “The job gave her confidence and independence.” Here “not available to everyone” describes those qualities.',
      'F leaves “that independence” without a clause to complete the thought. G inserts “was,” which leaves “was independence” in the wrong place. H starts a new clause with “it featured” without a proper connection to the previous words.',
    ], ['NO CHANGE', 'and was', 'it featured', 'and']),
  question(51, 'A', 'Keeping the subject and verb together', ['studies'],
    '…but her obvious intelligence and talent soon earned her a scholarship to Barnard College in New York City.',
    [
      'A keeps the sentence as written. “Her obvious intelligence and talent” is the whole subject. “Earned” is its verb. The two nouns belong together, and the subject leads directly to the verb.',
      'Ask “What earned her a scholarship?” The answer is “her intelligence and talent.” A simple two-item subject normally needs no comma between its parts or between the whole subject and its verb.',
      'B and C add a comma between the two nouns. C and D also place a comma after “talent,” separating the subject from “soon earned.” The comma before “but” earlier in the sentence serves a different job: it separates two full clauses.',
    ], ['NO CHANGE', 'intelligence, and talent', 'intelligence, and talent,', 'intelligence and talent,']),
  question(52, 'F', 'An -ing phrase as the subject', ['movement'],
    '[2] Moving north in the 1920s thrust her into the midst of the Harlem Renaissance…',
    [
      'F is correct. Ask what thrust her into the Harlem Renaissance. The answer is “Moving north in the 1920s.” That whole phrase is the subject. “Thrust” is the main verb.',
      'An -ing phrase can act as a noun and be the subject. Compare “Moving north changed her life” with “Moving north, she met new artists.” In the first sentence the move does the changing. In the second, “she” is the subject and the opening phrase adds context.',
      'G separates the subject from “thrust” with a comma. H also puts a comma between “thrust” and “her.” J uses a semicolon even though the words before it cannot stand as a complete sentence.',
    ], ['NO CHANGE', '1920s, thrust', '1920s, thrust,', '1920s; thrust']),
  question(53, 'D', 'Removing redundant examples from a list', ['movement'],
    '…a black cultural movement that spawned exceptional achievements in literature, books, poems, and plays, art, and music.',
    [
      'D gives a clean list of three fields: “literature, art, and music.” Books, poems, and plays are already examples of literature, so listing them as separate fields repeats part of the same idea.',
      'Read the full list after replacing only the underlined words. D leaves the comma needed before “art.” In a list of broad categories, examples inside one category should only stay if the writer has a reason to explain that category.',
      'A mixes literature with examples of literature at the same level. B and C insert definitions that the reader does not need to follow the sentence. B also describes literature too narrowly, as if it were limited to stories originally told aloud.',
    ], ['NO CHANGE', 'literature, written records of stories once transmitted orally,', 'literature, which includes all forms of written expression,', 'literature,']),
  question(54, 'F', 'Matching tense in coordinated actions', ['early-work'],
    '[3] …Hurston developed her skills as a writer and published numerous short stories and poems.',
    [
      'F keeps “developed.” The sentence describes Hurston’s past work. She developed her skills and published stories and poems during that period. Both verbs are in the simple past.',
      'Check the verb after “and” and the time frame of the sentence. Here “published” gives a clear past-tense clue. “Develop her skills” is already a complete expression meaning improve her abilities.',
      'G keeps the past tense but adds an unnecessary “up.” H adds “up” and switches to the present. J also switches to the present with “develops,” even though it is paired with “published.”',
    ], ['NO CHANGE', 'developed up', 'develops up', 'develops']),
  question(55, 'D', 'Deciding whether to add a sentence', ['early-work', 'shift'],
    '[3] …Hurston developed her skills as a writer and published numerous short stories and poems. / [4] The most influential work that came to define her career grew out of her attempt to capture the black experience.',
    [
      'D is correct. Sentence 3 mentions Billie Holiday in a group of people Hurston knew, then focuses on Hurston’s writing. Sentence 4 moves to Hurston’s most influential work. A comment on the mood and popularity of Holiday’s music interrupts that development.',
      'For an add-or-delete question, read on both sides of the proposed insertion. Ask whether the sentence advances the paragraph’s focus at that exact spot. Sharing a person’s name with the previous sentence is not enough.',
      'A calls the detail interesting without showing how it helps the paragraph. B claims a musical influence the passage does not establish. C notices a missing detail about Holiday, but naming songs would still leave the sentence off topic.',
    ], ['Yes, because it provides an interesting detail about one of the other Harlem Renaissance artists.', 'Yes, because music was an important influence on Hurston’s work.', 'No, because it doesn’t clearly identify which of Billie Holiday’s songs were popular.', 'No, because it distracts the reader from the main point of this paragraph.'],
    'At this point, the writer is considering adding the following true statement: “Billie Holiday’s music evokes such feeling and melancholy that it’s no wonder she became so popular.” Should the writer add this sentence here?'),
  question(56, 'H', 'Choosing the word that meets the stated goal', ['dialect', 'project', 'critics'],
    '[6] Her interesting representation of the southern dialect … / [7] …the accuracy of her representation… / …her authentic and skillful representation of the language…',
    [
      'H gives “authentic,” meaning true to the way people really spoke. It directly meets the question’s goal of describing an accurate representation of the dialect.',
      'Turn the question into a short definition before looking at the choices. Here “realistic representation” means true to the original. Sentence 7 mentions accuracy, and the final paragraph uses “authentic” for the same portrayal.',
      'F and J tell how interesting the portrayal is. G says it is out of the ordinary. A portrayal can be interesting or unusual and still be inaccurate, so those words do not meet the goal.',
    ], ['NO CHANGE', 'unusual', 'authentic', 'fascinating'],
    'Which choice would most clearly indicate that the dialect referenced in the passage was a realistic representation of the actual way language was spoken in Eatonville?'),
  question(57, 'B', 'Making a pronoun reference clear', ['shift', 'dialect', 'project'],
    '[7] Hurston, however, remained true to it, convinced that the accuracy of her representation would ultimately prevail…',
    [
      'B replaces “it” with “her project.” The previous sentence mentions the dialect, the work, and stereotypes. The noun phrase gives the reader a clear idea of what Hurston stayed committed to: her work of representing the experience and speech of the community.',
      'A pronoun needs a clear referent, the person or thing it stands for. Read the whole sentence and ask “true to what?” A specific noun can make that answer immediately clear.',
      'A leaves several possible references for “it.” C is even less specific. D leaves “to which, convinced …” without the sentence structure needed for a relative clause.',
    ], ['NO CHANGE', 'her project,', 'that thing,', 'which,']),
  question(58, 'G', 'Starting a new paragraph where the focus shifts', ['early-work', 'shift', 'novel'],
    '[3] …published numerous short stories and poems. / [4] The most influential work that came to define her career… / [5] That novel, called Their Eyes Were Watching God…',
    [
      'G puts the break before Sentence 4. Sentences 1–3 describe Hurston’s education and development. Sentence 4 introduces her most influential work, and Sentence 5 names it. Together they open the new focus on that novel.',
      'Find the first sentence that starts the new idea. “That novel” in Sentence 5 points back to “The most influential work” in Sentence 4, so the two sentences belong together at the beginning of the new paragraph.',
      'F chooses the right number for the wrong reason. Sentence 4 does not discuss Hughes’s influence. H and J start a sentence too late, and the rest of the paragraph focuses on the novel and the reaction to its dialect, beyond plot or social conditions alone.',
    ], ['4, because it would indicate that Hurston’s writing was most strongly influenced by Langston Hughes.', '4, because it would signal the essay’s shift in focus to one of Hurston’s novels.', '5, because all the remaining sentences in the paragraph provide a detailed summary of the plot of Hurston’s novel.', '5, because it would indicate that the essay is now going to focus on social conditions in Eatonville.'],
    'The writer has decided to divide this paragraph into two. The best place to add the new paragraph break would be at the beginning of Sentence:'),
  question(59, 'B', 'Choosing a transition that matches the logic', ['history', 'critics'],
    'History has shown that Hurston was right. However, modern critics admire her authentic and skillful representation of the language…',
    [
      'B begins directly with “Modern critics admire ….” Their approval gives an example of how history has shown Hurston was right. The two sentences already connect clearly.',
      'Name the relationship first. “However” signals a contrast. “Thus” signals a result. Here the second sentence gives evidence for the first: modern critics’ admiration helps show why the writer says history vindicated Hurston.',
      'A signals a contrast that is absent. C suggests that critics admire her as a result of history’s verdict, reversing the role of their praise as evidence. D suggests a separate added point, but this sentence directly supports the previous one.',
    ], ['NO CHANGE', 'Modern', 'Thus, modern', 'In addition, modern']),
  question(60, 'G', 'Parallel passive verbs and essential wording', ['legacy'],
    'She is universally applauded, as one of the best writers of her era, ranked with Toni Morrison, Maya Angelou, and Alice Walker…',
    [
      'G gives “She is universally applauded as one of the best writers of her era and ranked with ….” One “is” serves both passive verbs: “is applauded” and “is ranked.” The word “and” connects those descriptions.',
      'Read the two halves with their shared words: “She is applauded as one of the best” and “She is ranked with other writers.” Keep “applauded as” together because the phrase explains how she is regarded.',
      'F sets off “as one of the best writers of her era” with unnecessary commas and leaves the two descriptions without a conjunction. H still lacks a connector. J adds a second “she is” after a comma, creating two complete clauses joined only by a comma.',
    ], ['NO CHANGE', 'applauded as one of the best writers of her era and', 'applauded as one of the best writers of her era', 'applauded, as one of the best writers of her era, she is']),
];
