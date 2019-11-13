arr = [4, 5 ,8, 10]
var i = []
function square(array){
    array.forEach(function(element){
        i.push (element*element)    
    })
    console.log(i)
}
 square(arr)