var arr =[1,4,3,6,5,4,9,7,4]
function findIndexOccurance(arr,num)
{
    pos=[]
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]==num)
        {
            pos.push(i)
        }
    }
    if(pos.length>0)
    {
        return pos
    }
    else{
        return -1
    }

}
console.log(findIndexOccurance(arr,3))