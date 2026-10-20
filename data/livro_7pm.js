/* 7º ano – Língua Portuguesa e Matemática – Volume 4 (4º bimestre)
   Em cada questão a PRIMEIRA alternativa é a correta; o site embaralha na hora de gerar a prova. */

/* ===================== LÍNGUA PORTUGUESA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = "Língua Portuguesa", A = 7;
  B.hab.push(
    { id: 'PT7-LIT', ano: A, disc: D, cod: '', tit: "Leitura de narrativas: multimodal, fantástico, aventura e culturas",
      desc: "Interpretar trechos de romance multimodal (humor, ironia, exagero, quebra de expectativa), conto fantástico, narrativa de aventura, adaptação de livro para o cinema e texto de autoria indígena.", aulas: "Aulas 1, 3, 7, 17 e 23" },
    { id: 'PT7-INT', ano: A, disc: D, cod: '', tit: "Intertextualidade: paródia, paráfrase, citação e crossover",
      desc: "Reconhecer relações entre textos, imagens e obras (explícitas ou implícitas) e identificar paródia, paráfrase, citação, tradução e crossover, bem como seus efeitos de sentido.", aulas: "Aulas 21 e 22" },
    { id: 'PT7-INF', ano: A, disc: D, cod: '', tit: "Gêneros informativos e normativos: biografia, notícia e estatuto",
      desc: "Compreender biografia, notícia de rádio e de televisão (estrutura, linguagem e adaptação do texto) e texto normativo (estatuto), identificando informações, finalidade e organização.", aulas: "Aulas 5, 13 a 16 e 19" },
    { id: 'PT7-VAR', ano: A, disc: D, cod: '', tit: "Variação linguística e escrita digital",
      desc: "Reconhecer variações linguísticas (histórica, regional, social e situacional), combater o preconceito linguístico e adequar a linguagem ao contexto, inclusive no internetês e nas redes sociais.", aulas: "Aulas 9 a 12" },
    { id: 'PT7-GR1', ano: A, disc: D, cod: '', tit: "Gramática: transitividade verbal e termos da oração",
      desc: "Classificar verbos quanto à transitividade (VI, VTD, VTI, VTDI), identificar objetos direto e indireto, sujeito (simples, composto, oculto, indeterminado, inexistente) e predicado (verbal, nominal, verbo-nominal).", aulas: "Aulas 4, 8 e 12" },
    { id: 'PT7-GR2', ano: A, disc: D, cod: '', tit: "Gramática: ortografia, porquês, afixos, adjetivos, advérbios e coesão",
      desc: "Aplicar regras de uso de g/j e h, dos quatro “porquês”, reconhecer prefixos e sufixos, adjetivos e locuções adjetivas, advérbios e locuções adverbiais, concordância nominal e coesão referencial.", aulas: "Aulas 2, 6, 14, 18, 20 e 24" }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length-1].texto = texto; };

  /* ---------- PT7-LIT ---------- */
  add('PT7-LIT', '7_port_ironia', "No trecho do romance multimodal, a ironia está presente em:",
    ["“com a minha sorte” e “Que sorte...”", "“alguém me falou que” e “todo mundo que fez o teste”", "“uma bruxa boa e uma bruxa má” e “eu estava torcendo”", "“Segunda-feira” e “Mas alguém”"], 1);
  add('PT7-LIT', '7_port_queijo', "Qual é o principal tema do trecho de Diário de um banana?",
    ["A criação de uma regra fictícia envolvendo um queijo mofado", "A importância de evitar problemas na escola", "A competição entre alunos nas aulas de Educação Física", "A preocupação do narrador com o desempenho escolar"], 1);
  add('PT7-LIT', '7_port_grito', "Na cena, o balão com “GRITO!” e as expressões exageradas dos meninos servem para:",
    ["reforçar o humor da situação", "indicar que os meninos estão em silêncio", "explicar o que é um queijo", "mostrar uma aula de ciências"], 1);
  add('PT7-LIT', '7_port_circo', "No trecho, o exagero usado para construir o humor está em:",
    ["“entrar num circo de horrores”, para descrever os colegas fantasiados", "“A peça que vão fazer este ano”", "“Sexta-feira”", "“Vários garotos foram vestidos”"], 1);
  add('PT7-LIT', '7_port_soprano', "No trecho, o humor é construído principalmente por:",
    ["quebra de expectativa", "realce de características", "repetição de palavras", "linguagem formal"], 1);
  add('PT7-LIT', '7_port_diario1', "Nesse trecho de romance multimodal, o texto não verbal (os desenhos):",
    ["complementa o texto verbal e mostra visualmente a cena", "repete o texto e é totalmente dispensável", "contradiz o que está escrito", "serve só para preencher espaço em branco"], 1);
  add('PT7-LIT', null, "No conto “O galo impertinente”, de José J. Veiga, uma estrada comum é inaugurada e, depois, as pessoas passam a voltar assustadas dela. O conto é fantástico porque mistura:",
    ["um cenário real (a estrada) com fatos inexplicáveis", "apenas fatos históricos comprovados", "um relato científico sobre rodovias", "a biografia de uma pessoa real"], 3);
  add('PT7-LIT', null, "No conto, lê-se: “É triste dizer, mas a euforia durou pouco. [...] Pessoas que iam experimentar a excelência da estrada voltavam assustadas”. O conflito da narrativa começa quando:",
    ["pessoas voltam assustadas, jurando nunca mais passar por lá", "a estrada é inaugurada", "os engenheiros terminam a obra", "as pontes ficam prontas"], 3);
  add('PT7-LIT', null, "No conto, “quando o motorista conseguia manobrar e escapar do desastre, o galo aplicava outro expediente: saltava para cima do carro e martelava a capota com o bico”. Isso revela que o galo:",
    ["age de modo estratégico, sem desistir", "age só por instinto", "se distrai com facilidade", "é amigável"], 3);
  add('PT7-LIT', null, "No conto, o galo enfrenta carros, redes de pesca, armas e até um tanque, sem recuar. Por isso, ele pode simbolizar:",
    ["o indivíduo comum que desafia o poder", "a vitória do progresso", "a obediência às autoridades", "a perfeição das estradas"], 3);
  add('PT7-LIT', null, "No início de O jardim secreto, Mary é descrita como magricela e amarelada, filha de pais ocupados que a entregam aos cuidados de uma aia e de empregados que sempre lhe davam razão. Qual opção resume melhor o início da história?",
    ["Criada com pouca atenção dos pais e servida por empregados, cresceu mimada, irritadiça e solitária", "Era doce e carinhosa, criada com muito amor", "Tinha muitos amigos na Índia e foi estudar na Inglaterra", "Era muito independente e foi ensinada a ler pela mãe"], 23);
  add('PT7-LIT', null, "Em O jardim secreto, a mãe de Mary “entregou-a aos cuidados de uma aia, deixando claro que [...] deveria manter a criança fora de sua vista”. A palavra “aia” significa:",
    ["empregada responsável por cuidar de crianças", "professora particular", "mãe adotiva", "vizinha da família"], 23);
  add('PT7-LIT', null, "No livro Um dia na aldeia, de Daniel Munduruku, Manhuari pergunta à mãe o significado do ritual de acordar cedo e tomar banho no igarapé. Segundo ela, o banho matinal serve para:",
    ["tirar da gente as coisas ruins que a noite pode trazer", "ensinar o menino a nadar", "esperar o nascer do Sol", "preparar a primeira refeição"], 17);
  add('PT7-LIT', null, "No livro “O menino que descobriu o vento”, o discurso do diretor é mais otimista; no filme, é mais rígido. No livro, isso pode refletir a intenção de:",
    ["inspirar o leitor, mostrando a educação como caminho para superar dificuldades", "assustar o leitor com a escola", "ensinar mecânica", "encurtar a história"], 7);

  /* ---------- PT7-INT ---------- */
  add('PT7-INT', '7_port_miado', "A obra “O Miado”, de Svetlana Petrova, retoma “O grito”, de Edvard Munch, trocando a figura humana por um gato. Essa relação é um exemplo de:",
    ["intertextualidade entre obras visuais", "tradução de um texto", "citação de um trecho escrito", "obra sem relação com outra"], 21);
  add('PT7-INT', '7_port_monbijou', "No anúncio do produto, a imagem faz referência a qual obra?",
    ["Mona Lisa, de Leonardo da Vinci", "O grito, de Edvard Munch", "O pequeno príncipe", "Dom Quixote"], 21);
  add('PT7-INT', '7_port_monbijou', "O uso de uma obra famosa torna o anúncio mais interessante porque:",
    ["cria identificação do público com elementos culturais conhecidos e valoriza o produto", "impede o leitor de entender a mensagem", "esconde o nome da marca", "ensina a técnica da pintura"], 21);
  add('PT7-INT', '7_port_monbijou', "No slogan “Mon Bijou deixa sua roupa uma perfeita obra-prima”, o resultado do produto é comparado a:",
    ["uma obra de arte", "uma tinta", "um museu", "um filme"], 21);
  add('PT7-INT', '7_port_tirinha', "Na tirinha, a intertextualidade com “Chapeuzinho Vermelho” ocorre por meio de:",
    ["paródia, pois recria a história com efeito humorístico", "citação, pois indica a fonte do original", "tradução, pois adapta o texto para outra língua", "paráfrase, pois só reescreve a mensagem original"], 22);
  add('PT7-INT', '7_port_tirinha', "Na tirinha, a avó explica os olhos grandes dizendo que:",
    ["pegou terçol de novo", "é o lobo disfarçado", "quer ver melhor a neta", "dormiu demais"], 22);
  add('PT7-INT', '7_port_wifi', "Na imagem de “WiFi Ralph: quebrando a Internet”, personagens de histórias diferentes aparecem juntas. Esse recurso é:",
    ["crossover", "paráfrase", "citação", "tradução"], 22);
  addT('PT7-INT', "Uma canção (Mario Quintana): Minha terra não tem palmeiras... / E em vez de um mero sabiá, / Cantam aves invisíveis / Nas palmeiras que não há. [...]", "Em relação à “Canção do exílio” (“Minha terra tem palmeiras...”), o poema de Quintana (“Minha terra não tem palmeiras...”) é:",
    ["uma paródia, pois retoma o poema alterando seu sentido", "uma citação com aspas", "uma tradução", "uma paráfrase sem alterações"], 22);
  addT('PT7-INT', "Hino Nacional: [...] Do que a terra, mais garrida, / Teus risonhos, lindos campos têm mais flores; / \"Nossos bosques têm mais vida\", / \"Nossa vida\" no teu seio \"mais amores.\" [...]", "O trecho do Hino Nacional traz “Nossos bosques têm mais vida” entre aspas. Isso é:",
    ["citação, pois reproduz o trecho exato do poema original", "paródia", "tradução", "crossover"], 22);
  add('PT7-INT', null, "“Se pensamos, então existimos” em relação a “Penso, logo existo” (Descartes) é um exemplo de:",
    ["paráfrase", "tradução", "paródia", "crossover"], 22);
  add('PT7-INT', null, "“Estudo, logo aprendo” em relação a “Penso, logo existo” (Descartes) é uma paródia porque:",
    ["muda o sentido da frase original, adaptando-a ao contexto escolar", "mantém exatamente a mesma frase", "apenas traduz a frase", "cita o autor entre aspas"], 22);
  add('PT7-INT', '7_port_principe', "Qual é o principal objetivo da peça “O pequeno príncipe preto” ao dialogar com o livro clássico?",
    ["Ampliar a narrativa para incluir a diversidade cultural e a representatividade", "Modernizar a linguagem para o público infantil", "Focar só a mensagem filosófica, sem novos temas", "Transformar a história em aventura futurista"], 21);
  add('PT7-INT', null, "No poema “A porta” (“Eu sou feita de madeira / Madeira, matéria morta”), de Vinicius de Moraes, quem fala é:",
    ["a própria porta", "o menininho", "o capitão", "a cozinheira"], 21);
  add('PT7-INT', null, "No poema, a porta afirma: “Só não abro pra essa gente / Que diz [...] que se uma pessoa é burra / É burra como uma porta.” Ela não abre para quem:",
    ["diz que uma pessoa burra é “burra como uma porta”", "é o capitão", "é o namorado", "é o menininho"], 21);

  /* ---------- PT7-INF ---------- */
  add('PT7-INF', null, "Os trechos “Sebastião nasceu em Aimorés, Minas Gerais”, “Trabalhou para o Banco Mundial” e “Dedicou-se a retratar os lugares do planeta” mostram que o texto é uma biografia porque:",
    ["apresenta acontecimentos organizados ao longo da vida de uma pessoa real", "é escrito com foco na opinião do autor", "relata acontecimentos aleatórios, sem relação temporal", "mistura fatos históricos com ficção"], 5);
  add('PT7-INF', null, "Em “Durante a infância, ele via a floresta diminuir sem parar, por causa das pessoas que acabavam com ela”, a experiência de Sebastião Salgado pode ter despertado nele:",
    ["sensibilidade e preocupação com o meio ambiente", "indiferença em relação à natureza", "desejo de ganhar dinheiro vendendo madeira", "interesse apenas por viagens"], 5);
  add('PT7-INF', null, "Na biografia: “Trabalhou para o Banco Mundial, o que o obrigou a viajar [...] pela África. Foi ali que descobriu sua grande paixão”. Qual foi essa paixão e onde ela surgiu?",
    ["Fotografar a natureza, nas viagens pela África", "Estudar economia, em Nova York", "Recuperar florestas, em Aimorés", "Escrever livros, no Banco Mundial"], 5);
  add('PT7-INF', null, "Na biografia: “Sebastião acredita que o mundo melhor já existiu e luta com todas as suas forças para voltar a ele.” Isso mostra que ele:",
    ["luta para recuperar a natureza e voltar a esse mundo melhor", "prefere viver no passado e não faz nada", "desistiu de proteger as florestas", "acha que nada pode ser feito"], 5);
  add('PT7-INF', null, "Na notícia do Jornal da USP, o professor explica que, comparada à subida, “a descida de escada cansa menos” e tem “resposta cardiorrespiratória mais leve”. Segundo ele, uma vantagem de descer escadas é:",
    ["cansar menos e causar menor elevação da pressão arterial", "ser sempre mais rápida", "exigir equipamentos caros", "causar maior esforço cardiorrespiratório"], 13);
  add('PT7-INF', null, "Na notícia, o professor diz que o ciclismo excêntrico exige uma bicicleta ergométrica que custa “mais de R$ 150 mil”, enquanto “o lance de escadas é praticamente gratuito”. Comparada ao ciclismo excêntrico, a descida de escadas é:",
    ["de fácil implementação e baixo custo", "mais cara", "impossível sem aparelho", "dependente de motor e pedal"], 13);
  add('PT7-INF', null, "O professor diz: “Nós não vemos muito na mídia [...], mas muito pouco discutido sobre as vantagens de se descer escadas.” Segundo ele, o exercício não é popular principalmente por causa do:",
    ["pouco incentivo e da pouca divulgação na mídia", "alto custo", "acompanhamento médico obrigatório", "risco de quedas"], 13);
  add('PT7-INF', null, "Ao adaptar para o rádio a notícia sobre as araras-azuis, retirou-se o nome científico da espécie (Cyanopsitta spixii). Isso foi feito porque:",
    ["pode ser desconhecido do público e atrapalhar a compreensão", "estava escrito errado", "era uma informação falsa", "era longo demais para a televisão"], 14);
  add('PT7-INF', null, "Na palavra “importação” (im + porta + ção), o prefixo e o sufixo indicam, respectivamente:",
    ["entrada e ação ou processo", "negação e lugar", "intensidade e qualidade", "repetição e objeto"], 14);
  add('PT7-INF', '7_port_tv', "Segundo o quadro, a importância da televisão em momentos de crise está em:",
    ["transmitir informações rapidamente para muitas pessoas", "dispensar a checagem das informações", "funcionar só com internet", "substituir os jornais impressos"], 15);
  addT('PT7-INF', "Estrutura básica da notícia: 1 Título: chama a atenção do público para o assunto. 2 Introdução: apresenta a informação principal da notícia. 3 Desenvolvimento: traz detalhes, dados e explicações sobre o fato. 4 Finalização: retoma o fato e reforça a importância da notícia.", "Na estrutura básica da notícia, a parte que apresenta a informação principal é:",
    ["a introdução", "o título", "a finalização", "o desenvolvimento"], 16);
  addT('PT7-INF', "Estrutura básica da notícia: 1 Título: chama a atenção do público para o assunto. 2 Introdução: apresenta a informação principal da notícia. 3 Desenvolvimento: traz detalhes, dados e explicações sobre o fato. 4 Finalização: retoma o fato e reforça a importância da notícia.", "Na estrutura básica da notícia, a finalização:",
    ["retoma o fato e reforça a importância da notícia", "chama a atenção para o assunto", "traz detalhes, dados e explicações", "apresenta a informação principal"], 16);
  addT('PT7-INF', "CAPÍTULO IV – DOS DIREITOS DOS CÃES E GATOS. Art. 8º. Cães e gatos têm os seguintes direitos: I – à vida e à integridade física e psíquica, ressalvados os casos de eutanásia definidos em lei; II – à liberdade de movimentos para expressar o seu comportamento natural, dentro dos limites da segurança e bem-estar; [...]", "O Estatuto dos Cães e Gatos é um texto normativo porque:",
    ["estabelece direitos por meio de artigos e incisos", "conta uma história de ficção", "traz a opinião de um colunista", "narra uma notícia do dia"], 19);
  addT('PT7-INF', "CAPÍTULO IV – DOS DIREITOS DOS CÃES E GATOS. Art. 8º. Cães e gatos têm os seguintes direitos: I – à vida e à integridade física e psíquica, ressalvados os casos de eutanásia definidos em lei; II – à liberdade de movimentos para expressar o seu comportamento natural, dentro dos limites da segurança e bem-estar; [...]", "Um cachorro passa dias sem receber comida em casa. De acordo com o Art. 8º, qual direito dele não está sendo respeitado?",
    ["ao acesso diário à água limpa e comida de qualidade (inciso III)", "à vida e à integridade física (inciso I)", "à liberdade de movimentos (inciso II)", "à saúde animal (inciso VI)"], 19);

  /* ---------- PT7-VAR ---------- */
  add('PT7-VAR', null, "No trecho de Dom Quixote de La Mancha (“Num lugar da Mancha [...] vivia [...] um fidalgo, dos de lança em cabido, adarga antiga, rocim fraco, e galgo corredor”), o uso de palavras que hoje parecem estranhas exemplifica a variação linguística:",
    ["histórica", "geográfica", "situacional", "social"], 10);
  add('PT7-VAR', null, "No trecho de Dom Quixote que descreve um fidalgo “de lança em cabido, adarga antiga, rocim fraco, e galgo corredor”, a expressão “rocim fraco” significa:",
    ["cavalo simples e magro, de baixo valor", "cão de corrida, rápido e ágil", "capa de festa de tecido nobre", "arma de longa distância"], 10);
  add('PT7-VAR', '7_port_variacao', "No quadro, “bala de goma” e “jujuba” exemplificam a variação linguística:",
    ["geográfica (regional)", "histórica", "situacional", "social"], 9);
  add('PT7-VAR', '7_port_variacao', "No quadro, “Tu não te vais vestir?” (século XIX) e “Você não vai se vestir?” (hoje) exemplificam a variação:",
    ["histórica", "geográfica", "social", "situacional"], 9);
  add('PT7-VAR', null, "Em O auto da Compadecida, Chicó diz: “Ih, olha como isso está pegado com o patrão! Faz gosto um empregado dessa qualidade.” Chicó e João Grilo usam expressões regionais. Segundo o livro, essas formas de falar:",
    ["são legítimas e representam identidades culturais", "são erradas e devem ser corrigidas", "não têm regras próprias", "só podem ser usadas em documentos oficiais"], 9);
  add('PT7-VAR', null, "Segundo o livro, o preconceito linguístico acontece quando:",
    ["uma forma de falar é considerada errada ou inferior só por ser diferente da norma-padrão", "alguém usa a norma-padrão", "alguém muda de cidade", "alguém aprende outra língua"], 9);
  add('PT7-VAR', null, "No Trecho I de A droga da obediência, Calu diz: “Vê se dá um jeito de explicar, moleque! Fala logo.” As personagens usam linguagem informal porque:",
    ["conversam entre amigos", "desconhecem a norma-padrão", "estão em ambiente oficial", "escrevem um documento"], 10);
  add('PT7-VAR', null, "No Trecho II, o estudante Miguel conversa com o diretor: “Que providências, professor Cardoso?”. A linguagem mais formal e respeitosa se explica porque:",
    ["é uma conversa de um estudante com o diretor", "as personagens são irmãos", "é uma brincadeira entre colegas", "é uma conversa entre amigos próximos"], 10);
  add('PT7-VAR', null, "No texto de Carolina Maria de Jesus (“Espero que os políticos estingue as favelas. [...] os esposos adoece”), a variação linguística presente é:",
    ["social, e não deve ser considerada erro", "geográfica, só da Bahia", "histórica, do século XVI", "situacional, de entrevista de emprego"], 10);
  add('PT7-VAR', '7_port_chat', "No diálogo, “blz”, “vc” e “hj” correspondem a:",
    ["beleza, você e hoje", "bolsa, vez e hora", "bom, vocês e hoje", "belo, você e hora"], 11);
  add('PT7-VAR', '7_port_chat', "No diálogo, “fmz” e “tmj” são abreviações de:",
    ["firmeza e “tamo junto”", "formoso e “tenho muito”", "fim e “tchau”", "fazer e “tudo mesmo”"], 11);
  add('PT7-VAR', null, "Em qual situação é mais importante usar a norma-padrão da língua?",
    ["Ao escrever um relatório escolar", "Ao conversar com um amigo pelo WhatsApp", "Ao postar um meme na internet", "Ao comentar uma publicação descontraída"], 11);
  add('PT7-VAR', '7_port_globo1', "Na conversa publicada pelo Globo de Ouro, a repetição dos emojis da bandeira do Brasil indica:",
    ["entusiasmo e orgulho dos fãs brasileiros", "uma crítica irônica", "aumento da formalidade", "confusão na mensagem"], 12);
  add('PT7-VAR', '7_port_globo1', "O uso de “kkkk” e “siim” nos comentários demonstra:",
    ["descontração e entusiasmo, comuns na comunicação informal", "seriedade e objetividade", "um discurso formal", "uma tentativa de convencer alguém"], 12);

  /* ---------- PT7-GR1 ---------- */
  add('PT7-GR1', '7_port_sint', "Segundo a síntese, o verbo transitivo direto (VTD):",
    ["precisa de complemento sem preposição", "não precisa de complemento", "precisa de complemento com preposição", "precisa de dois complementos"], 4);
  add('PT7-GR1', '7_port_sint', "Em “Ela confiava em sombras.”, o complemento “em sombras” é:",
    ["objeto indireto, pois vem com preposição", "objeto direto", "sujeito", "predicativo do sujeito"], 4);
  add('PT7-GR1', '7_port_sint', "Em “Contou a história ao leitor.”, o verbo é bitransitivo porque tem:",
    ["um objeto direto (a história) e um objeto indireto (ao leitor)", "apenas objeto direto", "apenas objeto indireto", "nenhum complemento"], 4);
  add('PT7-GR1', null, "Em “o asfalto refletia com violência”, o verbo é intransitivo. Qual frase tem verbo com a mesma transitividade?",
    ["Os pássaros voaram lindamente.", "Ela gosta dos seus amigos.", "Eles compraram um livro lindo.", "Ele entregou o presente à colega."], 4);
  add('PT7-GR1', null, "Em “pessoas que se aventuravam por lá viam trabalhadores”, o verbo “viam” é:",
    ["transitivo direto, e “trabalhadores” é objeto direto", "transitivo indireto", "intransitivo", "bitransitivo"], 4);
  add('PT7-GR1', null, "Em “ninguém pensava mais no assunto”, o verbo “pensava” é:",
    ["transitivo indireto, com objeto indireto “no assunto”", "transitivo direto", "intransitivo", "bitransitivo"], 4);
  add('PT7-GR1', null, "Em “o tanque perseguiu-o [...] como querendo dar-lhe uma oportunidade”, os complementos de “dar” são:",
    ["“lhe” (objeto indireto) e “uma oportunidade” (objeto direto)", "“lhe” (objeto direto) e “uma oportunidade” (objeto indireto)", "dois objetos diretos", "dois objetos indiretos"], 4);
  add('PT7-GR1', null, "Em “As pás começaram a zumbir como hélices furiosas.”, o sujeito é simples e seu núcleo é:",
    ["pás", "hélices", "furiosas", "zumbir"], 8);
  add('PT7-GR1', null, "Em “A luz magnífica explodiu no ar.”, o predicado é:",
    ["verbal, pois indica uma ação", "nominal", "verbo-nominal", "inexistente"], 8);
  add('PT7-GR1', null, "Em “Eu estava confiante.”, o predicado é nominal porque:",
    ["o verbo “estava” liga o sujeito a uma característica (confiante)", "o verbo indica uma ação", "não há verbo", "não há sujeito"], 8);
  add('PT7-GR1', null, "Qual frase tem sujeito inexistente (oração sem sujeito)?",
    ["Choveu muito ontem.", "Fui ao mercado.", "Dizem que vai chover amanhã.", "O cachorro e o gato brincam juntos."], 8);
  add('PT7-GR1', null, "Em “Dizem que vai chover amanhã.”, o sujeito é:",
    ["indeterminado", "simples", "composto", "oculto"], 8);
  add('PT7-GR1', null, "Em “O público brasileiro e os fãs de Fernanda Torres celebram o prêmio conquistado!”, publicado pelo Globo de Ouro, o sujeito é:",
    ["composto", "simples", "oculto", "indeterminado"], 12);
  add('PT7-GR1', null, "Em “O cachorro corre cansado.”, o predicado é verbo-nominal porque:",
    ["combina uma ação (corre) e uma característica do sujeito (cansado)", "só indica ação", "só indica estado", "não tem verbo"], 8);

  /* ---------- PT7-GR2 ---------- */
  add('PT7-GR2', '7_port_gj', "Segundo o quadro, usa-se a letra g em substantivos terminados em:",
    ["-agem, -igem, -ugem", "-ajem, -ijem, -ujem", "-ajar, -ijar", "-ger, -gir apenas em verbos"], 2);
  add('PT7-GR2', '7_port_gj', "Segundo o quadro, as formas do verbo viajar (viajo, viaje, viajem) são escritas com:",
    ["j em todas as formas", "g em todas as formas", "g apenas em “viaje”", "j apenas em “viajo”"], 2);
  add('PT7-GR2', null, "A palavra “personagem” é escrita com g porque:",
    ["palavras terminadas em -agem são grafadas com g", "vem de palavra de origem tupi", "é derivada de palavra que já tem j", "é verbo terminado em -jar"], 2);
  add('PT7-GR2', '7_port_gj', "Segundo o quadro, “lojista” é escrito com j porque:",
    ["deriva de “loja”, palavra que já tem j", "termina em -agem", "é de origem árabe", "termina em -ger"], 2);
  add('PT7-GR2', '7_port_hq', "No quadro, em “chave”, “colher” e “amanhã”, o h aparece nos dígrafos:",
    ["ch, lh e nh", "todos no início de palavra", "de interjeições", "de nomes próprios"], 2);
  add('PT7-GR2', null, "Complete: “Sebastião deixou a carreira de economista. ___?”",
    ["Por quê", "Porque", "Porquê", "Por que"], 6);
  add('PT7-GR2', null, "Complete: “Quero saber ___ Sebastião Salgado mudou de carreira.”",
    ["por que", "porque", "por quê", "porquê"], 6);
  add('PT7-GR2', null, "Complete: “Ninguém entendia o ___ daquela decisão.”",
    ["porquê", "porque", "por que", "por quê"], 6);
  add('PT7-GR2', null, "No texto sobre o povo Munduruku: “Também começaram a ser vítimas de doenças que lhes eram desconhecidas antigamente.” O advérbio “antigamente” indica circunstância de:",
    ["tempo", "modo", "lugar", "intensidade"], 18);
  add('PT7-GR2', null, "No texto sobre o povo Munduruku: “Com o passar do tempo, os Munduruku deixaram de guerrear.” A locução adverbial é:",
    ["Com o passar do tempo", "Dizem os pesquisadores", "chegaram a ter", "um grande exército"], 18);
  add('PT7-GR2', null, "No texto sobre a insuficiência da legislação, o prefixo in- em “insuficiente” acrescenta ideia de:",
    ["negação", "intensidade", "tempo", "comparação"], 20);
  add('PT7-GR2', null, "Em O jardim secreto: “Mary tirou a chave do bolso e descobriu que servia direitinho no buraco da fechadura.” Para evitar repetir “a chave”, a autora usa:",
    ["omissão (elipse)", "um pronome pessoal", "um sinônimo", "repetição da palavra"], 24);
  add('PT7-GR2', null, "Em “A menina se esgueirou pela porta, fechando-a assim que entrou”, o pronome “a” retoma:",
    ["a porta", "a menina", "o jardim", "a cortina de hera"], 24);
  add('PT7-GR2', null, "Qual frase está de acordo com a concordância nominal?",
    ["Suas ideias inovadoras foram bem recebidas.", "Suas ideia inovadora foram bem recebidas.", "Seus ideias inovadoras foram bem recebidas.", "Suas ideias inovador foram bem recebido."], 6);
})();

