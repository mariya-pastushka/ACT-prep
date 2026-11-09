export function restoreEnglishAttempt(saved,questions){
 const answers={};
 for(const q of questions){const value=saved?.answers?.[q.id];if(q.choices.some(c=>c.label===value))answers[q.id]=value;}
 return {answers,submitted:saved?.submitted===true};
}
export function englishPracticeResult(questions,answers){
 const answered=questions.filter(q=>q.choices.some(c=>c.label===answers[q.id])).length;
 const correct=questions.filter(q=>answers[q.id]===q.key).length;
 const missed=questions.filter(q=>answers[q.id]!==q.key);
 return {answered,correct,missed,total:questions.length,incorrect:answered-correct,unanswered:questions.length-answered,percent:questions.length?Math.round(100*correct/questions.length):0};
}
