/* 6º ano – Língua Portuguesa e Matemática – Volume 4 (4º bimestre)
   Em cada questão a PRIMEIRA alternativa é a correta; o site embaralha na hora de gerar a prova. */

/* ===================== LÍNGUA PORTUGUESA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = "Língua Portuguesa", A = 6;
  B.hab.push(
    { id: "PT6-NAR", ano: A, disc: D, cod: '', tit: "Romance infantojuvenil e releitura: O pequeno príncipe",
      desc: "Interpretar trechos de O pequeno príncipe e de O pequeno príncipe preto: narrador, ideias subentendidas, sentido de expressões, releitura, ancestralidade e identidade.", aulas: "Aulas 1, 3 e 4" },
    { id: "PT6-MIT", ano: A, disc: D, cod: '', tit: "Mitos, lendas e contos: grego, africano, indígena, popular, mistério e terror",
      desc: "Ler mitos (Dédalo e Ícaro, Mbombo), lendas indígenas, conto popular e contos de mistério e terror, reconhecendo enredo, simbolismo, explicação da origem das coisas, suspense e quebra de expectativa.", aulas: "Aulas 9, 15, 17, 19, 21 e 23" },
    { id: "PT6-MUL", ano: A, disc: D, cod: '', tit: "Tirinhas, memes e textos multimodais",
      desc: "Interpretar tirinhas e memes: relação entre texto verbal e não verbal, balões, interjeições, ironia, duplo sentido e quebra de expectativa.", aulas: "Aulas 11 e 12" },
    { id: "PT6-NOR", ano: A, disc: D, cod: '', tit: "Gêneros normativos e argumentativos: ECA, regimento escolar e clichês",
      desc: "Compreender o Estatuto da Criança e do Adolescente e o regimento escolar (finalidade, linguagem, vocabulário) e distinguir clichês de argumentos.", aulas: "Aulas 5, 7 e 13" },
    { id: "PT6-GR1", ano: A, disc: D, cod: '', tit: "Gramática: sujeito, predicado, orações, pontuação, paralelismo e coesão",
      desc: "Identificar sujeito simples e composto, predicado, frase, oração e período, usar a vírgula, o travessão, o paralelismo sintático e recursos de coesão referencial.", aulas: "Aulas 4, 6, 8, 16, 18, 20 e 22" },
    { id: "PT6-GR2", ano: A, disc: D, cod: '', tit: "Ortografia: mas/mais, s/ss, hífen, prefixos, crase e acentuação",
      desc: "Aplicar regras de uso de mas/mais, s e ss, hífen com prefixos (auto-, super-, anti-), prefixos de negação, crase, ditongos e hiatos.", aulas: "Aulas 2, 7, 8, 10, 12, 13, 14 e 24" }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length-1].texto = texto; };

  /* ---------- PT6-NAR ---------- */
  add("PT6-NAR", "6_port_jiboia1", "O desenho nº 1 do narrador de O pequeno príncipe aparece na figura. Para as “pessoas grandes”, ele parecia:",
    ["um chapéu", "uma jiboia aberta", "um carneiro", "uma caixa"], 1);
  add("PT6-NAR", "6_port_jiboia2", "O desenho nº 2 foi feito para que as pessoas grandes compreendessem o primeiro. O que ele mostra?",
    ["o interior da jiboia, com o elefante dentro", "um chapéu visto de lado", "um carneiro dentro da caixa", "uma montanha ao longe"], 1);
  addT("PT6-NAR", "Mostrei minha obra-prima às pessoas grandes e perguntei se o meu desenho lhes fazia medo. Responderam-me: “Por que é que um chapéu faria medo?”. [...] Elas têm sempre necessidade de explicações.", "O trecho sugere que, para o narrador, os adultos:",
    ["só entendem o que está explícito e pedem explicações", "têm medo de jiboias", "gostam de fazer desenhos", "são mais criativos que as crianças"], 1);
  addT("PT6-NAR", "— Por favor... desenha-me um carneiro... — Hem! — Desenha-me um carneiro... Pus-me de pé, como atingido por um raio. Esfreguei os olhos. Olhei bem.", "No trecho, a expressão “como atingido por um raio” mostra que o narrador ficou:",
    ["muito surpreso", "com sono", "muito feliz", "sem medo algum"], 1);
  addT("PT6-NAR", "— Não! Não! Eu não quero um elefante numa jiboia. A jiboia é perigosa e o elefante toma muito espaço. Tudo é pequeno onde eu moro. Preciso é dum carneiro. Desenha-me um carneiro.", "Por que o menino recusa o desenho da jiboia com o elefante?",
    ["Porque tudo é pequeno onde ele mora", "Porque não gosta de animais", "Porque prefere desenhos coloridos", "Porque queria um elefante grande"], 2);
  addT("PT6-NAR", "— Esta é a caixa. O carneiro está dentro. Mas fiquei surpreso de ver iluminar-se a face do meu pequeno juiz: — Era assim mesmo que eu queria!", "O menino aprova o desenho da caixa porque:",
    ["pode imaginar o carneiro do jeito que quiser", "é um desenho realista de carneiro", "o carneiro aparece à vista", "a caixa é muito grande"], 2);
  addT("PT6-NAR", "Em um minúsculo planeta mora um menino preto com uma árvore Baobá. O menino gosta muito de regar a Baobá, que é sua única companheira", "Em O pequeno príncipe preto, o planeta do menino é descrito como:",
    ["minúsculo, com uma Baobá como única companheira", "enorme e cheio de moradores", "povoado por muitas raposas", "um deserto sem plantas"], 3);
  addT("PT6-NAR", "Existe uma coisa chamada ancestralidade. Antes dessa árvore, existiu outra árvore, [...] Antes de mim vieram os meus pais, os meus avós, os meus bisavós, os meus tataravós [...] Todos eram reis, rainhas.", "O trecho valoriza principalmente:",
    ["a ancestralidade, isto é, a origem e a história da família", "o uso da tecnologia", "a competição entre as pessoas", "o consumismo"], 3);
  addT("PT6-NAR", "Meu cabelo não é ruim. Ele não fala mal de ninguém. Antes eu cortava meu cabelo bem baixinho, mas agora estou deixando crescer.", "Ao dizer que seu cabelo “não é ruim”, o menino demonstra:",
    ["orgulho e valorização da própria identidade", "vergonha da aparência", "vontade de mudar o cabelo", "raiva dos amigos"], 3);
  addT("PT6-NAR", "Tem gente que fala que existe um lápis “cor de pele”. Como assim? A pele pode ter tantos tons…", "A passagem convida o leitor a refletir sobre:",
    ["diversidade e padrões que excluem muitas pessoas", "como escolher bons lápis de cor", "a importância de pintar desenhos", "como cuidar de uma árvore"], 3);
  addT("PT6-NAR", "Releitura: é uma nova versão de uma obra já conhecida. Ela pode modificar personagens, contexto ou perspectiva, mantendo elementos essenciais da história original.", "Uma releitura, como O pequeno príncipe preto, é:",
    ["uma nova versão de obra conhecida, que pode mudar personagens e contexto", "uma cópia idêntica da obra original", "um resumo feito por um jornalista", "uma crítica sobre o livro original"], 3);
  addT("PT6-NAR", "— Que quer dizer “cativar”? — É uma coisa muito esquecida, disse a raposa. Significa “criar laços”. — Criar laços? — Exatamente [...] Se tu me cativas, nós teremos necessidade um do outro.", "Segundo a raposa, “cativar” significa:",
    ["criar laços", "caçar", "esquecer", "brincar"], 4);

  /* ---------- PT6-MIT ---------- */
  addT("PT6-MIT", "Mas Ícaro, tomado pela euforia de voar, ignorou os conselhos do pai e subiu cada vez mais alto. Ao se aproximar demais do sol, o calor derreteu a cera de suas asas.", "O trecho deixa subentendido que Ícaro foi:",
    ["imprudente e desobediente", "obediente ao pai", "medroso", "preguiçoso"], 9);
  addT("PT6-MIT", "— Não voe muito alto, pois o calor do sol derreterá a cera das asas. E não voe muito baixo, pois a umidade do mar molhará as penas e as asas não funcionarão.", "O conselho de Dédalo pode simbolizar, além do voo:",
    ["equilíbrio", "rebeldia", "habilidade", "sorte"], 9);
  addT("PT6-MIT", "Dédalo foi chamado pelo rei Minos, de Creta, para construir um labirinto [...] para aprisionar o Minotauro, uma criatura metade homem, metade touro. [...] O local onde Ícaro caiu foi chamado de Mar Icário, em sua homenagem.", "Por que esse texto pode ser considerado um mito?",
    ["É uma história antiga, com seres extraordinários, que explica a origem de um lugar", "Conta um fato histórico comprovado", "Apresenta dados científicos sobre o mar", "Narra um acontecimento do dia a dia"], 9);
  addT("PT6-MIT", "Mbombo vomitou novamente, mas, em vez de objetos inanimados como o Sol e as estrelas, ele vomitou muitos animais [...]. Além disso, ele vomitou os primeiros humanos, entre eles Loko Yima.", "No mito de Mbombo, o ato de vomitar representa, de forma simbólica:",
    ["a criação do mundo e dos seres", "uma doença do deus", "um castigo aos humanos", "uma festa dos animais"], 21);
  addT("PT6-MIT", "Com sua expulsão, os humanos ficaram sem fogo para produzir ferramentas, armas e não conseguiam mais cozinhar. Então, Mbombo ensinou os humanos a fazer fogo a partir das árvores.", "No mito, Mbombo ensina os humanos a fazer fogo. Isso mostra que, no início, os humanos:",
    ["dependiam do deus para sobreviver", "já sabiam tudo", "não precisavam de fogo", "eram menos importantes que os animais"], 21);
  addT("PT6-MIT", "Naiá [...] mergulhou fundo ao seu encontro e se afogou. Jaci, comovida com tão intenso desejo, [...] resolveu metamorfoseá-la em uma estrela diferente de todas [...]. Assim, Naiá foi transformada na “Estrela das Águas”.", "Qual é o desfecho da lenda da vitória-régia?",
    ["Naiá é transformada na vitória-régia, a “Estrela das Águas”", "Naiá torna-se a Lua", "Naiá volta viva para a aldeia", "Jaci castiga a aldeia"], 19);
  addT("PT6-MIT", "Conta-se que, por isso, as flores perfumadas e brancas da vitória-régia só se abrem à noite: uma homenagem a Jaci, a deusa Lua. E, ao nascer do sol, as flores ficam rosadas, como o rosto da guerreira Naiá.", "A lenda da vitória-régia explica:",
    ["a origem de uma planta e o comportamento de suas flores", "o surgimento do rio Amazonas", "a origem do fogo", "a criação dos animais"], 19);
  addT("PT6-MIT", "Na primeira separação, a Lua chorou todo o dia e toda a noite. Foi então que as lágrimas correram por cima da Terra até o mar. [...] As lágrimas da Lua é que deram origem ao nosso rio Amazonas.", "Segundo a lenda, o rio Amazonas se originou:",
    ["das lágrimas da Lua", "do calor do Sol", "do vômito de um deus", "da pororoca"], 19);
  addT("PT6-MIT", "— Não, a senhora entendeu mal. Eu não preciso de comida, não. Só queria era uma panela emprestada e um pouco d’água. [...] Eu faço uma sopa de pedra maravilhosa e não preciso de mais nada, já fico de barriga cheia.", "Ao pedir uma panela e água, Pedro Malasartes pretende:",
    ["enganar a velha para conseguir comida", "ensinar uma receita simples", "mostrar que não sabe cozinhar", "dar comida à velha"], 17);
  addT("PT6-MIT", "— E as pedras? — perguntou a mulher. — As pedras? Ah... a gente joga fora!!!", "A quebra de expectativa do final do conto está em:",
    ["a mulher dar todos os ingredientes e as pedras serem jogadas fora", "a sopa ficar sem sabor", "Pedro ser expulso da casa", "a mulher descobrir o truque"], 17);
  addT("PT6-MIT", "A Coisa era... um espelho! [...] Cada um que descia as escadas, no escuro, via uma coisa diferente no espelho. E todos eles pensavam que tinham visto... a Coisa. A Coisa eram eles mesmos!", "Por que cada pessoa descreveu a “coisa” do porão de modo diferente?",
    ["Cada uma via o próprio reflexo no escuro", "Havia vários monstros", "Todas estavam mentindo", "O porão tinha fantasmas"], 15);
  addT("PT6-MIT", "Eles entraram na biblioteca, a porta se fechou e eles ficaram paralisados com aquilo que viram. Eles soltaram um grito de horror que foi ouvido por todos da rua. Desde esse dia nunca mais se viu esses dois compadres.", "O final desse conto de terror causa medo porque:",
    ["os compadres desaparecem sem explicação", "o mistério é resolvido de modo lógico", "a casa é demolida", "o antigo prefeito volta"], 23);

  /* ---------- PT6-MUL ---------- */
  add("PT6-MUL", "6_port_tirinha1", "Na tirinha do Homem-Grilo, a quebra de expectativa que gera o humor ocorre quando:",
    ["o herói acha que é reconhecido, mas foi confundido com outra personagem", "o herói perde seus poderes", "o garoto foge do herói", "a cidade é destruída"], 11);
  add("PT6-MUL", "6_port_tirinha1", "No segundo quadrinho, o balão em forma de nuvem representa:",
    ["o pensamento da personagem", "um grito", "um sussurro", "a fala do narrador"], 11);
  add("PT6-MUL", "6_port_tirinha1", "A interjeição “Oba!” no segundo quadrinho expressa:",
    ["alegria e empolgação", "dor", "medo", "dúvida"], 11);
  add("PT6-MUL", "6_port_tirinha2", "Na tirinha, a expressão “golpe baixo” faz referência:",
    ["à altura das prateleiras e a uma estratégia injusta para influenciar o consumo infantil", "apenas ao preço baixo dos produtos", "a um produto de baixa qualidade", "a uma briga no supermercado"], 11);
  add("PT6-MUL", "6_port_tirinha2", "O objetivo principal dessa tirinha é:",
    ["criticar, com humor, o marketing voltado às crianças", "ensinar uma receita de macarrão", "informar os preços do mercado", "fazer propaganda de um brinquedo"], 11);
  add("PT6-MUL", "6_port_tirinha3", "Quais são as interjeições presentes nos quadrinhos?",
    ["eba – uau – ué", "olha – adoro – prontinho", "prontinho – uau – eba", "uau – ué – exatamente"], 11);
  add("PT6-MUL", "6_port_tirinha3", "Na tirinha, a interjeição “Ué!” expressa:",
    ["dúvida e estranhamento", "alegria", "dor", "alívio"], 11);
  add("PT6-MUL", "6_port_meme_cachorro", "No meme, o humor surge porque:",
    ["o cachorro, de olhos arregalados, deixa claro que não vai ver o barulho", "o cachorro está feliz em ir ao quintal", "o cachorro ataca o invasor", "o dono se assusta com o barulho"], 12);
  add("PT6-MUL", "6_port_meme_cozinha", "No meme, a ironia aparece porque:",
    ["o texto diz que a pessoa sabe cozinhar, mas a imagem a mostra cozinhando de forma desajeitada", "a imagem mostra um grande cozinheiro", "o texto e a imagem dizem a mesma coisa", "a pessoa cozinha com muita calma"], 12);
  add("PT6-MUL", "6_port_meme_senha", "Neste meme, a ironia está em:",
    ["o gesto positivo da criança contrastar com o comentário de que a senha é fraca", "a criança chorar por causa da senha", "a senha ser muito forte", "a criança não saber ler"], 12);
  add("PT6-MUL", "6_port_meme_sei", "No meme, o uso de “sei...” associado à imagem expressa:",
    ["desconfiança", "certeza", "desprezo", "insegurança"], 12);
  add("PT6-MUL", "6_port_meme_ponto", "No meme “A que ponto chegamos”, a palavra “ponto” tem:",
    ["dois sentidos: ponto de ônibus e expressão de surpresa com a situação", "apenas o sentido de ponto de ônibus", "o sentido de sinal de pontuação", "o sentido de nota de prova"], 12);

  /* ---------- PT6-NOR ---------- */
  addT("PT6-NOR", "Art. 2º Considera-se criança, para os efeitos desta Lei, a pessoa até doze anos de idade incompletos, e adolescente aquela entre doze e dezoito anos de idade.", "Segundo o artigo 2º do ECA, adolescente é a pessoa:",
    ["entre doze e dezoito anos de idade", "até doze anos incompletos", "com mais de dezoito anos", "de qualquer idade"], 5);
  addT("PT6-NOR", "Art. 1º Esta Lei dispõe sobre a proteção integral à criança e ao adolescente.", "No artigo 1º, a palavra “dispõe” significa:",
    ["determina", "pergunta", "testa", "ignora"], 5);
  addT("PT6-NOR", "Art. 4º É dever da família, da comunidade, da sociedade em geral e do poder público assegurar, com absoluta prioridade, a efetivação dos direitos referentes à vida, à saúde, à alimentação, à educação, ao esporte, ao lazer [...]", "No artigo 4º, o termo “efetivação” pode ser substituído por:",
    ["cumprimento", "suspensão", "criação", "anulação"], 5);
  addT("PT6-NOR", "Art. 60. É proibido qualquer trabalho a menores de quatorze anos de idade, salvo na condição de aprendiz.", "No artigo 60, a palavra “salvo” pode ser substituída por:",
    ["exceto", "também", "além de", "como"], 5);
  addT("PT6-NOR", "Parágrafo único. Para os fins desta Lei, considera-se: I - castigo físico: ação de natureza disciplinar ou punitiva aplicada com o uso da força física sobre a criança ou o adolescente que resulte em: a) sofrimento físico; ou b) lesão;", "Segundo o ECA, castigo físico é:",
    ["ação punitiva com força física que causa sofrimento ou lesão à criança", "uma conversa firme sobre o comportamento", "uma tarefa escolar extra", "uma brincadeira entre irmãos"], 5);
  addT("PT6-NOR", "Art. 58. No processo educacional respeitar-se-ão os valores culturais, artísticos e históricos próprios do contexto social da criança e do adolescente, garantindo-se a estes a liberdade da criação e o acesso às fontes de cultura.", "Com base no artigo 58, uma aluna muçulmana pode ser impedida de usar o hijab na escola?",
    ["Não, pois a escola deve respeitar os valores culturais de cada estudante", "Sim, pois a escola decide as regras", "Sim, pois o uso é proibido", "Só se a nota for baixa"], 6);
  addT("PT6-NOR", "Artigo 78 – As condutas dos estudantes consideradas incompatíveis com a manutenção de um ambiente escolar sadio [...] são: I - Ausentar-se das aulas ou dos prédios escolares, sem prévia justificativa ou autorização da direção ou dos professores da escola;", "O objetivo do artigo 78 desse regimento escolar é:",
    ["informar quais atitudes dos estudantes prejudicam o ambiente escolar", "informar quais atitudes dos responsáveis prejudicam a escola", "informar quais atitudes dos professores prejudicam a escola", "informar quais atitudes dos gestores prejudicam a escola"], 7);
  addT("PT6-NOR", "d) Plagiar, ou seja, apropriar-se do trabalho de outro e utilizá-lo como se fosse seu, sem dar o devido crédito e fazer menção ao autor, como no caso de cópia de trabalhos de outros alunos [...]", "Por que o regimento explica o significado de “plagiar”?",
    ["Porque a palavra não é comum e os estudantes precisam entendê-la para seguir a regra", "Porque é uma palavra engraçada", "Para enfeitar o texto", "Porque é de origem estrangeira"], 7);
  addT("PT6-NOR", "Artigo 103 – A avaliação é uma prática pedagógica intrínseca ao processo de ensino e aprendizagem, com a função de diagnosticar o nível de apropriação do conhecimento para que o estudante continue avançando em sua aprendizagem.", "Segundo o artigo 103, a principal função da avaliação é:",
    ["diagnosticar a aprendizagem para que o estudante continue avançando", "classificar os estudantes em um ranking", "punir quem não atingiu os objetivos", "reforçar o conteúdo com provas ao final de cada tema"], 8);
  addT("PT6-NOR", "Artigo 104 – A avaliação da aprendizagem será contínua, cumulativa e processual, devendo refletir o desenvolvimento global do estudante [...], com preponderância dos aspectos qualitativos sobre os quantitativos.", "“Com preponderância dos aspectos qualitativos sobre os quantitativos” significa:",
    ["dar mais importância à qualidade da aprendizagem do que às notas", "usar apenas notas numéricas", "observar somente os erros dos estudantes", "avaliar apenas provas e trabalhos"], 8);
  addT("PT6-NOR", "Art. 14 – As instituições escolares terão a função de aprimorar o processo de construção de autonomia da escola e as relações de convivência das comunidades escolar e local. Parágrafo Único: As escolas contarão com as seguintes instituições [...]: I - associação de pais e mestres;", "A linguagem desse trecho de regimento escolar é:",
    ["objetiva e formal, própria de documentos oficiais", "poética, com muitas figuras de linguagem", "informal, próxima da fala cotidiana", "narrativa, centrada em personagens"], 7);
  add("PT6-NOR", null, "Em uma redação sobre redes sociais, a frase “A grama do vizinho sempre parece mais verde” é um clichê porque:",
    ["é muito repetida e genérica, sem dados ou explicação", "traz dados de uma pesquisa", "é um artigo de lei", "é um argumento científico"], 13);
  add("PT6-NOR", null, "Qual das frases é um argumento, e não um clichê?",
    ["O desmatamento contribui para o aumento da temperatura e prejudica diversos ecossistemas.", "A união faz a força.", "Todos merecem uma segunda chance.", "A saúde é o nosso maior tesouro."], 13);

  /* ---------- PT6-GR1 ---------- */
  addT("PT6-GR1", "Dona Julinha tinha levado o espelho para baixo e tinha coberto com um lençol.", "Nesse trecho de “A coisa”, o sujeito é:",
    ["Dona Julinha", "o espelho", "um lençol", "para baixo"], 16);
  addT("PT6-GR1", "Um dia o lençol desprendeu e caiu e se transformou na... Coisa...", "Nessa frase, o predicado é:",
    ["desprendeu e caiu e se transformou na... Coisa...", "o lençol", "Um dia o lençol", "se transformou"], 16);
  add("PT6-GR1", null, "Qual frase tem sujeito composto?",
    ["Alvinho e a família riram no final.", "Alvinho ficou assustado.", "Os espelhos estavam no porão.", "A avó desceu as escadas e abriu a janela."], 16);
  add("PT6-GR1", null, "Em “Os investigadores observavam o corredor.”, o sujeito é:",
    ["simples, pois tem um só núcleo", "composto, por estar no plural", "composto, por haver dois verbos", "inexistente"], 16);
  addT("PT6-GR1", "Ele olhou em volta, viu um curral cheio de vacas.", "Quantas orações há no trecho?",
    ["duas", "uma", "três", "nenhuma"], 18);
  addT("PT6-GR1", "Ele provou a sopa, fez uma cara estranha e pediu mais sal.", "Esse período é:",
    ["composto, com três orações", "simples, com uma oração", "composto, com duas orações", "uma frase sem verbo"], 18);
  add("PT6-GR1", null, "Qual das alternativas é uma frase sem oração (sem verbo)?",
    ["Sopa de pedra?", "Ele olhou em volta.", "A água começou a ferver.", "Pedro preparou a sopa."], 18);
  addT("PT6-GR1", "Naiá queria porque queria ser levada pela Lua, mas para isso ela precisaria morrer primeiro!", "A vírgula é usada nessa frase para:",
    ["separar duas ideias em contraste, a primeira sendo oração independente", "separar o sujeito do verbo", "separar duas frases sem relação", "indicar pausa antes da finalidade"], 20);
  add("PT6-GR1", null, "Em qual alternativa a vírgula foi empregada corretamente?",
    ["Embora o Sol e a Lua se amassem à distância, era um amor muito bonito.", "O amor era bonito de se ver porque, era verdadeiro.", "Era um amor bonito que dava gosto de ver quando, eles se amavam à distância.", "Porque, eles se amavam à distância não havia perigo para o mundo."], 20);
  addT("PT6-GR1", "Quando a planta cresceu, todos ficaram surpresos.", "A vírgula foi usada porque a frase:",
    ["começa com uma oração subordinada, separada da principal", "separa o sujeito do verbo", "começa com uma explicação final", "tem duas orações independentes"], 20);
  add("PT6-GR1", null, "Qual frase mantém o paralelismo sintático?",
    ["O que eu gosto de fazer nas férias: viajar, ler, brincar e passear.", "O que eu gosto de fazer nas férias: viagens, ler, brincadeiras e passear.", "O que eu gosto de fazer nas férias: viajar, leitura, brincar e passeios.", "O que eu gosto de fazer nas férias: viagens, ler, brincar e passeio."], 6);
  addT("PT6-GR1", "No início nada existia, foi Monam que criou o céu, a terra, os pássaros e os animais. Ele vivia entre os homens, mas eles o desprezaram.", "Os pronomes “Ele” e “eles” referem-se, respectivamente, a:",
    ["Monam e os homens", "Irin-Majé e os homens", "os homens e Monam", "o céu e os homens"], 22);
  addT("PT6-GR1", "— Você tem macaco? — perguntou o homem. — Não — respondeu a moça. — Tudo bem, eu tenho — disse o homem — Você tem estepe?", "Nesse trecho, os travessões servem para:",
    ["indicar as falas das personagens e separar a voz do narrador", "indicar uma enumeração", "marcar uma pausa longa apenas", "separar versos de um poema"], 4);
  addT("PT6-GR1", "Irin-Majé não queria viver só, por isso pediu ajuda a Monam e este criou uma mulher.", "A palavra “este” nesse trecho tem a função de:",
    ["evitar repetir o nome “Monam”", "indicar um lugar", "substituir a palavra “mulher”", "indicar tempo"], 22);

  /* ---------- PT6-GR2 ---------- */
  add("PT6-GR2", null, "Qual frase apresenta erro no uso de “mas” ou “mais”?",
    ["Amanda é a mais animada da família, mais Iara e Eliana são também.", "Gosto mais de ler do que ver TV, mas Margarete prefere o contrário.", "Aurora é mais bonita do que Alice, mas esta última é mais simpática.", "Quanto mais penso neste problema, mais triste fico."], 2);
  add("PT6-GR2", null, "Complete: “Clichês são comuns em muitas histórias, ___ não devem ser usados em excesso. Eles podem tornar a narrativa bem ___ previsível.”",
    ["mas ... mais", "mais ... mas", "mas ... mas", "mais ... mais"], 14);
  add("PT6-GR2", null, "Há erro no uso de “ss” em qual palavra?",
    ["Menssagem", "Essencial", "Assunto", "Assessor"], 10);
  add("PT6-GR2", null, "Assim como “estresse”, qual palavra é escrita com “ss”?",
    ["sucesso", "camisa", "aniversário", "sorvete"], 10);
  add("PT6-GR2", null, "Nas palavras “asas” e “desesperado”, a letra S representa o som de:",
    ["/z/, por estar entre vogais", "/s/, por estar no início", "/ch/, como em “xadrez”", "/s/, por estar entre vogais"], 10);
  add("PT6-GR2", "6_port_meme_hifen", "Pela imagem, qual lista apresenta as palavras escritas de acordo com a norma-padrão?",
    ["A lista verde: Autoajuda, Infraestrutura, Extraescolar", "A lista vermelha: Auto-ajuda, Infra-estrutura, Extra-escolar", "As duas listas", "Nenhuma das listas"], 12);
  add("PT6-GR2", null, "Pelo Acordo Ortográfico, o prefixo “auto-” mantém o hífen quando a palavra seguinte começa por:",
    ["o ou h", "r", "s", "i"], 13);
  add("PT6-GR2", null, "Qual das palavras abaixo está escrita corretamente?",
    ["autorretrato", "auto-retrato", "autoretrato", "auto retrato"], 13);
  add("PT6-GR2", null, "Qual das palavras abaixo está escrita corretamente?",
    ["auto-observação", "autoobservação", "auto observação", "autobservação"], 13);
  addT("PT6-GR2", "Alguns prefixos (elementos colocados no início de uma palavra para formar uma nova), como “i-”, “in-”, “des-” e “a-”, atribuem à palavra original a ideia de negação. Exemplos: leal – desleal; normal – anormal.", "Nas palavras “inútil”, “desleal” e “anormal”, os prefixos “in-”, “des-” e “a-” indicam:",
    ["negação", "aumento", "tempo", "lugar"], 7);
  add("PT6-GR2", null, "Em qual frase a crase foi usada corretamente?",
    ["Vou à escola.", "Vou à pé para a escola.", "Quebrei à garrafa.", "Começou à correr."], 8);
  addT("PT6-GR2", "Portfólio: consiste em um arquivo pessoal de atividades que armazena as produções dos estudantes ao longo de um período, com vistas à análise e verificação do desenvolvimento de habilidades e competências.", "Nesse trecho, o “a” recebe acento de crase porque:",
    ["há a junção da preposição “a” com o artigo feminino “a”", "a palavra seguinte é masculina", "a palavra seguinte é um verbo", "a palavra seguinte está no plural"], 8);
  add("PT6-GR2", null, "Em qual alternativa todas as palavras levam acento por serem oxítonas com ditongo aberto?",
    ["Chapéu – papéis – herói", "Papéis – herói – país", "Herói – baú – chapéu", "Saúde – papéis – país"], 24);
  addT("PT6-GR2", "Quando manifestei a um amigo meu o desejo de visitar essa Casa de Saúde particular, dedicada especialmente a pessoas com transtornos mentais, ele não disfarçou o mau humor.", "Na palavra “saúde”, o “u” recebe acento porque:",
    ["forma hiato, é tônico e está sozinho na sílaba", "a palavra é paroxítona terminada em “e”", "a palavra tem ditongo aberto", "a palavra é monossílaba"], 24);
})();

