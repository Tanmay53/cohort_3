function split_string(string_given){
    var string1=''
    var arr1=[]

    for (i=0;i<string_given.length;i++){
        if (string_given[i]!=','){               //I'll add letters to empty string if i don't get a comma, 
            string1=string1+string_given[i] // once i get a comma,It'll go to else loop, wherein it'll push the word i have into an array
        }

        else{
            arr1.push(string1) //                   here the letters which formed a word before comma are pushed into arr1
            string1='' //                             and again i declare string1 as empty
        }
    }
    if (string1!=''){  //   after exiting the 'for' loop, if my string is not empty. I'll push that to arr1 and declare my string
        arr1.push(string1) // empty again--------this is to get that last part wherein I won't be able to go else statement in above
        string1=''   ///'for' loop..
    }
    console.log(arr1)
}

split_string('this,is,sparta')
