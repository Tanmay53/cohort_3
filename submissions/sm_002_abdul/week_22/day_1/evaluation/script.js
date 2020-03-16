
function addArticle(){
  event.preventDefault()
  var heading = document.querySelector('#heading').value
  var description = document.querySelector('#description').value
  
  var articleContainer = document.getElementById('article-container')

  articleContainer.setAttribute('class','row')

  var responsiveBox = document.createElement("div")
  responsiveBox.setAttribute('class',"col-4 col-s-6 col- box")
  responsiveBox.setAttribute('id',heading)
  articleContainer.appendChild(responsiveBox)

  var card = document.createElement('div')
  card.setAttribute('class','card')
  responsiveBox.appendChild(card)

  var cardImage = document.createElement('div')
  cardImage.setAttribute('class','card-img')
  card.appendChild(cardImage)

  var cardBody= document.createElement('div')
  cardBody.setAttribute('class','card-body')
  card.appendChild(cardBody)

  var image = document.createElement('img')
  image.setAttribute('src',`https://via.placeholder.com/420x180?text=Visit+Blogging.com+Now
  
  C/O https://placeholder.com/#How_To_Use_Our_Placeholders`)
  cardImage.appendChild(image)

  var cardTitle = document.createElement('h5')
  cardTitle.innerText=heading
  cardBody.appendChild(cardTitle)

  var cardDescription = document.createElement('p')
  cardDescription.innerText = description
  cardBody.appendChild(cardDescription)

  var cardButton = document.createElement('button')
  cardButton.innerHTML = "Delete This Card"
  cardButton.setAttribute('class','card-button')
  cardBody.appendChild(cardButton)
  cardButton.setAttribute("name",heading)

  cardButton.addEventListener('click',function(event){
    var btnName = event.target.name
    var currentCard = document.getElementById(btnName)
    currentCard.innerHTML=""
  })

}