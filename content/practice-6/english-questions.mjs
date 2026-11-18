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
  question(1, 'D', 'Prepositions in fixed expressions', ['audience'],
    '“Although many associate it by older women, crocheting can be a fun hobby for people of both genders and all ages.”', [
      'Here “it” refers to crocheting. The sentence says people connect crocheting with older women in their minds. The standard expression is “associate something with someone or something,” so D gives “associate it with older women.”',
      'Read the verb, object, and preposition together. In “People associate scarves with winter,” the two things linked are scarves and winter.',
      'A uses “by,” which could introduce an agent in another construction. B uses “to,” and C repeats “by.” In this sentence all three miss the usual expression “associate X with Y.”',
    ], ['NO CHANGE', 'to', 'by', 'with']),
  question(2, 'F', 'Concision and parallel meaning', ['audience'],
    '“crocheting can be a fun hobby for people of both genders and all ages.”', [
      'F keeps a complete statement about the people who can enjoy crocheting. “Both genders” and “all ages” give two separate kinds of information about them, and the sentence connects those categories with “and.”',
      'Read each choice with the words after the underline. Choose the wording that carries both ideas without repeating a category or disrupting the flow into “and all ages.”',
      'G adds a gloss after “both genders.” H repeats the same category with “male and female people of both genders.” J repeats the category several times. The additions do not tell the reader anything the sentence needs.',
    ], ['NO CHANGE', 'for people of both genders, masculine and feminine,', 'for male and female people of both genders', 'for people of both genders, both males and females, both genders']),
  question(3, 'C', 'Relevance of a proposed sentence', ['definition', 'hobby', 'learn', 'transition'],
    '“you’ll have a hobby for life.” / “crocheting is an easy hobby to pick up.”', [
      'The first paragraph introduces crocheting as a hobby. The next paragraph explains how beginners can learn it. C identifies why the proposed historical example does not fit this essay’s focus on learning and enjoying the hobby.',
      'The prompt already says the statement is true. Judge what the sentence would do here. A detail about earning a living during a famine would start a different discussion from the one the essay develops.',
      'A treats international history as essential to the essay. B values the author’s historical knowledge without showing relevance. D gives a claim about emigration, which supplies no reason to reject the sentence at this point.',
    ], [
      'Yes, because it is essential to know when crocheting became internationally prominent and how it did so.',
      'Yes, because the reference to the Great Irish Potato Famine demonstrates that the author is conscious of historical events.',
      'No, because the reference to the Great Irish Potato Famine is not relevant to the main topic of this essay.',
      'No, because many people who left Ireland in 1846 brought crocheting with them to the United States and Australia.',
    ], 'At this point, the author is considering adding the following true statement: Irish nuns helped save lives with crocheting when they used it as a way to make a living during the Great Irish Potato Famine of 1846. Should the writer add this sentence here?'),
  question(4, 'F', 'Irregular participles and passive meaning', ['learn'],
    '“Time-honored and easily taught to all, crocheting is an easy hobby to pick up.”', [
      'The opening phrase describes crocheting as a skill that can be taught to anyone. “Taught” is the past participle of “teach,” which is the form you need for that passive meaning. F keeps “taught.”',
      'Expand the phrase to “Crocheting can easily be taught to anyone.” You can hear which verb form belongs after “be.” The irregular forms are “teach, taught, taught.”',
      'G uses the active present form “teaches.” H and J use “taughted” and “teached,” which are not standard forms of “teach.”',
    ], ['NO CHANGE', 'teaches', 'taughted', 'teached']),
  question(5, 'C', 'Completing a clause introduced by once', ['stitches'],
    '“Instructional books are readily available, and once you’ve learned a few basic stitches. Picking up the more advanced ones is a snap.”', [
      '“Once you’ve learned a few basic stitches” gives the condition for what follows. “Picking up the more advanced ones is a snap” supplies the main idea. C joins these parts with a comma and uses lowercase “picking” in the middle of the sentence.',
      'Look at the part after “and” as its own unit. “Once you’ve practiced, the steps are easy” works because “the steps are easy” finishes the thought started by “once.”',
      'A ends the “once” clause with a period and leaves it without its main clause. B incorrectly treats the two parts as independent clauses on either side of a semicolon. D uses “since,” leaving the second part with an additional dependent clause instead of a main one.',
    ], ['NO CHANGE', 'stitches; picking', 'stitches, picking', 'stitches since picking']),
  question(6, 'H', 'Removing repetition and checking the join', ['patterns'],
    '“you can purchase store-bought books that detail that tell you exactly how to make the projects that interest you.”', [
      'H gives “you can buy pattern books that tell you exactly how to make the projects that interest you.” It names the right kind of book and fits the words “that tell you,” which are outside the underline.',
      'Read at least a few words on both sides of a replacement. Here “buy pattern books” already tells the reader what to get, and the remaining clause explains what those books do.',
      'A repeats the idea of buying and creates “that detail that tell you.” G adds locations and repeats specificity in “certain specific.” J keeps the information about patterns but adds “store-bought” to the idea of obtaining books. H expresses the intended thought concisely.',
    ], ['NO CHANGE', 'buy books and other pamphlets at craft and book stores detailing certain specific patterns', 'buy pattern books', 'acquire store-bought pattern books']),
  question(7, 'D', 'Possessive pronouns and plural antecedents', ['supplies'],
    '“Even if you want to try several projects, the supplies required for it’s completion are minimal”', [
      'Ask what will be completed. The answer is “several projects,” a plural noun phrase. D gives “their completion,” the completion of those projects.',
      'Replace the pronoun with the noun to test its meaning. Here you could say “the supplies required for the completion of several projects.” The shorter possessive form for “several projects” is “their.”',
      'A means “it is” or “it has.” B is possessive but refers to one thing. C adds an apostrophe to “its,” which is not a standard form.',
    ], ['NO CHANGE', 'its', 'its\'', 'their']),
  question(8, 'F', 'Fewer, less, than, and then', ['cost'],
    '“fifteen dollars will buy you no fewer than three starter kits!”', [
      'You can count individual starter kits, so “fewer” is the standard choice in this comparison. “Than” introduces the number being compared. F gives “no fewer than three,” meaning at least three.',
      'For ACT editing, pair “fewer” with individual items such as “kits” and “less” with a quantity such as “yarn.” Use “than” in comparisons and “then” for a step that comes next.',
      'G has “fewer” but switches “than” to “then.” H uses “less” before the countable kits. J uses both “less” and “then.”',
    ], ['NO CHANGE', 'fewer then', 'less than', 'less then']),
  question(9, 'A', 'Punctuation before a phrase of purpose', ['types'],
    '“by purchasing hooks of different types to vary the size of your stitches.”', [
      '“To vary the size of your stitches” explains why someone would buy different hooks. It belongs directly with “purchasing hooks of different types,” so A keeps the wording with no punctuation between those parts.',
      'Read a purpose phrase with the action it explains. “I bought a smaller hook to make tighter stitches” reads as one connected thought.',
      'B puts a semicolon before a phrase that cannot stand as a sentence. C introduces a colon where the action continues into its purpose. D adds a comma that unnecessarily separates the phrase from the action it explains.',
    ], ['NO CHANGE', 'types;', 'types:', 'types,']),
  question(10, 'G', 'Commas with an added descriptive phrase', ['sizes'],
    '“Crochet hooks are available in all sizes, ranging, from very small to very large, with everything in between.”', [
      '“Crochet hooks are available in all sizes” is complete. The phrase “ranging from very small to very large” adds a description of those sizes. G places one comma before the extra information and keeps “ranging from” together.',
      'Read “ranging from X to Y” as one group. If it adds a range to an already complete sentence, the comma can come before the whole group.',
      'F and J put a comma inside “ranging from.” H uses a semicolon, but “ranging from very small to very large” has no independent subject and finite verb.',
    ], ['NO CHANGE', 'sizes, ranging', 'sizes; ranging', 'sizes ranging,']),
  question(11, 'C', 'Sentence placement and pronoun reference', ['large', 'big-stitches', 'tiny', 'delicate'],
    '“[3] Some are so big that you need to use two strands of yarn.” / “[6] These hooks make big stitches, so you can finish a project with them very quickly.”', [
      'Sentence 6 says “These hooks” and describes big stitches. Sentence 3 is where the paragraph introduces big hooks, so placing 6 immediately after 3 makes the reference clear. The paragraph then turns to tiny hooks in Sentence 4.',
      'Read the order as 1, 2, 3, 6, 4, 5, 7. The large-hook example and its result stay together, and Sentences 4 and 5 stay together as the small-hook example.',
      'A makes “These hooks” seem to refer to small hooks in Sentence 5. B puts it after a general reference to different hooks. D makes it seem to refer to the medium hooks in Sentence 7.',
    ], ['where it is now.', 'after Sentence 1.', 'after Sentence 3.', 'after Sentence 7.'], 'For the sake of the logic and coherence of this paragraph, Sentence 6 should be placed:'),
  question(12, 'H', 'Transitions that connect two paragraphs', ['supplies', 'cost', 'medium', 'transition'],
    '“these are the easiest to manipulate and require only one strand of yarn.” / “crocheting makes a good hobby because it requires only time and patience, not attention or tremendous investment.”', [
      'Paragraph 3 ends with an easy-to-use hook that needs only one strand of yarn. Paragraph 2 has already established that starting is inexpensive. H picks up that simple set of materials and connects it to Paragraph 4’s point that crocheting makes a good hobby.',
      'A transition has two jobs. Read the last sentence above it and the first full idea below it. “With such a simple and inexpensive set of materials” fits the practical setup and the hobby’s appeal.',
      'F opens with a complication and repeats “because” in the sentence. G shifts to project length. J shifts to who crochets, which is introduced in Paragraph 1 and does not connect the two paragraphs here.',
    ], ['NO CHANGE', 'Because it can take a long time to finish a project,', 'With such a simple and inexpensive set of materials,', 'No longer a field dominated primarily by older women,'], 'Given that all the choices are true, which one provides the most effective transition from the preceding paragraph to this one?'),
  question(13, 'D', 'Joining a time clause to a main clause', ['keepsake'],
    '“Also, you have finished a project, you have a cherished keepsake.”', [
      'The sentence means that when you finish the project, you end up with a keepsake. D gives “Also, once you have finished a project, you have a cherished keepsake.” “Once” makes the first part a time clause and the following comma marks its end.',
      'Test the sentence without “Also.” “Once you have finished a project, you have a cherished keepsake” is clear. “Once” tells the reader when the second idea becomes true.',
      'A joins two independent clauses with only a comma. B adds “finally” but leaves the same comma problem. C suggests a contrast with “despite,” even though finishing the project produces the keepsake.',
    ], ['NO CHANGE', 'Also, finally you', 'Also, despite the fact you', 'Also, once you']),
  question(14, 'F', 'Prepositions for specific days and nights', ['winter'],
    '“an afghan to keep you warm on cold winter nights”', [
      'The phrase tells you when the blanket keeps you warm. “On cold winter nights” is a natural expression for those occasions, so F keeps “on.”',
      'Use “on” for nights described as specific kinds of occasions, as in “on Friday night” and “on cold nights.” “At night” is a separate expression for nighttime in general.',
      'G gives “at cold winter nights,” which does not follow the pattern of “at night.” H gives “of,” and J gives “within.” Neither fits the intended time expression.',
    ], ['NO CHANGE', 'at', 'of', 'within']),
  question(15, 'C', 'Checking a proposed purpose against the passage', ['hobby', 'cost', 'delicate', 'keepsake', 'winter'],
    '“you’ll have a hobby for life.” / “you have a cherished keepsake.”', [
      'The essay teaches readers how to begin crocheting and describes why it is enjoyable and what they can make. Its prices refer to buying starter supplies. The essay gives no information about the selling price or sale of finished goods, so C answers the proposed commercial goal.',
      'Translate the proposed goal into evidence you would expect to see. For commercial potential, look for customers, pricing, sales channels, or demand. Examples of things people can make are useful for a different goal.',
      'A and B name real details about products, materials, and uses. Those details do not establish that the products could be sold. D brings in comparisons with other businesses or hobbies that the essay never makes.',
    ], [
      'Yes, because it gives examples of end products of crocheting and shows the different kinds of materials needed to produce a wide range of products.',
      'Yes, because it discusses the supplies necessary to create crocheted products, and it shows the usefulness of many of them during the cold winter months.',
      'No, because it does not mention the market value of crocheted products or how one might go about selling them.',
      'No, because it describes other industries and hobbies that would be more commercially successful.',
    ], 'Suppose the writer’s goal had been to write an essay that demonstrates the commercial potential of crocheting. Would this essay successfully accomplish that goal? This question asks about the preceding passage as a whole.'),
];
