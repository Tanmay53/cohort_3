function sum_evens_array(numbers)
{
    var sum=0
    for(i=0;i<=13;i++)
    {
        if(numbers[i]%2 ==0)
        {
            sum=sum+numbers[i]
            
        }
    }
    console.log(sum)
}
sum_evens_array([0,1,2,4,6,8,11,13,14,16,18,20,21,23,25,27])