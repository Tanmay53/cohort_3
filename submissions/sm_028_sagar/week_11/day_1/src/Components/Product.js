import React, { Component } from 'react'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'
import Cart from './Cart'

export default class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            isShow:false,
            showText:'Product Table',
            productDB:[],
            cartDB:[],
            showCart:false,
            cartText:'Show Cart',
            sum:0
        }
    }

    handleShowTable = () =>{
        this.setState({
            isShow:!this.state.isShow,
            showText:(this.state.isShow)?'Product Table':'Add Item'
        })
    }

    handleItem = (item) =>{
        let db = this.state.productDB
        this.setState({
            productDB:[...db,item]
        })
        console.log(this.state.productDB)
    }

    handleCart = (item) =>{
        let cart = this.state.cartDB
        item.isAdded = true
        this.setState({
            cartDB:[...this.state.cartDB,item],
        })
    }

    handleShowCart = () => {
        this.setState({
            showCart:!this.state.showCart,
            isShow:!this.state.isShow,
            cartText:(this.state.showCart)?'Show Cart':'Hide Cart',
        })
        let sum = 0
        for(let i = 0; i < this.state.cartDB.length; i++){
            sum += this.state.cartDB[i].price
        }
        console.log('inside handle show cart ',sum)
        this.setState({
            sum:sum
        })
    }

    render() {
        if(this.state.isShow){
            return(
                <div className='container'>
                    <button className='btn btn-sm btn-outline-primary m-2' onClick={this.handleShowTable}>{this.state.showText}</button>
                    <button className='btn btn-sm btn-outline-warning m-2 ' onClick={this.handleShowCart}>{this.state.cartText}</button>
                    <ProductTable db={this.state.productDB} onCartClick={this.handleCart}/>
                </div>
            )
        }else if(this.state.showCart){
            return(
                <div className='container'>
                    <button className='btn btn-sm btn-outline-warning mt-2 ml-3' onClick={this.handleShowCart}>{this.state.cartText}</button>
                     <Cart db={this.state.cartDB} sum={this.state.sum}/>
                </div>  
            )
        }
        else{
            return (
                <div className='container border'>
                    <ProductForm newItem={this.handleItem} /> 
                    <button className='btn btn-sm btn-outline-primary mt-2 ml-3' onClick={this.handleShowTable}>{this.state.showText}</button>
                </div>
            )
        }
        
        
    }
}
