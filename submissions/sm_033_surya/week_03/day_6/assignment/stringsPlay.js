var data = "masai scHool"
var hypen = "-"
var underscore = "_"

camelCase(data)
stringCases(data,hypen)
stringCases(data,underscore)

function camelCase() 
{
    var c_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
    var s_alphabet = "abcdefghijklmnopqrstuvwxyz"
    var sum = ""
    var x = ""
    var y = 0
    for (i = 0 ; i < data.length ; i++)
    {
        if(data[i] == " ")
        {
            for (z = i ; data[z] == " " ;z++)
                   {
                    y = y+1
                   }
                   i = i+ y-1
                   y = 0
            for( j = 0 ; j < c_alphabet.length ; j++)
            {
                if (data[i+1] == c_alphabet[j])
                {
                    x = c_alphabet[j]
                }
                if(data[i+1] == s_alphabet[j])
                {
                    x = c_alphabet[j]
                }

            }
            i = i+1
        }
        else {
            for ( j = 0 ; j < c_alphabet.length ; j++)
            {
                if((data[i] == c_alphabet[j]) || (data[i] == s_alphabet[j]))
                {
                    x = s_alphabet[j]
                }
            }
        
        }
        sum = sum + x
        x = ""
    }
    
    console.log(sum)
}

function stringCases(data,value)
{
    var c_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
    var s_alphabet = "abcdefghijklmnopqrstuvwxyz"
    var sum = ""
    var x = ""
    var z = 0
    var y = 0
    for (i = 0 ; i < data.length ; i++)
    {
        if(data[i] == " ") 
        {   
            for (z = i ; data[z] == " " ;z++)
               {
                y = y+1
               }
               i = i+ y-1
               y = 0
            x = value
        }
        else 
        {
            for ( j = 0 ; j < c_alphabet.length ; j++)
        {
            if((data[i] == c_alphabet[j]) || (data[i] == s_alphabet[j]))
            {
                x = s_alphabet[j]
            }
        }
        }
        sum  = sum + x
        x = ""
    } 
console.log(sum)     
}
