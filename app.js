let images = document.querySelector(".images");
let foodBtn = document.querySelector(".foodBtn");
let animalBtn = document.querySelector(".animalBtn");
let flowerBtn = document.querySelector(".flowerBtn");
let placeBtn = document.querySelector(".placeBtn");
let carBtn = document.querySelector(".carBtn");
let allBtn = document.querySelector(".allBtn");

let originalGallery = images.innerHTML;

allBtn.addEventListener("click", () => {
  location.reload();
});

const showImages = (title, firstImg, imgClass, imagesArray) => {
  images.innerHTML = `
    <div class="box">
      <h2 class="imgHeading">${title}</h2>

      <div class="items">
        <button class="cancelBtn">X</button>

        <img class="${imgClass}" src="${firstImg}" alt="${title}">

        <p class="counter">1/${imagesArray.length}</p>

        <div class="nav-buttons">
          <button class="prevBtn">←</button>
          <button class="nextBtn">→</button>
        </div>
      </div>
    </div>
  `;
  let img = document.querySelector(`.${imgClass}`);
  let nextBtn = document.querySelector(".nextBtn");
  let prevBtn = document.querySelector(".prevBtn");
  let cancelBtn = document.querySelector(".cancelBtn");
  let counter = document.querySelector(".counter");

  let index = 0;

  const updateUi = () => {
    img.src = imagesArray[index];
    counter.innerText = `${index + 1}/${imagesArray.length}`;
  };
  // Next Btn
  nextBtn.addEventListener("click", () => {
    index++;
    if (index >= `${imagesArray.length}`) {
      index = 0;
    }
    updateUi();
  });
  // Previous Btn
  prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) {
      index = imagesArray.length - 1;
    }
    updateUi();
  });
  // Cancel Btn
  cancelBtn.addEventListener("click", () => {
    images.innerHTML = originalGallery;
  });
};

foodBtn.addEventListener("click", () => {
  showImages("Food Images", "./images/food/food.jpg", "foods", [
    "./images/food/food.jpg",
    "./images/food/biryani.jpg",
    "./images/food/burger.jpg",
    "./images/food/dessert.jpg",
    "./images/food/chicken.webp",
  ]);
});

animalBtn.addEventListener("click", () => {
  showImages("Animal Images", "./images/animals/animal.jpg", "animals", [
    "./images/animals/animal.jpg",
    "./images/animals/deer.jpg",
    "./images/animals/zebra.jpg",
    "./images/animals/panda.webp",
    "./images/animals/elephant.webp",
  ]);
});

flowerBtn.addEventListener("click", () => {
  showImages("Flower Images", "./images/flowers/flower.jpg", "flowers", [
    "./images/flowers/flower.jpg",
    "./images/flowers/lily.jpg",
    "./images/flowers/purpleflower.jpg",
    "./images/flowers/redflower.jpg",
    "./images/flowers/yellowflower.webp",
  ]);
});

placeBtn.addEventListener("click", () => {
  showImages("Place Images", "./images/places/place.jpg", "places", [
    "./images/places/place.jpg",
    "./images/places/1.jpg",
    "./images/places/2.jpg",
    "./images/places/3.jpg",
    "./images/places/4.jpg",
  ]);
});

carBtn.addEventListener("click", () => {
  showImages("Car Images", "./images/cars/car.jpg", "cars", [
    "./images/cars/car.jpg",
    "./images/cars/blackcar.jpg",
    "./images/cars/whitecar.jpeg",
    "./images/cars/bluecar.jpg",
    "./images/cars/orangecar.jpg",
  ]);
});
