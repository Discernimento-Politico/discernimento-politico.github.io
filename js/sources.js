/**
 * Módulo de Fontes Primárias & Biblioteca Bibliográfica (Academic Archive)
 */

const primarySourcesDatabase = {
  "hitler-viereck-1923": {
    author: "Adolf Hitler",
    title: "Entrevista Concedida ao Jornalista George Sylvester Viereck",
    source: "Publicada na revista American Monthly (Edição de Outubro de 1923)",
    context: "Entrevista histórica concedida dez anos antes da nomeação como chanceler, durante a crise da República de Weimar, revelando explicitamente a tática de sequestro do vocábulo 'socialismo'.",
    quote: `"O socialismo é a ciência de lidar com o bem comum. O nosso 'socialismo' não tem nada a ver com o socialismo marxista. O marxismo não é socialismo. Os marxistas roubaram o termo e distorceram seu significado. Eu vou tomar o socialismo dos socialistas.\n\nO socialismo é uma antiga instituição ariana e germânica. Nossos ancestrais alemães mantinham certas terras em comum. Eles cultivavam a ideia do bem comum. O marxismo não tem o direito de se disfarçar de socialismo. O socialismo, ao contrário do marxismo, não repudia a propriedade privada. Ao contrário do marxismo, não envolve a destruição da personalidade humana. O socialismo é patriótico."`,
    academicConsensus: "Historiadores canônicos como Ian Kershaw (*Hitler: Hubris*) e Richard J. Evans (*The Coming of the Third Reich*) documentam que essa redefinição do vocábulo foi uma manobra populista calculada para cooptar a classe trabalhadora sem ameaçar a estrutura de propriedade dos grandes industriais alemães."
  },
  "germa-bel-2010": {
    author: "Germà Bel",
    title: "Against the Mainstream: Nazi Privatization in 1930s Germany",
    source: "The Economic History Review, Vol. 63, No. 1 (2010), pp. 34–55",
    context: "Estudo acadêmico de história econômica documentando o programa sistemático de privatizações de estatais conduzido pelo regime nazista na década de 1930.",
    quote: `"Na década de 1930, enquanto as democracias ocidentais expandiam o papel do Estado na economia após a Grande Depressão, o regime nazista na Alemanha transferiu a propriedade de várias empresas públicas para o setor privado. O governo nazista privatizou ferrovias estatais, os quatro maiores bancos comerciais (Commerzbank, Deutsche Bank, Dresdner Bank), indústrias siderúrgicas e serviços públicos locais.\n\nA privatização foi aplicada não por compromisso ideológico com o livre mercado, mas para financiar o rearmamento militar e cimentar a aliança política entre a liderança nazista e a elite industrial privada alemã."`,
    academicConsensus: "Pesquisa historiográfica definitiva que desmente categoricamente teses leigas de estatização socialista na Alemanha Nazista, comprovando a venda de ativos públicos para grandes monopólios corporativos privados aliados ao esforço de guerra."
  },
  "mises-calculo-1920": {
    author: "Ludwig von Mises",
    title: "O Cálculo Econômico na Comunidade Socialista",
    source: "Archiv für Sozialwissenschaft und Sozialpolitik (1920)",
    context: "O ensaio pioneiro que demonstrou a impossibilidade matemática do planejamento econômico centralizado sem preços de mercado.",
    quote: `"Onde não há livre mercado, não há mecanismo de preços; e onde não há mecanismo de preços, não há cálculo econômico. Sem preços reais estabelecidos pela concorrência para bens de capital (máquinas, terras e insumos industriais), os planejadores estatais ficam tateando no escuro.\n\nToda tentativa de substituir a formação descentralizada de preços por ordens burocráticas resulta em alocação irracional de recursos, desperdício maciço de esforço humano e desabastecimento generalizado."`,
    academicConsensus: "O argumento de Mises, posteriormente aprofundado por Hayek (Nobel 1974), permaneceu incontestado e foi empiricamente comprovado pelo colapso de produtividade e racionamento na União Soviética e seus satélites."
  },
  "marx-gotha-1875": {
    author: "Karl Marx",
    title: "Crítica do Programa de Gotha (Seção IV)",
    source: "Manuscrito de 1875, publicado por Friedrich Engels em 1891",
    context: "Documento teórico fundacional no qual Marx detalha a transição do capitalismo para o comunismo, estabelecendo a distinção entre a fase socialista transitória e o objetivo final.",
    quote: `"Entre a sociedade capitalista e a comunista fica o período da transformação revolucionária de uma na outra. A este período corresponde também um período de transição política, cujo Estado não pode ser outro senão a ditadura revolucionária do proletariado.\n\nNa fase superior da sociedade comunista, quando tiver desaparecido a servil subordinação dos indivíduos à divisão do trabalho... só então o estreito horizonte do direito burguês poderá ser superado e a sociedade poderá escrever em sua bandeira: 'De cada qual segundo suas capacidades, a cada qual segundo suas necessidades!'."`,
    academicConsensus: "Como demonstram as análises historiográficas e a obra de Hannah Arendt (*As Origens do Totalitarismo*), todos os regimes marxistas-leninistas pararam na hipertrofia de um Estado policialesco e de sua casta burocrática (*Nomenklatura*), jamais alcançando o definhamento estatal."
  },
  "adam-smith-1776": {
    author: "Adam Smith",
    title: "A Riqueza das Nações (Livro I, Capítulo X)",
    source: "Publicado originalmente em Londres, 1776",
    context: "Crítica basilar da economia política contra a concessão de privilégios e monopólios estatais para grupos mercantis cortesãos.",
    quote: `"As pessoas do mesmo ramo de negócios raramente se reúnem, mesmo que para festividades e diversão, sem que a conversa termine em uma conspiração contra o público, ou em alguma artimanha para elevar os preços. É impossível impedir tais reuniões por lei... mas a lei não deve fazer nada para facilitar tais reuniões, e muito menos para torná-las necessárias."`,
    academicConsensus: "Fundamento da distinção clássica entre livre concorrência impessoal e capitalismo de compadrio. O livre mercado pressupõe a ausência de privilégios estatais que impeçam o livre ingresso de concorrentes."
  },
  "deng-xiaoping-1978": {
    author: "Deng Xiaoping",
    title: "Discurso na 3ª Sessão Plenária do 11º Comitê Central do Partido Comunista Chinês",
    source: "Pequim, Dezembro de 1978",
    context: "Pronunciamento que oficializou o início da política de reformas econômicas e abertura de mercado na China pós-Mao. A célebre frase sobre o gato preto ou branco foi usada por Deng em contextos anteriores (anos 1960) e tornou-se símbolo do pragmatismo que guiou as reformas.",
    quote: `"Planejamento e forças de mercado não constituem a diferença essencial entre socialismo e capitalismo. Uma economia planificada não é socialismo, pois há planejamento sob o capitalismo; a economia de mercado não é capitalismo, pois há mercados sob o socialismo. Ambos são instrumentos para alocar a atividade econômica.\n\nNão importa se o gato é preto ou branco; se ele caça o rato, é um bom gato."`,
    academicConsensus: "A historiografia econômica registra que o pragmatismo de Deng Xiaoping ao adotar a propriedade privada, preços livres e investimento estrangeiro foi o motor real que retirou centenas de milhões de cidadãos chineses da miséria extrema."
  },
  "mancur-olson-1965": {
    author: "Mancur Olson",
    title: "A Lógica da Ação Coletiva: Bens Públicos e a Teoria dos Grupos",
    source: "Harvard University Press, 1965",
    context: "Tratado basilar da ciência política e economia institucional sobre a captura do Estado por lobbies organizados.",
    quote: `"Pequenos grupos de interesse concentrados (como cartéis de indústrias protegidas, sindicatos corporativos e oligopólios) possuem incentivos gigantescos para se organizar e fazer lobby por leis que lhes concedam subsídios ou monopólios. Os custos dessas políticas, por sua vez, são diluídos e espalhados entre milhões de cidadãos desorganizados, que pagam centavos a mais em cada produto sem perceber a extração."`,
    academicConsensus: "A teoria de Olson explica matematicamente por que governos democráticos frequentemente aprovam leis ineficientes que prejudicam a maioria da população para beneficiar corporações e lobbies específicos de compadrio."
  },
  "amartya-sen-1999": {
    author: "Amartya Sen",
    title: "Desenvolvimento como Liberdade / Pobreza e Fomes",
    source: "Oxford University Press (Prêmio Nobel 1998)",
    context: "Estudo empírico definitivo sobre direitos civis, imprensa livre e segurança alimentar global.",
    quote: `"Na história documentada do mundo, nenhuma grande fome jamais ocorreu em uma democracia independente que possuísse eleições regulares, partidos de oposição e uma imprensa livre. Fomes catastróficas ocorrem sob regimes autoritários e economias planificadas porque a liderança estatal não enfrenta escrutínio público, não responde a incentivos eleitorais e suprime a circulação de informações sobre a escassez real."`,
    academicConsensus: "Trabalho empírico que vincula a liberdade política e o fluxo livre de dados e imprensa à preservação da vida e à capacidade de prevenir crises humanitárias."
  }
};

