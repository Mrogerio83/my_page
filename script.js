document.addEventListener("DOMContentLoaded", function () {
  // 1. Destaque dinâmico de itens do Menu ao clicar
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // 2. Lógica do Carrossel de Projetos (Somente por eventos de clique)
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(document.querySelectorAll(".carousel-slide"));
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dotsContainer = document.querySelector(".carousel-dots");

  if (track && slides.length > 0) {
    let currentIndex = 0;

    // Criar indicadores (dots) dinamicamente
    slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(document.querySelectorAll(".dot"));

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  }
});

emailjs.init("c8nKzCe9Zo8hQ7rs1");

document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_zu5z16i";
    const templateID = "template_qq1yuo8";
    const submit_button = document.getElementById("submit_button");
    submit_button.textContent = "Enviando...";
    submit_button.disabled = true;

    emailjs.send(serviceID, templateID, form_data).then(() => {
      Toastify({
        text: "E-mail enviado com Sucesso!",
        style: {
          background: "#28a745",
          color:"#f4f4f4"
        },        
      }).showToast();

      document.getElementById("contact_form").reset();

    })
    .catch((error) => {
        Toastify({
        text: "Erro ao enviar E-mail!",
        style: {
          background: "#dc3545",
          color:"#f4f4f4"
        },        
      }).showToast();
        
    })
    .finally(() => {
        submit_button.textContent = "Enviar Mensagem";
        submit_button.disabled = false;
    })
  });
