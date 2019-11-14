// object carrying info of student

var student = {
    name : 'Dakota',
    marks : [76,53,64,77,83],
    average :  function(){
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

// function accessing the function inside object which is passed as argument

function avgMarks(x){

    return x.average();
} 

console.log('Average : ',avgMarks(student))         // function call