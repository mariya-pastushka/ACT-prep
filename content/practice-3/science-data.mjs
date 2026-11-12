export const scienceStorageKey = 'act-space-practice-3-science-v1';

export const cometIntro = [
  ['comet-intro', `Comets originate from regions of our solar system that are very far from the sun. The comets are formed from debris thrown from objects in the solar system: they have a nucleus of ice surrounded by dust and frozen gases. When comets are pulled into the earth's atmosphere by gravitational forces and become visible, they are called meteors. Meteors become visible about 50 to 85 km above the surface of Earth as air friction causes them to glow. Most meteors vaporize completely before they come within 50 km of the surface of Earth.`],
  ['comet-imaging', `The Small Comet debate centers on whether dark spots and streaks seen in images of the Earth's atmosphere are due to random technological noise or a constant rain of comets composed of ice. Recently, images were taken by two instruments, UVA and VIS, which are located in a satellite orbiting in Earth's magnetosphere. UVA and VIS take pictures of the aurora borealis phenomenon, which occurs in the magnetosphere. The UVA and VIS technologies provide images of energy, which cannot be seen by the human eye.`],
  ['comet-debate', `The pictures taken by VIS and UVA both show dark spots and streaks. Scientists debate whether these spots and streaks are due to a natural incident, such as small comets entering the atmosphere, or random technological noise. The layers of Earth's atmosphere are shown in Figure 1.`],
];

export const scientists = [
  { title: 'Scientist 1', parts: [
    ['s1-size', `Small comets are pulled into Earth's atmosphere by gravitational effects and burn up in the magnetosphere. They are about 20 to 30 feet in diameter and burn up in the magnetosphere because they are much smaller than the comets that become meteors. Comets with larger radii will burn up in portions of the atmosphere much closer to Earth.`],
    ['s1-krypton', `About 30,000 small comets enter the Earth's magnetosphere every day. The dark spots and streaks on UVA and VIS images occur when the small comets begin to boil in the magnetosphere, releasing krypton and argon and creating gaseous H₂O, which interacts with hydroxyl, OH⁻, radicals.`],
    ['s1-frequency', `Images taken by these instruments at different points in time show the same frequency of dark spots and streaks and give conclusive evidence in favor of the Small Comet theory. If the spots and streaks were due to random technological noise, then the frequency of their appearance would fluctuate.`],
  ] },
  { title: 'Scientist 2', parts: [
    ['s2-noise', `The dark spots and streaks in the UVA and VIS images are due to technological noise, not small comets.`],
    ['s2-flashes', `If the Small Comet Theory were true, and 20 small comets bombarded Earth's atmosphere per minute, there would be a visible bright object at least twice every five minutes. This is because, as objects enter the Earth's mesosphere, they burn up, creating large clouds of ice particles. As the ice particles vaporize, they have a brightness in the sky approximately equal to that of Venus. Because comets rarely enter Earth's atmosphere, such bright flashes are rare occurrences, far less than two times every five minutes, so the Small Comet theory cannot be correct.`],
    ['s2-origin', `Further, since comets originate from regions of space beyond the orbit of the farthest planet, they contain argon and krypton.`],
    ['s2-krypton', `If the Small Comet theory were true and Earth were bombarded by 30,000 comets per day, there would be 500 times as much krypton in the atmosphere as there actually is.`],
  ] },
];

export const atmosphere = [
  { id: 'magnetosphere', label: 'magnetosphere', from: 600 },
  { id: 'thermosphere', label: 'thermosphere', from: 85, to: 600 },
  { id: 'mesosphere', label: 'mesosphere', from: 50, to: 85 },
  { id: 'stratosphere', label: 'stratosphere', from: 15, to: 50 },
  { id: 'troposphere', label: 'troposphere', from: 0, to: 15 },
];

