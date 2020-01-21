import React from 'react'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: [],
            ids: [],
            desc: [],
            category: [],
            price: []
        }
    }
    handleSubmit=(data)=>{
        console.log(data)
        let nameArr=[]
        this.setState({
            name:[...nameArr,data.name]
        })
    }    
    render(){
        return (
            <div>
                <ProductForm  callback={this.handleSubmit}/>
                <ProductTable nameout={this.state.name} />
            </div>
        )
    }
}

export default Product