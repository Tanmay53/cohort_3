

// var allData ={
//     empName :"",
//     companyName:"",
//     salary : "",
//     designation :""
// }


// constructor
function AllData(empName, companyName, salary, designation) {
    this.empName = empName,
        this.companyName = companyName,
        this.salary = salary,
        this.designation = designation
}


clicked = (e) => {

    var empName = document.getElementById('empName').value
    var companyName = document.getElementById('companyName').value
    var salary = document.getElementById('salary').value
    var designation = document.getElementById('designation').value
    // console.log(empName)



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

console.log(take.data)


take.forEach(ele => {
    for(let key in ele){
        companyName.innerHtml = ele[companyName]
        empName.innerHtml = ele[empName]
        salary.innerHtml = ele[salary]
        designation.innerHtml = ele[designation]

    }
});

   $(document).ready(function(e){
    $("#showList").click(function(e){
        e.preventDefault()
      alert("Hello")
      take.forEach(ele => {
        $('#showList').append(`<div class="container-fluid p-5 m-2 d-flex flex-row justify-content-center">
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
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>`)
      })
    });
  });

