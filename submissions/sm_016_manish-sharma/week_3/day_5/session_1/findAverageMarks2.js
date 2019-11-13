var student = {
    name:'name',
    marks: [50,30,100,80],
    avgMarks: function(object){
        var cnt = 0
        for (i = 0; i < this.marks.length; i++) {
            cnt = cnt + Number(this.marks[i])
        }
        var avg = cnt / Number(this.marks.length)
        console.log(avg)
    }

}

student.avgMarks(student)