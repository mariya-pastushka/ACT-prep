'use client';
import {useId,useRef,useState} from 'react';
import {scienceFigures} from '../../../../content/practice-2/science-data.mjs';
import styles from '../../trial/trial.module.css';
import css from './science.module.css';
export function SourcePixels({asset,crop=asset.crop,alt=asset.alt,style}){return <svg xmlns="http://www.w3.org/2000/svg" viewBox={crop.join(' ')} width={crop[2]} height={crop[3]} role="img" aria-label={alt} focusable="false" className={css.pixels} style={style}>
 <image href={asset.src} x="0" y="0" width={asset.width} height={asset.height}/>
</svg>}
export default function SourceFigure({name,id,onlyButton=false}){
 const asset=scienceFigures[name],dialog=useRef(null),titleId=useId();
 const [zoom,setZoom]=useState(1.5);
 const button=<button type="button" className={`${styles.smallButton} ${css.zoomButton}`} onClick={()=>dialog.current.showModal()}>{onlyButton?'Enlarge original answer drawings':'Enlarge '+asset.title} ⤢</button>;
 // Extra canvas width leaves space for a non-overlay scrollbar beside the source image.
 const modal=<dialog ref={dialog} className={css.dialog} aria-labelledby={titleId} onClose={()=>setZoom(1.5)} onClick={e=>{if(e.target===e.currentTarget)e.currentTarget.close()}}>
  <div className={css.dialogHead}><h3 id={titleId}>{asset.title}</h3><button type="button" onClick={()=>dialog.current.close()}>Close ×</button></div>
  <label className={css.zoomControl}>Zoom <input aria-label="Figure zoom" type="range" min="1" max="3" step="0.25" value={zoom} onChange={e=>setZoom(Number(e.target.value))}/><output>{Math.round(zoom*100)}%</output></label>
  <div className={css.zoomCanvas} tabIndex={0} aria-label="Scrollable enlarged figure" style={{width:asset.crop[2]*zoom+24}}><SourcePixels asset={asset} style={{width:asset.crop[2]*zoom,maxWidth:'none'}}/></div>
  <p className={css.zoomHint}>Scroll the enlarged figure to inspect every label. Press Escape or Close to return.</p>
 </dialog>;
 if(onlyButton)return <>{button}{modal}</>;
 return <figure id={id} className={css.sourceFigure}>
  <SourcePixels asset={asset} style={{width:asset.crop[2]}}/>
  <figcaption>{asset.title}</figcaption><div>{button}</div>{modal}
 </figure>;
}
