function count_consonants(name)
{
    var consonants
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
    consonants=name.length-count
    console.log(consonants)
}
count_consonants("Apoorva Krishna")

