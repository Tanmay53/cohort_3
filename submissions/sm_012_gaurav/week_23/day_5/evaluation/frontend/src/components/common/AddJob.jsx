import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'

class AddJob extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      salary: '',
      openings: '',
      companyId: '',
      companies: [],
      message: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  componentDidMount () {
    Axios({
      method: 'GET',
      url: 'http://localhost:5000/company',
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(res => {
      if (!res.data.error) {
        this.setState({
          companies: res.data.data
        })
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {title, salary, openings, companyId} = this.state
    Axios({
      method: 'POST',
      url: 'http://localhost:5000/jobs',
      data: {title, salary, openings, companyId},
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(res => {
      if (!res.data.error) {
        this.props.history.replace('/')
      }
      else {
        this.setState({
          message: res.data.message
        })
      }
    })
  }

  render () {
    return (
      <div className='container mt-5 mx-auto justify-content-center'>
        <form className='col-lg-6 col-md-8 col-sm-11 col-11 mx-auto' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>
              Title
            </label>
            <input type='text' id='title' value={this.state.title} onChange={this.handleChange} className='form-control' required />
          </div>
          <div className='form-group'>
            <label htmlFor='salary'>
              Salary
            </label>
            <input type='number' id='salary' value={this.state.salary} onChange={this.handleChange} className='form-control' required />
          </div>
          <div className='form-group'>
            <label htmlFor='openings'>
              Openings
            </label>
            <input type='number' id='openings' value={this.state.openings} onChange={this.handleChange} className='form-control' required />
          </div>
          <select className='custom-select' onChange={this.handleChange} id='companyId' required>
            <option value=''>Select Company</option>
              {this.state.companies && this.state.companies.map((e, i) => <option key={i} value={e.id}>{e.name + ' ' + e.location}</option>)}
          </select>
          <div className='d-flex justify-content-center'>
            <button type='submit' className='btn btn-info mt-2'>Add Job</button>
          </div>
        </form>
        {this.state.message && <h3 className='text-center text-info'>{this.state.message}</h3>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  token: state.token
})

export default connect(mapStateToProps, null)(AddJob)
