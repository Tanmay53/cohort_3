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
            userRow(ele);
        } else if (type == "user") {
            if (ele.userType == "user") userRow(ele);
        } else if (type == "admin") {
            if (ele.userType == "admin") userRow(ele);
        }
    });
}
function userRow(ele) {
    $("tbody")
        .append(`<tr><td><button id="btn-${ele.username}"><i class="fas fa-trash-alt"></i></button></td>
                            <td>${ele.fname} ${ele.lname}</td>
                           <td>${ele.username}</td>
                           <td>${ele.userType}</td> 
                           <td>${ele.email}</td>     
                           <td>${ele.address}</td>     
                           <td>${ele.phone}</td>     
                        </tr>`);

    // add eventlistener to delete buttons
    $("#btn-" + ele.username).click(function() {
        console.log("delete clicked");
        allUsers.forEach(function(obj, index) {
            if (obj.username == ele.username) {
                allUsers.splice(index, 1);
            }
        });
        printUsers($("#filter-user").val());
    });
}

$("#sortNameAsc").click(function() {
    allUsers.sort(compareNameAsc);
    console.log(allUsers);
    printUsers($("#filter-user").val());
});

$("#sortNameDsc").click(function() {
    allUsers.sort(compareNameDsc);
    console.log(allUsers);
    printUsers($("#filter-user").val());
});
$("#sortUsernameAsc").click(function() {
    allUsers.sort(compareUsernameAsc);
    console.log(allUsers);
    printUsers($("#filter-user").val());
});

$("#sortUsernameDsc").click(function() {
    allUsers.sort(compareUsernameDsc);
    console.log(allUsers);
    printUsers($("#filter-user").val());
});

function compareNameAsc(a, b) {
    const userA = a.fname;
    const userB = b.fname;
    let comparison = 0;
    if (userA > userB) comparison = 1;
    else if (userA < userB) comparison = -1;
    return comparison;
}

function compareNameDsc(a, b) {
    const userA = a.fname;
    const userB = b.fname;
    let comparison = 0;
    if (userA > userB) comparison = -1;
    else if (userA < userB) comparison = 1;
    return comparison;
}

function compareUsernameAsc(a, b) {
    const userA = a.username;
    const userB = b.username;
    let comparison = 0;
    if (userA > userB) comparison = 1;
    else if (userA < userB) comparison = -1;
    return comparison;
}

function compareUsernameDsc(a, b) {
    const userA = a.username;
    const userB = b.username;
    let comparison = 0;
    if (userA > userB) comparison = -1;
    else if (userA < userB) comparison = 1;
    return comparison;
}

// delete object
