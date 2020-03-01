import React from 'react'
import {connect} from 'react-redux'
import {delete_task} from '../redux/Action'
import axios from 'axios'

class TaskRow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            
        }
    }

    handleClick = (tasklist_id, uuid) => {
        // console.log('delete : ', {tasklist_id, uuid})
        axios.delete('http://localhost:5000/task/delete/task', {data:{
            'uuid': uuid
        }})
        .then(res => {
            // console.log(res)
            if(res['data']['result'] === 'success') {
                console.log('works then')
                this.props.delete_task({tasklist_id, uuid})
            }
        })

        
    } 

    render() {
        return (
            <tr>
                <td>{this.props.index}.</td>
                <td>{this.props.task.name}</td>
                <td className='text-right'>
                    <button onClick={() => this.handleClick(this.props.tasklist_id, this.props.task.uuid)} className='btn btn-sm btn-primary'>
                        <i class="fa fa-minus" style={{"font-size":"15px"}} aria-hidden="true"></i>
                    </button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete_task: (data) => dispatch(delete_task(data))
    }
}

export default connect(null, mapDispatchToProps)(TaskRow)