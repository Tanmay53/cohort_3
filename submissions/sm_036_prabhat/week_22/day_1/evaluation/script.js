var grid = document.querySelectorAll(".grid")

grid[1].addEventListener('click', function () {
    var ele = this.remove()
})

grid[2].addEventListener('click', function () {
    var ele = this.remove()
})

grid[3].addEventListener('click', function () {
    var ele = this.remove()
})


function submitData() {
    // e.preventDefault()
    var name = document.getElementById("name").value
    var number = document.getElementById("number").value
    var selectItem = document.getElementById("selectItem").value;
    card(name,number,selectItem)
    console.log(name,number,selectItem)
}

var cnt = 0;

function card (name,number,selectItem) {
    var cards = document.getElementById("cards");

    var card = document.createElement("div");
    var div = document.createElement("div");
    var divForImage = document.createElement("div");
    var img = document.createElement("img");
    var small = document.createElement("small");
    var h3 = document.createElement("h3");
    var para = document.createElement('p');

    card.addEventListener("click",function(){
       this.remove();
    })

    card.setAttribute("class", "grid");
    img.setAttribute("src","http://placehold.jp/380x250.png");
    small.innerHTML = name;
    small.setAttribute("class", "colorRed");
    h3.innerHTML = "Amazing Places To Visit In Summer";
    para.innerHTML = "Nov 30, 2020";
    para.setAttribute("class", "colorGray");

    cards.appendChild(card);
    card.appendChild(div);
    div.appendChild(divForImage)
    divForImage.appendChild(img);
    div.appendChild(small);
    div.appendChild(h3);
    div.appendChild(para);
}