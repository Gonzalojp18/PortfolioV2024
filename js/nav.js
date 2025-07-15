let menu = document.querySelector('.menu');
let nav = document.querySelector('.navBar');
let navLinks = document.querySelectorAll('.navBar a');
console.log(navLinks)

const isOpen = () => {
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
}

const closeNav = () => {
    nav.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// event on each element in menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Esperar un breve tiempo para permitir la navegación antes de cerrar el menú
        setTimeout(closeNav, 300);
    });
});

// open and close the menu
menu.addEventListener("click", isOpen);
