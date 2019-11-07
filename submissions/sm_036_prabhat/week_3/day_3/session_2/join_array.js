function joinArr(arr ,char) {
    var newArr = "";
    for (var i = 0; i < arr.length; i++){
        newArr += String(arr[i]) + String(char);
    }
    return newArr;
}
console.log(joinArr(["Prabhat","Kumar","Ranjan","samurai"],36))