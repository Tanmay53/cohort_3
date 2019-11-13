var arr=[1,2,3,4,5,4,3,2,1,2,3,4,5]
var target=2
//function definition
function findDuplicates(arr,target)
{
        var obj={
            count:0
        }
        var count=0
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i]==target)
            count+=1
        }
        obj["count"]=count
        console.log(obj)
}
//function call
findDuplicates(arr,target)