// var a = [2, 5, 3, 2, 5]
// // a = a.sort();
// // a = a.reverse();
// console.log(Array.isArray(a));
arr = [2, 3, 5, 7, 4, 2, 34, 2];
console.log(arr.indexOf(2))
//Enter your code here
input = input.split(' ')
input = Number(input)
console.log(input)
console.log(input[0])
if (Number(input[0]) > Number(input[1])) {
  console.log("Australia")
}
else if (Number(input[0]) < Number(input[1])) {
  console.log("England")
}
else {
  console.log("Tie")
}

//Enter your code here
input = input.split("\n")
input = input.split(" ")
console.log(input)
    var size = Number(input[0])
    var sum = 0;
    for(i = 0; i < size; i++) {
        sum += Number(input[1][i]);
    }
    var avg = sum/size;
    console.log(avg)