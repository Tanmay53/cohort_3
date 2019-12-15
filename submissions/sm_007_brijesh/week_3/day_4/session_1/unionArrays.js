function uni_arrays() {
var arr1 = [2,5,7,11,13,15]
var arr2 = [3,8,11,18]

var union = []
for (var i=0;i< arr1.length;i++){
    union.push(arr1[i])
}

for(var j=0;j<arr2.length;j++)
{
        union.push(arr2[j])
}
console.log(union)
return union
}

console.log(uni_arrays())