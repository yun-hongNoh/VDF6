import test from 'node:test';
import assert from 'node:assert/strict';
import {parsePlanText} from '../src/domain/vdf/parse';
import {evaluateBlock} from '../src/domain/vdf/evaluate';
import {SAMPLE_PLAN} from '../src/domain/vdf/sample';
import {bootstrapSubjectFromBlock,presentationSvg,reviewEvaluation} from '../src/services/vdfService';
import {getActiveEngine} from '../src/services/engineRegistry';
import {promptPreviewWithEngine} from '../src/services/engineEvaluation';
const opt={brand:'on',emptySide:'left',accent:'#1F6F68'} as const;

test('professor relation override reuses active engine evaluation',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);assert.ok(base.diagramSvg);const reviewed=reviewEvaluation(base,{infoType:'정의'},opt,engine);assert.equal(reviewed.infoType,'정의');assert.equal(reviewed.diagramSvg,null)});
test('professor card override rebuilds the six-line prompt only inside explicit image track',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);const reviewed=reviewEvaluation(base,{track:'image',card:'C',subject:'two comparable objects'},opt,engine);assert.equal(reviewed.card,'C');assert.deepEqual(reviewed.prompt!.map(x=>x.key),['subject','background','composition','style','ratio','negative'])});
test('presentation SVG wraps long text without changing canonical domain SVG',()=>{const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);assert.ok(base.diagramSvg);assert.equal(base.diagramSvg!.includes('<tspan'),false);const shown=presentationSvg(base.diagramSvg)!;assert.match(shown,/<tspan/);assert.match(shown,/font-size="13"/)})


test('P0 T1 shape to image updates final state and rebuilds prompt after subject/card are set',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);assert.equal(base.block.track,'shape');const reviewed=reviewEvaluation(base,{track:'image',subject:'smart parking meter',card:'A'},opt,engine);assert.equal(reviewed.block.track,'image');assert.equal(reviewed.presentationTrack,'image');assert.equal(reviewed.card,'A');assert.ok(reviewed.prompt);assert.equal(reviewed.prompt![0].value.startsWith('smart parking meter'),true)});

test('P0 T2 image to shape removes image-only card and prompt and recalculates SVG',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const imageBlock=p.blocks.find(b=>b.track==='image'&&b.card)!;assert.ok(imageBlock);const base=evaluateBlock(imageBlock,opt);assert.ok(base.prompt);const reviewed=reviewEvaluation(base,{track:'shape'},opt,engine);assert.equal(reviewed.block.track,'shape');assert.equal(reviewed.presentationTrack,'shape');assert.equal(reviewed.card,null);assert.equal(reviewed.prompt,null);assert.ok(reviewed.diagramSvg||reviewed.warnings.some(w=>w.key==='shape_output'))});

test('P0 T3 professor subject override is prompt source of truth',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const block=p.blocks.find(b=>b.track==='image'&&b.card)!;const base=evaluateBlock(block,opt);const subject='coin-operated parking payment device beside a card-based smart parking meter';const reviewed=reviewEvaluation(base,{subject},opt,engine);assert.equal(reviewed.block.subject,subject);assert.equal(reviewed.prompt![0].value.startsWith(subject),true)});

test('P0 T4 card override rebuilds card-specific six-line prompt only after professor selects image',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);const reviewed=reviewEvaluation(base,{track:'image',card:'C',subject:'two comparable objects'},opt,engine);assert.equal(reviewed.block.track,'image');assert.equal(reviewed.presentationTrack,'image');assert.equal(reviewed.card,'C');assert.deepEqual(reviewed.prompt!.map(x=>x.key),['subject','background','composition','style','ratio','negative']);assert.match(reviewed.prompt!.find(x=>x.key==='composition')!.value,/right 40% is empty background/)});

test('P0 T5 trait override rebuilds prompt fragments from final state',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);const reviewed=reviewEvaluation(base,{track:'image',card:'A',subject:'generic smartphone',subjectTraits:{branded_category:true}},opt,engine);assert.equal(reviewed.block.subject_traits.branded_category,true);assert.match(reviewed.prompt![0].value,/unbranded, no app icons/)});

test('P0 T6 gate consistency preserves AI gate while recording professor image override as warning',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);assert.notEqual(base.block.gate?.passed,true);const reviewed=reviewEvaluation(base,{track:'image',card:'A',subject:'a concrete device'},opt,engine);assert.equal(reviewed.block.track,'image');assert.ok(reviewed.prompt);assert.ok(reviewed.warnings.some(w=>w.key==='gate'&&/교수자가 이미지 사용으로 변경/.test(w.message)))});

test('P0 T7 reset semantics are equivalent to removing override',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const block=p.blocks.find(b=>b.id==='B10')!;const base=evaluateBlock(block,opt);const changed=reviewEvaluation(base,{track:'image',card:'A',subject:'a concrete device',subjectTraits:{branded_category:true}},opt,engine);assert.notEqual(changed.presentationTrack,base.presentationTrack);const reset=reviewEvaluation(base,undefined,opt,engine);assert.equal(reset.presentationTrack,base.presentationTrack);assert.equal(reset.block.track,base.block.track);assert.equal(reset.block.subject,base.block.subject);assert.deepEqual(reset.block.subject_traits,base.block.subject_traits);assert.equal(reset.card,base.card)});


