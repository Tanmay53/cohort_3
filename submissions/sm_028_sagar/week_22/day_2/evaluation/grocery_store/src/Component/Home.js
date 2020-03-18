import React, { Component } from 'react'
import Navbar from './Navbar'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { sortData,saveData } from '../Redux/Actions'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            productData : [],
            pageCount: 0,
            sortValue :'all',
            category_data:[]
        }
    }

    fetchAllData = async() =>{
        //collect all product detail for admin
        await Axios.get('http://127.0.0.1:5000/grocery/allProducts')
        .then(res => 
               this.setState({
                   productData:res.data.products,
                   pageCount:res.data.pageCount
               })
            )
            .then(res => 
                 this.props.saveData(this.state.productData)
                )
        .catch(err => console.log(err))
    }

    handlePageNo = async (page_no) =>{
        await Axios.get(`http://127.0.0.1:5000/grocery/${page_no}`)
        .then(res => 
               this.setState({
                   productData:res.data.products
               })
            )
            .then(res => 
                this.props.saveData(this.state.productData)
               )
        .catch(err => console.log(err))
    }

    handleSort = async (e) =>{
       await this.setState({
            sortValue:e.target.value
        })

        this.props.sort(this.state.sortValue)
    }

    fetchAllCategories = async () =>{
        //fetch all categories 
        await Axios.get('http://127.0.0.1:5000/grocery/categories')
        // .then(res => console.log(res.data.categories))
        .then(res => this.setState({
            category_data : res.data.categories
        }))
        .catch(err => console.log(err))
    }

    handleCategory = async cat =>{
        console.log('handleCategory')
         await Axios.get(`http://127.0.0.1:5000/grocery/category/${cat.id}`)
         .then(res => this.props.saveData(res.productData))
         .catch(err => console.log(err))
    }

    componentDidMount(){
        this.fetchAllData()
        this.fetchAllCategories()
    }

    render(){
        console.log(this.state)
        const emptyArr = new Array(this.state.pageCount).fill(0)
        return (
            <div>
                <Navbar/>
                <div className='container text-center'>
                    <h1>Grocery Items</h1>
                    <div className='p-5 row'>
                         <div className='col-12 col-md-6'>
                             <h5>Price</h5>
                             <select className='form-control w-50 mx-auto' value={this.state.sortValue} onChange={this.handleSort}>
                                 <option value='all'>All</option>
                                 <option value='lotohi'>Low To High</option>
                                 <option value='hitolo' >High To Low</option>
                             </select>
                         </div>
                         <div className='col-12 col-md-6'>
                             <h5>Category</h5>
                             <select className='form-control w-50 mx-auto'  id='sort'>
                                 {this.state.category_data.map(c =>
                                        <option key={c.id} value={c.id} onClick={(c) => this.handleCategory(c)}>{c.name}</option>
                                    )}
                             </select>
                         </div>

                    </div>

                    <nav aria-label="Page navigation example">
                        <ul className="pagination ml-5">
                            {emptyArr.map((page,i) =>
                                <li key={i} className="page-item"><Link className="page-link" to="#" onClick={() => this.handlePageNo(i)}>{i+1}</Link></li>
                            )}
                        </ul>
                   </nav>
                    
                    {this.props.productData.map(item =>
                             <div key={item.id} className='my-2 row p-4 w-75 mx-auto rounded bg-light shadow-sm border'>
                                <div className='col-md-1'>{item.id}</div>
                                <div className='col-md-3'>{item.name}</div>
                                <div className='col-md-3'>{item.category_name}</div>
                                <div className='col-md-2'>₹ {item.price}</div>
                                <div className='col-md-3'>
                                    <button className='btn btn-sm btn-outline-success'>Add To Cart</button>
                                </div>
                             </div>
                            
                       )}
                </div>
                
            </div>
        )
    }
}


const mapStateToProps = state =>{
    return {
        productData : state.productData
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        sort : (val) => dispatch(sortData(val)),
        saveData:(data) => dispatch(saveData(data))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)
