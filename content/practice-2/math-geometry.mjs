export const bookVotes=[
 {name:'Toni Morrison',percent:20,color:'#c4acdf'},
 {name:'Annie Proulx',percent:40,color:'#e5d8ef'},
 {name:'John Steinbeck',percent:10,color:'#f5dc88'},
 {name:'Cormac McCarthy',percent:15,color:'#c5d8d0'},
 {name:'Gabriel García Márquez',percent:15,color:'#dbbfd6'}
];
export function pieSlices(data=bookVotes){
 let angle=-90;
 return data.map(item=>{const start=angle;angle+=item.percent*3.6;return {...item,start,end:angle}});
}
export function sectorPath(cx,cy,r,start,end){
 const point=a=>[cx+r*Math.cos(a*Math.PI/180),cy+r*Math.sin(a*Math.PI/180)];
 const a=point(start),b=point(end);
 return `M ${cx} ${cy} L ${a[0]} ${a[1]} A ${r} ${r} 0 ${end-start>180?1:0} 1 ${b[0]} ${b[1]} Z`;
}
// A single coordinate model drives both the question and annotated solution.
export const parallelLines={
 upperY:70,lowerY:190,
 leftUpper:[100,70],leftLower:[140,190],
 rightUpper:[420,70],rightLower:[300,190],crossing:[180,310]
};
export const squareCircle={left:70,top:55,side:200,cx:270,cy:155,r:100};
export const boxDimensions={width:9,depth:3,height:5};
