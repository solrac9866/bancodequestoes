/* 1ª série do Ensino Médio – Física, Biologia e Química – Volume 4 (4º bimestre)
   Em cada questão a PRIMEIRA alternativa é a correta; o site embaralha na hora de gerar a prova.
   ano: 10 = 1ª série do Ensino Médio. */

/* ===================== FÍSICA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Física', A = 10;
  B.hab.push(
    { id: 'FI1-KEP', ano: A, disc: D, cod: '', tit: 'Leis de Kepler e órbitas elípticas',
      desc: 'Reconhecer os elementos da elipse e a excentricidade, enunciar as três leis de Kepler e aplicar T² = k·R³ ao movimento de planetas e satélites.', aulas: 'Aulas 1 e 2' },
    { id: 'FI1-GRA', ano: A, disc: D, cod: '', tit: 'Lei da Gravitação Universal',
      desc: 'Aplicar F = G·m1·m2/d² para calcular forças de atração entre astros, relacionar a força à massa e à distância e calcular a velocidade orbital.', aulas: 'Aulas 3 e 4' },
    { id: 'FI1-GCA', ano: A, disc: D, cod: '', tit: 'Aceleração da gravidade e campo gravitacional',
      desc: 'Calcular a aceleração da gravidade acima, na superfície e dentro de um astro homogêneo, comparar astros diferentes e calcular o peso.', aulas: 'Aulas 5 e 6' },
    { id: 'FI1-EST', ano: A, disc: D, cod: '', tit: 'Nascimento e energia das estrelas, diagrama HR',
      desc: 'Relacionar a formação das estrelas ao equilíbrio hidrostático e à fusão nuclear, usar E = mc², interpretar o diagrama de Hertzsprung-Russell, a classificação espectral e a lei de Wien.', aulas: 'Aulas 7 e 8' },
    { id: 'FI1-EVE', ano: A, disc: D, cod: '', tit: 'Evolução estelar, supernovas e buracos negros',
      desc: 'Descrever a evolução de estrelas de baixa massa e de estrelas massivas, seus remanescentes e calcular o raio de Schwarzschild.', aulas: 'Aulas 9, 10 e 11' },
    { id: 'FI1-COS', ano: A, disc: D, cod: '', tit: 'Matéria escura, Lei de Hubble e Big Bang',
      desc: 'Interpretar a curva de rotação das galáxias e a matéria escura, aplicar a Lei de Hubble v = H0·d e reconhecer as evidências e a evolução do Universo segundo o Big Bang.', aulas: 'Aulas 11 e 12' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length - 1].texto = texto; };

  /* ---------- FI1-KEP ---------- */
  add('FI1-KEP', 'em1_fis_elipse', 'Na figura, o segmento de comprimento a, que vai do centro da elipse até a sua extremidade mais afastada, é chamado de:',
    ['semieixo maior', 'semieixo menor', 'distância focal', 'excentricidade'], 1);
  add('FI1-KEP', 'em1_fis_elipse', 'Na figura, a distância entre os focos F1 e F2, de comprimento 2c, é chamada de:',
    ['distância focal', 'semieixo maior', 'semieixo menor', 'excentricidade'], 1);
  add('FI1-KEP', 'em1_fis_elipse', 'A excentricidade de uma elipse é obtida dividindo a distância do centro ao foco pelo semieixo maior. Na figura, ela é calculada pela razão:',
    ['c / a', 'a / c', 'b / a', '2c / b'], 1);
  add('FI1-KEP', null, 'Uma órbita elíptica tem semieixo maior a = 10 unidades e a distância do centro a um dos focos é c = 6 unidades. A excentricidade dessa elipse é:',
    ['0,6', '0,4', '1,6', '0'], 1);
  add('FI1-KEP', null, 'Uma órbita elíptica tem semieixo maior a = 20 unidades e a distância do centro até um foco é c = 4 unidades. A excentricidade dessa elipse é:',
    ['0,2', '0,5', '5,0', '0,8'], 2);
  addT('FI1-KEP', "1ª Lei (Lei das Órbitas): os planetas descrevem órbitas elípticas, com o Sol situado em um dos focos.", 'Segundo a 1ª lei de Kepler, os planetas descrevem órbitas:',
    ['elípticas, com o Sol em um dos focos', 'circulares, com o Sol no centro', 'retilíneas, passando pelo Sol', 'elípticas, com o Sol fora dos focos'], 1);
  addT('FI1-KEP', "2ª Lei (Lei das Áreas): o segmento de reta que liga o planeta ao Sol varre áreas iguais em intervalos de tempo iguais.", 'De acordo com a lei das áreas, o segmento de reta que liga o planeta ao Sol varre:',
    ['áreas iguais em intervalos de tempo iguais', 'áreas maiores quando o planeta está mais longe', 'a mesma área em qualquer intervalo de tempo', 'áreas iguais somente em órbitas circulares'], 1);
  addT('FI1-KEP', "3ª Lei (Lei dos Períodos): em sua forma matemática, T²/R³ = k, em que T é o período orbital e R é a distância média do planeta ao Sol. Portanto, planetas mais distantes do Sol levam mais tempo para completar uma volta. Se o período for medido em anos, e a distância, em unidades astronômicas, para o sistema solar, K = 1.", 'Segundo o quadro, quanto mais distante do Sol está um planeta, o seu período orbital é:',
    ['maior', 'menor', 'igual', 'nulo'], 2);
  add('FI1-KEP', null, 'Dois planetas A e B orbitam a mesma estrela. O planeta A tem raio orbital médio de 1,0 UA e período de 1,0 ano; o planeta B tem raio orbital médio de 4,0 UA. Pela terceira lei de Kepler, o período de B é:',
    ['8 anos', '4 anos', '16 anos', '2 anos'], 2);
  add('FI1-KEP', null, 'Um planeta está a 60 UA do Sol. Usando T² = R³ (T em anos e R em UA), seu período de revolução é de cerca de:',
    ['465 anos', '60 anos', '3 600 anos', '7,7 anos'], 2);
  add('FI1-KEP', null, 'A Lua leva cerca de 28 dias para dar uma volta em torno da Terra. Um satélite artificial com órbita de raio igual à metade do raio orbital da Lua tem período de cerca de:',
    ['9,9 dias', '14 dias', '56 dias', '7 dias'], 2);
  add('FI1-KEP', null, 'Phobos orbita Marte em um círculo de raio 10 000 km, com período de 3 · 10⁴ s. Deimos orbita Marte em um círculo de raio 24 000 km. O período de Deimos é de cerca de:',
    ['1,1 · 10⁵ s', '7,2 · 10⁴ s', '1,7 · 10⁵ s', '3 · 10⁴ s'], 2);

  /* ---------- FI1-GRA ---------- */
  add('FI1-GRA', 'em1_fis_grav2', 'Na figura, as setas F21 e F12 representam a atração gravitacional entre a Terra e a Lua. Essas forças têm:',
    ['mesma intensidade e sentidos opostos', 'intensidades diferentes, maior sobre a Terra', 'mesma direção e mesmo sentido', 'intensidade nula, pois o espaço é vazio'], 3);
  add('FI1-GRA', 'em1_fis_grav2', 'Na Lei da Gravitação Universal, a distância d indicada na figura é medida entre:',
    ['os centros dos dois corpos', 'as superfícies dos dois corpos', 'o centro da Terra e a superfície da Lua', 'os focos das órbitas'], 3);
  add('FI1-GRA', 'em1_fis_grav2', 'Pela lei do inverso do quadrado da distância (F = G·m1·m2/d²), se a distância d entre a Terra e a Lua fosse dobrada, a força de atração ficaria:',
    ['4 vezes menor', '2 vezes menor', '2 vezes maior', '4 vezes maior'], 3);
  add('FI1-GRA', 'em1_fis_grav3', 'Com M(Terra) = 5,97 · 10²⁴ kg, m(Lua) = 7,35 · 10²² kg, d = 3,84 · 10⁸ m e G = 6,67 · 10⁻¹¹ N·m²/kg², a força de atração entre a Terra e a Lua é de cerca de:',
    ['2,0 · 10²⁰ N', '7,6 · 10²⁸ N', '2,0 · 10²² N', '5,2 · 10⁻³ N'], 3);
  add('FI1-GRA', 'em1_fis_grav3', 'A massa do Sol é 2,0 · 10³⁰ kg, a massa da Terra é 6,0 · 10²⁴ kg e a distância média entre eles é 1,5 · 10¹¹ m. Com G = 6,67 · 10⁻¹¹ N·m²/kg², a força gravitacional do Sol sobre a Terra é de cerca de:',
    ['3,6 · 10²² N', '2,0 · 10²⁰ N', '5,3 · 10³³ N', '8,0 · 10¹⁰ N'], 3);
  add('FI1-GRA', 'em1_fis_grav3', 'Marte está a cerca de 5,46 · 10¹⁰ m da Terra. Com M(Terra) = 5,972 · 10²⁴ kg, M(Marte) = 6,39 · 10²³ kg e G = 6,67 · 10⁻¹¹ N·m²/kg², a força de atração entre os dois planetas é de cerca de:',
    ['8,5 · 10¹⁶ N', '4,7 · 10²⁷ N', '8,5 · 10²⁶ N', '1,6 · 10⁸ N'], 4);
  add('FI1-GRA', null, 'Saturno tem massa cerca de 100 vezes maior que a da Terra e descreve órbita em torno do Sol a uma distância média 10 vezes maior que a da Terra. A razão entre a força com que o Sol atrai Saturno e a força com que atrai a Terra é:',
    ['1', '10', '100', '0,1'], 4);
  add('FI1-GRA', null, 'Um satélite de 500 kg está a 400 km de altitude. Com M(Terra) = 5,97 · 10²⁴ kg, R(Terra) = 6,37 · 10⁶ m e G = 6,67 · 10⁻¹¹ N·m²/kg², a força gravitacional da Terra sobre ele é de cerca de:',
    ['4,3 · 10³ N', '4,9 · 10³ N', '0 N', '8,7 · 10³ N'], 4);
  add('FI1-GRA', null, 'A Estação Espacial Internacional orbita a 400 km de altitude em órbita circular. Com v = √(G·M/r), M = 5,972 · 10²⁴ kg, R(Terra) = 6,371 · 10⁶ m e G = 6,67 · 10⁻¹¹ N·m²/kg², sua velocidade orbital é de cerca de:',
    ['7,7 km/s', '7,7 m/s', '29,8 km/s', '0,4 km/s'], 4);
  add('FI1-GRA', null, 'Se a força gravitacional da Terra sobre um corpo na superfície é F0, a altitude em que ela vale F0/2 é de cerca de (R da Terra = 6,37 · 10⁶ m):',
    ['2,6 · 10⁶ m', '6,4 · 10⁶ m', '3,2 · 10⁶ m', '1,3 · 10⁶ m'], 4);
  add('FI1-GRA', null, 'A Terra descreve uma órbita aproximadamente circular de raio 1,5 · 10¹¹ m em torno do Sol (M = 2,0 · 10³⁰ kg). Com v = √(G·M/r) e G = 6,67 · 10⁻¹¹ N·m²/kg², sua velocidade orbital é de cerca de:',
    ['30 km/s', '3 km/s', '300 km/s', '7,7 km/s'], 4);
  add('FI1-GRA', null, 'Em uma órbita circular, a gravidade atua como força centrípeta. Quanto maior a distância ao astro central, a velocidade orbital:',
    ['é menor', 'é maior', 'é a mesma', 'é nula'], 4);

  /* ---------- FI1-GCA ---------- */
  add('FI1-GCA', 'em1_fis_gcampo', 'Na figura, o ponto A está a uma altitude h acima da superfície de um astro de massa M e raio R. A aceleração da gravidade em A é:',
    ['G·M / (R + h)²', 'G·M / R²', 'G·M·r / R³', 'G·M / h²'], 5);
  add('FI1-GCA', 'em1_fis_gcampo', 'Na figura, no ponto B, sobre a superfície do astro, a aceleração da gravidade é dada por:',
    ['G·M / R²', 'G·M / (R + h)²', 'G·M·r / R³', 'G·M·R'], 5);
  add('FI1-GCA', 'em1_fis_gcampo', 'Segundo a figura, dentro do astro (ponto C) vale g = G·M·r / R³. Isso significa que, no interior de um astro homogêneo, a gravidade:',
    ['cresce com a distância r ao centro e é zero no centro', 'é máxima no centro do astro', 'é constante em todo o interior', 'é infinita no centro'], 5);
  add('FI1-GCA', 'em1_fis_gcampo2', 'Com G = 6,67 · 10⁻¹¹ N·m²/kg², M(Terra) = 5,972 · 10²⁴ kg e R(Terra) = 6 371 km, a aceleração da gravidade na superfície da Terra é de cerca de:',
    ['9,8 m/s²', '98 m/s²', '0,98 m/s²', '6,3 m/s²'], 5);
  add('FI1-GCA', null, 'A aceleração da gravidade na superfície da Terra é cerca de 9,8 m/s² e a do Sol é 274 m/s². O peso de uma pessoa de 75 kg na Terra e no Sol é, respectivamente:',
    ['735 N e 20 550 N', '75 N e 75 N', '735 N e 735 N', '7,5 N e 205 N'], 5);
  add('FI1-GCA', 'em1_fis_gcampo2', 'Um planeta esférico tem raio R(P) = 2·R(T) e massa M(P) = 8·M(T), sendo R(T) e M(T) o raio e a massa da Terra. Com g(T) = 10 m/s² e g = G·M/R², a gravidade na superfície desse planeta é de:',
    ['20 m/s²', '5 m/s²', '40 m/s²', '80 m/s²'], 6);
  add('FI1-GCA', 'em1_fis_gcampo2', 'Um planeta tem raio 1,5 vez maior que o da Terra e massa específica (densidade) igual à da Terra. Em termos da gravidade g na superfície da Terra, a gravidade na superfície desse planeta é:',
    ['1,5 g', 'g', '2,25 g', '0,67 g'], 6);
  add('FI1-GCA', null, 'A ISS orbita a 4,0 · 10⁵ m de altitude. Com R(Terra) = 6,4 · 10⁶ m, M(Terra) = 5,97 · 10²⁴ kg e G = 6,67 · 10⁻¹¹ N·m²/kg², a aceleração da gravidade nessa altitude é de cerca de:',
    ['8,6 m/s²', '9,8 m/s²', '0 m/s²', '0,9 m/s²'], 6);
  add('FI1-GCA', null, 'Os astronautas flutuam dentro da ISS porque:',
    ['a estação e tudo dentro dela estão em queda livre ao redor da Terra', 'no espaço não existe gravidade', 'a gravidade na altitude da ISS é nula', 'a gravidade da Lua anula a da Terra'], 6);
  add('FI1-GCA', null, 'Um astro esférico tem raio R = 2 · 10⁶ m e massa M = 3 · 10²⁰ kg. Com G = 6,7 · 10⁻¹¹ N·m²/kg², a aceleração da gravidade na superfície do astro é de cerca de:',
    ['5,0 · 10⁻³ m/s²', '2,2 · 10⁻³ m/s²', '2,0 · 10⁻³ m/s²', '5,0 m/s²'], 6);
  add('FI1-GCA', null, 'Considere a Terra uma esfera de densidade uniforme, com raio de 6 400 km e gravidade na superfície de 10 m/s². Em um ponto a 3 200 km do centro, onde g = g(sup)·r/R, a gravidade vale:',
    ['5 m/s²', '10 m/s²', '20 m/s²', '0 m/s²'], 6);
  add('FI1-GCA', null, 'No modelo de uma Terra esférica de densidade uniforme, a aceleração da gravidade no centro do planeta é:',
    ['nula', '10 m/s²', '5 m/s²', 'infinita'], 6);

  /* ---------- FI1-EST ---------- */
  add('FI1-EST', 'em1_fis_hidro', 'Na figura, a energia liberada pelas fusões nucleares exerce pressão “para fora” e a gravidade da estrela exerce força “para dentro”. Quando essas ações se compensam, a estrela está em equilíbrio:',
    ['hidrostático', 'elétrico', 'químico', 'orbital'], 7);
  add('FI1-EST', 'em1_fis_hidro', 'Segundo o resumo da aula, as estrelas se formam a partir do colapso gravitacional de:',
    ['uma nuvem de gás e poeira', 'um buraco negro', 'uma galáxia inteira', 'um planeta gigante'], 7);
  add('FI1-EST', 'em1_fis_pp', 'No esquema, a fusão no núcleo da estrela transforma, ao final, núcleos de hidrogênio (prótons) em núcleos de:',
    ['hélio (⁴He)', 'ferro', 'carbono', 'oxigênio'], 7);
  add('FI1-EST', 'em1_fis_pp', 'Em estrelas de baixa massa, o principal processo de produção de energia por fusão é a cadeia:',
    ['próton–próton', 'CNO', 'de decaimento radioativo', 'de fissão do ferro'], 7);
  add('FI1-EST', 'em1_fis_hidro', 'Uma estrela converte 4,0 · 10⁹ kg de massa em energia a cada segundo. Com E = mc² e c = 3,0 · 10⁸ m/s, sua luminosidade é de:',
    ['3,6 · 10²⁶ W', '1,2 · 10¹⁸ W', '3,6 · 10¹⁷ W', '1,2 · 10⁹ W'], 7);
  add('FI1-EST', 'em1_fis_pp', 'Uma variação de massa de 1 mg (10⁻⁶ kg) é totalmente convertida em energia. Com c = 3 · 10⁸ m/s e 1 kWh = 3,6 · 10⁶ J, a energia equivalente é de:',
    ['25 000 kWh', '9 · 10¹⁰ kWh', '2,5 kWh', '90 000 kWh'], 7);
  add('FI1-EST', 'em1_fis_hr', 'No diagrama de Hertzsprung-Russell, os eixos horizontal e vertical representam, respectivamente:',
    ['temperatura superficial e luminosidade', 'luminosidade e massa', 'massa e raio', 'distância e velocidade'], 8);
  add('FI1-EST', 'em1_fis_hr', 'No diagrama HR da figura, o Sol está na região chamada:',
    ['sequência principal', 'anãs brancas', 'supergigantes', 'gigantes'], 8);
  add('FI1-EST', 'em1_fis_hr', 'No diagrama HR da figura, as anãs brancas aparecem na região de:',
    ['baixa luminosidade e alta temperatura', 'alta luminosidade e baixa temperatura', 'alta luminosidade e alta temperatura', 'baixa luminosidade e baixa temperatura'], 8);
  add('FI1-EST', 'em1_fis_harvard', 'Na classificação espectral de Harvard, a ordem das classes, da estrela mais quente (azul) para a mais fria (vermelha), é:',
    ['O, B, A, F, G, K, M', 'M, K, G, F, A, B, O', 'A, B, C, D, E, F, G', 'O, A, B, F, G, M, K'], 8);
  addT('FI1-EST', "Classe, temperatura (K) e cor: O – acima de 33 000 – azul; B – 10 000 a 33 000 – azul-branco; A – 7 500 a 10 000 – branco; F – 6 000 a 7 500 – amarelo-branco; G – 5 200 a 6 000 – amarelo; K – 3 700 a 5 200 – laranja; M – 2 000 a 3 700 – vermelho.", "De acordo com o quadro, uma estrela com temperatura superficial de 4 500 K pertence à classe:",
    ["K", "G", "M", "F"], 8);
  addT('FI1-EST', "Classe, temperatura (K) e cor: O – acima de 33 000 – azul; B – 10 000 a 33 000 – azul-branco; A – 7 500 a 10 000 – branco; F – 6 000 a 7 500 – amarelo-branco; G – 5 200 a 6 000 – amarelo; K – 3 700 a 5 200 – laranja; M – 2 000 a 3 700 – vermelho.", "Pela lei de Wien, a temperatura da superfície do Sol é de cerca de 5 500 K. De acordo com o quadro, o Sol pertence à classe:",
    ["G", "F", "K", "M"], 8);
  add('FI1-EST', 'em1_fis_harvard', 'Na figura, as estrelas estão ordenadas das classes M a O. A estrela maior e mais brilhante, de classe O, é a mais:',
    ['quente, de cor azul', 'fria, de cor vermelha', 'fria, de cor azul', 'quente, de cor vermelha'], 8);
  add('FI1-EST', null, 'O pico de emissão do Sol ocorre em cerca de 530 nm. Pela lei de Wien (λmáx · T = 2,9 · 10⁻³ m·K), a temperatura da superfície solar é de cerca de:',
    ['5 500 K', '5,5 K', '55 000 K', '550 K'], 8);

  /* ---------- FI1-EVE ---------- */
  addT('FI1-EVE', "Estrelas de baixa ou média massa, como o Sol, passam a maior parte de suas vidas na sequência principal. Quando o hidrogênio central começa a se esgotar, a estrela se transforma em uma gigante vermelha. Com o esgotamento do hélio, a estrela perde suas camadas externas, que formam uma nebulosa planetária. O que resta no centro é uma anã branca.", 'Segundo o texto, as camadas externas que a estrela perde no final de sua evolução formam:',
    ['uma nebulosa planetária', 'uma supernova', 'uma estrela de nêutrons', 'um buraco negro'], 9);
  addT('FI1-EVE', "A anã branca é um objeto extremamente denso que já não efetua fusão nuclear e brilha apenas pela energia residual. Seu colapso gravitacional é impedido pela pressão de degenerescência dos elétrons, um efeito quântico ligado ao Princípio de Exclusão de Pauli.", 'De acordo com o texto, o colapso gravitacional de uma anã branca é impedido pela:',
    ['pressão de degenerescência dos elétrons', 'fusão do hidrogênio em hélio', 'fusão do ferro no núcleo', 'radiação da nebulosa planetária'], 9);
  add('FI1-EVE', null, 'O Sol permanece cerca de 10 bilhões de anos na sequência principal. Uma estrela de 0,5 massa solar permanece nessa fase cerca de 4 vezes mais tempo, ou seja, aproximadamente:',
    ['40 bilhões de anos', '2,5 bilhões de anos', '5 bilhões de anos', '4 bilhões de anos'], 9);
  add('FI1-EVE', null, 'O tempo de uma estrela na sequência principal pode ser estimado por t = 10¹⁰ · (M / M☉)⁻² anos, em que M☉ é a massa do Sol. Para uma estrela de 10 massas solares, esse tempo é de cerca de:',
    ['10⁸ anos (100 milhões)', '10¹¹ anos', '10⁹ anos', '10¹² anos'], 9);
  add('FI1-EVE', null, 'Estrelas com massa maior que a do Sol vivem menos tempo do que ele porque:',
    ['consomem o combustível nuclear muito mais rapidamente', 'têm menos matéria para fundir', 'não realizam fusão nuclear', 'estão sempre longe das galáxias'], 10);
  addT('FI1-EVE', "Depois da sequência principal, as estrelas massivas passam a fundir elementos cada vez mais pesados em seu interior, formando uma estrutura em camadas. Ao final desse processo, surge um núcleo rico em ferro, elemento que marca um limite importante, pois sua fusão já não sustenta a estrela da mesma forma.", 'O elemento que marca o limite da fusão no núcleo das estrelas massivas é o:',
    ['ferro', 'hidrogênio', 'hélio', 'carbono'], 10);
  add('FI1-EVE', null, 'Quando o núcleo de uma estrela massiva fica rico em ferro, a gravidade passa a dominar e ocorre:',
    ['o colapso do núcleo, que pode desencadear uma supernova', 'a fusão do hidrogênio em hélio', 'a formação de uma anã branca', 'a expansão para gigante vermelha'], 10);
  add('FI1-EVE', 'em1_fis_buraconegro', 'A figura é uma representação artística de um buraco negro, um dos possíveis remanescentes de uma estrela massiva. O outro remanescente possível, segundo o texto, é:',
    ['uma estrela de nêutrons', 'uma anã branca', 'uma gigante vermelha', 'uma nebulosa planetária'], 10);
  add('FI1-EVE', 'em1_fis_m87', 'A imagem mostra o buraco negro da galáxia M87. Segundo o texto da aula, buracos negros supermassivos estão presentes:',
    ['no centro de muitas galáxias', 'somente na Via Láctea', 'somente fora das galáxias', 'no centro de todos os planetas'], 11);
  add('FI1-EVE', 'em1_fis_buraconegro', 'O raio de Schwarzschild é r = 2GM/c². Para a Terra (M = 5,97 · 10²⁴ kg, G = 6,67 · 10⁻¹¹ N·m²/kg² e c = 3 · 10⁸ m/s), esse raio é de cerca de:',
    ['9 mm', '9 km', '9 m', '6 400 km'], 11);
  add('FI1-EVE', 'em1_fis_m87', 'Com G = 6,67 · 10⁻¹¹ N·m²/kg², c = 3 · 10⁸ m/s e M(Sol) = 2,0 · 10³⁰ kg, o raio de Schwarzschild do Sol é de cerca de:',
    ['3 km', '3 mm', '700 000 km', '30 m'], 11);
  add('FI1-EVE', 'em1_fis_buraconegro', 'Segundo o resumo da aula, o raio de Schwarzschild, que define o tamanho limite para um corpo formar um buraco negro, depende apenas:',
    ['da massa do corpo', 'da cor do corpo', 'da temperatura do corpo', 'da distância até a Terra'], 11);

  /* ---------- FI1-COS ---------- */
  add('FI1-COS', 'em1_fis_rotacao', 'No gráfico da curva de rotação das estrelas de uma galáxia, a curva que mostra a velocidade permanecendo alta mesmo para estrelas distantes do centro é a:',
    ['curva B', 'curva A', 'nenhuma delas', 'as duas igualmente'], 11);
  add('FI1-COS', 'em1_fis_rotacao', 'Os astrônomos propuseram a existência da matéria escura porque:',
    ['estrelas distantes do centro giram rápido demais para a massa visível existente', 'as galáxias emitem luz demais', 'as estrelas não giram em torno do centro da galáxia', 'a matéria visível é maior do que o necessário'], 11);
  add('FI1-COS', 'em1_fis_rotacao', 'No gráfico, os eixos vertical e horizontal representam, respectivamente:',
    ['velocidade e distância', 'tempo e massa', 'luminosidade e temperatura', 'massa e raio'], 11);
  addT('FI1-COS', "A matéria escura é uma componente invisível do Universo, inferida a partir de seus efeitos gravitacionais. [...] Apesar de suas fortes evidências indiretas, a natureza da matéria escura ainda é desconhecida.", 'Segundo o texto, a matéria escura:',
    ['é inferida por seus efeitos gravitacionais e sua natureza ainda é desconhecida', 'é totalmente visível ao telescópio', 'é formada apenas por estrelas conhecidas', 'foi descartada pelos astrônomos'], 11);
  addT('FI1-COS', "Como a matéria escura não interage significativamente com a luz, pôde começar a se agrupar muito cedo no Universo, funcionando como uma espécie de arcabouço gravitacional sobre o qual galáxias e aglomerados se formaram.", 'De acordo com o texto, a matéria escura foi importante para a formação das galáxias porque:',
    ['começou a se agrupar cedo e serviu de arcabouço gravitacional', 'emitia luz muito intensa', 'impedia a formação de estruturas', 'só surgiu depois das galáxias'], 11);
  add('FI1-COS', null, 'Pela Lei de Hubble (v = H0 · d), com H0 = 70 km/s/Mpc, uma galáxia a 100 Mpc da Terra se afasta com velocidade de:',
    ['7 000 km/s', '70 km/s', '700 km/s', '0,7 km/s'], 12);
  add('FI1-COS', null, 'Com H0 = 70 km/s/Mpc, uma galáxia a 200 Mpc, o dobro da distância de outra galáxia a 100 Mpc, se afasta com velocidade de:',
    ['14 000 km/s', '7 000 km/s', '3 500 km/s', '49 000 km/s'], 12);
  add('FI1-COS', null, 'Uma galáxia apresenta velocidade de afastamento de 21 000 km/s. Com H0 = 70 km/s/Mpc, a distância até ela é de:',
    ['300 Mpc', '2,1 Mpc', '1 470 000 Mpc', '30 Mpc'], 12);
  addT('FI1-COS', "Evolução do Universo (esquema): Big Bang; era escura; primeiras estrelas aparecem; galáxias próximas aparecem; galáxias modernas; formação do Sistema Solar (9 bilhões de anos). Marcas de tempo: 380 mil anos, 300 milhões de anos, 1 bilhão de anos.", "No esquema da evolução do Universo, o tempo cresce a partir do Big Bang. Depois da era escura, aparecem primeiro:",
    ["as primeiras estrelas", "as galáxias modernas", "o Sistema Solar", "as galáxias próximas"], 12);
  addT('FI1-COS', "Evolução do Universo (esquema): Big Bang; era escura; primeiras estrelas aparecem; galáxias próximas aparecem; galáxias modernas; formação do Sistema Solar (9 bilhões de anos). Marcas de tempo: 380 mil anos, 300 milhões de anos, 1 bilhão de anos.", "Segundo o esquema, o Sistema Solar se formou cerca de:",
    ["9 bilhões de anos após o Big Bang", "380 mil anos após o Big Bang", "300 milhões de anos após o Big Bang", "1 bilhão de anos após o Big Bang"], 12);
  add('FI1-COS', 'em1_fis_universo', 'Na figura, o Universo é representado por um cone que se alarga a partir do Big Bang, na direção do tempo. Isso indica:',
    ['a expansão do Universo ao longo do tempo', 'a contração do Universo', 'que o Universo nunca mudou', 'que o Universo é estático'], 12);
  addT('FI1-COS', "O Big Bang não deve ser entendido como uma explosão em um ponto do espaço, mas como o início da expansão do próprio espaço.", 'De acordo com o texto, o Big Bang deve ser entendido como:',
    ['o início da expansão do próprio espaço', 'uma explosão em um ponto do espaço vazio', 'a colisão de duas galáxias', 'o nascimento do Sol'], 12);
  add('FI1-COS', null, 'O horizonte de Hubble é a distância em que a velocidade de afastamento iguala a da luz: d = c / H0. Com c = 3,0 · 10⁵ km/s e H0 = 70 km/s/Mpc, seu valor é de cerca de:',
    ['4 286 Mpc (≈ 4,3 Gpc)', '70 Mpc', '3,0 Mpc', '0,23 Mpc'], 12);
  add('FI1-COS', null, 'Observações recentes mostraram que a expansão do Universo está se acelerando, o que levou à ideia de:',
    ['energia escura', 'radiação gama', 'estrelas de nêutrons', 'um Universo estático'], 12);
})();

