 function findAverageMarks(student){
        temp = student.marks;
        for(var i = 0; i < temp.length; i++){
            sum += temp[i]
        }
        avg = sum / temp.length;
        return avg
}
 //object as input
 student = {
     name : 'Rahul Sharma',
     marks : [50, 60, 70, 80]
 }
 var temp = [];
 var sum = 0;
 var avg = 0;
 console.log('The average marks is ' + findAverageMarks(student))