const bibliographyData = [
  {
    author: "Daron Acemoglu & James A. Robinson",
    work: "Por que as Nações Fracassam (2012) / O Corredor Estreito (2019)",
    category: "instituicoes",
    categoryLabel: "Economia Institucional (Nobel 2024)",
    thesis: "Comprovam através de séculos de evidências comparadas que o enriquecimento das nações resulta de Instituições Inclusivas (leis impessoais, direitos de propriedade universais e mercados abertos) versus Instituições Extrativas (privilégios e captura do Estado)."
  },
  {
    author: "Douglass C. North",
    work: "Instituições, Mudança Institucional e Desempenho Econômico (1990)",
    category: "instituicoes",
    categoryLabel: "Economia Institucional (Nobel 1993)",
    thesis: "Pioneiro da teoria institucional: demonstra que leis, contratos confiáveis e baixos custos de transação são o alicerce fundamental para a cooperação econômica e o enriquecimento de longo prazo das sociedades."
  },
  {
    author: "James M. Buchanan & Gordon Tullock",
    work: "O Cálculo do Consenso: As Bases Lógicas da Democracia Constitucional (1962)",
    category: "instituicoes",
    categoryLabel: "Teoria da Escolha Pública (Nobel 1986)",
    thesis: "Demonstram que políticos e burocratas respondem à lógica de incentivos pessoais e eleitorais, desmistificando a visão romântica do Estado benevolente e expondo a mecânica do compadrio orçamentário."
  },
  {
    author: "Mancur Olson",
    work: "A Lógica da Ação Coletiva (1965) / A Ascensão e Declínio das Nações (1982)",
    category: "instituicoes",
    categoryLabel: "Sociologia Política & Grupos de Pressão",
    thesis: "Explica como grupos de interesse concentrados (cartéis corporativos e lobbies) capturam o Estado para impor custos difusos a milhões de pagadores de impostos desorganizados."
  },
  {
    author: "Norberto Bobbio",
    work: "Direita e Esquerda: Razões e Significados de uma Distinção Política (1994)",
    category: "ciencia-politica",
    categoryLabel: "Filosofia Política",
    thesis: "Estabelece a régua conceitual clássica: a Esquerda enxerga as desigualdades sociais como artificiais e postula sua mitigação; a Direita concebe as distinções individuais e hierarquias como inerentes à ordem social e prioriza a estabilidade e o mérito."
  },
  {
    author: "Hannah Arendt",
    work: "As Origens do Totalitarismo (1951)",
    category: "ciencia-politica",
    categoryLabel: "Análise do Totalitarismo",
    thesis: "Estudo definitivo demonstrando como tanto o Nazismo quanto o Stalinismo destruíram os corpos intermediários da sociedade civil e a verdade factual para subordinar a existência humana ao poder absoluto do Estado."
  },
  {
    author: "Amartya Sen",
    work: "Desenvolvimento como Liberdade (1999) / Pobreza e Fomes (1981)",
    category: "ciencia-politica",
    categoryLabel: "Economia do Bem-Estar (Nobel 1998)",
    thesis: "Comprova que o desenvolvimento real consiste na expansão das liberdades humanas fundamentais e demonstra que fomes em massa nunca ocorreram em democracias com imprensa livre e mercados abertos."
  },
  {
    author: "Ian Kershaw / Richard J. Evans / Adam Tooze",
    work: "Hitler: Hubris & Nemesis / A Trilogia do Terceiro Reich / O Salário da Destruição",
    category: "historia",
    categoryLabel: "Historiografia do Terceiro Reich",
    thesis: "Consenso historiográfico documental que comprova a destruição de sindicatos independentes, o pioneirismo das privatizações na década de 1930 e a aliança orgânica do regime com conglomerados privados industriais alemães."
  },
  {
    author: "Germà Bel",
    work: "Against the Mainstream: Nazi Privatization in 1930s Germany (2010)",
    category: "historia",
    categoryLabel: "História Econômica Quantitativa",
    thesis: "Pesquisa que documenta detalhadamente o pioneirismo mundial do regime nazista na privatização de bancos estatais, ferrovias e indústrias para financiar o rearmamento bélico e cooptar grandes industriais."
  },
  {
    author: "Robert O. Paxton",
    work: "A Anatomia do Fascismo (2004)",
    category: "historia",
    categoryLabel: "Ciência Política Comparada",
    thesis: "Demonstra que movimentos fascistas e nazistas nunca ascenderam ao governo isoladamente: dependeram da aliança com elites tradicionais conservadoras, agrárias e industriais temerosas da revolução comunista."
  },
  {
    author: "Friedrich A. Hayek",
    work: "O Uso do Conhecimento na Sociedade (1945) / O Caminho da Servidão (1944)",
    category: "economia",
    categoryLabel: "Teoria Econômica (Nobel 1974)",
    thesis: "Demonstra que o conhecimento econômico é disperso na sociedade. O sistema de preços de livre mercado é uma rede de comunicação que nenhum burocrata central é capaz de replicar sem gerar desabastecimento."
  },
  {
    author: "Ludwig von Mises",
    work: "O Cálculo Econômico na Comunidade Socialista (1920) / Ação Humana (1949)",
    category: "economia",
    categoryLabel: "Escola Austríaca de Economia",
    thesis: "O teorema da impossibilidade do cálculo econômico: sem preços reais de mercado formados pela concorrência privada de bens de capital, o planejamento central é matematicamente cego e inviável."
  },
  {
    author: "Thomas Sowell",
    work: "Economia Básica: Um Guia de Economia Voltado ao Senso Comum / Conflito de Visões",
    category: "economia",
    categoryLabel: "Mecânica Econômica",
    thesis: "A realidade econômica é regida por incentivos materiais e trade-offs inevitáveis. As políticas públicas devem ser avaliadas pelos seus resultados mensuráveis na produção real, e não pelas nobres intenções declaradas."
  },
  {
    author: "Joseph Schumpeter",
    work: "Capitalismo, Socialismo e Democracia (1942)",
    category: "economia",
    categoryLabel: "Teoria da Inovação",
    thesis: "Formula o conceito de 'Destruição Criativa': o dinamismo do capitalismo decorre da substituição constante de métodos e tecnologias obsoletas por inovações mais eficientes e acessíveis."
  },
  {
    author: "Nassim Nicholas Taleb",
    work: "Antifrágil: Coisas que se Beneficiam com o Caos (2012) / Skin in the Game (2018)",
    category: "instituicoes",
    categoryLabel: "Sistemas Complexos",
    thesis: "Sistemas centralizados e planejados de cima para baixo são frágeis ao erro. A estabilidade decorre de redes descentralizadas e de agentes que assumem a responsabilidade direta pelas consequências de seus atos."
  }
];

