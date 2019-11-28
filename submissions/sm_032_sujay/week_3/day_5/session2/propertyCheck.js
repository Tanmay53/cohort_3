player ={

game : 'foosball',
jersey : '7',
pos : 'winger',
style : 'attack',
color : 'red',


}


function check(obj){
    // console.log(Object.keys(obj))
    
    if(obj['game'])
    console.log('verified')
    else
    console.log('not verified')
}
//     for(key in obj){
//    if( key == 'game')
//    {
//        return 'verified key'
//    }
//    }
//    return "invalid key"

// }

check(player)