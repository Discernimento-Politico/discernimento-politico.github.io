/**
 * Módulo do Glossário Desmistificador de Conceitos Político-Econômicos
 */

const glossaryData = [
  {
    id: "liberalismo",
    term: "Liberalismo",
    category: "Filosofia Política",
    meaning: "Doutrina centrada no primado do indivíduo, no Estado de Direito (*rule of law*), na limitação constitucional do poder estatal, na tolerância religiosa e na livre iniciativa de mercado.",
    distortion: "<strong>Distorção Contemporânea:</strong> Nos Estados Unidos, o vocábulo 'Liberal' passou a designar posições de centro-esquerda e intervencionismo progressista. Na tradição europeia e latino-americana, preserva o sentido clássico de livre mercado, propriedade e descentralização do poder."
  },
  {
    id: "social-democracia",
    term: "Social-Democracia vs. Socialismo Democrático",
    category: "Ciência Política Comparada",
    meaning: "A <strong>Social-Democracia</strong> (ex: modelo nórdico) aceita e estimula o motor da livre iniciativa capitalista, atuando estritamente na arrecadação tributária para sustentar serviços públicos universais. Já o <strong>Socialismo Democrático</strong> objetiva a abolição do capitalismo e a coletivização gradual dos meios de produção através do processo eleitoral.",
    distortion: "<strong>Distorção Contemporânea:</strong> Rotular países como Suécia e Dinamarca como 'socialistas'. As nações nórdicas sustentam algumas das economias mais abertas, desregulamentadas e pró-negócios do planeta."
  },
  {
    id: "neoliberalismo",
    term: "Neoliberalismo",
    category: "Historiografia Econômica",
    meaning: "Termo cunhado no Colóquio Walter Lippmann (1938) por intelectuais liberais para formular uma resposta moderna tanto ao *laissez-faire* do século XIX quanto ao coletivismo totalitário. Na literatura acadêmica, designa reformas orientadas para responsabilidade fiscal, desregulamentação e privatização de monopólios estatais.",
    distortion: "<strong>Distorção Contemporânea:</strong> É frequentemente empregado como rótulo pejorativo genérico para desqualificar qualquer proposta de disciplina orçamentária. Por outro lado, também é usado por seus defensores para encobrir desregulamentações que beneficiam grupos específicos em vez da concorrência aberta. O termo perdeu precisão analítica em ambos os lados do debate."
  },
  {
    id: "capitalismo-compadrio",
    term: "Capitalismo de Compadrio (Crony Capitalism)",
    category: "Economia Institucional",
    meaning: "Estrutura na qual grandes grupos empresariais prosperam não pela preferência livre dos consumidores, mas por concessões políticas do Estado (empréstimos subsidiados em bancos públicos, isenções tributárias casuísticas e barreiras regulatórias contra novos concorrentes).",
    distortion: "<strong>Distorção Contemporânea:</strong> Confundir compadrio corporativo com livre mercado. O livre mercado exige livre concorrência e a possibilidade de falência para empresas ineficientes; o compadrio utiliza o Estado para salvar oligopólios amigos."
  },
  {
    id: "rule-of-law",
    term: "Estado de Direito (Rule of Law)",
    category: "Teoria Institucional",
    meaning: "Princípio onde as leis são gerais, abstratas, previsíveis e aplicadas com igualdade rigorosa a todos os cidadãos — especialmente aos governantes. Ninguém está acima da lei.",
    distortion: "<strong>Distorção Contemporânea:</strong> Confundir com 'Governo por Leis' (*Rule by Law*), onde burocratas e governantes usam a caneta estatal para criar decretos casuísticos e leis retroativas para perseguir adversários ou premiar aliados."
  },
  {
    id: "rent-seeking",
    term: "Rent-Seeking (Busca de Renda Política)",
    category: "Escolha Pública (Nobel 1986)",
    meaning: "Prática em que corporações e grupos de pressão gastam recursos e tempo fazendo lobby em gabinetes estatais para obter privilégios, subsídios ou reservas de mercado que impeçam a concorrência, em vez de investir em inovação ou melhores preços para o consumidor.",
    distortion: "<strong>Distorção Contemporânea:</strong> Atribuir o enriquecimento de oligopólios protegidos ao 'livre mercado', quando na realidade ele decorre diretamente da concessão de privilégios estatais que o livre mercado condena."
  },
  {
    id: "corporativismo",
    term: "Corporativismo / Fascismo Econômico",
    category: "Regimes Totalitários",
    meaning: "Sistema no qual o Estado organiza, tutela e obriga sindicatos e cartéis empresariais (como a D.A.F. nazista e as corporações do fascismo italiano) a submeterem suas operações aos objetivos militares ou nacionalistas do poder central.",
    distortion: "<strong>Distorção Contemporânea:</strong> Supor que o fascismo buscou a liberdade econômica ou a abolição da propriedade. A propriedade privada foi preservada formalmente, mas subordinada às diretrizes bélicas do Estado totalitário."
  },
  {
    id: "ilusao-monetaria",
    term: "Ilusão Monetária & A Lei dos Trade-offs",
    category: "Teoria Econômica",
    meaning: "A falsa premissa de que a emissão de moeda gera riqueza material. Riqueza real consiste em bens concretos (energia, alimentos, infraestrutura, tecnologia). Em políticas públicas não existem soluções gratuitas, apenas concessões de custo-benefício (*Trade-offs* de Thomas Sowell).",
    distortion: "<strong>Distorção Contemporânea:</strong> Propostas demagógicas que prometem direitos e subsídios infinitos sem esclarecer quem arcará com os custos (seja via carga tributária, endividamento ou corrosão inflacionária)."
  },
  {
    id: "tragedia-comuns",
    term: "A Tragédia dos Comuns",
    category: "Teoria dos Jogos & Propriedade",
    meaning: "Dilema econômico formulado por Garrett Hardin que demonstra que bens de acesso público sem direitos de propriedade claramente definidos ou sem mecanismos de preço de mercado sofrem invariavelmente com sobre-exploração, negligência e degradação crônica.",
    distortion: "<strong>Distorção Contemporânea:</strong> Achar que estatizar um recurso natural ou serviço resolve a escassez por si só; sem governança impessoal e precificação real de custos, a tendência é o desperdício generalizado."
  }
];

function initGlossaryModule() {
  const container = document.getElementById("glossaryGrid");
  const searchInput = document.getElementById("glossarySearch");

  if (!container) return;

  function renderGlossary(filterText = "") {
    const q = filterText.toLowerCase().trim();
    const filtered = glossaryData.filter(item => 
      item.term.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.meaning.toLowerCase().includes(q) ||
      item.distortion.toLowerCase().includes(q)
    );

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: var(--space-8); color: var(--text-muted);">
          Nenhum conceito localizado para a busca informada.
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <div class="glossary-entry animate-fade-in" id="term-${item.id}">
        <div class="glossary-entry-header">
          <h4 class="glossary-entry-term">${item.term}</h4>
          <span class="academic-tag">${item.category}</span>
        </div>
        <p style="margin-bottom: var(--space-4);">${item.meaning}</p>
        <div class="glossary-distortion-box">
          ${item.distortion}
        </div>
      </div>
    `).join('');
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderGlossary(e.target.value);
    });
  }

  // Initial render
  renderGlossary();
}

window.initGlossaryModule = initGlossaryModule;
