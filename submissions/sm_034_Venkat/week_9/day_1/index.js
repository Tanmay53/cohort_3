var employees= [Person()];
function submit() {
    // function Person(name, job, salary, dept) {
    //     this.name= name;
    //     this.job= job;
    //     this.salary= salary;
    //     this.dept= dept;
    // }
}
function reset() {
    document.getElementById("name").value= ""
    document.getElementById("title").value= ""
    document.getElementById("salary").value= ""
    document.getElementById("deptSelect1").value= ""
}
// function catShow() {
//     var c= document.getElementById("cat").value;
//     var arr= document.querySelectorAll(c).value;
//     var total= 0;
//     var l= arr.length
//     for(i= 0; i< l; i++) {
//         var total= 0;
//     }
//     var avg= total/ l;
//     document.getElementById("sum").innerHTML= total;
//     document.getElementById("average").innerHTML= avg;
// }