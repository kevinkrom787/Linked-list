// dissable buttons

var websiteTitle = document.querySelector('.website-input');
var websiteUrl = document.querySelector('.url-input');
var enterButton = document.querySelector('.input-button');
var readButton = document.querySelector('.reading');
var cardTitle = document.querySelector('.card-one-title');
var cardUrl = document.querySelector('.url-output')
var thingsToShow = document.querySelector('.container-right');
// var titleInput = document.querySelector('.website-input');

// enterButton.addEventListener('click', mySecondFunction);
// readButton.addEventListener('click', markRead);


function storeInput() {
var titleInput = document.querySelector('.website-input');
var websiteInput = document.querySelector('.url-input');

var title = websiteTitle.value
var url = websiteUrl.value

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
var deleteButton = event.target
if (event.target.matches(".read-delete")) {
  deleteButton.closest(".cards").remove()
} 
}

enterButton.addEventListener('click', storeInput);

thingsToShow.addEventListener("click", deleteCard);




// create completeCard function
// if user input is '' || websiteUrl = ''
// provide alert and remove card

//make shit responsive in CSS.


// Button for creating links should be disabled if no contents in url fields

// application should be able to keep count of total number of links on page

//keep total count of read and unread links on page.