export const scienceStorageKey = 'act-space-practice-4-science-v1';

export const convectionIntro = 'Convection is a heat transfer process caused by moving liquid or gas currents from a hot region to a cold region. As a liquid or gas cools, it gets more dense. An example of a convection process is a cup of hot coffee: the liquid toward the top is cooled by the air, so it becomes more dense and sinks to the bottom of the cup; the hotter liquid toward the bottom of the cup is less dense, so it rises toward the top. See Figure 1, below.';

export const convectionSetup = 'The temperature of the liquid at the hot end of the insulated system is higher than the temperature at the cool end of the system. The difference (ΔT) between the hot liquid at the bottom and the cold liquid at the top changes depending on the starting temperature of the system. Table 1 gives ΔT for 500 mL of water in an insulated container with a height of 6.0 cm and a cross-sectional area of 4.0 cm² when the container is heated to different temperatures.';

export const convectionGraphSetup = 'Figure 2 shows how ΔT changes with cross-sectional area for 500 mL of 100°C water in a container with a height of 6.0 cm. Figure 3 shows how ΔT changes with height for 500 mL of 100°C water in a container with a cross-sectional area of 4.0 cm².';

export const convectionTable = [
  ['80', '1'],
  ['100', '4'],
  ['120', '10'],
  ['140', '19'],
];

export const platingIntro = 'Metallic alloys, solid mixtures of metal, are useful for coin production when they contain a high percentage of zinc. When electric current is applied to zinc in the presence of precious metal solutions of silver nitrate, copper sulfate or potassium gold cyanide, the precious metals plate (form a coating) on the zinc surface.';

export const platingReactions = [
  ['silver-reaction', 'Silver nitrate, formed when silver dissolves in nitric acid, reacts with zinc to form solid silver and zinc nitrate.'],
  ['copper-reaction', 'Copper sulfate, formed when copper dissolves in sulfuric acid, reacts with zinc to form solid copper and zinc sulfate.'],
  ['gold-ions', 'Potassium gold cyanide contains reactive gold ions.'],
];

export const platingExperiments = [
  {
    number: 1,
    id: 'plating-experiment-1',
    text: 'The chemist obtained 4 coin-like samples of a high percentage zinc alloy. All samples were circular, had a radius of 1 cm, and had the same thickness. The mass of each coin was recorded. Each coin was wired via a battery to a strip of either pure silver or copper metal. Coins wired to silver were placed in dilute nitric acid and coins wired to copper were placed in dilute sulfuric acid. Electric current of either 1,000 milliamperes (mA) or 2,000 mA was applied for 30 minutes to each sample. The coins were removed and the increase in mass from precious metal plating was recorded in milligrams. Results of the experiment are shown in Table 1.',
    table: {
      id: 'plating-table-1',
      caption: 'Table 1 · Mass gained from plating',
      columns: ['Coin sample', 'Precious metal solution', 'Electric current (mA)', 'Increased mass from plating (mg)'],
      rows: [
        ['I', 'silver nitrate', '1,000', '2.0'],
        ['II', 'silver nitrate', '2,000', '4.0'],
        ['III', 'copper sulfate', '1,000', '1.2'],
        ['IV', 'copper sulfate', '2,000', '2.4'],
      ],
    },
  },
  {
    number: 2,
    id: 'plating-experiment-2',
    text: 'The chemist completely dissolved equal amounts of pure silver in 4 beakers of nitric acid. He then placed equivalent coin-like samples of zinc into the beakers for different lengths of time measured in minutes (min). The coin surfaces developed a silver metal coating without any electric current applied. The concentrations of silver coating on the coin and zinc nitrate in the surrounding solution were determined in parts per billion (ppb) and recorded in Table 2.',
    table: {
      id: 'plating-table-2',
      caption: 'Table 2 · Silver coating and zinc nitrate concentrations',
      columns: ['Coin sample', 'Time (min)', 'Silver coating concentration (ppb)', 'Zinc nitrate concentration (ppb)'],
      rows: [
        ['V', '5', '75', '30'],
        ['VI', '15', '125', '55'],
        ['VII', '30', '200', '75'],
        ['VIII', '60', '500', '85'],
      ],
    },
  },
];

export const cylinderChoices = {
  F: { width: 92, height: 86, description: 'Tall cylinder of medium width' },
  G: { width: 92, height: 52, description: 'Medium-height cylinder of the same width as F' },
  H: { width: 116, height: 34, description: 'Short, widest cylinder' },
  J: { width: 47, height: 36, description: 'Short, narrowest cylinder' },
};
