var test1 = {
    name : "Abhishek",
    totalMarks : 95 
}
var test2 = {
    name : "Pogo",
    totalMarks : 15 
}

function gradeStudent(obj){
    var students = []
    students.push(obj)
    var result = students.map(function(ele){
        if(ele[totalMarks] > 90){
            return "A"
        }
        else if(ele[totalMarks] > 80 && ele[totalMarks] < 90){
            return "B"
        }
        else if(ele[totalMarks] > 60 && ele[totalMarks] < 80){
            return "C"
        }
        else if(ele[totalMarks] > 40 && ele[totalMarks] < 60){
            return "D"
        }
        else
            return "F" 
    })
    console.log(result)
}

console.log(gradeStudent(test1))