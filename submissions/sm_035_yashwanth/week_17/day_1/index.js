var data
$("#btnSearch").click(function () {
  var movieTitle = $('#movieTitle').val()
  // console.log(movieTitle)
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://www.omdbapi.com/?s=' + movieTitle + '&apikey=ad200e56')
  xhr.send()
  xhr.onload = function () {
    if (xhr.status == 200) {
      data = JSON.parse(xhr.response)
      console.log(data)
      // console.log(data["Search"][0]["Title"])
      console.log(data["Search"]["length"])
      var bodydiv = document.getElementById('body')

      var container = document.createElement('div')
      container.setAttribute('class', 'container-fluid')
      bodydiv.appendChild(container)

      var cardDeck = document.createElement('div')
      cardDeck.setAttribute('class', 'card-deck')
      container.appendChild(cardDeck)
      for (var i = 0; i < data["Search"]["length"]; i++) {
        var card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.setAttribute('class', 'text-center')
        cardDeck.appendChild(card)

        var cardHeader = document.createElement('h4')
        cardHeader.setAttribute('class', 'card-header')
        cardHeader.setAttribute('id', 'cardHead')
        cardHeader.innerHTML = data["Search"][i]["Title"]
        cardHeader.style = "1px solid black"
        card.appendChild(cardHeader)

        var cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')
        card.appendChild(cardBody)

        var image = document.createElement("img");
        image.setAttribute("src", data["Search"][i]["Poster"]);
        image.setAttribute("width", "500");
        image.setAttribute("height", "500");
        cardBody.appendChild(image)

        var button = document.createElement("button")
        button.innerHTML = "more details"
        button.setAttribute("class", "btn-lg bg-danger text-light");
        card.appendChild(button)
        button.setAttribute("value", i)
        button.addEventListener('click', displaydetails)
      }
    }
    else {
      console.log(xhr.response)
    }
  }

})


function displaydetails(e) {
  //  console.log("details")
  var x = e.target.value
  alert("Movie Details:-  " +
    "Movie Title: " + data["Search"][x]["Title"] + " , " +
    "Year: " + data["Search"][x]["Year"] + " ,  " +
    "imdbID: " + data["Search"][x]["imdbID"] + " , " +
    "Type: " + data["Search"][x]["Type"]
  )

}
