import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import { getProduct, filterProduct, sortPrice } from '../../redux/product/action'
import { getCategories } from '../../redux/category/action'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            perPage: 10,
        }
    }

    componentDidMount = async () => {
        await this.props.getProduct('http://127.0.0.1:5000/')
        this.props.getCategories('http://127.0.0.1:5000/get/categories')
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState !== this.state) {
            this.props.getProduct(`http://127.0.0.1:5000/?page=${1}&&per_page=${this.state.perPage}`)
        }

        if (this.props.location.search !== prevProps.location.search) {
            let pagination = queryString.parse(this.props.location.search)
            let page = pagination.page
            console.log(page)
            this.props.getProduct(`http://127.0.0.1:5000/?page=${page}&&per_page=${this.state.perPage}`)
        }
    }

    filterCategory = (e) => {
        e.preventDefault()
        alert(e.target.value)
        let url = `http://127.0.0.1:5000/product/filter?category=${e.target.value}`
        this.props.filterProduct(url)
    }

    sortPrice = (e) => {
        e.preventDefault()
        let url = `http://127.0.0.1:5000/product_price?sort=${e.target.value}`
        this.props.sortPrice(url)
    }

    render() {
        const pageList = []
        const { perPage } = this.state
        const totalPages = Math.ceil(this.props.totalProducts / perPage)

        for (let i = 0; i < totalPages; i++) {
            pageList.push(<li key = {i + 1} className="page-item">
            <Link 
                to={`/?page=${i+1}&&per_page=${perPage}`}
                type="btn" 
                className="page-link">
                {i+1}
            </Link>
        </li>)
        }

        if (this.props.state.products) {
            return (
                <div className="container mt-3">
                    <h2 className="text-center">Grocery List</h2>
                    <div className="row justify-content-between">
                        <div className="col-3">
                            <div className="form-group">
                                <label>Filter By Category</label>
                                <select 
                                    className="form-control" 
                                    onClick={this.filterCategory}
                                > 
                                    <option>---Select Category Here--</option>
                                    {this.props.categories && this.props.categories.map(category => {
                                        return (
                                            <option value={category.category}>{category.category}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <label htmlFor="#filter">Sort By Price</label>
                                <select
                                    className="form-control" 
                                    onClick={this.sortPrice}
                                > 
                                    <option value="asc">Low to High</option>
                                    <option value="desc">High to Low</option>
                                </select>
                            </div>
                        </div>
                    
                    </div>
                    <div className="row">
                        <div className="col">
                            <table class="table table-primary stripped">
                                <thead>
                                    <tr>
                                        <th>Serial No.</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.state.products.map((product, i) => {
                                        return (
                                            <tr key={product.id}>
                                                <td>{i + 1}</td>
                                                <td>{product.product}</td>
                                                <td>{product.category}</td>
                                                <td>{product.price}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <nav aria-label="...">
                                <ul class="pagination">
                                    {totalPages !== 0 && pageList}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <h1>Product Loding</h1>
        }
        
    }
}

const mapStateToProps = (state) => ({
    state: state.productReducer,
    totalProducts: state.productReducer.totalProducts,
    categories: state.categoryReducer.categories,
})

const mapDispatchToProps = dispatch => ({
    getProduct: (url) => dispatch(getProduct(url)),
    getCategories: (url) => dispatch(getCategories(url)),
    filterProduct: (url) => dispatch(filterProduct(url)),
    sortPrice: (url) => dispatch(sortPrice(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)