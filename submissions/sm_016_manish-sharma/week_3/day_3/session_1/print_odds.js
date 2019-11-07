function odd(num){                                    //defining function
    if (Number(num) % 2 != 0) {                       //checking for odd number
        for(i=1;i<=num;i=i+2)                         //loop from 1 to the given input, incrementing by 2
        console.log(i)                                //ouput if odd
    }
    else{                                             //checking for even number
        console.log("The number is even")             //output if even  
    }
}

odd(11)
odd(10)