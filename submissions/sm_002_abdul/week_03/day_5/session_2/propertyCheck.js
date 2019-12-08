/* BRUTE FORCE METHOD
function propertyCheck(keyValue){

    const obj={
        name:"jabz",
        age:23,
        city:"bengaluru",
        isSmart:false,
    }

    var arrayOfKeys=[];

    for (key in obj){
        arrayOfKeys.push(key);
    }
    for (var i=0;i<arrayOfKeys.length;i++){
        if (arrayOfKeys.indexOf(keyValue)===-1){
            return false;
        }
        else{
            return true;
        }
    }
}

console.log(propertyCheck("color"))
*/

function propertyCheck(obj,keyValue){
    

    var arrayOfKeys=Object.keys(obj);
    for (var i=0;i<arrayOfKeys.length;i++){
        if (arrayOfKeys.indexOf(keyValue)===-1){
            return false;
        }
        else{
            return true;
        }
    }
}

const obj={
    name:"jabz",
    age:23,
    city:"bengaluru",
    isSmart:false,
}

keyValue="color";

console.log(propertyCheck(obj,keyValue))