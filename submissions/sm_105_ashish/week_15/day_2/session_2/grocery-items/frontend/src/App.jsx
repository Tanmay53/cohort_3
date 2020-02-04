import React, { Component } from 'react'
import axios from "axios"
import Home from './components/Home'
import FormPage from './components/Form'
import EditForm from './components/EditForm'
import {Link,Route,Switch,Redirect} from 'react-router-dom'
import PurchasedList from './components/PurchasedList'
import DeleteItem from './components/DeleteItem'
import Purchased from './components/Purchased'


export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            arr: [],
        }
    }
    updateState = ()=>{
        return( 
            axios.get("http://127.0.0.1:5000/listing")
        .then(res => {
            const resArr = res.data.arr
            this.setState({
                arr: [...resArr]
            })
        })
        .catch(res => {
            console.log(res)
        }))
    }
    componentDidMount() {
        this.updateState()
    }

    
    markPurchased = (e) =>{
        axios.post("http://127.0.0.1:5000/purchased",{"item_no":Number(e)})
        .then(res=>{
            alert(res.data.purchased_items)
            this.updateState()
        })
    }
    
    
    render() {
        return (
            <>
            <div className="container-fluid">
                <div className ="row text-center">
                    <div className ="col-8 m-auto">
                        <Link  className ="btn btn-info p-3 m-2" to ="/Add">Add items to the item list</Link>
                        <Link  className ="btn btn-dark p-3 m-2" to ="/done">Show purchased item from the item list</Link>

                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path ='/' component = {(props) =><Home  arr = {this.state.arr} deleteItem = {this.deleteItem} markPurchased = {this.markPurchased} updateItemNo = {this.updateItemNo}/>}></Route>
                <Route exact path ='/Add' component = {()=><FormPage updateState = {this.updateState}/>}></Route>
                <Route exact path ='/done' component = {()=><PurchasedList/>}></Route>
                <Route exact path ='/change/:id' component = {(props)=><EditForm {...props} arr ={this.state.arr}  updateState = {this.updateState}/>}></Route>
                <Route exact path ='/delete/:id' component = {(props)=><DeleteItem {...props} arr ={this.state.arr} updateState = {this.updateState}/>}></Route>
                <Route exact path ='/mark/:id' component = {(props)=><Purchased {...props} arr ={this.state.arr} updateState = {this.updateState}/>}></Route>
            </Switch>
            </>
        )
    }
}
