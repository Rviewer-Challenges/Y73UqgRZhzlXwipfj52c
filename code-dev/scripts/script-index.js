import {getData} from "./generate-data.js";
import {createItemDataModalRoute} from "./template-card-route.js";

/**
 * Cambiar apariencia de header con scroll
 */

const scrollHeader = () => {
    const nav = document.getElementById('main-header');
    window.scrollY >= 10 ? nav.classList.add('scroll-header-normal') : nav.classList.remove('scroll-header-normal');
    window.scrollY >= 120 ? nav.classList.add('scroll-header-small') : nav.classList.remove('scroll-header-small');
}

window.addEventListener('scroll', scrollHeader);

/**
 * Ocultar el modal
 */
const closeModal = () => {
    const elementClose = document.getElementById('close_model_route');
    elementClose.addEventListener('click', e => {
        const contetCard = document.getElementById('route_model');
        contetCard.classList.remove('show-element');
        document.body.classList.remove('hidde-scroll');
        const bodyCard = document.getElementById('route_model').firstElementChild.lastElementChild;
        /* quitar informacion del body del madal */
        bodyCard.innerHTML='';
    });
}
closeModal();


/**
 * Abrir modal de la sección de ruta 
 */

const openModalRoute = (e) => {
    
    /* asignar título al modal */
    const titleCard = document.getElementById('route_model').firstElementChild.firstElementChild.firstElementChild;
    titleCard.innerHTML = e.lastElementChild.firstElementChild.textContent;

    /* segun el id del card se carga la informacion al modal */
    const idCard = e.getAttribute('id');
    switch( idCard ) {
        case 'card_html':
            setDataModalRoute(idCard);
            break;
        case 'card_css':
            setDataModalRoute(idCard);
            break;
        case 'card_js':
            setDataModalRoute(idCard);
            break;
        case 'card_git':
            setDataModalRoute(idCard);
            break;
        case 'card_project':
            setDataModalRoute(idCard);
            break;
        default:
            ;
    }

    /* Mostrar modal y ocultar el scroll del body */
    const contetCard = document.getElementById('route_model');
    contetCard.classList.add('show-element');
    document.body.classList.add('hidde-scroll');
}

/* agrega al body del modal (Ruta) los items */
function setDataModalRoute (id) {
    const array = getData(id);
    let cadenaCode ='';
    array.forEach(element => {
        cadenaCode += createItemDataModalRoute (element);
    });
    const bodyCard = document.getElementById('route_model').firstElementChild.lastElementChild;
    bodyCard.innerHTML = cadenaCode;
}

window.openModalRoute = openModalRoute;
