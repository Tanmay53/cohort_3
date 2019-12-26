//user arr
var userArr = []


function User(fname, lname, uname, password, email, address, phoneNumber, type) {
    this.firstname = fname || "sakshi"
    this.lastname = lname || "sinha"
    this.username = uname || "sakshi_sinha"
    this.password = password || "sakshi26"
    this.email = email || "sakshi@gmail.com"
    this.address = address || "ranchi"
    this.phoneNumber = phoneNumber || 72789098789
    this.type = type
}

function btnSubmit()
{
    var fname = $("#fname").val()
    var lname = $("#lname").val()
    var uname = $("#uname").val()
    var password = $("#Password").val()
    var email = $("#email").val()
    var address = $("#address").val()
    var phoneNumber = $("#phoneNumber").val()
    var type = $("#type").val()
    var newuser= new User(fname, lname, uname, password, email, address, phoneNumber, type)
    // localStorage.setItem('db', JSON.stringify(newuser))
    //console.log(newuser)
    userArr.push(newuser)
    // console.log(userArr)
    userData(userArr);
}

function userData(userArr) {
    $('#user').empty()
    for (var i = 0; i < userArr.length; i++) {
        var opt = document.createElement('option');
       // opt.setAttribute('value', i)
        opt.textContent = userArr[i].username;
        $("#user").append(opt);
    }
}
 

$('#user').change(function() {
    var seloption = $('#user').val();
    // console.log(seloption)
    dropDown(seloption)
})




// ==========================dropdown and select=========================================
function dropDown(seloption) {
   // console.log(seloption)

    console.log(userArr)
    for(var i=0;i<=userArr.length-1 ;i++)
    {
        
        
        if(userArr[i].username==seloption)
        {
            un= userArr[i].username
            em= userArr[i].email
            mn=userArr[i].phoneNumber
            console.log(em)
               var doc = document.getElementById('userInfo')
    doc.innerHTML = `<div>
                           <div> Hello <b>${un}</b>, welcome back ... </div>
                           <div> Registered email is <b>${em}</b></div>
                           <div> Registered mobile no is <b>${mn}</div>
                    </div>`
        }
   }
 
}

// ==================show table btn======================================================
$('#btntable').click(function() {
    
    displayTable(userArr);
})


// =========================show tablee of user dataa==============================================

function displayTable(userArr)
{

    $('#table-body').empty();

    for (var i = 0; i <userArr.length; i++) {
        if (userArr[i] == null) {
            continue;
        }
        let tr = document.createElement('tr');

        var td = document.createElement('td');
        td.textContent =userArr[i].username;
        tr.append(td);
        var td = document.createElement('td');
        td.textContent = userArr[i].firstname;
        tr.append(td);
        var td = document.createElement('td');
        td.textContent = userArr[i].lastname;
        tr.append(td);
        var td = document.createElement('td');
        td.textContent = userArr[i].type;
        tr.append(td);
        var td = document.createElement('td');
        td.textContent = userArr[i].email;
        tr.append(td);
        var td = document.createElement('td');
        var del = document.createElement('button');
        del.setAttribute('class', 'btn btn-sm p-3 border border-dark btn-danger');
        del.setAttribute('id', i);
        del.textContent = 'Delete'
        del.addEventListener('click', function(btn) {
            var seloption = this.getAttribute('id');
            console.log(seloption)
            userArr[seloption] = null;
            displayTable(userArr);
            userData(userArr);
        })
        td.append(del);
        tr.append(td);
        
        $('#table-body').append(tr);
}
}

// ====================sorting=======================================

// $('#order').change(function(){
//     let order = $('#order').val()
//     let arr = []
//     console.log('order check')
//      if(order === 'asc'){
//       arr = userArr.sort((a,b)=> (a.username > b.username))
//     } 
//     else if(order === 'desc'){
//         arr = userArr.sort((a,b)=>(b.username > a.username))
//     }
//      displayTable(arr)
// })
