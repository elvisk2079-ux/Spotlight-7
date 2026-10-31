import sys, re, html, os
base=os.path.dirname(os.path.abspath(__file__))
src=open(sys.argv[1]).read(); out=sys.argv[2]
meta={k:v.strip() for k,v in re.findall(r'^// (TITLE|EYEBROW|SUB|BOARD): (.*)$',src,re.M)}
css=open(os.path.join(base,'style.css')).read()
eng=open(os.path.join(base,'engine.js')).read()
e=html.escape
page=f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(meta["TITLE"])}</title>
{css}</style>

<header class="hero wrap">
  <p class="eyebrow">{e(meta["EYEBROW"])}</p>
  <h1>{e(meta["TITLE"])}</h1>
  <p class="sub">{e(meta["SUB"])}</p>
</header>

<div class="bar">
  <div class="wrap">
    <nav class="nav" id="nav" aria-label="Задания"></nav>
    <div class="progress" aria-live="polite">
      <div class="track"><div class="fill" id="fill"></div></div>
      <span><b id="mastered">0</b> / <b id="ptotal">0</b> выучено</span>
    </div>
  </div>
</div>

<main class="wrap" id="main">
  <section id="board-sec">
    <h2>{e(meta.get('BOARD','Твои слова'))}</h2>
    <p class="lead">Каждый правильный ответ — одна точка. Все точки зелёные — слово выучено. Красная рамка — повтори это слово.</p>
    <div class="board" id="board"></div>
    <div class="board-foot">
      <span>Прогресс сохраняется в этом браузере.</span>
      <button class="btn small" type="button" id="reset-all">Reset my progress</button>
    </div>
  </section>
</main>

<script>
{src}
{eng}
</script>
'''
open(out,'w').write(page)
js=src+'\n'+eng

