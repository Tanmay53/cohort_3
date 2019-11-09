
var rev = ""
function rever(name){
for ( i = name.length-1; i >= 0 ; i--)
{
  rev = rev + name[i]

}
return rev
}
var new_value = rever ("teja")


console.log(new_value)  