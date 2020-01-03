function findavgmarks(student){
    return student.average()
}
 student = {
    name:'blessy',
    marks: [50,30,100,80],
    average: function findavgmarks(student){
    count=0
    var avg
    sum=0
    for(var i=0; i<this.marks.length; i++)
    {
         sum =sum+this.marks[i]
         count=count+1
          avg=sum/count;
    }
    return avg
}

}
    

console.log (findavgmarks(student))
