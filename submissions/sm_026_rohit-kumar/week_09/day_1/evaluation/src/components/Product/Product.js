import React from 'react'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'


class Product extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products : [],
            toShowProd : []
        }
    }

    handleFilters = (filters) => {

        console.log('fil : ', filters)

        let prods = this.state.products
        if(filters.category !='All')
            prods = prods.filter((prod) => {
                return prod.category == filters.category
            })
        
        if(filters.cod !='All')
            prods = prods.filter((prod) => {
                return prod.cod == filters.cod
            })

        console.log('prods : ', prods)    

        this.setState({
            toShowProd : prods
        })
    }

    updateProductData = (product) => {
        let _products = this.state.products
        _products.push(product)
        this.setState({
            products : _products
        })
    }

    componentDidMount() {
        this.setState({
            toShowProd : this.state.products
        })
        
    }
 
    render(){
        return (
            <div>
                <ProductForm callbackUpdateProductData = {this.updateProductData} />
                <ProductTable productData = {this.state.toShowProd} 
                              callbackHandleFilters = {this.handleFilters}/>
            </div>
        )
    }

}

export default Product