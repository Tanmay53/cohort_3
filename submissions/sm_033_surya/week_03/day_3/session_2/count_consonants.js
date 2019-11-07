var name = "surya"
var j = 0;
function consonants () {
for (i = 0; i<name.length ; i++){

if (!(name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i]  == 'o' || name[i] == 'u'))
{
    
    j++
}

}
console.log(j)
}
consonants(name)