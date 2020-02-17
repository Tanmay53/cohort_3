var count = 1
// var countSelect = 1

// constructor
function AllData(empName, companyName, salary, designation) {
  this.empName = empName,
    this.companyName = companyName,
    this.salary = salary,
    this.designation = designation
}

// taking input value
clicked = (e) => {

  var empName = document.getElementById('empName').value
  var companyName = document.getElementById('companyName').value
  var salary = document.getElementById('salary').value
  var designation = document.getElementById('designation').value



  let data = new AllData(empName, companyName, salary, designation)
  // const data = (allData.empName, allData.companyName, allData.salary, allData.designation)

  if (empName == "" || companyName == "" || salary == "" || designation == "") {
    alert("Input field mandatory")
  }
  else {

    var empData = JSON.parse(localStorage.getItem("data"))
    if (empData == null) {
      empData = []
    }

    empData.push(data);
    console.log(empData)

    localStorage.setItem("data", JSON.stringify(empData))
  }


}
var take = JSON.parse(localStorage.getItem("data"))

// console.log(take.data)



$(document).ready(function (e) {
  $("#showList").click(function (e) {
    e.preventDefault()
    alert("Hello")
    $("#formHide").hide();
    $("id2").hide()
    var count = 1
    take.forEach((ele, i) => {
      $('#id1').append(`<div id="allDetailsHide${i}" class="container-fluid p-5 m-2 d-flex flex-row justify-content-center">
      <h1 class="text-center">${count++ + "."}</h1>
        <div class="col">
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="https://image.shutterstock.com/image-vector/business-man-icon-260nw-1009389559.jpg" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${ele["companyName"]}</h5>
              <p class="card-text">${ele["empName"]}</p>
              <p class="card-text">${ele["salary"]}</p>
              <p class="card-text">${ele["designation"]}</p>
              <button type="button" onclick="delEmp1(${i})" class="btn btn-outline-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>`)

    })
  });
});

// sort by salary
function sortby() {
  alert("Sort")
  take.sort((a, b) => {
    return a.salary - b.salary
  })
  console.log(take)
  $("#allDetailsHide").hide();
  $("#id1").hide()
  $("#formHide").hide()
  count = 1
  take.forEach((ele, i) => {
    $('#id2').append(`<div id="sortBySalary${i}" class="container-fluid p-5 m-2 d-flex flex-row justify-content-center">
    <h1>${count++ + "."}</h1>
    <div class="col">
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="https://image.shutterstock.com/image-vector/business-man-icon-260nw-1009389559.jpg" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${ele["companyName"]}</h5>
          <p class="card-text">${ele["empName"]}</p>
          <p class="card-text">${ele["salary"]}</p>
          <p class="card-text">${ele["designation"]}</p>
          <button type="button" onclick="delEmp2(${i})" class="btn btn-outline-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>`)
  })
}


// filter by Company Name


function selectCompany() {

  var selectVal = document.getElementById("selectValue").value
  console.log(selectVal)
  var selectComp = [...take]
  // console.log(selectComp)
  // var count = 1
  selectComp2 = selectComp.filter(ele => {
    // console.log(selectComp2)
    return ele.companyName == selectVal

  })
  $("#allDetailsHide").hide();
  $("#id1").hide()
  $("#formHide").hide()
  selectComp2.forEach((ele, i) => {
    $('#id3').append(

      `
      <div id="filterDelete${i}">
      <div id="filterDelete" class="container-fluid p-5 m-2 d-flex flex-row justify-content-center">
    <h1>${count++ + "."}</h1>
    <div class="col">
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="https://image.shutterstock.com/image-vector/business-man-icon-260nw-1009389559.jpg" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${ele["companyName"]}</h5>
          <p class="card-text">${ele["empName"]}</p>
          <p class="card-text">${ele["salary"]}</p>
          <p class="card-text">${ele["designation"]}</p>
          <button type="button" onclick="delEmp3(${i})" class="btn btn-outline-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>`)
    console.log(count)
    
  })
  console.log(count)
}

// delete function


function delEmp1(e) {
  $("#allDetailsHide"+e).remove()
  alert("remove from all data")
}
function delEmp2(e) {
  $("#sortBySalary"+e).remove()
  alert("remove from sorted data")
}
function delEmp3(e) {
  $("#filterDelete"+e).remove()
  alert("remove from company data")
}