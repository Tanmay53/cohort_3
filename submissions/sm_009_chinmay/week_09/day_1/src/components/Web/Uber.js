import React from 'react'
import Navbar from './Navbar'
import HomePageDetails from './HomePageDetails'
import ViewCitiesInfo from './ViewCitiesInfo'
import Safety from './Safety'
import Contact from './Contact'
import SignUp from './SignUp'
import Footer from './Footer'

const Uber = () => {
    return (
        <div>
            <Navbar />
            <HomePageDetails />
            <ViewCitiesInfo />
            <Safety />
            <Contact />
            <SignUp />
            <Footer />
        </div>
    )
}

export default Uber;