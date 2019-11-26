count("i am Rohit From Masai School")
function count(str){
var a = str.split("");
var count = 0;
for( var i = 0; i <= str.length ; i++){
if( a[i] == 'u' || a[i] == 'e' || a[i]=='o' || a[i]=='a' || a[i] =='i'){
count++;
}
}
console.log(count);
}


