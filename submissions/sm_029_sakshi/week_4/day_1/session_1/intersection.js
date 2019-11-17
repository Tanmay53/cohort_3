function intersectionArrays(arr1,arr2) {
    var obj = {}
var newArra = []


for ( i = 0 ; i < arr1.length ; i++)
{
    obj[arr1[i]] =1
}
  //console.log(obj)
    for ( i = 0 ; i < arr2.length ; i++)
    {
        if(obj[arr2[i]] == obj[arr1[i]])
        {
            newArra.push(arr2[i])
        }
    }

    console.log(newArra)
}
var arr1 = [2,4,5,6,7,8,9]
var arr2 = [5,6,7,10,11]
intersectionArrays(arr1,arr2)