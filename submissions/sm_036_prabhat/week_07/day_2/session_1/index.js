let data = [];

$('#optDiv').hide();
// Creating User
function User(fname, lname, username, password, email, address, phone, type) {
    this.fname = fname;
    this.lname = lname;
    this.username = username;
    this.password = password;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.type = type;
}

// Getting Value From Input Box
$('#submit').click(function (ele) {
    ele.preventDefault();
    var fname = $("#fname").val();
    var lname = $('#lname').val();
    var username = $('#username').val();
    var password = $('#password').val();
    var email = $('#email').val();
    var address = $('#address').val();
    var phone = $('#phone').val();
    var type = $('#type').val();

    // console.log(fname, lname, username, password, email, address, phone, type);

    if (username.length == 0 || email.length == 0 || password.length == 0) {
        alert("Plese Enter Data for Username Password and Email");
    }
    else {
        if (fname.length == 0 || lname.length == 0 || address.length == 0 || phone.length == 0) {
            fname = undefined;
            lname = undefined;
            address = undefined;
            phone = undefined;
        }
        let user = new User(fname, lname, username, password, email, address, phone, type);
        data.push(user);
        // console.log(data)
    }
    displayUser(data);
    reset()
})

// Reset Display 
function reset() {
    $("#fname").val("");
    $("#lname").val("");
    $("#username").val("");
    $("#password").val("");
    $("#email").val("");
    $("#address").val("");
    $("#phone").val("");
}

// Displaying User Data

function displayUser(d) {
    $('#optDiv').show();
    $('#displayUser').empty()
    for (var i = 0; i < d.length; i++) {
        var tr = document.createElement('tr');
        $('#displayUser').append(tr)
        $("tr").addClass("table-primary");
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        var td8 = document.createElement('td');
        var td9 = document.createElement('td');
        var btn = document.createElement('button');

        btn.innerHTML = "Delete"
        btn.setAttribute('class', "btn btn-dark")
        // $("btn").addClass("btn btn-dark")
        td9.append(btn);

        td1.innerHTML = d[i]["fname"];
        td2.innerHTML = d[i]["lname"];
        td3.innerHTML = d[i]["username"];
        td4.innerHTML = d[i]["password"];
        td5.innerHTML = d[i]["email"];
        td6.innerHTML = d[i]["address"];
        td7.innerHTML = d[i]["phone"];
        td8.innerHTML = d[i]["type"];

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
        // Calling Delete function
        td9.addEventListener('click', deleteData)
    }
    appendName(data)
}

// Appending First Name
function appendName(data) {
    $("#userOption").empty();
    var opt;
    for (var i = 0; i < data.length; i++) {
        opt = document.createElement('option');
        opt.textContent = data[i]["fname"];
        opt.value = data[i]["fname"];
        $("#userOption").append(opt);
    }
    
    $("#userOption").click(function(){
        // alert($("#userOption").val())
        var msg = ''
        var qq =  $("#userOption").val();
        console.log(qq);
        for(var i = 0; i < data.length; i++){
            if(data[i]["fname"] == qq){
                msg = `<div>
                            <div> Hello You are a ${data[i]["type"]}, welcome back </div>
                            <div> Your are loged as ${data[i]["fname"]}</div>
                            <div> Registered email is ${data[i]["email"]}</div>
                        </div>`
                break;    
            }
        }
        $('#message').html(msg);
    })
}

// Delete Function
function deleteData() {
    var ele = this.parentElement;
    ele.remove();
    var rmUser = ele.querySelectorAll("td")[2].innerHTML
    console.log(rmUser)
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]["username"])
        if (data[i]["username"] == rmUser) {
            data.splice(i, 1);
            break;
        }
    }
    // console.log(data)
    appendName(data)
}

// Select user type
$("#userType").change(function () {
    var selectedType = $("#userType").val()
    // console.log(selectedType)

    var sss = [];
    var flag = false;
    if (selectedType == "all") {
        sss = data
    }
    else {
        // for (let i = 0; i < data.length; i++) {
        //     if (data[i]["type"] == selectedType) {
        //         sss.push(data[i]);
        //         // displayUser();
        //     }
        // }
        sss = data.filter((user) => {
            return user.type == selectedType
        })
    }
    // console.table(sss)
    displayUser(sss)
})

// Sorting Whole Data of Table 
$("#userSort").click(function(){
    var sortUser = $("#userSort").val();
    console.log("sdsf " + sortUser);

    if(sortUser == "ascending"){
        data.sort(function(a,b){
            if(a.fname > b.fname){
                return 1
            }
            if(a.fname < b.fname){
                return -1
            }
            return 0;
        });
    }
    if(sortUser == "descending"){
        data.sort(function(a,b){
            if(a.fname > b.fname){
                return -1
            }
            if(a.fname < b.fname){
                return 1
            }
            return 0;
        });
    }
    displayUser(data)
    console.log("dfglshao " +data)
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              