/**
 * Módulo de Comparação Direta e Simples das Ideologias (Com Casos Reais Históricos)
 */

const ideologiesList = [
  {
    id: "liberalismo",
    name: "Liberalismo Clássico",
    tagline: "O indivíduo, a livre iniciativa e as leis vêm antes do poder do Estado.",
    theory: "O governo deve existir apenas para garantir a segurança, a justiça imparcial e o cumprimento de contratos. O mercado livre descentralizado é quem melhor decide preços e produtos.",
    practice: "Gerou o maior ciclo de enriquecimento, inovação tecnológica e redução de miséria da história humana. Exige leis firmes para evitar a formação de cartéis e monopólios privados, e historicamente enfrentou desafios em lidar com desigualdades extremas iniciais e externalidades ambientais.",
    locations: [
      {
        place: "Grã-Bretanha (Século XIX)",
        context: "Adoção pioneira do livre-comércio com a revogação das 'Leis dos Cereais' (Corn Laws em 1846).",
        result: "Transformou o país na primeira superpotência industrial do planeta e derrubou o custo de alimentos para a população assalariada."
      },
      {
        place: "Hong Kong (1961–1971)",
        context: "Política de 'não-intervencionismo positivo' liderada pelo secretário financeiro John Cowperthwaite.",
        result: "Transformou uma ilha rochosa sem recursos naturais e cheia de refugiados famintos em um dos centros financeiros mais ricos e prósperos do mundo."
      },
      {
        place: "Estados Unidos (Século XIX / Início do XX)",
        context: "Garantia irrestrita de propriedade, baixa tributação e imigração aberta de talentos e trabalhadores.",
        result: "Explosão de ferrovias, energia elétrica e manufatura; exigiu a criação de leis antitruste (Sherman Act de 1890) para impedir a cartelização de grandes corporações."
      }
    ],
    points: {
      estado: "Mínimo: apenas segurança, justiça e garantia de regras iguais para todos.",
      propriedade: "Sagrada e inviolável (o fruto do seu trabalho é seu).",
      economia: "Mercado livre: preços definidos pela oferta e procura de milhões de pessoas.",
      liberdade: "Total: liberdade de expressão, imprensa, religião e de empreender."
    }
  },
  {
    id: "social-democracia",
    name: "Social-Democracia",
    tagline: "Motor capitalista de livre mercado sustentando uma rede pública de bem-estar social.",
    theory: "Aceita o capitalismo privado como a única forma de gerar riqueza, mas cobra impostos sobre essa riqueza para financiar saúde, educação e previdência públicas de qualidade.",
    practice: "Modelo dos países nórdicos. Funciona muito bem em países com alta produtividade, facilidade de abrir empresas e pouca corrupção, mas exige disciplina fiscal rigorosa para não quebrar.",
    locations: [
      {
        place: "Suécia, Dinamarca e Noruega (Décadas de 1930 até hoje)",
        context: "Pacto histórico entre sindicatos e grandes empresários (Acordo de Saltsjöbaden de 1938 na Suécia e modelo 'Flexicurity' dinamarquês).",
        result: "Líderes mundiais em IDH e igualdade. Nos anos 1970–80, o Estado cresceu demais e gerou crise fiscal, forçando os países a fazer reformas pró-mercado nos anos 90 (como desregulamentação e vouchers escolares na Suécia) para continuarem ricos."
      },
      {
        place: "Alemanha Ocidental (Pós-1945)",
        context: "Implementação da 'Economia Social de Mercado' (*Soziale Marktwirtschaft*) liderada por Ludwig Erhard.",
        result: "Gerou o 'Milagre Econômico Alemão' (*Wirtschaftswunder*), reconstruindo a nação destruída pela guerra em tempo recorde através de livre concorrência combinada com seguridade social."
      }
    ],
    points: {
      estado: "Forte na proteção social e regulador eficiente, mas sem ser dono de empresas.",
      propriedade: "Plena e respeitada, com impostos proporcionais sobre consumo e renda.",
      economia: "Mercado livre e competitivo (fácil de abrir negócios e comerciar com o mundo).",
      liberdade: "Plena e garantida pela constituição e democracia."
    }
  },
  {
    id: "socialismo-democratico",
    name: "Socialismo Democrático",
    tagline: "Usar o voto popular para estatizar setores da economia e cooperativizar empresas.",
    theory: "Pretende acabar com os grandes empresários privados de forma gradual e pacífica, colocando indústrias e bancos sob controle de cooperativas de trabalhadores ou do Estado.",
    practice: "Tentativas históricas sofreram com ineficiência em empresas estatais, queda de investimento privado, inflação e fuga de capitais. Algumas estatizações pontuais (como o NHS britânico na saúde) produziram resultados mistos, mas programas amplos de coletivização fracassaram economicamente.",
    locations: [
      {
        place: "Reino Unido (1945–1979 - Governos Trabalhistas)",
        context: "Estatização maciça de setores inteiros: carvão, ferrovias, aviação, eletricidade, aço e indústria automobilística (British Leyland).",
        result: "Estatais acumularam prejuízos bilionários, queda drástica na produtividade e greves crônicas que culminaram no 'Inverno do Descontentamento' (1978–79), revertido pelas privatizações da era Thatcher."
      },
      {
        place: "França (1981–1983 - Início do Governo François Mitterrand)",
        context: "Nacionalização de 36 grandes bancos comerciais e 12 megagrupos industriais privados.",
        result: "Fuga massiva de capitais para o exterior, desvalorização acelerada da moeda e inflação; em 1983, Mitterrand foi obrigado a fazer a 'Virada do Rigor' (*Tournant de la rigueur*), abandonando as estatizações para evitar a falência do país."
      },
      {
        place: "Chile (1970–1973 - Governo Salvador Allende)",
        context: "Estatização acelerada de bancos, indústrias e terras agrícolas via decretos executivos e controle fixo de preços.",
        result: "Queda na produção de alimentos, inflação acima de 300%, racionamento e crise econômica aguda que desestabilizou o país antes do trágico golpe militar de 1973."
      }
    ],
    points: {
      estado: "Grande e planejador, dono dos principais setores industriais e financeiros.",
      propriedade: "Restrita: permite propriedade de bens pessoais, mas não de grandes empresas.",
      economia: "Mista: planejamento estatal para setores-chave e cooperativas de trabalhadores.",
      liberdade: "Mantém eleições democráticas formais."
    }
  },
  {
    id: "marxismo-leninismo",
    name: "Marxismo-Leninismo (Comunismo Real)",
    tagline: "Tudo pertence ao Estado em nome do povo, sob o comando de um partido único.",
    theory: "O partido toma o poder pela revolução, extingue todos os donos de negócios e planeja toda a economia até que as classes sociais e o Estado deixem de existir.",
    practice: "O Estado nunca definhou. Criou ditaduras totalitárias violentas, perseguição política em massa, campos de trabalho forçado (Gulags), racionamento e fome crônica por falta de cálculo de preços.",
    locations: [
      {
        place: "União Soviética (1917–1991)",
        context: "Abolição completa da propriedade privada e estatização de toda a agricultura (coletivização forçada) e indústrias sob a Gosplan.",
        result: "Causou fomes devastadoras (como o Holodomor que matou milhões na Ucrânia em 1932–33), campos de concentração (Gulags), privilégios para a casta do partido (*Nomenklatura*), atraso tecnológico civil e colapso total em 1991."
      },
      {
        place: "China Maoísta (1949–1976)",
        context: "Campanhas do 'Grande Salto Adiante' (1958–1962) e 'Revolução Cultural' (1966–1976) com estatização total e abolição do mercado.",
        result: "A maior fome da história humana (estimada em 30 a 45 milhões de mortos); o colapso só foi estancado quando Deng Xiaoping reinseriu a propriedade privada e o mercado livre a partir de 1978."
      },
      {
        place: "Camboja (1975–1979 - Khmer Vermelho)",
        context: "Tentativa de abolir o dinheiro, o comércio, as cidades e a propriedade privada do dia para a noite.",
        result: "Genocídio que exterminou cerca de 25% de toda a população do país através de execuções sumárias, fome forçada e trabalhos em campos agrícolas."
      }
    ],
    points: {
      estado: "Totalitário e absoluto: comanda toda a vida pública, econômica e privada.",
      propriedade: "Abolida: fábricas, terras, comércios e bancos pertencem 100% ao governo.",
      economia: "Planificada: burocratas em salas fechadas decidem o preço e a produção de tudo.",
      liberdade: "Zero: partido único, imprensa censurada e proibição de oposição."
    }
  },
  {
    id: "fascismo-nazismo",
    name: "Fascismo / Nazismo",
    tagline: "O indivíduo não é nada; a Nação, o Estado ou a Raça são tudo.",
    theory: "O Estado é supremo e deve militarizar toda a sociedade. Rejeita a democracia, a luta de classes e a liberdade individual, exigindo obediência cega ao líder supremo.",
    practice: "Ditaduras terroristas de extrema-direita. Criaram sindicatos estatais obrigatórios (D.A.F.), aliaram-se a grandes indústrias privadas para fabricar armas, promoveram perseguição a minorias e causaram guerras devastadoras e o Holocausto.",
    locations: [
      {
        place: "Alemanha Nazista (1933–1945)",
        context: "Extinção dos sindicatos livres e criação da Frente Alemã do Trabalho (D.A.F.); economia dirigida para rearmamento com títulos de dívida secretos (*Mefo Bills*).",
        result: "Guerra de conquista para pilhar recursos de outros países, escravização de trabalhadores, hiperendividamento oculto e o assassinato industrializado de 6 milhões de judeus no Holocausto."
      },
      {
        place: "Itália Fascista (1922–1943)",
        context: "Criação do Estado Corporativo por Mussolini (*Carta del Lavoro* de 1927), subordinando patrões e empregados a ordens de comitês estatais.",
        result: "Extinção da democracia, policiamento político (OVRA), cartéis forçados, ineficiência econômica crônica e destruição completa na Segunda Guerra Mundial."
      }
    ],
    points: {
      estado: "Totalitário, corporativista e militarizado para guerra.",
      propriedade: "Mantida formalmente, mas vigiada e submetida às metas militares do regime.",
      economia: "Capitalismo dirigido pelo Estado e cartéis forçados a serviço da guerra.",
      liberdade: "Zero: eliminação violenta de qualquer dissidência ou minoria."
    }
  },
  {
    id: "conservadorismo",
    name: "Conservadorismo Institucional",
    tagline: "Proteger a ordem social, a família, as tradições morais e a estabilidade das leis.",
    theory: "Mudanças sociais devem ser lentas e prudentes, para não destruir as instituições históricas (família, religião, direito de propriedade) que garantiram a ordem civilizatória.",
    practice: "Gera grande estabilidade institucional e segurança jurídica para o comércio. Historicamente, porém, a resistência excessiva à mudança retardou avanços necessários em direitos civis, trabalhistas e igualdade de oportunidades para minorias.",
    locations: [
      {
        place: "Reino Unido (Séculos XVIII até hoje)",
        context: "Tradição constitucional gradualista formulada por pensadores como Edmund Burke e governos de Peel, Disraeli e Churchill.",
        result: "Evitou revoluções violentas e rupturas institucionais traumáticas, mantendo estabilidade jurídica e política contínua por mais de três séculos."
      },
      {
        place: "Estados Unidos (Pós-Segunda Guerra / Era Eisenhower e Reagan)",
        context: "Defesa dos princípios da Constituição de 1787, federalismo (autonomia dos estados) e desregulamentação econômica.",
        result: "Consolidação da liderança geopolítica e tecnológica americana, com desafios históricos em estender direitos civis de forma mais ágil para minorias."
      },
      {
        place: "Japão do Pós-Guerra (Governança contínua do PLD)",
        context: "Combinação de conservadorismo social profundo, disciplina corporativa familiar e livre mercado voltado à exportação de alta tecnologia.",
        result: "Ascensão ao posto de segunda maior economia do mundo no século XX com baixíssimos índices de criminalidade e alta coesão social."
      }
    ],
    points: {
      estado: "Limitado à ordem pública, segurança nacional e defesa da constituição.",
      propriedade: "Protegida como a base da autonomia familiar e da sociedade.",
      economia: "Livre mercado baseado no respeito a contratos consolidados.",
      liberdade: "Amplas liberdades civis, com ênfase no dever moral e cumprimento da lei."
    }
  }
];

