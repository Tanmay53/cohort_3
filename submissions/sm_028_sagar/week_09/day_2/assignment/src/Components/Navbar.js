import React from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import About from './About'
import Mens from './Categories/Mens'
import Product from './Categories/Products'

const products = [
            {
                name:'shirt1',
                id:'01',
                category:'shirts',
                path:'/productData/men/shirt/shirt1.jpeg',
                price:200,
                detail:'this is first shirt'
            },
            {
                name:'shirt1',
                id:'02',
                category:'shirts',
                path:'/productData/men/shirt/shirt2.jpeg',
                price:200,
                detail:'this is first shirt'
            },
            {
                name:'shirt1',
                id:'03',
                category:'shirts',
                path:'/productData/men/shirt/shirt3.jpeg',
                price:200,
                detail:'this is first shirt'
            },
            {
                name:'pant1',
                id:'11',
                category:'pants',
                path:'/productData/men/pant/pant1.jpeg',
                price:200,
                detail:'this is first pant'
            },
            {
                name:'pant2',
                id:'12',
                category:'pants',
                path:'/productData/men/pant/pant2.jpeg',
                price:200,
                detail:'this is first pant'
            },
            {
                name:'pant3',
                id:'13',
                category:'pants',
                path:'/productData/men/pant/pant3.jpg',
                price:200,
                detail:'this is first pant'
            },
            {
                name:'shoe1',
                id:'21',
                category:'shoes',
                path:'/productData/men/shoes/shoe1.jpeg',
                price:200,
                detail:'this is first shoe'
            },
            {
                name:'shoe2',
                id:'22',
                category:'shoes',
                path:'/productData/men/shoes/shoe2.jpeg',
                price:200,
                detail:'this is first shoe'
            },
            {
                name:'shoe3',
                id:'23',
                category:'shoes',
                path:'/productData/men/shoes/shoe3.jpeg',
                price:200,
                detail:'this is first shoe'
            }
        
]

const Categories = () =>{
    return <div>Categories Page</div>
}

const Home = () =>{
    return (<>

    </>)
}

const alert = () =>{
   return (<div className="container align-items-center mt-5 alert alert-danger" role="alert">
             <p className=''>Sorry for Inconvience caused, Site is under construction !</p>
    </div>)
}

const NotFound = () =><h1 className='container'>ERROR:404 Page Not Found</h1>

export default function Navbar() {
    return (
        <>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className='container'>
                <Link className="navbar-brand" to='/doShop'><i className="fa fa-shopping-cart" aria-hidden="true"> doShop</i></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className="btn bg-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Categories
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link to='/mens' className="dropdown-item">Men's Wear</Link>
                                        <Link to='/womens' className="dropdown-item">Women's Wear</Link>
                                        <Link to='/children' className="dropdown-item">Children Wear</Link>
                                        <Link to='/electronics' className="dropdown-item">Electronics</Link>
                                        <Link to='/furniture' className="dropdown-item">Furniture</Link>
                                    </div>
                                    </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/alert'>Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/alert'>Cart</Link>
                            </li>
                        </ul>
                    </div>     
               </div> 
             </nav>
             <Switch>
                 <Route path='/doShop' exact component = {Home}></Route>
                 <Route path='/categories'  component = {Categories}></Route>
                 <Route path='/about' ><About /></Route>
                 <Route exact path='/mens' render={(props)=><Mens productArr={products} {...props} />} />
                 <Route path='/mens/:id' render={(props)=><Product productArr={products} {...props} />} />
                 <Route path='/alert' component={alert} />
                 <Route component={NotFound}/>
             </Switch>
        </>
    )
}
