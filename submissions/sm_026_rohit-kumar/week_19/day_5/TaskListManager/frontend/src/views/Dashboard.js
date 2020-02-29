import React from 'react'
import TaskList from '../components/TaskList'
import uuid from 'react-uuid'
import axios from 'axios'
import {connect} from 'react-redux'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            tasklists: []
        }
    }

    createNewTaskList = () => {
        const url = 'http://localhost:5000/task/create'
        const data = {  'user_id': this.props.user_id || 4,
                        'uuid': uuid(),
                        'name': 'Title for your tasklist goes here.',
                        'desc': 'Mention the purpose you want to achieve through this task list. Mention the objective of the list creation.'
                    }
        axios.post(url, data)
                .then(res => {
                    console.log(res)
                    const last_id = Number(res['data']['data']['last_id'])
                    data['tasklist_id'] = last_id
                    this.setState({
                        tasklists: [...this.state.tasklists, data]
                    })
                })
                .catch(err => {
                    console.log(err)
                })

    }

    handleClick = () => {
        this.createNewTaskList()

        /* this.setState({
            tasklists: [...this.state.tasklists, 
                
            ]
        }) */
        console.log(this.state)
    }

    render() {
        return (
            <>
                <div className='row'>
                    <div className='col-md-8'>
                        <input type='text' className='form-control'></input>                        
                    </div>
                    <div className='col-md-1'>
                        <button className='btn btn-primary'>
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className='col-md-3'>
                        <button onClick={this.handleClick} className='btn btn-primary'>
                            <i class="fa fa-plus-square" aria-hidden="true"></i>
                            &nbsp; <span>New TaskList</span>
                        </button>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-12'>
                        {this.state.tasklists.length == 0 &&
                            <h5>No Tasklist Available.</h5>
                        }
                        {this.state.tasklists.map((item) => {
                            return <TaskList tasklist={item} />
                        })}
                        
                    </div>
                </div>
                
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user_id: state.user_id
    }
}

export default connect(mapStateToProps, null)(Dashboard)