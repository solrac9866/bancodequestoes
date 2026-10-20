/* 9º ano – Ciências, Língua Inglesa e Projeto de Vida – Volume 4 (4º bimestre)
   Em cada questão a PRIMEIRA alternativa é a correta; o site embaralha na hora de gerar a prova. */

/* ===================== CIÊNCIAS ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Ciências', A = 9;
  B.hab.push(
    { id: 'CI9-CIN', ano: A, disc: D, cod: '', tit: 'Cinemática: referencial, posição e deslocamento',
      desc: 'Reconhecer referencial, repouso, movimento, posição, trajetória, ponto material e corpo extenso, e diferenciar distância percorrida de deslocamento.', aulas: 'Aulas 2 e 3' },
    { id: 'CI9-VEL', ano: A, disc: D, cod: '', tit: 'Velocidade média e instantânea',
      desc: 'Diferenciar velocidade média e instantânea, usar as unidades e calcular a velocidade média (Vm = ΔS/Δt) em situações do cotidiano.', aulas: 'Aulas 4, 5 e 8' },
    { id: 'CI9-NEW', ano: A, disc: D, cod: '', tit: 'Aceleração, força e leis de Newton',
      desc: 'Calcular aceleração média (a = ΔV/Δt) e força resultante (FRes = m·a) e aplicar as três leis de Newton a situações do cotidiano.', aulas: 'Aulas 2, 6, 7, 9 e 21' },
    { id: 'CI9-MOD', ano: A, disc: D, cod: '', tit: 'Modelos do Universo e Sistema Solar',
      desc: 'Reconhecer as ideias de Aristóteles, Hiparco, Ptolomeu, Copérnico, Kepler e Galileu, o Big Bang e as características dos planetas do Sistema Solar.', aulas: 'Aulas 10 a 12 e 22' },
    { id: 'CI9-CEU', ano: A, disc: D, cod: '', tit: 'Estrelas, observação do céu e constelações',
      desc: 'Compreender o ciclo de vida e as cores das estrelas, a história da Astronomia e seus instrumentos, e as constelações indígenas.', aulas: 'Aulas 13 a 15 e 23' },
    { id: 'CI9-ESP', ano: A, disc: D, cod: '', tit: 'Gravitação, Terra e Lua, vida e exploração espacial',
      desc: 'Relacionar a força gravitacional às massas e à distância, os movimentos da Terra e da Lua e os eclipses, as condições para a vida e os marcos da exploração espacial.', aulas: 'Aulas 17 a 20 e 24' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length - 1].texto = texto; };

  /* ---------- CI9-CIN ---------- */
  add('CI9-CIN', '9_ci_traj', 'Segundo o quadro, o conjunto das posições ocupadas por um corpo em movimento define a:',
    ['trajetória', 'velocidade', 'aceleração', 'massa'], 2);
  add('CI9-CIN', '9_ci_traj', 'As pegadas na areia mostram as posições ocupadas por quem caminha. O conjunto dessas posições é a:',
    ['trajetória', 'inércia', 'força resultante', 'velocidade média'], 2);
  addT('CI9-CIN', "O ponto material é um corpo cujas dimensões podem ser desprezadas em relação àquilo que está sendo analisado. O corpo extenso, ao contrário, é todo corpo cujas dimensões não podem ser desprezadas. Um cachorro de 1 m que percorreu em um dia 5 000 m é ponto material; o mesmo cachorro, sentado em um sofá entre pessoas, [...] seu tamanho é relevante para a situação.", 'De acordo com o quadro, o ponto material é um corpo cujas dimensões:',
    ['podem ser desprezadas em relação ao que está sendo analisado', 'nunca podem ser desprezadas', 'são sempre menores que 1 m', 'são maiores que o referencial'], 2);
  addT('CI9-CIN', "O ponto material é um corpo cujas dimensões podem ser desprezadas em relação àquilo que está sendo analisado. O corpo extenso, ao contrário, é todo corpo cujas dimensões não podem ser desprezadas. Um cachorro de 1 m que percorreu em um dia 5 000 m é ponto material; o mesmo cachorro, sentado em um sofá entre pessoas, [...] seu tamanho é relevante para a situação.", 'Segundo o quadro, o mesmo cachorro sentado no sofá entre pessoas é considerado:',
    ['corpo extenso', 'ponto material', 'referencial', 'trajetória'], 2);
  add('CI9-CIN', '9_ci_cachorro', 'Na figura, um cachorro de 1 m percorre uma estrada de 5 000 m. Em relação a essa distância, ele pode ser considerado:',
    ['ponto material, pois seu tamanho pode ser desprezado', 'corpo extenso, pois tem 1 m', 'um referencial', 'um corpo em repouso'], 2);
  add('CI9-CIN', '9_ci_vaca', 'Na figura, adotando-se a posição inicial da vaca como referência (0 m), a posição do ponto B é:',
    ['5 m', '0 m', '2 m', '7 m'], 3);
  add('CI9-CIN', '9_ci_vaca', 'Na figura, com o fazendeiro (Ponto Z) como “ponto zero”, a posição do ponto B é:',
    ['7 m', '5 m', '2 m', '0 m'], 3);
  add('CI9-CIN', '9_ci_vaca', 'A figura mostra que, ao mudar o referencial, a distância entre os pontos A e B:',
    ['não muda: continua 5 metros', 'dobra', 'diminui para 2 metros', 'passa a ser 7 metros'], 3);
  add('CI9-CIN', '9_ci_vaca_ida', 'Na figura, a vaca anda 5 m de A até B e depois 5 m de volta até A. A distância percorrida e o deslocamento são, respectivamente:',
    ['10 m e 0 m', '0 m e 10 m', '5 m e 5 m', '10 m e 10 m'], 3);
  add('CI9-CIN', '9_ci_vaca_maria', 'Maria só viu a vaca no ponto A no início e, depois, de volta ao ponto A. Para Maria, o deslocamento da vaca é:',
    ['nulo, pois a posição final coincide com a inicial', 'de 5 metros', 'de 10 metros', 'igual à distância percorrida'], 3);
  add('CI9-CIN', '9_ci_formiga', 'Na figura, a formiga parte da posição 5 cm da régua e chega à posição 12 cm. Seu deslocamento é:',
    ['7 cm', '5 cm', '12 cm', '17 cm'], 4);
  add('CI9-CIN', '9_ci_mapajoao', 'No mapa, o ponto A (casa de João) é adotado como marco zero. A posição de João no ponto A é:',
    ['0 m', '10 m', '20 m', '100 m'], 2);
  add('CI9-CIN', null, 'Um carro permanece sempre ao lado de um caminhão, que é usado como referencial. Está correto afirmar que o carro:',
    ['está em repouso em relação ao caminhão, mas pode estar em movimento em relação à rodovia', 'está em repouso independentemente do referencial', 'está necessariamente em movimento em qualquer referencial', 'não tem posição definida'], 2);

  /* ---------- CI9-VEL ---------- */
  add('CI9-VEL', '9_ci_vinst', 'Na figura, o carro marca 54 km/h às 7:55 h. Esse valor é a velocidade:',
    ['instantânea', 'média', 'escalar total', 'de repouso'], 4);
  add('CI9-VEL', '9_ci_vinst', 'Pelos valores da figura (54, 56, 52 e 58 km/h), a média das quatro velocidades instantâneas é:',
    ['55 km/h', '54 km/h', '56 km/h', '220 km/h'], 4);
  add('CI9-VEL', '9_ci_vmedia', 'Segundo a figura, a velocidade média do carro entre 7:55 h e 7:58 h foi de:',
    ['55 km/h', '58 km/h', '54 km/h', '3 km/h'], 4);
  add('CI9-VEL', '9_ci_tabunid', 'De acordo com o quadro, a unidade padrão de velocidade no Sistema Internacional é:',
    ['metro por segundo (m/s)', 'metro (m)', 'segundo (s)', 'quilômetro por hora (km/h)'], 4);
  add('CI9-VEL', '9_ci_carrojoao', 'Na figura, o carro de João vai do km 20 ao km 220 em 2 h. A velocidade média foi de:',
    ['100 km/h', '110 km/h', '200 km/h', '400 km/h'], 4);
  add('CI9-VEL', '9_ci_carrojoao', 'Em certo momento, o velocímetro do carro de João marcou 120 km/h. Esse valor representa a velocidade:',
    ['instantânea', 'média', 'inicial', 'nula'], 4);
  add('CI9-VEL', '9_ci_carrojoao', 'Mantendo a velocidade média de 100 km/h, quantos quilômetros João percorreria em 3 h?',
    ['300 km', '200 km', '100 km', '600 km'], 4);
  add('CI9-VEL', '9_ci_anotacoes', 'Pelas anotações do motorista, qual foi a velocidade escalar média entre as cidades A e D?',
    ['85 km/h', '340 km/h', '540 km/h', '90 km/h'], 5);
  add('CI9-VEL', '9_ci_anotacoes', 'Pelas anotações, qual foi a velocidade média entre as cidades C e D?',
    ['120 km/h', '40 km/h', '90 km/h', '540 km/h'], 5);
  add('CI9-VEL', null, 'Um ciclista percorreu 1 200 m em 60 s, com movimento constante. Sua velocidade média foi de:',
    ['20 m/s', '10 m/s', '15 m/s', '25 m/s'], 4);
  add('CI9-VEL', null, 'Um carro percorre 60 km em 45 minutos. A velocidade média, em km/h, é de:',
    ['80 km/h', '60 km/h', '70 km/h', '45 km/h'], 5);
  add('CI9-VEL', null, 'Um trem percorre 120 km em 2 h, fica 1 h parado e percorre mais 60 km em 1 h. A velocidade média em todo o intervalo é de:',
    ['45 km/h', '60 km/h', '90 km/h', '180 km/h'], 5);
  add('CI9-VEL', null, 'Um ciclista faz 60 km a 20 km/h (3 h) e 40 km a 40 km/h (1 h). A velocidade média em todo o percurso é de:',
    ['25 km/h', '30 km/h', '20 km/h', '40 km/h'], 5);
  add('CI9-VEL', null, 'Um carrinho de fricção percorre uma pista de 24 cm em 3 s. Sua velocidade escalar média é de:',
    ['8 cm/s', '7 cm/s', '12 cm/s', '72 cm/s'], 8);

  /* ---------- CI9-NEW ---------- */
  add('CI9-NEW', '9_ci_velocimetro', 'No esquema, a velocidade aumenta de 0 a 4 segundos. Isso indica que há:',
    ['aceleração', 'repouso', 'velocidade constante', 'deslocamento nulo'], 6);
  addT('CI9-NEW', "Força resultante é a soma de todas as forças que atuam em um corpo na mesma direção e sentido. Quando as forças atuam em sentidos opostos, pode ocorrer subtração entre elas.", 'Duas forças atuam no mesmo sentido: F1 = 30 N e F2 = 20 N. A força resultante vale:',
    ['50 N', '10 N', '600 N', '1,5 N'], 6);
  add('CI9-NEW', '9_ci_leis23', 'Pela segunda lei de Newton (FRes = m · a), a força resultante para acelerar um corpo de 3 kg com 2 m/s² é:',
    ['6 N', '1,5 N', '5 N', '9 N'], 6);
  add('CI9-NEW', '9_ci_leis23', 'Segundo a terceira lei, um livro sobre uma mesa exerce uma força para baixo sobre ela. A mesa exerce sobre o livro uma força:',
    ['para cima, de mesma intensidade', 'para baixo, de maior intensidade', 'nula', 'para cima, de menor intensidade'], 6);
  add('CI9-NEW', '9_ci_carrinho', 'Na figura, após o empurrão, o carrinho diminui a velocidade até parar. Segundo o livro, isso acontece por causa do:',
    ['atrito entre as rodas e o chão', 'fim da inércia', 'aumento da massa', 'peso das sacolas apenas'], 2);
  addT('CI9-NEW', "A primeira lei de Newton refere-se ao comportamento dos corpos em repouso ou em movimento com velocidade constante. Segundo essa lei, “um corpo em repouso se mantém em repouso, e um corpo em movimento se mantém em movimento com velocidade constante, a não ser que uma força resultante diferente de zero atue sobre ele”.", 'Pela primeira lei de Newton, um corpo em movimento com velocidade constante tende a:',
    ['manter esse movimento, a não ser que uma força resultante atue sobre ele', 'parar sempre', 'acelerar sempre', 'mudar de massa'], 2);
  add('CI9-NEW', null, 'Um carro a 15 m/s freia e, após 5 s, está a 5 m/s. Sua aceleração média é de:',
    ['−2 m/s²', '2 m/s²', '−10 m/s²', '3 m/s²'], 7);
  add('CI9-NEW', null, 'Um carro passa de 72 km/h para 144 km/h em 5 s. Sua aceleração média, em m/s², é de:',
    ['4 m/s²', '14,4 m/s²', '72 m/s²', '20 m/s²'], 7);
  add('CI9-NEW', null, 'Um meteoro tem a velocidade aumentada de 200 m/s para 1 200 m/s em 5 s. Sua aceleração média é de:',
    ['200 m/s²', '1 000 m/s²', '280 m/s²', '5 m/s²'], 7);
  add('CI9-NEW', null, 'Duas pessoas empurram um armário de 60 kg no mesmo sentido, com 80 N e 40 N, em piso liso. A aceleração do armário é de:',
    ['2 m/s²', '1,5 m/s²', '0,67 m/s²', '7 200 m/s²'], 7);
  add('CI9-NEW', null, 'Um carrinho de 20 kg é empurrado com 60 N e sofre atrito de 20 N em sentido oposto. Sua aceleração é de:',
    ['2 m/s²', '3 m/s²', '4 m/s²', '1 m/s²'], 7);
  add('CI9-NEW', null, 'Um corredor de 70 kg parte do repouso e atinge 8 m/s em 4 s. A força resultante sobre ele é de:',
    ['140 N', '2 N', '560 N', '35 N'], 7);
  add('CI9-NEW', null, 'Uma bola de 0,5 kg adquire aceleração constante de 4 m/s². A força resultante sobre ela é de:',
    ['2 N', '8 N', '4 N', '0,125 N'], 6);
  add('CI9-NEW', null, 'Um carro de 800 kg parte do repouso e atinge 72 km/h (20 m/s) em 4 s. A força resultante necessária é de:',
    ['4 000 N', '3 200 N', '800 N', '16 000 N'], 7);

  /* ---------- CI9-MOD ---------- */
  addT('CI9-MOD', "Aristóteles (384 a.C.–322 a.C): argumentou que, se a Terra girasse em torno do próprio eixo ou se movesse ao redor do Sol, uma esfera lançada para cima não subiria e desceria verticalmente, mas faria uma trajetória curva. [...]", 'Segundo o quadro, Aristóteles argumentava que, se a Terra se movesse, uma esfera lançada para cima:',
    ['faria uma trajetória curva, e não subiria e desceria na vertical', 'subiria e desceria na vertical', 'ficaria parada no ar', 'cairia mais depressa'], 10);
  add('CI9-MOD', '9_ci_hiparco', 'No modelo de Hiparco, embora o Sol girasse em torno da Terra em um círculo, a Terra:',
    ['não estaria exatamente no centro desse movimento', 'estaria sempre no centro exato', 'giraria em torno do Sol', 'não existiria no modelo'], 10);
  addT('CI9-MOD', "Copérnico (1473–1543): propôs o heliocentrismo, com o Sol no centro do sistema solar, e não a Terra. Copérnico acreditava que os astros se moviam em órbitas circulares. Ele não conseguiu provar isso, mas seu modelo abriu caminho para novos avanços na astronomia.", 'Segundo o quadro, Copérnico propôs o heliocentrismo, com:',
    ['o Sol no centro do sistema solar', 'a Terra no centro do sistema solar', 'a Lua no centro', 'órbitas elípticas comprovadas'], 10);
  addT('CI9-MOD', "Johannes Kepler (1571–1630): defendeu o heliocentrismo e mostrou que o movimento retrógrado de Marte pode ser explicado quando se considera que os planetas se movem em órbitas elípticas, e não circulares. Além disso, contribuiu para a compreensão dos tempos de duração das órbitas dos planetas ao redor do Sol.", 'De acordo com o quadro, Kepler explicou o movimento retrógrado de Marte considerando que os planetas se movem em órbitas:',
    ['elípticas', 'circulares', 'quadradas', 'retas'], 10);
  addT('CI9-MOD', "Galileu Galilei (1564–1642): utilizou e aperfeiçoou a luneta para observar o céu. Com ela, identificou luas orbitando Júpiter, e isso mostrou que nem todos os astros giravam em torno da Terra.", 'Com a luneta, Galileu identificou luas orbitando Júpiter, o que mostrou que:',
    ['nem todos os astros giravam em torno da Terra', 'a Terra era o centro do Universo', 'Júpiter não tinha luas', 'o Sol girava em torno de Júpiter'], 10);
  add('CI9-MOD', '9_ci_geohelio', 'Na figura, o modelo que afirmava que a Terra estava no centro do Universo é o:',
    ['geocentrismo', 'heliocentrismo', 'Big Bang', 'modelo elíptico'], 22);
  add('CI9-MOD', '9_ci_pisa', 'No experimento atribuído a Galileu, esferas de massas diferentes abandonadas da mesma altura e ao mesmo tempo, com pouca resistência do ar, chegam ao solo:',
    ['simultaneamente', 'primeiro a mais leve', 'primeiro a mais pesada', 'em tempos muito diferentes'], 10);
  add('CI9-MOD', '9_ci_balao', 'Na analogia do balão, os pontos que se afastam representam:',
    ['as galáxias, com a expansão do Universo', 'os planetas girando em torno do Sol', 'as estrelas em colapso', 'os satélites artificiais'], 22);
  add('CI9-MOD', '9_ci_sistsolar', 'Na figura, os planetas rochosos mais próximos do Sol são:',
    ['Mercúrio, Vênus, Terra e Marte', 'Júpiter, Saturno, Urano e Netuno', 'Terra, Marte, Júpiter e Saturno', 'Vênus, Urano e Netuno'], 12);
  add('CI9-MOD', '9_ci_mercurio', 'Segundo o quadro, Mercúrio leva cerca de quanto tempo para orbitar o Sol?',
    ['88 dias terrestres', '225 dias terrestres', '12 anos terrestres', '30 anos terrestres'], 12);
  add('CI9-MOD', '9_ci_venus', 'De acordo com o quadro, Vênus é o planeta:',
    ['mais quente do Sistema Solar', 'mais frio do Sistema Solar', 'que tem dois satélites naturais', 'mais distante do Sol'], 12);
  add('CI9-MOD', '9_ci_marteplan', 'Segundo o quadro, Marte tem dois satélites naturais, chamados:',
    ['Fobos e Deimos', 'Lua e Titã', 'Europa e Encélado', 'Io e Calisto'], 12);
  add('CI9-MOD', '9_ci_jupiter', 'Segundo o quadro, Júpiter é:',
    ['o maior planeta do Sistema Solar', 'um planeta rochoso', 'o planeta mais distante do Sol', 'o planeta dos anéis de gelo'], 12);
  add('CI9-MOD', '9_ci_saturno', 'De acordo com o quadro, Saturno é conhecido principalmente por:',
    ['seus anéis, formados por fragmentos de gelo e rocha', 'ser o maior planeta', 'ter apenas um satélite', 'ter superfície sólida'], 12);

  /* ---------- CI9-CEU ---------- */
  add('CI9-CEU', '9_ci_fusao', 'Na fusão nuclear no interior das estrelas, átomos de hidrogênio se unem e formam átomos de:',
    ['hélio, liberando grande quantidade de energia', 'oxigênio, absorvendo energia', 'carbono, sem liberar energia', 'água'], 13);
  add('CI9-CEU', '9_ci_morte', 'Quando não há hidrogênio suficiente para manter a fusão, a gravidade passa a:',
    ['vencer a pressão, e a estrela começa a colapsar', 'ser menor, e a estrela se expande', 'desaparecer', 'produzir mais fusão'], 13);
  add('CI9-CEU', '9_ci_morte', 'Na figura, a energia liberada pelas fusões nucleares exerce pressão “para fora”, enquanto a gravidade exerce uma força:',
    ['“para dentro” da estrela', '“para fora” da estrela', 'nula', 'apenas lateral'], 13);
  add('CI9-CEU', '9_ci_cores', 'Pela tabela, a classe espectral de estrelas com a maior temperatura aproximada de superfície é:',
    ['O (28 000 a 50 000 K)', 'M (2 500 a 3 500 K)', 'G (5 000 a 6 000 K)', 'K (3 500 a 5 000 K)'], 13);
  add('CI9-CEU', '9_ci_cores', 'Pela tabela, a classe espectral com a menor temperatura aproximada de superfície é a:',
    ['M (2 500 a 3 500 K)', 'O (28 000 a 50 000 K)', 'A (7 500 a 10 000 K)', 'F (6 000 a 7 500 K)'], 13);
  add('CI9-CEU', '9_ci_astrohist', 'Na linha do tempo, Nicolau Copérnico afirmou que:',
    ['o Sol ocupava o centro do Universo', 'a Terra ocupava o centro do Universo', 'a Lua girava em torno do Sol', 'as estrelas eram fixas'], 14);
  add('CI9-CEU', '9_ci_astrohist', 'Segundo a linha do tempo, Tycho Brahe:',
    ['construiu equipamentos para observar o céu', 'foi o primeiro a explicar um eclipse solar', 'aprimorou a luneta', 'descreveu a órbita dos planetas'], 14);
  add('CI9-CEU', '9_ci_astrotec', 'De acordo com a linha do tempo, a sonda Mariner 2, de 1962, foi a primeira a:',
    ['sobrevoar outro planeta (Vênus)', 'pousar na Lua', 'sair do Sistema Solar', 'explorar galáxias'], 14);
  add('CI9-CEU', '9_ci_astrotec', 'Segundo a linha do tempo, o telescópio espacial Hubble foi lançado para:',
    ['fora da atmosfera terrestre', 'dentro da atmosfera terrestre', 'o fundo do mar', 'o planeta Vênus'], 14);
  add('CI9-CEU', '9_ci_instrum', 'Segundo o esquema, as sondas Voyager 1 e 2, lançadas em 1977, foram enviadas para explorar:',
    ['Júpiter, Saturno, Urano e Netuno', 'Mercúrio e Vênus', 'a Lua', 'exoplanetas'], 14);
  add('CI9-CEU', '9_ci_homemvelho', 'De acordo com o quadro, a constelação do Homem Velho está relacionada ao:',
    ['período de chuvas, ou período de plantio', 'inverno e à seca', 'fim do ano letivo', 'período de ventos'], 15);
  add('CI9-CEU', '9_ci_ema', 'Segundo o quadro, a constelação da Ema pode ser vista entre junho e setembro e indica:',
    ['a estação seca, ou seja, o inverno', 'o período de plantio', 'a estação chuvosa', 'o verão'], 15);
  add('CI9-CEU', '9_ci_anta', 'Segundo o quadro, a constelação da Anta representa:',
    ['a transição entre o período de seca e o de chuva', 'o início do inverno', 'o período de plantio', 'a época de colheita'], 15);
  add('CI9-CEU', '9_ci_emaveado', 'Pelas datas em que aparecem no céu (Ema em 15 de junho e Homem Velho em 15 de dezembro), as constelações podem ser associadas:',
    ['às mudanças de estação, com períodos de chuva ou de seca', 'apenas às fases da Lua', 'ao horário dos eclipses', 'ao tamanho das estrelas'], 15);

  /* ---------- CI9-ESP ---------- */
  add('CI9-ESP', '9_ci_gravit', 'Segundo a lei da gravitação universal, quanto maiores as massas e menor a distância (d) entre os corpos, a força gravitacional:',
    ['maior', 'menor', 'nula', 'constante'], 17);
  add('CI9-ESP', '9_ci_rotacao', 'Segundo a figura, a rotação da Terra produz a sucessão de:',
    ['dias e noites', 'estações do ano', 'marés altas', 'eclipses'], 24);
  add('CI9-ESP', '9_ci_rotacao', 'Segundo a figura, a translação da Terra ao redor do Sol ocasiona:',
    ['as estações do ano', 'os dias e as noites', 'as fases da Lua', 'os eclipses lunares'], 24);
  add('CI9-ESP', '9_ci_lua', 'Segundo o quadro, a revolução da Lua ao redor da Terra completa uma volta a cada cerca de:',
    ['27,3 dias', '24 horas', '365 dias', '88 dias'], 18);
  add('CI9-ESP', '9_ci_eclipse', 'Segundo o texto, o eclipse solar ocorre quando a Lua se posiciona:',
    ['entre a Terra e o Sol, na fase de Lua nova', 'atrás da Terra, na Lua cheia', 'entre a Terra e o Sol, na Lua cheia', 'ao lado do Sol'], 18);
  add('CI9-ESP', '9_ci_anular', 'A imagem mostra o eclipse anular de 14 de outubro de 2023, que é um eclipse solar. Nele, a Lua se posiciona:',
    ['entre a Terra e o Sol', 'entre o Sol e Marte', 'atrás da Terra', 'longe do alinhamento'], 24);
  add('CI9-ESP', '9_ci_condvida', 'No esquema, a camada de ozônio existe na atmosfera e atua na:',
    ['proteção contra radiações cósmica e solar', 'produção de oxigênio', 'manutenção da gravidade', 'formação de água líquida'], 19);
  add('CI9-ESP', '9_ci_condvida', 'Segundo o esquema, a gravidade da Terra:',
    ['mantém a atmosfera ao redor do planeta', 'impede a existência de água', 'produz a radiação solar', 'afasta os seres vivos da superfície'], 19);
  addT('CI9-ESP', "A Astrobiologia é a área da ciência que investiga a possibilidade de existir vida fora da Terra. Esse campo é multidisciplinar, envolvendo áreas como astronomia, biologia, geologia e química.", 'Segundo o texto, a Astrobiologia é a área da ciência que investiga:',
    ['a possibilidade de existir vida fora da Terra', 'apenas a origem das estrelas', 'somente o clima da Terra', 'a construção de foguetes'], 19);
  add('CI9-ESP', '9_ci_trappist', 'Na figura do sistema TRAPPIST-1, quantos planetas são identificados (de b a h)?',
    ['7', '5', '8', '3'], 19);
  add('CI9-ESP', '9_ci_marcos', 'Na linha do tempo, o primeiro ser humano no espaço (Yuri Gagarin) foi em:',
    ['1961', '1957', '1969', '1998'], 20);
  add('CI9-ESP', '9_ci_iss', 'Segundo a linha do tempo, a construção da Estação Espacial Internacional (ISS) começou em:',
    ['1998', '1957', '2021', '1969'], 20);
  add('CI9-ESP', '9_ci_brasil2', 'Na linha do tempo, o primeiro brasileiro a partir para a ISS foi:',
    ['Marcos Pontes, em 2006', 'Yuri Gagarin, em 1961', 'Neil Armstrong, em 1969', 'Marcos Pontes, em 1997'], 20);
  addT('CI9-ESP', "Filtro UV: desenvolvido para proteger os astronautas da intensa radiação ultravioleta (UV) no espaço. É usado em óculos de sol.", 'Segundo o texto, o filtro UV foi desenvolvido para proteger os astronautas e hoje é usado em:',
    ['óculos de sol', 'colchões', 'painéis solares', 'termômetros'], 20);
})();

