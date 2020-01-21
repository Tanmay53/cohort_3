import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add } from './action'
class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            no: '',
            name: '',
            manufacturer: '',
            mileage: 0,
            price: 0,
            quantity: 0,
            id: 0,
            data: props.value.find((element) => element.id == this.props.match.params.id)
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        this.setState({
            id: this.state.id + 1
        })
        this.props.add(this.state)
    }
    render() {
        console.log(this.state.data)
        return (
            <React.Fragment>
                <div>
                    <div>MODEL_NO</div>
                    <input type="text" name="no" value={this.state.no} placeholder="Enter Model_no" onChange={this.handleChange}></input>
                    <div>MODEL_NAME</div>
                    <input type="text" name="name" value={this.state.name} placeholder="Enter Model_Name" onChange={this.handleChange}></input>
                    <div>MANUFACTURER</div>
                    <input type="text" name="manufacturer" value={this.state.manufacturer} placeholder="Enter Manufacturer" onChange={this.handleChange}></input>
                    <div>MILEAGE</div>
                    <input type="text" name="mileage" value={this.state.mileage} placeholder="Enter Mileage" onChange={this.handleChange}></input>
                    <div>PRICE</div>
                    <input type="text" name="price" value={this.state.price} placeholder="Enter Price" onChange={this.handleChange}></input>
                    <div>QUANTITY</div>
                    <input type="text" name="quantity" value={this.state.quantity} placeholder="Enter quantity" onChange={this.handleChange}></input>
                    <div> <button onClick={this.handleClick}>SUBMIT</button></div>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    value: state.products
})

const mapDispatchToProps = dispatch => {
    return ({
        add: (data) => dispatch(add(data))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit)

