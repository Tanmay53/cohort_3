// function used to find the index of each element
function IndexOf(arr,_string)
{
  for(i=0;i<arr.length;i++)
    {
      if (arr[i]==_string)
        return -1;
    }
  return 1
}
//add in to arr1 if that element doesnt exists
var string=[1,2,3,4,5,6,3,2,1]
var arr1=[]
for(i=0;i<string.length;i++)
  {
    if(IndexOf(arr1,string[i])==1)
      { 
        arr1.push(string[i])    
        console.log(arr1)
      }
  }
console.log(arr1)