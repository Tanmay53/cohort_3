
// var details = {name:"Prakash", jobtitle: "Full Stack Developer", Salary:"50000", department: "Engineering" }
    var name = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    var jobtitle = document.getElementById("jobtitle").value;
    var department = document.getElementById("select_value").value;
    var details = {name:name, salary: salary, jobtitle: jobtitle, department: department}

function submit_details(){
    console.log("submit")
    var name = document.getElementById("name").value;
    var salary = document.getElementById("salary").value;
    var jobtitle = document.getElementById("jobtitle").value;
    var department = document.getElementById("select_value").value;
    var details = {name:name, salary: salary, jobtitle: jobtitle, department: department}
    console.log(details)
    add_details(details)
    eng_button(details)
    document.getElementById("name").value = ''
    document.getElementById("salary").value = ''
    document.getElementById("jobtitle").value = ''
    document.getElementById("select_value").value = ''
    
    
}

function add_details(details){
var tbl = document.getElementById("details");
var row = document.createElement("tr");
var col1 = document.createElement("td");
col1.textContent = details.name
var col2 = document.createElement("td")
col2.textContent = details.salary
var col3 = document.createElement("td")
col3.textContent = details.jobtitle
var col4 = document.createElement("td")
col4.textContent = details.department
row.appendChild(col1)
row.appendChild(col2)
row.appendChild(col3)
row.appendChild(col4)
tbl.appendChild(row)


}
