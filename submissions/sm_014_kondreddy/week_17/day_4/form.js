var btn = document.querySelector("#butun")
btn.addEventListener("click", data)
var details

function data() {
    var emp_name = document.getElementById("empname").value
    var cmp_name = document.getElementById("cmpname").value
    var  salary = document.getElementById("sal").value
    var designation = document.getElementById("desg").value
    var logourl = document.getElementById("url").value
}
var bodydiv = document.getElementById('body')

      var cardDeck = document.createElement('div')
      cardDeck.setAttribute('class', 'card-deck')
      container.appendChild(cardDeck)
      for (var i = 0; i <  ; i++) {
        
        var card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.setAttribute('class', 'text-center')
        card.style.backgroundColor ="orange"
        cardDeck.appendChild(card)

        var cardHeader = document.createElement('h4')
        cardHeader.setAttribute('class', 'card-header')
        cardHeader.setAttribute('id', 'cardHead')
        cardHeader.innerHTML = logourl
        cardHeader.style.color = "navyblue"
        card.appendChild(cardHeader)

        var cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')
        card.appendChild(cardBody)

        var image = document.createElement("img");
        image.setAttribute("src",)
        image.setAttribute("width", "100");
        image.setAttribute("height", "100");
        cardBody.appendChild(image)

        var empname = document.createElement("h4")
        empname.innerHTML = emp_name;
        cardBody.appendChild(empname)
        
        var cmpname = document.createElement("h4")
        cmpname.innerHTML = cmp_name;
        cardBody.appendChild(cmpname)

        var sal = document.createElement("h4")
        sal.innerHTML = emp_name;
        cardBody.appendChild(sal)

        var desg = document.createElement("h4")
        empname.innerHTML = emp_name;
        cardBody.appendChild(desg)


        var button = document.createElement("button")
        button.innerHTML = "Delete"
        button.setAttribute("class", "btn-lg bg-danger text-light");
        card.appendChild(button)
        button.addEventListener('click', deletedetails)
      }
    