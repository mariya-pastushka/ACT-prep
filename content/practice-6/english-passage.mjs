function fragment(id, en, ru, text, questionAfter) {
  return { id, en, ru, text, questionAfter };
}

const paragraphs = [
  [
    fragment('definition', 'What crocheting is', 'Что такое вязание крючком', 'Crocheting is the art of making fabric by twisting yarn or thread with a hook.'),
    fragment('audience', 'Who can enjoy crocheting', 'Кому подходит вязание крючком', 'Although many associate it {{1|by}} older women, crocheting can be a fun hobby {{2|for people of both genders}} and all ages.'),
    fragment('hobby', 'A hobby for life', 'Увлечение на всю жизнь', 'Once you start crocheting, you won’t be able to put down the hook; you’ll have a hobby for life.', 3),
  ],
  [
    fragment('learn', 'An easy hobby to learn', 'Увлечение, которое легко освоить', 'Time-honored and easily {{4|taught}} to all, crocheting is an easy hobby to pick up.'),
    fragment('stitches', 'From basic to advanced stitches', 'От простых петель к сложным', 'Instructional books are readily available, and once you’ve learned a few basic {{5|stitches. Picking}} up the more advanced ones is a snap.'),
    fragment('patterns', 'Books that explain the patterns', 'Книги, в которых объясняют схемы', 'Once you learn how to crochet, you can {{6|purchase store-bought books that detail}} that tell you exactly how to make the projects that interest you.'),
    fragment('supplies', 'Several projects and the supplies they need', 'Несколько изделий и материалы для них', 'Even if you want to try several projects, the supplies required for {{7|it’s}} completion are minimal; all you need are a crochet hook, yarn, and a pair of scissors.'),
    fragment('cost', 'How many kits fifteen dollars buys', 'Сколько наборов можно купить за пятнадцать долларов', 'You don’t need to worry about making a big investment, either; fifteen dollars will buy you no {{8|fewer than}} three starter kits!'),
  ],
  [
    fragment('types', 'Sentence 1 · Why use different hooks?', 'Предложение 1 · Зачем нужны разные крючки', '[1] As you grow more proficient, you can expand your supplies by purchasing hooks of different {{9|types}} to vary the size of your stitches.'),
    fragment('sizes', 'Sentence 2 · The range of hook sizes', 'Предложение 2 · Диапазон размеров крючков', '[2] Crochet hooks are available in all {{10|sizes, ranging,}} from very small to very large, with everything in between.'),
    fragment('large', 'Sentence 3 · Large hooks and two strands', 'Предложение 3 · Большие крючки и две нити', '[3] Some are so big that you need to use two strands of yarn.'),
    fragment('tiny', 'Sentence 4 · Very small hooks', 'Предложение 4 · Очень маленькие крючки', '[4] Other hooks are very tiny, so small that you must use thread.'),
    fragment('delicate', 'Sentence 5 · What small hooks make', 'Предложение 5 · Что вяжут маленькими крючками', '[5] These hooks are suitable for making smaller, more delicate things such as lace doilies, tablecloths, and bedspreads.'),
    fragment('big-stitches', 'Sentence 6 · The benefit of large stitches', 'Предложение 6 · Зачем нужны крупные петли', '[6] These hooks make big stitches, so you can finish a project with them very quickly.'),
    fragment('medium', 'Sentence 7 · The best size for beginners', 'Предложение 7 · Размер крючка для начинающих', '[7] It is best to start with hooks that are medium in size; these are the easiest to manipulate and require only one strand of yarn.', 11),
  ],
  [
    fragment('transition', 'A transition from materials to benefits', 'Переход от материалов к преимуществам', '{{12|Because it seems like there are a million hooks to keep track of,}} crocheting makes a good hobby because it requires only time and patience, not attention or tremendous investment.'),
    fragment('relax', 'Crocheting while doing other things', 'С чем можно совмещать вязание', 'You can crochet while watching television, listening to music, or visiting with other people. It is fun and relaxing and allows you to express your creative side in an easy way.'),
    fragment('keepsake', 'When the project becomes a keepsake', 'Когда готовая вещь становится памятной', '{{13|Also, you}} have finished a project, you have a cherished keepsake.'),
    fragment('winter', 'Using and enjoying the finished items', 'Как используют готовые изделия', 'Whether you have made an afghan to keep you warm {{14|on}} cold winter nights or a lace tablecloth to add a touch of elegance to your dining room, your creation is sure to be cherished for a long time to come.'),
  ],
];

export const passage = {
  title: 'Crocheting Makes a Good Hobby',
  source: 'The passage and answer key were transcribed from the supplied screenshots. The original wording of the tested phrases is preserved.',
  paragraphs,
};

export const sourceRefs = Object.fromEntries(paragraphs.flatMap((paragraph, index) =>
  paragraph.map(({ id, en, ru }) => [id, {
    id: `passage-${id}`,
    en: `Paragraph ${index + 1} · ${en}`,
    ru: `Абзац ${index + 1} · ${ru}`,
  }]),
));
