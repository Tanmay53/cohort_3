function disJointArrays(x,y) {
    var objX= {}
    var objY= {}
    for(i= 0; i< x.length; i++) {
        objX[x[i]]= i
    }
    for(i= 0; i< y.length; i++) {
        objY[y[i]]= i
    }
    var aX= Object.keys(objX)
    var aY= Object.keys(objY)
    console.log(aX,aY)

    var a= []
    for(i= 0; i< aX.length; i++) {
        for(j= 0; j< aY.length; j++) {
            if(aX[i]== aY[j]) {
                a.push(aX[i])
            }
        }
    }
    console.log(a)
}
disJointArrays([2,5,6,8,8,2,9,1],[5,6,4,9,5,6]) //x,y are Two arrys