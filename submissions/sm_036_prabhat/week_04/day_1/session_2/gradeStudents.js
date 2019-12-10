function gradeStudents (students){
    var grade = "";
    if(students.marks >=90){
        grade = "A"
    }
    else if(students.marks < 90 && students.marks >=80){
        grade = "B"
    }
    else if(students.marks < 80 && students.marks >=60){
        grade = "C"
    }
    else if(students.marks < 60 && students.marks >=40){
        grade = "D"
    }
    else if(students.marks < 40){
        grade = "F"
    }
    return grade;
}

students = [ {name:'Albert', marks:80},
            {name:'Pogo', marks:60}]

students.forEach(function(element){
    console.log(element)
    element.grade = gradeStudents(element)
})
console.log(students)