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

document.addEventListener('DOMContentLoaded', () => {
    const cinta = document.querySelector(".tegnology");

    // Clona el contenido de .tegnology para un bucle verdaderamente infinito
    // Esto ya lo hicimos en el HTML, pero si por alguna razón no quieres modificar el HTML,
    // podrías hacerlo aquí dinámicamente:
    const originalContent = cinta.innerHTML;
    cinta.innerHTML += originalContent;


    // Calculamos el ancho total de una copia del carrusel para un bucle perfecto
    // Necesitamos asegurarnos de que el ancho total del primer set de elementos
    // sea lo que animamos para que el segundo set aparezca justo cuando el primero se va.
    // Una forma común es animar `xPercent: -50` ya que hemos duplicado el contenido.
    // Esto moverá el 50% del ancho del contenedor, que es exactamente el tamaño de la primera copia.

    const duration = 25; // Duración de la animación en segundos, ajusta para cambiar la velocidad

    gsap.to(cinta, {
        xPercent: -50, // Mueve el 50% del ancho del elemento (que es la longitud de un set duplicado)
        repeat: -1, // Repetición infinita
        duration: duration,
        ease: "linear", // Movimiento lineal para evitar saltos
        modifiers: {
            xPercent: gsap.utils.wrap(-50, 0) // Envuelve la animación de xPercent entre -50 y 0
        }
    });

    // Opcional: Pausar la animación al pasar el mouse por encima
    // cinta.addEventListener('mouseenter', () => {
    //     gsap.to(cinta, { timeScale: 0.2, ease: "power1.out" }); // Ralentiza la animación
    // });

    // cinta.addEventListener('mouseleave', () => {
    //     gsap.to(cinta, { timeScale: 1, ease: "power1.out" }); // Vuelve a la velocidad normal
    // });
});

