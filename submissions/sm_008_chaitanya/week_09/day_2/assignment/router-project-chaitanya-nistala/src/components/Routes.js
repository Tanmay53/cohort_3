import React from 'react'
import Home from './Home'
import {Route} from 'react-router-dom'
import Navbar from './Navbar'
import Enterprise from './Enterprise'
import Blog from './Blog'
import Events from './Events'
import Referal from './Referal'
import Contact from './Contact'
import Booktour from './Booktour'
import Footer from './Footer'

class Routes extends React.Component{
    constructor(props){
        super(props)
        this.location=['Banglore','Delhi','Goa','Gurugram','Hyderabad','Mumbai','Navi Mumbai','Noida','Pune']
        this.about=['About us','Contact','Enterprise','Coworking','Channel Partners','Boosters','FAQs','Media','Careers','Space Partnerships','Privacy Policy']
    }
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Route path="/" exact render = {() => <Home />}/>
                <Route path="/enterprise" exact render = {() => <Enterprise />}/>
                <Route path="/blog" exact render={()=><Blog />}/>
                <Route path="/events" exact render={()=><Events />}/>
                <Route path="/referal" exact render={()=><Referal />}/>
                <Route path="/contact" exact render={()=><Contact />}/>
                <Route path="/booktour" exact render={()=><Booktour />}/>
                <Footer location={this.location}
                        about={this.about}/>
            </React.Fragment>
        )
    }
}
export default Routes