const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".js-gallery");
let lightbox = document.querySelector(".js-lightbox");
let content = document.querySelector(".lightbox__content");
let button = document.querySelector("  .lightbox__button");
let fullsizeimg = document.querySelector(".lightbox__image");
let overlay = document.querySelector(".lightbox__overlay");

galleryItems.forEach(function (image) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  li.classList.add("gallery__item");
  let img = document.createElement("img");
  img.classList.add("gallery__image");
  a.classList.add("gallery__link");
  a.setAttribute("href", image.original);
  img.setAttribute("src", image.preview);
  img.setAttribute("alt", image.description);
  img.setAttribute("alt", image.description);
  li.append(a);
  a.append(img);
  gallery.append(li);
  li.addEventListener("click", function (event) {
    event.preventDefault();
    lightbox.classList.add("is-open");
    fullsizeimg.setAttribute("src", image.original);
    fullsizeimg.setAttribute("alt", image.description);
  });
  button.addEventListener("click", function () {
    lightbox.classList.remove("is-open");
  });
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay && event.target !== content) {
      lightbox.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
      lightbox.classList.remove("is-open");
    }
  });
});
