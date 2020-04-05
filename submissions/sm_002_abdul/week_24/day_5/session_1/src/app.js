import React from "./react/index"
import {ReactDOM} from "./react/index"

let button = document.querySelector('button')

console.log(input1,input2)


const root = document.getElementById('root')

button.addEventListener('click', ()=>{
  let input1 = Number(document.getElementById('input1').value)
  let input2 = Number(document.getElementById('input2').value)
  let sum = input1+input2
  let result = React.createElement('h1',{},sum)
  ReactDOM.render(result,root)
})

