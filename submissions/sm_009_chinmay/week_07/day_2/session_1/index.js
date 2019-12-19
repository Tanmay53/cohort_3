let userArr = []
let i=0;
$('#submit').click(function () {
    let user = {
        id: i,
        fname: $('#fname').val(),
        lname: $('#lname').val(),
        username: $('#username').val(),
        password: $('#password').val(),
        email: $('#email').val(),
        address: $('#address').val(),
        mobile: $('#mobile').val(),
        type: $('#type').val()
    }
    i++

    userArr.push(user)
    displayUserData(userArr);
})


//function to display user details 
function displayUserData(arr) {
    $('#dropdown').empty()
    for (var i = 0; i < arr.length; i++) {
        var opt = document.createElement('option');
        opt.setAttribute('value', i)
        opt.textContent = arr[i].username;
        $("#dropdown").append(opt);
    }
}

$('#dropdown').change(()=> {
    let index = $('#dropdown').val();
    console.log(index)
    dropDown(userArr[index])
})

//display user data for selected dropdown
function dropDown(user) {
    console.log(user)
    var doc = document.getElementById('display-user')
    doc.innerHTML = `
                        <div>
                            <div> Hello ${user.username}, Welcome back. </div>
                            <div> Your registered email id is ${user.email}</div>
                        </div>
                    `
}

$('#seeTable').click( () => {
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
        td.textContent = arr[i].fname;
        tr.append(td);

        var td = document.createElement('td');
        td.textContent = arr[i].lname;
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
        del.textContent = 'Delete'
        del.setAttribute('onclick',`deleteUser(${arr[i].id})`)
        td.append(del);
        tr.append(td);

        $('#table-body').append(tr);
    }
}

// Delete Function
function deleteUser(id) {
    console.log('im clicked', id)
    userArr = userArr.filter((a) => a.id!=id)
    displayTable(userArr);
    $('#dropdown').empty().append(displayUserData(userArr));
}

// Asc Desc sorting
$('#sort').change(function () {
    if ($('#sort').val() === 'asc') {
        sortResults('asc')
    } else if ($('#sort').val() === 'desc') {
        sortResults('desc')
    }
});

// Sort by user type
$('#userType').change(function () {
    if ($('#userType').val() === 'user') {
        sortResults('user')
    } else if ($('#userType').val() === 'admin') {
        sortResults('admin')
    } else {
        sortResults('all')
    }
})

// Sort function
function sortResults(input) {
    var sortResults = userArr;
    switch(input){
        case 'asc':{
            sortResults = userArr.sort((a,b) => {
                return a.username>b.username?1:-1
            })
            break;
        }
        case 'desc':{
            sortResults = userArr.sort((a,b) => {
                return a.username<b.username?1:-1
            })
            break;
        }
        case 'admin':{
            sortResults = userArr.filter(a => a.type ==='admin')
            break;
        }
        case 'user':{
            sortResults = userArr.filter(a=> a.type ==='user')
            break;
        }
        case 'all':
            break;
    }
    displayTable(sortResults)
}