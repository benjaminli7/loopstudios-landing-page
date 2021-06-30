window.addEventListener("load", function (event) {
    document.querySelector("body").classList.remove("preload");
});

const hamburger = document.getElementById('icon-hamburger');
const icon_close = document.getElementById('icon-close');
const menu = document.getElementById('nav-menu');
const hero = document.getElementById('hero');
const hero_title = document.getElementById('hero-title')

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    icon_close.style.display = 'block';
    menu.style.display = 'block';
    hero.style.backgroundImage = 'none'
    hero.style.backgroundColor = 'black';
    hero_title.style.display = 'none';
    document.body.classList.add('fixed');
})

icon_close.addEventListener('click', () => {
    hamburger.style.display = 'block';
    icon_close.style.display = 'none';
    menu.style.display = 'none';
    hero.style.backgroundImage = "url('images/mobile/image-hero.jpg')";
    hero_title.style.display = 'block';
    document.body.classList.remove('fixed');
})