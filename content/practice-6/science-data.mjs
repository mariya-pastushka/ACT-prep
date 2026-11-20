export const scienceStorageKey = 'act-space-practice-6-science-v1';

export const virusIntro = 'Accepted classification systems of life do not include viruses. Although viruses possess certain features of cellular organisms, including genetic material that codes for making new viral particles, they cannot replicate (make copies of) themselves without first infecting a living cell. Biologists agree that viruses originated from genetic material called nucleic acid, but it is difficult to prove any single theory regarding how this occurred. Three hypotheses of viral origin are presented here.';

export const virusHypotheses = [
  {
    id: 'virus-coevolution', title: 'Coevolution Hypothesis',
    text: 'Some biologists argue that viruses evolved alongside other organisms over billions of years. They suggest that simple molecules of ribonucleic acid (RNA), a nucleotide that forms the genetic code for proteins, joined to form more complex sequences. These RNA sequences developed enzyme-like abilities including the ability to self-replicate and insert themselves into other nucleotide sequences. While some RNA sequences became incorporated into membrane-bound cells, others were packaged inside proteins as the first viral particles that could replicate after infecting cellular organisms (see Figure 1).',
  },
  {
    id: 'virus-cellular', title: 'Cellular Origin Hypothesis',
    text: 'Some biologists claim that nucleotide sequences within prokaryotic (non-nucleated) and eukaryotic (nucleated) cellular organisms incorporated into a protein coating and escaped from the cell as a viral particle. Initially, DNA or RNA nucleotide sequences gained the code required for other cells to replicate them. Next, these sequences associated with proteins to form an outer capsid. Finally, the virion (viral particle) became capable of passing through the cell membrane and infecting other cells where it could be replicated. After the initial escape, viruses evolved independently from their initial host and ultimately could infect either prokaryotic or eukaryotic cells.',
  },
  {
    id: 'virus-regressive', title: 'Regressive Evolution Hypothesis',
    text: 'An alternative explanation of viral origin is that viruses evolved from cellular organisms. Some cellular organisms, particularly certain bacteria, are obligate intracellular parasites because they must infect a host cell in order to reproduce. Regressive evolution suggests that some bacterial parasites gradually lost the structures required for survival outside of a cell. The result was a virus particle containing only nucleotides, a capsid (protein coating), and at times an outer membrane or envelope. This would account readily for viruses that contain complex deoxyribonucleic acid (DNA) similar to that found in bacteria and other cellular organisms (see Figure 2).',
  },
];

export const soilIntro = 'Wind causes topsoil deflation, a type of erosion that is affected by plant and organic cover as well as water content of the soil. Scientists performed 2 experiments using equal-sized fields containing the same volume of soil. The soil samples were primarily a mixture of sand and silt, but differed in the percentage of clay they contained. Soil X was composed of 5% clay and soil Y was composed of 40% clay. Large fans were used to simulate wind. Topsoil deflation was measured in kilograms per hectare (kg/ha) following 10 hours of wind.';

export const soilExperiments = [
  {
    id: 'soil-experiment-1', title: 'Experiment 1',
    text: 'A mixture of compost and straw was used to represent plant and organic cover. The percentage of soil covered with the mixture was considered to approximate an equivalent percentage of natural vegetative cover. One field remained uncovered, and the other fields were covered with different percentages of compost and straw. The topsoil deflation from each field was recorded in Table 1.',
  },
  {
    id: 'soil-experiment-2', title: 'Experiment 2',
    text: 'Rainfall was simulated using a sprinkler system. Sprinklers were turned on for either 4 hours or 8 hours for fields of each kind of soil. Two additional fields composed of each type of soil were left unwatered. Afterward, soil samples were taken from all of the fields to determine their water content percentage, which was recorded in Table 2. Wind was applied as in Experiment 1 and topsoil deflation for all fields was recorded in Table 3.',
  },
];

export const soilTables = [
  {
    id: 'soil-table-1', caption: 'Table 1 · Topsoil deflation (kg/ha) by percentage of organic cover',
    group: 'Organic cover', columns: ['0%', '25%', '50%', '75%'], rowPrefix: 'soil-cover',
    rows: [['X', '105,000', '68,000', '46,000', '20,000'], ['Y', '65,000', '42,000', '28,500', '12,000']],
  },
  {
    id: 'soil-table-2', caption: 'Table 2 · Water content of soil following various sprinkler times',
    group: 'Sprinkler time', columns: ['0 hours', '4 hours', '8 hours'], rowPrefix: 'soil-water',
    rows: [['X', '10%', '13%', '16%'], ['Y', '10%', '14%', '22%']],
  },
  {
    id: 'soil-table-3', caption: 'Table 3 · Topsoil deflation (kg/ha) following various sprinkler times',
    group: 'Sprinkler time', columns: ['0 hours', '4 hours', '8 hours'], rowPrefix: 'soil-deflation',
    rows: [['X', '89,250', '66,000', '14,000'], ['Y', '53,400', '40,100', '10,300']],
  },
];
