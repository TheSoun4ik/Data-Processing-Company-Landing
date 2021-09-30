document.addEventListener("DOMContentLoaded", function() {
    // Burger
    
    let burgerBtn = document.getElementById('burger');
    let nav = document.getElementById('nav');
    let navBtns = document.querySelectorAll('.nav__link');
    let windowWidth = window.innerWidth;

    if (windowWidth < 767) {
        burgerBtn.addEventListener('click', function(event) {
            event.preventDefault();
    
            nav.classList.toggle('show');
        });
    };

    navBtns.forEach(function(item) {
        item.addEventListener('click', function() {
            nav.classList.remove('show');
        });
    });

    // Animated Blocks - https://scrollrevealjs.org/

    ScrollReveal().reveal('.companies', {delay: 500});
    ScrollReveal().reveal('.choice__inner', {delay: 500});
    ScrollReveal().reveal('.traffic', {delay: 500});
    ScrollReveal().reveal('.ways', {delay: 500});
    ScrollReveal().reveal('.project', {delay: 500});
    ScrollReveal().reveal('.business__inner', {delay: 500});
    ScrollReveal().reveal('.info__inner', {delay: 500});
    ScrollReveal().reveal('.form', {delay: 500});
    ScrollReveal().reveal('.footer', {delay: 500});
});