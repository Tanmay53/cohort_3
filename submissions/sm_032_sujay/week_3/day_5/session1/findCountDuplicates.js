
    arr1= ['1','2','3','4','5','3',3,'6','3']
    tar = '3'



function countDup(array,value)
{
    var count=0;
    for(i=0;i<=array.length-1;i++)
    {
    if( array[i] == value)
    {
        count++
    }
    }
    console.log(count)

}countDup(arr1,tar)