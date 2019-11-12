function verify(obj,pass){
    if(obj.password === pass){
        return ('Matched')
    }
    else{
        return ('Not Matched')
    }
}

obj = {
    password: 'Dipanshu'
}

var pass = 'dipanshu'

console.log(verify(obj,pass))