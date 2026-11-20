import { virusIntro, virusHypotheses, soilIntro, soilExperiments, soilTables } from '../../../../content/practice-6/science-data.mjs';
import shared from '../../practice-1/practice.module.css';
import base from '../../practice-1/science/science.module.css';
import css from './science.module.css';

function Arrowhead({ id }) {
  return <defs><marker id={id} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
    <path d="M0 0 L8 4 L0 8 L2 4 Z" fill="currentColor" />
  </marker></defs>;
}

function CoevolutionFigure() {
  const outer = [[155,245],[235,245],[295,305],[295,385],[235,445],[155,445],[95,385],[95,305]];
  const inner = [[165,302],[224,294],[242,350],[205,384],[157,359]];
  const facets = [[0,0],[0,1],[1,1],[2,1],[2,2],[3,2],[3,3],[4,3],[5,3],[5,4],[6,4],[7,4],[7,0]];
  return <figure id="virus-figure-1" tabIndex={-1} className={css.diagram}>
    <svg viewBox="0 0 480 510" role="img" aria-labelledby="p6-coevolution-title p6-coevolution-description">
      <title id="p6-coevolution-title">Figure 1 · Coevolution Hypothesis</title>
      <desc id="p6-coevolution-description">An ancestral self-replicating RNA sequence and its replicated sequence are shown above the first coevolved viral particle, which contains RNA inside a faceted protein structure.</desc>
      <Arrowhead id="p6-coevolution-arrow" />
      <path className={css.genome} d="M35 87 C65 15 105 142 149 87 S228 23 275 65" />
      <path className={css.genome} d="M142 131 C164 76 191 83 215 123 S270 165 292 128" />
      <path className={css.sketch} d="M148 91 C179 69 187 108 160 112 C121 116 116 145 141 146 C158 146 170 158 163 170" />
      <path className={css.leader} d="M320 55 L267 58" markerEnd="url(#p6-coevolution-arrow)" />
      <text x="326" y="53">RNA sequence</text>
      <path className={css.leader} d="M320 131 L285 139" markerEnd="url(#p6-coevolution-arrow)" />
      <text x="326" y="125">replicated<tspan x="326" dy="23">sequence</tspan></text>
      <text x="20" y="205">ancestral self-replicating RNA</text>
      <polygon className={css.sketch} points={outer.map(point=>point.join(',')).join(' ')} />
      <polygon className={css.sketch} points={inner.map(point=>point.join(',')).join(' ')} />
      {facets.map(([a,b],index)=><line key={index} className={css.sketch} x1={outer[a][0]} y1={outer[a][1]} x2={inner[b][0]} y2={inner[b][1]} />)}
      <path className={css.genome} d="M176 327 C192 300 201 325 187 336 S176 358 195 349 S221 334 211 357 S209 375 218 367" />
      <path className={css.leader} d="M340 328 L294 312" markerEnd="url(#p6-coevolution-arrow)" />
      <text x="346" y="334">protein</text>
      <text x="20" y="488">first coevolved viral particle</text>
    </svg>
    <figcaption><strong>Figure 1.</strong> Coevolution Hypothesis · Ancestral self-replicating RNA and the first coevolved viral particle.</figcaption>
  </figure>;
}

