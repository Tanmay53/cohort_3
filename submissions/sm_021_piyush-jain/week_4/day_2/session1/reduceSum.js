var arr=[2,3,4,5,6,1,1,2,3,7,8,9,10]

//function definition

function sum(array,target){
    var newArray=arr.filter(function(element,index){
        return element>5
        }).reduce(function(sum,index){
            return sum+=index
        })
        console.log(newArray)
}

// function call

sum(arr,1)