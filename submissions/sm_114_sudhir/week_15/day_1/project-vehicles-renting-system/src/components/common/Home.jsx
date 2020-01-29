import React, { Component } from 'react';
import styles from './home.module.css'
import { connect } from 'react-redux';
import { bookQuotes } from '../../redux/action'
import FeaturedVehicles from './Home/FeaturedVehicles';


let idCounter = 1
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            pickUpLocation: '',
            dropOffLocation: '',
            pickUpDate: '',
            dropOffDate: '',
            pickUpTime: '',
            id: ''
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
            pickUpLocation: this.state.pickUpLocation,
            dropOffLocation: this.state.dropOffLocation,
            pickUpDate: this.state.pickUpDate,
            dropOffDate: this.state.dropOffDate,
            pickUpTime: this.state.pickUpTime,
        }
        this.props.bookQuotes({...bookQuoteObj, id:idCounter ++})

    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div className="container-fluid" className={styles.home}>
                    <div className="row" >
                        <div className="col-4" className = {styles.bg_makeTrip}>
                            <div className="row p-4 my-4">
                                <div className="col">
                                    <h4 className="font-weight-bold">MAKE YOUR TRIP</h4>
                                    <form>
                                        <div className="form-group">
                                            <label for="pickUpLocation">Pick-up Location</label>
                                            <input onChange={this.handleChange} name="pickUpLocation" type="text" className="form-control" id="pickUpLocation" placeholder="City, State..."/>
                                        </div>
                                        <div className="form-group">
                                            <label for="dropOffLocation">Drop-off Location</label>
                                            <input onChange={this.handleChange} name="dropOffLocation" type="text" className="form-control" id="dropOffLocation" placeholder="City, State..."/>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-6">
                                            <label for="pickUpDate">Pick-up Date</label>
                                            <input onChange={this.handleChange} name="pickUpDate" type="date" className="form-control" id="pickUpDate" placeholder="Date"/>
                                            </div>
                                            <div className="form-group col-6">
                                            <label for="dropOffDate">Drop-off Date</label>
                                            <input onChange={this.handleChange} name="dropOffDate" type="date" className="form-control" id="dropOffDate" placeholder="Date"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="pickUpTime">Pick-up Time</label>
                                            <input onChange={this.handleChange} name="pickUpTime" type="time" className="form-control" id="pickUpTime" placeholder="City, State..."/>
                                        </div>
                                        <div className="form-group">
                                            <button onClick={this.bookQuotes} className="btn btn-primary">Book a Quote</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 text-center p-4 my-4">
                            <div>
                                <h1 classname="font-weight-bold">hire the best car with best price</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <h1 className="text-center font-weight-bold">Featured Vehicles</h1>
                    <div className="row">
                        <div className="col">
                            <FeaturedVehicles/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    bookQuotes: (payload) => dispatch(bookQuotes(payload))
})

export default connect(mapStateToProps, mapDispatchToProps) (Home)

