// FSD.JS.5.6

student = {
    name:'Mihir Kumar',
    marks: [50,30,100,80],
    average: function(){
        var sum=0
        for (i=0;i<this.marks.length;i++)
            sum+=this.marks[i]
        return sum/this.marks.length
    }

}

// function to invoke average inside student object
function avgMarks(obj){
    return obj.average()
}

console.log(avgMarks(student))