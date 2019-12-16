function split_string(string,char){
var arr = [];
var split_char = "" ;
for ( var i = 0; i < string.length; i++ ) {

    if (string[i] != char) {
        split_char += string[i];
    }else{
        arr.push(split_char);
        split_char = "" ;
    }

    }
  arr.push(split_char);
  return arr;
}
console.log(split_string("masai is marvellous" , "a"))