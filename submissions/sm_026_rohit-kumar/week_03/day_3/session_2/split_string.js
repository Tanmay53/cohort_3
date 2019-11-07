function split_str(str, split_ch){
    var arr = []
    var temp_str = ""

    for(var i = 0; i < str.length; i++){
        if(str[i] != split_ch){
            temp_str += str[i]
        }
        else{
            arr.push(temp_str)
            temp_str = ""
        }
    }
    arr.push(temp_str)
    return arr
}

// code execution starts here

var str = "ram,is,a,good,boy"
var split_ch = ','

arr = split_str(str, split_ch)
console.log(arr)


/*
-----------------Test Cases---------------
Input                       Output
ram is a good boy           [ 'ram', 'is', 'a', 'good', 'boy' ]
ram is a good boy           [ 'ram is a good boy' ]
ram,is,a,good,boy           [ 'ram', 'is', 'a', 'good', 'boy' ]

*/
