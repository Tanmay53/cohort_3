
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
    var user = JSON.parse(localStorage.getItem("arr"))
    console.log(user)
    user.forEach(evrObj => {
      let card = `<div class="card" style="width: 18rem;">
                <img src="${evrObj.url}" height="100px" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title"><b>${evrObj.name}</b></h5>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Previous Salary:</b>${evrObj.salary}</li>
                <li class="list-group-item"><b>Designation :</b>${evrObj.design}</li>
                <li class="list-group-item"><b>Previous Employer:</b>${evrObj.excomp}</li>
              </ul>
              <div class="card-body">
              <a href="#" class="card-link">Delete</a>
            </div>
                </div>`
              
                $("#thatDiv").append(card)
       
    })
      }

  
  