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
    userData(userArr);
})


//function to display user details 
function userData(arr) {
    $('#user').empty()
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === null) {
            continue;
        }
        var opt = document.createElement('option');
        opt.setAttribute('value', i)
        opt.textContent = arr[i].username;
        $("#user").append(opt);
    }
}


$('#user').change(function() {
    let index = $('#user').val();
    console.log(index)
    dropDown(userArr[index])
})

//function for displaying user data for selected user in drop down
function dropDown(user) {
    console.log(user)
    var doc = document.getElementById('userInfo')
    doc.innerHTML = `<div>
                           <div> Hello ${user.username}, welcome back ... </div>
                           <div> Registered email is ${user.email}</div>
                           <div> Your mobile number is ${user.mobile}</div>
                    </div>`
}


//adding event listener on 'see table' button
$('#seeTable').click(function() {
    displayTable(userArr);
})




//To display user table
function displayTable(arr) {

    $('#table-body').empty();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == null) {
            continue;
        }
        let tr = document.createElement('tr');

        var td = document.createElement('td');
        td.textContent = arr[i].username;
        tr.append(td);
        var td = document.createElement('td');
        td.textContent = arr[i].first;
        tr.append(td);
        var td = document.createElement('td');
        td.textContent = arr[i].last;
        tr.append(td);
        var td = document.createElement('td');
        td.textContent = arr[i].type;
        tr.append(td);
        var td = document.createElement('td');
        td.textContent = arr[i].email;
        tr.append(td);
        var td = document.createElement('td');
        var del = document.createElement('button');
        del.setAttribute('class', 'btn btn-sm btn-danger');
        del.setAttribute('idx', i);
        del.textContent = 'Delete'
        del.addEventListener('click', function(btn) {
            var index = this.getAttribute('idx');
            console.log(index)
            arr[index] = null;
            displayTable(arr);
            userData(arr);
        })
        td.append(del);
        tr.append(td);

        $('#table-body').append(tr);

        // for(key in userArr[i]){
        //     var td = document.createElement('td');
        //     if(key === username){
        //         td.textContent = userArr[i].username;
        //     }else if(key === first){
        //         td.textContent = userArr[i].first;
        //     }else if(key === last){
        //         td.textContent = userArr[i].last;
        //     }else if(key === type){
        //         td.textContent = userArr[i].type;
        //     }else if(key === email){
        //         td.textContent = userArr[i].email;
        //     }
        // }
    }
}



//Alphabetical sorting of users
$('#order').change(function() {

    let username_sorted = []
    for (let i = 0; i < userArr.length; i++) {
        username_sorted[i] = userArr[i]['username'];
    }
    username_sorted.sort();
    console.log(username_sorted);

    //arranging arr ascending order
    let user_asc = []

    for (let i = 0; i < username_sorted.length; i++) {
        for (let j = 0; j < userArr.length; j++) {
            if (username_sorted[i] === userArr[j].username) {
                user_asc[i] = userArr[j]
            }
        }
    }

    //arranging as per desc order

    let user_desc = []
    let length = username_sorted.length - 1;
    for (let i = length; i >= 0; i--) {
        for (let j = 0; j < userArr.length; j++) {
            if (username_sorted[i] === userArr[j].username) {
                user_desc[(length) - i] = userArr[j]
            }
        }
    }


    //calling asc / desc function
    if ($('#order').val() === 'asc') {
        displayTable(user_asc)
    } else if ($('#order').val() === 'desc') {
        console.log('check', user_desc)
        displayTable(user_desc);
    }
});


$('#userType').change(function() {
    let onlyUser = [];
    let onlyAdmin = []
    for (let i = 0; i < userArr.length; i++) {
        if ((userArr[i]['type']) === 'user') {
            onlyUser.push(userArr[i])
        } else {
            onlyAdmin.push(userArr[i])
        }
    }
    if ($('#userType').val() === 'user') {
        displayTable(onlyUser)
    } else if ($('#userType').val() === 'admin') {
        displayTable(onlyAdmin)
    } else {
        displayTable(userArr)
    }
})