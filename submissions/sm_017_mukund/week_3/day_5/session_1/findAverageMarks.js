var student = {                         // object
    name : 'John',
    marks : [85,80,73,67,70]
}

// function taking object as argument and calculating average marks 

function averageMarks(x){
    arr=x.marks
    len=arr.length
    sum=0
    for(i=0;i<len;i++){
        sum+=arr[i]
    }
    avg=sum/len
    console.log('Average : ',avg)
}

averageMarks(student)           // function call