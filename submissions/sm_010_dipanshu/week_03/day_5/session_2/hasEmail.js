function indexOf(array,char){

    var count = 0
    var indexPos = []
    var returnArray = []
    
    for(var i=0;i<array.length;i++){
        if(array[i] === char){
            count++
            indexPos.push(i)
        }
    }

    returnArray.push(count)
    returnArray.push(indexPos)

    //console.log(returnArray)
    return returnArray
}

function checkAtSign(str){
    
    var arr = indexOf(str,'@')
    //console.log(arr)

    var index = arr[0]
    //console.log(index)

    var posArray = arr[1]
    //console.log(posArray[0])

    if(posArray[0] == 0){
        //console.log('Invalid email. @ found at first position.')
        return -3
    }
    else if(index == 1){
        //console.log('Found @ at index',index)
        return posArray[0]
    }
    else if(index > 1){
        //console.log('Multiple @ signs found')
        return -2
    }
    else{
        //console.log('@ not found')
        return -1
    }
}

function split(inputString,splitCharacter){

    //console.log(inputString)

    var tempWord = ''
    var tempArray = []

    for(var i = 0; i < inputString.length; i++){
        
        if(inputString[i] != splitCharacter){

            tempWord += inputString[i]

        }
        else{

            if(tempWord.length > 0){
                tempArray.push(tempWord)
            }

            tempWord = ''

        }
    }

    if(tempWord.length > 0){

        tempArray.push(tempWord)

    }

    return tempArray
}

function checkLettersValidity(str){
    var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-.'

    notFound = true

    //console.log(str)
    for(var i=0;i<str.length;i++){
        for(var j=0;j<letters.length;j++){
            if(str[i] === letters[j]){
                notFound = false
                //console.log('1',str[i],notFound)
                break
            }
            else{
                notFound = true
                //console.log('2',str[i],notFound)
            }
        }
        //console.log(i,str[i],notFound)
        if(notFound){
            //console.log('Invalid email. Invalid letters found')
            return -2
        }
    }
}

function checkTwoDots(str){
    for(var i=0;i<str.length-1;i++){
        for(var j=i+1;j<str.length;j++){
            if(str[i] == str[j] && str[i] == '.'){
                //console.log('Invalid email. 2 dots(.) found simultaneously')
                return -3
            }
        }
    }
}

function checkBefore(str){
    if(str[0] == '.'){
        //console.log('Invalid email. Dot(.) found at first position')
        return -1
    }

    if(checkLettersValidity(str) < 0){
        //invalid characters found
        return -2
    }

    if(checkTwoDots(str) < 0){
        //2 dots found simultaneously
        return -3
    }
}

function checkAfter(str){
    if(str[0] == '.'){
        return -1
    }
    var afterParts = split(str,'.')
    //console.log(afterParts)
    
    domainCheck = afterParts[afterParts.length-1]
    //console.log(domainCheck,typeof(domainCheck))

    if(domainCheck != 'com' && domainCheck != 'org' && domainCheck != 'net'){
        return -2
    }
}

function hasEmail(str){
    console.log(str)
    
    var returnCodeAtSign = checkAtSign(str)

    switch(returnCodeAtSign){
        case -1: console.log('Not a valid email. @ sign missing.')
                 return
        case -2: console.log('Not a valid email. Multiple @ signs found.')
                 return
        case -3: console.log('Invalid email. @ found at first position.')
                 return
    }

    var splits = split(str,'@')
    //console.log(splits)

    var beforeAt = splits[0]
    var afterAt = splits[1]

    //console.log(beforeAt,afterAt)

    var returnCodeBefore, returnCodeAfter

    returnCodeBefore = checkBefore(beforeAt)
    switch(returnCodeBefore){
        case -1: console.log('Invalid email. Dot(.) found at first position')
                 return
        case -2: console.log('Invalid email. Invalid letters found')
                 return
        case -3: console.log('Invalid email. 2 dots(.) found simultaneously')
                 return
    }

    returnCodeAfter = checkAfter(afterAt)
    switch(returnCodeAfter){
        case -1: console.log('Invalid email. Dot(.) immediately after @.')
                 return
        case -2: console.log('Invalid domain.')
                 return
    }

    console.log('Congrats! It is a valid email.')
}


hasEmail('dipanshugmail.com')
console.log()
hasEmail('dipanshu@@gmail.com')
console.log()
hasEmail('@gmail.com')
console.log()
hasEmail('d@gmail.com')
console.log()
hasEmail('.d@gmail.com')
console.log()
hasEmail('dipanshu?@gmail.com')
console.log()
hasEmail('dipan..shu@gmail.com')
console.log()
hasEmail('dipanshu.sabharwal@gmail.com')
console.log()
hasEmail('dipanshusabharwal@gmail.com')
console.log()
hasEmail('aalinds.sharma@gmail.orag')
console.log()
hasEmail('dipanshusabharwal@gmail.org')
console.log()
hasEmail('dipanshusabharwal@.gmail.org')
console.log()