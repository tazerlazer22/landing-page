// Animate sections on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight / 2) {
            section.classList.add('animate');
        }
    });
});

// Add animation classes to sections
sections.forEach(function(section) {
    section.classList.add('animate-fade-in');
});

// Mobile navigation
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});