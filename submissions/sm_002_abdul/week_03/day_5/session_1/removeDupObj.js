function removeDupObj(obj){

    var uniqueArray=[];

    for (var i=0;i<obj["arr"].length;i++){
        if (obj["arr"].indexOf(obj["arr"][i])===i){
            uniqueArray.push(obj["arr"][i])
        }
    }

    return uniqueArray
}

obj={
    name:"anthony",
    arr:[1,2,3,1,1,2,2,2,2,3]
}
console.log(removeDupObj(obj))