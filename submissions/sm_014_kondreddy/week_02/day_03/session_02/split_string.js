var name = "fuallstackdevaeloper"
var split = "a"
var str=''
for(var i=0;i<name.length;i++)
{
   
            if(name[i] == split)
            {
                str =str+' '
            }
            else{
                str =str +name[i]
            }
}

console.log(str)