import {ChevronRight} from 'lucide-react';
import type {BlockEvaluation} from '../../domain/vdf/types';

function gateValue(r:BlockEvaluation){
 if(r.block.gate?.passed===true)return '그릴 것 남음';
 if(r.block.gate?.passed===false)return '그림 없이';
 return r.block.track==='image'?'판단 확인':'글 중심';
}
function expression(r:BlockEvaluation){return r.presentationTrack==='image'?'이미지':r.presentationTrack==='shape'?'SVG 도형':'글 중심'}
function layout(r:BlockEvaluation){return r.presentationTrack==='image'?(r.card?`${r.card} 배치`:'카드 선택 필요'):r.diagramSvg?'관계형 도형':'배치 없음'}
function output(r:BlockEvaluation){return r.presentationTrack==='image'?(r.prompt?'Prompt 6줄':'이미지 설정 확인'):r.diagramSvg?'SVG':'텍스트'}

export function DecisionRail({result,adjusted}:{result:BlockEvaluation;adjusted:boolean}){
 const steps=[
  ['글자 지우기',gateValue(result)],
  ['관계',result.infoType],
  ['표현',expression(result)],
  ['배치',layout(result)],
  ['결과',output(result)]
 ];
 return <section className="decision-rail" aria-label="VDF 판단 경로">
  <div className="decision-rail-head"><b>판단 경로</b><span className={adjusted?'review-state adjusted':'review-state'}>{adjusted?'교수자 조정 반영':'자동 판정'}</span></div>
  <div className="decision-rail-track">{steps.map(([label,value],i)=><div className="decision-step-wrap" key={label}>
    <div className="decision-step"><small>{label}</small><strong>{value}</strong></div>{i<steps.length-1&&<ChevronRight className="decision-arrow" size={17} aria-hidden="true"/>}
  </div>)}</div>
 </section>
}
