export const games = [
  {
    id: 're0',
    title: 'Resident Evil 0',
    year: '2002',
    slug: 'resident-evil-0',
    summary:
      'O início de tudo. Rebecca Chambers e Billy Coen enfrentam o pesadelo no Ecliptic Express.',
    description:
      'O incidente nas montanhas Arklay começou muito antes da Mansão Spencer. Resident Evil 0 narra a jornada de Rebecca Chambers, uma recruta da equipe Bravo dos S.T.A.R.S., e Billy Coen, um ex-tenente da Marinha condenado à morte. Juntos, eles sobrevivem a um surto viral em um trem em movimento e descobrem o Centro de Treinamento de Executivos da Umbrella, revelando as raízes da conspiração que destruiria Raccoon City.',
    context:
      'Investigação da equipe Bravo dos S.T.A.R.S. sobre assassinatos canibais nas montanhas Arklay, culminando no desastre do trem Ecliptic Express.',
    mainEvent:
      'O ataque ao Ecliptic Express orquestrado por James Marcus (através de sanguessugas infectadas) e a destruição da instalação de treinamento.',
    characters: [
      'rebecca-chambers',
      'billy-coen',
      'albert-wesker',
      'james-marcus',
      'william-birkin',
    ],
    pathogens: ['t-virus', 'progenitor'],
    consequences:
      'Morte definitiva de James Marcus e a decisão de Wesker de seguir seus próprios planos, traindo a Umbrella no futuro próximo.',
    connections: ['Resident Evil 1'],
    trivia:
      'Foi o último jogo da série principal a usar o estilo de câmera fixa antes de RE4, e introduziu o sistema de "Partner Zapping".',
  },
  {
    id: 're1',
    title: 'Resident Evil 1',
    year: '1996 / 2002',
    slug: 'resident-evil-1',
    summary: 'Chris Redfield e Jill Valentine descobrem os segredos da Mansão Spencer.',
    description:
      'Após o desaparecimento da equipe Bravo, a equipe Alpha é enviada para investigar. O que parecia ser uma missão de resgate se transforma em uma luta desesperada pela sobrevivência dentro de uma mansão repleta de armadilhas e horrores biológicos. Chris e Jill descobrem que a Umbrella estava usando a mansão como fachada para pesquisas ilegais de armas biológicas, incluindo o temível Tyrant.',
    context:
      'Busca pelos sobreviventes da equipe Bravo na floresta de Raccoon, levando ao refúgio na Mansão Spencer.',
    mainEvent:
      'O incidente da Mansão Spencer, a revelação da traição de Albert Wesker e a destruição do Laboratório Arklay.',
    characters: [
      'chris-redfield',
      'jill-valentine',
      'albert-wesker',
      'barry-burton',
      'rebecca-chambers',
    ],
    pathogens: ['t-virus'],
    consequences:
      'A destruição da mansão e do laboratório, a aparente morte de Wesker e a fundação do movimento anti-bioterrorismo pelos sobreviventes.',
    connections: [
      'Resident Evil 0',
      'Resident Evil 2',
      'Resident Evil 3',
      'Resident Evil Code: Veronica',
    ],
    trivia:
      'O Remake de 2002 introduziu os "Lisa Trevor" e os "Crimson Heads", tornando o jogo muito mais aterrorizante e denso em lore.',
  },
  {
    id: 're2',
    title: 'Resident Evil 2',
    year: '1998 / 2019',
    slug: 'resident-evil-2',
    summary: 'Leon S. Kennedy e Claire Redfield tentam escapar de uma Raccoon City devastada.',
    description:
      'O pesadelo se espalha para as ruas. Leon, um policial novato em seu primeiro dia, e Claire, que busca seu irmão Chris, se encontram no caos de Raccoon City. O G-Vírus, uma mutação ainda mais perigosa que o T-Vírus, é liberado por William Birkin, criando uma criatura imparável que persegue os sobreviventes através da delegacia e dos esgotos da cidade.',
    context:
      'Surto viral generalizado em Raccoon City causado pela contaminação da água e esgotos após um ataque da Umbrella a William Birkin.',
    mainEvent:
      'A fuga da delegacia de polícia (RPD), o confronto com o Tyrant (Mr. X) e a destruição do laboratório subterrâneo NEST.',
    characters: [
      'leon-kennedy',
      'claire-redfield',
      'ada-wong',
      'sherry-birkin',
      'william-birkin',
      'brian-irons',
    ],
    pathogens: ['t-virus', 'g-virus'],
    consequences:
      'Exposição global dos crimes da Umbrella, o início da carreira de Leon como agente do governo e a busca de Claire por Chris.',
    connections: ['Resident Evil 3', 'Resident Evil 4', 'Resident Evil 6'],
    trivia:
      'O sistema de "Zapping" do original permitia que as ações de um personagem afetassem o cenário do outro, algo simplificado no Remake de 2019.',
  },
  {
    id: 're3',
    title: 'Resident Evil 3',
    year: '1999 / 2020',
    slug: 'resident-evil-3',
    summary:
      'Jill Valentine é caçada pela arma biológica mais implacável em uma cidade agonizante.',
    description:
      'Jill Valentine tenta escapar de Raccoon City enquanto é caçada pelo Nemesis-T Type, uma arma biológica inteligente projetada especificamente para eliminar os membros dos S.T.A.R.S. O jogo mostra os momentos finais da cidade antes de sua destruição completa, destacando o desespero de civis e mercenários da U.B.C.S. apanhados no fogo cruzado.',
    context:
      'As últimas 24 horas de Raccoon City sob o cerco do Nemesis e a corrida contra o tempo antes do bombardeio nuclear.',
    mainEvent:
      'A perseguição implacável de Nemesis, a tentativa de encontrar uma vacina e a destruição total de Raccoon City em 1º de Outubro de 1998.',
    characters: [
      'jill-valentine',
      'carlos-oliveira',
      'nemesis',
      'nicholai-ginovaef',
      'mikhail-viktor',
    ],
    pathogens: ['t-virus', 'nemesis-t-type'],
    consequences:
      'Aniquilação nuclear de uma cidade americana, causando um escândalo mundial que eventualmente levou à queda da Umbrella.',
    connections: ['Resident Evil 2', 'Resident Evil Resistance'],
    trivia:
      'O jogo original introduziu o sistema de esquiva e escolhas dinâmicas que alteravam o final da história.',
  },
  {
    id: 're4',
    title: 'Resident Evil 4',
    year: '2005 / 2023',
    slug: 'resident-evil-4',
    summary: 'Leon viaja para uma vila remota na Espanha para resgatar a filha do presidente.',
    description:
      'Seis anos após Raccoon City, Leon S. Kennedy é um agente especial enviado para resgatar Ashley Graham. Na Espanha, ele encontra um horror diferente: as Las Plagas, parasitas que controlam a mente. O culto Los Iluminados planeja infectar o mundo através da filha do presidente, forçando Leon a lutar através de hordas de Ganados e monstros grotescos.',
    context:
      'Missão de resgate diplomático em uma região rural isolada da Espanha, infiltrada por um culto bioterrorista antigo.',
    mainEvent:
      'A descoberta do uso de parasitas (Las Plagas) em vez de vírus, a morte de Osmund Saddler e o resgate de Ashley.',
    characters: [
      'leon-kennedy',
      'ashley-graham',
      'ada-wong',
      'luis-sera',
      'osmund-saddler',
      'jack-krauser',
      'ramon-salazar',
    ],
    pathogens: ['las-plagas'],
    consequences:
      'Fim da "era dos zumbis" clássica, surgimento de ameaças baseadas em controle mental e o fortalecimento de facções rivais à Umbrella.',
    connections: ['Resident Evil 2', 'Resident Evil 5', 'Resident Evil Village', 'Separate Ways'],
    trivia:
      'A versão original de 2005 é creditada por revolucionar o gênero de tiro em terceira pessoa com a câmera sobre o ombro.',
  },
  {
    id: 're5',
    title: 'Resident Evil 5',
    year: '2009',
    slug: 'resident-evil-5',
    summary: 'Chris Redfield e Sheva Alomar enfrentam a ameaça Uroboros na África.',
    description:
      'Chris Redfield, agora membro da B.S.A.A., viaja para a África para impedir uma venda de armas biológicas. Ele descobre que seu arqui-inimigo, Albert Wesker, ainda está vivo e planeja usar o vírus Uroboros para forçar a evolução da humanidade, eliminando os "fracos". Ao lado de Sheva Alomar, Chris deve enfrentar parasitas aprimorados e segredos do passado da Umbrella.',
    context:
      'Investigação de bioterrorismo no mercado negro africano (Kijuju) ligada ao projeto secreto da corporação Tricell.',
    mainEvent:
      'O confronto final dentro de um vulcão ativo, a libertação de Jill Valentine do controle de Wesker e a destruição do Uroboros.',
    characters: [
      'chris-redfield',
      'sheva-alomar',
      'jill-valentine',
      'albert-wesker',
      'excella-gionne',
    ],
    pathogens: ['uroboros', 'las-plagas-2', 'progenitor'],
    consequences:
      'Morte de Albert Wesker, desmantelamento da Tricell e o estabelecimento da B.S.A.A. como força global dominante.',
    connections: ['Resident Evil 1', 'Resident Evil 4', 'Resident Evil 6'],
    trivia:
      'Foi o jogo mais vendido da franquia por mais de uma década, destacando o sucesso do modo cooperativo.',
  },
  {
    id: 're6',
    title: 'Resident Evil 6',
    year: '2012',
    slug: 'resident-evil-6',
    summary: 'Uma guerra biológica global une Leon, Chris, Ada e Jake Muller.',
    description:
      'O C-Vírus, uma combinação aterrorizante de patógenos anteriores, causa surtos simultâneos em Tall Oaks (EUA) e Lanshiang (China). Sete protagonistas se unem para impedir os planos da Neo-Umbrella e de Derek Simmons. O jogo aborda temas de destino, sacrifício e as consequências de um mundo onde o bioterrorismo se tornou a norma.',
    context:
      'Ataques bioterroristas globais coordenados pela organização Neo-Umbrella para instaurar o caos mundial.',
    mainEvent:
      'A morte do presidente dos EUA, a luta contra Haos na base submarina e a revelação da verdadeira identidade de Carla Radames.',
    characters: [
      'leon-kennedy',
      'chris-redfield',
      'ada-wong',
      'jake-muller',
      'sherry-birkin',
      'helena-harper',
      'piers-nivans',
    ],
    pathogens: ['c-virus'],
    consequences:
      'Enfraquecimento das estruturas políticas mundiais e o surgimento de Jake Muller (filho de Wesker) como uma nova variável na lore.',
    connections: ['Resident Evil 2', 'Resident Evil 5'],
    trivia:
      'Possui a narrativa mais longa da série, dividida em quatro campanhas que se cruzam conforme o tempo passa.',
  },
  {
    id: 're7',
    title: 'Resident Evil 7',
    year: '2017',
    slug: 'resident-evil-7',
    summary: 'Ethan Winters busca sua esposa desaparecida em uma plantação decrépita na Louisiana.',
    description:
      'Ethan Winters, um civil comum, recebe uma mensagem de sua esposa Mia, desaparecida há três anos. A busca o leva à propriedade dos Baker em Dulvey, Louisiana. Lá, ele descobre uma família deformada e insana, infectada por um patógeno fúngico conhecido como "Mofo". Ethan deve sobreviver ao terror psicológico e físico para salvar Mia e descobrir a origem de Eveline.',
    context:
      'Desaparecimento civil em larga escala na região sul dos EUA, ligado a um experimento de bio-arma fúngica perdido no mar.',
    mainEvent:
      'O incidente na fazenda Baker, a luta contra Jack e Marguerite Baker e o resgate final pela Blue Umbrella.',
    characters: [
      'ethan-winters',
      'mia-winters',
      'chris-redfield',
      'jack-baker',
      'eveline',
      'lucas-baker',
    ],
    pathogens: ['mold (mofo)'],
    consequences:
      'Reinvenção da série com foco em primeira pessoa e o início da saga de Ethan Winters e a organização The Connections.',
    connections: ['Resident Evil Village'],
    trivia:
      'Foi projetado para ser jogável do início ao fim em VR, aumentando drasticamente a imersão e o horror.',
  },
  {
    id: 're8',
    title: 'Resident Evil Village',
    year: '2021',
    slug: 'resident-evil-village',
    summary: 'Ethan confronta Mother Miranda e os Lordes em busca de sua filha.',
    description:
      'Após os eventos na Louisiana, Ethan e Mia tentam viver pacificamente na Europa, mas a tragédia bate à porta novamente. Chris Redfield ataca sua casa e sequestra sua filha, Rose. Ethan se vê em um vilarejo dominado por Mother Miranda e seus quatro Lordes. Ele descobre que tudo está conectado às raízes da própria Umbrella Corporation e ao antigo Megamiceto.',
    context:
      'Sequestro de Rosemary Winters e a infiltração em um domínio feudal remoto na Europa Oriental.',
    mainEvent:
      'A queda dos quatro lordes (Dimitrescu, Beneviento, Moreau, Heisenberg) e o sacrifício de Ethan para destruir o Megamiceto.',
    characters: [
      'ethan-winters',
      'chris-redfield',
      'mother-miranda',
      'lady-dimitrescu',
      'karl-heisenberg',
      'rosemary-winters',
    ],
    pathogens: ['megamycete', 'cadou'],
    consequences:
      'Fim da história de Ethan Winters, o surgimento de Rose como uma possuidora de poderes biológicos e a exposição da B.S.A.A. usando B.O.W.s.',
    connections: ['Resident Evil 7', 'Resident Evil 1'],
    trivia:
      'Revela que Ozwell Spencer se inspirou no símbolo do vilarejo e nos ideais de Miranda para criar a logo e o propósito da Umbrella.',
  },
  {
    id: 're9',
    title: 'Resident Evil 9: Requiem',
    year: '2025/2026 (Estimado)',
    slug: 'resident-evil-9',
    summary: 'O clímax épico de décadas de bioterrorismo e o possível fim da era atual da lore.',
    description:
      'Informações vazadas e teorias indicam que RE9, codinome "Requiem", será o maior jogo da franquia até hoje. A trama deve girar em torno do fechamento dos arcos de Chris Redfield e possivelmente Jill Valentine, unindo todas as pontas soltas desde 1996. Rumores sugerem um ambiente de mundo aberto em uma ilha ou cidade devastada, explorando a corrupção interna da B.S.A.A.',
    context:
      'Consequências diretas do final de Village e as operações clandestinas da B.S.A.A. com armas biológicas.',
    mainEvent:
      'Desconhecido. Espera-se o confronto final contra uma organização que herdou o legado de Spencer.',
    characters: [
      'chris-redfield',
      'jill-valentine',
      'leon-kennedy',
      'claire-redfield',
      'rosemary-winters',
    ],
    pathogens: ['evolved-mold', 'new-progenitor-strain'],
    consequences:
      'Provável conclusão definitiva para os personagens clássicos da década de 90 e o início de uma nova era para a franquia.',
    connections: ['Resident Evil Village', 'Total Franchise Continuity'],
    trivia:
      'Rumores dizem que o jogo está em desenvolvimento há mais de 7 anos e será o encerramento do arco iniciado no RE7.',
  },
];
