import React, { Component } from 'react'
import Navbar from './Navbar'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Admin extends Component {
    constructor(props){
        super(props)
        this.state = {
           category_data : [],
           category : 0,
           productName:'',
           price : '',
           helpText:'',
           productData:[]
        }
    }


    componentDidMount(){
        //fetch all categories 
        Axios.get('http://127.0.0.1:5000/grocery/categories')
        // .then(res => console.log(res.data.categories))
        .then(res => this.setState({
            category_data : res.data.categories
        }))
        .catch(err => console.log(err))

        this.fetchUpdatedData()
    }

    handleChange = e =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = async e =>{
        e.preventDefault()
        console.log('handleSubmit clicked')
        let newProduct = {
            productName : this.state.productName,
            price : this.state.price,
            category_id:this.state.category
        }
        console.log(newProduct)
         
        //adding product
         let token = JSON.parse(localStorage.getItem('detail'))['token']
         await Axios.post('http://127.0.0.1:5000/grocery/add',newProduct,{
             headers:{
                 Authorization:`Bearer ${token}`
             }
         })
             .then(res => this.setState({
                 helpText:res.data.message
             }))
             .then(res => this.fetchUpdatedData())
             .catch(err => console.log(err))
    }

    fetchUpdatedData = async() =>{
        //collect all product detail for admin
        let token = JSON.parse(localStorage.getItem('detail'))['token']
        await Axios.get('http://127.0.0.1:5000/grocery/admin/products',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(res => 
               this.setState({
                   productData:res.data.products
               })
            )
        .catch(err => console.log(err))
    }

    render(){
        console.log(this.state.productData)
        if(this.props.status){
            return (
                <div>
                    <Navbar />
                    <div className='container'>
                    <form onSubmit={this.handleSubmit}>
                       <h3>Add Product</h3>
                        <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="productName">Product Name</label>
                                    <input type="text" value={this.state.productName} onChange={this.handleChange} className="form-control" id="productName" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="category">Category</label>
                                    <select id="category" value={this.state.category} onChange={this.handleChange} className="form-control">
                                        {this.state.category_data.map(c =>
                                                <option key={c.id} value={c.id}>{c.name}</option>
                                            )}
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="price">Price</label>
                                    <input type="number" value={this.state.price} onChange={this.handleChange} className="form-control" id="price" />
                                </div>
                            </div>
                            <button className='btn btn-sm btn-info'>Add Product</button>
                            <div className='text-success mt-2'>{this.state.helpText}</div>
                        </form>
    
                        <div className='mt-5'>
                            <h4>Added Products:</h4>
                            {this.state.productData.map(item =>
                                 <div key={item.id} className='my-2 row p-4 rounded bg-light shadow-sm border'>
                                    <div className='col-md-4'>{item.name}</div>
                                    <div className='col-md-4'>{item.category_name}</div>
                                    <div className='col-md-4'>₹ {item.price}</div>
                                 </div>
                                )}
                        </div> 
                    </div>
                </div>
            )}else{
                return <Redirect to='/' />
            }
    }
}

const mapStateToProps = (state) =>{
    return{
        status : state.isLoggedIn
    }
}

export default connect(mapStateToProps)(Admin)