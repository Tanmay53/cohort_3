function disJointArrays(x,y) { // x is subset of y or not.!
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

    var c= 0 //c= count
    for(i= 0; i< aX.length; i++) {
        for(j= 0; j< aY.length; j++) {
            if(aX[i]== aY[j]) {
                c++
            }
        }
    }

    if(c== aX.length) {
        console.log('true',c)
    }
    else {
        console.log('false',c)
    }
}
disJointArrays([2,5,6,2,1],[5,6,4,1,9,5,6,2]) //x,y are Two arrys