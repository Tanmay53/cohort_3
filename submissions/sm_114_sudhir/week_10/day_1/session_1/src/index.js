import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {store} from './store'


const elem = document.getElementById('root')
const render = () =>  ReactDOM.render(<App/>,elem)
render()
store.subscribe(render);

