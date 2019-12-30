import React from 'react'
import {connect} from 'react-redux'
import TableRow from '../Components/TableRow'
import {sortStaffAsc, sortStaffDesc} from '../Redux/Actions/Action'
import {Link} from 'react-router-dom'


class ViewStaff extends React.Component {
    constructor(props) {
        super(props)
    }

    sortStaff = (order) => {
        if(order == 'asc') {
            this.props.sortStaffAsc()
        } 
        else {
            this.props.sortStaffDesc()
        } 
    }

    render() {
        return (
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-8 offset-2'>
                        <button onClick={() => this.sortStaff('asc')} className='btn btn-primary mr-3'>Ascending</button>
                        <button onClick={() => this.sortStaff('desc')} className='btn btn-primary mr-3'>Descending</button>
                        <Link to='/' className='btn btn-primary'>Home</Link>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-8 offset-2'>
                        <table className='table'>
                            <thead>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Sales</th>
                            </thead>
                            <tbody>
                                {this.props.staff.staff.map((item, index) => {
                                    return <TableRow row={item} index={index}/>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        staff: state.staff
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortStaffDesc: () => dispatch(sortStaffDesc()),
        sortStaffAsc: () => dispatch(sortStaffAsc())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ViewStaff)