import { galleryItems } from './gallery-items.js';
// Change code below this line
const blockGallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);

blockGallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);


function createGalleryItems(elements) {
     return elements.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
           </a>
        </div>`;
    }).join('');
};
const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captiondelay: '250ms',
    
});
console.log(galleryItems);
