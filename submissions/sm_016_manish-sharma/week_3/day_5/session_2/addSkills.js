function addSkills(object,key){
    object[key]='courage'

    console.log(object)
}

//objects
var person = {
    name:'manish',
    skill:'acting',
    email:'masai@school.com'
}
var person2 = {
    name:'manish',
    email:'masai@school.com'
}

addSkills(person,'skill')
addSkills(person2,'skill')