// Write a function which accepts an object as argument and calculates the average of the marks of a student
// marks is an array inside the objects

// // Input
// student = {
//  name:'<name>',
//  marks: [50,30,100,80]
// }

function findAverageMarks(object) {
 marksArray = object.marks
 // console.log(marksArray)
 size = marksArray.length
 // console.log(marksArray.length)
 var sum = 0
 for (var i = 0; i <= marksArray.length - 1; i++) {
  sum += marksArray[i]
 }
 average = sum / size
 console.log(average)
 return average
}


findAverageMarks(
 student = {
  name: 'Samurai',
  marks: [50, 30, 100, 80]
 }) 
 //65