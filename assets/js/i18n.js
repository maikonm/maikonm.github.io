/**
 * Sistema de Internacionalização (i18n)
 * Suporte completo para Português (PT), Inglês (EN) e Espanhol (ES)
 */

const TRANSLATIONS = {
  pt: {
    // Navbar
    nav_featured: "Destaques",
    nav_games: "Jogos",
    nav_pipeline: "Pipeline & Skills",
    nav_about: "Sobre",
    nav_contact: "Contato",
    nav_cta: "Falar Comigo",

    // Hero
    hero_status: "Disponível para Novos Projetos & Oportunidades",
    hero_title_prefix: "Criando jogos imersivos da ideia ao código:",
    hero_title_gradient: "Design, Programação & 3D",
    hero_subtitle: "Desenvolvedor multidisciplinar com experiência ponta a ponta: concepção de mecânicas viciantes, arquitetura em C#/Unity e criação de modelos 3D estilizados com foco em alta retenção e diversão.",
    hero_role_design: "Game Design & Prototipagem Ágil",
    hero_role_code: "Programação C# & Unity Engine",
    hero_role_3d: "Modelagem 3D & Arte Técnica",
    hero_btn_explore: "Explorar Portfólio",
    hero_btn_contact: "Entrar em Contato",

    // Stats
    stat_games_val: "27+",
    stat_games_label: "Jogos Catalogados",
    stat_pipeline_val: "100%",
    stat_pipeline_label: "End-to-End Pipeline",
    stat_mobile_val: "Mobile",
    stat_mobile_label: "Especialista Hyper/Casual",
    stat_fps_val: "60 FPS",
    stat_fps_label: "Foco em Performance",

    // Featured
    featured_tag: "Seleção Especial",
    featured_title: "Jogos em Destaque",
    featured_desc: "Projetos que exemplificam a união de loops de jogabilidade envolventes, sistemas de progressão ricos e estética visual polida.",
    featured_badge: "Destaque",
    featured_btn_details: "Ver Detalhes & Galeria",

    // Catalog & Filters
    games_tag: "Galeria Interativa",
    games_title: "Todos os Jogos",
    games_desc: "Navegue por mais de 25 títulos originais. Filtre por gênero ou busque por mecânicas específicas para conferir capturas de tela e detalhes.",
    search_placeholder: "Buscar por título, mecânica ou palavra-chave (ex: merge, runner, puzzle, física)...",
    filter_all: "Todos",
    filter_idle_strategy: "Idle & Estratégia",
    filter_action_runner: "Ação & Runners",
    filter_puzzle: "Casual & Puzzles",
    filter_asmr_simulation: "Simulação & ASMR",
    results_showing: "Mostrando {count} de {total} jogos",
    no_results_title: "Nenhum jogo encontrado",
    no_results_desc: "Tente buscar por outro termo ou selecione uma categoria diferente.",
    card_details_btn: "Detalhes",

    // Pipeline / Skills
    pipeline_tag: "Metodologia & Competências",
    pipeline_title: "Pipeline Completo de Desenvolvimento",
    pipeline_desc: "A sinergia entre design, código e modelagem 3D permite acelerar o ciclo de produção, reduzindo atritos e entregando protótipos jogáveis com alta velocidade.",
    
    pillar1_title: "1. Game Design & Retenção",
    pillar1_desc: "Criação de regras claras, curvas de aprendizado orgânicas e mecânicas com retorno sensorial imediato para o jogador.",
    pillar1_item1: "Core loops viciantes e progressão de recompensas",
    pillar1_item2: "Level Design dinâmico e balanceamento de dificuldade",
    pillar1_item3: "Polimento de resposta tátil, feedback visual e Game Feel envolvente",
    pillar1_item4: "Otimização para métricas D1/D7 em jogos mobile",

    pillar2_title: "2. Programação de Gameplay",
    pillar2_desc: "Código limpo, modular e orientado a performance para garantir controles com latência zero e taxa estável de quadros.",
    pillar2_item1: "C# avançado aplicado à Unity Engine",
    pillar2_item2: "Sistemas de toque, swipe, arrasto e física 3D/Ragdoll",
    pillar2_item3: "Arquitetura desacoplada (ScriptableObjects, State Machines)",
    pillar2_item4: "Profile e otimização mobile (Draw Calls, GC alloc, Batches)",

    pillar3_title: "3. Modelagem 3D & Arte Técnica",
    pillar3_desc: "Produção ágil de modelos 3D low-poly e estilizados, com silhuetas legíveis e paletas de cores que destacam a ação.",
    pillar3_item1: "Modelagem estilizada e otimizada (Blender)",
    pillar3_item2: "Rigging básico, animações de gameplay e poses",
    pillar3_item3: "Composição de iluminação e materiais otimizados para mobile",
    pillar3_item4: "Efeitos de partículas (VFX) e shaders interativos",

    tools_title: "Tecnologias & Ferramentas Principais",

    // About
    about_tag: "Perfil Profissional",
    about_title: "Sobre Mim",
    about_p1: "Sou apaixonado por transformar conceitos abstratos em <strong>jogos vibrantes, divertidos e funcionais</strong>. Com atuação completa em <strong>Game Design</strong>, <strong>Programação</strong> e <strong>Modelagem 3D</strong>, possuo autonomia para construir experiências do zero e iterar com extrema rapidez sobre o que funciona de verdade na mão do jogador.",
    about_p2: "Ao longo do desenvolvimento de mais de 25 jogos e protótipos (incluindo títulos casuais, idle tycoons, runners e quebra-cabeças competitivos), refinei a habilidade de balancear <strong>polimento visual e resposta tátil altamente satisfatória (Game Feel)</strong> com código robusto, performático e limpo.",
    about_p3: "Seja para integrar um estúdio dinâmico, liderar a prototipagem de novos sucessos ou desenvolver títulos sob encomenda, meu foco é sempre a entrega de valor, retenção e máxima diversão.",

    // Contact & Footer
    contact_tag: "Vamos Conversar?",
    contact_title: "Pronto para Criar o Próximo Jogo?",
    contact_desc: "Estou disponível para consultorias de prototipagem rápida e projetos freelance.",
    contact_copy_btn: "Copiar E-mail",
    toast_copied: "E-mail copiado para a área de transferência!",
    footer_rights: "© 2026 Maikon. Todos os direitos reservados.",
    footer_crafted: "Feito para alta performance e experiência imersiva.",

    // Modal
    modal_role_label: "Minha Atuação",
    modal_role_val: "Game Design, Programação & 3D",
    modal_engine_label: "Engine & Ferramentas",
    modal_engine_val: "Unity / C# / Blender",
    modal_platform_label: "Plataforma",
    modal_platform_val: "Mobile (iOS & Android)",
    modal_section_mechanics: "Sobre a Mecânica & Gameplay",
    modal_section_highlights: "Destaques do Projeto"
  },

  en: {
    // Navbar
    nav_featured: "Featured",
    nav_games: "Games",
    nav_pipeline: "Pipeline & Skills",
    nav_about: "About",
    nav_contact: "Contact",
    nav_cta: "Get In Touch",

    // Hero
    hero_status: "Available for New Projects & Opportunities",
    hero_title_prefix: "Creating immersive games from concept to code:",
    hero_title_gradient: "Design, Code & 3D",
    hero_subtitle: "Multidisciplinary game developer with end-to-end expertise: designing addictive mechanics, architecting solid C#/Unity code, and creating stylized 3D assets focused on retention and pure fun.",
    hero_role_design: "Game Design & Rapid Prototyping",
    hero_role_code: "C# Programming & Unity Engine",
    hero_role_3d: "3D Modeling & Technical Art",
    hero_btn_explore: "Explore Portfolio",
    hero_btn_contact: "Get in Touch",

    // Stats
    stat_games_val: "27+",
    stat_games_label: "Cataloged Games",
    stat_pipeline_val: "100%",
    stat_pipeline_label: "End-to-End Pipeline",
    stat_mobile_val: "Mobile",
    stat_mobile_label: "Hyper/Casual Specialist",
    stat_fps_val: "60 FPS",
    stat_fps_label: "Performance Focused",

    // Featured
    featured_tag: "Curated Selection",
    featured_title: "Featured Games",
    featured_desc: "Flagship projects showcasing engaging gameplay loops, satisfying progression mechanics, and clean visual polish.",
    featured_badge: "Featured",
    featured_btn_details: "View Details & Gallery",

    // Catalog & Filters
    games_tag: "Interactive Gallery",
    games_title: "All Games",
    games_desc: "Browse through 25+ original titles. Filter by genre or search by specific mechanics to inspect screenshots and gameplay details.",
    search_placeholder: "Search by title, mechanic, or keyword (e.g. merge, runner, puzzle, physics)...",
    filter_all: "All",
    filter_idle_strategy: "Idle & Strategy",
    filter_action_runner: "Action & Runners",
    filter_puzzle: "Casual & Puzzles",
    filter_asmr_simulation: "Simulation & ASMR",
    results_showing: "Showing {count} of {total} games",
    no_results_title: "No games found",
    no_results_desc: "Try searching with a different term or select another category.",
    card_details_btn: "Details",

    // Pipeline / Skills
    pipeline_tag: "Methodology & Skillset",
    pipeline_title: "End-to-End Development Pipeline",
    pipeline_desc: "The synergy between game design, coding, and 3D art accelerates production cycles, eliminates bottlenecks, and delivers responsive playable prototypes swiftly.",
    
    pillar1_title: "1. Game Design & Retention",
    pillar1_desc: "Designing intuitive rules, organic learning curves, and mechanics with immediate tactile sensory feedback for players.",
    pillar1_item1: "Hooky core loops and rewarding progression systems",
    pillar1_item2: "Dynamic level design and balanced difficulty curves",
    pillar1_item3: "Engaging Game Feel, visual polish, and satisfying tactile feedback",
    pillar1_item4: "Optimization for D1/D7 retention in mobile gaming",

    pillar2_title: "2. Gameplay Programming",
    pillar2_desc: "Clean, modular, and performance-oriented code ensuring zero input latency and locked high frame rates.",
    pillar2_item1: "Advanced C# applied within Unity Engine",
    pillar2_item2: "Touch, swipe, drag systems and 3D/Ragdoll physics",
    pillar2_item3: "Decoupled architecture (ScriptableObjects, State Machines)",
    pillar2_item4: "Mobile profiling & optimization (Draw Calls, GC alloc, Batches)",

    pillar3_title: "3. 3D Modeling & Technical Art",
    pillar3_desc: "Agile production of stylized low-poly 3D models with readable silhouettes and vibrant color schemes tailored for action.",
    pillar3_item1: "Stylized and optimized 3D modeling (Blender)",
    pillar3_item2: "Character rigging, gameplay animations, and keyframing",
    pillar3_item3: "Mobile-friendly lighting setup and optimized shaders",
    pillar3_item4: "Particle systems (VFX) and interactive visual effects",

    tools_title: "Core Tech Stack & Tools",

    // About
    about_tag: "Professional Profile",
    about_title: "About Me",
    about_p1: "I am passionate about turning abstract concepts into <strong>vibrant, engaging, and polished games</strong>. With comprehensive capability across <strong>Game Design</strong>, <strong>Programming</strong>, and <strong>3D Modeling</strong>, I build games autonomously from the ground up and iterate rapidly on what truly delights players.",
    about_p2: "Having developed over 25 games and prototypes—spanning casual titles, idle tycoons, runners, and competitive puzzle games—I have mastered the craft of balancing <strong>deeply satisfying visual polish and tactile feedback (Game Feel)</strong> with reliable, performant code.",
    about_p3: "Whether joining a fast-paced studio, leading rapid prototyping initiatives, or building bespoke games, my priority is consistently delivering exceptional player retention and pure fun.",

    // Contact & Footer
    contact_tag: "Let's Connect",
    contact_title: "Ready to Build the Next Hit Game?",
    contact_desc: "I am available for rapid prototyping consulting and select freelance projects.",
    contact_copy_btn: "Copy Email",
    toast_copied: "Email copied to clipboard!",
    footer_rights: "© 2026 Maikon. All rights reserved.",
    footer_crafted: "Built for high performance and immersive experiences.",

    // Modal
    modal_role_label: "My Role",
    modal_role_val: "Game Design, Programming & 3D",
    modal_engine_label: "Engine & Tools",
    modal_engine_val: "Unity / C# / Blender",
    modal_platform_label: "Platform",
    modal_platform_val: "Mobile (iOS & Android)",
    modal_section_mechanics: "About Mechanics & Gameplay",
    modal_section_highlights: "Project Highlights"
  },

  es: {
    // Navbar
    nav_featured: "Destacados",
    nav_games: "Juegos",
    nav_pipeline: "Pipeline y Habilidades",
    nav_about: "Sobre Mí",
    nav_contact: "Contacto",
    nav_cta: "Contáctame",

    // Hero
    hero_status: "Disponible para Nuevos Proyectos y Oportunidades",
    hero_title_prefix: "Creando juegos inmersivos de la idea al código:",
    hero_title_gradient: "Diseño, Código y 3D",
    hero_subtitle: "Desarrollador multidisciplinario con experiencia integral: diseño de mecánicas adictivas, arquitectura en C#/Unity y creación de modelos 3D estilizados con enfoque en alta retención y diversión.",
    hero_role_design: "Game Design y Prototipado Ágil",
    hero_role_code: "Programación C# y Unity Engine",
    hero_role_3d: "Modelado 3D y Arte Técnico",
    hero_btn_explore: "Explorar Portafolio",
    hero_btn_contact: "Contactar",

    // Stats
    stat_games_val: "27+",
    stat_games_label: "Juegos Catalogados",
    stat_pipeline_val: "100%",
    stat_pipeline_label: "Pipeline End-to-End",
    stat_mobile_val: "Móvil",
    stat_mobile_label: "Especialista Hyper/Casual",
    stat_fps_val: "60 FPS",
    stat_fps_label: "Enfoque en Rendimiento",

    // Featured
    featured_tag: "Selección Especial",
    featured_title: "Juegos Destacados",
    featured_desc: "Proyectos que demuestran la unión de bucles de juego envolventes, sistemas de progresión sólidos y un acabado visual impecable.",
    featured_badge: "Destacado",
    featured_btn_details: "Ver Detalles y Galería",

    // Catalog & Filters
    games_tag: "Galería Interactiva",
    games_title: "Todos los Juegos",
    games_desc: "Explora más de 25 títulos originales. Filtra por género o busca mecánicas específicas para ver capturas de pantalla y detalles de jugabilidad.",
    search_placeholder: "Buscar por título, mecánica o palabra clave (ej: merge, runner, puzle, física)...",
    filter_all: "Todos",
    filter_idle_strategy: "Idle y Estrategia",
    filter_action_runner: "Acción y Runners",
    filter_puzzle: "Casual y Puzles",
    filter_asmr_simulation: "Simulación y ASMR",
    results_showing: "Mostrando {count} de {total} juegos",
    no_results_title: "No se encontraron juegos",
    no_results_desc: "Intenta buscar con otro término o selecciona una categoría diferente.",
    card_details_btn: "Detalles",

    // Pipeline / Skills
    pipeline_tag: "Metodología y Competencias",
    pipeline_title: "Pipeline Completo de Desarrollo",
    pipeline_desc: "La sinergia entre diseño de juegos, programación y arte 3D acelera el ciclo de producción, eliminando fricciones y entregando prototipos jugables con máxima agilidad.",
    
    pillar1_title: "1. Game Design y Retención",
    pillar1_desc: "Diseño de reglas claras, curvas de aprendizaje orgánicas y mecánicas con respuesta sensorial inmediata para el jugador.",
    pillar1_item1: "Bucles principales adictivos y progresión de recompensas",
    pillar1_item2: "Diseño de niveles dinámico y balance de dificultad",
    pillar1_item3: "Game Feel envolvente, pulido visual y respuesta táctil satisfactoria",
    pillar1_item4: "Optimización para métricas de retención D1/D7 en juegos móviles",

    pillar2_title: "2. Programación de Gameplay",
    pillar2_desc: "Código limpio, modular y orientado al rendimiento para garantizar controles sin latencia y tasa de cuadros estable.",
    pillar2_item1: "C# avanzado aplicado en Unity Engine",
    pillar2_item2: "Sistemas táctiles, swipe, arrastre y física 3D/Ragdoll",
    pillar2_item3: "Arquitectura desacoplada (ScriptableObjects, Máquinas de Estado)",
    pillar2_item4: "Perfilado y optimización móvil (Draw Calls, GC alloc, Batches)",

    pillar3_title: "3. Modelado 3D y Arte Técnico",
    pillar3_desc: "Producción ágil de modelos 3D low-poly y estilizados, con siluetas legibles y paletas de colores que destacan la acción.",
    pillar3_item1: "Modelado 3D estilizado y optimizado (Blender)",
    pillar3_item2: "Rigging de personajes, animaciones de juego y poses",
    pillar3_item3: "Iluminación optimizada y shaders ligeros para móviles",
    pillar3_item4: "Sistemas de partículas (VFX) y efectos visuales interactivos",

    tools_title: "Tecnologías y Herramientas Principales",

    // About
    about_tag: "Perfil Profesional",
    about_title: "Sobre Mí",
    about_p1: "Me apasiona transformar conceptos abstractos en <strong>juegos dinámicos, divertidos y altamente pulidos</strong>. Con dominio integral en <strong>Game Design</strong>, <strong>Programación</strong> y <strong>Modelado 3D</strong>, tengo autonomía para crear experiencias desde cero e iterar con rapidez sobre lo que realmente engancha al jugador.",
    about_p2: "A lo largo de más de 25 juegos y prototipos desarrollados (incluyendo títulos casuales, idle tycoons, runners y puzles competitivos), he perfeccionado el equilibrio entre <strong>un pulido visual y respuesta táctil altamente satisfactoria (Game Feel)</strong> con código sólido, eficiente y limpio.",
    about_p3: "Ya sea para integrarme a un estudio ágil, liderar la creación de prototipos o desarrollar proyectos a medida, mi enfoque siempre es entregar valor, retención y diversión absoluta.",

    // Contact & Footer
    contact_tag: "¿Conversamos?",
    contact_title: "¿Listo para Crear el Próximo Gran Juego?",
    contact_desc: "Disponible para consultorías de prototipado rápido y proyectos freelance.",
    contact_copy_btn: "Copiar Correo",
    toast_copied: "¡Correo copiado al portapapeles!",
    footer_rights: "© 2026 Maikon. Todos los derechos reservados.",
    footer_crafted: "Diseñado para alto rendimiento y máxima inmersión.",

    // Modal
    modal_role_label: "Mi Rol",
    modal_role_val: "Game Design, Programación y 3D",
    modal_engine_label: "Motor y Herramientas",
    modal_engine_val: "Unity / C# / Blender",
    modal_platform_label: "Plataforma",
    modal_platform_val: "Móvil (iOS y Android)",
    modal_section_mechanics: "Sobre la Mecánica y Jugabilidad",
    modal_section_highlights: "Puntos Destacados"
  }
};

