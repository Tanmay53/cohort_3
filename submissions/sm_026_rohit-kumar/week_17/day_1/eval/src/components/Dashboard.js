import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {sort_room, paged_room} from '../redux/Action'
import {Link} from 'react-router-dom'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            floor: '',
            capacity: '',
            price: '',
            buttons: []
        }
    }

    handleClick = (no) => {
        let beg = (Number(no) - 1) * 5
        let end = Number(no) * 5 - 1

        this.props.paged_room(beg, end)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

        // console.log(this.state)
        this.props.sort_room(event.target.name, event.target.value)
    }

    componentWillMount = () => {
        let no_of_buttons = Math.ceil(this.props.rooms.length / 5)
        let arr = []
        for(let i = 1; i <= no_of_buttons; i++) {
            arr.push(i)
        }
        this.setState ({
            buttons: arr
        })
        
        this.props.paged_room(0, 5)
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
                
                <div className='row'>
                <div className='col-4'>
                    <div className='form-group'>
                        <label>Floor</label>
                        <select name='floor' onChange={this.handleChange} className='form-control'>
                            <option value='--'>select</option>
                            <option value='asc'>Ascending</option>
                            <option value='desc'>Descending</option>
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
                <div className='col-12 mt-3 mb-2'>
                    {this.state.buttons.map((item) => {
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
                                            <td><Link to={`/booking?name=${item.name}&floor=${item.floor}&capacity=${item.capacity}&price=${item.price}`}>book</Link></td>
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
        rooms: state.room.rooms,
        rooms_view: state.room.rooms_view
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sort_room: (basedOn, order) => dispatch(sort_room(basedOn, order)),
        paged_room: (beg, end) => dispatch(paged_room(beg, end))
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)