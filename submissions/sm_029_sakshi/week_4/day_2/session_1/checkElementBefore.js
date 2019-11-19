var arr=[{'item' : 'a',
'price' : 20 },
{'item' : 'b',
'price' : 40},
{'item' : 'c',
'price' : 60 }] 

function reducesum(arr)
{
var newarr=arr.reduce(function(acc,value)
    {
return acc + value.price
    },0);
    return newarr
}
console.log(reducesum(arr))
