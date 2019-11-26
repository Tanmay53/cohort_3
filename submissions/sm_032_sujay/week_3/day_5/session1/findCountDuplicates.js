total = {
    arr1: ['1','2','3','4','5','6'],
    tar : '3'
}


function countDup(obj)
{
    var count=0;
    for(i=0;i<obj.arr1.length-1;i++)
    {
    if(obj.tar == obj.arr1[i])
    {
        count++
    }
    }
    console.log(count)

}countDup(total)