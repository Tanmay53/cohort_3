import React, { Component } from 'react'
import { addCity } from '../../redux/busRoutes/actions'
import {Redirect } from "react-router-dom";


import { connect } from 'react-redux'

class AddCity extends Component {
    constructor(props){
        super(props)
        this.state={
            newCity:""
        }
    }
    handleAddCity=(e)=>{
        this.setState({
            newCity:e.target.value
        })
    }
    handleSubmitCity=()=>{
        const {addCity}=this.props
        if(this.state.newCity.length!=0){
            addCity(this.state.newCity)
            alert("City added successfully")
            this.props.history.push("/home")
        }
        else{
            alert("Enter valid city")
        }
    }
    render() {
        const {addCity,islogged}=this.props
        return (
            <div>
                <div className="d-flex flex-column justify-content-center align-items-center shadow">
                    <input className="m-2" onChange={this.handleAddCity} type="text" placeholder="Input city name" name="" id=""/>
                    <button onClick={this.handleSubmitCity} type="button" class="btn btn-primary">Add this City</button>
                </div>
                {!islogged ? <Redirect to="/"/> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    islogged:state.authReducer.isLogged,
 
})


const mapDispatchToProps =dispatch=> ({
    addCity:(value)=>dispatch(addCity(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCity)
