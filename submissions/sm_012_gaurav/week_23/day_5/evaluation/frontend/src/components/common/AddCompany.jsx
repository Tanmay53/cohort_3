import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'

class AddCompany extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      location: '',
      message: ''
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, location} = this.state
    Axios({
      method: 'post',
      url: 'http://localhost:5000/company',
      data: {name, location},
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(res => {
      if (!res.data.error) {
        this.props.history.replace('/')
      }
      else {
        this.setState({
          name: '',
          location: '',
          message: res.data.message
        })
      }
    })
  }

  render () {
    return (
      <div className='container mx-auto mt-5'>
        <form className='col-lg-6 col-md-8 col-sm-11 col-11 mx-auto' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>
              Company Name
            </label>
            <input type='text' id='name' value={this.state.name} onChange={this.handleChange} className='form-control' required />
          </div>
          <div className='form-group'>
            <label htmlFor='location'>
              Location
            </label>
            <input type='text' id='location' value={this.state.location} onChange={this.handleChange} className='form-control' required />
          </div>
          <div className='d-flex justify-content-center'>
            <button type='submit' className='btn btn-info'>Add Company</button>
          </div>
        </form>
        {this.state.message && <h3 className='text-info text-center'>{this.state.message}</h3>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  token: state.token
})

export default connect(mapStateToProps, null)(AddCompany)
