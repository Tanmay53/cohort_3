// UI variables
let btn = document.querySelector('#btn');
let Email = document.querySelector('#email');
let Pass = document.querySelector('#password');
let username = document.querySelector('#user-name');
let Num = document.querySelector('#number');
let SelectBox = document.querySelector('#select-box');
let output = document.querySelector('#output');
var tableOutput = document.querySelector('#tableOutput');
// Create select box
var select = document.createElement('select');
select.classList.add("py-2", "px-5", "bg-dark", "text-white", "rounded","mb-4")
// create a table
var table = document.createElement('table')
// declare an array
var usersArr = [];

// Create an object of user
function User(
  email,
  password,
  userName,
  num,
  selectValue
  ) {
    this.email = email;
    this.password = password;
    this.userName = userName;
    this.number = num;
    this.type = selectValue; 
  }
  
  // function for create user
  function creatUser() {
    let email = Email.value;
    let pass = Pass.value;
    let userName = username.value;
    let num = Num.value;
    let selectBox = SelectBox.value;
    // console.log(fName,lName,email,pass,userName,num,selectBox)
    
    var firstUser = new User(email, pass, userName, num, selectBox)
    usersArr.push(firstUser)
    console.log(usersArr)
}
// Add EventListener on button
btn.addEventListener('click', user);

function user(e) {
  e.preventDefault();
  creatUser()
  // Add option in select box
  select.innerHTML += `
                        <option value="${username.value}">${username.value}</option>
  `
  output.appendChild(select)
  // Add event listener on select box
  select.addEventListener('change', showUserDetails)                   
  // clear data
  Email.value = ''
  Pass.value = ''
  username.value = ''
  Num.value = ''
  SelectBox.value = ''
}

function showUserDetails() {
  table.innerHTML = ''
  // console.log("value is "+select.value)
  // console.log(table.innerHTML)
  if (table.innerHTML == '') {
    table.innerHTML = `
                        <tr class="bg-dark text-white">
                          <th class="py-2 px-4">Email</th>
                          <th class="py-2 px-4">Password</th>
                          <th class="py-2 px-4">User Name</th>
                          <th class="py-2 px-4">Phone</th>
                          <th class="py-2 px-4">Type</th>
                        </tr>                  
    `
    tableOutput.appendChild(table)
  }
    usersArr.forEach(function (val) {
      // console.log('hel'+val.email,val.password,val.userName,val.number,val.type)
      if (select.value == val.userName) {
        table.innerHTML += `
                            <tr class="">
                              <td class="py-2 px-4">${val.email}</td>
                              <td class="py-2 px-4">${val.password}</td>
                              <td class="py-2 px-4">${val.userName}</td>
                              <td class="py-2 px-4">${val.number}</td>
                              <td class="py-2 px-4">${val.type}</td>
                            </tr> 
        `
        tableOutput.appendChild(table)
      }
    })
  
    
}