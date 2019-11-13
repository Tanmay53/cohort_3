var data = "schoo    l"
var arra = []
var j = 0
for (var i = 0 ; i<data.length ;i++)
{   
    if(data[i] ==' ')
    {
        j--
    }
    else
    arra[j] = data[i]
    j++
}
console.log(arra)