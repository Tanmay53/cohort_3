import React from 'react'
import Navbar from "../components/Navbar"
import InitialState from "../redux/initialState"
import Order from "./Order"



function Home() {
    return (
        <div>
            <Navbar />
            <Order />
            <InitialState />
        </div>
    )
}

export default Home
