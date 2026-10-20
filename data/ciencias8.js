/* 8º ano – Ciências – Volume 4 (4º bimestre)
   Em cada questão a PRIMEIRA alternativa é a correta; o site embaralha na hora de gerar a prova. */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Ciências', A = 8;
  B.hab.push(
    { id: 'EF08CI01', ano: A, disc: D, cod: 'EF08CI01', tit: 'Tipos e fontes de energia (renováveis e não renováveis)',
      desc: 'Identificar e classificar diferentes fontes (renováveis e não renováveis) e tipos de energia utilizados em residências, comunidades ou cidades.', aulas: 'Aulas 1, 2 e 4' },
    { id: 'EF08CI03-TR', ano: A, disc: D, cod: 'EF08CI03', tit: 'Transformações de energia',
      desc: 'Reconhecer as transformações de energia (elétrica, térmica, luminosa, sonora, mecânica, química) e o princípio da conservação da energia.', aulas: 'Aulas 3 e 22' },
    { id: 'EF08CI02-MAG', ano: A, disc: D, cod: 'EF08CI02', tit: 'Magnetismo, eletrização e raios',
      desc: 'Compreender os fenômenos magnéticos e elétricos (ímãs, campo magnético, cargas, processos de eletrização, raios e relâmpagos) que fundamentam os circuitos.', aulas: 'Aulas 5 a 7' },
    { id: 'EF08CI02-CIR', ano: A, disc: D, cod: 'EF08CI02', tit: 'Corrente elétrica, condutores e circuitos',
      desc: 'Relacionar tensão, corrente e resistência (1ª Lei de Ohm), diferenciar condutores e isolantes e analisar circuitos em série e em paralelo, comparando-os a circuitos residenciais.', aulas: 'Aulas 8 a 13, 15, 16 e 23' },
    { id: 'EF08CI04', ano: A, disc: D, cod: 'EF08CI04', tit: 'Potência e consumo de energia elétrica',
      desc: 'Classificar aparelhos elétricos por consumo, calcular potência (P = U · I) e o consumo de energia elétrica mensal de uma residência, interpretando a conta de luz.', aulas: 'Aulas 17 a 19' },
    { id: 'EF08CI05', ano: A, disc: D, cod: 'EF08CI05', tit: 'Economia de energia, consumo sustentável e segurança',
      desc: 'Propor ações para o uso racional e seguro da energia elétrica, com base em critérios de sustentabilidade e hábitos de consumo responsável.', aulas: 'Aulas 14, 19 a 21' },
    { id: 'EF08CI06', ano: A, disc: D, cod: 'EF08CI06', tit: 'Matriz energética e distribuição de eletricidade',
      desc: 'Discutir e avaliar usinas de geração de energia, seus impactos socioambientais e como a eletricidade chega à cidade, comunidade, casa ou escola.', aulas: 'Aulas 11, 22 e 24' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });

  /* ---------- EF08CI01 ---------- */
  add('EF08CI01', 'c8_energia_mapa', 'De acordo com o mapa mental, a energia química é:',
    ['a energia armazenada em substâncias e liberada em reações químicas', 'a energia resultante do movimento de partículas carregadas', 'a energia transportada pela luz', 'a energia propagada por ondas sonoras'], 1);
  add('EF08CI01', 'c8_energia_mapa', 'Segundo o mapa mental, a energia cinética é aquela:',
    ['resultante do movimento de um objeto', 'armazenada devido à posição de um objeto', 'liberada do núcleo dos átomos', 'associada à luz'], 1);
  add('EF08CI01', 'c8_energia_mapa', 'A energia potencial, segundo o mapa mental, está armazenada devido:',
    ['à posição ou à configuração de um objeto', 'ao movimento de um objeto', 'às ondas sonoras', 'à fissão nuclear'], 1);
  add('EF08CI01', 'c8_tab_tipos', 'Pedalar uma bicicleta ou lançar uma bola de vôlei são exemplos de energia:',
    ['cinética', 'potencial', 'nuclear', 'sonora'], 1);
  add('EF08CI01', 'c8_tab_tipos', 'Posicionar-se no topo de uma escada ou subir uma rampa com skate envolve energia:',
    ['potencial', 'cinética', 'elétrica', 'nuclear'], 1);
  add('EF08CI01', 'c8_tab_tipos', 'Instrumentos musicais, alto-falantes e a voz estão relacionados à energia:',
    ['sonora', 'térmica', 'química', 'nuclear'], 1);
  add('EF08CI01', 'c8_nao_renov', 'As fontes representadas na imagem (petróleo, carvão, gás natural e nuclear) são classificadas como:',
    ['não renováveis', 'renováveis', 'inesgotáveis', 'livres de impacto ambiental'], 2);
  add('EF08CI01', 'c8_nao_renov', 'Um impacto ambiental do uso dos combustíveis fósseis é:',
    ['emissão de gases poluentes e alterações climáticas', 'redução do efeito estufa', 'ausência de impactos ambientais', 'aumento da biodiversidade'], 2);
  add('EF08CI01', 'c8_renovaveis', 'Entre as opções, qual é uma fonte de energia renovável?',
    ['Eólica', 'Carvão mineral', 'Petróleo', 'Gás natural'], 4);
  add('EF08CI01', 'c8_renovaveis', 'Na energia eólica, o vento:',
    ['gira as hélices que movem turbinas e acionam geradores de eletricidade', 'aquece a água do subsolo', 'queima o bagaço da cana', 'capta o calor do interior da Terra'], 4);
  add('EF08CI01', 'c8_renovaveis', 'A biomassa produz energia a partir:',
    ['da queima de material orgânico não fóssil, como o bagaço da cana', 'do calor do interior da Terra', 'do movimento das marés', 'dos raios solares captados por painéis'], 4);
  add('EF08CI01', 'c8_matriz_mundial', 'Segundo o gráfico, qual fonte tem a maior participação na matriz energética mundial em 2023?',
    ['Petróleo e derivados (30,3%)', 'Carvão mineral (27,8%)', 'Gás natural (22,8%)', 'Hidráulica (2,2%)'], 2);
  add('EF08CI01', 'c8_matriz_mundial', 'Somando carvão mineral, petróleo e derivados e gás natural, a participação dos combustíveis fósseis na matriz mundial é de:',
    ['80,9%', '58,1%', '53,1%', '50,6%'], 2);
  add('EF08CI01', 'c8_desafios', 'Qual é um dos desafios para implementar as energias renováveis?',
    ['Variações na produção por fatores naturais, como sol e vento', 'Emissão elevada de gás carbônico', 'Esgotamento do vento', 'Custo inicial sempre baixo'], 4);
  add('EF08CI01', 'c8_matriz_br', 'Qual fonte renovável tem a maior participação na matriz energética brasileira de 2024?',
    ['Derivados da cana-de-açúcar (16,7%)', 'Hidráulica (11,6%)', 'Lenha e carvão vegetal (8,5%)', 'Eólica e solar (5,1%)'], 2);
  add('EF08CI01', 'c8_matriz_br', 'Qual fonte tem a maior participação na matriz energética brasileira de 2024?',
    ['Petróleo e derivados (34,0%)', 'Derivados da cana-de-açúcar (16,7%)', 'Hidráulica (11,6%)', 'Gás natural (9,6%)'], 2);

  /* ---------- EF08CI03 – Transformações ---------- */
  const TR = 'EF08CI03-TR';
  add(TR, 'c8_tab_transf1', 'No motor elétrico de um ventilador ocorre a transformação de:',
    ['energia elétrica em energia mecânica', 'energia química em energia elétrica', 'energia térmica em energia mecânica', 'energia luminosa em energia química'], 22);
  add(TR, 'c8_tab_transf1', 'Em pilhas e baterias, ocorre a transformação de:',
    ['energia química em energia elétrica', 'energia elétrica em energia mecânica', 'energia térmica em energia mecânica', 'energia sonora em energia elétrica'], 22);
  add(TR, 'c8_tab_transf1', 'No motor a vapor das locomotivas antigas, ocorre a transformação de:',
    ['energia térmica em energia mecânica', 'energia elétrica em energia mecânica', 'energia química em energia elétrica', 'energia nuclear em energia térmica'], 22);
  add(TR, 'c8_tab_transf1', 'Quando uma bola cai de determinada altura, ocorre a transformação de:',
    ['energia potencial gravitacional em energia cinética', 'energia cinética em energia potencial', 'energia química em energia térmica', 'energia sonora em energia luminosa'], 22);
  add(TR, 'c8_tab_transf2', 'Em uma usina nuclear, a energia nuclear é transformada em:',
    ['energia térmica', 'energia sonora', 'energia luminosa', 'energia potencial'], 22);
  add(TR, 'c8_tab_transf2', 'Um microfone converte som em sinal elétrico. A transformação envolvida é:',
    ['energia sonora em energia elétrica', 'energia elétrica em energia sonora', 'energia luminosa em energia química', 'energia térmica em energia mecânica'], 22);
  add(TR, 'c8_tab_transf2', 'Na fotossíntese, a luz é convertida pelas plantas em:',
    ['energia química', 'energia nuclear', 'energia sonora', 'energia elétrica'], 22);
  add(TR, 'c8_tab_transf2', 'O princípio da conservação da energia afirma que a energia:',
    ['não pode ser criada nem destruída, apenas transformada', 'pode ser criada em qualquer transformação', 'é destruída ao ser transformada', 'é sempre totalmente aproveitada'], 3);
  add(TR, 'c8_tab_transf1', 'Uma moto transforma energia química em movimento e também gera calor. Isso mostra que:',
    ['nem toda a energia é aproveitada; parte se dispersa como calor', 'a energia foi destruída no processo', 'a moto cria energia nova', 'o calor não é uma forma de energia'], 3);
  add(TR, 'c8_energia_mapa', 'Ao ligar uma lâmpada, a energia elétrica se transforma principalmente em:',
    ['energia luminosa e energia térmica', 'energia química e nuclear', 'energia cinética e potencial', 'energia sonora apenas'], 3);
  add(TR, 'c8_renovaveis', 'Um equipamento aquece residências usando biomassa de resíduos sólidos. A transformação de energia envolvida é:',
    ['energia química em energia térmica', 'energia química em energia elétrica', 'energia potencial em energia térmica', 'energia química em energia sonora'], 3);
  add(TR, 'c8_tab_tipos', 'Ao pedalar, a energia química dos alimentos consumidos é transformada em:',
    ['energia mecânica (movimento)', 'energia nuclear', 'energia luminosa', 'energia elétrica'], 3);

  /* ---------- EF08CI02 – Magnetismo e eletrização ---------- */
  const M = 'EF08CI02-MAG';
  add(M, 'c8_ima_campo', 'As linhas do campo magnético ao redor de um ímã:',
    ['saem do polo norte e se dirigem ao polo sul', 'saem do polo sul e se dirigem ao polo norte', 'são paralelas e não indicam direção', 'existem apenas dentro do ímã'], 5);
  add(M, 'c8_ima_campo', 'Na representação do campo magnético, onde ele é mais intenso?',
    ['Onde as linhas estão mais próximas umas das outras', 'Onde as linhas estão mais afastadas', 'Longe do ímã', 'Apenas no meio do ímã, sem linhas'], 5);
  add(M, 'c8_ima_campo', 'Se um ímã for cortado ao meio, cada pedaço:',
    ['continuará com um polo norte e um polo sul', 'perderá o magnetismo', 'ficará apenas com polo norte', 'ficará sem polos'], 5);
  add(M, 'c8_tirinha_ima', 'Para haver atração entre um ímã e outro objeto, é necessário que o objeto também seja um ímã?',
    ['Não; um ímã também atrai objetos de materiais magnéticos, como o ferro', 'Sim; só há atração entre dois ímãs', 'Não; um ímã atrai qualquer material', 'Sim; ambos precisam estar eletrizados'], 5);
  add(M, 'c8_forcas_cargas', 'Segundo a imagem, corpos com cargas elétricas de mesmo sinal:',
    ['se repelem', 'se atraem', 'não interagem', 'se neutralizam'], 6);
  add(M, 'c8_forcas_cargas', 'Quando um corpo eletrizado se aproxima de um corpo neutro:',
    ['eles se atraem, pois as cargas do corpo neutro se redistribuem', 'eles se repelem', 'nada acontece', 'o corpo neutro perde todos os prótons'], 6);
  add(M, 'c8_vandegraaff', 'No gerador de Van de Graaff, o cabelo da personagem fica arrepiado porque:',
    ['os fios adquirem cargas de mesmo sinal e se repelem', 'os fios adquirem cargas de sinais opostos e se atraem', 'os fios estão molhados', 'o xampu foi trocado'], 6);
  add(M, 'c8_eletrizacao', 'Na eletrização por atrito, os corpos:',
    ['trocam elétrons e ficam com cargas opostas', 'trocam prótons e ficam neutros', 'não trocam cargas', 'ficam com cargas iguais ao final'], 7);
  add(M, 'c8_eletrizacao', 'Na eletrização por contato, os corpos A e B ficam com cargas:',
    ['de mesmo sinal e passam a se repelir', 'de sinais opostos e passam a se atrair', 'nulas, sem interação', 'iguais a zero após o contato'], 7);
  add(M, 'c8_garfield', 'Por que ocorre a eletrização ilustrada na tirinha?',
    ['Movimentação de elétrons entre a calça e os pelos do gato', 'Troca de átomos entre a calça e os pelos do gato', 'Diminuição do número de prótons nos pelos do gato', 'Criação de novas partículas eletrizadas'], 7);
  add(M, 'c8_raio', 'Segundo a imagem, o relâmpago é:',
    ['a luz emitida por um raio', 'o som emitido por um raio', 'o fenômeno de descarga elétrica na atmosfera', 'o vento que acompanha a tempestade'], 7);
  add(M, 'c8_raio', 'Segundo a imagem, o trovão é:',
    ['o som emitido por um raio', 'a luz emitida por um raio', 'a descarga elétrica entre as nuvens', 'a formação das nuvens'], 7);
  add(M, 'c8_terra', 'O campo magnético da Terra é fundamental porque:',
    ['protege o planeta de parte da radiação solar', 'produz as chuvas', 'impede a formação de relâmpagos', 'mantém a Lua em órbita'], 5);
  add(M, 'c8_tirinha_raio', 'Por que a praia é um local perigoso durante uma tempestade com raios?',
    ['Em área aberta e plana, a pessoa é o ponto mais alto e oferece menor resistência à descarga elétrica', 'Porque a areia produz raios', 'Porque o mar atrai a luz do relâmpago', 'Porque o vento aumenta a carga das pessoas'], 7);

  /* ---------- EF08CI02 – Corrente e circuitos ---------- */
  const C = 'EF08CI02-CIR';
  add(C, 'c8_ohm', 'Pela 1ª Lei de Ohm, em um circuito com bateria de 9 V e resistor de 3 Ω, a corrente elétrica é de:',
    ['3 A', '27 A', '6 A', '12 A'], 8);
  add(C, 'c8_ohm', 'Mantendo a tensão constante, se a resistência elétrica de um circuito aumenta, a corrente elétrica:',
    ['diminui', 'aumenta', 'não se altera', 'dobra'], 8);
  add(C, 'c8_ohm', 'Um resistor de 10 Ω é ligado a uma fonte de 20 V. Qual é a corrente elétrica?',
    ['2 A', '0,5 A', '10 A', '200 A'], 8);
  add(C, 'c8_ohm', 'A unidade de medida da resistência elétrica é:',
    ['ohm (Ω)', 'volt (V)', 'ampère (A)', 'watt (W)'], 8);
  add(C, 'c8_tab_cc_ca', 'Segundo a tabela, a corrente contínua (CC) é gerada por:',
    ['pilhas e baterias', 'geradores elétricos por indução eletromagnética', 'grandes redes elétricas', 'transformadores'], 9);
  add(C, 'c8_tab_cc_ca', 'Por que a corrente alternada (CA) é usada nas redes de distribuição de energia?',
    ['Há menor perda de energia em longas distâncias', 'É fácil de armazenar em baterias', 'Flui sempre em um único sentido', 'Não precisa de transformadores'], 9);
  add(C, 'c8_inducao', 'A corrente alternada é produzida em geradores por meio de:',
    ['indução eletromagnética', 'eletrização por atrito', 'reações químicas de pilhas', 'fotossíntese'], 9);
  add(C, 'c8_cond', 'Os materiais condutores elétricos são aqueles que:',
    ['têm elétrons livres e permitem a passagem de corrente elétrica com facilidade', 'têm elétrons fortemente presos e dificultam a corrente', 'impedem totalmente o movimento dos elétrons', 'só conduzem corrente alternada'], 10);
  add(C, 'c8_isol', 'Quais são exemplos de materiais isolantes elétricos?',
    ['Borracha, plástico, vidro e madeira', 'Cobre, alumínio, ouro e prata', 'Ouro, prata, cobre e ferro', 'Alumínio, cobre, vidro e prata'], 10);
  add(C, 'c8_tab_isol', 'Qual material oferece proteção eficaz contra choques elétricos e é resistente à umidade e ao clima?',
    ['PVC', 'Borracha, em corrente elétrica alta', 'Cerâmica, em qualquer ambiente', 'Cobre'], 10);
  add(C, 'c8_componentes', 'Qual componente da imagem desliga o circuito automaticamente em caso de curto-circuito ou sobrecarga?',
    ['B – Disjuntor', 'A – Interruptor', 'D – Lâmpada', 'E – Pilhas'], 12);
  add(C, 'c8_componentes', 'O componente indicado pela letra A, na imagem, serve para:',
    ['abrir e fechar o circuito, ligando ou desligando o aparelho', 'proteger o circuito de curtos-circuitos', 'armazenar pequenas cargas elétricas', 'fornecer eletricidade ao circuito'], 12);
  add(C, 'c8_serie', 'Qual é a resistência equivalente (Req) do circuito em série mostrado, com resistores de 10 Ω, 4 Ω e 6 Ω?',
    ['20 Ω', '60 Ω', '5 Ω', '2,4 Ω'], 13);
  add(C, 'c8_serie', 'Em um circuito em série, se um dos componentes falhar:',
    ['todo o circuito deixa de funcionar', 'os demais continuam funcionando', 'a corrente aumenta nos demais', 'a tensão se anula apenas no componente'], 13);
  add(C, 'c8_paralelo', 'Em um circuito em paralelo, a tensão elétrica é:',
    ['a mesma em todos os componentes', 'dividida entre os componentes', 'nula nos resistores', 'sempre diferente em cada ramo'], 13);
  add(C, 'c8_paralelo2', 'Em um circuito em paralelo, com resistores de 2 Ω, 6 Ω e 3 Ω, qual é a resistência equivalente?',
    ['1 Ω', '11 Ω', '0,5 Ω', '2 Ω'], 13);
  add(C, 'c8_cad_circuito', 'Um circuito em série tem resistores de 5 Ω, 10 Ω e 15 Ω. Qual é a resistência equivalente?',
    ['30 Ω', '5 Ω', '15 Ω', '10 Ω'], 13);
  add(C, 'c8_circ_simbolos', 'No circuito simbolizado, a bateria (fonte de energia) é responsável por fornecer:',
    ['a tensão elétrica do circuito', 'a resistência elétrica', 'a proteção contra sobrecarga', 'o controle de passagem da corrente'], 15);

  /* ---------- EF08CI04 – Potência e consumo ---------- */
  const P = 'EF08CI04';
  add(P, 'c8_tab_classif', 'Segundo a tabela, qual das opções é um aparelho de alto consumo de energia?',
    ['Chuveiro elétrico', 'Lâmpada de LED', 'Carregador de celular', 'Televisor'], 17);
  add(P, 'c8_tab_classif', 'Segundo a tabela, lâmpadas de LED e carregadores de celular são aparelhos de:',
    ['baixo consumo', 'médio consumo', 'alto consumo', 'consumo nulo'], 17);
  add(P, 'c8_tab_classif', 'Um ferro de passar roupas ligado a 220 V é percorrido por 6 A. Qual é a sua potência (P = U · I)?',
    ['1 320 W', '36 W', '360 W', '132 W'], 17);
  add(P, 'c8_tab_classif', 'Um chuveiro ligado a 220 V consome 20 A. Qual é sua potência elétrica?',
    ['4 400 W', '440 W', '240 W', '11 W'], 17);
  add(P, 'c8_formulas', 'Segundo as equações da imagem, o consumo mensal de um aparelho é calculado por:',
    ['P × t × 30', 'U × I', 'P × t', 'P ÷ t × 30'], 18);
  add(P, 'c8_formulas', 'Uma geladeira de 150 W funciona 24 h por dia. Qual é seu consumo em um mês de 30 dias?',
    ['108 kWh', '3,6 kWh', '10,8 kWh', '1 080 kWh'], 18);
  add(P, 'c8_formulas', 'Um ventilador de 60 W é usado 8 h por dia. Qual é seu consumo em 30 dias?',
    ['14,4 kWh', '480 kWh', '1,44 kWh', '144 kWh'], 18);
  add(P, 'c8_ence', 'A Etiqueta Nacional de Conservação de Energia (Ence) classifica os aparelhos de:',
    ['A (mais eficiente) a E (menos eficiente)', 'A (menos eficiente) a E (mais eficiente)', 'F (mais barato) a A (mais caro)', 'verde (alto consumo) a vermelho (baixo consumo)'], 18);
  add(P, 'c8_ence', 'O selo Procel, associado à etiqueta Ence, indica:',
    ['aparelhos com boa eficiência energética', 'aparelhos que não consomem energia', 'aparelhos importados', 'aparelhos de alto consumo'], 18);
  add(P, 'c8_conta', 'Na conta de energia mostrada, qual é o valor total a pagar?',
    ['R$ 129,17', 'R$ 117,00', 'R$ 32,00', 'R$ 15,10'], 19);
  add(P, 'c8_conta', 'Qual bandeira tarifária aparece indicada na conta de energia?',
    ['Amarela', 'Verde', 'Vermelha 1', 'Vermelha 2'], 19);
  add(P, 'c8_consumo_graf', 'Segundo o gráfico de consumo, em qual mês o consumo foi o maior?',
    ['JAN25 (179 kWh)', 'FEV25 (159 kWh)', 'NOV24 (158 kWh)', 'SET25 (117 kWh)'], 19);
  add(P, 'c8_consumo_graf', 'Segundo o gráfico, qual foi o menor consumo mensal registrado?',
    ['JUN25 (42 kWh)', 'JUL25 (53 kWh)', 'MAI25 (59 kWh)', 'AGO25 (62 kWh)'], 19);
  add(P, 'c8_conta', 'Uma casa consumiu 300 kWh a R$ 0,60 por kWh, com bandeira amarela (R$ 1,85 a cada 100 kWh). Qual é o total antes dos impostos?',
    ['R$ 185,55', 'R$ 181,85', 'R$ 183,70', 'R$ 191,85'], 19);

  /* ---------- EF08CI05 – Economia, sustentabilidade, segurança ---------- */
  const E = 'EF08CI05';
  add(E, 'c8_sustentavel', 'Segundo o esquema, o consumo sustentável é aquele que:',
    ['atende às necessidades atuais sem comprometer as gerações futuras', 'ignora o uso dos recursos naturais', 'prioriza apenas o crescimento econômico', 'consome sempre produtos novos'], 21);
  add(E, 'c8_sustentavel', 'O descarte inadequado de lixo eletrônico é preocupante porque:',
    ['gera impactos ambientais; metais pesados podem poluir o solo e a água', 'o lixo eletrônico é biodegradável', 'não contém metais', 'não pode ser reciclado'], 21);
  add(E, 'c8_acesso', 'O ODS 7, citado no esquema, defende:',
    ['energia acessível, limpa e segura para todos', 'redução do uso de qualquer tipo de energia', 'energia apenas para grandes cidades', 'uso exclusivo de combustíveis fósseis'], 21);
  add(E, 'c8_acesso', 'Segundo o esquema, a falta de acesso à energia elétrica:',
    ['aumenta a exclusão social e limita oportunidades de crescimento', 'melhora a qualidade de vida', 'reduz a desigualdade', 'não afeta a educação'], 21);
  add(E, 'c8_cuidados4', 'Qual atitude, segundo a ilustração, ajuda a evitar sobrecarga e acidentes?',
    ['Não ligar vários equipamentos na mesma extensão ou "benjamin"', 'Usar vários "benjamins" na mesma tomada', 'Manusear aparelhos com as mãos molhadas', 'Emendar fios sem isolamento'], 14);
  add(E, 'c8_cuidados4', 'Antes de conectar um aparelho à tomada, é importante:',
    ['conferir se a voltagem dele é compatível com a da rede (127 V ou 220 V)', 'molhar a tomada para reduzir a corrente', 'trocar os fios por outros mais finos', 'ligar o aparelho em qualquer tomada'], 14);
  add(E, 'c8_cuidados_mapa', 'Segundo o esquema, uma falha na fiação (curto-circuito) pode gerar:',
    ['incêndios', 'economia de energia', 'aumento da tensão da rede', 'proteção contra choques'], 14);
  add(E, 'c8_cuidados_mapa', 'Qual é uma boa prática de segurança com a eletricidade?',
    ['Os reparos devem ser feitos por profissionais habilitados', 'Usar fios danificados se estiverem funcionando', 'Aproximar-se da rede elétrica para consertá-la', 'Evitar fusíveis e disjuntores'], 14);
  add(E, 'c8_aterramento', 'O aterramento de aparelhos elétricos serve para:',
    ['oferecer um caminho seguro para correntes de fuga, reduzindo o risco de choques', 'aumentar o consumo de energia', 'transformar corrente contínua em alternada', 'armazenar cargas para uso posterior'], 14);
  add(E, 'c8_aterramento', 'No padrão brasileiro de tomada de três pinos, o fio de aterramento se liga ao pino:',
    ['central', 'da direita', 'da esquerda', 'a qualquer um deles'], 14);
  add(E, 'c8_fio', 'Um aparelho com o fio nas condições da imagem pode ser usado com segurança?',
    ['Não; há risco de choque e curto-circuito, e o fio deve ser substituído', 'Sim; basta secar o fio', 'Sim; o fio funciona normalmente', 'Sim; basta enrolar o fio com fita adesiva comum'], 14);
  add(E, 'c8_consumo_graf', 'Para reduzir o consumo de energia elétrica em casa, uma ação eficiente é:',
    ['reduzir o tempo de uso de aparelhos de alta potência, como o chuveiro elétrico', 'deixar as luzes acesas em todos os cômodos', 'comprar aparelhos sem a etiqueta Ence', 'usar o ar-condicionado o dia todo'], 19);
  add(E, 'c8_conta', 'Em períodos de bandeira vermelha, qual atitude pode ajudar a diminuir o valor da conta de luz?',
    ['Reduzir o tempo de uso do chuveiro elétrico e apagar luzes desnecessárias', 'Ligar mais aparelhos ao mesmo tempo', 'Deixar aparelhos em espera o dia todo', 'Trocar lâmpadas LED por incandescentes'], 19);

  /* ---------- EF08CI06 – Matriz e distribuição ---------- */
  const X = 'EF08CI06';
  add(X, 'c8_distrib', 'No esquema, a etapa 2 (transmissão) consiste em:',
    ['transportar a energia em alta tensão, por linhas de transmissão, até as subestações', 'gerar energia nas usinas', 'distribuir a energia diretamente às casas sem transformação', 'armazenar a energia em pilhas'], 11);
  add(X, 'c8_distrib', 'Na etapa 3 (distribuição), a energia:',
    ['segue pelas redes que alimentam bairros e cidades, com a tensão ajustada ao uso', 'é gerada em usinas hidrelétricas', 'é armazenada em baterias gigantes', 'é transmitida em alta tensão, sem transformação'], 11);
  add(X, 'c8_distrib', 'As subestações, no caminho da energia até as residências, têm a função de:',
    ['reduzir a tensão elétrica', 'gerar eletricidade', 'armazenar a energia por meses', 'produzir corrente contínua'], 11);
  add(X, 'c8_distrib', 'Na etapa 1 (geração), a energia elétrica pode ser gerada em usinas:',
    ['hidrelétricas, termelétricas, solares e eólicas', 'apenas de petróleo', 'apenas nucleares', 'apenas de carvão'], 11);
  add(X, 'c8_tab_oferta', 'Segundo a tabela, qual foi a participação da energia renovável na oferta interna de energia do Brasil em 2024?',
    ['50,0%', '41,5%', '58,5%', '45,8%'], 11);
  add(X, 'c8_tab_oferta', 'Segundo a tabela, qual fonte renovável teve a maior participação em 2024?',
    ['Derivados da cana-de-açúcar (16,7%)', 'Hidráulica (11,6%)', 'Eólica (2,9%)', 'Solar (2,2%)'], 11);
  add(X, 'c8_tab_oferta', 'Qual era a participação da energia solar na oferta interna de energia do Brasil em 2024?',
    ['2,2%', '0,2%', '1,2%', '12,2%'], 11);
  add(X, 'c8_tab_oferta', 'Entre 2015 e 2024, a participação das energias renováveis na oferta interna do Brasil:',
    ['aumentou, passando de 41,5% para 50,0%', 'diminuiu, passando de 58,5% para 50,0%', 'manteve-se igual', 'passou de 50,0% para 41,5%'], 11);
  add(X, 'c8_fontes_vd', 'Qual é uma vantagem da energia solar, segundo o quadro?',
    ['Gera energia limpa, sem emissão de poluentes', 'Dependência das condições climáticas nunca existe', 'Alto impacto ambiental por barragens', 'Emite grande quantidade de gases poluentes'], 22);
  add(X, 'c8_fontes_vd', 'Segundo o quadro, uma desvantagem da energia eólica é:',
    ['a dependência das condições climáticas', 'as emissões de gases poluentes', 'o risco de acidentes nucleares', 'a construção de barragens'], 22);
  add(X, 'c8_fontes_vd', 'Qual impacto está associado às usinas hidrelétricas, segundo o quadro?',
    ['A construção de barragens gera impacto ambiental', 'A emissão de metano', 'O risco de acidentes nucleares', 'As altas emissões de gases poluentes'], 22);
  add(X, 'c8_fontes_vd', 'Qual risco o quadro associa à geração de energia nuclear?',
    ['Acidentes nucleares', 'Dependência do vento', 'Emissão de metano', 'Custo inicial elevado das placas'], 22);
  add(X, 'c8_matriz_br', 'Segundo o gráfico, as fontes renováveis da matriz energética brasileira de 2024 incluem:',
    ['derivados da cana-de-açúcar, hidráulica, eólica e solar e lenha e carvão vegetal', 'petróleo, gás natural e carvão mineral', 'nuclear e carvão mineral', 'gás natural e petróleo'], 24);
  add(X, 'c8_renovaveis', 'Qual é um impacto imediato da construção de uma usina hidrelétrica em região de rios cercados por mata?',
    ['A destruição do habitat de animais terrestres', 'A poluição da água por metais da usina', 'O aumento expressivo na liberação de CO₂', 'O consumo não renovável da água'], 22);
})();
