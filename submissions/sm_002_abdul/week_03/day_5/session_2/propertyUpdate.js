
function propertyUpdate(person,someKey,newValue){
        person[someKey]=newValue;
    
    return person;
}

person={
    name:"oliver",
    age:30,
    profession:"mayor",
    superhero:true
}

someKey="friend";
newValue="barry";

console.log(propertyUpdate(person,someKey,newValue))