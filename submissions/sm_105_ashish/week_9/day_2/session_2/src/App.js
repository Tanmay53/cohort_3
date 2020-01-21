import React, { Component } from 'react'
import './App.css';
import {Link} from 'react-router-dom'
import CourseTemplate from './CourseTemplate'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from './Product';
import AllProducts from './AllProducts';
import NotFound from './NotFound'
import Login from './login';
import Cart from './Cart';
import {Route,Switch} from 'react-router-dom'


export default class App extends Component {
  constructor(){
    super()
            this.state={
                productArr: [
                  {
                    name: "SmartPhone",
                    price: 5999,
                    id: 0,
                    url: "/Images/iphone.jpg"
                  },
                  {
                    name: "Headphone",
                    price: 20,
                    id: 1,
                    url: "/Images/headphone.jpg"
                  },
                  {
                    name: "Kit",
                    price: 50,
                    id: 2,
                    url: "/Images/kit.jpg"
                  },
                  {
                    name: "Husky",
                    price: 10450,
                    id: 3,
                    url: "/Images/husky.jpg"
                  },
                  {
                    name: "Nokia-lumia",
                    price: 8500,
                    id: 4,
                    url: "/Images/lumia.jpg"
                  },
                  {
                    name: "Pug",
                    price: 10000,
                    id: 5,
                    url: "/Images/pug.jpg"
                  },
                {
                    name: "SmartPhone",
                    price: 5999,
                    id: 6,
                    url: "/Images/iphone.jpg"
                  },
                  {
                    name: "Headphone",
                    price: 20,
                    id: 7,
                    url: "/Images/headphone.jpg"
                  },
                  {
                    name: "Kit",
                    price: 50,
                    id: 8,
                    url: "/Images/kit.jpg"
                  },
                  {
                    name: "Husky",
                    price: 10450,
                    id: 9,
                    url: "/Images/husky.jpg"
                  },
                  {
                    name: "Nokia-lumia",
                    price: 8500,
                    id: 10,
                    url: "/Images/lumia.jpg"
                  },
                  {
                    name: "Pug",
                    price: 10000,
                    id: 11,
                    url: "/Images/pug.jpg"
                  }
                            ],
                isAuthenticated: false,
                userArr:[],
                newUser:{userName:'',password:''},
                inputUser:'',
                inputPassword:'',
                isSigningUp:false,
                cartList:[]
              }
        }
        updateCart =(val) =>{
         let list=[...this.state.cartList,val]
         this.setState({
           cartList:list
         })
        console.log(val)
        }
        fakeAuth = () => {
            this.setState({
              isAuthenticated: !this.state.isAuthenticated
            });
          };
       
        addUser = () =>{
            let issignup=this.state.isSigningUp
            this.setState({
                isSigningUp:!issignup
            })
        }
        alreadyMember = () =>{
          let isuser=this.state.isSigningUp
          this.setState({
              isSigningUp:!isuser
          })
        }
  render() {
    return (
      <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-dark white-color">
                        <Link to="/" className="m-2"><img src="https://www.masaischool.com/static/img/logo.svg" alt="logo"></img></Link>
                        <Link to="/courses" className="m-2 text-dark">Course</Link>
                        <Link to="/contact" className="m-2 text-white bg-danger">Apply Now</Link>
                        <Link to="/about" className="m-2 text-dark">Fees & ISA</Link>
                        <Link to="/products" className="m-2 text-dark">Products</Link>
                        <Link  to="/carrer" className="m-2 text-dark">Hire Masai Students</Link>
                        <Link to="/auth" className="m-2">login/signup</Link>
                        { this.state.isAuthenticated?(
                        <button  onClick={this.fakeAuth}className="btn btn-danger ml-auto">logout</button>
                        ):(<></>)
                        }
                    </nav>
                    
                    <Switch>
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/contact" component = {Contact} />
                    <Route path = "/courses" component = {CourseTemplate} />
                    <Route path = "/auth" component = {
                        (props)=><Login
                         isAuthenticated={this.state.isAuthenticated}
                          fakeAuth={this.fakeAuth} 
                          isSigningUp={this.state.isSigningUp}
                          checkAuth={this.checkAuth}
                          alreadyMember={this.alreadyMember} 
                          addUser={this.addUser}
                          /> }/>
                    <Route path ="/cart" component ={(props)=><Cart isAuthenticated={this.state.isAuthenticated} cartList={this.state.cartList} />}/>
                    <Route path = "/products" exact render = {props => <AllProducts productArr = {this.state.productArr} {...props} /> }/>
                    <Route path = "/products/:id" render = {props => <Product productArr = {this.state.productArr} checkauth={this.props.checkauth} {...props} updateCart={this.updateCart} />} />
                    <Route component = {NotFound} />
                    </Switch>
      </div> 
    )
  }
}

