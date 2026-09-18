import {ArrowDown,ArrowRight,BookOpenCheck,FileJson2,Image,NotebookText,Presentation,ScanSearch,Sparkles,UserCheck} from 'lucide-react';
import {RULES} from '../../domain/vdf/rules';
import type {CardKey} from '../../domain/vdf/types';
import {CardLayoutIcon} from '../vdf/CardLayoutIcon';
import {StatusBadge} from '../../ui/StatusBadge';

const relations=[
  ['순서·절차','순서를 바꾸면 뜻이 달라집니다.','단계 흐름'],
  ['분류·계층','항목이 둘 이상의 무리로 묶입니다.','카드 + 사례'],
  ['비교·대조','두 대상을 같은 기준으로 나란히 봅니다.','좌우 대비'],
  ['인과·수렴','앞의 항목이 다음 결과로 이어집니다.','화살표 연쇄'],
  ['정의','용어 하나와 뜻 하나를 짝지어 봅니다.','글 중심'],
  ['목록','순서를 바꿔도 뜻이 크게 달라지지 않습니다.','카드 나열']
] as const;

const decisionSteps=[
  ['1','본문 범위를 확인한다','표지·학습목표·마음열기·평가·학습정리를 제외하고 본강의 본문을 대상으로 봅니다.'],
  ['2','블록을 나누고 항목 관계를 정한다','내용을 의미 단위로 나눈 뒤 순서·절차, 분류·계층, 비교·대조, 인과·수렴, 정의, 목록 중 하나로 읽습니다.'],
  ['3','글자를 지워본다','라벨을 모두 지웠을 때도 사물·현상·장치가 남으면 이미지 후보, 남지 않으면 도형/글 중심입니다.'],
  ['4','이미지 후보만 Gate를 확인한다','노트에 없는 사물을 만들지 않고, 그릴 대상이 구체적 사물 하나 또는 같은 사물의 변형으로 좁혀지는지 확인합니다.'],
  ['5','이미지면 카드 A~F를 고른다','이미지가 필요한 경우에만 A~F 카드의 검증된 배치 규칙을 사용합니다. Shape는 항목 관계에 따라 SVG/글 구조로 갑니다.']
] as const;

