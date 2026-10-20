/* 8º ano – Língua Inglesa – Volume 4 (4º bimestre)
   A PRIMEIRA alternativa é sempre a correta; o site embaralha ao gerar a prova. */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Língua Inglesa', A = 8;
  B.hab.push(
    { id: 'EN8-COMP', ano: A, disc: D, cod: '', tit: 'Comparative adjectives (regular)',
      desc: 'Comparar duas pessoas, coisas ou situações usando adjetivos curtos (-er than) e longos (more … than).', aulas: 'Aulas 1 e 3' },
    { id: 'EN8-IRREG', ano: A, disc: D, cod: '', tit: 'Good/bad: better and worse; expressões comparativas',
      desc: 'Usar os comparativos irregulares (better, worse) e reconhecer expressões que usam o comparativo.', aulas: 'Aulas 3 e 7' },
    { id: 'EN8-SUP', ano: A, disc: D, cod: '', tit: 'Superlative adjectives',
      desc: 'Destacar um elemento em um grupo usando o superlativo (the …-est / the most …; the best, the worst).', aulas: 'Aulas 5 e 7' },
    { id: 'EN8-NAR', ano: A, disc: D, cod: '', tit: 'Narrative texts and fables',
      desc: 'Compreender textos narrativos e fábulas, seus elementos (narrador, personagens, enredo, cenário) e a moral.', aulas: 'Aulas 9 e 11' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });

  /* ---------- Comparative (regular) ---------- */
  const C = 'EN8-COMP';
  add(C, 'c8i_resumo1', 'According to the summary, how do we form the comparative of short adjectives?',
    ['adjective + -er + than', 'more + adjective + than', 'the + adjective + -est', 'adjective + -ing'], 1);
  add(C, 'c8i_resumo1', 'According to the summary, how do we form the comparative of long adjectives?',
    ['more + adjective + than', 'adjective + -er + than', 'the most + adjective', 'adjective + -est'], 1);
  add(C, 'c8i_resumo1', 'What is the comparative of “friendly” (short adjective ending in -y)?',
    ['friendlier', 'friendlyer', 'more friendly than', 'friendliest'], 1);
  add(C, 'c8i_resumo1', 'What is the comparative of “hot” (consonant-vowel-consonant)?',
    ['hotter', 'hoter', 'more hot', 'hottest'], 1);
  add(C, 'c8i_resumo1', 'What is the comparative of “big”?',
    ['bigger', 'biger', 'more big', 'biggest'], 1);
  add(C, 'c8i_words1', 'Complete: “Robots are ___ than humans at calculations.” (fast)',
    ['faster', 'more fast', 'fastest', 'fastly'], 1);
  add(C, 'c8i_words1', 'Complete: “Humans are ___ than robots.” (creative)',
    ['more creative', 'creativer', 'the most creative', 'creative'], 1);
  add(C, 'c8i_words1', 'Complete: “Robots are ___ than humans when doing repetitive tasks.” (accurate)',
    ['more accurate', 'accurater', 'the most accurate', 'accuratest'], 1);
  add(C, 'c8i_words1', 'Which sentence is correct?',
    ['This book is more interesting than the other one.', 'This book is interestinger than the other one.', 'This book is more interesting that the other one.', 'This book is most interesting than the other one.'], 1);
  add(C, 'c8i_words1', 'Complete: “My little brother is ___ than me.” (short)',
    ['shorter', 'more short', 'shortest', 'shorter then'], 1);
  add(C, 'c8i_words1', 'Complete: “That movie was ___ than I expected.” (funny)',
    ['funnier', 'more funny', 'funniest', 'funnyer'], 1);
  add(C, 'c8i_words1', 'Complete: “This math exercise is ___ than the last one.” (difficult)',
    ['more difficult', 'difficulter', 'most difficult', 'difficult'], 1);
  add(C, 'c8i_resumo1', 'Complete: “English is ___ than Math.” (easy)',
    ['easier', 'more easy', 'easiest', 'easyer'], 3);
  add(C, 'c8i_resumo1', 'Complete: “Airplanes are ___ than cars.” (fast)',
    ['faster', 'more fast', 'fastest', 'fastly'], 3);
  add(C, 'c8i_resumo1', 'Complete: “Today is ___ than yesterday.” (cold)',
    ['colder', 'more cold', 'coldest', 'colder that'], 3);

  /* ---------- Irregular and expressions ---------- */
  const I = 'EN8-IRREG';
  add(I, 'c8i_irreg', 'According to the summary, what is the comparative of “good”?',
    ['better', 'gooder', 'more good', 'best'], 3);
  add(I, 'c8i_irreg', 'According to the summary, what is the comparative of “bad”?',
    ['worse', 'badder', 'more bad', 'worst'], 3);
  add(I, 'c8i_irreg', 'Complete: “This book is ___ than that one.”',
    ['better', 'gooder', 'more good', 'the best'], 3);
  add(I, 'c8i_irreg', 'Complete: “My phone is ___ than yours.” (bad)',
    ['worse', 'badder', 'the worst', 'more bad'], 3);
  add(I, 'c8i_regirr', 'In the table, the comparative form of the irregular adjective “good” is:',
    ['better than', 'more good', 'the best', 'good than'], 7);
  add(I, 'c8i_regirr', 'In the table, the superlative form of the irregular adjective “bad” is:',
    ['the worst', 'worse than', 'the baddest', 'the most bad'], 7);
  add(I, 'c8i_words1', 'Complete: “My grade in English is ___ than my grade in Math.” (good)',
    ['better', 'gooder', 'more good', 'best'], 3);
  add(I, 'c8i_words1', 'Complete: “Humans are ___ than robots at understanding emotions.” (good)',
    ['better', 'more good', 'gooder', 'the best'], 3);
  add(I, 'c8i_words1', 'Complete: “This restaurant is ___ than the one we went to last week.” (bad)',
    ['worse', 'badder', 'the worst', 'more bad'], 3);
  add(I, 'c8i_words1', 'Complete: “His English is ___ mine.”',
    ['better than', 'the best', 'good than', 'more good'], 3);
  add(I, 'c8i_irreg', 'Which sentence is correct?',
    ['Today is better than yesterday.', 'Today is gooder than yesterday.', 'Today is the better yesterday.', 'Today is more good than yesterday.'], 3);
  add(I, 'c8i_regirr', 'In the table, long adjectives use which structure in the comparative?',
    ['more … than', '-er than', 'the …-est', 'the most …'], 7);

  /* ---------- Superlative ---------- */
  const S = 'EN8-SUP';
  add(S, 'c8i_resumo5', 'According to the summary, how do we form the superlative of short adjectives?',
    ['the + adjective + -est', 'more + adjective + than', 'adjective + -er + than', 'the more + adjective'], 5);
  add(S, 'c8i_resumo5', 'According to the summary, how do we form the superlative of long adjectives?',
    ['the most + adjective', 'the + adjective + -est', 'more + adjective + than', 'adjective + -er'], 5);
  add(S, 'c8i_resumo5', 'What is the superlative of “hot”?',
    ['the hottest', 'the hoter', 'the most hot', 'the hotest'], 5);
  add(S, 'c8i_resumo5', 'What is the superlative of “happy”?',
    ['the happiest', 'the happyest', 'the most happy', 'the happier'], 5);
  add(S, 'c8i_resumo5', 'What is the superlative of “funny”?',
    ['the funniest', 'the funnyest', 'the most funny', 'the funnier'], 5);
  add(S, 'c8i_gadgets', 'Complete: “This is ___ phone in the store.” (fast)',
    ['the fastest', 'the most fast', 'the faster', 'fastest'], 5);
  add(S, 'c8i_gadgets', 'Complete: “This is ___ laptop of all.” (expensive)',
    ['the most expensive', 'the expensivest', 'more expensive than', 'the expensive'], 5);
  add(S, 'c8i_gadgets', 'Complete: “My smartwatch is ___ in the class.” (popular)',
    ['the most popular', 'the popularest', 'more popular', 'the popular'], 5);
  add(S, 'c8i_gadgets', 'Complete: “My sister has ___ smartwatch I’ve ever seen.” (modern)',
    ['the most modern', 'the modernest', 'more modern', 'the modern'], 5);
  add(S, 'c8i_gadgets', 'Complete: “That is ___ speaker I’ve ever heard.” (loud)',
    ['the loudest', 'louder than', 'the most loud', 'the louder'], 7);
  add(S, 'c8i_regirr', 'Complete: “This is ___ day of my life!” (good)',
    ['the best', 'better than', 'the goodest', 'the most good'], 7);
  add(S, 'c8i_regirr', 'Complete: “That was ___ test I’ve ever taken.” (bad)',
    ['the worst', 'worse than', 'the baddest', 'the most bad'], 7);
  add(S, 'c8i_gadgets', 'Complete: “That was ___ question of the test.” (easy)',
    ['the easiest', 'the most easy', 'easier than', 'the easyest'], 5);
  add(S, 'c8i_gadgets', 'Complete: “Beatriz is ___ girl in the class.” (tall)',
    ['the tallest', 'the most tall', 'taller than', 'the taller'], 5);
  add(S, 'c8i_gadgets', 'Complete: “This is ___ book I read this year.” (interesting)',
    ['the most interesting', 'the interestingest', 'more interesting than', 'the interesting'], 5);

  /* ---------- Narrative texts ---------- */
  const N = 'EN8-NAR';
  add(N, 'c8i_resumo9', 'According to the summary, the “narrator” is:',
    ['the voice that tells the story', 'the sequence of events', 'the place where the story happens', 'the characters who act'], 9);
  add(N, 'c8i_resumo9', 'According to the summary, the “plot” is:',
    ['the sequence of events of the story', 'the voice that tells the story', 'the place and time of the story', 'the title of the story'], 9);
  add(N, 'c8i_resumo9', 'According to the summary, the “setting” indicates:',
    ['when and where the story happens', 'who tells the story', 'the characters’ names', 'the moral of the story'], 9);
  add(N, 'c8i_resumo9', 'According to the summary, “characters” are:',
    ['the beings (people, animals, personified objects) that take part in the story', 'the voice that tells the story', 'the lesson of the story', 'the title of the book'], 9);
  add(N, 'c8i_fable', 'According to the summary, a fable is:',
    ['a short story that teaches a moral lesson', 'a long novel about real events', 'a news report', 'a recipe'], 11);
  add(N, 'c8i_fable', 'Which two stories are called fables in the summary?',
    ['“The Tortoise and the Hare” and “The Boy Who Cried Wolf”', '“Little Red Riding Hood” and “The Three Little Pigs”', '“Goldilocks” and “The Three Bears”', '“The Ant and the Grasshopper” and “Cinderella”'], 11);
  add(N, 'c8i_fable', 'According to the summary, fables are not only for children because:',
    ['their themes deal with universal values, such as honesty, respect, cleverness and justice', 'adults do not read stories', 'they have no lessons', 'they are very long'], 11);
  add(N, 'c8i_tortoise', 'What did the tortoise say he could do?',
    ['Beat the hare in a race', 'Jump higher than the hare', 'Swim faster than the hare', 'Climb a mountain'], 9);
  add(N, 'c8i_tortoise', 'What did the hare do during the race?',
    ['He stopped to rest and went to sleep', 'He walked slowly all the time', 'He gave up at the start', 'He helped the tortoise'], 9);
  add(N, 'c8i_tortoise', 'Who crossed the finish line first?',
    ['The tortoise', 'The hare', 'Both at the same time', 'Nobody'], 9);
  add(N, 'c8i_tortoise', 'Which sentence is a line of the narrator in “The Tortoise and the Hare”?',
    ['On a sunny morning in the countryside, a hare saw a tortoise.', '“You are so slow!”', '“I may be slow, but I can beat you in a race.”', '“Let’s race!”'], 9);
  add(N, 'c8i_tortoise', 'What is the setting of “The Tortoise and the Hare”?',
    ['A sunny morning in the countryside', 'A rainy night in the city', 'A school classroom', 'A forest in winter'], 9);
  add(N, 'c8i_tortoise', 'The moral of “The Tortoise and the Hare” is:',
    ['slow and steady wins the race', 'fast always wins', 'never race', 'sleep before a race'], 11);
  add(N, 'c8i_wolf', 'In “The Boy Who Cried Wolf”, why did the boy shout “Wolf!”?',
    ['To amuse himself and get attention', 'Because a real wolf was there the first time', 'To warn the sheep', 'Because he was sleeping'], 11);
  add(N, 'c8i_wolf', 'What happened when a real wolf came?',
    ['The villagers thought it was another trick and no one came to help', 'The villagers came running to help', 'The boy fought the wolf alone and won', 'The wolf ran away by itself'], 11);
  add(N, 'c8i_wolf', 'Who are the characters of “The Boy Who Cried Wolf”?',
    ['The shepherd boy, the villagers and the wolf', 'The tortoise and the hare', 'The ant and the grasshopper', 'The boy and the three bears'], 11);
  add(N, 'c8i_wolf', 'The moral of “The Boy Who Cried Wolf” is:',
    ['don’t tell lies', 'always shout loudly', 'wolves are friendly', 'villagers never help'], 11);
  add(N, 'c8i_tales', 'Which of these famous stories appears among the pictures?',
    ['The Three Little Pigs', 'Cinderella', 'Snow White', 'Peter Pan'], 9);
  add(N, 'c8i_tales', 'Which of these stories is NOT in the pictures?',
    ['The Ugly Duckling', 'Little Red Riding Hood', 'Goldilocks and the Three Bears', 'The Tortoise and the Hare'], 9);
})();
