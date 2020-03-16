document.getElementById("addBtn").addEventListener("click", () => {
  addCard();
});

let cardArr = [];
const addCard = () => {
  event.preventDefault();
  let cardHeading = document.getElementById("heading").value;
  let cardText = document.getElementById("text").value;
  let data = {
    heading: cardHeading,
    content: cardText
  };
  cardArr.push(data);

  console.log(cardArr);
  addCardToBody(cardArr);
};

const addCardToBody = cardArr => {
  let body = document.getElementById("newCard");
  body.innerHTML = "";
  let card = "";
  cardArr.forEach((item, index) => {
    card += `<div class="card">
              <div class="ico"><i class="fa fa-flag fa-2x"></i></div>
              <h3>${item.heading}</h3>
              <p>${item.content}</p>
              <button class="btn" onclick="removeItem()" value="${index}">Delete</button>
            </div>`;
  });
  body.innerHTML = card;
};

const removeItem = () => {
  event.preventDefault();
  var id = event.target.value;
  cardArr = cardArr.filter((_, index) => index != id);
  addCardToBody(cardArr);
};