/* ===================== BIOLOGIA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Biologia', A = 10;
  B.hab.push(
    { id: 'BI1-CEL', ano: A, disc: D, cod: '', tit: 'Células procariontes e eucariontes e transportes pela membrana',
      desc: 'Diferenciar células procariontes e eucariontes, reconhecer a estrutura da membrana plasmática e distinguir osmose, difusão e transporte ativo.', aulas: 'Aulas 1 e 2' },
    { id: 'BI1-MIC', ano: A, disc: D, cod: '', tit: 'Bactérias e fungos',
      desc: 'Classificar bactérias quanto à forma, nutrição e uso de oxigênio, reconhecer sua reprodução e controle, e caracterizar os fungos, seu papel e suas aplicações.', aulas: 'Aulas 3, 4 e 5' },
    { id: 'BI1-FIS', ano: A, disc: D, cod: '', tit: 'Fisiologia comparada: digestório e circulatório',
      desc: 'Comparar sistemas digestórios completos e incompletos, a digestão e o papel dos órgãos, e comparar sistemas circulatórios abertos e fechados e o coração dos vertebrados.', aulas: 'Aulas 6 e 7' },
    { id: 'BI1-RES', ano: A, disc: D, cod: '', tit: 'Fisiologia comparada: respiração e reprodução',
      desc: 'Relacionar os tipos de respiração aos grupos animais e comparar formas de reprodução assexuada e sexuada, a fertilização e o desenvolvimento do embrião.', aulas: 'Aulas 8 e 9' },
    { id: 'BI1-FIL', ano: A, disc: D, cod: '', tit: 'Árvores filogenéticas',
      desc: 'Interpretar árvores filogenéticas (raiz, nós, ramos, ancestral comum e parentesco) e reconhecer características dos primatas e da espécie humana.', aulas: 'Aula 10' },
    { id: 'BI1-GEN', ano: A, disc: D, cod: '', tit: 'Sistema ABO, fator Rh e Leis de Mendel',
      desc: 'Determinar tipos sanguíneos e possibilidades de transfusão e aplicar as leis de Mendel e os padrões de herança a cruzamentos.', aulas: 'Aulas 11 e 12' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length - 1].texto = texto; };

  /* ---------- BI1-CEL ---------- */
  addT('BI1-CEL', "Seres vivos – características presentes em todos os seres vivos: organização, metabolismo, crescimento, adaptação, reprodução, homeostase, responsividade e evolução.", "Segundo o quadro, uma das características presentes em todos os seres vivos é:",
    ["homeostase", "fotossíntese", "presença de núcleo", "parede celular"], 1);
  addT('BI1-CEL', "A célula é a unidade estrutural e funcional dos seres vivos. Composição da célula: membrana plasmática, citoplasma, material genético (DNA e RNA) e ribossomos.", "De acordo com o quadro, a célula é:",
    ["a unidade estrutural e funcional dos seres vivos", "exclusiva dos animais", "sempre desprovida de material genético", "presente apenas em organismos pluricelulares"], 1);
  addT('BI1-CEL', "Procarionte: apresenta o DNA espalhado pelo citoplasma, na forma de um nucleoide. Representada por bactérias, cianobactérias e arqueias.", "Segundo o quadro, nas células procariontes o DNA está:",
    ["espalhado pelo citoplasma, na forma de nucleoide", "isolado por uma membrana chamada carioteca", "somente no interior de mitocôndrias", "ausente"], 1);
  addT('BI1-CEL', "Eucarionte: apresenta o DNA isolado do conteúdo celular por uma membrana (carioteca), em forma de núcleo, ou no interior de mitocôndrias. Células mais complexas. Representada por fungos, protozoários, animais e plantas.", "Segundo o quadro, são representados por células eucariontes:",
    ["fungos, protozoários, animais e plantas", "bactérias, cianobactérias e arqueias", "apenas as bactérias", "apenas os vírus"], 1);
  addT('BI1-CEL', "Eucarionte: apresenta o DNA isolado do conteúdo celular por uma membrana (carioteca), em forma de núcleo, ou no interior de mitocôndrias. Células mais complexas.", "Segundo o quadro, a carioteca, que isola o DNA do conteúdo celular, é uma característica das células:",
    ["eucariontes", "procariontes", "de bactérias", "de arqueias"], 1);
  add('BI1-CEL', 'em1_bio_membrana', 'A figura mostra a estrutura da membrana plasmática. Ela é formada por uma bicamada de:',
    ['fosfolipídios com proteínas associadas', 'carboidratos apenas', 'DNA e RNA', 'celulose e quitina'], 2);
  add('BI1-CEL', 'em1_bio_membrana', 'A permeabilidade seletiva da membrana plasmática significa que ela:',
    ['determina quais substâncias e íons podem atravessá-la', 'permite a passagem de qualquer substância', 'impede qualquer troca com o meio', 'só deixa passar proteínas'], 2);
  add('BI1-CEL', 'em1_bio_osmose', 'Na figura, a célula plasmolizada, que perdeu água, está em um ambiente externo:',
    ['muito concentrado (hipertônico)', 'pouco concentrado (hipotônico)', 'de concentração igual à da célula (isotônico)', 'sem nenhuma água'], 2);
  add('BI1-CEL', 'em1_bio_osmose', 'Na figura, a célula túrgida, cheia de água, está em um ambiente externo:',
    ['pouco concentrado (hipotônico)', 'muito concentrado (hipertônico)', 'isotônico', 'completamente seco'], 2);
  add('BI1-CEL', 'em1_bio_osmose', 'Na osmose, a água atravessa a membrana semipermeável movendo-se do meio:',
    ['menos concentrado em solutos (hipotônico) para o mais concentrado (hipertônico)', 'mais concentrado em solutos para o menos concentrado', 'sempre de dentro para fora da célula', 'contra o gradiente, com gasto de ATP'], 2);
  add('BI1-CEL', null, 'O transporte ativo se diferencia do passivo porque ocorre:',
    ['contra o gradiente de concentração, com gasto de energia (ATP)', 'a favor do gradiente, sem gasto de energia', 'sem proteínas transportadoras', 'apenas por osmose'], 2);
  add('BI1-CEL', null, 'A bomba de sódio e potássio, que mantém concentrações diferentes de íons dentro e fora dos neurônios, é um exemplo de:',
    ['transporte ativo', 'osmose', 'difusão simples', 'difusão facilitada'], 2);
  add('BI1-CEL', null, 'Uma cozinheira colocou batatas cruas no feijão com excesso de sal e elas ficaram salgadas. O sal passou para as batatas por:',
    ['difusão, a favor do gradiente de concentração', 'osmose, pois só o solvente se move', 'fagocitose, por ser uma substância sólida', 'exocitose, da água para a batata'], 2);
  add('BI1-CEL', null, 'Em solos com excesso de sais, as plantas têm dificuldade de absorver água (seca fisiológica). Isso ocorre porque, por osmose, a água tende a:',
    ['sair das células da raiz em direção ao meio mais concentrado', 'entrar nas células da raiz, tornando-as túrgidas', 'ser absorvida por difusão facilitada', 'ser bombeada para dentro por transporte ativo'], 2);

  /* ---------- BI1-MIC ---------- */
  add('BI1-MIC', 'em1_bio_bactclass', "Quanto à forma, as bactérias são classificadas, segundo o esquema, em:",
    ["cocos, bacilos, espirilos e vibriões", "hifas, micélios e esporos", "átrios e ventrículos", "hemácias e plaquetas"], 3);
  add('BI1-MIC', 'em1_bio_tubosmic', 'Nas imagens feitas ao microscópio, as bactérias do tubo 2 têm forma de espiral. Segundo a classificação por forma, elas são:',
    ['espirilos', 'cocos', 'bacilos', 'vibriões'], 3);
  add('BI1-MIC', 'em1_bio_bactoxi', 'No esquema, as bactérias que vivem somente na ausência de oxigênio (0%) são chamadas de:',
    ['anaeróbias obrigatórias', 'aeróbias', 'microaerófilas', 'autótrofas'], 3);
  add('BI1-MIC', 'em1_bio_bactrepro', "Segundo o esquema, as bactérias se reproduzem de forma assexuada por:",
    ["fissão binária, também chamada de bipartição, gerando clones", "fecundação de gametas", "brotamento de hifas", "meiose, gerando gametas"], 3);
  add('BI1-MIC', 'em1_bio_tubos', 'No experimento, o tubo 1 apresenta crescimento microbiano na superfície do meio de cultura, perto do oxigênio gasoso. As bactérias do tubo 1 são:',
    ['aeróbias', 'anaeróbias obrigatórias', 'anaeróbias facultativas', 'autótrofas'], 3);
  add('BI1-MIC', 'em1_bio_tubos', 'No tubo 2, o crescimento microbiano ocorre apenas no fundo do meio de cultura, longe do oxigênio. As bactérias do tubo 2 são:',
    ['anaeróbias obrigatórias', 'aeróbias', 'microaerófilas', 'anaeróbias facultativas'], 3);
  add('BI1-MIC', 'em1_bio_tubos', 'No tubo 3, o crescimento microbiano ocorre ao longo de todo o meio de cultura. As bactérias do tubo 3 são:',
    ['anaeróbias facultativas', 'aeróbias', 'anaeróbias obrigatórias', 'vibriões'], 3);
  add('BI1-MIC', 'em1_bio_fleming', 'Na placa do dia 14, ao redor da colônia do fungo não há colônias de bactérias. Isso indica que o fungo:',
    ['produziu uma substância que impediu o crescimento das bactérias', 'serviu de alimento para as bactérias', 'multiplicou as bactérias', 'foi destruído pelas bactérias'], 4);
  add('BI1-MIC', 'em1_bio_fleming', 'Alexander Fleming descobriu, a partir do fungo que cresceu na placa, a substância:',
    ['penicilina, um antibiótico', 'insulina', 'amilase salivar', 'hemolinfa'], 4);
  add('BI1-MIC', 'em1_bio_fungosa', "Os fungos são seres eucariontes e heterótrofos. Segundo o esquema, a parede celular deles é composta de:",
    ["quitina", "celulose", "sílica", "fosfolipídios"], 4);
  add('BI1-MIC', 'em1_bio_fungosa', "No esquema, os fungos pluricelulares são formados por hifas, que constituem o micélio vegetativo e o micélio reprodutivo. O micélio reprodutivo, em que se formam os esporos, também é chamado de:",
    ["corpo de frutificação", "micélio vegetativo", "hifa vegetativa", "colônia bacteriana"], 4);
  add('BI1-MIC', 'em1_bio_fungosb', "No esquema, líquens e micorrizas são exemplos de simbiose envolvendo fungos. Os líquens são associações de fungos com:",
    ["cianobactérias", "animais", "vírus", "protozoários"], 5);
  addT('BI1-MIC', "A fermentação é um processo biológico no qual microrganismos, como leveduras e fungos, convertem açúcares em produtos como etanol e dióxido de carbono. Esse fenômeno ocorre em ambientes anaeróbicos, ou seja, na ausência de oxigênio.", 'De acordo com o texto, na fermentação, leveduras e fungos convertem açúcares em:',
    ['etanol e dióxido de carbono', 'oxigênio e água', 'glicose e amido', 'proteínas e ozônio'], 5);
  addT('BI1-MIC', "Os fungos filamentosos têm uma notável habilidade de decompor moléculas difíceis, como o herbicida glifosato, transformando-as em compostos menos tóxicos por meio do processo de biorremediação.", 'Segundo o texto, a transformação de herbicidas em compostos menos tóxicos pela ação dos fungos é chamada de:',
    ['biorremediação', 'fotossíntese', 'nitrificação', 'fissão binária'], 5);

  /* ---------- BI1-FIS ---------- */
  addT('BI1-FIS', "Digestão extracelular: ocorre fora da célula. Digestão intracelular: ocorre dentro da célula. Digestão mecânica: quebra física de alimentos. Digestão química: transformações das moléculas pela ação das enzimas.", "Segundo o quadro, a digestão intracelular é aquela que ocorre:",
    ["dentro da célula", "fora da célula", "somente na boca", "somente no estômago"], 6);
  addT('BI1-FIS', "Digestão mecânica: quebra física de alimentos. Digestão química: transformações das moléculas pela ação das enzimas.", "Segundo o quadro, a digestão química corresponde à:",
    ["ação das enzimas, que transformam as moléculas", "quebra física dos alimentos", "absorção dos nutrientes", "eliminação das fezes"], 6);
  addT('BI1-FIS', "Sistema digestório completo: presença de boca e ânus. Animais: vermes cilíndricos, anelídeos, moluscos, artrópodes, equinodermos e cordados. Sistema digestório incompleto: presença apenas de boca. Animais: cnidários e vermes achatados.", "Segundo o quadro, tem sistema digestório completo, com boca e ânus, o grupo dos:",
    ["anelídeos", "cnidários", "vermes achatados", "todos os animais, sem exceção"], 6);
  addT('BI1-FIS', "Sistema digestório completo: presença de boca e ânus. Animais: vermes cilíndricos, anelídeos, moluscos, artrópodes, equinodermos e cordados. Sistema digestório incompleto: presença apenas de boca. Animais: cnidários e vermes achatados.", "Segundo o quadro, um animal com sistema digestório incompleto, que tem apenas boca, é:",
    ["um cnidário", "um anelídeo", "um molusco", "um artrópode"], 6);
  addT('BI1-FIS', "A bile, produzida pelo fígado e armazenada na vesícula biliar, diminui o tamanho das bolhas de gordura (emulsificação da gordura), auxiliando na digestão dessas substâncias.", 'Segundo o texto, a bile auxilia na digestão de:',
    ['gorduras (lipídios)', 'proteínas', 'amido', 'água'], 6);
  addT('BI1-FIS', "No estômago, o bolo alimentar é misturado ao suco gástrico, que contém ácido clorídrico e enzimas como a pepsina, que atua na digestão de proteínas.", 'A pepsina, presente no suco gástrico, atua na digestão de:',
    ['proteínas', 'carboidratos', 'gorduras', 'vitaminas'], 6);
  addT('BI1-FIS', "O intestino grosso é responsável pela absorção de água e sais minerais, formando as fezes, que serão armazenadas no reto e eliminadas pelo ânus.", 'De acordo com o texto, o intestino grosso é responsável pela absorção de:',
    ['água e sais minerais', 'proteínas', 'gorduras', 'amido'], 6);
  add('BI1-FIS', 'em1_bio_inseto', 'A figura mostra o sistema circulatório de um inseto. O coração em forma de tubo bombeia a hemolinfa para a parte anterior do corpo por meio de um único vaso, chamado:',
    ['aorta', 'átrio', 'capilar', 'veia cava'], 7);
  add('BI1-FIS', 'em1_bio_inseto', 'O sistema circulatório do inseto é classificado como aberto (lacunar) porque a hemolinfa:',
    ['sai dos vasos e circula livremente pelas cavidades do corpo (hemoceles)', 'circula somente dentro de vasos', 'passa duas vezes pelo coração', 'transporta os gases respiratórios'], 7);
  add('BI1-FIS', 'em1_bio_coracoes', 'Segundo a figura e o texto, o coração dos peixes tem:',
    ['um átrio e um ventrículo', 'dois átrios e um ventrículo', 'dois átrios e dois ventrículos', 'nenhuma câmara'], 7);
  add('BI1-FIS', 'em1_bio_coracoes', 'Segundo a figura e o texto, o coração dos anfíbios apresenta:',
    ['dois átrios e um ventrículo', 'um átrio e um ventrículo', 'dois átrios e dois ventrículos', 'um átrio e dois ventrículos'], 7);
  add('BI1-FIS', 'em1_bio_coracoes', 'Nas aves e nos mamíferos, o coração tem dois átrios e dois ventrículos, e a circulação é:',
    ['dupla e completa', 'simples e incompleta', 'simples e completa', 'dupla e incompleta'], 7);
  add('BI1-FIS', 'em1_bio_abertofechado', 'Na figura, o sistema circulatório dos peixes é fechado porque o sangue:',
    ['circula somente dentro de vasos', 'sai dos vasos e circula pelas cavidades do corpo', 'não passa pelo coração', 'não transporta substâncias'], 7);

  /* ---------- BI1-RES ---------- */
  add('BI1-RES', 'em1_bio_respcel', "Segundo o esquema, a respiração celular é:",
    ["uma série de reações químicas dentro das células que produzem energia a partir de moléculas orgânicas", "a passagem de gases entre estruturas e órgãos", "sinônimo de respiração fisiológica", "a entrada de ar nos pulmões"], 8);
  add('BI1-RES', 'em1_bio_respcel', "Segundo o esquema, a respiração fisiológica é:",
    ["a passagem de gases entre estruturas e órgãos, com troca de gás carbônico e gás oxigênio", "a produção de energia dentro das células", "a digestão dos alimentos", "a circulação da hemolinfa"], 8);
  add('BI1-RES', 'em1_bio_respaerobia', "Segundo o esquema, o resíduo da respiração aeróbia que precisa ser eliminado do corpo é o:",
    ["gás carbônico", "gás oxigênio", "nitrogênio", "hidrogênio"], 8);
  addT('BI1-RES', "Tipos de respiração e animais: branquial – peixes, invertebrados aquáticos e marinhos, larvas aquáticas de insetos; cutânea – anfíbios e alguns outros grupos, como anelídeos; pulmonar – anfíbios, répteis, mamíferos e aves; traqueal – insetos; filotraqueal – aracnídeos.", "De acordo com o quadro, um réptil realiza respiração:",
    ["pulmonar", "branquial", "traqueal", "filotraqueal"], 8);
  addT('BI1-RES', "Tipos de respiração e animais: branquial – peixes, invertebrados aquáticos e marinhos, larvas aquáticas de insetos; cutânea – anfíbios e alguns outros grupos, como anelídeos; pulmonar – anfíbios, répteis, mamíferos e aves; traqueal – insetos; filotraqueal – aracnídeos.", "De acordo com o quadro, os aracnídeos realizam respiração:",
    ["filotraqueal", "traqueal", "branquial", "cutânea"], 8);
  add('BI1-RES', 'em1_bio_respanimais', 'A abelha da foto é um inseto. De acordo com o quadro da aula, o tipo de respiração dos insetos é:',
    ['traqueal', 'branquial', 'pulmonar', 'cutânea'], 8);
  add('BI1-RES', 'em1_bio_respanimais', 'A perereca da foto é um anfíbio. Além da pele (respiração cutânea), ela realiza trocas gasosas por meio:',
    ['dos pulmões', 'das traqueias', 'dos espiráculos', 'das filotraqueias'], 8);
  addT('BI1-RES', "Reprodução assexuada: não há fecundação e/ou fusão de gametas; não há combinação de material genético; pouca diversidade genética; gera clones.", "Segundo o quadro, a reprodução assexuada gera:",
    ["clones, com pouca diversidade genética", "organismos com mistura única de genes", "grande diversidade genética", "zigotos, pela fusão de gametas"], 9);
  add('BI1-RES', 'em1_bio_reprocasos', 'A ameba, organismo unicelular que se divide ao meio formando duas células idênticas, reproduz-se por:',
    ['fissão binária', 'brotamento', 'fragmentação', 'partenogênese'], 9);
  add('BI1-RES', 'em1_bio_reprocasos', 'Uma folha de suculenta colocada sobre a terra dá origem a um novo indivíduo. Esse tipo de reprodução assexuada é a:',
    ['propagação vegetativa', 'esporulação', 'partenogênese', 'fissão binária'], 9);
  addT('BI1-RES', "Fertilização externa: gametas se encontram fora do corpo dos animais. Fertilização interna: gametas se encontram dentro do corpo dos animais.", "Segundo o quadro, na fertilização interna os gametas se encontram:",
    ["dentro do corpo dos animais", "fora do corpo dos animais", "apenas no ambiente aquático", "apenas depois da postura do ovo"], 9);
  addT('BI1-RES', "Vivíparo: o embrião se desenvolve diretamente no corpo da mãe. Ovíparo: ovo colocado no ambiente. Ovovivíparo: ovo fica no corpo do animal, onde nasce o filhote.", "Segundo o quadro, o animal ovovivíparo é aquele em que:",
    ["o ovo fica no corpo do animal, onde nasce o filhote", "o embrião se desenvolve diretamente no corpo da mãe", "o ovo é colocado no ambiente", "os gametas se encontram fora do corpo"], 9);
  addT('BI1-RES', "Estruturas do ovo de vertebrados – Casca: camada externa, pode ser calcária ou gelatinosa. Âmnio: líquido interno, que protege e hidrata o embrião. Saco vitelínico: reserva de nutrientes para o embrião. Alantoide: armazena as excretas do embrião. Cório: camada abaixo da casca.", "Segundo o quadro, a estrutura do ovo de vertebrados que armazena as excretas do embrião é o:",
    ["alantoide", "âmnio", "saco vitelínico", "cório"], 9);

  /* ---------- BI1-FIL ---------- */
  add('BI1-FIL', 'em1_bio_arvgen', 'Na árvore filogenética da figura, o primeiro nó (raiz) representa:',
    ['o ancestral comum de todas as espécies da árvore', 'a espécie mais recente', 'uma espécie sem descendentes', 'o ramo terminal da espécie 5'], 10);
  add('BI1-FIL', 'em1_bio_arvgen', 'Na figura, as espécies 1 a 5 ocupam na árvore os chamados:',
    ['ramos terminais', 'nós', 'raízes', 'ancestrais comuns'], 10);
  add('BI1-FIL', 'em1_bio_arvgen', 'Na figura, os pontos indicados como “nós” representam:',
    ['pontos em que uma linhagem se divide a partir de um ancestral comum', 'as espécies atuais', 'a extinção das espécies', 'as características de cada espécie'], 10);
  add('BI1-FIL', 'em1_bio_arvprim', 'Na árvore filogenética da ordem Primata, o ramo que se separa primeiro, na extremidade esquerda da linha, é o do:',
    ['lêmure', 'humano', 'chimpanzé', 'gorila'], 10);
  add('BI1-FIL', 'em1_bio_arvprim', 'Na árvore filogenética da ordem Primata, o ramo mais próximo do humano é o do:',
    ['chimpanzé', 'lêmure', 'társio', 'orangotango'], 10);
  add('BI1-FIL', 'em1_bio_arvhomin', 'Na árvore filogenética dos hominídeos, a espécie representada por um crânio fóssil é:',
    ['Australopithecus', 'gorila', 'chimpanzé', 'orangotango'], 10);
  add('BI1-FIL', 'em1_bio_hominideos', 'As características ilustradas na figura, que definem a espécie humana, são:',
    ['polegar opositor, bipedalismo e grande volume cerebral', 'cauda longa, quatro patas e cérebro pequeno', 'asas, penas e bico', 'nadadeiras, escamas e brânquias'], 10);
  add('BI1-FIL', 'em1_bio_arvativ', 'Na árvore filogenética da figura, a letra que representa o ancestral comum a todos os organismos é:',
    ['X', 'A', 'C', 'E'], 10);
  add('BI1-FIL', 'em1_bio_arvativ', 'Na árvore da figura, A e B são evolutivamente mais próximos do que E e D porque:',
    ['compartilham um ancestral comum mais recente', 'estão mais à esquerda no desenho', 'têm o ramo mais curto', 'são da mesma espécie'], 10);
  add('BI1-FIL', 'em1_bio_arvativ', 'Na árvore da figura, a primeira espécie a se diferenciar na evolução do grupo é:',
    ['E', 'A', 'B', 'C'], 10);
  add('BI1-FIL', 'em1_bio_cladograma', 'No cladograma da figura, os gêneros mais próximos entre si, que compartilham um ancestral comum exclusivo, são:',
    ['Pan (chimpanzés) e Homo (humanos)', 'Hylobates (gibões) e Gorilla (gorilas)', 'Gorilla (gorilas) e Homo (humanos)', 'Hylobates (gibões) e Pan (chimpanzés)'], 10);
  add('BI1-FIL', 'em1_bio_cladograma', 'A afirmação “os humanos descendem dos chimpanzés” é contrariada pelo cladograma, segundo o qual humanos e chimpanzés:',
    ['descendem de um ancestral comum exclusivo', 'descendem dos gibões, que descendem deles', 'descendem dos gorilas, que descendem deles', 'são a mesma espécie'], 10);

  /* ---------- BI1-GEN ---------- */
  addT('BI1-GEN', "O corpo humano também produz anticorpos (aglutininas) contra os diferentes tipos sanguíneos. O sangue tipo A produz anti-B, que reage com aglutinogênio B; o tipo B produz anti-A, que reage com aglutinogênio A; o tipo O produz anti-A e anti-B.", "Segundo o quadro, o sangue do tipo B produz a aglutinina:",
    ["anti-A", "anti-B", "anti-A e anti-B", "nenhuma aglutinina"], 11);
  addT('BI1-GEN', "Tipos sanguíneos: A – aglutinogênio A, aglutinina anti-B; B – aglutinogênio B, aglutinina anti-A; AB – aglutinogênios A e B, sem aglutininas; O – sem aglutinogênios, aglutininas anti-A e anti-B. Fator Rh: presente nos tipos + e ausente nos tipos −.", "De acordo com o quadro, o sangue O− apresenta:",
    ["aglutinogênio ausente, aglutininas anti-A e anti-B e fator Rh ausente", "aglutinogênio ausente, nenhuma aglutinina e fator Rh presente", "aglutinogênio A, aglutinina anti-B e fator Rh ausente", "aglutinogênios A e B e fator Rh presente"], 11);
  add('BI1-GEN', 'em1_bio_rhcoelho', 'No experimento da figura, o sangue do macaco Rhesus injetado no coelho levou o coelho a produzir:',
    ['anticorpos anti-Rh', 'hemácias Rh', 'aglutinogênio A', 'plaquetas'], 11);
  add('BI1-GEN', 'em1_bio_rhcoelho', 'Ao testar o soro com anticorpos anti-Rh em amostras de sangue de diferentes pessoas, a reação positiva (aglutinação) indica sangue:',
    ['Rh+', 'Rh−', 'tipo O', 'tipo AB'], 11);
  add('BI1-GEN', 'em1_bio_amostras', 'Na figura, a amostra I apresenta aglutinação (mancha grande) com o soro anti-A e não com o anti-B. O sangue da amostra I é do tipo:',
    ['A', 'B', 'AB', 'O'], 11);
  add('BI1-GEN', 'em1_bio_amostras', 'Na figura, a amostra II não apresenta aglutinação com o soro anti-A nem com o anti-B. O sangue da amostra II é do tipo:',
    ['O', 'A', 'B', 'AB'], 11);
  add('BI1-GEN', 'em1_bio_amostras', 'Na figura, a amostra III apresenta aglutinação com os soros anti-A, anti-B e anti-A + anti-B. O sangue da amostra III é do tipo:',
    ['AB', 'O', 'A', 'B'], 11);
  add('BI1-GEN', null, 'Pablo misturou o plasma do seu sangue com sangue tipo A e com sangue tipo B. Houve aglutinação apenas com o sangue tipo A. Pablo pertence ao grupo:',
    ['B, com aglutinina anti-A', 'A, com aglutinina anti-B', 'AB, sem aglutininas', 'O, com aglutininas anti-A e anti-B'], 11);
  add('BI1-GEN', null, 'Uma mulher de sangue tipo AB teve um filho de sangue tipo B. O genótipo ABO do homem que exclui a possibilidade de ele ser o pai desse filho é:',
    ['IA IA', 'IA i', 'IB i', 'i i'], 12);
  add('BI1-GEN', null, 'Um jovem tem sangue O Rh negativo, a mãe é B Rh positivo e o pai é A Rh positivo. Para que ele seja filho biológico do casal, é necessário que:',
    ['o pai e a mãe sejam heterozigotos para o sistema ABO e para o fator Rh', 'o pai e a mãe sejam homozigotos para o sistema ABO e para o fator Rh', 'o pai seja homozigoto IA IA', 'a mãe seja homozigota IB IB'], 12);
  add('BI1-GEN', 'em1_bio_cruzteste1', 'No cruzamento-teste da figura, o indivíduo de genótipo desconhecido (Y?) é cruzado com um homozigoto recessivo (yy) e todos os descendentes são amarelos (Yy). O progenitor desconhecido é:',
    ['homozigoto dominante (YY)', 'heterozigoto (Yy)', 'homozigoto recessivo (yy)', 'impossível de determinar'], 12);
  add('BI1-GEN', 'em1_bio_cruzteste2', 'Em outro cruzamento-teste, a proporção de descendentes amarelos e verdes é de 1 : 1. Isso indica que o progenitor de genótipo desconhecido é:',
    ['heterozigoto (Yy)', 'homozigoto dominante (YY)', 'homozigoto recessivo (yy)', 'sempre de semente verde'], 12);
  add('BI1-GEN', 'em1_bio_dihibrido', 'No cruzamento di-híbrido mostrado na figura, a proporção fenotípica obtida na geração F2 é:',
    ['9 : 3 : 3 : 1', '3 : 1', '1 : 1', '1 : 2 : 1'], 12);
  add('BI1-GEN', null, 'Uma mãe do tipo A heterozigota e Rh− (IA i, rr) e um pai do tipo B heterozigoto e Rh+ heterozigoto (IB i, Rr) têm filhos. O número de fenótipos diferentes (ABO + Rh) possíveis para os filhos é:',
    ['8', '4', '6', '2'], 12);
})();

