import React from 'react';
class Product extends React.Component{
    render(){
        return(
            <div className="mt-5">
                <p className="h1 text-success text-center">Cart-o-Mania</p>
                <input onChange={this.props.inputX} type="text" class="form-control col-4 mx-auto mb-1" name="" id="" name="name"  placeholder="Item Name"/>
                <input onChange={this.props.inputX} type="text" class="form-control col-4 mx-auto mb-1" name="" id="" name="id"  placeholder="Item Id"/>
                <input onChange={this.props.inputX} type="text" class="form-control col-4 mx-auto mb-1" name="" id="" name="desc"  placeholder="Item Desc"/>
                {/* <input onChange={this.props.inputX} type="text" class="form-control col-4 mx-auto mb-1" name="" id="" name="category"  placeholder="Item Category"/> */}
                <div className="row">
                <select onChange={this.props.inputX} class="custom-select col-4 mb-1 mx-auto bg-light" name="category">
                    <option selected disabled>Select Category</option>
                    <option>Personal use</option>
                    <option>Commerical use</option>
                    <option>Accessories</option>
                    <option>Digital item</option>
                </select>
                </div>
                <input onChange={this.props.inputX} type="number" class="form-control col-4 mx-auto mb-1" name="" id="" name="price"  placeholder="Item Price"/>   
            </div>
        )
    }
}
export default Product;