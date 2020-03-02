import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class Summary extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
            summary: []
        }
    }

    componentDidMount = () => {
        axios.post('http://localhost:5000/task/summary', {'user_id': this.props.user_id})
        .then(res => {
            console.log(res)
            this.setState({
                summary: res['data']['data']
            })
        })
    }

    render() {
        if(this.props.isLoggedIn === false) {
            return <Redirect to="/login"></Redirect>
        }

        return (
            <div className='row'>
                <div className='col-8 offset-2'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>TaskList Title</th>
                                <th>Task Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.summary && this.state.summary.map((item) => {
                                return <tr>
                                            <td>{item.tasklist_id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.count}</td>
                                       </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        user_id: state.login.data.user_id,
        isLoggedIn: state.login.isLoggedIn
    }
}

export default connect(mapStateToProps, null)(Summary)