function propertyUpdate(object,key,value){
    for (x in object){
        if(x==key){
            object[key]=value
        }
        else{
            x=key
            object[key]=value
        }
    }
    console.log(object)
}

//object
var person={
    name:'masai',
    password: 'i021saqT',
    email:'masai@school.com'
}

propertyUpdate(person,'name','iit')
propertyUpdate(person,'star')