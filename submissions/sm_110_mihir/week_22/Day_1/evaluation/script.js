$("form").hide();
function deleteItem() {
  //   console.log("delete clicked", event.target.parentElement);
  event.target.parentElement.parentElement.removeChild(
    event.target.parentElement
  );
}

function add() {
  $(".grid").hide();
  $("form").show();
}

function append() {
  event.preventDefault();
  $(".grid").show();
  $("form").hide();
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  //   let button = document.createElement("button");
  //         button.innerHTML = "DELETE";
  //         button.addEventListener("click", deleteItem);
  let box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = `
    <img src="https://via.placeholder.com/300" alt="" />
    <hr />
    <div class="flex">
      <p class="text-md">Raised : $1000</p>
      <p class="text-md">Goal : $10000</p>
    </div>
    <hr />
    <h3>${title}</h3>
    <p>
      ${content}
    </p>
    <button onclick="deleteItem()">Delete</button>
    `;
  $(".grid").append(box);
}
