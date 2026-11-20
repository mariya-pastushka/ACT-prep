import {
  organicIntro, organicKinds, organicChains, organicTables,
  pendulumIntro, pendulumSetup, pendulumExperiments,
} from '../../../../content/practice-5/science-data.mjs';
import shared from '../../practice-1/practice.module.css';
import base from '../../practice-1/science/science.module.css';
import css from './science.module.css';

function Bond({ from, to, startPadding = 13, endPadding = 13, double = false }) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy);
  const ux = dx / length;
  const uy = dy / length;
  const offsets = double ? [-1.7, 1.7] : [0];
  return offsets.map(offset => <line key={offset}
    x1={from.x + ux * startPadding - uy * offset}
    y1={from.y + uy * startPadding + ux * offset}
    x2={to.x - ux * endPadding - uy * offset}
    y2={to.y - uy * endPadding + ux * offset} />);
}

function Molecule({ carbons, prefix, kind }) {
  const name = prefix + kind.suffix;
  const points = Array.from({ length: carbons }, (_, index) => ({ x: 25 + index * 40, y: index % 2 ? 44 : 64 }));
  const last = points.at(-1);
  const subscript = '₀₁₂₃₄₅₆₇₈₉';
  const condensed = kind.id === 'alkane' ? `CH₃(CH₂)${subscript[carbons - 2]}CH₃`
    : kind.id === 'alcohol' ? `CH₃(CH₂)${subscript[carbons - 1]}OH`
      : `CH₃(CH₂)${subscript[carbons - 2]}CHO`;
  return <figure className={css.molecule}>
    <svg viewBox={`0 0 ${last.x + 74} 114`} role="img"
      aria-label={`${name}, a straight chain of ${carbons} carbon atoms. ${kind.id === 'alkane' ? 'Carbon and hydrogen only.' : kind.id === 'alcohol' ? 'Ends in a carbon bonded to an OH group.' : 'Ends in a carbon double-bonded to oxygen and single-bonded to hydrogen.'}`}>
      {points.slice(1).map((point, index) => <Bond key={index} from={points[index]} to={point}
        endPadding={kind.id === 'aldehyde' && index === carbons - 2 ? 6 : 13} />)}
      {points.map((point, index) => {
        const aldehydeEnd = kind.id === 'aldehyde' && index === carbons - 1;
        const hydrogenCount = index === 0 || (kind.id === 'alkane' && index === carbons - 1) ? 3 : 2;
        return <text key={index} x={point.x} y={point.y + 5} textAnchor="middle">
          {aldehydeEnd ? 'C' : <>CH<tspan baselineShift="sub" fontSize="11">{hydrogenCount}</tspan></>}
        </text>;
      })}
      {kind.id === 'alcohol' && <g className={css.functionalGroup}>
        <Bond from={last} to={{ x: last.x + 43, y: last.y }} endPadding={11} />
        <text x={last.x + 43} y={last.y + 5} textAnchor="middle">OH</text>
      </g>}
      {kind.id === 'aldehyde' && <g className={css.functionalGroup}>
        <Bond from={last} to={{ x: last.x + 32, y: last.y - 27 }} startPadding={6} endPadding={9} double />
        <Bond from={last} to={{ x: last.x + 32, y: last.y + 27 }} startPadding={6} endPadding={9} />
        <text x={last.x + 32} y={last.y - 22} textAnchor="middle">O</text>
        <text x={last.x + 32} y={last.y + 32} textAnchor="middle">H</text>
      </g>}
    </svg>
    <figcaption><strong>{name}</strong><span>{condensed}</span></figcaption>
  </figure>;
}

function StructureTable() {
  return <div id="organic-table-1" tabIndex={-1} className={`${base.tableCard} ${css.tableCard} ${css.structureCard}`}>
    <div className={css.tableScroll} role="region" aria-label="Table 1 chemical structures" tabIndex={0}>
      <table className={`${base.table} ${css.table} ${css.structureTable}`}>
        <caption>Table 1 · Carbon chains, name prefixes, and structures</caption>
        <thead><tr>
          <th scope="col">Carbons in the chain</th>
          <th scope="col">Name prefix</th>
          {organicKinds.map(kind => <th scope="col" key={kind.id}>{kind.label}<small>suffix -{kind.suffix}</small></th>)}
        </tr></thead>
        <tbody>{organicChains.map(chain => <tr key={chain.carbons} id={`organic-structure-${chain.carbons}`} tabIndex={-1}>
          <th scope="row">{chain.carbons}</th><td>{chain.prefix}-</td>
          {organicKinds.map(kind => <td key={kind.id}><Molecule {...chain} kind={kind} /></td>)}
        </tr>)}</tbody>
      </table>
    </div>
  </div>;
}

