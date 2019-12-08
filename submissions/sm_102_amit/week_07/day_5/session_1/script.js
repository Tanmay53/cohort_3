// user class
class Github {
  constructor() {
    // base url
    this.baseUrl = "https://api.github.com/search/users?q=";
    this.userTable = document.getElementById("userTable");
  }

  fetchUsers(username) {
    fetch(this.baseUrl + username)
      .then(data => data.json())
      .then(data => {
        this.displayAllUser(data.items);
      });
  }

  displayAllUser(data) {
    console.log(data);
    this.userTable.innerHTML = "";
    let table = "";
    data.forEach(element => {
      table += `<tr>
                  <td>${element.id}</td>
                  <td><img src="${element.avatar_url}" class="img-thumbnail" width="100px" /></td>
                  <td>${element.login}</td>
                  <td>${element.score}</td>
                  <td><button type="button" class="btn btn-danger" onclick="fetchRepos()" value="${element.repos_url}">View Repos</button></td>
                </tr>`;
    });
    this.userTable.innerHTML = table;
  }
}

// instantiate github class
let github = new Github();

// function to search user
function searchUser() {
  let username = document.getElementById("username").value;
  github.fetchUsers(username);
}

// function to fetch repos
function fetchRepos() {
  let url = event.target.value;
  let storedUrl = localStorage.getItem("url");
  if (storedUrl == null) {
    localStorage.setItem("url", url);
  } else {
    localStorage.removeItem("url");
    localStorage.setItem("url", url);
  }
  window.location.href = "repos.html";
}
