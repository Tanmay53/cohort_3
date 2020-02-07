import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShowUsers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      done: false,
      message: '',
      numberOfPages: '',
      usersPerPage: 5
    }
  }

  componentDidMount () {
    let url = 'http://127.0.0.1:5000/users'
    let usersPerPage = 5
    const pageNo = Number(new URLSearchParams(this.props.location.search).get('pageNo'))
    if (this.props.location.search) {
      url += this.props.location.search
      usersPerPage = Number(new URLSearchParams(this.props.location.search).get('usersPerPage'))
    }
    axios.get(url).then(res => {
      if (pageNo === res.data.numberOfPages + 1) {
        this.setState({
          message: 'OOPS!! You are on the wrong link!!!',
          done: false
        })
      }
      else {
        if (res.data.done) {
          this.setState({
            data: res.data.data,
            done: res.data.done,
            numberOfPages: res.data.numberOfPages,
            usersPerPage: usersPerPage
          })
        }
        else {
          this.setState({
            message: res.data.message,
            done: res.data.done
          })
        }
      }
    })
  }

  handleChange = async (e) => {
    await this.setState({
      [e.target.id]: Number(e.target.value)
    })
    let pageNo=''
    if (this.props.location.search) {
      const searchParams = new URLSearchParams(this.props.location.search)
      pageNo = searchParams.get('pageNo')
    }
    let browserUrl = '/users/listing'
    let apiUrl = 'http://127.0.0.1:5000/users'
    if (pageNo) {
      apiUrl += `?pageNo=${pageNo}&usersPerPage=${this.state.usersPerPage}`
      browserUrl += `?pageNo=${pageNo}&usersPerPage=${this.state.usersPerPage}`
    }
    else{
      apiUrl += `?usersPerPage=${this.state.usersPerPage}`
      browserUrl += `?usersPerPage=${this.state.usersPerPage}`
    }
    await this.props.history.push(browserUrl)
    axios.get(apiUrl).then(res => {
      if (Number(pageNo) === res.data.numberOfPages + 1) {
        this.props.history.replace(`/users/listing?usersPerPage=${this.state.usersPerPage}`)
      }
      this.setState({
        data: res.data.data,
        done: res.data.done,
        numberOfPages: res.data.numberOfPages
      })
    })
  }

  handleClick = async (e) => {
    await this.props.history.push(`/users/listing?pageNo=${e.target.value}&usersPerPage=${this.state.usersPerPage}`)
    axios.get('http://127.0.0.1:5000/users' + this.props.location.search).then(res => {
      this.setState({
        data: res.data.data,
        done: res.data.done
      })
    })
  }

  render () {
    const searchParams = new URLSearchParams(this.props.location.search)
    const usersPerPage = Number(searchParams.get('usersPerPage'))
    if (this.state.done) {
      if (this.state.data.length === 0) {
        return (
          <div className='container mx-auto mt-5'>
            <h1 className='text-center'>No Users Found</h1>
          </div>
        )
      }
      else {
        const nopArr = []
        for (let i = 1; i <= this.state.numberOfPages; i++) {
          nopArr.push(i)
        }
        return (
          <>
            <div className='container mx-auto mt-5'>
              <select className='custom-select mt-2' onChange={this.handleChange} id='usersPerPage' value={usersPerPage ? usersPerPage : 5}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
              <table className='table table-bordered table-hover mt-2'>
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
              <div className='d-flex justify-content-center'>
                {nopArr.map(e => <button className='btn btn-dark mr-1' value={e} key={e} onClick={this.handleClick}>{e}</button>)}
              </div>
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
