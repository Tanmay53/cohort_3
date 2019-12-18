//user array
const userArr = []


$('#submit').click(function() {
    event.preventDefault();
    let user = {
        first: $('#first').val(),
        last: $('#last').val(),
        username: $('#username').val(),
        password: $('#password').val(),
        email: $('#email').val(),
        address: $('#address').val(),
        mobile: $('#mobile').val(),
        type: $("input[type=radio]:checked").val()
    }
    console.log(user)
    userArr.push(user)
    console.log(userArr)
    userData(userArr);
})


//function to display user details in drop down list
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
                           <div> Hello ${user.username}, Welcome back ... </div>
                           <div> You are ${user.type} here...</div>
                           <div> Thanks for registering with email: ${user.email}</div>
                     </div>`
}


//adding event listener on 'see table' button
$('#seeTable').click(function() {
    event.preventDefault(); 
    displayTable(userArr);
})




//To display user table
function displayTable(arr) {

    $('#table-body').empty();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == null) {
            continue;
        }
        const {first,last,username,password,email,address,mobile,type} = arr[i]
        let tr = document.createElement('tr');

        var td = document.createElement('td');
        td.textContent = username;
        tr.append(td);
        var td = document.createElement('td');
        td.textContent = first;
        tr.append(td);
        var td = document.createElement('td');
        td.textContent = last;
        tr.append(td);
        var td = document.createElement('td');
        td.textContent = type;
        tr.append(td);
        var td = document.createElement('td');
        td.textContent = email;
        tr.append(td);
        var td = document.createElement('td');
        //logic for delete button
        var del = document.createElement('button');
        del.setAttribute('class', 'btn btn-sm btn-danger');
        del.setAttribute('idx', i);
        del.textContent = 'Delete'
        del.addEventListener('click', function(btn) {
            var index = this.getAttribute('idx');
            console.log(index)
            userArr[index] = null;
            displayTable(userArr);
            userData(userArr);
        })
        td.append(del);
        tr.append(td);

        $('#table-body').append(tr);

    }
}   


//order drop down check

$('#order').change(function(){
    let order = $('#order').val()
    let arr = []
    console.log('order check')
    if(order === 'asc'){
        arr = userArr.sort((a,b)=> (a.username > b.username))
    }else if(order === 'desc'){
        arr = userArr.sort((a,b)=>(b.username > a.username))
    }
    displayTable(arr)
})


//user type drop down check

$('#userType').change(function() {
   let userType = $('#userType').val()
   let arr = []
   console.log(userType)
   if(userType === 'Admin'){
     arr =  userArr.filter(ele=>ele.type == 'Admin')
   }else if(userType === 'User'){
       arr = userArr.filter(ele=>ele.type == 'User')
   }else if(userType === 'all'){
       arr = userArr
   }
   displayTable(arr)
})