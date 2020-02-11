import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {goToBooking} from '../../redux/actions'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            hrs:0,
            obj:this.props.room
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
                <div>
                    <div className='row'>
                    {this.props.rooms.map(e=>
                    <div key={e.name} className="card col-12 col-sm-6 col-md-3">
                    <img src="/Placeholder.jpg" className="card-img-top" alt="placeholder"/>
                        <div className="card-body">
                            <h1>{e.name}</h1>
                            <p>Floor: {e.floor}</p>
                            <p>Capacity:{e.capacity}</p>
                            <p>Price {e.price}</p>
                            <p>Availability: {e.avialable}</p>
                            <p>No. of hours: <input onChange={this.changeHandler} name='hrs' className='col-3'/></p>
                            <Link to={`/bookingpage/${e.id}`}>
                                <div onClick={()=>this.props.goToBooking(e.name,this.state.hrs)} className='btn btn-primary'>Book here</div>
                            </Link>
                        </div>
                        </div>
                    )}
                    </div>
                </div>
                )
            }
        }
const mapStateToProps = (state) => {
    return {rooms:state.placeholder}
}

const mapDispatchToProps =dispatch=> {
    return{
        goToBooking:(a,b)=>dispatch(goToBooking(a,b))
    }
}
        

export default connect(mapStateToProps,mapDispatchToProps)(Home)