// change credit limit of user depening on given status
function changeStatus(user,newStatus){
    flag=false
    for(keys in user){
        if(keys=='status'){
            flag=true
            switch(newStatus){
                case 'Basic':
                    user.creditLimit=80000
                    user.status='Basic'
                    break
                case 'Premium':
                    user.creditLimit=300000
                    user.status='Premium'
                    break
                case 'Platinum':
                    user.creditLimit=600000
                    user.status='Platinum'
                    break
                default:console.log('invalid input')
            }
        }
    }
    if(!flag)
        console.log('invalid input')
    return user
}

var newUser={
    name: 'mihir',
    email: 'mihir2019-masai@masai.co.in',
    password: '$mihir$',
    creditLimit: 80000,
    status: 'Basic'
}

var update=(changeStatus(newUser,'Platinum'))
console.log(update)