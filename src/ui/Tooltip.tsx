import {CircleHelp} from 'lucide-react';
import {useEffect,useId,useLayoutEffect,useRef,useState} from 'react';
import {createPortal} from 'react-dom';

type Pos={top:number;left:number;placement:'top'|'bottom';ready:boolean};

export function InfoTooltip({text}:{text:string}){
  const id=useId();
  const triggerRef=useRef<HTMLButtonElement>(null);
  const tipRef=useRef<HTMLDivElement>(null);
  const[open,setOpen]=useState(false);
  const[pos,setPos]=useState<Pos>({top:0,left:0,placement:'top',ready:false});

  const place=()=>{
    const trigger=triggerRef.current,tip=tipRef.current;
    if(!trigger||!tip)return;
    const tr=trigger.getBoundingClientRect();
    const rr=tip.getBoundingClientRect();
    const gap=8,pad=10;
    const roomTop=tr.top;
    const roomBottom=window.innerHeight-tr.bottom;
    const placement:Pos['placement']=roomTop>=rr.height+gap||roomTop>=roomBottom?'top':'bottom';
    let left=tr.left+tr.width/2-rr.width/2;
    left=Math.max(pad,Math.min(left,window.innerWidth-rr.width-pad));
    let top=placement==='top'?tr.top-rr.height-gap:tr.bottom+gap;
    top=Math.max(pad,Math.min(top,window.innerHeight-rr.height-pad));
    setPos({top,left,placement,ready:true});
  };

  useLayoutEffect(()=>{if(open){setPos(p=>({...p,ready:false}));requestAnimationFrame(place)}},[open,text]);
  useEffect(()=>{
    if(!open)return;
    const reposition=()=>place();
    const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);triggerRef.current?.focus()}};
    const outside=(e:PointerEvent)=>{const n=e.target as Node;if(!triggerRef.current?.contains(n)&&!tipRef.current?.contains(n))setOpen(false)};
    window.addEventListener('resize',reposition);window.addEventListener('scroll',reposition,true);window.addEventListener('keydown',key);document.addEventListener('pointerdown',outside);
    return()=>{window.removeEventListener('resize',reposition);window.removeEventListener('scroll',reposition,true);window.removeEventListener('keydown',key);document.removeEventListener('pointerdown',outside)};
  },[open]);

  const tooltip=open&&typeof document!=='undefined'?createPortal(<div ref={tipRef} id={id} role="tooltip" className={`tooltip-portal ${pos.placement}`} style={{top:pos.top,left:pos.left,visibility:pos.ready?'visible':'hidden'}}>{text}</div>,document.body):null;

  return <>
    <button ref={triggerRef} type="button" className="tooltip-trigger" aria-label="도움말" aria-describedby={open?id:undefined} aria-expanded={open}
      onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} onFocus={()=>setOpen(true)} onBlur={e=>{if(!tipRef.current?.contains(e.relatedTarget as Node))setOpen(false)}} onClick={e=>{e.stopPropagation();setOpen(v=>!v)}}>
      <CircleHelp size={16}/>
    </button>
    {tooltip}
  </>;
}
