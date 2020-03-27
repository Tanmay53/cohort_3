import React, { Component } from 'react'
import { addArtist } from '../redux/user/action'
import { connect } from 'react-redux'

export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      artistInput: ''
    }
  }

  handleInput = e => {

    this.setState({ [e.target.name]: e.target.value })

  }

  addArtistBtn = () => {
    const { addArtist } = this.props
    addArtist(this.state.artistInput)
  }

  render() {
    return (
      <div className='container'>
        <div className="form-group">
          <p className="lead font-weight-bold">Add Artist</p>
          <input type="text" placeholder='Add Artist Name' id='artist' name='artistInput' value={this.artistInput} onChange={this.handleInput} className='form-control' />
          <button className='btn btn-primary btn-block' onClick={this.addArtistBtn}>Add Artist</button>
        </div>

        <div className="form-group">
          <p className="lead font-weight-bold">Add Album</p>
          <select name="" id="" className='form-control'>
            <option value="">Select Artist</option>
          </select>
          <input type="text" placeholder='Add Album' className='form-control' />
          <button className='btn btn-primary btn-block'>Add Album</button>

        </div>

        <p className="lead font-weight-bold">Filter</p>
        <div className="row">
          <select name="" id="" className='form-control'>
            <option value="">Artist</option>
          </select>
          <select name="" id="" className='form-control'>
            <option value="">Year</option>
          </select>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div >

    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
  addArtist: payload => dispatch(addArtist(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
