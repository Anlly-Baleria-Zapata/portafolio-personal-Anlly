// document.responsive = true;
// document.theme = "dark";

//     // Usamos esas propiedades
//     if (document.theme === "dark") {
//       document.body.style.background = "#111";
//       document.body.style.color = "#eee";
//     }

//     if (document.responsive) {
//       window.addEventListener("resize", () => {
//         console.log("Screen width:", window.innerWidth);
//       });
//     }

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuToggle.classList.toggle('open'); // animación X

  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', !expanded);
});

// Cerrar menú al hacer clic en un link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
    }
  });
});

  window.addEventListener('load', () => {
    const progresses = document.querySelectorAll('.progress');
    progresses.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 200);
    });
  });

