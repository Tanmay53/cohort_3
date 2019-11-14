user={
    name: "lalit",
    phone: 1315431
}

function propertyupdater(object,key,value){
    object[key]=value
    console.log(object)
}

propertyupdater(user,"phone",32154)
propertyupdater(user,"city","bengaluru")