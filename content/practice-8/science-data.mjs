export const scienceStorageKey='act-space-practice-8-science-v1';
export const introduction='A study was conducted regarding the fossil shells of a particular species of turtle that lives off the coast of the Opulasian Peninsula. Scientists discovered a continuous record of fossilized shells in the seabed off the coast dating back 120,000 years. In addition to examining the fossilized turtle shells, the scientists also examined the shells of living turtles.';
export const sampling='From each layer of seabed, the scientists randomly selected five complete, unbroken fossilized shells. Each shell was carefully prepared, measured, and photographed. A bit of each shell was then clipped off and sent to a laboratory for radiocarbon dating to determine the precise age of each shell.';
export const study1='All of the living turtles had a distinct band of hexagonal scutes (bony plates) running the length of their shells, from head to tail. The fossilized shells’ scutes were not visible to the naked eye; however upon application of a particular dye, a similar band of scutes from head to tail was observed in every shell.';
export const patterns=['M-m-M-M-m','M-M-m-m-M','M-m-M-m-M'];
export const patternRows=[
 [120000,46,44,10],[90000,42,54,4],[87000,30,67,3],[85000,21,72,7],[80000,20,66,14],[50000,76,21,3],[27000,100,0,0],[15000,100,0,0],[8000,100,0,0],[4000,100,0,0],[1000,68,28,4],[300,74,20,6],[0,86,2,12],
];
export const study2='For each shell, the surface area of the shell, the height of the shell’s bridge (the part of the shell linking the upper and lower plates), and the total number of scutes were recorded (see Figure 1).';
export const graphAges=[120,90,87,85,80,50,27,15,8,4,1,0.3,0];
// Approximate readings traced from the supplied image, not original raw measurements.
export const charts=[
 {id:'turtle-scutes',title:'Average number of scutes',unit:'scutes',min:20,max:40,ticks:[20,25,30,35,40],values:[24.5,25.2,26.3,28.6,32.2,37.8,36,35,33.5,31.7,30.5,31.5,32]},
 {id:'turtle-height',title:'Average bridge height (cm)',unit:'cm',min:1.6,max:3.2,ticks:[1.6,2,2.4,2.8,3.2],values:[2.08,2.13,2.14,2,2.44,2.8,3,2.7,2.65,2.58,2.56,2.52,2.45]},
 {id:'turtle-area',title:'Average shell surface area (cm²)',unit:'cm²',min:630,max:700,ticks:[640,660,680,700],values:[650,690,692,681,668,667,654,657,642,637,634,633,633]},
];
export const choicePatterns={F:'M-m-M-M-m',G:'M-M-m-m-M',H:'M-M-M-m-m',J:'m-M-M-m-M'};
