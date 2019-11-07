var input = [2,4,5,6,8,9,12]
var number = 0

for (i = 0 ; i<= input.length-1 ; i++)
{
    if (input[i]%2 == 0)
    {
        number += input[i]
    }
}
console.log(number)