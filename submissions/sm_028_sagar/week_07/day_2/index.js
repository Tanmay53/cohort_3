//user array
const userArr = []


$('#submit').click(function() {
    let user = {
        first: $('#first').val(),
        last: $('#last').val(),
        username: $('#username').val(),
        password: $('#password').val(),
        email: $('#email').val(),
        address: $('#address').val(),
        mobile: $('#mobile').val(),
        type: $('#type').val()
    }
    console.log(user)
    userArr.push(user)
    console.log(userArr)
})


$('#selectUser').click(function() {
    userData();
});

//function to display user details 
function userData() {
    for (var i = 0; i < userArr.length; i++) {
        var opt = document.createElement('option');
        opt.setAttribute('value', i)
        opt.textContent = userArr[i].username;
        $("#user").append(opt);
    }
}


$('#user').change(function() {
    let index = $('#user').val();
    console.log(index)
    displayUser(userArr[index])
})

//function for displaying user data for selected user form drop down
function displayUser(user) {
    console.log(user)
    var doc = document.getElementById('userInfo')
    doc.innerHTML = `<div>
                           <div> Hello ${user.username}, welcome back </div>
                           <div> Registered email is ${user.email}</div>
                    </div>`
}