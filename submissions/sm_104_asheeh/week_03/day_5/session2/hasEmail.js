function checkValidEmail(email)
{
    var emailArr = email.split("@");
    var tldArr = emailArr[1].split(".");
    var lastIndex = email.length-1;
    
    if(emailArr.length > 2 || emailArr.length == 0) //there should be atleast and atmost one "@"  //
    {
        return "Invalid email";
    }
   
    else if((email.charAt(lastIndex) == "@") || (email.charAt(lastIndex) == ".") || (email.charAt(lastIndex) == ",")) //checking last character should not be "@", ".", "," //
    {
        return "Invalid email";
    }
   
    else if((email.indexOf("@") == 0) || (email.indexOf(".") == 0) || (email.indexOf(",") == 0)) //checking first character should not be "@", ".", "," //
    {
        return "Invalid email";
    }
    
    else if(tldArr[1].length < 2) //there should be atleast 2 characters after "." in tld //
    {
        return "Invalid email";
    }
    
    else if(tldArr[1] === "com" || tldArr[1] === "co" || tldArr[1] === "org" || tldArr[1] === "net" || tldArr[1] === "in")
    {
        return "Success";
    }
    else
    {
        return "Success";
    }
}

console.log(checkValidEmail("ashish@gmail.com"));