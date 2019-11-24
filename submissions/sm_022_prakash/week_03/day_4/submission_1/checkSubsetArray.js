var arr1 = [4,5,9];
var arr2 = [4,5,6,7,8];
counter = 0
//function to check subset of arrays given 2 arrays
function subSetArray(arr1, arr2){
//check every element in arr1 with every element in arr2
for(var i = 0; i<arr1.length; i++){
    for(var j=0; j<arr2.length; j++){
        if(arr1[i]==arr2[j]){   //if element matches incerement counter
            counter++
            }
    }
}
//checking the length of the array and counter 
if (counter == arr1.length){
    console.log("The array is subset")
}
else{
    console.log("The array is not Subset")
}
}
//calling the function
subSetArray([9,2,3,4],[1,2,3,4,5,6,7])