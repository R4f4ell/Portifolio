document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#servicos .card');
  const modal = document.getElementById('modal-servico');
  const titulo = document.getElementById('titulo-servico');
  const lista = document.getElementById('lista-servico');
  const fechar = document.querySelector('.fechar-modal');

  const dadosServicos = {
    'Criação de Conteúdo': [
      'Criação de roteiros para vídeos, blogs e redes sociais',
      'Textos institucionais e copy para páginas',
      'Organização de pautas e estrutura de conteúdo estratégico'
    ],
    'Gerenciamento de Site': [
      'Atualizações constantes de conteúdo',
      'Otimização de SEO técnico',
      'Correções de bugs e melhorias de performance'
    ],
    'Design e Desenvolvimento': [
      'Criação de sites com HTML, SCSS e JavaScript',
      'Interfaces responsivas e modernas',
      'Experiência do usuário como prioridade'
    ]
  };

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const tituloServico = card.querySelector('.card__title').textContent;
      const detalhes = dadosServicos[tituloServico];

      if (!detalhes) return;

      titulo.textContent = tituloServico;
      lista.innerHTML = detalhes.map(item => `<li>${item}</li>`).join('');
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
});