function arrEqual(input1,input2)
{
    var input1
    var input2
    var result
    result=input1.filter(function(ele,currentIndex){
    return ele!==input2
    })
    result=result.map(function(num){
        return num*num
    })
    console.log(result)
}
arrEqual([1,2,3,4,5],4)