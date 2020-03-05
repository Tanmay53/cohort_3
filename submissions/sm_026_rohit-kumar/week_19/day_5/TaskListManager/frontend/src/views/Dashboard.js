import React from 'react'
import TaskList from '../components/TaskList'
import uuid from 'react-uuid'
import axios from 'axios'
import {connect} from 'react-redux'
import {add_tasklist} from '../redux/Action'
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    createNewTaskList = () => {
        const url = 'http://localhost:5000/task/create'
        const data = {  'user_id': this.props.user_id || 4,
                        'uuid': uuid(),
                        'name': 'Title for your tasklist goes here.',
                        'desc': 'Mention the purpose you want to achieve through this task list. Mention the objective of the list creation.',
                        'tasks':[]
                    }
        axios.post(url, data)
                .then(res => {
                    console.log(res)
                    const last_id = Number(res['data']['data']['last_id'])
                    data['tasklist_id'] = last_id
                    this.props.add_tasklist(data)
                })
                .catch(err => {
                    console.log(err)
                })

    }

    handleClick = () => {
        this.createNewTaskList()
    }

    processAndLoad(arr) {
        for(let i = 0; i < arr.length; i++) {
            let new_data = {  
                            'user_id': this.props.user_id,
                            'tasklist_id':arr[i]['tasklist_id'],
                            'uuid': arr[i]['tl_uuid'],
                            'name': arr[i]['tl_name'],
                            'desc': arr[i]['desc'],
                            'tasks':[]
                    }
                    if (arr[i]['t_name'] != null) {
                        let task_names = arr[i]['t_name'].split(';;;')
                        let task_uuid  = arr[i]['uuid'].split(';;;')
                        for(let j = 0; j < task_names.length; j++) {
                            new_data['tasks'].push({'name': task_names[j], 'uuid': task_uuid[j]})
                        }
                    }
                    this.props.add_tasklist(new_data)
        }
        
    }

    componentDidMount = () => {
        // load all tasklist for user from the database
        const url = 'http://localhost:5000/task/select/tasklist'
        const data = {
            "user_id": this.props.user_id
        }

        axios.post(url, data)
        .then(res => {
            console.log(res['data']['data'])
            if(res['data']['result'] === 'success')
                this.processAndLoad(res['data']['data'])
        })
        .catch(err => console.log(err))
    }



    render() {
        // if user is not logged in redirect to login page
        if(this.props.isLoggedIn === false) {
            return <Redirect to="/login" />
        }

        return (
            <>
                <div className='row'>
                    <div className='col-md-8'>
                        <input type='text' className='form-control'></input>                        
                    </div>
                    <div className='col-md-1'>
                        <button onClick={prompt('Enter value')} className='btn btn-primary'>
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
                        {this.props.tasklists.length == 0 &&
                            <h5>No Tasklist Available.</h5>
                        }
                        {this.props.tasklists.map((item) => {
                            return <TaskList key={uuid()} tasklist={item} />
                        })}
                        
                    </div>
                </div>
                
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.isLoggedIn,
        user_id: state.login.data.user_id,
        tasklists: state.tasklist.tasklists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_tasklist: (data) => dispatch(add_tasklist(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)