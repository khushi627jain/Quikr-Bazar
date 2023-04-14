let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//for automatic slideshow
setInterval(function(){
  plusSlides(1)
},4000)


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides fade");
  let dots = document.getElementsByClassName("dot");
  //checking if any image index is out of bound or not that is less than 1 or greater then length
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
//   setting all the images to display none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //setting all dotes classname to unactive("")
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //setting the current slide display to block and dot classname to active
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// for stroller data
let strollerData = document.querySelectorAll("#strollers");
strollerData.forEach(stroller => {
  stroller.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("category", "strollers");
    window.location.href = "kidsProduct.html";
  });
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//for eduaction data
let education = document.querySelectorAll("#education");
education.forEach(ele => {
  ele.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("category", "Toys");
    window.location.href = "kidsProduct.html";
  });
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//for games amd puzzle data
let puzzle = document.querySelectorAll("#puzzle");
puzzle.forEach(ele => {
  ele.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("category", "Puzzle");
    window.location.href = "kidsProduct.html";
  });
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//for toys and vexhiles 
let vehicles = document.querySelectorAll("#vehicles");
vehicles.forEach(ele => {
  ele.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("category", "vehicles");
    window.location.href = "kidsProduct.html";
  });
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//for bicycle 
let Bicycle = document.querySelectorAll("#bicycleSell");
Bicycle.forEach(ele => {
  ele.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("category", "Bicycle");
    window.location.href = "kidsProduct.html";
  });
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!