/* ===================== MATEMÁTICA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = "Matemática", A = 6;
  B.hab.push(
    { id: "MA6-SOL", ano: A, disc: D, cod: '', tit: "Sólidos geométricos: poliedros, corpos redondos, prismas e pirâmides",
      desc: "Classificar sólidos em poliedros e corpos redondos e determinar faces, arestas e vértices de prismas e pirâmides em situações do cotidiano.", aulas: "Aulas 1 a 5" },
    { id: "MA6-PLA", ano: A, disc: D, cod: '', tit: "Planificações de prismas, pirâmides, cilindros e cones",
      desc: "Relacionar sólidos às suas planificações, reconhecer os polígonos das faces e identificar cilindros e cones por suas características.", aulas: "Aulas 6 a 10" },
    { id: "MA6-MED", ano: A, disc: D, cod: '', tit: "Medidas de comprimento e de massa",
      desc: "Converter unidades de comprimento (km, m, cm, mm) e de massa (t, kg, g), calcular perímetros e resolver problemas com essas medidas.", aulas: "Aulas 11 a 15" },
    { id: "MA6-CAP", ano: A, disc: D, cod: '', tit: "Medidas de capacidade e de tempo",
      desc: "Converter litros e mililitros, calcular frações de capacidade e resolver problemas com horas, minutos e intervalos de tempo.", aulas: "Aulas 16 a 20" },
    { id: "MA6-ARE", ano: A, disc: D, cod: '', tit: "Área de quadrados, retângulos e triângulos em malhas quadriculadas",
      desc: "Determinar áreas contando quadradinhos e usando as fórmulas de quadrados, retângulos e triângulos, comparando figuras.", aulas: "Aulas 21 a 25" },
    { id: "MA6-VOL", ano: A, disc: D, cod: '', tit: "Volume por empilhamento de cubos",
      desc: "Calcular o volume de empilhamentos e blocos retangulares usando cubinhos como unidade, com unidades cúbicas (cm³, m³) e relação com litros.", aulas: "Aulas 26 a 30" }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length-1].texto = texto; };

  /* ---------- MA6-SOL ---------- */
  add("MA6-SOL", "6_mat_solidos_i_iv", "Qual desses sólidos é um corpo redondo?",
    ["III", "I", "II", "IV"], 1);
  add("MA6-SOL", "6_mat_solidos_ad", "Dos sólidos da figura, qual pode ser classificado como poliedro?",
    ["figura C", "figura A", "figura B", "figura D"], 1);
  add("MA6-SOL", "6_mat_tarsila", "No quadro de Tarsila do Amaral, o sólido indicado pela seta azul (A) e o indicado pela seta vermelha (B) são, respectivamente:",
    ["corpo redondo e poliedro", "poliedro e corpo redondo", "dois poliedros", "dois corpos redondos"], 2);
  add("MA6-SOL", "6_mat_prisma_hex", "O prisma reto da figura tem base hexagonal. Quantas arestas ele tem?",
    ["18", "12", "8", "24"], 2);
  add("MA6-SOL", "6_mat_caixa_hex", "A caixa da figura tem o formato de um prisma de base hexagonal. Ela tem:",
    ["12 vértices, 8 faces e 18 arestas", "12 vértices, 8 faces e 22 arestas", "8 vértices, 10 faces e 20 arestas", "8 vértices, 8 faces e 16 arestas"], 3);
  add("MA6-SOL", "6_mat_bolo", "Ana disse que a embalagem do pedaço de bolo tem formato de pirâmide. Marque a frase correta:",
    ["Ana está errada, pois a embalagem lembra um prisma.", "Ana está certa, pois a embalagem lembra uma pirâmide.", "Ana está errada, pois a embalagem lembra um cubo.", "Ana está certa, pois todos os lados são triângulos."], 3);
  add("MA6-SOL", "6_mat_blocos", "Observe as formas dos blocos. Qual afirmação é correta?",
    ["O bloco II é formado apenas por poliedros.", "O bloco I é formado por poliedros.", "O bloco III é formado por corpos redondos e poliedros.", "O bloco II é formado por corpos redondos e poliedros."], 4);
  add("MA6-SOL", "6_mat_cubo", "O cubo da figura tem quantas faces, arestas e vértices, respectivamente?",
    ["6, 12 e 8", "4, 6 e 8", "8, 12 e 6", "6, 8 e 12"], 5);
  add("MA6-SOL", "6_mat_prisma_tri_verde", "Quantas arestas tem o prisma de base triangular da figura?",
    ["9", "5", "6", "2"], 5);
  add("MA6-SOL", "6_mat_pir_quad", "Quantas faces, arestas e vértices tem a pirâmide de base quadrangular da figura?",
    ["5 faces, 8 arestas e 5 vértices", "5 faces, 6 arestas e 4 vértices", "4 faces, 8 arestas e 5 vértices", "5 faces, 8 arestas e 4 vértices"], 5);
  add("MA6-SOL", "6_mat_prisma_pent", "O prisma da figura tem base pentagonal. Quantas faces, arestas e vértices ele tem, respectivamente?",
    ["7, 15 e 10", "7, 10 e 15", "5, 15 e 10", "10, 15 e 7"], 5);
  add("MA6-SOL", "6_mat_resumo_prismas", "De acordo com o quadro, qual é a diferença entre prismas e pirâmides?",
    ["O prisma tem duas bases iguais e paralelas; a pirâmide tem uma só base", "O prisma tem uma base; a pirâmide tem duas", "Ambos têm apenas uma base", "Ambos têm faces laterais triangulares"], 3);
  add("MA6-SOL", null, "Um prisma octogonal regular tem base com 8 lados. Quantas arestas tem esse prisma?",
    ["24", "8", "16", "2"], 4);
  add("MA6-SOL", "6_mat_objetos", "Os objetos da imagem (lata de refrigerante, caixa de sapato e chapéu de festa) lembram, respectivamente:",
    ["cilindro, prisma e cone", "cone, prisma e cilindro", "cilindro, pirâmide e cone", "prisma, cilindro e cone"], 1);

  /* ---------- MA6-PLA ---------- */
  add("MA6-PLA", "6_mat_plan_pir_quad", "A planificação da figura forma qual sólido?",
    ["pirâmide de base quadrangular", "prisma de base quadrangular", "pirâmide de base triangular", "cubo"], 6);
  add("MA6-PLA", "6_mat_plan_cubo_pir", "As duas planificações da figura correspondem, respectivamente, a:",
    ["cubo e pirâmide de base triangular", "prisma e cone", "cilindro e pirâmide de base quadrada", "cone e cubo"], 6);
  add("MA6-PLA", "6_mat_plan_4", "As planificações 1, 2, 3 e 4 formam, respectivamente:",
    ["cubo, prisma hexagonal, prisma triangular e pirâmide quadrada", "cubo, pirâmide hexagonal, prisma triangular e pirâmide quadrada", "cubo, prisma pentagonal, prisma triangular e pirâmide quadrada", "cubo, prisma hexagonal, prisma triangular e cone"], 6);
  add("MA6-PLA", "6_mat_molde_prisma_tri", "Beatriz montou o molde da figura e obteve um prisma de base triangular. Quantos vértices e quantas faces ele tem?",
    ["6 vértices e 5 faces", "5 vértices e 6 faces", "6 vértices e 6 faces", "9 vértices e 5 faces"], 6);
  add("MA6-PLA", "6_mat_plan_ae", "Qual figura é a planificação de um poliedro com 6 vértices?",
    ["B", "A", "C", "E"], 9);
  add("MA6-PLA", "6_mat_plan_ae", "A planificação C da figura corresponde a qual sólido?",
    ["cilindro", "cone", "prisma pentagonal", "pirâmide de base quadrada"], 9);
  add("MA6-PLA", "6_mat_plan_3", "Os sólidos formados pelas planificações, na ordem em que aparecem, são:",
    ["prisma pentagonal, pirâmide de base quadrada e cilindro", "cubo, pirâmide de base quadrada e cilindro", "prisma pentagonal, cone e cilindro", "prisma pentagonal, pirâmide de base quadrada e cone"], 9);
  add("MA6-PLA", "6_mat_cofrinho", "João quer encapar o cofrinho, que tem o formato de um cilindro. O molde adequado é:",
    ["o azul, formado por um retângulo e dois círculos", "o verde, formado por um setor circular e um círculo", "o azul, e o cofrinho é um cone", "o verde, e o cofrinho é um cilindro"], 7);
  add("MA6-PLA", null, "Uma planificação é formada por dois triângulos congruentes e três retângulos ligados entre si. Qual sólido ela forma?",
    ["prisma de base triangular", "pirâmide de base triangular", "prisma retangular", "cilindro"], 6);
  add("MA6-PLA", null, "A planificação de uma pirâmide de base pentagonal é formada por:",
    ["um pentágono e 5 triângulos", "dois pentágonos e 5 retângulos", "dois pentágonos e 5 triângulos", "um pentágono e 5 retângulos"], 6);
  add("MA6-PLA", null, "Qual sólido tem duas bases circulares iguais e uma superfície lateral curva?",
    ["cilindro", "cone", "esfera", "prisma"], 7);
  add("MA6-PLA", null, "Qual sólido tem uma base circular e apenas um vértice?",
    ["cone", "cilindro", "pirâmide", "esfera"], 7);
  add("MA6-PLA", null, "A planificação de um cone é formada por:",
    ["um setor circular e um círculo", "dois círculos e um retângulo", "um quadrado e quatro triângulos", "três retângulos e dois triângulos"], 7);

  /* ---------- MA6-MED ---------- */
  add("MA6-MED", null, "Quantos centímetros há em 3 m?",
    ["300 cm", "30 cm", "3 000 cm", "0,03 cm"], 12);
  add("MA6-MED", null, "Quantos centímetros correspondem a 7 mm?",
    ["0,7 cm", "70 cm", "7 cm", "0,07 cm"], 12);
  add("MA6-MED", null, "Cláudio foi de bicicleta à casa da avó, percorrendo 4,3 km na ida e 3,8 km na volta. A distância total percorrida, em metros, foi:",
    ["8 100 m", "810 m", "81 000 m", "7 500 m"], 12);
  add("MA6-MED", null, "Na situação anterior (ida de 4,3 km e volta de 3,8 km), a diferença entre as distâncias, em metros, é:",
    ["500 m", "50 m", "5 000 m", "0,5 m"], 12);
  add("MA6-MED", null, "Uma foto tem 120 cm de comprimento e 110 cm de altura. Para contorná-la com moldura, são necessários:",
    ["4,6 m", "2,3 m", "46 m", "0,46 m"], 12);
  add("MA6-MED", null, "Uma toalha de mesa retangular tem 3,5 m de comprimento e 2,1 m de largura. O comprimento total de renda para contornar a toalha, em centímetros, é:",
    ["1 120", "112", "11 200", "11,2"], 15);
  add("MA6-MED", null, "Marcelo corre 7 500 m por dia. Em 30 dias, ele corre:",
    ["225 km", "22,5 km", "75 km", "750 km"], 15);
  add("MA6-MED", null, "As unhas crescem, em média, 0,1 mm por dia. Em 520 dias, elas crescem:",
    ["5,2 cm", "5,2 mm", "5,2 m", "5,2 dm"], 15);
  add("MA6-MED", null, "Uma nutricionista comprou 12 kg de arroz, 8 kg de feijão, 6 500 g de carne, 15 000 g de legumes e 9,5 kg de frutas. A massa total, em quilogramas, é:",
    ["51 kg", "50,5 kg", "58 kg", "43 kg"], 13);
  add("MA6-MED", null, "A massa de uma caixa de bombons é 251 g e a de uma barra de chocolate é 1,01 kg. A diferença de massa entre eles é:",
    ["759 g", "750 g", "1 261 g", "769 g"], 13);
  add("MA6-MED", null, "Um caminhão transporta 210 sacos de arroz de 40 kg cada. A massa total, em toneladas, é:",
    ["8,4 t", "84 t", "0,84 t", "840 t"], 13);
  add("MA6-MED", null, "Uma caixa vazia tem massa de 0,8 kg. Nela foram colocados 6 livros de 700 g cada. A massa total da encomenda é:",
    ["5 kg", "4,2 kg", "5,8 kg", "50 kg"], 14);
  add("MA6-MED", null, "Uma prancha de 2,5 m foi cortada em um pedaço de 85 cm e outro de 1,2 m. O comprimento restante, em centímetros, é:",
    ["45 cm", "65 cm", "55 cm", "4,5 cm"], 14);
  add("MA6-MED", null, "Um barbante de 3,6 m foi cortado em pedaços de 40 cm. Quantos pedaços inteiros foram obtidos?",
    ["9", "8", "7", "6"], 14);

  /* ---------- MA6-CAP ---------- */
  add("MA6-CAP", "6_mat_recipientes", "Quantos copos de 250 mL, como o C, são necessários para encher a garrafa A, de 1 L?",
    ["4", "3", "5", "2"], 16);
  add("MA6-CAP", "6_mat_recipientes", "Juntando o conteúdo da garrafa B com o do copo C, a capacidade total, em mililitros, é:",
    ["1 000 mL", "1 250 mL", "500 mL", "750 mL"], 16);
  add("MA6-CAP", null, "Um copo medidor indica 3/10 de litro de leite. Quantos mililitros há no copo?",
    ["300 mL", "30 mL", "3 000 mL", "310 mL"], 16);
  add("MA6-CAP", null, "Maria comprou um suco de 1 litro e serviu 1/4 de litro no copo A e 3/20 de litro no copo B. Quantos mililitros sobraram na caixinha?",
    ["600 mL", "400 mL", "500 mL", "200 mL"], 16);
  add("MA6-CAP", null, "Um galão de 20 litros está preenchido com 4/5 de sua capacidade total. Quantos litros de água há no galão?",
    ["16 litros", "10 litros", "12 litros", "18 litros"], 16);
  add("MA6-CAP", null, "Um reservatório estava com 2/5 da capacidade. Foram adicionados 120 litros e ele ficou cheio. Qual é a capacidade total?",
    ["200 litros", "240 litros", "160 litros", "300 litros"], 20);
  add("MA6-CAP", null, "O recreio começa às 9h40 e agora são 8h45. Quanto tempo falta para o recreio?",
    ["55 minutos", "1 hora e 5 minutos", "45 minutos", "1 hora e 55 minutos"], 17);
  add("MA6-CAP", "6_mat_tab_estudo", "De acordo com a tabela, quanto tempo João estudou ao todo nessa semana?",
    ["5h35min", "4h35min", "5h55min", "6h05min"], 17);
  add("MA6-CAP", null, "Márcia gastou 1h45min para ir ao trabalho e 2h35min para voltar. O tempo total gasto foi:",
    ["4h20min", "3h20min", "4h80min", "4h10min"], 17);
  add("MA6-CAP", null, "Agora são 9h21. A viagem começará daqui a 199 minutos. Em que horário viajarão?",
    ["12h40", "12h20", "13h40", "11h40"], 17);
  add("MA6-CAP", null, "Carlos começou a limpar o quintal às 7h35min e terminou às 11h12min. Quanto tempo ele demorou?",
    ["3h37min", "4h23min", "3h47min", "4h37min"], 17);
  add("MA6-CAP", null, "Marcela viajou das 8h15min às 11h35min e fez uma parada de 20 minutos. Quanto tempo ela ficou em movimento?",
    ["3 horas", "3h20min", "3h40min", "2h40min"], 18);
  add("MA6-CAP", null, "Uma pessoa bebeu 250 mL de água pela manhã, 500 mL à tarde e 750 mL à noite. O total consumido, em litros, foi:",
    ["1,5 L", "15 L", "0,15 L", "1,25 L"], 18);

  /* ---------- MA6-ARE ---------- */
  add("MA6-ARE", "6_mat_malha_ret12", "Considerando cada quadradinho da malha como 1 unidade de área, qual é a área da figura verde?",
    ["12 unidades", "7 unidades", "8 unidades", "16 unidades"], 21);
  add("MA6-ARE", "6_mat_malha_ab", "Cada quadradinho vale 1 unidade de área. Qual figura tem maior área e qual é a diferença entre as áreas?",
    ["B, com 2 unidades a mais que A", "A, com 2 unidades a mais que B", "B, com 4 unidades a mais que A", "As duas têm a mesma área"], 21);
  add("MA6-ARE", "6_mat_ceramica", "O piso retangular está sendo coberto por cerâmicas quadradas. Quantas cerâmicas faltam para cobrir o piso?",
    ["8", "7", "6", "10"], 21);
  add("MA6-ARE", "6_mat_malha_abcd", "Considerando cada quadradinho como unidade de medida, qual figura tem a maior área?",
    ["A", "B", "C", "D"], 21);
  add("MA6-ARE", "6_mat_seta_dupla", "Cada quadradinho da malha corresponde a 1 unidade de área. A área da figura é:",
    ["20 unidades", "12 unidades", "16 unidades", "24 unidades"], 21);
  add("MA6-ARE", "6_mat_terreno_8x3", "Considerando cada quadradinho como unidade de área, a área do terreno é:",
    ["24 unidades", "11 unidades", "16 unidades", "32 unidades"], 22);
  add("MA6-ARE", "6_mat_jardim", "Cada quadradinho da malha representa 1 m². A área do jardim quadrado é:",
    ["36 m²", "12 m²", "6 m²", "24 m²"], 22);
  add("MA6-ARE", "6_mat_planta_jonas", "Cada quadradinho da planta corresponde a 1 m². Qual é a área da sala?",
    ["28 m²", "11 m²", "13 m²", "22 m²"], 22);
  add("MA6-ARE", "6_mat_horta", "Cada quadradinho corresponde a 1 m². A área ocupada pela horta é:",
    ["60 m²", "17 m²", "30 m²", "12 m²"], 22);
  add("MA6-ARE", "6_mat_tri_amarelo", "Considerando o quadradinho da malha como 1 unidade de área, qual é a área do triângulo amarelo?",
    ["18 unidades", "36 unidades", "12 unidades", "24 unidades"], 23);
  add("MA6-ARE", "6_mat_tri_verde", "Cada quadradinho tem 1 cm² de área. A área do triângulo verde é:",
    ["27 cm²", "54 cm²", "15 cm²", "30 cm²"], 23);
  add("MA6-ARE", "6_mat_casa_henrique", "Cada quadradinho tem 1 cm de lado. A área do triângulo que representa o telhado da casa é:",
    ["25 cm²", "50 cm²", "10 cm²", "35 cm²"], 23);
  add("MA6-ARE", "6_mat_malha_abc", "Considerando cada quadradinho como unidade de área, qual é a área do triângulo C?",
    ["16", "32", "12", "8"], 24);
  add("MA6-ARE", "6_mat_fig_8cm", "Considerando a legenda (1 cm² por quadradinho), quais figuras têm área igual a 8 cm²?",
    ["triângulo e losango", "quadrado e triângulo", "quadrado e losango", "apenas o quadrado"], 24);

  /* ---------- MA6-VOL ---------- */
  add("MA6-VOL", "6_mat_cubo_4x4x4", "O cubo da figura é formado por camadas de 4 × 4 cubinhos, com 4 camadas. Quantos cubinhos ele tem?",
    ["64", "16", "48", "12"], 26);
  add("MA6-VOL", "6_mat_pilhas_amigos", "Cada amigo montou uma pilha com cubos idênticos. Qual pilha tem o maior volume?",
    ["a de Débora, com 9 cubos", "a de Alberto, com 7 cubos", "a de Beatriz, com 5 cubos", "a de Carlos, com 6 cubos"], 26);
  add("MA6-VOL", "6_mat_pilha_9", "Considerando cada cubinho como unidade de volume e que não há cubo escondido, o volume da pilha é:",
    ["9", "6", "5", "12"], 26);
  add("MA6-VOL", "6_mat_pilha_a", "Considerando cada cubinho como unidade de volume, o volume do empilhamento é:",
    ["16", "18", "12", "14"], 26);
  add("MA6-VOL", "6_mat_pilha_b", "Considerando cada cubinho como unidade de volume, o volume do empilhamento é:",
    ["18", "16", "14", "20"], 26);
  add("MA6-VOL", "6_mat_pilha_10", "O empilhamento é formado por cubinhos de aresta 1 cm. Seu volume é:",
    ["10 cm³", "6 cm³", "3 cm³", "12 cm³"], 27);
  add("MA6-VOL", "6_mat_pilha_2cm", "Os cubinhos têm aresta de 2 cm, e o empilhamento tem 23 cubinhos. Qual é o volume do empilhamento?",
    ["184 cm³", "23 cm³", "92 cm³", "46 cm³"], 27);
  add("MA6-VOL", "6_mat_pilha_c12a", "Os cubinhos têm aresta de 1 cm. O volume do empilhamento é:",
    ["12 cm³", "10 cm³", "9 cm³", "15 cm³"], 27);
  add("MA6-VOL", "6_mat_bloco_3x2x2", "Considerando que não há cubos ocultos, o volume do sólido formado por cubos de 1 cm³ é:",
    ["12 cm³", "6 cm³", "10 cm³", "16 cm³"], 27);
  add("MA6-VOL", "6_mat_pilha_rosa", "A aresta de cada cubo da pilha mede 1 cm. Quantos cubos iguais devem ser acrescentados para que o volume total seja de 18 cm³?",
    ["10", "8", "18", "6"], 29);
  add("MA6-VOL", "6_mat_pilha_amarela", "A unidade de volume corresponde a 2 cubos da pilha. A pilha tem 18 cubos. Qual é o seu volume em unidades de volume?",
    ["9", "18", "36", "6"], 29);
  add("MA6-VOL", "6_mat_reservatorio", "Quantos litros cabem em um reservatório em forma de cubo com 1 m de aresta (1 cm³ = 1 mL)?",
    ["1 000 L", "100 L", "10 000 L", "1 L"], 28);
  add("MA6-VOL", "6_mat_bolinhas", "Em uma caixa cúbica de aresta 2 cm, qual é a maior quantidade de bolinhas de 0,5 cm de diâmetro que cabem (em camadas regulares)?",
    ["64", "4", "8", "16"], 28);
  add("MA6-VOL", null, "Uma pilha tem base quadrada de 5 × 5 cubinhos de 1 cm³, com 3 camadas completas iguais. Qual é o volume total?",
    ["75 cm³", "50 cm³", "60 cm³", "125 cm³"], 30);
})();
