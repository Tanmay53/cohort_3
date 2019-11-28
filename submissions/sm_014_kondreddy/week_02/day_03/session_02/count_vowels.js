var string="masaiSchool";
var i;
var j;
var vowels = ['a','e','i','o','u']
count = 0;
for (i = 0;i < string.length;i++) {
    for(j = 0;j < vowels.length;j++) {
    if (string[i] == vowels[j]) {
        count = count+1;
       // console.log(count)
        }
    }
}

console.log(count)