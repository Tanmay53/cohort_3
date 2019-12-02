student = {
    name: '<name>',
    marks: [80,90,85,95]
}

function calcAvg(obj) {
    var sum = 0
    var avg = 0
    for (var i = 0; i <= obj.marks.length - 1; i++) {
        sum += obj.marks[i]
        avg = sum / (i+1)
        // console.log(sum,i)

    }
    console.log(avg)

}
calcAvg(student)