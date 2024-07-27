// CARD ANIMATION ON EACH CARD PROJECT.
let projects = document.querySelectorAll('.boxProject');

projects.forEach(function(card) {
    card.addEventListener('mousemove', function(event) {
        // Obtener las dimensiones y la posición del elemento
        let rect = card.getBoundingClientRect();
        let x = event.clientX - rect.left; // Coordenada X del mouse dentro del elemento
        let y = event.clientY - rect.top;  // Coordenada Y del mouse dentro del elemento

        // Calcular la rotación en función de la posición del mouse
        let rotateX = ((y / rect.height) - 0.5) * 30; // Ajusta el valor 30 para cambiar la intensidad del efecto
        let rotateY = ((x / rect.width) - 0.5) * -30;

        // Aplicar la transformación
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', function() {
        // Reiniciar la transformación cuando el mouse salga del elemento
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});

// ININITY CARROUSEL ANIMATION ON SECTION SKILL
const cinta = document.querySelector(".tegnology");

// Define la animación continua
gsap.to(cinta, {
  xPercent: -100,
  repeat: -1,
  duration: 10,
  ease: "linear"
});

