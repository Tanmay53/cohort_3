function count_consonants(sampleString){
    count=0
    for (i=0;i<sampleString.length;i++){
        if (sampleString[i]!='a'&&sampleString[i]!='e'&&sampleString[i]!='i'&&sampleString[i]!='o'&&sampleString[i]!='u' ){
            count++
        }
    }
    console.log(count)
}
count_consonants('copycat')