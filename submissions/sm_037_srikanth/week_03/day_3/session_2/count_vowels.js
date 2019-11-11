var string='Masai School';
function countVowels(string){
    var vowels=0;
    for (i=0;i<=string.length;i++){
        if(string[i] == 'o'||string[i]=='e'||string[i]=='u'||string[i]=='i'||string[i]=='a'){
            vowels=vowels+1;
        }
    }
     return console.log(vowels);
}
countVowels(string);
