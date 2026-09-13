/**
 * Catálogo dos Jogos do Portfólio
 * Contém dados, tags, descrições e caminhos dos assets visuais
 */
const GAMES_DATA = [
  {
    "id": "idle-train-asmr",
    "title": "Idle Train ASMR",
    "category": "idle-strategy",
    "categoryLabel": "Idle & Estratégia",
    "tags": [
      "Unity",
      "Mobile",
      "Idle Tycoon",
      "Puzzle",
      "3D"
    ],
    "featured": true,
    "tagline": "Estratégia, puzzle e gerenciamento ferroviário lucrativo!",
    "description": "Embarque no Idle Train, um jogo viciante de estratégia e puzzle onde você constrói e gerencia sua própria malha ferroviária. Comece com um trem simples, adicione paradas, expanda rotas e faça merge de vagões para maximizar seus lucros.",
    "highlights": [
      "Sistema de merge de vagões do mesmo nível para desbloquear trens avançados",
      "Gerenciamento de caminhos, estações e bifurcações para passageiros",
      "Otimização de fluxo combinando cores de vagões com passageiros",
      "Sensação relaxante ASMR combinada com progressão tycoon"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Idle Train ASMR Icon.png",
    "cover": "assets/images/Idle Train.webp",
    "screenshots": [
      "assets/images/Idle Train.webp",
      "assets/images/Idle Train2.webp",
      "assets/images/Idle Train3.webp",
      "assets/images/Idle Train4.webp"
    ]
  },
  {
    "id": "empire-rise",
    "title": "Empire Rise",
    "category": "idle-strategy",
    "categoryLabel": "Idle & Estratégia",
    "tags": [
      "Unity",
      "Mobile",
      "Estratégia",
      "Conquista",
      "3D"
    ],
    "featured": true,
    "tagline": "Construa seu exército e lidere a conquista do mundo!",
    "description": "Você é o Rei! Use sua corneta para guiar trabalhadores a coletar recursos vitais pelo mapa, construa quartéis para treinar soldados e marche em direção à vitória contra as forças inimigas.",
    "highlights": [
      "Controle dinâmico de tropas e operários por comando sonoro",
      "Coleta estratégica de recursos e expansão de base",
      "Treinamento de soldados e batalhas épicas pelo domínio do mapa",
      "Visão tática e progressão gratificante"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Empire Rise Icon.png",
    "cover": "assets/images/Empire Rise 1.png",
    "screenshots": [
      "assets/images/Empire Rise 1.png",
      "assets/images/Empire Rise 2.png",
      "assets/images/Empire Rise 3.png"
    ]
  },
  {
    "id": "collect-and-defend",
    "title": "Collect and Defend",
    "category": "action-runner",
    "categoryLabel": "Ação & Defesa",
    "tags": [
      "Unity",
      "Mobile",
      "Tower Defense",
      "Ação",
      "3D"
    ],
    "featured": true,
    "tagline": "Colete recursos e defenda sua torre contra hordas!",
    "description": "Proteja sua torre principal contra ondas incessantes de inimigos. Colete recursos pelo campo de batalha, construa e aprimore torres ofensivas e reforce sua base antes da próxima invasão.",
    "highlights": [
      "Ciclo intenso de coleta de suprimentos em meio ao perigo",
      "Construção e upgrade de torres defensivas estratégicas",
      "Sistema de ondas de inimigos com dificuldade progressiva",
      "Feedback visual de impacto e combate fluido"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Collect Defend Icon.png",
    "cover": "assets/images/Collect Defend 2.png",
    "screenshots": [
      "assets/images/Collect Defend 2.png",
      "assets/images/Collect Defend 3.png",
      "assets/images/Collect Defend.png"
    ]
  },
  {
    "id": "face-maker-run",
    "title": "Face Maker Run",
    "category": "action-runner",
    "categoryLabel": "Ação & Runner",
    "tags": [
      "Unity",
      "Mobile",
      "Runner",
      "Transformação",
      "3D"
    ],
    "featured": true,
    "tagline": "O caminho da beleza e transformação estética!",
    "description": "Um divertido runner hiper-casual onde você toma decisões em frações de segundo para coletar as melhores características estéticas ao longo da pista, evitando obstáculos e completando uma transformação incrível.",
    "highlights": [
      "Mecânica de esteira e escolha de portas multiplicadoras/estéticas",
      "Deformação e customização de modelo 3D em tempo real",
      "Feedback visual instantâneo a cada item coletado",
      "Level design dinâmico com obstáculos desafiadores"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Face Maker Run Icon.png",
    "cover": "assets/images/Face Maker Run 1.png",
    "screenshots": [
      "assets/images/Face Maker Run 1.png",
      "assets/images/Face Maker Run 2.png",
      "assets/images/Face Maker Run 3.png",
      "assets/images/Face Maker Run 4.png",
      "assets/images/Face Maker Run 5.png"
    ]
  },
  {
    "id": "well-cooked",
    "title": "Well Cooked",
    "category": "puzzle",
    "categoryLabel": "Casual & Puzzle",
    "tags": [
      "Unity",
      "Mobile",
      "Puzzle",
      "Culinária",
      "3D"
    ],
    "featured": false,
    "tagline": "Resolva o quebra-cabeça e prepare os pratos no ponto certo!",
    "description": "Deslize para movimentar os alimentos e cozinhar ambos os lados nos queimadores sem queimá-los. Se cozinhar um lado duas vezes, a comida queima! Conclua o cozimento e monte o prato perfeito para os clientes.",
    "highlights": [
      "Mecânica de deslizamento (swipe) com física precisa",
      "Risco e recompensa: vire os alimentos na hora certa",
      "Montagem de pratos e entrega aos clientes"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Well Cooked Icon.png",
    "cover": "assets/images/Well Cooked 1.png",
    "screenshots": [
      "assets/images/Well Cooked 1.png",
      "assets/images/Well Cooked 2.png",
      "assets/images/Well Cooked 3.png"
    ]
  },
  {
    "id": "run-candy-run",
    "title": "Run Candy Run!",
    "category": "action-runner",
    "categoryLabel": "Ação & Runner",
    "tags": [
      "Unity",
      "Mobile",
      "Runner",
      "Crescimento",
      "3D"
    ],
    "featured": false,
    "tagline": "Cresça coletando doces e crie atalhos inteligentes!",
    "description": "Colete doces coloridos para expandir seu corpo enquanto desvia de lâminas afiadas. Use sua extensão corporal estrategicamente para criar atalhos sobre os obstáculos e cruzar a linha de chegada em primeiro.",
    "highlights": [
      "Mecânica inovadora de expansão de corpo para criar pontes/atalhos",
      "Obstáculos dinâmicos de corte e precisão de esquiva",
      "Estilo visual doce, vibrante e colorido"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Run Candy Run Icon.png",
    "cover": "assets/images/Run Candy Run 1.png",
    "screenshots": [
      "assets/images/Run Candy Run 1.png",
      "assets/images/Run Candy Run 2.png",
      "assets/images/Run Candy Run 3.png"
    ]
  },
  {
    "id": "rocket-parking-3d",
    "title": "Rocket Parking 3D",
    "category": "puzzle",
    "categoryLabel": "Casual & Puzzle",
    "tags": [
      "Unity",
      "Mobile",
      "Puzzle",
      "Foguetes",
      "3D"
    ],
    "featured": false,
    "tagline": "Plataforma lotada: lance os foguetes sem colisões!",
    "description": "Gire a plataforma espacial e selecione a ordem correta para lançar cada foguete sem que eles se choquem no ar. Um quebra-cabeça espacial de lógica e timing refinado.",
    "highlights": [
      "Controle de rotação da plataforma por toque suave",
      "Cálculo de trajetórias e previsão de colisões",
      "Progressão com dezenas de níveis e plataformas complexas"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Rocket Parking Icon.png",
    "cover": "assets/images/Rocket Parking 1.png",
    "screenshots": [
      "assets/images/Rocket Parking 1.png",
      "assets/images/Rocket Parking 2.png",
      "assets/images/Rocket Parking 3.png"
    ]
  },
  {
    "id": "pixel-invaders",
    "title": "Pixel Invaders",
    "category": "action-runner",
    "categoryLabel": "Ação & Shooter",
    "tags": [
      "Unity",
      "Mobile",
      "Shooter",
      "Upgrade",
      "3D/Pixel"
    ],
    "featured": false,
    "tagline": "Destrua invasores, ganhe XP e evolua seu arsenal!",
    "description": "Enfrente ondas de invasores pixelados que aumentam de poder a cada nível. Desvie dos ataques inimigos com swipe, acumule moedas e equipe armas mais rápidas e devastadoras.",
    "highlights": [
      "Controle fluído de esquiva e mira automática responsiva",
      "Árvore de evolução de armamentos e cadência de tiro",
      "Inimigos com padrões de ataque e chefões desafiadores"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Pixel Invaders Icon.png",
    "cover": "assets/images/Pixel Invaders 1.png",
    "screenshots": [
      "assets/images/Pixel Invaders 1.png",
      "assets/images/Pixel Invaders 2.png",
      "assets/images/Pixel Invaders 3.png",
      "assets/images/Pixel Invaders 4.png"
    ]
  },
  {
    "id": "my-closet",
    "title": "My Closet",
    "category": "puzzle",
    "categoryLabel": "Casual & Puzzle",
    "tags": [
      "Unity",
      "Mobile",
      "Organização",
      "Satisfying",
      "3D"
    ],
    "featured": false,
    "tagline": "Encontre os pares, organize sapatos e arrase nas fotos!",
    "description": "Toque nos sapatos para encontrar seus pares e organize-os harmoniosamente nas prateleiras do closet. Ao final, tire uma foto do seu armário impecável e veja quantas curtidas seu estilo alcança!",
    "highlights": [
      "Mecânica de 'pair matching' com sensação tátil gratificante",
      "Customização e arrumação livre de prateleiras",
      "Sistema social simulado de fotos e curtidas"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/My Closet Icon.png",
    "cover": "assets/images/My Closet 1.png",
    "screenshots": [
      "assets/images/My Closet 1.png",
      "assets/images/My Closet 2.png",
      "assets/images/My Closet 3.png"
    ]
  },
  {
    "id": "my-candy-shop",
    "title": "My Candy Shop",
    "category": "idle-strategy",
    "categoryLabel": "Idle & Estratégia",
    "tags": [
      "Unity",
      "Mobile",
      "Tycoon",
      "Loja",
      "3D"
    ],
    "featured": false,
    "tagline": "Compre ingredientes, fabrique e venda doces deliciosos!",
    "description": "Gerencie sua própria loja de doces! Compre matérias-primas, prepare doces de sabores variados, abasteça as prateleiras certas e atenda clientes exigentes. Contrate ajudantes para escalar seu negócio.",
    "highlights": [
      "Loop de fabricação, estocagem e venda direta",
      "Contratação e upgrade de assistentes para automação",
      "Expansão da loja com novos expositores e receitas"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/My Candy Shop.png",
    "cover": "assets/images/My Candy Shop 1.png",
    "screenshots": [
      "assets/images/My Candy Shop 1.png",
      "assets/images/My Candy Shop 2.png",
      "assets/images/My Candy Shop 3.png",
      "assets/images/My Candy Shop.png"
    ]
  },
  {
    "id": "monster-garden",
    "title": "Monster Garden",
    "category": "idle-strategy",
    "categoryLabel": "Idle & Estratégia",
    "tags": [
      "Unity",
      "Mobile",
      "Merge",
      "Monstros",
      "3D"
    ],
    "featured": false,
    "tagline": "Clique, combine e descubra criaturas fantásticas!",
    "description": "Combine monstros do mesmo tipo para descobrir novas criaturas surpreendentes e divertidas. Acumule moedas continuamente, mesmo quando estiver longe do jogo!",
    "highlights": [
      "Mecânica clássica e viciante de merge",
      "Renda passiva offline para engajamento contínuo",
      "Coleção de dezenas de monstros carismáticos"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Monster Garden Icon.png",
    "cover": "assets/images/Monster Garden 1.png",
    "screenshots": [
      "assets/images/Monster Garden 1.png",
      "assets/images/Monster Garden 2.png"
    ]
  },
  {
    "id": "magic-popcorn-machine",
    "title": "Magic Popcorn Machine",
    "category": "asmr-simulation",
    "categoryLabel": "Simulação & ASMR",
    "tags": [
      "Unity",
      "Mobile",
      "Física",
      "Satisfying",
      "3D"
    ],
    "featured": false,
    "tagline": "Quanto maior o multiplicador, mais pipoca estoura!",
    "description": "Segure para virar o copo e despejar o milho na máquina mágica. Acelere o estouro com multiplicadores, encha o balde até a borda e entregue aos clientes famintos com efeitos visuais super crocantes.",
    "highlights": [
      "Simulação de física de partículas e milhos estourando",
      "Sensação tátil e áudio imersivo de pipocas",
      "Controles intuitivos de toque contínuo"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Magic Popcorn Machine Icon.png",
    "cover": "assets/images/Magic Popcorn Machine 1.png",
    "screenshots": [
      "assets/images/Magic Popcorn Machine 1.png",
      "assets/images/Magic Popcorn Machine 2.png",
      "assets/images/Magic Popcorn Machine 3.png"
    ]
  },
  {
    "id": "lipstick-revenge",
    "title": "Lipstick Revenge",
    "category": "action-runner",
    "categoryLabel": "Ação & Runner",
    "tags": [
      "Unity",
      "Mobile",
      "Runner",
      "Casual",
      "3D"
    ],
    "featured": false,
    "tagline": "Batom como arma para uma vingança estilosa!",
    "description": "Colete batons ao longo da passarela para aumentar seu arsenal e aplicar uma maquiagem vingadora nos alvos. Uma experiência hiper-casual cheia de estilo e humor.",
    "highlights": [
      "Coleta progressiva de batons e projéteis",
      "Mecânica de disparo satisfatória contra obstáculos",
      "Animações expressivas e visual vibrante"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Lipstick Revenge Icon.png",
    "cover": "assets/images/Lipstick Revenge 1.png",
    "screenshots": [
      "assets/images/Lipstick Revenge 1.png",
      "assets/images/Lipstick Revenge 2.png",
      "assets/images/Lipstick Revenge 3.png"
    ]
  },
  {
    "id": "knockout-puzzle",
    "title": "Knockout Puzzle",
    "category": "puzzle",
    "categoryLabel": "Casual & Puzzle",
    "tags": [
      "Unity",
      "Mobile",
      "Puzzle",
      "PvP Battle",
      "3D"
    ],
    "featured": false,
    "tagline": "Monte o quebra-cabeça e nocauteie seus oponentes!",
    "description": "Empilhe as peças e forme o quebra-cabeça antes dos seus adversários. Toda vez que o puzzle é completado, o jogador com menos peças no tabuleiro é eliminado. Seja o último sobrevivente!",
    "highlights": [
      "Batalha competitiva em tempo real com regras de eliminação",
      "Raciocínio espacial e velocidade de encaixe",
      "Tensão crescente a cada rodada de nocaute"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Knockout Puzzle Icon.png",
    "cover": "assets/images/Knockout Puzzle 1.png",
    "screenshots": [
      "assets/images/Knockout Puzzle 1.png",
      "assets/images/Knockout Puzzle 2.png",
      "assets/images/Knockout Puzzle 3.png"
    ]
  },
  {
    "id": "knockem-down",
    "title": "Knock'em Down",
    "category": "action-runner",
    "categoryLabel": "Ação & Shooter",
    "tags": [
      "Unity",
      "Mobile",
      "Shooter",
      "Física",
      "3D"
    ],
    "featured": false,
    "tagline": "Derrube os inimigos da ponte antes que alcancem você!",
    "description": "Toque na tela para atirar com precisão e arremessar os invasores para fora da ponte. Acerte tiros na cabeça (headshots) para ativar o modo Fever e dizimar os inimigos mais resistentes.",
    "highlights": [
      "Física 'ragdoll' divertida ao lançar inimigos pelo ar",
      "Mecânica de Fever Mode ao acertar tiros críticos",
      "Inimigos armados com contra-ataques que exigem reflexos"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Knock'em Down Icon.png",
    "cover": "assets/images/Knock'em Down 1.jpg",
    "screenshots": [
      "assets/images/Knock'em Down 1.jpg",
      "assets/images/Knock'em Down 2.jpg"
    ]
  },
  {
    "id": "kings-army",
    "title": "Kings Army",
    "category": "idle-strategy",
    "categoryLabel": "Idle & Estratégia",
    "tags": [
      "Unity",
      "Mobile",
      "Estratégia",
      "Guerra",
      "3D"
    ],
    "featured": false,
    "tagline": "Recrute soldados, equipe espadas mágicas e vença a guerra!",
    "description": "Você é o Rei e precisa recrutar o maior exército possível. Equipe seus guerreiros com espadas afiadas e itens mágicos que aumentam sua força e tamanho para esmagar as defesas do castelo inimigo.",
    "highlights": [
      "Recrutamento veloz de pelotões no campo aberto",
      "Melhorias mágicas de tamanho e durabilidade dos soldados",
      "Conquista de castelos e confrontos massivos de exércitos"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Kings Army Icon.png",
    "cover": "assets/images/Kings Army 1.png",
    "screenshots": [
      "assets/images/Kings Army 1.png",
      "assets/images/Kings Army 2.png",
      "assets/images/Kings Army 3.png",
      "assets/images/Kings Army 4.png"
    ]
  },
  {
    "id": "ice-melt-race",
    "title": "Ice Melt Race",
    "category": "action-runner",
    "categoryLabel": "Ação & Corrida",
    "tags": [
      "Unity",
      "Mobile",
      "Corrida",
      "Física",
      "3D"
    ],
    "featured": false,
    "tagline": "Derreta o gelo com lança-chamas e cruze a ponte!",
    "description": "Abasteça seu tanque de gás e use o lança-chamas para derreter os blocos de gelo antes dos oponentes. A água derretida enche o reservatório que levanta a ponte para a vitória!",
    "highlights": [
      "Mecânica engenhosa de conversão: gelo em água para elevar pontes",
      "Gerenciamento de combustível e velocidade de derretimento",
      "Corrida acirrada contra oponentes inteligentes"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Ice Melt Race Icon.png",
    "cover": "assets/images/Ice Melt Race 1.png",
    "screenshots": [
      "assets/images/Ice Melt Race 1.png",
      "assets/images/Ice Melt Race 2.png",
      "assets/images/Ice Melt Race 3.png",
      "assets/images/Ice Melt Race 4.png"
    ]
  },
  {
    "id": "goal-master-3d",
    "title": "Goal Master 3D",
    "category": "action-runner",
    "categoryLabel": "Ação & Esporte",
    "tags": [
      "Unity",
      "Mobile",
      "Futebol",
      "Precisão",
      "3D"
    ],
    "featured": false,
    "tagline": "Chute nos alvos, derrube zagueiros e marque golaços!",
    "description": "Controles simples de toque com física envolvente: acerte os alvos espalhados pelo gol, derrube os defensores antes que bloqueiem seu chute e supere o goleiro em cenários criativos.",
    "highlights": [
      "Mecânica intuitiva de mira e curva na bola",
      "Obstáculos dinâmicos e defensores móveis",
      "Pontuações bônus por precisão milimétrica nos cantos"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Goal Master 3D.png",
    "cover": "assets/images/Goal Master 3D 1.png",
    "screenshots": [
      "assets/images/Goal Master 3D 1.png",
      "assets/images/Goal Master 3D 2.png",
      "assets/images/Goal Master 3D 3.png",
      "assets/images/Goal Master 3D.png"
    ]
  },
  {
    "id": "find-out-3d",
    "title": "Find Out 3D",
    "category": "puzzle",
    "categoryLabel": "Casual & Puzzle",
    "tags": [
      "Unity",
      "Mobile",
      "Trivia",
      "Lógica",
      "3D"
    ],
    "featured": false,
    "tagline": "Teste seus conhecimentos em uma trivia 3D interativa!",
    "description": "Arraste as respostas corretas até os alvos e desbloqueie bônus especiais. Uma experiência de perguntas e respostas visualmente rica com objetos táteis em 3D.",
    "highlights": [
      "Interação direta arrastando respostas 3D para o tabuleiro",
      "Variedade de temas e desafios de conhecimento geral",
      "Animações dinâmicas de comemoração e bônus"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Find Out 3D Icon.png",
    "cover": "assets/images/Find Out 3D 1.png",
    "screenshots": [
      "assets/images/Find Out 3D 1.png",
      "assets/images/Find Out 3D 2.png",
      "assets/images/Find Out 3D 3.png"
    ]
  },
  {
    "id": "duality-run",
    "title": "Duality Run",
    "category": "action-runner",
    "categoryLabel": "Ação & Runner",
    "tags": [
      "Unity",
      "Mobile",
      "Runner",
      "Troca de Cor",
      "3D"
    ],
    "featured": false,
    "tagline": "Alterne as cores no momento certo e destrua os inimigos!",
    "description": "Tudo tem dois lados: toque e solte para mudar sua cor. Absorva projéteis da mesma cor para ficar mais forte e gigante, mas cuidado: a cor oposta enfraquece seu herói até a derrota!",
    "highlights": [
      "Mecânica de polaridade cromática (estilo Ikaruga hiper-casual)",
      "Crescimento e encolhimento dinâmico de personagem",
      "Ritmo frenético com reflexos afiados"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Duality Run Icon.png",
    "cover": "assets/images/Duality Run 1.jpg",
    "screenshots": [
      "assets/images/Duality Run 1.jpg",
      "assets/images/Duality Run 2.jpg",
      "assets/images/Duality Run 3 .jpg"
    ]
  },
  {
    "id": "crazy-fall-3d",
    "title": "Crazy Fall 3D",
    "category": "action-runner",
    "categoryLabel": "Ação & Física",
    "tags": [
      "Unity",
      "Mobile",
      "Física Ragdoll",
      "Resgate",
      "3D"
    ],
    "featured": false,
    "tagline": "Salve os bonecos de teste antes que seja tarde demais!",
    "description": "Controle as pás e plataformas para amortecer a queda dos bonecos de teste (dummies) e direcioná-los com segurança até a caçamba do caminhão de resgate.",
    "highlights": [
      "Física 'ragdoll' cômica e altamente responsiva",
      "Obstáculos rotativos e armadilhas letais",
      "Desafio de coordenação motora e previsão de trajetórias"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Crazy Fall 3D Icon.png",
    "cover": "assets/images/Crazy Fall 3D 2.png",
    "screenshots": [
      "assets/images/Crazy Fall 3D 2.png",
      "assets/images/Crazy Fall 3D.png"
    ]
  },
  {
    "id": "arcadle",
    "title": "Arcadle",
    "category": "puzzle",
    "categoryLabel": "Casual & Puzzle",
    "tags": [
      "Unity",
      "Mobile",
      "Palavras",
      "Agilidade",
      "3D"
    ],
    "featured": false,
    "tagline": "Colete as letras na arena e descubra a palavra secreta!",
    "description": "Controle seu personagem por uma arena 3D, desvie de perigos e colete as letras na ordem certa para decifrar a palavra antes do seu oponente.",
    "highlights": [
      "Fusão única de jogo de palavras com movimentação arcade",
      "Competição acirrada contra inteligência artificial",
      "Vocabulário dinâmico e níveis rápidos de resolver"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Arcadle Icon.png",
    "cover": "assets/images/Arcadle 2.png",
    "screenshots": [
      "assets/images/Arcadle 2.png",
      "assets/images/Arcadle.png"
    ]
  },
  {
    "id": "clash-city-3d",
    "title": "Clash City 3D",
    "category": "idle-strategy",
    "categoryLabel": "Idle & Estratégia",
    "tags": [
      "Unity",
      "Mobile",
      "Cartas",
      "Estratégia",
      "3D"
    ],
    "featured": false,
    "tagline": "Lance cartas estratégicas nos prédios e domine a cidade!",
    "description": "Arraste cartas de tropas e melhorias nos seus prédios e veja seus soldados invadirem o território rival. Escolha suas jogadas com inteligência para defender seus pontos ou atacar com fúria.",
    "highlights": [
      "Sistema tático de cartas com efeitos imediatos no campo",
      "Gerenciamento de tropas e rotas de ataque urbano",
      "Evolução de defesas e ofensivas em tempo real"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Clash City 3D Icon.png",
    "cover": "assets/images/Clash City 3D 2.png",
    "screenshots": [
      "assets/images/Clash City 3D 2.png",
      "assets/images/Clash City 3D 3.png",
      "assets/images/Clash City 3D.png"
    ]
  },
  {
    "id": "build-and-destroy",
    "title": "Build and Destroy",
    "category": "action-runner",
    "categoryLabel": "Ação & Competição",
    "tags": [
      "Unity",
      "Mobile",
      "Construção",
      "Batalha",
      "3D"
    ],
    "featured": false,
    "tagline": "Empilhe blocos da sua cor e exploda a casa do rival!",
    "description": "Corra pelo mapa coletando tijolos da sua cor e construa sua casa rapidamente antes que o oponente detone ela com dinamite. Quem erguer o refúgio primeiro vence a partida!",
    "highlights": [
      "Coleta rápida de blocos e mecânica de empilhamento vertical",
      "Uso tático de explosivos para sabotar o progresso inimigo",
      "Partidas rápidas e cheias de adrenalina"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Build And Destroy.png",
    "cover": "assets/images/Build And Destroy.png",
    "screenshots": [
      "assets/images/Build And Destroy.png",
      "assets/images/Build And Destroy2.png",
      "assets/images/Build And Destroy3.png"
    ]
  },
  {
    "id": "asmr-crops",
    "title": "ASMR Crops",
    "category": "asmr-simulation",
    "categoryLabel": "Simulação & ASMR",
    "tags": [
      "Unity",
      "Mobile",
      "Colheita",
      "Relaxante",
      "3D"
    ],
    "featured": false,
    "tagline": "Voe sobre a plantação e colha com sons crocantes e relaxantes!",
    "description": "Pilote sua aeronave suavemente sobre extensos campos agrícolas, colhendo diferentes tipos de plantações ao som de áudios crocantes e ultra satisfatórios.",
    "highlights": [
      "Paisagens agrícolas estilizadas e relaxantes",
      "Design de som ASMR focado em alívio de estresse",
      "Controles fluidos e sensação de corte gratificante"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/ASMR Crops Icon.png",
    "cover": "assets/images/ASMR Crops.png",
    "screenshots": [
      "assets/images/ASMR Crops.png",
      "assets/images/ASMR Crops2.png"
    ]
  },
  {
    "id": "fridge-master",
    "title": "Fridge Master",
    "category": "puzzle",
    "categoryLabel": "Casual & Puzzle",
    "tags": [
      "Unity",
      "Mobile",
      "Organização",
      "Satisfying",
      "3D"
    ],
    "featured": false,
    "tagline": "Organize suas compras na geladeira com perfeição!",
    "description": "Otimize cada centímetro da geladeira! Arraste frutas, carnes, bebidas e lanches para as prateleiras certas, utilize as portas laterais e organize o freezer como um verdadeiro mestre.",
    "highlights": [
      "Mecânica espacial e tetris de supermercado 3D",
      "Variedade rica de alimentos modelados em 3D",
      "Sensação ultra gratificante de organização e ordem"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Fridge Master.png",
    "cover": "assets/images/Fridge Master 1.png",
    "screenshots": [
      "assets/images/Fridge Master 1.png",
      "assets/images/Fridge Master 2.png",
      "assets/images/Fridge Master 3.png",
      "assets/images/Fridge Master 4.png",
      "assets/images/Fridge Master.png"
    ]
  },
  {
    "id": "disc-battle-3d",
    "title": "Disc Battle 3D",
    "category": "action-runner",
    "categoryLabel": "Ação & Batalha",
    "tags": [
      "Unity",
      "Mobile",
      "Física",
      "Discos",
      "3D"
    ],
    "featured": false,
    "tagline": "Arremesse discos mortais, quebre blocos e elimine adversários!",
    "description": "Batalhas eletrizantes de arremesso de discos com ricochete dinâmico. Mire com precisão para quebrar as defesas inimigas e nocautear o rival antes que ele devolva o ataque.",
    "highlights": [
      "Física de ricochete nas paredes e nos blocos",
      "Timing de defesa e contra-ataque veloz",
      "Ambiente de arena futurista em 3D"
    ],
    "role": "Game Design, Programação & Modelagem 3D",
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Disc Battle 3D Icon.png",
    "cover": "assets/images/Disc Battle 3D 1.png",
    "screenshots": [
      "assets/images/Disc Battle 3D 1.png",
      "assets/images/Disc Battle 3D 2.png",
      "assets/images/Disc Battle 3D 3.png"
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GAMES_DATA;
}