/* ===================== MATEMÁTICA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = "Matemática", A = 7;
  B.hab.push(
    { id: 'MA7-ANG', ano: A, disc: D, cod: '', tit: "Ângulos: classificação, complementares e suplementares",
      desc: "Reconhecer e classificar ângulos (reto, agudo, obtuso, raso), nomear um ângulo e usar as relações de ângulos complementares (90°) e suplementares (180°) para calcular medidas desconhecidas, inclusive com equações do 1º grau.", aulas: "Aulas 1, 3 e 4" },
    { id: 'MA7-TRI', ano: A, disc: D, cod: '', tit: "Triângulos: classificação, soma dos ângulos e ângulo externo",
      desc: "Classificar triângulos quanto aos lados e aos ângulos, aplicar a soma dos ângulos internos (180°) e a relação do ângulo externo com os internos não adjacentes.", aulas: "Aulas 2, 5 e 6" },
    { id: 'MA7-QUA', ano: A, disc: D, cod: '', tit: "Quadriláteros e ângulos",
      desc: "Aplicar a soma dos ângulos internos de um quadrilátero (360°) e a relação entre ângulo interno e externo para determinar medidas desconhecidas, inclusive com equações do 1º grau.", aulas: "Aulas 7 a 10" },
    { id: 'MA7-RAZ', ano: A, disc: D, cod: '', tit: "Razão, proporção e grandezas diretamente proporcionais",
      desc: "Interpretar razões e a constante de proporcionalidade em tabelas, resolver proporções e problemas com grandezas diretamente proporcionais e reconhecer quando não há proporcionalidade.", aulas: "Aulas 11 a 15" },
    { id: 'MA7-INV', ano: A, disc: D, cod: '', tit: "Grandezas inversamente proporcionais e regra de três",
      desc: "Classificar grandezas como direta ou inversamente proporcionais e resolver problemas com regra de três simples (direta e inversa) e produto constante.", aulas: "Aulas 16 a 20" },
    { id: 'MA7-POR', ano: A, disc: D, cod: '', tit: "Porcentagem: cálculo, acréscimos e decréscimos",
      desc: "Representar partes de um todo como fração, decimal e porcentagem, calcular porcentagem de um valor e resolver problemas com acréscimos e decréscimos percentuais usando fatores de aumento e de decréscimo.", aulas: "Aulas 21 a 30" }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length-1].texto = texto; };

  /* ---------- MA7-ANG ---------- */
  add('MA7-ANG', '7_mat_classang', "No esquema da aula, um ângulo raso mede:",
    ["180°", "90°", "360°", "45°"], 1);
  add('MA7-ANG', '7_mat_nomear', "Na notação AÔB, a letra O indica:",
    ["o vértice do ângulo", "um dos lados do ângulo", "a medida do ângulo", "o transferidor"], 1);
  add('MA7-ANG', '7_mat_classang', "De acordo com o esquema, um ângulo obtuso é aquele que mede:",
    ["mais de 90° e menos de 180°", "exatamente 90°", "menos de 90°", "exatamente 180°"], 1);
  add('MA7-ANG', '7_mat_ang3', "Na malha, os ângulos 1), 2) e 3) são classificados, respectivamente, como:",
    ["reto, agudo e raso", "agudo, reto e raso", "reto, obtuso e raso", "raso, agudo e reto"], 1);
  add('MA7-ANG', '7_mat_quadabcd', "Na figura, quais vértices têm ângulos retos?",
    ["A e B", "C e D", "A e D", "B e C"], 1);
  add('MA7-ANG', '7_mat_quadabcd', "Na figura, os ângulos dos vértices C e D são, respectivamente:",
    ["agudo e obtuso", "obtuso e agudo", "reto e agudo", "agudo e raso"], 1);
  add('MA7-ANG', '7_mat_malha3', "Entre as figuras da malha quadriculada, a que tem apenas ângulos retos é:",
    ["o retângulo DEFG", "o triângulo ACB", "o trapézio HIJK", "nenhuma delas"], 1);
  add('MA7-ANG', '7_mat_raso64', "Na figura, AÔC é um ângulo raso e AÔB mede 64°. Quanto mede BÔC?",
    ["116°", "64°", "26°", "126°"], 3);
  add('MA7-ANG', '7_mat_reto52', "Na figura, AÔB é um ângulo reto e BÔC mede 52°. Quanto mede AÔC?",
    ["38°", "52°", "48°", "142°"], 3);
  add('MA7-ANG', '7_mat_comp48', "Na figura, os segmentos horizontal e vertical formam um ângulo reto e EÔG mede 48°. Quanto mede FÔG?",
    ["42°", "48°", "52°", "132°"], 3);
  add('MA7-ANG', null, "O suplemento de um ângulo que mede 125° é um ângulo de:",
    ["55°", "35°", "65°", "235°"], 3);
  add('MA7-ANG', '7_mat_porta', "A porta, que se abre até 180°, deve ficar com abertura igual ao quádruplo do que falta para chegar a 180° (4x + x = 180°). Qual deve ser a abertura?",
    ["144°", "36°", "45°", "135°"], 4);
  add('MA7-ANG', '7_mat_escada', "Na figura, os ângulos agudos do triângulo retângulo são complementares: (2x + 10) + (x + 5) = 90. Quanto mede o ângulo que a escada forma com o chão?",
    ["60°", "30°", "45°", "70°"], 4);
  add('MA7-ANG', '7_mat_L', "Um suporte em “L” forma um canto reto (90°) dividido em dois ângulos: (2x + 10)° e (x + 20)°. Quais são as medidas desses ângulos?",
    ["50° e 40°", "30° e 60°", "70° e 20°", "45° e 45°"], 4);

  /* ---------- MA7-TRI ---------- */
  add('MA7-TRI', '7_mat_classtri', "Um triângulo com os três lados de mesma medida é chamado de:",
    ["equilátero", "isósceles", "escaleno", "retângulo"], 2);
  add('MA7-TRI', '7_mat_classtri', "Segundo o quadro, um triângulo retângulo apresenta:",
    ["um ângulo reto (90°)", "três ângulos agudos", "um ângulo obtuso", "três lados iguais"], 2);
  add('MA7-TRI', '7_mat_classtri', "Um triângulo tem lados de 5 cm, 5 cm e 8 cm. Quanto aos lados, ele é:",
    ["isósceles", "equilátero", "escaleno", "retângulo"], 2);
  add('MA7-TRI', null, "Um triângulo tem lados de 4 cm, 6 cm e 7 cm. Quanto aos lados, ele é:",
    ["escaleno", "equilátero", "isósceles", "acutângulo"], 2);
  add('MA7-TRI', null, "Um triângulo possui um ângulo de 132°. Quanto aos ângulos, ele é:",
    ["obtusângulo", "acutângulo", "retângulo", "equilátero"], 5);
  add('MA7-TRI', '7_mat_tri6248', "Na figura, os ângulos internos medem 62°, 48° e 2x. Qual é o valor de x?",
    ["35", "70", "25", "55"], 4);
  add('MA7-TRI', '7_mat_tri5261', "Uma placa triangular tem dois ângulos internos de 52° e 61°. O terceiro ângulo mede:",
    ["67°", "71°", "69°", "79°"], 9);
  add('MA7-TRI', null, "Um triângulo tem um ângulo reto e outro de 38°. A medida do terceiro ângulo e a classificação do triângulo são, respectivamente:",
    ["52° e retângulo", "52° e acutângulo", "142° e obtusângulo", "142° e retângulo"], 5);
  add('MA7-TRI', '7_mat_ext', "Usando a relação do esquema, em um triângulo os ângulos internos não adjacentes a um ângulo externo medem 45° e 80°. Quanto mede o ângulo externo?",
    ["125°", "35°", "55°", "180°"], 6);
  add('MA7-TRI', '7_mat_ext', "Segundo o esquema, o ângulo externo de um triângulo é igual:",
    ["à soma dos dois ângulos internos não adjacentes a ele", "à soma dos três ângulos internos", "ao ângulo interno adjacente a ele", "ao dobro do ângulo interno adjacente"], 6);
  add('MA7-TRI', '7_mat_ext65', "Em um triângulo ABC, o ângulo interno em A mede 65°. Ao prolongar o lado, forma-se o ângulo externo adjacente. Quanto ele mede?",
    ["115°", "65°", "25°", "125°"], 6);
  add('MA7-TRI', null, "Um ângulo externo de 115° tem como ângulos internos não adjacentes (x + 20)° e (2x − 10)°. Qual é o valor de x?",
    ["35", "30", "40", "105"], 6);
  add('MA7-TRI', '7_mat_int', "Em um triângulo retângulo, os dois ângulos agudos somam 90°. Se um deles mede 37°, o outro mede:",
    ["53°", "143°", "63°", "37°"], 6);
  add('MA7-TRI', '7_mat_telhado', "No telhado, o ângulo externo mede (3x + 15)° e o interno adjacente, (x + 25)°. Quanto mede o ângulo externo?",
    ["120°", "60°", "35°", "140°"], 9);

  /* ---------- MA7-QUA ---------- */
  add('MA7-QUA', '7_mat_quad360', "Segundo o esquema, a soma dos ângulos internos de qualquer quadrilátero é:",
    ["360°", "180°", "270°", "540°"], 7);
  add('MA7-QUA', '7_mat_quad360', "Ao traçar uma diagonal, o quadrilátero fica dividido em dois triângulos. Por isso, a soma de seus ângulos internos é:",
    ["360°", "180°", "90°", "720°"], 7);
  add('MA7-QUA', null, "Em um quadrilátero, três ângulos internos medem 95°, 110° e 80°. O quarto ângulo mede:",
    ["75°", "85°", "65°", "105°"], 7);
  add('MA7-QUA', '7_mat_quadext137', "Em um quadrilátero, o ângulo interno do vértice D mede 137°. Quanto mede o ângulo externo nesse vértice?",
    ["43°", "137°", "53°", "57°"], 7);
  add('MA7-QUA', '7_mat_quad2x10', "Na figura, os ângulos internos são (2x + 10)°, x°, 90° e 80°. Qual é o valor de x?",
    ["60", "50", "70", "40"], 8);
  add('MA7-QUA', '7_mat_quad2x10', "Na figura, os ângulos internos são (2x + 10)°, x°, 90° e 80°. Quanto mede o ângulo em D, de (2x + 10)°?",
    ["130°", "120°", "60°", "100°"], 8);
  add('MA7-QUA', '7_mat_barco', "Na figura, a vela é o triângulo ABC e o casco é o quadrilátero DEFG. A soma de todos os ângulos internos das duas figuras é:",
    ["540°", "360°", "180°", "720°"], 8);
  add('MA7-QUA', '7_mat_quadabcd2', "Um quadrilátero tem ângulos A = 90°, B = (x + 20)°, C = 90° e D = (2x + 10)°. Qual é o valor de x?",
    ["50", "40", "60", "45"], 8);
  add('MA7-QUA', '7_mat_quadabcd2', "No mesmo quadrilátero (x = 50), quanto mede o ângulo externo adjacente ao ângulo B?",
    ["110°", "70°", "100°", "120°"], 8);
  add('MA7-QUA', '7_mat_jardim', "No canteiro, três ângulos internos medem (x + 30)°, (2x)° e (x + 60)°, e o quarto mede 90°. Quanto vale x?",
    ["45", "40", "50", "55"], 9);
  add('MA7-QUA', '7_mat_jardim', "No canteiro da figura, x vale 45. Quanto mede o ângulo interno de (x + 60)°?",
    ["105°", "75°", "90°", "135°"], 9);
  add('MA7-QUA', null, "Em um quadrilátero, os ângulos internos medem 90°, 80°, x° e (2x + 10)°. O valor de x é:",
    ["60", "40", "70", "90"], 10);
  add('MA7-QUA', null, "Em um quadrilátero, um ângulo interno mede 128°. O ângulo externo no mesmo vértice mede:",
    ["52°", "128°", "62°", "232°"], 8);

  /* ---------- MA7-RAZ ---------- */
  add('MA7-RAZ', '7_mat_morango', "Uma receita usa 2 morangos para 3 xícaras de leite. Mantendo a relação da tabela, quantas xícaras de leite são necessárias para 10 morangos?",
    ["15", "12", "18", "30"], 11);
  add('MA7-RAZ', '7_mat_impressora', "Na tabela, a impressora trabalha em ritmo constante. Qual é a constante de proporcionalidade (páginas por minuto)?",
    ["7", "2", "12", "42"], 11);
  add('MA7-RAZ', '7_mat_impressora', "Mantendo o ritmo da tabela, quantas páginas a impressora imprime em 10 minutos?",
    ["70", "60", "52", "80"], 11);
  add('MA7-RAZ', '7_mat_robo', "Na tabela, o robô percorre as distâncias sempre no mesmo ritmo. Qual é a constante k = distância ÷ tempo?",
    ["4 cm por segundo", "3 cm por segundo", "9 cm por segundo", "36 cm por segundo"], 11);
  add('MA7-RAZ', '7_mat_robo', "Mantendo o ritmo da tabela, quantos centímetros o robô percorre em 10 segundos?",
    ["40 cm", "30 cm", "120 cm", "14 cm"], 11);
  add('MA7-RAZ', '7_mat_ovos', "Na tabela, a razão entre ovos e xícaras de farinha é 3/2. Mantendo essa razão, quantas xícaras de farinha são usadas com 12 ovos?",
    ["8", "6", "10", "18"], 12);
  add('MA7-RAZ', '7_mat_prop', "Usando o método do exemplo (propriedade fundamental da proporção), na proporção 5/2 = 15/x o valor de x é:",
    ["6", "12", "8", "10"], 12);
  add('MA7-RAZ', '7_mat_cadernos', "Na tabela, a razão preço ÷ quantidade é constante. Quanto custam 8 cadernos?",
    ["R$ 96,00", "R$ 84,00", "R$ 100,00", "R$ 108,00"], 13);
  add('MA7-RAZ', '7_mat_promo', "Na promoção, 1 caderno custa R$ 12 e 2 cadernos custam R$ 22. Por que preço e quantidade não são diretamente proporcionais?",
    ["Porque a razão preço ÷ quantidade muda (12 e 11)", "Porque o preço diminui quando a quantidade aumenta", "Porque a razão é sempre 12", "Porque a quantidade é um número par"], 13);
  add('MA7-RAZ', '7_mat_estrat', "Usando a estratégia “valor de uma unidade”, se 4 ingressos custam R$ 80,00, quanto custam 9 ingressos?",
    ["R$ 180,00", "R$ 160,00", "R$ 200,00", "R$ 720,00"], 13);
  add('MA7-RAZ', '7_mat_estrat', "Pelo esquema, se um ciclista percorre 8 km em 20 minutos, no mesmo ritmo ele percorre em 60 minutos:",
    ["24 km", "16 km", "20 km", "28 km"], 13);
  add('MA7-RAZ', null, "Se 5 cadernos custam R$ 60,00, quanto custam 7 cadernos?",
    ["R$ 84,00", "R$ 72,00", "R$ 96,00", "R$ 420,00"], 14);
  add('MA7-RAZ', null, "Em um mapa, 3 cm representam 12 km. Uma distância de 5 cm no mapa representa, na realidade:",
    ["20 km", "15 km", "36 km", "4 km"], 12);
  add('MA7-RAZ', null, "Em corridas de aplicativo, 2 km custam R$ 14, 4 km custam R$ 26 e 6 km custam R$ 38. Valor e distância são diretamente proporcionais?",
    ["Não, pois a razão valor ÷ distância não é constante", "Sim, pois ambos aumentam", "Sim, pois a razão é sempre 7", "Não, pois o valor diminui"], 14);

  /* ---------- MA7-INV ---------- */
  add('MA7-INV', '7_mat_mangueiras', "Na tabela, quanto maior o número de mangueiras, menor o tempo para encher a piscina. Com 6 mangueiras, o tempo seria de:",
    ["2 horas", "1 hora", "3 horas", "6 horas"], 16);
  add('MA7-INV', '7_mat_mangueiras', "Na tabela das mangueiras, o que permanece constante é:",
    ["o produto entre o número de mangueiras e o tempo", "a soma entre o número de mangueiras e o tempo", "a razão entre o tempo e o número de mangueiras", "o número de mangueiras"], 16);
  add('MA7-INV', '7_mat_muro', "Se 4 trabalhadores pintam o muro em 6 horas, em quantas horas 12 trabalhadores, no mesmo ritmo, o pintariam?",
    ["2 horas", "18 horas", "3 horas", "1 hora"], 16);
  add('MA7-INV', '7_mat_suco', "Mantendo a receita do exemplo (2 copos de água para 1 jarra de suco), quantos copos de água são necessários para 5 jarras?",
    ["10", "7", "8", "12"], 17);
  add('MA7-INV', '7_mat_cadeiras', "Como no exemplo, 4 pessoas levam 6 horas para uma tarefa. Mantendo o ritmo, 12 pessoas levariam:",
    ["2 horas", "18 horas", "3 horas", "24 horas"], 17);
  add('MA7-INV', null, "Para encher um reservatório, 5 torneiras iguais levam 12 minutos. Com 10 torneiras iguais, o tempo será de:",
    ["6 minutos", "24 minutos", "60 minutos", "12 minutos"], 17);
  add('MA7-INV', null, "Um carro faz um percurso em 6 horas a 80 km/h. A 120 km/h, o mesmo percurso levará:",
    ["4 horas", "9 horas", "3 horas", "8 horas"], 16);
  add('MA7-INV', null, "A velocidade de um carro e o tempo para percorrer uma mesma distância são grandezas:",
    ["inversamente proporcionais", "diretamente proporcionais", "não proporcionais", "iguais"], 16);
  add('MA7-INV', null, "Uma loja cobra R$ 72,00 por 8 camisetas iguais. Mantendo o preço, 15 camisetas custam:",
    ["R$ 135,00", "R$ 120,00", "R$ 144,00", "R$ 90,00"], 17);
  add('MA7-INV', null, "Uma equipe de 6 pintores pinta um muro em 10 horas. Com 12 pintores no mesmo ritmo, o muro será pintado em:",
    ["5 horas", "20 horas", "2 horas", "10 horas"], 17);
  add('MA7-INV', null, "Quatro torneiras de mesma vazão enchem um reservatório em 15 minutos. Com 5 torneiras iguais, o tempo será de:",
    ["12 minutos", "10 minutos", "14 minutos", "18 minutos"], 20);
  add('MA7-INV', null, "Uma gráfica produz 18 adesivos em 6 minutos, sempre no mesmo ritmo. Em 14 minutos, produzirá:",
    ["42 adesivos", "32 adesivos", "36 adesivos", "48 adesivos"], 19);
  add('MA7-INV', null, "Se forem usados 4 saquinhos, cada um recebe 12 cartas. Com 6 saquinhos (mesma quantidade em cada um), cada saquinho recebe:",
    ["8 cartas", "18 cartas", "6 cartas", "10 cartas"], 18);
  add('MA7-INV', null, "Um carro gasta 12 litros em 144 km. No mesmo rendimento, para percorrer 240 km serão necessários:",
    ["20 litros", "18 litros", "22 litros", "24 litros"], 20);

  /* ---------- MA7-POR ---------- */
  add('MA7-POR', '7_mat_fracdec', "Seguindo o padrão da tabela, 25/100 é escrito como decimal e porcentagem, respectivamente, por:",
    ["0,25 e 25%", "0,025 e 2,5%", "2,5 e 25%", "0,25 e 2,5%"], 21);
  add('MA7-POR', '7_mat_reta', "Na reta numérica de 0 a 1, qual das frações está mais próxima do inteiro completo (1)?",
    ["3/4", "1/4", "1/2", "10/100"], 21);
  add('MA7-POR', '7_mat_pct2', "Seguindo o quadro (37% = 0,37; 8% = 0,08), 45% escrito na forma decimal é:",
    ["0,45", "4,5", "0,045", "45,0"], 23);
  add('MA7-POR', '7_mat_pct3', "Usando o método do exemplo (20% de 150 = 0,20 · 150), quanto é 30% de 150?",
    ["45", "30", "50", "4,5"], 23);
  add('MA7-POR', '7_mat_metade', "Usando a estratégia da tabela (25% é a quarta parte), 25% de R$ 120,00 corresponde a:",
    ["R$ 30,00", "R$ 60,00", "R$ 12,00", "R$ 25,00"], 22);
  add('MA7-POR', '7_mat_fator', "Pelo quadro, um acréscimo de 15% usa o fator 1 + 0,15 = 1,15. Para um acréscimo de 20%, o fator é:",
    ["1,20", "0,20", "1,02", "2,0"], 23);
  add('MA7-POR', '7_mat_fator', "Pelo quadro, um desconto de 30% usa o fator 1 − 0,30 = 0,70. Para um desconto de 25%, o fator é:",
    ["0,75", "0,25", "1,25", "0,70"], 23);
  add('MA7-POR', '7_mat_barra', "Na barra, uma redução de 30% deixa 70% do total. Se a redução fosse de 40%, o restante corresponderia a:",
    ["60%", "40%", "140%", "30%"], 27);
  add('MA7-POR', null, "Em uma turma com 40 estudantes, 14 preferem atividades em grupo. Essa quantidade corresponde a:",
    ["35%", "14%", "28%", "40%"], 25);
  add('MA7-POR', null, "Um celular custava R$ 800,00 e teve acréscimo de 12%. O novo preço é:",
    ["R$ 896,00", "R$ 812,00", "R$ 920,00", "R$ 960,00"], 26);
  add('MA7-POR', null, "A turma planejava produzir 250 mudas e produziu 20% a mais. Quantas mudas foram produzidas?",
    ["300", "270", "255", "200"], 24);
  add('MA7-POR', null, "Um reservatório de 1 200 litros estava com 75% da capacidade ocupada. Depois, foram consumidos 180 litros. Ele ficou com que porcentagem da capacidade total?",
    ["60%", "45%", "75%", "72%"], 24);
  add('MA7-POR', null, "A mensalidade de R$ 200,00 teve acréscimo de 15% e, depois, desconto de 15% sobre o novo valor. O valor final é:",
    ["R$ 195,50", "R$ 200,00", "R$ 230,00", "R$ 170,00"], 28);
  add('MA7-POR', null, "Foram vendidos 520 ingressos, mas só 364 pessoas compareceram. Que porcentagem dos espectadores faltou?",
    ["30%", "70%", "156%", "36%"], 24);
})();
