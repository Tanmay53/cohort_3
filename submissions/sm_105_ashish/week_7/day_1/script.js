$(document).ready(function(){
    
    getUserData()
    function getUserData(){
       //event.preventDefault()
        var apiData=null
        var xhr = new XMLHttpRequest(); 
        xhr.open('GET', 'https://reqres.in/api/users?page=2');
        xhr.send()
        xhr.onload = function (){
          if(xhr.status == 200){
              apiData=JSON.parse(xhr.response)
              console.log(apiData.data)
              saveData(apiData.data)
              
          }
          else{
              console.log("Error Code is:" + xhr.status)
          }
        }
    }
    //call-back function to save data
    var arr=[] 
    function saveData(input){
        event.preventDefault()
        input.forEach(function(ele){
            arr.push(ele.email)
        })
    }
        $('#submit1').click(function(){
            event.preventDefault()
            var inputEmail=$('#email').val()
            for(var i=0;i<arr.length;i++)  {
                if(inputEmail==arr[i]){
                    $('#display').append('<p>Login successfull for the user'+inputEmail+ '</p><br><p>token:#4582566avhshjs6454</p>')
                    $('#loginForm').hide()
                }

               
            }    
            
    
            })
 
  });