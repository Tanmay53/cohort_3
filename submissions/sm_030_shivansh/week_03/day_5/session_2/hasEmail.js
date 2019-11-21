// function to check email id is valid or not

function hasEmail(email) {

    //spliting the email id by @ into two parts username and domain like-shivansh and gmail.com
    var first_split = email.split("@");



    //var splitting firstSplit[1] by . into two parts
    var third_split = first_split[0].split(".");




    //checking whether the @ is present or not
    if (first_split.length < 2) {
        return false
    }

    //checking whether the @ is present at starting or end
    else if (first_split[0] === "" || first_split[0] === "")
        return false;

    //spliting the firstSplit[1] by . into two parts like gmail  and com
    var sec_split = first_split[1].split(".");

    //var splitting firstSplit[1] by . into two parts
    var third_split = first_split[0].split(".");





    //checking whether . is present in domain part
    if (sec_split < 2)
        return false;

    //checing if more than 1 "." is present
    else if (sec_split > 2)
        return false;

    //checking if "." is present at last or just after @
    else if (sec_split[0] === "" || sec_split[1] === "")
        return false;

    //checking if tld is valid or not  
    else if (sec_split[1].length < 2)
        return false;

    //if "." present at first place or just before @
    else if (third_split[0] === "" || third_split[0] === "")
        return false;

    //if moe than one present "." 
    else if (third_split.length > 2)
        return false;

    else
        return true;

}


var email = "shivansh@gmail.com";
console.log(hasEmail(email));

var email = "masai.school.com";
console.log(hasEmail(email));

var email = "masai@.com.my";
console.log(hasEmail(email));

var email = "@masai.school.net";
console.log(hasEmail(email));

var email = "name@.org.org";
console.log(hasEmail(email));


var email = ".name@masaischool.org";
console.log(hasEmail(email));


var email = "name..1234@yahoo.com";
console.log(hasEmail(email));


var email = "shivansh.s007@gmail.com";
console.log(hasEmail(email));

