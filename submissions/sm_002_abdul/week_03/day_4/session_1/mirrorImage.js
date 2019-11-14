function mirrorImage(givenString){
    var mirrorImagedString='AaBbCcDdEeFfGgHhIiJjKkLlMmnNoOpPqQrRsStTuUvVwWxXyYzZ'
    var requiredString=''
    for (var i=0; i<givenString.length;i++){
        for (var j=0; j<mirrorImagedString.length;j++){
            if (givenString[i]===mirrorImagedString[j]){
                requiredString=requiredString+mirrorImagedString[mirrorImagedString.length-1-j]
            }
        }
    }
    console.log(requiredString)
}

mirrorImage('AyzB')
