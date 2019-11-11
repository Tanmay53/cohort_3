var data = "madam"

palindrome(data) // caling function

function palindrome() {
    var data_update = ""
    var sum = 0
    var x = 0
    var j = 0
    var z = 0
    var y = 0
    for ( i =0; i< data.length ; i++)
    {
        if(data[i] ==" ")
        {
            for (z = i ; data[z] == " " ;z++)
                   {
                    y = y+1
                   }
                   i = i+ y
                   x = data[i]
                   y = 0
        }
        else 
        {
            x = data[i] 
        }
    }
        data_update = data_update +x // input without " "

     for ( i =0 ; i< data_update.length ;i++)   {

        if(data[i] == data[data_update.length-1-i]) // comparing string  as palindroma
        {
            j = 0
        }
        else 
        {
            j =1
        }
        sum = sum + j
        j = 0 
    }

    if(sum == 0 )
    {
        console.log("Given string is palindroma")
    }
    else
    {
        console.log("Given string is not palindroma")
    }
    j = 0
}


// madam
// race car
