function index(array,search){
    for(i=0;i<array.length;i++){
        for(j=0;j<search.length;j++){
            if(array[i] == search[j])
            return i
        }   
    }
}
console.log(index([1,2,5,4,5,6],[5]))