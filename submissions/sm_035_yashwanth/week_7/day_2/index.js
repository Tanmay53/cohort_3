var userDetailsInArr = []
// creating user for input
function Userdetails(firstname, lastname, username, password, email, address, phoneNo, type) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.email = email;
    this.address = address;
    this.phoneNo = phoneNo;
    this.type = type;
}
$('#btn_submit').click(function (k) {
    k.preventDefault();
    var firstname = $("#firstname").val();
    var lastname = $('#lastname').val();
    var username = $('#username').val();
    var password = $('#password').val();
    var email = $('#email').val();
    var address = $('#address').val();
    var phoneNo = $('#phoneNo').val();
    var type = $('#type').val();

    if (username.length == 0 || email.length == 0 || password.length == 0) {
        alert("Enter Neccessory Conditions first and then press submit")
    }
    else {
        if (firstname.length == 0 || lastname.length == 0 || address.length == 0 || phoneNo.length == 0) {
            firstname = "Yash";
            lastname = "Kore";
            address = "House";
            phoneNo = "9876543210";
        }
        var user = new Userdetails(firstname, lastname, username, password, email, address, phoneNo, type);
        userDetailsInArr.push(user);
        console.log(userDetailsInArr)
    }
    displayUserDetailsInTable(userDetailsInArr)
    $("#firstname").val("");
    $("#lastname").val("");
    $("#username").val("");
    $("#password").val("");
    $("#email").val("");
    $("#address").val("");
    $("#phoneNo").val("");
})

function displayUserDetailsInTable(arr) {
    $('#display').empty()
    for (var i = 0; i < arr.length; i++) {
        var row = document.createElement('tr');
        $('#display').append(row)

        var col1 = document.createElement('td');
        col1.innerHTML = arr[i]["firstname"];
        row.appendChild(col1)

        var col2 = document.createElement('td');
        col2.innerHTML = arr[i]["lastname"];
        row.appendChild(col2)

        var col3 = document.createElement('td');
        col3.innerHTML = arr[i]["username"];
        row.appendChild(col3)

        var col4 = document.createElement('td');
        col4.innerHTML = arr[i]["password"];
        row.appendChild(col4)

        var col5 = document.createElement('td');
        col5.innerHTML = arr[i]["email"];
        row.appendChild(col5)

        var col6 = document.createElement('td');
        col6.innerHTML = arr[i]["address"];
        row.appendChild(col6)

        var col7 = document.createElement('td');
        col7.innerHTML = arr[i]["phoneNo"];
        row.appendChild(col7)

        var col8 = document.createElement('td');
        col8.innerHTML = arr[i]["type"];
        row.appendChild(col8)

        var col9 = document.createElement('td');
        var delbtn = document.createElement('button');
        delbtn.innerHTML = "Delete"
        delbtn.setAttribute('class', "btn btn-danger")
        col9.append(delbtn);
        row.appendChild(col9)

        col9.addEventListener('click', deleteUserData)
    }
}

function deleteUserData() {
    var parent = this.parentElement;
    // console.log(parent)
    parent.remove();
    var removingUser = parent.querySelectorAll("td")[2].innerHTML
    // console.log(removingUser)
    for (var i = 0; i < userDetailsInArr.length; i++) {
        console.log(userDetailsInArr[i]["username"])
        if (userDetailsInArr[i]["username"] == removingUser) {
            userDetailsInArr.splice(i, 1);
            break;
        }
    }
    console.log(userDetailsInArr)
}

$("#sortingUser").click(function () {
    var sortingUser = $("#sortingUser").val();
    console.log(sortingUser);

    if (sortingUser == "acc") {
        userDetailsInArr.sort(function (a, b) {
            if (a.firstname > b.firstname) {
                return 1
            }
            if (a.firstname < b.firstname) {
                return -1
            }
            return 0;
        });
    }
    if (sortingUser == "des") {
        userDetailsInArr.sort(function (a, b) {
            if (a.firstname > b.firstname) {
                return -1
            }
            if (a.firstname < b.firstname) {
                return 1
            }
            return 0;
        });
    }
    displayUserDetailsInTable(userDetailsInArr)
})

$("#typeofUser").click(function () {
    var typeofUser = $("#typeofUser").val()
    console.log(typeofUser)
    var reqUsers = [];
    if (typeofUser == "all") {
        reqUsers = userDetailsInArr
    }

    if (typeofUser == "admin") {
        for (var i = 0; i < userDetailsInArr.length; i++) {
            if (userDetailsInArr[i]["type"] == typeofUser) {
                reqUsers.push(userDetailsInArr[i]);
            }
        }
    }

    if (typeofUser == "user") {
        for (var j = 0; j < userDetailsInArr.length; j++) {
            if (userDetailsInArr[j]["type"] == typeofUser) {
                reqUsers.push(userDetailsInArr[j]);
            }
        }
    }
    console.log(reqUsers)
    displayUserDetailsInTable(reqUsers)
})
