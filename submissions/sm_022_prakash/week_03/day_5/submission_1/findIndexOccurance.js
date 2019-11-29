inp = [10,2,10,3,4,2]
ele = 19;
out = []
var count = -1
function findIndexOccurance(inp,ele){

for(var i=0; i<inp.length; i++){
  if(ele==inp[i]){
    count = i
    out.push(i)
  }
}
if(count){
    out.push(count)
} 
return out
}
console.log(findIndexOccurance(inp,ele))