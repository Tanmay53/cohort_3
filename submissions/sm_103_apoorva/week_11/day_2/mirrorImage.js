function upperCase(char)
{
    if(char >="A" && char<="Z")
        return true
    else
        return false
}


function mirrorImage(str)
{
    var small=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var caps= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var input=str.split('')
    for(i=0;i<input.length;i++)
    {
        if(upperCase(input[i]))
        {
            for(j=0;j<caps.length;j++)
            {
                if(input[i]==caps[j])
                {
                    input[i]=caps[25-j]
                    break
                }
            }
        }
        else
        {
            for(j=0;j<small.length;j++)
            {
                if(input[i]==small[j])
                {
                    input[i]=small[25-j]
                    break
                }
            }
        }
    }
    return input.join('')
}

module.exports = mirrorImage