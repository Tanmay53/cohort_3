
// remove duplicates using Objects
function unique(obj){
    for(var i=0;i<obj.marks.length-1;i++){
        // looking for repetitions of each number
        for(j=i+1;j<obj.marks.length;j++){
            // make duplicates null
            if(obj.marks[i]==obj.marks[j])
                obj.marks[j]=null
        }
    }
    // filtering out null
    var result=[],index=0
    for(i=0;i<obj.marks.length;i++){
        if(obj.marks[i]!=null)
            result[index++]=obj.marks[i]
    }
    obj.marks=result
    return obj.marks
}

// remove duplicates using Objects
var person= {
    marks: [10,20,30,10,40,20,100,10,4,20],
    uniqueMarks: function(){
        console.log(unique(this))
    }
}

person.uniqueMarks()
