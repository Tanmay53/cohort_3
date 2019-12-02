arr1=[2,3,4]
arr2=[1,2,3,4,5]


function subset(a,b){
    set1={}
    set2={}
    var count=0
    var c=0
    for(i=0;i<a.length;i++)
    {
        set1[a[i]]=a[i]
    }
    // console.log(set1)
    for(j=0;j<b.length;j++)
    {
      set2[b[j]] = b[j] 
    
    }
    // console.log(set2)

    for(key in set1)
    {
    if(set2[key])
    {
        count++
    }
    else
    {
        c++
    }
}
if(c>0)
    console.log('False')
else if (count>0)
console.log('true')

}subset(arr1,arr2)