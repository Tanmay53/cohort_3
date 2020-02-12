import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShowUsers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      done: false,
      message: ''
    }
  }

  componentDidMount () {
    axios.get('http://127.0.0.1:5000/users').then(res => {
      if (res.data.done) {
        this.setState({
          data: res.data.data,
          done: res.data.done
        })
      }
      else {
        this.setState({
          message: res.data.message,
          done: res.data.done
        })
      }
    })
  }

  render () {
    if (this.state.done) {
      if (this.state.data.length === 0) {
        return (
          <div className='container mx-auto mt-5'>
            <h1 className='text-center'>No Users Found</h1>
          </div>
        )
      }
      else {
        return (
          <>
            <div className='container mx-auto mt-5'>
              <table className='table table-bordered table-hover'>
                <thead className='thead-dark'>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((el, i) => <TableRow obj={el} key={i} />)}
                </tbody>
              </table>
            </div>
          </>
        )
      }
    }
    else {
      return (
        <div className='container mx-auto mt-5'>
          <h1 className='text-center'>{this.state.message}</h1>
        </div>
      )
    }
  }
}

const TableRow = (props) => {
  return (
    <>
      <tr>
        <td><Link to={`/users/show/${props.obj.id}`}>{props.obj.id}</Link></td>
        <td>{props.obj.name}</td>
        <td>{props.obj.email}</td>
        <td>{props.obj.mobile}</td>
        <td>{props.obj.age}</td>
        <td><Link to={`/users/edit/${props.obj.id}`}><button className='btn btn-success'>Edit</button></Link></td>
        <td><Link to={`/users/delete/${props.obj.id}`}><button className='btn btn-danger'>Delete</button></Link></td>
      </tr>
    </>
  )
}

export default ShowUsers