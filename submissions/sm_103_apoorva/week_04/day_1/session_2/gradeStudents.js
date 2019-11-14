students = [ 
            {name:'Apoorva', marks:70},
            {name:'Amitosh', marks:60},
            {name:'Ayush', marks:92},
            {name:'Nilesh', marks:54},
            {name:'Akash', marks:42},
            {name:'Amrendra', marks:32}]
function gradeStudents(students)
{
    var x= students.map(function(element)
    {
        if(element.marks > 90)
            return "A"
        else if(element.marks >=80 && element.marks<=90)
            return "B"
        else if(element.marks >=60 && element.marks<80)
            return "C"
        else if(element.marks >=40 && element.marks<60)
            return "D"
        else if(element.marks < 40)
            return "F"
    })
    console.log(x)
    students.forEach(function(element,index)
    {
    element.grades=x[index]
    })
return students
}

console.log(gradeStudents(students))
