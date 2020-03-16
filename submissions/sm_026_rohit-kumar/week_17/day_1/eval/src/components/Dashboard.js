import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {sort_room, paged_room, filter_room,
        change_date_range, set_tuners,
        load_data} from '../redux/Action'

import {Link} from 'react-router-dom'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            dateFrom: new Date().toLocaleDateString(),
            dateTo: new Date().toLocaleDateString(),
            floor: '',
            capacity: '',
            price: '',
            current_page: 1       
        }
    }

    handleClick = (no) => {
        this.setState({
            current_page: no
        })
        
        // console.log('button clicked ....')
        // call method to update tuning parameters
        this.props.set_tuners(this.state)
    }

    componentWillMount = () => {
        this.props.set_tuners(this.state)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
        this.props.set_tuners(this.state)

        if (event.target.name === 'floor') { 
            // this.props.sort_room(event.target.name, event.target.value)
            this.props.filter_room(Number(event.target.value))
        } else if(event.target.name === 'dateFrom' || event.target.name === 'dateTo') {
            // this.props.change_date_range(this.state.dateFrom, this.state.dateTo)
            // this.props.paged_room(0, 5)
            this.props.load_data()
            
        }
        else {
            this.props.sort_room(event.target.name, event.target.value)
        }
    }

    render() {
        if(! this.props.isLoggedIn) {
            return <Redirect to='/login'></Redirect>
        }
        return (
            <>
                <div className='col-12'>
                    <h3>Available Rooms</h3>
                </div>
                <hr></hr>
                <div className='row'>
                    <div className='col-4'>
                        <div className='form-group'>
                            <label>Date From:</label>
                            <input name="dateFrom" value={this.state.dateFrom} onChange={this.handleChange} className='form-control' type='text'></input>
                        </div>
                    </div>
                    <div className='col-4 offset-4'>
                        <div className='form-group'>
                            <label>Date To:</label>
                            <input name="dateTo" value={this.state.dateTo} onChange={this.handleChange} className='form-control' type='text'></input>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='row'>
                <div className='col-4'>
                    <div className='form-group'>
                        <label>Floor</label>
                        <select name='floor' onChange={this.handleChange} className='form-control'>
                            <option value='--'>select</option>
                            {this.props.floors.map((item) => {
                                return <option value= {item} > {item}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='form-group'>
                        <label>Capacity</label>
                        <select name='capacity' onChange={this.handleChange} className='form-control'>
                            <option value='--'>select</option>
                            <option value='asc'>Ascending</option>
                            <option value='desc'>Descending</option>
                        </select>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='form-group'>
                        <label>Price</label>
                        <select name='price' onChange={this.handleChange} className='form-control'>
                            <option value='--'>select</option>
                            <option value='asc'>Ascending</option>
                            <option value='desc'>Descending</option>
                        </select>
                    </div>
                </div>

                </div>
                <hr></hr>
                <div className='col-12 mt-3 mb-2'>
                    {this.props.buttons.map((item) => {
                        return <button onClick={() => this.handleClick(item)} className='btn btn-primary mr-2'>{item}</button>
                                
                    })}
                </div>
                
                <div className='col-12'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Floor</th>
                                <th>Capacity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.rooms_view.map((item) => {
                                return <tr>
                                            <td>{item.name}</td>
                                            <td>{item.floor}</td>
                                            <td>{item.capacity}</td>
                                            <td>{item.price}</td>
                                            <td><Link to={`/booking?id=${item.id}&name=${item.name}&floor=${item.floor}&capacity=${item.capacity}&price=${item.price}&dateFrom=${this.state.dateFrom}&dateTo=${this.state.dateTo}`}>book</Link></td>
                                       </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.isLogin, 
        buttons: state.room.buttons,
        floors: state.room.floors,
        rooms_view: state.room.rooms_view
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sort_room: (basedOn, order) => dispatch(sort_room(basedOn, order)),
        paged_room: (beg, end) => dispatch(paged_room(beg, end)), 
        filter_room: (val) => dispatch(filter_room(val)),
        change_date_range: (dateFrom, dateTo) => dispatch(change_date_range(dateFrom, dateTo)),
        set_tuners: (tuners) => dispatch(set_tuners(tuners)),
        load_data: () => dispatch(load_data())
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)