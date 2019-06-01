var showMoreOffersButton = document.querySelector(".more-offers-button");
showMoreOffersButton.addEventListener("click", handleShowMoreOffers);


function handleShowMoreOffers(e) {
    var offersContainer = document.querySelector(".all-offers-container");
    var mapViewContainer = document.querySelector(".location-maps");

    if(offersContainer.style.display == "flex") {
        offersContainer.style.display = "none";
        mapViewContainer.style.marginTop = "20em";
        e.currentTarget.innerHTML = "Show popular offers";
    }

    else {
        offersContainer.style.display = "flex";
        mapViewContainer.style.marginTop = "3em";
        e.currentTarget.innerHTML = "Hide popular offers";
    }
}

//Adding offer to planer
var offerButtons = document.querySelectorAll(".add-offer-button");
var numbOfItems = 0;

for(var i = 0; i < offerButtons.length; i++) {
    offerButtons[i].addEventListener("click", handleAddingOfferToPlaner);
}

function handleAddingOfferToPlaner(e) {
    var planerLocationList = document.querySelector(".your-location-list");
    var itemNamesList = [];
    var listOfNameElements = planerLocationList.querySelectorAll(".location");
    var sendToMailButton = planerLocationList.querySelector(".planer-button");
    
    sendToMailButton.classList.remove("hidden");

    for(var i = 0; i < listOfNameElements.length; i++) {
        itemNamesList[i] = listOfNameElements[i].textContent;
    }

    var selectedOfferName = e.currentTarget.parentElement.querySelector(".offer-card-title").textContent;
    var emptyMessage = planerLocationList.querySelector(".empty-planer-message");

    if(itemNamesList == null || !(itemNamesList.indexOf(selectedOfferName) > -1))
    {
        var listItemTemplate = document.querySelector("#planer-item");
        var listItemElement = listItemTemplate.content.cloneNode(true);

        listItemElement.querySelector(".location").textContent = selectedOfferName;
        listItemElement.querySelector(".planer-delete-button").addEventListener("click", handleDeleteButtonClick);
        
        planerLocationList.insertBefore(listItemElement, sendToMailButton);
        numbOfItems++;
    }

    if(!emptyMessage.classList.contains("hidden")) {
        emptyMessage.classList.add("hidden");
    }

}

//Delete item from planer
function handleDeleteButtonClick(e) {
    var currentDeleteButton = e.currentTarget;
    var currentItem = currentDeleteButton.parentElement;

    currentItem.remove();
    numbOfItems--;

    if(numbOfItems == 0)
    {
        document.querySelector(".planer-button").classList.add("hidden");
        document.querySelector(".empty-planer-message").classList.remove("hidden");;
    }
}

//Send planer list to email
document.querySelector(".planer-button").addEventListener("click", e => {
    var emailAddress = prompt("Enter your e-mail address");
    validateEmail(emailAddress, "E-mail sent successfully");
});

//Subscribe to newsletter
document.querySelector(".submit-button").addEventListener("click", handleSubscription);
document.querySelector(".e-mail-input").addEventListener("keypress", handleEnterPressForSubscription);

function handleSubscription(e) {
    var emailAddress = document.querySelector(".e-mail-input").value;
    var isValid = validateEmail(emailAddress, "You are now subscribed!");

    if(isValid)
    {
        document.querySelector(".subscribed-label").classList.remove("hidden");
        document.querySelector(".sign-up-label").classList.add("hidden");
        e.currentTarget.classList.add("hidden");
        document.querySelector(".e-mail-input").classList.add("hidden");
    }

    else
    {
        document.querySelector(".e-mail-input").value = "";
    }
}

function handleEnterPressForSubscription(e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
        handleSubscription(e);
    }
}

function validateEmail(email, successMessage) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValid = re.test(String(email).toLowerCase());

    if(isValid) {
        alert(successMessage);
    }

    else {
        alert("Invalid E-mail address");
    }

    return isValid;
}