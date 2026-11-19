import { sourceRefs } from './english-passage.mjs';

function question(id, key, topic, sources, evidence, explanation, choices, prompt = 'Choose the best replacement for the underlined portion.') {
  const labels = id % 2 ? 'ABCD' : 'FGHJ';
  return {
    id, key, topic, section: 'english', prompt, evidence, explanation,
    evidenceSources: sources.map(source => sourceRefs[source]),
    choices: choices.map((text, index) => ({ label: labels[index], text })),
  };
}

export const questions = [
  question(16, 'G', 'A future possibility viewed from the past', ['expectation', 'trip'],
    '“I had admired the work for years in art books, but I never thought I saw the actual painting”', [
      'The narrator admired pictures of the painting before the trip. At that earlier time, she did not expect to see the original later. G gives “I never thought I would see,” which expresses that later possibility from a point in the past.',
      'Start with the thought “I will see it someday.” To report an earlier expectation, you can say “I thought I would see it someday.” Here “never” tells us she had no such expectation.',
      'F makes seeing the original an event she did not think had happened. H puts that event further back in time. J describes an action in progress at the earlier moment. The story needs her earlier view of a possible later visit.',
    ], ['NO CHANGE', 'would see', 'had seen', 'was seeing']),
  question(17, 'D', 'Deleting an incomplete or unnecessary phrase', ['expectation', 'meeting'],
    '“I finally got my chance to when I met someone else who loved the painting as much as I did.”', [
      'The previous sentence identifies the chance she wanted, to see the actual painting. D produces “I finally got my chance when I met someone else ….” “When” now introduces the event that made the visit possible.',
      'Read both sides of the replacement. “To” would need a verb such as “see,” but “when” already starts the next clause. Deleting “to” leaves a complete and clear sentence.',
      'A leaves “to” without the action it should introduce. C gives “my chance just to when,” with the same problem. B can be read as a longer time expression, but “at the moment when” adds words without improving the meaning of “when” here.',
    ], ['NO CHANGE', 'at the moment', 'just to', 'DELETE the underlined portion.']),
  question(18, 'H', 'Possessive its and the noun it refers to', ['trip'],
    '“so we could see the painting in all it’s grandeur.”', [
      '“Grandeur” is the painting’s splendor. The sentence needs a word showing that the grandeur belongs to the painting. H gives the singular possessive “its.”',
      'Test “it’s” by expanding it to “it is” or “it has.” Neither fits “in all ___ grandeur.” The possessive form “its” takes no apostrophe.',
      'F expands into an unsuitable “it is” or “it has.” G makes the grandeur belong to the travelers. J uses “its’,” which is not a standard possessive form.',
    ], ['NO CHANGE', 'our', 'its', 'its\'']),
  question(19, 'A', 'Parallel past-tense verbs', ['departure'],
    '“We packed our bags, jumped in the car, and headed on our way toward Chicago.”', [
      'The sentence lists three actions by the same people in sequence. “Packed,” “jumped,” and “headed” are all simple past forms. A keeps the list parallel.',
      'Read each action with “we” to test the shared structure. “We packed,” “we jumped,” and “we headed” all fit the same past trip.',
      'B shifts the third action to “had headed.” D shifts the middle action to “had jumped.” The sentence gives no earlier event that would call for either change. C switches to the present form “head.”',
    ], ['NO CHANGE', 'jumped in the car, and had headed', 'jumped in the car, and head', 'had jumped in the car, and headed']),
  question(20, 'G', 'Introducing a person before later references', ['meeting', 'trip', 'departure'],
    '“[3] I finally got my chance to when I met someone else who loved the painting as much as I did.” / “[4] We both had three days off at the same time”', [
      'Sentence 3 introduces “someone else.” The proposed sentence supplies her name, Lisa, and explains how they met. Place it after Sentence 3, which is G, so “Her” has a clear reference and the following “We both” has two identified people.',
      'Trace the references in order. “Someone else” introduces a person, “Her name was Lisa” develops that person, and “We both” moves to the plans the two friends made.',
      'After Sentence 2, “Her” would appear before any companion is introduced. After Sentence 4 or 5, the explanation would interrupt plans or departure that already depend on knowing who the companion is.',
    ], ['2', '3', '4', '5'], 'Upon reviewing this paragraph and noticing that some information has been left out, the writer composes the following sentence, incorporating the information: Her name was Lisa; she lived in my dorm, and a mutual friend had introduced us to each other, knowing how much both of us loved art. For the sake of the logic of this paragraph, this sentence should be placed after Sentence:'),
  question(21, 'D', 'Keep a subject together with its main verb', ['size-subject'],
    '“The first thing that struck me as we entered the room where the painting was displayed; was the size of the painting.”', [
      'The main structure is “The first thing … was the size of the painting.” The words up to “displayed” belong inside that subject. D removes the semicolon that separates the subject from its main verb.',
      'Temporarily remove the descriptions beginning with “that struck me” and “where.” The core “The first thing was the size of the painting” shows why no punctuation belongs before the main “was.”',
      'A puts a semicolon after an unfinished subject. B puts a colon there, and C puts a comma there. All three separate the subject from the verb that completes its main clause.',
    ], ['NO CHANGE', 'displayed:', 'displayed,', 'displayed']),
  question(22, 'F', 'Concision after an adjective', ['dots', 'task', 'achievement'],
    '“To create a painting of such magnitude using this technique seemed an almost impossible task.”', [
      '“An almost impossible task” already states how difficult the work seemed. F ends the sentence after “task” and lets the next sentence explain that Seurat accomplished it.',
      'Ask what information each added phrase contributes. “Difficult to complete” and “overwhelming in its difficulty” repeat the difficulty already expressed by “almost impossible.”',
      'G, H, and J all keep “almost impossible” and add another description of difficulty. Each lengthens the sentence without advancing the narrator’s point.',
    ], ['NO CHANGE', 'task and difficult to complete.', 'task, difficult to complete.', 'task, overwhelming in its difficulty.']),
  question(23, 'A', 'Relevance within a descriptive paragraph', ['size-subject', 'canvas', 'wall', 'dots', 'task'],
    '“[2] A common size for canvases is 24 by 36 inches.” / “[5] The painting’s size amazed me since it was painted with dots”', [
      'Sentence 2 gives a general canvas size. The paragraph does not use that measurement to make a specific comparison with Seurat’s painting. Removing it keeps the focus on what the narrator saw and why the scale and technique amazed her. Choose A.',
      'Read around the proposed deletion. Sentence 1 introduces the painting’s size, and Sentence 3 continues “It was enormous!” That connection stays clear when Sentence 2 is removed.',
      'Sentence 4 shows how much wall the painting occupied. Sentence 5 connects its scale to pointillism. Sentence 6 explains why completing such a work seemed difficult. Each supports the narrator’s reaction more directly than the general measurement does.',
    ], ['Sentence 2', 'Sentence 4', 'Sentence 5', 'Sentence 6'], 'Which of the following sentences is LEAST relevant to the development of this paragraph and therefore could be deleted?'),
  question(24, 'F', 'A comparative transition between paragraphs', ['wall', 'dots', 'achievement', 'beauty', 'distance'],
    '“It covered a large part of an even larger wall.” / “Even more impressive, however, was the beauty of the painting.”', [
      'The preceding paragraph describes the impressive size and technique. “Even more impressive” compares those qualities with the beauty that the new paragraph introduces. “However” marks a shift in the feature being discussed. F keeps both links.',
      'A transition should point back to an earlier idea and lead into the new one. Here the earlier reaction is amazement at scale, and the new focus is beauty and color.',
      'G could introduce an observation but loses the explicit comparison. H shifts the focus to art critics. J introduces a debate that the preceding paragraph does not set up.',
    ], ['NO CHANGE', 'One thing that struck me was', 'Many art critics have written about', 'The debate rages on over'], 'Given that all of the choices are accurate, which provides the most effective and logical transition from the preceding paragraph to this one?'),
  question(25, 'C', 'Independent clauses and comma splices', ['approach'],
    '“When I approached the painting, though, its colors exploded into myriad hues”', [
      'This question asks for the unacceptable alternative. C gives “I approached the painting, though, its colors exploded ….” Both “I approached the painting” and “its colors exploded” can stand as sentences, and the commas around “though” do not join them correctly. Choose C.',
      'A clause starting with “when” or “as” can introduce the time of the main action. Without those words, “I approached the painting” is independent. “Though” used as an inserted contrast word cannot turn the commas into a conjunction or a semicolon.',
      'A keeps a dependent clause beginning with “As.” B and D put “However” before an introductory “as” or “when” clause. Each then leads into the existing main clause about the colors.',
    ], ['As I approached the painting, though,', 'However, as I approached the painting,', 'I approached the painting, though,', 'However, when I approached the painting,'], 'Which of the following alternatives to the underlined portion would NOT be acceptable?'),
  question(26, 'G', 'The function of a contrast phrase', ['distance', 'white'],
    '“Even the parts of the painting that appeared white from a distance were vibrantly multicolored when viewed up close.”', [
      '“From a distance” gives the first viewing position, where parts look white. “When viewed up close” gives the second, where the same parts look multicolored. Removing the first phrase weakens that distance-versus-closeness comparison. G describes what is lost.',
      'For a deletion question, read the sentence once with the phrase and once without it. Identify the relationship the words establish between the two observations.',
      'F overstates the phrase as essential to explaining her love of the painting. H assigns the distance to travel, although the phrase describes looking at the painting. J overlooks the local comparison, even though an earlier sentence also describes a distant view.',
    ], ['an essential point explaining the author’s love of the painting.', 'the first part of the contrast in this sentence, which the author uses to describe viewing the painting.', 'a further indication of the length of the road trip taken by the author and her friend.', 'nothing, because the information provided by this phrase is stated more clearly elsewhere in the paragraph.'], 'If the writer were to delete the phrase “from a distance” from the preceding sentence, the paragraph would primarily lose:'),
  question(27, 'D', 'Consistent pronoun reference', ['meeting', 'trip', 'viewers', 'sights'],
    '“We both had three days off at the same time” / “The effect was incredible; he sat and stared at the painting in wonder” / “My friend and I saw many other sights”', [
      'The people on the trip are the narrator and her friend. D gives “we sat and stared,” which includes the narrator and keeps the same pair of visitors in view.',
      'To check a pronoun, replace it with the people it should refer to. “My friend and I sat and stared” fits the story. The equivalent subject pronoun is “we.”',
      'A introduces an unidentified male viewer. B switches to the general “one.” C excludes the narrator from the group doing the looking. The intended pair throughout the trip includes her.',
    ], ['NO CHANGE', 'one', 'they', 'we']),
  question(28, 'H', 'Relevance of an additional detail', ['approach', 'white', 'viewers', 'sights'],
    '“its colors exploded into myriad hues” / “sat and stared at the painting in wonder for a good portion of the afternoon.”', [
      'This part of the essay describes the friends’ response to Seurat’s painting, especially its colors. The proposed sentence lists other famous paintings without developing that response. H gives the relevant reason to leave it out.',
      'The question presents the addition as a true statement. Evaluate how it serves the paragraph’s focus. A true detail can still take the reader away from the experience the narrator is explaining.',
      'F treats information about the museum’s wider collection as essential to this account. G calls the list a contrast, although it offers no comparison. J claims a contradiction with the essay, and the essay supplies no such contradiction.',
    ], ['Yes, because it gives additional details essential to understanding the collection at the museum.', 'Yes, because it demonstrates a contrast between the author’s favorite painting and those in this sentence.', 'No, because it provides information that is not relevant at this point in the paragraph and essay.', 'No, because it is contradicted by other information presented in this essay.'], 'At this point, the writer is considering adding the following true statement: The Art Institute of Chicago contains many other famous paintings, among them Edvard Munch’s The Scream and Grant Wood’s American Gothic. Should the writer make this addition here?'),
  question(29, 'D', 'Keep an action and its trip context connected', ['sights'],
    '“My friend and I saw many other sights, on our trip to Chicago, but the best part by far was being able to see our favorite work of art.”', [
      '“On our trip to Chicago” tells when the friends saw the sights. D gives “saw many other sights on our trip to Chicago” as one smooth clause. The existing comma before “but” then separates the two complete thoughts.',
      'Read the first clause through to its end. “My friend and I saw many other sights on our trip to Chicago” has a subject, verb, object, and trip context. There is no need to interrupt it after “sights.”',
      'A leaves an unnecessary comma. B inserts “which” without a clause it can introduce. C puts a semicolon before “on our trip to Chicago,” a phrase that cannot stand alone as a sentence.',
    ], ['NO CHANGE', 'sights, which', 'sights;', 'sights']),
  question(30, 'J', 'Place a phrase next to the action it describes', ['print'],
    '“The image is forever imprinted in my mind at the museum gift shop even when I’m not looking at the souvenir print I bought.”', [
      'The narrator bought the souvenir print at the museum gift shop. J places the location immediately after “bought,” giving “the souvenir print I bought at the museum gift shop.”',
      'Ask which action the location answers a question about. “Bought where?” has a clear answer. Moving the phrase next to that action also leaves “The image is forever imprinted in my mind” clear.',
      'F makes the location seem attached to being imprinted in her mind. G attaches it to “image,” and H attaches it to looking at the print. None identifies the location of the purchase as directly as J.',
    ], ['where it is now.', 'after the word image.', 'after the word looking.', 'after the word bought (ending the sentence with a period).'], 'The best placement for the underlined portion would be:'),
];
