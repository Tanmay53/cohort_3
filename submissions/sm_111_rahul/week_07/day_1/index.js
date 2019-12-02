$(document).ready(function(){
    $('#login').click(function(){
      submitData();
    })
  });
 var obj ={};
 function submitData(){
 var xhr = new XMLHttpRequest();

  xhr.open(
    "POST",'https://reqres.in/api/users?page=2');
  xhr.send();
  xhr.onload = function() {
    if (xhr.status == 200) {
      
         console.log(obj)
    } else {
      console.log("Error code is :" + xhr.status);
    }
  };
}  