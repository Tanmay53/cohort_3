function averageMarks() {
    student = {
        name: 'chathan',
        marks: [50, 30, 100, 80],
        average: function () {
            var sum = 0
            var avg = 0
            for (i = 0; i < this.marks.length; i++) {
                sum += this.marks[i]
            }
            avg = sum / this.marks.length
            return avg
        }

    }
    console.log(student.average())


}
averageMarks()