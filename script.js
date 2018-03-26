

// dissable buttons

var websiteTitle = document.querySelector('.website-input');
var websiteUrl = document.querySelector('.url-input');
var enterButton = document.querySelector('.input-button');
var readButton = document.querySelector('.read');
var cardTitle = document.querySelector('.card-one-title');
var cardUrl = document.querySelector('.url-output')
// var titleInput = document.querySelector('.website-input');

enterButton.addEventListener('click', storeInput);
enterButton.addEventListener('click', mySecondFunction);
readButton.addEventListener('click', markRead); 


function storeInput() {
  var titleInput = document.querySelector('.website-input');
  var websiteInput = document.querySelector('.url-input');
  cardTitle.innerText = titleInput.value;
  cardUrl.innerText = websiteInput.value;
  websiteTitle.value = '';
  websiteUrl.value = '';
}



function mySecondFunction() {
  var theParent = document.getElementById('one');
  theParent.insertAdjacentHTML('afterend', '<div class=cards></div>');
  }


//changing the read button to red when pressed + event listener
  function markRead() {
    var read = querySelectorAll('.read');

  }

  // delete function to remove cards. 

  // phase 2 - if 1 of the input fields is blank, display error