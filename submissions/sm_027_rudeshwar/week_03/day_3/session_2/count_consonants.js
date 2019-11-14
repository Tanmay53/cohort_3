var s='rudresh'
var j
var value=0;
for(j = 0; j < s.length-1; j++)
{
  
    // s[j]='rudresh'
   
    if((s[j]=='a')||(s[j]=='e')||(s[j]=='i')||(s[j]=='o')||(s[j]=='u'))
    {
        value=value+1;
    }
}
console.log(s.length-value)