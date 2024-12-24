//document.addEventListener("click", function (e) {
//document.querySelector(".layerD").classList.toggle("active");
//});
//events
document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear(); // Récupérer l'année actuelle
  const copyrightText = `©${year} Question Mark. Tous droits réservés.`; // Texte de copyright
  document.querySelector(".cpy p").innerText = copyrightText; // Insérer le texte dans le footer
});

//slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Fonction pour changer de diapositive
function changeSlide(n) {
  slideIndex += n;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  showSlide(slideIndex);
}

// Fonction pour montrer la diapositive active
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
  updateIndicators(index);
}

// Fonction pour mettre à jour les indicateurs
function updateIndicators(index) {
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((indicator, i) => {
    indicator.classList.remove("active");
    if (i === index) {
      indicator.classList.add("active");
    }
  });
}

// Fonction pour démarrer le slider automatique
function autoSlide() {
  setInterval(() => {
    changeSlide(1);
  }, 5000); // Change toutes les 3 secondes
}

// Démarrer le slider automatique
autoSlide();
