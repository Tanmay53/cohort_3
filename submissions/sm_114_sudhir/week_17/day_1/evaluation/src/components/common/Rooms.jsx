import React, { Component } from 'react'
import styles from './room.module.css'
import AvailableRooms from '../common/AvailableRooms'
import BookingPage from '../common/BookingPage'
import Pagination from '../common/Pagination'
import { connect } from 'react-redux'

class Rooms extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" className={styles.room}>
                    <div className="row" >
                        <div className="col-4" className={styles.bg_room}>
                            <div className="row p-4 my-4 display-4">
                                All Types of Meeting Rooms Available Here..
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="container">
                    <h1 className="text-center font-weight-bold">Available Rooms</h1>
                    <div className="row m-4">
                        <h5 className="py-3">Sort</h5>
                        <button onClick={this.sortPriceLowToHigh} className="btn btn-primary rounded mx-3 px-4">By Price Low to high</button>
                        <h5 className="py-3">Filter</h5>
                        <button onClick={this.filterRooms} className="btn btn-primary rounded mx-3 px-4">Filter by type(only living room)</button>
                    </div>
                    <div className="row">
                        <AvailableRooms page = {this.props.state.roomsData}/>
                    </div>
                    {/* <div className="row">
                        <div className="col">
                            <Pagination pagination = {this.pagination}  />
                            <BookingPage />
                        </div>
                    </div> */}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state
})

// const mapDispatchToProps = {
    
// }


export default connect(mapStateToProps)(Rooms)
