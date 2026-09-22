import {mkdir,readFile,readdir,writeFile} from 'node:fs/promises';
import JSZip from 'jszip';
import {exportEnginePackage,listEngines,registerEnginePackage} from '../src/services/engineRegistry';

const output=new URL('../engine-packages/',import.meta.url);
await mkdir(output,{recursive:true});
const stable=(await listEngines()).find(e=>e.source==='BUILT_IN')!;
const zip=new JSZip();
async function add(dir:URL,prefix=''){
  for(const file of await readdir(dir,{withFileTypes:true})){
    if(file.isDirectory())await add(new URL(file.name+'/',dir),prefix+file.name+'/');
    else zip.file(prefix+file.name,await readFile(new URL(file.name,dir)));
  }
}
await add(new URL('../experiments/engine-6.1-semantic-boundary/',import.meta.url));
const experimental=await registerEnginePackage(new Blob([await zip.generateAsync({type:'uint8array'})]));
for(const engine of [stable,experimental]){
  const file=`VDF_Engine_${engine.version}_Contract_v1.zip`;
  await writeFile(new URL(file,output),Buffer.from(await (await exportEnginePackage(engine)).arrayBuffer()));
  console.log(`${file}: ${engine.regressionCases.length} fixtures, ${engine.adapter.kind} adapter`);
}
