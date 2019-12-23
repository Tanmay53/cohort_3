$(document).ready(function(){

    var userDatabase=[]
    //creating constructor function to add new user.
        function AddNewUser(firstName,lastName,userName,password,email,address,userType){
        this.firstName = firstName || null;
        this.lastName = lastName || null;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.address = address || null;
        this.userType = userType;
    }

    //Maikingfn a function to create a  new user and push it in the userDataBase

    function createUser() {
        var fName = $("#fName").val()
        var lName = $("#lName").val()
        var userName = $("#userName").val()
        var password = $('#inputPassword').val()
        var email = $('#email').val()
        var address = $('#address').val()

        var usertype;
        if (document.getElementById('checkRadios1').checked == true) {
            usertype = "admin";
        } else {
            usertype = "user";
        }
      
        var user = new AddNewUser(fName,lName,userName,password,email,address,usertype)
       if(userName == '' || email == ''){
           alert('user name or email can not be left blank.')
       }
       else{
         if(userDatabase.length == 0){
          userDatabase.push(user)
         }
         else{
           userDatabase.forEach(function(ele){
             if(ele.userName == userName || ele.email == email){
               alert('email or userName already taken')
             }
             else{
              userDatabase.push(user)
             }
           })
         }
             
       }
      
      }
      //creating a function to append username on the show data select menu
     // console.log(userDatabase)
      function appendUser(arr){
          arr.forEach(function(ele){
            $('#userSelect').append("<option value="+ele.userName+">"+ele.firstName+" ("+ele.userName+")</option>")
          })
      }

    //creating callback function to append partucular uesr on selecting the user.

    function showUser(input,arr){
     arr.forEach(function(ele){
         if(input == ele.userName){
             if(ele.userType == 'user'){
                $('#displayBox').append(`<p>Welcome ${ele.firstName} </p>
                <p>Your user Name is ${ele.userName} </p>
                <p>your email id is ${ele.email} </p>`)
             }
             else{
                $('#displayBox').append(`<div class = "bg-info border"><p>Welcome ${ele.firstName} </p>
                <p>Your user Name is ${ele.userName} </p>
                <p>your email id is ${ele.email} </p>
                <p>You are part of development adminstration team </p></div>`)
             }
             
         }
     })

    }
  //creating a function to show the data on the table according to the given filter menu.
    function ShowTable(input1,arr){
      arr.forEach(function(ele){
          if(input1 == 'all'){
               $('#tableFill').append(fillTable(ele))
          }
           else if(input1 == 'user'){
               if(ele.userType == 'user'){
                $('#tableFill').append(fillTable(ele))
               }
           }
           else {
            if(ele.userType == 'admin'){
                $('#tableFill').append(fillTable(ele))
            }
           }
      })
    }
    //creating a call back function to empty form

    function formReset(){
       $("#fName").val('')
       $("#lName").val('')
       $("#userName").val('')
       $('#inputPassword').val('')
       $('#email').val('')
       $('#address').val('')
      document.getElementById('checkRadios1').checked = false
    }
    //creating a callback function to fill table

    function fillTable(ele){
        return `<tr><td>${ele.userType}</td><td>${ele.firstName}</td><td>${ele.lastName}</td><td>${ele.userName}</td><td><button class="bg-light text-danger del" value=${ele.userName}>X</button><td></tr>`
    }

    //creating a function to sort the table data according to ascending  of userNames
     function ascendingSort(input){
      input.sort(function(a, b){
        var nameA=a.userName.toLowerCase(), nameB=b.userName.toLowerCase()
        if (nameA < nameB) //sort string ascending
            return -1 
        if (nameA > nameB)
            return 1
        return 0 //default return value (no sorting)
    })
   }

    //creating a function to sort the table data according to ascending  of userNames
    function desscendingSort(input){
        input.sort(function(a, b){
          var nameA=a.userName.toLowerCase(), nameB=b.userName.toLowerCase()
          if (nameA > nameB) //sort string ascending
              return -1 
          if (nameA < nameB)
              return 1
          return 0 //default return value (no sorting)
      })
    }
     

     //creatng a function to delete particular user from our user database
     function filterArray(arr,val){
      var removeIndex = arr.map(function(item) { return item.userName;}).indexOf(val);
      arr.splice(removeIndex, 1);
      return arr
     }

      $('#addUser').click(function(){
          event.preventDefault()
          $('#userSelect').empty()
          createUser()
          appendUser(userDatabase)
          formReset()
         // console.log(userDatabase)
      });
      $('#userSelect').change(function(){
        var eachuser=$('#userSelect').val()
        $('#displayBox').empty()
        showUser(eachuser,userDatabase)
       // alert('done')
      })

      $('#userTypefilter').change(function(){
        $('#tableFill').empty()
        $('#displayBox').empty()
         var filtertype = $('#userTypefilter').val()
         ShowTable(filtertype,userDatabase)
         //alert(filtertype)
      })

      $('#userTypesort').change(function(){
        $('#tableFill').empty()
        $('#displayBox').empty()
          var myval = $('#userTypesort').val()
          if(myval =='asc'){
              //alert(myval)
          ascendingSort(userDatabase)
            ShowTable('all',userDatabase)
          }
          else{
            desscendingSort(userDatabase)
            ShowTable('all',userDatabase)
          }
          //alert('good')
      });
      $(document).on('click','.del',function(){
        $('#userSelect').empty()
        var deluser = $('.del').val()
        var target=event.target
        var parent= target.parentElement
        var parent=parent.parentElement
        parent.remove()
        filterArray(userDatabase,deluser)
        //console.log(userDatabase)
        appendUser(userDatabase)
      })
      
})
