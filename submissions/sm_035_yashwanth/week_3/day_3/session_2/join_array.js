var array=['sun','rises','in','east']
var char='#'
var string=""
var add=""
for(var i=0;i<array.length;i++ ){
 add=char.concat(array[i])
 string=string+add
}
console.log(string)