var arr = ["Apple", "Orange", "Banana"], given = "*", str = ""
var count = arr.length
function join() {
    for(var i = 0; i < count; i++){
        str += arr[i]
        str += given 
    }
    console.log(str)
}

join()