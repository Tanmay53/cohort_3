import React, { Component } from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import MyRoute from '../../frontend/src/routes/route'


class App extends Component {
    render() {
        return (
            <Router>
                <MyRoute/>
            </Router>
        )
    }
}

export default App
