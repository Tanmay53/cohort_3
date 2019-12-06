// get repos on page load event
document.addEventListener("DOMContentLoaded", event => {
  fetchRepos();
});

// function to fetch repos
function fetchRepos() {
  let url = localStorage.getItem("url");
  fetch(url)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      listAllRepos(data);
    });
}

function listAllRepos(repos) {
  let repoTable = document.getElementById("repoTable");
  repoTable.innerHTML = "";
  let table = "";
  repos.forEach(element => {
    table += `<tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
              </tr>`;
  });
  repoTable.innerHTML = table;
}
