function returnMultiplier(input1,input2)
{
    var input1
    var input2
    var result
    result=input1.map(function(ele)
    {
        return ele*input2
    })
    console.log(result)

}
returnMultiplier([2,4,6,8],3)