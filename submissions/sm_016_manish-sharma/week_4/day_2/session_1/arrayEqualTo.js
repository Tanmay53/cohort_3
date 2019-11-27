function arrayEqualTo(arr,t){
    var news = arr.filter((e)=> e!=t)
    var sqr= news.map((e)=> e**2)
    console.log(sqr)
    
}
arrayEqualTo([1,2,3,4,5,3,7,3],3)