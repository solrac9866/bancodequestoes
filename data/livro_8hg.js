/* 8º ano – História e Geografia – Volume 4 (4º bimestre)
   Em cada questão a PRIMEIRA alternativa é a correta; o site embaralha na hora de gerar a prova. */

/* ===================== HISTÓRIA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'História', A = 8;
  B.hab.push(
    { id: 'HI8-ESC', ano: A, disc: D, cod: '', tit: 'Luta negra, abolição e racismo científico',
      desc: 'Analisar fontes sobre a resistência à escravidão e o fim da escravidão no Brasil, as políticas de branqueamento do pós-abolição e as teorias raciais do século XIX.', aulas: 'Aulas 1 a 3' },
    { id: 'HI8-IND', ano: A, disc: D, cod: '', tit: 'Povos indígenas, civilização e Estado brasileiro',
      desc: 'Reconhecer as políticas civilizatórias nas Américas, a resistência dos povos indígenas e a política indigenista do Brasil colonial, imperial e republicano.', aulas: 'Aulas 4 e 5' },
    { id: 'HI8-IDE', ano: A, disc: D, cod: '', tit: 'Cultura, literatura e identidade nacional no século XIX',
      desc: 'Compreender a construção da identidade brasileira no século XIX: literatura negra, cultura letrada e não letrada e as gerações do Romantismo.', aulas: 'Aulas 6 a 8' },
    { id: 'HI8-EUA', ano: A, disc: D, cod: '', tit: 'Estados Unidos e América Latina no século XIX',
      desc: 'Interpretar mapas, charges e pinturas sobre a expansão territorial dos EUA, o Destino Manifesto, a Doutrina Monroe e o Corolário Roosevelt.', aulas: 'Aulas 9 e 10' },
    { id: 'HI8-IMP', ano: A, disc: D, cod: '', tit: 'Nacionalismo, imperialismo e partilha da África',
      desc: 'Relacionar nacionalismo, teorias raciais e imperialismo; interpretar mapas e charges sobre a Conferência de Berlim, a partilha da África e as resistências africanas.', aulas: 'Aulas 11 a 15' },
    { id: 'HI8-COL', ano: A, disc: D, cod: '', tit: 'Recursos africanos, capitalismo e colonialismo hoje',
      desc: 'Identificar a exploração de recursos africanos pelo capitalismo industrial europeu e as permanências do colonialismo na economia e nas fronteiras atuais.', aulas: 'Aulas 16 a 18' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length-1].texto = texto; };

  /* ---------- HI8-ESC ---------- */
  add('HI8-ESC', '8_hist_resist', 'No esquema sobre as formas de resistência e luta contra a escravidão, a carta de alforria ilustra qual forma de luta?',
    ['Justiça: uso das leis e do sistema judiciário', 'Fugas das fazendas', 'Formação de quilombos', 'Revoltas armadas'], 1);
  add('HI8-ESC', '8_hist_resist', 'Segundo o esquema, os quilombos eram:',
    ['comunidades formadas por escravizados refugiados', 'jornais que defendiam a abolição', 'cartas que concediam liberdade', 'levantes contra as condições de cativeiro'], 1);
  add('HI8-ESC', '8_hist_resist', 'No esquema, o jornal O Abolicionista exemplifica:',
    ['o movimento organizado de luta pela abolição', 'as fugas de escravizados', 'o uso das leis como forma de luta', 'a formação de comunidades refugiadas'], 1);
  add('HI8-ESC', '8_hist_capoeira', 'Na análise de fontes do livro, a litografia de Rugendas (c. 1830) mostra um jogo de capoeira ou dança de guerra. Ela é interpretada como:',
    ['representação da cultura como preservação da memória e da história', 'prova material dos instrumentos de tortura', 'lei que alterou o regime de trabalho', 'lista de pessoas escravizadas de uma fazenda'], 1);
  add('HI8-ESC', '8_hist_objetos', 'Corrente com gargalheira, “viramundo”, algemas e tronco de madeira eram usados no século XIX contra pessoas escravizadas. Como fonte, esses objetos são:',
    ['evidências materiais da violência da escravidão', 'documentos escritos sobre as leis do Império', 'obras de arte sobre a cultura africana', 'registros de conquistas do povo negro'], 1);
  add('HI8-ESC', '8_hist_lista', 'A imagem mostra a lista de pessoas escravizadas de uma propriedade (1887). Essa fonte escrita revela a escravidão como:',
    ['sistema econômico, com regras internas e desumanização', 'forma de resistência cultural', 'conquista da luta do povo negro', 'movimento de fuga para os quilombos'], 1);
  add('HI8-ESC', '8_hist_lei', 'O documento mostrado é a Lei n.º 3.353, de 13 de maio de 1888. Na análise do livro, ele representa:',
    ['uma conquista da luta do povo negro, com alteração de leis', 'uma prova material da violência escravista', 'a preservação da cultura por meio da arte', 'a lista de pessoas escravizadas em uma fazenda'], 1);
  add('HI8-ESC', '8_hist_cam', 'A pintura A redenção de Cam (1895) mostra uma família em que, a cada geração, as pessoas têm a pele mais clara. A ideia defendida por parte das elites da época era a de:',
    ['embranquecimento da população', 'valorização das culturas de matriz africana', 'defesa da igualdade entre as raças', 'crítica à imigração europeia'], 2);
  add('HI8-ESC', '8_hist_cam', 'O título da pintura faz referência a uma passagem bíblica em que Noé amaldiçoa o filho Cam. Segundo o livro, essa história foi usada ao longo do tempo para:',
    ['justificar preconceitos raciais', 'defender o fim da escravidão', 'valorizar a cultura africana', 'incentivar a imigração europeia'], 2);
  add('HI8-ESC', '8_hist_emigr', 'Na pintura Os emigrantes, de Antonio Rocco, a imigração europeia é representada de forma idealizada. Os imigrantes aparecem como:',
    ['trabalhadores dignos e parte essencial do progresso nacional', 'um entrave ao desenvolvimento do país', 'pessoas invisibilizadas pela sociedade', 'ex-escravizados em busca de terras'], 2);
  add('HI8-ESC', '8_hist_darwin', 'O darwinismo social, associado a teorias raciais e frenológicas como a da imagem, foi:',
    ['uma distorção das ideias de Darwin usada para justificar a dominação e o extermínio de populações', 'uma teoria que defendia a igualdade entre os povos', 'a base científica da abolição da escravidão', 'uma explicação religiosa para a origem das raças'], 3);
  add('HI8-ESC', '8_hist_civbar', 'A ilustração da revista Puck (1902) contrapõe “Civilização” e “Barbárie”. Ela apresenta a visão do darwinismo social ao mostrar:',
    ['a “civilização” armada avançando sobre povos vistos como inferiores', 'a igualdade entre colonizadores e colonizados', 'africanos governando a si mesmos', 'a cooperação entre europeus e africanos'], 3);
  add('HI8-ESC', null, 'Após a abolição, o Código Penal de 1890 criminalizou a chamada “vadiagem”, definida como o comportamento de quem:',
    ['não tinha profissão e vivia na ociosidade, mesmo apto para trabalhar', 'fugia de fazendas escravistas', 'se recusava a pagar impostos', 'participava de revoltas armadas'], 2);
  add('HI8-ESC', null, 'Segundo o texto do Caderno de Exercícios, o que caracterizava os quilombos era:',
    ['a resistência e a conquista da autonomia', 'a propriedade de grandes fazendeiros', 'o desaparecimento depois de 1888', 'a busca de boa relação com os senhores'], 1);

  /* ---------- HI8-IND ---------- */
  add('HI8-IND', '8_hist_school', 'Na charge School Begins (1899), o professor é o Tio Sam. Ele representa:',
    ['o governo dos Estados Unidos', 'o povo indígena', 'a Igreja Católica', 'os imigrantes europeus'], 4);
  add('HI8-IND', '8_hist_school', 'Na charge de 1899, os estudantes e as demais pessoas na sala de aula representam:',
    ['territórios ou povos sob o domínio dos EUA', 'cidadãos estadunidenses brancos', 'professores de outros países', 'estudantes de escolas indígenas'], 4);
  add('HI8-IND', '8_hist_schooldet', 'No detalhe da charge, o indígena aparece como aluno passivo. Segundo o livro, na realidade histórica os povos indígenas:',
    ['resistiram de várias formas, como levantes, ações na Justiça e mobilizações', 'aceitaram passivamente a “civilização”', 'abandonaram suas línguas e tradições', 'deixaram de se identificar como indígenas'], 4);
  add('HI8-IND', '8_hist_school', 'As políticas civilizatórias nas Américas eram justificadas pela ideia de que:',
    ['a cultura europeia era superior às demais', 'as culturas indígenas deviam ser preservadas', 'os povos nativos eram iguais aos colonizadores', 'a educação era um direito dos indígenas'], 4);
  add('HI8-IND', '8_hist_tamoio', 'A tela Último tamoio (1883), de Rodolfo Amoedo, representa:',
    ['uma interpretação oitocentista de Aimberê, chefe dos tamoios, morto numa praia', 'a assinatura da Constituição de 1824', 'a fundação da FUNAI', 'um aldeamento jesuíta do século XVII'], 5);
  add('HI8-IND', null, 'Na linha do tempo da política indigenista, os aldeamentos jesuítas (séculos XV-XVII) reuniam populações indígenas sob a liderança de membros da Igreja com o objetivo de:',
    ['catequização', 'exploração da borracha', 'proteção dos territórios', 'formação de exércitos'], 5);
  add('HI8-IND', null, 'A Constituição do Império do Brasil (1824), outorgada por Dom Pedro I:',
    ['não mencionou os povos indígenas nem lhes garantiu cidadania', 'reconheceu seus direitos originários sobre as terras', 'criou o Serviço de Proteção aos Índios', 'proibiu a catequese nos aldeamentos'], 5);
  add('HI8-IND', null, 'O Ato Adicional de 1834 transferiu para as províncias a responsabilidade pela:',
    ['catequese e “civilização” dos indígenas', 'demarcação das terras indígenas', 'administração da FUNAI', 'defesa dos quilombos'], 5);
  add('HI8-IND', null, 'O projeto de José Bonifácio (1823) propunha a assimilação dos povos indígenas à sociedade nacional por meio de:',
    ['educação e “civilização”', 'guerra justa', 'trabalho forçado nas fazendas', 'isolamento em reservas'], 5);
  add('HI8-IND', null, 'As Cartas Régias de 1808 e 1809 autorizaram a chamada “Guerra Justa” contra os povos indígenas que:',
    ['resistiam à ocupação de suas terras', 'aceitavam a catequese', 'viviam em aldeamentos jesuítas', 'apoiavam o Império'], 5);
  add('HI8-IND', null, 'A Constituição Federal de 1988, segundo a linha do tempo do livro:',
    ['reconhece os direitos originários dos povos indígenas sobre suas terras, culturas e línguas', 'criou o Serviço de Proteção aos Índios (SPI)', 'regulamentou a “Guerra Justa”', 'transferiu a catequese às províncias'], 5);
  add('HI8-IND', null, 'A Fundação Nacional dos Povos Indígenas (FUNAI), criada em 1967, foi proposta para:',
    ['substituir o SPI e ampliar a proteção aos povos indígenas', 'incentivar a exploração da borracha', 'catequizar os indígenas nos aldeamentos', 'extinguir os territórios indígenas'], 5);

  /* ---------- HI8-IDE ---------- */
  add('HI8-IDE', '8_hist_batucada', 'Segundo a legenda da Batucada (1822), o batuque é uma prática coletiva de percussão e dança frequentemente associada a rituais de:',
    ['resistência cultural, religiosa e social', 'cultura letrada das elites', 'comemoração oficial do Império', 'preparação militar'], 7);
  add('HI8-IDE', '8_hist_batucada', 'No Brasil do século XIX, festas, danças e músicas populares como o batuque pertencem principalmente à:',
    ['cultura não letrada, transmitida por tradições', 'cultura letrada, baseada na escrita formal', 'cultura acadêmica das universidades', 'literatura romântica'], 7);
  add('HI8-IDE', '8_hist_capoeira', 'Segundo o resumo da Aula 7, a capoeira, que chegou a ser marginalizada ou reprimida no século XIX, tornou-se:',
    ['um símbolo importante da cultura nacional', 'uma prática extinta', 'uma manifestação da cultura letrada', 'um gênero literário romântico'], 7);
  add('HI8-IDE', '8_hist_moema', 'A tela Moema (1866), de Victor Meirelles, evidencia, segundo a legenda, o contraste entre:',
    ['a idealização do indígena como herói nacional e a violência sofrida pelas populações nativas', 'a vida urbana e a vida rural', 'a cultura africana e a europeia', 'o Império e a República'], 8);
  add('HI8-IDE', '8_hist_romant', 'No esquema do Romantismo no Brasil, são temas da primeira geração (nacionalista ou indianista):',
    ['o indígena, a saudade da pátria, a natureza, a religiosidade e o amor impossível', 'tédio, pessimismo e o mal do século', 'defesa de causas humanitárias e denúncia da escravidão', 'a crítica à elite por meio da ironia'], 8);
  add('HI8-IDE', '8_hist_romant', 'Segundo o esquema, qual destes autores pertence à terceira geração romântica (condoreira)?',
    ['Castro Alves', 'Gonçalves Dias', 'Álvares de Azevedo', 'Casimiro de Abreu'], 8);
  add('HI8-IDE', '8_hist_romant', 'Tédio, pessimismo, sofrimento, a morte e o medo do amor são temas da geração romântica chamada:',
    ['ultrarromântica (segunda geração)', 'indianista (primeira geração)', 'condoreira (terceira geração)', 'realista-naturalista'], 8);
  add('HI8-IDE', null, 'No trecho de Úrsula, de Maria Firmina dos Reis, qual expressão mostra como os traficantes enxergavam os africanos escravizados?',
    ['“mercadoria humana”', '“camponeses livres”', '“trabalhadores dignos”', '“companheiros de viagem”'], 6);
  add('HI8-IDE', null, 'Segundo o resumo da Aula 6, escritores negros do século XIX, como Maria Firmina dos Reis, ao criarem protagonistas negros com profundidade, ajudaram a:',
    ['romper com os estereótipos da literatura dominante', 'reforçar a ideia de inferioridade dos negros', 'idealizar a escravidão como regime brando', 'afastar a literatura da identidade nacional'], 6);
  add('HI8-IDE', null, 'Segundo o texto de Fiorin, o romance O guarani, de José de Alencar, concebe o mito de origem da nação a partir de um casal, Peri e Cecília, que dá à nação um caráter cultural:',
    ['luso-tupi', 'afro-europeu', 'exclusivamente português', 'exclusivamente indígena'], 7);
  add('HI8-IDE', null, 'Segundo o resumo da Aula 6, Machado de Assis criticava a hipocrisia da elite e a desigualdade racial por meio:',
    ['da ironia', 'de discursos políticos', 'de poemas sobre a natureza', 'de cartas ao Imperador'], 6);
  add('HI8-IDE', null, 'Nos versos “Minha terra tem palmeiras, / Onde canta o Sabiá”, de Gonçalves Dias, as imagens da natureza expressam principalmente:',
    ['o nacionalismo e o orgulho do Brasil', 'a crítica aos problemas ambientais', 'a valorização da cultura europeia', 'uma descrição neutra, sem sentimentos'], 8);
  add('HI8-IDE', null, 'Entre as características da cultura letrada no Brasil do século XIX, o esquema da Aula 7 destaca:',
    ['acesso restrito às elites urbanas e educadas', 'transmissão apenas oral', 'práticas ligadas às classes populares rurais', 'ausência de documentação formal'], 7);

  /* ---------- HI8-EUA ---------- */
  add('HI8-EUA', '8_hist_mapaeua', 'No mapa da expansão dos EUA, a Aquisição da Louisiana (1803) foi feita por:',
    ['compra da França', 'guerra contra o México', 'anexação da República do Texas', 'compra da Rússia'], 9);
  add('HI8-EUA', '8_hist_mapaeua', 'Segundo o mapa, o Alasca foi incorporado aos EUA em 1867 por:',
    ['compra da Rússia', 'cessão mexicana', 'tratado com a Grã-Bretanha', 'compra da França'], 9);
  add('HI8-EUA', '8_hist_mapaeua', 'O mapa mostra a Cessão Mexicana (1848). Ela resultou:',
    ['da Guerra Mexicano-Americana (1846-1848), na qual o México perdeu grandes territórios', 'de uma compra amigável feita pelo presidente Monroe', 'do Tratado de Viena', 'da independência do Texas em 1836'], 9);
  add('HI8-EUA', '8_hist_judge', 'A charge “O México para os... estadunidenses!”, publicada em 1898, ajuda a analisar:',
    ['os interesses políticos e econômicos dos EUA sobre a América Latina', 'a defesa da soberania mexicana', 'a aliança entre os países latino-americanos', 'o fim do Destino Manifesto'], 9);
  add('HI8-EUA', '8_hist_progresso', 'A pintura Progresso americano (1872), de John Gast, representa de forma simbólica e idealizada:',
    ['a expansão dos EUA para o Oeste, com visão favorável', 'a violência contra os indígenas', 'a Guerra Mexicano-Americana', 'a chegada dos imigrantes europeus'], 9);
  add('HI8-EUA', '8_hist_progresso', 'A visão favorável da expansão para o Oeste está ligada ao Destino Manifesto, ideia segundo a qual os EUA:',
    ['tinham a missão divina de ocupar o continente e “civilizar” outros povos', 'deviam respeitar os territórios indígenas', 'precisavam devolver terras ao México', 'não deviam expandir suas fronteiras'], 9);
  add('HI8-EUA', '8_hist_tiosam', 'Na charge “Ora, ora, quantas possibilidades!”, o Tio Sam traça rotas comerciais no mapa da América do Sul. A charge revela:',
    ['o interesse econômico dos EUA na América Latina', 'a defesa do comércio entre iguais', 'a proteção dos povos indígenas', 'o apoio dos EUA às colônias europeias'], 9);
  add('HI8-EUA', '8_hist_monroe', 'Segundo o esquema, a Doutrina Monroe foi criada em 1823 pelo presidente dos EUA:',
    ['James Monroe', 'Theodore Roosevelt', 'John Kerry', 'John Gast'], 10);
  add('HI8-EUA', '8_hist_monroe', 'A ideia de “América para os americanos”, da Doutrina Monroe, propunha proteger os países latino-americanos recém-independentes de recolonização, mas também serviu para:',
    ['expandir a influência dos EUA na região', 'impedir qualquer intervenção dos EUA', 'devolver territórios ao México', 'apoiar as potências europeias'], 10);
  add('HI8-EUA', '8_hist_monroe', 'O Corolário Roosevelt, adotado em 1904, justificou:',
    ['uma intervenção mais direta dos EUA na América Latina', 'a independência das colônias espanholas', 'a compra do Alasca', 'a retirada dos EUA da região'], 10);
  add('HI8-EUA', null, 'O Destino Manifesto, difundido a partir de 1845, baseava-se na crença na superioridade dos:',
    ['brancos protestantes anglo-saxões', 'povos latino-americanos', 'indígenas das planícies', 'imigrantes católicos'], 9);
  add('HI8-EUA', null, 'No século XIX, os Estados Unidos ampliaram seu território por meio de:',
    ['compras, tratados e guerras', 'apenas guerras contra a Europa', 'apenas tratados de paz', 'doações de países latino-americanos'], 9);
  add('HI8-EUA', null, 'Para o autor Tulchin, a mensagem de Monroe acabou se tornando, para a América Latina, símbolo de:',
    ['uma intenção agressiva dos EUA em relação à região', 'apoio militar contra as potências europeias', 'respeito à soberania latino-americana', 'cooperação econômica igualitária'], 10);

  /* ---------- HI8-IMP ---------- */
  add('HI8-IMP', '8_hist_afr1870', 'Comparando os mapas “África em 1870” e “África em 1895”, a mudança mais evidente é que:',
    ['grande parte do interior passou a ser dividida entre potências europeias', 'a África deixou de ter colônias', 'só os portugueses ampliaram seus domínios', 'a Europa abandonou a região do litoral'], 11);
  add('HI8-IMP', '8_hist_afr1870', 'No mapa de 1895, a legenda indica que a cor vermelha corresponde ao domínio:',
    ['belga', 'britânico', 'alemão', 'português'], 11);
  add('HI8-IMP', '8_hist_partilha', 'No mapa da divisão colonial da África no século XIX, o Congo Belga é o território da potência:',
    ['Bélgica', 'França', 'Alemanha', 'Itália'], 14);
  add('HI8-IMP', '8_hist_partilha', 'No mesmo mapa, o território de Angola, destacado em amarelo, pertencia a:',
    ['Portugal', 'Espanha', 'Grã-Bretanha', 'Bélgica'], 14);
  add('HI8-IMP', '8_hist_partilha', 'A Conferência de Berlim (1884-1885), convocada por Bismarck, teve como objetivo:',
    ['discutir a divisão da África entre as potências europeias, evitando conflitos entre elas', 'garantir a independência dos povos africanos', 'proibir a colonização da África', 'negociar com representantes dos reinos africanos'], 14);
  add('HI8-IMP', '8_hist_m1830_1902', 'Comparando os mapas de 1830 e de 1902, em 1902 quase todo o continente africano estava sob controle europeu, com exceção de:',
    ['Libéria e Etiópia', 'Egito e Sudão', 'Angola e Moçambique', 'Marrocos e Argélia'], 14);
  addT('HI8-IMP', 'A unificação de países como Itália e Alemanha resultou em Estados mais fortes e centralizados. Isso aumentou sua capacidade política, econômica e militar, levando-os a buscar colônias como forma de ampliar seu poder e prestígio internacional.', 'Segundo o esquema sobre nacionalismo, a unificação de países como Itália e Alemanha levou esses Estados, mais fortes e centralizados, a buscar:',
    ['colônias, para ampliar seu poder e prestígio internacional', 'a paz com seus vizinhos', 'a abolição das fronteiras', 'a independência de outros países'], 12);
  addT('HI8-IMP', 'Na Alemanha, o nacionalismo incentivou uma política externa mais agressiva sob Guilherme II. Defendia que o país precisava de espaço e influência global, por meio da conquista de colônias.', 'O livro chama a política alemã descrita no trecho, que buscava colônias para dar ao país espaço e influência global, de busca pelo:',
    ['“lugar ao sol”', '“fardo do homem branco”', '“sangue e ferro”', '“destino manifesto”'], 12);
  add('HI8-IMP', '8_hist_unif', 'Na unificação alemã (1866-1871), o chanceler da Prússia que usou a política de “sangue e ferro” foi:',
    ['Otto von Bismarck', 'Guilherme II', 'Giuseppe Garibaldi', 'Rudyard Kipling'], 12);
  add('HI8-IMP', '8_hist_colonias', 'A gravura “Imagens de nossas colônias” (“Uma tarde de domingo na África Ocidental”) é descrita no livro como carregada de ideologia:',
    ['racista', 'abolicionista', 'anticolonial', 'indigenista'], 12);
  add('HI8-IMP', '8_hist_fardo', 'A charge da revista Life questiona o poema “O Fardo do Homem Branco”, de Kipling, que apresentava a colonização como:',
    ['uma missão moral e civilizadora dos povos europeus e estadunidense', 'uma forma de exploração econômica', 'um crime contra os povos colonizados', 'uma política de igualdade entre as nações'], 13);
  add('HI8-IMP', '8_hist_leao', 'Na charge “Benevolência Britânica” (1882), o enorme leão com luvas “Army” e “Navy” representa:',
    ['o Império Britânico e seu poder militar sobre povos submetidos', 'a resistência africana', 'a ajuda humanitária britânica', 'o nacionalismo irlandês'], 13);
  add('HI8-IMP', '8_hist_resistafr', 'No esquema das resistências à partilha, o genocídio dos Herero e dos Nama (1904-1908), na atual Namíbia, foi cometido pelo:',
    ['Império Alemão', 'Império Britânico', 'Estado Livre do Congo', 'Império Otomano'], 15);
  add('HI8-IMP', '8_hist_resistafr', 'Segundo o esquema, a Rebelião Ashanti (1900-1901), em Gana, foi uma reação à tentativa de expansão:',
    ['britânica', 'francesa', 'italiana', 'belga'], 15);
  
  /* ---------- HI8-COL ---------- */
  add('HI8-COL', '8_hist_congo', 'Sob o domínio de Leopoldo II, o Estado Livre do Congo (1885-1908) tornou-se:',
    ['propriedade pessoal do rei da Bélgica', 'uma colônia alemã', 'um Estado independente e democrático', 'protetorado britânico'], 16);
  add('HI8-COL', '8_hist_congo', 'No Estado Livre do Congo foi instaurado um regime de trabalho forçado voltado principalmente à extração de:',
    ['borracha', 'café', 'cacau', 'algodão'], 16);
  add('HI8-COL', '8_hist_recursos', 'No mapa das principais matérias-primas exploradas pelas potências imperialistas, os contornos azuis indicam áreas de:',
    ['produção de petróleo e gás', 'produção mineral', 'exploração florestal', 'agricultura de exportação'], 17);
  add('HI8-COL', '8_hist_recursos', 'Na legenda do mesmo mapa, os contornos vermelhos correspondem a áreas de:',
    ['produção mineral', 'produção de petróleo e gás', 'exploração florestal', 'pesca industrial'], 17);
  add('HI8-COL', '8_hist_cafe', 'No mapa dos maiores exportadores de café do mundo (2024), qual país africano ocupa a 5.ª posição?',
    ['Etiópia', 'Quênia', 'Tanzânia', 'Burundi'], 17);
  add('HI8-COL', '8_hist_cafe', 'Segundo o mapa, qual destes países é o 16.º maior exportador mundial de café?',
    ['Quênia', 'Ruanda', 'República Democrática do Congo', 'Burundi'], 17);
  add('HI8-COL', '8_hist_ouro', 'No mapa da indústria de ouro e diamantes na África, os países em rosa (produtores dos dois) são:',
    ['República Democrática do Congo e Tanzânia', 'Mali e Sudão', 'Angola e Namíbia', 'Marrocos e Egito'], 17);
  add('HI8-COL', '8_hist_ouro', 'No mesmo mapa, qual destes países aparece em verde, como principal produtor de diamantes?',
    ['Angola', 'Mali', 'Sudão', 'Tanzânia'], 17);
  add('HI8-COL', '8_hist_ue', 'No mapa das relações comerciais entre a União Europeia e a África (2020), as exportações africanas para a UE consistem em grande parte de:',
    ['bens primários (matérias-primas)', 'máquinas e veículos', 'produtos químicos', 'produtos manufaturados de alta tecnologia'], 18);
  add('HI8-COL', '8_hist_ue', 'Já as exportações da União Europeia para a África são, em sua maioria, de:',
    ['produtos manufaturados', 'matérias-primas', 'comida e bebida', 'energia'], 18);
  add('HI8-COL', '8_hist_ue', 'Segundo o livro, esse padrão do comércio atual entre a UE e a África reflete:',
    ['estruturas do modelo colonial, como o fornecimento de insumos africanos às indústrias europeias', 'o fim da dependência econômica africana', 'a industrialização acelerada da África', 'a igualdade nas trocas comerciais'], 18);
  add('HI8-COL', null, 'Segundo o Caderno de Exercícios, uma marca do imperialismo europeu na África ainda percebida na economia é que a maior parte dos países africanos depende:',
    ['da exportação de matérias-primas e produtos agrícolas', 'dos investimentos dos antigos colonizadores em tecnologia', 'do setor de serviços', 'de nenhum apoio financeiro estrangeiro'], 17);
  add('HI8-COL', null, 'A África Ocidental é responsável por 70% a 75% da produção mundial de:',
    ['cacau', 'borracha', 'marfim', 'cobre'], 17);
  add('HI8-COL', null, 'Entre as permanências da exploração imperialista, as fronteiras definidas na Conferência de Berlim, que ignoraram as diferenças entre os povos africanos, contribuíram para:',
    ['conflitos internos e guerras civis até hoje', 'a unificação cultural do continente', 'o fim das desigualdades', 'a rápida industrialização'], 18);
})();

