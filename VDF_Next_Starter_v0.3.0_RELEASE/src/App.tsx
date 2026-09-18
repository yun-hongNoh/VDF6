import {useEffect,useState} from 'react';
import {AppShell,type PageKey} from './ui/AppShell';
import {CheckerPage,type RegressionLaunch} from './features/checker/CheckerPage';
import {GuidePage} from './features/guide/GuidePage';
import {SettingsPage} from './features/settings/SettingsPage';
import {AboutPage} from './app/AboutPage';

export default function App(){
  const[page,setPage]=useState<PageKey>('checker');
  const[regressionLaunch,setRegressionLaunch]=useState<RegressionLaunch|null>(null);
  useEffect(()=>{requestAnimationFrame(()=>{window.scrollTo({top:0,left:0,behavior:'auto'});document.getElementById('main')?.focus({preventScroll:true})})},[page]);
  function startRegression(next:RegressionLaunch){setRegressionLaunch(next);setPage('checker')}
  return <AppShell page={page} onPage={setPage}>
    {page==='checker'?<CheckerPage regressionLaunch={regressionLaunch}/>:page==='guide'?<GuidePage/>:page==='settings'?<SettingsPage onStartRegression={startRegression}/>:<AboutPage/>}
  </AppShell>;
}
