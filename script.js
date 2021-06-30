window.addEventListener("load", function (event) {
    document.querySelector("body").classList.remove("preload");
});

function noScroll() {
    window.scrollTo(0, 0);
}

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
    window.addEventListener('scroll', noScroll);
})

icon_close.addEventListener('click', () => {
    hamburger.style.display = 'block';
    icon_close.style.display = 'none';
    menu.style.display = 'none';
    hero.style.backgroundImage = "url('images/mobile/image-hero.jpg')";
    hero_title.style.display = 'block';
    window.removeEventListener('scroll', noScroll);
})