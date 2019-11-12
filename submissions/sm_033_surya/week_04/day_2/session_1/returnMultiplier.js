var arra = [40,22,33,55,60]
var n = 5

returnMultiplier(arra , n)

function returnMultiplier (){

    newArra = arra.map(function (elements){ // multiplying with given value
        return elements*n
    })
    console.log(newArra)
}