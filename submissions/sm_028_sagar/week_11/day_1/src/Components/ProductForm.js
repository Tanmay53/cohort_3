import React, { Component } from 'react'

export default class ProductForm extends Component {
    constructor(props){
      super(props)
      this.state = {
          name:'',
          id:'',
          desc:'',
          category:'Bedroom',
          material:'Teak',
          price:'',
          materialState:true,
      }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value,
        })
    }

    handleSubmit = (event) =>{
        
        event.preventDefault()
        let newItem = {
            name:this.state.name,
            uniqueId:Math.random()+1,
            id:this.state.id,
            desc:this.state.desc,
            category:this.state.category,
            material:this.state.material,
            price:Number(this.state.price),
            isAdded:false
        }
        
        console.log(newItem)
        this.props.newItem(newItem)
    }

    render() {
        return (
            <div className='container '>
                <h1>Enter Product Details:</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="item_name">Item Name</label>
                        <input type="text" name='name' value={this.state.name} onChange={this.handleChange} className="form-control" id="item_name" required/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="item_id">Item Id</label>
                        <input type="text" name='id' value={this.state.id} onChange={this.handleChange} className="form-control" id="item_id" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="desc">Description Box</label>
                        <input type="text" name='desc' value={this.state.desc} onChange={this.handleChange} maxLength='40' className="form-control" id="desc" required/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="category">Category</label>
                        <select name='category' id="category" value={this.state.category} onChange={this.handleChange}  className="form-control" required>
                            <option value='Bedroom'>Bedroom</option>
                            <option value='Living'>Living Room</option>
                            <option value='Dining'>Dining</option>
                            <option value='Appliance'>Appliances</option>
                        </select>
                        </div>
                        {this.state.materialState &&  <div className="form-group col-md-6">
                        <label htmlFor="material">Material</label>
                         <select id="material" name='material' value={this.state.material} onChange={this.handleChange} className="form-control">
                            <option value='Teak'>Teak</option>
                            <option value='Oak'>Oak</option>
                            <option value='Walnut'>Walnut</option>
                            <option value='Maple'>Maple</option>
                        </select>
                        </div>}
                        <div className="form-group col-md-2">
                        <label htmlFor="price">Price</label>
                        <input type="number" value={this.state.price} onChange={this.handleChange} name='price' className="form-control" id="price" required/>
                        </div>
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Save Item</button>
                </form>
            </div>
        )
    }
}
