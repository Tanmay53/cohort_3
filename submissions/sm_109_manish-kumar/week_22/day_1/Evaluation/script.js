var del = document.getElementById('card-holder');
del.addEventListener("click", removeItem);

function removeItem(e){
  if(e.target.classList.contains("btn")){
    if(confirm("Are you Sure?")){
      var card = e.target.parentElement;
      del.removeChild(card);
    }
  }
}

var add = document.getElementById('submit');
add.addEventListener("click", addItem);

function addItem(e){
  e.preventDefault();
  var title = document.getElementById('title').value;
  var ce = document.createElement("center");
  ce.appendChild(document.createTextNode(title))
  var h = document.createElement("h2")
  h.appendChild(ce)
  var content = document.getElementById('content').value;
  var con = document.createElement("center");
  con.appendChild(document.createTextNode(content))
  var p = document.createElement("p")
  p.appendChild(con)
  var bt = document.createElement("button")
  bt.className = "btn";
  bt.type = "button";
  bt.appendChild(document.createTextNode("DEL CARD  "))
  var div = document.createElement("div");
  div.className = "card";
  div.appendChild(h)
  div.appendChild(p)
  div.appendChild(bt)
  var card = document.getElementById("card-holder");
  card.appendChild(div)
}
