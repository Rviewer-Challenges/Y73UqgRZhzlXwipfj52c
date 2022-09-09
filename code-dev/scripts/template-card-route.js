
/**
 * Crea un item para el modal de Ruta
 */
const createItemDataModalRoute = (data) => {
    return `<div class="modal-card">
   <div class="content-img">
       <img src=${data.img} class="image-card" alt="">
   </div>
   <div class="content-card">
       <div class="card-header">
           <h4 class="title-card rows-text-1">${data.title}</h4>
           <a href="${data.url}" class="link-open" target="_blank"><span class="action-button icon-open-in-new"></span></a>
       </div>
       <p class="description-card rows-text-3">${data.description}</p>
   </div>
   </div>`;
}

export {createItemDataModalRoute};