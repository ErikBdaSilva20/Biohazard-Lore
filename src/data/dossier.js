export const charactersData = [
  {
    id: 'leon-kennedy',
    name: 'Leon S. Kennedy',
    alias: 'O Sobrevivente de Raccoon',
    firstAppearance: 'RE2 (1998)',
    status: 'Ativo (D.S.O.)',
    evolution: [
      {
        game: 'Resident Evil 2',
        role: 'Policial Novato',
        description:
          'Em seu primeiro dia na RPD, Leon é jogado no caos. Sua motivação é puramente salvar quem puder.',
        image:
          'https://archives.bulbagarden.net/media/upload/thumb/5/53/Leon_RE2_Remake.png/250px-Leon_RE2_Remake.png', // Placeholder for concept
      },
      {
        game: 'Resident Evil 4',
        role: 'Agente Governamental',
        description:
          '6 anos depois, Leon é um especialista em operações especiais, treinado para proteger a família do presidente.',
        image:
          'https://archives.bulbagarden.net/media/upload/thumb/1/1a/Leon_RE4_Remake.png/250px-Leon_RE4_Remake.png',
      },
      {
        game: 'Resident Evil 6',
        role: 'Agente Veterano',
        description:
          'Enfrenta o peso de decisões impossíveis e a perda de amigos em um conflito global.',
        image:
          'https://archives.bulbagarden.net/media/upload/thumb/4/4c/Leon_RE6.png/250px-Leon_RE6.png',
      },
    ],
    bio: 'Leon passou de um policial idealista a um dos agentes mais letais e cínicos do mundo. Seu trauma em Raccoon City moldou sua determinação em erradicar o bioterrorismo.',
  },
  {
    id: 'chris-redfield',
    name: 'Chris Redfield',
    alias: 'O Batedor de Pedras',
    firstAppearance: 'RE1 (1996)',
    status: 'Ativo (B.S.A.A. / Hound Wolf)',
    evolution: [
      {
        game: 'Resident Evil 1',
        role: 'Membro S.T.A.R.S.',
        description:
          'Um jovem piloto talentoso e atirador de elite da unidade de elite de Raccoon City.',
        image: '',
      },
      {
        game: 'Resident Evil 5',
        role: 'Capitão da B.S.A.A.',
        description:
          'Chris se tornou uma força da natureza após anos lutando contra a Umbrella, focado em vingança contra Wesker.',
        image: '',
      },
      {
        game: 'Resident Evil Village',
        role: 'Líder do Hound Wolf Squad',
        description:
          'Operando nas sombras, Chris se tornou uma figura ambígua, priorizando a missão acima de explicações.',
        image: '',
      },
    ],
    bio: 'O protagonista mais resiliente da série. Chris dedicou sua vida a destruir a Umbrella e qualquer um que use armas biológicas.',
  },
  {
    id: 'jill-valentine',
    name: 'Jill Valentine',
    alias: 'A Mestra das Destrancas',
    firstAppearance: 'RE1 (1996)',
    status: 'Ativo (B.S.A.A.)',
    evolution: [
      {
        game: 'Resident Evil 1',
        role: 'Especialista S.T.A.R.S.',
        description:
          'Uma das poucas mulheres na unidade tática, mestre em infiltração e desarmamento.',
        image: '',
      },
      {
        game: 'Resident Evil 3',
        role: 'Sobrevivente Solitária',
        description:
          'Caçada pelo Nemesis, Jill mostra sua tenacidade extrema ao escapar de Raccoon City.',
        image: '',
      },
      {
        game: 'Resident Evil 5',
        role: 'Agente Controlada',
        description:
          'Após ser dada como morta, Jill reaparece sob controle mental de Wesker, servindo como uma arma contra Chris.',
        image: '',
      },
    ],
    bio: 'Jill possui a maior taxa de sobrevivência entre todos os agentes. Sua experiência com o Nemesis a tornou o símbolo da resistência contra o bioterrorismo.',
  },
  {
    id: 'albert-wesker',
    name: 'Albert Wesker',
    alias: 'O Prospecto de Deus',
    firstAppearance: 'RE1 (1996)',
    status: 'Falecido? (Última aparição em RE5)',
    evolution: [
      {
        game: 'Resident Evil 1',
        role: 'Capitão Traidor',
        description:
          'Líder dos S.T.A.R.S. e espião da Umbrella. Usou seus próprios homens como cobaias.',
        image: '',
      },
      {
        game: 'Resident Evil Code Veronica',
        role: 'Meta-humano',
        description: 'Ressuscitado com poderes sobre-humanos após injetar um vírus experimental.',
        image: '',
      },
      {
        game: 'Resident Evil 5',
        role: 'Deus em Ascensão',
        description:
          'Planejou o extermínio da humanidade através do Uroboros para forçar a evolução global.',
        image: '',
      },
    ],
    bio: 'O vilão definitivo. Wesker transcendeu sua humanidade para se tornar algo mais, manipulando eventos das sombras por décadas.',
  },
];

export const infectionMapData = [
  {
    id: 'raccoon-city',
    name: 'Raccoon City',
    location: 'Midwest, USA',
    year: '1998',
    virus: 'T-Vírus / G-Vírus',
    coordinates: { x: 25, y: 35 },
    description:
      'A aniquilação total de uma cidade industrial. O primeiro grande incidente que expôs a Umbrella ao mundo.',
    casualtyLevel: 'Catastrófico (100.000+)',
  },
  {
    id: 'vadelobos',
    name: 'Vilarejo de Valdelobos',
    location: 'Espanha',
    year: '2004',
    virus: 'Las Plagas',
    coordinates: { x: 45, y: 32 },
    description:
      'Um surto isolado controlado por um culto religioso que usava parasitas ancestrais.',
    casualtyLevel: 'Localizado',
  },
  {
    id: 'kijuju',
    name: 'Zona Autônoma de Kijuju',
    location: 'África',
    year: '2009',
    virus: 'Uroboros / Las Plagas II',
    coordinates: { x: 55, y: 55 },
    description: 'A primeira aplicação em massa do vírus Uroboros para testes de evolução forçada.',
    casualtyLevel: 'Regional',
  },
  {
    id: 'lanshiang',
    name: 'Lanshiang',
    location: 'China',
    year: '2013',
    virus: 'C-Vírus',
    coordinates: { x: 75, y: 45 },
    description:
      'Ataques bioterroristas coordenados via mísseis de gás, transformando milhões em minutos.',
    casualtyLevel: 'Mundial',
  },
  {
    id: 'dulvey',
    name: 'Dulvey, Louisiana',
    location: 'USA',
    year: '2017',
    virus: 'Mofo (Série-E)',
    coordinates: { x: 28, y: 42 },
    description:
      'Incidente fúngico em uma área rural, envolvendo controle mental e sequestro de civis.',
    casualtyLevel: 'Mínimo (Contido)',
  },
  {
    id: 'village',
    name: 'Vilarejo da Montanha',
    location: 'Europa Oriental',
    year: '2021',
    virus: 'Megamiceto',
    coordinates: { x: 52, y: 30 },
    description:
      'A origem de tudo. Um culto centenário revelado após o sequestro da filha de Ethan Winters.',
    casualtyLevel: 'Localizado / Severo',
  },
];