let selectedIdeologyId = "liberalismo";

function initMatrixModule() {
  const navContainer = document.getElementById("ideologyTabsNav");
  const cardContainer = document.getElementById("ideologyCardDisplay");

  if (!navContainer || !cardContainer) return;

  // Render clickable simple tabs
  navContainer.innerHTML = ideologiesList.map(item => `
    <button class="simple-tab-btn ${item.id === selectedIdeologyId ? 'active' : ''}" data-id="${item.id}">
      ${item.name}
    </button>
  `).join('');

  // Tab click listeners
  navContainer.querySelectorAll(".simple-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      navContainer.querySelectorAll(".simple-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedIdeologyId = btn.getAttribute("data-id");
      renderIdeologyCard(selectedIdeologyId);
    });
  });

  // Initial render
  renderIdeologyCard(selectedIdeologyId);
}

function renderIdeologyCard(id) {
  const item = ideologiesList.find(i => i.id === id) || ideologiesList[0];
  const container = document.getElementById("ideologyCardDisplay");
  if (!container) return;

  container.innerHTML = `
    <div class="simple-ideology-card animate-fade-in">
      <div class="card-top-banner">
        <h3 style="font-size: 1.8rem; margin: 0 0 var(--space-2); color: var(--text-primary);">${item.name}</h3>
        <p class="lead" style="font-size: 1.15rem; color: var(--accent-sepia); margin: 0; font-family: var(--font-serif); line-height: 1.5;">
          "${item.tagline}"
        </p>
      </div>

      <div class="theory-practice-grid">
        <div class="theory-box">
          <span class="box-label" style="color: var(--accent-primary);">O que prega no papel (A Teoria):</span>
          <p>${item.theory}</p>
        </div>
        <div class="practice-box">
          <span class="box-label" style="color: var(--accent-sepia);">O que aconteceu na prática geral:</span>
          <p>${item.practice}</p>
        </div>
      </div>

      <!-- ONDE FOI APLICADO NA HISTÓRIA REAL -->
      <div class="locations-history-panel">
        <div class="locations-history-header">
          <span class="box-label" style="color: var(--accent-sepia); margin-bottom: 0;">📍 Onde Foi Aplicado na História Real (Casos e Desfechos):</span>
        </div>
        <div class="locations-cards-list">
          ${item.locations.map(loc => `
            <div class="location-item-row">
              <div class="location-place-title">${loc.place}</div>
              <div class="location-context-desc"><strong>Contexto:</strong> ${loc.context}</div>
              <div class="location-result-desc"><strong>Resultado Factual:</strong> ${loc.result}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- RESUMO DOS 4 PONTOS CHAVE -->
      <div class="criteria-summary-grid">
        <div class="criteria-item">
          <strong>🏛️ Papel do Estado:</strong>
          <span>${item.points.estado}</span>
        </div>
        <div class="criteria-item">
          <strong>🏡 Propriedade Privada:</strong>
          <span>${item.points.propriedade}</span>
        </div>
        <div class="criteria-item">
          <strong>📈 Economia & Preços:</strong>
          <span>${item.points.economia}</span>
        </div>
        <div class="criteria-item">
          <strong>🕊️ Liberdades Civis:</strong>
          <span>${item.points.liberdade}</span>
        </div>
      </div>
    </div>
  `;
}

window.initMatrixModule = initMatrixModule;
