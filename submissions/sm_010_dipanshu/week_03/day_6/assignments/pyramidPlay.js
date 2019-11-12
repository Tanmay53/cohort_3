function pyramid(level){
    var singleRow = ''
    for(var i=level;i>0;i--){
        singleRow = printPattern('.',i)+printPattern('o',level+1-i)+printPattern('.',i-1)
        console.log(singleRow)
        singleRow = ''
    }
}

function invPyramid(level){
    var singleRow = ''
    for(var i=1;i<=level;i++){
        singleRow = printPattern('.',i)+printPattern('o',level+1-i)+printPattern('.',i-1)
        console.log(singleRow)
        singleRow = ''
    }
}

function invPyramidCustom(level){
    var singleRow = ''
    for(var i=2;i<=level;i++){
        singleRow = printPattern('.',i)+printPattern('o',level+1-i)+printPattern('.',i-1)
        console.log(singleRow)
        singleRow = ''
    }
}

function rhombus(n){
    pyramid(n)
    invPyramidCustom(n)
}

function printPattern(char,cnt){
    str = ''

    if(char === '.'){
        for(var i=0;i<cnt;i++){
            str += char
        }
    }
    else{
        for(var i=0;i<cnt;i++){
            str += char+printPattern('.',1)
        }
    }
    return str
}

pyramid(10)
console.log()

invPyramid(10)
console.log()

rhombus(10)