function even_array(arr) {
    var sum = 0
    //var arr =[5,6,7,8,9,12,14,17] //without using agument

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0)
            sum += arr[i]
    } return sum
    //console.log(sum)
}

console.log(even_array([5, 6, 7, 8, 9, 12, 14, 17]))