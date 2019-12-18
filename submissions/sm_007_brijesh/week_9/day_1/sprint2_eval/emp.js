function emp_info() {
    document.getElementById("pName").innerHTML = document.getElementById("name").value
    document.getElementById("pJobtitle").innerHTML = document.getElementById("jobtitle").value
    document.getElementById("pSalary").innerHTML = document.getElementById("salary").value
    document.getElementById("pDept").innerHTML = document.getElementById("dept").value


    document.getElementById("jName").innerHTML=document.getElementById("name").value
    document.getElementById("jJobtitle").innerHTML=document.getElementById("jobtitle").value
    document.getElementById("jSalary").innerHTML=document.getElementById("salary").value
    document.getElementById("jDept").innerHTML=document.getElementById("dept").value


    var tot_sal;
    var avg_sal;
 var sal=document.getElementById("salary").value;
 for(var i=0;i<sal.length;i++){
     tot_sal=sal[i]
 }
avg_sal=tot_sal/i

console.log(avg_sal,tot_sal)


}

function reset() {
    document.getElementById("name").value = " "
    document.getElementById("jobtitle").value = " "
    document.getElementById("salary").value = " "
    document.getElementById("dept").value = " "
    document.getElementById("pName").innerHTML = " "
    document.getElementById("pJobtitle").innerHTML = " "
    document.getElementById("pSalary").innerHTML = " "
    document.getElementById("pDept").innerHTML = " "

    document.getElementById("jName").innerHTML=" "
    document.getElementById("jJobtitle").innerHTML=" "
    document.getElementById("jSalary").innerHTML=" "
    document.getElementById("jDept").innerHTML=" "



}