let images = document.querySelectorAll("img");
let lightBox = document.querySelector(".light-box");
let lightBoxImg = document.querySelector("#light-box-img");
let closeBtn = document.querySelector(".close");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let foodBtn = document.querySelector("#foodBtn");

images.forEach((image) => {
  image.addEventListener("click", () => {
    lightBox.classList.add("active");
    lightBoxImg.src = image.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightBox.classList.remove("active");
});

let imageArr = [
  "./images/biryani.jpg",
  "images/burger.jpg",
  "images/waffle.jpg",
  "images/blue car.jpg",
  "images/white car.jpeg",
  "images/orange car.webp",
  "images/lion.jpg",
  "images/zebra.jpg",
  "images/peacock.jpg",
  "images/place.jpg",
  "images/sea.jpg",
  "images/water fall.jpg",
];
let index = 0;
next.addEventListener("click", () => {
  index++;
  if (index >= imageArr.length) {
    index = 0;
  }
  lightBoxImg.src = imageArr[index];
});
prev.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = imageArr.length - 1;
  }
  lightBoxImg.src = imageArr[index];
});

foodBtn.addEventListener("click", () => {
  console.log("hey");
});
