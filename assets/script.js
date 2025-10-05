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

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Función para validar cada campo en tiempo real
function validateField(field) {
  const value = field.value.trim();
  let valid = true;
  let message = "";

  if (!value) {
    valid = false;
    message = "Este campo es obligatorio";
  } else if (field.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      valid = false;
      message = "Email inválido";
    }
  }

  if (!valid) {
    field.style.borderColor = "#FF00FF"; 
  } else {
    field.style.borderColor = "#00FFF7"; 
  }

  return valid;
}

// Validación en tiempo real
form.querySelectorAll("input, textarea").forEach(field => {
  field.addEventListener("input", () => validateField(field));
});

// Función para enviar el formulario
form.addEventListener("submit", function (e) {
  e.preventDefault(); // evita recargar la página

  let isValid = true;

  // Validamos todos los campos
  form.querySelectorAll("input, textarea").forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  if (!isValid) {
    formMessage.textContent = "Por favor, corrige los errores antes de enviar";
    formMessage.style.color = "#FF00FF";
    return;
  }

  // Simulación de envío 
  formMessage.textContent = "Enviando...";
  formMessage.style.color = "#00FFF7";

  setTimeout(() => {
    formMessage.textContent = "¡Mensaje enviado con éxito!";
    formMessage.style.color = "#00FFF7";
    form.reset();
    form.querySelectorAll("input, textarea").forEach(field => {
      field.style.borderColor = "";
    });
  }, 1000);
});


