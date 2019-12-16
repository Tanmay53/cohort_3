function avg(studentData) {
    studentData.average()
}
studentData = {
    name:'name',
    marks: [50,60,70,80,90,100],
    average: function() {
        var total = 0;
        for (var i = 0; i < this.marks.length; i++) {
            total+=this.marks[i];
        }
        var avg = total/this.marks.length;
        console.log("avg is " + avg);
    }

}
avg(studentData);