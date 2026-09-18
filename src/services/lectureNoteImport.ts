import JSZip from 'jszip';

export type LectureImportResult={text:string;format:'DOCX'|'HWPX'|'TEXT';tables:number;paragraphs:number;fileName:string};

const ln=(n:Element)=>n.localName;
const children=(n:Element)=>Array.from(n.children);
const textOf=(n:Element)=>Array.from(n.getElementsByTagNameNS('*','t')).map(x=>x.textContent||'').join('').replace(/\s+/g,' ').trim();
const escCell=(s:string)=>s.replace(/\|/g,'\\|').replace(/\r?\n/g,' ').trim();

function tableToMarkdown(tbl:Element){
  const rows=Array.from(tbl.getElementsByTagNameNS('*','tr')).map(tr=>Array.from(tr.getElementsByTagNameNS('*','tc')).map(tc=>{
    const ps=Array.from(tc.getElementsByTagNameNS('*','p')).map(textOf).filter(Boolean);
    return escCell(ps.join(' / ') || textOf(tc));
  }));
  if(!rows.length)return '';
  const width=Math.max(...rows.map(r=>r.length));
  const normalized=rows.map(r=>[...r,...Array(Math.max(0,width-r.length)).fill('')]);
  const header=normalized[0];
  const sep=Array(width).fill('---');
  return ['[표]',`| ${header.join(' | ')} |`,`| ${sep.join(' | ')} |`,...normalized.slice(1).map(r=>`| ${r.join(' | ')} |`),'[/표]'].join('\n');
}

function collectBlocks(root:Element){
  const blocks:string[]=[];let tables=0,paragraphs=0;
  function walk(node:Element){
    for(const c of children(node)){
      if(ln(c)==='tbl'){const md=tableToMarkdown(c);if(md){blocks.push(md);tables++;}continue;}
      if(ln(c)==='p'){
        // paragraphs inside tables are handled by tableToMarkdown
        let a:Element|null=c.parentElement;let inTable=false;
        while(a&&a!==root){if(ln(a)==='tbl'){inTable=true;break;}a=a.parentElement;}
        if(!inTable){const t=textOf(c);if(t){blocks.push(t);paragraphs++;}}
        continue;
      }
      walk(c);
    }
  }
  walk(root);
  return {text:blocks.join('\n\n').trim(),tables,paragraphs};
}

function parseXml(xml:string){const doc=new DOMParser().parseFromString(xml,'application/xml');if(doc.querySelector('parsererror'))throw new Error('문서 XML을 읽지 못했습니다.');return doc;}

async function fromDocx(file:File):Promise<LectureImportResult>{
  const zip=await JSZip.loadAsync(await file.arrayBuffer());
  const entry=zip.file('word/document.xml');if(!entry)throw new Error('DOCX 본문을 찾지 못했습니다.');
  const doc=parseXml(await entry.async('string'));
  const body=Array.from(doc.getElementsByTagNameNS('*','body'))[0]||doc.documentElement;
  const r=collectBlocks(body);
  if(!r.text)throw new Error('DOCX에서 읽을 강의노트 텍스트를 찾지 못했습니다.');
  return {...r,format:'DOCX',fileName:file.name};
}

async function fromHwpx(file:File):Promise<LectureImportResult>{
  const zip=await JSZip.loadAsync(await file.arrayBuffer());
  const names=Object.keys(zip.files).filter(n=>/^Contents\/section\d+\.xml$/i.test(n)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
  if(!names.length)throw new Error('HWPX 본문 섹션을 찾지 못했습니다.');
  const all:string[]=[];let tables=0,paragraphs=0;
  for(const name of names){const e=zip.file(name);if(!e)continue;const r=collectBlocks(parseXml(await e.async('string')).documentElement);if(r.text)all.push(r.text);tables+=r.tables;paragraphs+=r.paragraphs;}
  const text=all.join('\n\n').trim();if(!text)throw new Error('HWPX에서 읽을 강의노트 텍스트를 찾지 못했습니다.');
  return {text,tables,paragraphs,format:'HWPX',fileName:file.name};
}

export async function importLectureNote(file:File):Promise<LectureImportResult>{
  const ext=file.name.toLowerCase().split('.').pop()||'';
  if(ext==='docx')return fromDocx(file);
  if(ext==='hwpx')return fromHwpx(file);
  if(ext==='txt'||ext==='md')return {text:await file.text(),format:'TEXT',tables:0,paragraphs:0,fileName:file.name};
  if(ext==='hwp')throw new Error('구형 .hwp는 브라우저에서 안정적으로 읽기 어려워 이번 버전에서는 지원하지 않습니다. HWPX 또는 DOCX로 저장해 주세요.');
  throw new Error('지원 형식은 DOCX, HWPX, TXT, MD입니다.');
}
