function fragment(id, en, ru, text, questionAfter) {
  return { id, en, ru, text, questionAfter };
}

const paragraphs = [
  [
    fragment('carter-opening', 'The opening sentence', 'Первое предложение', 'Everyone has heard of Jimmy Carter.'),
    fragment('carter-presidency', 'Years in office and the main clause', 'Годы президентства и главная часть', 'As president of the United States from 1977 to {{61|1981. He}} oversaw a particularly turbulent time in American history.'),
    fragment('carter-enemy', 'The list of difficulties and the name of the potential enemy', 'Список трудностей и название потенциального противника', 'Americans taken hostage in the Middle East, serious inflation woes, major gasoline shortages around the country, and a tenuous relationship with a potential {{62|enemy—the Soviet Union—}} are hardly the stuff of pleasant memories.'),
  ],
  [
    fragment('carter-office', 'The most powerful office and Carter’s later work', 'Высший государственный пост и дальнейшая работа Картера', 'Yet even though Carter {{63|held Americas most,}} powerful office, he will probably be remembered more for the work {{64|he}} has done since he left the White House.'),
    fragment('carter-underprivileged', 'The people Carter wants to help', 'Люди, которым Картер хочет помочь', 'His record on humanitarian issues around the world sets him apart as a caring, dedicated person who wants to see the {{65|underprivileged, those of low economic or social status,}} benefit from the great wealth, power, and generosity of this country.'),
  ],
  [
    fragment('carter-middle-east', 'Carter’s focus on peace in the Middle East', 'Тема мира на Ближнем Востоке', 'One of the major issues Carter has focused on throughout his career is peace in the Middle East.'),
    fragment('carter-energy', 'Energy policy, dependence, and the peace treaty', 'Энергетическая политика, зависимость и мирный договор', 'He {{66|questioned}} a national energy policy designed to reduce American dependence long before it was popular to do so {{67|on foreign oil}} and brokered a peace treaty between Israel and Egypt.'),
    fragment('carter-center', 'Human rights and The Carter Center', 'Права человека и Центр Картера', 'Likewise, he was among the first to insist publicly on basic human rights for everyone around the {{68|world, founding}} a non-profit organization, The Carter Center, to work toward that end.'),
    fragment('carter-health', 'Worldwide health care and quality of life', 'Здравоохранение и качество жизни по всему миру', 'In his opinion, this includes extending modern health care to developing nations in order to contain disease and improve quality of life around the {{69|world, in many different countries.}}'),
  ],
  [
    fragment('carter-domestic', 'Sentence 1 · Work in the United States', 'Предложение 1 · Работа в США', '[1] Carter works actively to improve the standard of living {{70|at home here in the United States}} as well.'),
    fragment('carter-habitat', 'Sentence 2 · The Carters support Habitat for Humanity', 'Предложение 2 · Семья Картеров поддерживает Habitat for Humanity', '[2] He and his wife Roslyn are enthusiastic supporters of Habitat for Humanity.'),
    fragment('carter-housing', 'Sentence 3 · Habitat builds affordable homes', 'Предложение 3 · Habitat строит доступное жильё', '[3] This volunteer-based organization devotes itself to building affordable but quality housing for those who otherwise might not be able to buy a home.'),
    fragment('carter-abroad', 'Sentence 4 · The transition from abroad to home', 'Предложение 4 · Переход от зарубежной работы к работе в США', '[4] However, Carter does not {{71|focus abroad all his efforts.}}'),
    fragment('carter-community', 'Sentence 5 · Volunteers and families work together', 'Предложение 5 · Волонтёры и семьи работают вместе', '[5] Community workers come together on their own free time to construct, paint, and landscape simple homes, working side-by-side with the families that will occupy the residences.', 72),
  ],
  [
    fragment('carter-service', 'The conclusion about public service', 'Вывод о работе на благо общества', 'For all these reasons, Carter deserves respect for dedicating his career to public service.'),
    fragment('carter-philanthropy', 'The final assessment of Carter’s philanthropy', 'Итоговая оценка благотворительной работы Картера', 'Everyone can {{73|agree for}} his impressive philanthropy and acknowledge {{74|his obvious devotion to all of humanity.}}'),
  ],
];

export const passage = {
  title: 'Jimmy Carter, Humanitarian',
  source: 'Passage and answer key transcribed from the supplied screenshots. In Question 62, the dash marks are shown as em dashes for clarity. The original number and placement of the marks are preserved.',
  paragraphs,
};

export const sourceRefs = Object.fromEntries(paragraphs.flatMap((paragraph, index) =>
  paragraph.map(({ id, en, ru }) => [id, {
    id: `passage-${id}`,
    en: `Paragraph ${index + 1} · ${en}`,
    ru: `Абзац ${index + 1} · ${ru}`,
  }]),
));