function DataTable({ table }) {
  return <div id={table.id} tabIndex={-1} className={`${base.tableCard} ${css.tableCard}`}>
    <div className={css.tableScroll} role="region" aria-label={table.caption} tabIndex={0}>
      <table className={`${base.table} ${css.table}`}>
        <caption>{table.caption}</caption>
        <thead><tr>{table.columns.map(column => <th scope="col" key={column}>{column}</th>)}</tr></thead>
        <tbody>{table.rows.map(([label, ...values]) => <tr key={label} id={`${table.rowPrefix}-${label}`} tabIndex={-1}>
          <th scope="row">{label}</th>{values.map((value, index) => <td key={table.columns[index + 1]}>{value}</td>)}
        </tr>)}</tbody>
      </table>
    </div>
  </div>;
}

export function OrganicPassage() {
  return <section className={base.dataBlock} aria-labelledby="organic-title">
    <h2 id="organic-title" className={`${shared.anchor} ${css.passageTitle}`}>Organic compounds</h2>
    <p id="organic-intro" tabIndex={-1} className={shared.anchor}>{organicIntro}</p>
    <StructureTable />
    {organicTables.map(table => <DataTable key={table.id} table={table} />)}
  </section>;
}

export function PendulumPassage() {
  return <section className={base.dataBlock} aria-labelledby="pendulum-title">
    <h2 id="pendulum-title" className={`${shared.anchor} ${css.passageTitle}`}>Pendulum experiments</h2>
    <p id="pendulum-intro" tabIndex={-1} className={shared.anchor}>{pendulumIntro}</p>
    <p id="pendulum-setup" tabIndex={-1} className={shared.anchor}>{pendulumSetup}</p>
    {pendulumExperiments.map(experiment => <section key={experiment.number} className={css.setup}>
      <h3 id={experiment.id} tabIndex={-1} className={shared.anchor}>Experiment {experiment.number}</h3>
      <p className={css.passageText}>{experiment.text}</p>
      <DataTable table={experiment.table} />
      <p id={`${experiment.id}-summary`} tabIndex={-1} className={`${shared.anchor} ${css.passageText}`}>{experiment.summary}</p>
    </section>)}
  </section>;
}

export function MeltingDifferences({ ru = false }) {
  const differences = organicTables[0].rows.map(([carbons, alkane, alcohol]) => [carbons, Number(alcohol) - Number(alkane)]);
  return <div className={css.tableCard}>
    <table className={base.table}>
      <caption>{ru ? 'Разницы по строкам таблицы 2' : 'Differences within each Table 2 row'}</caption>
      <thead><tr><th scope="col">{ru ? 'Атомов C' : 'Carbons'}</th><th scope="col">{ru ? 'Спирт − алкан (K)' : 'Alcohol − alkane (K)'}</th></tr></thead>
      <tbody>{differences.map(([carbons, difference]) => <tr key={carbons}><th scope="row">{carbons}</th><td>{difference}</td></tr>)}</tbody>
    </table>
    <div className={css.formula}>
      <math display="block" aria-label="The mean difference is 48 kelvin">
        <mrow><mfrac><mrow><mn>48</mn><mo>+</mo><mn>51</mn><mo>+</mo><mn>43</mn><mo>+</mo><mn>57</mn><mo>+</mo><mn>41</mn></mrow><mn>5</mn></mfrac><mo>=</mo><mn>48</mn><mtext> K</mtext></mrow>
      </math>
    </div>
  </div>;
}

export function ScienceNotes() {
  return <article className={css.passageText} lang="ru">
    <h3>Уточнения к данным и физической модели</h3>
    <p>В опыте 1 исходник сообщает среднее 1,46 с для свинца. Среднее пяти напечатанных измерений равно 1,454 с, то есть 1,45 с при округлении до сотых. В таблицах и тексте сохранены данные исходника. Для №7 важно, что все эти времена близки к полутора секундам.</p>
    <p>У маятника есть сила тяжести и натяжение нити. Для идеального маятника при малых углах период зависит от длины и ускорения свободного падения по формуле ниже. Сопротивление воздуха и погрешность измерения могут влиять на оценку, которую получают из периода. Само земное g от смены груза не меняется.</p>
    <div className={css.formula}>
      <math display="block" aria-label="T equals two pi times the square root of L over g">
        <mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>L</mi><mi>g</mi></mfrac></msqrt></mrow>
      </math>
      <math display="block" aria-label="The estimated g equals four pi squared L divided by T squared">
        <mrow><msub><mi>g</mi><mtext>оценка</mtext></msub><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup><mi>L</mi></mrow><msup><mi>T</mi><mn>2</mn></msup></mfrac></mrow>
      </math>
    </div>
    <p>В этих формулах T — период в секундах, L — длина маятника в метрах, g — ускорение свободного падения. При одинаковом g увеличение длины вдвое умножает период на √2.</p>
    <p><a href="https://openstax.org/books/university-physics-volume-1/pages/15-4-pendulums">OpenStax · Pendulums ↗︎</a></p>
    <p>Имена альдегидов в вариантах и таблице 1 сохранены как в задании. Систематический суффикс для альдегида — -al, например octanal. Группа альдегида — CHO с двойной связью C=O.</p>
    <p><a href="https://openstax.org/books/chemistry-2e/pages/20-3-aldehydes-ketones-carboxylic-acids-and-esters">OpenStax · Aldehydes and their naming ↗︎</a></p>
  </article>;
}
