import React from 'react'
import { connect } from "react-redux";
import { add } from "../../redux/action"
import { Link } from "react-router-dom"
class Booking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "display": []
        }
    }
    componentDidMount = () => {
        this.setState({
            display: this.props.value
        })
    }
//     handleClick=(item)=>{
//         console.log(item)
// this.props.add(item)
//     }
    render() {
        console.log(this.props.value)
        return (
            <React.Fragment>
                <div>
                    {this.props.value.map(item =>
                        <div>
                            <div class="card text-center" style={{ "width": "400px", "margin": "80px 100px 0px 500px" }}>
                                <div class="card-header" style={{ "backgroundColor": "teal" }}>
                                    <b>{item.name}</b>
                                </div>
                                <div class="card-body ">
                                    <h5 class="card-title"><b><span class="glyphicon glyphicon-user mr-3"></span>FLOOR : {item.floor}</b></h5>
                                    <p class="card-text"><b><span class="glyphicon glyphicon-envelope mr-3"></span>PRICE : {item.price}</b></p>
                                    <p class="card-text"><b>CAPACITY : {item.capacity}</b></p>
                                    <button type="button" class="btn btn-primary" ><Link to="/home" style={{ "textDecoration": "none" }}>Go back Home</Link></button>
                                </div>
                                <div class="card-footer " style={{ "backgroundColor": "teal" }}>
                                    <b><span class="glyphicon glyphicon-earphone mr-3"></span>Thanks For Choosing us</b>
                                </div>
                            </div>
                            <button style={{"marginLeft":"550px"}} class="btn btn-secondary">Checkout this room</button>
                        </div>)}
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    value: state.available
})

const mapDispatchToProps = dispatch => {
    return ({
        add: (data) => dispatch(add(add))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Booking)