test('v0.3.2.1 safety still blocks prompt when professor explicitly clears image subject',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);const reviewed=reviewEvaluation(base,{track:'image',card:'C',subject:''},opt,engine);assert.equal(reviewed.block.track,'image');assert.equal(reviewed.block.subject,'');assert.equal(reviewed.prompt,null);assert.ok(reviewed.warnings.some(w=>w.key==='image_subject'))});

test('v0.3.2.1 hotfix preserves existing AI subject when professor changes only the card on an image block',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const imageBlock=p.blocks.find(b=>b.track==='image'&&!!b.subject&&!!b.card)!;const base=evaluateBlock(imageBlock,opt);const originalSubject=base.block.subject!;const reviewed=reviewEvaluation(base,{card:'C'},opt,engine);assert.equal(reviewed.block.track,'image');assert.equal(reviewed.block.subject,originalSubject);assert.equal(reviewed.card,'C');assert.ok(reviewed.prompt);assert.equal(reviewed.prompt![0].value.startsWith(originalSubject),true)});

test('v0.3.2.2 card selection cannot promote a shape block to image',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);const reviewed=reviewEvaluation(base,{card:'C',subject:'two comparable objects'},opt,engine);assert.equal(reviewed.block.track,'shape');assert.equal(reviewed.presentationTrack,'shape');assert.equal(reviewed.card,null);assert.equal(reviewed.prompt,null);assert.equal(reviewed.warnings.some(w=>w.key==='gate'||w.key==='image_subject'||w.key==='image_card'),false)});

test('v0.3.2.2 stale image overrides stay dormant while professor track is shape',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const imageBlock=p.blocks.find(b=>b.track==='image'&&!!b.subject&&!!b.card)!;const base=evaluateBlock(imageBlock,opt);const reviewed=reviewEvaluation(base,{track:'shape',card:'C',subject:'professor image subject',subjectTraits:{branded_category:true}},opt,engine);assert.equal(reviewed.block.track,'shape');assert.equal(reviewed.presentationTrack,'shape');assert.equal(reviewed.card,null);assert.equal(reviewed.prompt,null);assert.equal(reviewed.warnings.some(w=>w.key==='gate'||w.key==='image_subject'||w.key==='image_card'),false)});

test('v0.3.2.2 returning to image can reuse preserved professor image overrides',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const imageBlock=p.blocks.find(b=>b.track==='image'&&!!b.subject&&!!b.card)!;const base=evaluateBlock(imageBlock,opt);const preserved={track:'shape' as const,card:'C' as const,subject:'professor image subject',subjectTraits:{branded_category:true}};const shape=reviewEvaluation(base,preserved,opt,engine);assert.equal(shape.prompt,null);const back=reviewEvaluation(base,{...preserved,track:'image'},opt,engine);assert.equal(back.block.track,'image');assert.equal(back.card,'C');assert.equal(back.block.subject,'professor image subject');assert.ok(back.prompt);assert.equal(back.prompt![0].value.startsWith('professor image subject'),true)});


test('v0.3.2.3 preview remains available when professor explicitly clears a bootstrapped subject',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);const reviewed=reviewEvaluation(base,{track:'image',card:'C',subject:''},opt,engine);assert.equal(reviewed.prompt,null);const preview=promptPreviewWithEngine(reviewed.block,reviewed.card,opt,engine);assert.ok(preview);assert.deepEqual(preview!.map(x=>x.key),['subject','background','composition','style','ratio','negative']);assert.equal(preview![0].value.startsWith('[이미지 대상을 입력하세요]'),true);assert.match(preview!.find(x=>x.key==='composition')!.value,/right 40% is empty background/)});

test('v0.3.2.3 entering subject converts preview state into final prompt and card changes preserve subject',async()=>{const engine=await getActiveEngine();const p=parsePlanText(SAMPLE_PLAN);const base=evaluateBlock(p.blocks.find(b=>b.id==='B10')!,opt);const withSubject=reviewEvaluation(base,{track:'image',card:'A',subject:'a medieval coin punch, a wine press, and an early metal movable-type printing press'},opt,engine);assert.ok(withSubject.prompt);const changed=reviewEvaluation(base,{track:'image',card:'C',subject:withSubject.block.subject!},opt,engine);assert.ok(changed.prompt);assert.equal(changed.prompt![0].value.startsWith(withSubject.block.subject!),true);assert.match(changed.prompt!.find(x=>x.key==='composition')!.value,/right 40% is empty background/)});


