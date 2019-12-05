var person = {

    name : 'Piyush',
    age : 20,
    institute : 'Masai'
    
}

function propertyCheck(x,prop){

    var arr = Object.keys(x)
    var flag = 0

    for(i=0;i<arr.length;i++){

        if( arr[i] == prop ){

            console.log(true)
            flag = 1
            break;

        }

    }

    if( flag == 0 ){

        console.log(false)
    
    }

}


propertyCheck(person,'age')