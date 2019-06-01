//Auto slideshow for gallery
var imageIndex = 0;
var mainTimer;

gallerySlideShow();

function gallerySlideShow() {
    var galleryImages = document.querySelectorAll(".main-photo");
    var imageSliderDots = document.querySelectorAll(".fa-circle");
    var coverPageDescription = document.querySelector(".current-image-title");
    var descriptions  = ["Thailand beaches add some of these tropical beauties to your travel wish list" , "A walk around Paris will provide lessons in history, beauty, and in the point of life" , "No matter what your interests, when you travel to Dubai, you'll find something to thrill you!", "It’s Niagara Falls. It’s one of the most beautiful natural wonders in the world. Who wouldn’t want to walk across it?", "Venice is the city of mirrors, the city of mirages, at once solid and liquid, at once air and stone"];
        
    galleryImages[imageIndex].classList.add("hidden");
    imageSliderDots[imageIndex].classList.add("far");
    imageSliderDots[imageIndex].classList.remove("fas");

    if(imageIndex < 4) { imageIndex++; }

    else { imageIndex = 0; }

    galleryImages[imageIndex].classList.remove("hidden");
    imageSliderDots[imageIndex].classList.add("fas");
    imageSliderDots[imageIndex].classList.remove("far");
    coverPageDescription.innerHTML = descriptions[imageIndex];
    mainTimer = setTimeout(gallerySlideShow, 4000);
}

//Manual slideshow for gallery
var circleSliders = document.querySelectorAll(".fa-circle");

for(var i = 0; i < circleSliders.length; i++) {
    circleSliders[i].addEventListener("click", handleSliderClick);
}

function handleSliderClick(e) {
    var coverPageDescription = document.querySelector(".current-image-title");
    var descriptions  = ["Thailand beaches add some of these tropical beauties to your travel wish list" , "A walk around Paris will provide lessons in history, beauty, and in the point of life" , "No matter what your interests, when you travel to Dubai, you'll find something to thrill you!", "It’s Niagara Falls. It’s one of the most beautiful natural wonders in the world. Who wouldn’t want to walk across it?", "Venice is the city of mirrors, the city of mirages, at once solid and liquid, at once air and stone"];
     
    clearTimeout(mainTimer);
    imageIndex = Array.prototype.indexOf.call(circleSliders, e.currentTarget);
    var mainPhotos = document.querySelectorAll(".main-photo");

    for(var i = 0; i < mainPhotos.length; i++) {
        if(!mainPhotos[i].classList.contains("hidden")) {
            mainPhotos[i].classList.add("hidden");
            circleSliders[i].classList.add("far");
            circleSliders[i].classList.remove("fas");
            break;
        }
    }

    circleSliders[imageIndex].classList.remove("far");
    circleSliders[imageIndex].classList.add("fas");
    mainPhotos[imageIndex].classList.remove("hidden");
    coverPageDescription.innerHTML = descriptions[imageIndex];
    //setTimeout(gallerySlideShow, 4000);
}