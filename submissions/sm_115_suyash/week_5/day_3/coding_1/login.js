// UI variables decalare
var userName = document.querySelector('#username');
var pass = document.querySelector('#password');
var btn = document.querySelector('#btn');
// console.log(pass.value, userName.value)

// Set Item to local storage
function setItemToLs(obj) {

  // console.log(obj)
  var val = JSON.stringify(obj)
  // console.log(val)
  localStorage.setItem('obj', val);
  var getObj = JSON.parse(localStorage.getItem('obj'))
  // console.log(getObj)
  if (val == getObj) {
    
  }
}

// add event listener
btn.addEventListener('click', creatObj)
// create an object
function creatObj(e) {
  e.preventDefault()
  var obj = {
    'name': userName.value,
    'pasword': pass.value
  };
  setItemToLs(obj)
}

// Get Item from local storage