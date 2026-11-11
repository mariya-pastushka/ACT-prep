import {restoreEnglishAttempt} from './english-practice.mjs';
export function restoreScienceProgress(current,legacy,questions){
 // A current empty draft is intentional too: retry must not resurrect the old six answers.
 if(current!==undefined)return {attempt:restoreEnglishAttempt(current,questions),migrated:false};
 if(legacy===undefined)return {attempt:{answers:{},submitted:false},migrated:false};
 const old=restoreEnglishAttempt(legacy,questions.filter(q=>q.id<=6));
 return {attempt:{answers:old.answers,submitted:false},migrated:Object.keys(old.answers).length>0||old.submitted};
}
