/* 7º ano – História e Geografia – Volume 4 (4º bimestre)
   Em cada questão a PRIMEIRA alternativa é a correta; o site embaralha na hora de gerar a prova. */

/* ===================== HISTÓRIA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'História', A = 7;
  B.hab.push(
    { id: 'HI7-TRA', ano: A, disc: D, cod: '', tit: 'Escravidão, servidão e escravidão na África',
      desc: 'Diferenciar escravidão e servidão ao longo da história e compreender como a escravidão existia na África antes do tráfico atlântico e como o tráfico transformou as sociedades africanas.', aulas: 'Aulas 1 e 2' },
    { id: 'HI7-TRI', ano: A, disc: D, cod: '', tit: 'Comércio triangular, tráfico e diáspora africana',
      desc: 'Interpretar mapas, gráficos e imagens sobre o comércio triangular, as condições da travessia nos tumbeiros, a diáspora africana e o sistema escravista na América Portuguesa.', aulas: 'Aulas 3 a 5' },
    { id: 'HI7-COL', ano: A, disc: D, cod: '', tit: 'Vida e resistência no Brasil colonial',
      desc: 'Analisar fontes históricas (gravuras, anúncios de jornal, planta de quilombo e a carta de Esperança Garcia) sobre a vida, a violência e as formas de resistência das pessoas escravizadas.', aulas: 'Aulas 5 a 7' },
    { id: 'HI7-QUI', ano: A, disc: D, cod: '', tit: 'Quilombos e lideranças negras',
      desc: 'Reconhecer a importância de Palmares e de outros quilombos, interpretar mapas sobre quilombos antigos e atuais e conhecer lideranças negras da resistência à escravidão.', aulas: 'Aulas 8 e 9' },
    { id: 'HI7-RAC', ano: A, disc: D, cod: '', tit: 'Raízes do racismo',
      desc: 'Identificar as teorias pseudocientíficas e a “missão civilizatória” usadas para justificar a escravidão e analisar os impactos do racismo no presente.', aulas: 'Aula 10' },
    { id: 'HI7-CAP', ano: A, disc: D, cod: '', tit: 'Do mercantilismo ao capitalismo',
      desc: 'Caracterizar o mercantilismo e o capitalismo e compreender as mudanças econômicas, tecnológicas, sociais e políticas que marcaram a transição entre os dois sistemas.', aulas: 'Aulas 11 e 12' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length - 1].texto = texto; };

  /* ---------- HI7-TRA ---------- */
  add('HI7-TRA', '7_hist_esq_antmed', 'No esquema, qual forma de trabalho predominava na Europa feudal (Idade Média)?',
    ['A servidão', 'A escravidão racializada', 'O trabalho assalariado', 'A escravidão clássica'], 1);
  add('HI7-TRA', '7_hist_esq_antmed', 'Segundo o esquema, na Grécia Antiga e no Império Romano a escravidão baseava-se sobretudo em:',
    ['prisioneiros de guerra, dívidas e comércio de pessoas', 'diferenças raciais e religiosas', 'contratos voluntários de trabalho', 'castigos aplicados pela Igreja'], 1);
  add('HI7-TRA', '7_hist_esq_modcont', 'De acordo com o esquema, na Idade Moderna o tráfico transatlântico tornou a escravidão:',
    ['racializada e base de economias coloniais', 'menos importante para a economia', 'restrita ao continente europeu', 'um trabalho voluntário'], 1);
  add('HI7-TRA', '7_hist_esq_modcont', 'Qual prática atual o esquema cita como persistência da exploração do trabalho, mesmo após a abolição legal?',
    ['Servidão por dívida', 'Corveia nas terras do senhor', 'Pacto colonial', 'Mercantilismo'], 1);
  add('HI7-TRA', '7_hist_camafeu', 'Na cena inferior do camafeu romano, soldados erguem um troféu enquanto cativos são escravizados. A imagem mostra a escravidão ligada:',
    ['às conquistas militares do império', 'ao tráfico transatlântico', 'à servidão feudal', 'ao trabalho assalariado'], 1);
  addT('HI7-TRA', 'Acha-se à venda no Arouche uma porção de escravos vindos de fora, sendo de ambos os sexos [...] moleques para pagens [...]. (Correio Paulistano, 21/6/1863)', 'O anúncio do jornal Correio Paulistano (1863) mostra que, no Brasil, as pessoas escravizadas eram tratadas como:',
    ['propriedade, que podia ser vendida', 'servos ligados à terra', 'trabalhadores assalariados', 'cidadãos com direitos políticos'], 1);
  add('HI7-TRA', null, 'Segundo o livro, o que diferencia o servo medieval da pessoa escravizada?',
    ['O servo não era propriedade do senhor, mas ficava ligado à terra e devia obrigações', 'O servo podia deixar o feudo quando quisesse', 'O servo recebia salário', 'O servo era sempre prisioneiro de guerra'], 1);
  add('HI7-TRA', '7_hist_rotas_med', 'No mapa das rotas de comércio de escravizados na Idade Média, as linhas tracejadas indicam:',
    ['rotas comerciais', 'fronteiras dos reinos', 'rios da África', 'rotas de navios portugueses'], 2);
  add('HI7-TRA', '7_hist_rotas_med', 'Segundo a legenda do mapa, o Reino de Gana (até o século XIII) é representado por:',
    ['listras pretas e brancas', 'cor vermelha', 'cor marrom', 'cor rosa clara'], 2);
  add('HI7-TRA', '7_hist_rotas_med', 'O mapa e o texto mostram que, na Idade Média, a escravidão na África ocorria:',
    ['internamente, entre reinos e povos diferentes', 'apenas para enviar pessoas às Américas', 'somente em Portugal', 'apenas no litoral atlântico'], 2);
  add('HI7-TRA', '7_hist_impl_africa', 'No esquema, qual é uma implicação do comércio transatlântico para as sociedades africanas?',
    ['Perda de milhões de jovens em idade produtiva', 'Manutenção das estruturas políticas e culturais', 'Fortalecimento de todos os reinos', 'Ampliação das redes transaarianas'], 2);
  add('HI7-TRA', '7_hist_impl_africa', 'Qual item do esquema pertence ao comércio interno pré-colonial?',
    ['Uso de mão de obra em atividades domésticas, agrícolas e militares', 'Desorganização de economias locais', 'Enfraquecimento e queda de vários reinos', 'Enriquecimento de potências europeias'], 2);
  add('HI7-TRA', null, 'O “regime chattel”, introduzido em massa pelos portugueses nas Américas, era a escravidão:',
    ['hereditária e perpétua', 'temporária e por dívidas', 'voluntária', 'ligada à terra'], 2);

  /* ---------- HI7-TRI ---------- */
  add('HI7-TRI', '7_hist_triangular', 'Segundo o texto que acompanha o mapa, qual região africana forneceu a maior parte dos escravizados no comércio triangular?',
    ['Centro-Ocidental, com Luanda e Benguela', 'Norte, com Cairo e Trípoli', 'Leste, com Mombaça', 'Noroeste, com Marraquexe'], 3);
  add('HI7-TRI', '7_hist_triangular', 'Nessa rota interdependente, quem mais lucrava com os produtos coloniais era:',
    ['a Europa', 'a África', 'o Brasil', 'as pessoas escravizadas'], 3);
  add('HI7-TRI', '7_hist_triangular', 'Qual destes produtos aparece na legenda do mapa como mercadoria do comércio triangular?',
    ['Marfim', 'Soja', 'Petróleo', 'Trigo'], 3);
  add('HI7-TRI', '7_hist_grafico_entrada', 'Segundo o gráfico, em qual período chegaram mais africanos escravizados ao Brasil?',
    ['1821-1840', '1601-1625', '1701-1720', '1841-1860'], 3);
  add('HI7-TRI', '7_hist_grafico_entrada', 'O gráfico registra que a Lei Eusébio de Queirós (1850):',
    ['pôs fim ao tráfico de escravos para o Brasil', 'aboliu a escravidão no Brasil', 'libertou os filhos de escravizados', 'iniciou a entrada de africanos no país'], 3);
  add('HI7-TRI', '7_hist_grafico_entrada', 'O gráfico relaciona o aumento da entrada de africanos na primeira metade do século XIX à expansão de qual cultura?',
    ['Café', 'Cana-de-açúcar', 'Algodão', 'Tabaco'], 3);
  addT('HI7-TRI', 'Com a superlotação veio a falta de saneamento, e os africanos escravizados descobriram que nenhum dos hábitos familiares de higiene pessoal podia ser mantido. Assim, doenças eram quase inevitáveis naquele ambiente. [...]', 'Segundo o trecho, qual foi uma consequência da superlotação nos navios negreiros?',
    ['Falta de saneamento e doenças quase inevitáveis', 'Melhora da saúde dos cativos', 'Viagens mais curtas', 'Maior liberdade de movimento'], 4);
  add('HI7-TRI', '7_hist_tumb_danca', 'De acordo com a legenda da gravura, por que os cativos eram obrigados a dançar no convés durante a travessia?',
    ['Para ficarem saudáveis para a revenda', 'Como ritual religioso africano', 'Para comemorar a chegada', 'Como forma de punição'], 4);
  add('HI7-TRI', '7_hist_mapa_trafico', 'No mapa do tráfico transatlântico, a largura das setas indica:',
    ['o número de pessoas escravizadas transportadas', 'a distância percorrida', 'a velocidade dos navios', 'a idade dos cativos'], 4);
  add('HI7-TRI', '7_hist_diaspora', 'Segundo o infográfico, cerca de quantos africanos escravizados foram trazidos ao Brasil?',
    ['5 milhões', '500 mil', '11 milhões', '1 milhão'], 4);
  add('HI7-TRI', '7_hist_diaspora', 'No infográfico, os “crioulos” são:',
    ['escravizados nascidos nas Américas', 'falantes de iorubá', 'africanos da Costa da Mina', 'grupos do centro-sul da África'], 4);
  add('HI7-TRI', '7_hist_saresp_mapa', 'Na legenda do mapa, a cor rosa representa os povos:',
    ['bantos', 'sudaneses', 'europeus', 'indígenas'], 4);
  add('HI7-TRI', '7_hist_sist_ampt', 'Segundo o esquema, quais eram os principais agentes do comércio de escravizados?',
    ['Comerciantes europeus, colonizadores nas Américas e líderes africanos', 'Somente comerciantes europeus', 'Somente líderes indígenas', 'Somente governantes africanos'], 5);

  /* ---------- HI7-COL ---------- */
  add('HI7-COL', '7_hist_rugendas', 'Segundo o resumo da Aula 6, na escravidão a família e a comunidade eram:',
    ['apoio emocional e físico e meio de manter práticas culturais', 'uma forma de controle imposta pelos senhores', 'proibidas por lei', 'sem importância para os escravizados'], 6);
  addT('HI7-COL', 'Fugiram da fazenda da Boa Vista de Pirassununga [...] os escravos seguintes: Simão, 25 annos, preto [...]. Quem os entregar na referida fazenda a Manoel Francisco da Silveira será gratificado com mil réis de cada um.', 'O anúncio oferece uma gratificação a quem entregar os escravizados. Esse tipo de anúncio revela que:',
    ['a fuga era uma forma de resistência à escravidão', 'os escravizados eram livres para sair', 'não havia fugas', 'os escravizados recebiam salário'], 6);
  addT('HI7-COL', 'Escrava. Vende-se uma mulata de 38 annos, com um filho de 3 annos de cor clara e compra-se um negrinho de 10 a 12 annos. [...]', 'No anúncio, as pessoas escravizadas são tratadas como:',
    ['mercadoria, com venda anunciada', 'funcionárias contratadas', 'cidadãs', 'sócias de um negócio'], 6);
  add('HI7-COL', '7_hist_quilombo_sg', 'Qual elemento da legenda da planta do Quilombo de São Gonçalo serve claramente à defesa?',
    ['Trincheira de altura de 10 palmos', 'Casa de tear', 'Hortas', 'Casas de ferreiro'], 6);
  add('HI7-COL', '7_hist_quilombo_sg', 'A legenda cita hortas, casa de tear e casa de pilões. Isso mostra que o quilombo:',
    ['produzia o próprio sustento', 'dependia só das fazendas vizinhas', 'não tinha moradias', 'vivia apenas da caça'], 6);
  add('HI7-COL', '7_hist_carta_esperanca', 'Em 1770, Esperança Garcia escreveu uma carta ao governador de qual região?',
    ['Piauí', 'Maranhão', 'Bahia', 'Pernambuco'], 7);
  add('HI7-COL', '7_hist_carta_esperanca', 'Na carta, Esperança Garcia pede que:',
    ['volte à fazenda onde vivia com o marido, para batizar a filha', 'seja paga pelo trabalho de cozinheira', 'seja levada para a Europa', 'seu filho seja vendido'], 7);
  add('HI7-COL', '7_hist_carta_esperanca', 'Quais maus-tratos Esperança Garcia relata na carta?',
    ['Pancadas nela e no filho, que chegou a sangrar pela boca', 'Falta de moradia', 'Excesso de impostos', 'Prisão por dívida'], 7);
  add('HI7-COL', '7_hist_mercado_recife', 'A gravura de Zacharias Wagner (1637-1644) retrata:',
    ['um mercado de escravos no Recife', 'uma festa na corte portuguesa', 'um engenho de açúcar', 'uma revolta de quilombolas'], 5);
  addT('HI7-COL', 'Na Rua da Misericórdia nº 3, vendem-se bilhetes a $60, de uma rifa unida à Loteria da Misericórdia, que tem por prêmio uma negra com 2 filhos; cada bilhete tem 20 números. (O Volantim, n. 8, 10/9/1822)', 'O anúncio oferece como prêmio de uma rifa uma pessoa escravizada. Isso mostra que ela era vista como:',
    ['propriedade, que podia ser sorteada', 'funcionária da loteria', 'pessoa livre', 'sócia dos senhores'], 5);
  add('HI7-COL', '7_hist_escravista', 'Segundo o esquema, as leis sobre as pessoas escravizadas:',
    ['negavam direitos básicos e impunham castigos brutais', 'garantiam casamento e propriedade', 'proibiam qualquer castigo', 'davam liberdade após cinco anos'], 5);
  add('HI7-COL', null, 'O resumo da Aula 7 cita a Revolta do Engenho de Santana, ocorrida em:',
    ['Ilhéus (BA), em 1789', 'Recife (PE), em 1637', 'Vassouras (RJ), em 1838', 'Salvador (BA), em 1835'], 7);
  add('HI7-COL', null, 'Qual destas é uma forma de resistência citada no resumo da Aula 7?',
    ['Sabotar a produção ou destruir ferramentas de trabalho', 'Ampliar o tráfico de escravizados', 'Vender terras aos senhores', 'Pedir o retorno à África pelo governo'], 7);

  /* ---------- HI7-QUI ---------- */
  add('HI7-QUI', '7_hist_mapa_quilombos', 'Segundo o mapa, o Quilombo dos Palmares durou de:',
    ['1580 a 1695', '1500 a 1600', '1695 a 1790', '1790 a 1888'], 8);
  add('HI7-QUI', '7_hist_mapa_quilombos', 'O mapa informa que, em seu auge, Palmares foi defendido por mais de:',
    ['20 mil pessoas', '2 mil pessoas', '200 pessoas', '200 mil pessoas'], 8);
  add('HI7-QUI', '7_hist_mapa_quilombos', 'Pelo mapa e pelo texto, onde ficava o Quilombo dos Palmares?',
    ['Na Serra da Barriga, onde hoje é Alagoas', 'No Rio Grande do Sul', 'No Amazonas', 'Em Mato Grosso'], 8);
  add('HI7-QUI', '7_hist_terras_quilomb', 'No mapa das terras quilombolas atuais, quantas terras estão regularizadas (dados de 31/3/2026)?',
    ['190', '1.929', '100', '82'], 8);
  add('HI7-QUI', '7_hist_terras_quilomb', 'No mapa, os círculos de cor vinho indicam:',
    ['terras tituladas e parcialmente tituladas', 'terras com processo de regularização pelo Incra', 'cidades quilombolas', 'terras em identificação'], 8);
  add('HI7-QUI', null, 'O Dia Nacional de Zumbi e da Consciência Negra, celebrado em 20 de novembro, marca:',
    ['o falecimento de Zumbi dos Palmares', 'a assinatura da abolição', 'a fundação de Palmares', 'a chegada dos primeiros africanos'], 8);
  add('HI7-QUI', '7_hist_revista_illust', 'A capa da Revista Illustrada (1884) traz o retrato de:',
    ['Francisco José do Nascimento, o Dragão do Mar', 'Zumbi dos Palmares', 'Luiz Gama', 'Manuel Congo'], 9);
  add('HI7-QUI', '7_hist_revista_illust', 'Os jangadeiros liderados por Francisco José do Nascimento se recusaram a:',
    ['transportar pessoas escravizadas para os navios', 'pescar no litoral do Ceará', 'vender jangadas aos senhores', 'pagar impostos ao governo'], 9);
  add('HI7-QUI', '7_hist_revista_illust', 'A greve dos jangadeiros contribuiu para:',
    ['pressionar a abolição no Ceará, em 1884', 'encerrar a guerra de Palmares', 'criar o Dia da Consciência Negra', 'proibir o tráfico para o Brasil'], 9);
  add('HI7-QUI', null, 'Tereza de Benguela liderou o Quilombo do Quariterê, na região do atual estado de:',
    ['Mato Grosso', 'Alagoas', 'Bahia', 'Rio Grande do Sul'], 9);
  add('HI7-QUI', null, 'Manuel Congo organizou com Mariana Crioula, em 1838, uma rebelião na cidade de:',
    ['Vassouras', 'Recife', 'Ilhéus', 'Salvador'], 9);
  add('HI7-QUI', null, 'Zumbi tornou-se líder militar de Palmares após divergências com Ganga Zumba, que buscava:',
    ['negociar a paz com as autoridades coloniais', 'abandonar o quilombo', 'aliar-se aos senhores de engenho', 'expandir o tráfico'], 9);
  add('HI7-QUI', null, 'Luiza Mahin é tradicionalmente associada a qual revolta de escravizados na Bahia?',
    ['Revolta dos Malês (1835)', 'Revolta do Engenho de Santana (1789)', 'Guerra de Palmares', 'Revolta da Chibata'], 9);
  add('HI7-QUI', null, 'Segundo o resumo da Aula 9, a resistência à escravidão não incluía apenas fugas e revoltas, mas também:',
    ['preservar práticas culturais e religiosas e pequenas atitudes do dia a dia', 'aceitar a escravidão em silêncio', 'comprar terras dos senhores', 'abandonar a identidade africana'], 9);

  /* ---------- HI7-RAC ---------- */
  add('HI7-RAC', '7_hist_racismo_esq', 'Segundo o esquema, qual teoria afirmava que o formato do crânio definia inteligência e caráter?',
    ['Frenologia', 'Darwinismo social', 'Teoria poligenista', 'Classificações raciais'], 10);
  add('HI7-RAC', '7_hist_racismo_esq', 'O darwinismo social distorceu teorias evolutivas para:',
    ['classificar negros e indígenas como inferiores e justificar a dominação colonial', 'provar a igualdade entre os povos', 'explicar a origem das espécies', 'combater a escravidão'], 10);
  add('HI7-RAC', '7_hist_racismo_esq', 'A teoria poligenista defendia que as chamadas “raças” humanas:',
    ['tinham origens biológicas distintas', 'tinham a mesma origem', 'eram todas iguais', 'não existiam'], 10);
  add('HI7-RAC', '7_hist_racismo_info', 'O infográfico mostra as dimensões impactadas pelo racismo. Qual destes itens aparece nele?',
    ['Saúde física e mental', 'Preço dos combustíveis', 'Clima da cidade', 'Moda e vestuário'], 10);
  add('HI7-RAC', '7_hist_racismo_info', 'No infográfico, moradia, saneamento, alimentação e saúde fazem parte da dimensão:',
    ['Acesso a direitos', 'Autoconfiança', 'Relações parentais', 'Autopercepção'], 10);
  add('HI7-RAC', '7_hist_racismo_info', 'O conjunto do infográfico indica que o racismo:',
    ['afeta várias dimensões da vida da população negra', 'afeta apenas o mercado de trabalho', 'atinge só os adultos', 'não interfere na saúde'], 10);
  add('HI7-RAC', '7_hist_charge', 'A charge “130 anos de uma abolição mentirosa” critica:',
    ['a continuidade de injustiças e do racismo contra os negros', 'o fim da escravidão', 'a ação dos movimentos negros', 'o racismo que afeta só os homens'], 10);
  add('HI7-RAC', '7_hist_charge', 'No quadro “Hoje” da charge, as pessoas pedem o fim do encarceramento em massa, do extermínio do jovem negro e da desigualdade racial e de gênero. Isso indica que:',
    ['ainda há desigualdades 130 anos após a abolição', 'o racismo acabou com a abolição', 'a escravidão voltou a ser legal', 'a luta por direitos terminou'], 10);
  add('HI7-RAC', '7_hist_charge', 'A charge foi publicada em uma edição especial sobre:',
    ['os 130 anos da abolição e a luta por reparações', 'a história de Palmares', 'a Revolução Industrial', 'o tráfico atlântico'], 10);
  add('HI7-RAC', null, 'A “missão civilizatória” era usada para justificar a escravidão como forma de:',
    ['“educar” e “civilizar” povos africanos e indígenas', 'proteger a economia africana', 'ampliar os direitos dos escravizados', 'garantir salário aos trabalhadores'], 10);
  add('HI7-RAC', null, 'Após a abolição, a falta de políticas de inclusão social e econômica:',
    ['deixou a população negra marginalizada e perpetuou preconceitos', 'garantiu terras aos libertos', 'acabou com o racismo', 'criou empregos para todos'], 10);
  add('HI7-RAC', null, 'As justificativas “científicas” racistas dos séculos XVIII e XIX serviam para:',
    ['legitimar a suposta superioridade dos colonizadores europeus', 'promover a igualdade étnica', 'proibir a escravização de africanos', 'valorizar as culturas africanas'], 10);
  add('HI7-RAC', null, 'Os movimentos negros contemporâneos lutam, por exemplo, por políticas como:',
    ['as cotas raciais, para combater desigualdades históricas', 'a volta da escravidão', 'o fim da Constituição de 1988', 'a redução da escolaridade'], 10);
  add('HI7-RAC', null, 'Carl Linnaeus e Johann Blumenbach são citados no livro por:',
    ['terem classificado humanos em “raças superiores” e “inferiores”', 'terem lutado pela abolição', 'terem liderado quilombos', 'terem criado a Lei Áurea'], 10);

  /* ---------- HI7-CAP ---------- */
  add('HI7-CAP', '7_hist_merc_capit', 'Segundo o esquema, qual característica pertence ao mercantilismo?',
    ['Metalismo: acúmulo de riquezas pelo comércio de metais preciosos', 'Livre concorrência', 'Economia de mercado', 'Propriedade privada dos meios de produção'], 11);
  add('HI7-CAP', '7_hist_merc_capit', 'Qual característica o esquema atribui ao capitalismo?',
    ['Livre concorrência, com pouca intervenção do Estado', 'Monopólio e protecionismo', 'Controle estatal da economia', 'Balança comercial favorável'], 11);
  add('HI7-CAP', '7_hist_merc_capit', 'Entre as mudanças tecnológicas que levaram à transição, o esquema cita:',
    ['a máquina a vapor e novas infraestruturas de transporte', 'a descoberta do ouro', 'o aumento do poder do rei', 'a criação do pacto colonial'], 11);
  add('HI7-CAP', '7_hist_mercantil', 'Na imagem, a metrópole envia produtos manufaturados à colônia e recebe dela:',
    ['metais preciosos, produtos agrícolas e lucro do trabalho escravizado', 'máquinas e computadores', 'apenas dinheiro em espécie', 'produtos industrializados'], 11);
  add('HI7-CAP', '7_hist_mercantil', 'Na imagem, a colônia aparece associada à:',
    ['exploração', 'expansão marítima', 'livre concorrência', 'industrialização'], 11);
  add('HI7-CAP', '7_hist_mercantil', 'A imagem exemplifica o colonialismo, no qual as colônias, em geral:',
    ['forneciam matérias-primas e consumiam manufaturados da metrópole', 'fabricavam máquinas para a metrópole', 'eram independentes da metrópole', 'competiam livremente com a metrópole'], 11);
  add('HI7-CAP', null, 'Na transição para o capitalismo liberal, a intervenção do Estado foi sendo substituída por:',
    ['livre concorrência e iniciativa privada', 'controle total dos preços pelo rei', 'acúmulo de metais preciosos', 'monopólio estatal'], 12);
  add('HI7-CAP', null, 'Qual grupo, fortalecido pelo comércio e depois pela indústria, ampliou sua influência política e enfraqueceu o Absolutismo?',
    ['A burguesia', 'O clero', 'Os servos', 'Os escravizados'], 12);
  add('HI7-CAP', null, 'No capitalismo, os preços e a distribuição das mercadorias são definidos por:',
    ['oferta e demanda', 'decisão do rei', 'tabelas fixas do Estado', 'sorteio'], 12);
  add('HI7-CAP', null, 'Segundo o livro, a ética protestante valoriza:',
    ['o trabalho árduo e a acumulação de riqueza', 'a pobreza voluntária', 'o controle estatal da economia', 'o metalismo'], 11);
  add('HI7-CAP', null, 'Qual definição resume melhor o capitalismo?',
    ['Sistema baseado na propriedade privada, na livre iniciativa e na busca do lucro', 'Sistema em que o Estado controla todos os meios de produção', 'Sistema baseado no acúmulo de ouro e prata', 'Sistema em que os preços são fixados pelo governo'], 12);
})();

