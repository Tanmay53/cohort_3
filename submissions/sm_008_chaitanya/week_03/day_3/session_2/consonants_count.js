function count_consonants(name){ 
 var vowels=['a','e','i','o','u']
 var count=0;
for(i=0;i<name.length;i++){
    for(j=0;j<vowels.length;j++){
        if(name[i]==vowels[j]){
            count+=1;
        }
    }
}
console.log(name.length-count)
}
count_consonants('masai')