function avgMarks(object) {
    console.log(object.average());
}

student = {
    name:'name',
    marks: [50,30,100,80],
    average: function(){
        if (this.marks.length === 0) {
            return "Marks array is empty.";
        }
        var avg = 0;
        for (var i = 0; i < this.marks.length; i++) {
            avg += this.marks[i];
        }
        avg /= this.marks.length;
        return "Average Marks of the student are "+avg;
    }
}

avgMarks(student);
