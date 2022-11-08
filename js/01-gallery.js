import { galleryItems } from "./gallery-items.js";
// Change code below this line

const instance = basicLightbox.create("");

const refs = {
  galleryList: document.querySelector(".gallery"),
  modal: instance.element(),
};

const makeGalleryMarkup = () => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
    })
    .join("");
};

const render = () => {
  refs.galleryList.innerHTML = makeGalleryMarkup();
};

const onEscmodalClose = (e) => {
  if (e.keyCode === 27) {
    instance.close();
  }
};

const handleClick = (e) => {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }

  refs.modal.innerHTML = `<img
        src="${e.target.dataset.source}"
        alt="${e.target.alt}"/>`;

  instance.show();
};

render();

refs.galleryList.addEventListener("click", handleClick);
refs.galleryList.addEventListener("keydown", onEscmodalClose);