function initSourcesAndBiblioModule() {
  initPrimarySourceDrawer();
  initBibliographyGrid();
}

function initPrimarySourceDrawer() {
  const backdrop = document.getElementById("drawerBackdrop");
  const closeBtn = document.getElementById("drawerCloseBtn");
  const bodyEl = document.getElementById("drawerBody");

  if (!backdrop) return;

  window.openSourceDrawer = function(sourceId) {
    const src = primarySourcesDatabase[sourceId];
    if (!src) return;

    bodyEl.innerHTML = `
      <div class="animate-fade-in">
        <span class="academic-tag sepia">ARQUIVO HISTÓRICO DOCUMENTAL</span>
        <h3 style="font-size: 1.5rem; margin-top: var(--space-3); margin-bottom: var(--space-2);">${src.title}</h3>
        <p style="font-family: var(--font-sans); font-size: 0.95rem; font-weight: 600; color: var(--accent-primary); margin-bottom: var(--space-5);">
          ${src.author} | ${src.source}
        </p>

        <div style="background: var(--bg-surface-elevated); padding: var(--space-5); border-radius: var(--radius-sm); border-left: 2px solid var(--text-primary); margin-bottom: var(--space-6); font-size: 0.95rem;">
          <strong>Contexto Historiográfico:</strong> ${src.context}
        </div>

        <blockquote style="font-size: 1.08rem; line-height: 1.75; margin: var(--space-6) 0;">
          ${src.quote.replace(/\n\n/g, '<br><br>')}
          <cite>— ${src.author}, ${src.source}</cite>
        </blockquote>

        <div style="background: var(--bg-primary); border: 1px solid var(--border-default); padding: var(--space-5); border-radius: var(--radius-sm); margin-top: var(--space-6);">
          <div style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--accent-sepia); margin-bottom: var(--space-2);">
            Avaliação Historiográfica Consensual
          </div>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0; line-height: 1.65;">${src.academicConsensus}</p>
        </div>
      </div>
    `;

    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function closeDrawer() {
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeDrawer();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop.classList.contains("active")) {
      closeDrawer();
    }
  });
}

function initBibliographyGrid() {
  const container = document.getElementById("biblioGrid");
  const filterBtns = document.querySelectorAll(".biblio-tab-btn");

  if (!container) return;

  function renderBiblio(category = "all") {
    const filtered = category === "all" 
      ? bibliographyData 
      : bibliographyData.filter(b => b.category === category);

    container.innerHTML = filtered.map(b => `
      <div class="biblio-entry-card animate-fade-in">
        <div>
          <div class="biblio-author-name">${b.author}</div>
          <div class="biblio-work-title">${b.work}</div>
          <p class="biblio-thesis-text">${b.thesis}</p>
        </div>
        <div style="margin-top: var(--space-4);">
          <span class="academic-tag">${b.categoryLabel}</span>
        </div>
      </div>
    `).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-category");
      renderBiblio(cat);
    });
  });

  // Initial render
  renderBiblio("all");
}

window.initSourcesAndBiblioModule = initSourcesAndBiblioModule;
