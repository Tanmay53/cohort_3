var name = 'Rahul Sharma', splited_strings = [], split_char = 'a';
var str = '';
for(var i = 0; i < name.length; i++ ){
    if(split_char == name[i])
    {
       splited_strings.push(' ')
       
    }else{
        splited_strings.push(name[i])
    }
       
}


console.log(splited_strings.join(''))