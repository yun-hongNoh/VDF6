import {RotateCcw} from 'lucide-react';
import {CARD_KEYS,INFO_TYPES,RULES} from '../../domain/vdf/rules';
import type {BlockEvaluation,CardKey,InfoType,PresentationTrack,SubjectTraits} from '../../domain/vdf/types';
import type {VdfReviewOverride} from '../../services/vdfService';
import {CardLayoutIcon} from '../vdf/CardLayoutIcon';

function sameCard(a:CardKey|null|undefined,b:CardKey|null|undefined){return (a??null)===(b??null)}
const TRAITS:{key:keyof SubjectTraits;label:string;hint:string}[]=[
 {key:'branded_category',label:'브랜드 연상 대상',hint:'휴대기기·웨어러블·차량·가전·컴퓨터 등'},
 {key:'same_form_variants',label:'같은 기본형의 변형',hint:'같은 사물의 여러 변형을 나열'},
 {key:'replacement_type',label:'대체 유형',hint:'A를 B로 대체하는 관계'},
 {key:'scale_is_the_point',label:'크기 변화가 핵심',hint:'확대·축소 자체가 학습 포인트'},
 {key:'spreads_across_frame',label:'대상이 화면에 퍼짐',hint:'Card F의 빈 영역 계산 등에 사용'}
];
function trackLabel(track:PresentationTrack){return track==='image'?'이미지':track==='shape'?'도형':'글 중심'}

export function DecisionReview({base,current,override,onChange,onReset}:{
 base:BlockEvaluation;current:BlockEvaluation;override:VdfReviewOverride|undefined;
 onChange:(next:VdfReviewOverride)=>void;onReset:()=>void;
}){
 const relationChanged=current.infoType!==base.block.info_type;
 const trackChanged=current.presentationTrack!==base.presentationTrack;
 const cardChanged=!sameCard(current.card,base.block.card);
 const subjectChanged=(current.block.subject??'')!==(base.block.subject??'');
 const subjectOverrideExplicit=!!override&&Object.prototype.hasOwnProperty.call(override,'subject');
 const traitsChanged=JSON.stringify(current.block.subject_traits)!==JSON.stringify(base.block.subject_traits);
 const changed=relationChanged||trackChanged||cardChanged||subjectChanged||traitsChanged;
 function setRelation(infoType:InfoType){onChange({...override,infoType})}
 function setTrack(track:PresentationTrack){onChange({...override,track})}
 function setCard(card:CardKey|null){onChange({...override,card})}
 function setSubject(subject:string){onChange({...override,subject})}
 function setTrait(key:keyof SubjectTraits,value:boolean){onChange({...override,subjectTraits:{...(override?.subjectTraits||{}),[key]:value}})}
 const image=current.presentationTrack==='image'&&current.block.track==='image';
 const subjectBootstrapped=image&&!base.block.subject?.trim()&&!!current.block.subject?.trim()&&!subjectOverrideExplicit;
 const gateNeedsOverride=image&&(!current.block.gate||current.block.gate.passed!==true);
 return <section className="decision-review" aria-label="교수자 검토 및 조정">
  <div className="decision-review-head"><div><b>교수자 검토·조정</b><p>AI 제안을 출발점으로 두고, 교수자의 최종 판단을 기준으로 SVG와 Image Prompt를 다시 계산합니다.</p></div>{changed&&<button className="button ghost reset-review" onClick={onReset}><RotateCcw size={15}/>자동 판정으로 되돌리기</button>}</div>
  <div className="review-grid">
   <label className="review-field"><span>관계</span><select value={current.infoType} onChange={e=>setRelation(e.target.value as InfoType)}>{INFO_TYPES.map(it=><option key={it}>{it}</option>)}</select><small>자동: {base.block.info_type}{relationChanged?' → 교수자 조정':''}</small></label>
   <div className="review-field"><span>표현 방식</span><div className="track-choice" role="group" aria-label="표현 방식 선택">{(['text','shape','image'] as PresentationTrack[]).map(t=><button type="button" key={t} className={current.presentationTrack===t?'selected':''} aria-pressed={current.presentationTrack===t} onClick={()=>setTrack(t)}>{trackLabel(t)}</button>)}</div><small>자동: {trackLabel(base.presentationTrack)}{trackChanged?' → 교수자 조정':''}</small></div>
   {image&&<label className="review-field image-subject-field"><span>이미지 대상</span><textarea rows={3} value={current.block.subject??''} onChange={e=>setSubject(e.target.value)} placeholder="이미지에 실제로 그릴 대상을 입력하세요"/><small>{subjectBootstrapped?'원문 항목에서 대상·상태 중심으로 추출한 자동 초안입니다. 실제로 그릴 대상에 맞게 확인·수정하세요. · ':''}이 값이 최종 6줄 Prompt의 subject 원본이 됩니다.{subjectOverrideExplicit?' · 교수자 조정됨':''}</small></label>}
   {image&&<div className="review-field card-review"><span>배치 카드</span><div className="layout-tiles" role="group" aria-label="배치 카드 선택">
    <button type="button" className={`layout-tile ${current.card===null?'selected':''}`} aria-pressed={current.card===null} onClick={()=>setCard(null)}><CardLayoutIcon card={null}/><b>없음</b><small>카드 선택 필요</small></button>
    {CARD_KEYS.map(k=>{const rule=RULES.cards[k];const verified=rule.status==='verified'||rule.status==='verified_after_fix';return <button type="button" key={k} className={`layout-tile ${current.card===k?'selected':''} ${verified?'':'unverified'}`} aria-pressed={current.card===k} onClick={()=>setCard(k)}><CardLayoutIcon card={k}/><b>{k} · {rule.ko.split(' · ')[0]}</b><small>{verified?'검증됨':'미검증 · 결과 확인'}</small></button>})}
   </div><small>자동: {base.block.card?`${base.block.card} · ${RULES.cards[base.block.card].ko}`:'배치 없음'}{cardChanged?' → 교수자 조정됨':''}</small></div>}
   {image&&<details className="review-advanced"><summary>고급 설정 · 이미지 대상 특성</summary><div className="trait-grid">{TRAITS.map(t=><label key={t.key} className="trait-toggle"><input type="checkbox" checked={!!current.block.subject_traits[t.key]} onChange={e=>setTrait(t.key,e.target.checked)}/><span><b>{t.label}</b><small>{t.hint}</small></span></label>)}</div>{traitsChanged&&<small className="changed-note">대상 특성이 교수자 판단으로 조정되었습니다. Prompt 관련 조각을 현재 상태 기준으로 다시 계산합니다.</small>}</details>}
   {gateNeedsOverride&&<div className="professor-gate-note"><b>Image Gate 확인</b><p>AI 규칙상 이미지 권장 조건을 충족하지 않았습니다. 현재는 교수자가 이미지 사용으로 변경한 상태이며, Gate 결과는 삭제하지 않고 그대로 보존합니다.</p></div>}
  </div>
 </section>
}
