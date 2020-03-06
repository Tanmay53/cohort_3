import React from 'react'
import Home from './components/Home'
import {Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Enterprise from './components/Enterprise'
import Blog from './components/Blog'
import Events from './components/Events'
import Referal from './components/Referal'
import Contact from './components/Contact'
import Booktour from './components/Booktour'
import Footer from './components/Footer'

class App extends React.Component{
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
export default App