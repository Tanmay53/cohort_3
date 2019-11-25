function emailcheck(email){
    function errorcheck(email){
        email=email.split("")
        var count=0
        var count1=0
        var flag=1;
        for(var i=0;i<email.length;i++)
        {
            if(email[0]=='@'||email[0]=='.'||email[0]=='_'||email[0]=='0'||email[0]=='1'||email[0]=='2'||email[0]=='3'||email[0]=='4'||email[0]=='5'||email[0]=='6'||email[0]=='7'||email[0]=='8'||email[0]=='9'||email[0]=='*'||email[0]=='#'||email[0]=='!'){
                flag=0;
                break;
            }
           if(email[i]=='.')
                count+=1;
            if(email[i]=='@')
                count1+=1;
            if(email[i]=='@')
            {
                if(email[i+1]=='.')
                {
                    flag=0
                    break;
                }
            }
        }
        if(count1>1||count>1||count==0||count1==0)
        {
            flag=0
        }
        return flag;
        }
    // function used to find the actual occurence of '.'
        function tldstart(email){
            var tldi=0
            for(var i=0;i<email.length;i++)
            {
                if(email[i]=='.')
                tldi=i
                else 
                continue;
            }
            return tldi
        }
    
    // function to check valid tlds
        function tldcheck(a)
        {   var str=""
            for(var i=a+1;i<email.length;i++)
            {
                // console.log(email[i])
                str+=email[i]
            }
            // console.log(str)
            if(str=="com"||str=="edu"||str=="edu"||str=="org")
                return 1
            else
                return 0
    
        }

    if(errorcheck(email)==1){
        var tld=tldstart(email)
        var correct=tldcheck(tld)
        if(correct==1)
        // alert("Valid Email")
        return true
        else 
        // alert('Invalid Email')
        return false
    }
    else
    // alert("Invalid Email")
    return false
}
console.log(emailcheck("mysitemasaischool@gmail.com"))