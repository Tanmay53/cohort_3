var sid = {
    status: 'Basic'
};
var sameer  = {
    status : 'Premium'
};
var saurabh = {
    status : 'Platinum'
};
var shekar = {
    status : ''
}

function changeStatus(user,status){
    user['status']=status

    if(user.status=='Basic'){
        user.creditlimit=80000
    }
    if(user.status=='Premium'){
        user.creditlimit=300000
    }
    if(user.status=='Platinum'){
        user.creditlimit=600000
    }
    if(user.status==undefined){
        return 'invalid input';
    }

    return user;
}

console.log(changeStatus(sid,'Basic'))
console.log(changeStatus(sameer,'Premium'))
console.log(changeStatus(saurabh,'Platinum'))
console.log(changeStatus(shekar))
console.log(changeStatus(sid,'Platinum'))
console.log(changeStatus(sameer,'Basic'))
console.log(changeStatus(saurabh,'Premium'))
