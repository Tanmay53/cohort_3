//Function to find grade.
function findGrade(obj) {
    var grade = '';   //Variable to keep track of the grade.
    if (obj.marks>=90) {
        grade = 'A';
    }
    else if (obj.marks >= 80 && obj.marks < 90) {
        grade = 'B';
    }
    else if (obj.marks >= 60 && obj.marks < 80) {
        grade = 'C';
    }
    else if (obj.marks >= 40 && obj.marks < 60) {
        grade = 'D';
    }
    else {
        grade = 'F';
    }

    return grade;
}

students = [ {name:'Albert', marks:80},
              {name:'Pogo', marks:60}]

students.forEach(function(element) {
    element.grade = findGrade(element);
})

console.log(students);