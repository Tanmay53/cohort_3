var str = '    masai    school blr     '
var newStr = ''
var newStr2 = ''
var newStr3 = ''
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var H = []
var S = []
var C = []

function hypenCase(str){

    for(i=0;i<str.length;i++){

        if( str[i] != ' ' ){
    
            newStr+=str[i]

            if( str[str.length-1] != ' ' && i == str.length-1 ){

                H.push(newStr);
                newStr = ''

            }
    
        }
        else if( str[i] == ' ' && newStr != '' ){

            H.push(newStr);
            newStr = ''

        }        

    }

    for(i=0;i<H.length;i++){

        if( i == (H.length-1) ){

            newStr += H[i]

        }
        else{

            newStr += H[i] + '-'

        }

    }

    return newStr;
    
}

function camelCase(str){

    for(i=0;i<str.length;i++){

        if( str[i] != ' ' ){
    
            newStr3+=str[i]

            if( str[str.length-1] != ' ' && i == str.length-1 ){

                C.push(newStr3);
                newStr3 = ''

            }
    
        }
        else if( str[i] == ' ' && newStr3 != '' ){

            C.push(newStr3);
            newStr3 = ''

        }        
        
    }

    for(i=1;i<C.length;i++){

        for(j=0;j<lowerCase.length;j++){

            if( C[i][0] == lowerCase[j] ){
                
                var changeCase = C[i]
                var newCase = ''

                for(k=0;k<changeCase.length;k++){

                    if( k == 0 ){

                        newCase+=upperCase[j]

                    }
                    else{

                        newCase+=changeCase[k]

                    }
                    
                }

                C[i] = newCase
                newCase = ''

            }

        }
        
    }

    for(i=0;i<C.length;i++){

        newStr3+=C[i]

    }
    
    return newStr3;

}

function snakeCase(str){

    for(i=0;i<str.length;i++){

        if( str[i] != ' ' ){
    
            newStr2+=str[i]

            if( str[str.length-1] != ' ' && i == str.length-1 ){

                S.push(newStr2);
                newStr2 = ''

            }
    
        }
        else if( str[i] == ' ' && newStr2 != '' ){

            S.push(newStr2);
            newStr2 = ''

        }        

    }

    for(i=0;i<S.length;i++){

        if( i == (S.length-1) ){

            newStr2 += S[i]

        }
        else{

            newStr2 += S[i] + '_'

        }

    }

    return newStr2;

}

console.log('String : ',str)
console.log()
console.log('hypen-case : ',hypenCase(str))
console.log()
console.log('snakeCase : ',snakeCase(str))
console.log()
console.log('camel_case : ',camelCase(str))
