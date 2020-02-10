import React from 'react'
import { connect } from "react-redux";

class Orders extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className='row'>
                    {this.props.orders.map(e=>
                    <div key={e.name} className="mx-auto card m-3">
                        <div className='row'>
                        <div className='col-4'> <img src="/Placeholder.jpg" alt="placeholder" style={{height:'100px'}}/></div>
                        <div className="card-body col-8">
                            <h4>{e.name}</h4>
                            <p>Floor: {e.floor}</p>
                            <p>Capacity:{e.capacity}</p>
                            <p>Price: ₹ {e.price}</p>
                            {/* <p>Availability: {e.avialable}</p> */}
                            <h5>Total Price: ₹ {e.total*e.price}</h5>
                            
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
    return {orders:state.orders}
}

   

export default connect(mapStateToProps,null)(Orders)