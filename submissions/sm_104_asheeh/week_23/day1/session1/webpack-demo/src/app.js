import React, {ReactDOM} from './React/index'
import List from '../src/components/List'
import Navbar from './components/Navbar'


const elem = React.createElement('div', {}, Navbar, List)

const Elem = (
    <div>
        Hello, {10 + 5}
        {Navbar}
        {List}
    </div>
)

const test = (<div>Hello</div>)

console.log(test)

// return type is an object
// props: Object {id: "li1", children: "list item 1"}
// type: "li"

const root = document.getElementById('root')

ReactDOM.render(elem, root)

console.log('hello world')

// Things covered
// 1. Webpack
// 2. Babel
// 3. React
// 4. JSX