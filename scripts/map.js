var cityName = document.querySelectorAll(".city-name");

for(var i = 0; i < cityName.length; i++) {
    cityName[i].addEventListener("click", handleCityNameSelection);
}

function handleCityNameSelection(e) {
    var name = e.currentTarget.innerHTML;
    var mapImage = document.querySelector(".map-view");
    var imageSrc = "images/" + name + "_map.png";

    mapImage.src = imageSrc;
}

var countryName = document.querySelectorAll(".country-name");

for(var i = 0; i < countryName.length; i++) {
    countryName[i].addEventListener("mouseover", handleMouseOverMenuAction);
}

function handleMouseOverMenuAction(e) {
    var mapImage = document.querySelector(".map-view");
    var name = e.currentTarget.innerHTML;
    var imageSrc = "images/" + name + "_map.png";
    mapImage.src = imageSrc;
}