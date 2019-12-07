function userUI(userData) {
  $("#username").text(userData[0].owner.login);
  for (var i = 0; i < userData.length; i++) {
    let repoData = document.createElement("div");
    repoData.innerHTML = `<div class="form-group border py-3 col-lg-6 col-md-10 col-12">
      <h3 class="mx-5"> 
        <a href=${userData[i].html_url}>${userData[i].name}</a>
      </h3>
      <h3 class="mx-5 text-success">Created At:<p>${userData[i].created_at}</p> </h3>
      <h3 class="mx-5 text-danger">Id :${userData[i].id}</h3>
      <h3 class="mx-5 ">branch: ${userData[i].default_branch}</h3>
    </div>`;
    $("#repoTable").append(repoData);
  }
}

function fetching() {
  link = localStorage.getItem("repolink");
  fetch(link)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      userUI(myJson);
      console.log(myJson);
    });
}
fetching();
