       // Global variables

       var allUser = []
        
       // object to hold user data based on a key 
       var userDict


       function buildDictionary() {
           userDict = {}
           for(let i = 0; i < allUser.length; i++) {
               if(userDict[allUser[i].username] == undefined) {
                   userDict[allUser[i].username] = [{
                                                       'firstName' : allUser[i].firstName, 
                                                       'lastName' : allUser[i].lastName, 
                                                       'username' : allUser[i].username,
                                                       'password' : allUser[i].password,
                                                       'email'    : allUser[i].email,
                                                       'address'  : allUser[i].address,
                                                       'phone'    : allUser[i].phone,
                                                       'type'     : allUser[i].type
                                                   }]
               }
               else {
                   userDict[allUser[i].username].push({
                                                       'firstName' : allUser[i].firstName, 
                                                       'lastName' : allUser[i].lastName, 
                                                       'username' : allUser[i].username,
                                                       'password' : allUser[i].password,
                                                       'email'    : allUser[i].email,
                                                       'address'  : allUser[i].address,
                                                       'phone'    : allUser[i].phone,
                                                       'type'     : allUser[i].type
                                                   })
               }
               
           }
           console.log(userDict)
       }

       function createUser(fname, lname, username, password, email, address, phone, type) {
           let userObj = {}
           userObj.firstName = fname;
           userObj.lastName  = lname;
           userObj.username  = username;
           userObj.password  = password;
           userObj.email     = email;
           userObj.address   = address;
           userObj.phone     = phone;
           userObj.type      = type;

           return userObj
       }

       function addUserToDropDown(user) {
           $('#selUser').append(`<option value=${user.email}>${user.email}</option>`)
       }

       function addUser(user) {
           for(let i = 0; i < allUser.length; i++) {
               if(allUser[i].username == user.username)
                   return false
           }

           allUser.push(user)
           return true;
       }


       function checkForSanitation() {
           if($('#txtUsername').val() == "") {
               alert('Please enter username !')
               $('#txtUsername').focus()
               return false
           }
           if($('#txtPassword').val() == "") {
               alert('Please enter password !')
               $('#txtPassword').focus()
               return false
           }
           if($('#txtEmail').val() == "") {
               alert('Please enter email !')
               $('#txtEmail').focus()
               return false
           }
           if($('#selType').val() == "--") {
               alert('Please select user role !')
               $('#setType').focus()
               return false
           }

           return true

       }
       function fillInfo(user){
       return `    
                   <h3>Hello, ${user.type}</h3>
                   <table>
                   <tr>
                       <td><b>Fullname : </b></td>
                       <td>${user.firstName + ' ' + user.lastName}</td>
                   <tr>
                   <tr>
                       <td><b>Username : </b></td>
                       <td>${user.username}</td>
                   <tr>
                   <tr>
                       <td><b>Email : </b></td>
                       <td>${user.email}</td>
                   <tr>
                   <tr>
                       <td><b>Address : </b></td>
                       <td>${user.address}</td>
                   <tr>
               </table>`
       }

       function deleteUser(email) {
           //alert(email)
           let temp = []
           for(let i = 0; i < allUser.length; i++) {
               if(allUser[i].email != email)
                   temp.push(allUser[i])
           }

           // reassign new arr
           allUser = temp
           populateTable()
       }

       function populateTable() {
           // organize username and data to
           // ease the proces

           buildDictionary()

           let sortedUsernames = Object.keys(userDict).sort()
           if($('#idOrder').val() == 'dsc')
               sortedUsernames.reverse()

           var role = $('#idRole').val()
           var rows = ''
           let index = 0
           for(let i = 0; i < sortedUsernames.length; i++) {
               let users = userDict[sortedUsernames[i]]
               for(let j = 0; j < users.length; j++) {
                   // role filter applied here
                   if(role != '--') {
                       if(users[j].type != role)
                           continue
                   }

                   index++
                   rows = rows + `<tr>
                               <td>${index}</td>
                               <td>${users[j].username}</td>
                               <td>${users[j].email}</td>
                               <td>${users[j].type}</td>
                               <td><a href='#' onclick=deleteUser('${users[j].email}')>Delete</a></td>
                               </tr>`
                   }
               }
           // append table to the page
           var table = `<table class='table'>
                           <tr>
                               <th>S.No.</th> <th> Username </th> <th>Email </th><th> Role </th> <th>Action</th>
                               ${rows}
                           </tr>
                       </table>
                       `
           $('#display').html(table)                        
       }

       function clearControls() {
           $('#txtFirstname').val("")
           $('#txtLastname').val("")
           $('#txtUsername').val("")
           $('#txtPassword').val("")
           $('#txtEmail').val("") 
           $('#txtAddress').val("")
           $('#txtPhone').val("")
           $('#selType').val("")

           $('#txtFirstname').focus()
       }

       $(document).ready(function(){
           // order by useranme
           $('#idOrder').change(function(){
               // poppuate data again
               populateTable()
           })

           // apply filter
           $('#idRole').change(function(){
               // poppuate data again
               populateTable()
           })


           $('#selUser').change(function(){
               allUser.forEach(function(user){
                   if(user.email == $('#selUser').val())
                      $('#info').html(fillInfo(user))
               })
           })

           $('#btnSubmit').click(function(){
               // basic hygine
               if(! checkForSanitation())
                   return
               
               let fname   = $('#txtFirstname').val() == "" ? 'ABC' : $('#txtFirstname').val()
               let lname   = $('#txtLastname').val() == "" ? 'XYZ' : $('#txtLastname').val()
               let uname   = $('#txtUsername').val()
               let passwd  = $('#txtPassword').val()
               let email   = $('#txtEmail').val() 
               let address = $('#txtAddress').val() == "" ? 'xxx xxx xxx' : $('#txtAddress').val()
               let phone = $('#txtPhone').val() == "" ? 'xxx-xxx-xxx' : $('#txtPhone').val()
               let group   = $('#selType').val()

               let user = createUser(fname, lname, uname, passwd, email, address, phone, group)
               //allUser.push(user)
               if(addUser(user) == false) {
                   alert('Username already taken !!')
                   return
               }
               addUserToDropDown(user)

               // build a dictioany : it whill ease the task of sorting
               populateTable()
               clearControls()
               console.log(user)
           })
       })