/* ===================== GEOGRAFIA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Geografia', A = 8;
  B.hab.push(
    { id: 'GE8-URB', ano: A, disc: D, cod: '', tit: 'Urbanização na América Latina e no Brasil',
      desc: 'Interpretar gráficos, tabelas e mapas sobre a população urbana e rural, os fatores da urbanização e os indicadores sociais da América Latina e do Brasil.', aulas: 'Aula 1' },
    { id: 'GE8-AFU', ano: A, disc: D, cod: '', tit: 'Urbanização no continente africano',
      desc: 'Reconhecer as fases da urbanização africana, interpretar mapas de população urbana e identificar os problemas do crescimento urbano pouco planejado.', aulas: 'Aula 2' },
    { id: 'GE8-HAB', ano: A, disc: D, cod: '', tit: 'Habitação, segregação e planejamento urbano',
      desc: 'Compreender o déficit habitacional, a segregação socioespacial, os movimentos sociais urbanos e as políticas de planejamento e mobilidade urbana.', aulas: 'Aulas 3 a 6' },
    { id: 'GE8-BIO', ano: A, disc: D, cod: '', tit: 'Biodiversidade e recursos naturais',
      desc: 'Relacionar geodiversidade e biodiversidade, reconhecer hotspots e interpretar mapas dos recursos naturais da África e seus impactos socioambientais.', aulas: 'Aulas 7 e 8' },
    { id: 'GE8-AGE', ano: A, disc: D, cod: '', tit: 'Geopolítica das águas e energias renováveis',
      desc: 'Analisar a distribuição, o consumo e os conflitos pela água na América Latina e na África e comparar fontes de energia renováveis e não renováveis.', aulas: 'Aulas 9 e 10' },
    { id: 'GE8-DES', ano: A, disc: D, cod: '', tit: 'Desertificação e Antártida',
      desc: 'Identificar causas, impactos e estratégias de combate à desertificação no Nordeste brasileiro e no Sahel e compreender as características e a gestão internacional da Antártida.', aulas: 'Aulas 11 e 12' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length-1].texto = texto; };

  /* ---------- GE8-URB ---------- */
  add('GE8-URB', '8_geo_urbpop', 'Segundo o gráfico, a população total da América Latina em 2025 é estimada em:',
    ['693 milhões de habitantes', '571 milhões de habitantes', '122 milhões de habitantes', '452 milhões de habitantes'], 1);
  add('GE8-URB', '8_geo_urbpop', 'De acordo com o gráfico, em 2025 a população urbana da América Latina corresponde a cerca de:',
    ['82,4% do total', '17,6% do total', '50% do total', '25,7% do total'], 1);
  add('GE8-URB', '8_geo_barras', 'Entre as regiões do gráfico, a que tem a maior população urbana é:',
    ['América do Sul', 'Caribe', 'América Central e México', 'todas têm o mesmo valor'], 1);
  add('GE8-URB', '8_geo_barras', 'Entre as três regiões, a que tem a maior proporção de população rural é:',
    ['o Caribe (25,7%)', 'a América do Sul (14,4%)', 'a América Central e o México (23,1%)', 'a América do Sul e o Caribe, empatados'], 1);
  addT('GE8-URB', 'A modernização da agricultura reduziu a necessidade de mão de obra no campo, forçando muitas famílias a migrarem para as cidades em busca de trabalho e melhores condições de vida.', 'O trecho do esquema descreve a modernização da agricultura, que reduziu a necessidade de mão de obra no campo. Esse processo está associado a qual fator da urbanização?',
    ['Êxodo rural', 'Crescimento natural', 'Imigração', 'Urbanização planejada'], 1);
  addT('GE8-URB', 'Grandes fluxos migratórios internacionais, principalmente vindos da Europa e da Ásia nos séculos XIX e XX, fortaleceram o crescimento das cidades latino-americanas.', 'O trecho do esquema descreve os fluxos migratórios vindos da Europa e da Ásia nos séculos XIX e XX. Esse fator da urbanização é chamado de:',
    ['imigração', 'êxodo rural', 'crescimento natural', 'modernização do campo'], 1);
  add('GE8-URB', '8_geo_tabela', 'Segundo os dados da Cepal (2024) apresentados na tabela, a taxa de informalidade na América Latina é de:',
    ['53,2%', '8,5%', '27,3%', '10,6%'], 1);
  add('GE8-URB', '8_geo_tabela', 'Na tabela, qual valor corresponde à taxa de pobreza rural?',
    ['39,2%', '27,3%', '10,6%', '21%'], 1);
  add('GE8-URB', '8_geo_pobreza', 'Na legenda do mapa de pobreza na América Latina (2022), a cor mais escura (vinho) indica áreas em que a pobreza atinge:',
    ['60,1% ou mais da população', 'até 15% da população', 'entre 30% e 45% da população', 'entre 15,1% e 30% da população'], 1);
  add('GE8-URB', '8_geo_brasil', 'Segundo o gráfico e o texto sobre a urbanização brasileira, em 1970 a população urbana correspondia a:',
    ['56% da população', '31,3% da população', 'mais de 80% da população', '12,9% da população'], 1);
  add('GE8-URB', '8_geo_brasil', 'De acordo com o gráfico, a população urbana brasileira em 2022 era de cerca de:',
    ['177,5 milhões de pessoas', '25,6 milhões de pessoas', '12,9 milhões de pessoas', '28,4 milhões de pessoas'], 1);
  add('GE8-URB', '8_geo_urbmundo', 'No mapa da urbanização mundial (2005 a 2010), as maiores taxas de crescimento da população urbana (de 4,6% a 7% ao ano) aparecem sobretudo no continente:',
    ['africano', 'europeu', 'oceânico', 'sul-americano'], 1);

  /* ---------- GE8-AFU ---------- */
  addT('GE8-AFU', 'A urbanização começou no período pré-colonial, com o desenvolvimento de cidades comerciais, como Timbuktu (Mali) e Mombasa (Quênia), vistas como centros de comércio e cultura.', 'No esquema, quais cidades comerciais são citadas como exemplos da urbanização pré-colonial africana?',
    ['Timbuktu (Mali) e Mombasa (Quênia)', 'Lagos (Nigéria) e Cairo (Egito)', 'Luanda (Angola) e Kinshasa (RD Congo)', 'Joanesburgo e Cidade do Cabo'], 2);
  addT('GE8-AFU', 'Marcado por profundas transformações espaciais e culturais. Redefinição de espaços urbanos para atender aos interesses das potências imperialistas, muitas vezes marginalizando as populações locais.', 'Segundo o esquema, o período colonial foi marcado por:',
    ['espaços urbanos redefinidos para atender aos interesses imperialistas, marginalizando as populações locais', 'cidades planejadas para a população africana', 'ausência de transformações espaciais', 'rápida expansão urbana sem planejamento'], 2);
  addT('GE8-AFU', 'Rápida expansão urbana, sem planejamento adequado, o que resultou em crescimento desordenado, com precarização de infraestruturas.', 'No período pós-independência, a urbanização africana foi caracterizada por:',
    ['rápida expansão urbana, sem planejamento adequado e com precarização da infraestrutura', 'cidades comerciais de cultura e comércio', 'redefinição de espaços para as potências imperialistas', 'estagnação do crescimento urbano'], 2);
  add('GE8-AFU', '8_geo_afurb', 'No mapa da população urbana da África (2020), a cor mais escura indica:',
    ['maior população urbana', 'menor população urbana', 'maior população rural', 'maior densidade de florestas'], 2);
  add('GE8-AFU', '8_geo_afurb', 'Qual destes países aparece no mapa na cor mais escura, indicando maior população urbana?',
    ['Nigéria', 'Namíbia', 'Botsuana', 'Líbia'], 2);
  add('GE8-AFU', '8_geo_afurb', 'Qual destes países africanos tem, segundo o mapa, a menor população urbana?',
    ['Namíbia', 'Nigéria', 'Egito', 'Etiópia'], 2);
  add('GE8-AFU', null, 'Segundo a ONU, megacidades são aquelas em que vivem mais de:',
    ['10 milhões de habitantes', '1 milhão de habitantes', '5 milhões de habitantes', '100 milhões de habitantes'], 2);
  add('GE8-AFU', null, 'Segundo o livro, em pelo menos quantos países africanos a população urbana já supera a rural?',
    ['11', '3', '25', '54'], 2);
  add('GE8-AFU', null, 'Entre os problemas do crescimento urbano acelerado e pouco planejado nas cidades africanas está:',
    ['a precariedade no abastecimento de água potável e na coleta de esgoto, o que aumenta o risco de doenças', 'o excesso de hospitais e centros de saúde', 'a abundância de moradias adequadas', 'o transporte público sobrando e subutilizado'], 2);
  add('GE8-AFU', null, 'Cerca de 40% dos africanos em situação de pobreza extrema estão concentrados em quatro países. Quais são eles?',
    ['República Democrática do Congo, Madagascar, Nigéria e Tanzânia', 'Egito, Líbia, Argélia e Marrocos', 'África do Sul, Botsuana, Namíbia e Zimbábue', 'Gana, Senegal, Togo e Gabão'], 2);
  add('GE8-AFU', null, 'Na atividade sobre Luanda (Angola), a opção cujo impacto esperado é a “redução de doenças e melhoria da saúde pública” é:',
    ['saneamento básico', 'transporte público', 'habitação social', 'shopping centers'], 2);

  /* ---------- GE8-HAB ---------- */
  add('GE8-HAB', '8_geo_valpo', 'A foto do Cerro Concepción (Valparaíso, Chile) ilustra o tema do déficit habitacional. O déficit qualitativo refere-se a:',
    ['moradias existentes em condições inadequadas, como superlotação, falta de saneamento e áreas de risco', 'falta de unidades habitacionais', 'excesso de moradias vazias', 'aumento do número de condomínios'], 3);
  add('GE8-HAB', '8_geo_valpo', 'Entre as consequências do déficit habitacional citadas no livro está:',
    ['a expansão de favelas e assentamentos informais', 'a redução da vulnerabilidade social', 'a melhoria do saneamento básico', 'o aumento da oferta de moradias populares'], 3);
  add('GE8-HAB', '8_geo_segreg', 'A foto do Rio de Janeiro, com prédios ao lado de uma favela, ilustra o conceito de:',
    ['segregação socioespacial', 'conurbação', 'smart city', 'êxodo urbano'], 4);
  add('GE8-HAB', '8_geo_segreg', 'Segundo o livro, a segregação socioespacial é:',
    ['a distribuição desigual de grupos sociais no espaço urbano, conforme sua condição econômica e acesso à infraestrutura', 'a mistura igualitária de todas as classes sociais', 'um processo exclusivamente natural', 'a divisão do espaço rural em propriedades'], 4);
  add('GE8-HAB', '8_geo_segreg', 'Um dos impactos da segregação socioespacial é que grupos específicos passam a morar em áreas:',
    ['vulneráveis a riscos ambientais, como enchentes e deslizamentos', 'com abundância de áreas verdes e serviços', 'próximas ao trabalho e ao lazer', 'valorizadas pela especulação imobiliária'], 4);
  add('GE8-HAB', '8_geo_rio', 'Entre 1950 e 1980, a urbanização acelerada da América Latina e da África, sem políticas públicas que a acompanhassem, gerou:',
    ['periferização, déficit habitacional e saturação do transporte e do saneamento', 'redução do êxodo rural', 'diminuição das favelas', 'planejamento urbano eficiente'], 5);
  add('GE8-HAB', '8_geo_rio', 'Segundo o livro, a gentrificação é o processo em que:',
    ['populações de baixa renda são expulsas de áreas que se valorizam para a elite', 'moradores pobres recebem casas gratuitas no centro', 'áreas centrais são preservadas como parques', 'a periferia ganha infraestrutura completa'], 4);
  add('GE8-HAB', '8_geo_brt', 'A estação de BRT de Curitiba é citada como solução de mobilidade urbana porque os corredores exclusivos de ônibus:',
    ['podem ser tão eficientes quanto o metrô, a um custo muito menor', 'substituem totalmente o transporte individual', 'dispensam o planejamento urbano', 'custam mais que o metrô'], 5);
  add('GE8-HAB', '8_geo_brt', 'Segundo o livro, Curitiba tornou-se referência mundial ao:',
    ['inverter a lógica de priorizar carros, investindo no transporte coletivo', 'construir mais vias expressas para carros', 'instalar teleféricos e bibliotecas-parque', 'criar o urbanismo social'], 6);
  add('GE8-HAB', null, 'Fundado em 1997, o movimento que atua por meio de ocupações de terrenos ociosos e pressão por políticas habitacionais é o:',
    ['MTST (Movimento dos Trabalhadores Sem-Teto)', 'Cufa (Central Única das Favelas)', 'Proantar', 'Cepal'], 3);
  add('GE8-HAB', null, 'Segundo o livro, na África do Sul o fim do apartheid:',
    ['não eliminou a segregação urbana', 'acabou com toda a precariedade habitacional', 'extinguiu os movimentos sociais urbanos', 'resolveu o déficit de moradias'], 3);
  add('GE8-HAB', null, 'Medellín (Colômbia) ficou conhecida pelo “urbanismo social”, que usou:',
    ['teleféricos (metrocables) e bibliotecas-parque para integrar áreas pobres', 'corredores de BRT para ônibus', 'sensores digitais na rede elétrica', 'condomínios fechados de alto padrão'], 5);
  add('GE8-HAB', null, 'A macrocefalia urbana, discutida na Aula 6, é a:',
    ['concentração desproporcional de população, serviços e investimentos em uma ou poucas cidades', 'distribuição igual de serviços entre todas as cidades', 'redução do tamanho das metrópoles', 'migração das pessoas das cidades para o campo'], 6);

  /* ---------- GE8-BIO ---------- */
  add('GE8-BIO', '8_geo_biodiv', 'No infográfico, a geodiversidade corresponde à diversidade de elementos:',
    ['geológicos, como rochas, solos, relevos e rios', 'vivos, como plantas e animais', 'sociais, como línguas e costumes', 'climáticos, como as estações do ano'], 7);
  add('GE8-BIO', '8_geo_biodiv', 'Segundo o infográfico, a Amazônia tem alta biodiversidade sustentada por chuvas abundantes, enquanto o Deserto do Atacama tem baixa biodiversidade devido a:',
    ['escassez de água e solo mineralizado', 'excesso de chuvas', 'florestas muito densas', 'grande diversidade de rios'], 7);
  add('GE8-BIO', '8_geo_biodiv', 'De acordo com o infográfico, qual é o maior hotspot de biodiversidade do mundo, com cerca de 1/6 das espécies de plantas do planeta?',
    ['Andes Tropicais', 'Mata Atlântica', 'Floresta da Guiné', 'Amazônia'], 7);
  add('GE8-BIO', '8_geo_madag', 'Segundo o livro, Madagascar (como a Mata Atlântica) é um hotspot de biodiversidade que:',
    ['perdeu mais de 70% de sua cobertura original', 'preservou toda a sua cobertura original', 'não tem espécies exclusivas', 'é um deserto'], 7);
  add('GE8-BIO', '8_geo_madag', 'As principais responsáveis pela perda de hábitats na África e na América Latina, segundo o livro, são:',
    ['a agropecuária expansiva, a mineração de larga escala e o crescimento urbano desordenado', 'apenas as mudanças naturais do relevo', 'as unidades de conservação', 'o ecoturismo'], 7);
  add('GE8-BIO', '8_geo_afmat', 'No mapa das principais matérias-primas da África, os contornos azuis indicam as áreas de:',
    ['produção de petróleo e gás', 'produção mineral', 'exploração florestal', 'pesca'], 8);
  add('GE8-BIO', null, 'Segundo o livro, a República Democrática do Congo detém reservas cruciais de qual mineral, essencial para baterias de veículos elétricos e celulares?',
    ['cobalto', 'diamante', 'urânio', 'bauxita'], 8);
  add('GE8-BIO', null, 'O continente africano abriga aproximadamente qual parcela das reservas minerais do planeta?',
    ['30%', '3%', '75%', '90%'], 8);
  add('GE8-BIO', null, 'O deserto africano que, segundo o livro, “espelha” o Deserto do Atacama (América Latina) é o:',
    ['Saara', 'Kalahari', 'Namibe', 'Antártida'], 7);
  add('GE8-BIO', null, 'No Delta do Níger, os vazamentos de petróleo comprometem principalmente:',
    ['a segurança alimentar de comunidades tradicionais', 'a produção de energia solar', 'o turismo de neve', 'a pesca industrial de alto mar'], 8);
  add('GE8-BIO', null, 'Segundo o livro, cerca de 40% da população africana vive abaixo da linha da pobreza, apesar da riqueza natural. Entre os fatores contemporâneos que explicam isso está:',
    ['a dependência excessiva da exportação de matérias-primas brutas, de baixo valor agregado', 'a falta de recursos minerais no continente', 'a ausência total de petróleo', 'o excesso de indústrias de alta tecnologia'], 8);
  add('GE8-BIO', null, 'Segundo o livro, a Costa Rica é exemplo de:',
    ['políticas de desenvolvimento sustentável e conservação', 'desertificação acelerada', 'mineração de larga escala', 'hotspot em extinção total'], 7);

  /* ---------- GE8-AGE ---------- */
  add('GE8-AGE', '8_geo_energia', 'No esquema das fontes de energia, qual fonte renovável gera grandes quantidades de eletricidade, mas a construção de barragens causa impacto ambiental?',
    ['Hidrelétrica', 'Solar', 'Eólica', 'Biomassa'], 10);
  add('GE8-AGE', '8_geo_energia', 'No esquema, qual fonte não renovável fornece grande quantidade de energia, mas tem altas emissões de gases poluentes?',
    ['Petróleo', 'Solar', 'Biomassa', 'Eólica'], 10);
  add('GE8-AGE', '8_geo_energia', 'Segundo o esquema, a energia nuclear:',
    ['gera baixas emissões de gases, mas tem risco de acidentes nucleares', 'depende dos ventos e da insolação', 'usa resíduos orgânicos como combustível', 'é uma fonte renovável'], 10);
  add('GE8-AGE', '8_geo_afmat', 'Segundo o livro, o petróleo e o gás natural são os pilares econômicos de países africanos como:',
    ['Nigéria, Angola, Argélia e Sudão do Sul', 'Lesoto, Burundi e Ruanda', 'Madagascar e Seychelles', 'Botsuana e Zâmbia'], 8);
  add('GE8-AGE', null, 'Entre os setores de consumo de água doce, o maior consumidor, com cerca de 70% do total disponível, é o:',
    ['agrícola', 'industrial', 'doméstico', 'de geração de energia'], 9);
  add('GE8-AGE', null, 'A América Latina detém aproximadamente qual parcela da água doce superficial do mundo?',
    ['um terço', 'um décimo', 'metade', 'dois terços'], 9);
  add('GE8-AGE', null, 'O Aquífero Guarani é citado no livro como exemplo de:',
    ['gestão compartilhada entre Brasil, Argentina, Paraguai e Uruguai', 'conflito entre Egito e Etiópia', 'fonte de energia nuclear', 'região desértica da África'], 9);
  add('GE8-AGE', null, 'A Grande Barragem da Renascença (Gerd), no Nilo Azul, gera tensões porque Egito e Sudão temem que ela:',
    ['reduza a vazão do Rio Nilo e comprometa sua agricultura', 'aumente a vazão do Nilo e cause enchentes', 'seja usada para pesca industrial', 'bloqueie o comércio marítimo'], 9);
  add('GE8-AGE', null, 'O consumo per capita de água varia entre 10 e 19 L/dia em certas regiões africanas, enquanto em Nova York chega a 2 000 L/dia. Esse dado ilustra:',
    ['a grande disparidade de consumo entre regiões do mundo', 'a abundância de água na África', 'a igualdade de acesso à água', 'a menor população de Nova York'], 9);
  add('GE8-AGE', null, 'Na África, a “escassez econômica” de água ocorre quando:',
    ['a falta de gestão e de infraestrutura impede o acesso à água disponível', 'não existe água na região', 'há excesso de chuva', 'a água é usada só na indústria'], 9);
  add('GE8-AGE', null, 'O bagaço da cana-de-açúcar, usado na geração de energia, é um exemplo de fonte de:',
    ['biomassa', 'energia solar', 'energia nuclear', 'gás natural'], 10);
  add('GE8-AGE', null, 'Segundo o livro, a diversificação da matriz energética reduz a vulnerabilidade dos países às:',
    ['oscilações de preço dos combustíveis fósseis no mercado internacional', 'chuvas nos reservatórios', 'migrações internas', 'exportações de minério'], 10);

  /* ---------- GE8-DES ---------- */
  add('GE8-DES', '8_geo_jabre', 'A foto do Pico Jabre (PB) ilustra o avanço da desertificação no semiárido nordestino. O único bioma exclusivamente brasileiro, degradado nesse processo, é:',
    ['a Caatinga', 'o Cerrado', 'a Mata Atlântica', 'a Amazônia'], 11);
  add('GE8-DES', '8_geo_jabre', 'Cerca de quantos milhões de pessoas vivem nas áreas vulneráveis à desertificação no semiárido nordestino, segundo o livro?',
    ['30 milhões', '3 milhões', '135 milhões', '300 milhões'], 11);
  add('GE8-DES', '8_geo_jabre', 'Entre os fatores humanos que mais aceleram a desertificação estão:',
    ['o desmatamento, o sobrepastoreio e a irrigação inadequada', 'a baixa pluviosidade e os solos rasos', 'o reflorestamento e as cisternas', 'a criação de áreas protegidas'], 11);
  add('GE8-DES', '8_geo_antart', 'Apesar da abundância de gelo, a Antártida é geograficamente classificada como:',
    ['um deserto polar', 'uma floresta de coníferas', 'um oceano congelado', 'uma savana'], 12);
  add('GE8-DES', '8_geo_antart', 'A camada de gelo da Antártida armazena cerca de qual parcela da água doce da Terra?',
    ['70%', '7%', '30%', '100%'], 12);
  add('GE8-DES', '8_geo_antart', 'A Cordilheira Transantártica divide a Antártida em:',
    ['Antártida Oriental e Antártida Ocidental', 'Antártida Norte e Antártida Sul', 'Antártida Rural e Antártida Urbana', 'Antártida Brasileira e Antártida Chilena'], 12);
  add('GE8-DES', '8_geo_pinguim', 'Os pinguins-gentoo fazem parte da fauna antártica, que depende de um pequeno crustáceo chamado:',
    ['krill', 'caranguejo-rei', 'camarão-de-água-doce', 'lagosta'], 12);
  add('GE8-DES', '8_geo_pinguim', 'O Tratado Antártico, assinado em 1959, estabeleceu que o continente deve ser usado:',
    ['exclusivamente para fins pacíficos e científicos', 'para exploração de petróleo', 'por quem chegar primeiro', 'para a criação de colônias'], 12);
  add('GE8-DES', null, 'O Protocolo de Madri (1991) reforçou a proteção da Antártida ao proibir a:',
    ['exploração mineral e petrolífera', 'pesquisa científica', 'presença de pinguins', 'navegação de qualquer navio'], 12);
  add('GE8-DES', null, 'Segundo o livro, o Sahel, faixa que atravessa a África do Senegal à Etiópia, perdeu metade de sua cobertura vegetal em apenas:',
    ['50 anos', '5 anos', '500 anos', '10 anos'], 11);
  add('GE8-DES', null, 'O Lago Chade, que abastecia 40 milhões de pessoas, encolheu cerca de quanto desde os anos 1960?',
    ['90%', '9%', '50%', '20%'], 11);
  add('GE8-DES', null, 'A Grande Muralha Verde propõe, na África:',
    ['reflorestar uma faixa de 8 000 km pelo continente', 'construir uma barragem no Rio Nilo', 'criar uma estação científica', 'proibir a agricultura no Sahel'], 11);
  add('GE8-DES', null, 'No semiárido brasileiro, uma estratégia para conviver de forma sustentável com a seca é o Programa de:',
    ['Cisternas, para captação de água de chuva', 'Aquíferos, para exportação de água', 'Barragens do Nilo', 'Hotspots de biodiversidade'], 11);
  add('GE8-DES', null, 'A estação brasileira na Antártida, mantida pelo Proantar na Ilha Rei George, chama-se:',
    ['Estação Comandante Ferraz', 'Estação Amundsen', 'Estação Scott', 'Estação Madri'], 12);
})();
