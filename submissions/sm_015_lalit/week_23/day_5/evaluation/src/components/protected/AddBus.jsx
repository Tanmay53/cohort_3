import React, { Component } from 'react'
import {addBus} from '../../redux/busRoutes/actions'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import uuid from 'uuid-random'

export class AddBus extends Component {
    constructor(props){
        super(props)
        this.state={
            source:"",
            destination:"",
            busNum:"",
            schedule:"",
            key:uuid()
        }
    }
    handleOnChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmitNewBus=()=>{
        const {addBus}=this.props
        if(this.state.source.length==0 || this.state.destination.length==0 || this.state.busNum.length==0 || this.state.schedule.length==0){
            alert("Input values properly")
        }
        else{
            addBus(this.state)
            alert("Bus added successfully")
            this.props.history.push("/home")
        }
        
    }
    render() {
        const {cities,addBus,islogged}=this.props
        return (
            <div className="d-flex flex-column justify-content-center align-items-center shadow">
                    <div class="form-group">
                        <label for="source">Source</label>
                        <select onChange={this.handleOnChange} class="custom-select my-1" name="source" id="source">
                            {cities.map(e=>
                                <option value={e}>{e}</option>
                                )}
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="destination">Destination</label>
                        <select onChange={this.handleOnChange} class="custom-select my-1" name="destination" id="destination">
                            {cities.map(e=>
                                <option value={e}>{e}</option>
                                )}
                        </select>
                    </div>
                    
                <input className="my-1" onChange={this.handleOnChange} name="busNum" type="text" placeholder="Bus Detail" id=""/>
                <input className="my-1" onChange={this.handleOnChange} name="schedule" type="text" placeholder="Schedule" id=""/>
                <button onClick={this.handleSubmitNewBus} type="button" class="btn btn-primary my-1">Add this Bus</button>
                {!islogged ? <Redirect to="/"/> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    islogged:state.authReducer.isLogged,
    cities:state.BusRoutesReducer.cities,
})

const mapDispatchToProps =dispatch=> ({
    addBus:(value)=>dispatch(addBus(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddBus)
