const carouselItems = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function updateCarousel(index) {
    // Mettre à jour les éléments visibles
    carouselItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    // Mettre à jour les indicateurs
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function autoScroll() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel(currentIndex);
}

// Défilement automatique toutes les 5 secondes
setInterval(autoScroll, 5000);

// Ajouter des événements clic sur les indicateurs (optionnel)
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});






// Fonction pour interconnecter les pages
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a"); // Tous les liens <a> du site

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");

            // Vérifie si le lien est interne
            if (href && !href.startsWith("http") && !href.startsWith("#")) {
                event.preventDefault(); // Empêche le rechargement
                window.location.href = href; // Change la page
            }
        });
    });
});