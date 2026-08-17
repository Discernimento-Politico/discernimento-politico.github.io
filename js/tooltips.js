const tooltipDictionary = {
  "Oligopólios": "Mercado controlado por um pequeno grupo de empresas que não competem de verdade entre si.",
  "Rent-Seeking": "Busca de privilégios, subsídios ou monopólios do governo para lucrar sem precisar inovar ou competir.",
  "Busca de Renda": "Busca de privilégios ou monopólios estatais para lucrar sem precisar inovar.",
  "Trade-offs": "Em economia: para ganhar algo, você obrigatoriamente tem que abrir mão de outra coisa. Não há solução gratuita.",
  "Nomenklatura": "A elite burocrática dos países comunistas que desfrutava de riqueza e privilégios extremos enquanto o povo sofria.",
  "Extrativismo": "Sistema onde um pequeno grupo extrai a riqueza gerada pela maioria através de leis viciadas e impostos.",
  "Instituições Inclusivas": "Regras do jogo (leis, justiça, propriedade) que permitem a qualquer cidadão comum empreender e prosperar.",
  "Instituições Extrativas": "Regras do jogo feitas para proteger os amigos do rei e barrar a ascensão de novas empresas e pessoas.",
  "Rule of Law": "Império da Lei: quando as regras valem estritamente e igualmente para todos, inclusive para presidentes e juízes.",
  "Compadrio": "Sistema onde o sucesso de uma empresa depende das suas amizades e favores com políticos, e não do seu mérito.",
  "Tributação Inflacionária": "Quando o governo imprime dinheiro para cobrir seus déficits, desvalorizando a moeda e corroendo o poder de compra (inflação).",
  "Destruição Criativa": "Processo natural onde novas inovações destroem métodos velhos e ineficientes, gerando progresso a longo prazo.",
  "Cálculo Econômico": "A capacidade do mercado usar os preços livres para saber instantaneamente o que está faltando e o que está sobrando.",
  "Externalidades": "Um custo ou benefício gerado que sobra para terceiros. Ex: uma fábrica que lucra mas joga lixo no rio (a sociedade paga).",
  "Racionamento Burocrático": "Quando um comitê do Estado decide quem pode comprar o quê e em qual quantidade, gerando escassez e filas.",
  "Steel-Manning": "Princípio ético de debater com a versão mais forte do argumento do seu oponente, ao invés de atacá-lo de forma desonesta.",
  "Escrutínio": "Análise rigorosa, investigação profunda e detalhada.",
  "Demagogia": "Estratégia política que apela às emoções e preconceitos das pessoas, prometendo soluções mágicas para problemas complexos.",
  "Fisiológico": "Na política: alianças feitas puramente por troca de cargos e verbas públicas, sem qualquer alinhamento de princípios.",
  "Dogmas": "Crenças estabelecidas que são aceitas cegamente sem questionamento, impedindo o pensamento científico."
};

function initTooltips() {
  const container = document.getElementById('manifestoBody');
  if (!container) return;

  const targetTags = ['P', 'LI', 'TD', 'TH', 'DIV', 'SPAN', 'STRONG', 'EM'];
  const terms = Object.keys(tooltipDictionary).sort((a, b) => b.length - a.length);
  
  // Regex segura para limites de palavras em português (considera acentuação)
  const termsPattern = terms.map(t => t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|');
  const regex = new RegExp(`(^|\\s|[.,;!?()"\'])(${termsPattern})(?=\\s|[.,;!?()"\']|$)`, 'gi');

  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      if (node.parentNode && targetTags.includes(node.parentNode.nodeName)) {
        if (node.parentNode.closest('a') || node.parentNode.closest('.tooltip-trigger') || node.parentNode.closest('h1') || node.parentNode.closest('h2') || node.parentNode.closest('h3')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_SKIP;
    }
  }, false);

  const nodesToReplace = [];
  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeValue.trim().length > 0) {
      regex.lastIndex = 0;
      if (regex.test(node.nodeValue)) {
        nodesToReplace.push(node);
      }
    }
  }

  nodesToReplace.forEach(node => {
    const span = document.createElement('span');
    let html = node.nodeValue;
    regex.lastIndex = 0;
    
    html = html.replace(regex, (match, p1, p2) => {
      const originalTerm = terms.find(t => t.toLowerCase() === p2.toLowerCase());
      if (originalTerm) {
        return `${p1}<span class="tooltip-trigger" tabindex="0" data-tooltip="${tooltipDictionary[originalTerm]}">${p2}</span>`;
      }
      return match;
    });
    
    span.innerHTML = html;
    while (span.firstChild) {
      node.parentNode.insertBefore(span.firstChild, node);
    }
    node.parentNode.removeChild(node);
  });
}

// Auto-init se o documento já estiver carregado, ou aguarda.
function bootTooltips() {
  setTimeout(initTooltips, 500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootTooltips);
} else {
  bootTooltips();
}
