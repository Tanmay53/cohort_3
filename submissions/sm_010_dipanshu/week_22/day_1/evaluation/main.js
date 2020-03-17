let cards = document.querySelectorAll(".services-card");
cards[0].addEventListener("click", function() {
  this.remove();
});
cards[1].addEventListener("click", function() {
  this.remove();
});
cards[2].addEventListener("click", function() {
  var ele = this.remove();
});
cards[3].addEventListener("click", function() {
  this.remove();
});

function addDiv(event) {
  event.preventDefault();
  let a = document.getElementById("title");
  let title = a.value;
  var b = document.getElementById("content");
  let content = b.value;

  if (title !== "" && content !== "") {
    console.log(title, content);

    let parentDiv = document.createElement("div");
    parentDiv.className = "services-card";

    let childDiv1 = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", "https://picsum.photos/50");

    childDiv1.appendChild(img);

    let childDiv2 = document.createElement("div");

    let header = document.createElement("h2");
    header.innerHTML = title;
    let contentPara = document.createElement("p");
    contentPara.innerHTML = content;

    childDiv2.appendChild(header);
    childDiv2.appendChild(contentPara);

    parentDiv.appendChild(childDiv1);
    parentDiv.appendChild(childDiv2);

    let cardDiv = document.getElementById("serviceCards");
    cardDiv.append(parentDiv);

    a.value = "";
    b.value = "";
  }
}
