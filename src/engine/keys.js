const fs=require('fs');
const norm = s => (s || "").toLowerCase().replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim().replace(/[.!?,;:]+$/, "");
for (const f of process.argv.slice(2)){
  const src=fs.readFileSync(f,'utf8');
  const {P,DRILLS}=new Function(src+';return {P,DRILLS};')();
  const ids=new Set(P.map(p=>p.id)); let bad=0;
  DRILLS.forEach((d,i)=>{
    (d.items||[]).forEach(it=>{
      if(it.id && !ids.has(it.id)) {console.log(f,'unknown id',it.id); }
      if(d.type==='translate'){const re=new RegExp(`(^|[^a-z'])(${it.key})($|[^a-z'])`,'i'); if(!re.test(norm(it.en))){bad++;console.log(f,'KEY MISS:',it.en,'|',it.key);}}
      if(d.type==='mcq' && new Set(it.o).size!==it.o.length) console.log(f,'dup opts',it.q);
    });
  });
  console.log(f.split('/').pop(),'checked',bad?'':'ok');
}
