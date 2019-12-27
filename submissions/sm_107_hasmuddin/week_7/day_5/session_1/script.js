function fetching() {
  var name = $("#name").val();
  fetch("https://api.github.com/search/users?q=" + name)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      callback(myJson);
      addList();
    });
}

function callback(respdata) {
  $("#table").empty();
  data = respdata.items[0];
  var tableData = document.getElementById("table");
  var gitData = document.createElement("div");
  console.log(data);
  gitData.innerHTML = `<div class="container row p-2">
     <div class="col-12 border bg-dark text-white">
       <h1 class="text-center">User Data</h1>
     </div>

     <div class="col-3 form-row">
       <img
         src = ${data.avatar_url}
         alt="avt"
         class="img-fluid border p-2 border border-dark"
       />
     </div>
     <!-- other info -->
     <div class="col-8 row p-3 mx-3">
       <h3 class="col-12">username : ${data.login}</h3>
       <h3 class="col-12">id : ${data.id}</h3>
       <h3 class="col-12">node_id : <span class="text-info">${data.node_id}<span/></h3>
       <h3 class="col-12"><a id="linked" href=${data.repos_url}>Repositories</a></h3>
     </div>
   </div>`;
  tableData.appendChild(gitData);
}

function addList() {
  let anchor = document.getElementById("linked");
  anchor.addEventListener("click", localStoreLink);
}
function localStoreLink(e) {
  e.preventDefault();
  var attr = e.target.getAttribute("href");
  attr.toString();
  localStorage.setItem("repolink", attr);
  location.href = "user_repo.html";
}

$("#submit").click(function() {
  fetching();
});
