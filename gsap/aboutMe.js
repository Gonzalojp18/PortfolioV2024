// Asegúrate de que GSAP y ScrollTrigger estén importados
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    // Si aún no están registrados, es buena práctica hacerlo aquí
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    // Si usas TextPlugin para el efecto de máquina de escribir, asegúrate de que esté importado
    // import { TextPlugin } from "gsap/TextPlugin";
    // gsap.registerPlugin(TextPlugin);

    // --- Animación de la sección "About Me" ---

    // 1. Pinnea la sección boxAboutMe
    // Esto es genial para mantener la sección en vista mientras las animaciones ocurren
    ScrollTrigger.create({
        trigger: ".boxAboutMe",
        start: "top top", // Inicia cuando el top de la sección llega al top del viewport
        end: "bottom top", // Termina cuando el bottom de la sección sale del viewport
        pin: true, // Fija la sección
        // markers: true, // Solo para depuración
        // pinSpacing: false // No añade espacio extra de pinning (ELIMINADO)
    });

    // Animación del texto principal "SOY un creativo Desarrollador Web..."
    // Se utilizará una línea de tiempo para orquestar la aparición del título y el efecto de escala.
    const bitMeTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".bitMe",
            start: "top 80%", // Empieza a animar cuando .bitMe entra en el 80% de la vista
            end: "top 20%", // Termina cuando .bitMe está en el 20% de la vista
            scrub: 1, // Animación suave al hacer scroll
            // markers: true, // Solo para depuración
        }
    });

    // 1. Efecto de escala en "SOY"
    bitMeTimeline.fromTo(".bitMe .me",
        { scale: 3, opacity: 0, x: -50 }, // Inicio: grande, transparente, a la izquierda
        { scale: 1, opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }, "start" // Fin: tamaño normal, visible, sin desplazamiento
    );

    // 2. Revelación del resto del texto del p.bitMe
    // Usamos textContent para animar la revelación como si se "escribiera"
    const bitMeTextElement = document.querySelector(".bitMe p");
    if (bitMeTextElement) {
        const originalBitMeText = bitMeTextElement.textContent;
        bitMeTextElement.textContent = ""; // Limpiamos el texto para la animación

        bitMeTimeline.to(bitMeTextElement, {
            duration: 2.5, // Duración de la escritura
            text: originalBitMeText, // Revela el texto
            opacity: 1,
            ease: "none" // Sin easing para un efecto de escritura constante
        }, "start+=0.5"); // Inicia un poco después que "SOY"
    }

    // Animación de los párrafos de la sección descripción
    // Vamos a animarlos individualmente para una revelación escalonada y elegante.
    // Usaremos un efecto de clip-path para un estilo más futurista.
    gsap.utils.toArray(".description p").forEach((para, i) => {
        gsap.fromTo(para,
            {
                opacity: 0,
                y: 50,
                // clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" // Desde abajo
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" // Desde arriba
            },
            {
                opacity: 1,
                y: 0,
                // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // A la vista completa
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // A la vista completa
                duration: 1.2,
                ease: "power3.out", // Easing más suave y moderno
                scrollTrigger: {
                    trigger: para,
                    start: "top 85%", // Inicia cuando el párrafo entra en el 85% de la vista
                    end: "top 50%", // Termina cuando el párrafo está en el 50% de la vista
                    scrub: 0.8, // Animación suave al hacer scroll
                    toggleActions: "play none none reverse", // Se reproduce al entrar, revierte al salir
                    // markers: true, // Solo para depuración
                }
            }
        );
    });

    // Opcional: Pequeño efecto de "glitch" o "parpadeo" en el fondo al llegar a la sección
    gsap.to(".boxAboutMe::before", {
        opacity: 1, // Llega a opacidad completa
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".boxAboutMe",
            start: "top center",
            toggleActions: "play none none reverse",
            // markers: true // Solo para depuración
        }
    });
});