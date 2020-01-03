import React, { Component } from 'react';
import ProductTable from './ProductTable';
class ProductForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemDetails :{
                itemName : '',
                itemId : '',
                itemDesc : '',
                category : '',
                material : '',
                price : 0
            },
            itemList :[],
            itemListCopy :[]
        }
    }
    handleChange = e => {
        const { name, value } = e.target;
        let newItem = { ...this.state.itemDetails, [name]: value };
        this.setState({
          itemDetails : newItem
        });
      };
    submitItemDetails = e =>{
        e.preventDefault();
        let itemList = [...this.state.itemList,{...this.state.itemDetails}];
        this.setState({
            itemList : itemList,
            itemListCopy : itemList
        })
    }
    handleChange1 = (e) =>{
        let val = e.target.value 
        // alert(val);
        let itemList = [...this.state.itemList]
        let filterdList = itemList.filter((ele) =>{
          return ele.material == val
        });
        this.setState({
          itemListCopy : filterdList
        })

    }
    handleChange2 = (e) =>{
        let val = e.target.value
        // alert(val)
        let itemList = [...this.state.itemList]
        let filterdList = itemList.filter((ele) =>{
          return ele.category == val
        });
        this.setState({
          itemListCopy : filterdList
        })
    }

    render() { 
        return ( 
            <div className="container-fluid bg-dark row">
            <div className="col-lg-3 col-sm-12 text-light h3 p-3">
              <form onSubmit={this.submitItemDetails}>
                <h1 className="text-warning">Enter Item Details</h1>
                <div className="form-group">
                  <label htmlFor="name">Item Name</label>
                  <input
                    id="name"
                    name="itemName"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="itemId">Item Id</label>
                  <input
                    id="itemId"
                    name="itemId"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">category</label>
                  <select
                    className="form-control"
                    onChange={this.handleChange}
                    name="category"
                  >
                    <option value="" selected disabled>
                      choose
                    </option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Dining">Dining</option>
                    <option value="Appliances">Appliances</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="material">material</label>
                  <select
                    className="form-control"
                    onChange={this.handleChange}
                    name="material"
                  >
                    <option value="" selected disabled>
                      choose
                    </option>
                    <option value="Teak">Teak</option>
                    <option value="Oak">Oak</option>
                    <option value="Walnut">Walnut</option>
                    <option value="Maple">Maple</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="itemDsc">Item Description</label>
                  <input
                    id="itemDsc"
                    name="itemDesc"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    id="price"
                    name="price"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
               
                <button type="submit" className="btn-lg btn-warning float-right">
                  Submit
                </button>
              </form>
        </div>
        <div></div>
            <div className="col-lg-9 col-sm-12 text-light h3 ">
            <div className="row p-3 justify-content-center">
        <div className="col-lg-4 col-sm-12">
        <form className="mx-3">
            <div className="form-group">
            <label htmlFor="category">category</label>
                  <select
                    className="form-control"
                    onChange={this.handleChange2}
                    name="category"
                  >
                    <option value="" selected disabled>
                      Choose Category
                    </option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Dining">Dining</option>
                    <option value="Appliances">Appliances</option>
                  </select>
            </div>
            </form>
        </div>
        <div className="col-lg-4 col-sm-12">
          <form className="mx-3">
            <div className="form-group">
            <label htmlFor="material">material</label>
                  <select
                    className="form-control"
                    onChange={this.handleChange1}
                    name="material"
                  >
                    <option value="" selected >
                      Choose Material
                    </option>
                    <option value="Teak">Teak</option>
                    <option value="Oak">Oak</option>
                    <option value="Walnut">Walnut</option>
                    <option value="Maple">Maple</option>
                  </select>
            </div>
          </form>
        </div>
      </div>
      
              <h1 className="text-center"> Display Items</h1>
              <div className="row justify-content-center p-3">
                <ProductTable itemLs={this.state.itemListCopy}/>
              </div>
            </div>
          </div>
        );
    }
}
 
export default ProductForm;