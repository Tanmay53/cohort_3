function mirrorImage(input)
{
    var lowerC=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var upperC=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var input
    var str=''
    for(var i=0;i<input.length;i++)
    {
        for(var j=0;j<lowerC.length;j++)
        {   if(input[i]==upperC[j])
            {
                str=str+upperC[25-j]
            }
            else if(input[i]==lowerC[j])
            {
                str=str+lowerC[25-j]
            }
         }
    }
console.log(str)
}
mirrorImage("AzpyB")