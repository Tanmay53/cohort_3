// calling property method for average calculation
function avgMarks(student){
    return student.average()
}




// main
student = {
    name : 'Mohan',
    marks : [],
    average: function() {
                if(this.marks.length > 0) {
                    sum = 0
                    for(var i = 0; i < this.marks.length; i++) {
                        sum = sum + this.marks[i]        
                    }
                    return sum / this.marks.length
                }
                return 0
            }
}


console.log(avgMarks(student))


/*
-------------------- Test Cases --------------------
Input                                       Output

student = {
    name : 'Ram',
    marks : [50, 30, 100, 80]
}                                               65

student = {
    name : 'Mohan',
    marks : []
}                                               0

*/