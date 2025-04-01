// Header

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu");
    const nav = document.getElementById("nav");
  
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  });
