function sum_even(array_given){
    sum=0
    i=0
    for (i=0;i<array_given.length;i++){
        if (array_given[i]%2==0){
            sum=sum+array_given[i]

        }
    }
    console.log(sum)
}

sum_even([1,2,3,4,5,6])