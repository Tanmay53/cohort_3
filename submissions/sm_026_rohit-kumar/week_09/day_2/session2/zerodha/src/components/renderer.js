import React from 'react'
import NavBar from '../components/navBar'
import RouterMapper from './routeMapper'

export default class Renderer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <NavBar/>
                <RouterMapper/>
                
            </>
        )   
    }
}
