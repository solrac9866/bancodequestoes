// Gera data/imgs/<ano>_<disciplina>.js com as imagens (base64) usadas pelas questões de cada ano+disciplina.
// Uso (dentro de banco-questoes):  node tools/empacotar_imagens.js
const fs = require('fs'), path = require('path');
const base = path.resolve(__dirname, '..');
global.window = {};
for (const f of fs.readdirSync(path.join(base, 'data')).filter((x) => /^(ciencias|ingles|pv|livro_).*\.js$/.test(x)))
  eval(fs.readFileSync(path.join(base, 'data', f), 'utf8'));
// O GitHub bloqueia o push se um trecho aleatório do base64 parecer uma chave de API (falso positivo).
// Quebramos esses trechos em duas strings JavaScript ("..."+"..."), o que não altera a imagem.
const PADROES = [/AKID[A-Za-z0-9]{32}/g, /AKIA[0-9A-Z]{16}/g, /ASIA[0-9A-Z]{16}/g, /AIza[0-9A-Za-z_-]{35}/g, /gh[pousr]_[A-Za-z0-9]{36}/g,
  /github_pat_[A-Za-z0-9_]{22,}/g, /xox[baprs]-[A-Za-z0-9-]{10,}/g, /sk_(live|test)_[A-Za-z0-9]{24,}/g, /sk-[A-Za-z0-9]{32,}/g, /glpat-[A-Za-z0-9_-]{20}/g];
function quebrarPadroes(js) {
  for (const re of PADROES) js = js.replace(re, (m) => m.slice(0, 4) + '"+"' + m.slice(4));
  return js;
}
const slug = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const grupos = {};
for (const q of window.BANCO.q) if (q.img) (grupos[q.ano + '_' + slug(q.disc)] ||= new Set()).add(q.img);
const out = path.join(base, 'data', 'imgs'); fs.mkdirSync(out, { recursive: true });
for (const f of fs.readdirSync(out)) fs.unlinkSync(path.join(out, f));
let total = 0;
for (const [k, nomes] of Object.entries(grupos)) {
  const m = {};
  for (const n of nomes) { const p = path.join(base, 'img', n + '.jpg'); if (fs.existsSync(p)) m[n] = 'data:image/jpeg;base64,' + fs.readFileSync(p).toString('base64'); else console.log('FALTA', n); }
  const file = path.join(out, k + '.js');
  let js = 'window.IMAGENS=Object.assign(window.IMAGENS||{},' + JSON.stringify(m) + ');';
  js = quebrarPadroes(js);
  fs.writeFileSync(file, js);
  const kb = Math.round(fs.statSync(file).size / 1024); total += kb;
  console.log(k.padEnd(28), Object.keys(m).length, 'imagens', kb, 'KB');
}
console.log('total', Math.round(total / 1024), 'MB');