// Gerenciador de Idioma
const I18nManager = {
  currentLang: 'pt',

  init() {
    // Verifica localStorage ou idioma do navegador
    const saved = localStorage.getItem('portfolio_lang');
    if (saved && ['pt', 'en', 'es'].includes(saved)) {
      this.currentLang = saved;
    } else {
      const browserLang = (navigator.language || navigator.userLanguage || 'pt').slice(0, 2).toLowerCase();
      if (['en', 'es'].includes(browserLang)) {
        this.currentLang = browserLang;
      } else {
        this.currentLang = 'pt';
      }
    }
  },

  getLang() {
    return this.currentLang;
  },

  setLang(lang) {
    if (!['pt', 'en', 'es'].includes(lang)) return;
    this.currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    this.updateDom();
    // Emite evento customizado para componentes re-renderizarem
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  },

  t(key, params = {}) {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.pt;
    let text = dict[key] || TRANSLATIONS.pt[key] || key;
    for (const [pKey, pVal] of Object.entries(params)) {
      text = text.replace(new RegExp(`\\{${pKey}\\}`, 'g'), pVal);
    }
    return text;
  },

  updateDom() {
    // Elementos com texto
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const translated = this.t(key);
      if (translated) {
        el.innerHTML = translated;
      }
    });

    // Elementos com placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      const translated = this.t(key);
      if (translated) {
        el.placeholder = translated;
      }
    });

    // Atualiza classes ativas no seletor de idiomas
    document.querySelectorAll('.lang-option').forEach(btn => {
      if (btn.dataset.lang === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const activeLangLabel = document.getElementById('active-lang-text');
    if (activeLangLabel) {
      activeLangLabel.textContent = this.currentLang.toUpperCase();
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRANSLATIONS, I18nManager };
}
