import React from 'react'
import {Route, Link, BrowserRouter} from 'react-router-dom'
import Routing from './component/Routing'
import Navbar from './component/Home/navbar'

export default class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <React.Fragment>
                    <Navbar/>
                    <Routing />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}