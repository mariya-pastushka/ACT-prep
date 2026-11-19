// Retain the printed line breaks so question references match the screenshots.
const paragraphs = [
  [
    'Northwest natives are carvers by tradition, but it was the',
    'natives of the far north, in what is now British Columbia and',
    'Alaska, who first carved totem poles. The history of these fasci-',
    'nating works is surprisingly brief, for it wasn’t until the mid-18th',
    'century, when European explorers first encountered these remote',
    'tribes, that the unique sculptures began to appear. Although the',
    'natives were already expert carvers of canoes, tools, longhouses,',
    'and furniture, they lacked the iron tools necessary to fell a mas-',
    'sive tree in one piece and carve its entire length.',
  ],
  [
    'With the iron axes they got in trade for their baskets, boxes,',
    'and pelts, the coastal tribes of the far north could take advantage',
    'of the trees that grew so tall and straight in their wet climate.',
    'Initially, the poles were made to stand against the front of a house,',
    'with figures facing out and a door cut through the base, so all',
    'would enter the house through the pole. In this case, the totem',
    'pole functioned as a family crest, recounting genealogies, stories,',
    'or legends that in some way identified the owner. Towards the',
    'end of the 19th century, the poles stood free on the beach or in',
    'the village outside the carvers’ homes. Some villages were virtual',
    'forests of dozens, sometimes hundreds, of poles.',
  ],
  [
    'The family that carved the pole gave a potlatch with feast-',
    'ing, games, and much gift-giving. The guests, in return, raised',
    'the pole. These gatherings were costly and required a great deal',
    'of preparation and participation. The custom frustrated whites',
    'trying to “civilize” the Indians, especially missionaries who',
    'solved the problem by knocking the poles down. Employers,',
    'too, complained that their Indian workers were unreliable when',
    'a pole was being carved or a potlatch planned. Eventually, both',
    'the Canadian and United States governments banned potlatches,',
    'and pole carving nearly died out. The ban was lifted in the 1950s.',
  ],
  [
    'The Tlingit, on the southeastern coast of Alaska, and the',
    'Haidas and Tsimshian of western Canada are known for their',
    'pole carving. On a tour in 1899, a group of Seattle businessmen',
    'visited the Tlingit village of Tongas and, finding no one there, took',
    'one of the poles. They erected it in Seattle where, at a towering',
    '50 ft., it became one of the city’s most distinctive monuments.',
    'In 1938, Tlingit carvers copied the pole after the original was',
    'destroyed by fire, and it remains in Pioneer Square today.',
  ],
  [
    'Poles serve the important purpose of recording the lore of',
    'a clan, much as a book would. The top figure on the pole iden-',
    'tifies the owner’s clan, and succeeding characters (read from',
    'top to bottom) tell their stories. Raven, the trickster, might tell',
    'the story of how he fooled the Creator into giving him the sun,',
    'or Frog might tell how he wooed a human woman. With slight',
    'variations between villages, everyone knew these stories, and',
    'potlatch guests dramatized them at the pole-raising with masks,',
    'drumming, and songs. And so the legends were preserved from',
    'one generation to the next.',
  ],
  [
    'There is a story behind almost every image on the pole. For',
    'example, if an animal had the power to transform itself into other',
    'beings, the carver would portray it in all its forms. If Raven were',
    'sometimes bird, sometimes human, he would be carved with',
    'both wings and limbs, or have a human face with a raven’s beak.',
    'Other images are used to describe the spirits’ special abilities.',
    'Eyes are frequently used to suggest acuteness or skill. So, for',
    'example, if an eye appears in an animal’s ear, it might indicate',
    'that that animal has a sharp sense of hearing. And human figures',
    'in unexpected places, like an ear or nose, might mean that the',
    'animal has great powers.',
  ],
  [
    'Learning to read totem poles is like learning to read a lan-',
    'guage. They speak of history, mythology, social structure, and',
    'spirituality. They serve many purposes and continue to be carved',
    'by the descendants of the original carvers.',
  ],
  [
    'Today, Haida, Tlingit, Tsimshian, Kwakiutl and other na-',
    'tive craftsmen carve, predominantly for the tourist trade, small',
    '“souvenir” totem poles in wood and black slate (or argillite).',
    'They also carve extraordinarily beautiful masks, effigies, boxes,',
    'house posts, and fixtures…',
  ],
];

let number = 0;
const lineGroups = paragraphs.map(lines => lines.map((raw, index) => {
  const splitWord = raw.endsWith('-');
  return {
    number: ++number,
    printedText: raw,
    text: splitWord ? raw.slice(0, -1) : raw,
    joinAfter: splitWord || index === lines.length - 1 ? '' : ' ',
  };
}));

export const readingPassage = {
  title: 'Totem Poles',
  attribution: 'HUMANITIES: This passage is adapted from John Gattuso, ed., Native America (©1993, Houghton Mifflin Co.).',
  source: 'The passage, line breaks, and answer key follow the supplied screenshots. “Totem Poles” is a descriptive title added for this lesson.',
  sourceLines: lineGroups.flat(),
  lineRanges: lineGroups.map(lines => ({ from: lines[0].number, to: lines.at(-1).number })),
  paragraphs: lineGroups.map(lines => lines.map(line => line.text + line.joinAfter).join('')),
};
