var logins = [
                {"username" : 'rohit@gmail.com', 'password' : 'abcd', 'role' : 1},
                {"username" : 'mohit@gmail.com', 'password' : 'abcd', 'role' : 0},
                {"username" : 'ram@gmail.com',   'password' : 'abcd', 'role' : 0},
                {"username" : 'raj@gmail.com',   'password' : 'abcd', 'role' : 1}
            ]

 
function loginAttempt(obj) {
    // alert('fromtest :' + obj.username)
    var loginAttempt = []
    if (localStorage.getItem('loginfo')) {
        loginAttempt = JSON.parse(localStorage.getItem('loginfo'))
    }

    loginAttempt.push(obj)
    localStorage.setItem('loginfo', JSON.stringify(loginAttempt))
    // alert('saved') 
}
 

 function isValidUser(username, password) {
    for(var i = 0; i < logins.length; i++) {
        if(logins[i]['username'] == username && logins[i]['password'] == password) {
            return {"status" : true, "role" : logins[i]['role']}
        }
    }
    return {"status" : false}
}            

function clearLocalStorage() {
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    localStorage.removeItem('milliSec')
    //alert('cleared local storage')

}


function main() {
    //alert('main : working')
    clearLocalStorage()
    if (localStorage.getItem('loginfo')) {
        //alert('valid')
    }
    else {
        //alert('invalid')
    }
}