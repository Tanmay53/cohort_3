import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../Navbar/Home'
import Mac from '../Navbar/Mac'
import Ipad from '../Navbar/Ipad'
import Iphone from '../Navbar/Iphone'
import Music from '../Navbar/Music'
import Cart from '../Navbar/Cart'
import AboutUs from '../Pages/AboutUs'
import Faq from '../Pages/Faq'
import ContactUs from '../Pages/ContactUs'

export default function Routes() {
    return (
        <div>
            <Route path='/' exact component={Home} />
            <Route path='/mac' component={Mac} />
            <Route path='/ipad' component={Ipad}/>
            <Route path='/iphone' component={Iphone} />
            <Route path='/music' component={Music}/>
            <Route path='/cart' component={Cart} />
            <Route path='/aboutUS' component={AboutUs}/>
            <Route path='/faq' component={Faq}/>
            <Route path='/contactUs' component={ContactUs} />
        </div>
    )
}