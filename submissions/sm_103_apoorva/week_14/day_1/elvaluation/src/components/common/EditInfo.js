import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import {updateInfo,editInfo} from '../../Redux/Action'

class update extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            modelNo: "",
            modelName: "",
            manufacturer: "",
            mileage: "",
            price: "",
            quantity:""
        }
         
    }
    componentDidMount=()=>{
        let id = this.props.match.params.id
        let obj = {}
        this.props.vehicle.forEach(function(ele){
            if(ele.id == id)
            {
                obj = ele
            }
        })
        this.setState({
            modelNo: obj.modelNo,
            modelName: obj.modelName,
            manufacturer: obj.manufacturer,
            mileage: obj.mileage,
            price: obj.price,
            quantity: obj.quantity
        })
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleClick=(e)=>{
        e.preventDefault()
        let id = this.props.match.params.id
        let obj = {
            modelNo : this.state.modelNo,
            modelName : this.state.modelName,
            manufacturer : this.state.manufacturer,
            mileage : this.state.mileage,
            price : this.state.price,
            quantity : this.state.quantity,
            id : id
        }
        // console.log(obj)
        this.props.editInfo(obj)
    }

    render()
    {
        console.log(this.props)
        return(
            <div>
                <div className="bgLogin">
                    <h3 className="text-center mt-1">Vehicle Data Form</h3>
                    <div className="mx-3">
                        <label className="ml-1 mt-3">Model_No</label>
                        <input className="form-control" value={this.state.modelNo} onChange={this.handleChange} type="text" name="modelNo" placeholder="Enter Model_No" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Model_Name</label>
                        <input className="form-control" value={this.state.modelName} onChange={this.handleChange} type="text" name="modelName" placeholder="Enter Model_Name" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Manufacturer</label>
                        <input className="form-control" value={this.state.manufacturer} onChange={this.handleChange} type="text" name="manufacturer" placeholder="Enter Manufacturer" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Mileage</label>
                        <input className="form-control" value={this.state.mileage} onChange={this.handleChange} type="number" name="mileage" placeholder="Enter Mileage" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Price</label>
                        <input className="form-control" value={this.state.price} onChange={this.handleChange} type="number" name="price" placeholder="Enter Price" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Quantity</label>
                        <input className="form-control" value={this.state.quantity} onChange={this.handleChange} type="number" name="quantity" placeholder="Enter Quantity" />
                    </div>
                    <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.handleClick}>Update</button>
                </div>
                <br></br>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    vehicle: state.vehicle,
    isAuth: state.form
})

const mapDispatchToProps = (dispatch) => ({
    updateInfo : (payload) => (dispatch(updateInfo(payload))),
    editInfo : (payload) => (dispatch(editInfo(payload))),
})

export default connect(mapStateToProps,mapDispatchToProps)(update)