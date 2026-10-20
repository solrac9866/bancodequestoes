/* 7º ano – Ciências, Língua Inglesa e Projeto de Vida – Volume 4 (4º bimestre)
   Em cada questão a PRIMEIRA alternativa é a correta; o site embaralha na hora de gerar a prova. */

/* ===================== CIÊNCIAS ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Ciências', A = 7;
  B.hab.push(
    { id: 'CI7-SUS', ano: A, disc: D, cod: '', tit: 'SUS e fatores que influenciam a saúde',
      desc: 'Reconhecer o conceito de saúde, os princípios do SUS (universalidade, integralidade e equidade) e os fatores sociais, econômicos, ambientais e individuais que influenciam a saúde.', aulas: 'Aulas 1 e 18' },
    { id: 'CI7-VIR', ano: A, disc: D, cod: '', tit: 'Vírus e doenças virais',
      desc: 'Caracterizar os vírus (estrutura, parasitismo intracelular, reprodução) e identificar agentes, transmissão e prevenção de dengue, febre amarela, gripe, sarampo e HIV.', aulas: 'Aulas 2 e 3' },
    { id: 'CI7-BAC', ano: A, disc: D, cod: '', tit: 'Bactérias, doenças bacterianas e resistência',
      desc: 'Reconhecer a estrutura e a nutrição das bactérias, doenças bacterianas e sua prevenção e a resistência aos antibióticos.', aulas: 'Aulas 4 e 5' },
    { id: 'CI7-EPI', ano: A, disc: D, cod: '', tit: 'Epidemiologia: surto, endemia, epidemia e pandemia',
      desc: 'Diferenciar surto, endemia, epidemia e pandemia e interpretar gráficos e mapas sobre a propagação de doenças e o efeito das medidas de prevenção.', aulas: 'Aulas 6, 7 e 17' },
    { id: 'CI7-IMU', ano: A, disc: D, cod: '', tit: 'Sistema imune e vacinação',
      desc: 'Compreender órgãos e células do sistema imune, anticorpos, tipos de imunização, como as vacinas funcionam, sua história e a importância da vacinação e da imunidade coletiva.', aulas: 'Aulas 8 a 13' },
    { id: 'CI7-SAN', ano: A, disc: D, cod: '', tit: 'Saneamento básico e indicadores de saúde',
      desc: 'Reconhecer os componentes do saneamento básico, interpretar dados sobre seu acesso no Brasil e compreender o papel dos indicadores de saúde.', aulas: 'Aulas 14 a 16' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length-1].texto = texto; };

  /* ---------- CI7-SUS ---------- */
  add('CI7-SUS', '7_ci_sus', 'Na imagem, o SUS é formado por três princípios. Qual deles significa “investir mais onde e para quem mais precisa”?',
    ['Equidade', 'Universalidade', 'Integralidade', 'Gratuidade'], 1);
  add('CI7-SUS', '7_ci_sus', 'De acordo com a imagem, a universalidade significa que a saúde é um direito:',
    ['assegurado pelo Estado a todos, sem distinção', 'só de quem mora em cidades grandes', 'só de quem paga plano de saúde', 'só de quem tem mais de 18 anos'], 1);
  add('CI7-SUS', '7_ci_sus', 'A integralidade vê a pessoa como um todo e inclui promoção, prevenção, tratamento e:',
    ['reabilitação', 'punição', 'isolamento', 'compra de remédios'], 1);
  add('CI7-SUS', null, 'Segundo o livro, no Brasil a saúde é reconhecida como:',
    ['um direito de todos e um dever do Estado', 'um serviço só para quem pode pagar', 'responsabilidade exclusiva de cada pessoa', 'um benefício apenas para adultos'], 1);
  add('CI7-SUS', '7_ci_determ', 'No centro do esquema dos determinantes da saúde estão a idade, o sexo e os fatores:',
    ['hereditários', 'climáticos', 'políticos', 'religiosos'], 1);
  add('CI7-SUS', '7_ci_determ', 'Qual destes itens aparece no esquema como determinante social da saúde?',
    ['Água e esgoto', 'Moda', 'Turismo espacial', 'Esportes olímpicos'], 1);
  add('CI7-SUS', '7_ci_determ', 'O esquema mostra que a saúde de uma população depende:',
    ['de condições sociais, econômicas e ambientais e do estilo de vida', 'apenas dos hábitos de cada pessoa', 'apenas do número de hospitais', 'apenas da sorte'], 1);
  add('CI7-SUS', '7_ci_mapas', 'Os dois mapas comparam a posição dos estados brasileiros, em 2020, em quais indicadores?',
    ['Atenção básica e recursos (médicos, enfermeiros e leitos)', 'Vacinas e saneamento', 'Renda e escolaridade', 'Natalidade e mortalidade'], 1);
  add('CI7-SUS', '7_ci_mapas', 'No mapa da atenção básica, Santa Catarina aparece em 1º lugar e o Amapá em 27º. Isso mostra que:',
    ['existem diferenças entre os estados no acesso à saúde', 'todos os estados têm o mesmo acesso', 'o Amapá tem o melhor resultado do país', 'Santa Catarina tem o pior resultado do país'], 1);
  add('CI7-SUS', '7_ci_influe', 'No esquema “O que influencia a saúde?”, o clima e a poluição pertencem ao meio:',
    ['físico', 'cultural', 'socioeconômico', 'biológico'], 1);
  add('CI7-SUS', '7_ci_aspectos', 'No esquema, “vacinação e cuidados médicos” é um exemplo de aspecto:',
    ['individual', 'ambiental', 'coletivo', 'político'], 1);
  add('CI7-SUS', '7_ci_aspectos', 'Qual item do aspecto ambiental aparece no esquema?',
    ['Saneamento básico', 'Higiene pessoal', 'Alimentação adequada', 'Prática de atividades físicas'], 1);

  /* ---------- CI7-VIR ---------- */
  add('CI7-VIR', '7_ci_virus', 'Na imagem, o envelope do vírus tem a função de:',
    ['proteger o material genético', 'produzir energia', 'realizar fotossíntese', 'digerir alimentos'], 1);
  add('CI7-VIR', '7_ci_virus', 'De acordo com a imagem, o material genético do vírus pode ser:',
    ['DNA ou RNA', 'somente proteína', 'somente água', 'açúcar'], 1);
  add('CI7-VIR', '7_ci_virus', 'As glicoproteínas indicadas na imagem ajudam o vírus a:',
    ['se fixar na célula hospedeira', 'produzir seu alimento', 'se locomover sozinho', 'fugir da luz'], 1);
  add('CI7-VIR', '7_ci_virusvivo', 'O que os vírus têm em comum com os seres vivos, segundo a figura?',
    ['Material genético e capacidade de sofrer mutações', 'Metabolismo próprio', 'Organização celular', 'Reprodução independente'], 1);
  add('CI7-VIR', '7_ci_virusvivo', 'Pela figura, uma característica que só os vírus têm é:',
    ['serem parasitas intracelulares obrigatórios', 'terem organização celular', 'terem metabolismo próprio', 'se reproduzirem de forma independente'], 1);
  add('CI7-VIR', '7_ci_reprovirus', 'Na reprodução dos vírus, a etapa de ligação do vírus à célula hospedeira é a:',
    ['adesão', 'biossíntese', 'maturação', 'liberação'], 1);
  add('CI7-VIR', '7_ci_reprovirus', 'Na biossíntese, a célula hospedeira é usada para:',
    ['produzir proteínas virais e material genético', 'expulsar os novos vírus', 'remover o capsídeo', 'destruir o núcleo antes da entrada do vírus'], 1);
  add('CI7-VIR', '7_ci_dengue', 'De acordo com o quadro, a dengue é transmitida pela picada do mosquito:',
    ['Aedes aegypti', 'Anopheles', 'Culex', 'Barbeiro'], 1);
  add('CI7-VIR', '7_ci_dengue', 'Uma forma de prevenir a dengue indicada no quadro é:',
    ['eliminar água parada (vasos, pneus, garrafas)', 'usar preservativo', 'tomar antibiótico', 'lavar as mãos após o recreio'], 1);
  add('CI7-VIR', '7_ci_gripe', 'Segundo o quadro, a gripe é uma infecção respiratória provocada pelo vírus:',
    ['Influenza', 'HIV', 'do sarampo', 'da dengue'], 1);
  add('CI7-VIR', '7_ci_gripe', 'Sobre o HIV e a Aids, o quadro informa que uma pessoa:',
    ['pode ter HIV e não ter Aids, principalmente se fizer tratamento', 'sempre tem Aids quando tem HIV', 'tem Aids sem ter o vírus', 'pega HIV pela picada de mosquito'], 1);
  add('CI7-VIR', '7_ci_virdoen', 'No quadro, o sarampo é transmitido por:',
    ['contato direto com gotículas de saliva, tosse ou espirro', 'picada de mosquito', 'alimentos mal lavados', 'ferimentos na pele'], 1);
  add('CI7-VIR', '7_ci_virdoen', 'Qual doença do quadro tem icterícia (pele e olhos amarelados) entre os sintomas?',
    ['Febre amarela', 'Dengue', 'Sarampo', 'Gripe'], 1);
  add('CI7-VIR', '7_ci_dengtab', 'Pela tabela, quantos óbitos por dengue foram registrados em 2025?',
    ['27', '59', '191', '2'], 1);

  /* ---------- CI7-BAC ---------- */
  add('CI7-BAC', '7_ci_bact', 'Na estrutura geral das bactérias, os flagelos servem para:',
    ['locomoção, percepção do ambiente e interação com outras bactérias', 'sintetizar proteínas', 'guardar a informação genética', 'fixar a bactéria a superfícies'], 1);
  add('CI7-BAC', '7_ci_bact', 'Os ribossomos das bactérias são responsáveis por:',
    ['sintetizar proteínas', 'dar sustentação à célula', 'fixar a bactéria a superfícies', 'guardar o DNA'], 1);
  add('CI7-BAC', '7_ci_bact', 'A parede celular das bactérias tem a função de:',
    ['dar sustentação e proteção contra patógenos', 'produzir proteínas', 'permitir a locomoção', 'conter o DNA'], 1);
  add('CI7-BAC', '7_ci_nutri', 'Na imagem, as bactérias que se alimentam de matéria orgânica em decomposição são chamadas de:',
    ['saprofágicas', 'parasitas', 'fotossintetizantes', 'quimiossintetizantes'], 1);
  add('CI7-BAC', '7_ci_nutri', 'As cianobactérias são exemplo de bactérias:',
    ['fotossintetizantes, que usam a luz para produzir compostos orgânicos', 'parasitas', 'saprofágicas', 'mutualistas'], 1);
  add('CI7-BAC', '7_ci_nutri', 'As bactérias da microbiota intestinal vivem em simbiose mutualista com o ser humano porque:',
    ['ambos se beneficiam da relação', 'só a bactéria se beneficia', 'só o ser humano se beneficia', 'uma destrói a outra'], 1);
  add('CI7-BAC', '7_ci_tuber', 'Segundo o quadro, qual vacina previne a tuberculose?',
    ['BCG', 'antitetânica', 'pentavalente', 'tríplice viral'], 1);
  add('CI7-BAC', '7_ci_bacdoen', 'O tétano é causado pela bactéria Clostridium tetani e ocorre por:',
    ['contaminação de um ferimento ou de objetos contaminados', 'tosse e espirro', 'água parada', 'picada de mosquito'], 1);
  add('CI7-BAC', '7_ci_bacdoen', 'Segundo o quadro, qual doença é prevenida pela vacina pentavalente?',
    ['Coqueluche', 'Tétano', 'Infecção urinária', 'Tuberculose'], 1);
  add('CI7-BAC', '7_ci_resist', 'No gráfico das mortes por bactérias resistentes, em qual grupo as taxas de mortalidade são as maiores?',
    ['Pessoas com mais de 95 anos', 'Crianças de 5 a 9 anos', 'Jovens de 15 a 19 anos', 'Adultos de 30 a 34 anos'], 1);
  add('CI7-BAC', '7_ci_resist', 'Pelo gráfico, entre as crianças de 5 a 9 anos a taxa de mortalidade por bactérias resistentes é:',
    ['muito baixa, quase zero', 'a maior de todas as faixas', 'igual à dos idosos', 'maior que a dos recém-nascidos'], 1);
  add('CI7-BAC', null, 'Segundo o texto da atividade, o uso excessivo de antibióticos favorece:',
    ['o surgimento de bactérias resistentes', 'o fim das infecções', 'a cura de doenças causadas por vírus', 'a produção de vacinas'], 1);
  add('CI7-BAC', '7_ci_bacvir', 'No esquema, qual característica é das bactérias e não dos vírus?',
    ['Podem ser combatidas com antibióticos', 'São acelulares', 'Precisam de células para se reproduzir', 'Têm importância no desenvolvimento de vacinas'], 1);
  add('CI7-BAC', '7_ci_bacvir', 'No esquema, as bactérias se reproduzem rapidamente por:',
    ['divisão celular (fissão binária)', 'adesão a células hospedeiras', 'lise da célula', 'montagem de capsídeo'], 1);

  add('CI7-BAC', '7_ci_bacdoen2', 'Qual doença bacteriana do quadro tem como sintomas rigidez no pescoço, suor excessivo e espasmos musculares?',
    ['tétano', 'tuberculose', 'coqueluche', 'infecção urinária'], 1);

  /* ---------- CI7-EPI ---------- */
  add('CI7-EPI', '7_ci_epid', 'Na imagem, uma elevação localizada e repentina no número de casos, como virose em uma escola, é chamada de:',
    ['surto', 'endemia', 'epidemia', 'pandemia'], 1);
  add('CI7-EPI', '7_ci_epid', 'Quando uma doença circula em diferentes regiões do planeta ou em todos os continentes, ela é:',
    ['uma pandemia', 'um surto', 'uma endemia', 'uma epidemia'], 1);
  add('CI7-EPI', '7_ci_epid', 'O exemplo de endemia dado na imagem é:',
    ['a febre amarela na região Norte do país', 'a dengue no estado de São Paulo', 'a covid-19', 'a virose em uma escola'], 1);
  add('CI7-EPI', null, 'Segundo o livro, quando há surtos em diferentes regiões (municipal, estadual ou nacional), a ocorrência é classificada como:',
    ['epidemia', 'surto', 'endemia', 'pandemia'], 1);
  add('CI7-EPI', null, 'A epidemiologia estuda os fatores que determinam:',
    ['o local e a frequência das doenças', 'apenas a cura das doenças', 'a fabricação de remédios', 'a construção de hospitais'], 1);
  add('CI7-EPI', '7_ci_nvx1', 'No gráfico da Situação 1 (primeiros casos de NVX-25), qual é o número de infectados no final do período mostrado?',
    ['8', '4', '2', '18'], 1);
  add('CI7-EPI', '7_ci_nvx2', 'Na Situação 2, o gráfico mostra que, com o passar do tempo, o número de infectados (linha vermelha):',
    ['aumenta muito, chegando a mais de 150', 'diminui até zero', 'permanece igual a 8', 'fica sempre abaixo do de recuperados'], 1);
  add('CI7-EPI', '7_ci_nvx3', 'No gráfico da Situação 3, a linha tracejada indica o início:',
    ['das medidas preventivas', 'da pandemia', 'da vacina', 'do fim da doença'], 1);
  add('CI7-EPI', '7_ci_nvx3', 'Depois do início das medidas preventivas, o gráfico mostra que o número de infectados:',
    ['passa a diminuir', 'continua aumentando sem parar', 'dobra', 'não muda'], 1);
  add('CI7-EPI', '7_ci_nvx3', 'Segundo o estudo de caso, quem declarou que a doença atingiu o status de pandemia?',
    ['a Organização Mundial da Saúde (OMS)', 'a prefeitura da cidade', 'uma escola', 'o Instituto Butantan'], 1);
  add('CI7-EPI', '7_ci_nvx4', 'No gráfico da Situação 4, a linha tracejada marca:',
    ['o fim da pandemia', 'o primeiro caso', 'o início da vacinação', 'o pico de mortes'], 1);
  add('CI7-EPI', '7_ci_nvx4', 'Após o fim da pandemia, o gráfico mostra que o número de infectados:',
    ['cai a valores próximos de zero', 'continua no pico', 'dobra', 'passa a ser maior que o de recuperados'], 1);
  add('CI7-EPI', '7_ci_soro', 'No mapa de 2025, a cor azul-escuro da legenda indica regiões com circulação do sorotipo:',
    ['2', '1 e 2', '1, 2 e 3', '2 e 3'], 1);
  add('CI7-EPI', null, 'Segundo a notícia, São Paulo decretou estado de emergência em saúde pública para a dengue. O marcador do estado de emergência é de:',
    ['300 casos por 100 mil habitantes', '100 casos por 100 mil habitantes', '280 mil casos no estado', '3 mil casos por ano'], 1);

  /* ---------- CI7-IMU ---------- */
  add('CI7-IMU', '7_ci_orgaos', 'Na imagem, onde ocorre o amadurecimento dos linfócitos T?',
    ['no timo', 'no baço', 'no fígado', 'no apêndice'], 1);
  add('CI7-IMU', '7_ci_orgaos', 'Segundo a imagem, a medula óssea é responsável por:',
    ['produzir os linfócitos B e T', 'filtrar o sangue', 'filtrar a linfa', 'amadurecer os linfócitos T'], 1);
  add('CI7-IMU', '7_ci_celulas', 'Qual célula é a primeira linha de defesa celular, fagocitando partículas pequenas?',
    ['neutrófilo', 'linfócito B', 'basófilo', 'linfócito T'], 1);
  add('CI7-IMU', '7_ci_anticorpo', 'No esquema de produção de anticorpos, quais células produzem os anticorpos?',
    ['os plasmócitos', 'os macrófagos', 'as células T auxiliares', 'as linfocinas'], 1);
  add('CI7-IMU', '7_ci_antig', 'Na imagem, os anticorpos se ligam aos antígenos dos microrganismos para:',
    ['sinalizá-los para eliminação', 'alimentá-los', 'multiplicá-los', 'escondê-los'], 1);
  add('CI7-IMU', '7_ci_imun', 'Segundo o esquema, a imunidade passiva natural ocorre quando:',
    ['o bebê recebe anticorpos pelo leite materno', 'a pessoa toma uma vacina', 'a pessoa recebe soro', 'a pessoa fica exposta ao patógeno'], 1);
  add('CI7-IMU', '7_ci_imunad', 'Na imagem “Imunidade adquirida”, a vacinação é um exemplo de imunidade:',
    ['ativa artificial', 'passiva natural', 'passiva artificial', 'ativa natural'], 1);
  add('CI7-IMU', '7_ci_aleit', 'No gráfico do aleitamento materno exclusivo, qual é a meta da OMS para 2030?',
    ['70%', '50%', '46%', '54%'], 1);
  add('CI7-IMU', '7_ci_etapas', 'Na imagem, qual etapa testa em laboratório como a vacina funciona com segurança?',
    ['Teste', 'Pesquisa', 'Vacinação', 'Inoculação'], 1);
  add('CI7-IMU', '7_ci_hist', 'Segundo a linha do tempo, quem criou a primeira vacina, usando a varíola bovina?',
    ['Edward Jenner', 'Louis Pasteur', 'Oswaldo Cruz', 'Lady Mary Montagu'], 1);
  add('CI7-IMU', '7_ci_hist', 'Em 1904, a Revolta da Vacina, no Rio de Janeiro, foi um protesto contra:',
    ['a vacinação obrigatória', 'a falta de vacinas', 'a variolação', 'o Instituto Butantan'], 1);
  add('CI7-IMU', '7_ci_tipos', 'Na imagem dos tipos de vacina, a vacina inativada é feita com:',
    ['vírus morto', 'vírus enfraquecido', 'partes do vírus', 'vírus modificado que leva instruções'], 1);
  add('CI7-IMU', '7_ci_tipos', 'A vacina viva atenuada é feita com:',
    ['vírus enfraquecido', 'vírus morto', 'partes do vírus', 'vírus modificado que leva instruções'], 1);
  add('CI7-IMU', '7_ci_esquema', 'Segundo o esquema, depois da vacina o corpo produz:',
    ['células de memória e anticorpos', 'novos vírus', 'antibióticos', 'alimento'], 1);
  add('CI7-IMU', '7_ci_mapamental', 'Uma consequência da queda da vacinação citada no mapa mental é:',
    ['o aumento de surtos e o retorno de doenças antes controladas', 'o fim das epidemias', 'o aumento da imunidade coletiva', 'a redução do risco de morte'], 1);
  add('CI7-IMU', '7_ci_rebanho', 'A imagem mostra a imunidade de rebanho. Ela ocorre quando:',
    ['muitas pessoas vacinadas protegem indiretamente quem não pôde se vacinar', 'ninguém se vacina', 'só quem tem o vírus é vacinado', 'a doença é transmitida a todos'], 1);
  add('CI7-IMU', '7_ci_hesit', 'Segundo a imagem, são exemplos de hesitação vacinal:',
    ['medo de reações, desinformação e dúvidas sobre a eficácia', 'prevenir doenças e mortes evitáveis', 'proteger a comunidade', 'reduzir internações e custos em saúde'], 1);
  add('CI7-IMU', '7_ci_sarampo', 'No gráfico dos casos de sarampo notificados em São Paulo, o maior número de casos ocorreu em:',
    ['2019', '2018', '2021', '2026'], 1);

  /* ---------- CI7-SAN ---------- */
  add('CI7-SAN', '7_ci_sanea4', 'Qual destes serviços faz parte do saneamento básico, segundo a imagem?',
    ['drenagem das águas da chuva', 'construção de estradas', 'vacinação', 'produção agrícola'], 1);
  add('CI7-SAN', '7_ci_sanea4', 'O esgotamento sanitário envolve:',
    ['recolher, transportar e tratar o esgoto antes de devolvê-lo ao ambiente', 'coletar o lixo das casas', 'escoar a água da chuva', 'captar água da natureza'], 1);
  add('CI7-SAN', '7_ci_sanea4', 'Quando o lixo é descartado corretamente, diminuem:',
    ['a poluição e os riscos à saúde', 'as chuvas', 'os rios', 'as árvores'], 1);
  add('CI7-SAN', '7_ci_ciclo', 'No ciclo do saneamento básico, depois da captação de água, ela segue para:',
    ['a estação de tratamento de água', 'a coleta de esgoto', 'a devolução aos mananciais', 'a estação de tratamento de esgoto'], 1);
  add('CI7-SAN', '7_ci_ciclo', 'No ciclo, a etapa que vem logo antes da devolução aos mananciais é:',
    ['a estação de tratamento de esgoto', 'a distribuição', 'a captação de água', 'o armazenamento em reservatório'], 1);
  add('CI7-SAN', '7_ci_semagua', 'Segundo os dados de 2023, qual é o percentual da população do país sem esgoto?',
    ['40,3%', '16,9%', '8,7%', '4,3%'], 1);
  add('CI7-SAN', '7_ci_semagua', 'Em qual componente o país apresenta o pior índice (maior percentual sem atendimento)?',
    ['esgoto', 'água', 'coleta de lixo', 'domicílios sujeitos a inundações'], 1);
  add('CI7-SAN', '7_ci_ruralurb', 'Qual é o percentual da população rural atendida com água no estado de São Paulo?',
    ['33,5%', '98,6%', '94,8%', '13,6%'], 1);
  add('CI7-SAN', '7_ci_ruralurb', 'Os dados mostram que o acesso à água e ao esgoto é, em geral:',
    ['maior na área urbana do que na rural', 'maior na área rural do que na urbana', 'igual nas duas áreas', 'inexistente na área urbana'], 1);
  add('CI7-SAN', '7_ci_sanreg', 'No gráfico, qual região tem o menor valor em 2022 (barras laranja)?',
    ['Norte', 'Nordeste', 'Sul', 'Sudeste'], 1);
  add('CI7-SAN', '7_ci_info22', 'Segundo o infográfico, qual componente do saneamento chega a menos pessoas no Brasil (56%)?',
    ['esgoto', 'água potável', 'coleta de resíduos', 'drenagem'], 1);
  add('CI7-SAN', '7_ci_indic', 'Os indicadores de saúde são medidas usadas para:',
    ['avaliar, monitorar e analisar o estado de saúde de uma população', 'fabricar vacinas', 'tratar os doentes', 'construir escolas'], 1);
  add('CI7-SAN', '7_ci_indic', 'Idade e sexo são exemplos de indicadores:',
    ['demográficos', 'socioeconômicos', 'de mortalidade', 'de morbidade'], 1);
  add('CI7-SAN', '7_ci_indicex', 'Qual destes é exemplo de indicador de saúde, segundo a imagem?',
    ['cobertura vacinal', 'preço dos remédios', 'número de escolas', 'distância entre as cidades'], 1);
  add('CI7-SAN', '7_ci_ods3', 'No gráfico do ODS 3, qual região teve a maior taxa de mortalidade por água insegura em 2000?',
    ['Nordeste', 'Norte', 'Sudeste', 'Sul'], 1);
  add('CI7-SAN', '7_ci_ods3', 'No mesmo gráfico, qual região teve a menor taxa em 2022?',
    ['Centro-Oeste', 'Nordeste', 'Norte', 'Sul'], 1);
})();

