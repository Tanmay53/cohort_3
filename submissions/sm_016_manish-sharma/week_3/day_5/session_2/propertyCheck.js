function propertyCheck(object,key){
    cnt=0
    for(x in object){
        if(x==key){
            cnt++
        }
        else{
            cnt=cnt+0
        }
    }
    if(cnt>0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}


//object
var person={
    name:'masai',
    password: 'i021saqT',
    email:'masai@school.com'
}


propertyCheck(person,'name')
propertyCheck(person,'staff')