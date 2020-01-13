import React from 'react';
import Navbar from './Navbar'
import Part1 from './Part1'
import Business from './Business'
import Explore from './Explore'
import Footer from './Footer'

class PVR extends React.Component{
    render(){
        return(
            <>
            <Navbar />
            <Part1 />
            <Business />
            <Explore />
            <Footer />
            </>
        )
    }
}


export default PVR
