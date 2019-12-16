function joinArray(arr,char){

    var newArr= "";
    for(var i=0 ; i< arr.length;i++) {
        newArr += String(arr[i]) + String(char);
    }
    return newArr;
}
console.log(joinArray(["Brijesh","Kumar","samurai"],27))