var student = {
    name: ['Siddharth','ravi','bhusan'],
    marks: [100,150,200,120],
    average: function(){
        sum=0
        avg=0
        for(var i=0;i<this.marks.length;i++)
        {
             sum=sum+this.marks[i]
        }
        avg=sum/this.marks.length
        console.log(avg)
    }
}

student.average() 
