

// dissable buttons

var websiteTitle = document.querySelector('.website-input');
var websiteUrl = document.querySelector('.url-input');
var enterButton = document.querySelector('.input-button');
var readButton = document.querySelector('.read');
var cardTitle = document.querySelector('.card-one-title');
var cardUrl = document.querySelector('.url-output')
// var titleInput = document.querySelector('.website-input');

  enterButton.addEventListener('click', storeInput);


function storeInput() {
  var titleInput = document.querySelector('.website-input');
  var websiteInput = document.querySelector('.url-input');
  cardTitle.innerText = titleInput.value;
  cardUrl.innerText = websiteInput.value;
  
}


function addNewCard() {
  var card = document.createElement('.cards');
  document.body.appendChild(cards);
}