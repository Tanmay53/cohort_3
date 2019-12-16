var employee={
    name:["A","B","C","D"],
    jobtitle:[24,25,24,25],
    salary:[90000,60000,50000,40000],
    Department:"Engineering"
}

function display1(employee)
{
   var sum=0
    var average
    for(keys in employee.salary)//looping through salary values
    {
        console.log(keys)
        sum=sum+employee.salary[keys]
    }
    console.log(sum)

    var len=(employee.salary).length
    console.log(len)

    average=sum/len;
    console.log(average)
    return average
   
    var average=document.getElementById("avgSal1").value
    alert("avgSal1");
    console.log(average)
}

display1(employee)