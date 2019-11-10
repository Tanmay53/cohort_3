var arr1=[3,4,5,6,7,8]
var arr2=[1,2,3,4,3,2]

var union=[];

var uniqUnion = [];
var count=0;
function unionArray(arr1, arr2) { 

  for(var i=0; i<arr1.length;i++) {
    union.push(arr1[i])
  }
  for(var j=0;j<arr2.length;j++) {
    union.push(arr2[j])
  }

  for(i=0;i<union.length;i++)
  {
    for(j=0;j<union.length;j++)
    {
      if(union[i]==union[j])
      union[i] = null
    }

   
  }
  console.log(union)
  }
  
  
unionArray(arr1, arr2)