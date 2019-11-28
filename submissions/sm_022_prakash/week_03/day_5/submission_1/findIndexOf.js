inp = [10,2,10,3,4,2]
ele = 9;
out = []
var count = -1
function findIndexOf(inp,ele){

for(var i=0; i<inp.length; i++){
  if(ele==inp[i]){
    count = i
    break;
  } 
}
return count
}
console.log(findIndexOf(inp,ele))