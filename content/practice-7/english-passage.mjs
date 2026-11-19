function fragment(id, en, ru, text, questionAfter) {
  return { id, en, ru, text, questionAfter };
}

const paragraphs = [
  [
    fragment('wonder', 'Sentence 1 · The narrator’s favorite painting', 'Предложение 1 · Любимая картина рассказчицы', '[1] How can I describe the wonder I felt the first time I saw my favorite painting, Georges Seurat’s A Sunday on La Grande Jatte?'),
    fragment('expectation', 'Sentence 2 · A visit she had not expected', 'Предложение 2 · Визит, на который она не рассчитывала', '[2] I had admired the work for years in art books, but I never thought I {{16|saw}} the actual painting, which was housed in Chicago, many miles from where I lived.'),
    fragment('meeting', 'Sentence 3 · Meeting another admirer', 'Предложение 3 · Знакомство с другой поклонницей картины', '[3] I finally got my chance {{17|to}} when I met someone else who loved the painting as much as I did.'),
    fragment('trip', 'Sentence 4 · Making travel plans', 'Предложение 4 · Решение о поездке', '[4] We both had three days off at the same time, so we decided to make a road trip to Chicago so we could see the painting in all {{18|it’s}} grandeur.'),
    fragment('departure', 'Sentence 5 · Setting off', 'Предложение 5 · Отправление в путь', '[5] We packed our bags, {{19|jumped in the car, and headed}} on our way toward Chicago.', 20),
  ],
  [
    fragment('size-subject', 'Sentence 1 · What first struck the narrator', 'Предложение 1 · Что первым поразило рассказчицу', '[1] The first thing that struck me as we entered the room where the painting was {{21|displayed;}} was the size of the painting.'),
    fragment('canvas', 'Sentence 2 · A general fact about canvases', 'Предложение 2 · Общий факт о холстах', '[2] A common size for canvases is 24 by 36 inches.'),
    fragment('enormous', 'Sentence 3 · The actual painting’s size', 'Предложение 3 · Размер самой картины', '[3] It was enormous!'),
    fragment('wall', 'Sentence 4 · The painting on the wall', 'Предложение 4 · Картина на стене', '[4] It covered a large part of an even larger wall.'),
    fragment('dots', 'Sentence 5 · The technique behind the painting', 'Предложение 5 · Техника создания картины', '[5] The painting’s size amazed me since it was painted with dots, a technique called pointillism.'),
    fragment('task', 'Sentence 6 · The difficulty of the task', 'Предложение 6 · Сложность работы', '[6] To create a painting of such magnitude using this technique seemed an almost impossible {{22|task.}}'),
    fragment('achievement', 'Sentence 7 · Seurat’s achievement', 'Предложение 7 · Достижение Сёра', '[7] Seurat had done it, though, and had made it look easy!', 23),
  ],
  [
    fragment('beauty', 'The transition from size to beauty', 'Переход от размера к красоте', '{{24|Even more impressive, however, was}} the beauty of the painting.'),
    fragment('distance', 'The view from a distance', 'Вид издалека', 'Viewed from a distance, the colors looked muted, capturing the idyllic mood of a summer day in the park.'),
  ],
  [
    fragment('approach', 'The view on approaching the painting', 'Что изменилось при приближении', '{{25|When I approached the painting, though,}} its colors exploded into myriad hues, illustrating the artist’s skill in combining colors to create a mood.'),
    fragment('white', 'A contrast between distant and close views', 'Сравнение вида издалека и вблизи', 'Even the parts of the painting that appeared white from a distance were vibrantly multicolored when viewed up close.', 26),
    fragment('viewers', 'Who sat and stared at the painting', 'Кто сидел и смотрел на картину', 'The effect was incredible; {{27|he}} sat and stared at the painting in wonder for a good portion of the afternoon.', 28),
  ],
  [
    fragment('sights', 'The highlight of the trip', 'Главное впечатление от поездки', 'My friend and I saw many other {{29|sights,}} on our trip to Chicago, but the best part by far was being able to see our favorite work of art.'),
    fragment('print', 'The memory and the souvenir print', 'Воспоминание и купленная репродукция', 'The image is forever imprinted in my mind {{30|at the museum gift shop}} even when I’m not looking at the souvenir print I bought.'),
  ],
];

export const passage = {
  title: 'Seurat’s Masterpiece',
  source: 'The passage and answer key were transcribed from the supplied screenshots. Tested wording and punctuation are preserved. A page interruption inside the sentence beginning “The effect was incredible” is removed.',
  paragraphs,
};

export const sourceRefs = Object.fromEntries(paragraphs.flatMap((paragraph, index) =>
  paragraph.map(({ id, en, ru }) => [id, {
    id: `passage-${id}`,
    en: `Paragraph ${index + 1} · ${en}`,
    ru: `Абзац ${index + 1} · ${ru}`,
  }]),
));
