# Builds ../index.html from toc.tsv (page, exercise, title, words, file)
import html, os
base = os.path.dirname(os.path.abspath(__file__))
css = open(os.path.join(base, 'engine', 'style.css')).read()
rows = [l.rstrip('\n').split('\t') for l in open(os.path.join(base, 'toc.tsv')) if l.strip()]
pages = {}
for pg, ex, t, w, f in rows:
    pages.setdefault(int(pg), []).append((ex, t, w, f))
e = html.escape
body = ''
for pg in sorted(pages):
    items = ''.join(f'''
      <li><a class="row" href="{e(f)}">
        <span class="n">{e(ex)}</span>
        <span class="t"><b>{e(t)}</b><span class="s">{e(w)}</span></span>
        <span class="go" aria-hidden="true">→</span>
      </a></li>''' for ex, t, w, f in pages[pg])
    body += f'''
  <section class="unit" id="p{pg}">
    <h2>Page {pg}</h2>
    <ol class="toc">{items}
    </ol>
  </section>'''
page = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Spotlight 7 Words</title>
{css}
.unit {{ padding-top: 22px; }}
.unit h2 {{ margin-bottom: 8px; }}
.toc {{ list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }}
.row {{ display: grid; grid-template-columns: 2.2em minmax(0,1fr) 1.2em; align-items: center; gap: 12px; padding: 12px 14px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; text-decoration: none; color: var(--ink); }}
.row:hover {{ border-color: var(--accent); }}
.row:hover .go {{ color: var(--accent); transform: translateX(2px); }}
.row:focus-visible {{ outline: 2px solid var(--accent); outline-offset: 2px; }}
.n {{ font-family: var(--font-mono); font-size: 13px; color: var(--accent); }}
.t {{ display: flex; flex-direction: column; min-width: 0; }}
.t b {{ font-weight: 600; }}
.s {{ font-size: 14px; color: var(--muted); }}
.go {{ color: var(--muted); transition: transform .15s; }}
.how {{ background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 16px 18px; margin-top: 30px; }}
.how h3 {{ margin: 0 0 8px; font-size: 17px; }}
.how ol {{ margin: 0; padding-left: 1.3em; display: flex; flex-direction: column; gap: 4px; }}
</style>
</head>
<body>
<header class="hero wrap">
  <p class="eyebrow">Spotlight 7 · Английский в фокусе, 7 класс</p>
  <h1>Spotlight 7 Words</h1>
  <p class="sub">Новые слова из каждого упражнения учебника: карточки с переводом и озвучкой, потом семь заданий, чтобы слова запомнились.</p>
</header>
<main class="wrap" style="padding-block: 0 64px;">
  {body}
  <div class="how">
    <h3>Как заниматься</h3>
    <ol>
      <li>Сделай упражнение в учебнике на уроке.</li>
      <li>Дома открой его тренажёр: сначала карточки, потом все задания по порядку.</li>
      <li>Смотри на слова вверху страницы: все точки зелёные — слово выучено, красная рамка — повтори его.</li>
      <li>Через два-три дня зайди ещё раз и нажми «Start again» — задания перемешаются.</li>
    </ol>
  </div>
</main>
</body>
</html>
'''
open(os.path.join(base, '..', 'index.html'), 'w').write(page)
print(len(rows), 'exercises')
