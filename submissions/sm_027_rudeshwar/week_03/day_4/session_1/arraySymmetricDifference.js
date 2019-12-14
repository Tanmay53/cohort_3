var arr1=[1,2,3,4,5,6,7,8]
var arr2=[8,9,10]
var result1=[]

function unionArrays(arr1,arr2)
{
    for(i=0;i<=arr1.length-1;i++)
    {
        result1.push(arr1[i]);   
    }

    for(j=0;j<=arr2.length-1;j++)
    {
        var flag = 0
        for(k=0;k<=result1.length-1;k++) 
        {
            if(result1[k]==arr2[j]) // checking if arr2 elements exist in result
            {
                flag = 1;
                break;
            }
        }
        if(flag === 0){
            result1.push(arr2[j])
        }
    }
        return result1  //ends the function execution
}
ans1 = unionArrays(arr1,arr2) //passing arr1,arr2 to function and executing the function
console.log(ans1)

var result2=[]
function intersectionArrays(arr1,arr2) //function accepting two array
{
    for(i=0;i<=arr1.length-1;i++)      
    {
        for(j=0;j<=arr2.length-1;j++) 
        {
            if(arr1[i]==arr2[j])    
            {
                result2.push(arr1[i]) 
            }
        }
    }
    return result2
}
ans2=intersectionArrays(arr1,arr2) // executing the function
console.log(ans2)//



var result3=[]
for(i=0;i<ans1.length;i++)
  {
    flag=true
    for(j=0;j<ans2.length;j++)
     {
       if(ans2[j]==ans1[i])
       {
        flag=false
        break
       }
    }
    if(check_day==true)
    {
        result3.push(ans1[i])
    }
 }
console.log(result3)

