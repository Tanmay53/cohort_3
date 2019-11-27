

function sgrader(arr1){
    for (i=0;i<arr1.length;i++){
        xyz=""
        
        if (students[i].marks > 90){
            xyz="A"
        } 
        if (students[i].marks <= 90 && students[i].marks > 80){
            xyz="B"
        } 
        if (students[i].marks <= 80 && students[i].marks > 60){
            xyz="C"
        } 
        if (students[i].marks <= 60 && students[i].marks > 40){
            xyz="D"
        } 
        if (students[i].marks <= 40){
            xyz="F"
        }
        students[i].grade=xyz 
    }
    console.log(arr1)
}
students = [ {name:'Albert', marks:70},{name:'Pogo', marks:60},{name:'Lalit', marks:100},{name:'Linus', marks:05}]
sgrader(students)
// console.log(typeofstudents[0].marks)