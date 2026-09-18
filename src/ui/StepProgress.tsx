import {CheckCircle2,Circle} from 'lucide-react';
export function JourneySteps({current,maxAvailable,onStep}:{current:number;maxAvailable:number;onStep?:(step:number)=>void}){
 const labels=['계획 만들기','계획 검사','결과 확인','제작 활용'];
 return <ol className="journey" aria-label="VDF 사용 단계">{labels.map((label,i)=>{const n=i+1;const done=n<current;const active=n===current;const enabled=n<=maxAvailable;return <li key={label} className={`${done?'done':active?'active':''} ${enabled?'enabled':'locked'}`}><button type="button" disabled={!enabled} aria-current={active?'step':undefined} onClick={()=>enabled&&onStep?.(n)}>{done?<CheckCircle2/>:<Circle/>}<span><small>{n}</small>{label}</span></button></li>})}</ol>
}
