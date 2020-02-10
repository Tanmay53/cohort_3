import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/common/Navbar'
import { Redirect, Link } from 'react-router-dom'
import Pagination from '../components/common/Pagination'
import { sort, filterByFloor } from '../redux/action'

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             startPage : 0,
             endPage : 5,
             sort: ''
        }
    }

    handlePagination = (num) => {
        this.setState({
            startPage : num*5 - 5,
            endPage : num*5
        })
    }

    handleChange = (e) => {
        let value = e.target.value
        if( value == "sortByPriceAsc"){
            this.props.sort({ name : 'price', sortBy : 'asc'})
        }
        else if( value == 'sortByPriceDesc'){
            this.props.sort({ name: "price", sortBy: 'desc'})
        }
        else if( value == "sortByCapacityAsc"){
            this.props.sort({ name : "capacity", sortBy : 'asc'})
        }
        else if( value == 'sortByCapacityDesc'){
            this.props.sort({ name : 'capacity', sortBy : 'desc'})
        }
        else if( value == 1 || 2 || 3 || 4 || 'all'){
            this.props.filterByFloor(value)
        }
    }
    
    render() {
        return (
            <div className="container">
                {
                    !this.props.login ? 
                    <Redirect to='/login'></Redirect>
                    :
                    null
                }
                <Navbar token={this.props.token} />
                <Pagination len={Math.ceil(this.props.database.length/5)} func={this.handlePagination} />
                <div className="row justify-content-around m-2">
                    <select name="sort" value={this.state.sort} className="form-control col-12 col-md-5" onChange={this.handleChange}>
                            <option value="">Sort </option>
                            <option value="sortByPriceAsc">Sort by price (Asc)</option>
                            <option value="sortByPriceDesc">Sort by price (Desc)</option>
                        <option value="sortByCapacityAsc">Sort by capacity (Asc)</option>
                        <option value="sortByCapacityDesc">Sort by capacity (Desc) </option>
                    </select>
                
                    <select name="filter" value={this.state.filter} className="form-control col-12 col-md-5" onChange={this.handleChange}>
                        <option value="">Filter by floor number</option>
                        <option value="all">all</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                    
                <div className="row p-5">
                    { this.props.database.slice(this.state.startPage, this.state.endPage).map(room => 
                        <div className="col-12 col-md-6 col-lg-4 p-2" key={room.id}>
                            <img src="https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-thumbnail" alt="" />
                            <div className="p-2">
                                <div>{room.name}</div>
                                <div>Floor : {room.floor}</div>
                                <div>Capacity : {room.capacity}</div>
                                <div>Price : ₹ {room.price} / day</div>
                            </div>
                            <Link to={`/bookingPage/${room.id}`} ><button className="btn btn-info m-2">Book Now</button></Link>
                        </div>
                    )}
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    database : state.meetingRoomDb,
    login : state.isLoggedIn,
    token : state.token
})

const mapDispatchToProps =  dispatch =>({
    sort : (payload) => dispatch(sort(payload)),
    filterByFloor: (payload) => dispatch(filterByFloor(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
