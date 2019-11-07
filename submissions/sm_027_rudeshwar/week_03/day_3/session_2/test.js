// functions

function printMasai(){
    console.log('Masai')
  }
  
  printMasai()
  
  function printSum(){
    var x = 100
    var y = 100
    console.log('printSum of',x,y,'is',x + y)
  }
  
  printSum()
  
  function printSumArg(num1, num2){
  //   default values
    num1 = num1 || 0
    num2 = num2 || 0
    console.log('printSumArg of',num1,num2,'is',num1 + num2)
    return num1+num2
  }
  
  printSumArg(100,200)
  
  value = printSumArg(50,100)
  
  console.log('value = printSumArg(50,100)',value)
  
  function square(num){
    return num*num
  }
  
  console.log('square of 5 is', square(5))
  
  function squareMultiply(num,num2){
  //   call another function from this fucntion
    var val = square(num)
    return val*num2
  }
  
  console.log('square multiply is',squareMultiply(5,10))