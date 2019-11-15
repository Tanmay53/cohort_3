function square(input)
{
    var input
    sqrArr = input.map(function(value){
        return value*value
       })
       console.log('Squared arr of '+input+' ' +'is '+sqrArr)

}
square([2,3,4,5])