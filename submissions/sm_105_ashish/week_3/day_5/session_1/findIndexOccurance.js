function indexAllPos(input1,input2)
{
 var input1
 var input2
 var cnt=0
 var arr=[]

 for(var i=0;i<input1.length;i++)
 {
     if(input1[i]==input2)
     {
       
       arr.push(i)
       
     }
     else
     {
         cnt=-1
     }
 }
 if(arr.length>0)
 {
     console.log('index ig given number'+input2+' '+'is '+arr)
 }
 else{
     console.log(cnt)
 }
}
indexAllPos([0,5,12,45,21,23,12],12)
