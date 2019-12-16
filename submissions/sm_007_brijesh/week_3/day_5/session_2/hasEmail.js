// var person={
//     name:"brijesh",
//     age:25,
//     email:brij889910187
// }


function checkemail (email){
    for(var i=0;i<email.length;i++){

  if(email[0]== "." || email[0]== "@"  ){
            return false
        }
else if(email[i]== "@" || email[i]== "."){
    return true
}
else if(email[i]&&email[i+1] =="."){
    return false
}

 else(false)
    }
}

// console.log(checkemail ("brij@gmail.com"))
// console.log(checkemail ("brij@gmail.net"))
// console.log(checkemail ("brij@gmail.org"))
console.log(checkemail ("12brij@gmail.com"))