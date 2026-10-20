/* 9º ano – História e Geografia – Volume 4 (4º bimestre)
   Em cada questão a PRIMEIRA alternativa é a correta; o site embaralha na hora de gerar a prova. */

/* ===================== HISTÓRIA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'História', A = 9;
  B.hab.push(
    { id: 'HI9-CON', ano: A, disc: D, cod: '', tit: 'Constituição de 1988, direitos e cidadania',
      desc: 'Reconhecer o contexto da Constituinte, os direitos civis, políticos e sociais garantidos pela Constituição de 1988, o voto facultativo e a luta de grupos sociais por direitos, interpretando infográficos, linhas do tempo e dados.', aulas: 'Aulas 1, 4 e 17' },
    { id: 'HI9-RED', ano: A, disc: D, cod: '', tit: 'Redemocratização: Tancredo, Sarney e cultura',
      desc: 'Analisar a eleição de Tancredo Neves, o governo Sarney, a inflação e os planos econômicos (charges e gráfico) e as manifestações culturais do período (cinema, artes, literatura e rap).', aulas: 'Aulas 2 e 3' },
    { id: 'HI9-DES', ano: A, disc: D, cod: '', tit: 'Descolonização da África e da Ásia',
      desc: 'Compreender o imperialismo e o neocolonialismo, a partilha da África, a Conferência de Bandung, os líderes africanos (Nkrumah, Mandela, Lumumba, Cabral) e os processos de independência na Índia, na China, na Indonésia e no Vietnã.', aulas: 'Aulas 5, 6 e 7' },
    { id: 'HI9-GLO', ano: A, disc: D, cod: '', tit: 'Fim da Guerra Fria e globalização',
      desc: 'Analisar a crise da URSS, a Perestroika e a Glasnost, a queda do Muro de Berlim e as fases e os desafios da globalização, interpretando charges, esquemas e textos-fonte.', aulas: 'Aulas 8, 9 e 10' },
    { id: 'HI9-BRA', ano: A, disc: D, cod: '', tit: 'Neoliberalismo, Plano Real e o Brasil dos anos 1990',
      desc: 'Relacionar o neoliberalismo na América Latina, a hiperinflação e o Plano Real, as privatizações do governo FHC, a desigualdade (informalidade) e as transformações do Brasil de 1989 aos dias atuais.', aulas: 'Aulas 11, 12, 13 e 18' },
    { id: 'HI9-C21', ano: A, disc: D, cod: '', tit: 'Refugiados, terrorismo e conflitos do século XXI',
      desc: 'Diferenciar imigrantes e refugiados, interpretar mapas e gráficos de deslocamento forçado e reconhecer atentados terroristas e conflitos contemporâneos (Ucrânia, Afeganistão, Síria, Primavera Árabe, Israel e Palestina).', aulas: 'Aulas 14, 15 e 16' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length-1].texto = texto; };

  /* ---------- HI9-CON ---------- */
  add('HI9-CON', null, 'Segundo o livro, na Constituição de 1988 o sistema integrado de atendimento à saúde, acessível a todos os cidadãos brasileiros e também a estrangeiros, é o:',
    ['SUS', 'Procon', 'Código do Consumidor', 'Ficha Limpa'], 1);
  add('HI9-CON', null, 'Segundo o livro, a Lei da Ficha Limpa é exemplo de:',
    ['sugestão de lei enviada por cidadãos e aprovada', 'lei criada pelos militares', 'norma de proteção ambiental', 'direito trabalhista'], 1);
  add('HI9-CON', null, 'De acordo com o livro, para indígenas e quilombolas a Constituição reconhece direitos:',
    ['territoriais, protegendo as terras tradicionalmente ocupadas', 'apenas culturais, sem direito à terra', 'de voto obrigatório', 'de isenção de impostos'], 1);
  add('HI9-CON', '9_hist_constituinte', 'Na linha do tempo, qual acontecimento de 1984 reuniu milhões de pessoas em defesa de eleições diretas para presidente?',
    ['Diretas Já', 'Lei da Anistia', 'Constituinte', 'Promulgação da Constituição'], 1);
  add('HI9-CON', '9_hist_constituinte', 'De acordo com a linha do tempo, a Lei da Anistia, de 1979, possibilitou:',
    ['o retorno de exilados e a libertação de presos políticos', 'a eleição direta para presidente', 'a elaboração da nova Constituição', 'o fim do voto obrigatório'], 1);
  add('HI9-CON', '9_hist_constituinte', 'A ordem correta dos acontecimentos retratados é:',
    ['Anistia, Diretas Já, Constituinte e Constituição', 'Diretas Já, Anistia, Constituição e Constituinte', 'Constituinte, Anistia, Constituição e Diretas Já', 'Constituição, Constituinte, Diretas Já e Anistia'], 1);
  add('HI9-CON', '9_hist_indigena', 'A carta aberta da Anistia Internacional alerta para riscos aos direitos de qual grupo?',
    ['dos povos indígenas', 'dos trabalhadores informais', 'dos consumidores', 'dos estudantes'], 1);
  add('HI9-CON', '9_hist_indigena', 'A tese do “marco temporal” afirma que os povos indígenas só teriam direito às terras que estivessem em sua posse em:',
    ['1988, ano da promulgação da Constituição', '1979, ano da Anistia', '1984, ano das Diretas Já', '1985, ano da posse de Sarney'], 1);
  add('HI9-CON', '9_hist_deficit', 'O infográfico sobre o déficit habitacional de 2022 está relacionado a qual direito?',
    ['moradia', 'voto', 'cultura', 'liberdade de imprensa'], 1);
  add('HI9-CON', '9_hist_deficit', 'Segundo o infográfico, o déficit habitacional de 6.215.313 domicílios corresponde a que parcela dos domicílios particulares?',
    ['8,3%', '13,2%', '37,2%', '86,8%'], 1);
  add('HI9-CON', '9_hist_informal', 'De acordo com o gráfico, em 2018 o número de trabalhadores informais no Brasil era de:',
    ['38,2 milhões', '11,63 milhões', '18,99 milhões', '92,9 milhões'], 1);
  add('HI9-CON', '9_hist_informal', 'Qual era a maior categoria de trabalhadores informais no gráfico?',
    ['conta própria sem CNPJ', 'empregado sem carteira no setor privado', 'trabalhador doméstico sem carteira', 'empregador sem CNPJ'], 1);
  add('HI9-CON', '9_hist_voto', 'Segundo a ilustração, o voto é facultativo para:',
    ['jovens de 16 e 17 anos, pessoas com mais de 70 anos e não alfabetizadas', 'pessoas alfabetizadas de 18 a 70 anos', 'somente militares', 'ninguém, pois é sempre obrigatório'], 1);
  add('HI9-CON', '9_hist_violencias', 'Pela Lei Maria da Penha, a violência caracterizada por calúnia, difamação ou injúria contra as mulheres é a:',
    ['moral', 'física', 'sexual', 'patrimonial'], 17);

  /* ---------- HI9-RED ---------- */
  add('HI9-RED', '9_hist_tancredo_foto', 'Na foto, Tancredo Neves e José Sarney comemoram a vitória em qual órgão, que os elegeu presidente e vice-presidente em 1985?',
    ['Colégio Eleitoral', 'Assembleia Constituinte', 'Supremo Tribunal Federal', 'Câmara Municipal'], 2);
  add('HI9-RED', '9_hist_tancredo_foto', 'A eleição de Tancredo e Sarney, mostrada na foto, marcou a transição da ditadura civil-militar para:',
    ['a democracia', 'o Estado Novo', 'o regime parlamentarista monárquico', 'um novo governo militar'], 2);
  add('HI9-RED', '9_hist_charge_tancredo', 'A charge de Mariano, publicada em O Pasquim, refere-se a qual acontecimento?',
    ['à morte de Tancredo Neves', 'à posse de Sarney', 'ao Plano Cruzado', 'à promulgação da Constituição'], 2);
  add('HI9-RED', '9_hist_charge_inflacao', 'Na charge, a inflação aparece representada como:',
    ['um monstro que destrói o dinheiro dos brasileiros', 'um herói que protege os salários', 'um banco estatal', 'uma nova moeda'], 2);
  add('HI9-RED', '9_hist_charge_inflacao', 'A charge critica que a inflação seguiu alta mesmo após o governo tentar controlá-la por meio de:',
    ['planos econômicos', 'eleições diretas', 'anistia política', 'privatizações'], 2);
  add('HI9-RED', '9_hist_graf_sarney', 'De acordo com o gráfico, a inflação mensal atingiu o recorde histórico de 84,3% em:',
    ['março de 1990', 'março de 1985', 'janeiro de 1987', 'dezembro de 1988'], 2);
  add('HI9-RED', '9_hist_graf_sarney', 'Quais planos de estabilização aparecem no gráfico durante o governo Sarney?',
    ['Cruzado, Cruzado 2, Bresser e Verão', 'Real, Collor 1 e Collor 2', 'Cruzado, Real e Verão', 'Bresser, Collor 1 e Real'], 2);
  add('HI9-RED', '9_hist_graf_sarney', 'O gráfico mostra que os planos do governo Sarney:',
    ['não controlaram a inflação de forma duradoura', 'eliminaram a inflação até 1990', 'reduziram a inflação a zero', 'mantiveram a inflação estável'], 2);
  add('HI9-RED', null, 'Quais filmes citados no livro criticaram o regime militar e abordaram questões sociais?',
    ['Bye Bye Brasil e O homem que virou suco', 'Morangos mofados e Sete anos e um dia', 'Pânico na Zona Sul e Holocausto Urbano', 'Poema sujo e Como vai você?'], 3);
  add('HI9-RED', null, 'A exposição “Como vai você, Geração 80?” (1984) questionou:',
    ['a identidade e o futuro da arte brasileira', 'a censura ao cinema', 'o fim do bipartidarismo', 'a política de saúde'], 3);
  add('HI9-RED', null, 'Quem é o autor de Morangos mofados (1982), obra citada na literatura do período?',
    ['Caio Fernando Abreu', 'Ferreira Gullar', 'Elvira Vigna', 'Marcus Lontra'], 3);
  addT('HI9-RED', "Racionais vão contar / A realidade das ruas / Que não media outras vidas [...] Temos que parar de se acomodar / E acatar o que nos prejudica / O medo / Sentimento em comum num lugar / Que parece sempre estar esquecido [...] (Racionais MC’s, Pânico na Zona Sul, 1990)", 'O trecho de rap “Pânico na Zona Sul” é do grupo:',
    ['Racionais MC’s', 'Barão Vermelho', 'Legião Urbana', 'Os Paralamas'], 3);
  addT('HI9-RED', "Racionais vão contar / A realidade das ruas / Que não media outras vidas [...] Temos que parar de se acomodar / E acatar o que nos prejudica / O medo / Sentimento em comum num lugar / Que parece sempre estar esquecido [...] (Racionais MC’s, Pânico na Zona Sul, 1990)", 'Os versos “Temos que parar de se acomodar / E acatar o que nos prejudica” defendem:',
    ['uma atitude de mudança diante da situação vivida', 'a aceitação da realidade das periferias', 'o apoio ao regime militar', 'o abandono da música'], 3);
  add('HI9-RED', null, 'O rap começou a se desenvolver no Brasil na década de 1980, principalmente em:',
    ['São Paulo', 'Salvador', 'Manaus', 'Porto Alegre'], 3);

  /* ---------- HI9-DES ---------- */
  add('HI9-DES', '9_hist_afr_resumo', 'No esquema, a Conferência de Berlim (1884-1885) é descrita como a:',
    ['divisão da África entre potências europeias, sem considerar etnias e culturas locais', 'independência de Gana', 'criação do Pan-Africanismo', 'reunião de países africanos e asiáticos'], 5);
  add('HI9-DES', '9_hist_afr_resumo', 'De acordo com o esquema, a Conferência de Bandung (1955) foi uma reunião de:',
    ['29 países africanos e asiáticos contra o neocolonialismo', 'potências europeias para dividir a África', 'países da OTAN', 'colônias portuguesas'], 5);
  add('HI9-DES', '9_hist_afr_resumo', 'Para justificar a dominação, o esquema cita o uso do:',
    ['“darwinismo social” e do “fardo do homem branco”', 'pan-africanismo', 'não alinhamento', 'princípio da não devolução'], 5);
  add('HI9-DES', null, 'Entre as resistências coloniais citadas no livro estão:',
    ['sabotagens, simulação de doenças e manutenção das tradições', 'a criação da ONU', 'a Conferência de Berlim', 'a Perestroika'], 5);
  add('HI9-DES', '9_hist_afr_mapas', 'Comparando os mapas de fronteiras étnicas e de partilha do continente, nota-se que as fronteiras criadas pelas potências europeias:',
    ['não respeitaram as fronteiras étnicas, o que agravou conflitos internos', 'coincidiram com as fronteiras étnicas', 'foram traçadas pelos próprios africanos', 'eliminaram a diversidade étnica'], 5);
  add('HI9-DES', '9_hist_afr_mapas', 'No mapa “Partilha do continente”, qual item da legenda indica territórios sem domínio europeu?',
    ['Países independentes', 'Reino Unido', 'Portugal', 'Alemanha'], 5);
  addT('HI9-DES', "Finalmente, a batalha terminou! E assim Gana, o seu amado país, é livre para sempre. [...] Temos de perceber que, de agora em diante, não seremos mais um povo colonial, mas sim um povo livre e independente. [...] Nós despertamos. Não dormiremos mais. (Kwame Nkrumah, 6 de março de 1957)", 'No discurso de 6 de março de 1957, Kwame Nkrumah anunciou a independência de:',
    ['Gana', 'Congo', 'África do Sul', 'Guiné-Bissau'], 6);
  addT('HI9-DES', "Eu lutei contra a dominação branca e lutei contra a dominação negra. Eu apreciei o ideal de uma sociedade democrática e livre na qual todas as pessoas viverão juntas em harmonia e com oportunidades iguais. É um ideal que espero viver e ver realizado. (Nelson Mandela)", 'No trecho de seu discurso, Nelson Mandela afirma ter lutado contra:',
    ['a dominação branca e a dominação negra', 'apenas a dominação negra', 'a democracia', 'a igualdade de oportunidades'], 6);
  addT('HI9-DES', "[...] Eu sei e sinto no fundo de mim mesmo que cedo ou tarde o meu povo se libertará de todos os seus inimigos interiores e exteriores, que ele se levantará como um só homem para dizer não ao colonialismo degradante e vergonhoso e para reconquistar a sua dignidade sob um sol seguro. (Patrice Lumumba, carta à esposa)", 'Na carta à esposa, Patrice Lumumba demonstra a convicção de que seu povo:',
    ['se libertaria e diria não ao colonialismo', 'aceitaria o domínio colonial', 'abandonaria o Congo', 'apoiaria o golpe de Estado'], 6);
  addT('HI9-DES', "[...] O nosso combate pela independência do nosso povo africano completa dez anos [...] a hora é de ação, e não de palavras. Ação cada dia mais vigorosa e mais eficaz na Guiné para impingir maiores derrotas aos colonialistas portugueses [...]. (Amílcar Cabral, 1973)", 'O trecho do último discurso de Amílcar Cabral trata da luta pela independência de:',
    ['Guiné-Bissau e Cabo Verde, contra Portugal', 'Gana, contra o Reino Unido', 'Congo, contra a Bélgica', 'África do Sul, contra o apartheid'], 6);
  add('HI9-DES', '9_hist_asia_mapa', 'Segundo o mapa, a partição da Índia em 1947 originou:',
    ['a Índia (maioria hindu) e o Paquistão (maioria muçulmana)', 'a Índia e a China', 'o Paquistão e o Vietnã', 'a Indonésia e Bangladesh'], 7);
  add('HI9-DES', '9_hist_asia_mapa', 'Qual liderança está ligada à desobediência civil e à Marcha do Sal, na Índia?',
    ['Mahatma Gandhi', 'Mao Tsé-tung', 'Ho Chi Minh', 'Sukarno'], 7);
  add('HI9-DES', '9_hist_asia_mapa', 'De acordo com o mapa, a Indonésia, colônia dos Países Baixos, teve sua independência reconhecida em:',
    ['1949', '1912', '1947', '1975'], 7);

  /* ---------- HI9-GLO ---------- */
  add('HI9-GLO', '9_hist_urss_mapa', 'No mapa mental, a reforma de Gorbachev voltada à reestruturação econômica é a:',
    ['Perestroika', 'Glasnost', 'Acordo de Malta', 'Doutrina Truman'], 8);
  add('HI9-GLO', '9_hist_urss_mapa', 'De acordo com o mapa mental, a Glasnost (1988) trouxe:',
    ['transparência política, liberdade de expressão e pluripartidarismo', 'abertura do mercado para empresas privadas', 'investimentos na corrida espacial', 'a Guerra do Afeganistão'], 8);
  add('HI9-GLO', '9_hist_urss_mapa', 'Entre as causas da crise da URSS nos anos 1970, o mapa mental cita:',
    ['investimentos nas corridas armamentista e espacial e a Guerra do Afeganistão', 'a queda do Muro de Berlim', 'a criação da OTAN', 'a Perestroika'], 8);
  add('HI9-GLO', null, 'Segundo o livro, o Acordo de Malta (1989) marcou:',
    ['o fim da Guerra Fria', 'o início da Guerra Fria', 'a independência da Índia', 'o Plano Real'], 8);
  add('HI9-GLO', '9_hist_charge_gorbachev', 'Na charge de 1989, a frase “Isso é assustador – os servos acreditam no que eu digo!” critica Gorbachev por:',
    ['prometer abertura e liberdade e se assustar quando o povo acredita nelas', 'reprimir todas as manifestações', 'abandonar a Perestroika', 'entregar o poder aos EUA'], 8);
  add('HI9-GLO', '9_hist_charge_gorbachev', 'As bandeiras “Liberdade para a Armênia” e “Liberdade para a Estônia” da charge aludem a:',
    ['repúblicas soviéticas que reivindicavam liberdade', 'países da OTAN', 'colônias africanas', 'aliados dos EUA'], 8);
  add('HI9-GLO', '9_hist_charge_urss', 'Na charge de Habib Haddad (1991), a URSS aparece como um navio afundando. Isso representa:',
    ['a desagregação do país favorecida pelas reformas de Gorbachev', 'o sucesso da corrida espacial', 'a vitória na Guerra do Afeganistão', 'a criação do Pacto de Varsóvia'], 8);
  addT('HI9-GLO', "Dissolução da URSS (1991): fim da Guerra Fria e ascensão dos Estados Unidos como potência global [...]. A queda do Muro de Berlim (1989) simbolizou o enfraquecimento do bloco socialista no Leste Europeu [...].", 'De acordo com o quadro, a queda do Muro de Berlim (1989) simbolizou:',
    ['o enfraquecimento do bloco socialista no Leste Europeu', 'o início da Guerra Fria', 'a criação da União Europeia', 'a independência da Índia'], 9);
  addT('HI9-GLO', "Quando abriu o muro, do lado oriental, eles tinham uma bandeira que era “Nós somos o povo”. Quando mudou para unificar, mudou para “Nós somos um povo”. [...] Não foi tão rápido esse reencontro quanto parecia na noite da queda do muro [...] ainda hoje existem diferenças bastante marcadas entre eles. (Silvio Queiroz, jornalista)", 'No depoimento, quando o muro foi aberto, a bandeira “Nós somos o povo” mudou, com a unificação, para:',
    ['“Nós somos um povo”', '“Nós somos o povo livre”', '“Fim da Guerra Fria”', '“Um muro, dois povos”'], 9);
  addT('HI9-GLO', "Quando abriu o muro, do lado oriental, eles tinham uma bandeira que era “Nós somos o povo”. Quando mudou para unificar, mudou para “Nós somos um povo”. [...] Não foi tão rápido esse reencontro quanto parecia na noite da queda do muro [...] ainda hoje existem diferenças bastante marcadas entre eles. (Silvio Queiroz, jornalista)", 'O jornalista afirma que, apesar da festa na noite da queda do muro, a reunificação:',
    ['não foi tão rápida, e ainda hoje há diferenças entre os dois lados', 'eliminou todas as diferenças', 'não teve apoio popular', 'foi proibida pelo governo'], 9);
  add('HI9-GLO', '9_hist_globaliz_fases', 'Segundo o esquema, a 3ª fase da globalização vai da Guerra Fria até:',
    ['a queda do Muro de Berlim', 'as Grandes Navegações', 'a Revolução Industrial', 'a Primeira Guerra Mundial'], 10);
  add('HI9-GLO', '9_hist_tirinha', 'A tirinha, em que a camiseta vem de Taiwan, refere-se a uma realidade típica da globalização:',
    ['a transnacionalização da produção', 'a disputa pela independência', 'o fim da Guerra Fria', 'o protecionismo'], 9);
  addT('HI9-GLO', "Em etiquetas costuradas à mão, supostas vítimas de trabalho escravo relatavam condições desumanas, como jornadas exaustivas e más condições de alimentação. [...] As peças mencionadas foram fabricadas em diferentes países e épocas [...]. Os relatos chocaram consumidores [...].", 'O caso de mensagens de socorro em roupas da Primark relaciona-se à globalização porque:',
    ['peças fabricadas em condições precárias em um país são vendidas a consumidores em outros', 'a empresa só vende no mercado interno', 'as roupas eram produzidas apenas no Reino Unido', 'a globalização eliminou o trabalho forçado'], 9);
  addT('HI9-GLO', "As respostas a essas perguntas dependem de nossa capacidade de trabalhar juntos entre disciplinas e atores, entre nações e divisões políticas. Temos uma responsabilidade coletiva de dar direção a essas tecnologias para que maximizemos os benefícios e reduzamos as consequências não intencionais e o uso malicioso. (António Guterres, ONU)", 'No texto de António Guterres, as respostas sobre o impacto da tecnologia digital dependem:',
    ['da capacidade de trabalhar juntos, entre disciplinas, nações e divisões políticas', 'apenas das empresas de tecnologia', 'do abandono da tecnologia', 'somente dos governos mais ricos'], 10);

  /* ---------- HI9-BRA ---------- */
  addT('HI9-BRA', "Os governos democráticos latino-americanos abriram as portas para o mercado externo e se estabilizaram (reduzindo a inflação) para receber o capital estrangeiro [...]. Se a década de 1980 foi a década perdida, a de 1990 foi a década perversa [...] como pobreza e desemprego [...]. (Campos e Campos, 2014)", 'No texto, as autoras chamam a década de 1990 de “década perversa” por causa de consequências como:',
    ['pobreza e desemprego', 'crescimento da classe média', 'fim da inflação', 'ampliação de direitos'], 11);
  addT('HI9-BRA', "Os governos democráticos latino-americanos abriram as portas para o mercado externo e se estabilizaram (reduzindo a inflação) para receber o capital estrangeiro [...]. Se a década de 1980 foi a década perdida, a de 1990 foi a década perversa [...] como pobreza e desemprego [...]. (Campos e Campos, 2014)", 'Segundo o texto, a década de 1980 na América Latina foi chamada de:',
    ['década perdida', 'década perversa', 'década dourada', 'década do consumo'], 11);
  addT('HI9-BRA', "Os governos democráticos latino-americanos abriram as portas para o mercado externo e se estabilizaram (reduzindo a inflação) para receber o capital estrangeiro [...]. Se a década de 1980 foi a década perdida, a de 1990 foi a década perversa [...] como pobreza e desemprego [...]. (Campos e Campos, 2014)", 'De acordo com o texto, os governos latino-americanos abriram o mercado externo e reduziram a inflação para:',
    ['receber capital estrangeiro', 'fechar a economia', 'estatizar empresas', 'criar barreiras comerciais'], 11);
  add('HI9-BRA', '9_hist_brasil8090', 'No esquema, o Plano Real (1994) pertence ao governo de:',
    ['Itamar Franco', 'José Sarney', 'Fernando Collor', 'Fernando Henrique Cardoso'], 12);
  add('HI9-BRA', '9_hist_brasil8090', 'No esquema, o governo Collor termina com:',
    ['impeachment, causado por denúncias de corrupção e descontentamento popular', 'o Plano Real', 'o Plano Cruzado', 'o Plano Verão'], 12);
  add('HI9-BRA', '9_hist_brasil8090', 'Segundo o esquema, a URV foi:',
    ['uma moeda virtual de transição criada em 1994 para acabar com a hiperinflação', 'o primeiro plano do governo Sarney', 'uma empresa privatizada', 'um imposto do governo Collor'], 12);
  add('HI9-BRA', '9_hist_graf_planos', 'No gráfico da inflação anual (IPCA), qual plano aparece associado ao ano de 1987?',
    ['Plano Bresser', 'Plano Cruzado', 'Plano Verão', 'Plano Real'], 12);
  add('HI9-BRA', '9_hist_graf_planos', 'Segundo o gráfico, os planos Collor 1 e Collor 2 foram lançados, respectivamente, em:',
    ['1990 e 1991', '1986 e 1987', '1989 e 1990', '1991 e 1994'], 12);
  add('HI9-BRA', '9_hist_graf_planos', 'O gráfico indica que, nos anos de 1980 e 1990, a inflação anual do Brasil chegou a ultrapassar:',
    ['2.000%', '200%', '100%', '50%'], 12);
  add('HI9-BRA', '9_hist_charge_fhc', 'A charge “Televendas Brasil: vendemos tudo pelo telefone (inclusive o próprio telefone)” ironiza:',
    ['o processo de privatização de empresas estatais', 'o Plano Cruzado', 'o voto facultativo', 'a Constituição de 1988'], 13);
  add('HI9-BRA', '9_hist_rapper_informal', 'O gráfico de 1992 a 1999 mostra que o trabalho informal era mais elevado entre:',
    ['a população negra do que entre a população branca', 'a população branca do que entre a negra', 'os homens do que entre as mulheres', 'os jovens do que entre os idosos'], 13);
  add('HI9-BRA', '9_hist_global_resumo', 'No esquema, o neoliberalismo é descrito como política econômica que surgiu a partir de 1970 e pregava o:',
    ['“Estado mínimo”', 'planejamento estatal total', 'fim do comércio', 'controle de preços'], 18);
  add('HI9-BRA', '9_hist_brasil89', 'Segundo o esquema, protestos como as Jornadas de Junho de 2013 demonstram:',
    ['a permanente participação da sociedade na cobrança por saúde, educação e transporte', 'o fim das eleições diretas', 'a volta da ditadura', 'a falta de interesse político'], 18);
  add('HI9-BRA', '9_hist_brasil89', 'As leis nº 10.639/2003 e nº 11.645/2008, citadas no esquema, garantem:',
    ['a inclusão da história e das culturas afro-brasileira e indígena no currículo escolar', 'o voto aos 16 anos', 'a privatização de estatais', 'o Plano Real'], 18);

  /* ---------- HI9-C21 ---------- */
  add('HI9-C21', '9_hist_imig_refug', 'Segundo o quadro, o deslocamento do refugiado é:',
    ['forçado, devido a guerras, terrorismo ou perseguições', 'geralmente voluntário, por trabalho ou estudo', 'sempre temporário', 'regulado só pela legislação do destino'], 14);
  add('HI9-C21', '9_hist_imig_refug', 'A proteção internacional ao refugiado está sob a:',
    ['Convenção de Genebra de 1951 e o ACNUR', 'Conferência de Berlim', 'Conferência de Bandung', 'Constituição de 1988'], 14);
  add('HI9-C21', '9_hist_imig_refug', 'De acordo com o quadro, o Princípio de Não Devolução significa que o refugiado:',
    ['não pode ou não quer retornar, por risco à vida ou à liberdade', 'deve voltar após um ano', 'perde a proteção do ACNUR', 'é sempre autossuficiente'], 14);
  add('HI9-C21', '9_hist_graf_afeg', 'O gráfico do Afeganistão relaciona o deslocamento forçado à guerra contra os soviéticos (1979-1989) e ao:',
    ['primeiro governo Talibã (1996-2001)', 'Plano Real', 'Acordo de Malta', 'fim do apartheid'], 14);
  add('HI9-C21', '9_hist_ucrania', 'No infográfico, o epicentro do conflito na Ucrânia, região separatista reconhecida pelos russos, é:',
    ['Donbass', 'Crimeia', 'Moscou', 'Kharkiv'], 14);
  add('HI9-C21', '9_hist_ucrania', 'O infográfico indica que a Rússia invadiu a Ucrânia em:',
    ['24 de fevereiro de 2022', '24 de fevereiro de 2014', 'novembro de 2011', 'fevereiro de 2025'], 14);
  addT('HI9-C21', "[...] a aliança do Atlântico Norte continuava a se expandir apesar de nossos protestos e preocupações. Sua máquina militar está em movimento e, como eu disse, está se aproximando de nossa própria fronteira. [...] (Vladimir Putin, 24 de fevereiro de 2022)", 'No discurso de 24 de fevereiro de 2022, Putin afirma que a aliança do Atlântico Norte (Otan):',
    ['continuava a se expandir e a se aproximar da fronteira russa', 'estava se desfazendo', 'apoiava a Rússia', 'era uma aliança comercial'], 14);
  add('HI9-C21', '9_hist_mapa_siria', 'No mapa da Síria (dezembro de 2024), qual país aparece ao sul?',
    ['Jordânia', 'Turquia', 'Iraque', 'Líbano'], 14);
  add('HI9-C21', '9_hist_amia', 'O atentado de 1994 em Buenos Aires, que destruiu a sede da AMIA, deixou:',
    ['85 mortos e centenas de feridos', '11 mortos', '3 mil mortos', 'nenhum ferido'], 15);
  add('HI9-C21', '9_hist_amia', 'Segundo o texto, as investigações apontaram o envolvimento do grupo:',
    ['Hezbollah', 'Al-Qaeda', 'Talibã', 'Hamas'], 15);
  add('HI9-C21', '9_hist_charge_11set', 'A charge do calendário de setembro de 2001 representa o atentado terrorista de 11 de setembro contra:',
    ['os Estados Unidos', 'a Argentina', 'a França', 'a Índia'], 15);
  addT('HI9-C21', "Crise da Crimeia (2014): anexação formal pela Rússia após um referendo controverso [...]; sanções internacionais à Rússia. Primavera Árabe (2010-2012): revoltas populares no mundo árabe contra ditaduras, corrupção e desemprego; queda de Mubarak (Egito) e Gaddafi (Líbia) [...].", 'A Primavera Árabe (2010-2012) resultou na queda de líderes como:',
    ['Mubarak (Egito) e Gaddafi (Líbia)', 'Putin e Assad', 'Mandela e Nkrumah', 'Gorbachev e Reagan'], 16);
  addT('HI9-C21', "Crise da Crimeia (2014): anexação formal pela Rússia após um referendo controverso [...]; sanções internacionais à Rússia. Primavera Árabe (2010-2012): revoltas populares no mundo árabe contra ditaduras, corrupção e desemprego; queda de Mubarak (Egito) e Gaddafi (Líbia) [...].", 'A crise da Crimeia (2014) levou à:',
    ['anexação pela Rússia e sanções internacionais à Rússia', 'independência da Palestina', 'queda do Muro de Berlim', 'unificação da Alemanha'], 16);
  addT('HI9-C21', "O projeto oficial da criação de dois Estados enfrenta resistência tanto em alas políticas mais extremistas de Israel [...] quanto do lado palestino, especialmente no Hamas, que não reconhece o direito à existência de Israel. A situação está bloqueada há décadas [...].", 'Segundo o texto, a criação de dois Estados enfrenta resistência de alas extremistas de Israel e do:',
    ['Hamas, que não reconhece o direito à existência de Israel', 'Talibã', 'ACNUR', 'governo da Jordânia'], 16);
})();

