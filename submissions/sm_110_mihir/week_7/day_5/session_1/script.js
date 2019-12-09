function search() {
    event.preventDefault();
    let userEle = document.getElementById("name").value;
    console.log(userEle);
    fetchAPI("https://api.github.com/search/users?q=", userEle);
}

function fetchAPI(baseURL, endUrl) {
    let url = baseURL + endUrl;
    console.log(url);
    fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
        .then(res => res.json())
        .then(data => {
            storeUserList(data);
            printsUserList(data);
        })
        .catch(console.log("Error cought"));
}

function storeUserList(data) {
    let userList = data.items;
    userList = JSON.stringify(userList);
    console.log("userlist: ", userList);
    localStorage.setItem("userList", userList);
}
function printsUserList(data) {
    let count = data.total_count;
    let userList = data.items;
    console.log(userList);
    $("#user-list").empty();
    var id = 0;
    userList.forEach((element, index) => {
        if (index % 4 == 0) {
            id++;
            $("#user-list").append(`<div class="row">
            <div class="card-deck mt-2" id="${id}"></div>
            </div>`);
            appendUser(element, id);
        } else {
            appendUser(element, id);
        }
    });
}

function appendUser(element, id) {
    $(`#${id}`).append(`<div class="col-md-4 col-lg-3 my-3 py-3 text-center">
    <form action="user_repos.html" method="GET">
    <input type="text" name="login" value="${element.login}" hidden>
    <button class="btn btn-primary card bg-light text-dark" type="submit">
    <img class="card-img-top img-fluid img-thumbnail" src="${element.avatar_url}" alt="Card image cap width="100px">
    <div class="card-body">
      <h5 class="card-title">${element.login}</h5>
    </button></fomr></div>`);
}
