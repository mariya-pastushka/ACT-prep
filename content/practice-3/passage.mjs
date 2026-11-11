const fragment = (id, en, ru, text, questionAfter) => ({ id, en, ru, text, questionAfter });

const paragraphs = [
  [
    fragment('reputation', 'Snakes’ reputation', 'Репутация змей', `Throughout much of history, snakes have had {{31|a reputation for being more deadly then}} they actually are.`),
    fragment('snake-in-grass', '“A snake in the grass”', 'Выражение “a snake in the grass”', `Negative associations abound: a "snake in the grass" is a seemingly innocent person intent on causing harm.`, 32),
    fragment('snake-charmer', '“A snake charmer”', 'Выражение “a snake charmer”', `A "snake charmer" uses flattery to distract you from his shady intent.`),
    fragment('references', 'Popular references', 'Упоминания змей', `Nearly every {{33|reference to a snake that is popular}} in modern society bears this negative connotation.`),
    fragment('thesis', 'The author’s main claim', 'Главный тезис автора', `Despite this perception, the snake, {{34|with its}} ugly, slimy appearance, is one of the most unjustly maligned creatures on the planet.`),
  ],
  [
    fragment('rarely-dangerous', 'The claim about danger', 'Тезис об опасности', 'Snakes are only rarely dangerous to humans.'),
    fragment('fangs-and-prey', 'Fangs and examples of prey', 'Клыки и примеры добычи', `Their {{35|fangs,}} so intimidating when the snakes are hissing, are designed not to attack people but to hold small {{36|prey;}} small rodents, birds, insects, etc.`),
    fragment('backyard', 'Large snakes and backyard snakes', 'Крупные змеи и змеи во дворе', 'Only exceptionally large snakes, like pythons or anacondas, pose a real threat. Most of the time, the typical snake you encounter in your backyard is more afraid of you than you are of it and will gladly avoid any contact with you.'),
  ],
  [
    fragment('provoked', 'When snakes attack', 'При каком условии змеи нападают', `Poisonous snakes—such as rattlesnakes, vipers, and cobras—are most frightening to people, but {{37|they attack if they are only provoked.}} While certainly venomous, these snakes pose a threat mainly to smaller animals.`),
    fragment('statistic', 'The bite statistic', 'Статистика укусов в тексте', 'Of the 5 million snake bites that occur each year to humans around the world, only about 2.5 percent prove fatal.', 38),
    fragment('treatment', 'The treatment sentence', 'Предложение о лечении', `Prompt treatment with one of the available antivenoms {{39|do much}} to ensure the victim's survival.`),
    fragment('concession', 'The last sentence of paragraph 3', 'Последнее предложение абзаца 3', `Although you may get an infection at the wound site, you can be effectively treated, {{40|seeing as}} you are still shaken from the encounter, you will survive.`),
  ],
  [
    fragment('nuisance', 'How people see snakes', 'Как люди относятся к змеям', `Why put up with snakes at all? Even if they don't normally kill humans, most people still {{41|considering them a nuisance and avoiding}} them like the plague.`),
    fragment('benefit', 'How snakes help', 'Польза змей', 'Individuals who dislike snakes for this reason do not appreciate the great service snakes do for humanity. The typical diet of a snake includes small rodents like rats, mice, gophers, and prairie dogs, as well as lizards, birds, fish, and insects.'),
    fragment('without-snakes', 'What would happen without snakes', 'Что случилось бы без змей', `We may not like {{42|snakes, if they}} were mysteriously wiped out of existence, however, we would be virtually overrun with other vermin that would spread disease and filth.`),
  ],
  [
    fragment('ending', 'The conclusion', 'Заключение', `So, next time you hear about someone putting down snakes, stand up for our legless friends. {{43|These snakes in the grass help us more than we might think.}}`),
  ],
];

export const passage = {
  title: 'Give a Snake a Break',
  source: 'Passage and key transcribed from the supplied screenshots. Questions and choices follow the supplied text.',
  paragraphs,
};

export const sourceRefs = Object.fromEntries(paragraphs.flatMap((paragraph, index) =>
  paragraph.map(({ id, en, ru }) => [id, {
    id: `passage-${id}`,
    en: `Paragraph ${index + 1} · ${en}`,
    ru: `Абзац ${index + 1} · ${ru}`,
  }]),
));
