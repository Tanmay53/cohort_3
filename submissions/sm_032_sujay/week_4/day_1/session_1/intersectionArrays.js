arr1=[1,2,3,4]
arr2=[2,3,5,6,7]


function inter(a,b)
{
     common1={}
     common2={}
     res=[]
    // for(i=0;i<a.length;i++)
    // {
    //     for(j=0;j<b.length;j++){
    //         if(a[i]==b[j])
    //     {
    //         common[a[i]]=a[i]
    //     }
    //     }
        
    // }
    // console.log(Object.values(common))
   for(i=0;i<a.length;i++)
   {
    common1[a[i]]=a[i]
   }
//    console.log(common1)

   for(j=0;j<b.length;j++)
   {
       common2[b[j]]=b[j]
   }
//    console.log(common2)


  for(key in common1)
  {
      if(common2[key])
      {
          res.push(common2[key])
      }
  }
   console.log(res)
}inter(arr1,arr2)
