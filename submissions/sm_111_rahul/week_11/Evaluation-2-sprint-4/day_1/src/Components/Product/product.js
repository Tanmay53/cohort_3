import React, { Component } from 'react';
import ProductForm from './ProductForm';
class Product extends Component {
    render() { 
        return ( 
         <div className="py-4">
             <ProductForm />
         </div>
         );
    }
}
 
export default Product;