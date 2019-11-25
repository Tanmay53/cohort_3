function avg(limit, divisor) {
    limit = limit || 8
    divisor = divisor || 3
    var avg = 0
    var count = 0
    var sum = 0
    var i = 1
    while (i < limit) {
        i++
        if (i % divisor == 0) {
            sum += i
            count++
            // if(i==length.limit)
        }
    }
    console.log(sum)
    console.log(count)
    avg = (sum / count)
    console.log(avg)
}
avg(10, 2)