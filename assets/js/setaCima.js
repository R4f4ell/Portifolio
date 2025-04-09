window.addEventListener('scroll', () => {
    const arrow = document.querySelector('.scroll-arrow-up');
    if (window.scrollY > 600) {
      arrow.classList.add('visible');
    } else {
      arrow.classList.remove('visible');
    }
  });
  
  // Rolagem suave ao topo
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Expor função ao escopo global (para funcionar com onclick no HTML)
  window.scrollToTop = scrollToTop;