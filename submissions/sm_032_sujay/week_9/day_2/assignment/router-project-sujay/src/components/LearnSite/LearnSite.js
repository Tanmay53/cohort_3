import React from 'react'

import {Route,Link} from 'react-router-dom';
import Header from './Header'

import Epic from './Epic'
import GoodStuff from './GoodStuff'
import Volunteer from './Volunteer'

import Recreation from "./Recreation"
import Footer from './Footer'



export default class LearnSite extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Header/>

          <Footer/>
           
            
            </React.Fragment>
        )
    }
}
