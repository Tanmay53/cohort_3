import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/common/Navbar'

export class Orders extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <h1 className="text-dark my-3">All orders : </h1>
                <div className="row p-5">
                    {
                        this.props.notAvailable.map(room => 
                            <div className="col-12 col-md-6 col-lg-4 p-2" key={room.id}>
                                <img src="https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-thumbnail" alt="" />
                                <div className="p-2">
                                    <div>{room.name}</div>
                                    <div>Floor : {room.floor}</div>
                                    <div>Capacity : {room.capacity}</div>
                                    <div>Price : ₹ {room.price} / day</div>
                                    <div>Status: Booked</div>
                                </div>
                            </div>    
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  notAvailable : state.notAvailable  
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
