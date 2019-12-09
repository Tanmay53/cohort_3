function userInfo(name,email,pswrd){
    var user={};
    user.name=name;
    user.email=email;
    user.password=pswrd;

    return user;
}

console.log(userInfo("abdul","abduljabbarpeer@gmail.com","random"))