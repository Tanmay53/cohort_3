function supersetArrays(x,y) {
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

    if(c== aY.length) {
        console.log('true',c)
    }
    else {
        console.log('false',c)
    }
}
supersetArrays([2,5,6,8,4,8,2,9,1],[5,6,4,9,5,6]) //x,y are Two arrys