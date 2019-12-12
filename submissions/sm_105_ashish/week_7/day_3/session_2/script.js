$(document).ready(function(){
    
    getStudents()
    var studentsData=[]

    
    
    
    function getStudents(){
       //event.preventDefault()
       var students="http://localhost:8000/students"
        // var studentArr=null
        var xhr = new XMLHttpRequest(); 
        xhr.open('GET', students);
        xhr.send()
        xhr.onload = function (){
          if(xhr.status == 200){
              studentArr=JSON.parse(xhr.response)
            // console.log(studentArr,typeof(studentArr))
               saveData(studentArr)
             
             
              
          }
          else{
              console.log("Error Code is:" + xhr.status)
          }
        }
    }

    function saveData(std){
      std.forEach(function(ele){

        studentsData.push(ele)
      })
    }
    

    function appendTable(std){
       std.forEach(function(ele){
           console.log(ele)
            $("table").append("<tr><td scope='row'>"+ele.id+"</td><td>"+ele.first_name+"</td><td>"+ele.last_name+"</td><td>"+ele.email+"</td><td>"+ele.gender+"</td><tr>")
       })

        
    }
   
    appendTable(studentsData)
    console.log(studentsData)
})



