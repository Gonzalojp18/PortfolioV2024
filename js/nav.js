let menu = document.querySelector('.menu');
let nav = document.querySelector('.navBar');
let navLinks = document.querySelectorAll('.navBar a');
console.log(navLinks)

const isOpen = () => {
    nav.classList.toggle('active');
}

const closeNav = () => {
    nav.classList.remove('active');
}

// Añadir event listener a cada enlace del menú
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Esperar un breve tiempo para permitir la navegación antes de cerrar el menú
        setTimeout(closeNav, 300);
    });
});

// Event listener para abrir/cerrar el menú
menu.addEventListener("click", isOpen);
