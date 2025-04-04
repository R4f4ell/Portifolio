document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu");
  const nav = document.getElementById("nav");

  // Toggle menu (abrir/fechar)
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });

  // Fechar ao clicar em qualquer link
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  });

  // Fechar ao clicar fora
  document.addEventListener("click", (e) => {
    if (
      !nav.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      nav.classList.remove("active");
      menuBtn.classList.remove("active");
    }
  });
});



// Seta cima
// Exibe ou oculta a seta ao rolar
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



