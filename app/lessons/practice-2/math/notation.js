import {mathLabel} from '../../../../content/practice-2/math-notation.mjs';
import css from './math.module.css';
function Part({node}){
 if(typeof node==='string'||typeof node==='number'){
  const tokens=String(node).match(/\d+(?:,\d{3})*(?:\.\d+)?|log|[A-Za-zΑ-ω]|\s+|./gu)||[];
  return <mrow>{tokens.map((token,i)=>/^\s+$/.test(token)?<mspace key={i} width="0.2em"/>:/^\d/.test(token)?<mn key={i}>{token}</mn>:token==='log'?<mi key={i} mathvariant="normal">log</mi>:/^[A-Za-zΑ-ω]$/.test(token)?<mi key={i}>{token}</mi>:<mo key={i}>{token}</mo>)}</mrow>;
 }
 switch(node.kind){
  case 'row':return <mrow>{node.items.map((item,i)=><Part node={item} key={i}/>)}</mrow>;
  case 'frac':return <mfrac><Part node={node.top}/><Part node={node.bottom}/></mfrac>;
  case 'power':return <msup><Part node={node.base}/><Part node={node.exponent}/></msup>;
  case 'root':return <msqrt><Part node={node.value}/></msqrt>;
  case 'sub':return <msub><Part node={node.base}/><Part node={node.index}/></msub>;
  case 'words':return <mtext>{node.value}</mtext>;
  default:return null;
 }
}
export default function MathNotation({value,display=false}){
 const math=<math xmlns="http://www.w3.org/1998/Math/MathML" display={display?'block':'inline'} aria-label={mathLabel(value)}><mstyle displaystyle="true"><Part node={value}/></mstyle></math>;
 return display?<div className={css.equation}>{math}</div>:<span className={css.inlineMath}>{math}</span>;
}
export function RichText({content}){return content.map((part,i)=>typeof part==='string'?part:<MathNotation key={i} value={part}/>)}
export function Blocks({content}){return content.map((part,i)=>typeof part==='string'?<p key={i}>{part}</p>:<MathNotation key={i} value={part} display/>)}
