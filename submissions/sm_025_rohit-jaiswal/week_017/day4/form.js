
function setData(){
    var arr = JSON.parse(localStorage.getItem("arr"))
    if(!arr){
      arr = []
    }
    console.log(arr)
    var name = document.getElementById("name").value
    var excomp = document.getElementById("excomp").value
    var salary = document.getElementById("salary").value
    var design = document.getElementById("design").value
    var url = document.getElementById("url").value
    var obj = {name: name, excomp: excomp, salary: salary, design: design, url: url};
    arr.push(obj)
    localStorage.setItem("arr", JSON.stringify(arr))
  }

  function clearData(){
    console.log('clearing')
    localStorage.clear()
  }

  function displayEmp(){
    $('#cont1').hide()
    location="employee.html"
  }