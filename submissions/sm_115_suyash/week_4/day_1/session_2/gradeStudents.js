var students = [{ name: 'Suyash', marks: 70 },
                { name: 'Krishna', marks: 80 },
                { name: 'Honey', marks: 30 },
                { name: 'Money', marks: 60 },
                { name: 'Deepanshu', marks: 90 }];

function gradeStu(arr) {
  var newArr = []
    arr.forEach(function (val) {
      if (val.marks < 40) {
        val.grade = 'F'
        newArr.push(val)
      }
      if (val.marks >= 40 && val.marks < 60) {
        val.grade = 'D'
        newArr.push(val)
      }
      if (val.marks >= 60 && val.marks < 80) {
        val.grade = 'C'
        newArr.push(val)
      }
      if (val.marks >= 80 && val.marks < 90) {
        val.grade = 'B'
        newArr.push(val)
      }
      if (val.marks >= 90) {
        val.grade = 'A'
        newArr.push(val)
      }
    })
  return newArr
}

console.log(gradeStu(students))