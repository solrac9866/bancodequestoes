/* 6º ano – Língua Inglesa – Volume 4 (4º bimestre)
   A PRIMEIRA alternativa é sempre a correta; o site embaralha ao gerar a prova. */
(function () {
  const B = (window.BANCO = window.BANCO || { hab: [], q: [] });
  const D = 'Língua Inglesa', A = 6;
  B.hab.push(
    { id: 'EN6-PC', ano: A, disc: D, cod: '', tit: 'Present continuous: describing pictures',
      desc: 'Descrever imagens e ações em andamento usando o present continuous (sujeito + am/is/are + verbo com -ing).', aulas: 'Aulas 1 e 2' },
    { id: 'EN6-CASA', ano: A, disc: D, cod: '', tit: 'Partes da casa, tipos de moradia e adjetivos',
      desc: 'Reconhecer vocabulário de cômodos, tipos de moradia e adjetivos usados para descrever casas.', aulas: 'Aulas 3 a 6' },
    { id: 'EN6-THERE', ano: A, disc: D, cod: '', tit: 'There is / there are (afirmativa, negativa e interrogativa)',
      desc: 'Descrever moradias e fazer perguntas sobre elas com there is/there are, there isn’t/there aren’t, is there/are there e how many.', aulas: 'Aulas 4 a 7' },
    { id: 'EN6-END', ano: A, disc: D, cod: '', tit: 'Endereços em inglês',
      desc: 'Compreender endereços, abreviações (St, Ave, Rd, Blvd, Ln, Dr) e as preposições in, on e at.', aulas: 'Aulas 8 a 10' },
    { id: 'EN6-NUM', ano: A, disc: D, cod: '', tit: 'Números de 100 a 10 000',
      desc: 'Ler e escrever por extenso números de centenas e milhares, como em números de casas.', aulas: 'Aulas 9 e 10' },
    { id: 'EN6-LING', ano: A, disc: D, cod: '', tit: 'Nacionalidades, línguas maternas e adicionais',
      desc: 'Identificar línguas maternas e adicionais, países onde o inglês é língua materna e a diversidade do inglês no mundo.', aulas: 'Aulas 11 e 12' }
  );
  const add = (hab, img, stem, alts, aula) => B.q.push({ hab, ano: A, disc: D, img, stem, alts, aula });

  /* ---------- Present continuous ---------- */
  const PC = 'EN6-PC';
  add(PC, 'c6i_walkdog', 'Look at the picture. Which sentence describes it correctly?',
    ['He is walking his dog.', 'He walking his dog.', 'He is walk his dog.', 'He are walking his dog.'], 1);
  add(PC, 'c6i_reading', 'Look at the picture. Choose the correct sentence.',
    ['She is reading a book.', 'She reading a book.', 'She are reading a book.', 'She is read a book.'], 1);
  add(PC, 'c6i_order', 'In the picture, the woman is looking at a menu. Which sentence is correct?',
    ['She is ordering food.', 'She are ordering food.', 'She ordering food.', 'She is order food.'], 1);
  add(PC, 'c6i_bike', 'Look at the picture. Which sentence describes it?',
    ['She is riding a bike.', 'She is ride a bike.', 'She are riding a bike.', 'She riding a bike.'], 2);
  add(PC, 'c6i_jog3', 'Look at the picture. Which sentence describes it?',
    ['They are jogging in the park.', 'They is jogging in the park.', 'They jogging in the park.', 'They are jog in the park.'], 2);
  add(PC, 'c6i_ex2', 'Complete the sentence in the picture: “He ___ to music in the park.” (listen)',
    ['is listening', 'are listening', 'listening', 'is listen'], 2);
  add(PC, 'c6i_ex2', 'Complete the sentence in the picture: “She ___ a bike in the park.” (ride)',
    ['is riding', 'are riding', 'is ride', 'riding'], 2);
  add(PC, 'c6i_resumo1', 'According to the summary, we use the present continuous to:',
    ['talk about actions happening at the moment of speaking', 'talk about past actions', 'talk about daily routines only', 'talk about future plans only'], 1);
  add(PC, 'c6i_resumo1', 'What is the structure of the present continuous?',
    ['subject + verb to be (am/is/are) + main verb with -ing', 'subject + have + verb with -ed', 'subject + verb in the infinitive + -s', 'to be + subject + verb in the past'], 1);
  add(PC, 'c6i_resumo2', 'According to the summary, short verbs ending in consonant-vowel-consonant double the last consonant. What is the -ing form of “stop”?',
    ['stopping', 'stoping', 'stopeing', 'stopt'], 2);
  add(PC, 'c6i_resumo2', 'What is the correct -ing form of “run”?',
    ['running', 'runing', 'runeing', 'runned'], 2);
  add(PC, 'c6i_acoes', 'In the pictures, “Listen to music” means:',
    ['ouvir música', 'ler um livro', 'fazer um piquenique', 'passear com o cachorro'], 1);
  add(PC, 'c6i_acoes', 'In the pictures, “Walk the dog” means:',
    ['passear com o cachorro', 'pedir comida', 'andar de bicicleta', 'correr no parque'], 1);

  /* ---------- Casa ---------- */
  const CS = 'EN6-CASA';
  add(CS, 'c6i_rooms', 'In the vocabulary list, what does “Laundry room” mean?',
    ['lavanderia', 'cozinha', 'garagem', 'sótão'], 3);
  add(CS, 'c6i_rooms', 'In the vocabulary list, “Attic” means:',
    ['sótão', 'porão', 'quintal dos fundos', 'corredor'], 3);
  add(CS, 'c6i_rooms', 'In the vocabulary list, “Basement” means:',
    ['porão', 'sótão', 'sala de jantar', 'garagem'], 3);
  add(CS, 'c6i_rooms', 'In the vocabulary list, “Dining room” means:',
    ['sala de jantar', 'sala de estar', 'banheiro', 'quarto'], 3);
  add(CS, 'c6i_housetext', 'According to the text, how many bedrooms are there in the green and white house?',
    ['Two', 'One', 'Three', 'Four'], 3);
  add(CS, 'c6i_housetext', 'According to the text, where is the green and white house located?',
    ['In a busy neighborhood of São Paulo', 'On a beach', 'In the countryside', 'In New York'], 3);
  add(CS, 'c6i_housetext', 'According to the text, what is there in the tiny front yard?',
    ['A few plants and a place to sit', 'A swimming pool', 'A garage with two cars', 'A big tree and a pond'], 3);
  add(CS, 'c6i_newwords', 'In the word list, what does “Balcony” mean?',
    ['sacada / varanda', 'jardim', 'armário embutido', 'piscina'], 4);
  add(CS, 'c6i_newwords', 'In the word list, “Guest room” means:',
    ['quarto de hóspedes', 'quarto de criança', 'sala de jantar', 'lavanderia'], 4);
  add(CS, 'c6i_newwords', 'In the word list, “Swimming pool” means:',
    ['piscina', 'jardim', 'sacada', 'garagem'], 4);
  add(CS, 'c6i_tipos', 'According to the list of house types, what is a “houseboat”?',
    ['uma casa flutuante', 'uma casa de campo', 'uma mansão', 'um chalé'], 6);
  add(CS, 'c6i_tipos', 'According to the list of house types, what is a “farmhouse”?',
    ['uma casa de campo', 'uma casa de praia', 'um sobrado', 'um apartamento'], 6);
  add(CS, 'c6i_tipos', 'According to the list of house types, what is a “beach house”?',
    ['uma casa de praia', 'uma casa de campo', 'um chalé', 'uma casa flutuante'], 6);
  add(CS, 'c6i_adjlist', 'In the list of adjectives, “cozy” means:',
    ['aconchegante', 'enorme', 'silencioso', 'moderno'], 6);
  add(CS, 'c6i_adjlist', 'In the list of adjectives, “spacious” means:',
    ['espaçoso(a)', 'pequeno(a)', 'velho(a)', 'tranquilo(a)'], 6);
  add(CS, 'c6i_dreamtext', 'According to the text, what type of house is the writer’s dream house?',
    ['A beach house', 'A cottage', 'A houseboat', 'A mansion'], 6);
  add(CS, 'c6i_dreamtext', 'According to the text, how is the living room?',
    ['Spacious, with a big TV and comfortable sofas', 'Small and dark', 'Very old and quiet', 'Without a TV'], 6);

  /* ---------- There is / there are ---------- */
  const TH = 'EN6-THERE';
  add(TH, 'c6i_thereis', 'Complete: “There ___ two bedrooms in my house.”',
    ['are', 'is', 'isn’t', 'be'], 4);
  add(TH, 'c6i_thereis', 'Complete: “There ___ one bathroom in my house.”',
    ['is', 'are', 'aren’t', 'am'], 4);
  add(TH, 'c6i_isnt', 'Complete: “In the house of my dreams, ___ an attic.”',
    ['there isn’t', 'there aren’t', 'is there', 'there are'], 5);
  add(TH, 'c6i_isnt', 'Complete: “In the house of my dreams, there aren’t ___ cars in the garage.”',
    ['any', 'a', 'an', 'is'], 5);
  add(TH, 'c6i_isnt', 'We use “there aren’t” when we talk about:',
    ['more than one room or object', 'only one room or object', 'questions about a house', 'verbs with -ing'], 5);
  add(TH, 'c6i_isthere', 'Which question is correct?',
    ['Is there a garden in your house?', 'There is a garden in your house?', 'Are there a garden in your house?', 'Is there gardens in your house?'], 7);
  add(TH, 'c6i_isthere', 'Which question is correct?',
    ['Are there many bedrooms in your house?', 'Is there many bedrooms in your house?', 'There are many bedrooms in your house?', 'Are there a bedroom in your house?'], 7);
  add(TH, 'c6i_isthere', 'Complete: “How many bedrooms ___ there in this house?”',
    ['are', 'is', 'am', 'does'], 7);
  add(TH, 'c6i_isthere', 'In the table, the interrogative form of “there are” is:',
    ['are there…?', 'there aren’t', 'is there…?', 'there is'], 7);
  add(TH, 'c6i_housetext', 'Which sentence is correct, according to the text about the green and white house?',
    ['There are two bedrooms and one bathroom.', 'There are three bedrooms and two bathrooms.', 'There is a swimming pool in the yard.', 'There isn’t a kitchen.'], 3);
  add(TH, 'c6i_dreamtext', 'According to the text, which sentence is correct?',
    ['There is a small garden.', 'There is a big garden.', 'There isn’t a swimming pool.', 'There aren’t three bedrooms.'], 6);
  add(TH, 'c6i_dreamtext', 'According to the text, which sentence is NOT correct?',
    ['There isn’t a swimming pool.', 'There is a laundry room.', 'There is a huge kitchen.', 'There are three bedrooms.'], 6);

  /* ---------- Endereços ---------- */
  const EN = 'EN6-END';
  add(EN, 'c6i_abbr', 'In the table, ST is the abbreviation for:',
    ['Street', 'Avenue', 'Road', 'Lane'], 8);
  add(EN, 'c6i_abbr', 'In the table, the abbreviation BLVD means:',
    ['Boulevard', 'Lane', 'Drive', 'Road'], 8);
  add(EN, 'c6i_abbr', 'In the table, the abbreviation AVE means:',
    ['Avenue', 'Street', 'Boulevard', 'Drive'], 8);
  add(EN, 'c6i_abbr', 'In the table, “Road” (RD) is translated as:',
    ['estrada; rodovia', 'rua', 'viela; travessa', 'avenida'], 8);
  add(EN, 'c6i_abbr', 'In the table, the abbreviation LN stands for:',
    ['Lane', 'Lawn', 'Line', 'Land'], 8);
  add(EN, 'c6i_prep', 'Complete: “Jordan lives ___ Blackmore Street.”',
    ['on', 'in', 'at', 'to'], 8);
  add(EN, 'c6i_prep', 'Complete: “My brother lives ___ Piracicaba.”',
    ['in', 'on', 'at', 'to'], 8);
  add(EN, 'c6i_prep', 'Complete: “The Indian restaurant is ___ 3870 Parkinson Boulevard.”',
    ['at', 'in', 'on', 'by'], 8);
  add(EN, 'c6i_prep', 'Complete: “Haruki’s dad lives ___ Japan.”',
    ['in', 'on', 'at', 'for'], 8);
  add(EN, 'c6i_envelope', 'Who is the recipient of the letter in the envelope?',
    ['Colleen C. Calver', 'Zdravko I. Valchev', 'Royal Club', 'Dallas Texas'], 8);
  add(EN, 'c6i_envelope', 'In which city does the recipient live?',
    ['Dallas', 'Sofia', 'Houston', 'Austin'], 8);
  add(EN, 'c6i_envelope', 'In the envelope, “TX” is the abbreviation of which state?',
    ['Texas', 'Tennessee', 'Tokyo', 'Toronto'], 8);
  add(EN, 'c6i_env2', 'Where does Rebecca Rodriguez live, according to her envelope?',
    ['2386 Maple Rd, Dallas, Texas', '1714 York Ave, League City, TX', '10627 Royal Club Lane, Dallas', '189 Winter Street, New York'], 8);
  add(EN, 'c6i_env2', 'Where does Brendon Pollo live, according to his envelope?',
    ['1714 York Ave, League City, TX', '2386 Maple Rd, Dallas, Texas', '189 Winter Street, New York', '10627 Royal Club Lane, Dallas'], 8);
  add(EN, 'c6i_bakery', 'What is the address of Dom Bakery?',
    ['189 Winter Street, New York, NY 14419', '189 Maple Road, Dallas, TX', '2386 York Avenue, League City', '10627 Royal Club Lane, Dallas'], 8);
  add(EN, 'c6i_bakery', 'What are the opening hours on Sunday at Dom Bakery?',
    ['8 AM – 7 PM', '8 AM – 8 PM', '7 AM – 8 PM', '9 AM – 6 PM'], 8);

  /* ---------- Números ---------- */
  const NU = 'EN6-NUM';
  add(NU, 'c6i_milhar', 'How do we say 1 315 in English?',
    ['One thousand three hundred and fifteen', 'One thousand fifteen and three hundred', 'Thirteen hundred and one thousand fifteen', 'One three hundred fifteen thousand'], 10);
  add(NU, 'c6i_milhar', 'How do we say 2 050 in English?',
    ['Two thousand and fifty', 'Two hundred and fifty', 'Twenty thousand and fifty', 'Two thousand fifteen'], 10);
  add(NU, 'c6i_milhar', 'How do we say 3 420 in English?',
    ['Three thousand four hundred and twenty', 'Three hundred and forty-two', 'Thirty-four thousand and twenty', 'Three thousand forty and two'], 10);
  add(NU, 'c6i_milhar', 'Which number is “ten thousand”?',
    ['10 000', '1 000', '100 000', '10 100'], 10);
  add(NU, 'c6i_milhar', 'How do we say 1 200 in English?',
    ['One thousand two hundred', 'Twelve thousand', 'One hundred and two thousand', 'Two thousand one hundred'], 10);
  add(NU, 'c6i_numeros1', 'How do we say 534 in English?',
    ['Five hundred and thirty-four', 'Five hundred and forty-three', 'Fifty-three and four hundred', 'Five thousand thirty-four'], 9);
  add(NU, 'c6i_numeros1', 'How do we say 377 in English?',
    ['Three hundred and seventy-seven', 'Three hundred and seventeen', 'Thirty-seven and seven hundred', 'Three thousand seventy-seven'], 9);
  add(NU, 'c6i_numeros1', 'How do we say 835 in English?',
    ['Eight hundred and thirty-five', 'Eight hundred and fifty-three', 'Eighty-three and five hundred', 'Eight thousand thirty-five'], 9);
  add(NU, 'c6i_numeros1', 'How do we say 615 in English?',
    ['Six hundred and fifteen', 'Six hundred and fifty', 'Sixty-one and five hundred', 'Six thousand fifteen'], 9);
  add(NU, 'c6i_bakery', 'The bakery’s street number is 189. In English we say:',
    ['One hundred and eighty-nine', 'One hundred and ninety-eight', 'One eighty and nine hundred', 'One thousand eighty-nine'], 9);
  add(NU, 'c6i_env2', 'Rebecca’s house number is 2386. In English we say:',
    ['Two thousand three hundred and eighty-six', 'Two hundred and thirty-eight and six', 'Twenty-three thousand eighty-six', 'Two thousand and thirty-eight six'], 10);
  add(NU, 'c6i_envelope', 'The house number on the envelope is 10627. In English we say:',
    ['Ten thousand six hundred and twenty-seven', 'One thousand six hundred and twenty-seven', 'One hundred thousand six hundred twenty-seven', 'Ten hundred and sixty-two seven'], 10);

  /* ---------- Línguas ---------- */
  const LG = 'EN6-LING';
  add(LG, 'c6i_lingua', 'According to the summary, a person’s first language (mother tongue) is:',
    ['the first language learned in life, spoken at home with the family', 'a language learned only at school', 'a language learned at a course abroad', 'the language spoken in the neighbor’s house'], 11);
  add(LG, 'c6i_lingua', 'An additional language is a language that:',
    ['we learn after the mother tongue, usually at school or in courses', 'we learn before speaking', 'is spoken only in our family', 'is always English'], 11);
  add(LG, 'c6i_lingua', 'Miguel is from Mexico, so his first language is:',
    ['Spanish', 'English', 'Portuguese', 'French'], 11);
  add(LG, 'c6i_lingua', 'In Brazil, the first language of most people is:',
    ['Portuguese', 'English', 'Spanish', 'Italian'], 11);
  add(LG, 'c6i_lingua', 'People from Poland usually have which first language?',
    ['Polish', 'Portuguese', 'Russian', 'German'], 11);
  add(LG, 'c6i_lingua', 'In Egypt, the first language of most people is:',
    ['Arabic', 'Mandarin', 'French', 'Hindi'], 11);
  add(LG, 'c6i_lingua', 'In Japan, the first language of most people is:',
    ['Japanese', 'Mandarin', 'Korean', 'English'], 11);
  add(LG, 'c6i_resumo12', 'In which of these countries is English a mother tongue?',
    ['Canada', 'Brazil', 'Mexico', 'Japan'], 12);
  add(LG, 'c6i_resumo12', 'According to the summary, English is the mother language in:',
    ['United States, United Kingdom, Canada, Australia and Ireland', 'Brazil, Mexico and Japan', 'Only the United States and the United Kingdom', 'Only Canada and Australia'], 12);
  add(LG, 'c6i_resumo12', 'According to the summary, in Brazil English is mostly used as:',
    ['an additional language', 'a mother language', 'a language no one learns', 'an ancient language'], 12);
  add(LG, 'c6i_resumo12', 'Many people think there are only American and British English. According to the summary:',
    ['English is spoken as a mother tongue in several other countries too', 'there are only two types of English', 'English is spoken in only two countries', 'English is no longer used internationally'], 12);
})();
