function displayTable(users) {
    var table = document.querySelector("table");
    table = (table) ? table : document.createElement("table");
    table.textContent = "";

    for(let i = 0; i < users.length; i++) {
        var tr = document.createElement("tr");

        for(key in users[i]) {
            var td = document.createElement("td");
            td.textContent = users[i][key];
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    document.querySelector("body").appendChild(table)
}
function fetchUser() {
    var username = document.getElementById("username").value || "a";
    var baseURL = "https://api.github.com/search/users?q=";

    fetch(baseURL + username)
    .then(response => {
        return response.json();
    })
    .then(response => {
        displayTable(response.items);
    })
    .catch(err => console.log(err))

}

searchBtn.addEventListener("click", fetchUser);