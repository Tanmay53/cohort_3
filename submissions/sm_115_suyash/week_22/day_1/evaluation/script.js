// HTML Variables
let img = document.getElementById("img");
let title = document.getElementById("title");
let body = document.getElementById("body");
let btn = document.getElementById("btn");
let footerCards = document.querySelector(".footer-cards");
let cards = document.getElementsByClassName("cards");

btn.addEventListener("click", makeCard);

for (let i = 0; i < 6; i++) {
  cards[i].addEventListener("click", deleteCard);
}

let cardArr = [];

function makeCard(e) {
  e.preventDefault();
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("cards");
  cardDiv.addEventListener("click", deleteCard);
  // create img div
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("img");
  // create img
  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://image.flaticon.com/icons/svg/2674/2674108.svg"
  );
  // img append on imgDiv
  imgDiv.appendChild(img);

  // create content div
  let content = document.createElement("div");
  content.classList.add("content");
  // create h3 for content div
  let h3 = document.createElement("h3");
  h3.innerHTML = title.value;
  // create p for content div
  let p = document.createElement("p");
  // create small for content of p tag
  let small = document.createElement("small");
  small.innerHTML = body.value;
  p.appendChild(small);
  content.appendChild(h3);
  content.appendChild(p);

  // Append imgDiv and content div to cardDiv
  cardDiv.appendChild(imgDiv);
  cardDiv.appendChild(content);

  // Appent cardDiv to Html page
  footerCards.appendChild(cardDiv);

  // Empty input boxes
  title.value = "";
  body.value = "";
  alert("Card create successfully...");
}

function deleteCard(e) {
  alert("delete");
  if (e.target.className == "cards") {
    e.target.remove();
  } else {
    if (e.target.localName == "div") {
      e.target.parentElement.remove();
    } else if (e.target.localName == "h3" || e.target.localName == "p") {
      e.target.parentElement.parentElement.remove();
    } else if (e.target.localName == "small") {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  }
}
