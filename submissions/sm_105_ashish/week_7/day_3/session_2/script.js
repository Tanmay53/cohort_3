$(document).ready(function(){
    var studentsData=[]
    getStudents()   
    function getStudents(){
       var students="http://localhost:8000/students"
        var studentArr=null
        var xhr = new XMLHttpRequest(); 
        xhr.open('GET', students);
        xhr.send()
        xhr.onload = function (){
          if(xhr.status == 200){
              studentArr=JSON.parse(xhr.response)
                 saveData(studentArr)
          }
          else{
              console.log("Error Code is:" + xhr.status)
          }
        }
    }
    //creating a callback function to save the json data into an array.
    function saveData(std){
      std.forEach(function(ele){
        studentsData.push(ele)
      })
    }
    //creating a function to add total marks on our student database
    function addTotal(arr){
      arr.forEach(function(ele){
        let total=0;
        total=ele.science+ele.maths+ele.english
        ele.total=total;
      })
    }
    //creating a callback function to append table according to given index 
    function appendTable(std,selectVal,pageVal){
      for(let i=(pageVal-1)*selectVal;i<pageVal*selectVal;i++) 
       {
            $("#tableData").append(appendSortedTable(std[i]))
          }
      }
     // creating a function to append page no in the selcet menu.
      function appendPage(val){
        for(let i=1;i<=100/val;i++){
          $('#myPageSelect').append(`<option class="dropdown-item" value=${i}>${i}</option>`)
        }
      }
      $('#myselect').change(function(){
        $("#tableData").empty()
        $('#myPageSelect').empty()
        addTotal(studentsData)
        if($('#myselect').val() == 100){
          appendTable(studentsData,100,1)
          appendPage(100)       
        }
        else{
          appendPage($('#myselect').val())
        }
      })
      $('#myPageSelect').change(function(){
        $("#tableData").empty()
        var pageValue =$('#myPageSelect').val()
        var selectValue=$('#myselect').val()
        appendTable(studentsData,selectValue,pageValue)
      })
      $('#searchInput').on('keyup',function(){
        $("#tableData").empty()
        var query = $("#searchInput").val().toLowerCase()
        studentsData.forEach(function(ele){
          if(ele.first_name.toLowerCase().includes(query)||ele.last_name.toLowerCase().includes(query)||ele.email.toLowerCase().includes(query)){
            $("#tableData").append(appendSortedTable(ele))
          }
        })
      })
      function appendSortedTable(val1){
        return (`<tr><td scope='row'>${val1.id}</td><td>${val1.first_name}</td><td>${val1.last_name}</td><td>${val1.email}</td><td>${val1.gender}</td><td>${val1.english}</td><td>${val1.maths}</td><td>${val1.science}</td><td>${val1.total}</td><tr>`)
      }
      $('#genderValue').change(function(){
        $("#tableData").empty()
        studentsData.forEach(function(ele){
          if($('#genderValue').val().toLowerCase() == ele.gender.toLowerCase()){
            $("#tableData").append(appendSortedTable(ele))
          }
        })
        alert('done')
        
      })
})



