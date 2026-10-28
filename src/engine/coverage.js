const {JSDOM}=require('jsdom');const fs=require('fs');
for (const f of process.argv.slice(2)){
  const dom=new JSDOM(fs.readFileSync(f,'utf8'),{runScripts:'dangerously'});
  const C=JSON.parse(dom.window.eval('JSON.stringify(COUNT)'));
  const ids=JSON.parse(dom.window.eval('JSON.stringify(P.map(p=>p.id))'));
  const low=ids.filter(i=>(C[i]||0)<4).map(i=>i+':'+(C[i]||0));
  console.log(f.split('/').pop(), low.length? 'few tasks -> '+low.join(' '):'every phrase has 4+ tasks');
}
