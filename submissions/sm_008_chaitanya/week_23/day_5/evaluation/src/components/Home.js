import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar />
                <div className="container-fluid jumbotron-fluid">
                    <img src="https://wallpaperaccess.com/full/1379437.jpg" alt="background" className="img-fluid backgnd"/>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
export default Home