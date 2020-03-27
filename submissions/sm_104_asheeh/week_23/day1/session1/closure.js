// function add(a) {
//     return function(b) {
//         return a / b
//     }
// }

// console.log (add(4)(5))

// var first = add(10)
// console.log(first)
// console.log(first(20))

// var counter = (function(){
//     // count is a private variable here.
//     var count = 0;
//     function increment(x) {
//         count = count + x;
//         return count
//     }
//     function decrement(x) {
//         count = count - x
//         return count
//     }
//     function value() {
//         return count
//     }

//     return {increment, decrement, value}
// })()

// counter.increment(100)
// counter.decrement(5)
// console.log(counter.value())

// console.log(counter.count)

// closures can be used to create data privacy.
// By using closures you can give state to functions.
// Phases in closure:
    // 1. Creation
    // 2. Execution



// Famous Interview Question

var arr = [1, 2, 3, 4]

for(let i=0; i<arr.length; i++) {

    setTimeout(() => {
        console.log(arr[i], i)
    }, i*1000)
}

// async
// event loop
// scoping