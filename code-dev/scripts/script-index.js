
/**
 * Cambiar apariencia de header con scroll
 */

const scrollHeader = () => {
    const nav = document.getElementById('main-header');
    this.scrollY >= 10 ? nav.classList.add('scroll-header-normal') : nav.classList.remove('scroll-header-normal');
    this.scrollY >= 120 ? nav.classList.add('scroll-header-small') : nav.classList.remove('scroll-header-small');
}

window.addEventListener('scroll', scrollHeader)