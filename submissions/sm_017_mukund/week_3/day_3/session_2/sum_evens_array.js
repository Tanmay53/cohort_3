var array=[1,2,3,4,5,6,7,9,8]
var sum=0

function sum_evens_array(array){
    for(i=(array.length-1);i>=0;i--){
        if ((array[i]%2)==0){
            sum+=array[i]
        }
    }
    console.log('Sum : ',sum)
}

sum_evens_array(array)