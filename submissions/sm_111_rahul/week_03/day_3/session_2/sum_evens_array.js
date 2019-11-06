var num = [100 , 200 , 300, 55 , 43 , 63], sum_even = 0;
for (var i = 0; i < num.length; i++){
    if(num[i]% 2 == 0){
        sum_even = sum_even + num[i];
    }
}
console.log('The sum of even numbers is : ' + sum_even)