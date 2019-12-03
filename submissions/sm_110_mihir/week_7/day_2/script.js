var allUsers = [];

// get data from html
function getUser() {
    event.preventDefault();

    createUser({
        fname: $("#fname").val() || undefined,
        lname: $("#lname").val() || undefined,
        username: $("#username").val(),
        password: $("#password").val(),
        email: $("#email").val(),
        address: $("#address").val() || undefined,
        phone: $("#phone").val() || undefined,
        userType: $("#userType").val()
    });
}
function createUser({
    fname = "firstname",
    lname = "lastname",
    address = "123 sample street",
    phone = "0123456789",
    username,
    password,
    email,
    userType
}) {
    let user = {
        fname: fname,
        lname: lname,
        username: username,
        password: password,
        email: email,
        address: address,
        phone: phone,
        userType: userType
    };
    allUsers.push(user);
    console.log(allUsers);
    var option = document.createElement("option");
    option.textContent = user.fname;
    var container = document.querySelector("#sel-users");
    container.appendChild(option);
}

$("#sel-users").click(function() {
    $("#user-details").html("");
    var selUser = $(this).val();
    console.log(selUser);
    allUsers.forEach(function(ele) {
        if (ele.fname == selUser) {
            if (ele.userType == "user")
                $("#user-details").append(
                    `<h3 class="bg-primary text-white">Hello, you are our prime USER</h3>`
                );
            else
                $("#user-details").append(
                    `<h3 class="bg-success text-white">Hello, dear ADMIN,please find details below</h3>`
                );

            $("#user-details").append(`
            <li>First Name: ${ele.fname}</li>
            <li>Last Name: ${ele.lname}</li>
            <li>Username : ${ele.username}</li>
            <li>email: ${ele.email}</li>
            <li>phone : ${ele.phone}<li>
            
            `);
        }
    });
});

$("#filter-user").click(function() {
    printUsers($(this).val());
});

function printUsers(type = "all") {
    $("tbody").empty();
    allUsers.forEach(function(ele) {
        if (type == "all") {
            $("tbody").append(`<tr><td>${ele.fname} ${ele.lname}</td></tr>`);
        } else if (type == "user") {
            if (ele.userType == "user")
                $("tbody").append(
                    `<tr><td>${ele.fname} ${ele.lname}</td></tr>`
                );
        } else if (type == "admin") {
            if (ele.userType == "admin")
                $("tbody").append(
                    `<tr><td>${ele.fname} ${ele.lname}</td></tr>`
                );
        }
    });
}

$("#sort").click(function() {
    // get name list
    let arrNames = [];
    var tr = document.querySelectorAll("tbody tr");
    tr.forEach(function(ele) {
        var td = ele.querySelector("td");
        console.log(td.innerText);
        arrNames.push(td.innerText);
    });

    // sort
    if ($("#sort").val() == "asc") arrNames.sort();
    else arrNames.sort().reverse();
    printSortedData(arrNames);
});

function printSortedData(arrNames) {
    $("tbody").empty();
    arrNames.forEach(function(ele) {
        $("tbody").append(`<tr><td>${ele}</td></tr>`);
    });
}
