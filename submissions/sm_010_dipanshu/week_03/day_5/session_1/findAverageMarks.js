function findAvg(obj){

    if(obj.marks.length == 0){
        return ('Please enter valid marks')
    }
    else{
        marks = obj.marks
    
        sum = 0
    
        for(var i=0;i<marks.length;i++){
            sum += marks[i]
        }
    
        return (sum/marks.length)
    }
}

student = {
    name:'dipanshu',
    marks: [50,30,100,80,40]
}

console.log(findAvg(student))