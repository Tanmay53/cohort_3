import React from 'react'
import axios from 'axios'
import uuid from 'react-uuid'
import {Route,Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import DisplayProduct from './DisplayProduct'
import Addcart from './Addcart'
import Notfound from './Notfound'

class Routes extends React.Component{
   constructor(props) {
      super(props)
      this.state = {
         data: [],
         isdata:false,
         cartdata:[],
         iscartdata:false,
      }
   }

   componentDidMount(){
      axios.get('/product.json')
      .then(res => {
         if(res){
            const productData=res.data.data
            this.setState({
               data: productData.map((item) => {
                 return {...item, id: uuid(),count:1,total:item.price}
               }),
               isdata:true
            })
         }
      })
   }

   loadcart=(proddata)=>{
      let flag=false
      this.state.cartdata.map(element=>{
         if(element.id===proddata.id){
           flag=true
         }
      })
      if(flag===true){
         alert("Product already loaded to cart..!")
      }
      else{
         this.setState({
            cartdata:[...this.state.cartdata,proddata],
            iscartdata:true
         })
      }
   }
   
   handleinc=(prodId,price)=>{
      this.setState({
         cartdata:this.state.cartdata.filter(element=>{
            if(element.id===prodId){
               element.count +=1
               element.total = element.count * price
               return element
            }
            else{
               return element
            }
         })
      })
   }

   handledec=(prodId,price)=>{
      this.setState({
         carddata:this.state.cartdata.filter(element=>{
            if(element.id===prodId){
               if(element.count===1){
                  element.total = element.count * price
                  return element
               }
               else{
                  element.count -= 1
                  element.total = element.count * price
                  return element 
               }
            }
            else{
               return element
            }
         })
      })
   }

   handledel=(id)=>{
      this.setState({
        cartdata:this.state.cartdata.filter(element=>element.id!==id),
      })
   }

   render(){
      return(
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route path="/" exact render={()=><Home />}/>
                    <Route path="/about" exact render={()=><About />}/>
                    <Route path="/contact" render={()=><Contact />}/>
                    <Route path="/products" exact render={(props)=>this.state.isdata && <Products productData={this.state.data}{...props}/>}/>
                    <Route path="/products/:id" exact render={(props)=>this.state.isdata && <DisplayProduct productData={this.state.data}{...props}
                                                                                                            loadfunc={this.loadcart}/>}/>
                    <Route path="/cart" exact render={()=>this.state.iscartdata && <Addcart cart={this.state.cartdata}
                                                                                            inc={this.handleinc}
                                                                                            dec={this.handledec}
                                                                                            count={this.state.count}
                                                                                            del={this.handledel}/>}/>
                    <Route component={Notfound}/>
                </Switch>
            </React.Fragment>
      )
   }
}
export default Routes
