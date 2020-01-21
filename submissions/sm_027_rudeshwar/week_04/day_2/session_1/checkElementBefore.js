var arr=[25,50,85,15,500,27,9]
arr.reduce(checkElementBefore);

function checkElementBefore(arr,num)
{
    return (arr + num);
}
x1=arr.reduce(checkElementBefore);
console.log(x1)