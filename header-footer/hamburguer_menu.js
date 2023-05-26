const menuHamburguer = document.querySelector('.menuHamburguer');
const menu = document.querySelector('.nav');
let menuActive = false;

menuHamburguer.addEventListener('click', () => {
    if (!menuActive) {
        menu.classList.add('activeMenu');
        menuActive = true;
        console.log("asdadad")
    } else {
        menu.classList.remove('activeMenu');
        menuActive = false;
    }
})
