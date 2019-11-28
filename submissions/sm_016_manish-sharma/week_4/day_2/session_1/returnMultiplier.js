function returnMultiplier(arr,t){
    var mul= arr.reduce((a,e)=>a*e,1)
    console.log(mul)
}

returnMultiplier([1,2,3,4,5])