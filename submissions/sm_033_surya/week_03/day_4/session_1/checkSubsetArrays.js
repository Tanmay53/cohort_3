var first = [1,4]
var second = [1,2,3,4,5,6]
var x = 0 
function checksub(one,two){
for( var i = 0 ; i <= one.length-1 ; i++)
            {
            for(var j = 0; j <= two.length-1;j++)
             {
                if(one[i] == two[j]) //comparing elements of array                    
                x++                               
             }
                    
            }
        if(x == one.length)
        {
            console.log("Given array is subset of second array")
        }
        else{
            console.log("Given array is not subset of seccond array")
        }
    }
checksub(first,second) 


// sample test --
//  first = [1,4,5,6,10]
//  second = [1,2,3,4,5,6]

// first = [1,4]
// second = [1,2,3,4,5,6]