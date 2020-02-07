import React from 'react'
import Axios from 'axios'

class EditUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      mobile: '',
      age: '',
      done: '',
      message: '',
      notDone: false
    }
  }

  componentDidMount () {
    Axios.get(`http://127.0.0.1:5000/users/${this.props.match.params.id}`).then(res => {
      if (res.data.done) {
        this.setState({
          name: res.data.data.name,
          email: res.data.data.email,
          mobile: res.data.data.mobile,
          age: res.data.data.age,
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
      method: 'PUT',
      url: `http://127.0.0.1:5000/users/${this.props.match.params.id}`,
      data: {name: this.state.name, email: this.state.email, mobile: this.state.mobile, age: this.state.age}
    }).then(res => {
      this.setState({
        message: res.data.message,
        notDone: !res.data.done
      })
    })
    if (!this.state.notDone) {
      this.props.history.push(`/users/show/${this.props.match.params.id}`)
    }
  }

  render () {
    if (this.state.done) {
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
                  <select className='form-control' onChange={this.handleChange} value={this.state.age} id='age' required>
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
    else {
      return (
        <div className='container mx-auto mt-5'>
          <h1 className='text-center'>{this.state.message}</h1>
        </div>
      )
    }
  }
}

export default EditUser
