# Gerador de Avaliações – 4º bimestre (6º e 8º anos)

Site estático (sem servidor): escolha série, disciplina e habilidades, preencha o cabeçalho e baixe uma prova de **10 questões, em 1 página A4, em 2 colunas**, com recortes de figuras do livro.

## Como usar
- Abrir `index.html` direto no navegador (funciona sem internet), ou publicar a pasta inteira (GitHub Pages, Netlify, Drive etc.).
- Para testar localmente com servidor: `python -m http.server 5188` dentro desta pasta.

## Conteúdo do banco (1.520 questões, 119 habilidades)
| Ano | Disciplinas |
|---|---|
| 6º | Ciências, Língua Inglesa, Projeto de Vida, História, Geografia |
| 7º | Ciências, Língua Inglesa, Projeto de Vida, História, Geografia, Língua Portuguesa, Matemática |
| 8º | Ciências, Língua Inglesa, Projeto de Vida, História, Geografia |
| 9º | Ciências, Língua Inglesa, Projeto de Vida, História, Geografia |

Faltam (ainda sem os PDFs): Língua Portuguesa e Matemática do 6º, 8º e 9º anos.

## Estrutura
- `data/*.js` (`ciencias6/8`, `ingles6/8`, `pv`, `livro_*`): habilidades e questões. Em cada questão a **primeira alternativa é a correta**; o site embaralha ao gerar a prova.
- `data/imgs/<ano>_<disciplina>.js`: figuras do livro embutidas (base64), carregadas só quando aquela disciplina é usada.
- `img/`: os mesmos recortes em JPG (referência).
- `vendor/`: html2canvas e jsPDF (geração do PDF no navegador).

## Adicionar questões
Em um arquivo de `data/`, acrescente:

```js
add('EF06CI06', 'c6_niveis', 'Enunciado…', ['Correta', 'Errada 1', 'Errada 2', 'Errada 3'], 1);
//   habilidade   imagem      enunciado      alternativas (1ª = correta)                    aula
```
Para novas figuras: salve o JPG em `img/` e rode `node tools/empacotar_imagens.js`. Veja também `tools/GUIA_NOVOS_LIVROS.md`. Campo opcional `texto` na questão mostra um trecho digitado (citação) acima da figura.
