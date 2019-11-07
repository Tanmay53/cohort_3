function split_string(str,spliter){
    var arr=[],index=0,word=''
    // traverse the string
    for(i=0;i<str.length;i++){
        if(str[i]!=spliter){
            // if not splitter , add the character to word
            word+=str[i]
        }
        else{
            // if splitter, add th word to array
            arr[index]=word
            // reset word to black
            word=''
            index++
        }
    }
    return arr
}

var str="Hi this is Mihir", spliter=" "
var arr=split_string(str,spliter)
console.log(arr)