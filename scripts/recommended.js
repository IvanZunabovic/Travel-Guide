//Selecting recommended card
var recommendedCards = document.querySelectorAll(".suggested-spot-photo");

for(var i = 0; i < recommendedCards.length; i++) {
    recommendedCards[i].addEventListener("click", handleCardSelection);
}

function handleCardSelection(e) {
    var currentCardPhoto = e.currentTarget;
    var currentCard = currentCardPhoto.parentElement;
    var cardReview = currentCard.querySelector(".recommended-card-review");
    var currentCardExitButton = currentCard.querySelector(".exit-button");
    var backgroundCover = document.querySelector(".background-cover");

    for(var i = 0; i < recommendedCards.length; i++) {
        if(recommendedCards[i].parentElement.classList.contains("selected-card")) {
            var card = recommendedCards[i].parentElement
            card.classList.remove("selected-card");
            card.classList.add("hover-state");
            card.querySelector(".exit-button").classList.add("hidden");
            card.querySelector(".recommended-card-review").classList.add("hidden");
        }
    }

    backgroundCover.classList.remove("hidden");
    currentCardExitButton.classList.remove("hidden");
    currentCard.classList.add("selected-card");
    currentCard.classList.remove("hover-state");
    cardReview.classList.remove("hidden");
}

//Deselecting recommended card
var cardExitButtons = document.querySelectorAll(".exit-button");

for(var i = 0; i < cardExitButtons.length; i++) {
    cardExitButtons[i].addEventListener("click", handleCardDeselection);
}

function handleCardDeselection(e) {
    var currentCardExitButton = e.currentTarget;
    var currentCard =currentCardExitButton.parentElement;
    var cardReview = currentCard.querySelector(".recommended-card-review");
    var backgroundCover = document.querySelector(".background-cover");
    
    backgroundCover.classList.add("hidden");
    currentCardExitButton.classList.add("hidden");
    currentCard.classList.remove("selected-card");
    currentCard.classList.add("hover-state");
    cardReview.classList.add("hidden");
}