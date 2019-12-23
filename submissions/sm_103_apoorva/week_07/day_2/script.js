function User(type, firstName, lastName, userName, password, email,  address, mobile)
{
    this.type = type;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.address = address || null;
    this.mobile = mobile || null;
}
var users = []
function add()
{ 
    //alert('Hi')
    type = document.getElementById("inputType")
    firstName = document.getElementById("firstName")
    lastName = document.getElementById("lastName")
    userName = document.getElementById("userName")
    password = document.getElementById("password")
    email = document.getElementById("email")
    address = document.getElementById("inputAddress")
    mobile = document.getElementById("mobile")

    if(firstName.value == "" || userName.value == "" || password.value == "" || type.value == "" || email.value == "")
    {
        alert("Fill firstname,username,password,type,email")
    }
    else{
        var  newUser = new User(type.value, firstName.value, lastName.value, userName.value, password.value, email.value, address.value, mobile.value)
        users.push(newUser)
    }
    
    console.log(newUser)
    console.log(users)
    firstName.value = ""
    lastName.value = ""
    userName.value = ""
    password.value = ""
    email.value = ""
    address.value = ""
    mobile.value = ""
}

function showUser()
{   
    $("#showUser").empty()
    users.forEach(function(elm)
    {
        //console.log(elm.firstName)
        $("#showUser").append("<option value=" + elm.userName + ">"+elm.userName+"</option>")
    })
}

$("#add").click(function(){
    event.preventDefault()
    $("#showUser").empty()
    add()
    showUser()
})

function fillInfo(user){
    return `<div>
                <div> Hello ${user.firstName}, welcome back </div>
                <div> Registered email is ${user.email}</div>
            </div>`
}

// var doc = document.getElementById('userInfo')
// doc.innerHTML = fillInfo(allUsers[0])

$("#showUser").change(function(){
    event.preventDefault()
    input1 = $(this).children("option:selected").val()
    users.forEach(function(elm){
        if(elm.userName == input1)
        {
            var doc = document.getElementById("display")
            doc.innerHTML = fillInfo(elm)
        }
    })
})

$("#userFilter").change(function()
{
    // input1 = document.getElementById("userFilter").value
    event.preventDefault()
    input1 = document.getElementById("userFilter").value
    alert(input1)
    if(input1 == "all")
    {
        $("#table").empty()
        users.forEach(function(elm){
            // var table = document.getElementById("table")
            // table.innerHTML = createTable(elm)
            $("#table").append(createTable(elm))
        })
    }

    else if(input1 == "user")
    {
        $("#table").empty()
        users.forEach(function(elm){
            if(elm.type == "user")
            {
                //console.log(elm)
                $("#table").append(createTable(elm))
            }
        })
    }
    else if(input1 == "admin")
    {
        $("#table").empty()
        users.forEach(function(elm){
            if(elm.type == "admin")
            {
                //console.log(elm)
                $("#table").append(createTable(elm))
            }
        })
    }

})

$("#userSort").change(function()
{
    event.preventDefault()
    input1 = document.getElementById("userSort").value
    // alert(input1)
    if(input1 == "asc")
    {
        $("#table").empty()
        var obj = toLower(users)
        console.log(obj)
        var res = ascSort(obj)
        res.forEach(function(elm){
            //console.log(elm)
            $("#table").append(createTable(elm))
        })

    }

    else if(input1 == "dsc")
    {
        $("#table").empty()
        var obj = toLower(users)
        console.log(obj)
        var res = dscSort(obj)
        res.forEach(function(elm){
            //console.log(elm)
            $("#table").append(createTable(elm))
        })
    }
})

function createTable(user)
{
    return `<tr>
    <td>${user.type}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.userName}</td>
    <td>${user.email}</td>
    <td>${user.address}</td>
    <td>${user.mobile}</td>
    <td><button type="button" id="delBtn" value="${user.userName}" class="btn del btn-danger">Delete</button></td>
</tr>`
}

function toLower(user)
{
    user.forEach(function(elm){
        elm.firstName = elm.firstName.toLowerCase()

        return elm
    })
    return user
}

function ascSort(user)
{
    //console.log('data is',user)
    user.sort(function(a,b)
    {
        nameA = a.firstName
        nameB = b.firstName 
        if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
    })
    return user
}

function dscSort(user)
{
    //console.log('data is',user)
    user.sort(function(a,b)
    {
        nameA = a.firstName
        nameB = b.firstName 
        if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          // names must be equal
          return 0;
    })
    return user
}



$(document).on("click",".del",function(){
    var del = $(this).val()
    console.log(del)
    var target = event.target
    var newTarget1 = target.parentElement
    var newTarget2 = newTarget1.parentElement
    newTarget2.remove()
    users.forEach(function(elm,index)
    {
        if(elm.userName == del)
        {
            console.log(elm.userName)
            var index1 = index
            console.log(index1)
            users.splice(index1,1)
        }
        return users
    })
    console.log(users)
    showUser(users)
})

