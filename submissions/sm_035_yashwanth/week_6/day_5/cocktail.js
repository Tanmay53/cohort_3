function sub() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log(xhr.response)
            drinks = JSON.parse(xhr.response)
            console.log(drinks)
            // console.log(drinks.drinks[0].strDrinkThumb) 
            var body = document.querySelector('body')

            var container = document.createElement('div')
            container.setAttribute('class', 'container-fluid')
            container.style.backgroundImage = "url('data:image/jpeg;base64,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')";
            body.appendChild(container)

            var cardDeck = document.createElement('div')
            cardDeck.setAttribute('class', 'card-deck')
            container.appendChild(cardDeck)


            for (var i = 0; i < 100; i++) {
                // console.log(drinks.drinks[i].strDrink)
                var card = document.createElement('div')
                card.setAttribute('class', 'card')
                card.setAttribute('class', 'text-center')
                cardDeck.appendChild(card)

                var cardHeader = document.createElement('h4')
                cardHeader.setAttribute('class', 'card-header')
                cardHeader.setAttribute('id', 'cardHead')
                cardHeader.innerHTML = drinks.drinks[i].strDrink
                cardHeader.style = "1px solid black"
                card.appendChild(cardHeader)

                // var hr =  document.createElement('hr')
                // hr.appendChild(cardHeader)

                var cardBody = document.createElement('div')
                cardBody.setAttribute('class', 'card-body')
                card.appendChild(cardBody)
                // hr.appendChild(cardBody)

                // cardBody.innerHTML = drinks.drinks[i].strDrinkThumb
                var image = document.createElement("img");
                image.setAttribute("src", drinks.drinks[i].strDrinkThumb);
                image.setAttribute("width", "410");
                image.setAttribute("height", "350");
                cardBody.appendChild(image)

            }
        }
        else {
            console.log("error code is :" + xhr.status)
        }
    }
}

function submit() {
    var name = document.getElementById("sub").value
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + name);
    xhr.send();
    var drinks = null;
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log(xhr.response)
            drinks = JSON.parse(xhr.response)
            // console.log(drinks)

            var body = document.querySelector('body')

            var container = document.createElement('div')
            container.setAttribute('class', 'container-fluid')
            body.appendChild(container)

            var cardDeck = document.createElement('div')
            cardDeck.setAttribute('class', 'card-deck')
            container.appendChild(cardDeck)


            for (var i = 0; i < 100; i++) {
                // console.log(drinks.drinks[i].strDrink)
                var card = document.createElement('div')
                card.setAttribute('class', 'card')
                card.setAttribute('class', 'text-center')
                cardDeck.appendChild(card)

                var cardHeader = document.createElement('h4')
                cardHeader.setAttribute('class', 'card-header')
                cardHeader.setAttribute('id', 'cardHead')
                cardHeader.innerHTML = drinks.drinks[i].strDrink
                cardHeader.style = "1px solid black"
                card.appendChild(cardHeader)

                // var hr =  document.createElement('hr')
                // hr.appendChild(cardHeader)

                var cardBody = document.createElement('div')
                cardBody.setAttribute('class', 'card-body')
                card.appendChild(cardBody)
                // hr.appendChild(cardBody)

                // cardBody.innerHTML = drinks.drinks[i].strDrinkThumb
                var image = document.createElement("img");
                image.setAttribute("src", drinks.drinks[i].strDrinkThumb);
                image.setAttribute("width", "410");
                image.setAttribute("height", "350");
                cardBody.appendChild(image)

            }
        }
        else {
            console.log("error code is :" + xhr.status)
        }
    }
}


 
