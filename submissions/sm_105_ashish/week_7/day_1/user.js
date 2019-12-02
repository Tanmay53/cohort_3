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
    var arrMail=[] 
    var fName=[]
    var lName=[]
    function saveData(input){
        event.preventDefault()
        input.forEach(function(ele){
            arrMail.push(ele.email)
            fName.push(ele.first_name)
            lName.push(ele.last_name)
        })
    }
        $('#a1').click(function(){
            event.preventDefault()
            $('#userShow').append("<tr><th scope='row'>1</th><td>"+fName[0]+"</td><td>"+lName[0]+"</td><td>"+arrMail[0]+"</td></tr>")   
         })
         $('#a2').click(function(){
            event.preventDefault()
            $('#userShow').append("<tr><th scope='row'>2</th><td>"+fName[1]+"</td><td>"+lName[1]+"</td><td>"+arrMail[1]+"</td></tr>")   
         })
         $('#a3').click(function(){
            event.preventDefault()
            $('#userShow').append("<tr><th scope='row'>3</th><td>"+fName[2]+"</td><td>"+lName[2]+"</td><td>"+arrMail[2]+"</td></tr>")   
         })
         $('#a4').click(function(){
            event.preventDefault()
            $('#userShow').append("<tr><th scope='row'>4</th><td>"+fName[3]+"</td><td>"+lName[3]+"</td><td>"+arrMail[3]+"</td></tr>")   
         })
         $('#a5').click(function(){
            event.preventDefault()
            $('#userShow').append("<tr><th scope='row'>5</th><td>"+fName[4]+"</td><td>"+lName[4]+"</td><td>"+arrMail[4]+"</td></tr>")   
         })
         $('#a6').click(function(){
            event.preventDefault()
            $('#userShow').append("<tr><th scope='row'>6</th><td>"+fName[5]+"</td><td>"+lName[5]+"</td><td>"+arrMail[5]+"</td></tr>")   
         })
         
 
  });