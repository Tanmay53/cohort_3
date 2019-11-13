student = {
    name:'name',
    marks: [50,30,100,80],
    average: function(marks){
        var sum=0
        var count=0
        for (i=0;i<this.marks.length;i++){
            sum+=this.sum[i]
            count++
            }
        avgMarks=(sum/count)
        return avgMarks
        }

}
