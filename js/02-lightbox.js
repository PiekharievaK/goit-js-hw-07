import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector(`.gallery`);

const photoGalleryMarkup = CreateGalleryElements(galleryItems);


function CreateGalleryElements (gallery) {
    return gallery.map((item) => {
        return `<li><a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview }" alt="${item.description}" />
        </a></li>`           
    }).join(``)
    
}

galleryBox.insertAdjacentHTML(`beforeend`, photoGalleryMarkup);

const lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
});

