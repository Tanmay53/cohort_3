
    function submit() {
    var data = JSON.parse(localStorage.getItem("product"))
    console.log(data)


        var divbody = document.getElementById('#bottom')

        var container = document.createElement('div')
        container.setAttribute('class', 'container')
        body.appendChild(container)

        var cardDeck = document.createElement('div')
        cardDeck.setAttribute('class', 'card-deck')
        container.appendChild(cardDeck)

        var card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.setAttribute('class', 'text-center')
        card.setAttribute("width", "300")
        card.setAttribute("height", "300")
        cardDeck.appendChild(card)

        var cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')
        card.appendChild(cardBody)
        let arr = data.arr
        for (var i = 0; i < arr.length; i++) {
            var prdimage = document.createElement("img");
            prdimage.setAttribute("src", arr[i]["prdimage"])
            prdimage.setAttribute("width", "150");
            prdimage.setAttribute("height", "100");
            cardBody.appendChild(prdimage)

            var prdname = document.createElement("h4")
            prdname.innerHTML = arr[i]["prdname"];
            cardBody.appendChild(prdname)

            var category = document.createElement("h4")
            category.innerHTML = arr[i]["category"];
            cardBody.appendChild(category)

            var price = document.createElement("h4")
            price.innerHTML = arr[i]["price"];
            cardBody.appendChild(price)

            var desc = document.createElement("h4")
            desc.innerHTML = arr[i]["description"];
            cardBody.appendChild(desc)


            var button = document.createElement("button")
            button.innerHTML = "ADD TO CART"
            button.setAttribute("class", "btn-lg bg-danger text-light");
            card.appendChild(button)
            button.addEventListener('click', Cartdetails)
        }

        function Cartdetails() {

        }
    }
