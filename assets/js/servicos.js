// Serviços
const cards = document.querySelectorAll('.card-servico');
const modal = document.getElementById('modal-servico');
const titulo = document.getElementById('titulo-servico');
const lista = document.getElementById('lista-servico');
const fechar = document.querySelector('.fechar-modal');

const dadosServicos = {
  conteudo: {
    titulo: 'Criação de Conteúdo',
    itens: [
      'Redação para blogs e sites',
      'Roteiros para vídeos e redes sociais',
      'Copywriting para páginas de venda'
    ]
  },
  gerenciamento: {
    titulo: 'Gerenciamento de Site',
    itens: [
      'Atualização de conteúdo',
      'Otimização de SEO',
      'Análise de desempenho e relatórios'
    ]
  },
  design: {
    titulo: 'Design e Desenvolvimento',
    itens: [
      'Sites responsivos e personalizados',
      'Criação com HTML, SCSS e JS',
      'Design moderno e focado na experiência do usuário'
    ]
  }
};

cards.forEach(card => {
  card.addEventListener('click', () => {
    const tipo = card.getAttribute('data-servico');
    const info = dadosServicos[tipo];
    
    titulo.textContent = info.titulo;
    lista.innerHTML = info.itens.map(item => `<li>${item}</li>`).join('');
    
    modal.classList.add('ativo');
  });
});

fechar.addEventListener('click', () => {
  modal.classList.remove('ativo');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('ativo');
  }
});

