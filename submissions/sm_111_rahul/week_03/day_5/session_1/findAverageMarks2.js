
student = {
    name: 'Rahul',
    marks: [20, 40 , 50 , 80 ],
    average : function(){
        sum = 0;
        for(var i = 0; i < this.marks.length; i++){
            sum += this.marks[i]
        }
        return sum/this.marks.length
    }
}

function avrMarks(obj){
    
    return obj.average()
}


console.log(avrMarks(student))