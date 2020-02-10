import React from 'react'
import { connect } from "react-redux";
import {add } from "../../redux/action"
class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "name": "",
            "floor": "",
            "capacity": "",
            "price": "",
            "id":0

        }
    }
componentDidMount=()=>{
    let data=this.props.value.find((element) => element.id == this.props.match.params.id)
    this.setState({
        name:data.name,
        floor:data.floor,
        capacity:data.capacity,
        price:data.price,
        id:data.id
    })
}
    render() {
console.log(this.state)
        return (
            <React.Fragment>
                
                <div style={{"margin":"100px 0px 0px 300px","backgroundColor":"blue","width":"350px","padding":"20px"}}>
                        <label>Name</label><br></br>
                        <input type="text" name="name" disabled value={this.state.name} onChange={this.handleChange} /><br></br>
                        <label>Floor</label><br></br>
                        <input type="text" name="floor"disabled  value={this.state.floor} onChange={this.handleChange} /><br></br>
                        <label>Capacity</label><br></br>
                        <input type="text" name="capacity"disabled value={this.state.capacity} onChange={this.handleChange} /><br></br>
                        <label>Price</label><br></br>
                        <input type="text" name="price"disabled value={this.state.price} onChange={this.handleChange} /><br></br>
                        <button style={{"margin":"10px 0px 0px 100px"}}class="btn btn-danger" onClick={this.handleClick}>Submit</button><br></br>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
value:state.rooms
})

const mapDispatchToProps = dispatch => {
    return ({
        add: (data) => dispatch(add(add))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Info)