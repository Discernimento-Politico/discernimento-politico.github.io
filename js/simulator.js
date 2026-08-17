/**
 * Módulo de Falhas Políticas: As Ilusões da Esquerda e da Direita na Prática
 */

const policyFailuresData = {
  left: [
    {
      title: "Tabelamento e Controle de Preços",
      promise: "Tentar conter a inflação por decreto e proteger as famílias pobres contra a 'ganância' de comerciantes.",
      mechanism: "Destrói a margem operacional dos produtores. Com custos reais em alta e preços travados por lei, produtores reduzem o plantio ou escondem produtos, gerando desabastecimento, filas e mercado paralelo.",
      precedent: "Plano Cruzado no Brasil (1986), Édito de Preços Máximos de Diocleciano em Roma (301 d.C.), Venezuela moderna."
    },
    {
      title: "Emissão de Moeda para Financiar Gastos Ilimitados",
      promise: "Acreditar que o governo pode simplesmente emitir moeda ou crédito estatal sem limites para bancar direitos sociais.",
      mechanism: "Dinheiro não é riqueza real; riqueza consiste em bens produzidos (alimentos, moradias, energia). Multiplicar moeda sem aumentar a produção gera inflação — o tributo mais regressivo e perverso contra as classes assalariadas.",
      precedent: "República de Weimar na Alemanha (1923), Zimbábue (2008), Argentina contemporânea."
    },
    {
      title: "Estatização e Monopólio Estatal de Indústrias",
      promise: "Retirar o lucro privado de setores estratégicos para que o Estado administre a produção 'em benefício de todos'.",
      mechanism: "Sem concorrência e sem o mecanismo de preços livres de mercado (*Problema do Cálculo de Mises*), as empresas públicas acumulam ineficiência, cabides de emprego político, corrupção e rombos bilionários cobertos pelo pagador de impostos.",
      precedent: "Estatais britânicas nos anos 1970 (British Leyland, carvão e ferrovias), estatais latino-americanas pré-anos 90."
    },
    {
      title: "Aumento Arbitrário de Salário Mínimo sem Produtividade",
      promise: "Decretar aumentos salariais muito acima da produtividade média por canetada como atalho para enriquecer os trabalhadores.",
      mechanism: "Salários não são decididos por caridade legal, mas pelo valor gerado pelo trabalhador. Forçar um piso artificial alto para pequenas empresas e jovens sem experiência empurra milhões para o desemprego ou para a informalidade sem qualquer direito.",
      precedent: "Países com piso legal excessivo versus Países Nórdicos (que não têm salário mínimo fixado em lei federal, deixando a negociação por produtividade)."
    }
  ],
  right: [
    {
      title: "Capitalismo de Compadrio & 'Campeões Nacionais'",
      promise: "Conceder subsídios fiscais e empréstimos baratos em bancos estatais para criar megacorporações privadas nacionais.",
      mechanism: "Transfere bilhões de reais dos pagadores de impostos para empresários amigos do poder (*Rent-Seeking* de Mancur Olson). Em vez de inovar para agradar o consumidor, os oligopólios passam a investir em lobby político para manter seus privilégios.",
      precedent: "Política de Campeões Nacionais do BNDES no Brasil (2008–2014), Concessão de monopólios no Mercantilismo europeu."
    },
    {
      title: "Protecionismo Tarifário & Barreiras de Importação",
      promise: "Proteger as fábricas locais da concorrência estrangeira cobrando impostos pesados sobre produtos importados.",
      mechanism: "Cria uma reserva de mercado artificial: os industriais locais não precisam inovar nem baixar preços. A população pobre é forçada a pagar caro por produtos defasados, e agricultores/fábricas não conseguem importar maquinários modernos para produzir mais.",
      precedent: "Tarifa Smoot-Hawley nos EUA (1930) que aprofundou a Grande Depressão, Reserva de Mercado de Informática no Brasil (anos 1980)."
    },
    {
      title: "Socialização de Prejuízos Privados ('Grande Demais para Quebrar')",
      promise: "Injetar dinheiro público para resgatar bancos e conglomerados falidos para evitar turbulência econômica.",
      mechanism: "Viola a regra basilar do capitalismo (*Pele em Risco / Skin in the Game* de Taleb): se os lucros são privados na bonança, os prejuízos devem ser privados na falência. Salvar empresas ineficientes trava a destruição criativa (*Schumpeter*) e premia a má gestão.",
      precedent: "Resgates bancários com dinheiro do contribuinte nos EUA e Europa após a Crise Financeira Global de 2008."
    },
    {
      title: "Supressão de Liberdades Civis em Nome da 'Ordem'",
      promise: "Acreditar que a liberdade econômica pode ser preservada enquanto se restringem liberdades políticas, civis e a imprensa.",
      mechanism: "Sem imprensa livre e sem oposição democrática, a corrupção estatal fica oculta e o Estado de Direito é corroído. O poder central passa a confiscar propriedades e intimidar empresários que não se submetem à cartilha ideológica do governo.",
      precedent: "Ditaduras militares latino-americanas, regimes corporativistas fascistas da Europa no entreguerras."
    }
  ]
};

function initSimulatorModule() {
  const leftContainer = document.getElementById("leftFailuresList");
  const rightContainer = document.getElementById("rightFailuresList");

  if (!leftContainer || !rightContainer) return;

  leftContainer.innerHTML = policyFailuresData.left.map((item, index) => `
    <div class="failure-item-card animate-fade-in">
      <div class="failure-card-top">
        <span class="failure-badge left">Ilusão da Esquerda #${index + 1}</span>
        <h4>${item.title}</h4>
      </div>
      <div class="failure-field">
        <span class="failure-label">A Promessa Sedutora:</span>
        <p class="promise-text">"${item.promise}"</p>
      </div>
      <div class="failure-field">
        <span class="failure-label">Por que Falha na Mecânica Real:</span>
        <p class="mechanism-text">${item.mechanism}</p>
      </div>
      <div class="failure-field precedent">
        <span class="failure-label">Precedentes Históricos Documentados:</span>
        <p class="precedent-text">${item.precedent}</p>
      </div>
    </div>
  `).join('');

  rightContainer.innerHTML = policyFailuresData.right.map((item, index) => `
    <div class="failure-item-card animate-fade-in">
      <div class="failure-card-top">
        <span class="failure-badge right">Ilusão da Direita #${index + 1}</span>
        <h4>${item.title}</h4>
      </div>
      <div class="failure-field">
        <span class="failure-label">A Promessa Sedutora:</span>
        <p class="promise-text">"${item.promise}"</p>
      </div>
      <div class="failure-field">
        <span class="failure-label">Por que Falha na Mecânica Real:</span>
        <p class="mechanism-text">${item.mechanism}</p>
      </div>
      <div class="failure-field precedent">
        <span class="failure-label">Precedentes Históricos Documentados:</span>
        <p class="precedent-text">${item.precedent}</p>
      </div>
    </div>
  `).join('');
}

window.initSimulatorModule = initSimulatorModule;
