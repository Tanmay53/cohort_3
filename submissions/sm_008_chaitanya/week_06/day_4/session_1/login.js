$("#btn").click(function () {
    var login_data = {
        username: $("#username").val(),
        password: $("#pwd").val()
    }
    login_data = JSON.stringify(login_data)
    $.ajax({
        method: 'POST',
        url: 'http://localhost:8080/auth/login',
        data: login_data,
        contentType: 'application/json'
    })
        .done(function (login_output) { //It is similar to obtain status code 200 (or) successfull login 
            process_data(login_output)
        })

        .fail(function () {  //It is one of the error handling in jquer ajax(if status code is not 200,then it hits)
            alert("Invalid username or password !")
        });
});

//sending token to server (obtained after successfull login) to get the user profile//
function process_data(login_out) {
    login_out = JSON.parse(login_out)
    var token = login_out["token"]

    $.ajax({
        method: 'GET',
        url: ' http://localhost:8080/user/' + $("#username").val(),
        beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Bearer ' + token) }
    })
        .done(function (profile_data) {
            print_profiledata(profile_data)
        });
}

//Creating table to display the user profile//
function print_profiledata(profile_info) {
    profile_info = JSON.parse(profile_info)
    $("#main").remove()   //Remove the login page after getting the user profile
    $("#show_info").text("")
    var tab = document.createElement('table')
    for (key in profile_info) {
        var row = document.createElement('tr')
        var col_1 = document.createElement('td')
        col_1.textContent = key
        var col_2 = document.createElement('td')
        col_2.textContent = profile_info[key]
        row.append(col_1, col_2)
        tab.append(row)
    }
    $("#show_info").append(tab)
    $("#show_info").addClass('my-5')
    tab.setAttribute('class', 'table table-bordered h2 bg-primary col-10 col-md-8 col-lg-3 offset-lg-2 text-center')
    $('body').addClass('container')
}