/* ===================== LÍNGUA INGLESA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Língua Inglesa', A = 7;
  B.hab.push(
    { id: 'EN7-DATAS', ano: A, disc: D, cod: '', tit: 'Dates, ordinal numbers and years',
      desc: 'Dizer e escrever datas de nascimento (on/in), meses, números ordinais e anos, e interpretar linhas do tempo (timelines).', aulas: 'Aulas 1 a 3 e 5' },
    { id: 'EN7-BIO', ano: A, disc: D, cod: '', tit: 'Biographies: was/were and negative past',
      desc: 'Ler biografias, usar was/were, wasn’t/weren’t e didn’t + verbo na forma base, e reconhecer profissões.', aulas: 'Aulas 6 e 8' },
    { id: 'EN7-WH', ano: A, disc: D, cod: '', tit: 'Past questions with did and wh-words',
      desc: 'Fazer perguntas no passado com did + sujeito + verbo na forma base e com as wh-words (what, where, when, who, why, how).', aulas: 'Aulas 9 e 11' },
    { id: 'EN7-LING', ano: A, disc: D, cod: '', tit: 'Linguistic prejudice and e-waste',
      desc: 'Compreender o conceito de preconceito linguístico e ler um texto sobre lixo eletrônico (e-waste), seguindo as etapas de uma pesquisa.', aulas: 'Aulas 12 e 13' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length-1].texto = texto; };

  /* ---------- EN7-DATAS ---------- */
  add('EN7-DATAS', '7_en_meses_q', 'According to the summary, which question do we ask to find out someone’s birth date?',
    ['“When were you born?”', '“Where are you from?”', '“How old are you?”', '“What is your name?”'], 1);
  add('EN7-DATAS', '7_en_meses_q', 'In “I was born on May 9th.”, why do we use “on”?',
    ['Because it is a complete date (day and month)', 'Because it is only a month', 'Because it is only a year', 'Because it is a place'], 1);
  add('EN7-DATAS', '7_en_meses_q', 'Which sentence is correct, according to the summary?',
    ['I was born in May.', 'I was born on May.', 'I was born at May.', 'I was born in May 9th.'], 1);
  add('EN7-DATAS', '7_en_meses', 'Complete: “I was born ___ September 27, 2015.”',
    ['on', 'in', 'at', 'of'], 1);
  add('EN7-DATAS', '7_en_meses', 'Complete: “I was born ___ 2015.”',
    ['in', 'on', 'at', 'by'], 1);
  add('EN7-DATAS', '7_en_meses_ord', 'How do we write “Twenty-third” with numbers?',
    ['23rd', '22nd', '32nd', '20th'], 1);
  add('EN7-DATAS', '7_en_meses_ord', 'Which ordinal number is “Twelfth”?',
    ['12th', '11th', '13th', '2nd'], 1);
  add('EN7-DATAS', '7_en_anos', 'According to the summary, how do we say the year 1806?',
    ['eighteen-oh-six', 'eighty-six', 'one thousand eight hundred six', 'eighteen-six-zero'], 1);
  add('EN7-DATAS', '7_en_anos', 'How do we say the year 1958?',
    ['nineteen fifty-eight', 'fifty-eight nineteen', 'one nine five eight', 'ninety fifty-eight'], 1);
  add('EN7-DATAS', '7_en_anos', 'From the year 2000 on, we can say 2003 as “two thousand and three” or:',
    ['twenty-oh-three', 'two-oh-three-two', 'twenty thirty', 'three thousand two'], 1);
  add('EN7-DATAS', '7_en_alberto', 'Look at Alberto’s timeline. When was Alberto born?',
    ['In 2013.', 'In 2015.', 'In 2021.', 'In 2025.'], 1);
  add('EN7-DATAS', '7_en_alberto', 'When did Alberto win his first swimming competition?',
    ['In 2021.', 'In 2013.', 'In 2022.', 'In 2023.'], 1);
  add('EN7-DATAS', '7_en_julia', 'Look at Julia’s timeline. Which sentence is correct?',
    ['Julia started school in 2018.', 'Julia was born in 2018.', 'Julia started English classes in 2018.', 'Julia got her first pet in 2018.'], 1);
  add('EN7-DATAS', '7_en_julia', 'When did Julia get her first pet, a dog?',
    ['In 2025.', 'In 2024.', 'In 2023.', 'In 2021.'], 1);
  add('EN7-DATAS', '7_en_luke', 'Look at Luke’s timeline. Luke formed a band in:',
    ['2024', '2018', '2019', '2008'], 1);
  add('EN7-DATAS', '7_en_luke', 'Which sentence about Luke is correct?',
    ['He started guitar lessons in 2018.', 'He was born in 2015.', 'He formed a band in 2019.', 'He traveled to Ubatuba in 2025.'], 1);

  /* ---------- EN7-BIO ---------- */
  add('EN7-BIO', '7_en_bio', 'According to the summary, a biography (biografia) is a text that:',
    ['tells the life story of a person', 'explains how to cook a meal', 'describes a city', 'sells a product'], 1);
  add('EN7-BIO', '7_en_bio', 'Complete: “The Beatles ___ American. They were British.”',
    ['weren’t', 'wasn’t', 'didn’t', 'isn’t'], 1);
  add('EN7-BIO', '7_en_bio', 'Complete: “Martin Luther King Jr. ___ a singer. He was a civil rights activist.”',
    ['wasn’t', 'weren’t', 'didn’t', 'don’t'], 1);
  add('EN7-BIO', null, 'We use “weren’t” when the subject of the sentence is:',
    ['you, we or they', 'I, he, she or it', 'only “I”', 'only “he”'], 1);
  add('EN7-BIO', '7_en_prof', 'Look at the pictures. Which word names someone who paints pictures?',
    ['Painter', 'Singer', 'Dancer', 'Director'], 1);
  addT('EN7-BIO', 'Ana: Oh! The American singer? / Eduardo: No! He wasn’t a singer. He was a civil rights activist. [...] Eduardo: I can’t. I need to do my homework. [...] It’s kind of long. I have to write a composition about Martin Luther King.', 'Read the dialogue. Was Martin Luther King a famous singer?',
    ['No, he was a civil rights activist.', 'Yes, he was.', 'Yes, he was a famous singer.', 'No, he was a scientist.'], 1);
  addT('EN7-BIO', 'Ana: Oh! The American singer? / Eduardo: No! He wasn’t a singer. He was a civil rights activist. [...] Eduardo: I can’t. I need to do my homework. [...] It’s kind of long. I have to write a composition about Martin Luther King.', 'Why can’t Eduardo go to the park with Ana?',
    ['He needs to do his homework.', 'He is sick.', 'He is at the cinema.', 'He doesn’t like parks.'], 1);
  addT('EN7-BIO', 'Rosa Parks was a brave woman from the U.S. who helped end segregation. On December 1st, 1955, she refused to give up her seat to a white person on a bus in Montgomery, Alabama. Rosa Parks didn’t move to the back of the bus, which was the law at that time. She wasn’t afraid to stand up for justice. [...]', 'Read the text about Rosa Parks. Where did she refuse to give up her seat?',
    ['On a bus in Montgomery, Alabama.', 'In a school in Texas.', 'In a park in Florida.', 'On a train in Chicago.'], 1);
  addT('EN7-BIO', 'Rosa Parks was a brave woman from the U.S. who helped end segregation. On December 1st, 1955, she refused to give up her seat to a white person on a bus in Montgomery, Alabama. Rosa Parks didn’t move to the back of the bus, which was the law at that time. She wasn’t afraid to stand up for justice. [...]', 'According to the text, Rosa Parks:',
    ['wasn’t afraid to stand up for justice', 'gave her seat to a white person', 'moved to the back of the bus', 'was scared to fight for justice'], 1);
  addT('EN7-BIO', 'a) We didn’t go to the museum. b) He didn’t went to school yesterday. c) You wasn’t in class on Monday. d) They didn’t eat breakfast this morning. e) He didn’t was my teacher last year.', 'Which sentence follows the rules of formal English grammar?',
    ['We didn’t go to the museum.', 'He didn’t went to school yesterday.', 'You wasn’t in class on Monday.', 'He didn’t was my teacher last year.'], 1);
  add('EN7-BIO', '7_en_forma_neg', 'According to the summary, how do we form the negative of the simple past?',
    ['didn’t + verb in the base form', 'didn’t + verb with -ed', 'wasn’t + verb with -ed', 'don’t + verb in the past'], 1);
  add('EN7-BIO', '7_en_forma_neg', 'Complete: “Hélia Souza ___ a Nobel Prize for Chemistry.”',
    ['didn’t receive', 'didn’t received', 'not receive', 'wasn’t receive'], 1);
  add('EN7-BIO', '7_en_forma_be', 'We NEVER use “didn’t” with the verb:',
    ['to be (was/were)', 'to go', 'to study', 'to write'], 1);
  add('EN7-BIO', null, 'Which sentence is correct?',
    ['Rosa Parks didn’t move to the back of the bus.', 'Rosa Parks didn’t moved to the back of the bus.', 'Rosa Parks not move to the back of the bus.', 'Rosa Parks weren’t move to the back of the bus.'], 1);

  /* ---------- EN7-WH ---------- */
  add('EN7-WH', '7_en_wh_a', 'To ask a question about the past, we use the auxiliary:',
    ['did', 'do', 'does', 'is'], 1);
  add('EN7-WH', '7_en_wh_b', 'In a past question with “did”, the main verb stays:',
    ['in the base form', 'in the past', 'with -ing', 'with -s'], 1);
  add('EN7-WH', '7_en_wh_d', 'Which question word means “onde”?',
    ['Where', 'When', 'Who', 'Why'], 1);
  add('EN7-WH', '7_en_wh_d', 'Complete: “___ did she receive a Nobel Prize?” (Quando)',
    ['When', 'Where', 'Who', 'Why'], 1);
  add('EN7-WH', '7_en_wh_a', 'Complete: “What ___ Alice Walker do?”',
    ['did', 'was', 'were', 'does'], 1);
  add('EN7-WH', '7_en_wh_e', 'Which question uses the verb “to be” correctly?',
    ['Where was she born?', 'Where did she was born?', 'Where did she born?', 'Where were she born?'], 1);
  add('EN7-WH', '7_en_wh_c', 'Which question about the past is correct?',
    ['Where did she live?', 'Where did she lived?', 'Where she did live?', 'Where lived she?'], 1);
  add('EN7-WH', '7_en_forma_int', 'Which question is correct?',
    ['Did Anne Sullivan receive a Nobel Prize?', 'Did Anne Sullivan received a Nobel Prize?', 'Anne Sullivan did receive?', 'Does Anne Sullivan receive a Nobel Prize?'], 1);
  add('EN7-WH', '7_en_forma_be', 'Which question uses “was” correctly?',
    ['Was Anne Sullivan a teacher?', 'Did Anne Sullivan was a teacher?', 'Did Anne Sullivan be a teacher?', 'Were Anne Sullivan a teacher?'], 1);
  add('EN7-WH', '7_en_formas', 'In the affirmative form of the simple past, regular verbs get:',
    ['-ed', '-ing', '-s', 'did'], 1);
  add('EN7-WH', null, 'Complete with the Wh- word: “___ did she start her career? She started her career in 2005.”',
    ['When', 'Where', 'Who', 'Why'], 1);
  add('EN7-WH', null, 'Complete with the Wh- word: “___ did they live? They lived in France.”',
    ['Where', 'What', 'Why', 'Who'], 1);
  add('EN7-WH', null, 'Complete with the Wh- word: “___ did they move to another country? They moved in search of better opportunities.”',
    ['Why', 'Where', 'Who', 'When'], 1);
  add('EN7-WH', null, 'Complete with the Wh- word: “___ did he meet? He met important political leaders.”',
    ['Who', 'Where', 'When', 'How'], 1);

  /* ---------- EN7-LING ---------- */
  addT('EN7-LING', 'Linguistic prejudice (preconceito linguístico) é o julgamento ou a discriminação da forma como alguém fala, seja pelo sotaque, pelas variações regionais, ou por diferenças de pronúncia e gramática. Se baseia na ideia equivocada de que existe apenas uma forma “certa” de usar a língua [...]. Valorizar a diversidade linguística é importante, pois a língua faz parte da identidade e da cultura de cada pessoa ou povo.', 'According to the summary, linguistic prejudice (preconceito linguístico) is:',
    ['judging or discriminating against the way someone speaks', 'speaking many languages', 'learning English at school', 'writing without mistakes'], 1);
  addT('EN7-LING', 'Linguistic prejudice (preconceito linguístico) é o julgamento ou a discriminação da forma como alguém fala, seja pelo sotaque, pelas variações regionais, ou por diferenças de pronúncia e gramática. Se baseia na ideia equivocada de que existe apenas uma forma “certa” de usar a língua [...]. Valorizar a diversidade linguística é importante, pois a língua faz parte da identidade e da cultura de cada pessoa ou povo.', 'Linguistic prejudice is based on the wrong idea that:',
    ['there is only one “correct” way to use a language', 'every language has legitimate variations', 'accents are important', 'English is easy to learn'], 1);
  addT('EN7-LING', 'Linguistic prejudice (preconceito linguístico) é o julgamento ou a discriminação da forma como alguém fala, seja pelo sotaque, pelas variações regionais, ou por diferenças de pronúncia e gramática. Se baseia na ideia equivocada de que existe apenas uma forma “certa” de usar a língua [...]. Valorizar a diversidade linguística é importante, pois a língua faz parte da identidade e da cultura de cada pessoa ou povo.', 'Valuing linguistic diversity is important because language is part of:',
    ['the identity and culture of each person or people', 'a school test', 'a game', 'a computer program'], 1);
  add('EN7-LING', null, 'Which situation shows linguistic prejudice?',
    ['Lucas says Ana speaks “wrong” because she uses regional words.', 'A teacher helps a student improve their English.', 'A student asks, “Can you repeat, please?”', 'Two friends practice English together.'], 1);
  addT('EN7-LING', 'Identificar o problema (identify the problem); Observar os fatos (observe the facts); Pensar em uma solução (think of a solution); Compartilhar ideias (share ideas).', 'In the steps to solve the e-waste problem, “think of a solution” is the ___ step.',
    ['third', 'first', 'second', 'fourth'], 1);
  addT('EN7-LING', 'Identificar o problema (identify the problem); Observar os fatos (observe the facts); Pensar em uma solução (think of a solution); Compartilhar ideias (share ideas).', 'The last step of the process, “share ideas”, is the:',
    ['fourth', 'first', 'second', 'third'], 1);
  add('EN7-LING', '7_en_ewpal', 'In the pictures, the photo of a broken phone is labeled:',
    ['Stop working', 'Throw away', 'Harmful', 'Trash'], 1);
  add('EN7-LING', '7_en_ewpal', 'Which word labels the picture with black smoke coming from a factory?',
    ['Harmful', 'Environment', 'Trash', 'Electronic devices'], 1);
  add('EN7-LING', '7_en_ewpal', 'Which word labels the picture of a girl putting something in a bin?',
    ['Throw away', 'Stop working', 'Trash', 'Environment'], 1);
  addT('EN7-LING', 'Electronic waste, or e-waste, includes phones, computers, TVs, and batteries. Many people throw these things away when they stop working or when they buy new ones. E-waste can be a problem for the environment because some electronic devices have harmful materials. When we throw them in the trash, these materials can go into the soil and water.', 'According to the text, which things are examples of e-waste?',
    ['Phones, computers, TVs and batteries', 'Plants, fruits and water', 'Books and pencils', 'Clothes and shoes'], 1);
  addT('EN7-LING', 'Electronic waste, or e-waste, includes phones, computers, TVs, and batteries. Many people throw these things away when they stop working or when they buy new ones. E-waste can be a problem for the environment because some electronic devices have harmful materials. When we throw them in the trash, these materials can go into the soil and water.', 'Why can e-waste be a problem for the environment?',
    ['Some electronic devices have harmful materials.', 'It is too light.', 'It is very expensive.', 'It makes the soil bigger.'], 1);
  add('EN7-LING', null, 'According to the WHO text, how much e-waste was produced in the world in 2022?',
    ['about 62 million tonnes', 'about 22 million tonnes', 'about 3 million tonnes', 'about 6 thousand tonnes'], 1);
  add('EN7-LING', null, 'According to the WHO text, which groups are particularly vulnerable to e-waste risks?',
    ['Children and pregnant women', 'Only teachers', 'Only engineers', 'Only athletes'], 1);
})();