/* ===================== GEOGRAFIA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Geografia', A = 7;
  B.hab.push(
    { id: 'GE7-CAP', ano: A, disc: D, cod: '', tit: 'Mercantilismo, capitalismo e globalização',
      desc: 'Reconhecer as características do mercantilismo, as fases do capitalismo e as etapas e os efeitos da globalização, usando mapas, esquemas e linhas do tempo.', aulas: 'Aulas 1 a 5' },
    { id: 'GE7-IND', ano: A, disc: D, cod: '', tit: 'Revolução Industrial e industrialização',
      desc: 'Compreender como a Revolução Industrial começou e se expandiu, suas fases tecnológicas e seus efeitos nas cidades e no trabalho, inclusive no Brasil.', aulas: 'Aulas 6, 7 e 12' },
    { id: 'GE7-CAM', ano: A, disc: D, cod: '', tit: 'Os contrastes do campo brasileiro',
      desc: 'Interpretar gráficos sobre estrutura fundiária, trabalhadores e uso da terra e compreender a modernização do campo e o agronegócio.', aulas: 'Aulas 8 e 9' },
    { id: 'GE7-URB', ano: A, disc: D, cod: '', tit: 'Urbanização brasileira e questão ambiental',
      desc: 'Analisar o gráfico da urbanização brasileira, os problemas do crescimento urbano e os impactos ambientais da industrialização, como no caso de Cubatão.', aulas: 'Aulas 10 e 11' },
    { id: 'GE7-REC', ano: A, disc: D, cod: '', tit: 'Recursos naturais e matriz energética',
      desc: 'Diferenciar recursos renováveis e não renováveis, interpretar gráficos das matrizes energética e elétrica brasileiras e compreender a transição energética.', aulas: 'Aulas 13 e 14' },
    { id: 'GE7-SUS', ano: A, disc: D, cod: '', tit: 'Consumo, sustentabilidade e economia circular',
      desc: 'Comparar economia linear e circular, entender as pegadas ecológica e hídrica e reconhecer atitudes de consumo consciente.', aulas: 'Aulas 15 a 18' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });

  /* ---------- GE7-CAP ---------- */
  add('GE7-CAP', '7_geo_mercantilismo', 'Na imagem, o que a colônia fornecia à metrópole?',
    ['Metais preciosos e produtos agrícolas', 'Produtos manufaturados', 'Máquinas e computadores', 'Serviços digitais'], 1);
  add('GE7-CAP', null, 'A ideia de que a riqueza de um país dependia sobretudo da quantidade de ouro e prata que ele possuía chama-se:',
    ['metalismo', 'liberalismo', 'globalização', 'urbanização'], 1);
  add('GE7-CAP', '7_geo_mercantilismo', 'O protecionismo, característica do mercantilismo, consistia em:',
    ['cobrar impostos sobre produtos estrangeiros para proteger a produção interna', 'abrir o comércio sem nenhuma taxa', 'importar mais do que exportar', 'eliminar as colônias'], 1);
  add('GE7-CAP', '7_geo_rotas_expl', 'O mapa mostra rotas de exploração marítima dos séculos XV e XVI. Esse período corresponde à fase do capitalismo:',
    ['comercial', 'industrial', 'financeiro', 'informacional'], 2);
  add('GE7-CAP', '7_geo_rotas_expl', 'Segundo a legenda do mapa, as possessões portuguesas em 1600 eram governadas por:',
    ['reis da Espanha, entre 1580 e 1640', 'reis da França', 'holandeses', 'ingleses'], 2);
  add('GE7-CAP', '7_geo_fases', 'Segundo o esquema, qual fase do capitalismo começa no século XVIII, com a Revolução Industrial?',
    ['A industrial (2ª fase)', 'A comercial (1ª fase)', 'A financeira (3ª fase)', 'A informacional (4ª fase)'], 5);
  add('GE7-CAP', '7_geo_fases', 'Qual fase tem como marcas a internet, a inteligência artificial e a produção baseada em dados?',
    ['Informacional ou digital', 'Comercial', 'Industrial', 'Financeira'], 5);
  add('GE7-CAP', '7_geo_fases', 'A fase financeira, iniciada no século XX, caracteriza-se por:',
    ['fortalecimento do mercado financeiro e dos bancos', 'expansão das rotas marítimas', 'uso de máquinas a vapor', 'política do metalismo'], 5);
  add('GE7-CAP', '7_geo_tl_global', 'Na linha do tempo, a globalização digital e cultural pertence ao século:',
    ['XXI', 'XV ao XVIII', 'XIX ao XX', 'XX'], 3);
  add('GE7-CAP', '7_geo_tl_global', 'Qual etapa da globalização aparece associada às Grandes Navegações?',
    ['Expansão marítima e capitalismo comercial (séc. XV–XVIII)', 'Globalização industrial', 'Globalização financeira e tecnológica', 'Globalização digital e cultural'], 3);
  add('GE7-CAP', '7_geo_tl_global', 'A imagem de uma fábrica antiga, na linha do tempo, representa a globalização:',
    ['industrial (séc. XIX–XX)', 'comercial (séc. XV–XVIII)', 'digital (séc. XXI)', 'financeira (séc. XX)'], 3);
  add('GE7-CAP', null, 'Um exemplo de globalização no cotidiano, citado no livro, é:',
    ['celulares feitos com peças fabricadas em diferentes países', 'produtos feitos só com matéria-prima local', 'cartas entregues a cavalo', 'trocas apenas dentro do bairro'], 4);
  add('GE7-CAP', null, 'No capitalismo informacional, muitas empresas lucram também com:',
    ['serviços digitais e dados produzidos pelos usuários', 'o acúmulo de ouro e prata', 'o cultivo de cana-de-açúcar', 'o trabalho dos servos'], 2);
  add('GE7-CAP', null, 'Segundo o livro, os efeitos da globalização ocorrem:',
    ['de forma desigual entre países e grupos sociais', 'da mesma forma em todos os países', 'apenas na Europa', 'só entre países vizinhos'], 4);

  /* ---------- GE7-IND ---------- */
  add('GE7-IND', '7_geo_mapa_ri', 'No mapa da expansão da Revolução Industrial (1840-1880), as primeiras áreas industrializadas aparecem:',
    ['na Inglaterra (Reino Unido)', 'na Rússia', 'na Espanha', 'na Grécia'], 6);
  add('GE7-IND', '7_geo_mapa_ri', 'Os símbolos de carvão e ferro, segundo o livro, ficam:',
    ['próximos às áreas industrializadas, o que ajuda a explicar a industrialização', 'longe das fábricas', 'apenas no Império Otomano', 'só no litoral do Mar Negro'], 6);
  add('GE7-IND', '7_geo_mapa_ri', 'Além da Inglaterra, o processo de industrialização se expandiu, segundo o livro, para:',
    ['França, Alemanha e Bélgica', 'Brasil e Argentina', 'Japão e China', 'Egito e Líbia'], 6);
  add('GE7-IND', '7_geo_estagios', 'No esquema, a 1ª Revolução Industrial é caracterizada por:',
    ['mecanização e energia a vapor', 'linha de montagem', 'automação eletrônica', 'sistemas ciberfísicos'], 7);
  add('GE7-IND', '7_geo_estagios', 'Linha de montagem, produção em massa e eletrificação caracterizam a:',
    ['2ª Revolução Industrial', '1ª Revolução Industrial', '3ª Revolução Industrial', '4ª Revolução Industrial'], 7);
  add('GE7-IND', '7_geo_estagios', 'Automação eletrônica e eletrônica pertencem à:',
    ['3ª Revolução Industrial', '1ª Revolução Industrial', '2ª Revolução Industrial', '4ª Revolução Industrial'], 7);
  add('GE7-IND', '7_geo_operarios', 'A foto mostra operários em uma fábrica. O trabalho nas fábricas atraiu pessoas do campo para as cidades, movimento chamado de:',
    ['êxodo rural', 'conurbação', 'agronegócio', 'transumância'], 7);
  add('GE7-IND', '7_geo_operarios', 'No Brasil, a industrialização ganhou força principalmente em qual região, com destaque para São Paulo e Rio de Janeiro?',
    ['Sudeste', 'Norte', 'Centro-Oeste', 'Sul'], 7);
  add('GE7-IND', null, 'O aperfeiçoamento do motor a vapor, que ampliou a produção das fábricas, foi feito pelo engenheiro:',
    ['James Watt', 'Zacharias Wagner', 'Carl Linnaeus', 'Claude Monet'], 6);
  add('GE7-IND', null, 'A burguesia, na Revolução Industrial, era formada principalmente por:',
    ['donos de fábricas e comerciantes', 'trabalhadores das indústrias', 'artesãos de pequenas oficinas', 'camponeses sem terra'], 6);
  add('GE7-IND', null, 'Entre os desafios sociais das cidades industriais, o livro cita:',
    ['moradias precárias, falta de saneamento e trabalho infantil', 'excesso de áreas verdes', 'jornadas curtas', 'baixa população urbana'], 6);
  add('GE7-IND', null, 'Antes da Revolução Industrial, a produção de mercadorias era sobretudo:',
    ['artesanal, em pequenas oficinas ou nas casas', 'feita por robôs', 'feita em linhas de montagem', 'movida a eletricidade'], 6);
  add('GE7-IND', null, 'Segundo a Aula 12, uma tecnologia que ajuda a conservar alimentos e vacinas é:',
    ['a geladeira', 'a carta', 'o tear manual', 'o moinho de vento'], 12);
  add('GE7-IND', null, 'O livro lembra que nem todas as pessoas têm acesso às tecnologias modernas. Em partes do mundo ainda faltam:',
    ['internet, energia elétrica, água tratada e medicamentos', 'apenas aparelhos de som', 'apenas carros', 'apenas roupas da moda'], 12);

  /* ---------- GE7-CAM ---------- */
  add('GE7-CAM', '7_geo_graf_area', 'No gráfico, qual grupo de área reúne a maior parte dos estabelecimentos rurais (81,4%)?',
    ['Até 50 ha', 'De 50 a menos de 500 ha', 'De 1.000 a menos de 2.500 ha', '2.500 ha ou mais'], 9);
  add('GE7-CAM', '7_geo_graf_area', 'As propriedades de 2.500 ha ou mais ocupam cerca de quanto da área total?',
    ['32,8%', '0,3%', '12,8%', '81,4%'], 9);
  add('GE7-CAM', '7_geo_graf_area', 'Que conclusão o gráfico permite?',
    ['Pequenas propriedades são a maioria dos estabelecimentos, mas ocupam menor parcela da área', 'Todas as propriedades têm o mesmo tamanho', 'Grandes propriedades são a maioria dos estabelecimentos', 'Não há desigualdade na estrutura fundiária'], 9);
  add('GE7-CAM', '7_geo_graf_trab', 'Segundo o gráfico, as propriedades de até 50 ha concentram qual proporção dos trabalhadores?',
    ['71,7%', '12,8%', '4,4%', '28,8%'], 9);
  add('GE7-CAM', '7_geo_graf_trab', 'As propriedades de 2.500 ha ou mais ocupam 32,8% da área. Qual a proporção de trabalhadores nelas?',
    ['4,4%', '32,8%', '71,7%', '18,8%'], 9);
  add('GE7-CAM', '7_geo_graf_trab', 'Segundo o livro, as grandes propriedades empregam menos pessoas, entre outros fatores, porque:',
    ['usam mais intensamente máquinas e tecnologias agrícolas', 'não produzem alimentos', 'são menores que as pequenas', 'só usam trabalho manual'], 9);
  add('GE7-CAM', '7_geo_graf_uso', 'No gráfico do uso da terra, qual atividade predomina nas propriedades de 50 a menos de 500 ha?',
    ['Pecuária e outros animais', 'Lavoura temporária', 'Floresta plantada', 'Horticultura e floricultura'], 9);
  add('GE7-CAM', '7_geo_graf_uso', 'Entre os produtores sem área, qual uso da terra tem maior participação (52,5%)?',
    ['Lavoura temporária', 'Pecuária e outros animais', 'Floresta nativa', 'Lavoura permanente'], 9);
  add('GE7-CAM', '7_geo_graf_uso', 'Nas propriedades de até 50 ha, a pecuária e outros animais ocupam:',
    ['45,1%', '34,7%', '69,0%', '24,8%'], 9);
  add('GE7-CAM', null, 'A concentração fundiária significa que:',
    ['grande parte das terras está concentrada em poucas propriedades', 'as terras são divididas igualmente', 'só existem pequenas propriedades', 'o campo não tem donos'], 9);
  add('GE7-CAM', null, 'O conjunto de inovações como máquinas, sementes mais produtivas e fertilizantes ficou conhecido como:',
    ['Revolução Verde', 'Revolução Francesa', 'Pacto colonial', 'Globalização digital'], 8);
  add('GE7-CAM', null, 'Qual instituição brasileira desenvolveu tecnologias agropecuárias adaptadas ao clima e ao ambiente do país?',
    ['Embrapa', 'Cetesb', 'IBGE', 'Incra'], 8);
  add('GE7-CAM', null, 'O conjunto de atividades de produção, processamento e comercialização de produtos agropecuários é o:',
    ['agronegócio', 'minifúndio', 'êxodo rural', 'extrativismo'], 8);
  add('GE7-CAM', null, 'O uso de máquinas no campo, ao reduzir a necessidade de trabalhadores, contribuiu para:',
    ['o êxodo rural', 'a conurbação', 'o aumento da população rural', 'o fim da agricultura'], 8);

  /* ---------- GE7-URB ---------- */
  add('GE7-URB', '7_geo_urban', 'Segundo o gráfico, a população urbana brasileira ultrapassou a rural entre as décadas de:',
    ['1960 e 1970', '1940 e 1950', '1980 e 1991', '2000 e 2007'], 10);
  add('GE7-URB', '7_geo_urban', 'Em 2022, a taxa de urbanização do Brasil, segundo o gráfico, era de cerca de:',
    ['87%', '31%', '55%', '12%'], 10);
  add('GE7-URB', '7_geo_urban', 'Em 1940, segundo o gráfico, a maior parte da população brasileira vivia:',
    ['no campo (cerca de 69%)', 'nas cidades (cerca de 69%)', 'nas cidades (cerca de 31%)', 'metade no campo, metade nas cidades'], 10);
  add('GE7-URB', '7_geo_favela', 'Segundo a legenda da foto, em algumas cidades o crescimento urbano levou à ocupação de áreas com:',
    ['acesso limitado à infraestrutura', 'infraestrutura completa', 'grandes áreas verdes planejadas', 'transporte de alta velocidade'], 10);
  add('GE7-URB', '7_geo_favela', 'O crescimento urbano sem planejamento fez surgir:',
    ['áreas urbanas informais, com acesso limitado a transporte e infraestrutura', 'moradias para todos os trabalhadores', 'cidades sem população', 'apenas bairros ricos'], 10);
  add('GE7-URB', '7_geo_pinheiros', 'A foto mostra poluição no Rio Pinheiros (SP). Esse tipo de poluição está relacionado ao:',
    ['lançamento de resíduos em rios e lagos', 'uso de energia solar', 'plantio de florestas', 'tratamento do esgoto'], 11);
  add('GE7-URB', '7_geo_cubatao', 'Nos anos 1980, Cubatão chegou a ser considerada pela ONU:',
    ['a cidade mais poluída do mundo', 'a mais populosa do país', 'a mais verde do mundo', 'a mais industrializada do planeta'], 11);
  add('GE7-URB', '7_geo_cubatao', 'Em 1992, Cubatão recebeu da ONU o título de:',
    ['Cidade Símbolo da Recuperação Ambiental', 'Capital da Indústria', 'Cidade mais poluída', 'Metrópole Global'], 11);
  add('GE7-URB', '7_geo_cubatao', 'Qual medida de controle foi adotada em Cubatão?',
    ['Filtros nas chaminés das indústrias', 'Fechamento da Serra do Mar', 'Aumento do número de fábricas', 'Descarte de resíduos nos rios'], 11);
  add('GE7-URB', null, 'A poluição do ar causada pelas indústrias está associada principalmente:',
    ['à queima de combustíveis e às emissões das fábricas', 'ao lançamento de resíduos em rios', 'ao descarte de materiais no solo', 'ao uso de energia eólica'], 11);
  add('GE7-URB', null, 'A conurbação ocorre quando:',
    ['a expansão de municípios vizinhos forma uma continuidade urbana', 'a população migra da cidade para o campo', 'as cidades perdem moradores', 'uma cidade é abandonada'], 10);
  add('GE7-URB', null, 'A urbanização acelerada do Brasil esteve associada à intensificação da:',
    ['industrialização no século XX', 'agricultura de subsistência', 'produção artesanal', 'extração de pau-brasil'], 10);
  add('GE7-URB', null, 'A Grande São Paulo, que inclui São Paulo e Guarulhos, é:',
    ['a região metropolitana mais populosa do Brasil', 'a menor região metropolitana do país', 'uma região só rural', 'uma área sem rodovias'], 10);
  add('GE7-URB', null, 'Segundo o livro, a responsabilidade pelo desenvolvimento sustentável é:',
    ['compartilhada entre Estado, empresas e sociedade', 'apenas do Estado', 'apenas das empresas', 'apenas de cada pessoa'], 11);

  /* ---------- GE7-REC ---------- */
  add('GE7-REC', '7_geo_recursos', 'Segundo o esquema, qual destes é um recurso natural renovável?',
    ['Vento (energia eólica)', 'Petróleo', 'Carvão mineral', 'Gás natural'], 13);
  add('GE7-REC', '7_geo_recursos', 'Qual destes aparece no esquema como recurso natural não renovável?',
    ['Minérios (ferro, ouro, bauxita etc.)', 'Água (rios, chuvas)', 'Sol (energia solar)', 'Vento (energia eólica)'], 13);
  add('GE7-REC', '7_geo_matriz_en', 'No gráfico da matriz energética brasileira de 2024, qual fonte tem a maior participação?',
    ['Petróleo e derivados (34%)', 'Hidráulica', 'Gás natural', 'Carvão mineral'], 14);
  add('GE7-REC', '7_geo_matriz_en', 'Qual é a participação dos derivados da cana-de-açúcar na matriz energética?',
    ['16,7%', '34%', '9,6%', '5,1%'], 14);
  add('GE7-REC', '7_geo_matriz_en', 'Qual fonte não renovável aparece no gráfico com 4,5%?',
    ['Carvão mineral', 'Nuclear', 'Gás natural', 'Petróleo'], 14);
  add('GE7-REC', '7_geo_matriz_el', 'Na matriz elétrica brasileira de 2024, a fonte mais importante é:',
    ['a hidráulica (55,3%)', 'a eólica (14,1%)', 'a solar (9,3%)', 'o gás natural (6,3%)'], 14);
  add('GE7-REC', '7_geo_matriz_el', 'Qual é a participação da energia eólica na matriz elétrica?',
    ['14,1%', '55,3%', '9,3%', '2,1%'], 14);
  add('GE7-REC', '7_geo_matriz_el', 'Comparando as duas matrizes, a participação das fontes renováveis é maior:',
    ['na matriz elétrica, com mais de 80%', 'na matriz energética', 'igual nas duas', 'em nenhuma delas'], 14);
  add('GE7-REC', '7_geo_g20', 'No gráfico dos países do G20, a linha roxa indica a parcela de energia limpa. Qual país tem o menor valor?',
    ['Arábia Saudita', 'Brasil', 'França', 'Canadá'], 14);
  add('GE7-REC', '7_geo_g20', 'No gráfico, a cor laranja (combustíveis fósseis) predomina:',
    ['na oferta de energia da maioria dos países', 'apenas no Brasil', 'só na França', 'em nenhum país'], 14);
  add('GE7-REC', null, 'A transição energética consiste em:',
    ['substituir fontes poluentes por fontes limpas e renováveis', 'ampliar o uso do carvão mineral', 'eliminar a energia eólica e solar', 'aumentar o consumo de petróleo'], 14);
  add('GE7-REC', null, 'Qual destes é um mineral estratégico que o Brasil possui, usado, por exemplo, em baterias?',
    ['Lítio', 'Sal de cozinha', 'Areia comum', 'Carvão vegetal'], 14);
  add('GE7-REC', null, 'Mesmo sendo renováveis, os recursos naturais devem ser usados com sustentabilidade porque:',
    ['podem se esgotar se explorados mais rápido do que se regeneram', 'nunca se esgotam', 'não têm valor econômico', 'só existem em áreas urbanas'], 13);
  add('GE7-REC', null, 'Uma usina hidrelétrica usa recurso renovável, mas pode:',
    ['alagar grande área e alterar o ambiente e a vida das populações locais', 'queimar carvão mineral', 'gerar energia sem nenhum impacto', 'poluir o ar com gases tóxicos'], 14);

  /* ---------- GE7-SUS ---------- */
  add('GE7-SUS', '7_geo_linear_circ', 'No esquema, a economia linear termina em:',
    ['descarte', 'reciclagem', 'reutilização', 'novo uso'], 15);
  add('GE7-SUS', '7_geo_linear_circ', 'Qual etapa aparece no ciclo da economia circular, mas não na linear?',
    ['Reciclagem', 'Produção', 'Distribuição', 'Uso/consumo'], 15);
  add('GE7-SUS', '7_geo_linear_circ', 'Na economia circular, em relação aos recursos naturais:',
    ['reaproveitam-se materiais, reduzindo a extração de novos recursos', 'extrai-se cada vez mais matéria-prima', 'tudo é descartado após o uso', 'não há produção'], 15);
  add('GE7-SUS', null, 'A pegada hídrica mostra:',
    ['quanta água é usada para produzir os produtos e serviços do dia a dia', 'a área de floresta de um país', 'o tamanho do pé de uma pessoa', 'a quantidade de chuva de uma região'], 17);
  add('GE7-SUS', null, 'A pegada ecológica mede:',
    ['como nossas atividades usam a natureza, com a área necessária para fornecer recursos', 'só a água consumida', 'só a energia elétrica', 'só o lixo produzido'], 17);
  add('GE7-SUS', '7_geo_alimentos', 'Quando um alimento é jogado fora, também é desperdiçada:',
    ['parte da água, do solo e da energia usados em sua produção', 'apenas a embalagem', 'nenhum recurso natural', 'apenas o dinheiro do consumidor'], 18);
  add('GE7-SUS', '7_geo_bicicleta', 'Usar transporte coletivo ou bicicleta em vez do carro ajuda o ambiente porque:',
    ['reduz a emissão de poluentes e melhora a qualidade do ar', 'aumenta o consumo de petróleo', 'aumenta a poluição', 'gasta mais combustível'], 18);
  add('GE7-SUS', '7_geo_plastico', 'Segundo a legenda da foto, o plástico:',
    ['pode levar décadas para se decompor e é fonte de contaminação ambiental', 'se decompõe em poucos dias', 'não contamina o ambiente', 'só existe no mar'], 18);
  add('GE7-SUS', '7_geo_enchente', 'Segundo a legenda da foto, as mudanças climáticas ligadas à emissão de poluentes podem:',
    ['intensificar eventos climáticos extremos, com danos materiais e à vida das pessoas', 'acabar com as chuvas', 'reduzir todos os desastres', 'aumentar a biodiversidade'], 16);
  add('GE7-SUS', null, 'A água virtual é aquela:',
    ['usada na produção de alimentos, roupas e outros produtos que consumimos indiretamente', 'bebida diretamente da torneira', 'armazenada em caixas-d’água', 'usada só para tomar banho'], 16);
  add('GE7-SUS', null, 'Qual atitude está de acordo com a lógica da economia circular?',
    ['Evitar o consumo excessivo e reaproveitar objetos usados em bom estado', 'Descartar aparelhos eletrônicos no lixo comum', 'Usar descartáveis mesmo havendo opção reutilizável', 'Comprar sempre o modelo mais novo'], 15);
  add('GE7-SUS', null, 'O desenvolvimento sustentável busca conciliar produção de bens e serviços, qualidade de vida e:',
    ['preservação dos recursos naturais', 'aumento do desperdício', 'esgotamento das reservas', 'fim das indústrias'], 16);
  add('GE7-SUS', null, 'A produção de papel, em que os recursos são retirados, fabricados, usados e descartados, exemplifica a economia:',
    ['linear', 'circular', 'solidária', 'artesanal'], 15);
  add('GE7-SUS', null, 'Segundo o livro, o aumento do consumo está associado a impactos como:',
    ['a redução da disponibilidade de água em algumas regiões', 'a diminuição dos resíduos', 'a melhora da qualidade do ar', 'o fim das mudanças no clima'], 16);
})();
