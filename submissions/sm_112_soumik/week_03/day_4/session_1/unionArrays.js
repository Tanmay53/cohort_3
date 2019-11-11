function unionCheck(input1,input2){
var uni = []
var store=[]
    for(i=0;i<input1.length;i++){
    uni.push(input1[i])
    }
    for(j=0;j<input2.length;j++){
    uni.push(input2[j])
}
for(i=0;i<uni.length -1;i++){
    for(j=i+1;j<uni.length;j++){
        if(uni[i] == uni[j])
            uni[j] = null
            
    }
}
for(i=0;i<uni.length;i++){
    if(uni[i] != null){
        store.push(uni[i])
    }
}
console.log(store)
}
unionCheck([3,4,1,0,5],[1,3,4,0])
