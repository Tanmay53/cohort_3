let userArr = [];
$(document).ready(function () {
    $('.table').hide();
    $('#optionsDiv').hide();
    $('#submitDetails').click(function (e) {
        e.preventDefault();
        let firstName = $('#firstName').val().trim();
        let lastName = $('#lastName').val().trim();
        let username = $('#username').val().trim();
        let password = $('#password').val().trim();
        let email = $('#email').val().trim();
        let address = $('#address').val().trim();
        let phone = $('#phone').val().trim();
        let type = $('#type').val().trim();
        if (username.length == 0 || password.length == 0 || email.length == 0) {
            alert("Username, Password and Email are necessary!!!");
        }
        else {
            if (firstName.length == 0) {
                firstName = undefined;
            }
            if (lastName == 0) {
                lastName = undefined;
            }
            if (address.length == 0) {
                address = undefined;
            }
            if (phone.length == 0) {
                phone = undefined;
            }
            let user = new User(username, password, email, type, firstName, lastName, address, phone);
            userArr.push(user);
            addOption(username);
            $('input').val('');
            createTable(userArr);
            $('.table').show();
            $('#optionsDiv').show();
            $('#filterSelect').val('all');
        }
    });

    $('#userSelect').click(function () {
        poupulateInfo($(this).val());
    });

    $('#filterSelect').click(function() {
        let filterType = $(this).val();
        if (filterType == "all") {
            createTable(userArr);
        }
        else {
            let filteredArr = userArr.filter(function(e) {
                return e.type == filterType;
            });
            createTable(filteredArr);
        }
    });

    $('#sortSelect').click(function() {
        let filterType = $('#filterSelect').val();
        let sortType = $('#sortSelect').val();
        if (filterType == 'all') {
            if (sortType == 'inc') {
                sortObjArr(userArr, true);
            }
            else {
                sortObjArr(userArr, false);
            }
            createTable(userArr);
        }
        else {
            let filteredArr = userArr.filter(function(e) {
                return e.type == filterType;
            });
            if (sortType == "inc") {
                sortObjArr(filteredArr, true);
            }
            else {
                sortObjArr(filteredArr, false);
            }
            createTable(filteredArr);
        }
    });
});

function User(username, password, email, type, fname = "Fname", lname = "Lname", address = "Custom Address", phone = 92566) {
    this.fname = fname;
    this.lname = lname;
    this.username = username;
    this.password = password;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.type = type;
}

function addOption(username) {
    let option = document.createElement('option');
    $(option).val(username);
    $(option).text(username);
    $('#userSelect').append(option);
}

function poupulateInfo(user) {
    $('#userInfo').empty();
    if (user.length > 0) {
        let obj = userArr.filter(function (e) {
            return e.username == user;
        })[0];
        if (obj.type == "user") {
            let str = `<div>
                        <div> Hello ${obj.fname} ${obj.lname}, welcome back </div>
                        <div> Registered email is ${obj.email} </div>
                        <div> Registered Phone Number is ${obj.phone} </div>
                        <div> Address is ${obj.address} </div>
                       </div>`;
            $('#userInfo').html(str);
        }
        else {
            let str = `<div>
                        <div> Welcome Admin ${obj.fname} ${obj.lname} </div>
                        <div> You have access to all the Information </div>
                       </div>`;
            $('#userInfo').html(str);
        }
    }
}

function createTable(arr) {
    $('.table tbody').empty();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != null) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            $(td1).text(arr[i].username);
            $(tr).append(td1);
            let td2 = document.createElement('td');
            $(td2).text(arr[i].fname);
            $(tr).append(td2);
            let td3 = document.createElement('td');
            $(td3).text(arr[i].lname);
            $(tr).append(td3);
            let td4 = document.createElement('td');
            $(td4).text(arr[i].email);
            $(tr).append(td4);
            let td5 = document.createElement('td');
            $(td5).text(arr[i].phone);
            $(tr).append(td5);
            let td6 = document.createElement('td');
            $(td6).text(arr[i].address);
            $(tr).append(td6);
            let td7 = document.createElement('td');
            $(tr).append(td7);
            let deleteBtn = document.createElement('button');
            $(deleteBtn).addClass("btn btn-outline-primary");
            $(deleteBtn).text("Delete");
            $(deleteBtn).click(function() {
                let idx = $('.table button').index($(this));
                let username = $('.table tbody tr')[idx].querySelector('td').textContent;
                let idxObj = indexOfObj(userArr, username);
                $('.table tbody tr')[idx].remove();
                $('#userSelect option[value*='+username+']').remove();
                $('#userInfo').empty();
                userArr = updateArr(userArr, idxObj);
                if(userArr.length == 0) {
                    $('#optionsDiv').hide();
                    $('.table').hide();
                }
                $('#userSelect').val();
            });
            $(td7).append(deleteBtn);
            $('.table tbody').append(tr);
        }
    }
}


function sortObjArr(objArr, incFlag) {
    if(incFlag) {
        objArr.sort(function(a,b) {
            if (a.username<b.username) {
                return -1;
            }
            if (a.username>b.username) {
                return 1;
            }

            return 0;
        });
    }
    else {
        objArr.sort(function(a,b) {
            if (a.username>b.username) {
                return -1;
            }
            if (a.username<b.username) {
                return 1;
            }

            return 0;
        });
    }
    return objArr;
}

function updateArr(arr, idx) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i != idx) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//Function to find index of a object in array from username property.
function indexOfObj(arr, username) {
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].username == username) {
            idx = i;
            break;
        }
    }
    return idx;
}