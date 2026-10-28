const {JSDOM}=require('jsdom');const fs=require('fs');
for (const f of process.argv.slice(2)){
  const html=fs.readFileSync(f,'utf8');
  const errs=[];
  const dom=new JSDOM(html,{runScripts:'dangerously',beforeParse(w){w.addEventListener('error',e=>errs.push(e.message));}});
  const d=dom.window.document;
  const n=d.querySelectorAll('section[id^=d]').length;
  const totals=[...d.querySelectorAll('.score')].map(s=>s.textContent).join(' | ');
  console.log(f.split('/').pop(), errs.length?('ERR '+errs.join(';')):'ok', 'drills='+n, totals, 'chips='+d.querySelectorAll('.chip').length);
}
