const {JSDOM}=require('jsdom');const fs=require('fs');
for (const f of process.argv.slice(2)){
  const dom=new JSDOM(fs.readFileSync(f,'utf8'),{runScripts:'dangerously'});
  const d=dom.window.document; let fails=[];
  d.querySelectorAll('article.ex').forEach(ex=>{
    const btns=[...ex.querySelectorAll('.foot .btn')];
    const show=btns.find(b=>['Show answers','Показать ответы'].includes(b.textContent)), check=btns.find(b=>['Check','Проверить'].includes(b.textContent));
    if(!show||!check) return;
    show.click();
    ex.querySelectorAll('input.gap').forEach(i=>i.classList.remove('shown'));
    check.click();
    ex.querySelectorAll('input.gap').forEach(i=>{ if(!i.classList.contains('ok')) fails.push(ex.querySelector('h3').textContent+': '+i.value); });
  });
  console.log(f.split('/').pop(), fails.length? 'FAIL '+fails.join(' ; '):'all typed answers accepted');
}
