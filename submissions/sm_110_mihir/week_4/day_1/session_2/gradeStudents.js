// function to grade students
function gradeStudents(element){
        if(element.marks<40)
            return 'F'
        else if(element.marks<60)
            return 'D'
        else if(element.marks<80)
            return 'C'
        else if(element.marks<90)
            return 'B'
        else
            return 'A'
    
}

var students = [ 
    {name:'Mihir', marks:75},
    {name:'Nitin', marks:30}]
// to grade each student
students.forEach(function(element){
    element.grade=gradeStudents(element)
})
console.log(students)