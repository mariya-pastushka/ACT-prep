// One coordinate model is shared by SVG figures and numerical geometry checks.
const smallHeight=Math.sqrt(2**2-(11/8)**2);
export const similarModel={small:[[0,0],[4,0],[11/8,smallHeight]],large:[[0,0],[8,0],[11/4,smallHeight*2]]};
export const secantModel={vertices:[[0,0],[4,0],[4,2]],adjacent:4,opposite:2,hypotenuse:2*Math.sqrt(5)};
export const squareModel={area:22500,side:150,diagonal:150*Math.sqrt(2)};
