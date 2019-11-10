var array=['M','a','s','a','i','','s','c','h','o','o','l'];
var char=',';
function join(array,char){
    var string='';
    for(i=0;i<array.length;i++){
        string=string + array[i];
        if(i != array.length){
            string=string + char;
        }
    }
    return console.log(string);
}
join(array,char);