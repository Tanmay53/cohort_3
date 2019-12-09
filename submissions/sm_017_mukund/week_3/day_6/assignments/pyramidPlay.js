function pyramid(){

    for(i=0;i<4;i++){

        str = ''

        for(j=0;j<9;j++){
            
            if( i == 0 ){

                if( j == Math.floor(9/2) ){

                    str+=0
    
                }
                else{
    
                    str+='.'
    
                }

            }
            if( i == 1 ){

                if( j == (Math.floor(9/2)-1) || j == (Math.floor(9/2)+1) ){

                    str+=0
    
                }
                else{
    
                    str+='.'
    
                }

            }
            if( i == 2 ){

                if( j == Math.floor(9/2) || j == (Math.floor(9/2)-2) || j == (Math.floor(9/2)+2) ){

                    str+=0
    
                }
                else{
    
                    str+='.'
    
                }

            }
            if( i == 3 ){

                if( j == (Math.floor(9/2)+1) || j == (Math.floor(9/2)-1) || j == (Math.floor(9/2)+3) || j == (Math.floor(9/2)-3) ){

                    str+=0
    
                }
                else{
    
                    str+='.'
    
                }

            }
            

        }

        console.log(str)

    }

}

pyramid();
console.log()

function inversePyramid(){

    for(i=0;i<4;i++){

        str = ''

        for(j=0;j<9;j++){
            
            if( i == 3 ){

                if( j == Math.floor(9/2) ){

                    str+=0
    
                }
                else{
    
                    str+='.'
    
                }

            }
            if( i == 2 ){

                if( j == (Math.floor(9/2)-1) || j == (Math.floor(9/2)+1) ){

                    str+=0
    
                }
                else{
    
                    str+='.'
    
                }

            }
            if( i == 1 ){

                if( j == Math.floor(9/2) || j == (Math.floor(9/2)-2) || j == (Math.floor(9/2)+2) ){

                    str+=0
    
                }
                else{
    
                    str+='.'
    
                }

            }
            if( i == 0 ){

                if( j == (Math.floor(9/2)+1) || j == (Math.floor(9/2)-1) || j == (Math.floor(9/2)+3) || j == (Math.floor(9/2)-3) ){

                    str+=0
    
                }
                else{
    
                    str+='.'
    
                }

            }
            

        }

        console.log(str)

    }

}

inversePyramid();
console.log()

function rhombus(){

    for(i=0;i<7;i++){

        str = ''

        for(j=0;j<9;j++){
            
            if( i == 0 || i == 6 ){

                if( j == Math.floor(9/2) ){

                    str+=0
    
                }
                else{
    
                    str+='.'
    
                }

            }
            if( i == 1 || i == 5 ){

                if( j == (Math.floor(9/2)-1) || j == (Math.floor(9/2)+1) ){

                    str+=0
    
                }
                else{
    
                    str+='.'
    
                }

            }
            if( i == 2 || i == 4 ){

                if( j == Math.floor(9/2) || j == (Math.floor(9/2)-2) || j == (Math.floor(9/2)+2) ){

                    str+=0
    
                }
                else{
    
                    str+='.'
    
                }

            }
            if( i == 3 ){

                if( j == (Math.floor(9/2)+1) || j == (Math.floor(9/2)-1) || j == (Math.floor(9/2)+3) || j == (Math.floor(9/2)-3) ){

                    str+=0
    
                }
                else{
    
                    str+='.'
    
                }

            }
            

        }

        console.log(str)

    }

}

rhombus();