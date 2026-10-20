/* Projeto de Vida – 6º e 8º anos – Volume 4 (4º bimestre)
   A PRIMEIRA alternativa é sempre a correta; o site embaralha ao gerar a prova. */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Projeto de Vida';
  B.hab.push(
    { id: 'PV6-IDENT', ano: 6, disc: D, cod: '', tit: 'Identidade, qualidades e atitudes',
      desc: 'Reconhecer que a identidade se constrói com a prática: transformar qualidades em atitudes e planejar como cultivá-las.', aulas: 'Aula 1' },
    { id: 'PV6-AUT', ano: 6, disc: D, cod: '', tit: 'Autenticidade e respeito',
      desc: 'Expressar-se com autenticidade e respeito, preservando limites e cuidando das relações.', aulas: 'Aula 2' },
    { id: 'PV6-DEC', ano: 6, disc: D, cod: '', tit: 'Decisões, consequências e escuta',
      desc: 'Analisar decisões e suas consequências no curto e no longo prazo e revisar escolhas ouvindo outras vozes.', aulas: 'Aulas 3 e 4' },
    { id: 'PV6-EVOL', ano: 6, disc: D, cod: '', tit: 'Acompanhar a própria evolução',
      desc: 'Identificar sinais de progresso, recomeçar quando falhar e organizar um Guia de Crescimento.', aulas: 'Aulas 5 e 6' },
    { id: 'PV8-EMP', ano: 8, disc: D, cod: '', tit: 'Estudante do Ensino Médio e empatia',
      desc: 'Refletir sobre o estudante que se deseja ser no Ensino Médio e desenvolver empatia por meio do reconhecimento das emoções.', aulas: 'Aulas 1 e 2' },
    { id: 'PV8-ETICA', ano: 8, disc: D, cod: '', tit: 'Decidir com ética',
      desc: 'Comparar decisões por conveniência e decisões éticas, considerando valores e consequências para as pessoas envolvidas.', aulas: 'Aula 3' },
    { id: 'PV8-FRUST', ano: 8, disc: D, cod: '', tit: 'Lidar com frustrações e imprevistos',
      desc: 'Identificar obstáculo, impulso e alternativas diante de algo que não saiu como planejado.', aulas: 'Aula 4' },
    { id: 'PV8-COL', ano: 8, disc: D, cod: '', tit: 'Pequenas ações e impactos coletivos',
      desc: 'Perceber como pequenas ações afetam outras pessoas, inspiram novas atitudes e geram impactos coletivos.', aulas: 'Aulas 5 e 6' }
  );
  const add = (hab, ano, img, stem, alts, aula) => B.q.push({ hab, ano, disc: D, img, stem, alts, aula });

  /* ---------- 6º ano ---------- */
  add('PV6-IDENT', 6, null, 'Segundo o livro, para que uma qualidade passe a fazer parte de quem somos, é preciso:',
    ['transformá-la em atitude e praticá-la', 'apenas desejá-la', 'esperar que outras pessoas a reconheçam', 'copiá-la de um colega sem refletir'], 1);
  add('PV6-IDENT', 6, null, 'Sobre a identidade, o livro afirma que ela:',
    ['se constrói com a prática', 'é definida apenas pela influência dos outros', 'não pode mudar', 'depende somente da sorte'], 1);
  add('PV6-IDENT', 6, null, 'Ao escolher uma qualidade que você quer cultivar, uma boa estratégia é:',
    ['pensar que atitude mostra essa qualidade na escola e em que situação praticá-la', 'esperar que a qualidade apareça sozinha', 'escolher a qualidade que ninguém admira', 'não planejar nada'], 1);
  add('PV6-IDENT', 6, null, 'Entre as qualidades que registrou, o livro propõe que você escolha uma para:',
    ['começar a praticar durante a semana', 'abandonar imediatamente', 'esconder dos colegas', 'esquecer até o próximo ano'], 1);
  add('PV6-IDENT', 6, null, 'Ao tentar agir de acordo com uma qualidade, é importante pensar em:',
    ['quais dificuldades podem aparecer e o que fazer para não desistir', 'como evitar qualquer esforço', 'como culpar os outros se não der certo', 'apenas nos resultados imediatos'], 1);
  add('PV6-IDENT', 6, null, 'Perceber que a identidade não se constrói apenas por influência, mas por escolhas conscientes, significa que:',
    ['cada pessoa pode decidir quais qualidades deseja desenvolver', 'ninguém decide quem é', 'a identidade é igual para todos', 'as escolhas não têm importância'], 1);

  add('PV6-AUT', 6, 'c6p_armandinho', 'Na tirinha do Armandinho, ele reage com sinceridade ao novo corte de cabelo da mãe. O livro sugere que ser autêntico:',
    ['não significa falar tudo o que pensamos, da forma como pensamos', 'é dizer sempre tudo sem pensar', 'é calar-se sempre', 'é concordar com tudo'], 2);
  add('PV6-AUT', 6, 'c6p_armandinho', 'Antes de falar, Armandinho poderia ter se perguntado:',
    ['o que vou dizer é necessário? Isso pode magoar? Existe outra maneira de dizer?', 'quem vai rir da minha fala?', 'como falar mais alto?', 'como mudar de assunto?'], 2);
  add('PV6-AUT', 6, 'c6p_sit1', 'Na situação “Isso não tá legal. O que eu posso dizer?”, a atitude mais adequada é:',
    ['falar de forma firme e respeitosa, preservando limites', 'responder com ofensas', 'ficar calado e aceitar tudo', 'ir embora sem conversar'], 2);
  add('PV6-AUT', 6, 'c6p_sit2', 'Para sugerir uma mudança sem parecer que está reclamando, uma boa estratégia é:',
    ['apresentar a sugestão com respeito e explicar o motivo', 'criticar o grupo', 'impor a mudança', 'ignorar o problema'], 2);
  add('PV6-AUT', 6, 'c6p_sit3', 'Em um trabalho em grupo com entrega na sexta, propor um plano para não se enrolar e sem ser excluído exige:',
    ['expressar-se com clareza e respeito, buscando um acordo com o grupo', 'fazer tudo sozinho sem avisar', 'esperar o último dia', 'discutir com os colegas'], 2);
  add('PV6-AUT', 6, 'c6p_armandinho', 'Ser autêntico, segundo o livro, significa:',
    ['agir de acordo com o que se pensa e sente, respeitando as pessoas', 'dizer o que vier à cabeça sem se importar', 'esconder sempre o que pensa', 'imitar o grupo'], 2);

  add('PV6-DEC', 6, 'c6p_domino', 'No “efeito dominó das escolhas”, uma decisão tomada no grupo:',
    ['produz um resultado imediato e cria novas situações para resolver depois', 'não tem nenhuma consequência', 'só afeta quem decidiu', 'termina sem efeitos'], 3);
  add('PV6-DEC', 6, 'c6p_domino', 'Se o líder do grupo conversa com o colega para saber se ele precisa de ajuda, essa atitude:',
    ['busca entender a dificuldade e pode evitar que o trabalho fique incompleto', 'piora o trabalho do grupo', 'não muda nada', 'prejudica o colega'], 3);
  add('PV6-DEC', 6, 'c6p_domino', 'Segundo o livro, decisões repetidas podem virar:',
    ['hábitos, que constroem resultados ao longo do tempo', 'apenas lembranças', 'regras da escola', 'sorte'], 3);
  add('PV6-DEC', 6, 'c6p_mindinho', 'A dica da tirinha do Mindinho é que, antes de tomar decisões, é importante:',
    ['ouvir diferentes pontos de vista, pois o cenário pode mudar nossa análise', 'decidir rapidamente sem ouvir ninguém', 'ignorar quem pensa diferente', 'copiar a decisão de outra pessoa'], 4);
  add('PV6-DEC', 6, 'c6p_mindinho', 'Ao conversar com um colega sobre uma decisão, é possível:',
    ['perceber consequências novas e confirmar ou ajustar a decisão', 'ter certeza de que a decisão está sempre errada', 'esquecer o assunto', 'decidir pelo colega'], 4);
  add('PV6-DEC', 6, null, 'Uma pergunta útil para ampliar a reflexão de um colega sobre uma decisão é:',
    ['quem mais pode ser afetado por essa atitude?', 'por que você não faz como eu?', 'quem vai ganhar?', 'isso é muito difícil, não é?'], 4);
  add('PV6-DEC', 6, 'c6p_domino', 'Depois de saber uma informação nova, o grupo deve decidir entre:',
    ['manter, ajustar ou mudar a escolha', 'apenas manter, sempre', 'apenas desistir', 'apagar as consequências'], 3);

  add('PV6-EVOL', 6, null, 'Segundo o livro, acompanhar o próprio progresso ajuda a:',
    ['perceber o que já está melhorando e o que ainda precisa de atenção', 'esconder os erros', 'comparar-se com todos os colegas', 'abandonar os objetivos'], 5);
  add('PV6-EVOL', 6, null, 'Pequenas atitudes, ao longo do tempo, podem:',
    ['provocar mudanças importantes', 'não gerar nenhum efeito', 'valer apenas para os adultos', 'ser percebidas só pelos colegas'], 5);
  add('PV6-EVOL', 6, null, 'Quando percebemos que não estamos conseguindo manter uma atitude, o mais adequado é:',
    ['ajustar a rota e recomeçar', 'desistir definitivamente', 'esconder o problema', 'culpar outra pessoa'], 5);
  add('PV6-EVOL', 6, null, 'No Guia de Crescimento, “Quem pode me apoiar” serve para:',
    ['lembrar quais pessoas da família e da escola podem ajudar a lembrar, ajustar e continuar', 'listar quem deve ser criticado', 'indicar quem vai fazer a tarefa por mim', 'registrar quem atrapalha'], 6);
  add('PV6-EVOL', 6, null, 'Receber o feedback de um colega sobre o seu percurso ajuda a:',
    ['reconhecer avanços que você ainda não tinha percebido', 'esconder o que você fez', 'competir com o colega', 'evitar qualquer mudança'], 6);
  add('PV6-EVOL', 6, null, 'Um “combinado” no Guia de Crescimento deve ser:',
    ['simples e possível de cumprir', 'muito difícil para exigir esforço extremo', 'igual para todos, sem personalização', 'secreto, sem registro'], 6);

  /* ---------- 8º ano ---------- */
  add('PV8-EMP', 8, null, 'Segundo o livro, o estudante que você será no Ensino Médio é definido:',
    ['pelas escolhas e práticas que desenvolve ao longo do tempo, e não só pelo que deseja alcançar', 'apenas pelos sonhos que imagina', 'somente pelas notas', 'pela escolha dos professores'], 1);
  add('PV8-EMP', 8, null, 'Sobre habilidades e hábitos, o livro afirma que:',
    ['habilidades podem ser aprendidas e hábitos transformam intenções em ações concretas', 'habilidades são dons e não mudam', 'hábitos não influenciam o futuro', 'intenções bastam para gerar resultados'], 1);
  add('PV8-EMP', 8, null, 'Na atividade do estudante do Ensino Médio, as “mãos” representam:',
    ['duas habilidades que ele desenvolve', 'dois sonhos', 'dois hábitos', 'a característica marcante'], 1);
  add('PV8-EMP', 8, null, 'Na mesma atividade, os “pés” representam:',
    ['dois hábitos que sustentam o estudante no dia a dia', 'o sonho ou objetivo', 'a cabeça e o coração', 'as habilidades'], 1);
  add('PV8-EMP', 8, null, 'Reconhecer emoções e lidar com elas é:',
    ['uma habilidade que pode ser desenvolvida', 'algo com que só se nasce', 'inútil nas relações escolares', 'importante só para adultos'], 2);
  add('PV8-EMP', 8, null, 'Na atividade “Emoção no rosto”, o objetivo é:',
    ['identificar emoções por expressões faciais e pensar em formas empáticas de agir', 'esconder as emoções', 'imitar o colega sem pensar', 'evitar o contato com o grupo'], 2);
  add('PV8-EMP', 8, null, 'Agir de forma empática ajuda a lidar com situações do dia a dia porque:',
    ['melhora a convivência, a resolução de conflitos e o respeito nas conversas', 'evita qualquer conflito para sempre', 'faz com que todos concordem', 'dispensa a conversa'], 2);

  add('PV8-ETICA', 8, 'c8p_sit1', 'Na situação “Uma ajudinha suspeita”, copiar um texto gerado por um aplicativo:',
    ['traz ganho imediato, mas a pessoa não entende de verdade e pode ser exposta depois', 'garante que ela aprenda o conteúdo', 'é uma atitude ética, pois ninguém percebe', 'resolve o problema sem consequências'], 3);
  add('PV8-ETICA', 8, 'c8p_sit2', 'Na situação “Todo mundo faz isso…”, o argumento de que todo mundo faz isso:',
    ['não justifica a escolha, pois a prova serve para mostrar o que se sabe de verdade', 'justifica a escolha', 'torna a cola um direito', 'mostra que colar é ético'], 3);
  add('PV8-ETICA', 8, 'c8p_sit3', 'Na situação “Opinião diferente”, abandonar um colega que pensa diferente, sem ele ter desrespeitado ninguém, é:',
    ['agir por pressão do grupo, sem considerar o respeito às diferenças', 'uma atitude ética obrigatória', 'a única saída possível', 'uma forma de respeitar o outro'], 3);
  add('PV8-ETICA', 8, 'c8p_sit4', 'Na situação “Entre avisar e improvisar”, uma decisão ética seria:',
    ['avisar o grupo sobre a dificuldade e pedir ajuda', 'entregar o trabalho feito às pressas sem avisar', 'esconder o problema', 'culpar o grupo'], 3);
  add('PV8-ETICA', 8, null, 'Na “balança ética”, de um lado ficam as decisões por conveniência, que pensam:',
    ['no ganho imediato', 'nos valores e na proteção das pessoas', 'nas consequências para todos', 'na confiança do grupo'], 3);
  add('PV8-ETICA', 8, null, 'Decidir com ética ajuda a:',
    ['proteger as pessoas envolvidas e prever consequências antes de agir', 'ganhar vantagem a qualquer custo', 'evitar qualquer decisão', 'agradar o grupo sempre'], 3);
  add('PV8-ETICA', 8, null, 'Uma boa pergunta para refletir sobre decisões éticas deve:',
    ['ser curta, direta e relacionar decisões às suas consequências, sem aceitar respostas simples como “sim” ou “não”', 'ter resposta pronta', 'ser respondida só com “sim” ou “não”', 'ser longa e confusa'], 3);

  add('PV8-FRUST', 8, 'c8p_tirinha', 'Na tirinha “Virando o jogo”, o estudante estudou bastante e foi mal na prova. O “obstáculo” é:',
    ['o que atrapalhou para atingir a meta', 'o impulso de desistir', 'a alternativa melhor', 'o resultado perfeito'], 4);
  add('PV8-FRUST', 8, 'c8p_tirinha', 'Na tirinha, o “impulso” é:',
    ['o que o estudante quase faz na hora, sem pensar (como desistir de perguntar)', 'a meta que ele queria alcançar', 'a alternativa planejada', 'o apoio da professora'], 4);
  add('PV8-FRUST', 8, 'c8p_tirinha', 'Uma alternativa melhor do que agir no impulso, depois de uma frustração, seria:',
    ['procurar a professora para entender os erros e planejar como melhorar', 'desistir de estudar', 'esconder a nota', 'culpar os colegas'], 4);
  add('PV8-FRUST', 8, null, 'Lidar com frustrações e imprevistos é uma habilidade que:',
    ['pode ser desenvolvida e ajuda a seguir em direção às metas', 'não pode ser aprendida', 'só serve para adultos', 'impede de ter metas'], 4);
  add('PV8-FRUST', 8, null, 'Uma frase para “virar o jogo” deve ser:',
    ['simples e direta, ajudando a reconhecer a frustração e a seguir em frente', 'longa e cheia de críticas', 'uma ordem para desistir', 'uma culpa para outra pessoa'], 4);
  add('PV8-FRUST', 8, null, 'Ao completar a história da tirinha com mais três quadrinhos, o grupo precisa mostrar:',
    ['o obstáculo, o impulso e as alternativas', 'apenas o final feliz', 'apenas o erro', 'somente a nota'], 4);

  add('PV8-COL', 8, null, 'Segundo o livro, pequenas ações podem causar mudanças maiores quando:',
    ['afetam outras pessoas e inspiram novas atitudes', 'são feitas em segredo', 'não são percebidas', 'não mudam a rotina'], 5);
  add('PV8-COL', 8, null, 'Na atividade “Ondas de impacto”, o centro do alvo representa:',
    ['o contexto da situação', 'as novas atitudes inspiradas', 'quem é impactado', 'as mudanças na rotina'], 5);
  add('PV8-COL', 8, null, 'Na atividade “Ondas de impacto”, o segundo círculo indica:',
    ['quem é impactado pela ação', 'o contexto da situação', 'as novas atitudes', 'as mudanças na rotina'], 5);
  add('PV8-COL', 8, null, 'A instalação “Caminhos do Futuro” reúne:',
    ['as produções dos estudantes feitas ao longo do bimestre', 'apenas obras de artistas famosos', 'somente textos dos professores', 'projetos de outras escolas'], 6);
  add('PV8-COL', 8, null, 'Na montagem do painel da instalação, o grupo deve organizar as peças em:',
    ['começo, meio e fechamento', 'ordem aleatória', 'apenas uma coluna', 'sem título'], 6);
  add('PV8-COL', 8, null, 'Ao montar o painel, a peça central deve ficar:',
    ['no meio, com o título no topo e as demais peças ao redor', 'escondida no canto', 'sem destaque', 'fora do painel'], 6);
})();
