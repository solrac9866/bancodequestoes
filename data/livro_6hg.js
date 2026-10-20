/* 6º ano – História e Geografia – Volume 4 (4º bimestre)
   Em cada questão a PRIMEIRA alternativa é a correta; o site embaralha na hora de gerar a prova. */

/* ===================== HISTÓRIA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'História', A = 6;
  B.hab.push(
    { id: 'HI6-TRA', ano: A, disc: D, cod: '', tit: 'Da Antiguidade à Idade Média: mulheres e povos germânicos',
      desc: 'Analisar a transição da Antiguidade para a Idade Média, o papel das mulheres em diferentes sociedades e o que fontes e vestígios (como o túmulo de Prittlewell) revelam sobre os povos germânicos.', aulas: 'Aulas 1 e 2' },
    { id: 'HI6-FRI', ano: A, disc: D, cod: '', tit: 'Reino Franco e a Igreja medieval',
      desc: 'Reconhecer as dinastias Merovíngia e Carolíngia, interpretar mapa, linhas do tempo e imagens históricas e compreender o poder da Igreja e o papel dos mosteiros na Idade Média.', aulas: 'Aulas 3 e 4' },
    { id: 'HI6-FEU', ano: A, disc: D, cod: '', tit: 'Trabalho, sociedade e feudalismo',
      desc: 'Compreender a hierarquia da sociedade feudal, as obrigações dos servos, as relações entre senhores e vassalos e interpretar fontes, charges e gráficos sobre a vida no feudo.', aulas: 'Aulas 5 e 6' },
    { id: 'HI6-COM', ano: A, disc: D, cod: '', tit: 'Comércio, renascimento urbano e crise do feudalismo',
      desc: 'Relacionar excedentes agrícolas, feiras, rotas comerciais, burgueses e burgos ao renascimento urbano e identificar os fatores da crise do sistema feudal nos séculos XIV e XV.', aulas: 'Aulas 7 e 12' },
    { id: 'HI6-ISL', ano: A, disc: D, cod: '', tit: 'Mundo árabe, islamismo e Império Otomano',
      desc: 'Interpretar linha do tempo e mapas sobre o nascimento do Islã, a expansão islâmica, Al-Andalus e a formação e expansão do Império Otomano.', aulas: 'Aulas 8 e 9' },
    { id: 'HI6-REL', ano: A, disc: D, cod: '', tit: 'Povo judeu e as Cruzadas',
      desc: 'Analisar a diáspora e a convivência e as perseguições vividas pelo povo judeu na Idade Média e interpretar o mapa e as motivações das Cruzadas.', aulas: 'Aulas 10 e 11' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length-1].texto = texto; };

  /* ---------- HI6-TRA ---------- */
  add('HI6-TRA', '6_hist_mulheres_linha', 'Na linha do tempo, na Grécia Antiga, as mulheres podiam herdar terras e administrar propriedades na cidade de:',
    ['Esparta', 'Atenas', 'Roma', 'Delfos'], 1);
  add('HI6-TRA', '6_hist_mulheres_linha', 'De acordo com a linha do tempo, no Império Romano do Ocidente as mulheres:',
    ['tinham maior autonomia, podendo herdar e administrar bens', 'eram proibidas de trabalhar fora de casa', 'não podiam realizar negócios', 'eram excluídas da herança'], 1);
  add('HI6-TRA', '6_hist_mulheres_linha', 'Na transição para a Idade Média (séculos V a X), a linha do tempo mostra que as mulheres nobres:',
    ['financiavam igrejas e tinham influência social', 'governavam como faraós', 'lutavam nas arenas de gladiadores', 'tinham ampla participação política'], 1);
  add('HI6-TRA', null, 'Sobre o papel das mulheres na transição da Antiguidade para a Idade Média, é correto afirmar que o processo foi:',
    ['gradual, com permanências e mudanças', 'uma ruptura imediata, com igualdade política', 'igual para todas as mulheres', 'sem nenhuma mudança'], 1);
  add('HI6-TRA', '6_hist_hatshepsut', 'Nas duas representações históricas de Hatshepsut, na da direita ela aparece como homem. Segundo o livro, essa escolha buscou:',
    ['reforçar sua autoridade como governante', 'mostrar que ela era sacerdotisa em Delfos', 'indicar sua origem humilde', 'registrar sua participação em arenas'], 1);
  add('HI6-TRA', '6_hist_pitia', 'A pintura em vaso do século V a.C. mostra a sacerdotisa Pítia aconselhando um homem no templo de Delfos. Segundo o livro, ela era:',
    ['uma líder espiritual, conselheira de reis e nobres', 'uma comerciante de mercado', 'uma gladiadora', 'uma escriba do faraó'], 1);
  add('HI6-TRA', '6_hist_pompeia', 'No afresco de Pompeia, a mulher segura um estilete e uma tábua de cera, e o homem, um rolo de papiro. Esses objetos simbolizam:',
    ['alfabetização e instrução', 'riqueza em ouro', 'poder militar', 'vida em convento'], 1);
  add('HI6-TRA', '6_hist_anicia', 'O manuscrito ilustrado de 512 d.C. foi feito para presentear Anicia Juliana (no centro da imagem), em agradecimento por ela ter:',
    ['financiado a construção de uma igreja em Constantinopla', 'comandado um exército', 'governado o Império Romano', 'escrito um livro sagrado'], 1);
  add('HI6-TRA', '6_hist_mapa_germanicos', 'No mapa dos povos germânicos em 510, qual povo ocupava a maior parte da Península Ibérica, com a cidade de Toledo?',
    ['Visigodos', 'Ostrogodos', 'Vândalos', 'Francos'], 2);
  add('HI6-TRA', null, 'Para os romanos, o termo “bárbaros”, usado para os povos germânicos, designava aqueles que:',
    ['não falavam latim nem seguiam os costumes romanos', 'viviam sempre em cidades', 'eram cristãos desde o início', 'não tinham cultura nem tradições'], 2);
  add('HI6-TRA', '6_hist_prittlewell', 'A ilustração mostra o ritual de organização da Tumba de Prittlewell, descoberta em 2003. Esse túmulo se destaca por ser:',
    ['o sepultamento cristão anglo-saxão mais antigo e intacto já encontrado na Grã-Bretanha', 'um templo romano', 'um palácio de Carlos Magno', 'um cemitério de camponeses'], 2);
  add('HI6-TRA', '6_hist_espada', 'A espada de ferro da imagem foi encontrada em um túmulo anglo-saxão. Segundo o livro, ser enterrado com armas simbolizava:',
    ['uma identidade guerreira e honra', 'riqueza em joias', 'conversão ao cristianismo', 'origem romana'], 2);
  add('HI6-TRA', '6_hist_tigela', 'A tigela de bronze da imagem, de possível origem celta, foi encontrada em um túmulo anglo-saxão. Isso reflete:',
    ['a interação entre diferentes grupos na Britânia pós-romana', 'o isolamento total dos anglo-saxões', 'o uso da tigela só em rituais cristãos', 'a produção local sem contato externo'], 2);
  add('HI6-TRA', '6_hist_banco', 'O banco de ferro dobrável da imagem, achado em um túmulo anglo-saxão, pode ter sido um “gifstol”, assento de presente. Isso indica que a pessoa enterrada:',
    ['tinha autoridade, pois um líder distribuía recompensas e tomava decisões sentado nele', 'era um camponês', 'era um escravizado', 'vivia isolado de outros povos'], 2);

  /* ---------- HI6-FRI ---------- */
  add('HI6-FRI', '6_hist_mapa_carolingio', 'Na legenda do mapa do Império Carolíngio, o símbolo marrom na cidade de Aachen indica a:',
    ['residência de Carlos Magno', 'marca fronteiriça', 'conquista de Carlos Magno', 'sede dos Estados da Igreja'], 3);
  add('HI6-FRI', '6_hist_mapa_carolingio', 'No mapa do Império Carolíngio, a cidade de Roma aparece dentro dos:',
    ['Estados da Igreja', 'Reinos islâmicos', 'Reinos britânicos', 'Eslavos do Norte'], 3);
  add('HI6-FRI', '6_hist_tempo_merov', 'Segundo a linha do tempo, quem unificou as tribos francas, fundou o Reino Franco e se converteu ao cristianismo?',
    ['Clóvis I', 'Carlos Magno', 'Pepino, o Breve', 'Carlos Martel'], 3);
  add('HI6-FRI', '6_hist_tempo_merov', 'Em 732, na Batalha de Poitiers (ou Tours), Carlos Martel:',
    ['derrotou os muçulmanos e limitou seu avanço na Europa Ocidental', 'foi coroado imperador', 'dividiu o Império Carolíngio', 'fundou a dinastia merovíngia'], 3);
  add('HI6-FRI', '6_hist_tempo_merov', 'Na linha do tempo, o ano de 751 marca o início da dinastia carolíngia, quando Pepino, o Breve:',
    ['depôs o último rei merovíngio', 'foi eleito rei da França', 'derrotou os vikings', 'converteu-se ao cristianismo'], 3);
  add('HI6-FRI', '6_hist_tempo_carol', 'De acordo com a linha do tempo, o Tratado de Verdun, de 843, resultou:',
    ['na divisão do Império Carolíngio entre três herdeiros', 'na coroação de Carlos Magno', 'na expulsão dos francos', 'no fim do cristianismo'], 3);
  add('HI6-FRI', '6_hist_batismo_clovis', 'A fonte representa o batismo de Clóvis. Segundo o resumo da aula, essa conversão ao cristianismo:',
    ['fortaleceu a aliança com a Igreja e ajudou a legitimar o reino', 'enfraqueceu o reino franco', 'foi proibida pelo papa', 'dividiu o reino entre os herdeiros'], 3);
  add('HI6-FRI', '6_hist_coroacao', 'A pintura mostra a coroação de Carlos Magno pelo Papa Leão III, em 800. Esse ato simboliza:',
    ['a renovação do ideal imperial no Ocidente e a união entre poder político e religioso', 'o fim do poder da Igreja', 'a queda do Império Carolíngio', 'a vitória sobre os bizantinos'], 3);
  add('HI6-FRI', '6_hist_martel', 'A legenda informa que a imagem de Carlos Martel dividindo o reino em 741 foi feita no século XIV. Por isso, ela:',
    ['foi produzida muitos séculos depois do fato representado', 'é um registro feito na época do fato', 'foi pintada por Carlos Martel', 'não representa nenhum fato histórico'], 4);
  add('HI6-FRI', '6_hist_igreja_piramide', 'Na pirâmide da estrutura da Igreja, quem fiscaliza os sacerdotes e administra os bens da igreja de uma região?',
    ['Os bispos e arcebispos', 'Os cardeais', 'Os monges', 'O papa'], 4);
  add('HI6-FRI', '6_hist_igreja_funcoes', 'Entre as funções da Igreja medieval apresentadas na figura estão:',
    ['cobrar dízimos e fornecer assistência de saúde', 'comandar exércitos reais', 'fixar impostos do rei', 'produzir armas'], 4);
  add('HI6-FRI', '6_hist_mosteiro', 'No infográfico do mosteiro, os scriptoria eram os espaços em que os monges:',
    ['copiavam livros antigos, preservando obras da Antiguidade', 'recebiam doentes e idosos', 'guardavam alimentos', 'enterravam seus mortos'], 4);
  add('HI6-FRI', '6_hist_mosteiro', 'Segundo o infográfico, o claustro era o pátio central dos monges, onde se seguia a regra de:',
    ['“orar e trabalhar”', '“lutar e conquistar”', '“comprar e vender”', '“plantar e colher”'], 4);
  add('HI6-FRI', '6_hist_marcos_igreja', 'Segundo os marcos da Igreja Católica, o Tribunal da Inquisição foi instaurado a mando do papa Gregório IX para:',
    ['combater heresias e vigiar os fiéis', 'organizar as Cruzadas', 'construir a abadia de Cluny', 'coroar reis francos'], 4);

  /* ---------- HI6-FEU ---------- */
  add('HI6-FEU', '6_hist_piramide_social', 'Na pirâmide social da sociedade feudal, quem ocupa o topo e quem ocupa a base são, respectivamente:',
    ['o clero e os camponeses/servos', 'a nobreza e o clero', 'os camponeses/servos e a nobreza', 'a burguesia e a nobreza'], 5);
  add('HI6-FEU', '6_hist_piramide_social', 'A pirâmide social ajudava a justificar as divisões entre os que deveriam rezar, proteger ou trabalhar. Na imagem, quem deveria trabalhar?',
    ['os camponeses e servos', 'a nobreza', 'o clero', 'os reis'], 5);
  add('HI6-FEU', '6_hist_oficios_a', 'Na Fonte II, iluminura dos séculos XIV-XV, a cena mostra pessoas trabalhando com um forno e pães. O ofício retratado é o de:',
    ['padeiro', 'ferreiro', 'cavaleiro', 'tecelão'], 5);
  add('HI6-FEU', '6_hist_oficios_b', 'Na Fonte III, a iluminura mostra um homem de armadura, com escudo, ao lado de um cavalo. Esse personagem representa o:',
    ['cavaleiro', 'padeiro', 'camponês', 'bispo'], 5);
  add('HI6-FEU', '6_hist_oficios_b', 'Na Fonte IV, as três cenas mostram pessoas realizando tarefas agrícolas. O ofício retratado é o de:',
    ['camponês', 'cavaleiro', 'ourives', 'mercador'], 5);
  add('HI6-FEU', '6_hist_domesday', 'Segundo o trecho do Livro de Apontamentos, quem era convocado para uma campanha militar e não comparecia:',
    ['perdia toda a sua terra para o Rei', 'recebia mais terras', 'virava bispo', 'pagava dízimo ao papa'], 6);
  add('HI6-FEU', '6_hist_domesday', 'De acordo com o texto, o Livro de Apontamentos foi compilado em 1086 e 1087 a pedido de:',
    ['William, o Conquistador', 'Carlos Magno', 'Clóvis I', 'Eduardo III'], 6);
  add('HI6-FEU', '6_hist_domesday', 'No trecho, se o substituto de alguém não comparecesse à campanha, seu senhor só ficaria liberado:',
    ['com o pagamento de 50 shillings', 'perdendo todas as terras', 'indo à guerra pessoalmente', 'jurando fidelidade ao papa'], 6);
  add('HI6-FEU', '6_hist_graficos_pop', 'No gráfico “População rural vs. população urbana”, qual era a porcentagem da população rural?',
    ['90%', '75%', '25%', '10%'], 6);
  add('HI6-FEU', '6_hist_graficos_pop', 'Segundo o gráfico “Proporção de servos”, os servos representavam qual parte da população?',
    ['75%', '25%', '28,6%', '10%'], 6);
  add('HI6-FEU', '6_hist_charge_servos', 'Na charge, a obrigação chamada “corveia” consistia em o servo:',
    ['trabalhar para o senhor alguns dias da semana', 'entregar parte de sua produção', 'pagar pelo uso do forno', 'pagar o dízimo à Igreja'], 6);
  add('HI6-FEU', '6_hist_charge_servos', 'Na charge, as “banalidades” são pagamentos feitos pelo servo pelo uso:',
    ['do forno e do moinho', 'das armas do senhor', 'da igreja', 'do castelo do rei'], 6);
  add('HI6-FEU', '6_hist_charge_servos', 'Na charge, o “dízimo” é a obrigação de pagar:',
    ['à Igreja', 'ao rei da França', 'aos mercadores', 'aos cavaleiros'], 6);

  /* ---------- HI6-COM ---------- */
  add('HI6-COM', '6_hist_mapa_comercio', 'Na legenda do mapa do comércio europeu, as linhas roxas indicam as:',
    ['principais rotas marítimas', 'principais rotas terrestres', 'outras rotas terrestres', 'rotas de caravanas'], 7);
  add('HI6-COM', '6_hist_mapa_comercio', 'Na legenda do mapa do comércio europeu, os círculos vazios indicam:',
    ['feiras', 'principais centros do comércio mediterrâneo', 'importantes cidades comerciais', 'a região de Champagne'], 7);
  add('HI6-COM', '6_hist_mapa_rotas1346', 'Na legenda do mapa de 1346, os círculos vermelhos indicam cidades com população de:',
    ['50 000 a 125 000 habitantes', '23 000 a 49 000 habitantes', '15 000 a 22 000 habitantes', 'menos de 15 000 habitantes'], 7);
  add('HI6-COM', '6_hist_mapa_rotas1346', 'O mapa mostra rotas ligando a Europa a regiões da Ásia e da África. Isso evidencia:',
    ['a integração comercial entre regiões diferentes', 'o isolamento das cidades medievais', 'o fim do comércio no Mediterrâneo', 'o domínio exclusivo da agricultura'], 7);
  addT('HI6-COM', '“Lembre-se muito bem de que, se você for cordial com os funcionários da alfândega, e se, discretamente, [lhes] der um pouquinho de algo ou algum dinheiro, eles também irão lhe devolver a mesma cortesia e os produtos que você trouxer mais tarde serão taxados abaixo de seu valor real.” (Francesco Pegoletti, comerciante de Florença, séc. XV)', 'Segundo o comerciante, tratar bem os funcionários da alfândega faria com que os produtos fossem:',
    ['taxados abaixo de seu valor real', 'confiscados', 'taxados acima do valor real', 'liberados sem nenhum pagamento'], 7);
  addT('HI6-COM', '“Lembre-se muito bem de que, se você for cordial com os funcionários da alfândega, e se, discretamente, [lhes] der um pouquinho de algo ou algum dinheiro, eles também irão lhe devolver a mesma cortesia e os produtos que você trouxer mais tarde serão taxados abaixo de seu valor real.” (Francesco Pegoletti, comerciante de Florença, séc. XV)', 'O trecho de Pegoletti mostra que, no comércio medieval, a cobrança de impostos podia ser influenciada por:',
    ['pequenos presentes ou dinheiro dados discretamente aos funcionários', 'ordens do papa', 'decisões das guildas', 'sorteios públicos'], 7);
  add('HI6-COM', '6_hist_renasc_urbano', 'No esquema, o renascimento comercial está ligado aos excedentes agrícolas gerados por novas técnicas, como:',
    ['o arado de ferro e a rotação trienal', 'a pólvora', 'o relógio mecânico', 'a imprensa'], 7);
  add('HI6-COM', '6_hist_renasc_urbano', 'Segundo o esquema, os burgos eram:',
    ['pequenas cidades fortificadas no final da Idade Média', 'grupos de mosteiros', 'castelos de reis', 'feiras anuais'], 7);
  add('HI6-COM', '6_hist_renasc_urbano', 'De acordo com o esquema, o renascimento urbano levou ao enfraquecimento gradual:',
    ['das relações servis', 'do comércio', 'das cidades', 'das feiras'], 7);
  add('HI6-COM', '6_hist_crise_fatores', 'Segundo o esquema, a Grande Fome (1315-1317) foi causada pelo clima frio e pelo:',
    ['esgotamento do solo', 'excesso de comércio', 'crescimento das cidades', 'fim das guerras'], 12);
  add('HI6-COM', '6_hist_crise_fatores', 'De acordo com o esquema, a peste bubônica (1347-1351) se espalhou rapidamente por:',
    ['rotas comerciais e más condições de higiene', 'ordens do rei', 'rotas de peregrinação apenas', 'ação dos mosteiros'], 12);
  add('HI6-COM', '6_hist_crise_fatores', 'A Guerra dos Cem Anos (1337-1453), citada no esquema, foi uma disputa entre:',
    ['França e Inglaterra', 'Roma e Cartago', 'cristãos e vikings', 'Veneza e Gênova'], 12);
  add('HI6-COM', '6_hist_lei1349', 'A fonte mostra uma versão de 1351 da lei de Eduardo III. Essa medida buscava lidar com:',
    ['a escassez de trabalhadores após a peste', 'o excesso de trabalhadores', 'o fim das guerras', 'a alta de salários dos nobres'], 12);
  addT('HI6-COM', '“Como uma grande parte do povo, especialmente trabalhadores e servos, morreu recentemente de peste, muitos, vendo a necessidade de mestres e a grande escassez de servos, não servirão a menos que recebam salários excessivos, [...]” (Ordenações de Trabalho, Inglaterra, 1349)', 'Segundo o trecho, muitos não servirão a menos que recebam salários excessivos porque:',
    ['muitos trabalhadores e servos morreram de peste', 'a terra estava abandonada', 'o rei dobrou os impostos', 'os senhores abandonaram os feudos'], 12);

  /* ---------- HI6-ISL ---------- */
  add('HI6-ISL', '6_hist_tempo_islamico', 'Segundo a linha do tempo, a Hégira (622) foi:',
    ['a migração de Maomé de Meca para Medina', 'a queda de Granada', 'a conquista do Egito', 'a Batalha de Yarmouk'], 8);
  add('HI6-ISL', '6_hist_tempo_islamico', 'De acordo com a linha do tempo, a conquista da Península Ibérica, em 711, levou à formação de:',
    ['Al-Andalus', 'Império Otomano', 'Califado Abássida', 'Reino Franco'], 8);
  add('HI6-ISL', '6_hist_tempo_islamico', 'Segundo a linha do tempo, em 1492 a queda de Granada marcou o fim:',
    ['da presença islâmica na Península Ibérica', 'do Califado Omíada', 'das Cruzadas', 'do Império Otomano'], 8);
  add('HI6-ISL', '6_hist_mapa_islamico', 'No mapa da expansão do mundo islâmico, a área até a morte de Maomé (622-632) corresponde principalmente à:',
    ['Península Arábica', 'Península Ibérica', 'Península Itálica', 'Anatólia'], 8);
  add('HI6-ISL', '6_hist_mapa_islamico', 'O mapa mostra que, durante o Califado Omíada (661-750), a expansão alcançou também:',
    ['o norte da África e a Península Ibérica', 'as Américas', 'a Rússia', 'a Inglaterra'], 8);
  add('HI6-ISL', '6_hist_mapa_islamico', 'A nota do mapa da expansão islâmica informa que as fronteiras desenhadas:',
    ['são as dos países atuais, e não as da época', 'são as da época dos califados', 'eram as do Império Romano', 'foram traçadas por Maomé'], 8);
  add('HI6-ISL', '6_hist_mapa_otomano', 'Segundo a legenda do mapa, a expansão do Império Otomano entre 1451 e 1481 ocorreu sob o comando de:',
    ['Mehmed II', 'Selim', 'Osmã I', 'Carlos Magno'], 9);
  add('HI6-ISL', '6_hist_mapa_otomano', 'O mapa mostra o Império Otomano em 1683 ocupando terras na Europa, na Ásia e na África. Segundo o texto, isso permitiu controlar:',
    ['importantes rotas comerciais', 'apenas áreas agrícolas', 'somente regiões desérticas', 'territórios da América'], 9);
  add('HI6-ISL', '6_hist_mapa_otomano2', 'O mapa “Expansão do Império Otomano” mostra que o império se expandiu a partir da Anatólia em direção à:',
    ['Europa oriental, ao norte da África e ao Oriente Próximo', 'América do Sul', 'Escandinávia', 'Índia e China'], 9);
  add('HI6-ISL', null, 'Em Medina, Maomé passou a exercer dois papéis: o de líder:',
    ['religioso e político', 'militar e comercial', 'científico e artístico', 'rural e urbano'], 8);
  add('HI6-ISL', null, 'No Império Otomano, o sistema millets dava certa autonomia às minorias religiosas (cristãos e judeus), desde que elas:',
    ['pagassem um imposto chamado jizya', 'se convertessem ao islã', 'servissem ao exército', 'deixassem o império'], 9);
  add('HI6-ISL', null, 'Os califas, após a morte de Maomé, eram considerados:',
    ['sucessores do profeta', 'comerciantes de Meca', 'reis cristãos', 'sacerdotes de Delfos'], 8);

  /* ---------- HI6-REL ---------- */
  add('HI6-REL', '6_hist_mapa_diaspora', 'No mapa da diáspora judaica, as setas vermelhas indicam, segundo a legenda:',
    ['a expulsão de judeus entre os séculos XIII e XV', 'migrações para o Brasil', 'a fundação do Estado de Israel', 'colônias judaicas pós-1150'], 10);
  add('HI6-REL', '6_hist_mapa_diaspora', 'A legenda do mapa da diáspora indica migração de judeus para os Estados Unidos, a Argentina e o Brasil entre:',
    ['1914 e 1948', '66 e 1500', '1290 e 1492', '1095 e 1291'], 10);
  add('HI6-REL', '6_hist_mapa_diaspora', 'Segundo o texto, a diáspora judaica na Europa foi intensificada após a destruição:',
    ['do Segundo Templo de Jerusalém, em 70 d.C.', 'de Granada, em 1492', 'de Constantinopla, em 1453', 'de Bagdá, no século XIII'], 10);
  add('HI6-REL', '6_hist_tempo_judeu_a', 'De acordo com a linha do tempo, em 586 a.C. ocorreu:',
    ['a destruição do Primeiro Templo pelos babilônicos e a primeira dispersão do povo judeu', 'a formação dos reinos de Israel e Judá', 'a destruição do Segundo Templo', 'a expulsão dos judeus da Inglaterra'], 10);
  add('HI6-REL', '6_hist_tempo_judeu_a', 'Na linha do tempo, os hebreus são definidos como:',
    ['povos nômades que deram origem à tradição judaica', 'comunidades medievais da Europa', 'habitantes de Al-Andalus', 'soldados das Cruzadas'], 10);
  add('HI6-REL', '6_hist_tempo_judeu_b', 'Segundo a linha do tempo, em Al-Andalus, entre os séculos VIII e XI, houve:',
    ['convivência e intercâmbio cultural entre judeus, muçulmanos e cristãos', 'perseguição generalizada aos judeus', 'ausência de contato entre os grupos', 'domínio exclusivo dos cristãos'], 10);
  add('HI6-REL', '6_hist_tempo_judeu_b', 'De acordo com a linha do tempo, em 1290 ocorreu:',
    ['a expulsão dos judeus da Inglaterra', 'a destruição do Segundo Templo', 'a primeira Cruzada', 'a Hégira'], 10);
  add('HI6-REL', '6_hist_tempo_judeu_b', 'Durante a peste bubônica (1347-1351), segundo a linha do tempo, os judeus foram:',
    ['injustamente acusados de espalhar a doença e massacrados', 'elogiados por seus remédios', 'expulsos de Al-Andalus', 'convertidos em massa'], 10);
  add('HI6-REL', '6_hist_xilogravuras', 'Segundo a legenda, na xilogravura da esquerda aparece:',
    ['um nobre negociando com um cambista judeu', 'um médico judeu em visita', 'um ataque a uma sinagoga', 'uma batalha de cruzados'], 10);
  add('HI6-REL', '6_hist_xilogravuras', 'A cena da direita representa um pogrom, isto é, um:',
    ['ataque a sinagogas e comunidades judaicas', 'mercado de rua', 'ritual de batismo', 'tribunal de comerciantes'], 10);
  add('HI6-REL', '6_hist_xilogravuras', 'Ao centro da imagem, a xilogravura mostra:',
    ['um médico judeu fazendo uma visita domiciliar', 'um cambista emprestando dinheiro', 'um ataque a uma sinagoga', 'um escriba copiando livros'], 10);
  add('HI6-REL', '6_hist_mapa_cruzadas', 'O mapa das Cruzadas mostra que as rotas tinham como destino final a cidade de:',
    ['Jerusalém', 'Roma', 'Paris', 'Londres'], 11);
  add('HI6-REL', '6_hist_mapa_cruzadas', 'Na legenda do mapa, as setas amarelas representam:',
    ['a Quinta, a Sexta, a Sétima e a Oitava Cruzadas, todas fracassadas', 'a Primeira Cruzada', 'a Cruzada das Crianças', 'a Terceira Cruzada'], 11);
  add('HI6-REL', '6_hist_mapa_cruzadas', 'Pelo mapa, as Cruzadas partiam da Europa em direção ao:',
    ['Oriente Médio, no litoral do Mediterrâneo', 'continente americano', 'norte da Rússia', 'sul da África'], 11);
})();

