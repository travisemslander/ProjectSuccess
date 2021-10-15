// this sets up an event handler for when the website loads
window.onload = function () {
  var addCardAddButton = document.querySelector("#addCardAddButton");
  if (addCardAddButton) {
    addCardAddButton.onclick = addCard;
  }
}

function addCard()
{
  var name = document.querySelector('#addCardName').value;
  var animal = document.querySelector('#addCardAnimal').value;
  var about = document.querySelector('#addCardAbout').value;

  if (!name || !animal || !about) {
    alert ("Please fill out a ll fields.");
    return false;
  }

  var cardHodler = document.querySelector('#cardHolder');
  var newCard = generateCard(name, animal, about);
  cardHolder.appendChild(newCard);

  closeModal();
}

function generateCard(name, animal, about)
{
  var hiddenCard = document.querySelector('#hiddenCard');
  var newCard = hiddenCard.cloneNode(true);
  newCard.removeAttribute('id');

  var cardAnimalEl = newCard.querySelector('#card-animal');
  var cardNameEl = newCard.querySelector('#card-name');
  var cardAboutEl = newCard.querySelector('#card-about');
  var cardDateEl = newCard.querySelector('#card-date');

  // set image src to appropriate image location
  if (animal == "dragon") {
    cardAnimalEl.src = "/images/dragon.jpg";
  } else if (animal == "fox") {
    cardAnimalEl.src = "/images/fox.jpg";
  } else if (animal == "panda") {
    cardAnimalEl.src = "/images/panda.jpg";
  }

  // set name
  cardNameEl.innerText = name;
  
  // set about
  cardAboutEl.innerText = about;

  // set added date
  var options = { month: 'short', day: 'numeric', hour: 'numeric'};
  var now  = new Date();
  var nowStr = now.toLocaleDateString("en-US", options);
  cardDateEl.innerText = nowStr;

  return newCard;
}

function closeModal()
{
  document.querySelector('#addCardName').value = null;
  document.querySelector('#addCardAnimal').value = null;
  document.querySelector('#addCardAbout').value = null;

  // hide the modal
  var modalEl = document.getElementById('addCardModal');
  bootstrap.Modal.getOrCreateInstance(modalEl).hide();
}