/* ===================== LÍNGUA INGLESA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Língua Inglesa', A = 9;
  B.hab.push(
    { id: 'IN9-WH', ano: A, disc: D, cod: '', tit: 'Reporting facts: wh-questions',
      desc: 'Identificar em um texto os fatos essenciais (What, Where, When, Who, Why) e relacioná-los às wh-questions.', aulas: 'Aulas 1 e 3' },
    { id: 'IN9-CON', ano: A, disc: D, cod: '', tit: 'Condition and conclusion connectors',
      desc: 'Reconhecer e usar conectivos de condição (if, unless, in case, as long as) e de conclusão (in the end, to sum up, as a result, therefore).', aulas: 'Aula 3' },
    { id: 'IN9-FO', ano: A, disc: D, cod: '', tit: 'Fact or opinion',
      desc: 'Distinguir fatos de opiniões em textos em inglês, observando datas, números, adjetivos, verbos modais, quantificadores e generalizações.', aulas: 'Aulas 5 e 7' },
    { id: 'IN9-NEW', ano: A, disc: D, cod: '', tit: 'Reading news: structure of a news article',
      desc: 'Reconhecer headline, facts, quotes e opinion em notícias em inglês e compreender as informações principais.', aulas: 'Aulas 9 e 11' },
    { id: 'IN9-DAT', ano: A, disc: D, cod: '', tit: 'Reading news: headlines, dates and numbers',
      desc: 'Localizar em notícias em inglês manchetes, datas, horários, números e estatísticas.', aulas: 'Aula 11' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length - 1].texto = texto; };

  /* ---------- IN9-WH ---------- */
  addT('IN9-WH', "“The art exhibition starts on June 10th at the city museum. There we can see many of Ana Torres’ paintings.”", 'In “The art exhibition starts on June 10th at the city museum”, which wh-question is answered by “June 10th”?',
    ['When?', 'Where?', 'Who?', 'Why?'], 1);
  addT('IN9-WH', "“The art exhibition starts on June 10th at the city museum. There we can see many of Ana Torres’ paintings.”", 'In the example, “city museum” answers the question:',
    ['Where?', 'When?', 'Who?', 'What?'], 1);
  addT('IN9-WH', "“The art exhibition starts on June 10th at the city museum. There we can see many of Ana Torres’ paintings.”", 'In the example, “Ana Torres” answers the question:',
    ['Who?', 'Where?', 'When?', 'Why?'], 1);
  addT('IN9-WH', "“The art exhibition starts on June 10th at the city museum. There we can see many of Ana Torres’ paintings.”", 'In the example, “art exhibition” answers the question:',
    ['What?', 'Who?', 'When?', 'Where?'], 1);
  addT('IN9-WH', "Why? (Por quê?) → explica a causa ou o motivo do fato.", 'According to the text, the question “Why?” explains:',
    ['the cause or reason of the fact', 'the place of the fact', 'the people involved', 'the time of the fact'], 1);
  addT('IN9-WH', "Last Friday, students from Greenwood School won the city’s annual recycling contest. The event happened at Central Park, where five schools competed to collect the most recyclable materials. The winners were the Grade 6 class, who collected over 200 kilograms of paper and plastic. [...]", 'Who won the city’s annual recycling contest?',
    ['Students from Greenwood School', 'Students from Central Park', 'Five different schools', 'The city teachers'], 3);
  addT('IN9-WH', "Last Friday, students from Greenwood School won the city’s annual recycling contest. The event happened at Central Park, where five schools competed to collect the most recyclable materials. The winners were the Grade 6 class, who collected over 200 kilograms of paper and plastic. [...]", 'Where did the event happen?',
    ['At Central Park', 'At Greenwood School', 'At the city museum', 'At the stadium'], 3);
  addT('IN9-WH', "Last Friday, students from Greenwood School won the city’s annual recycling contest. The event happened at Central Park, where five schools competed to collect the most recyclable materials. The winners were the Grade 6 class, who collected over 200 kilograms of paper and plastic. [...]", 'When did the Greenwood students win the contest?',
    ['Last Friday', 'Last Sunday', 'Next Friday', 'Last year'], 3);
  addT('IN9-WH', "Last Friday, students from Greenwood School won the city’s annual recycling contest. The event happened at Central Park, where five schools competed to collect the most recyclable materials. The winners were the Grade 6 class, who collected over 200 kilograms of paper and plastic. [...]", 'How many schools competed in the contest?',
    ['Five', 'Six', 'Two', 'Grade 6'], 3);
  addT('IN9-WH', "Last Friday, students from Greenwood School won the city’s annual recycling contest. The event happened at Central Park, where five schools competed to collect the most recyclable materials. The winners were the Grade 6 class, who collected over 200 kilograms of paper and plastic. [...]", 'What did the winners collect?',
    ['Over 200 kg of paper and plastic', 'Over 300 kg of glass', 'Money for the park', 'Trees for the city'], 3);
  addT('IN9-WH', "On Saturday, May 3, 2025, Lady Gaga performed a free concert at Copacabana Beach in Rio de Janeiro. The show started at 9:45 p.m. and was part of her “Mayhem” tour. More than 2 million people attended the event [...].", 'What happened on Saturday, May 3, 2025, in Rio de Janeiro?',
    ['Lady Gaga performed a free concert', 'A football final', 'A science fair', 'An art exhibition'], 5);
  addT('IN9-WH', "On Saturday, May 3, 2025, Lady Gaga performed a free concert at Copacabana Beach in Rio de Janeiro. The show started at 9:45 p.m. and was part of her “Mayhem” tour. More than 2 million people attended the event [...].", 'Where did the concert take place?',
    ['At Copacabana Beach', 'At a school', 'At the city museum', 'At a stadium in Raleigh'], 5);
  addT('IN9-WH', "On Saturday, May 3, 2025, Lady Gaga performed a free concert at Copacabana Beach in Rio de Janeiro. The show started at 9:45 p.m. and was part of her “Mayhem” tour. More than 2 million people attended the event [...].", 'When did the show start?',
    ['At 9:45 p.m.', 'At 9:45 a.m.', 'At 2:00 p.m.', 'At midnight'], 5);
  add('IN9-WH', null, 'Which answer matches the question “Who...?”',
    ['Whitney / Henry / Osvald', 'Washington, DC / Here / There', 'Wednesday / Everyday / Never', 'Because we said so'], 1);

  /* ---------- IN9-CON ---------- */
  add('IN9-CON', '9_in_conn', 'According to the chart, “If”, “Unless”, “In case” and “As long as” are:',
    ['condition connectors', 'conclusion connectors', 'addition connectors', 'contrast connectors'], 3);
  add('IN9-CON', '9_in_conn', 'According to the chart, “To sum up”, “As a result” and “Therefore” are:',
    ['conclusion connectors', 'condition connectors', 'addition connectors', 'contrast connectors'], 3);
  add('IN9-CON', '9_in_conn', 'In the chart, “Unless...” is translated as:',
    ['A menos que...', 'Se...', 'Desde que...', 'Portanto...'], 3);
  add('IN9-CON', '9_in_conn', 'In the chart, “As long as...” is translated as:',
    ['Desde que...', 'A menos que...', 'Como resultado...', 'Para resumir...'], 3);
  add('IN9-CON', '9_in_conn', 'In the chart, “Therefore...” is translated as:',
    ['Portanto...', 'No fim...', 'Caso...', 'Se...'], 3);
  add('IN9-CON', null, 'In “The students collected over 300 kg of plastic; therefore, they won first place”, the connector “therefore” shows a:',
    ['conclusion', 'condition', 'contrast', 'question'], 3);
  add('IN9-CON', null, 'In “If the school organizes more recycling campaigns, students will get more involved”, the connector “If” shows a:',
    ['condition', 'conclusion', 'contrast', 'time'], 3);
  add('IN9-CON', null, 'In “As long as the group meets every Saturday, the park will stay clean”, “As long as” shows a:',
    ['condition', 'conclusion', 'addition', 'contrast'], 3);
  add('IN9-CON', null, 'In “The school implemented a new waste policy. As a result, the amount of trash decreased”, “As a result” shows a:',
    ['conclusion', 'condition', 'contrast', 'addition'], 3);
  add('IN9-CON', null, 'In “The event was a big success. To sum up, everyone made a real difference”, “To sum up” shows a:',
    ['conclusion', 'condition', 'contrast', 'question'], 3);
  add('IN9-CON', null, 'Complete: “_____ the school organizes more recycling campaigns, students will get more involved.”',
    ['If', 'Therefore', 'In the end', 'As a result'], 3);
  add('IN9-CON', null, 'Complete: “I will save a copy of the presentation on a pen drive _____ the computer crashes.”',
    ['in case', 'to sum up', 'therefore', 'as a result'], 3);
  add('IN9-CON', null, 'Complete: “The company invested in renewable energy. _____, their carbon footprint decreased.”',
    ['Therefore', 'Unless', 'As long as', 'If'], 3);
  add('IN9-CON', null, 'Complete: “_____ we start taking climate change seriously, the consequences will be devastating for future generations.”',
    ['Unless', 'In the end', 'Therefore', 'To sum up'], 3);

  /* ---------- IN9-FO ---------- */
  addT('IN9-FO', "Para identificar uma opinião em um texto jornalístico em inglês, atente-se para: 1. Palavras que mostram julgamento, geralmente adjetivos: excellent, unforgettable, awesome, disappointing etc. 2. Verbos modais: should, must, might etc. 3. Generalizações ou alegações não comprovadas: “This was the greatest concert ever held in Brazil.” (no evidence; an opinion).", 'According to the chart, words that show judgment, usually adjectives (excellent, unforgettable, awesome), indicate:',
    ['an opinion', 'a fact', 'a date', 'a number'], 5);
  addT('IN9-FO', "Para identificar uma opinião em um texto jornalístico em inglês, atente-se para: 1. Palavras que mostram julgamento, geralmente adjetivos: excellent, unforgettable, awesome, disappointing etc. 2. Verbos modais: should, must, might etc. 3. Generalizações ou alegações não comprovadas: “This was the greatest concert ever held in Brazil.” (no evidence; an opinion).", 'According to the chart, “This was the greatest concert ever held in Brazil” (no evidence) is an example of:',
    ['an unproven claim, which is an opinion', 'a fact', 'a date', 'a headline'], 5);
  addT('IN9-FO', "Para identificar uma opinião em um texto jornalístico em inglês, atente-se para: 1. Palavras que mostram julgamento, geralmente adjetivos: excellent, unforgettable, awesome, disappointing etc. 2. Verbos modais: should, must, might etc. 3. Generalizações ou alegações não comprovadas: “This was the greatest concert ever held in Brazil.” (no evidence; an opinion).", 'According to the chart, modal verbs such as should, must and might in a news text can signal:',
    ['an opinion', 'a fact', 'a number', 'a date'], 5);
  add('IN9-FO', '9_in_fotable', 'According to the table, “On January 30, 1972, British soldiers shot and killed 14 people” is a:',
    ['fact, with dates and numbers', 'opinion, with adjectives', 'opinion, with quantifiers', 'headline'], 7);
  add('IN9-FO', '9_in_fotable', 'According to the table, “They used too much force, which was a great mistake” is an:',
    ['opinion', 'fact', 'date', 'number'], 7);
  add('IN9-FO', '9_in_fotable', 'According to the table, numbers and figures usually point to:',
    ['facts', 'opinions', 'quantifiers', 'adjectives only'], 7);
  add('IN9-FO', '9_in_fotable', 'According to the table, quantifiers such as “too much” and “too many” usually point to:',
    ['opinions', 'facts', 'dates and times', 'numbers and figures'], 7);
  add('IN9-FO', null, 'Fact or opinion? “The concert started at 9:45 p.m. and lasted for two hours.”',
    ['Fact', 'Opinion', 'Both', 'Neither'], 5);
  add('IN9-FO', null, 'Fact or opinion? “The mayor made a terrible mistake by not preparing enough security.”',
    ['Opinion', 'Fact', 'Both', 'Neither'], 5);
  add('IN9-FO', null, 'Fact or opinion? “Over 2 million people were present at the event, according to official estimates.”',
    ['Fact', 'Opinion', 'Both', 'Neither'], 5);
  add('IN9-FO', null, 'Fact or opinion? “It is clear this was the best concert of the year.”',
    ['Opinion', 'Fact', 'Both', 'Neither'], 5);
  add('IN9-FO', null, 'Fact or opinion? “The singer performed 18 songs, including four new tracks.”',
    ['Fact', 'Opinion', 'Both', 'Neither'], 5);
  add('IN9-FO', null, 'Fact or opinion? “The event was poorly organized, and the lines were too long.”',
    ['Opinion', 'Fact', 'Both', 'Neither'], 5);
  add('IN9-FO', null, 'Fact or opinion? “John Lennon and Yoko Ono released their protest song ‘Sunday Bloody Sunday’ in 1972.”',
    ['Fact', 'Opinion', 'Both', 'Neither'], 7);

  /* ---------- IN9-NEW ---------- */
  addT('IN9-NEW', "Uma notícia, ou news article, é um gênero de texto que serve para informar sobre um fato importante e/ou atual, que aconteceu ou está acontecendo. Headline – título: objetivo e curto. Facts – os fatos; muitas vezes tentam responder às perguntas principais de uma notícia: what? where? when? who? how?", 'According to the summary, a news article is a text that informs about:',
    ['an important and/or current fact', 'only the author’s feelings', 'a fictional story', 'a recipe'], 9);
  addT('IN9-NEW', "Uma notícia, ou news article, é um gênero de texto que serve para informar sobre um fato importante e/ou atual, que aconteceu ou está acontecendo. Headline – título: objetivo e curto. Facts – os fatos; muitas vezes tentam responder às perguntas principais de uma notícia: what? where? when? who? how?", 'According to the summary, the headline is:',
    ['an objective and short title', 'a long paragraph', 'a quote from an expert', 'the author’s opinion'], 9);
  addT('IN9-NEW', "Quotes – trazem depoimentos de pessoas, sejam elas leigas ou especialistas em determinado assunto. Opinion – notícias podem trazer a opinião do(a) autor(a), e/ou das pessoas envolvidas, por meio de depoimentos.", 'According to the summary, quotes bring:',
    ['statements from people, laypeople or experts', 'only dates', 'only numbers', 'the headline'], 9);
  addT('IN9-NEW', "Quotes – trazem depoimentos de pessoas, sejam elas leigas ou especialistas em determinado assunto. Opinion – notícias podem trazer a opinião do(a) autor(a), e/ou das pessoas envolvidas, por meio de depoimentos.", 'According to the summary, opinion in a news article may come from:',
    ['the author and/or the people involved, through statements', 'the headline only', 'the date only', 'nobody'], 9);
  addT('IN9-NEW', "Uma notícia, ou news article, é um gênero de texto que serve para informar sobre um fato importante e/ou atual, que aconteceu ou está acontecendo. Headline – título: objetivo e curto. Facts – os fatos; muitas vezes tentam responder às perguntas principais de uma notícia: what? where? when? who? how?", 'According to the summary, facts in news often try to answer which questions?',
    ['What, where, when, who and how', 'Only why', 'Only how much', 'Which, whose and whom'], 9);
  addT('IN9-NEW', "Exciting science fair at Green Valley School. Last Friday, September 14th, Green Valley School had a fun and exciting science fair. Students from grades 6 to 9 worked in teams to make science projects. They showed their work in the school gym. [...] “I learned a lot from my friends’ projects”, said Julia, a student in Grade 7.", 'The news about the science fair is:',
    ['describing an event that happened in a school', 'narrating the life of a special student', 'teaching about volcanoes and plants', 'announcing a future contest'], 9);
  addT('IN9-NEW', "Exciting science fair at Green Valley School. Last Friday, September 14th, Green Valley School had a fun and exciting science fair. Students from grades 6 to 9 worked in teams to make science projects. They showed their work in the school gym. [...] “I learned a lot from my friends’ projects”, said Julia, a student in Grade 7.", 'When did the science fair at Green Valley School happen?',
    ['On September 14th', 'On June 10th', 'On May 3rd', 'On January 30th'], 9);
  addT('IN9-NEW', "Exciting science fair at Green Valley School. Last Friday, September 14th, Green Valley School had a fun and exciting science fair. Students from grades 6 to 9 worked in teams to make science projects. They showed their work in the school gym. [...] “I learned a lot from my friends’ projects”, said Julia, a student in Grade 7.", 'Who worked in teams to make science projects?',
    ['Students from grades 6 to 9', 'Only 7th-grade students', 'Only teachers', 'Only parents'], 9);
  addT('IN9-NEW', "Exciting science fair at Green Valley School. Last Friday, September 14th, Green Valley School had a fun and exciting science fair. Students from grades 6 to 9 worked in teams to make science projects. They showed their work in the school gym. [...] “I learned a lot from my friends’ projects”, said Julia, a student in Grade 7.", 'The sentence “I learned a lot from my friends’ projects”, said Julia, is an example of a:',
    ['quote', 'headline', 'date', 'number'], 9);
  addT('IN9-NEW', "Dubai schools drop homework to allow pupils to “have a life”. [...] At Ambassador International Academy in Dubai, children do “homework” within school hours and are given time twice a week to ensure tasks are completed. [...] The education trend in Dubai follows a global movement spearheaded by countries such as Finland [...].", 'In the Dubai article, “Dubai schools drop homework to allow pupils to ‘have a life’” is the:',
    ['headline', 'quote', 'author’s opinion', 'source'], 11);
  addT('IN9-NEW', "Dubai schools drop homework to allow pupils to “have a life”. [...] At Ambassador International Academy in Dubai, children do “homework” within school hours and are given time twice a week to ensure tasks are completed. [...] The education trend in Dubai follows a global movement spearheaded by countries such as Finland [...].", 'According to the article, at Ambassador International Academy, children do “homework”:',
    ['within school hours', 'only at home', 'only on weekends', 'with no teachers'], 11);
  addT('IN9-NEW', "Dubai schools drop homework to allow pupils to “have a life”. [...] At Ambassador International Academy in Dubai, children do “homework” within school hours and are given time twice a week to ensure tasks are completed. [...] The education trend in Dubai follows a global movement spearheaded by countries such as Finland [...].", 'The mention of Finland in the article shows that the change in homework policy is part of:',
    ['a global movement', 'a local rule only', 'a university program', 'a new school uniform'], 11);

  /* ---------- IN9-DAT ---------- */
  addT('IN9-DAT', "Headlines (títulos): São curtos, diretos e chamam a atenção de quem lê. Apresentam a ideia principal da notícia de forma objetiva, geralmente sem muitos detalhes. Dates and time (datas e horários): Indicam quando o fato aconteceu. [...] Numbers, figures and statistics: [...] Esses dados tornam a notícia mais precisa e confiável.", 'According to the summary, headlines are:',
    ['short, direct and attention-grabbing', 'long and full of details', 'always the author’s opinion', 'always a number'], 11);
  addT('IN9-DAT', "Headlines (títulos): São curtos, diretos e chamam a atenção de quem lê. Apresentam a ideia principal da notícia de forma objetiva, geralmente sem muitos detalhes. Dates and time (datas e horários): Indicam quando o fato aconteceu. [...] Numbers, figures and statistics: [...] Esses dados tornam a notícia mais precisa e confiável.", 'According to the summary, dates and time in news indicate:',
    ['when the fact happened', 'who is the author', 'where the fact happened', 'why the fact happened'], 11);
  addT('IN9-DAT', "Headlines (títulos): São curtos, diretos e chamam a atenção de quem lê. Apresentam a ideia principal da notícia de forma objetiva, geralmente sem muitos detalhes. Dates and time (datas e horários): Indicam quando o fato aconteceu. [...] Numbers, figures and statistics: [...] Esses dados tornam a notícia mais precisa e confiável.", 'According to the summary, numbers, figures and statistics make the news:',
    ['more precise and reliable', 'more confusing', 'shorter', 'more personal'], 11);
  addT('IN9-DAT', "São Paulo announces list of 500 students for the second exchange program of 2026. Published on 28/01/2026. [...] released [...] the preliminary list of 500 students selected for Prontos pro Mundo exchange program. These students are expected to travel to Australia, Canada, Ireland and New Zealand in the second half of this year.", 'How many students were on the preliminary list of the exchange program?',
    ['500', '1 000', '34 400', '28'], 11);
  addT('IN9-DAT', "Each year, the State Government's exchange program sends 1 000 students for a three-month high school experience in English-speaking countries. 34 400 students enrolled in the first year of high school in the state school system competed for the 500 spots available in the program.", 'How many first-year high school students competed for the 500 spots?',
    ['34 400', '1 000', '500', '100'], 11);
  addT('IN9-DAT', "Each year, the State Government's exchange program sends 1 000 students for a three-month high school experience in English-speaking countries. 34 400 students enrolled in the first year of high school in the state school system competed for the 500 spots available in the program.", 'How many students does the program send each year?',
    ['1 000', '500', '34 400', '3'], 11);
  addT('IN9-DAT', "Each year, the State Government's exchange program sends 1 000 students for a three-month high school experience in English-speaking countries. 34 400 students enrolled in the first year of high school in the state school system competed for the 500 spots available in the program.", 'How long is the high school experience in English-speaking countries?',
    ['Three months', 'One year', 'Six months', 'One week'], 11);
  addT('IN9-DAT', "Prontos pro Mundo exchange program is 100% free for the student and their family, with all costs and arrangements covered by SEDUC-SP. Items such as personal documents (passport, visa), accommodation, classes, transfers, and airfare will be covered. [...]", 'How much does the Prontos pro Mundo program cost for the student and family?',
    ['Nothing: it is 100% free', '50% of the costs', '1 000 dollars', 'Only the airfare'], 11);
  addT('IN9-DAT', "São Paulo announces list of 500 students for the second exchange program of 2026. Published on 28/01/2026. [...] released [...] the preliminary list of 500 students selected for Prontos pro Mundo exchange program. These students are expected to travel to Australia, Canada, Ireland and New Zealand in the second half of this year.", 'Which countries are mentioned as destinations?',
    ['Australia, Canada, Ireland and New Zealand', 'Brazil, Argentina and Chile', 'France, Spain and Italy', 'Japan and China'], 11);
  addT('IN9-DAT', "São Paulo announces list of 500 students for the second exchange program of 2026. Published on 28/01/2026. [...] released [...] the preliminary list of 500 students selected for Prontos pro Mundo exchange program. These students are expected to travel to Australia, Canada, Ireland and New Zealand in the second half of this year.", 'When was the preliminary list released?',
    ['On January 28, 2026', 'On June 10, 2026', 'On May 3, 2025', 'On October 23, 2024'], 11);
  addT('IN9-DAT', "São Paulo experiences another storm, and more than 70 thousand properties are left without power. [...] More than 70 000 properties had their power cut, according to a report released by Enel, the energy concessionaire. [...] The Climate Emergency Management Center (CGE), linked to the state government, reported that all alerts were lifted at 7:20 p.m.", 'What is the headline of the news about São Paulo?',
    ['São Paulo experiences another storm, and more than 70 thousand properties are left without power', 'Climate Emergency Management Center lifts alerts', 'Enel announces new prices', 'São Paulo wins a contest'], 11);
  addT('IN9-DAT', "São Paulo experiences another storm, and more than 70 thousand properties are left without power. [...] More than 70 000 properties had their power cut, according to a report released by Enel, the energy concessionaire. [...] The Climate Emergency Management Center (CGE), linked to the state government, reported that all alerts were lifted at 7:20 p.m.", 'How many properties had their power cut, according to the text?',
    ['More than 70 000', 'Exactly 7 000', 'More than 20 000', 'About 700'], 11);
  addT('IN9-DAT', "São Paulo experiences another storm, and more than 70 thousand properties are left without power. [...] More than 70 000 properties had their power cut, according to a report released by Enel, the energy concessionaire. [...] The Climate Emergency Management Center (CGE), linked to the state government, reported that all alerts were lifted at 7:20 p.m.", 'At what time were all the flood alerts lifted?',
    ['At 7:20 p.m.', 'At 7:20 a.m.', 'At 9:45 p.m.', 'At 12:30 p.m.'], 11);
  addT('IN9-DAT', "São Paulo experiences another storm, and more than 70 thousand properties are left without power. [...] More than 70 000 properties had their power cut, according to a report released by Enel, the energy concessionaire. [...] The Climate Emergency Management Center (CGE), linked to the state government, reported that all alerts were lifted at 7:20 p.m.", 'Which company released the report on the power cut?',
    ['Enel, the energy concessionaire', 'Agência Brasil', 'The Climate Emergency Management Center', 'SEDUC-SP'], 11);
})();

