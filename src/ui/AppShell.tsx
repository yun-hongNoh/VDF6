import {BookOpen,HelpCircle,Menu,ScanSearch,Settings2} from 'lucide-react';
import {useState,type ReactNode} from 'react';
import {StatusBadge} from './StatusBadge';

export type PageKey='checker'|'guide'|'settings'|'about';

export function AppShell({page,onPage,children}:{page:PageKey;onPage:(p:PageKey)=>void;children:ReactNode}){
  const[open,setOpen]=useState(false);
  const nav=[
    ['checker','VDF 작업',ScanSearch],
    ['guide','사용 방법',BookOpen],
    ['settings','VDF 엔진 관리',Settings2],
    ['about','배포 안내',HelpCircle]
  ] as const;

  return <div className="app-shell">
    <a className="skip-link" href="#main">본문으로 건너뛰기</a>
    <header className="topbar">
      <button className="menu-button" onClick={()=>setOpen(v=>!v)} aria-label="메뉴" aria-expanded={open} aria-controls="primary-navigation"><Menu/></button>
      <div className="brand"><b>VDF Next</b><small>App v0.3.1 · Engine 6.0.0</small></div>
      <div className="top-meta"><StatusBadge tone="success">RELEASE</StatusBadge><StatusBadge tone="info">VDF 6.0 FREEZE</StatusBadge></div>
    </header>
    <aside id="primary-navigation" className={`sidebar ${open?'open':''}`} aria-label="주 메뉴">
      <div className="sidebar-title">VDF</div>
      {nav.map(([key,label,Icon])=><button key={key} className={page===key?'active':''} aria-current={page===key?'page':undefined} onClick={()=>{onPage(key);setOpen(false)}}><Icon size={18}/>{label}</button>)}
      <div className="sidebar-spacer"/>
      <span className="sidebar-note">Engine Package Registry</span>
    </aside>
    <main id="main" className="content" tabIndex={-1}>{children}</main>
  </div>;
}