/* ===================== GEOGRAFIA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Geografia', A = 6;
  B.hab.push(
    { id: 'GE6-LIT', ano: A, disc: D, cod: '', tit: 'Litosfera, placas tectônicas e agentes do relevo',
      desc: 'Reconhecer as camadas da Terra, interpretar o mapa das placas tectônicas e diferenciar agentes internos e externos, intemperismo, erosão e sedimentação.', aulas: 'Aulas 1 e 2' },
    { id: 'GE6-REL', ano: A, disc: D, cod: '', tit: 'Formas de relevo, relevo brasileiro e ação humana',
      desc: 'Identificar as formas de relevo terrestres e oceânicas, interpretar mapas da estrutura geológica e do relevo do Brasil e compreender os riscos de deslizamentos e sua prevenção.', aulas: 'Aulas 3 a 6' },
    { id: 'GE6-SOL', ano: A, disc: D, cod: '', tit: 'Solo: composição, formação e usos',
      desc: 'Compreender a composição e a formação do solo, interpretar perfis, mapas e gráficos de classes, uso e cobertura do solo no Brasil e em São Paulo.', aulas: 'Aulas 7 a 9' },
    { id: 'GE6-BIO', ano: A, disc: D, cod: '', tit: 'Biosfera, ecorregiões e biomas do Brasil',
      desc: 'Interpretar mapas de biomas e ecorregiões e reconhecer as características da Amazônia, Caatinga, Cerrado, Pantanal, Mata Atlântica e Pampa.', aulas: 'Aulas 10 a 14' },
    { id: 'GE6-AME', ano: A, disc: D, cod: '', tit: 'Ameaças e impactos socioambientais nos biomas',
      desc: 'Interpretar gráficos, mapas e charges sobre desmatamento, queimadas, urbanização e biopirataria nos biomas brasileiros.', aulas: 'Aula 15' },
    { id: 'GE6-BDV', ano: A, disc: D, cod: '', tit: 'Biodiversidade, conservação e terrário',
      desc: 'Interpretar mapas de biodiversidade e de hotspots, reconhecer espécies ameaçadas e compreender o terrário como miniecossistema.', aulas: 'Aulas 16 a 18' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });

  /* ---------- GE6-LIT ---------- */
  add('GE6-LIT', '6_geo_camadas', 'Na figura das camadas da Terra, a camada mais externa e mais fina, onde vivemos, é a:',
    ['crosta', 'manto inferior', 'núcleo externo', 'núcleo interno'], 1);
  add('GE6-LIT', '6_geo_camadas', 'Na figura, a crosta e o manto sólido superior formam a:',
    ['litosfera', 'hidrosfera', 'atmosfera', 'biosfera'], 1);
  add('GE6-LIT', '6_geo_camadas', 'Segundo a aula, o núcleo externo e o núcleo interno da Terra são, respectivamente:',
    ['líquido e sólido', 'sólido e líquido', 'ambos sólidos', 'ambos gasosos'], 1);
  add('GE6-LIT', '6_geo_placas', 'No mapa das placas tectônicas, o Brasil está localizado sobre a placa:',
    ['Sul-Americana', 'de Nazca', 'Africana', 'do Pacífico'], 1);
  add('GE6-LIT', '6_geo_placas', 'De acordo com a legenda do mapa, as setas vermelhas indicam:',
    ['a direção dos movimentos das placas', 'os limites das placas', 'as falhas principais', 'os terremotos recentes'], 1);
  add('GE6-LIT', '6_geo_placas', 'Pelo mapa, o território brasileiro está situado:',
    ['no centro da Placa Sul-Americana, longe de seus limites', 'no limite entre duas placas', 'sobre a Placa do Pacífico', 'sobre a Placa Africana'], 1);
  add('GE6-LIT', '6_geo_processos', 'Na figura, o desgaste das rochas causado pela variação de temperatura é chamado de:',
    ['intemperismo físico', 'sedimentação', 'erosão pluvial', 'vulcanismo'], 2);
  add('GE6-LIT', '6_geo_processos', 'A figura mostra que a água das chuvas transporta fragmentos de rocha de um lugar mais alto para um mais baixo. Esse processo é a:',
    ['erosão pluvial', 'sedimentação', 'intemperismo químico', 'deriva continental'], 2);
  add('GE6-LIT', '6_geo_processos', 'Segundo a figura, a deposição, nas áreas mais baixas, dos sedimentos deslocados pela erosão chama-se:',
    ['sedimentação', 'intemperismo', 'tectonismo', 'erosão eólica'], 2);
  add('GE6-LIT', '6_geo_interp_fisico', 'A foto mostra uma rocha com rachaduras e fissuras. No intemperismo físico, a rocha:',
    ['se parte em pedaços menores, sem mudar sua composição química', 'se dissolve pela água ácida', 'é desgastada por raízes de plantas', 'se transforma em solo orgânico'], 2);
  add('GE6-LIT', '6_geo_interp_quimico', 'A foto mostra uma caverna com estalactites e estalagmites, típica do relevo cárstico. Ele se forma por:',
    ['intemperismo químico, principalmente em rochas calcárias', 'erosão glacial', 'ação do vento', 'movimento das placas'], 2);
  add('GE6-LIT', '6_geo_tipos_erosao', 'Na figura dos tipos de erosão, a erosão causada pelas ondas do mar é a:',
    ['marinha', 'glacial', 'eólica', 'fluvial'], 2);
  add('GE6-LIT', '6_geo_dunas', 'A imagem mostra dunas de areia moldadas pelo vento. O tipo de erosão causada pelo vento é a:',
    ['eólica', 'glacial', 'fluvial', 'pluvial'], 2);

  /* ---------- GE6-REL ---------- */
  add('GE6-REL', '6_geo_formas_relevo', 'Na figura das principais formas de relevo, a área rebaixada que está abaixo do nível do mar é a:',
    ['depressão absoluta', 'depressão relativa', 'planalto', 'planície'], 3);
  add('GE6-REL', '6_geo_formas_relevo', 'Na figura, a forma de relevo plana, formada principalmente por acúmulo de sedimentos e próxima ao nível do mar, é a:',
    ['planície', 'montanha', 'planalto', 'depressão absoluta'], 3);
  add('GE6-REL', '6_geo_formas_relevo', 'Na figura, a grande elevação com altas altitudes e encostas íngremes é a:',
    ['montanha', 'planície', 'depressão relativa', 'nível do mar'], 3);
  add('GE6-REL', '6_geo_relevo_oceanico', 'Na figura do relevo oceânico, a extensão submersa dos continentes é a:',
    ['plataforma continental', 'fossa abissal', 'dorsal meso-oceânica', 'bacia oceânica'], 3);
  add('GE6-REL', '6_geo_relevo_oceanico', 'Na figura, as áreas mais profundas dos oceanos são as:',
    ['fossas abissais', 'plataformas continentais', 'ilhas', 'taludes continentais'], 3);
  add('GE6-REL', '6_geo_estrutura_geol', 'No mapa da estrutura geológica do Brasil, a cor amarela indica o predomínio de:',
    ['rochas sedimentares', 'rochas cristalinas', 'rochas vulcânicas', 'gelo e neve'], 4);
  add('GE6-REL', '6_geo_estrutura_geol', 'Segundo a aula, as bacias sedimentares ocupam cerca de qual parte do território brasileiro?',
    ['64%', '36%', '10%', '90%'], 4);
  add('GE6-REL', '6_geo_estrutura_geol', 'Nos escudos cristalinos, mais antigos e resistentes, é comum encontrar minerais metálicos como:',
    ['ferro e ouro', 'petróleo e gás natural', 'carvão mineral', 'areia e argila'], 4);
  add('GE6-REL', '6_geo_relevo_ross', 'No mapa do relevo brasileiro, segundo a classificação de Jurandyr Ross, a cor verde representa as:',
    ['planícies', 'depressões', 'planaltos', 'montanhas'], 4);
  add('GE6-REL', '6_geo_relevo_ross', 'Segundo a aula, no Brasil existem apenas depressões:',
    ['relativas', 'absolutas', 'oceânicas', 'vulcânicas'], 4);
  add('GE6-REL', '6_geo_campos_jordao', 'A forma de relevo mostrada na foto de Campos do Jordão (SP), com elevações alongadas e encostas inclinadas, é uma:',
    ['serra', 'planície', 'chapada', 'falésia'], 5);
  add('GE6-REL', '6_geo_chapada', 'A foto da Chapada Diamantina mostra uma forma de relevo de topo aplainado e bordas abruptas, chamada:',
    ['chapada', 'planície', 'depressão', 'dorsal'], 5);
  add('GE6-REL', '6_geo_prevencao', 'Na figura sobre prevenção de deslizamentos, a Defesa Civil emitir avisos de chuvas intensas é a ação de:',
    ['alertas', 'fiscalização', 'conscientização', 'moradias'], 6);
  add('GE6-REL', '6_geo_prevencao', 'Segundo a figura, o poder público deve fiscalizar construções e monitorar áreas de risco, como:',
    ['encostas desmatadas', 'praias', 'planícies férteis', 'áreas industriais'], 6);

  /* ---------- GE6-SOL ---------- */
  add('GE6-SOL', '6_geo_composicao_solo', 'No gráfico de composição do solo, o componente com maior porcentagem (46%) é:',
    ['as partículas minerais', 'o ar', 'a água', 'a matéria orgânica'], 7);
  add('GE6-SOL', '6_geo_composicao_solo', 'No gráfico, o componente com menor porcentagem (4%) é a:',
    ['matéria orgânica', 'água', 'partícula mineral', 'rocha matriz'], 7);
  add('GE6-SOL', '6_geo_composicao_solo', 'No exemplo do gráfico, água e ar juntos correspondem a:',
    ['50% do solo', '25% do solo', '46% do solo', '4% do solo'], 7);
  add('GE6-SOL', '6_geo_solo_foto', 'A foto mostra o solo de uma fazenda. Segundo a aula, o solo é formado pela decomposição das rochas e pelo acúmulo de:',
    ['matéria orgânica', 'sal', 'gelo', 'areia do mar'], 7);
  add('GE6-SOL', '6_geo_horizontes', 'A figura mostra que os horizontes do solo se formam pela ação do:',
    ['intemperismo sobre a rocha matriz ao longo do tempo geológico', 'vento sobre o gelo', 'vulcanismo no fundo do mar', 'ser humano em poucos dias'], 8);
  add('GE6-SOL', '6_geo_horizontes', 'Na figura, o horizonte O é o:',
    ['orgânico e superficial, rico em restos orgânicos', 'formado só por rocha matriz', 'que acumula ferro e argila', 'mais profundo do perfil'], 8);
  add('GE6-SOL', '6_geo_perfil_solo', 'No perfil do solo, qual horizonte apresenta nutrientes trazidos da superfície pela água?',
    ['B, o subsolo', 'O, o húmus', 'A, o solo superficial', 'C, a rocha fragmentada'], 8);
  add('GE6-SOL', '6_geo_solos_sp', 'No mapa de tipos de solo de São Paulo, a cor preta indica:',
    ['área urbana', 'corpos d’água', 'latossolos', 'argissolos'], 8);
  add('GE6-SOL', '6_geo_uso_brasil', 'O mapa mostra a cobertura e o uso da terra no Brasil em 2018. A cobertura do solo corresponde:',
    ['ao que está sobre a superfície, como florestas e áreas construídas', 'à forma como as pessoas usam a terra', 'à idade do solo', 'à quantidade de chuva'], 9);
  add('GE6-SOL', '6_geo_uso_pizza', 'No gráfico “Atribuição, ocupação e uso das terras”, o uso agropecuário ocupa cerca de:',
    ['31,3% do território', '65,6% do território', '1,1% do território', '2,2% do território'], 9);
  add('GE6-SOL', '6_geo_uso_pizza', 'Segundo o gráfico, no uso agropecuário a área maior é a de:',
    ['pastagens (19,4%)', 'lavouras (10,8%)', 'silvicultura (1,1%)', 'hidrografia (2,2%)'], 9);
  add('GE6-SOL', '6_geo_sp_1990', 'Na legenda do mapa de uso e cobertura do solo de São Paulo, a cor vermelha indica:',
    ['área urbanizada', 'vegetação natural', 'pastagem', 'rio, lago e oceano'], 9);
  add('GE6-SOL', '6_geo_sp_2022', 'Comparando os mapas de 1990 e 2022 do estado de São Paulo, as áreas urbanizadas (em vermelho):',
    ['aumentaram', 'diminuíram', 'desapareceram', 'não mudaram'], 9);
  add('GE6-SOL', '6_geo_graf_sp_rj', 'No gráfico, a área de pastagem em São Paulo passou de 41%, em 1985, para:',
    ['15%, em 2024', '33%, em 2024', '39%, em 2024', '22%, em 2024'], 9);

  /* ---------- GE6-BIO ---------- */
  add('GE6-BIO', '6_geo_biomas_brasil', 'No mapa dos biomas do Brasil, o bioma que ocupa a maior parte da região Norte é:',
    ['a Amazônia', 'a Caatinga', 'o Pampa', 'o Pantanal'], 10);
  add('GE6-BIO', '6_geo_biomas_brasil', 'No mapa, o bioma que aparece apenas no Rio Grande do Sul é:',
    ['o Pampa', 'a Mata Atlântica', 'o Cerrado', 'a Caatinga'], 10);
  add('GE6-BIO', '6_geo_biomas_brasil', 'O bioma exclusivamente brasileiro, que predomina no Nordeste e aparece em amarelo no mapa, é:',
    ['a Caatinga', 'a Amazônia', 'o Pantanal', 'o Pampa'], 10);
  add('GE6-BIO', '6_geo_biomas_sp', 'No mapa do estado de São Paulo, a maior parte do território é ocupada pelo bioma:',
    ['Mata Atlântica', 'Cerrado', 'Pampa', 'Caatinga'], 10);
  add('GE6-BIO', '6_geo_biomas_sp', 'No mapa de São Paulo, a capital, indicada com uma estrela, está situada no bioma:',
    ['Mata Atlântica', 'Cerrado', 'Amazônia', 'Pantanal'], 10);
  add('GE6-BIO', '6_geo_ecorregioes', 'No mapa das ecorregiões terrestres, a ecorregião de vegetação baixa, com musgos e liquens e solo congelado (permafrost), é a:',
    ['tundra', 'floresta tropical', 'savana tropical', 'manguezal'], 11);
  add('GE6-BIO', '6_geo_amazonia', 'O bioma da foto é o maior do Brasil. Segundo o IBGE, ele ocupa cerca de:',
    ['49% do território nacional', '10% do território nacional', '2% do território nacional', '15% do território nacional'], 12);
  add('GE6-BIO', '6_geo_amazonia', 'Na Amazônia, as matas que alagam apenas em determinados períodos são chamadas de mata de:',
    ['várzea', 'igapó', 'terra firme', 'restinga'], 12);
  add('GE6-BIO', '6_geo_caatinga', 'As fotos mostram a Caatinga em dois momentos. A mudança na paisagem ocorre porque a vegetação xerófila:',
    ['resiste à estiagem e volta a ficar verde no período chuvoso', 'fica verde o ano todo', 'não tem relação com a chuva', 'é formada por árvores gigantes'], 12);
  add('GE6-BIO', '6_geo_caatinga', 'Muitos rios da Caatinga são temporários porque:',
    ['a chuva infiltra pouco e a água evapora rapidamente', 'o clima é frio e úmido', 'o solo é muito profundo', 'chove o ano todo'], 12);
  add('GE6-BIO', '6_geo_cerrado', 'A foto da Chapada dos Guimarães mostra um trecho do Cerrado. A vegetação desse bioma tem:',
    ['árvores baixas, troncos retorcidos e raízes extensas', 'árvores altas e sempre verdes', 'apenas cactos', 'musgos e liquens'], 13);
  add('GE6-BIO', '6_geo_pantanal', 'O bioma da foto, marcado pela alternância entre cheias e secas, é o Pantanal, a maior:',
    ['planície alagável do mundo', 'floresta tropical do mundo', 'cordilheira do mundo', 'savana seca do mundo'], 13);
  add('GE6-BIO', '6_geo_mata_atl', 'A foto mostra Morretes (PR), no bioma Mata Atlântica. Originalmente, esse bioma ocupava cerca de:',
    ['15% do território brasileiro', '49% do território brasileiro', '2% do território brasileiro', '10% do território brasileiro'], 14);
  add('GE6-BIO', '6_geo_pampa', 'A foto mostra um rebanho no Pampa. A paisagem desse bioma tem campos de gramíneas e relevo de:',
    ['coxilhas, suaves ondulações', 'serras íngremes', 'chapadas altas', 'dunas'], 14);

  /* ---------- GE6-AME ---------- */
  add('GE6-AME', '6_geo_desmat_graf', 'No gráfico da evolução da área de desmatamento, o ano de maior área desmatada foi:',
    ['2022', '2019', '2021', '2025'], 15);
  add('GE6-AME', '6_geo_desmat_graf', 'No gráfico, o ano de menor área desmatada entre 2019 e 2025 foi:',
    ['2025', '2019', '2022', '2023'], 15);
  add('GE6-AME', '6_geo_desmat_graf', 'Segundo o gráfico, entre 2022 e 2025 a área de desmatamento:',
    ['diminuiu a cada ano', 'aumentou a cada ano', 'permaneceu igual', 'dobrou'], 15);
  add('GE6-AME', '6_geo_queimadas', 'O mapa da área queimada acumulada (1985-2023) mostra maior concentração de áreas queimadas:',
    ['em estados do interior, como Mato Grosso e Tocantins', 'no Rio Grande do Sul e em Santa Catarina', 'no litoral do Nordeste', 'em Sergipe e Alagoas'], 15);
  add('GE6-AME', '6_geo_queimadas', 'Segundo o texto da aula, as queimadas frequentes prejudicam a saúde humana principalmente por:',
    ['piorar a qualidade do ar', 'aumentar a chuva', 'reduzir a temperatura', 'melhorar o solo'], 15);
  add('GE6-AME', '6_geo_urbaniz_graf', 'No gráfico, o bioma com a maior taxa de crescimento anual da área urbanizada é:',
    ['a Caatinga (3,9% ao ano)', 'a Mata Atlântica (3% ao ano)', 'o Cerrado (3,2% ao ano)', 'o Pampa (1,7% ao ano)'], 15);
  add('GE6-AME', '6_geo_urbaniz_graf', 'No gráfico, o bioma com a menor taxa de crescimento anual da área urbanizada é:',
    ['o Pantanal (1,1% ao ano)', 'o Pampa (1,7% ao ano)', 'a Amazônia (3% ao ano)', 'a Caatinga (3,9% ao ano)'], 15);
  add('GE6-AME', '6_geo_urbaniz_graf', 'No gráfico, a faixa que representa a maior área urbanizada é a do bioma:',
    ['Mata Atlântica', 'Pantanal', 'Pampa', 'Amazônia'], 15);
  add('GE6-AME', '6_geo_charge_soja', 'A charge informa que o Pampa gaúcho perdeu quase qual porcentagem da vegetação nativa?',
    ['44%', '15%', '2%', '71%'], 15);
  add('GE6-AME', '6_geo_charge_soja', 'A charge, com a frase “É soja!!!”, critica a substituição da vegetação nativa do Pampa por:',
    ['lavouras de soja, que afetam a fauna', 'áreas de preservação', 'cidades históricas', 'manguezais'], 15);
  add('GE6-AME', '6_geo_charge_biopirata', 'A charge mostra um pirata com plantas e uma ave na gaiola. Ela se refere à:',
    ['biopirataria', 'urbanização', 'queimada', 'erosão'], 15);
  add('GE6-AME', '6_geo_mapas_mata', 'Comparando os mapas “Descobrimento” e “Atual”, o bioma que mais perdeu sua cobertura original é a:',
    ['Mata Atlântica', 'Amazônia', 'Caatinga', 'Pantanal'], 14);

  /* ---------- GE6-BDV ---------- */
  add('GE6-BDV', '6_geo_biodiv_mundo', 'No mapa da biodiversidade, em geral, as regiões que concentram maior riqueza de espécies são as:',
    ['tropicais', 'polares', 'desérticas frias', 'temperadas secas'], 16);
  add('GE6-BDV', '6_geo_biodiv_mundo', 'Na legenda do mapa, a cor verde mais escura indica regiões com:',
    ['mais de 600 espécies', 'até 100 espécies', 'de 101 a 200 espécies', 'de 201 a 400 espécies'], 16);
  add('GE6-BDV', '6_geo_hotspots', 'No mapa dos hotspots de biodiversidade, os dois hotspots do Brasil são:',
    ['o Cerrado e a Mata Atlântica', 'a Amazônia e o Pantanal', 'a Caatinga e o Pampa', 'o Pantanal e o Pampa'], 16);
  add('GE6-BDV', '6_geo_hotspots', 'Para ser classificada como hotspot, uma área deve reunir muitas espécies endêmicas e:',
    ['já ter perdido grande parte de sua vegetação original', 'ser totalmente preservada', 'ficar em região polar', 'ter poucas espécies'], 16);
  add('GE6-BDV', '6_geo_cedulas_a', 'Segundo o quadro, há cerca de quantos micos-leões-dourados na natureza?',
    ['1 500', '300', '14 000', '60'], 16);
  add('GE6-BDV', '6_geo_cedulas_a', 'Segundo o quadro, na Mata Atlântica restam cerca de quantas onças-pintadas?',
    ['300', '1 500', '14 000', '30'], 16);
  add('GE6-BDV', '6_geo_cedulas_b', 'Segundo o quadro, o lobo-guará é encontrado principalmente no bioma:',
    ['Cerrado', 'Pampa', 'Mata Atlântica', 'Caatinga'], 16);
  add('GE6-BDV', '6_geo_mapa_ameacadas', 'No mapa do número de espécies ameaçadas de extinção em 2014, a maior concentração de espécies ameaçadas está no bioma:',
    ['Mata Atlântica', 'Amazônia', 'Pantanal', 'Caatinga'], 16);
  add('GE6-BDV', '6_geo_mapa_ameacadas', 'Na legenda do mapa, a cor mais escura (marrom) indica áreas com:',
    ['mais de 90 espécies ameaçadas', 'até 20 espécies ameaçadas', 'de 21 a 40 espécies ameaçadas', 'nenhuma espécie ameaçada'], 16);
  add('GE6-BDV', '6_geo_biosfera', 'Segundo a aula, a biosfera resulta da interação entre:',
    ['atmosfera, hidrosfera e litosfera', 'só o solo e a água', 'só o ar e as plantas', 'só os animais e as plantas'], 17);
  add('GE6-BDV', '6_geo_terrario_fotos', 'No terrário, parte da água evapora, se condensa nas paredes do recipiente e depois:',
    ['retorna ao solo em forma de gotículas', 'desaparece do terrário', 'vira rocha', 'sai pela tampa'], 17);
  add('GE6-BDV', '6_geo_terrario_passos', 'Na figura do passo a passo, a ordem correta das camadas colocadas no recipiente é:',
    ['pedra e areia, carvão vegetal e terra, planta', 'planta, terra, pedra', 'terra, planta, areia', 'carvão, planta, pedra'], 18);
  add('GE6-BDV', '6_geo_terrario_passos', 'As pedras pequenas ou o cascalho, colocados na parte de baixo do terrário, servem para:',
    ['a drenagem, evitando excesso de água nas raízes', 'dar nutrientes à planta', 'esquentar o ar', 'alimentar os animais'], 18);
  add('GE6-BDV', '6_geo_terrario_fechado', 'Na imagem do terrário fechado, as gotas de água nas paredes mostram:',
    ['a circulação da água no interior do terrário', 'a presença de animais', 'a ação do vento', 'a decomposição das rochas'], 18);
})();
