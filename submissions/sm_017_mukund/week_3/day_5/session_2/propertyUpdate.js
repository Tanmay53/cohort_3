var person = {
    name : 'rohan',
    location : 'US',
    age : 30
}

function propertyUpdate(obj,prop,val){
    obj[prop]=val

    return obj;
} 

console.log(propertyUpdate(person,'location','AUS'))
console.log(propertyUpdate(person,'birthPlace','IND'))