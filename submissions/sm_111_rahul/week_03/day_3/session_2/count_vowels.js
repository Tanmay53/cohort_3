var name = 'Rahul Sharma' , count = 0;
name = name.toLowerCase();
var vowels = ['a', 'e', 'i', 'o', 'u'];
for (var i = 0; i < name.length; i++){
    for(var j = 0; j < vowels.length; j++){
        if(name[i] == vowels[j]){
            count++;
        }
    }
}
    console.log('The number of total vowels in name is:' + count)