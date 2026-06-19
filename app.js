let gallery = document.querySelector("#gallery");
let overLay = document.querySelector(".galleryOverLay");
let imageBox = document.querySelector(".imageBox");
let imageBoxImg = document.querySelector(".imageBox img");
let close = {
  
}

gallery.addEventListener("click", (event) => {
  let currentPath = event.target.src;

  overLay.classList.add("galleryOverLayShow");
  imageBox.classList.add("imageBoxShow");
  imageBoxImg.src = currentPath;
});
