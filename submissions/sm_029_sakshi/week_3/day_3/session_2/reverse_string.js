function reverse(string)
{
     var temp=" "
    for(var i=string.length-1;i>=0;i--)
    {
    temp=temp + string[i]
    }
return(temp)
}

console.log(reverse("sakshi sinha"))
