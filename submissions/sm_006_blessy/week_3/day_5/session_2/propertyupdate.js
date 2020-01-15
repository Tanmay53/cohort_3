function propertyupdate(object,key,value){
    object[key]=value;
    return object
}
obj={
    name:"blessy",
    age:"23"
}
console.log(propertyupdate(obj,"name","Blessy mariya"))
console.log(propertyupdate(obj,"gender","female"))
console.log(propertyupdate(obj,"qualification","BE ECE"))