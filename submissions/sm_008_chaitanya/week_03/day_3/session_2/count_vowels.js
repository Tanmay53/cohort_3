var name='chathan'
var vowels=['a','e','i','o','u']
var sum=0;
for(i=0;i<name.length;i++){
    for(j=0;j<vowels.length;j++){
        if(name[i]==vowels[j]){
            sum=sum+1;
        }
    }
}
console.log(sum)