var data = "surya.teja.khandavilli."
var arr = []
var first = "";
function splitstring(){
for (var i= 0; i<=data.length-1 ; i++){
       if (data[i]=='.') {
        first += data[i] 
        arr.push(first)
            first = ""
       }
       else {
           first += data[i]
               }
    }
    console.log(arr)
}
splitstring (data)