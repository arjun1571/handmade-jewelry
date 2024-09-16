function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.getElementById('menuIcon');
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        menuIcon.innerHTML = '&times;';  
        menuIcon.style.color = 'black';
    } else {
        menuIcon.innerHTML = '&#9776;';  
        menuIcon.style.color = 'black';
    }
}

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        const menuIcon = document.getElementById('menuIcon');
        navLinks.classList.remove('active');
        menuIcon.innerHTML = '&#9776;';
    });
});


const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentSlide = 0;

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}



