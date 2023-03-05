import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const items = itemsCreate(galleryItems)

function itemsCreate (galleryItems) {
    const arr = galleryItems.map(({ preview, original, description }) => {
        //console.log(preview, original, description);
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div >`;
    })

    return arr.join('');
}

galleryEl.insertAdjacentHTML('afterbegin', items);

galleryEl.addEventListener('click', onGalleryClick);

let imageInstance = 0;

function onGalleryClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const originalImg = event.target.dataset.source;

    imageInstance = basicLightbox.create(`<img src="${originalImg}">`, {
        onShow: addEventKeyUp, 
        onClose: removeEventKeyUp
		});

    imageInstance.show();
}

function addEventKeyUp() {
    document.addEventListener('keyup', closeModal);
}

function removeEventKeyUp() {
    document.removeEventListener('keyup', closeModal);
}

function closeModal({code}) {
    if (code !== 'Escape') {
        return;
    }

    imageInstance.close();
}

// console.log(galleryItems);
