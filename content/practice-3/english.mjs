import { sourceRefs } from './passage.mjs';

const edit = 'Choose the best replacement for the underlined portion.';
const wholePassage = 'This question asks about the preceding passage as a whole. ';

function question(id, key, topic, sources, evidence, explanation, choices, prompt = edit) {
  const labels = id % 2 ? 'ABCD' : 'FGHJ';
  return {
    id, key, topic, section: 'english', prompt, evidence, explanation,
    evidenceSources: sources.map(source => sourceRefs[source]),
    choices: choices.map((text, i) => ({ label: labels[i], text })),
  };
}

export const questions = [
  question(31, 'B', 'Comparisons with than', ['reputation'],
    '…a reputation for being more deadly then they actually are.',
    [
      'B compares how deadly people think snakes are with how deadly snakes actually are. The comparison is “more deadly than they actually are.”',
      'Use than after a comparative such as more deadly, faster, or less common. Then tells you what happened next or when it happened. Compare “This snake is longer than that one” with “We looked, then we left.”',
      'A and D use then where the sentence needs than. C uses most deadly, a superlative, in a sentence that is comparing two degrees of danger.',
    ], ['NO CHANGE', 'a reputation for being more deadly than', 'a reputation as the most deadly than', 'the deadliest reputation then']),
  question(32, 'F', 'Relevance to the surrounding sentences', ['snake-in-grass', 'snake-charmer'],
    'Negative associations abound: a "snake in the grass" is a seemingly innocent person intent on causing harm. … A "snake charmer" uses flattery to distract you from his shady intent.',
    [
      'The sentences on either side explain expressions that connect snakes with deception. F gives another expression that fits the pattern: snake oil is a fake remedy sold with misleading promises.',
      'Check the job of the sentences around the gap. Here they give examples of negative associations in language. A new example should show another expression that carries the same kind of association.',
      'G discusses snake behavior, H explains where snakes live, and J describes a trend in pet ownership. Those ideas are about snakes themselves, while this part of the paragraph is about the meanings of expressions.',
    ], ['Snake oil refers to fake medicine that promises impossible results.', 'Most snakes are passive creatures that will never cause you injury.', 'Snakes are carnivorous reptiles that can be found on every continent except Antarctica.', 'Pet snakes have becomes increasingly common over the last decade.'],
    'Given that all the following statements are true, which one provides the most relevant information at this point in the essay?'),
  question(33, 'D', 'Concise wording', ['references'],
    'Nearly every reference to a snake that is popular in modern society bears this negative connotation.',
    [
      'D gives “Nearly every popular reference to a snake in modern society…”. Popular describes reference directly, so the reader can see what is common: the reference to a snake.',
      'A single adjective can often replace “that is + adjective.” Compare “a rule that is simple” with “a simple rule.” Keep the noun and any words the noun needs, such as reference to.',
      'A is longer and places “that is popular” next to snake, which can blur what popular describes. B still uses “that is” and sounds awkward. C adds the vague “they have” and changes popular to famous.',
    ], ['NO CHANGE', 'reference that is popular about a snake', 'famous reference they have about a snake', 'popular reference to a snake']),
  question(34, 'F', 'Possessive its', ['thesis'],
    '…the snake, with its ugly, slimy appearance, is one of the most unjustly maligned creatures on the planet.',
    [
      'Its tells us whose appearance this is: the snake’s. “With its ugly, slimy appearance” already works, so keep it as written (F).',
      'Its shows possession and has no apostrophe. It’s means it is or it has. Try expanding the contraction: “with it is ugly, slimy appearance” does not make sense. Compare “The snake shed its skin” and “It’s hiding.”',
      'G’s who’s means who is or who has and leaves the description incomplete. H puts it’s before appearance. J adds an apostrophe to its, a form that already shows possession.',
    ], ['NO CHANGE', "who's", "sporting it's", "with its'"]),
  question(35, 'A', 'Paired commas around extra information', ['fangs-and-prey'],
    'Their fangs, so intimidating when the snakes are hissing, are designed not to attack people but to hold small prey…',
    [
      'A keeps the comma after fangs. It works with the comma after hissing to mark the extra description “so intimidating when the snakes are hissing.”',
      'Take out the extra description and read the core: “Their fangs are designed … to hold small prey.” The subject fangs and its verb are designed now sit together. Example: “The door, heavy and old, was hard to open.”',
      'B adds being and removes the opening comma. C adds an extra subject and verb with “so they are.” D adds “they are.” Both C and D interrupt the original subject–verb structure.',
    ], ['NO CHANGE', 'fangs being', 'fangs, so they are', 'fangs, they are']),
  question(36, 'H', 'A colon introducing examples', ['fangs-and-prey'],
    '…are designed not to attack people but to hold small prey; small rodents, birds, insects, etc.',
    [
      'H places a colon after prey. The words after it give examples of small prey: rodents, birds, and insects.',
      'A colon can introduce a list after a complete clause. The full sentence up to “hold small prey” can stand on its own. Compare “We packed three things: water, food, and a map.”',
      'F keeps a semicolon before a list that has no independent clause. G gives a comma that does not clearly introduce the examples. J leaves no punctuation between prey and the examples.',
    ], ['NO CHANGE', 'prey,', 'prey:', 'prey']),
  question(37, 'C', 'Pronoun clarity and the position of only', ['provoked'],
    '…are most frightening to people, but they attack if they are only provoked. While certainly venomous, these snakes pose a threat mainly to smaller animals.',
    [
      'C names the target of the attack, humans, and puts only next to the condition “if provoked.” The sentence says that, in the writer’s argument, provocation is required for an attack on humans.',
      'Put only close to the words it limits. “I call only if it’s urgent” makes urgency a condition for calling. “If I only call” puts the focus on what I do, calling, instead of on when I do it.',
      'A leaves the target unstated and puts only inside the condition, next to provoked. B makes the snakes the ones doing the provoking and leaves them unclear. D also uses a vague them and drops the explicit restriction only.',
    ], ['NO CHANGE', 'they will provoke and attack them.', 'they will attack humans only if provoked.', 'if provoked, they will attack them.']),
  question(38, 'H', 'The function of a statistic', ['provoked', 'statistic'],
    '…these snakes pose a threat mainly to smaller animals. Of the 5 million snake bites that occur each year to humans around the world, only about 2.5 percent prove fatal.',
    [
      'H identifies the job of the numbers in the essay. The percentage gives specific support for the writer’s claim that the danger to people is more limited than people assume.',
      'When a question asks what a deletion would lose, name the type of information and what it does. Here the detail is a statistic, and it supports a claim. Compare “Few buses were late” with “Only 2 out of 100 buses were late.”',
      'F reverses the writer’s point. G treats “around the world” as a list of locations, but the sentence gives no such list. J calls the detail distracting even though it directly serves the argument.',
    ], ['scientific proof that snakes are too dangerous to coexist with humans.', 'an example of the various locations where most fatalities take place.', 'a specific statistic to support a previous claim.', 'excessive detail that distracts the reader from the broader message of the passage.'],
    'The writer is considering deleting the preceding sentence from this paragraph. If the writer made this deletion, the paragraph would primarily lose:'),
  question(39, 'B', 'Subject–verb agreement with can', ['treatment'],
    "Prompt treatment with one of the available antivenoms do much to ensure the victim's survival.",
    [
      'B gives “Prompt treatment … can do much.” The subject is the singular treatment. “With one of the available antivenoms” explains the kind of treatment.',
      'Find the subject by shortening the sentence: “Treatment can do much.” After the modal can, use the base form do with any subject. Compare “Treatment does help” and “Treatment can help.”',
      'A’s do and C’s are do not agree with singular treatment. D also uses the plural have. The nearby plural antivenoms is inside the with-phrase, so it does not control the main verb.',
    ], ['NO CHANGE', 'can do much', 'are able to do much', 'have much ability']),
  question(40, 'H', 'Concession with even if', ['concession'],
    'Although you may get an infection at the wound site, you can be effectively treated, seeing as you are still shaken from the encounter, you will survive.',
    [
      'H gives “you can be effectively treated, and even if you are still shaken from the encounter, you will survive.” And joins the two ideas. Even if introduces an obstacle that does not change the outcome in the sentence.',
      'Even if means that the main statement still holds under a possible condition. Example: “We’ll go even if it rains.” Seeing as and because introduce reasons.',
      'F and G treat being shaken as a cause, which does not fit the meaning. J gives however without the sentence boundary needed to join the two complete thoughts, and it leaves out the conditional link.',
    ], ['NO CHANGE', 'but because', 'and even if', 'however']),
  question(41, 'B', 'Parallel present-tense verbs', ['nuisance'],
    '…most people still considering them a nuisance and avoiding them like the plague.',
    [
      'B gives the plural subject most people two parallel main verbs in the simple present: “consider … and avoid …”. The writer is describing a general attitude and habit.',
      'Read each verb with the subject: “Most people consider them a nuisance” and “Most people avoid them.” In this sentence, the two -ing forms on their own cannot serve as the main verbs.',
      'A has no finite main verb for most people. C mixes “considering” with “avoid.” D shifts to the past and turns avoidance into a phrase about the nuisance, instead of stating what people do.',
    ], ['NO CHANGE', 'consider them a nuisance and avoid', 'considering them a nuisance and avoid', 'considered them a nuisance to avoid']),
  question(42, 'J', 'Sentence boundaries and semicolons', ['without-snakes'],
    'We may not like snakes, if they were mysteriously wiped out of existence, however, we would be virtually overrun with other vermin…',
    [
      'J separates two complete thoughts: “We may not like snakes” and “if they were … wiped out of existence, however, we would be … overrun.” The second thought has its own main clause, “we would be … overrun.”',
      'A comma alone cannot join two independent clauses. A semicolon can separate these closely related thoughts. The if-clause stays with the second thought and sets the condition for the result.',
      'F leaves the comma splice. G changes the plural snakes to a possessive form with no noun to possess and still lacks a boundary. H drops the conditional if and joins the clauses with a comma.',
    ], ['NO CHANGE', "snake's if they", 'snakes, they', 'snakes; if they']),
  question(43, 'A', 'Connecting the ending to the opening', ['snake-in-grass', 'ending'],
    'Opening: a "snake in the grass" is a seemingly innocent person intent on causing harm. / Ending: These snakes in the grass help us more than we might think.',
    [
      'A keeps the ending that repeats “snakes in the grass.” In the opening it is a negative expression about a person. The ending brings the words back to describe actual snakes and remind the reader that they can help.',
      'Look for a phrase or image that appears in both places. Repeating it with a new meaning can show how the essay has changed the reader’s view of the subject.',
      'B turns to pets. C introduces a call to reduce bites. D mentions the useful point about rats from paragraph 4, but it misses the direct echo of the opening expression.',
    ], ['NO CHANGE', 'Snakes make excellent pets.', "Let's reduce the incidence of snake bites around the world.", "Wouldn't you rather see a snake in your yard than a rat?"],
    'The writer wants to provide a sentence here that will tie the conclusion of the essay to its beginning. Which choice does that best?'),
  question(44, 'G', 'The thesis of an essay', ['references', 'thesis', 'benefit'],
    'Despite this perception, the snake, with its ugly, slimy appearance, is one of the most unjustly maligned creatures on the planet.',
    [
      'G identifies the thesis. “Unjustly maligned” means unfairly spoken about or criticized. This sentence states the idea the rest of the essay develops: snakes have a worse reputation than they deserve.',
      'A thesis makes the main claim, and the following paragraphs give reasons for it. Here the writer discusses the danger people associate with snakes and then explains how snakes help control other animals.',
      'F focuses on tone and misses the claim. H would simply restate the negative examples, while “Despite this perception” signals a turn to the writer’s own view. J mentions a list the sentence never gives.',
    ], ['adds a bit of sarcasm to a rather humorous introduction.', 'identifies the overall point of the entire passage.', 'summarizes the list of examples previously provided by the author.', 'provides a list of animals more useful than the snake.'],
    wholePassage + 'The writer is considering deleting the last sentence of the first paragraph of the essay. If the writer were to make this deletion, the essay would primarily lose a statement that:'),
  question(45, 'C', 'The author’s overall purpose', ['thesis', 'rarely-dangerous', 'benefit', 'ending'],
    'Snakes are only rarely dangerous to humans. … These snakes in the grass help us more than we might think.',
    [
      'C best describes the essay’s main focus. The writer argues that people overestimate the danger snakes pose and overlook their benefits. The author does mention bites and exceptions within that broader argument.',
      'To test a proposed goal, compare it with the thesis and conclusion, then check how the body paragraphs support them. An essay can mention a threat while using it to make a different overall point.',
      'A uses one statistic to describe the whole essay. B mistakes stereotypes the author challenges for the goal of the essay. D identifies one supporting detail about diet, while C captures the broader claim about danger.',
    ], ['Yes, because the author gives specific statistical evidence that proves snake bites happen around the world.', 'Yes, because the essay focuses on many of the negative stereotypes associated with snakes.', 'No, because the essay primarily focuses on the fact that snakes are not harmful to humans.', 'No, because the essay points out that snakes feed primarily on rodents and other small animals.'],
    wholePassage + "Suppose the writer's goal had been to write an essay focusing on the various ways in which humans were threatened by snakes. Would this essay fulfill that goal?"),
];
