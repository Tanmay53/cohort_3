
var obj = {}
var newArra = []


function arrayDifference() {
    for( i = 0 ; i < arra2.length ; i++)  {
        obj[arra2[i]] = arra2[i]
    }
    for(i = 0; i < arra1.length; i++) 
    {
        if(obj[arra1[i]] == undefined)
         {
            newArra.push(arra1[i])
        }
    }
    
console.log(newArra)

}
var arra1 = [1,2,3,4,5,6,7,9,8]
var arra2 = [4,5,6]
arrayDifference(arra1,arra2)