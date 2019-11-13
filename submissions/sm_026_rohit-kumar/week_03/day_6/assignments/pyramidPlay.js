function pyramid(level) {
    for(var i = 0; i < level; i++) {
        str = ''
        for(var j = 0; j < level-i; j++)
            str = str + '.'
        
        str = str + '0'
        for(var k = 0; k < i; k++){
            str = str + '.0'
        }
        for(var j = 0; j < level-i; j++)
            str = str + '.'

        console.log(str)
    }   
}


function inversePyramid(level) {
    for(var i = 0; i < level; i++) {
        str = ''
        for(var j = 0 ; j <= i; j++) {
            str = str + '.'
        }
        str = str +'0'
        for(var k = 0; k < level-1 - i; k++) {
            str = str + '.0'
        }
        for(var j = 0 ; j <= i; j++) {
            str = str + '.'
        }

        console.log(str)
    }
}


function rhombus(level) {
    pyramid(level)
    inversePyramid(level)
}



var level = 6
rhombus(level)