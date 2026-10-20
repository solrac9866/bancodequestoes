# Gerador de Avaliações – 4º bimestre (6º e 8º anos)

Site estático (sem servidor): escolha série, disciplina e habilidades, preencha o cabeçalho e baixe uma prova de **10 questões, em 1 página A4, em 2 colunas**, com recortes de figuras do livro.

## Como usar
- Abrir `index.html` direto no navegador (funciona sem internet), ou publicar a pasta inteira (GitHub Pages, Netlify, Drive etc.).
- Para testar localmente com servidor: `python -m http.server 5188` dentro desta pasta.

## Conteúdo do banco (370 questões)
| Série | Disciplina | Habilidades |
|---|---|---|
| 6º | Ciências | 6 |
| 6º | Língua Inglesa | 6 |
| 6º | Projeto de Vida | 4 |
| 8º | Ciências | 7 |
| 8º | Língua Inglesa | 4 |
| 8º | Projeto de Vida | 4 |

## Estrutura
- `data/ciencias6.js`, `ciencias8.js`, `ingles6.js`, `ingles8.js`, `pv.js`: habilidades e questões. Em cada questão a **primeira alternativa é a correta**; o site embaralha ao gerar a prova.
- `data/imagens6.js`, `imagens8.js`: figuras do livro embutidas (base64), carregadas só quando a série é usada.
- `img/`: os mesmos recortes em JPG (referência).
- `vendor/`: html2canvas e jsPDF (geração do PDF no navegador).

## Adicionar questões
Em um arquivo de `data/`, acrescente:

```js
add('EF06CI06', 'c6_niveis', 'Enunciado…', ['Correta', 'Errada 1', 'Errada 2', 'Errada 3'], 1);
//   habilidade   imagem      enunciado      alternativas (1ª = correta)                    aula
```
Para novas figuras: salve o JPG em `img/` e rode de novo o empacotamento das imagens (script que gera `data/imagens6.js` e `data/imagens8.js`).
