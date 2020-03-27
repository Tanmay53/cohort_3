import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changePage } from "../../redux/user/actions"

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.products,
            category: "all",
            sort: "asc"
        }
    }

    // Logic For Filtering Products
    filterCategory = e => {
        const cat = e.target.value
        if(cat === "all"){
            this.setState({ category: "all" , data: this.props.products})
        }
        else{
            let data = this.props.products.filter((item) => item.category === cat)
            this.setState({ category: cat, data: data })
        }
    }

    // Logic for Sorting by Price
    sortPrice = e => {
        const order = e.target.value
        var sorted = [ ...this.state.data]
        if(order === "asc"){
            sorted = sorted.sort((a,b) => Number(a.price) - Number(b.price))
        }
        else if(order === "dec"){
            sorted = sorted.sort((a,b) => Number(b.price) - Number(a.price))
        }
        this.setState({ sort: order, data: sorted })
    }
    
    render() {
        const grocery = this.state.data
        const size = grocery.length
        const page = this.props.page
        const perPage = this.props.perPage
        const totalPages = size/(perPage)
        const pageList = []
        for(let i = page-1; i>=0 && i<=totalPages; i++){
            pageList.push(<li className="page-item" key={i} onClick={() => changePage(i)} > {i+1}</li>)
        }
        return (
            <React.Fragment>
                {/* Heading */}
                <div className="container-fluid bg-light">
                    <div className="row">
                        <div className="col text-center">
                            <h1>Dashboard</h1>
                        </div>
                    </div>
                </div>
                {/* Settings */}
                <div className ="container-fluid bg-light">
                    <div className="row mt-3">
                        {/* Filter acc to Category */}
                        <div className="col-4 offset-2">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text">Filter</label>
                                </div>
                                <select className="custom-select" onChange={this.filterCategory}>
                                    <option value = "all">All Category</option>
                                    <option value = "Fruits">Fruits</option>
                                    <option value = "Vegetables">Vegetables</option>
                                    <option value = "Frozen">Frozen</option>
                                    <option value = "Dairy">Dairy</option>
                                    <option value = "Meat">Meat</option>
                                    <option value = "Spices">Spices</option>
                                </select>
                            </div>
                        </div>
                        {/* Sort by Price */}
                        <div className="col-4">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text">Sort By Price</label>
                                </div>
                                <select className="custom-select" onChange={this.sortPrice}>
                                    <option value="asc">Ascending</option>
                                    <option value="dec">Descending</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pagination */}
                <div className="container-fluid bg-light">
                    <div className="row d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                {pageList}                       
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Table */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (grocery.length >0) 
                                        ?
                                        grocery.map((item, index) => {
                                            return(
                                                <tr key={item.id}>
                                                    <td> {index+1} </td>
                                                    <td className = "text-capitalize">{item.product}</td>
                                                    <td>{item.category}</td>
                                                    <td>{item.price}</td>
                                                </tr>
                                            )
                                        })
                                        : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.userReducer.groceryList,
    Page: state.userReducer.page,
    perPage: state.userReducer.perPage,
})

const mapDispatchToProps = dispatch => ({
    pageChange: payload => dispatch(changePage(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
