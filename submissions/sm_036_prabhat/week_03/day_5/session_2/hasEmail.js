function hasEmail(email){

    var countAtTheRate = check(email);  // Calling @ check function
    if(!countAtTheRate){
        return countAtTheRate;
    }
    for(var i = 0; i < email.length; i++){
        
        if(email[0] == "@" || email[0] == "."){
            return false;
        }
        if(email[i] == "." && email[i+1] == "."){
            return false;
        }
        if(email[i] == "@" && email[i+1] == "@"){
            return false;
        }
        if(email[i] == "(" || email[i] == ")" || email[i] == "#"){
            return false;
        }
        if (email[email.length-2] == "."){
            return false;
        }    
    }
    return true
}
// Checking @ 

function check (email){
    var cnt = 0;
    for(var i = 0; i < email.length; i++){
        if(email[i] == "@"){
            cnt ++;
        }
    }
    if(cnt > 1){
        return false;
    }
    return true;
}

var email = "mysite@masais@chool.com"
console.log(hasEmail(email))