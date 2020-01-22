function propertyCheck(x) {
    var car = {
        name: 'ford',
        color: 'red',
        model: 001
    };
    flag = 0;
    for (key in car) {
        if (key == x) {
            // console.log('Valid',key)
            flag = 1;
        }
    }
    if(flag== 1) {
        console.log('Valid','&','key value is ',car[x])
    }
    else {
        console.log(x,'is invalid property')
    }
}
propertyCheck('name')