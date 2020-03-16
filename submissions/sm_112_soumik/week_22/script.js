var parent = document.getElementById("card_");
const addCard = () => {
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  let new_card = document.createElement("div");
  new_card.className = "card";
  let card = `
  <div>
    <i class="far fa-address-card fa-3x"></i>
  </div>
  <div>
    <h5>${title}</h5>
    <p>
      ${body}
    </p>
    <button onclick="deleted()">delete</button>
</div>`;
  new_card.innerHTML = card;
  parent.append(new_card);
};
const deleted = () => {
  event.target.parentElement.parentElement.parentElement.removeChild(
    event.target.parentElement.parentElement
  );
};
