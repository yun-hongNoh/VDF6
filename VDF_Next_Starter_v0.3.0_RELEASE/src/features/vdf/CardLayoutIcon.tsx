import type {CardKey} from '../../domain/vdf/types';

export function CardLayoutIcon({card}:{card:CardKey|null}){
 const common={width:78,height:34,viewBox:'0 0 84 32',fill:'none',stroke:'currentColor',strokeWidth:1.4,'aria-hidden':true} as const;
 if(card==='A')return <svg {...common}><rect x="4" y="9" width="15" height="15" rx="2"/><rect x="23" y="9" width="15" height="15" rx="2"/><rect x="42" y="9" width="15" height="15" rx="2"/><rect x="61" y="9" width="15" height="15" rx="2"/></svg>;
 if(card==='B')return <svg {...common}><rect x="31" y="6" width="22" height="19" rx="2"/><path d="M26 27h32" opacity=".45"/></svg>;
 if(card==='C')return <svg {...common}><rect x="3" y="7" width="36" height="18" rx="2"/><rect x="45" y="7" width="36" height="18" rx="2"/><path d="M3 27h78" opacity=".45"/></svg>;
 if(card==='D')return <svg {...common}><rect x="6" y="8" width="40" height="18" rx="2"/><path d="M50 17h24M50 17l6-4M50 17l6 4"/></svg>;
 if(card==='E')return <svg {...common}><rect x="2" y="9" width="18" height="15" rx="2"/><rect x="23" y="9" width="18" height="15" rx="2"/><rect x="44" y="9" width="18" height="15" rx="2"/><rect x="65" y="9" width="18" height="15" rx="2"/></svg>;
 if(card==='F')return <svg {...common}><rect x="2" y="3" width="80" height="26" rx="2" fill="currentColor" opacity=".12" stroke="none"/><rect x="8" y="11" width="40" height="10" rx="2"/></svg>;
 return <svg {...common}><rect x="2" y="3" width="80" height="26" rx="2" strokeDasharray="4 3" opacity=".55"/><path d="M31 16h22" opacity=".55"/></svg>;
}
