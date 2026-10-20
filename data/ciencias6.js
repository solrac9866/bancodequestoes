/* 6º ano – Ciências – Volume 4 (4º bimestre)
   Em cada questão a PRIMEIRA alternativa é a correta; o site embaralha na hora de gerar a prova. */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Ciências', A = 6;
  B.hab.push(
    { id: 'EF06CI06', ano: A, disc: D, cod: 'EF06CI06', tit: 'Organização do corpo humano em sistemas',
      desc: 'Concluir, com base em ilustrações e modelos, que os organismos são um arranjo de sistemas com diferentes níveis de organização (célula, tecido, órgão, sistema, organismo).', aulas: 'Aula 1' },
    { id: 'EF06CI07-SN', ano: A, disc: D, cod: 'EF06CI07', tit: 'Sistema nervoso: neurônios, SNC e SNP',
      desc: 'Justificar o papel do sistema nervoso na coordenação das ações motoras e sensoriais do corpo, com base em suas estruturas e funções.', aulas: 'Aulas 2 a 5 e 17' },
    { id: 'EF06CI07-SEN', ano: A, disc: D, cod: 'EF06CI07', tit: 'Sentidos: paladar, olfato, tato e audição',
      desc: 'Justificar o papel do sistema nervoso na coordenação das ações sensoriais, relacionando receptores sensoriais, nervos e cérebro.', aulas: 'Aulas 8 a 10' },
    { id: 'EF06CI08', ano: A, disc: D, cod: 'EF06CI08', tit: 'Sentido da visão',
      desc: 'Explicar a importância da visão (captação e interpretação das imagens) na interação do organismo com o meio e o funcionamento do olho humano.', aulas: 'Aulas 6 e 7' },
    { id: 'EF06CI09', ano: A, disc: D, cod: 'EF06CI09', tit: 'Sistema locomotor: ossos, músculos e movimento',
      desc: 'Deduzir que a estrutura, a sustentação e a movimentação resultam da interação entre os sistemas muscular, ósseo e nervoso.', aulas: 'Aulas 11 a 14 e 18' },
    { id: 'EF06CI10', ano: A, disc: D, cod: 'EF06CI10', tit: 'Drogas e sistema nervoso',
      desc: 'Explicar como o funcionamento do sistema nervoso pode ser afetado por substâncias psicoativas e discutir a prevenção.', aulas: 'Aulas 15 e 16' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });

  /* ---------- EF06CI06 ---------- */
  add('EF06CI06', 'c6_niveis', 'Na imagem, qual é a ordem correta dos níveis de organização do corpo humano, do menor para o maior?',
    ['Célula, tecido, órgão, sistema, organismo', 'Órgão, célula, sistema, tecido, organismo', 'Tecido, célula, órgão, organismo, sistema', 'Sistema, órgão, tecido, célula, organismo'], 1);
  add('EF06CI06', 'c6_niveis', 'De acordo com a imagem, um conjunto de tecidos organizados forma:',
    ['um órgão', 'uma célula', 'um sistema', 'um organismo'], 1);
  add('EF06CI06', 'c6_orgaos', 'O estômago, mostrado na imagem, faz parte de qual sistema do corpo humano?',
    ['Digestório', 'Respiratório', 'Circulatório', 'Nervoso'], 1);
  add('EF06CI06', 'c6_orgaos', 'Os pulmões, indicados na imagem, atuam em conjunto com outros órgãos e formam o sistema:',
    ['respiratório', 'digestório', 'esquelético', 'muscular'], 1);
  add('EF06CI06', 'c6_orgaos', 'O coração, um dos órgãos da imagem, é o principal órgão do sistema:',
    ['circulatório', 'nervoso', 'respiratório', 'digestório'], 1);
  add('EF06CI06', 'c6_sistemas', 'Entre os sistemas mostrados na imagem, qual sustenta o corpo e protege órgãos importantes?',
    ['Esquelético', 'Digestório', 'Respiratório', 'Circulatório'], 1);
  add('EF06CI06', 'c6_sistemas', 'Qual tecido controla e coordena as atividades do corpo, sendo o principal do sistema nervoso?',
    ['Nervoso', 'Epitelial', 'Conectivo', 'Muscular'], 1);
  add('EF06CI06', 'c6_sistemas', 'Qual sistema, mostrado na imagem, possibilita os movimentos do corpo?',
    ['Muscular', 'Circulatório', 'Digestório', 'Respiratório'], 1);
  add('EF06CI06', 'c6_niveis', 'Célula muscular, tecido muscular, coração, sistema circulatório e ser humano representam:',
    ['diferentes níveis de organização do corpo humano', 'apenas tipos diferentes de células', 'órgãos de um mesmo sistema', 'sistemas que funcionam isolados'], 1);
  add('EF06CI06', 'c6_sistemas', 'Sobre os sistemas do corpo humano mostrados na imagem, é correto afirmar que eles:',
    ['atuam de forma coordenada e mantêm o funcionamento do organismo', 'funcionam de modo totalmente independente', 'são formados por um único tipo de célula', 'existem apenas no nível dos órgãos'], 1);

  /* ---------- EF06CI07 – Sistema nervoso ---------- */
  const S = 'EF06CI07-SN';
  add(S, 'c6_sn', 'Segundo a imagem, quais órgãos formam o sistema nervoso?',
    ['Encéfalo, medula espinal, nervos e gânglios nervosos', 'Encéfalo, coração, nervos e pulmões', 'Cérebro, medula óssea, ossos e nervos', 'Encéfalo, estômago, músculos e gânglios'], 2);
  add(S, 'c6_neuronio', 'Na imagem, qual parte do neurônio recebe estímulos e sinais de outros neurônios?',
    ['Dendritos', 'Axônio', 'Terminal do axônio', 'Núcleo'], 3);
  add(S, 'c6_neuronio', 'Qual estrutura do neurônio, indicada na imagem, transmite os impulsos nervosos para outras células?',
    ['Axônio', 'Dendritos', 'Núcleo', 'Corpo celular'], 3);
  add(S, 'c6_sinapse1', 'A região de comunicação entre um neurônio e outra célula, indicada na imagem, é chamada de:',
    ['sinapse', 'dendrito', 'axônio', 'núcleo'], 3);
  add(S, 'c6_sinapse2', 'Na maioria das sinapses, a comunicação entre as células ocorre por meio de:',
    ['substâncias químicas chamadas neurotransmissores', 'fusão completa das duas células', 'troca de núcleos entre os neurônios', 'transporte de oxigênio pelo sangue'], 3);
  add(S, 'c6_rede', 'A rede de comunicação entre os neurônios, mostrada na imagem, permite:',
    ['a transmissão rápida de informações entre diferentes regiões do corpo', 'a produção de células do sangue', 'a sustentação dos músculos', 'a digestão dos alimentos'], 2);
  add(S, 'c6_reflexo', 'No esquema do reflexo patelar, qual estrutura do SNC coordena o ato reflexo?',
    ['Medula espinal', 'Cérebro', 'Gânglio nervoso', 'Nervo motor'], 4);
  add(S, 'c6_reflexo', 'O ato reflexo é importante para o organismo porque:',
    ['é uma resposta rápida e automática que ajuda a proteger o corpo', 'depende sempre de uma decisão consciente do cérebro', 'ocorre apenas durante o sono', 'é lento para evitar danos ao corpo'], 4);
  add(S, 'c6_snc_fluxo', 'De acordo com o esquema, o encéfalo é formado por:',
    ['cérebro, tronco encefálico e cerebelo', 'cérebro, medula espinal e nervos', 'nervos, gânglios e medula espinal', 'cerebelo, nervos e gânglios'], 4);
  add(S, 'c6_snc_fluxo', 'Segundo o esquema, a medula espinal é responsável por:',
    ['comunicar o encéfalo ao SNP e coordenar movimentos e reflexos', 'pensamento, memória e emoções', 'manutenção do equilíbrio', 'controle da respiração e dos batimentos cardíacos'], 4);
  add(S, 'c6_snp_acoes', 'No esquema, qual efeito é produzido pelo sistema nervoso SIMPÁTICO?',
    ['Aumenta a frequência cardíaca', 'Diminui a frequência cardíaca', 'Contrai as pupilas', 'Estimula a atividade digestiva'], 5);
  add(S, 'c6_snp_fluxo', 'Segundo o esquema, o sistema nervoso somático, parte motora do SNP, controla:',
    ['os movimentos voluntários dos músculos esqueléticos', 'os batimentos cardíacos', 'a digestão dos alimentos', 'a produção de saliva'], 5);
  add(S, 'c6_mapa_sn', 'De acordo com o esquema, o sistema nervoso periférico (SNP) é formado por:',
    ['nervos e gânglios nervosos', 'cérebro e medula espinal', 'cérebro e nervos', 'medula espinal e gânglios'], 17);

  /* ---------- EF06CI07 – Sentidos ---------- */
  const T = 'EF06CI07-SEN';
  add(T, 'c6_papilas', 'As papilas gustativas e os botões gustativos, mostrados na imagem, ficam principalmente na:',
    ['língua', 'pele', 'orelha', 'cavidade nasal'], 8);
  add(T, 'c6_papilas', 'Quais são os cinco sabores principais identificados pelos botões gustativos?',
    ['Doce, salgado, azedo, amargo e umami', 'Doce, salgado, quente, frio e duro', 'Doce, amargo, picante, cremoso e gelado', 'Salgado, azedo, picante, doce e macio'], 8);
  add(T, 'c6_olfato', 'Na imagem, as substâncias do aroma presentes no ar são percebidas por células localizadas:',
    ['na cavidade nasal', 'na língua', 'na garganta', 'na pele do rosto'], 8);
  add(T, 'c6_olfato', 'Sobre o olfato e o paladar, é correto afirmar que:',
    ['atuam de forma integrada na percepção dos sabores e aromas', 'funcionam de forma totalmente independente', 'o olfato percebe sabores e o paladar percebe cheiros', 'não têm ligação com o sistema nervoso'], 8);
  add(T, 'c6_receptores', 'Os receptores nervosos da pele permitem perceber:',
    ['toque, pressão, vibração, temperatura e dor', 'apenas cheiros', 'apenas sons', 'apenas a luz'], 9);
  add(T, 'c6_receptores', 'Segundo o esquema, os receptores que percebem a variação de temperatura e a dor são:',
    ['as terminações livres (nociceptores)', 'os táteis', 'os mecanorreceptores', 'as papilas gustativas'], 9);
  add(T, 'c6_receptores', 'Qual receptor da pele percebe pressão e vibração?',
    ['Mecanorreceptor', 'Terminação livre', 'Papila gustativa', 'Cóclea'], 9);
  add(T, 'c6_panela', 'Ao encostar na panela quente e retirar a mão rapidamente, o tato cumpre qual papel?',
    ['Perceber o perigo e proteger o corpo contra danos', 'Aumentar a temperatura da mão', 'Digerir o calor da panela', 'Produzir energia para o músculo'], 9);
  add(T, 'c6_tato_cerebro', 'Na imagem, para onde seguem as informações captadas pelos receptores táteis da pele?',
    ['Para o sistema nervoso central (cérebro)', 'Para o estômago', 'Para os ossos', 'Para o coração'], 9);
  add(T, 'c6_braile', 'O sistema braile, usado por pessoas com deficiência visual, depende principalmente de qual sentido?',
    ['Tato', 'Visão', 'Audição', 'Olfato'], 9);
  add(T, 'c6_ouvido', 'Na imagem, qual estrutura da orelha interna participa da audição, transformando vibrações em impulsos nervosos?',
    ['Cóclea', 'Pavilhão auditivo', 'Canal auditivo', 'Canais semicirculares'], 10);
  add(T, 'c6_ouvido', 'Qual parte da orelha externa capta as ondas sonoras e as direciona ao tímpano?',
    ['Pavilhão auditivo e canal auditivo', 'Cóclea e nervo coclear', 'Canais semicirculares', 'Aparelho vestibular'], 10);
  add(T, 'c6_vestibular', 'Os canais semicirculares, indicados na imagem, ajudam principalmente a:',
    ['manter o equilíbrio do corpo', 'perceber as cores', 'identificar os sabores', 'sentir os cheiros'], 10);
  add(T, 'c6_equilibrio', 'Ao ficar em um pé só, como na foto, qual estrutura informa ao cérebro a posição e os movimentos da cabeça?',
    ['O aparelho vestibular', 'As papilas gustativas', 'A retina', 'Os receptores táteis'], 10);

  /* ---------- EF06CI08 – Visão ---------- */
  add('EF06CI08', 'c6_olho', 'Na imagem, qual estrutura do olho é uma camada sensível à luz, onde a imagem se forma?',
    ['Retina', 'Córnea', 'Pupila', 'Esclera'], 6);
  add('EF06CI08', 'c6_olho', 'Qual estrutura envia os sinais elétricos da retina ao cérebro?',
    ['Nervo óptico', 'Córnea', 'Cristalino', 'Íris'], 6);
  add('EF06CI08', 'c6_olho', 'O cristalino, indicado na imagem, funciona como:',
    ['uma lente que ajuda a direcionar a luz', 'o músculo que movimenta o olho', 'o orifício por onde a luz entra', 'a camada branca que reveste o olho'], 6);
  add('EF06CI08', 'c6_olho', 'Na parte externa do olho, a pupila é:',
    ['o orifício central por onde a luz entra', 'a parte colorida do olho', 'a camada branca externa', 'a lente do olho'], 6);
  add('EF06CI08', 'c6_olho_prat', 'Na imagem, a imagem formada na retina é invertida porque:',
    ['a luz muda de direção ao passar pela córnea e pelo cristalino', 'a retina vira a imagem de cabeça para baixo', 'o nervo óptico inverte a luz', 'a pupila está fechada'], 6);
  add('EF06CI08', 'c6_olho_prat', 'Onde os sinais elétricos vindos da retina são interpretados e a imagem é percebida na posição correta?',
    ['No cérebro', 'Na retina', 'Na córnea', 'Na pupila'], 6);
  add('EF06CI08', 'c6_luz', 'Na imagem, o fenômeno em que a luz retorna após atingir uma superfície, como num espelho, chama-se:',
    ['reflexão', 'absorção', 'dispersão', 'eletrização'], 6);
  add('EF06CI08', 'c6_luz', 'A absorção da luz por um objeto pode:',
    ['transformar parte da luz em calor e aquecer o objeto', 'criar nova luz dentro do objeto', 'tornar o objeto transparente', 'resfriar o objeto'], 6);
  add('EF06CI08', 'c6_luz', 'Um objeto verde é iluminado apenas por luz vermelha. Considerando a absorção da luz, ele parecerá:',
    ['preto', 'verde', 'amarelo', 'branco'], 6);
  add('EF06CI08', 'c6_espectro', 'No espectro de luz, a faixa da luz visível fica entre:',
    ['o ultravioleta e o infravermelho', 'apenas na região do ultravioleta', 'depois da faixa do infravermelho', 'antes da faixa do ultravioleta'], 6);
  add('EF06CI08', 'c6_tab_rgb', 'As células dos olhos captam principalmente três cores de luz. Quais são elas?',
    ['Vermelho, verde e azul', 'Amarelo, azul e vermelho', 'Verde, amarelo e laranja', 'Branco, preto e cinza'], 7);
  add('EF06CI08', 'c6_tab_rgb', 'No simulador, ao combinar luz vermelha, verde e azul, a cor percebida é:',
    ['branca', 'preta', 'marrom', 'roxa'], 7);
  add('EF06CI08', 'c6_phet', 'No simulador PhET, a lâmpada policromática (branca) emite:',
    ['várias cores de luz combinadas', 'apenas uma cor de luz', 'somente luz amarela', 'nenhuma luz'], 7);

  /* ---------- EF06CI09 – Locomotor ---------- */
  add('EF06CI09', 'c6_esqueleto', 'Na imagem, o esqueleto axial inclui:',
    ['crânio, coluna vertebral, costelas e esterno', 'ossos dos braços e das pernas', 'apenas o crânio', 'as cinturas escapular e pélvica'], 11);
  add('EF06CI09', 'c6_esqueleto', 'O esqueleto apendicular é formado:',
    ['pelos ossos dos braços e das pernas e pelas cinturas escapular e pélvica', 'pelo crânio e pela coluna vertebral', 'pelas costelas e pelo esterno', 'apenas pelos ossos das mãos'], 11);
  add('EF06CI09', 'c6_esq2', 'Quantos ossos, em média, formam o esqueleto de uma pessoa adulta?',
    ['206', '106', '306', '260'], 18);
  add('EF06CI09', 'c6_esq2', 'Qual das alternativas NÃO é função do sistema esquelético?',
    ['Digerir os alimentos', 'Sustentar o corpo', 'Proteger órgãos internos', 'Produzir células do sangue'], 11);
  add('EF06CI09', 'c6_esqueleto', 'Qual é a função das cartilagens no sistema esquelético?',
    ['Reduzir o atrito entre os ossos e absorver impactos', 'Produzir hormônios', 'Contrair e relaxar para mover o corpo', 'Transportar o sangue'], 11);
  add('EF06CI09', 'c6_musculos', 'Qual tipo de músculo possibilita movimentos voluntários, como caminhar e correr?',
    ['Estriado esquelético', 'Liso', 'Estriado cardíaco', 'Nenhum dos três'], 12);
  add('EF06CI09', 'c6_musculos', 'O músculo cardíaco, mostrado na imagem, é responsável por movimentos:',
    ['involuntários, fazendo o coração bater', 'voluntários, que controlamos conscientemente', 'apenas dos ossos', 'do estômago e dos intestinos'], 12);
  add('EF06CI09', 'c6_musc2', 'Qual músculo é encontrado nas paredes de órgãos internos, como o estômago e os intestinos?',
    ['Liso', 'Estriado esquelético', 'Cardíaco', 'Nenhum'], 18);
  add('EF06CI09', 'c6_fluxo_mov', 'Segundo o fluxograma, são exemplos de movimentos voluntários:',
    ['caminhar, falar e escrever', 'batimentos cardíacos e movimentos peristálticos', 'digestão e batimentos do coração', 'movimentos do coração e dos intestinos'], 12);
  add('EF06CI09', 'c6_braco', 'A imagem mostra o músculo do braço realizando o movimento indicado pela seta. Esse movimento é:',
    ['uma contração, e é voluntário', 'um relaxamento, e é voluntário', 'uma contração, e é involuntário', 'um relaxamento, e é involuntário'], 12);
  add('EF06CI09', 'c6_neuromusc', 'Na imagem, quais estruturas do neurônio passam o sinal até a fibra muscular?',
    ['Os axônios', 'Os dendritos', 'Os tendões', 'As veias'], 18);
  add('EF06CI09', 'c6_neuromusc', 'O controle dos movimentos é feito pelo sistema:',
    ['nervoso, que envia sinais do cérebro aos músculos', 'digestório, que produz energia extra', 'esquelético, sozinho', 'respiratório, que move os ossos'], 18);
  add('EF06CI09', 'c6_guias', 'No modelo de mão de papelão, o barbante que passa pelos canudinhos representa:',
    ['os tendões', 'os ossos', 'os nervos', 'os vasos sanguíneos'], 14);
  add('EF06CI09', 'c6_marcacao', 'Na construção do modelo de mão, as marcações feitas com a régua indicam:',
    ['as articulações dos dedos', 'os músculos da palma', 'os nervos da mão', 'a pele do punho'], 13);
  add('EF06CI09', 'c6_modelo_final', 'Qual é a principal função de uma prótese para pessoas com deficiência?',
    ['Ajudar nas atividades do dia a dia, dando mais autonomia', 'Apenas melhorar a aparência', 'Garantir que todos tenham a mesma experiência de uso', 'Substituir o membro sem nenhuma adaptação'], 14);

  /* ---------- EF06CI10 – Drogas ---------- */
  add('EF06CI10', 'c6_drogas', 'Segundo o esquema, as drogas estimulantes:',
    ['aumentam a atividade do sistema nervoso central', 'diminuem a atividade do sistema nervoso central', 'alteram a percepção da realidade', 'não atuam no sistema nervoso'], 15);
  add('EF06CI10', 'c6_drogas', 'As drogas depressoras, como o álcool, provocam:',
    ['diminuição da atividade do sistema nervoso central, com relaxamento e sonolência', 'agitação e dificuldade para dormir', 'aumento do estado de alerta', 'melhora dos reflexos'], 15);
  add('EF06CI10', 'c6_drogas', 'As drogas perturbadoras (alucinógenas):',
    ['alteram a percepção da realidade', 'diminuem os reflexos e a atenção', 'aceleram o sistema nervoso para deixar o corpo alerta', 'não têm efeito no cérebro'], 15);
  add('EF06CI10', 'c6_drogas', 'As drogas psicotrópicas são substâncias que:',
    ['modificam o funcionamento do sistema nervoso central', 'atuam apenas nos ossos', 'não afetam emoções e comportamentos', 'melhoram a digestão'], 15);
  add('EF06CI10', 'c6_drogas', 'Um dos riscos do uso de drogas para a saúde é:',
    ['dependência, prejuízos cognitivos e complicações físicas graves', 'aumento permanente da memória', 'fortalecimento dos reflexos', 'melhora do sono em qualquer situação'], 15);
  add('EF06CI10', 'c6_marina', 'Ao consumir bebidas com cafeína, Marina esperava obter qual efeito no sistema nervoso central?',
    ['Aumento da atividade e do estado de alerta', 'Diminuição da atividade e mais sono', 'Alucinações', 'Perda dos reflexos'], 15);
  add('EF06CI10', 'c6_marina', 'Qual atitude pode ajudar Marina a evitar a insônia?',
    ['Evitar bebidas com cafeína perto da hora de dormir', 'Tomar mais café à noite', 'Beber mais refrigerante antes de deitar', 'Dormir menos para trabalhar mais'], 15);
  add('EF06CI10', 'c6_debate', 'A prevenção ao uso de drogas depende de:',
    ['ações coletivas de escolas, famílias, comunidades e governo', 'responsabilidade de uma única pessoa', 'apenas punições severas', 'ignorar o problema'], 16);
  add('EF06CI10', 'c6_debate', 'Qual é uma abordagem eficaz para lidar com o uso de drogas na sociedade?',
    ['Acolhimento e suporte psicológico para a recuperação e a reinserção social', 'Excluir do convívio social quem usa drogas', 'Investir apenas em punições', 'Tratar o tema como se não fosse questão social'], 16);
  add('EF06CI10', 'c6_debate', 'Campanhas de conscientização e debates na escola servem para:',
    ['informar sobre os riscos e promover um ambiente de apoio e acolhimento', 'estimular o consumo de drogas', 'esconder o assunto dos estudantes', 'substituir o atendimento de saúde'], 16);
  add('EF06CI10', 'c6_drogas', 'Quanto à origem, as drogas podem ser:',
    ['naturais ou produzidas em laboratório', 'somente naturais', 'somente produzidas em laboratório', 'sempre inofensivas'], 15);
})();
