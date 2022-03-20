
// Hamburger Menu //

const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    console.log('click');
    mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 500)
mainnav.classList.remove('responsive')};