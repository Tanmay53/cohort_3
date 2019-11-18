
function avg(marks) {
    var sum = 0

    for (i = 0; i <marks.length; i++) {

        sum += marks[i]
    }
    var average = sum / marks.length

    return average
    console.log(sum)
}

console.log(avg([44,55,79,39,96]))
