// object carrying info of student

var student = {
    name : 'Money',
    marks : [59,13,95,64,45],
    average :  function(){   //making function inside object
        arr=this.marks
        len=arr.length
        sum=0
        for(i=0;i<len;i++){
            sum+=arr[i]
        }
        avg=sum/len

        return avg;
    }
}

// function accessing the function inside object that is passed as argument

function avgMarks(x){

    return x.average();
}

console.log('Average : ',avgMarks(student))         // function call