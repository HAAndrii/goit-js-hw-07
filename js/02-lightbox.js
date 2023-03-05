import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

createGallery(galleryItems);

function createGallery(items) {
    const arr = items.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    })
    galleryEl.insertAdjacentHTML('afterbegin', arr.join(''));
}

galleryEl.addEventListener('click', onGalleryClick);


function onGalleryClick(event) {
    event.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// console.log(galleryItems);
