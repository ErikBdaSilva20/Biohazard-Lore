export const characters = [
  {
    id: 'leon-kennedy',
    name: 'Leon S. Kennedy',
    slug: 'leon-kennedy',
    alias: 'O Sobrevivente de Raccoon',
    firstAppearance: 'RE2 (1998)',
    status: 'Ativo (D.S.O.)',
    bio: 'Leon passou de um policial idealista a um dos agentes mais letais e cínicos do mundo. Seu trauma em Raccoon City moldou sua determinação em erradicar o bioterrorismo. Ele é conhecido por sua habilidade extrema com facas e armas leves, além de uma resiliência psicológica invejável.',
    evolution: [
      {
        game: 'Resident Evil 2',
        role: 'Policial Novato',
        description:
          'Em seu primeiro dia na RPD, Leon é jogado no caos. Sua motivação é puramente salvar quem puder, mesmo sob as piores circunstâncias.',
      },
      {
        game: 'Resident Evil 4',
        role: 'Agente Governamental',
        description:
          '6 anos depois, Leon é um especialista em operações especiais, treinado diretamente pelo governo após ser recrutado forçadamente devido à sua experiência em Raccoon.',
      },
      {
        game: 'Resident Evil 6',
        role: 'Agente Veterano',
        description:
          'Enfrenta o peso de decisões impossíveis, como a execução do presidente infectado, e a perda de amigos em um conflito global que ameaça a ordem mundial.',
      },
    ],
    relatedGames: ['Resident Evil 2', 'Resident Evil 4', 'Resident Evil 6'],
    relatedViruses: ['T-Vírus', 'Las Plagas', 'C-Vírus'],
  },
  {
    id: 'chris-redfield',
    name: 'Chris Redfield',
    slug: 'chris-redfield',
    alias: 'O Batedor de Pedras',
    firstAppearance: 'RE1 (1996)',
    status: 'Ativo (B.S.A.A. / Hound Wolf)',
    bio: 'O protagonista mais resiliente da série. Chris dedicou sua vida a destruir a Umbrella e qualquer um que use armas biológicas. Sua força física é lendária, assim como sua lealdade aos seus parceiros de equipe.',
    evolution: [
      {
        game: 'Resident Evil 1',
        role: 'Membro S.T.A.R.S.',
        description:
          'Um jovem piloto talentoso e atirador de elite da unidade de elite de Raccoon City, enviado para investigar as montanhas Arklay.',
      },
      {
        game: 'Resident Evil 5',
        role: 'Capitão da B.S.A.A.',
        description:
          'Chris se tornou uma força da natureza após anos lutando contra a Umbrella, focado em vingança contra Wesker e no desmantelamento da Tricell.',
      },
      {
        game: 'Resident Evil Village',
        role: 'Líder do Hound Wolf Squad',
        description:
          'Operando fora da jurisdição da B.S.A.A., Chris se tornou uma figura ambígua na Europa Oriental, agindo com dureza para proteger o mundo.',
      },
    ],
    relatedGames: [
      'Resident Evil 1',
      'Resident Evil 5',
      'Resident Evil 6',
      'Resident Evil 7',
      'Resident Evil Village',
      'Resident Evil 9',
    ],
    relatedViruses: ['T-Vírus', 'Uroboros', 'C-Vírus', 'Megamycete'],
  },
  {
    id: 'jill-valentine',
    name: 'Jill Valentine',
    slug: 'jill-valentine',
    alias: 'A Mestra das Destrancas',
    firstAppearance: 'RE1 (1996)',
    status: 'Ativo (B.S.A.A.)',
    bio: 'Jill possui a maior taxa de sobrevivência entre todos os agentes. Sua experiência traumática com o Nemesis a tornou o símbolo da resistência contra o bioterrorismo. Ela é especialista em EOD (Explosive Ordnance Disposal) e infiltração.',
    evolution: [
      {
        game: 'Resident Evil 1',
        role: 'Especialista S.T.A.R.S.',
        description:
          'Uma das poucas mulheres na unidade tática, mestre em infiltração e desarmamento de dispositivos de segurança.',
      },
      {
        game: 'Resident Evil 3',
        role: 'Sobrevivente Solitária',
        description:
          'Caçada pelo Nemesis, Jill mostra sua tenacidade extrema ao escapar de Raccoon City antes de sua aniquilação total.',
      },
      {
        game: 'Resident Evil 5',
        role: 'Agente Controlada',
        description:
          'Após anos desaparecida e dada como morta, Jill reaparece sob controle mental de Wesker através de um dispositivo de administração contínua de drogas.',
      },
    ],
    relatedGames: ['Resident Evil 1', 'Resident Evil 3', 'Resident Evil 5', 'Resident Evil 9'],
    relatedViruses: ['T-Vírus', 'Nemesis T-Type', 'P30'],
  },
  {
    id: 'albert-wesker',
    name: 'Albert Wesker',
    slug: 'albert-wesker',
    alias: 'A Mente Mestra',
    firstAppearance: 'RE1 (1996)',
    status: 'Deceased (Provavelmente)',
    bio: 'Um dos vilões mais emblemáticos da história dos games. Wesker era um pesquisador da Umbrella que traiu a companhia e as Nações Unidas para buscar o "Próximo Passo" na evolução humana. Injetou-se com uma cepa personalizada de vírus que lhe deu habilidades sobre-humanas.',
    evolution: [
      {
        game: 'Resident Evil 1',
        role: 'Capitão do S.T.A.R.S.',
        description:
          'Secretamente um agente da Umbrella infiltrado na polícia para atrair vítimas para os experimentos da mansão.',
      },
      {
        game: 'Code: Veronica / RE4',
        role: 'Agente das Sombras',
        description:
          'Operando de trás das cortinas, Wesker coletou amostras de todos os vírus importantes (T, G, T-Veroniza, Plagas).',
      },
      {
        game: 'Resident Evil 5',
        role: 'Deus Autodeclarado',
        description:
          'Lançou o plano Uroboros para forçar uma seleção natural global, onde apenas os mais fortes (como ele) sobreviveriam.',
      },
    ],
    relatedGames: [
      'Resident Evil 0',
      'Resident Evil 1',
      'Resident Evil 5',
      'Resident Evil 4 (Remake)',
    ],
    relatedViruses: ['Progenitor', 'T-Vírus', 'Uroboros'],
  },
  {
    id: 'claire-redfield',
    name: 'Claire Redfield',
    slug: 'claire-redfield',
    alias: 'A Irmã de S.T.A.R.S.',
    firstAppearance: 'RE2 (1998)',
    status: 'Ativa (TerraSave)',
    bio: 'Diferente de Chris e Leon, Claire é uma civil que aprendeu a lutar por necessidade. Ela se tornou uma ativista da TerraSave, lutando contra o bioterrorismo através da ajuda humanitária e exposição da verdade.',
    evolution: [
      {
        game: 'Resident Evil 2',
        role: 'Estudante Universitária',
        description:
          'Entra em Raccoon City em busca de seu irmão Chris e acaba protegendo a pequena Sherry Birkin.',
      },
      {
        game: 'Code: Veronica',
        role: 'Investigadora Civil',
        description: 'Infiltra-se em uma base da Umbrella em Paris e acaba presa na Ilha Rockfort.',
      },
      {
        game: 'Revelations 2',
        role: 'Líder da TerraSave',
        description:
          'Trabalha para reconstruir comunidades destruídas por ataques biológicos enquanto enfrenta a Alex Wesker.',
      },
    ],
    relatedGames: [
      'Resident Evil 2',
      'Resident Evil Code: Veronica',
      'Resident Evil Revelations 2',
      'Resident Evil 9',
    ],
    relatedViruses: ['T-Vírus', 'G-Vírus', 'T-Phobos'],
  },
  {
    id: 'ada-wong',
    name: 'Ada Wong',
    slug: 'ada-wong',
    alias: 'A Espiã Escarlate',
    firstAppearance: 'RE2 (1998)',
    status: 'Ativa (Free agent)',
    bio: 'Uma espiã enigmática cujas motivações são sempre questionáveis. Ela opera nas sombras do bioterrorismo há décadas, frequentemente ajudando Leon quando seus objetivos se alinham.',
    evolution: [
      {
        game: 'Resident Evil 2',
        role: 'Investigadora',
        description:
          'Infiltra-se em Raccoon City sob o pretexto de buscar seu namorado, John, mas na verdade busca amostras do G-Vírus.',
      },
      {
        game: 'Resident Evil 4',
        role: 'Agente de Wesker',
        description:
          'Trabalha para Wesker enquanto secretamente persegue seus próprios objetivos na Espanha, salvando Leon várias vezes.',
      },
      {
        game: 'Resident Evil 6',
        role: 'Indivíduo Sob Vigilância',
        description:
          'Enfrenta sua própria impostora e limpa seu nome em meio ao caos global causado pela Neo-Umbrella.',
      },
    ],
    relatedGames: ['Resident Evil 2', 'Resident Evil 4', 'Resident Evil 6'],
    relatedViruses: ['T-Vírus', 'G-Vírus', 'Las Plagas', 'C-Vírus'],
  },
  {
    id: 'jack-krauser',
    name: 'Jack Krauser',
    slug: 'jack-krauser',
    alias: 'Major Krauser',
    firstAppearance: 'RE4 (2005)',
    status: 'Deceased',
    bio: 'Um ex-agente das Operações Especiais e mentor de Leon. Após ser dado como morto em uma missão no Brasil, ele se juntou a Wesker para buscar o poder das Las Plagas e restaurar sua glória militar.',
    evolution: [
      {
        game: 'Darkside Chronicles',
        role: 'Parceiro de Leon',
        description:
          'Lutou lado a lado com Leon na Operação Javier, onde começou a sentir atração pelo poder biológico.',
      },
      {
        game: 'Resident Evil 4',
        role: 'Mercenário Infectado',
        description:
          'Infiltrou-se no culto de Saddler para obter a amostra mestre das Plagas, transformando seu braço em uma lâmina biológica letal.',
      },
    ],
    relatedGames: ['Resident Evil 4', 'Darkside Chronicles'],
    relatedViruses: ['Las Plagas', 'T-Veronica'],
  },
  {
    id: 'rebecca-chambers',
    name: 'Rebecca Chambers',
    slug: 'rebecca-chambers',
    alias: 'Professora Chambers',
    firstAppearance: 'RE0 (2002)',
    status: 'Ativa (Assessora B.S.A.A.)',
    bio: 'Uma prodígio que se juntou ao S.T.A.R.S. aos 18 anos. Após o horror da mansão, ela se afastou do campo de batalha para se tornar uma virologista de elite, desenvolvendo curas e vacinas vitais.',
    evolution: [
      {
        game: 'Resident Evil 0',
        role: 'Recruta S.T.A.R.S.',
        description:
          'Enfrenta seu primeiro pesadelo no trem Ecliptic Express junto com o fugitivo Billy Coen.',
      },
      {
        game: 'Resident Evil 1',
        role: 'Membro Bravo Team',
        description:
          'Auxilia Chris Redfield na mansão, sendo uma das poucas sobreviventes do incidente.',
      },
      {
        game: 'RE: Vendetta',
        role: 'Consultora Científica',
        description:
          'Trabalha com Chris e Leon para desenvolver uma cura contra o vírus A da organização de Glenn Arias.',
      },
    ],
    relatedGames: ['Resident Evil 0', 'Resident Evil 1'],
    relatedViruses: ['T-Vírus', 'Progenitor', 'A-Vírus'],
  },
];