function RegressiveFigure() {
  return <figure id="virus-figure-2" tabIndex={-1} className={css.diagram}>
    <svg viewBox="0 0 480 510" role="img" aria-labelledby="p6-regressive-title p6-regressive-description">
      <title id="p6-regressive-title">Figure 2 · Regressive Evolution Hypothesis</title>
      <desc id="p6-regressive-description">An ancestral intracellular parasitic bacterium has DNA and cell membranes. Below it, the first regressively evolved virus retains genetic material inside a smaller protein structure and outer boundary.</desc>
      <Arrowhead id="p6-regressive-arrow" />
      <path className={css.sketch} d="M90 86 C112 48 158 64 202 69 S291 45 330 62 C370 79 368 145 344 176 C324 202 272 188 226 189 S145 213 106 191 C75 173 68 120 90 86 Z" />
      <path className={css.sketch} d="M100 91 C122 62 161 77 202 81 S288 60 323 75 C352 87 352 141 333 165 C314 188 270 176 226 178 S151 200 115 179 C91 164 83 120 100 91 Z" />
      <path className={css.sketch} d="M110 96 C130 77 164 89 204 94 S287 73 315 86 C337 97 339 136 321 155 C305 173 269 163 225 166 S156 186 125 168 C105 156 98 119 110 96 Z" />
      <path className={css.sketch} d="M78 135 C58 118 61 154 42 137 S23 151 6 143" />
      {Array.from({length:20},(_,index)=>{
        const a=index*Math.PI/10; const x=153+31*Math.cos(a),y=130+34*Math.sin(a);
        return <ellipse key={index} className={css.genome} cx={x} cy={y} rx="5.5" ry="7" transform={`rotate(${index*18} ${x} ${y})`} />;
      })}
      <path className={css.sketch} d="M256 142 C242 134 242 151 254 153 C250 166 269 169 270 155 C287 159 283 142 272 144 C272 134 261 134 256 142 Z" />
      <path className={css.leader} d="M76 34 L133 97" markerEnd="url(#p6-regressive-arrow)" />
      <text x="43" y="28">DNA</text>
      <text x="288" y="28">cell membranes</text>
      <path className={css.leader} d="M354 34 L341 82" markerEnd="url(#p6-regressive-arrow)" />
      <path className={css.leader} d="M390 34 L361 116" markerEnd="url(#p6-regressive-arrow)" />
      <text x="240" y="243" textAnchor="middle">ancestral intracellular<tspan x="240" dy="24">parasitic bacterium</tspan></text>
      <path className={css.sketch} d="M179 323 C206 293 260 298 282 331 C300 357 292 396 272 418 C247 437 206 433 184 410 C164 386 157 348 179 323 Z" />
      <polygon className={css.sketch} points="196,320 258,320 281,362 258,409 198,409 177,365" />
      <path className={css.genome} d="M196 340 C211 340 206 363 225 362 S239 389 259 390 M204 333 C219 334 214 355 233 356 S247 382 267 383" />
      {[[203,341,208,335],[211,353,217,346],[222,360,229,354],[233,367,240,360],[239,379,246,372],[252,386,260,380]].map(([x1,y1,x2,y2],index)=><line key={index} className={css.genome} x1={x1} y1={y1} x2={x2} y2={y2} />)}
      <text x="240" y="484" textAnchor="middle">first regressively evolved virus</text>
    </svg>
    <figcaption><strong>Figure 2.</strong> Regressive Evolution Hypothesis · An ancestral intracellular parasitic bacterium and the first regressively evolved virus.</figcaption>
  </figure>;
}

export function VirusesPassage() {
  return <section className={base.dataBlock} aria-labelledby="virus-title">
    <h2 id="virus-title" className={shared.anchor}>Origins of viruses</h2>
    <p id="virus-intro" tabIndex={-1} className={shared.anchor}>{virusIntro}</p>
    {virusHypotheses.map((hypothesis,index)=><section className={css.hypothesis} key={hypothesis.id}>
      <h3>{hypothesis.title}</h3>
      <p id={hypothesis.id} tabIndex={-1} className={`${shared.anchor} ${css.passageText}`}>{hypothesis.text}</p>
      {index===0 && <CoevolutionFigure />}
      {index===2 && <RegressiveFigure />}
    </section>)}
  </section>;
}

function SoilTable({ table }) {
  return <div id={table.id} tabIndex={-1} className={`${base.tableCard} ${css.tableCard}`}>
    <div className={css.tableScroll} role="region" aria-label={table.caption} tabIndex={0}>
      <table className={base.table}>
        <caption>{table.caption}</caption>
        <thead>
          <tr><th scope="col" rowSpan={2}>Soil</th><th scope="colgroup" colSpan={table.columns.length}>{table.group}</th></tr>
          <tr>{table.columns.map(column=><th scope="col" key={column}>{column}</th>)}</tr>
        </thead>
        <tbody>{table.rows.map(([soil,...values])=><tr key={soil} id={`${table.rowPrefix}-${soil.toLowerCase()}`} tabIndex={-1}>
          <th scope="row">{soil}</th>{values.map((value,index)=><td key={table.columns[index]}>{value}</td>)}
        </tr>)}</tbody>
      </table>
    </div>
    <p className={css.tableHint}>Soil X: 5% clay · Soil Y: 40% clay</p>
  </div>;
}

export function SoilPassage() {
  return <section className={base.dataBlock} aria-labelledby="soil-title">
    <h2 id="soil-title" className={shared.anchor}>Wind and topsoil deflation</h2>
    <p id="soil-intro" tabIndex={-1} className={shared.anchor}>{soilIntro}</p>
    {soilExperiments.map((experiment,index)=><section className={css.experiment} key={experiment.id}>
      <h3>{experiment.title}</h3>
      <p id={experiment.id} tabIndex={-1} className={`${shared.anchor} ${css.passageText}`}>{experiment.text}</p>
      {soilTables.slice(index===0?0:1,index===0?1:3).map(table=><SoilTable table={table} key={table.id} />)}
    </section>)}
  </section>;
}

function ClayFraction() {
  return <math display="block" aria-label="Ten minus five over forty minus five equals one seventh">
    <mrow><mfrac><mrow><mn>10</mn><mo>−</mo><mn>5</mn></mrow><mrow><mn>40</mn><mo>−</mo><mn>5</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>7</mn></mfrac></mrow>
  </math>;
}

