function join_array(arr,joiner){
    var str=''
    for(var i=0;i<arr.length;i++){
        str+=arr[i]+joiner
    }
    return str
}

var arr=['I','am','coding','in','my','space']
var str=join_array(arr,"-")
console.log(str)