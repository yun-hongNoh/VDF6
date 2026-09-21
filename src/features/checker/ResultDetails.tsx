import {CARD_KEYS,RULES} from '../../domain/vdf/rules';
import type {BlockEvaluation} from '../../domain/vdf/types';
import {StatusBadge} from '../../ui/StatusBadge';

function representation(result:BlockEvaluation){
  if(result.presentationTrack==='image')return result.prompt?'이미지 Prompt':'이미지 설정 확인';
  if(result.presentationTrack==='shape')return result.diagramSvg?'SVG 도형':'도형 설정 확인';
  return '글 중심';
}
function visualization(result:BlockEvaluation){
  return result.presentationTrack==='text'?'NO':'YES';
}
function verification(result:BlockEvaluation){
  if(!result.card)return {tone:'neutral' as const,label:'카드 검증 대상 아님'};
  const status=RULES.cards[result.card].status;
  const ok=status==='verified'||status==='verified_after_fix';
  return {tone:ok?'success' as const:'warning' as const,label:ok?'검증됨':'미검증/주의'};
}
function decisionReason(result:BlockEvaluation){
  const gate=result.block.gate;
  if(result.presentationTrack==='image'&&gate?.passed!==true)return 'AI Image Gate 결과를 보존한 상태에서 교수자가 이미지 사용으로 조정했습니다.';
  if(gate)return gate.reason;
  if(result.diagramSvg)return `${result.infoType} 관계에 따라 편집 가능한 SVG 도형으로 표현됩니다.`;
  return `${result.infoType} 관계의 글 중심 덩어리로 유지됩니다.`;
}

export function ResultDetails({result}:{result:BlockEvaluation}){
  const verify=verification(result);
  const alternatives=result.card?CARD_KEYS.filter(k=>k!==result.card):[];
  return <details className="decision-details">
    <summary>판단 근거 펼쳐보기</summary>
    <div className="decision-body">
      <dl className="decision-grid">
        <div><dt>관계</dt><dd>{result.infoType}</dd></div>
        <div><dt>시각화 필요</dt><dd>{visualization(result)}</dd></div>
        <div><dt>표현 방식</dt><dd>{representation(result)}</dd></div>
        <div><dt>선택 카드</dt><dd>{result.card?`${result.card} · ${RULES.cards[result.card].ko}`:'없음'}</dd></div>
        <div><dt>검증 상태</dt><dd><StatusBadge tone={verify.tone}>{verify.label}</StatusBadge></dd></div>
        <div className="decision-wide"><dt>판정 이유</dt><dd>{decisionReason(result)}</dd></div>
        <div className="decision-wide"><dt>확인할 것</dt><dd>{result.warnings.length?`${result.warnings.length}건 — 아래 Warning을 확인하세요.`:'없음'}</dd></div>
        <div className="decision-wide"><dt>대안 카드</dt><dd>{result.card
          ? <><span>{alternatives.map(k=>`${k} · ${RULES.cards[k].ko}`).join(' / ')}</span><small>자동 후보 판정이 아니라, 교수자가 검토할 수 있는 다른 A~F 배치 선택지를 보여줍니다.</small></>
          : <><span>이미지 카드 선택 없음</span><small>현재 결과는 기존 Domain 판정에 따라 SVG 또는 글 중심 경로를 사용합니다.</small></>}</dd></div>
      </dl>
      {result.warnings.length>0&&<div className="decision-warning" aria-label="Warning 이유">
        <b>Warning 이유</b>
        {result.warnings.map(w=><p key={w.key}>• {w.message}</p>)}
      </div>}
    </div>
  </details>
}
