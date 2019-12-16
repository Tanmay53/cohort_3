// WRITE A FUNCTION THAT ACCEPTS A STRING
// CREATE A VARIABLE THAT STORES INFORMATION OF ALL ALPHABETS IN CAPITAL AND SMALL LETTER
// INFO = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// A will have an index of 26
// a will have an index of 0
// CREATE A EMPTY STRING OUTPUT
// FOR EVERY ELEMENT IN THE INPUT STRING:
//     IF INFO.INDEXOF(ELEMENT) IS VALID:
//         IF VALUE IS LESS THAN 26:
//             IF VALUE IS LESS THAN 13:
//                 OUTPUT += INFO[25 - VALUE]
//                ELSE:
//                 OUTPUT += INFO[12 - VALUE%13]
//         ELSE:
//             IF VALUE IS LESSER THAN 25+13:
//                 OUTPUT += INFO[51 - VALUE%26]
//             ELSE:
//                 OUTPUT += INFO[26 + VALUE%(26+13)]
// RETURN OUTPUT
var str1="AyzB"
// var b="ZbaY"
var VALUE
var OUTPUT=" "
var INFO="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
function mirrorImage(str1)
{   
    for(i=0;i<=str1.length-1;i++)
    {   
        if(INFO.indexOf(str1)<=51)
        {
            if(VALUE<26)
            {
                if(VALUE<13)
                {
                    console.log(OUTPUT += INFO[25 - VALUE])
                }
                else
                {
                    console.log(OUTPUT += INFO[12 - VALUE%13])
                }
            }
            else
            {
                if(VALUE<38)
                {
                console.log(OUTPUT += INFO[51 - VALUE%26])
                }
                else
                {
                console.log(OUTPUT += INFO[26 + VALUE%(39)])
                }
            }
        }
        else
        {
            return -1
        }
    }
        return OUTPUT
}
ans=mirrorImage(str1)//passing str1 to function
console.log(ans)