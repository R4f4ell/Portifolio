document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    const modal = document.querySelector('.zoom-modal');
    const modalImg = modal.querySelector('img');
  
    let currentSlide = 0;
  
    // Criar dots
    slides.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  
    const dots = Array.from(document.querySelectorAll('.dot'));
  
    function updateSlide() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
      updateDots();
    }
  
    function updateDots() {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentSlide].classList.add('active');
    }
  
    function goToSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      updateSlide();
    }
  
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    window.addEventListener('resize', updateSlide);
  
    // Zoom ao clicar
    slides.forEach(slide => {
      const img = slide.querySelector('img');
      img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.classList.add('active');
      });
    });
  
    modal.addEventListener('click', () => {
      modal.classList.remove('active');
      modalImg.src = '';
    });
  
    updateSlide();
  });  