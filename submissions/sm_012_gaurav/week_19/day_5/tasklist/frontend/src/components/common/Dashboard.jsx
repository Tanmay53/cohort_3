import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tasklists: [],
      message: '',
      update: false
    }
  }

  componentDidMount () {
    const token = localStorage.getItem('token')
    axios({
      method: 'get',
      url: 'http://localhost:5000/tasklist',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (!res.data.error) {
        this.setState({
          tasklists: res.data.data
        }, () => {
          if (this.state.tasklists.length === 0) {
            this.setState({
              message: 'No Tasklist Added Yet. Please Add a Tasklist'
            })
          }
        })
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.update !== this.state.update) {
      const token = localStorage.getItem('token')
    axios({
      method: 'get',
      url: 'http://localhost:5000/tasklist',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (!res.data.error) {
        this.setState({
          tasklists: res.data.data
        }, () => {
          if (this.state.tasklists.length === 0) {
            this.setState({
              message: 'No Tasklist Added Yet. Please Add a Tasklist'
            })
          }
        })
      }
    })
    }
  }

  handleDelete = (tlId) => {
    const token = localStorage.getItem('token')
    axios({
      method: 'delete',
      url: 'http://localhost:5000/tasklist/' + tlId,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (!res.data.error) {
        this.setState(state => {
          return {
            update: !state.update
          }
        })
      }
    })
  }

  render () {
    return (
      <div className='container mx-auto mt-5'>
        {this.state.message && <h3 className='text-center text-dark'>{this.state.message}</h3>}
        {this.state.tasklists.length > 0 &&
          <div className='col-8 mx-auto'>
            <table className='table table-dark table-bordered table-hover shadow-lg'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>List Name</th>
                  <th>Tasks</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasklists.map((e, i) => <TableRow obj={e} key={i + 1} idx={i + 1} handleDelete={this.handleDelete} />)}
              </tbody>
            </table>
          </div>}
      </div>
    )
  }
}

const TableRow = props => {
  return (
    <tr>
      <td>{props.idx}</td>
      <td><Link to={`/tasklist/${props.obj.tasklistId}`} className='text-white'>{props.obj.tlname}</Link></td>
      <td>{props.obj.task_cnt}</td>
      <td><button className='btn btn-danger' onClick={() => props.handleDelete(props.obj.tasklistId)}>Delete</button></td>
    </tr>
  )
}

export default Dashboard
