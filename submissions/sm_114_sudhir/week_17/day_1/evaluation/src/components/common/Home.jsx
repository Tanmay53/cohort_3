import React, { Component } from 'react';
import styles from './home.module.css'
import { connect } from 'react-redux';
import { bookQuotes, sortRooms, filterRooms, pagination } from '../../redux/action'
import AvailableRooms from './AvailableRooms';
import Pagination from '../common/Pagination'
import BookingPage from '../../components/common/BookingPage';


let idCounter = 1


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            checkInDate: '',
            checkOutDate: '',
            id: '',
            page: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    bookQuotes = (e) => {
        e.preventDefault()
        let bookQuoteObj = {
            checkInDate: this.state.checkInDate,
            checkOutDate: this.state.checkOutDate,
        }
        this.props.bookQuotes({...bookQuoteObj, id:idCounter ++})
        this.props.history.push("/rooms")
    }

    sortPriceLowToHigh = () => {
        this.props.sortRooms()
    }

    filterRooms = () => {
        this.props.filterRooms()
    }

    componentDidMount = () => {
        let pg = []
        for(let i = 0; i < 5; i++){
            pg.push(this.props.state.roomsData[i])
        }
        this.setState({
            page: [...pg]
        })
    }

    pagination = (e) => {
        // this.props.pagination(e.target.value)
        let pageData = []
        let currPage = Number(e.target.value)
        let perPage = 5
        let prevPageEnd = (currPage - 1) * perPage
        let currPageEnd = currPage * perPage
        for(let i = prevPageEnd; i < currPageEnd; i++){
            pageData.push(this.props.state.roomsData[i])
        }
        this.setState({
            page: [...pageData]
        })
        console.log(pageData)

    }


    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" className={styles.home}>
                    <div className="row" >
                        <div className="col-4" className={styles.bg_makeTrip}>
                            <div className="row p-4 my-4">
                                <div className="col">
                                    <h4 className="font-weight-bold mt-4">Search For Rooms</h4>
                                    <form>
                                         <div className="form-row">
                                            <div className="form-group col-6">
                                            <label>Check-in Date</label>
                                            <input onChange={this.handleChange} name="checkInDate" type="date" className="form-control" placeholder="Date"/>
                                            </div>
                                            <div className="form-group col-6">
                                            <label>Check-out Date</label>
                                            <input onChange={this.handleChange} name="checkOutDate" type="date" className="form-control" placeholder="Date"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button onClick={this.bookQuotes} className="btn btn-primary">Book a Quote</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <AvailableRooms page = {this.state.page}/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Pagination pagination = {this.pagination}  />
                            <BookingPage />
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = dispatch => ({
    bookQuotes: payload => dispatch(bookQuotes(payload)),
    sortRooms: () => dispatch(sortRooms()),
    filterRooms: () => dispatch(filterRooms()),
    // pagination: payload => dispatch(pagination(payload))
})


export default connect(mapStateToProps,
                       mapDispatchToProps)(Home)