// Small, serializable MathML tree. Fractions, roots and scripts stay structural.
export const row=(...items)=>({kind:'row',items});
export const frac=(top,bottom)=>({kind:'frac',top,bottom});
export const power=(base,exponent)=>({kind:'power',base,exponent});
export const root=value=>({kind:'root',value});
export const sub=(base,index)=>({kind:'sub',base,index});
export const words=value=>({kind:'words',value});
export const matrix=(...rows)=>({kind:'matrix',rows});
export function mathLabel(node){
 if(typeof node==='string'||typeof node==='number')return String(node);
 switch(node.kind){
  case 'row':return node.items.map(mathLabel).join(' ');
  case 'frac':return `(${mathLabel(node.top)}) divided by (${mathLabel(node.bottom)})`;
  case 'power':return `${mathLabel(node.base)} to the power ${mathLabel(node.exponent)}`;
  case 'root':return `square root of (${mathLabel(node.value)})`;
  case 'sub':return `${mathLabel(node.base)} base ${mathLabel(node.index)}`;
  case 'words':return node.value;
  case 'matrix':return node.rows.map(cells=>cells.map(mathLabel).join(', ')).join(' / ');
  default:throw new Error('Unknown math node');
 }
}