/* ===================== QUÍMICA ===================== */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Química', A = 10;
  B.hab.push(
    { id: 'QI1-FUN', ano: A, disc: D, cod: '', tit: 'Funções inorgânicas e reações de neutralização',
      desc: 'Reconhecer ácidos, bases, sais e óxidos, a força de ácidos e bases, as reações de neutralização e a natureza dos sais formados.', aulas: 'Aulas 1 e 6' },
    { id: 'QI1-CIC', ano: A, disc: D, cod: '', tit: 'Ciclos biogeoquímicos do carbono, nitrogênio, fósforo e enxofre',
      desc: 'Interpretar esquemas dos ciclos do carbono, do nitrogênio, do fósforo e do enxofre e relacionar os impactos humanos à eutrofização, à chuva ácida e à acidificação dos oceanos.', aulas: 'Aulas 1, 2 e 3' },
    { id: 'QI1-PH', ano: A, disc: D, cod: '', tit: 'pH, chuva ácida e poluentes na água',
      desc: 'Usar a escala de pH e o indicador de repolho roxo, explicar a chuva ácida e relacionar nitratos e fosfatos à eutrofização e à saúde.', aulas: 'Aulas 3, 4, 5 e 7' },
    { id: 'QI1-SOL', ano: A, disc: D, cod: '', tit: 'Solubilidade de compostos iônicos e soluções',
      desc: 'Prever a solubilidade de compostos iônicos, interpretar tabelas e curvas de solubilidade e classificar soluções em insaturadas, saturadas e com corpo de fundo.', aulas: 'Aulas 8 e 9' },
    { id: 'QI1-CON', ano: A, disc: D, cod: '', tit: 'Concentração de soluções',
      desc: 'Calcular a concentração de soluções em g/L e em mol/L e relacionar massa, quantidade de matéria e volume.', aulas: 'Aulas 10 e 12' },
    { id: 'QI1-AMB', ano: A, disc: D, cod: '', tit: 'Qualidade da água e do ar e tratamento de água',
      desc: 'Interpretar índices de qualidade da água e do ar, os efeitos das queimadas e as etapas do tratamento de água e esgoto.', aulas: 'Aulas 11 e 12' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });
  const addT = (hab, texto, stem, alts, aula) => { add(hab, null, stem, alts, aula); B.q[B.q.length - 1].texto = texto; };

  /* ---------- QI1-FUN ---------- */
  addT('QI1-FUN', "Ácidos: liberam íons H⁺ em solução aquosa, segundo Arrhenius. Reagem com bases formando sais e com metais liberando hidrogênio.", 'Segundo Arrhenius, os ácidos são substâncias que, em solução aquosa, liberam íons:',
    ['H⁺', 'OH⁻', 'O²⁻', 'NH₄⁺'], 1);
  addT('QI1-FUN', "Bases: liberam íons OH⁻ em solução aquosa, segundo Arrhenius. Reagem com ácidos formando sais e água (neutralização).", 'Segundo Arrhenius, as bases são substâncias que, em solução aquosa, liberam íons:',
    ['OH⁻', 'H⁺', 'O²⁻', 'Cl⁻'], 1);
  addT('QI1-FUN', "Sais: formados pela reação entre um ácido e uma base (neutralização). Podem ser solúveis em água e conduzem eletricidade em solução.", 'De acordo com o quadro, os sais são formados pela:',
    ['reação de neutralização entre um ácido e uma base', 'decomposição de um óxido', 'queima de um metal', 'evaporação da água do mar'], 1);
  addT('QI1-FUN', "Óxidos: compostos binários do oxigênio com outro elemento (com exceções como OF₂). Fórmula: ExOy. Podem ser gases ou sólidos.", 'Segundo o quadro, entre as substâncias a seguir, a que é um óxido é:',
    ['SO₂', 'H₂SO₄', 'NaOH', 'NaCl'], 1);
  add('QI1-FUN', null, 'A equação geral de uma reação de neutralização entre um ácido e uma base é:',
    ['ácido + base → sal + água', 'sal + água → ácido + base', 'óxido + água → sal', 'metal + ácido → base'], 6);
  addT('QI1-FUN', "Força dos ácidos – Oxiácido HxEOy: se y − x ≥ 2, ácido forte. Hidrácidos: HCl, HBr e HI são ácidos fortes.", 'Segundo o quadro, um oxiácido HxEOy é forte quando y − x ≥ 2. Entre os ácidos a seguir, o único forte é:',
    ['H₂SO₄', 'H₂CO₃', 'HNO₂', 'HClO'], 6);
  addT('QI1-FUN', "Força das bases: a força é relacionada à solubilidade das bases. Solúveis: fortes. Elementos dos grupos 1 e 2 da tabela periódica formam bases solúveis e fortes.", 'Segundo o quadro, as bases formadas por elementos dos grupos 1 e 2 da tabela periódica são:',
    ['solúveis e fortes', 'insolúveis e fracas', 'gasosas e fracas', 'ácidas e fortes'], 6);
  addT('QI1-FUN', "Neutralização total: a quantidade de íons H⁺ deve ser igual à de íons OH⁻. Neutralização parcial: sobra H⁺ ou OH⁻ no sal.", 'Segundo o quadro, na neutralização total:',
    ['a quantidade de íons H⁺ é igual à de íons OH⁻', 'sobra H⁺ ou OH⁻ no sal', 'só há formação de gases', 'o pH final é sempre 14'], 6);
  addT('QI1-FUN', "Sal ácido: produto da neutralização parcial ácida; tem hidrogênio ionizável na fórmula. Sal básico: produto da neutralização parcial básica; tem OH na fórmula.", 'Segundo o quadro, o sal que tem hidrogênio ionizável na fórmula, característico do sal ácido, é o:',
    ['KHSO₄', 'NaBr', 'Mg(OH)Cl', 'NaK(SO₄)'], 6);
  addT('QI1-FUN', "Sal ácido: produto da neutralização parcial ácida; tem hidrogênio ionizável na fórmula. Sal básico: produto da neutralização parcial básica; tem OH na fórmula.", 'Segundo o quadro, o Mg(OH)Cl, que tem OH na fórmula, é um sal:',
    ['básico', 'ácido', 'neutro', 'hidratado'], 6);
  addT('QI1-FUN', "Sal neutro: ácido forte + base forte (pH ≈ 7). Sal ácido: ácido forte + base fraca (pH < 7). Sal básico: ácido fraco + base forte (pH > 7).", 'Um sal formado por um ácido forte e uma base fraca origina, em solução aquosa, um meio com:',
    ['pH menor que 7', 'pH igual a 7', 'pH maior que 7', 'pH igual a 14'], 6);
  add('QI1-FUN', null, 'Entre os sais a seguir, o que em solução aquosa apresenta pH igual a 7 é o:',
    ['NaCl', 'NaHCO₃', '(NH₄)₂SO₄', 'Na₂CO₃'], 6);
  add('QI1-FUN', null, 'O cloreto de sódio pode ser obtido pela neutralização HCl + NaOH → NaCl + H₂O. Seguindo essa nomenclatura, o sal obtido da neutralização total do ácido sulfídrico (H₂S) com o hidróxido de cálcio, Ca(OH)₂, é:',
    ['CaS (sulfeto de cálcio)', 'CaSO₄ (sulfato de cálcio)', 'CaSO₃ (sulfito de cálcio)', 'NaS (sulfeto de sódio)'], 6);

  /* ---------- QI1-CIC ---------- */
  add('QI1-CIC', 'em1_qui_carbono', 'Na figura do ciclo do carbono, o maior reservatório de carbono (em Gt C) entre os indicados é:',
    ['oceano profundo', 'atmosfera', 'vegetação', 'combustíveis fósseis'], 1);
  add('QI1-CIC', 'em1_qui_carbono', 'Segundo o resumo da aula e a figura, o CO₂ da atmosfera é absorvido pela:',
    ['fotossíntese', 'respiração celular', 'queima de combustíveis fósseis', 'formação de nuvens'], 1);
  add('QI1-CIC', 'em1_qui_carbono', 'Na figura, o reservatório de carbono dos combustíveis fósseis e da produção de cimento é de:',
    ['4 000 Gt C', '750 Gt C', '150 Gt C', '38 100 Gt C'], 1);
  add('QI1-CIC', 'em1_qui_nitrogenio', 'No ciclo do nitrogênio, as bactérias fixadoras transformam o N₂ do ar em:',
    ['amônia (NH₃) e íon amônio (NH₄⁺)', 'nitritos e nitratos', 'dióxido de carbono', 'ozônio'], 1);
  add('QI1-CIC', 'em1_qui_nitrogenio', 'No ciclo do nitrogênio, a nitrificação forma:',
    ['nitritos (NO₂⁻) e nitratos (NO₃⁻)', 'amônia (NH₃) e amônio (NH₄⁺)', 'N₂ atmosférico', 'carbonatos'], 1);
  add('QI1-CIC', 'em1_qui_nitrogenio', 'No ciclo do nitrogênio, a desnitrificação converte os nitratos de volta em:',
    ['N₂, que volta à atmosfera', 'amônia', 'ácido nítrico', 'CO₂'], 1);
  add('QI1-CIC', 'em1_qui_nitro2022', 'No esquema do ciclo do nitrogênio, em um solo de menor pH (mais ácido) será favorecida a formação de:',
    ['NH₄⁺', 'N₂', 'NO₂⁻', 'NO₃⁻'], 3);
  add('QI1-CIC', 'em1_qui_nitro2022', 'No esquema, as bactérias nitrificantes transformam a amônia e o amônio em nitritos (NO₂⁻) e, depois, em:',
    ['nitratos (NO₃⁻)', 'nitrogênio gasoso (N₂)', 'amônia (NH₃)', 'dióxido de carbono (CO₂)'], 3);
  add('QI1-CIC', 'em1_qui_enxofre2001', 'O esquema mostra o ciclo natural do enxofre. Considere: I. a atmosfera, a litosfera, a hidrosfera e a biosfera são poluídas por compostos de enxofre; II. são destinos de compostos de enxofre; III. transportam compostos de enxofre; IV. são fontes de compostos de enxofre. Estão corretas apenas:',
    ['II, III e IV', 'I e II', 'I e III', 'II e IV'], 2);
  add('QI1-CIC', 'em1_qui_enxofre2023', 'A figura apresenta o ciclo do enxofre, com emissões naturais, biogênicas e antropogênicas. Um impacto ambiental gerado por essas emissões é o aparecimento de:',
    ['chuva ácida', 'ilhas de calor', 'smog fotoquímico', 'degradação da camada de ozônio'], 2);
  add('QI1-CIC', 'em1_qui_enxofre2023', 'Na figura, as emissões vulcânicas liberam para a atmosfera compostos de enxofre como:',
    ['H₂S, SO₂ e SO₄²⁻', 'N₂ e O₂ apenas', 'CH₄ e NH₃', 'CaCO₃ e NaCl'], 2);
  add('QI1-CIC', 'em1_qui_corais', 'No esquema, o aumento de CO₂ dissolvido no mar forma H₂CO₃ e libera íons H⁺, tornando a água mais ácida. O resultado para os corais é:',
    ['dano à estrutura dos esqueletos calcários', 'estímulo à formação dos esqueletos', 'aumento da fotossíntese dos corais', 'aumento do pH da água'], 3);
  add('QI1-CIC', 'em1_qui_corais', 'No esquema, o CO₂ atmosférico dissolvido na água do mar reage com a água formando:',
    ['ácido carbônico (H₂CO₃)', 'carbonato de cálcio (CaCO₃)', 'oxigênio (O₂)', 'nitrato (NO₃⁻)'], 3);
  addT('QI1-CIC', "Ciclo do fósforo – importância: essencial para DNA, RNA, ATP e fosfolipídios. Características: não tem fase gasosa significativa; circula entre rochas, solo, água e seres vivos.", 'Segundo o quadro, o fósforo é essencial para a formação de:',
    ['DNA, RNA, ATP e fosfolipídios', 'chuva ácida', 'camada de ozônio', 'gás carbônico'], 2);

  /* ---------- QI1-PH ---------- */
  add('QI1-PH', 'em1_qui_phrepolho', 'Pela tabela do indicador de repolho roxo, um líquido que deixa o extrato vermelho tem pH entre 1 e 3 e é classificado como:',
    ['ácido forte', 'ácido fraco', 'neutro', 'base forte'], 5);
  add('QI1-PH', 'em1_qui_phrepolho', 'Pela tabela, quando o extrato de repolho roxo permanece roxo, a substância testada é:',
    ['neutra (pH 7)', 'ácida forte', 'base fraca', 'base forte'], 5);
  add('QI1-PH', 'em1_qui_phrepolho', 'Pela tabela, um líquido que torna o extrato verde-azulado, com pH entre 8 e 10, é:',
    ['base fraca', 'base forte', 'ácido fraco', 'neutro'], 5);
  add('QI1-PH', 'em1_qui_chuvaresumo', "Segundo o resumo, a chuva ácida é causada pela reação de gases poluentes com a água da atmosfera. Esses gases são:",
    ["SO₂ e NO₂", "N₂ e O₂", "H₂ e He", "Ne e Ar"], 5);
  add('QI1-PH', 'em1_qui_chuvaresumo', "Segundo o resumo, para ser considerada ácida, a chuva deve ter pH abaixo de:",
    ["5,6", "7,0", "8,5", "10"], 5);
  add('QI1-PH', 'em1_qui_chuvaresumo', "Entre as consequências da chuva ácida citadas no resumo está:",
    ["a corrosão de metais, prédios e monumentos históricos", "o aumento do pH dos lagos", "a melhora da fertilidade do solo", "o aumento da população de peixes"], 5);
  add('QI1-PH', null, 'Pela escala de pH, uma solução com pH igual a 3 é classificada como:',
    ['ácida', 'neutra', 'básica', 'alcalina forte'], 3);
  add('QI1-PH', 'em1_qui_nitratos', "Segundo o esquema, o excesso de nitratos na água causa:",
    ["eutrofização, com morte de peixes e desequilíbrio nos ecossistemas", "aumento do oxigênio dissolvido", "diminuição das algas", "neutralização da água"], 7);
  add('QI1-PH', 'em1_qui_nitratos', "Segundo o esquema, uma forma de reduzir a contaminação por nitratos é:",
    ["o uso consciente de fertilizantes e o tratamento adequado do esgoto", "aumentar o uso de fertilizantes", "lançar esgoto sem tratamento", "suspender o monitoramento da qualidade da água"], 7);
  add('QI1-PH', null, 'Considere as equações 2 SO₂ + O₂ → 2 SO₃ e SO₃ + H₂O → H₂SO₄. A alteração ambiental intensificada pela presença desse poluente é a:',
    ['formação de chuva ácida', 'formação de ilha de calor', 'redução da camada de ozônio', 'ocorrência de inversão térmica'], 5);
  add('QI1-PH', null, 'Na “floração das águas”, causada por nitratos e fosfatos, ocorre grande mortalidade de peixes. Ela se deve principalmente:',
    ['à diminuição do oxigênio na água, causada pela decomposição das algas', 'à competição por espaço entre algas e peixes', 'à liberação de ureia pelas algas', 'ao acúmulo de nitratos ao longo da cadeia alimentar'], 7);
  add('QI1-PH', null, 'Os antiácidos, como o hidróxido de magnésio, controlam o pH do suco gástrico principalmente por:',
    ['diminuírem a concentração de H₃O⁺ do suco gástrico', 'produzirem gases na neutralização', 'liberarem grande quantidade de energia', 'produzirem cátions inorgânicos em solução'], 6);

  /* ---------- QI1-SOL ---------- */
  addT('QI1-SOL', "Como saber se é solúvel? Usamos a tabela de solubilidade dos sais. Sais com Na⁺, K⁺, NO₃⁻ → geralmente solúveis. Sais com CO₃²⁻, OH⁻ → insolúveis (com exceções).", 'Segundo o quadro, sais com Na⁺, K⁺ e NO₃⁻ são geralmente:',
    ['solúveis em água', 'insolúveis em água', 'gasosos', 'líquidos'], 8);
  addT('QI1-SOL', "NaCl é solúvel → dissocia-se em Na⁺ + Cl⁻. CaCO₃ é pouco solúvel → forma depósito sólido.", 'Segundo o quadro, o CaCO₃ é um sal que:',
    ['é pouco solúvel e forma depósito sólido', 'é muito solúvel e se dissocia totalmente', 'é um gás', 'é um ácido forte'], 8);
  add('QI1-SOL', 'em1_qui_tubostab', 'A solubilidade do K₂Cr₂O₇ é 12,5 g/100 mL de água a 20 °C. Quatro tubos recebem 20 mL de água cada e, respectivamente, 1,0 g, 3,0 g, 5,0 g e 7,0 g do sal. Apresentam corpo de fundo:',
    ['apenas os tubos 2, 3 e 4', 'apenas os tubos 1 e 2', 'todos os tubos', 'apenas o tubo 1'], 9);
  add('QI1-SOL', 'em1_qui_tubostab', 'Na tabela, o tubo 1 (20 mL de água e 1,0 g de K₂Cr₂O₇, com solubilidade de 12,5 g/100 mL) contém uma solução:',
    ['insaturada', 'saturada com corpo de fundo', 'supersaturada', 'que não chega a ser uma solução'], 9);
  add('QI1-SOL', 'em1_qui_tubostab', 'Com solubilidade de 12,5 g/100 mL a 20 °C, a massa máxima de K₂Cr₂O₇ que se dissolve em 20 mL de água é:',
    ['2,5 g', '12,5 g', '1,25 g', '25 g'], 9);
  add('QI1-SOL', 'em1_qui_curvas', 'No gráfico, com o aumento da temperatura, a solubilidade do Ce₂(SO₄)₃ em água:',
    ['diminui', 'aumenta', 'permanece constante', 'torna-se igual à do NH₄NO₃'], 9);
  add('QI1-SOL', 'em1_qui_curvas', 'No gráfico, a 80 °C, entre as substâncias que têm curva até essa temperatura, a mais solúvel em água é:',
    ['NH₄NO₃', 'sacarose', 'KCl', 'Ce₂(SO₄)₃'], 9);
  add('QI1-SOL', 'em1_qui_curvas', 'No gráfico, com exceção do Ce₂(SO₄)₃, a solubilidade das substâncias representadas, com o aumento da temperatura:',
    ['aumenta', 'diminui', 'é sempre nula', 'permanece constante'], 9);
  addT('QI1-SOL', "Substâncias (temperatura de fusão; temperatura de ebulição; solubilidade em água a 25 °C; condutividade elétrica). I: 3 550 °C; 4 287 °C; insolúvel; não conduz no estado sólido. II: 801 °C; 1 413 °C; solúvel; conduz em solução e não conduz no estado sólido. III: 1 808 °C; 3 023 °C; insolúvel; conduz no estado sólido. IV: 2 850 °C; 3 700 °C; insolúvel; não conduz no estado sólido. V: −81 °C; 49 °C; solúvel; não conduz.", 'Pelo quadro, a substância que apresenta as propriedades de um composto iônico como o NaCl (alto ponto de fusão, solúvel em água e condutora em solução, mas não no estado sólido) é a:',
    ['II', 'I', 'III', 'V'], 8);
  add('QI1-SOL', null, 'Grãos de nitrato de potássio colocados em um frasco com água desaparecem com o tempo. A equação que melhor representa a transformação é:',
    ['KNO₃(s) → K⁺(aq) + NO₃⁻(aq)', 'KNO₃(s) → KNO₃(l)', 'KNO₃(s) + H₂O(l) → KOH(aq) + HNO₃(aq)', 'KNO₃(s) → K(l) + NO₃(aq)'], 8);
  add('QI1-SOL', null, 'O cloreto de magnésio (MgCl₂) se dissolve em água liberando íons Mg²⁺ e Cl⁻ na proporção de:',
    ['1 íon Mg²⁺ para 2 íons Cl⁻', '1 íon Mg²⁺ para 1 íon Cl⁻', '2 íons Mg²⁺ para 1 íon Cl⁻', '2 íons Mg²⁺ para 2 íons Cl⁻'], 8);
  addT('QI1-SOL', "Solubilidade em água a 25 °C (g/kg de H₂O): brometo de sódio (NaBr) 1,20·10³; carbonato de cálcio (CaCO₃) 1,30·10⁻²; cloreto de sódio (NaCl) 3,60·10²; cloreto de magnésio (MgCl₂) 5,41·10²; sulfato de magnésio (MgSO₄) 3,60·10²; sulfato de cálcio (CaSO₄) 6,80·10⁻¹.", 'Em uma amostra de água do mar a 25 °C que contenha somente esses sais, o primeiro a precipitar será o:',
    ['carbonato de cálcio (CaCO₃)', 'brometo de sódio (NaBr)', 'cloreto de sódio (NaCl)', 'cloreto de magnésio (MgCl₂)'], 8);

  /* ---------- QI1-CON ---------- */
  addT('QI1-CON', "g/L: mostra a massa do soluto em 1 litro de solução. Fórmula: C = m(soluto) / V(solução), com m em g e V em L.", 'Segundo o quadro, a concentração em g/L mostra:',
    ['a massa do soluto em 1 litro de solução', 'o número de mols do soluto em 1 mL de solução', 'a massa do solvente em 1 kg de soluto', 'a densidade do solvente'], 10);
  addT('QI1-CON', "mol/L: usada para calcular quantos mols de soluto há por litro de solução. Fórmula: C = n / V (n = número de mols, V = volume em L).", 'No quadro, a concentração em mol/L é dada por C = n/V, em que n e V representam, respectivamente:',
    ['o número de mols do soluto e o volume da solução em litros', 'a massa do soluto e o volume do solvente', 'o número de mols do solvente e a massa da solução', 'a massa molar e a densidade'], 10);
  add('QI1-CON', 'em1_qui_solutosolv', 'Na ilustração, a colher adiciona o soluto ao solvente e o resultado é uma:',
    ['solução, que é uma mistura homogênea', 'mistura sempre heterogênea', 'substância pura', 'reação de neutralização'], 10);
  add('QI1-CON', 'em1_qui_solutosolv', 'Ao adoçar um café com açúcar, o açúcar corresponde ao que a figura chama de ______ e a água (ou o café) corresponde ao ______.',
    ['soluto; solvente', 'solvente; soluto', 'solução; solvente', 'solvente; solução'], 10);
  add('QI1-CON', null, 'Foram dissolvidos 20 g de sal em água, formando 0,5 L de solução. A concentração dessa solução é:',
    ['40 g/L', '10 g/L', '20 g/L', '0,025 g/L'], 10);
  add('QI1-CON', null, 'Uma solução contém 0,4 mol de soluto em 2 L de solução. Sua concentração em quantidade de matéria é:',
    ['0,2 mol/L', '0,8 mol/L', '5 mol/L', '2,4 mol/L'], 10);
  add('QI1-CON', 'em1_qui_whey', 'No infográfico, cada colher medidora contém 7,5 g de proteína e são usadas 3 colheres para preparar 250 mL de bebida. A concentração em massa de proteína na bebida é:',
    ['90,0 g/L', '30,0 g/L', '22,5 g/L', '63,5 g/L'], 10);
  add('QI1-CON', 'em1_qui_whey', 'No infográfico, se fossem usadas apenas 2 colheres (7,5 g de proteína cada) para os mesmos 250 mL, a concentração seria de:',
    ['60 g/L', '15 g/L', '30 g/L', '90 g/L'], 10);
  add('QI1-CON', 'em1_qui_whey', 'No infográfico, as 3 colheres medidoras de 7,5 g de proteína cada colocam na bebida uma massa total de proteína igual a:',
    ['22,5 g', '7,5 g', '15 g', '250 g'], 10);
  add('QI1-CON', null, 'Uma pessoa adoça um café de 50 mL com 3,42 g de sacarose (massa molar 342 g/mol). A concentração final de sacarose, em mol/L, é:',
    ['0,2', '0,02', '2', '200'], 10);
  add('QI1-CON', null, 'Um recipiente de 80,0 L contém dióxido de carbono com concentração de 0,0625 mol/L (C = 12 e O = 16). A massa de CO₂ no recipiente é:',
    ['220 g', '230 g', '210 g', '240 g'], 10);
  add('QI1-CON', 'em1_qui_moltab', "Na tabela, o permanganato de potássio (KMnO₄) tem massa molar 158 g/mol (K = 39, Mn = 55, O = 16). A massa correspondente a 0,400 mol é:",
    ["63,2 g", "39,5 g", "158 g", "0,4 g"], 12);
  add('QI1-CON', 'em1_qui_moltab', "Na tabela, o cromato de potássio (K₂CrO₄, M = 194 g/mol) aparece com 0,500 mol em 0,5 L de solução. Sua molaridade é:",
    ["1,0 mol/L", "0,25 mol/L", "0,5 mol/L", "2,0 mol/L"], 12);
  add('QI1-CON', 'em1_qui_moltab', "Na tabela, o sulfato de cobre II (CuSO₄) aparece com 0,100 mol em 0,8 L de solução. Sua molaridade é:",
    ["0,125 mol/L", "0,08 mol/L", "0,8 mol/L", "1,25 mol/L"], 12);

  /* ---------- QI1-AMB ---------- */
  add('QI1-AMB', 'em1_qui_tratamento', 'No ciclo para a garantia de água potável da figura, aparecem monitoramento contínuo, tratamento de fontes fluviais, saúde para todos e:',
    ['tratamento do esgoto', 'queima de combustíveis', 'uso de fertilizantes', 'desmatamento'], 12);
  add('QI1-AMB', 'em1_qui_tratamento', 'No centro do ciclo da figura, em torno do qual se organizam as ações de preservação e tratamento, está:',
    ['a água potável', 'o esgoto bruto', 'a poluição do ar', 'o petróleo'], 12);
  addT('QI1-AMB', "Turbidez: mede a quantidade de partículas suspensas (sujeira, barro etc.). Quanto mais turva, pior será a qualidade da água.", 'Segundo o quadro, a turbidez da água mede:',
    ['a quantidade de partículas suspensas na água', 'o teor de oxigênio dissolvido', 'a acidez da água', 'a presença de coliformes'], 11);
  addT('QI1-AMB', "Coliformes fecais: indicam a presença de esgoto ou fezes. Esses microrganismos tornam a água imprópria para consumo.", 'Segundo o quadro, a presença de coliformes fecais indica:',
    ['esgoto ou fezes, o que torna a água imprópria para consumo', 'excesso de oxigênio na água', 'água com pH neutro', 'alta qualidade da água'], 11);
  add('QI1-AMB', 'em1_qui_queimadas', "Segundo o esquema, o aumento do CO₂ lançado pelas queimadas na atmosfera:",
    ["intensifica o efeito estufa e o aquecimento global", "diminui a temperatura global", "reduz o aquecimento global", "aumenta a camada de ozônio"], 11);
  add('QI1-AMB', 'em1_qui_queimadas', "Segundo o esquema, a piora da qualidade do ar causada pelas queimadas aumenta o risco de:",
    ["doenças respiratórias e alergias", "osteoporose", "diabetes", "miopia"], 11);
  add('QI1-AMB', 'em1_qui_queimadas', "Segundo o esquema, nos ciclos biogeoquímicos as queimadas provocam:",
    ["extração de nutrientes do solo, que podem ser lixiviados pelas chuvas", "aumento da fertilidade do solo", "maior absorção de CO₂", "aumento da biodiversidade"], 11);
  add('QI1-AMB', null, 'Em uma estação de tratamento de água, as etapas são, nesta ordem: coagulação, decantação, filtração, desinfecção e fluoretação. A etapa em que se retira grande parte dos sólidos suspensos que deixam a água turva é a:',
    ['decantação', 'coagulação', 'desinfecção', 'fluoretação'], 12);
  addT('QI1-AMB', "Rio Bela Vista. Nitrato: resultado 15 mg/L, referência máx. 10 mg/L. Oxigênio dissolvido: resultado 3 mg/L, referência mín. 5 mg/L. Coliformes fecais: resultado presentes, referência ausentes.", 'Com base nos dados do quadro, a água do Rio Bela Vista:',
    ['não está adequada para consumo: nitrato e coliformes acima do referencial e oxigênio abaixo do mínimo', 'está adequada para consumo', 'tem nitrato abaixo do máximo permitido', 'tem oxigênio dissolvido acima do mínimo'], 11);
  addT('QI1-AMB', "Cidade litorânea de SP, semana com muito trânsito (resultado / referência de boa qualidade). MP10: 85 µg/m³ / até 50 µg/m³. Ozônio (O₃): 140 µg/m³ / até 100 µg/m³. CO: 10 ppm / até 9 ppm. NO₂: 210 µg/m³ / até 200 µg/m³. SO₂: 35 µg/m³ / até 20 µg/m³.", 'Comparando os resultados com as referências do quadro, a qualidade do ar nessa semana está:',
    ['ruim, pois todos os poluentes superam o limite de referência', 'boa, pois todos estão abaixo do limite', 'boa, pois só o MP10 passa do limite', 'impossível de avaliar'], 11);
  add('QI1-AMB', null, 'Na obtenção e no consumo do etanol como biocombustível, há transformação química quando:',
    ['a palha de cana e o etanol são queimados como fonte de energia', 'o etanol é armazenado em tanques de aço inoxidável', 'a palha de cana é exposta ao sol para secagem', 'o material particulado é espalhado pelo ar'], 11);
  addT('QI1-AMB', "Segundo o Unicef, a irrigação corresponde a 73% do consumo de água, 21% vão para a indústria e apenas 6% destinam-se ao consumo doméstico.", 'De acordo com o texto, a maior parte da água consumida no mundo é destinada à:',
    ['irrigação', 'indústria', 'geração de energia', 'uso doméstico'], 12);
})();
