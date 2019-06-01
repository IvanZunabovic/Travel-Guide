//Auto-scrolling to specific part of page
var headerButtons = document.querySelectorAll(".header-button");

for(var i = 0; i < headerButtons.length; i++) {
    headerButtons[i].addEventListener("click", handleHeaderButtonClick);
}

function handleHeaderButtonClick(e) {
    var currentButton = e.currentTarget;
    var viewId = "#" + currentButton.innerHTML;

    document.querySelector(viewId.toLowerCase()).scrollIntoView();
}

//Remove header when scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header-container").classList.remove("nav-up");
  } 
  
  else {
    document.querySelector(".header-container").classList.add("nav-up");
  }
  prevScrollpos = currentScrollPos;
}