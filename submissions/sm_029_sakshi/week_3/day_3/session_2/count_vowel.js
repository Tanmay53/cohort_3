function strvowel(str)
{

var count=0
for(var i=0;i<str.length;i++)
{
    if(str[i]=="a" || str[i]=="A" ||  str[i]=="e" || str[i]=="E" || str[i]=="i" ||  str[i]=="I" || str[i]=="o" || str[i]=="O" || str[i]=="u" || str[i]=="U" )
        count=count+1
}
return count
}
 console.log(strvowel("aeiouaaaaahjh"))
