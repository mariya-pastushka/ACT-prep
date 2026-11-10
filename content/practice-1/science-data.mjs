export const soil={
 title:'Soil quality',
 paragraphs:[
  'Two ways to measure the quality of soil are bulk density and the soil organic matter test, SOM (a measure of the active organic content). High quality soil provides structure to plants and moves water and nutrients, so plants grow in larger quantities, leading to higher crop yields at harvest.',
  'Bulk density is measured as the dry weight of a sample of soil divided by the volume of the sample. A bulk density measure above 1.33 g/cm³ negatively affects soil quality. Figure 1 shows the bulk density levels for 5 different years at Fields A and B.'
 ],
 years:[1,2,3,4,5],
 density:{A:[1.30,1.45,1.35,1.50,1.70],B:[1.20,1.40,1.30,1.40,1.30]},
 yield:{A:[10,14,13,16,17],B:[10,11,14,12,8]},
 somRatings:[['< 0.25','poor'],['0.25 to 0.50','fair'],['0.51 to 0.75','good'],['> 0.75','excellent']],
 som:[{field:'A',average:0.89},{field:'B',average:0.28}],
 tableIntroduction:'Table 1 shows how soil quality varies with SOM. Table 2 shows the average SOM at the end of each of the 5 years.',
 yieldIntroduction:'Figure 2 shows the total crop yield at each field at the end of the 5 years.'
};
export const rust={
 title:'Iron, water, and rust',
 paragraphs:[
  'Ferric oxide (Fe₂O₃) is more commonly known as rust. This is produced in a reaction between iron, a common metal, and water, H₂O.',
  'Table 1 shows the amount of Fe₂O₃ produced over time from 15 g Fe submerged in different liquids: 100 mL distilled water, a salt solution made from dissolving 20 g of salt in 100 mL of distilled water, and a sugar solution made from dissolving 20 g of sugar in 100 mL of distilled water.'
 ],
 reaction:'2Fe + 3H₂O → Fe₂O₃ + 3H₂',
 days:[2,4,6,8],
 solutions:[
  {name:'Distilled water',values:[0.34,0.40,0.59,0.72]},
  {name:'Salt solution',values:[0.56,0.81,1.23,1.84]},
  {name:'Sugar solution',values:[0.00,0.05,0.11,0.19]}
 ],
 graphIntroduction:'The distilled water trial was repeated four times, but for each trial, a total volume of 100 mL of water was buffered to different pH levels.',
 // Approximate digitization of the supplied curves, not additional measured data.
 phCurves:[
  {ph:6,label:'pH = 6.0',dash:'8 7',values:[0.50,0.76,1.06,1.48,1.98,2.44,2.81,3.10,3.27,3.35]},
  {ph:7,label:'pH = 7.0 (regular water)',dash:'2 5',values:[0.32,0.43,0.59,0.78,1.00,1.26,1.57,1.96,2.42,3.06]},
  {ph:8,label:'pH = 8.0',dash:'18 10',values:[0.29,0.36,0.47,0.63,0.82,1.01,1.28,1.59,2.05,2.78]},
  {ph:10,label:'pH = 10.0',dash:null,values:[0.06,0.09,0.13,0.19,0.26,0.33,0.41,0.50,0.48,0.56]}
 ]
};
export const sugarGraphChoices={
 F:{values:[0,0.05,0.11,0.19],description:'An increasing graph that becomes steeper.'},
 G:{values:[0.19,0.09,0.035,0],description:'A decreasing graph that becomes less steep.'},
 H:{values:[0,0.10,0.165,0.19],description:'An increasing graph that becomes less steep.'},
 J:{values:[0.19,0.17,0.11,0],description:'A decreasing graph that becomes steeper.'}
};
export const scienceStorageKey='act-space-practice-1-science-v1';
