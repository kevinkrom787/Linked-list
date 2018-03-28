var websiteTitle = document.querySelector('.website-input');
var websiteUrl = document.querySelector('.url-input');
var enterButton = document.querySelector('.input-button');
var readButton = document.querySelector('.reading');
var cardTitle = document.querySelector('.card-one-title');
var cardUrl = document.querySelector('.url-output')
var thingsToShow = document.querySelector('.container-right');
var remove = document.querySelector('.read-delete');
// var titleInput = document.querySelector('.website-input');

// enterButton.addEventListener('click', mySecondFunction);
// readButton.addEventListener('click', markRead);


function storeInput() {
var title = document.querySelector('.website-input').value;
var url = document.querySelector('.url-input').value;
disableButton();
websiteTitle.value = '';
websiteUrl.value = '';
if (title === '' || url === '') {
 alert('Are you forgetting something?');
 return
}

var bookmark = document.createElement('div')
bookmark.innerHTML =
`<article class="cards" id=${Date.now()}>
  <h2 class="card-one-title">${title}</h2>
    <hr>
  <div class="url-output"><a href="${url}" class="website-url">${url}</a></div>
    <hr>
   <span class="read-delete">
    <button class="reading">Read</button>
    <button class="read-delete">Delete</button>
  </span>
 </article>`;
 thingsToShow.prepend(bookmark)

websiteTitle.value = '';
websiteUrl.value = '';
}


$('.container-right').on('click', 'article .reading', function() {
$(this).toggleClass('read');
$(this).closest('article').toggleClass('background-toggle');
});


function deleteCard() {
 var deleteButton = event.target;
 if (event.target.matches(".read-delete")) {
   deleteButton.closest(".cards").remove()
 }
 }

enterButton.addEventListener('click', storeInput);
websiteTitle.addEventListener('keyup', disableButton);
websiteUrl.addEventListener('keyup', disableButton);
// enterButton.addEventListener('click', completeInput);
// remove.addEventListener('click', deleteCard);

thingsToShow.addEventListener("click", deleteCard);


function disableButton() {
enterButton.removeAttribute('disabled');
if (websiteTitle.value > 0 && websiteUrl.value > 0) {
}
}

// create completeCard function

// function completeInput() {
//  var bookmark = document.createElement('div')
//  var title = websiteTitle.value
//  var url = websiteUrl.value
//  if (websiteTitle.value === '' || websiteUrl.value === '') {
//    alert('Are you forgetting something?');
//    // return true;
//  } else {

//  }
// }
