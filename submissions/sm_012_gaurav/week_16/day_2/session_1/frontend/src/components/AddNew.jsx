import React from 'react'
import Axios from 'axios'

class AddNew extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      mobile: '',
      age: '',
      notDone: false,
      message: ''
    }
  }

  handleChange = (e) => {
    let name = e.target.id
    if (name === 'age' || name === 'mobile') {
      this.setState({
        [name]: Number(e.target.value)
      })
    }
    else {
      this.setState({
        [name]: e.target.value
      })
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await Axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000/users',
      data: this.state
    }).then(res => {
      this.setState({
        message: res.data.message,
        notDone: !res.data.done
      })
    })
    if (!this.state.notDone) {
      this.props.history.push('/')
    }
  }

  render () {
    const ageArr = []
    for (let i = 20; i <= 100; i++ ) {
      ageArr.push(i)
    }
    return (
      <>
        <div className='container mx-auto mt-5'>
          <div className='col-6 mx-auto'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control' value={this.state.name} id='name' onChange={this.handleChange} required />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' className='form-control' value={this.state.email} id='email' onChange={this.handleChange} required />
              </div>
              <div className='form-group'>
                <label htmlFor='mobile'>Mobile</label>
                <input type='number' className='form-control' value={this.state.mobile} id='mobile' onChange={this.handleChange} required />
              </div>
              <div className='form-group'>
                <label htmlFor='age'>Age</label>
                <select className='form-control' onChange={this.handleChange} id='age' required>
                  <option value=''>Select Age</option>
                  {ageArr.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
              <button type='submit' className='btn btn-success'>Add User</button>
            </form>
          </div>
          {this.state.notDone && <h1 className='text-center'>{this.state.message}</h1>}
        </div>
      </>
    )
  }
}

export default AddNew
