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
})

//function to display user details 
function userData() {

    var user = document.getElementById('user');
    var cont = document.createElement('div');
    cont.setAttribute('class', 'container');
    cont.setAttribute('id', 'selectUser');
    var drop = document.createElement('select');
    for (var i = 0; i < userArr.length; i++) {
        var opt = document.createElement('option');
        opt.textContent = userArr[i].username;
        opt.addEventListener('click', function() {
            displayUser(userArr[i])
        })
        drop.append(opt)
    }
    cont.append(drop);
    var btn = document.createElement('button');
    btn.textContent = 'register';
    user.append(cont)
    user.append(btn)
}

//function for displaying user data for selected user form drop down
function displayUser() {

}