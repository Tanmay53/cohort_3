function unionArr(input1,input2)
{
    var obj={}
    var obj2={}
     l1=input1.length
     l2=input2.length
      for(var i=0;i<l1||i<l2;i++)
      {
       if(i<l1)
           obj[input1[i]]=input1[i]
           if(i<l2)
       obj[input2[i]]=input2[i]
      }
       return Object.keys(obj).map(function(ele)
                                  {return parseInt(ele)})
}
if(obj.length==l1+l2)
{
    console.log('disjoint')
}

var input1=[1,2,3,4,5]
var input2=[2,3,4,5,6,7,9,10]
console.log(unionArr(input1,input2))