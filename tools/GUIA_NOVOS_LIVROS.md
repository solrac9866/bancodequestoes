# Guia: incluir um livro novo no gerador de avaliações

Site em `C:\my-video\banco-questoes` (HTML/JS estático). Já tem 6º e 8º ano de Ciências, Inglês e Projeto de Vida. O site monta os botões de série e disciplina sozinho a partir dos dados: **basta criar o arquivo de dados e as imagens**, sem mexer em `app.js`, `index.html` ou `style.css`.

## 1. Arquivo de dados (um por livro/disciplina): `data/<nome>.js`
Copie o formato de `data/ingles6.js` (ou `ciencias6.js`):
```js
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'História', A = 7;                       // disciplina e ano
  B.hab.push({ id: 'HI7-ESC', ano: A, disc: D, cod: '', tit: 'Título curto', desc: 'Descrição da habilidade.', aulas: 'Aulas 1 a 4' }, ...);
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  add('HI7-ESC', '7_hist_mapa', 'Enunciado…', ['CORRETA', 'errada 1', 'errada 2', 'errada 3'], 1);   // a 1ª alternativa é SEMPRE a correta
})();
```
- `id` único (prefixo da disciplina + ano). `cod`: deixe `''` se o código da BNCC não estiver no livro (não invente códigos).
- Meta: 4 a 6 habilidades por disciplina, **10 a 14 questões por habilidade**, 4 alternativas, uma só correta, enunciados autossuficientes e baseados no que o livro mostra (texto, tabela, gráfico, mapa, imagem). Alternativas curtas (até ~20 caracteres) saem em 2 colunas, melhor para caber.
- `img`: nome do recorte (sem `.jpg`) ou `null`. Priorize questões com figura do livro (gráfico, mapa, tabela, esquema, charge), pois a prova precisa trazer imagens contextualizadas. Não repita a mesma figura em mais de 3 questões.
- Disciplinas dos livros: cada livro tem duas ou três (ex.: História e Geografia = duas disciplinas, cada uma com suas habilidades; use um arquivo por disciplina ou um por livro, como preferir).
- **Arquivo de dados do seu livro (já reservado e já ligado ao `index.html`, não mexa no HTML):** `7ci` = 7º Ciências/Inglês/Projeto de Vida → `data/livro_7ci.js`; `9ci` → `data/livro_9ci.js`; `6hg`, `7hg`, `8hg`, `9hg` = História e Geografia → `data/livro_6hg.js` etc.; `7pm` = Português e Matemática do 7º → `data/livro_7pm.js` (`6pm`, `8pm`, `9pm` reservados para depois). Escreva tudo (todas as disciplinas do livro) nesse único arquivo.

## 2. Imagens
- Nome do recorte: **o primeiro dígito do nome é o ano** (ex.: `7_hist_mapa`, `9_geo_grafico`). Isso é o que separa os pacotes `data/imagens7.js`, etc.
- Salvar em `img/<nome>.jpg` (largura máx. 820 px, JPEG ~76).
- Para achar a região certa sem olhar página por página:
  - Texto do PDF: `PYTHONIOENCODING=utf-8 python -W ignore -c "import pymupdf; ..."` (a página impressa = página do PDF − 1).
  - Prévia com régua em pontos: `python -W ignore C:\my-video\work\qb\scripts\pv.py <chave> <pagina1> <pagina2>` gera `work/qb/fig/pv_<chave>_<p1>_<p2>.jpg` (duas páginas lado a lado, régua em pt). Chaves: `7c` (7º Ciências/Inglês/PV, 1781688.pdf), `9c` (9º Ciências/Inglês/PV, 1783620 (1).pdf), `6h` (6º Hist/Geo, 1781635.pdf), `7h` (7º Hist/Geo, 1781723.pdf), `8h` (8º Hist/Geo, 1783576.pdf), `9h` (9º Hist/Geo, 1783642.pdf), `7p` (7º Port/Mat, 1781669.pdf). Se a chave não existir, acrescente em `pv.py` e `render_crops.py` (dicionário de PDFs; todos em `C:\Users\carlo\Downloads\`).
  - Só abra prévias das páginas que realmente têm figura útil (gráfico, mapa, tabela, charge, esquema), e olhe duas páginas por imagem.
- Recortes: crie `work/qb/scripts/crops_<nome>.py` com `CROPS = {'nome': (pagina_pdf, x0, y0, x1, y1), ...}` (coordenadas em pontos, página 567×737) e rode `python -W ignore work/qb/scripts/render_crops.py <chave> crops_<nome> CROPS`. Confira os recortes com uma folha de miniaturas (Pillow) antes de usar.

## 3. Empacotar e testar
1. `cd C:\my-video\banco-questoes && python tools/empacotar_imagens.py` (gera `data/imagens<ano>.js` com as imagens embutidas).
2. Servidor: `python -m http.server 5188` dentro de `banco-questoes` (ou `preview_start` com `banco-questoes`).
3. Teste automático de encaixe (10 questões em 1 página A4, 2 colunas, nunca estourar): `python -W ignore C:\my-video\work\qb\scripts\stress.py` (edite a lista de séries/disciplinas dentro dele para as novas) – precisa terminar com `overflow: []`.
4. Gere 1 prova de cada nova disciplina (`work/qb/scripts/shot.py <ano> "<Disciplina>" <saida.png>`) e olhe a imagem: texto legível, figura correspondente à pergunta, gabarito correto.
5. Revise os gabaritos: a primeira alternativa de cada questão precisa estar certa de acordo com o livro.

## Regras
- Não mexa em `app.js`, `index.html`, `style.css` nem nos arquivos de outros livros.
- Não faça commit nem push.
- No fim, informe: nº de habilidades e de questões por disciplina, o que ficou de fora e qualquer dúvida de conteúdo.
