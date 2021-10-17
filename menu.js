const btnMobile = document.getElementByid('btn-mobile');

function toggleMenu() {
    const nav = document.getElementByid('nav');
    nav.classlist.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);