test('v0.3.2.4 Shape to Image bootstraps a grounded subject from existing title and slots when AI subject is absent',async()=>{
 const engine=await getActiveEngine();
 const p=parsePlanText(SAMPLE_PLAN);
 const base=evaluateBlock(p.blocks.find(b=>b.id==='B7')!,opt);
 assert.equal(base.block.subject,null);
 const reviewed=reviewEvaluation(base,{track:'image',card:'A'},opt,engine);
 assert.equal(reviewed.block.track,'image');
 assert.ok(reviewed.block.subject);
 assert.doesNotMatch(reviewed.block.subject!,/구텐베르크 인쇄기의 이종 결합/);
 assert.match(reviewed.block.subject!,/동전 펀치기/);
 assert.match(reviewed.block.subject!,/포도주 압착기/);
 assert.match(reviewed.block.subject!,/금속 활자 인쇄기/);
 assert.doesNotMatch(reviewed.block.subject!,/대량 인쇄 고민|발명/);
 assert.ok(reviewed.prompt);
 assert.equal(reviewed.prompt![0].value.startsWith(reviewed.block.subject!),true);
 assert.equal(reviewed.warnings.some(w=>w.key==='image_subject'),false);
});

test('v0.3.2.4 professor subject edit overrides bootstrap and remains final prompt source of truth',async()=>{
 const engine=await getActiveEngine();
 const p=parsePlanText(SAMPLE_PLAN);
 const base=evaluateBlock(p.blocks.find(b=>b.id==='B7')!,opt);
 const explicit='a medieval coin punch, a wine press, and an early metal movable-type printing press';
 const reviewed=reviewEvaluation(base,{track:'image',card:'A',subject:explicit},opt,engine);
 assert.equal(reviewed.block.subject,explicit);
 assert.ok(reviewed.prompt);
 assert.equal(reviewed.prompt![0].value.startsWith(explicit),true);
});

test('v0.3.2.4 bootstrap uses only existing source title and slots and does not mutate base block',()=>{
 const p=parsePlanText(SAMPLE_PLAN);
 const block=p.blocks.find(b=>b.id==='B7')!;
 const before=JSON.stringify(block);
 const draft=bootstrapSubjectFromBlock(block);
 assert.equal(draft,'동전 펀치기, 포도주 압착기, 금속 활자 인쇄기');
 assert.doesNotMatch(draft,/대량 인쇄 고민|이종 결합|발명/);
 assert.equal(JSON.stringify(block),before);
});


test('v0.3.2.5 visual-entity bootstrap prefers object/state phrases over lesson-summary language',()=>{
 const p=parsePlanText(SAMPLE_PLAN);
 const block=p.blocks.find(b=>b.id==='B7')!;
 const draft=bootstrapSubjectFromBlock(block);
 assert.equal(draft,'동전 펀치기, 포도주 압착기, 금속 활자 인쇄기');
 assert.equal(draft.includes('중세 시대의 대량 인쇄 고민'),false);
 assert.equal(draft.includes('구텐베르크 인쇄기의 이종 결합'),false);
});


test('v0.3.2.6 normalizes Gutenberg bootstrap into a parallel visual-entity list',()=>{
 const p=parsePlanText(SAMPLE_PLAN);
 const block=p.blocks.find(b=>b.id==='B7')!;
 const draft=bootstrapSubjectFromBlock(block);
 assert.equal(draft,'동전 펀치기, 포도주 압착기, 금속 활자 인쇄기');
 assert.doesNotMatch(draft,/방식|결합|발명|최초의|고민/);
});

test('v0.3.2.6 normalizes action-qualified result phrases without inventing new entity words',()=>{
 const block={
  id:'X1',title:'결합 사례',track:'shape',info_type:'인과·수렴',item_count:3,
  slots:['전화기와 음악 재생기','두 기능을 결합한 휴대기기','사용자 고민'],gate:null,card:null,subject:null,
  subject_traits:{branded_category:false,same_form_variants:false,replacement_type:false,scale_is_the_point:false,spreads_across_frame:false}
 } as any;
 const draft=bootstrapSubjectFromBlock(block);
 assert.equal(draft,'전화기, 음악 재생기, 휴대기기');
 assert.doesNotMatch(draft,/두 기능|결합한|사용자 고민/);
});

test('v0.3.2.6 professor subject and existing AI image subject remain higher priority than bootstrap',async()=>{
 const engine=await getActiveEngine();
 const p=parsePlanText(SAMPLE_PLAN);
 const imageBlock=p.blocks.find(b=>b.track==='image'&&!!b.subject&&!!b.card)!;
 const baseImage=evaluateBlock(imageBlock,opt);
 const kept=reviewEvaluation(baseImage,{card:'C'},opt,engine);
 assert.equal(kept.block.subject,baseImage.block.subject);
 const shapeBase=evaluateBlock(p.blocks.find(b=>b.id==='B7')!,opt);
 const explicit='교수자 지정 대상';
 const overridden=reviewEvaluation(shapeBase,{track:'image',card:'A',subject:explicit},opt,engine);
 assert.equal(overridden.block.subject,explicit);
 assert.equal(overridden.prompt![0].value.startsWith(explicit),true);
});
