userx={
    skill:"noskill"
}
usery={
    name:"Mr.Y"
}


function propertyupdater(object,key,value){
    object[key]=value
    console.log(object)
}

propertyupdater(userx,"skill","singing")
propertyupdater(usery,"skill","dancing")