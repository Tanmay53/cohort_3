var student = [{ name: "divyansh", marks: 90 }, { name: "rohit", marks: 91}];
student.map(function (ele) {
   if (ele.marks > 90)
      ele.grade = "A"
   else if (ele.marks >= 80) {
      ele.grade = "B"
   }
   else if (ele.marks >= 60) {
      ele.grade = "C"
   }
   else if (ele.marks >= 40) {
      ele.grade = "D"
   }
   else if (ele.marks < 40)
      ele.grade = "F"
})

console.log(student)
