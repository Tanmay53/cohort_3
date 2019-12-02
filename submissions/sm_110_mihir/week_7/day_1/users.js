$(document).ready(function() {
    var page = window.location.href;
    if (page.includes("users.html"))
        var url = "https://reqres.in/api/users?page=1";
    else if (page.includes("users2.html"))
        var url = "https://reqres.in/api/users?page=2";

    getUserData(url, displayUser);
});

function getUserData(url) {
    $.ajax({
        url: url
    }).done(function(data) {
        displayUser(data);
    });
}

function displayUser(data) {
    console.log(data.data);
    var users = data.data;
    users.forEach(function(user) {
        console.log(user.avatar);
        // var img = $("img").attr("src", user[avatar]);
        // var avatar = $("td").append(img);
        // var id = $("td").text(user[id]);
        // var fname = $("td").text(user.first_name);
        // var lname = $("td").text(user.last_name);
        // var email = $("td").text(user.email);
        // console.log(avatar, id);
        // $("#tbody").append(`<tr>${avatar}${id}${fname}${lname}${email}</tr>`);
        $("#tbody").append(`<tr>
        <td><img src="${user.avatar}"/></td>
        <th scope="row">${user.id}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.email}</td>
        </tr>`);
    });
}
