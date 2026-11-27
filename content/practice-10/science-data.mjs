export const planets = ['Jupiter', 'Neptune', 'Saturn'];

// Values and row labels are transcribed as printed in the exercise.
export const atmospheres = [
 {id: 'h', gas: 'H', abundance: ['86.1', '79.0', '96.1'], altitude: ['−1,000 to −70,000', '−10,000 to −23,000', '−1,000 to −60,000']},
 {id: 'he', gas: 'He', abundance: ['13.6', '18.0', '3.3'], altitude: ['−500 to −1,000', '−500 to −10,000', '−500 to −900']},
 {id: 'ch3', gas: 'CH₃', abundance: ['0.2', '3.0', '0.4'], altitude: ['0 to 300', '−100 to 0', '0 to 200']},
 {id: 'nh3', gas: 'NH₃', abundance: ['0.0045', '0', '0.0035'], altitude: ['0 to −100', '—', '−50 to −200']},
 {id: 'h2o', gas: 'H₂O vapor', abundance: ['0.0055', '0', '0.0065'], altitude: ['−50 to −100', '—', '−200 to −300']},
];

export const temperaturesWithoutWarming = [
 {id: 'jupiter', planet: 'Jupiter', temperature: 100},
 {id: 'neptune', planet: 'Neptune', temperature: 50},
 {id: 'saturn', planet: 'Saturn', temperature: 25},
];

// Illustrative data for the original chemistry passage.
export const temperatureTrials = [
 {temperature: 10, time: 120, earlyVolume: 24},
 {temperature: 20, time: 80, earlyVolume: 36},
 {temperature: 30, time: 50, earlyVolume: 55},
 {temperature: 40, time: 35, earlyVolume: 72},
];

export const formTrials = [
 {id: 'whole', form: 'Whole', time: 80, earlyVolume: 36, total: 80},
 {id: 'halved', form: 'Cut in half', time: 60, earlyVolume: 48, total: 80},
 {id: 'crushed', form: 'Crushed', time: 40, earlyVolume: 66, total: 80},
];
