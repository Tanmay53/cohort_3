var arra = [2,3,4,5,6,7,8,5,5,5,5]
var n = 5

arrayEqualto (arra , n)

function arrayEqualto ()
{
    newArray = arra.filter(function (elements){  // filter the values
    return elements != n 
    })
    newArray.forEach(function (elements,index) {
            newArray[index] = elements*elements // squaring elements
        
    });
    console.log(newArray)
}