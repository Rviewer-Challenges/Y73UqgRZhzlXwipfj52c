
/**
 * Cambiar apariencia de header con scroll
 */

const scrollHeader = () => {
    const nav = document.getElementById('main-header');
    this.scrollY >= 1 ? nav.classList.add('scroll-header') : nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)