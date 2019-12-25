$("#search").click(() => {
  var user = $("#input").val();
  var base = "https://api.github.com/search/users?q=";
  fetch(base + user)
    .then(res => res.json())
    .then(data => printData(data.items));
});

function printData(data) {
  localStorage.setItem("repos", JSON.stringify(data));
  data.forEach(ele => {
    $("#repo").append(createDiv(ele.avatar_url, ele.id, ele.login, ele.score));
  });
}
function createDiv(avatar, id, name, score) {
  var card = "";
  card = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${avatar}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${id},score:${score}</p>
        <button class="btn btn-outline-info" onclick="changePage()">Check Repo</button>
        </div>
        </div>`;
  return card;
}

function changePage() {
  window.location.href = "/userRepo.html";
}
