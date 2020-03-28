import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'

class EditJob extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      salary: '',
      openings: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  componentDidMount () {
    Axios({
      url: 'http://localhost:5000/jobs/' + this.props.match.params.jobId,
      method: 'get',
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(res => {
      if (!res.data.error) {
        this.setState({
          title: res.data.data.title,
          salary: res.data.data.salary,
          openings: res.data.data.openings
        })
      }
    })
  }

  handleUpdate = (e) => {
    e.preventDefault()
    const {title, salary, openings} = this.state
    Axios({
      url: 'http://localhost:5000/jobs/' + this.props.match.params.jobId,
      method: 'patch',
      data: {title, salary, openings},
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(res => {
      if (!res.data.error) {
        this.props.history.replace('/')
      }
    })
  }

  render () {
    return (
      <div className='container mt-5 mx-auto'>
        <form className='col-11 col-lg-6 col-md-8 col-sm-11 mx-auto' onSubmit={this.handleUpdate}>
          <div className='form-group'>
            <label htmlFor='title'>
              Title
            </label>
            <input type='text' id='title' className='form-control' onChange={this.handleChange} value={this.state.title} />
          </div>
          <div className='form-group'>
            <label htmlFor='salary'>
              Salary
            </label>
            <input type='number' id='salary' className='form-control' onChange={this.handleChange} value={this.state.salary} />
          </div>
          <div className='form-group'>
            <label htmlFor='openings'>
              Openings
            </label>
            <input type='number' id='openings' className='form-control' onChange={this.handleChange} value={this.state.openings} />
          </div>
          <div className='d-flex justify-content-center'>
            <button className='btn btn-dark' type='submit'>Update</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  token: state.token
})

export default connect(mapStateToProps, null)(EditJob)