export function ClayPrediction({ ru=false }) {
  return <div className={css.prediction}>
    <div className={css.tableScroll}>
      <table className={base.table}>
        <caption>{ru?'№9 · Сравнение при 0% органического покрова':'Question 9 · Compare at 0% organic cover'}</caption>
        <thead><tr><th scope="col">{ru?'Почва':'Soil'}</th><th scope="col">{ru?'Глина':'Clay'}</th><th scope="col">{ru?'Выдувание (кг/га)':'Deflation (kg/ha)'}</th></tr></thead>
        <tbody><tr><th scope="row">X</th><td>5%</td><td>105,000</td></tr><tr><th scope="row">{ru?'Оценка':'Estimate'}</th><td>10%</td><td>≈ 99,286</td></tr><tr><th scope="row">Y</th><td>40%</td><td>65,000</td></tr></tbody>
      </table>
    </div>
    <div className={css.formula}>
      <ClayFraction />
      <math display="block" aria-label="105000 minus 40000 divided by 7 is approximately 99286">
        <mrow><mn>105000</mn><mo>−</mo><mfrac><mn>40000</mn><mn>7</mn></mfrac><mo>≈</mo><mn>99286</mn></mrow>
      </math>
    </div>
    <p>{ru?'Это приближённая линейная оценка между двумя измеренными почвами. Она помогает выбрать 99 800 кг/га; точную зависимость от процента глины в этом опыте не измеряли.':'This is a rough linear interpolation between the two measured soils. It supports choosing 99,800 kg/ha; the experiment does not establish an exact function of clay percentage.'}</p>
  </div>;
}

export function WetClayPrediction({ ru=false }) {
  return <div className={css.prediction}>
    <div className={css.tableScroll}>
      <table className={base.table}>
        <caption>{ru?'№13 · Сравнение после 8 часов полива':'Question 13 · Compare after 8 hours of sprinkling'}</caption>
        <thead><tr><th scope="col">{ru?'Глина':'Clay'}</th><th scope="col">{ru?'Вода':'Water content'}</th><th scope="col">{ru?'Выдувание (кг/га)':'Deflation (kg/ha)'}</th></tr></thead>
        <tbody><tr><th scope="row">5% · X</th><td>16%</td><td>14,000</td></tr><tr><th scope="row">10% · {ru?'оценка':'estimate'}</th><td>≈ 16.86%</td><td>≈ 13,471</td></tr><tr><th scope="row">40% · Y</th><td>22%</td><td>10,300</td></tr></tbody>
      </table>
    </div>
    <div className={css.formula}>
      <ClayFraction />
      <math display="block" aria-label="16 plus 6 divided by 7 is approximately 16.86 percent">
        <mrow><mn>16</mn><mo>+</mo><mfrac><mn>6</mn><mn>7</mn></mfrac><mo>≈</mo><mn>16.86</mn><mo>%</mo></mrow>
      </math>
      <math display="block" aria-label="14000 minus 3700 divided by 7 is approximately 13471">
        <mrow><mn>14000</mn><mo>−</mo><mfrac><mn>3700</mn><mn>7</mn></mfrac><mo>≈</mo><mn>13471</mn></mrow>
      </math>
    </div>
    <p>{ru?'Обе оценки близки к паре F: 17% воды и 13 400 кг/га. Это прогноз по тренду, а не отдельное измерение почвы с 10% глины.':'Both estimates are close to F: 17% water content and 13,400 kg/ha. This is a trend-based prediction rather than a measurement of 10%-clay soil.'}</p>
  </div>;
}

export function ScienceNotes() {
  return <article className={css.passageText} lang="ru">
    <h3>Уточнения к терминам и прогнозам</h3>
    <p>В тексте задания РНК названа nucleotide. Для конспекта точнее: РНК и ДНК — нуклеиновые кислоты, составленные из множества нуклеотидов. Нуклеотид — отдельное звено цепочки. <a href="https://openstax.org/books/biology-2e/pages/3-5-nucleic-acids">OpenStax · Nucleic acids ↗︎</a></p>
    <p>Капсид — белковая оболочка вируса. У некоторых вирусов снаружи есть ещё липидная оболочка, envelope. Это разные структуры; слова «белковая оболочка» и «клеточная мембрана» нельзя автоматически считать синонимами. <a href="https://openstax.org/books/microbiology/pages/6-1-viruses">OpenStax · Viruses ↗︎</a></p>
    <p>В №9 и №13 измерены только почвы с 5% и 40% глины. Прогноз для 10% предполагает продолжение наблюдаемого тренда между ними. Линейная интерполяция здесь — полезная приближённая модель для выбора варианта, а не установленный закон для любых почв.</p>
  </article>;
}
