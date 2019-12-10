let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let queryString = document.getElementById('searchString').value.trim();
    fetch("https://api.github.com/search/users?q="+queryString).
    then(response=>response.json()).then(response=>createTable(response));
});

function createTable(obj) {
    let table = document.querySelector('.table');
    let html = `<thead>
                <th>Username</th>
                <th>ID</th>
                <th>Avatar</th>
                <th>Github Link</th>
                <th>Score</th>
                <th>Show Repo Button</th>
                </thead>
                <tbody>`;
    obj.items.forEach(element => {
        let showReposA = document.createElement('a');
        showReposA.href = element.repos_url;
        showReposA.textContent = "Show Repos";
        showReposA.className = "btn btn-outline-success";
        showReposA.addEventListener('click', function(e) {
            e.preventDefault();
            saveLinkLocalStorage();
        });
        html += `<tr><td>${element.login}</td>
                 <td>${element.id}</td>
                 <td><img src=${element.avatar_url} height=50 width=50 class="rounded-circle" /></td>
                 <td><a href=${element.html_url} target="_blank">Link</a></td>
                 <td>${element.score}</td>
                 <td><a href = ${element.repos_url} class = "btn btn-outline-primary" onclick = "saveLinkLocalStorage(event)">Show Repos</a></td>
                 </tr>`;
    });
    html += `</tbody>`;
    table.innerHTML = html;
}

function saveLinkLocalStorage(e) {
    e.preventDefault();
    localStorage.setItem("link", e.target.href);
    console.log(e.target.href);
    location.href = "user_repo.html";
}
