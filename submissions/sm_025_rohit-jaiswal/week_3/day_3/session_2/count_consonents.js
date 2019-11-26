count("I am Rohit From Masai School")
function count(str){
var a = str.split("");
var count = 0;
for( var i = 0; i < a.length ; i++){
if(!(a[i] == 'u' || a[i] == 'e' || a[i] == 'o' || a[i] == 'a' || a[i] == 'i' || a[i] == ' ')){
  count++
}
}
console.log(count);
}
