$(document).ready(function(){
    var dataArr = [];

    
    function User(firstName ,
                   lastName,
                   userName,
                   password ,
                   email ,
                   address ,
                   phoneNo ,
                   type )
                {
                       this.firstName = firstName;
                       this.lastName = lastName;
                       this.userName = userName;
                       this.password = password;
                       this.email = email;
                       this.address = address;
                       this.phoneNo = phoneNo;
                       this.type = type;
                }
    
    function createUser(){
        let fName = $('#fname').val();
        let lName = $('#lname').val();
        let uName = $('#userN').val();
        let pass = $('#pass').val();
        let email = $('#email').val();
        let add = $('#add').val() ;
        let phone = $('#phone').val();
        let userT = $('#uType').val();
        
        var user = new User(fName, lName, uName, pass, email, add, phone, userT);
        console.log(user);
        if(uName == '' ){
           alert('username cannot be blanked');
        }
        else if(pass == ''){
            alert('password cannot be blanked'); 
        }
        else if(email == ''){
            alert('email cannot be blanked');
        }else{
            dataArr.push(user);
        }
        
        console.log(dataArr);
    }

    function appendInTable(arr){
        $('#tBody').empty();
          let i = 1;
          arr.forEach(function(ele){
              
              $('#tBody').append(`<tr>
                                  <td>${i++}</td>
                                  <td>${ele.firstName} ${ele.lastName}</td>
                                  <td>${ele.userName}</td>
                                  <td>${ele.email}</td>
                                  <td>${ele.phoneNo}</td>
                                  <td>${ele.address}</td>
                                  <td>${ele.type}</td>
                                  <td><button class="btn btn-primary">Delete</button></td>
                                  </tr>`)
          });
    }

    function appendUser(arr){
        $('#selectUser').append("<option value=''>Select</option>");
        arr.forEach(function(ele) {
            $('#selectUser').append("<option value="+ele.firstName+">"+ele.firstName+" "+ele.lastName+"</option>");
        })
    }
    
    

    function displayInfo(arr){
    
          
          arr.forEach(function(ele){
            
              if($('#selectUser').val() == ele.firstName && ele.type == 'User'){
                $('#userDetails').empty();
               $('#userDetails').append(`<div class="text-center text-success">
                                            <h1>Name -${ele.firstName} ${ele.lastName}</h1>
                                            Phone - ${ele.phoneNo},
                                            Email - ${ele.email},
                                            User Type - ${ele.type}
                                            </div>`);
              }
              if($('#selectUser').val() == ele.firstName && ele.type == 'Admin'){
                  $('#userDetails').empty();
                  $('#userDetails').append(`<div class="text-center text-success" >

                                            <h1>Name - ${ele.firstName} ${ele.lastName}</h1>
                                             Email - ${ele.email},
                                             User Type - ${ele.type}
                                            </div>`);
              }
          });
    }

    $('#selectUser').change(()=>{displayInfo(dataArr)});

    function filterUsers(arr){
        $('#tBody').empty();
        let selectType = $('#filter').val();
        let i =1;
        arr.forEach((ele) => {
            if(selectType == 'User' && ele.type =='User'){
                $('#tBody').append(`<tr>
                <td>${i++}</td>
                <td>${ele.firstName} ${ele.lastName}</td>
                <td>${ele.userName}</td>
                <td>${ele.email}</td>
                <td>${ele.phoneNo}</td>
                <td>${ele.address}</td>
                <td>${ele.type}</td>
                <td><button class="btn btn-primary">Delete</button></td>
                </tr>`)
            }
            if(selectType == 'Admin' && ele.type == 'Admin'){
                $('#tBody').append(`<tr>
                <td>${i++}</td>
                <td>${ele.firstName} ${ele.lastName}</td>
                <td>${ele.userName}</td>
                <td>${ele.email}</td>
                <td>${ele.phoneNo}</td>
                <td>${ele.address}</td>
                <td>${ele.type}</td>
                <td><button class="btn btn-primary">Delete</button></td>
                </tr>`)
            }
            if(selectType == 'All'){
                $('#tBody').append(`<tr>
                <td>${i++}</td>
                <td>${ele.firstName} ${ele.lastName}</td>
                <td>${ele.userName}</td>
                <td>${ele.email}</td>
                <td>${ele.phoneNo}</td>
                <td>${ele.address}</td>
                <td>${ele.type}</td>
                <td><button class="btn btn-primary">Delete</button></td>
                </tr>`)
            }

        });
        
    }
    
    
    $('#filter').change(() => {filterUsers(dataArr)});

    function sortUser(arr){
        var newArr = [];
        
         let selectType = $('#filter').val();
        if(selectType == 'All'){
             newArr = arr.map(function(ele){
                 return ele;
             })
        }
        if(selectType = 'User'){
            newArr = arr.filter(function(ele){
               return ele.type == 'User';
            })
        }
        if(selectType == 'Admin'){
            newArr = arr.filter(function(ele){
                return ele.type == 'Admin';
            })
        }
        let order = $('#sort').val();
        if(order == 'asc'){
        
            newArr.sort(function(a, b) {
                if (a.userName < b.userName) {
                  return -1;
                }
                if (a.userName > b.userName) {
                  return 1;
                } else {
                  return 0;
                }
              });
              console.log(newArr);
              appendInTable(newArr);
              
        }
        if(order == 'des'){
        
            newArr.sort(function(a, b) {
                if (a.userName > b.userName) {
                  return -1;
                }
                if (a.userName < b.userName) {
                  return 1;
                } else {
                  return 0;
                }
              });
              console.log(newArr);
              appendInTable(newArr);
        }
    }
    $('#sort').change(() => {sortUser(dataArr)})


    $('#submit').click(function(){
        event.preventDefault();
        $('#selectUser').empty();
        $('#tBody').empty();
        createUser();
        appendInTable(dataArr);
        appendUser(dataArr);
    });
})
