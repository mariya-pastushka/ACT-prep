export const scienceStorageKey='act-space-practice-2-science-v1';
export const plannedQuestionCount=12;
export const springsPassage={
 title:'Forces and springs',
 introduction:'Some physics students conducted experiments to study forces and springs. They used several identical springs attached to the bottom of a level platform, shown below in Figure 1.',
 principle:'The length of each spring was 0.30 m when there were no weights attached. The springs had identical spring constants. When weights were attached, the length of the springs increased as the force of the weights stretched the springs downward. The length the springs stretched was proportional to the force of the weight.',
 experiment1:'The students attached different weights to two springs at once. When the springs stopped oscillating and came to a rest, the students measured their length. In Trial 1, a 10.0 N weight was attached to Spring A and Spring B, which were attached 0.25 m apart on the board. In Trial 2, a 15.0 N weight was attached to Spring A and Spring B. In Trial 3, a 20.0 N weight was attached to Spring A and Spring B. The effects of the weights on Springs A and B for the three trials are shown below in Figure 2.',
 experiment2:'The students attached a 0.25 m board with a high friction surface to Spring B and Spring C (see Figure 3). The students then placed a 5.0 N weight at different locations along the board. Because of the high friction surface, the weights stayed in place when the board was at an angle.',
 experiment2Trials:'In each of these 3 trials, a 5.0 N weight was placed at various distances along the board from the attachment with Spring B (see Figure 4). In Trial 4, the weight was placed so its center was 0.075 m along the board from the attachment with Spring B. In Trial 5, the weight was placed so its center was 0.125 m along the board from the attachment with Spring B. In Trial 6, the weight was placed so its center was 0.200 m along the board from the attachment with Spring B. The effects of the weight position on the lengths of Springs B and C for the 3 trials are also shown in Figure 4.'
};
export const unloadedLength=0.30;
export const trialData=[
 {id:1,experiment:1,weight:10.0,A:0.40,B:0.40},
 {id:2,experiment:1,weight:15.0,A:0.45,B:0.45},
 {id:3,experiment:1,weight:20.0,A:0.50,B:0.50},
 {id:4,experiment:2,weight:5.0,positionFromB:0.075,B:0.45,C:0.34},
 {id:5,experiment:2,weight:5.0,positionFromB:0.125,B:0.40,C:0.40},
 {id:6,experiment:2,weight:5.0,positionFromB:0.200,B:0.32,C:0.50}
];
// The image bytes are original. viewBox only controls which source pixels the page shows.
const root='/practice-2/science/';
export const scienceFigures={
 figure1:{src:root+'figure-1-source.png',width:935,height:549,crop:[22,82,398,141],title:'Figure 1',alt:'Original Figure 1. Identical unloaded Springs A, B and C hang from a level platform. A to B: 0.25 m; B to C: 0.50 m. Unloaded spring length: 0.30 m.'},
 figure2:{src:root+'figure-2-source.png',width:696,height:579,crop:[9,5,435,526],title:'Figure 2',alt:'Original Figure 2, Trials 1–3. A and B share weights of 10.0, 15.0 and 20.0 N. Both lengths are 0.40, 0.45 and 0.50 m respectively. Spring C remains unattached. The support gaps are 0.25 m and 0.50 m.'},
 figure3:{src:root+'figure-3-source.png',width:1221,height:280,crop:[12,96,409,140],title:'Figure 3',alt:'Original Figure 3. A 0.25 m board is suspended from Springs B and C, each labeled 0.35 m. The board is horizontal. The support gaps A–B and B–C are 0.25 m and 0.50 m. Spring A remains unattached.'},
 figure4:{src:root+'figure-4-source.png',width:454,height:605,crop:[0,0,454,605],title:'Figure 4',alt:'Original Figure 4, Trials 4–6. The 5.0 N weight is 0.075, 0.125 and 0.200 m from Spring B. B/C lengths are 0.45/0.34, 0.40/0.40 and 0.32/0.50 m. The board slopes up to the right, is level, then slopes down to the right. All printed dimensions are retained.'},
 question1:{src:root+'question-1-source.png',width:1148,height:436,crop:[33,32,138,404],title:'Question 1 · Original answer drawings',alt:'Original answer drawings A–D. One loaded spring has a labeled length of 0.15, 0.30, 0.40 or 0.50 m respectively.'}
};
export const singleSpringOptions=[
 {label:'A',length:0.15,crop:[33,32,139,100]},
 {label:'B',length:0.30,crop:[33,133,139,100]},
 {label:'C',length:0.40,crop:[33,233,139,100]},
 {label:'D',length:0.50,crop:[33,334,139,102]}
];
