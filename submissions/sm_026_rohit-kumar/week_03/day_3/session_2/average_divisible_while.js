// function first finds all the required
// numbers, adds them up and keep the
// counter of numbers found till now
// finally calculates the average

function division_checker(number, limit){
    var sum = 0
    var cntr = 0
    var i = 0

    while(i <= limit){
        if(i % number == 0){
            sum = sum + i
            cntr = cntr + 1
        }
        i = i + 1
    }
    return sum/cntr;
}


// code starts here
var limit = 100
var number = 10

res = division_checker(number, limit)
console.log("Avg is : ", res)

/*
----------Test Cases---------
limit       number      output
10          2           5
20          4           10
1           4           0
100         10          50
*/