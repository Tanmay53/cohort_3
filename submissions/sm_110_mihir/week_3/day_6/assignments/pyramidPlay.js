function pyramid(level){
    var pos=0,rowCounter=0,starNumbers
    stars=''
    for(row=level;row>0;row--){
        rowCounter++
        // position of '0' in one row
        pos=row
        starNumbers=0
        for(col=0;col<level*2+1;col++){
            // print zero at position row Number times
            if(col==pos && starNumbers<rowCounter){
                stars+='0'
                starNumbers++
                if(rowCounter!=1)
                    pos=pos+2
            }
            else
                stars+='*'
        }
        console.log(stars)
        stars=''
    }
}


function inversePyramid(level){
    var pos=0,rowCounter=level+1,starNumbers
    stars=''
    for(row=1;row<=level;row++){
        rowCounter--
        // position of '0' in one row
        pos=row
        starNumbers=0
        for(col=0;col<level*2+1;col++){
            // print zero at position rowCounter times
            if(col==pos && starNumbers<rowCounter){
                stars+='0'
                starNumbers++
                if(rowCounter!=1)
                    pos=pos+2
            }
                
            else
                stars+='*'
        }
        console.log(stars)
        stars=''
    }
}

function rhombus(level){
    pyramid(level)
    inversePyramid(4)
}


rhombus(4)