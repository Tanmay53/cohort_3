function disJointArrays(x,y) {
    var obj= {}
    for(i= 0; i< x.length; i++) {
        obj[x[i]]= 0
    }
    for(i= 0; i< y.length; i++) {
        obj[y[i]]= 0
    }
    var a= Object.keys(obj)
    console.log(a)
}
disJointArrays([2,5,6,8,8,32,9,1],[5,64,4,11,5,6]) //x,y are Two arrys