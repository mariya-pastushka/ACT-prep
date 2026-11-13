function fragment(id, en, ru, text, questionAfter) {
  return { id, en, ru, text, questionAfter };
}

const paragraphs = [
  [
    fragment('hurston-contrasts', 'The opening contrasts', 'Противопоставления во вступлении', "Zora Neale Hurston proves to be a study in contrasts: a black writer reaching a white audience, a woman struggling in a man's profession, an independent thinker living in a conformist era."),
    fragment('hurston-now', 'The narrator’s present', 'Настоящее время автора', '{{46|Now,}} almost 50 years since her death, her hard work and fabulous novels still have much to teach the modern audience.'),
    fragment('hurston-faced', 'What Hurston did', 'Два действия Хёрстон', 'She overcame the challenges she {{47|faced and}} demonstrated that perseverance makes anything possible.'),
  ],
  [
    fragment('hurston-personality', 'Hurston’s personality', 'Характер Хёрстон', 'Hurston ascribed much of her {{48|deeply individualistic}} personality to the experience of growing up in Eatonville, Florida.'),
    fragment('hurston-town', 'What made the town unique?', 'Что выделяло город?', 'The town was unique in that it was {{49|particularly hot in the summer, but mild at other times of the year.}}'),
    fragment('hurston-community', 'Freedom and independence', 'Свобода и независимость', 'Hurston always said growing up in a community totally separate from the larger white society allowed her a freedom {{50|that}} independence not available to everyone in the south.'),
  ],
  [
    fragment('hurston-studies', 'Sentence 1 · Studies and scholarship', 'Предложение 1 · Учёба и стипендия', '[1] Hurston began her undergraduate studies at Howard University, but her obvious {{51|intelligence and talent}} soon earned her a scholarship to Barnard College in New York City.'),
    fragment('hurston-movement', 'Sentence 2 · The Harlem Renaissance', 'Предложение 2 · Гарлемский ренессанс', '[2] Moving north in the {{52|1920s thrust}} her into the midst of the Harlem Renaissance, a black cultural movement that spawned exceptional achievements in {{53|literature, books, poems, and plays,}} art, and music.'),
    fragment('hurston-early-work', 'Sentence 3 · Developing as a writer', 'Предложение 3 · Становление писательницы', '[3] Interacting with the likes of Langston Hughes, W.E.B. DuBois, Billie Holiday, and Duke Ellington, Hurston {{54|developed}} her skills as a writer and published numerous short stories and poems.', 55),
    fragment('hurston-shift', 'Sentence 4 · The shift to a major work', 'Предложение 4 · Переход к главному произведению', '[4] The most influential work that came to define her career grew out of her attempt to capture the black experience.'),
    fragment('hurston-novel', 'Sentence 5 · The novel is named', 'Предложение 5 · Название романа', '[5] That novel, called Their Eyes Were Watching God, traced three generations of a family living in Eatonville.'),
    fragment('hurston-dialect', 'Sentence 6 · Dialect and criticism', 'Предложение 6 · Диалект и критика', '[6] Her {{56|interesting}} representation of the southern dialect caused her Harlem Renaissance contemporaries to belittle the work for what they saw as its propagation of inaccurate stereotypes.'),
    fragment('hurston-project', 'Sentence 7 · What she stayed true to', 'Предложение 7 · Чему она осталась верна', '[7] Hurston, however, remained true to {{57|it,}} convinced that the accuracy of her representation would ultimately prevail over the political pressures her peers sought to inflict upon her.', 58),
  ],
  [
    fragment('hurston-history', 'History’s verdict', 'Оценка истории', 'History has shown that Hurston was right.'),
    fragment('hurston-critics', 'Modern critics', 'Современные критики', '{{59|However, modern}} critics admire her authentic and skillful representation of the language as well as her realistic portrayal of daily life in the early twentieth century.'),
    fragment('hurston-legacy', 'How Hurston is regarded', 'Как оценивают Хёрстон', 'She is universally {{60|applauded, as one of the best writers of her era,}} ranked with Toni Morrison, Maya Angelou, and Alice Walker as one of the most important African-American writers of all time.'),
  ],
];

export const passage = {
  title: 'Zora Neale Hurston, Independent Woman',
  source: 'Passage and answer key transcribed from the supplied screenshots. Tested wording and punctuation are preserved.',
  paragraphs,
};

export const sourceRefs = Object.fromEntries(paragraphs.flatMap((paragraph, index) =>
  paragraph.map(({ id, en, ru }) => [id, {
    id: `passage-${id}`,
    en: `Paragraph ${index + 1} · ${en}`,
    ru: `Абзац ${index + 1} · ${ru}`,
  }]),
));
