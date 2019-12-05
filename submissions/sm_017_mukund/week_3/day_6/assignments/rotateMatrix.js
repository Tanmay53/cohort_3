var mtx = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
var mtx1 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
var mtx2 = [[1,2,3],[4,5,6],[7,8,9]]
var mtx3 = [[1,2],[3,4]]
var mtx4 = [[1,2],[3,4],[5,6]]
// var mtx5 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

function rotateMatrix(x){

    var arraylength = x.length
    var subArraylength = x[0].length

    for(i=0;i<arraylength-Math.floor(arraylength/2);i++){

        for(j=0;j<subArraylength;j++){
            
            temp = x[i][j]
            x[i][j] = x[arraylength-i-1][j]
            x[arraylength-i-1][j] = temp
            
        }   

    }
    console.log(x)

    var count = 0
    
    for(i=0;i<arraylength-1;i++){

        for(j=0;j<subArraylength;j++){

            if( j+count == subArraylength ){

                break;

            }

            temp = x[i][j+count]
            x[i][j+count] = x[j+count][i]
            x[j+count][i] = temp

        }

        count++
        
    }
    console.log(x)

    if( arraylength > subArraylength ){


        for(i=0;i<subArraylength;i++){

            x[i][subArraylength] = x[arraylength-1][i]

        }

        x.pop();

    }

    // if ( arraylength < subArraylength ){

    //     var count = 0

        // for(i=0;i<subArraylength;i++){

        //     for(j=0;j<arraylength;j++){

        //         temp = x[i][j]
        //         x[i][j] = x[j][i]
        //         x[j][i] = temp
                
        //     }


        // }
    // }

    return x;

}

// console.log(rotateMatrix(mtx))
// console.log(rotateMatrix(mtx1))
// console.log(rotateMatrix(mtx2))
// console.log(rotateMatrix(mtx3))
console.log(rotateMatrix(mtx4))
// console.log(rotateMatrix(mtx5))


