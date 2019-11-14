var array =[2,4,3,5,6,7,8,10]

function sumEven(array){
    sum=0;
    for(i=0;i<array.length;i++){
        if(array[i] % 2== 0){
            sum =sum + array[i];
        }
    }

    return console.log('sum of even numbers in Array:' + sum);
}
sumEven(array);