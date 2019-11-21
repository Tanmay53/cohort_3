var arr=[1,4,3,2,6]
var arr1=[1,4,3]
//three objects,where obj and obj1 are for storing each array character count
//and diff is to get only those objects which are not getting matched
var obj={}
var obj1={}

var flag=0;
function arrayDiff(arr,arr1){
    var diff={}
    for(var i=0;i<arr.length;i++)
    {
        obj[arr[i]]=1
    }
    for(var i=0;i<arr1.length;i++)
    {
        obj1[arr1[i]]=1
    }
    for(key in obj)
    {  
        console.log("key is " +key)
        
        flag=0
        
        for(key1 in obj1)
        {
            if(Number(key)==Number(key1))
              { 
                  console.log(key1+" key1")
                  flag=1;
                // console.log(key,key1)
                  break;
              }
        }
        console.log(flag)
        if(flag==0)
        {
        diff[key]=1   
        console.log("Not matched")
        }
        else
        console.log("matched")
    }
    console.log(diff)
}
//calling function
arrayDiff(arr,arr1)

