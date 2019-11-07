var char1 = 'a';
var arr = ['rahul', 200 , 'a' , 1];
function join(arr , char1 ) {
    var str = '';
    for(var i = 0; i < arr.length; i++){
        str = str + arr[i];
    }
    str = str + char1;
   console.log(str); 
}
join(arr , char1)