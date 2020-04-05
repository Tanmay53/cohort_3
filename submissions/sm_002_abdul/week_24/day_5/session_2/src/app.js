import React from "./react/index"
import {ReactDOM} from "./react/index"
import todolist from "./component/todolist"
import personalInfo from "./component/personalInfo"

const elem = React.createElement('div',{},todolist,personalInfo)
// console.log(elem)

const root = document.getElementById('root')

ReactDOM.render(elem,root)

