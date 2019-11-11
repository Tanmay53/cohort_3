var str = "Masai School Bangalore";
var splitChar ='a';

function split(str, splitChar){

    var array =[];
    var char='';
    for(i=0;i<str.length;i++){
        if(str[i] != splitChar){
          char= char + str[i];
        }
        else{
            array.push(char);
            char='';
        }
    }
    array.push(char);
    return console.log(array);
}

split(str,splitChar);