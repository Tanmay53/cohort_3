import React from 'react'
import ProductTable from './CartTable'
import ProductForm from './CartForm'

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            arr:[],
            total:''
        }
    }
    handleSubmit=(data)=>{
        // console.log(data)
        let nameArr=this.state.arr
        let tPrice=this.state.total
        this.setState({
            arr:[...nameArr,data],
            total:Number(tPrice)+Number(data.price)
        })
    }    
    render(){
        return (
            <div>
                <ProductForm  callback={this.handleSubmit}/>
                <br></br>
                <ProductTable dataout={this.state.arr} priceout={this.state.total} />
            </div>
        )
    }
}

export default Cart