export const cottonText = {
  fiber: 'A cotton fiber is composed of one very long cell with two cell walls. During a 2-week period of cell life called elongation, cotton fibers grow 3 to 6 cm. The level of hydrogen peroxide in cotton fiber cells during elongation is very high. Scientists wanted to study whether the level of hydrogen peroxide affected the length of the cotton fiber.',
  setup: 'The amount of hydrogen peroxide is controlled by an enzyme called superoxide dismutase (SOD). This enzyme turns superoxide into hydrogen peroxide. Four identical lines of cotton fiber plants were created. Each line was able to express only one of three types of superoxide dismutase. The gene for SOD1 was incorporated into L1, the gene for SOD2 was incorporated into L2, and the gene for SOD3 was incorporated into L3.',
  end: 'Five cotton plants of each line were grown in nutrient solution until cotton fibers completed the elongation period. The average length of cotton fibers and the average concentration of hydrogen peroxide were determined. This information is shown in Table 1.',
  middle: 'Next, because the scientists had determined the average elongation period, they measured the amount of hydrogen peroxide and the length of the cotton fibers halfway through their elongation period. This information is shown in Table 2.',
  first: 'Finally, the scientists measured the amount of hydrogen peroxide and the length of cotton fibers on the first day of the elongation period. This information is shown in Table 3.',
};

export const cottonTables = [
  {
    id: 'end', number: 1, title: 'At the end of elongation period', dayHeading: 'Average elongation period length (days)',
    rows: [
      { line: 'L1', day: 8, peroxide: '2.1', length: '3.6' },
      { line: 'L2', day: 4, peroxide: '0.2', length: '1.4' },
      { line: 'L3', day: 20, peroxide: '5.6', length: '5.9' },
      { line: 'L4', day: 12, peroxide: '2.3', length: '4.5' },
    ],
  },
  {
    id: 'middle', number: 2, title: 'At the midpoint of elongation period', dayHeading: 'Day of elongation period',
    rows: [
      { line: 'L1', day: 4, peroxide: '4.1', length: '2.7' },
      { line: 'L2', day: 2, peroxide: '5.3', length: '1.0' },
      { line: 'L3', day: 10, peroxide: '12.4', length: '2.0' },
      { line: 'L4', day: 6, peroxide: '8.7', length: '3.2' },
    ],
  },
  {
    id: 'first', number: 3, title: 'On the first day of elongation period', dayHeading: 'Day of elongation period',
    rows: [
      { line: 'L1', day: 1, peroxide: '1.2', length: '0.2' },
      { line: 'L2', day: 1, peroxide: '6.0', length: '0.5' },
      { line: 'L3', day: 1, peroxide: '5.7', length: '0.1' },
      { line: 'L4', day: 1, peroxide: '1.9', length: '0.2' },
    ],
  },
];

export const cottonTableId = stage => `cotton-table-${stage}`;
export const cottonCellId = (stage, line, field) => `${cottonTableId(stage)}-${line.toLowerCase()}-${field}`;

export function source(id, en, ru, previewEn, previewRu) {
  return { id, en, ru, previewEn, previewRu };
}

export function cottonCell(stage, line, field) {
  const table = cottonTables.find(item => item.id === stage);
  const row = table.rows.find(item => item.line === line);
  const measures = {
    day: ['day', 'день', ''],
    peroxide: ['H₂O₂', 'H₂O₂', ' μmol/mg'],
    length: ['fiber length', 'длина волокна', ' cm'],
  };
  const [en, ru, unit] = measures[field];
  const unitRu = unit === ' cm' ? ' см' : unit === ' μmol/mg' ? ' мкмоль/мг' : '';
  const valueRu = String(row[field]).replace('.', ',');
  return source(cottonCellId(stage, line, field), `Table ${table.number} · ${line} · ${en}`, `Таблица ${table.number} · ${line} · ${ru}`,
    `${line}, day ${row.day}: ${en} = ${row[field]}${unit}.`, `${line}, день ${row.day}: ${ru} = ${valueRu}${unitRu}.`);
}

export const growthPoints = cottonTables.flatMap(table => table.rows.map(row => ({ day: row.day, length: Number(row.length), line: row.line })));
