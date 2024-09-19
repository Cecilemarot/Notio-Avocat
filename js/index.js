const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const images = document.querySelectorAll('.img-carousel');

let currentIndex = 0;
const numberOfImg = images.length;

function updateCarousel() {
    const carousel = document.querySelector('.carrousel-img-content');
    const offset = -currentIndex * 340;
    carousel.style.transform = `translateX(${offset}px)`;

    if (currentIndex === 0) {
        arrowLeft.style.opacity = '0.5';
        return;
    }

    arrowLeft.style.opacity = '1';

    if (currentIndex === (numberOfImg - 1)) {
        arrowRight.style.opacity = '0.5';
        return;
    }

    arrowRight.style.opacity = '1';
}

function leftClick() {
    if (currentIndex === 0) return;

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = numberOfImg - 1;
        updateCarousel();
    }

    function rightClick() {
        if (currentIndex === (numberOfImg - 1)) return;

        if (currentIndex < numberOfImg - 1) {
            currentIndex++; // Incrémente currentIndex pour passer à l'image suivante
        } else {
            currentIndex = 0; // Reviens à la première image si currentIndex est déjà à la dernière image
        }
        updateCarousel(); // Met à jour l'affichage du carrousel avec la nouvelle image
    }

    // Initialiser le carrousel en affichant la première image
    updateCarousel();

    arrowLeft.addEventListener('click', leftClick); // Attache la fonction leftClick au clic sur la flèche gauche
    arrowRight.addEventListener('click', rightClick); // Attache la fonction rightClick au clic sur la flèche droite
