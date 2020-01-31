var userDetails ={
    name :"yashwanth",
    surname :"kore"
}
function propertyUpdate(obj,key,value){
    obj[key]= value
    console.log(obj)
}propertyUpdate(userDetails,'name',"yash")
