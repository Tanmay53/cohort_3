$(document).ready(function() {
    var userLogin = location.search;
    userLogin = userLogin.split("=");
    userLogin = userLogin[1];
    getUserDetails(userLogin);
});

function getUserDetails(login) {
    var userList = localStorage.getItem("userList");
    userList = JSON.parse(userList);
    var baseURL = "https://api.github.com/users/";
    userList.forEach(element => {
        if (element.login == login) {
            console.log(Object.keys(element));
            $(".card > img").attr("src", element.avatar_url);
            $(".card-title").text(`${element.login}`);

            fetchRepos(baseURL, element.login);
        }
    });
}

function fetchRepos(baseURL, user) {
    let url = baseURL + user + "/repos";
    console.log(url);
    fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
        .then(res => res.json())
        .then(data => {
            printsRepos(data);
        })
        .catch(console.log("Error cought"));
}

function printsRepos(data) {
    data.forEach(repo => {
        $("tbody").append(`<tr>
                                <td><a href="${repo.html_url}" target="_blank">${repo.name}</a></td>
                                <td>${repo.description}</td>
                                <td>${repo.language}</td>
                                <td>${repo.created_at}</td>
                                <td>${repo.updated_at}</td>
                            </tr>`);
    });
}
