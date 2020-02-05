$("#submit").click(function () {
    function displayDetails(fname = "Blessy", lname = "John", username = " BlessyJohn", password = "123456", email = "blessymariyakj@gmail.com", address = "302", pnumber = "9188560796", select = "user") {
        return {
            "fname": fname,
            "lname": lname,
            "username": username,
            "password": password,
            "email": email,
            "address": address,
            "pnumber": pnumber,
            "select": select
        }
    }
    var user = displayDetails(
        $("#fname").val() || undefined,
        $("#lname").val() || undefined,
        $("#username").val() || undefined,
        $("#password").val() || undefined,
        $("#email").val() || undefined,
        $("#address").val() || undefined,
        $("#pnumber").val() || undefined,
        $("#select").val() || undefined,
    )
    console.log(user)
    // console.log(user.select)

    if (user.select == "user") {
        var userr = document.createElement("h3")
        userr.innerHTML = ` Hello ${user.username}, welcome back 
     Registered email is ${user.email}`
        $("#logindisplayuser").append(userr)
    }
    else {
        var adminn = document.createElement("h3")
        adminn.innerHTML = ` Hello ${user.username}, welcome back 
     Registered email is ${user.email}`
        $("#logindisplayadmin").append(adminn)

    }
    // var doc = document.getElementById('userInfo')
    // doc.innerHTML = user.username
    // doc.appendChild
    displaytable(user)

})
var r1 = document.createElement("tr")
$(".table").append(r1)
var r1c1 = document.createElement("td")
r1c1.innerHTML = `First Name`
$(".table").append(r1c1)
var r1c2 = document.createElement("td")
r1c2.innerHTML = `Last Name`
$(".table").append(r1c2)
var r1c3 = document.createElement("td")
r1c3.innerHTML = `User Name`
$(".table").append(r1c3)
var r1c4 = document.createElement("td")
r1c4.innerHTML = `Password`
$(".table").append(r1c4)
var r1c5 = document.createElement("td")
r1c5.innerHTML = `Email`
$(".table").append(r1c5)
var r1c6 = document.createElement("td")
r1c6.innerHTML = `Address`
$(".table").append(r1c6)
var r1c7 = document.createElement("td")
r1c7.innerHTML = `Phone Number`
$(".table").append(r1c7)
var r1c8 = document.createElement("td")
r1c8.innerHTML = `Select`
$(".table").append(r1c8)
// var r1c9 = document.createElement("td")
// r1c9.innerHTML = `Remove`
// $(".table").append(r1c9)
function displaytable(user) {
    // var r2 = document.createElement("tr")
    // $(".table").append(r2)
    // var r2c1 = document.createElement("td")
    // r2c1.innerHTML = `${user.username}`
    // $(".table").append(r2c1)
    // for (var i = 0; i < user; i++) {
    // if (user.select == "admin") {
    //     var r2c2 = document.createElement("td")
    //     r2c2.innerHTML = `${user.username}`
    //     $(".table").append(r2c2)
    // }
    // if (user.select == "user") {
    //     var r2c3 = document.createElement("td")
    //     r2c3.innerHTML = `${user.username}`
    //     $(".table").append(r2c3)
    // }
    // }
    var table = document.querySelector(".table")
    var r2 = document.createElement("tr")
    $(".table").append(r2)
    var r2c1 = document.createElement("td")
    r2c1.innerHTML = `${user.fname}`
    $(".table").append(r2c1)

    var r2c2 = document.createElement("td")
    r2c2.innerHTML = `${user.lname}`
    $(".table").append(r2c2)
    var r2c3 = document.createElement("td")
    r2c3.innerHTML = `${user.username}`
    $(".table").append(r2c3)
    var r2c4 = document.createElement("td")
    r2c4.innerHTML = `${user.password}`
    $(".table").append(r2c4)
    var r2c5 = document.createElement("td")
    r2c5.innerHTML = `${user.email}`
    $(".table").append(r2c5)
    var r2c6 = document.createElement("td")
    r2c6.innerHTML = `${user.address}`
    $(".table").append(r2c6)
    var r2c7 = document.createElement("td")
    r2c7.innerHTML = `${user.pnumber}`
    $(".table").append(r2c7)
    var r2c8 = document.createElement("td")
    r2c8.innerHTML = `${user.select}`
    $(".table").append(r2c8)
    var r2c9 = document.createElement("td")
    var del = document.createElement("button")
    del.setAttribute("class", 'btn btn-danger')
    del.textContent = "remove"
    del.addEventListener('click', function (btn) {
        // del.remove("class", 'table')
        // table.remove("class")
        del.remove("class")
        r2c9.remove("class")
        r2c8.remove("class")
        r2c7.remove("class")
        r2c6.remove("class")
        r2c5.remove("class")
        r2c4.remove("class")
        r2c3.remove("class")
        r2c2.remove("class")
        r2c1.remove("class")
    })
    $(".table").append(del)
    $(".table").append(r2c9)
}

