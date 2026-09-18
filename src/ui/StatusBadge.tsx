import type {ReactNode} from 'react';
export type Tone='success'|'info'|'warning'|'error'|'neutral';
export function StatusBadge({children,tone='neutral'}:{children:ReactNode;tone?:Tone}){return <span className={`status-badge ${tone}`}>{children}</span>}
