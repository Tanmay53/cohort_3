var arra = [1,2,3,4,4,5]
var a = 4
var index_arra = []

for(i =0 ; i < arra.length; i++)
{
    
        if( a == arra[i])
        {
            index_arra.push(i)
        }

}
if(index_arra.length == 0) // check number exists
{
    console.log(-1)
}
else {
    console.log(index_arra) // disply position in an array 
}