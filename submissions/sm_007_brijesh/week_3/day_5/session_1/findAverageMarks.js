var student = {                         // given object
    name : 'brijesh',
    marks : [45,30,79,95,60]
}

// function to take object as argument and calculating average marks

function averageMarks(x){
    arr=x.marks
    sum=0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    avg=sum/arr.length
    console.log('Average : ',avg)
}

averageMarks(student)           // function calling