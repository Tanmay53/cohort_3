function propertyCheck(object , property)
{
    
    for(key in object)
    {
        if(object[key] == property)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    // return object;
}
 var person = {
     name : "Ashish",
     age : "25",
     height : "6 feet 2 inches"
 };
 var key = "age"
 var key1 = "gender"
 console.log(propertyCheck(person , key1));