# Builds ../grammar/*.html from grammar/*.js and the grammar hub ../grammar/index.html
# Each pack header: // TITLE, EYEBROW, SUB, BOARD, LEAD, HOME ; hub row from // MODULE: n and // TOPIC
import glob, os, re, subprocess, html
base = os.path.dirname(os.path.abspath(__file__))
out_dir = os.path.join(base, '..', 'grammar'); os.makedirs(out_dir, exist_ok=True)
rows = []
for f in sorted(glob.glob(os.path.join(base, 'grammar', '*.js'))):
    name = os.path.basename(f)[:-3]
    subprocess.run(['python3', os.path.join(base, 'engine', 'build.py'), f, os.path.join(out_dir, name + '.html')], check=True)
    src = open(f).read()
    meta = {k: v.strip() for k, v in re.findall(r'^// (TITLE|EYEBROW|SUB|HUB): (.*)$', src, re.M)}
    mod = re.search(r'Module (\d+)', meta['EYEBROW']).group(1)
    rows.append((int(mod), meta['TITLE'], meta.get('HUB', ''), name + '.html'))
css = open(os.path.join(base, 'engine', 'style.css')).read()
e = html.escape
mods = {}
for m, t, d, f in rows: mods.setdefault(m, []).append((t, d, f))
NAMES = {1: 'Lifestyles', 2: 'Tale time', 3: 'Profiles', 4: 'In the news', 5: 'What the future holds',
         6: 'Having fun', 7: 'In the spotlight', 8: 'Green issues', 9: 'Shopping time', 10: 'Healthy body, healthy mind'}
body = ''
for m in sorted(mods):
    items = ''.join(f'''
      <li><a class="row" href="{e(f)}">
        <span class="n">{i}</span>
        <span class="t"><b>{e(t)}</b><span class="s">{e(d)}</span></span>
        <span class="go" aria-hidden="true">→</span>
      </a></li>''' for i, (t, d, f) in enumerate(mods[m], 1))
    body += f'''
  <section class="unit" id="m{m}">
    <h2>Module {m} · {e(NAMES.get(m, ''))}</h2>
    <ol class="toc">{items}
    </ol>
  </section>'''
page = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Spotlight 7 Grammar</title>
{css}
.unit {{ padding-top: 22px; }}
.unit h2 {{ margin-bottom: 8px; }}
.toc {{ list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }}
.row {{ display: grid; grid-template-columns: 2.2em minmax(0,1fr) 1.2em; align-items: center; gap: 12px; padding: 12px 14px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; text-decoration: none; color: var(--ink); }}
.row:hover {{ border-color: var(--accent); }}
.n {{ font-family: var(--font-mono); font-size: 13px; color: var(--accent); }}
.t {{ display: flex; flex-direction: column; min-width: 0; }}
.t b {{ font-weight: 600; }}
.s {{ font-size: 14px; color: var(--muted); }}
.go {{ color: var(--muted); }}
.how {{ background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 16px 18px; margin-top: 30px; }}
.how h3 {{ margin: 0 0 8px; font-size: 17px; }}
.how ol {{ margin: 0; padding-left: 1.3em; display: flex; flex-direction: column; gap: 4px; }}
</style>
</head>
<body>
<header class="hero wrap">
  <a class="home" href="../index.html">← Spotlight 7 Words</a>
  <p class="eyebrow">Spotlight 7 · Английский в фокусе, 7 класс</p>
  <h1>Spotlight 7 Grammar</h1>
  <p class="sub">Вся грамматика учебника по модулям: короткое правило, смешные истории, сортировка, поиск ошибок, порядок слов и перевод. Всё проверяется сразу.</p>
</header>
<main class="wrap" style="padding-block: 0 64px;">
  {body}
  <div class="how">
    <h3>Как заниматься</h3>
    <ol>
      <li>Открой тему, которую проходили на уроке, и прочитай «Запомни!».</li>
      <li>Делай задания по порядку. Ошибся — прочитай подсказку и попробуй ещё раз.</li>
      <li>Вверху видно правила: все точки зелёные — правило усвоено, красная рамка — повтори.</li>
      <li>Через пару дней нажми «Начать заново» — задания перемешаются.</li>
    </ol>
  </div>
</main>
</body>
</html>
'''
open(os.path.join(out_dir, 'index.html'), 'w').write(page)
print(len(rows), 'grammar pages')
