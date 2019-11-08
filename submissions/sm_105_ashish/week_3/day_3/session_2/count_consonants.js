var name="samurai";
var vowelCount=0;
var consCount=0;
var splitName=name.split('')
for(var i=0; i<name.length;i++)
{
    if(splitName[i]=='a')
    {
       vowelCount=vowelCount+1;
    }
    else if(splitName[i]=='e')
    {
        vowelCount=vowelCount+1;
    }
    else if(splitName[i]=='i')
    {
        vowelCount=vowelCount+1;
    }
    else if(splitName[i]=='o')
    {
        vowelCount=vowelCount+1;
    }
    else if(splitName[i]=='u')
    {
        vowelCount=vowelCount+1;
    }
}
consCount=name.length-vowelCount;
console.log('Number of consonants in word'+' '+name+' '+'is'+' '+consCount)


