import React from 'react'
import Axios from 'axios'

class DeleteUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      mobile: '',
      age: '',
      done: '',
      message: '',
      deletionDone: false
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

  handleClick = async () => {
    await Axios({
      method: 'DELETE',
      url: `http://127.0.0.1:5000/users/${this.props.match.params.id}`
    }).then(res => {
      this.setState({
        message: res.data.message,
        deletionDone: res.data.done
      })
    })
  }

  render () {
    if (this.state.done) {
      if (!this.state.deletionDone) {
        return (<>
            <div className='container mx-auto mt-5'>
              <table className='table table-dark col-6 mx-auto'>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{this.state.name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{this.state.email}</td>
                  </tr>
                  <tr>
                    <td>Mobile</td>
                    <td>{this.state.mobile}</td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>{this.state.age}</td>
                  </tr>
                </tbody>
              </table>
              <div className='col-6 mx-auto'>
                <button className='btn btn-danger mt-3' onClick={this.handleClick}>Delete User</button>
              </div>
            </div>
          </>)
      }
      else {
        return (
          <div className='container mx-auto mt-5'>
            <h1 className='text-center'>{this.state.message}</h1>
          </div>
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

export default DeleteUser
