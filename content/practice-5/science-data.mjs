export const scienceStorageKey = 'act-space-practice-5-science-v1';

export const organicIntro = 'Organic compounds are molecules that frequently contain carbon (C), hydrogen (H), and oxygen (O) joined together by covalent bonds (symbolized by straight lines in chemical notation). As the number of bonds to oxygen atoms increases in a carbon chain, the overall molecule is increasingly oxidized. For example, aldehydes are more oxidized than alcohols, which are more oxidized than alkanes as shown in Table 1. The melting points of these compounds are listed in Table 2, and their viscosities (resistance to flow, or “stickiness,”) are listed in Table 3.';

export const organicKinds = [
  { id: 'alkane', label: 'alkane', suffix: 'ane' },
  { id: 'alcohol', label: 'alcohol', suffix: 'anol' },
  { id: 'aldehyde', label: 'aldehyde', suffix: 'analdehyde' },
];

export const organicChains = [
  { carbons: 4, prefix: 'but' },
  { carbons: 5, prefix: 'pent' },
  { carbons: 6, prefix: 'hex' },
  { carbons: 7, prefix: 'hept' },
  { carbons: 8, prefix: 'oct' },
];

export const organicTables = [
  {
    id: 'organic-table-2',
    caption: 'Table 2 · Melting point (K)',
    columns: ['Carbons in the chain', 'alkane', 'alcohol', 'aldehyde'],
    rowPrefix: 'organic-melting',
    rows: [
      ['4', '135', '183', '174'],
      ['5', '143', '194', '213'],
      ['6', '178', '221', '217'],
      ['7', '182', '239', '231'],
      ['8', '216', '257', '285'],
    ],
  },
  {
    id: 'organic-table-3',
    caption: 'Table 3 · Viscosity (cP)',
    columns: ['Carbons in the chain', 'alkane', 'alcohol', 'aldehyde'],
    rowPrefix: 'organic-viscosity',
    rows: [
      ['4', '0.01', '3.0', '0.4'],
      ['5', '0.24', '5.1', '0.5'],
      ['6', '0.29', '5.4', '0.8'],
      ['7', '0.39', '5.8', '1.0'],
      ['8', '0.54', '8.4', '1.2'],
    ],
  },
];

export const pendulumIntro = 'A mass suspended by a lightweight thread and swinging back and forth approximates the motion of a simple gravity pendulum, a system in which gravity is the only force acting on the mass, causing an acceleration of 9.8 m/sec². The time to complete one cycle of swinging back and forth is the period and is inversely related to gravitational acceleration.';

export const pendulumSetup = 'Using the same type and length of thread, 2 cubes were suspended, lifted to the same starting angle, and let go. The amount of time required for each pendulum to complete one swinging cycle (1 period) was recorded with a timer capable of reading to the nearest 0.01 sec. The measured times were used to calculate acceleration.';

export const pendulumExperiments = [
  {
    number: 1,
    id: 'pendulum-experiment-1',
    text: 'A cube of lead (11.3 grams) and a cube of tin (7.4 grams) were suspended from a 0.5 m length of thread. Both cubes had the same length. (Note: A cube’s volume is proportional to its length cubed; its surface area is proportional to its length squared.) The cubes were set in motion from a fixed starting angle, and the period for each was recorded.',
    table: {
      id: 'pendulum-table-1',
      caption: 'Table 1 · Measured period (sec)',
      columns: ['Trial', 'lead cube', 'tin cube'],
      rowPrefix: 'pendulum-trial',
      rows: [
        ['1', '1.48', '1.51'],
        ['2', '1.45', '1.47'],
        ['3', '1.46', '1.42'],
        ['4', '1.49', '1.45'],
        ['5', '1.39', '1.53'],
      ],
    },
    summary: 'The average periods were 1.46 sec and 1.48 sec for the lead and tin cubes, respectively. The average accelerations were 9.3 m/sec² for lead and 9.1 m/sec² for tin.',
  },
  {
    number: 2,
    id: 'pendulum-experiment-2',
    text: 'The same procedures used in Experiment 1 were repeated using a thread length of 1.0 m and the same fixed starting angle. Results were recorded in Table 2.',
    table: {
      id: 'pendulum-table-2',
      caption: 'Table 2 · Measured period (sec)',
      columns: ['Trial', 'lead cube', 'tin cube'],
      rowPrefix: 'pendulum-trial',
      rows: [
        ['6', '2.10', '2.12'],
        ['7', '2.04', '2.06'],
        ['8', '2.05', '2.07'],
        ['9', '2.12', '2.11'],
        ['10', '2.00', '2.10'],
      ],
    },
    summary: 'The average periods were 2.06 sec and 2.09 sec for the lead and tin cubes, respectively. The average accelerations were 9.3 m/sec² for lead and 9.0 m/sec² for tin.',
  },
  {
    number: 3,
    id: 'pendulum-experiment-3',
    text: 'Given the results of the first 2 experiments, the accuracy of the timer was tested. The procedures of Experiment 1 were repeated using only the lead cube. The trials were recorded on digital video at 100 frames per second. The video was then reviewed to obtain precise measurements of the period for each trial and results are shown in Table 3.',
    table: {
      id: 'pendulum-table-3',
      caption: 'Table 3 · Measured period (sec)',
      columns: ['Trial', 'lead cube'],
      rowPrefix: 'pendulum-trial',
      rows: [
        ['11', '1.47'],
        ['12', '1.42'],
        ['13', '1.49'],
        ['14', '1.50'],
        ['15', '1.46'],
      ],
    },
    summary: 'The average period recorded in Table 3 was 1.47 sec.',
  },
];
