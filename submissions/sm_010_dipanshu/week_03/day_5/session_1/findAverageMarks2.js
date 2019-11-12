function avgMarks(obj){
    return obj.average()
}


student = {
    name:'dipanshu',
    marks: [50,30,100,80],
    average: function(){  

        if(this.marks.length == 0){
            return ('Please enter valid marks')
        }
        else{
            sum = 0
    
            for(var i=0; i < this.marks.length; i++){
                sum += this.marks[i]
            }
    
            return (sum/this.marks.length)
        }
    }
}

console.log(avgMarks(student))