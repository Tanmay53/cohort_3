str1 = "abc@xyz.com"
str2 = "a$c@xyz.com"
str3 = "ab()@xyz.com"

str5 = "abc@xyz.com.com"
str6 = "/abc@xyz.com"
str7 = "a@bc@xyz.com"
str8 = "abc..@xyz.com"
str9 = "@bcMC.com"



function verifyEmail(id1) {
   
    input1 = id1.split('@')
    input2 = input1[1].split(".")
    //    console.log(input1,input2)
    var arr1=input1[0]
    var arr2=input2[0]
    var arr3=input2[1]
        console.log(arr1,arr2,arr3)
    var count1 = 0
    var count2 = 0
    var count3 = 0
    var z1=0
    var z2=0
    var z3=0 
    if(arr1 != "" && arr2 != "" && arr3 != "" && arr3 != undefined)
    {
    for (i = 0; i < arr1.length; i++) {
        if ((arr1[i] == '@') || (arr1[i] == '.') || (arr1[i] == ' ')|| (arr1[i]== '(')|| (arr1[i]== ')')|| (arr1[i]== '&' )|| (arr1[i]== '$') || (arr1[i]== '^')|| (arr1[i]== '#')|| (arr1[i]== '/')|| (arr1[i]== '' )) 
        {
            z1++
        }
        else {
            count1++
        }


    }
    for (i = 0; i < arr2.length; i++) {
        if ((arr2[i] == '@') || (arr2[i] == '.') || (arr2[i] == ' ')|| (arr2[i]== '(')|| (arr2[i]== ')')|| (arr2[i]== '&' )|| (arr2[i]== '$') || (arr2[i]== '^')|| (arr2[i]== '#')) {
            z2++
        }
        else {
            count2++
        }


    }
    for (i = 0; i < arr3.length; i++) {
        if ((arr3[i] == '@') || (arr3[i] == '.') || (arr3[i] == ' ')|| (arr3[i]== '(')|| (arr3[i]== ')')|| (arr3[i]== '&' )|| (arr3[i]== '$') || (arr3[i]== '^')|| (arr3[i]== '#')) {
          z3++
        }
        else {
            count3++
        }

    }
    if (count1 > 0 && count2 > 0 && count3 > 0) {
        console.log('Valid')
        // console.log(count1,count2,count3)
    }
    else if( z1 >0 || z2>0 || z3 > 0)
    {
        console.log('invalid')
    }
}
else{
    console.log("Invalid")
}   
}
verifyEmail(str1)
verifyEmail(str2)
verifyEmail(str3)

verifyEmail(str5)
verifyEmail(str6)
verifyEmail(str7)
verifyEmail(str8)
verifyEmail(str9)
