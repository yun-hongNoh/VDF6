import type {VdfBlock} from './types';

const esc=(value:string)=>value.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]!));
// Layout only: retain every character; never summarize or clip a slot.
function lines(value:string,width=82){
 const measure=(value:string)=>Array.from(value).reduce((n,c)=>n+(/[^\x00-\x7f]/.test(c)?2:/[A-Zmw@#%&]/.test(c)?1.5:1),0);
 const out:string[]=[];
 for(const paragraph of value.split(/\r?\n/)){
  let line='',units=0;
  for(const char of paragraph){const size=measure(char);while(units+size>width&&line){const at=line.lastIndexOf(' ')+1;out.push(at?line.slice(0,at):line);line=at?line.slice(at):'';units=measure(line)}line+=char;units+=size}
  out.push(line);
 }
 return out;
}
export function explicitEdges(block:VdfBlock):[number,number][]|null{
 // Only a complete, unambiguous reference to actual slot labels defines edges.
 // Generic "원인 → 중간 → 결과" does not assign roles to positional slots.
 const labels=block.slots.map(s=>s.split('|')[0].trim());
 if(labels.some(s=>!s)||new Set(labels).size!==labels.length)return null;
 const groups=(block.item_structure||'').split('→').map(g=>g.split('+').map(s=>s.trim()));
 if(groups.length<2||groups.some(g=>!g.length||g.some(s=>!labels.includes(s))))return null;
 const refs=groups.flat();if(refs.length!==labels.length||new Set(refs).size!==labels.length)return null;
 const edges:[number,number][]=[];
 for(let i=1;i<groups.length;i++)for(const from of groups[i-1])for(const to of groups[i])edges.push([labels.indexOf(from),labels.indexOf(to)]);
 return edges;
}
export function renderDiagram(block:VdfBlock,infoType:string,accent:string):string|null{
 const slots=block.slots||[];
 if(!slots.length||infoType==='정의')return null;
 if(!['목록','분류·계층','순서·절차','인과·수렴','비교·대조'].includes(infoType))return null;
 const edges=infoType==='순서·절차'?slots.slice(1).map((_,i)=>[i,i+1] as [number,number]):infoType==='인과·수렴'?explicitEdges(block):null;
 const neutral=infoType==='인과·수렴'&&edges===null;
 const caption=neutral?'연결 관계 미지정 · 항목 원문 보존':block.item_structure||infoType;
 let y=24,body='';
 const text=(x:number,top:number,value:string)=>`<text x="${x}" y="${top}" font-family="Malgun Gothic, sans-serif" font-size="15" fill="#212528" xml:space="preserve">${esc(value)}</text>`;
 for(const line of lines(caption)){body+=text(32,y+17,line);y+=23}y+=12;
 const positions:{top:number;bottom:number;middle:number}[]=[];
 slots.forEach((slot,i)=>{
  const wrapped=lines(slot),height=Math.max(54,wrapped.length*23+24);
  positions.push({top:y,bottom:y+height,middle:y+height/2});
  body+=`<g data-slot-index="${i}"><title>${esc(slot)}</title><rect x="32" y="${y}" width="808" height="${height}" rx="10" fill="#f6f7f6" stroke="${esc(accent)}"/>`;
  wrapped.forEach((line,j)=>body+=text(46,y+25+j*23,line));
  body+='</g>';y+=height+30;
 });
 for(const [from,to] of edges||[]){
  const a=positions[from],b=positions[to];
  if(infoType==='순서·절차')body+=`<path data-edge="${from}:${to}" d="M436 ${a.bottom} V${b.top-3}" stroke="${esc(accent)}" fill="none" marker-end="url(#arrow)"/>`;
  else {const lane=854+(from%3)*12;body+=`<path data-edge="${from}:${to}" d="M840 ${a.middle} H${lane} V${b.middle} H842" stroke="${esc(accent)}" fill="none" marker-end="url(#arrow)"/>`}
 }
 return `<svg xmlns="http://www.w3.org/2000/svg" data-vdf-lossless="1" data-relation="${neutral?'unspecified':edges?'explicit':'rows'}" viewBox="0 0 900 ${y}" role="img" aria-label="${esc(block.title)}"><title>${esc(block.title)}</title><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10" fill="${esc(accent)}"/></marker></defs><rect width="900" height="${y}" fill="#fff"/>${body}</svg>`;
}
