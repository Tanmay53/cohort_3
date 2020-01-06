import React, { Component } from 'react'
import CartTable from './CartTable'

export default class CartForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            arr: [],
            newProduct: {
                itemName:"",
                itemId:"",
                itemDescription:"",
                category:"",
                price:""
            },
            total:""
        }
    }

    handleChange = (e)=>{
        // console.log(e.target.value);
        let enteredProduct = {...this.state.newProduct, [e.target.name]:e.target.value}
        this.setState({
            newProduct: enteredProduct
        })
    }

    onSubmit = () =>{
       // e.preventDefault();
        let productArr = [...this.state.arr, {...this.state.newProduct}];
        let newTotal = 0
        for(let i=0; i<productArr.length; i++)
        {
          newTotal += Number(productArr[i].price)
        }
        // console.log(productArr)
        this.setState({
            arr: productArr,
            total:newTotal
        })
    }
    render() {
        return (
            <div className="container border border-dark m-4">
                <div className="row">
                    <div className="col-4">
                      <h1>Add to cart</h1>
                        <form onSubmit={(e)=>e.preventDefault()}>
                           <div className="form-group">
                             <label htmlFor="exampleInputEmail1">Item Name</label>
                             <input onChange={this.handleChange} name="itemName" type="text" className="form-control"  aria-describedby="textHelp" />
                           </div>
                           <div className="form-group">
                             <label htmlFor="exampleInputtext1">Item Id</label>
                             <input onChange={this.handleChange} name="itemId" type="text" className="form-control"  aria-describedby="textHelp" />
                           </div>
                           <div className="form-group">
                             <label htmlFor="exampleInputtext1">Item Description</label>
                             <input onChange={this.handleChange} name="itemDescription" type="text" className="form-control"  aria-describedby="textHelp" />
                           </div>
                           <div className="form-group">
                             <label htmlFor="exampleFormControlSelect1">Category</label>
                             <select onChange={this.handleChange} name="category" className="form-control" >
                               <option>Choose...</option>
                               <option>Clothes</option>
                               <option>Accessories</option>
                               <option>Footwear</option>
                               <option>Electronics</option>
                             </select>
                           </div>
                           <div className="form-group">
                             <label htmlFor="exampleInputtext1">Price</label>
                             <input onChange={this.handleChange} name="price" type="text" className="form-control"  aria-describedby="textHelp" />
                           </div>
                           <button onClick={this.onSubmit} type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-7 mx-auto p-2">
                        <CartTable newArr={this.state.arr} />
                        <div className="border border-dark text-center h2">Total:{this.state.total} </div>

                    </div>
                </div>
            </div>
        )
    }
}
