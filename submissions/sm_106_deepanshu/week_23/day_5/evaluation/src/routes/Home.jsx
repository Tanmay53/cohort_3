import React, { Component } from 'react'
import { addArtist, addAlbum, editAlbum, deleteAlbum } from '../redux/user/action'
import { connect } from 'react-redux'
import uniqid from 'uniqid'

export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      artistInput: '',
      getArtist: '',
      getAlbum: '',
      getAlbumYear: '',
      EditAlbumName: '',
      EditAlbumYear: '',
      EditAlbumUniq: ''

    }
  }

  handleInput = e => {

    this.setState({ [e.target.name]: e.target.value })

  }

  addArtistBtn = () => {
    const { addArtist } = this.props
    addArtist(this.state.artistInput)
  }

  addAlbumBtn = () => {
    const { addAlbum } = this.props
    let album = {
      artistName: this.state.getArtist,
      albumName: this.state.getAlbum,
      getAlbumYear: this.state.getAlbumYear,
      uniqid: uniqid()
    }
    addAlbum(album)
  }

  editAlbum = (elem) => {
    this.setState({
      EditAlbumUniq: elem.uniqid,
      EditAlbumName: elem.albumName,
      EditAlbumYear: elem.getAlbumYear
    })

  }
  edit = () => {
    const { editAlbum } = this.props
    let obj = {
      newAlbumName: this.state.EditAlbumName,
      newAlbumYear: this.state.EditAlbumYear,
      uniqid: this.state.EditAlbumUniq
    }
    editAlbum(obj)
  }

  delete = (id) => {
    const { deleteAlbum } = this.props
    console.log('delete')
    console.log(id)
    deleteAlbum(id)
  }

  editMode = () => {
    return (<div className="form-group">
      <p className="lead font-weight-bold">Edit Album</p>
      <input type="text" placeholder='Edit Album' className='form-control' name='EditAlbumName' value={this.state.EditAlbumName} onChange={this.handleInput} />
      <input type="text" placeholder='Edit Year' className='form-control' name='EditAlbumYear' value={this.state.EditAlbumYear} onChange={this.handleInput} />
      <button className='btn btn-primary btn-block' onClick={this.edit}>Edit Album</button>

    </div>)
  }
  render() {
    const { artist, album } = this.props
    return (
      <div className='container'>
        <div className="form-group">
          <p className="lead font-weight-bold">Add Artist</p>
          <input type="text" placeholder='Add Artist Name' id='artist' name='artistInput' value={this.artistInput} onChange={this.handleInput} className='form-control' />
          <button className='btn btn-primary btn-block' onClick={this.addArtistBtn}>Add Artist</button>
        </div>

        <div className="form-group">
          <p className="lead font-weight-bold">Add Album</p>
          <select name="" id="" className='form-control' name='getArtist' onChange={this.handleInput}>
            {artist.map(elem => {
              console.log(elem)
              return <option value={elem}>{elem}</option>
            })}
          </select>
          <input type="text" placeholder='Add Album' className='form-control' name='getAlbum' onChange={this.handleInput} />
          <input type="text" placeholder='Add Year' className='form-control' name='getAlbumYear' onChange={this.handleInput} />
          <button className='btn btn-primary btn-block' onClick={this.addAlbumBtn}>Add Album</button>

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
              <th scope="col">Id</th>
              <th scope="col">Artist</th>
              <th scope="col">Album</th>
              <th scope="col">Year</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {album.map((elem, i) => {
              return <tr key={elem.uniqid}>
                <th scope="row">{i + 1}</th>
                <td>{elem.artistName}</td>
                <td>{elem.albumName}</td>
                <td>{elem.getAlbumYear}</td>
                <td><button className='btn btn-success' onClick={() => this.editAlbum(elem)}>edit</button></td>
                <td><button className='btn btn-danger' onClick={() => this.delete(elem.uniqid)}>delete</button></td>
              </tr>
            })}
          </tbody>
        </table>
        <this.editMode />

      </div >

    )
  }
}

const mapStateToProps = (state) => ({
  artist: state.userReducer.artist,
  album: state.userReducer.album
})

const mapDispatchToProps = dispatch => ({
  addArtist: payload => dispatch(addArtist(payload)),
  addAlbum: payload => dispatch(addAlbum(payload)),
  editAlbum: payload => dispatch(editAlbum(payload)),
  deleteAlbum: payload => dispatch(deleteAlbum(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
