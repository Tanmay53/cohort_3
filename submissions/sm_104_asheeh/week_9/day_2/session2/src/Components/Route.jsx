import {Route} from "react-router-dom"
import Home from './Home'
import About from './About'
import Career from './Career'
import Register from './Register'
import FrontEnd from './Career/FrontEnd'
import BackEnd from './Career/BackEnd'
import FullStack from './Career/FullStack'
import React from 'react'
import Details from '../Components/Details'

//const 
const dummy = [
    {
        name: "Ashish",
        id: 1,
        skill: "Front-End Developer",
        salary: 20000000
    },
    {
       name: "Sudhir",
       id: 2,
       skill: "Back-End Developer",
       salary: 200000000
    },
    {
       name: "Suyash",
        id: 3,
        skill: "Full Stack Developer",
        salary: 25000000
    },
    {
       name: "Rahul",
        id: 4,
        skill: "Front-End Developer",
        salary: 220000000
    }]

function MyRoute(props) {
    //console.log(props)
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={(props)=><About  dummy ={dummy} {...props}/>} />
            <Route path="/career" component={Career} />
            <Route path="/register" component={Register} />
            <Route path="/career/frontEnd" component={FrontEnd} />
            <Route path="/career/backEnd" component={BackEnd} />
            <Route path="/career/fullStack" component={FullStack} />
            <Route exact to= "/about/:id" component={(props) => <Details {...props}dummy={dummy}/>} />

        </>
    )
}

export default MyRoute
