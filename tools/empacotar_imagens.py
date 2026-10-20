"""Gera data/imagens6.js e data/imagens8.js a partir de img/*.jpg usados em data/*.js
Uso (dentro da pasta banco-questoes):  python tools/empacotar_imagens.py"""
import re, glob, base64, json, os
base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
por_serie = {'6': {}, '8': {}}
for f in glob.glob(os.path.join(base, 'data', '*.js')):
    if os.path.basename(f).startswith('imagens'): continue
    s = open(f, encoding='utf-8').read()
    for n in set(re.findall(r"'((?:c6|c8)[a-z]*_[a-z0-9_]+)'", s)):
        p = os.path.join(base, 'img', n + '.jpg')
        por_serie[n[1]][n] = 'data:image/jpeg;base64,' + base64.b64encode(open(p, 'rb').read()).decode()
for k, v in por_serie.items():
    out = os.path.join(base, 'data', f'imagens{k}.js')
    open(out, 'w').write('window.IMAGENS=Object.assign(window.IMAGENS||{},' + json.dumps(v) + ');')
    print(k, len(v), 'imagens', os.path.getsize(out) // 1024, 'KB')
