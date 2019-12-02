
function newUser(a,b,c)
{
    obj={}
    obj.name=a
    obj.email=b
    obj.password=c
    // console.log(obj)
    return obj
}
// console.log(Object.values(obj))
// console.log(Object.keys(obj))

    
var details =  newUser('Sujay','sujay@masai.com','qwerty123')
console.log(details)