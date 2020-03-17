var url = document.getElementById('url').value;

// var name = document.getElementById("prodName").value

var details = document.getElementById('prodSpecs').value;

var cost = document.getElementById('cost').value;

function add() {


	var name = document.getElementById('prodName').value;
	var url = document.getElementById('url');
	url.value = 'https://via.placeholder.com/150/000000/FFFFFF';
	var details = document.getElementById('prodSpecs').value;
    var cost = document.getElementById('cost').value;
    




    console.log('adding card..');
    



	var show = document.querySelector('#dynamic');
	var card = document.createElement('div');
	card.setAttribute('class', 'card');
	show.appendChild(card);

	var prodCard = document.createElement('div');
	prodCard.setAttribute('class', 'prodCard');
    card.appendChild(prodCard);
    
    var img = document.createElement('img');
	img.setAttribute('type', 'img');
	prodCard.appendChild(img);

	var cardTitle = document.createElement('div');
	cardTitle.setAttribute('class', 'cardTitle');
	cardTitle.textContent = name;
	console.log(name);
	prodCard.appendChild(cardTitle);

	var cardBody = document.createElement('div');
	cardBody.setAttribute('class', 'cardBody');
    cardBody.textContent = details;
    console.log(details)
    prodCard.appendChild(cardBody);

    // cost.setAttribute("class","cardBody")
    var costs = document.createElement("p")
    costs.textContent=cost
    costs.setAttribute("class","cardBody")

    prodCard.appendChild(costs)
    

    var btn = document.createElement("button")
    btn.innerText="Delete"
    btn.setAttribute("onclick","del()")
    prodCard.appendChild(btn)

}

function del(){

    console.log("Trying to delete..")

    var show = document.querySelector('#dynamic');
    show.innerHTML=""
}
