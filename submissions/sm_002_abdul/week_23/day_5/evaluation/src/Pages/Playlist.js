import React from "react"
import Form from "../Components/Form"
import Table from '../Components/Table'


if (localStorage.getItem("artists")===null){
  localStorage.setItem("artists",JSON.stringify([]))
}

if (localStorage.getItem("playlist")===null){
  localStorage.setItem("playlist",JSON.stringify([]))
}

class Playlist extends React.Component{
  constructor(){
    super()
    this.state = {
      artists : [],
      playlist : []
    }
  }

  componentDidMount(){
    let artists = JSON.parse(localStorage.getItem('artists'))

    let playlist = JSON.parse(localStorage.getItem('playlist'))

    //console.log(artists)

    if (artists.length>0){
      this.setState({
        artists : [...artists]
      })
    }

    if (playlist.length>0){
      this.setState({
        playlist : [...playlist]
      })
    }

  }

  addArtist = (artist) =>{
    let updatedArtistsList = [...this.state.artists,artist]

    this.setState({
      artists : updatedArtistsList
    })

    localStorage.setItem("artists",JSON.stringify(updatedArtistsList))
  }

  addNewSong = (newSong) =>{
    let updatedPlaylist = [...this.state.playlist,newSong]

    this.setState({
      playlist : updatedPlaylist
    })

    localStorage.setItem("playlist",JSON.stringify(updatedPlaylist))
  }

  editDataSubmit = ( id, updatedAlbum, updatedYear )=>{
    
    console.log('playlist editDataSubmit parameter',id,updatedAlbum,updatedYear)

    let editedData = this.state.playlist.map(el=>{
      
      if (el.id === id){
        el.album = updatedAlbum;
        el.year = updatedYear
      }
      return el
    })

     console.log("edited data", editedData)

    this.setState({
      playlist : editedData
    })

    localStorage.setItem('playlist',JSON.stringify(editedData))
  }

  deleteData = (id) =>{
    let dataAfterDeletion = this.state.playlist.filter(el=>{
      return el.id!==id
    })

    this.setState({
      playlist:dataAfterDeletion
    })

    localStorage.setItem('playlist',JSON.stringify(dataAfterDeletion))
  }


  render(){
    console.log("playlist", this.state)
    return (
      <>
        <Form
          artists={this.state.artists}
          addArtist = {this.addArtist}
          addNewSong = {this.addNewSong}/>

        <Table
          playlist={this.state.playlist}
          editDataSubmit={this.editDataSubmit}
          deleteData={this.deleteData}/>
      </>
    )
  }
}

export default Playlist