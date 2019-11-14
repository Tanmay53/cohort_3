function index(array,search){
    var store =[]
    for(i=0;i<array.length;i++){
        for(j=0;j<search.length;j++){
            if(array[i] == search[j])
            store.push(i)
            else
            console.log("-1")
        }   
    }
    console.log(store)
}
index([1,2,5,4,5,5,6],[5])