/* ===================== PROJETO DE VIDA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Projeto de Vida', A = 7;
  B.hab.push(
    { id: 'PV7-REDE', ano: A, disc: D, cod: '', tit: 'Rede de apoio e o futuro',
      desc: 'Reconhecer que o que fazemos no presente influencia o futuro e que conversar com a rede de apoio traz experiências, conselhos e aprendizados.', aulas: 'Aula 1' },
    { id: 'PV7-MENS', ano: A, disc: D, cod: '', tit: 'Mensagens que constroem o futuro',
      desc: 'Analisar mensagens da escola, comparar seus efeitos e priorizar as que podem ajudar outros estudantes.', aulas: 'Aulas 2 e 3' },
    { id: 'PV7-COM', ano: A, disc: D, cod: '', tit: 'Comunicação clara e engajamento',
      desc: 'Transformar ideias em mensagens claras, compreender o engajamento na escola e assumir uma responsabilidade no grupo.', aulas: 'Aula 4' },
    { id: 'PV7-PROD', ano: A, disc: D, cod: '', tit: 'Produzir, ouvir, ajustar e compartilhar',
      desc: 'Revisar a mensagem a partir de sugestões, registrar mudanças e refletir sobre o percurso na mostra de mensagens.', aulas: 'Aulas 5 e 6' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length-1].texto = texto; };

  /* ---------- PV7-REDE ---------- */
  add('PV7-REDE', null, 'Segundo o livro, pensar sobre o futuro pode ficar mais interessante quando:',
    ['escutamos pessoas que fazem parte da nossa rede de apoio', 'evitamos conversar com os outros', 'esperamos o futuro chegar', 'estudamos sempre sozinhos'], 1);
  add('PV7-REDE', null, 'Conversar com integrantes da rede de apoio pode trazer:',
    ['experiências, conselhos e aprendizados', 'notas automáticas', 'respostas prontas para todas as provas', 'dinheiro'], 1);
  add('PV7-REDE', null, 'Essas conversas ajudam a perceber que hábitos, atitudes e escolhas do presente:',
    ['fazem diferença ao longo do tempo', 'não mudam nada no futuro', 'só importam para os adultos', 'só valem dentro da escola'], 1);
  add('PV7-REDE', null, 'Na atividade, o grupo prepara um roteiro de entrevista com até quantas perguntas?',
    ['cinco', 'duas', 'dez', 'vinte'], 1);
  add('PV7-REDE', null, 'Depois de preparar o roteiro, cada estudante deve entrevistar:',
    ['duas pessoas da sua rede de apoio', 'uma pessoa da turma', 'dez colegas', 'nenhuma pessoa'], 1);
  add('PV7-REDE', null, 'O roteiro de entrevista ajuda o grupo a compreender, por exemplo:',
    ['quais hábitos podem ser importantes desde agora', 'qual será a nota final', 'quem é o melhor aluno', 'quanto custa um curso'], 1);
  add('PV7-REDE', null, 'Que tipo de apoio o grupo quer descobrir com as entrevistas?',
    ['o que ajuda quando alguém precisa fazer escolhas ou enfrentar desafios', 'apoio para faltar às aulas', 'apoio para copiar na prova', 'apoio apenas em dinheiro'], 1);

  /* ---------- PV7-MENS ---------- */
  add('PV7-MENS', null, 'Segundo o livro, na escola circulam muitas mensagens: recados, avisos, orientações, conselhos e:',
    ['combinados', 'provas', 'multas', 'sorteios'], 2);
  add('PV7-MENS', '7_pv_cartazes', 'Os três cartazes da atividade servem para o grupo:',
    ['comparar os efeitos de cada mensagem', 'escolher o cartaz mais bonito', 'copiar o texto dos cartazes', 'descobrir quem é o culpado'], 2);
  add('PV7-MENS', '7_pv_cartazes', 'No cartaz 3 (“Dicas para o dia a dia!”), qual atitude é sugerida?',
    ['pedir ajuda quando precisar', 'faltar às aulas', 'deixar as tarefas para depois', 'conversar durante a aula'], 2);
  add('PV7-MENS', '7_pv_cartazes', 'O cartaz 3 diz que nem sempre é fácil manter o foco, mas que:',
    ['pequenas atitudes podem fazer diferença', 'nada pode ser feito', 'é melhor desistir', 'só os outros decidem'], 2);
  add('PV7-MENS', null, 'Segundo o livro, nem toda mensagem ajuda do mesmo jeito: algumas podem ser claras e respeitosas, enquanto outras podem:',
    ['confundir, afastar ou até machucar quem lê', 'alegrar sempre quem lê', 'ensinar sempre algo novo', 'convencer todo mundo'], 2);
  add('PV7-MENS', null, 'Na aula 3, depois de levantar temas, o grupo precisa:',
    ['decidir quais mensagens merecem continuar no projeto', 'apagar todas as ideias', 'mudar de grupo', 'encerrar o projeto'], 3);
  add('PV7-MENS', null, 'Na aula 3, o grupo mostra duas mensagens a alguém de fora para saber:',
    ['qual mensagem essa pessoa considera mais útil agora e por quê', 'quem fez os cartazes', 'quanto tempo falta para o fim do bimestre', 'qual nota o grupo vai tirar'], 3);
  add('PV7-MENS', null, 'Um olhar de fora pode ajudar a perceber qual mensagem é mais clara, mais necessária ou:',
    ['mais útil naquele momento', 'mais curta', 'mais colorida', 'mais antiga'], 3);

  /* ---------- PV7-COM ---------- */
  add('PV7-COM', '7_pv_engaj', 'Segundo o livro, na escola o engajamento aparece quando alguém:',
    ['se interessa, assume uma responsabilidade e colabora com o grupo', 'só curte e comenta na internet', 'só cumpre ordens', 'apenas observa os colegas'], 4);
  add('PV7-COM', '7_pv_engaj', 'Nas redes sociais, a palavra engajamento costuma aparecer quando muitas pessoas:',
    ['curtem, comentam, compartilham ou reagem a um conteúdo', 'apenas leem o conteúdo', 'apagam o conteúdo', 'bloqueiam o conteúdo'], 4);
  add('PV7-COM', '7_pv_engaj', 'No quadro “Fica a dica”, o engajamento na escola:',
    ['também envolve participação, mas vai além disso', 'é igual ao das redes sociais', 'só importa para os professores', 'não existe na escola'], 4);
  add('PV7-COM', '7_pv_funcoes', 'Qual destas funções aparece na tabela de organização do grupo?',
    ['responsável pela revisão', 'responsável pelo lanche', 'responsável pelo som', 'responsável pela limpeza'], 4);
  add('PV7-COM', '7_pv_funcoes', 'Os grupos registram a função de cada membro porque, em um projeto coletivo:',
    ['cada pessoa tem uma responsabilidade importante', 'só uma pessoa precisa trabalhar', 'o trabalho fica mais lento', 'ninguém precisa participar'], 4);
  add('PV7-COM', null, 'Segundo o livro, a escolha das palavras, o jeito de organizar as ideias e o tom da mensagem podem:',
    ['aproximar, orientar, confundir ou afastar o leitor', 'só enfeitar o texto', 'não mudar nada', 'só alterar o tamanho da letra'], 4);
  add('PV7-COM', null, 'Para elaborar uma comunicação mais assertiva, o livro sugere conversar ao longo do projeto com o professor de:',
    ['Língua Portuguesa', 'Educação Física', 'Matemática', 'Geografia'], 2);

  /* ---------- PV7-PROD ---------- */
  add('PV7-PROD', null, 'Na aula 5, o grupo retoma a primeira versão da mensagem, revisa e compartilha com outros colegas para que eles:',
    ['façam sugestões', 'copiem a mensagem', 'apaguem o texto', 'deem uma nota'], 5);
  add('PV7-PROD', null, 'Depois de revisar, uma palavra, uma frase ou o jeito de organizar a ideia pode deixar a mensagem mais:',
    ['clara, acolhedora e respeitosa', 'longa e difícil', 'confusa', 'curta demais'], 5);
  add('PV7-PROD', null, 'Na aula 5, o estudante registra:',
    ['uma mudança feita na mensagem e por que ela melhorou a comunicação', 'a nota que quer tirar', 'o nome do colega mais bagunceiro', 'a lista de compras do grupo'], 5);
  add('PV7-PROD', null, 'A mostra “Mensagens no ar” serve para:',
    ['dar visibilidade às mensagens da turma e compartilhar com a escola reflexões e conselhos', 'vender produtos', 'avaliar os professores', 'escolher o aluno destaque'], 6);
  add('PV7-PROD', null, 'Depois de visitar a mostra, o estudante registra:',
    ['do que mais se orgulha no projeto e o que aprendeu sobre comunicação', 'quanto dinheiro gastou', 'qual colega faltou', 'apenas o nome do grupo'], 6);
  add('PV7-PROD', null, 'Segundo o livro, todo projeto deixa marcas: nas ideias que surgem, nas escolhas, nas dificuldades e:',
    ['no que aprendemos ao longo do caminho', 'apenas nas notas', 'apenas nos erros', 'em nada'], 6);
  add('PV7-PROD', null, 'Ao final do projeto, o estudante reflete sobre como as mensagens da turma podem:',
    ['ajudar outros estudantes', 'aumentar o tempo do recreio', 'mudar o calendário escolar', 'substituir as aulas'], 6);
})();
