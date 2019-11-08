function count_vowels(name)
{
    name= name.split("")
    var vowels=['a','e','i','o','u','A','E','I','O','U']
    count=0
    for  (var i=0;i<name.length;i++){
        for(var j=0;j<vowels.length;j++)
        {
            if(name[i]==vowels[j])
            {
                count++
            }
        }
    }
    console.log(count)
}
count_vowels("Apoorva Krishna")