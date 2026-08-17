/**
 * Orquestrador Principal — O Discernimento (Main.js - Academic Monograph)
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initReadingProgressBar();
  initScrollSpy();
  initMobileMenu();
  initTableOfContentsDrawer();
  initPactoAcceptance();
  initGlobalSearchModal();

  // Initialize Submodules
  if (window.initFossilsModule) window.initFossilsModule();
  if (window.initMatrixModule) window.initMatrixModule();
  if (window.initSimulatorModule) window.initSimulatorModule();
  if (window.initGlossaryModule) window.initGlossaryModule();
  if (window.initSourcesAndBiblioModule) window.initSourcesAndBiblioModule();
});

/* 1. Theme Toggle */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("poli-theme") || "light";

  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("poli-theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById("themeIcon");
  if (iconSpan) {
    iconSpan.textContent = theme === "light" ? "Tema Escuro" : "Tema Claro";
  }
}

/* 2. Reading Progress Bar */
function initReadingProgressBar() {
  const progressFill = document.getElementById("progressBarFill");
  if (!progressFill) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressFill.style.width = `${Math.min(progress, 100)}%`;
  }, { passive: true });
}

/* 3. ScrollSpy Navigation */
function initScrollSpy() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  if (navLinks.length === 0 || sections.length === 0) return;

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY + 220;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

/* 4. Table of Contents (Sumário) Drawer */
function initTableOfContentsDrawer() {
  const triggerBtn = document.getElementById("tocTriggerBtn");
  const backdrop = document.getElementById("tocBackdrop");
  const closeBtn = document.getElementById("tocCloseBtn");
  const tocLinks = document.querySelectorAll(".toc-link");

  if (!triggerBtn || !backdrop) return;

  function openTOC() {
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeTOC() {
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  triggerBtn.addEventListener("click", openTOC);
  if (closeBtn) closeBtn.addEventListener("click", closeTOC);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeTOC();
  });

  tocLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeTOC();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("active")) {
      closeTOC();
    }
  });
}

/* 5. Mobile Menu */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const drawer = document.getElementById("mobileNavDrawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", () => {
    drawer.classList.toggle("active");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("active");
    });
  });
}

/* 6. Pacto Acceptance Interaction & Collapsible State */
function initPactoAcceptance() {
  const acceptBtn = document.getElementById("acceptPactoBtn");
  const pactoCard = document.getElementById("pactoCard");
  const pactoNumeral = document.getElementById("pactoNumeral");
  const pactoTitle = document.getElementById("pactoTitle");
  const pactoStatusTag = document.getElementById("pactoStatusTag");
  const pactoToggleBtn = document.getElementById("pactoToggleBtn");
  const manifestoBody = document.getElementById("manifestoBody");

  const isAccepted = localStorage.getItem("poli-pacto-accepted") === "true";

  function setPactoAcceptedUI(collapsed = true) {
    if (pactoCard) {
      pactoCard.classList.add("is-accepted");
      if (collapsed) pactoCard.classList.add("is-collapsed");
      else pactoCard.classList.remove("is-collapsed");
    }
    if (pactoNumeral) {
      pactoNumeral.textContent = "Compromisso Metodológico Ativo";
    }
    if (pactoTitle) {
      pactoTitle.textContent = "✓ Pacto de Honestidade Intelectual Firmado";
    }
    if (pactoStatusTag) {
      pactoStatusTag.textContent = "Disposição Analítica Confirmada";
      pactoStatusTag.classList.add("active");
    }
    if (pactoToggleBtn) {
      pactoToggleBtn.style.display = "inline-flex";
      pactoToggleBtn.textContent = collapsed ? "Ver Termos ▾" : "Ocultar Termos ▴";
    }
  }

  function unlockManifesto(shouldScroll = true) {
    if (manifestoBody) {
      manifestoBody.classList.remove("is-locked");
    }
    setPactoAcceptedUI(true);
    localStorage.setItem("poli-pacto-accepted", "true");

    if (shouldScroll) {
      const firstSection = document.getElementById("diagnostico-1789");
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  // If already accepted in previous visit, unlock and collapse immediately
  if (isAccepted) {
    if (manifestoBody) manifestoBody.classList.remove("is-locked");
    setPactoAcceptedUI(true);
  }

  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      unlockManifesto(true);
    });
  }

  // Toggle terms expand/collapse
  if (pactoToggleBtn && pactoCard) {
    pactoToggleBtn.addEventListener("click", () => {
      const isCurrentlyCollapsed = pactoCard.classList.contains("is-collapsed");
      if (isCurrentlyCollapsed) {
        pactoCard.classList.remove("is-collapsed");
        pactoToggleBtn.textContent = "Ocultar Termos ▴";
      } else {
        pactoCard.classList.add("is-collapsed");
        pactoToggleBtn.textContent = "Ver Termos ▾";
      }
    });
  }

  // If user clicks a navigation link from the menu or TOC before accepting, unlock automatically
  document.querySelectorAll(".nav-link, .toc-link, .mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (manifestoBody && manifestoBody.classList.contains("is-locked")) {
        unlockManifesto(false);
      }
    });
  });
}

