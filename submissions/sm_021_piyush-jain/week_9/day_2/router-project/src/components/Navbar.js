import React from "react";
import { Route, Link,Switch} from "react-router-dom";
import Men from './Men'
import Women from './Women'
import Kids from './Kids'
import Contact from './Contact'
import Faq from './Faq'
import About from './About'
import ProductItem from './ProductItem'
import WomenItem from './WomenItem'
import KidItem from './KidItem'
import Cart from './Cart'
import NotFound from './NotFound'
const MenArr = [
    {
        id: 1,
        name: "Shirt"
    },
    {
        id: 2,
        name: "T-Shirt"
    }
]
const WomenArr = [
    {
        id: 1,
        name: "Shirt"
    },
    {
        id: 2,
        name: "T-Shirt"
    }
]
const KidArr = [
    {
        id: 1,
        name: "Shirt"
    },
    {
        id: 2,
        name: "T-Shirt"
    }
]
class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            cart:[]
        }
    }
    handleAdd=(data)=>{
        this.setState({
            cart:[...this.state.cart,data]
        })
        console.log(this.state.cart)
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <div class="Navbar">
                        <div><Link to="/">HOME</Link></div>
                        <div><Link to="/MEN">MEN</Link></div>
                        <div><Link to="/WOMEN">WOMEN</Link></div>
                        <div><Link to="/KIDS">KIDS</Link></div>
                        <div><Link to="/CONTACT">CONTACT US</Link></div>
                        <div><Link to="/CART"><img src="/cart.jpg" /></Link></div>
                    </div>
                    <img class="my-5 w-100" src="/offer.jpg" alt="" />
                    {/* <Route path="/" exact component={Home}/> */}
                    <div class="footer">
                        <div ><img class="iconSize" src="/fb.png" alt="" /></div>
                        <div ><img class="iconSize" src="/instagram.jpeg" alt="" /></div>
                        <div><Link to="/FAQ">FAQ</Link></div>
                        <div><Link to="/CONTACT">CONTACT</Link></div>
                        <div><Link to="/ABOUT">ABOUT US</Link></div>
                    </div>
                    <Switch>
                        <Route path="/MEN" exact render={props => <Men prod={MenArr} {...props} />} />
                        <Route path="/WOMEN" exact render={props => <Women prod={WomenArr} {...props} />} />
                        <Route path="/KIDS" exact render={props => <Kids prod={KidArr} {...props} />} />
                        <Route path="/CONTACT" exact component={Contact} />
                        <Route path="/FAQ" exact component={Faq} />
                        <Route path="/ABOUT" exact component={About} />
                        <Route path="/MEN/:id" render={props => <ProductItem prod={MenArr} {...props}  />} />
                        <Route path="/WOMEN/:id" render={props => <WomenItem {...props} />} />
                        <Route path="/KIDS/:id" render={props => <KidItem prod={KidArr} add={this.handleAdd}{...props}  />} />
                        <Route path="/CART" render={props => <Cart data={this.state.cart} {...props} />} />
                        <Route path component={NotFound} />
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}
export default Navbar