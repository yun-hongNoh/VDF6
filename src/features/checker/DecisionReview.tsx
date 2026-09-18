import {RotateCcw} from 'lucide-react';
import {CARD_KEYS,INFO_TYPES,RULES} from '../../domain/vdf/rules';
import type {BlockEvaluation,CardKey,InfoType} from '../../domain/vdf/types';
import type {VdfReviewOverride} from '../../services/vdfService';
import {CardLayoutIcon} from '../vdf/CardLayoutIcon';

function sameCard(a:CardKey|null|undefined,b:CardKey|null|undefined){return (a??null)===(b??null)}

export function DecisionReview({base,current,override,onChange,onReset}:{
 base:BlockEvaluation;current:BlockEvaluation;override:VdfReviewOverride|undefined;
 onChange:(next:VdfReviewOverride)=>void;onReset:()=>void;
}){
 const relationChanged=current.infoType!==base.block.info_type;
 const cardChanged=!sameCard(current.card,base.block.card);
 const changed=relationChanged||cardChanged;
 function setRelation(infoType:InfoType){onChange({...override,infoType})}
 function setCard(card:CardKey|null){onChange({...override,card})}
 return <section className="decision-review" aria-label="교수자 검토 및 조정">
  <div className="decision-review-head"><div><b>교수자 검토·조정</b><p>자동 판정을 출발점으로 두고, 강의 의도에 맞으면 관계와 배치를 직접 바꿀 수 있습니다.</p></div>{changed&&<button className="button ghost reset-review" onClick={onReset}><RotateCcw size={15}/>자동 판정으로 되돌리기</button>}</div>
  <div className="review-grid">
   <label className="review-field"><span>관계</span><select value={current.infoType} onChange={e=>setRelation(e.target.value as InfoType)}>{INFO_TYPES.map(it=><option key={it}>{it}</option>)}</select><small>자동: {base.block.info_type}{relationChanged?' → 조정됨':''}</small></label>
   <div className="review-field card-review"><span>배치 카드</span><div className="layout-tiles" role="group" aria-label="배치 카드 선택">
    <button type="button" className={`layout-tile ${current.card===null?'selected':''}`} aria-pressed={current.card===null} onClick={()=>setCard(null)}><CardLayoutIcon card={null}/><b>없음</b><small>SVG / 글 중심</small></button>
    {CARD_KEYS.map(k=>{const rule=RULES.cards[k];const verified=rule.status==='verified'||rule.status==='verified_after_fix';return <button type="button" key={k} className={`layout-tile ${current.card===k?'selected':''} ${verified?'':'unverified'}`} aria-pressed={current.card===k} onClick={()=>setCard(k)}><CardLayoutIcon card={k}/><b>{k} · {rule.ko.split(' · ')[0]}</b><small>{verified?'검증됨':'미검증 · 결과 확인'}</small></button>})}
   </div><small>자동: {base.block.card?`${base.block.card} · ${RULES.cards[base.block.card].ko}`:'배치 없음'}{cardChanged?' → 조정됨':''}</small></div>
  </div>
 </section>
}
