export const bloodIntro='The 4 different blood types in sheep are A, B, AB, and O. The blood type of an offspring is determined by the blood types of its parents. Each parent contributes a single gene to its offspring, forming a pair of genes. The genotype of an offspring refers to the arrangement of the offspring’s new gene formed by the combination of the parents’ genes.';
export const bloodRows=[{type:'A',pairs:[['A','A'],['A','O']]},{type:'B',pairs:[['B','B'],['B','O']]},{type:'AB',pairs:[['A','B']]},{type:'O',pairs:[['O','O']]}];
export const analyses=[
 {id:1,text:'One thousand males with type-O blood were mated with 1,000 females with type-AB blood. The following blood types were observed in the offspring.',results:[['A',50],['B',50]]},
 {id:2,text:'Two hundred of the type-A offspring from Analysis 1 were mated with 200 type-O mates from no previous experiment. The following blood types were observed in the offspring.',results:[['A',50],['O',50]]},
 {id:3,text:'One hundred of the type-A offspring from Analysis 1 parented children with 100 type-B offspring from Analysis 1. The following blood types were observed in the offspring:',results:[['A',25],['B',25],['AB',25],['O',25]]},
 {id:4,text:'Twenty-five of the type-A offspring from Analysis 3 were mated with type-B mates with Genotype IᴮIᴮ who were not from any previous analysis. The following blood types were observed in the offspring:',results:[['AB',50],['B',50]]},
];
export const bloodCrosses={1:[['O','O'],['A','B']],2:[['A','O'],['O','O']],3:[['A','O'],['B','O']],4:[['A','O'],['B','B']],allAB:[['A','A'],['B','B']]};
export const alleleText={A:'Iᴬ',B:'Iᴮ',O:'Iᴼ'};
export const genotypeText=pair=>pair.map(a=>alleleText[a]).join('');
