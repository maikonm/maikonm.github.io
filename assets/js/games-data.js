/**
 * Catálogo Multilíngue dos Jogos do Portfólio (PT, EN, ES)
 * Contém dados, tags, descrições localizadas e caminhos dos assets visuais
 */
const GAMES_DATA = [
  {
    "id": "idle-train-asmr",
    "title": "Idle Train ASMR",
    "category": "idle-strategy",
    "tags": [
      "Unity",
      "Mobile",
      "Idle Tycoon",
      "Puzzle",
      "3D"
    ],
    "featured": true,
    "categoryLabel": {
      "pt": "Idle & Estratégia",
      "en": "Idle & Strategy",
      "es": "Idle y Estrategia"
    },
    "tagline": {
      "pt": "Estratégia, puzzle e gerenciamento ferroviário lucrativo!",
      "en": "Strategy, puzzle & profit on the rails!",
      "es": "¡Estrategia, puzle y ganancias sobre rieles!"
    },
    "description": {
      "pt": "Embarque no Idle Train, um jogo viciante de estratégia e puzzle onde você constrói e gerencia sua própria malha ferroviária. Comece com um trem simples, adicione paradas, expanda rotas e faça merge de vagões para maximizar seus lucros.",
      "en": "Hop on Idle Train, an addictive strategy and puzzle game where you build and manage your very own railway network. Start with a simple train, expand tracks, add stations, and merge carriages to maximize passenger profits.",
      "es": "Sube a Idle Train, un adictivo juego de estrategia y puzles donde construyes y gestionas tu propia red ferroviaria. Comienza con un tren simple, añade estaciones, expande rutas y fusiona vagones para maximizar ganancias."
    },
    "highlights": {
      "pt": [
        "Sistema de merge de vagões do mesmo nível para desbloquear trens avançados",
        "Gerenciamento de caminhos, estações e bifurcações para passageiros",
        "Otimização de fluxo combinando cores de vagões com passageiros",
        "Sensação relaxante ASMR combinada com progressão tycoon"
      ],
      "en": [
        "Merge identical carriages to create advanced, higher-earning trains",
        "Manage track routes, forks, and stations to satisfy passenger demand",
        "Match carriage colors with passengers to optimize transit flow",
        "Relaxing ASMR tactile sensations paired with deep tycoon progression"
      ],
      "es": [
        "Fusiona vagones del mismo nivel para desbloquear trenes avanzados y más rentables",
        "Gestiona bifurcaciones, estaciones y rutas para satisfacer la demanda de pasajeros",
        "Empareja colores de vagones con pasajeros para optimizar el flujo",
        "Sensación relajante ASMR combinada con una progresión tycoon enriquecedora"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Estratégia",
      "Conquista",
      "3D"
    ],
    "featured": true,
    "categoryLabel": {
      "pt": "Idle & Estratégia",
      "en": "Idle & Strategy",
      "es": "Idle y Estrategia"
    },
    "tagline": {
      "pt": "Construa seu exército e lidere a conquista do mundo!",
      "en": "Build your army to conquer the world!",
      "es": "¡Construye tu ejército y conquista el mundo!"
    },
    "description": {
      "pt": "Você é o Rei! Use sua corneta para guiar trabalhadores a coletar recursos vitais pelo mapa, construa quartéis para treinar soldados e marche em direção à vitória contra as forças inimigas.",
      "en": "You are the King! Blow your horn to lead workers across the territory gathering vital resources. Construct barracks, train fearless soldiers, and march into battle to defeat rival fortresses.",
      "es": "¡Eres el Rey! Toca tu cuerno para guiar a los trabajadores a recolectar recursos clave por el mapa. Construye cuarteles, entrena soldados y marcha hacia la victoria para derrotar al enemigo."
    },
    "highlights": {
      "pt": [
        "Controle dinâmico de tropas e operários por comando sonoro",
        "Coleta estratégica de recursos e expansão de base",
        "Treinamento de soldados e batalhas épicas pelo domínio do mapa",
        "Visão tática e progressão gratificante"
      ],
      "en": [
        "Dynamic worker & troop command mechanics via horn alerts",
        "Strategic resource gathering and modular base expansion",
        "Barracks soldier training and massive territory conquests",
        "Tactical isometric view with rewarding progression loops"
      ],
      "es": [
        "Control dinámico de trabajadores y tropas mediante comandos de cuerno",
        "Recolección estratégica de recursos y expansión de la base",
        "Entrenamiento de soldados y batallas campales por el territorio",
        "Perspectiva táctica y un bucle de progresión gratificante"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Tower Defense",
      "Ação",
      "3D"
    ],
    "featured": true,
    "categoryLabel": {
      "pt": "Ação & Defesa",
      "en": "Action & Defense",
      "es": "Acción y Defensa"
    },
    "tagline": {
      "pt": "Colete recursos e defenda sua torre contra hordas!",
      "en": "Collect resources and defend your tower against waves!",
      "es": "¡Recolecta recursos y defiende tu torre de las hordas!"
    },
    "description": {
      "pt": "Proteja sua torre principal contra ondas incessantes de inimigos. Colete recursos pelo campo de batalha, construa e aprimore torres ofensivas e reforce sua base antes da próxima invasão.",
      "en": "Defend against relentless waves of enemies by gathering resources on the battlefield and constructing formidable attack towers. Earn coins from fallen foes to continuously upgrade defenses.",
      "es": "Defiende tu torre principal de oleadas de invasores recolectando recursos en el campo de batalla y construyendo torres defensivas. Mejora tus defensas derrotando enemigos."
    },
    "highlights": {
      "pt": [
        "Ciclo intenso de coleta de suprimentos em meio ao perigo",
        "Construção e upgrade de torres defensivas estratégicas",
        "Sistema de ondas de inimigos com dificuldade progressiva",
        "Feedback visual de impacto e combate fluido"
      ],
      "en": [
        "Fast-paced supply gathering under constant threat",
        "Strategic construction and leveling of defense turrets",
        "Progressive wave escalation system testing player tactics",
        "Juicy combat impact and responsive mobile controls"
      ],
      "es": [
        "Ciclo intenso de recolección de suministros en pleno peligro",
        "Construcción y mejora de torres defensivas estratégicas",
        "Sistema de oleadas con dificultad progresiva y desafiante",
        "Impacto visual contundente y combate ágil"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Runner",
      "Transformação",
      "3D"
    ],
    "featured": true,
    "categoryLabel": {
      "pt": "Ação & Runner",
      "en": "Action & Runner",
      "es": "Acción y Runner"
    },
    "tagline": {
      "pt": "O caminho da beleza e transformação estética!",
      "en": "The runway of beauty and aesthetic transformation!",
      "es": "¡La pasarela de la belleza y la transformación!"
    },
    "description": {
      "pt": "Um divertido runner hiper-casual onde você toma decisões em frações de segundo para coletar as melhores características estéticas ao longo da pista, evitando obstáculos e completando uma transformação incrível.",
      "en": "The path of beauty! A playful hyper-casual runner where split-second gate choices shape stunning facial aesthetics. Dodge hazardous obstacles and cross the runway transformed.",
      "es": "¡El camino de la belleza! Un divertido runner hiper-casual donde decisiones rápidas transforman rostros. Elige los mejores rasgos a lo largo de la pista y evita los obstáculos."
    },
    "highlights": {
      "pt": [
        "Mecânica de esteira e escolha de portas multiplicadoras/estéticas",
        "Deformação e customização de modelo 3D em tempo real",
        "Feedback visual instantâneo a cada item coletado",
        "Level design dinâmico com obstáculos desafiadores"
      ],
      "en": [
        "Multiplier gate selection mechanics with rapid choices",
        "Real-time 3D model blendshapes and cosmetic morphing",
        "Instant visual and audio feedback upon item pickup",
        "Dynamic runway level design with varied hurdles"
      ],
      "es": [
        "Mecánica de puertas multiplicadoras con elecciones rápidas",
        "Transformación y personalización 3D en tiempo real",
        "Retroalimentación visual inmediata con cada objeto recogido",
        "Diseño de niveles dinámico y pasarelas coloridas"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Puzzle",
      "Culinária",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Casual & Puzzle",
      "en": "Casual & Puzzle",
      "es": "Casual y Puzle"
    },
    "tagline": {
      "pt": "Resolva o quebra-cabeça e prepare os pratos no ponto certo!",
      "en": "Solve the puzzle without burning the food!",
      "es": "¡Resuelve el puzle sin quemar la comida!"
    },
    "description": {
      "pt": "Deslize para movimentar os alimentos e cozinhar ambos os lados nos queimadores sem queimá-los. Se cozinhar um lado duas vezes, a comida queima! Conclua o cozimento e monte o prato perfeito para os clientes.",
      "en": "Solve the culinary puzzle without burning the food! Swipe to flip and move ingredients across the burners. Cook both sides evenly—cook a side twice and it burns! Plate up perfectly for eager diners.",
      "es": "¡Resuelve el puzle sin quemar la comida! Desliza para mover los alimentos en la plancha. Cocina ambos lados a la perfección: si cocinas un lado dos veces, ¡se quemará! Sírvelo al cliente."
    },
    "highlights": {
      "pt": [
        "Mecânica de deslizamento (swipe) com física precisa",
        "Risco e recompensa: vire os alimentos na hora certa",
        "Montagem de pratos e entrega aos clientes"
      ],
      "en": [
        "Grid-based swipe mechanics with responsive tactile controls",
        "Risk vs. reward timing: flip before burning",
        "Order completion and customer plating satisfaction"
      ],
      "es": [
        "Control por deslizamiento (swipe) fluido y preciso",
        "Riesgo y recompensa: voltea los alimentos en el momento justo",
        "Montaje de platos y entrega a clientes exigentes"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Runner",
      "Crescimento",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Ação & Runner",
      "en": "Action & Runner",
      "es": "Acción y Runner"
    },
    "tagline": {
      "pt": "Cresça coletando doces e crie atalhos inteligentes!",
      "en": "Avoid getting cut while growing your candy body!",
      "es": "¡Crece comiendo caramelos y crea atajos ingeniosos!"
    },
    "description": {
      "pt": "Colete doces coloridos para expandir seu corpo enquanto desvia de lâminas afiadas. Use sua extensão corporal estrategicamente para criar atalhos sobre os obstáculos e cruzar a linha de chegada em primeiro.",
      "en": "Avoid getting cut! Collect sweets to grow your body, then use your extended tail smartly to bridge gaps and create shortcuts across dangerous obstacles.",
      "es": "¡Evita los cortes! Crece recogiendo dulces mientras esquivas cuchillas afiladas. Usa tu cuerpo extendido para crear atajos sobre el vacío y ganar la carrera."
    },
    "highlights": {
      "pt": [
        "Mecânica de expansão corporal para criar pontes e atalhos",
        "Obstáculos giratórios com lâminas dinâmicas",
        "Estética visual doce e vibrante"
      ],
      "en": [
        "Body expansion shortcut creation mechanics",
        "Dynamic spinning blade hazards and dodge precision",
        "Vibrant candy-themed world design"
      ],
      "es": [
        "Mecánica de crecimiento corporal para tender puentes y atajos",
        "Peligros de cuchillas giratorias y reflejos rápidos",
        "Estilo visual colorido y azucarado"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Puzzle",
      "Foguetes",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Casual & Puzzle",
      "en": "Casual & Puzzle",
      "es": "Casual y Puzle"
    },
    "tagline": {
      "pt": "Plataforma lotada: lance os foguetes sem colisões!",
      "en": "Platform is full: launch rockets and avoid collisions!",
      "es": "¡Plataforma llena: despega los cohetes sin choques!"
    },
    "description": {
      "pt": "Gire a plataforma espacial e selecione a ordem correta para lançar cada foguete sem que eles se choquem no ar. Um quebra-cabeça espacial de lógica e timing refinado.",
      "en": "The platform is packed! Tap to launch rockets and swipe to rotate the landing pad. Plan the launch sequences carefully to clear the bay without mid-air collisions.",
      "es": "¡La plataforma está llena! Desliza para rotar la base y toca para lanzar los cohetes en el orden correcto sin que choquen en el aire."
    },
    "highlights": {
      "pt": [
        "Controle de rotação 3D da plataforma espacial",
        "Cálculo de trajetórias e previsão de colisões",
        "Dezenas de níveis com complexidade crescente"
      ],
      "en": [
        "Intuitive 3D space platform rotation controls",
        "Trajectory calculation and collision prediction",
        "Increasingly challenging rocket launch patterns"
      ],
      "es": [
        "Rotación 3D fluida de la plataforma de despegue",
        "Cálculo de trayectorias y prevención de choques",
        "Docenas de niveles con patrones desafiantes"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Shooter",
      "Upgrade",
      "3D/Pixel"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Ação & Shooter",
      "en": "Action & Shooter",
      "es": "Acción y Shooter"
    },
    "tagline": {
      "pt": "Destrua invasores, ganhe XP e evolua seu arsenal!",
      "en": "Shoot, gain XP, and upgrade to face rising dangers!",
      "es": "¡Destruye invasores, gana XP y evoluciona tus armas!"
    },
    "description": {
      "pt": "Enfrente ondas de invasores pixelados que aumentam de poder a cada nível. Desvie dos ataques inimigos com swipe, acumule moedas e equipe armas mais rápidas e devastadoras.",
      "en": "Gain experience by shooting down pixel invaders! Upgrade your fighter with faster firing rates, stronger weapons, and agile evasion maneuvers to survive escalating enemy waves.",
      "es": "¡Dispara, sube de nivel y hazte más fuerte! Elimina invasores pixelados, esquiva ataques y desbloquea armas devastadoras para superar oleadas cada vez más peligrosas."
    },
    "highlights": {
      "pt": [
        "Esquiva responsiva e mira automática dinâmica",
        "Árvore de evolução de armamentos e cadência",
        "Inimigos com padrões de ataque variados"
      ],
      "en": [
        "Responsive swipe dodging with dynamic auto-targeting",
        "Extensive weapon upgrade and fire-rate progression",
        "Challenging wave formations with unique attack patterns"
      ],
      "es": [
        "Esquiva táctil fluida con apuntado automático dinámico",
        "Árbol de mejoras para cadencia de fuego y poder destructivo",
        "Formaciones enemigas con patrones de ataque diversos"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Organização",
      "Satisfying",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Casual & Puzzle",
      "en": "Casual & Puzzle",
      "es": "Casual y Puzle"
    },
    "tagline": {
      "pt": "Encontre os pares, organize sapatos e arrase nas fotos!",
      "en": "Match and organize pairs of shoes your way!",
      "es": "¡Empareja, organiza zapatos y luce tu armario!"
    },
    "description": {
      "pt": "Toque nos sapatos para encontrar seus pares e organize-os harmoniosamente nas prateleiras do closet. Ao final, tire uma foto do seu armário impecável e veja quantas curtidas seu estilo alcança!",
      "en": "Match and organize your shoe collection! Tap shoes to identify matching pairs, place them neatly on display shelves, and snap a stylish photo to rack up social likes.",
      "es": "¡Empareja y organiza tu armario a tu estilo! Encuentra los pares de zapatos, colócalos con armonía en las estanterías y tómate una foto para conseguir likes."
    },
    "highlights": {
      "pt": [
        "Mecânica satisfatória de busca e combinação de pares",
        "Organização livre de prateleiras 3D",
        "Simulação de feedback social com fotos e curtidas"
      ],
      "en": [
        "Satisfying pair matching with tactile shoe physics",
        "Customizable 3D closet shelf arrangement",
        "Simulated social photo showcase with like counts"
      ],
      "es": [
        "Mecánica relajante de emparejar calzado en 3D",
        "Organización libre y estética de estanterías",
        "Sistema social simulado de fotos y puntuación de likes"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Tycoon",
      "Loja",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Idle & Estratégia",
      "en": "Idle & Strategy",
      "es": "Idle y Estrategia"
    },
    "tagline": {
      "pt": "Compre ingredientes, fabrique e venda doces deliciosos!",
      "en": "Craft and sell delicious sweets to demanding customers!",
      "es": "¡Compra ingredientes, elabora y vende deliciosos dulces!"
    },
    "description": {
      "pt": "Gerencie sua própria loja de doces! Compre matérias-primas, prepare doces de sabores variados, abasteça as prateleiras certas e atenda clientes exigentes. Contrate ajudantes para escalar seu negócio.",
      "en": "Buy ingredients and craft candies in diverse delicious flavors. Stock display cases, satisfy eager shoppers, and hire helpful staff to scale your confectionery empire.",
      "es": "¡Haz y vende dulces irresistibles! Compra ingredientes, prepara golosinas de variados sabores, colócalas en los mostradores y contrata ayudantes para expandir tu negocio."
    },
    "highlights": {
      "pt": [
        "Ciclo completo de fabricação, reposição e vendas",
        "Contratação de funcionários para automação",
        "Desbloqueio de receitas e novos balcões"
      ],
      "en": [
        "End-to-end recipe crafting and shelving logistics",
        "Store automation via assistant hiring and upgrades",
        "Expansion loop with diverse candy recipes and displays"
      ],
      "es": [
        "Bucle completo de fabricación, surtido y ventas",
        "Automatización mediante ayudantes y mejoras",
        "Expansión de tienda con nuevas recetas y expositores"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Merge",
      "Monstros",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Idle & Estratégia",
      "en": "Idle & Strategy",
      "es": "Idle y Estrategia"
    },
    "tagline": {
      "pt": "Clique, combine e descubra criaturas fantásticas!",
      "en": "Tap, merge, and discover delightful new monsters!",
      "es": "¡Toca, combina y descubre monstruos fantásticos!"
    },
    "description": {
      "pt": "Combine monstros do mesmo tipo para descobrir novas criaturas surpreendentes e divertidas. Acumule moedas continuamente, mesmo quando estiver longe do jogo!",
      "en": "Monster Garden is an easy-to-play merge game! Click, merge, and discover cute, eccentric creatures while generating idle income even when offline.",
      "es": "Monster Garden es fácil y divertido: combina monstruos del mismo tipo, descubre criaturas sorprendentes y gana monedas incluso desconectado."
    },
    "highlights": {
      "pt": [
        "Mecânica viciante de merge com animações divertidas",
        "Geração de renda passiva offline",
        "Dezenas de criaturas para colecionar"
      ],
      "en": [
        "Satisfying merge loop with whimsical monster animations",
        "Passive offline earnings for continuous player rewards",
        "Extensive monster compendium to unlock"
      ],
      "es": [
        "Mecánica de fusión gratificante con animaciones cómicas",
        "Ingresos pasivos mientras estás fuera del juego",
        "Gran colección de monstruos por descubrir"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Física",
      "Satisfying",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Simulação & ASMR",
      "en": "Simulation & ASMR",
      "es": "Simulación y ASMR"
    },
    "tagline": {
      "pt": "Quanto maior o multiplicador, mais pipoca estoura!",
      "en": "The higher the multiplier, the more popcorn bursts!",
      "es": "¡Mayor multiplicador, más palomitas estallan!"
    },
    "description": {
      "pt": "Segure para virar o copo e despejar o milho na máquina mágica. Acelere o estouro com multiplicadores, encha o balde até a borda e entregue aos clientes famintos com efeitos visuais super crocantes.",
      "en": "Hold to tilt the corn into the popping chamber. Watch multiplier gates dramatically boost kernel output, fill the buckets to the brim, and serve hungry theater goers.",
      "es": "Mantén presionado para verter el maíz en la máquina mágica. Aumenta los multiplicadores para reventar palomitas a granel, llena los cubos y sirve a los clientes."
    },
    "highlights": {
      "pt": [
        "Física tátil de partículas e simulação de estouro",
        "Design de som crocante com apelo ASMR",
        "Controles intuitivos de toque e retenção"
      ],
      "en": [
        "Tactile particle physics simulating popping kernels",
        "Crispy audio design geared for ASMR satisfaction",
        "Intuitive one-touch hold controls"
      ],
      "es": [
        "Física de partículas realista y estallido satisfactorio",
        "Diseño sonoro crujiente con experiencia ASMR",
        "Controles intuitivos de pulsación continua"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Runner",
      "Casual",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Ação & Runner",
      "en": "Action & Runner",
      "es": "Acción y Runner"
    },
    "tagline": {
      "pt": "Batom como arma para uma vingança estilosa!",
      "en": "Lipsticks as your weapon for satisfying revenge!",
      "es": "¡Pintalabios como arma para una dulce venganza!"
    },
    "description": {
      "pt": "Colete batons ao longo da passarela para aumentar seu arsenal e aplicar uma maquiagem vingadora nos alvos. Uma experiência hiper-casual cheia de estilo e humor.",
      "en": "Turn cosmetic beauty into fierce projectiles! Collect lipsticks along the runway, stack your ammunition, and unleash satisfying makeover revenge on obstacles.",
      "es": "Usa lápices labiales como munición en la pasarela. Recolecta cosméticos para aumentar tu arsenal y consigue una divertida revancha con mucho estilo."
    },
    "highlights": {
      "pt": [
        "Coleta contínua de projéteis cosméticos",
        "Mecânica divertida de disparo em alvos ao longo da pista",
        "Visual pop moderno e estilizado"
      ],
      "en": [
        "Cosmetic stacking and projectile shooting gameplay",
        "Humorous target feedback and dynamic impact reactions",
        "Vibrant pop-art aesthetic on mobile"
      ],
      "es": [
        "Acumulación de proyectiles cosméticos en carrera",
        "Disparos y transformaciones cómicas en los objetivos",
        "Estilo visual pop colorido y dinámico"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Puzzle",
      "PvP Battle",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Casual & Puzzle",
      "en": "Casual & Puzzle",
      "es": "Casual y Puzle"
    },
    "tagline": {
      "pt": "Monte o quebra-cabeça e nocauteie seus oponentes!",
      "en": "Complete the puzzle and knockout your opponents!",
      "es": "¡Arma el puzle y noquea a tus oponentes!"
    },
    "description": {
      "pt": "Empilhe as peças e forme o quebra-cabeça antes dos seus adversários. Toda vez que o puzzle é completado, o jogador com menos peças no tabuleiro é eliminado. Seja o último sobrevivente!",
      "en": "Stack puzzle pieces and assemble your board before rivals. Whenever a round concludes, the player with the fewest pieces placed faces knockout elimination. Be the last one standing!",
      "es": "Coloca piezas y completa el puzle antes que tus rivales. Cada vez que termina la ronda, el jugador con menos piezas queda eliminado. ¡Sé el último en pie!"
    },
    "highlights": {
      "pt": [
        "Batalha de puzzle com regra competitiva de eliminação",
        "Raciocínio espacial e reflexos rápidos",
        "Tensão crescente a cada rodada de nocaute"
      ],
      "en": [
        "Competitive elimination battle-royale puzzle mechanics",
        "Spatial orientation and fast-paced piece placement",
        "Rising round-by-round tension towards final knockout"
      ],
      "es": [
        "Mecánica competitiva de puzles con eliminación directa",
        "Orientación espacial y rapidez de colocación",
        "Tensión creciente en cada ronda hasta el nocaut final"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Shooter",
      "Física",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Ação & Shooter",
      "en": "Action & Shooter",
      "es": "Acción y Shooter"
    },
    "tagline": {
      "pt": "Derrube os inimigos da ponte antes que alcancem você!",
      "en": "Can you knock them down before they cross the bridge?",
      "es": "¡Derríbalos del puente antes de que te alcancen!"
    },
    "description": {
      "pt": "Toque na tela para atirar com precisão e arremessar os invasores para fora da ponte. Acerte tiros na cabeça (headshots) para ativar o modo Fever e dizimar os inimigos mais resistentes.",
      "en": "Tap to shoot and blast charging enemies off the narrow bridge. Score consecutive headshots to trigger Fever Mode and blow back increasingly durable waves.",
      "es": "Toca la pantalla para disparar y arrojar a los enemigos fuera del puente. Consigue tiros a la cabeza para activar el Modo Fever y frenar invasores resistentes."
    },
    "highlights": {
      "pt": [
        "Física de arremesso e ragdoll cômico",
        "Fever Mode ativado por precisão em headshots",
        "Inimigos com armas e contra-ataques que exigem timing"
      ],
      "en": [
        "Punchy impulse physics hurling ragdoll enemies into the abyss",
        "Fever Mode trigger rewarding surgical headshot accuracy",
        "Armed enemies challenging player reflexes and priority targeting"
      ],
      "es": [
        "Física ragdoll divertida arrojando enemigos por los aires",
        "Modo Fever activado por puntería a la cabeza",
        "Enemigos armados con contraataques que exigen reflejos"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Estratégia",
      "Guerra",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Idle & Estratégia",
      "en": "Idle & Strategy",
      "es": "Idle y Estrategia"
    },
    "tagline": {
      "pt": "Recrute soldados, equipe espadas mágicas e vença a guerra!",
      "en": "Recruit soldiers, wield magic items, and storm the castle!",
      "es": "¡Recluta soldados, equipa espadas mágicas y gana la guerra!"
    },
    "description": {
      "pt": "Você é o Rei e precisa recrutar o maior exército possível. Equipe seus guerreiros com espadas afiadas e itens mágicos que aumentam sua força e tamanho para esmagar as defesas do castelo inimigo.",
      "en": "Prepare for war! As king, swiftly recruit soldiers across the plains. Equip troops with swords to increase durability, or grant magic items to supercharge their size before storming enemy keeps.",
      "es": "¡Prepárate para la guerra! Eres el rey y debes reclutar tantos soldados como puedas. Equípalos con espadas y magia para hacerlos gigantes y conquistar el castillo enemigo."
    },
    "highlights": {
      "pt": [
        "Recrutamento veloz de pelotões no campo aberto",
        "Melhorias mágicas de tamanho e durabilidade dos soldados",
        "Conquista de castelos e confrontos massivos de exércitos"
      ],
      "en": [
        "Rapid open-field platoon recruitment mechanics",
        "Magical growth and durability power-ups for soldiers",
        "Massive army skirmishes culminating in castle sieges"
      ],
      "es": [
        "Reclutamiento ágil de tropas en campo abierto",
        "Mejoras mágicas de tamaño y resistencia física",
        "Asedio de castillos y enfrentamientos multitudinarios"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Corrida",
      "Física",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Ação & Corrida",
      "en": "Action & Race",
      "es": "Acción y Carrera"
    },
    "tagline": {
      "pt": "Derreta o gelo com lança-chamas e cruze a ponte!",
      "en": "Melt the ice with flamethrowers to raise the bridge!",
      "es": "¡Derrite el hielo con lanzallamas y cruza el puente!"
    },
    "description": {
      "pt": "Abasteça seu tanque de gás e use o lança-chamas para derreter os blocos de gelo antes dos oponentes. A água derretida enche o reservatório que levanta a ponte para a vitória!",
      "en": "Melt the ice before your opponents win the race! Fill your gas tank, blast giant ice blocks with your flamethrower, and use melted water levels to hoist the bridge to victory.",
      "es": "¡Derrite el hielo antes que tus rivales para ganar la carrera! Llena tu tanque de combustible, usa el lanzallamas y aprovecha el agua para elevar el puente triunfal."
    },
    "highlights": {
      "pt": [
        "Mecânica engenhosa de conversão: gelo em água para elevar pontes",
        "Gerenciamento de combustível e velocidade de derretimento",
        "Corrida acirrada contra oponentes inteligentes"
      ],
      "en": [
        "Clever thermodynamic puzzle: melting ice into functional bridge hydraulics",
        "Fuel tank capacity management and burn-rate pacing",
        "Exciting head-to-head racing against AI rivals"
      ],
      "es": [
        "Conversión ingeniosa: derrite hielo para llenar el tanque y elevar puentes",
        "Gestión de combustible y velocidad de fundición",
        "Competencia directa y reñida contra oponentes"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Futebol",
      "Precisão",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Ação & Esporte",
      "en": "Action & Sports",
      "es": "Acción y Deporte"
    },
    "tagline": {
      "pt": "Chute nos alvos, derrube zagueiros e marque golaços!",
      "en": "Kick the ball into targets and outsmart the keeper!",
      "es": "¡Dispara a los objetivos, elude defensas y anota!"
    },
    "description": {
      "pt": "Controles simples de toque com física envolvente: acerte os alvos espalhados pelo gol, derrube os defensores antes que bloqueiem seu chute e supere o goleiro em cenários criativos.",
      "en": "Kick the ball into targets! Knock down defenders before they tackle you, curve shots past the goalkeeper, and solve trick-shot scenarios with responsive one-tap ball physics.",
      "es": "¡Chuta a los objetivos! Derriba defensores antes de que te alcancen, apunta a las dianas y supera al portero con controles sencillos de un solo toque."
    },
    "highlights": {
      "pt": [
        "Curvas e efeitos realistas na bola por toque intuitivo",
        "Alvos dinâmicos e defensores móveis",
        "Desafios progressivos de cobrança de falta e pontaria"
      ],
      "en": [
        "Intuitive curve and trajectory controls for satisfying ball spin",
        "Dynamic obstacle formations with moving goalkeepers",
        "Trick-shot challenges rewarding corner-pocket precision"
      ],
      "es": [
        "Curvas y efectos de balón realistas con control táctil",
        "Objetivos dinámicos y defensas en movimiento",
        "Desafíos de tiro libre con recompensas de precisión"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Trivia",
      "Lógica",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Casual & Puzzle",
      "en": "Casual & Puzzle",
      "es": "Casual y Puzle"
    },
    "tagline": {
      "pt": "Teste seus conhecimentos em uma trivia 3D interativa!",
      "en": "Test your knowledge in a fun and interactive 3D trivia!",
      "es": "¡Pon a prueba tus conocimientos en una trivia 3D interactiva!"
    },
    "description": {
      "pt": "Arraste as respostas corretas até os alvos e desbloqueie bônus especiais. Uma experiência de perguntas e respostas visualmente rica com objetos táteis em 3D.",
      "en": "Test your knowledge in this fun and interactive trivia game! Drag answers directly to the matching 3D slots and earn multiplier bonuses for swift, accurate guessing.",
      "es": "¡Demuestra tus conocimientos en esta trivia interactiva! Arrastra respuestas a los objetivos 3D y gana bonificaciones por respuestas acertadas."
    },
    "highlights": {
      "pt": [
        "Interação tátil arrastando respostas 3D para os slots",
        "Variedade rica de temas e perguntas instigantes",
        "Feedback visual imediato e bônus de pontuação"
      ],
      "en": [
        "Tactile drag-and-drop gameplay with 3D trivia answer tokens",
        "Diverse topic variety spanning general knowledge and pop culture",
        "Instant visual reward celebrations and streak multiplier bonuses"
      ],
      "es": [
        "Interacción táctil arrastrando respuestas 3D a sus ranuras",
        "Amplia variedad de temas y preguntas interesantes",
        "Bonificaciones de racha y animaciones festivas"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Runner",
      "Troca de Cor",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Ação & Runner",
      "en": "Action & Runner",
      "es": "Acción y Runner"
    },
    "tagline": {
      "pt": "Alterne as cores no momento certo e destrua os inimigos!",
      "en": "Change colors at the right time and absorb your enemies!",
      "es": "¡Cambia de color en el momento justo y vence a tus enemigos!"
    },
    "description": {
      "pt": "Tudo tem dois lados: toque e solte para mudar sua cor. Absorva projéteis da mesma cor para ficar mais forte e gigante, mas cuidado: a cor oposta enfraquece seu herói até a derrota!",
      "en": "Good or evil, black or white? Tap and release to shift polarity colors on the fly. Collide with matching colors to supercharge your size, but avoid opposite colors before you fade away!",
      "es": "¿Luz o sombra? Toca y suelta para cambiar de color. Absorbe proyectiles de tu mismo color para crecer y fortalecerte, pero evita el color opuesto o te debilitarás hasta caer."
    },
    "highlights": {
      "pt": [
        "Mecânica de polaridade cromática (estilo Ikaruga hiper-casual)",
        "Crescimento e encolhimento dinâmico de personagem",
        "Ritmo frenético com reflexos afiados"
      ],
      "en": [
        "Chromatic polarity switching mechanic applied to hyper-casual pacing",
        "Dynamic character mesh scaling based on color absorption",
        "High-stakes rhythmic reaction challenges"
      ],
      "es": [
        "Mecánica de polaridad cromática aplicada a un runner ágil",
        "Escala dinámica del personaje según la absorción de energía",
        "Ritmo trepidante que pone a prueba tus reflejos"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Física Ragdoll",
      "Resgate",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Ação & Física",
      "en": "Action & Physics",
      "es": "Acción y Física"
    },
    "tagline": {
      "pt": "Salve os bonecos de teste antes que seja tarde demais!",
      "en": "Save the crash test dummies from destruction!",
      "es": "¡Salva a los muñecos de prueba del desastre!"
    },
    "description": {
      "pt": "Controle as pás e plataformas para amortecer a queda dos bonecos de teste (dummies) e direcioná-los com segurança até a caçamba do caminhão de resgate.",
      "en": "Do you have what it takes to rescue falling crash dummies? Rotate bumpers and bounce platforms to cushion their drop and safely guide them into the transport truck.",
      "es": "¿Podrás salvar a los muñecos de prueba de la caída? Mueve plataformas y amortiguadores para encauzarlos a salvo hasta el camión de rescate."
    },
    "highlights": {
      "pt": [
        "Física ragdoll cômica e altamente responsiva",
        "Obstáculos rotativos e armadilhas letais",
        "Desafio de coordenação motora e previsão de trajetórias"
      ],
      "en": [
        "Exaggerated ragdoll physics with comical bounce reactions",
        "Rotating paddles and hazard deflection gameplay",
        "Trajectory prediction challenges under time pressure"
      ],
      "es": [
        "Física ragdoll cómica con rebotes espectaculares",
        "Obstáculos móviles y trampas que desvían las trayectorias",
        "Desafíos de coordinación y reflejos en caída libre"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Crazy Fall 3D Icon.png",
    "cover": "assets/images/Crazy Fall 3D.png",
    "screenshots": [
      "assets/images/Crazy Fall 3D.png",
      "assets/images/Crazy Fall 3D 2.png"
    ]
  },
  {
    "id": "arcadle",
    "title": "Arcadle",
    "category": "puzzle",
    "tags": [
      "Unity",
      "Mobile",
      "Palavras",
      "Agilidade",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Casual & Puzzle",
      "en": "Casual & Puzzle",
      "es": "Casual y Puzle"
    },
    "tagline": {
      "pt": "Colete as letras na arena e descubra a palavra secreta!",
      "en": "Find and collect the letters before your opponent!",
      "es": "¡Recoge las letras en la arena y descubre la palabra!"
    },
    "description": {
      "pt": "Controle seu personagem por uma arena 3D, desvie de perigos e colete as letras na ordem certa para decifrar a palavra antes do seu oponente.",
      "en": "Control your runner in a vibrant 3D arena to pick up scattered letters and assemble hidden words before your AI competitor solves the anagram first.",
      "es": "Mueve a tu personaje en una arena 3D y recoge las letras para formar la palabra secreta antes que tu rival. ¡Rapidez y vocabulario en acción!"
    },
    "highlights": {
      "pt": [
        "Fusão inovadora de jogo de palavras com movimentação arcade",
        "Competição acirrada contra oponentes ágeis",
        "Vocabulário dinâmico e partidas rápidas"
      ],
      "en": [
        "Innovative fusion of word puzzle unscrambling and 3D arcade navigation",
        "Competitive race against dynamic AI letter-chasers",
        "Bite-sized vocabulary rounds ideal for mobile play"
      ],
      "es": [
        "Fusión novedosa de juego de palabras y movimiento arcade en 3D",
        "Competencia directa contra rivales por atrapar letras",
        "Partidas rápidas y enriquecedoras para partidas móviles"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Arcadle Icon.png",
    "cover": "assets/images/Arcadle.png",
    "screenshots": [
      "assets/images/Arcadle.png",
      "assets/images/Arcadle 2.png"
    ]
  },
  {
    "id": "clash-city-3d",
    "title": "Clash City 3D",
    "category": "idle-strategy",
    "tags": [
      "Unity",
      "Mobile",
      "Cartas",
      "Estratégia",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Idle & Estratégia",
      "en": "Idle & Strategy",
      "es": "Idle y Estrategia"
    },
    "tagline": {
      "pt": "Lance cartas estratégicas nos prédios e domine a cidade!",
      "en": "Drag cards onto buildings and watch units overrun the enemy!",
      "es": "¡Lanza cartas sobre los edificios y conquista la ciudad!"
    },
    "description": {
      "pt": "Arraste cartas de tropas e melhorias nos seus prédios e veja seus soldados invadirem o território rival. Escolha suas jogadas com inteligência para defender seus pontos ou atacar com fúria.",
      "en": "Drag tactical unit cards onto your buildings and watch soldiers storm rival bastions. Balance defensive reinforcements with aggressive lane pushes to liberate the metropolis.",
      "es": "Arrastra cartas sobre tus edificios y despliega tropas para aplastar las defensas enemigas. Decide si reforzar tu posición o lanzar una ofensiva despiadada."
    },
    "highlights": {
      "pt": [
        "Sistema de cartas táticas com efeitos instantâneos",
        "Gerenciamento de tropas e rotas de ataque urbano",
        "Evolução de defesas e ofensivas em tempo real"
      ],
      "en": [
        "Tactical card deployment mechanics with instant troop mobilization",
        "Lane-based urban warfare and territory control",
        "Real-time balance of fortification defense and siege assaults"
      ],
      "es": [
        "Sistema de cartas tácticas con despliegue de tropas inmediato",
        "Control de rutas urbanas y conquista territorial",
        "Evolución equilibrada entre defensa y asedio en tiempo real"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
    "engine": "Unity Engine / C# / Blender 3D",
    "icon": "assets/images/Clash City 3D Icon.png",
    "cover": "assets/images/Clash City 3D.png",
    "screenshots": [
      "assets/images/Clash City 3D.png",
      "assets/images/Clash City 3D 2.png",
      "assets/images/Clash City 3D 3.png"
    ]
  },
  {
    "id": "build-and-destroy",
    "title": "Build and Destroy",
    "category": "action-runner",
    "tags": [
      "Unity",
      "Mobile",
      "Construção",
      "Batalha",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Ação & Competição",
      "en": "Action & Competition",
      "es": "Acción y Competición"
    },
    "tagline": {
      "pt": "Empilhe blocos da sua cor e exploda a casa do rival!",
      "en": "Collect bricks of your color and blow up rival houses!",
      "es": "¡Apila ladrillos de tu color y dinamita la casa rival!"
    },
    "description": {
      "pt": "Corra pelo mapa coletando tijolos da sua cor e construa sua casa rapidamente antes que o oponente detone ela com dinamite. Quem erguer o refúgio primeiro vence a partida!",
      "en": "Stack bricks of your color quickly to erect your fort before rivals plant explosives. Launch counter-bombs to sabotage enemy towers and be the first to complete your structure.",
      "es": "Recoge ladrillos de tu color y construye tu refugio velozmente antes de que tu rival lo vuele por los aires. ¡Dinamita su casa y sé el primero en terminar!"
    },
    "highlights": {
      "pt": [
        "Coleta veloz de blocos e empilhamento vertical",
        "Uso estratégico de explosivos para sabotar rivais",
        "Partidas rápidas e cheias de adrenalina"
      ],
      "en": [
        "Fast-paced block collecting and vertical stack mechanics",
        "Strategic bomb deployment to derail competitor progress",
        "Adrenaline-fueled bite-sized PvP racing encounters"
      ],
      "es": [
        "Recolección rápida de bloques y apilamiento vertical",
        "Uso de explosivos para sabotear construcciones rivales",
        "Partidas cortas y llenas de acción competitiva"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Colheita",
      "Relaxante",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Simulação & ASMR",
      "en": "Simulation & ASMR",
      "es": "Simulación y ASMR"
    },
    "tagline": {
      "pt": "Voe sobre a plantação e colha com sons crocantes e relaxantes!",
      "en": "Fly over plantations and harvest with crunchy ASMR sounds!",
      "es": "¡Vuela sobre los cultivos y cosecha con sonidos crujientes!"
    },
    "description": {
      "pt": "Pilote sua aeronave suavemente sobre extensos campos agrícolas, colhendo diferentes tipos de plantações ao som de áudios crocantes e ultra satisfatórios.",
      "en": "Fly over scenic agricultural fields and harvest varied crop species in this therapeutic game infused with ultra-satisfying crispy and crunchy sound design.",
      "es": "Pilota suavemente sobre hermosos campos agrícolas y cosecha distintos tipos de cultivos acompañados de sonidos crujientes y ultra relajantes."
    },
    "highlights": {
      "pt": [
        "Paisagens agrícolas estilizadas e relaxantes",
        "Design de som ASMR focado em alívio de estresse",
        "Controles fluidos e sensação de corte gratificante"
      ],
      "en": [
        "Serene stylized farmland landscapes designed for relaxation",
        "Dedicated ASMR foley audio crafted for stress relief",
        "Fluid flight controls paired with satisfying mowing cuts"
      ],
      "es": [
        "Campos estilizados diseñados para una experiencia desestresante",
        "Efectos de audio ASMR nítidos y relajantes",
        "Vuelo suave y respuesta de corte placentera"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Organização",
      "Satisfying",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Casual & Puzzle",
      "en": "Casual & Puzzle",
      "es": "Casual y Puzle"
    },
    "tagline": {
      "pt": "Organize suas compras na geladeira com perfeição!",
      "en": "Master the art of organizing groceries in your fridge!",
      "es": "¡Organiza tus compras en la nevera con total maestría!"
    },
    "description": {
      "pt": "Otimize cada centímetro da geladeira! Arraste frutas, carnes, bebidas e lanches para as prateleiras certas, utilize as portas laterais e organize o freezer como um verdadeiro mestre.",
      "en": "Become a master grocery organizer! Drag groceries onto shelves, slide drinks into door racks, and stack frozen meals into the freezer compartment with spatial perfection.",
      "es": "¡Acomoda cada producto en su lugar! Arrastra carnes, verduras y bebidas a los estantes, aprovecha las puertas laterales y ordena el congelador como un profesional."
    },
    "highlights": {
      "pt": [
        "Mecânica espacial e tetris de supermercado 3D",
        "Variedade rica de alimentos modelados em 3D",
        "Sensação ultra gratificante de organização e ordem"
      ],
      "en": [
        "3D spatial packing puzzle inspired by viral grocery stocking",
        "Rich variety of colorful stylized 3D food items",
        "Deeply gratifying feeling of order, symmetry, and neatness"
      ],
      "es": [
        "Puzle espacial de empaque 3D altamente adictivo",
        "Variedad de alimentos estilizados modelados con detalle",
        "Sensación placentera de orden y aprovechamiento de espacio"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
    "tags": [
      "Unity",
      "Mobile",
      "Física",
      "Discos",
      "3D"
    ],
    "featured": false,
    "categoryLabel": {
      "pt": "Ação & Batalha",
      "en": "Action & Battle",
      "es": "Acción y Batalla"
    },
    "tagline": {
      "pt": "Arremesse discos mortais, quebre blocos e elimine adversários!",
      "en": "Hurl ricocheting discs, shatter barriers, and strike foes!",
      "es": "¡Lanza discos con rebote, rompe bloques y vence al rival!"
    },
    "description": {
      "pt": "Batalhas eletrizantes de arremesso de discos com ricochete dinâmico. Mire com precisão para quebrar as defesas inimigas e nocautear o rival antes que ele devolva o ataque.",
      "en": "Electrifying disc-slinging combat! Aim ricochet trajectories to smash through destructible blocks and knock out rival gladiators before they retaliate.",
      "es": "Combates intensos de lanzamiento de discos con física de rebote. Apunta para destruir las defensas enemigas y noquear a tu contrincante antes de que contraataque."
    },
    "highlights": {
      "pt": [
        "Física de ricochete nas paredes e nos blocos",
        "Timing de defesa e contra-ataque veloz",
        "Ambiente de arena futurista em 3D"
      ],
      "en": [
        "Dynamic wall & obstacle ricochet disc physics",
        "High-reflex catch-and-counter throw timing",
        "Futuristic cybernetic arena environments"
      ],
      "es": [
        "Física de rebote en paredes y obstáculos destructibles",
        "Sincronización rápida de bloqueo y contraataque",
        "Arenas futuristas en 3D con estética cibernética"
      ]
    },
    "role": {
      "pt": "Game Design, Programação & Modelagem 3D",
      "en": "Game Design, Programming & 3D Modeling",
      "es": "Game Design, Programación y Modelado 3D"
    },
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
