var string='Masai School';
function countConsonants(string){
    var consonants=0;
    for (i=0;i<string.length;i++){
        if((string[i] != "a") && (string[i] != "e") && (string[i] != "i") && (string[i] != "o") && (string[i] != " ") ){
            consonants=consonants+1;
        }
    }
     return console.log(consonants);
}
countConsonants(string);
