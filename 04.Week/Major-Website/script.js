let index = 0;
const sliderImages = document.querySelectorAll('.slider img');

function changeImage() {
    sliderImages[index].classList.remove('active');
    sliderImages[index].classList.add('inactive');
    index = (index + 1) % sliderImages.length;
    sliderImages[index].classList.remove('inactive');
    sliderImages[index].classList.add('active');
}

setInterval(changeImage, 3000);


var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");

function showSlide(n) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

function nextSlide() {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

showSlide(slideIndex);

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        slideIndex = this.getAttribute("data-slideIndex");
        showSlide(slideIndex);
    });
}