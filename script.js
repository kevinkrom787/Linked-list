// dissable buttons

var websiteTitle = document.querySelector('.website-input');
var websiteUrl = document.querySelector('.url-input');
var enterButton = document.querySelector('.input-button');
var readButton = document.querySelector('.read');
var cardTitle = document.querySelector('.card-one-title');
var cardUrl = document.querySelector('.url-output')
// var titleInput = document.querySelector('.website-input');


// enterButton.addEventListener('click', mySecondFunction);
// readButton.addEventListener('click', markRead);


function storeInput() {
  console.log("wattup")
 var titleInput = document.querySelector('.website-input');
 var websiteInput = document.querySelector('.url-input');

 var title = websiteTitle.value
 var url = websiteUrl.value
 
 var thingsToShow = document.querySelector('.container-right');
  var bookmark = document.createElement('div')
  bookmark.innerHTML = 
    `<article class="cards" id=${Date.now()}>
      <h2 class="card-one-title">${title}</h2>
        <hr>
      <div class="url-output"><a href="${url}" class="website-url">${url}</a></div>
        <hr>
        <span class="read-delete">
        <button class="read-delete">Read</button>
        <button class="read-delete">Delete</button>
      </span>
     </article>`;
     thingsToShow.prepend(bookmark)

websiteTitle.value = '';
 websiteUrl.value = '';
}

  enterButton.addEventListener('click', storeInput);