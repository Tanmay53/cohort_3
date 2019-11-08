// returns 0 if no marks otherwise average of marks
function AverageCalculator(student){
    sum = 0
    marks = student['marks']

    if(marks.length == 0)
        return 0

    for(var i = 0; i < marks.length; i++) {
        sum = sum + marks[i]
    }

    return sum / marks.length
}


// main

student = {
    name : 'Mohan',
    marks : []
}

console.log(AverageCalculator(student))


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