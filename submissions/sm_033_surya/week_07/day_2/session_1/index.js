var fname = $("#fName").val()
var lName = $("#lName").val()
var uName = $("#uName").val()
var password = $("#password").val()
var email = $("#email").val()
var address = $("#address").val()
var phoneNumber = $("#phoneNumber").val()
var type = $("#type").val()
function User(fname, lname, uname, password, email, address, phoneNumber, type) {
    this.firstname = fname || "surya"
    this.lastname = lname || "teja"
    this.username = uname || "surya_Teja"
    this.password = password || "surya472"
    this.email = email || "surya11472@gmail.com"
    this.address = address || "Agara"
    this.phoneNumber = phoneNumber || 976543218
    this.type = type
}
$(".logoutBtn").hide()
// $(".selectType").hide()
$(".tableDiv").hide()
var arra = []
$("#submit").click(function () {
    let fname = $("#fName").val()
    let lname = $("#lName").val()
    let uName = $("#uName").val()
    let password = $("#password").val()
    let email = $("#email").val()
    let address = $("#address").val()
    let phoneNumber = $("#phoneNumber").val()
    var type = $("#type").val()
    var user = new User(fname, lname, uName, password, email, address, phoneNumber, type)
    arra.push(user)
    // console.log(arra)
    var data = JSON.stringify(arra)
    localStorage.setItem("user", data)
    // console.log(data)
    if (type == "User") {
        printUser(user)
    }
    else {
        printAdmin(user)
    }

})
function printUser(user) {
    var { firstname, lastname, type } = user
    console.log(user)
    $(".formIn").hide()
    $(".logoutBtn").show()
    $(".tableDiv").hide()
    $(".data").html(`<div>
                             <div> <h1>Hello ${firstname + " " + lastname}<h1> </div>
                            <div> <p>You are new ${type} to this site</p></div>
                          </div>`)
    $(".data").css("background", "green")
}
function printAdmin(user) {
    $(".formIn").hide()
    $(".logoutBtn").show()
    $(".tableDiv").hide()
    var { firstname, lastname, type } = user
    console.log(user)
    $(".data").html(`<div>
                             <div> <h1>Hello ${firstname + " " + lastname}<h1> </div>
                            <div> <p>You are created acoount as <h1> ${type} to this site</p></div>
                          </div>`)
    $(".data").css("background", "blue")
}

$(".logout").click(function () {
    $(".formIn").show()
    $(".dataDiv").hide()
    $(".tableDiv").hide()
})



$("#alluser").click(function () {
    $(".tableDiv").show()
    $(".formIn").hide()
    var arraUser = []
    var arraAdmin = []
    var data = JSON.parse(localStorage.getItem("user"))
    console.log(data)
    for (i = 0; i < data.length; i++) {
        if (data[i].type == "User") {
            arraUser.push(data[i])
        }
        else {
            arraAdmin.push(data[i])
            // console.log(arraAdmin)
        }
    }
    $("#sorting").click(function () {
        var sortedData = sortingData(data)
        printForm(sortedData)

    })
    $("#reversing").click(function () {
        var reverseData = reversingData(data)
        console.log(reverseData)
        printForm(reverseData)
    })

    if ($(".selectType").val() == "All") {
        printForm(data)
    }

    $(".selectType").click(function () {
        if ($(".selectType").val() == "All") {
            $("#sorting").click(function () {
                sortingData(data)
            })
            printForm(data)
        }
        else if ($(".selectType").val() == "User") {
            $(".sort").click(function () {
                sortingData(arraUser)
            })
            printForm(arraUser)
        }
        else {
            $(".sort").click(function () {
                sortingData(arraAdmin)
            })
            printForm(arraAdmin)
        }
    })
    $(".lineDelete").click(function () {
        // $(".tableForm").empty()
        var i = $(this).val()
        console.log(i)
        data.splice(i, 1)
        // console.log(i)
        console.log(data)
        printForm(data)
    })

})
function sortingData(data) {
    data.sort(function (a, b) {
        var nameA = a.firstname.toUpperCase()
        var nameB = b.firstname.toUpperCase()
        if (nameA > nameB) {
            return 1
        }
        if (nameA < nameB) {
            return -1
        }
        return 0

    })
    return data
}
function reversingData(data) {
    data.sort(function (a, b) {
        var nameA = a.firstname.toUpperCase()
        var nameB = b.firstname.toUpperCase()
        if (nameA > nameB) {
            return -1
        }
        if (nameA < nameB) {
            return 1
        }
        return 0

    })
    return data
}
function printForm(data) {
    $(".tableForm").empty()
    var tr = document.createElement("tr")
    var td = document.createElement("td")
    td.innerHTML = "First Name"
    tr.appendChild(td)
    var td = document.createElement("td")
    td.innerHTML = "Last Name"
    tr.appendChild(td)
    var td = document.createElement("td")
    td.innerHTML = "User Name"
    tr.appendChild(td)
    var td = document.createElement("td")
    td.innerHTML = "User_Type"
    tr.appendChild(td)
    var td = document.createElement("td")
    td.innerHTML = "Address"
    tr.appendChild(td)
    var td = document.createElement("td")
    td.innerHTML = "Mobile_Number"
    tr.appendChild(td)
    tr.appendChild(td)
    $(".tableForm").append(tr)
    for (i = 0; i < data.length; i++) {
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        td.innerHTML = data[i].firstname
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerHTML = data[i].lastname
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerHTML = data[i].username
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerHTML = data[i].type
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerHTML = data[i].address
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerHTML = data[i].phoneNumber
        tr.appendChild(td)
        var td = document.createElement("td")
        var btn = document.createElement("button")
        btn.setAttribute("value", i)
        btn.setAttribute("class", "lineDelete")
        btn.innerHTML = "Delete"
        td.append(btn)
        // tr.append(btn)
        tr.appendChild(td)
        $(".tableForm").append(tr)
        // return data
    }
    // $(".lineDelete").click(function(){
    //     var i = $(this).val()
    //     console.log(i)
    // })
}

$(".goBack").click(function () {
    $(".tableDiv").hide()
    $(".formIn").show()
})