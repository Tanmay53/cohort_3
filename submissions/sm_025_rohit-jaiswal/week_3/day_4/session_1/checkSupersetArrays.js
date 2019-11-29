fruits = [ 'apple', 'mango', 'guava']
veggies = ['tomato','beans','potato']
var arr =[]
//both = fruits + vegetable

function unionArrays(x,y)
{

for(i=0,j=0;j<x.length,i<y.length;j++,i++)
    {

        arr.push(y[i])
        arr.push(x[j])
    }

  console.log(arr)
}
unionArrays(fruits,veggies)