import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryBox = document.querySelector(`.gallery`);

const photoGalleryMarkup = CreateGalleryElements(galleryItems);

function CreateGalleryElements (gallery) {
    return gallery.map((item) => {
        return ` <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src= "${item.preview }""
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
        </div>`
    }).join(``)
}
galleryBox.insertAdjacentHTML(`beforeend`, photoGalleryMarkup);

galleryBox.addEventListener(`click`, onPictureClick);

function onPictureClick(evt) {
    evt.preventDefault()

    if (!evt.target.classList.contains(`gallery__image`)) {
        return
    }

    const openImage = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" >
    `)
    
    openImage.show()
     
    window.addEventListener(`keydown`, modalClose);
   
    function modalClose(evt) {
        if (evt.code === 'Escape') {
                  openImage.close()
                  window.removeEventListener("keydown", modalClose);
    }
   };
}








