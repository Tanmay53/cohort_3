
// remove duplicates using array
function unique(arr){
    for(var i=0;i<arr.length-1;i++){
        // looking for repetitions of each number
        for(j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j])
                arr[j]=null
        }
    }
    // filtering out null
    var result=[],index=0
    for(i=0;i<arr.length;i++)
        if(arr[i]!=null)
            result[index++]=arr[i]
    return result
}

// remove duplicates using Objects
var person= {
    marks: [10,20,30,10,40,20,100,10,4,20],
    uniqueMarks: function(){
        console.log(unique(this.marks))
    }
}

person.uniqueMarks()