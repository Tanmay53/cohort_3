import React from 'react'
import { connect } from 'react-redux'
import { addProduct, logoutUser } from "../redux/action";
class AdminDashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: "",
            price: "",
            categories: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = () => {
        let obj = {
            product: this.state.product,
            price: this.state.price,
            categories: this.state.categories
        }
        console.log(obj);
        this.props.addProduct(obj)
        this.reset();
    }

    reset = () => {
        this.setState({
            product: "",
            price: "",
            categories: ""
        })
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-center my-5 text-danger">Admin Dashboard</h2>
                <button className="btn btn-danger" onClick={() => { this.props.logoutUser() }}>Logout</button>
                <div className='card col-6 mx-auto p-5'>
                    <div className='form-group'>
                        <label for="product">Product:</label>
                        <input
                            className='input-group'
                            onChange={this.handleChange}
                            name='product'
                            type='text'
                            id="product"
                            value={this.state.product}
                        />
                    </div>
                    <div className='form-group'>
                        <label for="price">Price:</label>
                        <input
                            className='input-group'
                            onChange={this.handleChange}
                            name='price'
                            type='number'
                            id="price"
                            value={this.state.price}
                        />
                    </div>
                    <div className="form-group">
                        <label for="categories">Select Categories</label>
                        <select className="form-control" id="categories" onChange={this.handleChange} name="categories">
                            <option value="">Options</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Vegetables">Vegetables</option>
                            <option value="Daily Usage">Daily Usage</option>
                            <option value="Cleaning">Cleaning</option>
                        </select>
                    </div>
                    <div className='text-center'>
                        <div onClick={this.handleSubmit} className='btn btn-primary btn-lg'>Submit</div>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {

//     }
// }
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (a) => dispatch(addProduct(a)),
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(null, mapDispatchToProps)(AdminDashboard)