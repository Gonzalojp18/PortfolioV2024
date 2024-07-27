
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

       // Pinnea la sección boxAboutMe
       ScrollTrigger.create({
        trigger: ".boxAboutMe",
        start: "top top",
        end: "+=100%",  // Duración del pinning
        pin: true
    });

    // Animación de escala y movimiento de la palabra especial
    gsap.fromTo(".me", {
        scale: 5
    }, {
        scale: 1,
        scrollTrigger: {
            trigger: ".bitMe",
            start: "top 100%",  // Inicia cuando el top del elemento está en el 75% del viewport
            end: "top 100%",  // Termina cuando el top del elemento está en el 25% del viewport
            scrub: true

        }
    });

    // Efecto de máquina de escribir
    let text = document.querySelector(".bitMe p").innerText;
    document.querySelector(".bitMe p").innerText = "";

    let typingEffect = gsap.timeline({
        scrollTrigger: {
            trigger: ".boxAboutMe",
            start: "top center",
            end: "bottom top",
            scrub: true
        }
    });

    typingEffect.to(".bitMe p", {
        text: text,
        duration: 5, // Duración total del efecto de máquina de escribir
        ease: "none"
    });

    // Animación de los párrafos de la sección descripción
    gsap.utils.toArray(".description p").forEach((para, i) => {
        gsap.to(para, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: para,
                start: "top bottom",
                end: "top center",
                scrub: true
            }
        });
    });
});
