import {Download} from 'lucide-react';
import type {BlockEvaluation} from '../../domain/vdf/types';
import {presentationSvg} from '../../services/vdfService';

export function DiagramPreview({result,onCopy,onDownload}:{result:BlockEvaluation;onCopy:(svg:string)=>void;onDownload:(svg:string)=>void}){
 const svg=presentationSvg(result.diagramSvg);if(!svg)return null;
 return <div className="diagram-wrap"><div className="diagram-canvas" dangerouslySetInnerHTML={{__html:svg}}/><div className="action-row diagram-actions"><button className="button secondary nowrap" onClick={()=>onCopy(svg)}>SVG 복사</button><button className="button ghost nowrap" onClick={()=>onDownload(svg)}><Download size={16}/>SVG 파일 저장</button><span className="diagram-hint">긴 문장은 화면·파일에서 읽기 쉽도록 줄바꿈만 정리합니다. 판정 내용은 바뀌지 않습니다.</span></div></div>
}
