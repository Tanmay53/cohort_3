function splitStr(inp,char)
{
    var arr = []
    var str = ""
    for( var i =0; i <inp.length; i++)
    {
        if( inp[i]!=char)
        {
            str+= inp[i]
        
        }
        else 
        {
            arr.push(str)
            str= ""
        }
    }
    arr.push(str)
    return arr
}
console.log(splitStr("d+iv+ya+n+sh", "+"))