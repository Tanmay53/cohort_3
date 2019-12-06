function avgmarks2(student){
 
    return student.average();
}


var student={
    name:"oliver",
    marks:[45,55,100,55,45],
    
    average: function(){
        var totalMarks=0;
        for (var i=0;i<this.marks.length;i++){
            totalMarks+=this.marks[i];
            
        }
        return totalMarks/this.marks.length;
    }
}



console.log(avgmarks2(student))