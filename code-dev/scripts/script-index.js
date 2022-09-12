import {getData} from "./generate-data.js";
import {createItemDataModalRoute} from "./template-card.js";
import {createItemDataModalCreator} from "./template-card.js";

/**
 * Cambiar apariencia de header con scroll
 */

const scrollHeader = () => {
    const nav = document.getElementById('main_header');
    window.scrollY >= 10 ? nav.classList.add('scroll-header-normal') : nav.classList.remove('scroll-header-normal');
    window.scrollY >= 120 ? nav.classList.add('scroll-header-small') : nav.classList.remove('scroll-header-small');
}

window.addEventListener('scroll', scrollHeader);

/**
 * Segruimiento del menu con el scroll
 */

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.main-nav a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.main-nav a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll',scrollActive);

/**
 * Ocultar el modal
 */
const closeModal = () => {
    const elementClose = document.getElementById('close_modal');
    elementClose.addEventListener('click', e => {
        const contetCard = document.getElementById('main_modal');
        contetCard.classList.remove('show-element');
        document.body.classList.remove('hidde-scroll');
        const bodyCard = document.getElementById('main_modal').firstElementChild.lastElementChild;
        /* quitar informacion del body del madal */
        bodyCard.innerHTML='';
    });
}
closeModal();

/**
 * Ocultar el modal content creators
 */
const closeModalContentCreator = () => {
    const elementClose = document.getElementById('close_modal_creator');
    elementClose.addEventListener('click', e => {
        const contetCard = document.getElementById('creator_modal');
        contetCard.classList.remove('show-element');
        document.body.classList.remove('hidde-scroll');
        const bodyCard = document.getElementById('creator_modal').firstElementChild.lastElementChild;
        /* quitar informacion del body del modal */
        bodyCard.innerHTML='';
    });
}
closeModalContentCreator();


/**
 * Abrir modal de la sección de ruta 
 */

const openModalRoute = (e) => {
    
    /* asignar título al modal */
    const titleCard = document.getElementById('main_modal').firstElementChild.firstElementChild.firstElementChild;
    titleCard.innerHTML = e.lastElementChild.firstElementChild.textContent;

    /* segun el id del card se carga la informacion al modal */
    const idCard = e.getAttribute('id');
    switch( idCard ) {
        case 'card_html':
            setDataModal(idCard);
            break;
        case 'card_css':
            setDataModal(idCard);
            break;
        case 'card_js':
            setDataModal(idCard);
            break;
        case 'card_git':
            setDataModal(idCard);
            break;
        case 'card_project':
            setDataModal(idCard);
            break;
        default:
            ;
    }

    /* Mostrar modal y ocultar el scroll del body */
    const contetCard = document.getElementById('main_modal');
    contetCard.classList.add('show-element');
    document.body.classList.add('hidde-scroll');
}

/* agrega al body del modal los items */
function setDataModal (id) {
    const array = getData(id);
    let cadenaCode ='';
    array.forEach(element => {
        cadenaCode += createItemDataModalRoute (element);
    });
    const bodyCard = document.getElementById('main_modal').firstElementChild.lastElementChild;
    bodyCard.innerHTML = cadenaCode;
}

/**
 * Abrir modal de la sección de Herramientas 
 */

const openModalTools = (e) => {

    /* segun el id del card se carga la informacion al modal */
    const idCard = e.getAttribute('id');

    /* asignar título al modal */
    const titleCard = document.getElementById('main_modal').firstElementChild.firstElementChild.firstElementChild;
    titleCard.innerHTML = e.lastElementChild.textContent;

    switch( idCard ) {
        case 'card_images':
            setDataModal(idCard);
            break;
        case 'card_icons':
            setDataModal(idCard);
            break;
        case 'card_text':
            setDataModal(idCard);
            break;
        case 'card_color':
            setDataModal(idCard);
            break;
        case 'card_code':
            setDataModal(idCard);
            break;
        case 'card_music':
            setDataModal(idCard);
            break;
        default:
            ;
    }
    /* Mostrar modal y ocultar el scroll del body */
    const contetCard = document.getElementById('main_modal');
    contetCard.classList.add('show-element');
    document.body.classList.add('hidde-scroll');
}

/* agrega al body del modal los items */
const openModalContentCreator = (e) => {

    
    /* asignar título al modal */
    const titleCard = document.getElementById('creator_modal').firstElementChild.firstElementChild.firstElementChild;
    titleCard.innerHTML = e.lastElementChild.firstElementChild.textContent;
    /* Mostrar modal y ocultar el scroll del body */
    const contetCard = document.getElementById('creator_modal');
    contetCard.classList.add('show-element');
    document.body.classList.add('hidde-scroll');

    const idCard = e.getAttribute('id');
    const array = getData(idCard);
    let cadenaCode ='';
    array.forEach(element => {
        cadenaCode += createItemDataModalCreator (element);
    });
    const bodyCard = document.getElementById('creator_modal').firstElementChild.lastElementChild;
    bodyCard.innerHTML = cadenaCode;
}

window.openModalRoute = openModalRoute;
window.openModalTools = openModalTools;
window.openModalContentCreator = openModalContentCreator;
