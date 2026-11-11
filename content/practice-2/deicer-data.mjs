export const deicerPassage={
 title:'De-icing mixtures',
 introduction:'Sodium chloride, or salt, is used to de-ice roads and sidewalks during the winter because it lowers the freezing point of water. Water with sodium chloride freezes at a lower temperature than water alone, so putting sodium chloride on icy sidewalks and roads can cause the ice to melt. Sodium chloride is highly effective as a de-icer and is given a de-icer proof of 100. Distilled water is ineffective as a de-icer and is given a de-icer proof of 0.',
 proportions:'Different proportions of sodium chloride and distilled water were combined to create mixtures with de-icer proofs between 0 and 100.',
 experiment1:'A 125-g cube of ice, frozen from distilled water, was submerged in 500-mL of each de-icing mixture listed in Table 1. After 300 seconds, the portion of the cube that had not been melted was removed and weighed. The de-icing rate was calculated by determining the weight of the ice melted per second. By doing this, it was possible to determine the de-icer proof for a solution based on the rate at which ice was melted.',
 experiment2:'The addition of magnesium chloride to a de-icer changes its de-icer proof. Different amounts of magnesium chloride were added to 500-mL samples of sodium chloride. Each de-icing mixture was tested under the same conditions as Experiment 1 and the measured de-icing rate was used to calculate the de-icer proof. The results are shown in Figure 1.',
 experiment3:'The temperature rating (TR) is the minimum de-icer proof of a de-icing solution for a de-icer to have any effect on ice. 125-g cubes of ice were submerged in 500-mL samples of De-icers A and B and the samples were then placed in freezers at different temperatures. Table 2 shows the de-icer proof determined for each de-icer at each freezer temperature and the known TR for that temperature.'
};
export const mixtureData=[
 {proof:100,water:0,sodium:50},
 {proof:80,water:10,sodium:40},
 {proof:60,water:20,sodium:30},
 {proof:40,water:30,sodium:20},
 {proof:20,water:40,sodium:10},
 {proof:0,water:50,sodium:0}
];
export const temperatureData=[
 {temperature:-10,tr:24.1,A:90.3,B:70.1},
 {temperature:-25,tr:36.9,A:78.9,B:64.9},
 {temperature:-50,tr:49.7,A:68.8,B:59.7},
 {temperature:-75,tr:52.3,A:56.6,B:51.7}
];
// These are approximate graph features, not invented individual measurements.
export const deicerGraph={xRange:[0,8],yRange:[100,112],approximatePlateau:[111,112],plateauFromAbout:4};
export const meltingProtocol={initialIceMass:125,solutionVolume:500,seconds:300};