export function GuidePage(){
  return <div className="page">
    <header className="page-head"><p className="eyebrow">HOW TO USE</p><h1>VDF는 강의노트에서 “무엇을 어떻게 보여줄지”를 단계적으로 정합니다</h1><p>VDF는 자동 슬라이드 생성기가 아니라 시각화 의사결정 지원 도구입니다. AI가 계획을 제안하고, 교수자가 확인·수정한 뒤 제작에 사용합니다.</p></header>

    <section className="panel guide-section">
      <div className="section-title"><div><p className="eyebrow">QUICK START</p><h2>1 → 4 작업 흐름</h2></div><StatusBadge tone="success">Engine 6.0 FREEZE</StatusBadge></div>
      <div className="pipeline" aria-label="VDF 전체 작업 흐름">
        <div className="pipeline-main">
          <div className="pipeline-node"><NotebookText/><b>1 계획 만들기</b><span>강의노트 → 실행 Prompt → AI JSON</span></div><ArrowDown className="pipeline-arrow" aria-hidden="true"/>
          <div className="pipeline-node"><ScanSearch/><b>2 계획 검사</b><span>JSON 계약과 VDF 판단 확인</span></div><ArrowDown className="pipeline-arrow" aria-hidden="true"/>
          <div className="pipeline-node"><UserCheck/><b>3 결과 확인</b><span>교수자가 관계·Image/Shape·Card를 검토</span></div><ArrowDown className="pipeline-arrow" aria-hidden="true"/>
          <div className="pipeline-node"><Presentation/><b>4 제작 활용</b><span>SVG 또는 이미지 Prompt를 PPT 제작에 사용</span></div>
        </div>
        <aside className="rules-callout"><b>처음 쓰는 순서</b><p>① 강의노트를 붙여넣거나 파일로 불러옵니다. ② 생성된 실행 Prompt를 ChatGPT/Gemini/Claude 등에 넣습니다. ③ AI가 낸 2부 JSON을 다시 VDF에 붙여넣습니다. ④ 검사 결과를 확인하고 제작용 SVG/Prompt를 사용합니다.</p></aside>
      </div>
    </section>

    <section className="panel guide-section">
      <div className="section-title"><div><p className="eyebrow">DECISION FLOW</p><h2>VDF 의사결정 구조</h2></div><StatusBadge tone="info">rules.json = Source of Truth</StatusBadge></div>
      <p>핵심은 “무조건 그림으로 만들기”가 아닙니다. 범위와 관계를 먼저 읽고, 필요한 경우에만 이미지를 통과시킵니다.</p>
      <ol className="decision-flow">{decisionSteps.map(([n,title,desc])=><li key={n}><span className="decision-number">{n}</span><div><b>{title}</b><p>{desc}</p></div></li>)}</ol>
      <div className="pipeline" aria-label="VDF 의사결정에서 제작까지">
        <div className="pipeline-main">
          <div className="pipeline-node"><NotebookText/><b>강의노트 본문</b><span>분석 범위 확정</span></div><ArrowDown className="pipeline-arrow" aria-hidden="true"/>
          <div className="pipeline-node"><BookOpenCheck/><b>블록 + 정보유형</b><span>6종 관계 중 하나</span></div><ArrowDown className="pipeline-arrow" aria-hidden="true"/>
          <div className="pipeline-node"><ScanSearch/><b>Image / Shape</b><span>라벨 테스트</span></div><ArrowDown className="pipeline-arrow" aria-hidden="true"/>
          <div className="pipeline-node"><FileJson2/><b>Image Gate</b><span>구체적 대상이 좁혀지는가?</span></div>
          <div className="pipeline-branch">
            <div className="pipeline-node"><BookOpenCheck/><b>Shape</b><span>관계에 따른 SVG/글 구조</span></div>
            <div className="pipeline-node"><Image/><b>Image</b><span>Card A~F 선택</span></div>
          </div>
          <ArrowDown className="pipeline-arrow" aria-hidden="true"/>
          <div className="pipeline-node"><Sparkles/><b>제작 자산</b><span>SVG 또는 6줄 Image Prompt</span></div>
        </div>
        <aside className="rules-callout"><b>가장 중요한 규칙</b><p>노트에 없는 사물을 발명하지 않습니다. 그림이 꼭 필요하지 않으면 Shape/글 구조로 둡니다.</p><div><ArrowRight aria-hidden="true"/>과도한 이미지 방지</div><div><ArrowRight aria-hidden="true"/>교수자 판단 유지</div></aside>
      </div>
    </section>

    <section className="panel guide-section">
      <div className="section-title"><div><p className="eyebrow">DECISION REVIEW</p><h2>AI가 제안하고, 교수자가 최종 확인합니다</h2></div></div>
      <div className="architecture-grid">
        <div><h3>AI가 제안</h3><p>블록 경계, 정보 유형, Image/Shape, Gate, Card를 VDF 규칙에 따라 제안합니다.</p></div>
        <div><h3>교수자가 검토</h3><p>블록을 합치거나 나눌지, 관계가 맞는지, 정말 이미지를 쓸지, 최종 카드가 적절한지 확인합니다.</p></div>
        <div><h3>제작에서 확정</h3><p>Shape는 SVG/PowerPoint 요소로, Image는 검증된 카드 Prompt로 가져가 최종 슬라이드에서 편집합니다.</p></div>
      </div>
      <p className="guide-note"><b>판정 결과는 정답표가 아닙니다.</b> 동일 입력에서도 블록 경계는 모델 실행에 따라 조금 달라질 수 있으므로, 결과 확인 단계에서 교수자의 판단이 최종 기준입니다.</p>
    </section>

    <section className="panel guide-section">
      <div className="section-title"><div><p className="eyebrow">RELATION & CARD</p><h2>내용의 관계와 이미지 카드는 서로 다른 판단입니다</h2></div></div>
      <p>먼저 항목 사이의 관계를 읽습니다. 관계는 글/SVG의 구조를 정하고, 이미지가 필요한 경우에만 A~F 카드가 화면 배치를 정합니다.</p>
      <div className="relation-grid">{relations.map(([name,tell,visual])=><article className="relation-card" key={name}><StatusBadge tone="info">{name}</StatusBadge><p>{tell}</p><small>글/도형 표현: {visual}</small></article>)}</div>
      <h3 className="subhead">그림이 필요한 경우의 카드 A~F</h3>
      <div className="card-reference">{Object.entries(RULES.cards).map(([key,card])=><div key={key}><CardLayoutIcon card={key as CardKey}/><div><StatusBadge tone={card.status==='verified'||card.status==='verified_after_fix'?'success':'warning'}>{key}</StatusBadge><b className="card-reference-name">{card.ko}</b></div><small>{card.status==='verified'||card.status==='verified_after_fix'?'검증됨':'결과 확인 필요'}</small></div>)}</div>
      <p className="guide-note"><b>관계는 내용이 어떻게 묶이는지</b>, <b>카드는 이미지가 화면에 어떻게 놓이는지</b>를 설명합니다.</p>
    </section>

    <section className="panel guide-section">
      <div className="section-title"><div><p className="eyebrow">ENGINE</p><h2>판단 기준을 바꿀 때만 엔진 패키지를 교체합니다</h2></div><StatusBadge tone="success">6.0.0 STABLE</StatusBadge></div>
      <p>배포판의 기본 엔진은 VDF 6.0.0 Stable / Freeze입니다. 왼쪽 <b>VDF 엔진 관리</b>에서 별도 검증된 ZIP 패키지를 등록할 수 있으며, 등록만으로는 실행 기준이 바뀌지 않습니다. 검증 후 ACTIVE로 적용해야 Prompt Bridge와 Checker가 새 엔진을 사용합니다.</p>
    </section>
  </div>
}
