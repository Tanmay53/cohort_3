import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {goToBooking} from '../../redux/actions'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            hrs:0,
            obj:this.props.rooms
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    sorting=(e)=>{
        if(e.target.value=='price'){
            this.setState({
                obj:this.state.obj.sort((a,b)=>a.price-b.price)
            })
        }
        else if(e.target.value=='capacity'){
            this.setState({
                obj:this.state.obj.sort((a,b)=>a.capacity-b.capacity)
            })
        }
    }

    render() {
        console.log(this.state.obj)
        return (
                <div>
                    <div className='row'>
                    <div className='ml-5 mr-auto'>
                        <label>Sort:</label>
                        <select onChange={this.sorting}>
                            <option value=''>Select the category</option>
                            <option value='price'>price</option>
                            <option value='capacity'>capacity</option>
                        </select>
                    </div>
                    </div>
                    <div className='row'>
                    {this.state.obj.map(e=>
                    <div key={e.name} className="card col-12 col-sm-6 col-md-3 border-white">
                    <img src="/Placeholder.jpg" className="card-img-top" alt="placeholder"/>
                        <div className="card-body">
                            <h1>{e.name}</h1>
                            <p>Floor: {e.floor}</p>
                            <p>Capacity: {e.capacity} persons</p>
                            <p>Price: ₹ {e.price} /hour</p>
                            <div>
                                {e.avialable=='YES'?
                                (<>
                                <p>Availability: {e.avialable}</p>
                                <p>No. of hours: <input onChange={this.changeHandler} name='hrs' className='col-3'/></p>
                                <Link to={`/bookingpage/${e.id}`}>
                                    <div onClick={()=>this.props.goToBooking(e.name,this.state.hrs)} className='btn btn-primary'>Book here</div>
                                </Link></>
                                )
                                :
                                (<p className='h5 text-danger border-danger'>Availability: {e.avialable}</p>  
                                )}
                            </div>
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