/* 7. Global Search Modal (Ctrl + K) */
function initGlobalSearchModal() {
  const triggerBtn = document.getElementById("searchTriggerBtn");
  const modal = document.getElementById("searchModalBackdrop");
  const input = document.getElementById("searchModalInput");
  const resultsContainer = document.getElementById("searchModalResults");

  if (!triggerBtn || !modal || !input) return;

  const searchableIndex = [
    // Capítulos Principais
    { title: "Prólogo: O Pacto de Honestidade Intelectual", desc: "Termo de isenção metodológica e princípio da caridade intelectual (Steel-Manning).", link: "#hero" },
    { title: "Capítulo I: Diagnóstico Civilizatório de 1789", desc: "A obsolescência da régua unidimensional francesa de mais de 230 anos.", link: "#diagnostico-1789" },
    { title: "Capítulo II: Mecânica Econômica vs. Ideologia Política", desc: "O erro de categoria: o mercado como sistema descentralizado de alocação de recursos.", link: "#modulo-1-economia" },
    { title: "Friedrich Hayek & O Sistema de Preços (Nobel 1974)", desc: "Como os preços transmitem informações e coordenam o consumo em redes descentralizadas.", link: "#modulo-1-economia" },
    { title: "Joseph Schumpeter & A Destruição Criativa", desc: "Como o progresso econômico exige a substituição contínua de métodos obsoletos.", link: "#modulo-1-economia" },
    { title: "Ludwig von Mises & O Cálculo Econômico", desc: "A impossibilidade matemática de precificar bens de capital no socialismo.", link: "#modulo-1-economia" },
    { title: "Thomas Sowell & A Lei dos Trade-offs", desc: "Em políticas públicas não há soluções gratuitas, apenas escolhas de custo-benefício.", link: "#modulo-1-economia" },

    // Dossiês Históricos
    { title: "Capítulo III: Dossiês Históricos & Autópsias Forenses", desc: "Anatomia forense de 5 regimes históricos sob 3 camadas de evidência factual.", link: "#modulo-2-fossils" },
    { title: "Alemanha Nazista & A Frente do Trabalho (D.A.F.)", desc: "O sequestro da palavra 'socialismo', dissolução sindical e aliança com industriais.", link: "#modulo-2-fossils" },
    { title: "Marxismo-Leninismo & Crítica do Programa de Gotha", desc: "A teoria da transição versus o surgimento da Nomenklatura e Gulags.", link: "#modulo-2-fossils" },
    { title: "Deng Xiaoping & As Reformas Chinesas de 1978", desc: "A rendição ao mercado que tirou centenas de milhões de chineses da extrema pobreza.", link: "#modulo-2-fossils" },
    { title: "O Modelo Nórdico Real (Suécia, Dinamarca, Noruega)", desc: "Livre mercado hipercompetitivo financiando serviços sociais via tributos gerais.", link: "#modulo-2-fossils" },
    { title: "O Mercantilismo & As Origens do Compadrio", desc: "Como monarquias concediam monopólios a cortesãos e a reencarnação moderna dos campeões nacionais.", link: "#modulo-2-fossils" },

    // Ideologias
    { title: "Capítulo IV: Guia Desmistificador de Ideologias", desc: "O que cada corrente defende no papel e onde foi aplicada na história real.", link: "#modulo-3-matriz" },
    { title: "Liberalismo Clássico", desc: "Livre mercado, primado do indivíduo, rule of law e casos reais (Hong Kong, EUA, Reino Unido).", link: "#modulo-3-matriz" },
    { title: "Social-Democracia", desc: "Motor de livre mercado com seguridade social pública (Suécia, Dinamarca, Alemanha pós-guerra).", link: "#modulo-3-matriz" },
    { title: "Socialismo Democrático", desc: "Transição eleitoral para estatizações e casos reais (França 1981, Reino Unido pós-1945, Chile 1970).", link: "#modulo-3-matriz" },
    { title: "Marxismo-Leninismo (Comunismo Real)", desc: "Planificação totalitária estatal e casos reais (URSS, China Maoísta, Camboja).", link: "#modulo-3-matriz" },
    { title: "Fascismo / Nazismo", desc: "Totalitarismo corporativista de guerra e casos reais (Alemanha Nazista, Itália Fascista).", link: "#modulo-3-matriz" },
    { title: "Conservadorismo Institucional", desc: "Prudência reformista e ordem jurídica espontânea (Reino Unido, EUA, Japão do pós-guerra).", link: "#modulo-3-matriz" },

    // Engenharia Institucional
    { title: "Capítulo V: Engenharia Institucional & A Indústria do Ruído", desc: "Por que nações prosperam ou fracassam segundo regras do jogo e incentivos.", link: "#modulo-4-instituicoes" },
    { title: "Daron Acemoglu & James Robinson (Nobel 2024)", desc: "Instituições Inclusivas (prosperidade) versus Instituições Extrativas (privilégios e estagnação).", link: "#modulo-4-instituicoes" },
    { title: "Teoria da Escolha Pública (James Buchanan - Nobel 1986)", desc: "Como políticos e burocratas respondem a incentivos eleitorais e orçamentários.", link: "#modulo-4-instituicoes" },
    { title: "Nassim Taleb: Antifragilidade & Pele em Risco (Skin in the Game)", desc: "Sistemas adaptativos complexos e a necessidade de responsabilização pessoal de governantes.", link: "#modulo-4-instituicoes" },
    { title: "A Polarização como Cortina de Fumaça", desc: "Como guerras culturais tribais protegem a ineficiência estrutural do escrutínio público.", link: "#modulo-4-instituicoes" },

    // Ferramentas & Glossário
    { title: "Capítulo VI: Onde a Esquerda e a Direita Erram na Prática", desc: "Anatomia direta dos erros econômicos clássicos e ilusões de ambos os espectros políticos.", link: "#modulo-5-simulador" },
    { title: "Capítulo VII: Glossário Desmistificador de Conceitos", desc: "Definições conceituais rigorosas de Estado de Direito, Rent-Seeking, Neoliberalismo e Compadrio.", link: "#modulo-6-glossario" },
    { title: "Estado de Direito (Rule of Law)", desc: "Regras impessoais e iguais para governantes e governados vs governo por decretos casuísticos.", link: "#modulo-6-glossario" },
    { title: "Rent-Seeking (Busca de Renda Política)", desc: "Lobbies de grandes empresas por subsídios e reservas de mercado que barram a concorrência.", link: "#modulo-6-glossario" },
    { title: "A Tragédia dos Comuns", desc: "Por que bens sem donos definidos e sem mecanismo de preços sofrem com degradação crônica.", link: "#modulo-6-glossario" },
    { title: "Capítulo VIII: Compêndio Bibliográfico & Fontes Primárias", desc: "Catálogo completo de obras canônicas, Prêmios Nobel e citações primárias validadas.", link: "#modulo-7-bibliografia" },
    { title: "Epílogo: O Choque Anacrônico do Século XXI", desc: "Por que governar a era da IA com dogmas de carruagens a vapor e trincheiras.", link: "#choque-realidade" }
  ];

  function openSearch() {
    modal.classList.add("active");
    input.value = "";
    input.focus();
    renderSearchResults("");
    document.body.style.overflow = "hidden";
  }

  function closeSearch() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  triggerBtn.addEventListener("click", openSearch);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSearch();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeSearch();
    }
  });

  input.addEventListener("input", (e) => {
    renderSearchResults(e.target.value);
  });

  function renderSearchResults(query) {
    const q = query.toLowerCase().trim();
    const filtered = q === "" 
      ? searchableIndex.slice(0, 6) 
      : searchableIndex.filter(item => item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q));

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: var(--space-6) 0;">Nenhum registro localizado no índice analítico para "${query}".</p>`;
      return;
    }

    resultsContainer.innerHTML = filtered.map(item => `
      <div class="search-result-item" data-link="${item.link}">
        <h5>${item.title}</h5>
        <p>${item.desc}</p>
      </div>
    `).join('');

    resultsContainer.querySelectorAll(".search-result-item").forEach(item => {
      item.addEventListener("click", () => {
        const link = item.getAttribute("data-link");
        closeSearch();
        
        // Unlock manifesto if it was locked
        const manifestoBody = document.getElementById("manifestoBody");
        if (manifestoBody && manifestoBody.classList.contains("is-locked")) {
          manifestoBody.classList.remove("is-locked");
          localStorage.setItem("poli-pacto-accepted", "true");
        }

        const targetSection = document.querySelector(link);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }
}
