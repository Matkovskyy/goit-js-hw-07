// --------variant1---------
import { galleryItems } from './gallery-items.js';
// Change code below this line

const blockGallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);

blockGallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
blockGallery.addEventListener('click',handleGalleryContainer)

function createGalleryItems(elements) {
    return elements.map(({ preview, original, description }) => {
       return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-src="${original}" 
      alt=${description}
    />
  </a>
</div>`
    }).join("")
};

const instance = basicLightbox.create(`
    <img class="gallery__modal__img" src=''>
`,
    {
        onShow: instance => {
            window.addEventListener('keydown', onEscapeClick);
        },
        onClose: instance => {
            window.removeEventListener('keydown', onEscapeClick);
        },
    },
);
function onEscapeClick(event){
    if (event.key === 'Escape') {
        instance.close();
}}

function handleGalleryContainer(event) {
    event.preventDefault();
       
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    instance.element().querySelector('.gallery__modal__img').src = event.target.dataset.src;
    instance.show();

 
}