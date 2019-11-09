student = {
    name:'Raj',
    marks: [50,30,100,80],
    average: function(){
        sum=0;
    for(i=0;i<this.marks.length;i++){
        sum = sum + this.marks[i];
    }
    var averageMarks= sum / this.marks.length;
    return averageMarks;
    }

}

function avgMarks(student){
       return average();
}
console.log(avgMarks(student));