var arra = [2,3,4,5,6,7,8]
var n = 4
file(arra,n)
function file (arra, n)
{
  newArray = arra.filter(function (element){ //filter values
    return element < n 
  })
  console.log(newArray)
}