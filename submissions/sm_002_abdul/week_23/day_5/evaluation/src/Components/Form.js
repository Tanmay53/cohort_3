import React from "react"
import uuid from "react-uuid"

class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentArtist : '',
      album : '',
      artist : '',
      year:'',
    }
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  addArtist = ()=>{
    this.props.addArtist(this.state.currentArtist)
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    let newSong = {
      id : uuid(),
      artist : this.state.artist,
      album : this.state.album,
      year : this.state.year
    }

    this.props.addNewSong(newSong)
  }


  render(props){
    const {artists} = this.props

    //console.log(this.state)
    return (
      <>
        <div className="row col-md-4 offset-md-4 col-sm-6 offset-sm-3">
          <input 
            type = "text"
            name = "currentArtist"
            placeholder = "Add Artist"
            className = "form-control col-8"
            value = {this.state.currentArtist}
            onChange = {this.handleChange}
            />

          <button
            className="btn btn-secondary col-4" 
            onClick={this.addArtist}>
            Add Artist
          </button>

        </div>

        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="album">Album : </label>
            <input
              className="form-control"
              placeholder="Album"
              type="text"
              id="album"
              name="album"
              value={this.state.album}
              onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="artist">Artist : </label>

            <select
              name="artist" 
              className="form-control"
              value={this.state.artist}
              onChange={this.handleChange}>
              <option value=""> -- </option>
              {artists.map((el,idx)=>(<option value={el} key={idx}>{el}</option>))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="year">Year : </label>
            <input
              name="year"
              placeholder="Enter Year"
              className="form-control" 
              type="number"
              min="1990"
              max="2020"
              id="year"
              value={this.state.year}
              onChange={this.handleChange}/>
          </div>

          <button className="btn btn-secondary" type="submit">Submit</button>

        </form>
      </>
    )
  }
}

export default Form