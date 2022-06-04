import { galleryItems } from './gallery-items.js';
// Change code below this line
const blockGallery = document.querySelector('.gallery');

const galleryList = galleryItems.map(item =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
).join('');
blockGallery.innerHTML = galleryList;

const modal = basicLightbox.create(
	`<div class="modal"><img src="" width="800" height="600"></div>`
);
refs.gallery.addEventListener('click', onGalleryImageClickOpenModal);

function onGalleryImageClickOpenModal(event) {
	event.preventDefault();

	const IMG_TAG = 'IMG';
	const isEventOnImage = event.target.nodeName === IMG_TAG;
	const currentPreviewImage = event.target;
	const modalImgRef = modal.element().querySelector('img');

	if (!isEventOnImage) return;

	setOriginalImageURL(currentPreviewImage, modalImgRef);
	modal.show();
	if (modal.visible()) setBodyScrollY('disabled');

}

function onGalleryImageClickCloseModal(event)
{
	event.addEventListener('keydown', (event) => {
		if (event.code === "Escape") {}
	}
	)
};

