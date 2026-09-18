import {createContext,useCallback,useContext,useMemo,useState,type ReactNode} from 'react';
type Kind='success'|'info'|'warning'|'error'; type Item={id:number;kind:Kind;message:string};
const Ctx=createContext<{push:(message:string,kind?:Kind)=>void}>({push:()=>{}});
export function ToastProvider({children}:{children:ReactNode}){const[items,setItems]=useState<Item[]>([]);const push=useCallback((message:string,kind:Kind='info')=>{const id=Date.now()+Math.random();setItems(v=>[...v,{id,kind,message}]);setTimeout(()=>setItems(v=>v.filter(x=>x.id!==id)),2800)},[]);const api=useMemo(()=>({push}),[push]);return <Ctx.Provider value={api}>{children}<div className="toast-region" aria-live="polite">{items.map(x=><div className={`toast ${x.kind}`} key={x.id}>{x.message}</div>)}</div></Ctx.Provider>}
export const useToast=()=>useContext(Ctx);
