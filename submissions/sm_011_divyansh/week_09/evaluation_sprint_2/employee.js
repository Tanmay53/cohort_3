var employeeData = []

var name = document.getElementById("name")
var title = document.getElementById("title")
var salary = document.getElementById("salary")
var dept = document.getElementById("dept")
var get = document.getElementById("get")
var submit = document.getElementById("submit")
get.addEventListener("click", takeInput)
submit.addEventListener("click", showData)

function employees(name, title, salary, dept) //creating an object constructor
{
    this.name = name,
        this.title = title,
        this.salary = salary,
        this.dept = dept
}
function takeInput()  //function to take input
{
    var data1 = name.value;
    var data2 = title.value;
    var data3 = salary.value;
    var data4 = dept.value;
    var employee = new employees(data1, data2, data3, data4)
    employeeData.push(employee)
    alert("Your Data is added successfully to database!!You can also add more data")
    console.log(employeeData)
    reset()




}

function reset() //function to clear the feilds
{
    name.value = "";
    title.value = "";
    salary.value = "";

}
function showData() //function to display the result data
{
    var total = 0
    employeeData.map(function (ele) {
        return total += Number(ele.salary)
    })
    console.log(total)
    document.getElementById("display").innerHTML = "total salary is Rs " + total + " and average is Rs " + (total / employeeData.length)
   
    I
}

