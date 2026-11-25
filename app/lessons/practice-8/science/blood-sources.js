import {bloodIntro,bloodRows,analyses,bloodCrosses} from '../../../../content/practice-8/science-blood-data.mjs';
import base from '../../practice-1/science/science.module.css';
import shared from '../../practice-1/practice.module.css';
import css from './science.module.css';

function Allele({value}){return <msup><mi>I</mi><mi>{value}</mi></msup>;}
export function Genotype({pair}){const ordered=[...pair].sort((a,b)=>'ABO'.indexOf(a)-'ABO'.indexOf(b));return <math aria-label={ordered.map(x=>`I superscript ${x}`).join(', ')}><mrow>{ordered.map((a,i)=><Allele key={i} value={a}/>)}</mrow></math>;}
export function GenotypeChoice({choice}){return <span className={css.genotype}>{choice.pairs.map((pair,i)=><span key={i}>{i>0&&<span>{choice.join==='and'?' and ':' × '}</span>}<Genotype pair={pair}/></span>)}</span>;}

export function BloodPassage(){return <section className={base.dataBlock} aria-labelledby="blood-title">
 <h2 id="blood-title" className={shared.anchor}>Blood-type inheritance</h2>
 <p id="blood-intro" tabIndex={-1} className={shared.anchor}>{bloodIntro}</p>
 <div id="blood-rules" tabIndex={-1} className={`${css.text} ${shared.anchor}`}><p>There are three possible <em>alleles</em> (forms) of this gene: the type-A blood allele (<Genotype pair={['A']}/>), the type-B blood allele (<Genotype pair={['B']}/>), and the type-O blood allele (<Genotype pair={['O']}/>). Both <Genotype pair={['A']}/> and <Genotype pair={['B']}/> are <em>dominant</em> to <Genotype pair={['O']}/>, and <Genotype pair={['O']}/> is <em>recessive</em> to <Genotype pair={['A']}/> and <Genotype pair={['B']}/>. This means that an individual with one <Genotype pair={['A']}/> and one <Genotype pair={['O']}/> will have type-A blood, and an individual with one <Genotype pair={['B']}/> and one <Genotype pair={['O']}/> will have type-B blood. When an individual has one <Genotype pair={['A']}/> and one <Genotype pair={['B']}/> allele, this individual will have type-AB blood, due to the <em>codominance</em> of the <Genotype pair={['A']}/> and <Genotype pair={['B']}/> alleles.</p></div>
 <div id="blood-table-1" tabIndex={-1} className={`${base.tableCard} ${css.tableCard}`}><div className={css.scroll} role="region" aria-label="Blood types and possible genotypes" tabIndex={0}><table className={base.table}><caption>Table 1 · Blood types and possible genotypes</caption><thead><tr><th scope="col">Blood Type</th><th scope="col">Possible Genotypes</th></tr></thead><tbody>{bloodRows.map(row=><tr key={row.type} id={`blood-type-${row.type}`} tabIndex={-1}><th scope="row">{row.type}</th><td>{row.pairs.map((pair,i)=><span key={i}>{i>0&&' or '}<Genotype pair={pair}/></span>)}</td></tr>)}</tbody></table></div></div>
 <p>To explore the inheritance patterns of blood types in sheep, researchers conducted 4 analyses. In each analysis, male and female sheep of differing blood types were mated and the resultant blood types of their offspring recorded.</p>
 {analyses.map(analysis=><section className={css.section} key={analysis.id} id={`blood-analysis-${analysis.id}`} tabIndex={-1}><h3>Analysis {analysis.id}</h3><p className={css.text}>{analysis.text}</p><table className={`${base.table} ${css.results}`}><caption>Observed offspring · Analysis {analysis.id}</caption><thead><tr><th scope="col">Blood type</th><th scope="col">Percentage</th></tr></thead><tbody>{analysis.results.map(([type,percent])=><tr key={type}><th scope="row">{type}</th><td>{percent}%</td></tr>)}</tbody></table></section>)}
 </section>;}

function Punnett({cross,ru=false}){return <div className={css.punnett}>
 <p className={css.genotype}><Genotype pair={cross[0]}/> × <Genotype pair={cross[1]}/></p>
 <div className={css.scroll}><table className={base.table}><caption>{ru?'Сетка Пеннета: один аллель от каждого родителя':'Punnett square: one allele from each parent'}</caption><thead><tr><th scope="col">{ru?'Аллели':'Alleles'}</th>{cross[1].map((a,i)=><th scope="col" key={i}><Genotype pair={[a]}/></th>)}</tr></thead><tbody>{cross[0].map((a,i)=><tr key={i}><th scope="row"><Genotype pair={[a]}/></th>{cross[1].map((b,j)=><td key={j}><Genotype pair={[a,b]}/></td>)}</tr>)}</tbody></table></div>
 <p>{ru?'Каждая клетка показывает одно из четырёх равновероятных сочетаний аллелей в данной модели. Повторяющиеся клетки учитываются отдельно.':'Each cell represents one of four equally likely allele combinations in this model. Repeated genotypes count as separate outcomes.'}</p>
 </div>;}
export function CrossOne(props){return <Punnett cross={bloodCrosses[1]} {...props}/>;}
export function CrossThree(props){return <Punnett cross={bloodCrosses[3]} {...props}/>;}
export function AllAB(props){return <Punnett cross={bloodCrosses.allAB} {...props}/>;}
export function OAlleleCarriers({ru=false}){return <div>{[1,2,3,4].map(id=><section key={id}><h4>{ru?'Анализ':'Analysis'} {id}</h4><Punnett cross={bloodCrosses[id]} ru={ru}/></section>)}</div>;}
export function BloodCount({ru=false}){return <div className={css.calculation}><p>{ru?'В анализе 3 группа B составляет 25% всех потомков.':'In Analysis 3, type B makes up 25% of all offspring.'}</p><math display="block" aria-label="300 times 25 over 100 equals 75"><mrow><mn>300</mn><mo>×</mo><mfrac><mn>25</mn><mn>100</mn></mfrac><mo>=</mo><mn>75</mn></mrow></math></div>;}
