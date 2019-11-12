studentsRecord = [{name:'Rahul', totalMarks:85},
                  {name:'Amit', totalMarks:75},
                  {name:'ajay', totalMarks:35},
                  {name:'ashish', totalMarks:45},
                  {name:'rohit', totalMarks:55},
                  {name:'ravi', totalMarks:65}]

studentsRecord.forEach(function (element) {
     if(element.totalMarks > 90){
       return  element.grade = 'A' 
     }else if(element.totalMarks < 90 && element.totalMarks > 80){
       return  element.grade = 'B'
     }else if(element.totalMarks < 80 && element.totalMarks > 60){
       return  element.grade = 'C'
     }else if(element.totalMarks < 60 && element.totalMarks > 40){
       return  element.grade = 'D'
     }else if(element.totalMarks < 40){
       return  element.grade = 'F'
     }

});
console.log(studentsRecord)
