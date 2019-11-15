function vowel_count(string)
{
  var vowels = 'aeiouAEIOU';
  var vowel_count = 0;
  
  for(var i = 0; i < string.length ; i++)
  {
    if (vowels.indexOf(string[i]) !== -1){
      vowel_count += 1;
    }
  }
  return vowel_count;
}
console.log(vowel_count("masaiSch//Oo\n\n\"OOl\""))