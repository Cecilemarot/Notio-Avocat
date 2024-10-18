$(document).ready(function(){
    $('.center').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true, // Affiche les flèches de navigation
        dots: true,   // Affiche les points de navigation
        centerMode: true,  // Active le mode centre
        autoplay: true, // Active la lecture automatique
        autoplaySpeed: 3000, // Durée entre chaque changement de slide (en millisecondes)
        pauseOnHover: true, // Met en pause le carrousel lorsque la souris survole
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
