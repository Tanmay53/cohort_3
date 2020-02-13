import React from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {confirm} from '../../redux/actions'

class BookingPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log('update',this.props.update)
        return(
            <div className='text-center'>
                <div className='h3 text-info'>Confirm your Booking here</div>
               {
                   this.props.update.map(e=>
                    <div className='mx-auto card col-5 p-4 shadow'>
                        <div key={e.id}>
                        <h3>Name of the room: {e.name}</h3>
                        <h4>Booking ID: {e.id}</h4>
                        <h4>Price/hour: ₹ {e.price}</h4>
                        <h4>Total price:{e.total*e.price}</h4>
                        <Link to={`/confirm/${e.id}`}><div onClick={()=>this.props.confirm(e)} className='btn btn-primary'>Confirm</div></Link>
                        </div>
                    </div>
                    )
               }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {update:state.update}
}

const mapDispatchToProps =dispatch=> {
    return{
        confirm:(a)=>dispatch(confirm(a))
    }
}
        

export default connect(mapStateToProps,mapDispatchToProps)(BookingPage)