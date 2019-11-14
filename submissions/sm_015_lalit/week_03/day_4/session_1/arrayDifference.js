
function arrayDiff(arr1,arr2) {
arr1=[3, 8, 1, 5, 3]
arr2=[6, 5, 4, 2, 8, 9]
var arrayD=[]  
for (i = 0; i < arr1.length; i++) {
        if(arr2.indexOf(arr1[i]) == -1) {
            arrayD.push(arr1[i])}
                    

    }
    console.log(arrayD)
}

arrayDiff([3, 8, 1, 5, 3],[6, 5, 4, 2, 8, 9])