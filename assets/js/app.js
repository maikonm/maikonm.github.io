/**
 * Portfolio Interativo de Jogos com Internacionalização (i18n)
 * Controla renderização dos cards, filtros, busca em tempo real, modal de screenshots e troca de idiomas
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

  // Elementos do Seletor de Idioma
  const langSwitcher = document.getElementById('lang-switcher');
  const langBtn = document.getElementById('lang-btn');
  const langOptions = document.querySelectorAll('.lang-option');

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

  // 1. Inicialização do i18n
  if (typeof I18nManager !== 'undefined') {
    I18nManager.init();
    I18nManager.updateDom();
  }

  // Helper para obter idioma atual
  function getLang() {
    return typeof I18nManager !== 'undefined' ? I18nManager.getLang() : 'pt';
  }

  function t(key, params = {}) {
    return typeof I18nManager !== 'undefined' ? I18nManager.t(key, params) : key;
  }

  // 2. Inicializações gerais
  initNavbarScroll();
  initMobileMenu();
  initLangSwitcher();
  renderFeaturedGames();
  renderGamesGrid();
  initFilters();
  initSearch();
  initModalEvents();
  initCopyEmail();

  // Ouvinte para re-renderizar quando o idioma for alterado
  window.addEventListener('languageChanged', () => {
    renderFeaturedGames();
    renderGamesGrid();
    if (activeModalGame) {
      updateModalTexts(activeModalGame);
    }
  });

  // Seletor de Idioma
  function initLangSwitcher() {
    if (!langBtn || !langSwitcher) return;

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langSwitcher.classList.toggle('open');
      const expanded = langSwitcher.classList.contains('open');
      langBtn.setAttribute('aria-expanded', expanded);
    });

    document.addEventListener('click', () => {
      langSwitcher.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
    });

    langOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        const selectedLang = opt.dataset.lang;
        if (typeof I18nManager !== 'undefined') {
          I18nManager.setLang(selectedLang);
        }
        langSwitcher.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Navbar Scroll & Menu Mobile
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

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // 3. Renderização dos Jogos em Destaque
  function renderFeaturedGames() {
    if (!featuredGrid) return;
    const lang = getLang();
    const featuredGames = GAMES_DATA.filter(g => g.featured);

    featuredGrid.innerHTML = featuredGames.map(game => {
      const tagline = (game.tagline && game.tagline[lang]) || game.tagline.pt || '';
      const description = (game.description && game.description[lang]) || game.description.pt || '';
      const badgeText = t('featured_badge');
      const btnDetailsText = t('featured_btn_details');

      return `
        <div class="featured-card" onclick="openGameModal('${game.id}')">
          <div class="featured-card-media">
            <span class="featured-badge-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ${escapeHtml(badgeText)}
            </span>
            <img src="${encodeURI(game.cover)}" alt="${escapeHtml(game.title)}" class="featured-card-img" loading="lazy">
          </div>
          <div class="featured-card-content">
            <div class="game-meta-top">
              <img src="${encodeURI(game.icon)}" alt="${escapeHtml(game.title)}" class="game-icon-small" loading="lazy">
              <div>
                <h3 class="game-card-title">${escapeHtml(game.title)}</h3>
                <div class="game-card-tagline">${escapeHtml(tagline)}</div>
              </div>
            </div>
            <p class="game-card-desc">${escapeHtml(description)}</p>
            <div class="card-tags">
              ${game.tags.slice(0, 4).map(tag => `<span class="tag-badge">${escapeHtml(tag)}</span>`).join('')}
            </div>
            <button type="button" class="btn-card-action" aria-label="Ver detalhes de ${escapeHtml(game.title)}">
              <span>${escapeHtml(btnDetailsText)}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // 4. Renderização da Galeria de Jogos com Filtros e Busca
  function renderGamesGrid() {
    if (!gamesGrid) return;
    const lang = getLang();

    const filtered = GAMES_DATA.filter(game => {
      const matchCategory = currentCategory === 'all' || game.category === currentCategory;
      const searchTerms = currentSearch.toLowerCase();

      // Busca nos idiomas
      const titleMatch = game.title.toLowerCase().includes(searchTerms);
      const tagMatch = game.tags.some(tag => tag.toLowerCase().includes(searchTerms));
      const taglineMatch = game.tagline && (
        (game.tagline.pt && game.tagline.pt.toLowerCase().includes(searchTerms)) ||
        (game.tagline.en && game.tagline.en.toLowerCase().includes(searchTerms)) ||
        (game.tagline.es && game.tagline.es.toLowerCase().includes(searchTerms))
      );
      const descMatch = game.description && (
        (game.description.pt && game.description.pt.toLowerCase().includes(searchTerms)) ||
        (game.description.en && game.description.en.toLowerCase().includes(searchTerms)) ||
        (game.description.es && game.description.es.toLowerCase().includes(searchTerms))
      );

      const matchSearch = !searchTerms || titleMatch || tagMatch || taglineMatch || descMatch;

      return matchCategory && matchSearch;
    });

    resultsCount.textContent = t('results_showing', { count: filtered.length, total: GAMES_DATA.length });

    if (filtered.length === 0) {
      gamesGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🎮</div>
          <h3>${escapeHtml(t('no_results_title'))}</h3>
          <p>${escapeHtml(t('no_results_desc'))}</p>
        </div>
      `;
      return;
    }

    gamesGrid.innerHTML = filtered.map(game => {
      const categoryLabel = (game.categoryLabel && game.categoryLabel[lang]) || game.categoryLabel.pt || '';
      const tagline = (game.tagline && game.tagline[lang]) || game.tagline.pt || '';
      const detailsBtnText = t('card_details_btn');

      return `
        <article class="game-card" onclick="openGameModal('${game.id}')" tabindex="0" role="button" aria-label="Abrir detalhes de ${escapeHtml(game.title)}">
          <div class="game-card-thumbnail">
            <span class="game-card-category-tag">${escapeHtml(categoryLabel)}</span>
            <img src="${encodeURI(game.cover)}" alt="${escapeHtml(game.title)}" loading="lazy">
          </div>
          <div class="game-card-body">
            <div class="game-header-row">
              <img src="${encodeURI(game.icon)}" alt="${escapeHtml(game.title)} ícone" class="card-icon" loading="lazy">
              <h4 class="card-title">${escapeHtml(game.title)}</h4>
            </div>
            <p class="card-tagline">${escapeHtml(tagline)}</p>
            <div class="card-footer">
              <span class="card-role-snippet">Design • Code • 3D</span>
              <span class="card-view-btn">
                ${escapeHtml(detailsBtnText)}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // 5. Inicialização de Filtros
  function initFilters() {
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

  // 6. Inicialização da Busca
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

  // 7. Modal Interativo com Localização
  window.openGameModal = function(gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId);
    if (!game) return;

    activeModalGame = game;
    activeImageIndex = 0;

    modalTitle.textContent = game.title;
    modalIcon.src = encodeURI(game.icon);
    modalEngine.textContent = game.engine;
    modalTags.innerHTML = game.tags.map(t => `<span class="tag-badge">${escapeHtml(t)}</span>`).join('');

    updateModalTexts(game);
    updateModalGallery();

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function updateModalTexts(game) {
    const lang = getLang();
    modalTagline.textContent = (game.tagline && game.tagline[lang]) || game.tagline.pt || '';
    modalRole.textContent = (game.role && game.role[lang]) || game.role.pt || '';
    modalDesc.textContent = (game.description && game.description[lang]) || game.description.pt || '';

    const highlights = (game.highlights && game.highlights[lang]) || game.highlights.pt || [];
    if (highlights && highlights.length > 0) {
      modalHighlights.innerHTML = highlights.map(item => `
        <li>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${escapeHtml(item)}</span>
        </li>
      `).join('');
    } else {
      modalHighlights.innerHTML = '';
    }
  }

  function updateModalGallery() {
    if (!activeModalGame) return;
    const images = activeModalGame.screenshots.length > 0 ? activeModalGame.screenshots : [activeModalGame.cover];

    modalMainImage.style.opacity = '0';
    setTimeout(() => {
      modalMainImage.src = encodeURI(images[activeImageIndex]);
      modalMainImage.alt = `${activeModalGame.title} screenshot ${activeImageIndex + 1}`;
      modalMainImage.style.opacity = '1';
    }, 150);

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

  // 8. Copiar E-mail
  function initCopyEmail() {
    if (!copyEmailBtn) return;
    copyEmailBtn.addEventListener('click', () => {
      const email = "maikonm@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast(t('toast_copied'));
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
