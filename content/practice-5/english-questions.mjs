import { sourceRefs } from './english-passage.mjs';

function question(id, key, topic, sources, evidence, explanation, choices, prompt = 'Choose the best replacement for the underlined portion.') {
  const labels = id % 2 ? 'ABCD' : 'FGHJ';
  return {
    id, key, topic, section: 'english', prompt, evidence, explanation,
    evidenceSources: sources.map(source => sourceRefs[`carter-${source}`]),
    choices: choices.map((text, index) => ({ label: labels[index], text })),
  };
}

export const questions = [
  question(61, 'D', 'Introductory phrases and commas', ['presidency'],
    'As president of the United States from 1977 to 1981. He oversaw a particularly turbulent time in American history.', [
      'The core sentence is “he oversaw a particularly turbulent time.” The opening phrase “As president of the United States from 1977 to 1981” gives Carter’s role and the years. It has no main verb and cannot stand by itself.',
      'A comma separates this introductory phrase from the main clause. That puts the lowercase “he” inside the same sentence: “As president … from 1977 to 1981, he oversaw ….”',
      'A leaves a fragment before the period. B and C insert “but” or “and” even though the words before that point only introduce the clause. Neither conjunction connects two complete thoughts here.',
    ], ['NO CHANGE', '1981 but he', '1981, and he', '1981, he']),
  question(62, 'F', 'Paired dashes around an explanation', ['enemy'],
    '… a tenuous relationship with a potential enemy—the Soviet Union—are hardly the stuff of pleasant memories.', [
      '“The Soviet Union” identifies the potential enemy. The first dash opens that explanation and the second closes it before the main verb “are.” F keeps both marks.',
      'Remove the words between the dashes: “… a tenuous relationship with a potential enemy are hardly ….” The earlier items in the list remain, so “are” still has the whole list as its subject.',
      'G keeps only the closing dash, J keeps only the opening dash, and H gives the inserted name no punctuation at all. The reader needs to see where the explanation begins and ends.',
    ], ['NO CHANGE', 'enemy the Soviet Union—', 'enemy the Soviet Union', 'enemy—the Soviet Union']),
  question(63, 'C', 'Possessive apostrophes and word groups', ['office'],
    'Yet even though Carter held Americas most, powerful office, he will probably be remembered more for the work he has done …', [
      'The office is America’s: the singular name “America” takes apostrophe + s to show possession. “Most” belongs next to “powerful” because it tells how powerful the office was.',
      'C produces the complete group “America’s most powerful office.” Keep the existing comma after “office” because that is where the introductory “even though” clause ends.',
      'A and D omit the possessive apostrophe. B adds the apostrophe but leaves a comma between “most” and “powerful.” D also separates “Americas” from the words it should modify.',
    ], ['NO CHANGE', 'held America\'s most,', 'held America\'s most', 'held Americas, most']),
  question(64, 'F', 'Subject pronouns in clauses', ['office'],
    'He will probably be remembered more for the work he has done since he left the White House.', [
      'Look inside the phrase “the work he has done.” Ask who has done the work. Carter has, so “he” is the subject of “has done.”',
      'You can put the helpful word “that” back in: “the work that he has done.” “He” is still the subject, and “that” refers to the work. English can omit “that” here.',
      '“Him” is an object form. “Himself” is reflexive or emphatic and cannot stand alone as this subject. “Itself” also fails to name the person who did the work.',
    ], ['NO CHANGE', 'himself', 'him', 'itself']),
  question(65, 'C', 'Concise wording and redundancy', ['underprivileged'],
    '… a caring, dedicated person who wants to see the underprivileged, those of low economic or social status, benefit from the great wealth, power, and generosity of this country.', [
      '“The underprivileged” already means people who have fewer resources or opportunities. C keeps the intended group and lets the sentence move directly to what Carter wants for them: “see the underprivileged benefit.”',
      'Try reading without the definition. Can you still tell who benefits and from what? Yes: people with fewer opportunities benefit from the country’s resources and generosity.',
      'A defines the group with “low economic or social status.” B and D give similar explanations in different words. In this sentence all three repeat an idea the original term already conveys.',
    ], ['NO CHANGE', 'underprivileged, who may not have many resources,', 'underprivileged', 'underprivileged, who have less than others in society,']),
  question(66, 'G', 'Word choice in context', ['middle-east', 'energy'],
    'He questioned a national energy policy designed to reduce American dependence … and brokered a peace treaty between Israel and Egypt.', [
      '“Promoted” means actively supported or advocated. The paragraph presents the energy policy and the peace treaty as examples of Carter taking action, and it says he took the first action before it was popular to do so.',
      'Read the verb together with its object: you can “promote a policy” by encouraging others to support it. “Promoted” and “brokered” describe two steps Carter took toward goals in this paragraph.',
      '“Questioned” suggests doubt and “rejected” suggests refusal. Neither fits the supporting role described here. “Purchased” means bought, which does not describe his relationship to the policy.',
    ], ['NO CHANGE', 'promoted', 'purchased', 'rejected']),
  question(67, 'C', 'Place a phrase next to the word it completes', ['energy'],
    '… designed to reduce American dependence long before it was popular to do so on foreign oil and brokered a peace treaty …', [
      'Ask “dependence on what?” The answer is “on foreign oil,” so put those words immediately after “dependence.” That gives “reduce American dependence on foreign oil.”',
      'The sentence has a separate phrase for timing: “long before it was popular to do so.” By that point the relationship “dependence on foreign oil” should already be clear.',
      'A places the phrase after “do so” and too far from “dependence.” B puts it after “designed,” and D puts it after “was.” Neither of those words expresses what the United States depended on.',
    ], ['where it is now.', 'after the word designed.', 'after the word dependence.', 'after the word was.'], 'The best placement for the underlined portion would be:'),
  question(68, 'F', 'Find versus found and NOT questions', ['center'],
    '… he was among the first to insist publicly on basic human rights for everyone around the world, founding a non-profit organization, The Carter Center, to work toward that end.', [
      'The question asks for the unacceptable replacement. The original “founding” shows that Carter established the organization. “He found” usually means he discovered or located something, so F changes the action.',
      'There are two verbs here. “Find” becomes “found” in the past: “He found his keys.” “Found,” meaning establish, becomes “founded” in the past: “He founded an organization.”',
      'G, H, and J use “founded.” G joins two clauses with “and.” H shows a result with “so.” J joins two actions with the shared subject “he.” All three keep the intended action.',
    ], ['world, and he found', 'world, and he founded', 'world, so he founded', 'world and founded'], 'Which of the following alternatives to the underlined portion would NOT be acceptable?'),
  question(69, 'B', 'Concise wording for a broad idea', ['health'],
    '… in order to contain disease and improve quality of life around the world, in many different countries.', [
      '“Around the world” already expresses a worldwide reach. B ends the sentence after “world” and keeps that meaning.',
      'Keep a detail when it contributes something the reader needs. Here the point is the purpose of expanding health care: to contain disease and improve quality of life worldwide.',
      'A repeats the worldwide idea. C adds an east/west description the reader does not need. D brings in a claim about particular continents, a level of detail the sentence does not call for.',
    ], ['NO CHANGE', 'world.', 'world, both east and west of the United States.', 'world, including countries on every continent except Antarctica.']),
  question(70, 'J', 'Concise transitions and the meaning of at home', ['domestic', 'health'],
    'Carter works actively to improve the standard of living at home here in the United States as well.', [
      'Paragraph 3 describes international work. In Paragraph 4 “at home” means in Carter’s own country, the United States. J keeps that signal and removes the extra description. The following “as well” already tells the reader that the domestic work is additional.',
      'J gives “at home, as well.” The comma allows “as well” to read as a trailing aside. It is not a rule that “as well” always needs a comma: “He works at home as well” can also be written without one.',
      'F repeats the location with “here in the United States.” G adds “not just abroad” even though the previous paragraph and “as well” already make that link. H adds a long description of the same place.',
    ], ['NO CHANGE', 'at home, not just abroad,', 'at home, within the area over which he was president,', 'at home,']),
  question(71, 'B', 'Verb, object, and place adverb', ['abroad', 'domestic'],
    'However, Carter does not focus abroad all his efforts.', [
      'Ask what Carter focuses: “all his efforts.” Ask where: “abroad.” B places the object together after “focus,” then adds the place: “focus all his efforts abroad.”',
      '“All his efforts” is one noun phrase. “Abroad” works as an adverb here and tells where the effort is directed. A simple model is “She put her energy here.”',
      'A places the location before the object and sounds awkward here. C splits “all his efforts.” D tries to use “abroad” before “efforts” as if it were an adjective, when the intended meaning is where Carter focuses his efforts.',
    ], ['NO CHANGE', 'focus all his efforts abroad.', 'focus all abroad his efforts.', 'focus all his abroad efforts.']),
  question(72, 'G', 'Place a transition where the topic shifts', ['health', 'abroad', 'domestic', 'habitat', 'housing', 'community'],
    'Sentence 4: “However, Carter does not focus abroad all his efforts.” Sentence 1: “Carter works actively to improve the standard of living at home … as well.”', [
      'Sentence 4 begins with “However” and looks back to the previous paragraph’s worldwide work. Put it before Sentence 1 to make the transition from abroad to the United States before the example about Habitat starts.',
      'The revised order is 4 → 1 → 2 → 3 → 5: transition, main point about home, name of the organization, its mission, and what the volunteers and families do together.',
      'F leaves the transition in the middle of the Habitat example. H separates “Habitat for Humanity” from “This volunteer-based organization.” J waits until all the examples have already shown what Carter does at home.',
    ], ['where it is now.', 'before Sentence 1.', 'after Sentence 2.', 'after Sentence 5.'], 'For the sake of the logic and coherence of this paragraph, Sentence 4 should be placed:'),
  question(73, 'D', 'Prepositions after agree', ['philanthropy'],
    'Everyone can agree for his impressive philanthropy and acknowledge his obvious devotion to all of humanity.', [
      'D is the supplied key. Of these choices, “agree with” is the usual construction for sharing a view or approving of something. It comes closest to the intended approval here, though “agree with his philanthropy” sounds awkward.',
      'Use “agree with her opinion,” “agree to a proposal,” or “agree that the work is impressive.” In free writing, this sentence could say “Everyone can appreciate his impressive philanthropy ….”',
      '“Agree for” and “agree by” do not express the intended approval here. “Agree to” means accept a plan, terms, or a request, which is a different idea from recognizing Carter’s charitable work.',
    ], ['NO CHANGE', 'agree to', 'agree by', 'agree with']),
  question(74, 'F', 'Summarize the whole essay', ['service', 'philanthropy', 'center', 'habitat'],
    'For all these reasons, Carter deserves respect for dedicating his career to public service. … acknowledge his obvious devotion to all of humanity.', [
      '“For all these reasons” signals a conclusion. F draws a single idea from the examples: Carter devoted himself to helping people, both worldwide through work such as The Carter Center and at home through Habitat.',
      'When the task asks for a summary of key points, name the common idea that connects the examples. Here that idea is public service and care for others.',
      'G introduces a claim about a second term. H shifts to Carter’s right to express an opinion. J returns to one detail from the opening about hostages. None covers the range of humanitarian work the essay develops.',
    ], ['NO CHANGE', 'he should have been president for a second term.', 'he has the right to express his opinions as much as any other American.', 'he clearly didn\'t want the hostages to be harmed.'], 'Which choice would best help this sentence to summarize key points made in the essay?'),
  question(75, 'D', 'Add a sentence where its idea is supported', ['habitat', 'housing', 'community'],
    'Paragraph 4: “Habitat for Humanity.” The final sentence describes workers “working side-by-side with the families that will occupy the residences.”', [
      'The proposed line has two parts: Habitat builds houses and builds communities. Paragraph 4 gives evidence for both. Sentence 3 explains the housing mission, and Sentence 5 shows volunteers and future residents working together.',
      'Put the line after those details so it reads as the point the example illustrates. “Habitat” also has a clear reference because Sentence 2 names the organization.',
      'Paragraph 1 describes difficulties during the presidency. Paragraph 2 introduces Carter’s humanitarian work broadly. Paragraph 3 discusses his international work. Paragraph 4 is the only one that describes Habitat and how its participants work together.',
    ], ['1', '2', '3', '4'], 'This question asks about the preceding passage as a whole. Upon reviewing notes for this essay, the writer comes across the following true statement: “Habitat does more than build houses: it builds communities.” If the writer were to use this sentence, the most logical place to add it would be at the end of Paragraph:'),
];
