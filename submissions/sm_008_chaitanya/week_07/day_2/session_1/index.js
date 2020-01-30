$("#btn").click(function () {
    var firstname = $("#fname").val() || undefined
    var lastname = $("#lname").val() || undefined
    var username = $("#uname").val() || undefined
    var password = $("#pwd").val() || undefined
    var email = $("#email").val() || undefined
    var address = $("#adrs").val() || undefined
    var mobile = $("#phone").val() || undefined
    var type = $("input[type=radio]:checked").val()

    var personObj = new DataObj(firstname, lastname, username, password, email, address, mobile, type)
    personArr.push(personObj)
    selectUsers(personArr)
});

personArr = []
//constructor object to create multiple objects//
function DataObj(firstname = "first", lastname = "last", username, password, email, address = "masai", mobile = "000", type) {
    this.firstname = firstname
    this.lastname = lastname
    this.username = username
    this.password = password
    this.email = email
    this.address = address
    this.mobile = mobile
    this.type = type
}

//Appending username's to the "select_users" dropdown//
function selectUsers(personArr) {
    $("#user_list option").remove()
    $("#user_list").append('<option>' + '-- Select Users --' + '</option>')
    for (var i = 0; i < personArr.length; i++) {
        $("#user_list").append('<option value=' + personArr[i]["username"] + '>' + personArr[i]["username"] + '</option>')
    }
}

//Obtaining username,mail,firstname,mobile of the selected user in "select_user" section and displaying according to the type of admin and user// 
$("#user_list").click(function () {
    for (var i = 0; i < personArr.length; i++) {
        if (personArr[i]["username"] == $("#user_list").val() && personArr[i]["type"] == "User") {
            var [d_uname, d_mail] = [personArr[i]["username"], personArr[i]["email"]]
            alert(fillInfo_user(d_uname, d_mail))
        }
        else if (personArr[i]["username"] == $("#user_list").val() && personArr[i]["type"] == "Admin") {
            var [d_fname, d_mobile] = [personArr[i]["firstname"], personArr[i]["mobile"]]
            alert(fillInfo_admin(d_fname, d_mobile))
        }
    }
});

function fillInfo_user(a, b) {
    return `
                Hello ${a},Welcome back user
                Registered email is ${b}`
}

function fillInfo_admin(c, d) {
    return `
                Hello ${c},Welcome back Admin 
                Registered Mobile Number is ${d}`
}

//Table to display user details(Generalized)//(can be reuse anywhere)
function show_table(personArr) {
    $("#disp_output").text("")
    var tab = document.createElement('table')
    for (var i = 0; i < personArr.length; i++) {
        var row = document.createElement('tr')
        var col_1 = document.createElement('td')
        col_1.textContent = personArr[i]["firstname"]
        var col_2 = document.createElement('td')
        col_2.textContent = personArr[i]["lastname"]
        var col_3 = document.createElement('td')
        col_3.textContent = personArr[i]["username"]
        var col_4 = document.createElement('td')
        col_4.textContent = personArr[i]["email"]
        var col_5 = document.createElement('td')
        col_5.textContent = personArr[i]["mobile"]
        var col_6 = document.createElement('td')
        col_6.textContent = personArr[i]["type"]
        var col_7 = document.createElement('button')
        col_7.innerHTML = "Delete"
        col_7.setAttribute('class', 'bg-primary border-rounded text-white')
        col_7.setAttribute('onclick',`delete_user("${personArr[i]["username"]}")`)
        row.append(col_1, col_2, col_3, col_4, col_5, col_6, col_7)
        tab.append(row)
    }
    $("#disp_output").append(tab)
    tab.setAttribute('class', 'table table-bordered table-responsive{-sm|-md|-lg|-xl}')
    $("#disp_output").addClass('my-5 text-center')        
}

//Ascending and Descending table data based on username(acgieved by bubble sort technique)
$("#user_sort").click(function () {
    if ($("#user_sort").val() == "asc") {
        var n = personArr.length
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - i - 1; j++) {
                if (personArr[j]["username"] > personArr[j + 1]["username"]) {
                    var temp = personArr[j]
                    personArr[j] = personArr[j + 1]
                    personArr[j + 1] = temp
                }
            }
        }
        show_table(personArr)
    }
    else if ($("#user_sort").val() == "dec") {
        var n = personArr.length
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - i - 1; j++) {
                if (personArr[j]["username"] < personArr[j + 1]["username"]) {
                    var temp = personArr[j]
                    personArr[j] = personArr[j + 1]
                    personArr[j + 1] = temp
                }
            }
        }
        show_table(personArr)
    }
});

//Filter the table data based on Admin and User type//
$("#user_filter").click(function () {
    if ($("#user_filter").val() == "all") {
        show_table(personArr)
    }
    else if ($("#user_filter").val() == "admin") {
        var admin_filter = personArr.filter(a => a.type === "Admin")
        show_table(admin_filter)
    }
    else if ($("#user_filter").val() == "user") {
        var user_filter = personArr.filter(a => a.type === "User")
        show_table(user_filter)
    }
});

//Delete function//
function delete_user(a){
    personArr=personArr.filter(e =>e.username != a)
    alert("Do you want to Delete!")
    show_table(personArr)
}
