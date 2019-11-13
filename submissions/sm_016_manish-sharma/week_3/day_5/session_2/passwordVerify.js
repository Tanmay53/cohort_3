function passwordVerify(object,password){
    var cnt=0
    for(i=0;i<password.length;i++){
        if (password[i]===object[i]){
            cnt=cnt+0
        }
        else{
            cnt++
        }
    }
    if(cnt>0){
        console.log(false)
    }
    else{
        console.log(true)
    }
}

var person={
    name:'masai',
    password: 'i021saqT'
}
passwordVerify(person.password,'i021saqT')