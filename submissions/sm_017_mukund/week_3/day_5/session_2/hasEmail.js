var person = {

    email : 'kalra@masai.school.org'

};

var flag = 0

function divide(x){
    
    var email = x.split('@')
    // console.log(email.length)
    if( email.length == 2 ){
        
        flag = 0;
        
    }
    else{
        
        flag = 1;
        
    }
    
    return flag;
}

function indexCheck(x){
    
    if( x[0] == '@' || x[0] == '.' ){
        
        flag = 1;
        
    } 
    else{
        
        flag = 0;
        
    }
    
    return flag;
}

function letterCheck(x){
    
    var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,'_','-','@','.']

    for(i=0;i<x.length;i++){

        if( arr.indexOf(x[i]) != -1 ){

            flag = 0;
            
        }
        else{
            // console.log(x[i])
            flag = 1;
            break;

        }

    }

    return flag;
}

function dots(x){

    for(i=0;i<x.length;i++){

        if( x[i]=='.' && x[i+1]=='.' ){

            flag = 1;
            break;

        }
        else{

            flag = 0;

        }

    }

    return flag;
}

function presence(x){

    for(i=0;i<x.length;i++){

        if( x.indexOf('@') != -1 ){

            flag = 0;
            break;

        }
        else{

            flag = 1;

        }

    }

    return flag;
}

function tld(x){

    var domain = ['com','org','net']

    for(i=0;i<x.length;i++){

        if( x[i]=='c' && x[i+1]=='o' && x[i+2]=='m' && x[i+3]=='.' ){

            flag = 1;
            break;
    
        }
        else if( x[i]=='o' && x[i+1]=='r' && x[i+2]=='g' && x[i+3]=='.' ){
    
            flag = 1;
            break;
    
        }
        else if( x[i]=='n' && x[i+1]=='e' && x[i+2]=='t' && x[i+3]=='.' ){
    
            flag = 1;
            break;
    
        }
        else{
    
            flag = 0;
    
        }

    }

    return flag;
}

function checkEmail(x){

    var val = x.email;
    
    var a = divide(val);
    var b = indexCheck(val);
    var c = letterCheck(val);
    var d = dots(val);
    var e = presence(val);
    var f = tld(val);
    // console.log(a,b,c,d,e,f)
    if( a == 1 || b == 1 || c == 1 || d == 1 || e == 1 || f == 1 ){

        console.log(false)
    
    }
    else{
    
        console.log(true)
    
    }

}


checkEmail(person)      // function call