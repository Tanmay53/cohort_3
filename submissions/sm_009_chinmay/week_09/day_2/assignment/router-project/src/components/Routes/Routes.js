import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../Navbar/Home'
import Mac from '../Navbar/Mac'
import Ipad from '../Navbar/Ipad'
import Iphone from '../Navbar/Iphone'
import Music from '../Navbar/Music'
import Cart from '../Navbar/Cart'
import AboutUs from '../Pages/AboutUs'
import Faq from '../Pages/Faq'
import ContactUs from '../Pages/ContactUs'
import {Products, ProductItem} from '../Pages/Products'
import NotFoundPage from '../Pages/NotFoundPage'

const productArr = [
    {id:'001',
    name:'Macbook Pro', 
    header: 'MacBook Pro',
    briefInfo: 'Brief Info about macbook pro',
    detailedInfo: 'Detailed Info about macbook pro',
    price: 100000,
    imgSrc:'https://zdnet1.cbsistatic.com/hub/i/r/2019/11/21/a2a18525-2b54-4aea-ae9c-0310d48fb3c6/thumbnail/770x433/bae4e97041d35bb70ac9cb9e2ea2fbcc/macbook-pro-16-header.jpg'},

    {id:'002', 
    header: 'Macbook Air', 
    name:'Macbook Air', 
    briefInfo: 'Brief Info about macbook air',
    detailedInfo: 'Detailed Info about macbook air',
    price: 80000, 
    imgSrc:'https://www.pfhub.com/wp-content/uploads/2014/10/MacBook-Air.png'},
    {id:'003', 
    header: 'iPad Pro', 
    name:'iPad Pro', 
    briefInfo: 'Brief Info about iPad pro',
    detailedInfo: 'Detailed Info about iPad pro',
    price: 50000, 
    imgSrc:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-201810_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1540585651495'},
    {id:'004', 
    header: 'iPhone 11', 
    name:'iPhone 11', 
    briefInfo: 'Brief Info about iPhone 11',
    detailedInfo: 'Detailed Info about iPhone 11',
    price: 70000, 
    imgSrc:'https://images-na.ssl-images-amazon.com/images/I/61m6DjujESL._SX522_.jpg'}
]

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/mac' component={Mac} />
                <Route path='/ipad' component={Ipad}/>
                <Route path='/iphone' component={Iphone} />
                <Route path='/music' component={Music}/>
                <Route path='/cart' component={Cart} />
                <Route path='/aboutUS' component={AboutUs}/>
                <Route path='/faq' component={Faq}/>
                <Route path='/contactUs' component={ContactUs} />
                <Route path='/products' render = {(props)=><Products {...props} data={productArr}/>} />
                <Route path='/product/:id' render = {(props)=><ProductItem {...props} data={productArr}/>} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    )
}