/* ===================== GEOGRAFIA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Geografia', A = 9;
  B.hab.push(
    { id: 'GE9-IND', ano: A, disc: D, cod: '', tit: 'Revolução Industrial e indústria na Europa',
      desc: 'Reconhecer as fases da Revolução Industrial, suas transformações sociais e espaciais e a distribuição atual da indústria europeia, seus fatores de localização e desafios.', aulas: 'Aulas 1 e 2' },
    { id: 'GE9-ASI', ano: A, disc: D, cod: '', tit: 'Industrialização do Japão e da China',
      desc: 'Compreender a trajetória industrial do Japão (Era Meiji, toyotismo, envelhecimento) e da China (Revolução de 1949, reformas de 1978, Zonas Econômicas Especiais), interpretando mapas e gráficos.', aulas: 'Aulas 3 e 4' },
    { id: 'GE9-IT', ano: A, disc: D, cod: '', tit: 'Índia, Tigres Asiáticos e Oceania',
      desc: 'Analisar a industrialização da Índia, dos Tigres Asiáticos e da Oceania a partir de mapas econômicos e industriais e dos fatores que explicam suas trajetórias.', aulas: 'Aulas 5, 6 e 7' },
    { id: 'GE9-ENE', ano: A, disc: D, cod: '', tit: 'Fontes de energia e matriz energética',
      desc: 'Diferenciar fontes renováveis e não renováveis, interpretar a matriz energética mundial e a produção de petróleo e compreender as transições energéticas ao longo da história.', aulas: 'Aulas 8 e 9' },
    { id: 'GE9-DIG', ano: A, disc: D, cod: '', tit: 'Indústria digital, energia e território',
      desc: 'Relacionar tecnologias digitais, minerais estratégicos e consumo de recursos e comparar a dinâmica energética de Europa, Ásia e Oceania.', aulas: 'Aulas 10, 11 e 12' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length-1].texto = texto; };

  /* ---------- GE9-IND ---------- */
  add('GE9-IND', '9_geo_londres', 'A ilustração de Londres, em 1859, mostra que a proximidade entre indústrias e portos era essencial para:',
    ['o desenvolvimento, o comércio e a circulação de capitais', 'a agricultura de subsistência', 'o isolamento das cidades', 'o fim do comércio marítimo'], 1);
  add('GE9-IND', '9_geo_londres', 'A principal fonte de energia da Primeira Revolução Industrial, que movia as máquinas a vapor, era o:',
    ['carvão mineral', 'petróleo', 'gás natural', 'urânio'], 1);
  add('GE9-IND', '9_geo_londres', 'Entre os problemas urbanos da industrialização citados no livro estão:',
    ['poluição, falta de saneamento básico e moradias precárias', 'redução da população urbana', 'fim do comércio de mercadorias', 'ausência de ferrovias'], 1);
  add('GE9-IND', null, 'A Segunda Revolução Industrial foi marcada pelo uso de novas fontes de energia, como:',
    ['eletricidade e petróleo', 'lenha e carvão vegetal', 'força humana e animal', 'vento e água apenas'], 1);
  add('GE9-IND', null, 'A linha de produção que tornou a fabricação mais rápida e padronizada, na Segunda Revolução Industrial, é a:',
    ['fordista', 'artesanal', 'toyotista', 'feudal'], 1);
  add('GE9-IND', '9_geo_adidas', 'A imagem mostra a loja de uma empresa alemã em uma metrópole chinesa. Isso ilustra que a produção dessa empresa tem parte da cadeia localizada em:',
    ['países emergentes', 'apenas na Alemanha', 'países sem indústria', 'regiões polares'], 2);
  add('GE9-IND', '9_geo_adidas', 'Segundo o livro, muitas multinacionais europeias levaram suas fábricas para países em desenvolvimento porque a produção ali era:',
    ['mais barata', 'proibida', 'mais cara', 'menos lucrativa'], 2);
  add('GE9-IND', null, 'A União Europeia, o bloco econômico mais integrado do mundo, tem hoje quantos Estados-membros, segundo o livro?',
    ['27', '15', '12', '50'], 2);
  addT('GE9-IND', "[...] O núcleo principal se localiza na Europa Ocidental [...]. Na Alemanha, o Vale do Ruhr se sobressai como o coração dos polos siderúrgico e metalúrgico europeus, enquanto o norte da Itália, especialmente o triângulo industrial formado por Milão, Turim e Gênova, consolida-se [...].", 'Segundo o texto, o núcleo principal da atividade industrial europeia está na:',
    ['Europa Ocidental', 'Europa Oriental', 'Europa Meridional', 'Europa Setentrional apenas'], 2);
  addT('GE9-IND', "[...] O núcleo principal se localiza na Europa Ocidental [...]. Na Alemanha, o Vale do Ruhr se sobressai como o coração dos polos siderúrgico e metalúrgico europeus, enquanto o norte da Itália, especialmente o triângulo industrial formado por Milão, Turim e Gênova, consolida-se [...].", 'No texto, o Vale do Ruhr, na Alemanha, é apresentado como o coração dos polos:',
    ['siderúrgico e metalúrgico', 'têxtil e de moda', 'agrícola e pesqueiro', 'turístico e de lazer'], 2);
  addT('GE9-IND', "[...] O núcleo principal se localiza na Europa Ocidental [...]. Na Alemanha, o Vale do Ruhr se sobressai como o coração dos polos siderúrgico e metalúrgico europeus, enquanto o norte da Itália, especialmente o triângulo industrial formado por Milão, Turim e Gênova, consolida-se [...].", 'O triângulo industrial do norte da Itália é formado por:',
    ['Milão, Turim e Gênova', 'Roma, Veneza e Nápoles', 'Paris, Lyon e Marselha', 'Londres, Leeds e Manchester'], 2);
  add('GE9-IND', null, 'Entre os fatores de concentração industrial citados no livro estão grandes rios navegáveis, como o Reno, e:',
    ['a proximidade de portos de águas profundas', 'a ausência de mão de obra', 'o isolamento geográfico', 'a falta de mercado consumidor'], 2);

  /* ---------- GE9-ASI ---------- */
  add('GE9-ASI', '9_geo_kaizen', 'O esquema mostra o Kaizen, filosofia de trabalho japonesa, cujo foco é a:',
    ['melhoria contínua', 'produção em estoque', 'concentração de lucros', 'redução de salários'], 3);
  add('GE9-ASI', '9_geo_kaizen', 'No esquema do Kaizen, depois de “localizar problemas”, vem a etapa de:',
    ['determinar a causa-raiz', 'testar a solução final', 'padronizar o trabalho', 'implementar soluções'], 3);
  add('GE9-ASI', '9_geo_envelhec', 'Segundo o gráfico, qual país tinha, em 2021, o maior percentual de população com 65 anos ou mais?',
    ['Japão', 'Itália', 'Grécia', 'Finlândia'], 3);
  add('GE9-ASI', '9_geo_envelhec', 'De acordo com o gráfico, a Itália tinha cerca de que percentual de população com 65 anos ou mais?',
    ['23%', '29%', '22%', '10%'], 3);
  add('GE9-ASI', '9_geo_envelhec', 'Grécia, Portugal e Finlândia aparecem no gráfico com percentuais:',
    ['iguais, de 22%', 'iguais, de 29%', 'diferentes entre si', 'inferiores a 10%'], 3);
  add('GE9-ASI', null, 'A industrialização japonesa ganhou força na Era Meiji, entre:',
    ['1868 e 1912', '1500 e 1600', '1945 e 1980', '1990 e 2010'], 3);
  add('GE9-ASI', null, 'O toyotismo caracteriza-se pela produção:',
    ['just in time, que reduz desperdícios', 'em grandes estoques', 'artesanal e lenta', 'em uma única linha fordista'], 3);
  add('GE9-ASI', '9_geo_china', 'No mapa da China, Shenzhen e Zhuhai estão entre as:',
    ['Zonas Econômicas Especiais (ZEEs)', 'regiões do oeste pouco povoadas', 'capitais provinciais do interior', 'áreas de agricultura de subsistência'], 4);
  add('GE9-ASI', '9_geo_china', 'No mapa, as Zonas Econômicas Especiais estão localizadas principalmente na região:',
    ['litorânea', 'do oeste', 'interiorana', 'do deserto central'], 4);
  addT('GE9-ASI', "O investimento estrangeiro permitiu o avanço da industrialização chinesa [...]. Em 2001, o país entrou para a Organização Mundial do Comércio (OMC) [...]. É também um dos líderes na construção de infraestrutura para o escoamento da produção, como a Nova Rota da Seda. [...] o uso de combustíveis fósseis, principalmente o carvão mineral [...].", 'Segundo o texto, a China entrou para a Organização Mundial do Comércio (OMC) em:',
    ['2001', '1949', '1978', '2010'], 4);
  addT('GE9-ASI', "O investimento estrangeiro permitiu o avanço da industrialização chinesa [...]. Em 2001, o país entrou para a Organização Mundial do Comércio (OMC) [...]. É também um dos líderes na construção de infraestrutura para o escoamento da produção, como a Nova Rota da Seda. [...] o uso de combustíveis fósseis, principalmente o carvão mineral [...].", 'O texto cita a Nova Rota da Seda como exemplo de:',
    ['construção de infraestrutura para escoar a produção', 'proteção ambiental', 'zona de livre turismo', 'política de controle de natalidade'], 4);
  addT('GE9-ASI', "O investimento estrangeiro permitiu o avanço da industrialização chinesa [...]. Em 2001, o país entrou para a Organização Mundial do Comércio (OMC) [...]. É também um dos líderes na construção de infraestrutura para o escoamento da produção, como a Nova Rota da Seda. [...] o uso de combustíveis fósseis, principalmente o carvão mineral [...].", 'Entre os desafios atuais da China, o texto cita as consequências ambientais do uso de combustíveis fósseis, principalmente do:',
    ['carvão mineral', 'gás natural', 'etanol', 'biodiesel'], 4);
  add('GE9-ASI', null, 'As reformas econômicas que iniciaram o “socialismo com características chinesas”, a partir de 1978, ocorreram sob a liderança de:',
    ['Deng Xiaoping', 'Mao Tsé-tung', 'Gorbachev', 'Gandhi'], 4);

  /* ---------- GE9-IT ---------- */
  add('GE9-IT', '9_geo_india', 'No mapa das regiões industriais da Índia, o símbolo de triângulo preto representa:',
    ['a mineração de carvão', 'a capital', 'um centro industrial', 'petróleo'], 5);
  add('GE9-IT', '9_geo_india', 'No mapa, Bangalore está localizada no:',
    ['sul da Índia', 'extremo norte', 'noroeste', 'litoral do Paquistão'], 5);
  add('GE9-IT', '9_geo_india', 'No mapa, qual é a capital indicada?',
    ['Nova Délhi', 'Bombaim', 'Calcutá', 'Madras'], 5);
  add('GE9-IT', null, 'A Índia reformou sua economia em 1991, com o fim do Licence Raj e:',
    ['a abertura ao capital estrangeiro', 'o fechamento ao comércio exterior', 'a estatização de toda a indústria', 'o aumento das barreiras protecionistas'], 5);
  add('GE9-IT', null, 'Cidades como Bangalore tornaram-se os “Vales do Silício” indianos por seu destaque no setor de:',
    ['Tecnologia da Informação', 'mineração de ferro', 'indústria naval', 'pesca'], 5);
  add('GE9-IT', '9_geo_tigres', 'No mapa, os Tigres Asiáticos originais incluem:',
    ['Coreia do Sul, Taiwan, Hong Kong e Singapura', 'Índia, Bangladesh e Vietnã', 'Malásia, Tailândia e Indonésia', 'Japão e China'], 6);
  add('GE9-IT', '9_geo_tigres', 'Segundo o livro, os Novos Tigres Asiáticos são:',
    ['Malásia, Tailândia, Indonésia e Filipinas', 'Coreia do Sul, Taiwan e Singapura', 'Índia, China e Japão', 'Vietnã, Laos e Camboja'], 6);
  add('GE9-IT', '9_geo_tigres', 'No mapa, os países representados em cor amarelo-oliva (Novíssimos Tigres) incluem:',
    ['Índia, Bangladesh e Vietnã', 'Coreia do Sul e Taiwan', 'Singapura e Hong Kong', 'Malásia e Indonésia'], 6);
  add('GE9-IT', null, 'A industrialização dos Tigres Asiáticos baseou-se, entre outros fatores, em:',
    ['industrialização orientada para a exportação', 'fechamento ao capital estrangeiro', 'economia de subsistência', 'proibição das ZEEs'], 6);
  add('GE9-IT', '9_geo_oceania', 'No mapa econômico, a maior parte do interior da Austrália é classificada como:',
    ['área com limitações para uso agrícola', 'cultivo', 'floresta', 'área industrial'], 7);
  add('GE9-IT', '9_geo_oceania', 'De acordo com o mapa, o rebanho que aparece na Austrália e na Nova Zelândia inclui:',
    ['bovinos e ovinos', 'apenas suínos', 'camelos', 'aves de corte'], 7);
  add('GE9-IT', '9_geo_oceania', 'No mapa, os recursos energéticos e minerais que aparecem na legenda são:',
    ['ferro e petróleo', 'ouro e prata', 'urânio e lítio', 'cobre e bauxita'], 7);
  add('GE9-IT', null, 'A Austrália consolidou-se como potência mineral e é a maior produtora mundial de:',
    ['lítio', 'petróleo', 'terras raras', 'café'], 7);
  add('GE9-IT', null, 'A criação da APEC, em 1989, conectou a Oceania às principais economias asiáticas e americanas por meio de:',
    ['redução de tarifas e comércio entre os 21 membros', 'fim das fronteiras', 'moeda única', 'livre circulação de pessoas'], 7);

  /* ---------- GE9-ENE ---------- */
  add('GE9-ENE', '9_geo_petroleo', 'O mapa mostra a produção de petróleo bruto em 2024, medida em:',
    ['barris por dia', 'toneladas por ano', 'litros por habitante', 'dólares por barril'], 8);
  add('GE9-ENE', '9_geo_petroleo', 'Entre os países destacados no mapa como produtores de petróleo estão:',
    ['Estados Unidos, Rússia, Arábia Saudita e China', 'Japão e Coreia do Sul', 'Austrália e Nova Zelândia', 'Portugal e Espanha'], 8);
  add('GE9-ENE', '9_geo_petroleo', 'Na legenda do mapa, a classe de maior produção é:',
    ['acima de 5000', 'até 100', 'de 101 a 500', 'de 501 a 1000'], 8);
  add('GE9-ENE', '9_geo_matriz', 'Segundo a tabela, a maior fonte da matriz energética mundial é o:',
    ['petróleo, com 30%', 'carvão mineral, com 27%', 'gás natural, com 23%', 'nuclear, com 5%'], 9);
  add('GE9-ENE', '9_geo_matriz', 'Na tabela, o carvão mineral aparece com 27% e é descrito como:',
    ['mais poluente e ainda muito usado na Ásia', 'combustível de transição', 'a fonte renovável mais estável', 'fonte de baixa emissão de CO₂'], 9);
  add('GE9-ENE', '9_geo_matriz', 'Qual fonte da tabela é classificada como não renovável, tem baixa emissão de CO₂, mas produz lixo atômico?',
    ['nuclear', 'hidrelétrica', 'solar e eólica', 'biomassa'], 9);
  add('GE9-ENE', '9_geo_renovaveis', 'A imagem mostra exemplos de fontes renováveis de produção de energia, como:',
    ['eólica, hidrelétrica e solar', 'carvão, petróleo e gás', 'nuclear e termelétrica', 'lenha e carvão vegetal'], 8);
  addT('GE9-ENE', "Em 1950, o carvão ainda liderava com 44,2% da matriz global, seguido pelo petróleo (19,1%) e pelo gás natural (7,3%). [...] o petróleo ultrapassou o carvão, atingindo 40,6% em 1980 [...]. As reservas de gás natural são altamente concentradas: Rússia, Irã e Qatar detêm mais da metade do total mundial.", 'De acordo com o texto, em 1950 o carvão ainda liderava a matriz energética global com:',
    ['44,2%', '19,1%', '7,3%', '40,6%'], 8);
  addT('GE9-ENE', "Em 1950, o carvão ainda liderava com 44,2% da matriz global, seguido pelo petróleo (19,1%) e pelo gás natural (7,3%). [...] o petróleo ultrapassou o carvão, atingindo 40,6% em 1980 [...]. As reservas de gás natural são altamente concentradas: Rússia, Irã e Qatar detêm mais da metade do total mundial.", 'Segundo o texto, em 1980 o petróleo ultrapassou o carvão, atingindo:',
    ['40,6%', '44,2%', '23,8%', '78%'], 8);
  addT('GE9-ENE', "Em 1950, o carvão ainda liderava com 44,2% da matriz global, seguido pelo petróleo (19,1%) e pelo gás natural (7,3%). [...] o petróleo ultrapassou o carvão, atingindo 40,6% em 1980 [...]. As reservas de gás natural são altamente concentradas: Rússia, Irã e Qatar detêm mais da metade do total mundial.", 'O texto afirma que as reservas de gás natural são altamente concentradas, sobretudo em:',
    ['Rússia, Irã e Qatar', 'Brasil, Chile e Peru', 'Japão, Coreia e China', 'Austrália e Nova Zelândia'], 8);
  add('GE9-ENE', null, 'Em 1800, a maior parte da matriz energética global vinha da:',
    ['biomassa tradicional (madeira e resíduos)', 'energia nuclear', 'eletricidade solar', 'petróleo'], 8);

  /* ---------- GE9-DIG ---------- */
  add('GE9-DIG', '9_geo_terras_raras', 'No gráfico da produção refinada de terras raras (2023), o maior produtor é:',
    ['a China', 'a Malásia', 'o Vietnã', 'o resto do mundo'], 10);
  add('GE9-DIG', '9_geo_terras_raras', 'O gráfico mostra que a produção refinada de terras raras é:',
    ['concentrada na China', 'distribuída igualmente entre os países', 'dominada pelo Vietnã', 'controlada pela Malásia'], 10);
  add('GE9-DIG', '9_geo_terras_raras', 'As terras raras são importantes na fabricação de:',
    ['chips, painéis solares e turbinas', 'alimentos orgânicos', 'tecidos de algodão', 'papel reciclado'], 10);
  addT('GE9-DIG', "[...] cientistas da Beijing Normal University calcularam que os data centers da China consumiram, em 2022, o equivalente a 15,7 bilhões de litros de água, o que representou 2,7% do total da água consumida no país naquele ano.", 'Segundo a reportagem, em 2022 os data centers da China consumiram o equivalente a:',
    ['15,7 bilhões de litros de água', '15,7 milhões de litros de água', '2,7 bilhões de litros de água', '157 bilhões de litros de água'], 10);
  addT('GE9-DIG', "[...] cientistas da Beijing Normal University calcularam que os data centers da China consumiram, em 2022, o equivalente a 15,7 bilhões de litros de água, o que representou 2,7% do total da água consumida no país naquele ano.", 'O consumo de água dos data centers chineses, em 2022, representou qual parte do total consumido no país?',
    ['2,7%', '15,7%', '27%', '0,1%'], 10);
  add('GE9-DIG', '9_geo_usinas', 'Entre as usinas representadas na ilustração, qual aproveita a força das águas de um rio represado?',
    ['hidrelétrica', 'nuclear', 'termelétrica', 'geotérmica'], 12);
  add('GE9-DIG', '9_geo_usinas', 'Na ilustração, qual usina aproveita o calor interno da Terra?',
    ['geotérmica', 'das marés', 'de biocombustível', 'de painéis solares'], 12);
  addT('GE9-DIG', "Na Europa, muitos países apresentam alta dependência externa de energia [...]. A importação de gás natural da Rússia foi central [...], o que evidenciou a vulnerabilidade do continente em momentos de crise, como na Guerra na Ucrânia. [...] Países como Noruega se destacam pela autossuficiência energética baseada em hidrelétricas e na exportação de petróleo e gás. Outro exemplo é a França, que possui grande produção de energia nuclear [...].", 'Segundo o texto, a França possui grande produção de energia:',
    ['nuclear, de baixa emissão de gases na geração', 'a carvão', 'eólica marítima apenas', 'geotérmica'], 11);
  addT('GE9-DIG', "Na Europa, muitos países apresentam alta dependência externa de energia [...]. A importação de gás natural da Rússia foi central [...], o que evidenciou a vulnerabilidade do continente em momentos de crise, como na Guerra na Ucrânia. [...] Países como Noruega se destacam pela autossuficiência energética baseada em hidrelétricas e na exportação de petróleo e gás. Outro exemplo é a França, que possui grande produção de energia nuclear [...].", 'O texto destaca a Noruega pela autossuficiência baseada em:',
    ['hidrelétricas e exportação de petróleo e gás', 'carvão e energia nuclear', 'importação de gás russo', 'energia solar apenas'], 11);
  addT('GE9-DIG', "Na Europa, muitos países apresentam alta dependência externa de energia [...]. A importação de gás natural da Rússia foi central [...], o que evidenciou a vulnerabilidade do continente em momentos de crise, como na Guerra na Ucrânia. [...] Países como Noruega se destacam pela autossuficiência energética baseada em hidrelétricas e na exportação de petróleo e gás. Outro exemplo é a França, que possui grande produção de energia nuclear [...].", 'Qual guerra evidenciou a vulnerabilidade europeia à importação de gás natural da Rússia?',
    ['a Guerra na Ucrânia', 'a Guerra Fria', 'a Guerra do Vietnã', 'a Primeira Guerra'], 11);
  addT('GE9-DIG', "Países como China e Índia possuem elevada produção de carvão mineral [...]. O principal destaque [da produção hidrelétrica] é a China [...], como a Usina de Três Gargantas, localizada no rio Yangtzé, considerada a maior do mundo em capacidade instalada.", 'Segundo o texto, China e Índia possuem elevada produção de:',
    ['carvão mineral', 'energia geotérmica', 'energia das marés', 'gás liquefeito'], 11);
  addT('GE9-DIG', "Países como China e Índia possuem elevada produção de carvão mineral [...]. O principal destaque [da produção hidrelétrica] é a China [...], como a Usina de Três Gargantas, localizada no rio Yangtzé, considerada a maior do mundo em capacidade instalada.", 'A Usina de Três Gargantas, a maior do mundo em capacidade instalada, está localizada no rio:',
    ['Yangtzé', 'Ganges', 'Mekong', 'Amarelo'], 11);
  addT('GE9-DIG', "A Austrália é um dos principais exportadores mundiais de carvão e gás natural liquefeito [...]. Já a Nova Zelândia apresenta alto grau de autossuficiência energética, com predominância de fontes renováveis, especialmente hidrelétrica e geotérmica.", 'Segundo o texto, a Austrália é um dos principais exportadores mundiais de:',
    ['carvão e gás natural liquefeito', 'petróleo e urânio', 'energia solar', 'energia geotérmica'], 11);
  addT('GE9-DIG', "A Austrália é um dos principais exportadores mundiais de carvão e gás natural liquefeito [...]. Já a Nova Zelândia apresenta alto grau de autossuficiência energética, com predominância de fontes renováveis, especialmente hidrelétrica e geotérmica.", 'A Nova Zelândia apresenta alto grau de autossuficiência energética, com predominância de fontes:',
    ['renováveis, como hidrelétrica e geotérmica', 'fósseis importadas', 'nucleares', 'a carvão'], 11);
})();
