function remove1(){
    const card1 = document.getElementById("card1")

    card1.remove();
    
}
function remove2(){
    const card2 = document.getElementById("card2")
    card2.remove();
}
function remove3(){
    const card3 = document.getElementById("card3")
    card3.remove();
}
// new card
function remove4(){
    const card4 = document.getElementById("card4")
    card4.remove();
}

function add() {
    var newData = document.getElementById("newCards")
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let newCards = `
    <div id="card4">
          <img src="${title}" alt=" image">
          <p id="muted">january 30, 2020 admin</p>
          <p class="cardsText">${content}</p>
          <button class="cardButton" onclick="remove4()">Remove</button>
      </div>`
      newData.innerHTML = newCards
    event.preventDefault();
    alert("added")
      newData.append()
  
  }