/* ===================== PROJETO DE VIDA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Projeto de Vida', A = 9;
  B.hab.push(
    { id: 'PV9-FOR', ano: A, disc: D, cod: '', tit: 'O que me fortalece ou me fragiliza no Ensino Médio',
      desc: 'Refletir sobre fatores que podem fortalecer ou fragilizar a entrada no Ensino Médio e sobre o apoio da família.', aulas: 'Aula 1' },
    { id: 'PV9-DEC', ano: A, disc: D, cod: '', tit: 'Minhas decisões afetam outras pessoas',
      desc: 'Analisar situações do Ensino Médio em que uma decisão causa efeitos para além de quem escolhe.', aulas: 'Aula 2' },
    { id: 'PV9-ID', ano: A, disc: D, cod: '', tit: 'Identidade e planejamento',
      desc: 'Compreender o Manifesto de Identidade (valores e atitudes) e o planejamento para transformar um sonho em ação.', aulas: 'Aulas 3 e 4' },
    { id: 'PV9-MUD', ano: A, disc: D, cod: '', tit: 'Mudanças no presente e jornada do herói',
      desc: 'Analisar o caso de Lucas (mudanças pessoal, familiar, escolar e comunitária) e a jornada do herói na entrada no Ensino Médio.', aulas: 'Aulas 5 e 6' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length - 1].texto = texto; };

  /* ---------- PV9-FOR ---------- */
  add('PV9-FOR', '9_pv_clip', 'Para montar o mapa do que fortalece ou fragiliza, o livro sugere pensar em aspectos como:',
    ['rotina e organização do dia a dia', 'o clima da cidade', 'a marca do celular', 'a posição dos planetas'], 1);
  add('PV9-FOR', '9_pv_clip', 'Qual destes é um dos aspectos listados na figura?',
    ['apoio de pessoas em quem você confia', 'o número de computadores da escola', 'o preço dos materiais', 'o tamanho da sala de aula'], 1);
  add('PV9-FOR', '9_pv_clip', 'Na figura, o aspecto “uso do tempo” se refere ao tempo dedicado:',
    ['ao estudo, ao descanso e às redes', 'apenas ao trabalho', 'apenas ao lazer', 'somente ao transporte'], 1);
  add('PV9-FOR', null, 'O mapa da atividade tem dois lados: de um, o que pode fortalecer a entrada no Ensino Médio; do outro:',
    ['o que pode fragilizar essa vivência', 'o que já foi esquecido', 'o que os colegas pensam', 'o que o professor decide'], 1);
  add('PV9-FOR', null, 'Na atividade “O que preciso observar em mim?”, o estudante retoma o mapa e escolhe:',
    ['um fator que merece mais atenção neste momento', 'todos os fatores ao mesmo tempo', 'um fator que não lhe diz respeito', 'o fator que o professor indicar'], 1);
  add('PV9-FOR', null, 'Segundo o livro, conversar com alguém da família pode ajudar o estudante a:',
    ['ouvir outra perspectiva, reconhecer apoios e pensar em formas de cuidar do aspecto', 'decidir tudo sem ouvir ninguém', 'evitar o Ensino Médio', 'esquecer o mapa'], 1);
  add('PV9-FOR', null, 'Segundo o livro, perceber o que merece atenção em você é uma forma de:',
    ['se preparar para viver o Ensino Médio com mais consciência e equilíbrio', 'adiar as decisões para sempre', 'evitar pedir ajuda', 'competir com os colegas'], 1);

  /* ---------- PV9-DEC ---------- */
  add('PV9-DEC', '9_pv_sit1', 'Na Situação 1, o estudante escolhe um Itinerário Formativo igual ao dos amigos, mas desalinhado de seus interesses. Essa decisão provoca:',
    ['estranhamento e questionamento entre responsáveis e professores', 'aprovação de todos', 'mudança de escola dos amigos', 'fim das aulas'], 2);
  add('PV9-DEC', '9_pv_sit2', 'Na Situação 2, o estudante passa a agir como o grupo que zomba de colegas para:',
    ['se sentir aceito', 'ajudar os colegas', 'ser expulso da escola', 'mudar de turma'], 2);
  add('PV9-DEC', '9_pv_sit3', 'Na Situação 3, para viabilizar a escolha da escola de período integral, a família:',
    ['reorganiza a rotina da casa e assume novos gastos', 'muda de cidade', 'deixa de se preocupar', 'vende a casa'], 2);
  add('PV9-DEC', '9_pv_sit4', 'Na Situação 4, a estudante monitora começa a faltar à monitoria para:',
    ['estar com os amigos, de quem se sentia isolada', 'ajudar os colegas em casa', 'estudar sozinha', 'trabalhar'], 2);
  add('PV9-DEC', '9_pv_sit4', 'Na Situação 4, quem se sente desamparado por causa da decisão da monitora?',
    ['os alunos que ela deveria ajudar', 'os professores', 'os pais dela', 'a direção da escola'], 2);
  add('PV9-DEC', '9_pv_sit5', 'Na Situação 5, ao receber um comentário negativo sobre um colega em um grupo de mensagens, a estudante decide:',
    ['não compartilhar e interromper a circulação da mensagem', 'repassar a mensagem a todos', 'responder com ofensas', 'apagar o grupo'], 2);
  add('PV9-DEC', null, 'Segundo o livro, no Ensino Médio muitas escolhas passam a ter mais peso porque:',
    ['podem trazer consequências para diferentes aspectos da vida', 'deixam de ter importância', 'são sempre tomadas por outras pessoas', 'não afetam ninguém'], 2);
  add('PV9-DEC', null, 'A proposta da atividade “O mapa das decisões” é observar como uma decisão pode causar efeitos:',
    ['para além de quem escolhe', 'apenas em quem escolhe', 'apenas na escola', 'somente no futuro distante'], 2);

  /* ---------- PV9-ID ---------- */
  add('PV9-ID', null, 'O Manifesto de Identidade é um texto em que o estudante registra:',
    ['um posicionamento pessoal sobre o estudante que deseja ser no Ensino Médio', 'as notas do bimestre', 'o horário das aulas', 'a lista de materiais'], 3);
  add('PV9-ID', null, 'No manifesto, os valores que você quer levar com você são:',
    ['o que considera importante para orientar seu jeito de agir', 'as notas que quer tirar', 'os nomes dos colegas', 'as regras da escola'], 3);
  add('PV9-ID', null, 'No manifesto, as atitudes que você quer sustentar são:',
    ['ações do dia a dia que mostram esses valores na prática', 'ideias que nunca serão praticadas', 'opiniões dos outros', 'planos para a vida adulta apenas'], 3);
  add('PV9-ID', null, 'Segundo o livro, a identidade:',
    ['não se constrói sozinha: as pessoas com quem convivemos também influenciam', 'é construída sem influência de ninguém', 'já nasce pronta', 'depende apenas das notas'], 3);
  add('PV9-ID', null, 'Segundo o livro, para que um sonho ganhe forma é preciso pensar em:',
    ['como colocá-lo em prática', 'esperar que aconteça sozinho', 'abandoná-lo ao primeiro obstáculo', 'não contar a ninguém'], 4);
  add('PV9-ID', null, 'De acordo com o livro, o planejamento ajuda a:',
    ['transformar objetivos em realidade', 'evitar qualquer objetivo', 'adiar sonhos', 'substituir o apoio de outras pessoas'], 4);
  add('PV9-ID', null, 'Segundo o livro, um projeto não depende apenas de vontade, mas também de:',
    ['planejamento, coragem para começar e apoio para continuar', 'sorte e dinheiro', 'ordens dos outros', 'tempo livre apenas'], 4);

  /* ---------- PV9-MUD ---------- */
  addT('PV9-MUD', "Lucas tem 14 anos e cursa o 9º ano. Ele vivia em um “modo automático”: passava as madrugadas jogando online, chegava à escola exausto e mal falava com os pais [...]. Suas notas estavam caindo [...]. Ele acreditava que só teria impacto no mundo quando fosse “adulto e bem-sucedido”.", 'Antes da mudança, Lucas passava as madrugadas:',
    ['jogando online', 'estudando', 'ajudando o avô', 'dormindo cedo'], 5);
  addT('PV9-MUD', "Lucas tem 14 anos e cursa o 9º ano. Ele vivia em um “modo automático”: passava as madrugadas jogando online, chegava à escola exausto e mal falava com os pais [...]. Suas notas estavam caindo [...]. Ele acreditava que só teria impacto no mundo quando fosse “adulto e bem-sucedido”.", 'Lucas acreditava que só teria impacto no mundo quando fosse:',
    ['“adulto e bem-sucedido”', 'um estudante nota dez', 'um jogador profissional', 'dono de uma loja'], 5);
  addT('PV9-MUD', "Tudo mudou quando seu avô o convidou para organizar uma antiga caixa de ferramentas na garagem. Ali, Lucas descobriu fotos do bairro de 30 anos atrás e percebeu que a praça onde hoje havia apenas entulho, antes era um pomar comunitário.", 'O avô de Lucas o convidou para:',
    ['organizar uma antiga caixa de ferramentas na garagem', 'jogar online', 'viajar', 'mudar de bairro'], 5);
  addT('PV9-MUD', "Tudo mudou quando seu avô o convidou para organizar uma antiga caixa de ferramentas na garagem. Ali, Lucas descobriu fotos do bairro de 30 anos atrás e percebeu que a praça onde hoje havia apenas entulho, antes era um pomar comunitário.", 'Nas fotos de 30 anos atrás, a praça que hoje tem entulho era:',
    ['um pomar comunitário', 'um campo de futebol', 'uma escola', 'um mercado'], 5);
  addT('PV9-MUD', "Lucas decidiu agir. Começou ajustando seu próprio horário (largando o celular às 22h para dormir melhor). Em casa, propôs que a família fizesse uma refeição por dia sem eletrônicos, o que melhorou o humor de todos. Na escola, ele mobilizou o grêmio para criar um sistema de monitoria entre alunos, ajudando colegas com dificuldade.", 'Na mudança pessoal, Lucas passou a largar o celular às:',
    ['22h, para dormir melhor', '18h', '2h da madrugada', '6h'], 5);
  addT('PV9-MUD', "Lucas decidiu agir. Começou ajustando seu próprio horário (largando o celular às 22h para dormir melhor). Em casa, propôs que a família fizesse uma refeição por dia sem eletrônicos, o que melhorou o humor de todos. Na escola, ele mobilizou o grêmio para criar um sistema de monitoria entre alunos, ajudando colegas com dificuldade.", 'Em casa, Lucas propôs que a família fizesse:',
    ['uma refeição por dia sem eletrônicos', 'todas as refeições na escola', 'uma viagem por mês', 'um jogo online em família'], 5);
  addT('PV9-MUD', "Lucas decidiu agir. Começou ajustando seu próprio horário (largando o celular às 22h para dormir melhor). Em casa, propôs que a família fizesse uma refeição por dia sem eletrônicos, o que melhorou o humor de todos. Na escola, ele mobilizou o grêmio para criar um sistema de monitoria entre alunos, ajudando colegas com dificuldade.", 'Na escola, Lucas mobilizou o grêmio para criar:',
    ['um sistema de monitoria entre alunos', 'um torneio de jogos online', 'uma lista de faltas', 'um novo uniforme'], 5);
  add('PV9-MUD', '9_pv_jornada', 'No quadro, o 1º passo da jornada do herói para o Ensino Médio é:',
    ['sair do Ensino Fundamental e entrar em uma nova etapa', 'se transformar em um cidadão melhor', 'escolher caminhos e tomar decisões', 'enfrentar mudanças'], 6);
  add('PV9-MUD', '9_pv_jornada', 'No quadro, o 4º passo da jornada do herói é:',
    ['transformar-se com a experiência e retornar mais forte, consciente e preparado', 'sair do lugar conhecido', 'enfrentar desafios', 'tomar decisões sobre o futuro'], 6);
  add('PV9-MUD', '9_pv_jornada', 'No quadro, enfrentar desafios que exigem coragem, atenção e aprendizado corresponde ao:',
    ['2º passo', '1º passo', '3º passo', '4º passo'], 6);
})();
