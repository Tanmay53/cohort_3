function unionArr(input1,input2)
{
    var obj={}
     l1=input1.length
     l2=input2.length
      for(var i=0;i<l1||i<l2;i++){
       if(i<l1)
             obj[input1[i]]=input1[i]
       if(i<l2)
             obj[input2[i]]=input2[i]
       }
       return Object.keys(obj).map(function(ele)
                                  {return parseInt(ele)})
}

var input1=[1,2,3,4,5]
var input2=[3,4,5,6,7,8,9,10]
console.log(unionArr(input1,input2))