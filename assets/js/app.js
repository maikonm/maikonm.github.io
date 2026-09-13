/**
 * Portfolio Interativo de Jogos
 * Controla renderização dos cards, filtros, busca em tempo real, modal de screenshots e interações
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elementos do DOM
  const featuredGrid = document.getElementById('featured-grid');
  const gamesGrid = document.getElementById('games-grid');
  const resultsCount = document.getElementById('results-count');
  const searchInput = document.getElementById('search-input');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const siteHeader = document.querySelector('.site-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toastMsg = document.getElementById('toast-msg');

  // Elementos do Modal
  const modalOverlay = document.getElementById('game-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalMainImage = document.getElementById('modal-main-image');
  const modalThumbnails = document.getElementById('modal-thumbnails');
  const modalPrevBtn = document.getElementById('gallery-prev');
  const modalNextBtn = document.getElementById('gallery-next');
  const modalTitle = document.getElementById('modal-title');
  const modalTagline = document.getElementById('modal-tagline');
  const modalIcon = document.getElementById('modal-icon');
  const modalRole = document.getElementById('modal-role');
  const modalEngine = document.getElementById('modal-engine');
  const modalTags = document.getElementById('modal-tags');
  const modalDesc = document.getElementById('modal-desc');
  const modalHighlights = document.getElementById('modal-highlights');

  // Estado da aplicação
  let currentCategory = 'all';
  let currentSearch = '';
  let activeModalGame = null;
  let activeImageIndex = 0;

  // 1. Inicialização
  initNavbarScroll();
  initMobileMenu();
  renderFeaturedGames();
  renderGamesGrid();
  initFilters();
  initSearch();
  initModalEvents();
  initCopyEmail();

  // Scroll suave e Navbar Glass
  function initNavbarScroll() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    });
  }

  function initMobileMenu() {
    if (!mobileMenuBtn) return;
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Fecha ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // 2. Renderização de Jogos em Destaque
  function renderFeaturedGames() {
    if (!featuredGrid) return;
    const featuredGames = GAMES_DATA.filter(g => g.featured);

    featuredGrid.innerHTML = featuredGames.map(game => `
      <div class="featured-card" onclick="openGameModal('${game.id}')">
        <div class="featured-card-media">
          <span class="featured-badge-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Destaque
          </span>
          <img src="${encodeURI(game.cover)}" alt="${escapeHtml(game.title)}" class="featured-card-img" loading="lazy">
        </div>
        <div class="featured-card-content">
          <div class="game-meta-top">
            <img src="${encodeURI(game.icon)}" alt="${escapeHtml(game.title)}" class="game-icon-small" loading="lazy">
            <div>
              <h3 class="game-card-title">${escapeHtml(game.title)}</h3>
              <div class="game-card-tagline">${escapeHtml(game.tagline)}</div>
            </div>
          </div>
          <p class="game-card-desc">${escapeHtml(game.description)}</p>
          <div class="card-tags">
            ${game.tags.slice(0, 4).map(tag => `<span class="tag-badge">${escapeHtml(tag)}</span>`).join('')}
          </div>
          <button type="button" class="btn-card-action" aria-label="Ver detalhes de ${escapeHtml(game.title)}">
            <span>Ver Detalhes & Galeria</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    `).join('');
  }

  // 3. Renderização da Galeria Completa com Filtros
  function renderGamesGrid() {
    if (!gamesGrid) return;

    const filtered = GAMES_DATA.filter(game => {
      const matchCategory = currentCategory === 'all' || game.category === currentCategory;
      const searchTerms = currentSearch.toLowerCase();
      const matchSearch = !searchTerms || 
        game.title.toLowerCase().includes(searchTerms) ||
        game.tagline.toLowerCase().includes(searchTerms) ||
        game.description.toLowerCase().includes(searchTerms) ||
        game.tags.some(t => t.toLowerCase().includes(searchTerms));

      return matchCategory && matchSearch;
    });

    resultsCount.textContent = `Mostrando ${filtered.length} de ${GAMES_DATA.length} jogos`;

    if (filtered.length === 0) {
      gamesGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🎮</div>
          <h3>Nenhum jogo encontrado</h3>
          <p>Tente buscar por outro termo ou selecione uma categoria diferente.</p>
        </div>
      `;
      return;
    }

    gamesGrid.innerHTML = filtered.map(game => `
      <article class="game-card" onclick="openGameModal('${game.id}')" tabindex="0" role="button" aria-label="Abrir detalhes de ${escapeHtml(game.title)}">
        <div class="game-card-thumbnail">
          <span class="game-card-category-tag">${escapeHtml(game.categoryLabel)}</span>
          <img src="${encodeURI(game.cover)}" alt="${escapeHtml(game.title)}" loading="lazy">
        </div>
        <div class="game-card-body">
          <div class="game-header-row">
            <img src="${encodeURI(game.icon)}" alt="${escapeHtml(game.title)} ícone" class="card-icon" loading="lazy">
            <h4 class="card-title">${escapeHtml(game.title)}</h4>
          </div>
          <p class="card-tagline">${escapeHtml(game.tagline)}</p>
          <div class="card-footer">
            <span class="card-role-snippet">Design • Code • 3D</span>
            <span class="card-view-btn">
              Detalhes
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
        </div>
      </article>
    `).join('');
  }

  // 4. Inicialização de Filtros
  function initFilters() {
    // Atualiza contadores dos filtros
    filterBtns.forEach(btn => {
      const cat = btn.dataset.category;
      const countSpan = btn.querySelector('.filter-count');
      if (countSpan) {
        if (cat === 'all') {
          countSpan.textContent = GAMES_DATA.length;
        } else {
          const count = GAMES_DATA.filter(g => g.category === cat).length;
          countSpan.textContent = count;
        }
      }

      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = cat;
        renderGamesGrid();
      });
    });
  }

  // 5. Inicialização da Busca
  function initSearch() {
    if (!searchInput) return;
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentSearch = e.target.value.trim();
        renderGamesGrid();
      }, 150);
    });
  }

  // 6. Modal Interativo e Galeria de Screenshots
  window.openGameModal = function(gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId);
    if (!game) return;

    activeModalGame = game;
    activeImageIndex = 0;

    modalTitle.textContent = game.title;
    modalTagline.textContent = game.tagline;
    modalIcon.src = encodeURI(game.icon);
    modalRole.textContent = game.role;
    modalEngine.textContent = game.engine;
    modalDesc.textContent = game.description;

    // Tags
    modalTags.innerHTML = game.tags.map(t => `<span class="tag-badge">${escapeHtml(t)}</span>`).join('');

    // Destaques / Mecânicas
    if (game.highlights && game.highlights.length > 0) {
      modalHighlights.innerHTML = game.highlights.map(item => `
        <li>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${escapeHtml(item)}</span>
        </li>
      `).join('');
    } else {
      modalHighlights.innerHTML = '';
    }

    // Renderizar Galeria
    updateModalGallery();

    // Exibir Modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function updateModalGallery() {
    if (!activeModalGame) return;
    const images = activeModalGame.screenshots.length > 0 ? activeModalGame.screenshots : [activeModalGame.cover];

    modalMainImage.style.opacity = '0';
    setTimeout(() => {
      modalMainImage.src = encodeURI(images[activeImageIndex]);
      modalMainImage.alt = `${activeModalGame.title} screenshot ${activeImageIndex + 1}`;
      modalMainImage.style.opacity = '1';
    }, 150);

    // Miniaturas
    if (images.length > 1) {
      modalThumbnails.style.display = 'flex';
      modalPrevBtn.style.display = 'flex';
      modalNextBtn.style.display = 'flex';

      modalThumbnails.innerHTML = images.map((img, idx) => `
        <div class="modal-thumb-item ${idx === activeImageIndex ? 'active' : ''}" onclick="selectModalImage(${idx})">
          <img src="${encodeURI(img)}" alt="thumb ${idx + 1}" loading="lazy">
        </div>
      `).join('');
    } else {
      modalThumbnails.style.display = 'none';
      modalPrevBtn.style.display = 'none';
      modalNextBtn.style.display = 'none';
    }
  }

  window.selectModalImage = function(index) {
    activeImageIndex = index;
    updateModalGallery();
  };

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    activeModalGame = null;
  }

  function initModalEvents() {
    modalCloseBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    modalPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!activeModalGame) return;
      const images = activeModalGame.screenshots.length > 0 ? activeModalGame.screenshots : [activeModalGame.cover];
      activeImageIndex = (activeImageIndex - 1 + images.length) % images.length;
      updateModalGallery();
    });

    modalNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!activeModalGame) return;
      const images = activeModalGame.screenshots.length > 0 ? activeModalGame.screenshots : [activeModalGame.cover];
      activeImageIndex = (activeImageIndex + 1) % images.length;
      updateModalGallery();
    });

    // Teclas de atalho (Esc, Setas)
    document.addEventListener('keydown', (e) => {
      if (!modalOverlay.classList.contains('active')) return;
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        modalPrevBtn.click();
      } else if (e.key === 'ArrowRight') {
        modalNextBtn.click();
      }
    });
  }

  // 7. Copiar Email Placeholder
  function initCopyEmail() {
    if (!copyEmailBtn) return;
    copyEmailBtn.addEventListener('click', () => {
      const email = "maikon.gamedev@example.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("E-mail copiado para a área de transferência!");
      }).catch(() => {
        showToast("E-mail: " + email);
      });
    });
  }

  function showToast(message) {
    if (!toastMsg) return;
    toastMsg.textContent = message;
    toastMsg.classList.add('show');
    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 3200);
  }

  // Utilitário de escape HTML
  function escapeHtml(text) {
    if (!text) return '';
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.toString().replace(/[&<>"']/g, m => map[m]);
  }
});
