let btnMenu = document.getElementById("btnmenu");
let mobileMenu = document.getElementById("mobile-menu");
let btnUp = document.getElementById("up");
let btnDowen = document.getElementById("dowen");
let slide = Array.from(
  document.querySelectorAll(".carousel-slide .carousel-inner")
);
let buttonsWrapper = document.querySelector(".carousel-indicators");
let bgNavbar = document.getElementById("bg-nav");
let btnPlay = document.getElementById("play");
let videoPlay = document.getElementById("video-container");

// get num of slide
var countSlide = slide.length;
// set curent slide
var curentSlide = 1;

// Handel button up and dowen
btnUp.onclick = slideup;
btnDowen.onclick = slidedowen;

// Create the Ul Element
var bagenationElement = document.createElement("ul");
bagenationElement.setAttribute("id", "pagenation-ul");

// Create list item
for (let i = 1; i <= countSlide; i++) {
  var bagenationItem = document.createElement("li");
  bagenationItem.setAttribute("data-slide", i);
  bagenationElement.appendChild(bagenationItem);
}

// Add the Ul on page
document.getElementById("carousel-indicators").appendChild(bagenationElement);

// Get Ul
var pagenationCreateUl = document.getElementById("pagenation-ul");

// Array from Ul
var pagenationBullets = Array.from(
  document.querySelectorAll("#pagenation-ul li")
);

// loop bullets
for (var i = 0; i < pagenationBullets.length; i++) {
  pagenationBullets[i].onclick = function () {
    curentSlide = parseInt(this.getAttribute("data-slide"));
    theChecker();
  };
};

// Col function
theChecker();

// Next slide
function slideup() {
  if (btnUp.classList.contains("disabled")) {
    return false;
  } else {
    curentSlide++;
    theChecker();
  }
};
// Previos slide
function slidedowen() {
  if (btnDowen.classList.contains("disabled")) {
    return false;
  } else {
    curentSlide--;
    theChecker();
  }
}

// Create the checker
function theChecker() {
  removeAllActive();

  // Set active classes
  slide[curentSlide - 1].classList.add("active");
  pagenationCreateUl.children[curentSlide - 1].classList.add("active");

  // check if curent slide is first
  // from dowen button
  if (curentSlide == 1) {
    btnDowen.classList.add("disabled");
  } else {
    btnDowen.classList.remove("disabled");
  }
  // from up button
  if (curentSlide == countSlide) {
    btnUp.classList.add("disabled");
  } else {
    btnUp.classList.remove("disabled");
  }
}

// remove all active classes
function removeAllActive() {
  slide.forEach(function (inner) {
    inner.classList.remove("active");
  });
  pagenationBullets.forEach(function (Bullets) {
    Bullets.classList.remove("active");
  });
}

// navbar fixed
window.onscroll = function () {
  if (window.pageYOffset > 0) {
    bgNavbar.classList.add("active");
  } else {
    bgNavbar.classList.remove("active");
  }
};

// drop dowen mobile and tablet
btnMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// play demo video
btnPlay.addEventListener("click", () => {
  videoPlay.classList.remove("active");
});
let btnClose = document.getElementById("close");
btnClose.addEventListener("click", () => {
  videoPlay.classList.add("active");
});
// Going show
let btnGoing = document.getElementById("heart");
let showGoing = document.getElementById("ongoing");
let editSave = document.getElementById("edit");

btnGoing.onclick = () => {
  showGoing.classList.toggle("active");
  if (showGoing.classList.contains("active")) {
    editSave.src = "./assets/images/heart (1).png";
  } else {
    editSave.src = "./assets/images/heart.png";
  }
};

